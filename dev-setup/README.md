<!--
  SPDX-FileCopyrightText: 2026 Ingenieurbüro Leimkühler GmbH
  SPDX-License-Identifier: AGPL-3.0-or-later
-->

> **Hinweis:** Diese Datei ist die veröffentlichte, bereinigte Fassung der
> Notizen zur Testumgebung. Interne Adressen und Hostnamen sind durch
> Platzhalter (`<DEV_HOST>`, `<ADMIN_HOST>`, `<PROD_CONTAINER>`) ersetzt; die
> Fassung mit den echten Werten liegt lokal auf dem Testgerät.

# Nextcloud Dev-Notebook (<DEV_HOST>)

Setup für die Nextcloud-App-Entwicklung. Aufgesetzt am 19.08.2026 von <ADMIN>.

## Was läuft

| Dienst | Detail |
|--------|--------|
| Nextcloud | 34.0.3 (Image `nextcloud:34`), Docker, Port **8080** → http://<DEV_HOST>:8080 |
| PostgreSQL 17 | Container `nextcloud-dev-db` |
| Redis 7 | Container `nextcloud-dev-redis` (Caching) |
| Node.js 22 + npm 10 | global, für Claude Code |
| Claude Code | v2.1.235, binary in `~/.npm-global/bin/claude` |
| RechnungsWerk | 0.5.0, Fork `mbeckergmh/rechnungswerk` (Upstream `cpcMomentum/rechnungswerk`) |
| Deck / Analytics | 1.18.3 / 6.7.2, aus dem App Store installiert |

Admin-Login: User `admin`; Zugangsdaten stehen in der lokalen `.env` (siehe `.env.example`) und gehören **nicht** ins Repo.

## Verwalten

```bash
cd ~/nextcloud-dev
docker compose ps          # Status
docker compose logs -f     # Logs
docker compose restart     # Neustart
docker compose down        # Stoppt alles (Daten bleiben in Volumes)
docker compose up -d       # Startet alles
```

Daten: Docker-Volumes `nextcloud-dev_nc_data` (Nextcloud) und `nextcloud-dev_db_data` (DB).

## App-Entwicklung

App-Quelle liegt in:

```
~/nextcloud-dev/custom_apps/<app-name>/
```

Es gibt schon eine lauffähige Beispiel-App `studentapp`:

```
studentapp/
├── appinfo/
│   ├── info.xml          # App-Metadaten (id, name, version, Abhängigkeiten)
│   └── routes.php        # URL-Routen
└── lib/
    ├── AppInfo/
    │   └── Application.php
    └── Controller/
        └── HelloController.php
```

Test-Endpoint (läuft, HTTP 200):

```
http://<DEV_HOST>:8080/apps/studentapp/hello
→ {"ok":true,"message":"StudentApp is alive. ..."}
```

### Neue App anlegen

```bash
cd ~/nextcloud-dev/custom_apps
cp -r studentapp meineapp
# in appinfo/info.xml: id + namespace auf MeineApp ändern
# danach:
docker exec -w /var/www/html nextcloud-dev su -s /bin/bash www-data -c "php occ app:enable meineapp"
```

### App neu laden nach Codeänderungen

```bash
docker exec -w /var/www/html nextcloud-dev su -s /bin/bash www-data -c "php occ cache:clear"
```

Für Cache-Probleme: `docker compose restart nextcloud`

### occ-Befehle

```bash
docker exec -w /var/www/html nextcloud-dev su -s /bin/bash www-data -c "php occ <befehl>"
```

Nützlich: `app:list`, `app:enable`, `app:disable`, `app:install <id>` (App Store), `user:add`, `config:list`

### RechnungsWerk (cpcMomentum/rechnungswerk)

- Quelle: `~/nextcloud-dev/custom_apps/rechnungswerk`, App-ID = Ordnername (kein Symlink nötig)
- Git-Remotes: `origin` = eigener Fork `github.com/mbeckergmh/rechnungswerk`, `upstream` = `cpcMomentum/rechnungswerk`. Branch `main` trackt `origin/main`; Updates von cpcMomentum holen mit `git fetch upstream && git merge upstream/main`.
- Feature-Branches: `feat/mahnstufe` (Mahnstufe, OCS-API + täglicher Mahnlauf-Vorschlag per Nextcloud-Notification — läuft komplett in RechnungsWerk selbst, siehe Architektur-Entscheidung unten)
- **Architektur-Entscheidung (19.08.2026):** Mahnwesen wurde bewusst NICHT in eine externe Hub-App ausgelagert, sondern lebt vollständig in RechnungsWerk (Auftragswesen-Kernlogik gehört zur Rechnungs-App, nicht zur Integrationsschicht). Ein Hub bleibt nur für echte Cross-App-Themen sinnvoll: Deck (Terminplanung), WorkTime/Zeitwerk (Zeiterfassung), Analytics (Controlling).
- Nach Codeänderungen: `occ app:disable rechnungswerk && occ app:enable rechnungswerk` (führt neue Migrationen aus). **`occ cache:clear` gibt es in NC 34 nicht** (der Befehl existiert nicht mehr).
- ⚠️ **Neue Routen in `appinfo/routes.php` brauchen einen Container-Neustart** (`docker compose restart nextcloud`) — `app:disable`/`app:enable` allein reicht nicht, die alte Route-Tabelle bleibt sonst im Cache und die neue Route liefert 404 (HTML statt JSON). Erkennungsmerkmal: bestehende Routen antworten auf einen Test per Basic-Auth mit `412 CSRF check failed` (= Route aufgelöst), eine nicht registrierte mit `404`.
- **Session-Routen per curl testen** (also das, was die Vue-UI tut — Basic-Auth reicht dafür *nicht*, auch nicht mit App-Passwort: `412 CSRF check failed`):
  ```bash
  H=http://<DEV_HOST>:8080          # nicht localhost! Cookies gelten für OVERWRITEHOST
  T=$(curl -s -c /tmp/cj -o - "$H/login" | grep -oP 'data-requesttoken="\K[^"]+' | head -1)
  curl -s -b /tmp/cj -c /tmp/cj -X POST "$H/login" -H "Origin: $H" \
    --data-urlencode "user=admin" --data-urlencode "password=$ADMIN_PASSWORD" \
    --data-urlencode "requesttoken=$T"          # -> 303 auf /apps/dashboard/ = erfolgreich
  A=$(curl -s -b /tmp/cj -c /tmp/cj "$H/index.php/apps/rechnungswerk/" | grep -oP 'data-requesttoken="\K[^"]+' | head -1)
  curl -s -b /tmp/cj -H "requesttoken: $A" "$H/index.php/apps/rechnungswerk/api/v1/invoices"
  ```
  ⚠️ Der **`Origin`-Header ist Pflicht** (NC 34, `LoginController` Zeile ~309): fehlt er, schlägt der Login mit Redirect auf `/login?direct=1&user=…` fehl — sieht wie ein falsches Passwort aus, ist aber die Trusted-Origin-Prüfung. Erkennungsmerkmal: `occ security:bruteforce:attempts <ip>` zeigt **0** Versuche, weil ohne gültige Origin gar nicht erst gedrosselt wird.
- ⚠️ **Frontend-Änderungen sind nach `npm run build` im Browser nicht sichtbar.** Nextcloud liefert `js/`+`css/` mit `Cache-Control: max-age=15778463, immutable` aus und hängt als Cache-Buster `?v=<hash>` an, der aus den **App-Versionen** gebildet wird. Solange `<version>` in `appinfo/info.xml` gleich bleibt, ändert sich die URL nicht — und `immutable` heißt: der Browser fragt nicht einmal nach. Auch `docker compose restart` und `app:disable/enable` ändern daran nichts, weil das Problem im Browser sitzt, nicht auf dem Server.
  - Beim Entwickeln: **hartes Neuladen** (`Strg`+`Umschalt`+`R`) oder Devtools mit „Cache deaktivieren“ offen lassen.
  - Beim Ausliefern: `<version>` in `appinfo/info.xml` hochzählen — dann bekommen alle Browser den neuen Stand von selbst.
  - Gegenprobe, ob es wirklich der Cache ist: `curl -s "$H/custom_apps/rechnungswerk/js/rechnungswerk-main.mjs?v=…" | grep -c NeuerText` — liefert der Server den neuen Stand, liegt es am Browser.
- **Frontend:** `npm ci` einmalig, danach `npm run build` (schreibt nach `js/`+`css/`, beide sind eingecheckt). Prüfen mit `npm run typecheck`, `npm run lint`, `npm run test`.
- ⚠️ **Spaltennamen in Migrationen:** Nextclouds `Entity` leitet den Spaltennamen aus dem Property-Namen ab, indem es nur vor **Großbuchstaben** einen Unterstrich setzt. `dunningFee2Cents` wird also zu `dunning_fee2_cents` — **nicht** `dunning_fee_2_cents`. Bei Ziffern im Namen leicht falsch zu raten; der Fehler fällt erst beim Schreiben auf (`SQLSTATE[42703] Undefined column`), nicht in Unit-Tests mit gemocktem Mapper. Gegenprobe: `\d oc_rechnungswerk_settings` nach der Migration.
- **Migration erneut ausführen** (nur Dev, bei noch nicht veröffentlichten Migrationen): Spalte(n) per SQL droppen, dann `DELETE FROM oc_migrations WHERE app='rechnungswerk' AND version='002200Date20260820060000';` — Achtung, der Versionsstring hat **führende Nullen**; danach `occ app:disable && occ app:enable`.
- ⚠️ Die App hat einen **l10n-Vollständigkeitstest** (`src/utils/l10nCompleteness.spec.ts`): jeder neue `t('rechnungswerk', '…')`-Text UND jeder neue `$this->l10n->t()`-Text im PHP muss in **alle vier** Dateien `l10n/{de,en}.{js,json}` eingetragen werden, sonst schlägt `npm run test` fehl. Reine Symbole (z. B. „–“) gehören nicht durch `t()`.
- Composer liegt nicht auf dem Host, nur im Container: `~/nextcloud-dev/custom_apps/composer.phar` (bewusst eine Ebene über der App, damit es nicht im Git-Repo landet) + `docker exec -w /var/www/html/custom_apps/rechnungswerk nextcloud-dev php /var/www/html/custom_apps/composer.phar <befehl>`
- **PHPUnit:** `docker exec -w /var/www/html/custom_apps/rechnungswerk nextcloud-dev php vendor/bin/phpunit -c tests/phpunit.xml`
- ⚠️ **Falle:** `composer install` OHNE `--no-dev` zieht `phpunit`/`nextcloud/ocp`/`doctrine/dbal` (alles `require-dev`) ins selbe `vendor/`, das `Application.php` beim App-Boot *immer* automatisch lädt — kollidiert mit dem in Nextcloud gebündelten DBAL (`Undefined constant Types::NUMBER`), `occ app:enable` bricht ab. Für Tests **temporär** mit vollem `composer install` arbeiten, danach zwingend `rm -rf vendor && composer install --no-dev` bevor die App wieder live läuft.

### Wichtige Details / Stolpersteine

- **App Store Installation** (`occ app:install ...`): braucht `appstoreenabled=true` (gesetzt) und Schreibrecht von www-data (uid 33) auf `custom_apps`. `custom_apps` bleibt im Eigentum von markus; www-data hat Schreibrechte per **ACL** (`setfacl -R -m u:33:rwX`). Bei Neuinstallation/Restore: ACLs neu setzen.
- **Postgres-Version:** Dev-DB ist 17 (entspricht Prod-Nextcloud auf <PROD_CONTAINER>, `<PROD_STACK>` mit `postgres:17-alpine`). Beim Wechsel der Postgres-Majorversion: `docker compose down -v` + `up -d` (DB-Daten gehen verloren, Dev-Instanz ist dafür da) und danach alle Apps mit `occ app:enable` neu registrieren (die DB hält die App-Registrierungen, nicht der Mount).
- **Nextcloud-Version:** Prod <PROD_CONTAINER> = 34.0.2, Dev = 34.0.3 (Rolling-Tag `nextcloud:34`). Für App-Dev identisch genug.

## Claude Code

```bash
claude            # starten (im Projektordner)
```

**Erster Lauf:** Claude Code will ein Backend. Optionen:

1. **Anthropic API-Key** (empfohlen): `export ANTHROPIC_API_KEY=sk-ant-...` setzen (ideal: in `~/.bashrc`), dann `claude` starten und einmalig `claude /login` bzw. den Prompt folgen.
2. **Eigener Endpoint** (z. B. internes Gateway): `ANTHROPIC_BASE_URL` auf das Gateway zeigen + dazugehöriger Key.

Empfehlung für die Arbeit: Claude Code im Ordner `~/nextcloud-dev/custom_apps/<app>` starten, dann hat es die App-Dateien direkt im Kontext.

### Wichtige Referenzen für die App-Entwicklung

- OCP-Doku: https://docs.nextcloud.com/server/latest/developer_manual/digging_deeper/namespace.html
- App-Struktur: https://docs.nextcloud.com/server/latest/developer_manual/app_development_apps.html
- API-Referenz: https://developer.nextcloud.com/api/


## Hinweise

- Nextcloud 34 = gleiche Version wie die produktive <PROD_CONTAINER> (34.0.2/34.0.3)
- `custom_apps/` ist als bind-mount angelegt: Änderungen am Host-Dateisystem landen direkt im Container
- Bei Reboot des Notebooks: `docker compose up -d` in `~/nextcloud-dev` (Containers haben restart: unless-stopped, starten also normalerweise automatisch)
