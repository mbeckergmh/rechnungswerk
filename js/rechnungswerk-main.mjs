import { $t as e, At as t, Cn as n, Ct as r, D as i, Dt as a, Et as o, Ft as s, Gt as c, Ht as l, It as u, Jt as d, L as f, Lt as p, Mt as m, Nt as h, Ot as g, P as _, Qt as v, Sn as y, T as b, Tt as ee, Ut as x, Vt as S, Wt as te, Xt as ne, Yt as C, Zt as w, _n as re, _t as T, an as E, at as D, bn as O, bt as k, cn as A, ct as j, dn as M, dt as N, en as P, et as F, f as ie, fn as ae, gt as I, h as L, hn as oe, ht as R, i as z, in as se, it as ce, jt as B, k as le, kt as V, ln as ue, m as de, mn as fe, mt as H, on as U, ot as pe, p as me, qt as he, r as ge, rn as _e, rt as ve, s as ye, sn as be, st as xe, t as Se, tn as W, ut as G, v as Ce, vt as K, wt as we, xn as Te, xt as q, yn as J, yt as Ee, zt as De } from "./createElementId-DhjFt1I9-C3zSrX7C.chunk.mjs";
import { b as Oe, f as ke, g as Ae, h as je, m as Me, n as Ne, p as Pe, r as Fe, t as Ie, u as Le, y as Re } from "./NcPopover-B87bEPLq-Bfc7fZbF.chunk.mjs";
import { A as ze, B as Be, D as Ve, E as Y, F as He, H as Ue, I as We, L as Ge, M as Ke, N as qe, O as X, P as Je, R as Ye, T as Xe, V as Ze, a as Qe, b as $e, j as et, k as tt, x as nt, z as rt } from "./mdi-CpchYUUV-BlQjFBKG.chunk.mjs";
import { _ as it, b as at, f as ot, g as st, n as ct, p as lt, t as ut, v as dt, w as ft, y as pt } from "./chunks-tk4b0tDJ.chunk.mjs";
import { n as mt, r as ht, t as gt } from "./NcSelect--kERLlBK-CgY601vH.chunk.mjs";
import { a as _t, i as vt, n as yt, o as bt, t as xt } from "./NcActions-BW7oJgs-.chunk.mjs";
import { t as St } from "./NcLoadingIcon-BOVpFVQz-B0B1cMOR.chunk.mjs";
import { t as Ct } from "./NcCheckboxRadioSwitch-b1krvMyn.chunk.mjs";
import "./NcSelect-_-6PKSP3.chunk.mjs";
import { n as wt } from "./NcColorPicker-Bn1Xhz-9.chunk.mjs";
//#region node_modules/pinia/dist/pinia.js
var Tt = typeof window < "u", Et, Dt = (e) => Et = e, Ot = Symbol();
function kt(e) {
	return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var At = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null };
function jt(e, { autoBom: t = !1 } = {}) {
	return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["﻿", e], { type: e.type }) : e;
}
function Mt(e, t, n) {
	let r = new XMLHttpRequest();
	r.open("GET", e), r.responseType = "blob", r.onload = function() {
		Lt(r.response, t, n);
	}, r.onerror = function() {
		console.error("could not download file");
	}, r.send();
}
function Nt(e) {
	let t = new XMLHttpRequest();
	t.open("HEAD", e, !1);
	try {
		t.send();
	} catch {}
	return t.status >= 200 && t.status <= 299;
}
function Pt(e) {
	try {
		e.dispatchEvent(new MouseEvent("click"));
	} catch {
		let t = new MouseEvent("click", {
			bubbles: !0,
			cancelable: !0,
			view: window,
			detail: 0,
			screenX: 80,
			screenY: 20,
			clientX: 80,
			clientY: 20,
			ctrlKey: !1,
			altKey: !1,
			shiftKey: !1,
			metaKey: !1,
			button: 0,
			relatedTarget: null
		});
		e.dispatchEvent(t);
	}
}
var Ft = typeof navigator == "object" ? navigator : { userAgent: "" }, It = /Macintosh/.test(Ft.userAgent) && /AppleWebKit/.test(Ft.userAgent) && !/Safari/.test(Ft.userAgent), Lt = Tt ? typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !It ? Rt : "msSaveOrOpenBlob" in Ft ? zt : Bt : () => {};
function Rt(e, t = "download", n) {
	let r = document.createElement("a");
	r.download = t, r.rel = "noopener", typeof e == "string" ? (r.href = e, r.origin === location.origin ? Pt(r) : Nt(r.href) ? Mt(e, t, n) : (r.target = "_blank", Pt(r))) : (r.href = URL.createObjectURL(e), setTimeout(function() {
		URL.revokeObjectURL(r.href);
	}, 4e4), setTimeout(function() {
		Pt(r);
	}, 0));
}
function zt(e, t = "download", n) {
	if (typeof e == "string") {
		if (Nt(e)) Mt(e, t, n);
		else {
			let t = document.createElement("a");
			t.href = e, t.target = "_blank", setTimeout(function() {
				Pt(t);
			});
		}
	} else navigator.msSaveOrOpenBlob(jt(e, n), t);
}
function Bt(e, t, n, r) {
	if (r ||= open("", "_blank"), r && (r.document.title = r.document.body.innerText = "downloading..."), typeof e == "string") return Mt(e, t, n);
	let i = e.type === "application/octet-stream", a = /constructor/i.test(String(At.HTMLElement)) || "safari" in At, o = /CriOS\/[\d]+/.test(navigator.userAgent);
	if ((o || i && a || It) && typeof FileReader < "u") {
		let t = new FileReader();
		t.onloadend = function() {
			let e = t.result;
			if (typeof e != "string") throw r = null, Error("Wrong reader.result type");
			e = o ? e : e.replace(/^data:[^;]*;/, "data:attachment/file;"), r ? r.location.href = e : location.assign(e), r = null;
		}, t.readAsDataURL(e);
	} else {
		let t = URL.createObjectURL(e);
		r ? r.location.assign(t) : location.href = t, r = null, setTimeout(function() {
			URL.revokeObjectURL(t);
		}, 4e4);
	}
}
var { assign: Vt } = Object;
function Ht() {
	let e = _e(!0), t = e.run(() => M({})), n = [], r = [], i = be({
		install(e) {
			Dt(i), i._a = e, e.provide(Ot, i), e.config.globalProperties.$pinia = i, r.forEach((e) => n.push(e)), r = [];
		},
		use(e) {
			return this._a ? n.push(e) : r.push(e), this;
		},
		_p: n,
		_a: null,
		_e: e,
		_s: /* @__PURE__ */ new Map(),
		state: t
	});
	return i;
}
var Ut = () => {};
function Wt(e, t, n, r = Ut) {
	e.add(t);
	let i = () => {
		e.delete(t) && r();
	};
	return !n && se() && A(i), i;
}
function Gt(e, ...t) {
	e.forEach((e) => {
		e(...t);
	});
}
var Kt = (e) => e(), qt = Symbol(), Jt = Symbol();
function Yt(e, t) {
	e instanceof Map && t instanceof Map ? t.forEach((t, n) => e.set(n, t)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
	for (let n in t) {
		if (!Object.hasOwn(t, n)) continue;
		let r = t[n], i = e[n];
		e[n] = kt(i) && kt(r) && Object.hasOwn(e, n) && !U(r) && !E(r) ? Yt(i, r) : r;
	}
	return e;
}
var Xt = Symbol();
function Zt(e) {
	return !e || typeof e != "object" || !Object.hasOwn(e, Xt);
}
var { assign: Qt } = Object;
function $t(e) {
	return !!(U(e) && e.effect);
}
function en(e, t, n, r) {
	let { state: i, actions: a, getters: o } = t, s = n.state.value[e], c;
	function l() {
		return s || 
		/* istanbul ignore if */
		(n.state.value[e] = i ? i() : {}), Qt(re(n.state.value[e]), a, Object.keys(o || {}).reduce((t, r) => (t[r] = be(H(() => {
			Dt(n);
			let t = n._s.get(e);
			return o[r].call(t, t);
		})), t), {}));
	}
	return c = tn(e, l, t, n, r, !0), c;
}
function tn(e, t, n = {}, r, i, a) {
	let o, s = Qt({ actions: {} }, n), c = { deep: !0 }, l, u, d = /* @__PURE__ */ new Set(), f = /* @__PURE__ */ new Set(), p, m = r.state.value[e];
	!a && !m && 
	/* istanbul ignore if */
	(r.state.value[e] = {});
	let h;
	function g(t) {
		let n;
		l = u = !1, typeof t == "function" ? (t(r.state.value[e]), n = {
			type: "patch function",
			storeId: e,
			events: p
		}) : (Yt(r.state.value[e], t), n = {
			type: "patch object",
			payload: t,
			storeId: e,
			events: p
		});
		let i = h = Symbol();
		B().then(() => {
			h === i && (l = !0);
		}), u = !0, Gt(d, n, r.state.value[e]);
	}
	let _ = a ? function() {
		let { state: e } = n, t = e ? e() : {};
		this.$patch((e) => {
			Qt(e, t);
		});
	} : Ut;
	function y() {
		o.stop(), d.clear(), f.clear(), r._s.delete(e);
	}
	let b = (t, n = "") => {
		if (qt in t) return t[Jt] = n, t;
		let i = function() {
			Dt(r);
			let n = Array.from(arguments), a = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
			function s(e) {
				a.add(e);
			}
			function c(e) {
				o.add(e);
			}
			Gt(f, {
				args: n,
				name: i[Jt],
				store: x,
				after: s,
				onError: c
			});
			let l;
			try {
				l = t.apply(this && this.$id === e ? this : x, n);
			} catch (e) {
				throw Gt(o, e), e;
			}
			return l instanceof Promise ? l.then((e) => (Gt(a, e), e)).catch((e) => (Gt(o, e), Promise.reject(e))) : (Gt(a, l), l);
		};
		return i[qt] = !0, i[Jt] = n, i;
	}, ee = {
		_p: r,
		$id: e,
		$onAction: Wt.bind(null, f),
		$patch: g,
		$reset: _,
		$subscribe(t, n = {}) {
			if (d.has(t)) return Ut;
			let i = Wt(d, t, n.detached, () => a()), a = o.run(() => v(() => r.state.value[e], (r) => {
				(n.flush === "sync" ? u : l) && t({
					storeId: e,
					type: "direct",
					events: p
				}, r);
			}, Qt({}, c, n)));
			return i;
		},
		$dispose: y
	}, x = ue(ee);
	r._s.set(e, x);
	let S = (r._a && r._a.runWithContext || Kt)(() => r._e.run(() => (o = _e()).run(() => t({ action: b }))));
	for (let t in S) {
		let n = S[t];
		U(n) && !$t(n) || E(n) ? a || (m && Zt(n) && (U(n) ? n.value = m[t] : Yt(n, m[t])), r.state.value[e][t] = n) : typeof n == "function" && (S[t] = b(n, t), s.actions[t] = n);
	}
	return Qt(x, S), Qt(oe(x), S), Object.defineProperty(x, "$state", {
		get: () => r.state.value[e],
		set: (e) => {
			g((t) => {
				Qt(t, e);
			});
		}
	}), r._p.forEach((e) => {
		let t = o.run(() => e({
			store: x,
			app: r._a,
			pinia: r,
			options: s
		}));
		Qt(x, t);
	}), m && a && n.hydrate && n.hydrate(x.$state, m), l = !0, u = !0, x;
}
function nn(e, t, n) {
	let r, i = typeof t == "function";
	r = i ? n : t;
	function o(n, o) {
		let s = a();
		return n ||= s ? g(Ot, null) : null, n && Dt(n), n = Et, n._s.has(e) || (i ? tn(e, t, r, n) : en(e, r, n)), n._s.get(e);
	}
	return o.$id = e, o;
}
//#endregion
//#region node_modules/vue-router/dist/devtools-Bpr7ZAVB.js
var rn = typeof document < "u", an = /#/g, on = /&/g, sn = /\//g, cn = /=/g, ln = /\?/g, un = /\+/g, dn = /%5B/g, fn = /%5D/g, pn = /%5E/g, mn = /%60/g, hn = /%7B/g, gn = /%7C/g, _n = /%7D/g, vn = /%20/g;
function yn(e) {
	return e == null ? "" : encodeURI("" + e).replace(gn, "|").replace(dn, "[").replace(fn, "]");
}
function bn(e) {
	return yn(e).replace(hn, "{").replace(_n, "}").replace(pn, "^");
}
function xn(e) {
	return yn(e).replace(un, "%2B").replace(vn, "+").replace(an, "%23").replace(on, "%26").replace(mn, "`").replace(hn, "{").replace(_n, "}").replace(pn, "^");
}
function Sn(e) {
	return xn(e).replace(cn, "%3D");
}
function Cn(e) {
	return yn(e).replace(an, "%23").replace(ln, "%3F");
}
function wn(e) {
	return Cn(e).replace(sn, "%2F");
}
function Tn(e) {
	if (e == null) return null;
	try {
		return decodeURIComponent("" + e);
	} catch {}
	return "" + e;
}
var En = /\/$/, Dn = (e) => e.replace(En, "");
function On(e, t, n = "/") {
	let r, i = {}, a = "", o = "", s = t.indexOf("#"), c = t.indexOf("?");
	return c = s >= 0 && c > s ? -1 : c, c >= 0 && (r = t.slice(0, c), a = t.slice(c, s > 0 ? s : t.length), i = e(a.slice(1))), s >= 0 && (r ||= t.slice(0, s), o = t.slice(s, t.length)), r = In(r ?? t, n), {
		fullPath: r + a + o,
		path: r,
		query: i,
		hash: Tn(o)
	};
}
function kn(e, t) {
	let n = t.query ? e(t.query) : "";
	return t.path + (n && "?") + n + (t.hash || "");
}
function An(e, t) {
	return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function jn(e, t, n) {
	let r = t.matched.length - 1, i = n.matched.length - 1;
	return r > -1 && r === i && Mn(t.matched[r], n.matched[i]) && Nn(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function Mn(e, t) {
	return (e.aliasOf || e) === (t.aliasOf || t);
}
function Nn(e, t) {
	if (Object.keys(e).length !== Object.keys(t).length) return !1;
	for (var n in e) if (!Pn(e[n], t[n])) return !1;
	return !0;
}
function Pn(e, t) {
	return ze(e) ? Fn(e, t) : ze(t) ? Fn(t, e) : (e && e.valueOf()) === (t && t.valueOf());
}
function Fn(e, t) {
	return ze(t) ? e.length === t.length && e.every((e, n) => e === t[n]) : e.length === 1 && e[0] === t;
}
function In(e, t) {
	if (e.startsWith("/")) return e;
	if (!e) return t;
	let n = t.split("/"), r = e.split("/"), i = r[r.length - 1];
	(i === ".." || i === ".") && r.push("");
	let a = n.length - 1, o, s;
	for (o = 0; o < r.length; o++) if (s = r[o], s !== ".") {
		if (s === "..") a > 1 && a--;
		else break;
	}
	return n.slice(0, a).join("/") + "/" + r.slice(o).join("/");
}
var Ln = {
	path: "/",
	name: void 0,
	params: {},
	query: {},
	hash: "",
	fullPath: "/",
	matched: [],
	meta: {},
	redirectedFrom: void 0
};
function Rn(e) {
	if (!e) {
		if (rn) {
			let t = document.querySelector("base");
			e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^/]+/, "");
		} else e = "/";
	}
	return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Dn(e);
}
var zn = /^[^#]+#/;
function Bn(e, t) {
	return e.replace(zn, "#") + t;
}
function Vn(e, t) {
	let n = document.documentElement.getBoundingClientRect(), r = e.getBoundingClientRect();
	return {
		behavior: t.behavior,
		left: r.left - n.left - (t.left || 0),
		top: r.top - n.top - (t.top || 0)
	};
}
var Hn = () => ({
	left: window.scrollX,
	top: window.scrollY
});
function Un(e) {
	let t;
	if ("el" in e) {
		let n = e.el, r = typeof n == "string" && n.startsWith("#"), i = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
		if (!i) return;
		t = Vn(i, e);
	} else t = e;
	"scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left == null ? window.scrollX : t.left, t.top == null ? window.scrollY : t.top);
}
function Wn(e, t) {
	return (history.state ? history.state.position - t : -1) + e;
}
var Gn = /* @__PURE__ */ new Map();
function Kn(e, t) {
	Gn.set(e, t);
}
function qn(e) {
	let t = Gn.get(e);
	return Gn.delete(e), t;
}
function Jn(e) {
	return typeof e == "string" || e && typeof e == "object";
}
function Yn(e) {
	return typeof e == "string" || typeof e == "symbol";
}
function Xn(e) {
	let t = {};
	if (e === "" || e === "?") return t;
	let n = (e[0] === "?" ? e.slice(1) : e).split("&");
	for (let e = 0; e < n.length; ++e) {
		let r = n[e].replace(un, " "), i = r.indexOf("="), a = Tn(i < 0 ? r : r.slice(0, i)), o = i < 0 ? null : Tn(r.slice(i + 1));
		if (a in t) {
			let e = t[a];
			ze(e) || (e = t[a] = [e]), e.push(o);
		} else t[a] = o;
	}
	return t;
}
function Zn(e) {
	let t = "";
	for (let n in e) {
		let r = e[n];
		if (n = Sn(n), r == null) {
			r !== void 0 && (t += (t.length ? "&" : "") + n);
			continue;
		}
		(ze(r) ? r.map((e) => e && xn(e)) : [r && xn(r)]).forEach((e) => {
			e !== void 0 && (t += (t.length ? "&" : "") + n, e != null && (t += "=" + e));
		});
	}
	return t;
}
function Qn(e) {
	let t = {};
	for (let n in e) {
		let r = e[n];
		r !== void 0 && (t[n] = ze(r) ? r.map((e) => e == null ? null : "" + e) : r == null ? r : "" + r);
	}
	return t;
}
function $n() {
	let e = [];
	function t(t) {
		return e.push(t), () => {
			let n = e.indexOf(t);
			n > -1 && e.splice(n, 1);
		};
	}
	function n() {
		e = [];
	}
	return {
		add: t,
		list: () => e.slice(),
		reset: n
	};
}
function er(e, t, n, r, i, a = (e) => e()) {
	let o = r && (r.enterCallbacks[i] = r.enterCallbacks[i] || []);
	return () => new Promise((s, c) => {
		let l = (e) => {
			e === !1 ? c(tt(4, {
				from: n,
				to: t
			})) : e instanceof Error ? c(e) : Jn(e) ? c(tt(2, {
				from: t,
				to: e
			})) : (o && r.enterCallbacks[i] === o && typeof e == "function" && o.push(e), s());
		}, u = a(() => e.call(r && r.instances[i], t, n, l)), d = Promise.resolve(u);
		e.length < 3 && (d = d.then(l)), d.catch((e) => c(e));
	});
}
function tr(e, t, n, r, i = (e) => e()) {
	let a = [];
	for (let o of e) for (let e in o.components) {
		let s = o.components[e];
		if (!(t !== "beforeRouteEnter" && !o.instances[e])) {
			if (qe(s)) {
				let c = (s.__vccOpts || s)[t];
				c && a.push(er(c, n, r, o, e, i));
			} else {
				let c = s();
				a.push(() => c.then((a) => {
					if (!a) throw Error(`Couldn't resolve component "${e}" at "${o.path}"`);
					let s = et(a) ? a.default : a;
					o.mods[e] = a, o.components[e] = s;
					let c = (s.__vccOpts || s)[t];
					return c && er(c, n, r, o, e, i)();
				}));
			}
		}
	}
	return a;
}
function nr(e, t) {
	let n = [], r = [], i = [], a = Math.max(t.matched.length, e.matched.length);
	for (let o = 0; o < a; o++) {
		let a = t.matched[o];
		a && (e.matched.find((e) => Mn(e, a)) ? r.push(a) : n.push(a));
		let s = e.matched[o];
		s && (t.matched.find((e) => Mn(e, s)) || i.push(s));
	}
	return [
		n,
		r,
		i
	];
}
//#endregion
//#region node_modules/vue-router/dist/vue-router.js
var rr = () => location.protocol + "//" + location.host;
function ir(e, t) {
	let { pathname: n, search: r, hash: i } = t, a = e.indexOf("#");
	if (a > -1) {
		let t = i.includes(e.slice(a)) ? e.slice(a).length : 1, n = i.slice(t);
		return n[0] !== "/" && (n = "/" + n), An(n, "");
	}
	return An(n, e) + r + i;
}
function ar(e, t, n, r) {
	let i = [], a = [], o = null, s = ({ state: a }) => {
		let s = ir(e, location), c = n.value, l = t.value, u = 0;
		if (a) {
			if (n.value = s, t.value = a, o && o === c) {
				o = null;
				return;
			}
			u = l ? a.position - l.position : 0;
		} else r(s);
		i.forEach((e) => {
			e(n.value, c, {
				delta: u,
				type: "pop",
				direction: u ? u > 0 ? "forward" : "back" : ""
			});
		});
	};
	function c() {
		o = n.value;
	}
	function l(e) {
		i.push(e);
		let t = () => {
			let t = i.indexOf(e);
			t > -1 && i.splice(t, 1);
		};
		return a.push(t), t;
	}
	function u() {
		if (document.visibilityState === "hidden") {
			let { history: e } = window;
			if (!e.state) return;
			e.replaceState(X({}, e.state, { scroll: Hn() }), "");
		}
	}
	function d() {
		for (let e of a) e();
		a = [], window.removeEventListener("popstate", s), window.removeEventListener("pagehide", u), document.removeEventListener("visibilitychange", u);
	}
	return window.addEventListener("popstate", s), window.addEventListener("pagehide", u), document.addEventListener("visibilitychange", u), {
		pauseListeners: c,
		listen: l,
		destroy: d
	};
}
function or(e, t, n, r = !1, i = !1) {
	return {
		back: e,
		current: t,
		forward: n,
		replaced: r,
		position: window.history.length,
		scroll: i ? Hn() : null
	};
}
function sr(e) {
	let { history: t, location: n } = window, r = { value: ir(e, n) }, i = { value: t.state };
	i.value || a(r.value, {
		back: null,
		current: r.value,
		forward: null,
		position: t.length - 1,
		replaced: !0,
		scroll: null
	}, !0);
	function a(r, a, o) {
		let s = e.indexOf("#"), c = s > -1 ? (n.host && document.querySelector("base") ? e : e.slice(s)) + r : rr() + e + r;
		try {
			t[o ? "replaceState" : "pushState"](a, "", c), i.value = a;
		} catch (e) {
			console.error(e), n[o ? "replace" : "assign"](c);
		}
	}
	function o(e, n) {
		a(e, X({}, t.state, or(i.value.back, e, i.value.forward, !0), n, { position: i.value.position }), !0), r.value = e;
	}
	function s(e, n) {
		let o = X({}, i.value, t.state, {
			forward: e,
			scroll: Hn()
		});
		a(o.current, o, !0), a(e, X({}, or(r.value, e, null), { position: o.position + 1 }, n), !1), r.value = e;
	}
	return {
		location: r,
		state: i,
		push: s,
		replace: o
	};
}
function cr(e) {
	e = Rn(e);
	let t = sr(e), n = ar(e, t.state, t.location, t.replace);
	function r(e, t = !0) {
		t || n.pauseListeners(), history.go(e);
	}
	let i = X({
		location: "",
		base: e,
		go: r,
		createHref: Bn.bind(null, e)
	}, t, n);
	return Object.defineProperty(i, "location", {
		enumerable: !0,
		get: () => t.location.value
	}), Object.defineProperty(i, "state", {
		enumerable: !0,
		get: () => t.state.value
	}), i;
}
function lr(e) {
	return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), cr(e);
}
var ur = {
	type: 0,
	value: ""
}, dr = /[a-zA-Z0-9_]/;
function fr(e) {
	if (!e) return [[]];
	if (e === "/") return [[ur]];
	if (!e.startsWith("/")) throw Error(`Invalid path "${e}"`);
	function t(e) {
		throw Error(`ERR (${n})/"${l}": ${e}`);
	}
	let n = 0, r = n, i = [], a;
	function o() {
		a && i.push(a), a = [];
	}
	let s = 0, c, l = "", u = "";
	function d() {
		l &&= (n === 0 ? a.push({
			type: 0,
			value: l
		}) : n === 1 || n === 2 || n === 3 ? (a.length > 1 && (c === "*" || c === "+") && t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`), a.push({
			type: 1,
			value: l,
			regexp: u,
			repeatable: c === "*" || c === "+",
			optional: c === "*" || c === "?"
		})) : t("Invalid state to consume buffer"), "");
	}
	function f() {
		l += c;
	}
	for (; s < e.length;) switch (c = e[s++], n) {
		case 0:
			c === "\\" ? (r = n, n = 4) : c === "/" ? (l && d(), o()) : c === ":" ? (d(), n = 1) : f();
			break;
		case 4:
			f(), n = r;
			break;
		case 1:
			c === "(" ? n = 2 : dr.test(c) ? f() : (d(), n = 0, c !== "*" && c !== "?" && c !== "+" && s--);
			break;
		case 2:
			c === ")" ? u[u.length - 1] == "\\" ? u = u.slice(0, -1) + c : n = 3 : u += c;
			break;
		case 3:
			d(), n = 0, c !== "*" && c !== "?" && c !== "+" && s--, u = "";
			break;
		default: t("Unknown state");
	}
	return n === 2 && t(`Unfinished custom RegExp for param "${l}"`), d(), o(), i;
}
var pr = "[^/]+?", mr = {
	sensitive: !1,
	strict: !1,
	start: !0,
	end: !0
}, hr = /[.+*?^${}()[\]/\\]/g;
function gr(e, t) {
	let n = X({}, mr, t), r = [], i = n.start ? "^" : "", a = [];
	for (let t of e) {
		let e = t.length ? [] : [90];
		n.strict && !t.length && (i += "/");
		for (let r = 0; r < t.length; r++) {
			let o = t[r], s = 40 + (n.sensitive ? .25 : 0);
			if (o.type === 0) r || (i += "/"), i += o.value.replace(hr, "\\$&"), s += 40;
			else if (o.type === 1) {
				let { value: e, repeatable: n, optional: c, regexp: l } = o;
				a.push({
					name: e,
					repeatable: n,
					optional: c
				});
				let u = l || pr;
				if (u !== pr) {
					s += 10;
					try {
						RegExp(`(${u})`);
					} catch (t) {
						throw Error(`Invalid custom RegExp for param "${e}" (${u}): ` + t.message);
					}
				}
				let d = n ? `((?:${u})(?:/(?:${u}))*)` : `(${u})`;
				r || (d = c && t.length < 2 ? `(?:/${d})` : "/" + d), c && (d += "?"), i += d, s += 20, c && (s += -8), n && (s += -20), u === ".*" && (s += -50);
			}
			e.push(s);
		}
		r.push(e);
	}
	if (n.strict && n.end) {
		let e = r.length - 1;
		r[e][r[e].length - 1] += .7000000000000001;
	}
	n.strict || (i += "/?"), n.end ? i += "$" : n.strict && !i.endsWith("/") && (i += "(?:/|$)");
	let o = new RegExp(i, n.sensitive ? "" : "i");
	function s(e) {
		let t = e.match(o), n = {};
		if (!t) return null;
		for (let e = 1; e < t.length; e++) {
			let r = t[e] || "", i = a[e - 1];
			n[i.name] = r && i.repeatable ? r.split("/") : r;
		}
		return n;
	}
	function c(t) {
		let n = "", r = !1;
		for (let i of e) {
			(!r || !n.endsWith("/")) && (n += "/"), r = !1;
			for (let e of i) if (e.type === 0) n += e.value;
			else if (e.type === 1) {
				let { value: a, repeatable: o, optional: s } = e, c = a in t ? t[a] : "";
				if (ze(c) && !o) throw Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);
				let l = ze(c) ? c.join("/") : c;
				if (!l) {
					if (s) i.length < 2 && (n.endsWith("/") ? n = n.slice(0, -1) : r = !0);
					else throw Error(`Missing required param "${a}"`);
				}
				n += l;
			}
		}
		return n || "/";
	}
	return {
		re: o,
		score: r,
		keys: a,
		parse: s,
		stringify: c
	};
}
function _r(e, t) {
	let n = 0;
	for (; n < e.length && n < t.length;) {
		let r = t[n] - e[n];
		if (r) return r;
		n++;
	}
	return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0;
}
function vr(e, t) {
	let n = 0, r = e.score, i = t.score;
	for (; n < r.length && n < i.length;) {
		let e = _r(r[n], i[n]);
		if (e) return e;
		n++;
	}
	if (Math.abs(i.length - r.length) === 1) {
		if (yr(r)) return 1;
		if (yr(i)) return -1;
	}
	return i.length - r.length;
}
function yr(e) {
	let t = e[e.length - 1];
	return e.length > 0 && t[t.length - 1] < 0;
}
var br = {
	strict: !1,
	end: !0,
	sensitive: !1
};
function xr(e, t, n) {
	let r = gr(fr(e.path), n), i = X(r, {
		record: e,
		parent: t,
		children: [],
		alias: []
	});
	return t && !i.record.aliasOf == !t.record.aliasOf && t.children.push(i), i;
}
function Sr(e, t) {
	let n = [], r = /* @__PURE__ */ new Map();
	t = He(br, t);
	function i(e) {
		return r.get(e);
	}
	function a(e, n, r) {
		let i = !r, s = wr(e);
		s.aliasOf = r && r.record;
		let l = He(t, e), u = [s];
		if ("alias" in e) {
			let t = typeof e.alias == "string" ? [e.alias] : e.alias;
			for (let e of t) u.push(wr(X({}, s, {
				components: r ? r.record.components : s.components,
				path: e,
				aliasOf: r ? r.record : s
			})));
		}
		let d, f;
		for (let t of u) {
			let { path: u } = t;
			if (n && u[0] !== "/") {
				let e = n.record.path, r = e[e.length - 1] === "/" ? "" : "/";
				t.path = n.record.path + (u && r + u);
			}
			if (d = xr(t, n, l), r ? r.alias.push(d) : (f ||= d, f !== d && f.alias.push(d), i && e.name && !Er(d) && o(e.name)), Ar(d) && c(d), s.children) {
				let e = s.children;
				for (let t = 0; t < e.length; t++) a(e[t], d, r && r.children[t]);
			}
			r ||= d;
		}
		return f ? () => {
			o(f);
		} : We;
	}
	function o(e) {
		if (Yn(e)) {
			let t = r.get(e);
			t && (r.delete(e), n.splice(n.indexOf(t), 1), t.children.forEach(o), t.alias.forEach(o));
		} else {
			let t = n.indexOf(e);
			t > -1 && (n.splice(t, 1), e.record.name && r.delete(e.record.name), e.children.forEach(o), e.alias.forEach(o));
		}
	}
	function s() {
		return n;
	}
	function c(e) {
		let t = Or(e, n);
		n.splice(t, 0, e), e.record.name && !Er(e) && r.set(e.record.name, e);
	}
	function l(e, t) {
		let i, a = {}, o, s;
		if ("name" in e && e.name) {
			if (i = r.get(e.name), !i) throw tt(1, { location: e });
			s = i.record.name, a = X(Cr(t.params, i.keys.filter((e) => !e.optional).concat(i.parent ? i.parent.keys.filter((e) => e.optional) : []).map((e) => e.name)), e.params && Cr(e.params, i.keys.map((e) => e.name))), o = i.stringify(a);
		} else if (e.path != null) o = e.path, i = n.find((e) => e.re.test(o)), i && (a = i.parse(o), s = i.record.name, i.keys.forEach((e) => {
			e.optional && !a[e.name] && delete a[e.name];
		}));
		else {
			if (i = t.name ? r.get(t.name) : n.find((e) => e.re.test(t.path)), !i) throw tt(1, {
				location: e,
				currentLocation: t
			});
			s = i.record.name, a = X({}, t.params, e.params), o = i.stringify(a);
		}
		let c = [], l = i;
		for (; l;) c.unshift(l.record), l = l.parent;
		return {
			name: s,
			path: o,
			params: a,
			matched: c,
			meta: Dr(c)
		};
	}
	e.forEach((e) => a(e));
	function u() {
		n.length = 0, r.clear();
	}
	return {
		addRoute: a,
		resolve: l,
		removeRoute: o,
		clearRoutes: u,
		getRoutes: s,
		getRecordMatcher: i
	};
}
function Cr(e, t) {
	let n = {};
	for (let r of t) r in e && (n[r] = e[r]);
	return n;
}
function wr(e) {
	let t = {
		path: e.path,
		redirect: e.redirect,
		name: e.name,
		meta: e.meta || {},
		aliasOf: e.aliasOf,
		beforeEnter: e.beforeEnter,
		props: Tr(e),
		children: e.children || [],
		instances: {},
		leaveGuards: /* @__PURE__ */ new Set(),
		updateGuards: /* @__PURE__ */ new Set(),
		enterCallbacks: {},
		components: "components" in e ? e.components || null : e.component && { default: e.component }
	};
	return Object.defineProperty(t, "mods", { value: {} }), t;
}
function Tr(e) {
	let t = {}, n = e.props || !1;
	if ("component" in e) t.default = n;
	else for (let r in e.components) t[r] = typeof n == "object" ? n[r] : n;
	return t;
}
function Er(e) {
	for (; e;) {
		if (e.record.aliasOf) return !0;
		e = e.parent;
	}
	return !1;
}
function Dr(e) {
	return e.reduce((e, t) => X(e, t.meta), {});
}
function Or(e, t) {
	let n = 0, r = t.length;
	for (; n !== r;) {
		let i = n + r >> 1;
		vr(e, t[i]) < 0 ? r = i : n = i + 1;
	}
	let i = kr(e);
	return i && (r = t.lastIndexOf(i, r - 1)), r;
}
function kr(e) {
	let t = e;
	for (; t = t.parent;) if (Ar(t) && vr(e, t) === 0) return t;
}
function Ar({ record: e }) {
	return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function jr(e) {
	let t = g(Ye), n = g(Ge), r = H(() => {
		let n = J(e.to);
		return t.resolve(n);
	}), i = H(() => {
		let { matched: e } = r.value, { length: t } = e, i = e[t - 1], a = n.matched;
		if (!i || !a.length) return -1;
		let o = a.findIndex(Mn.bind(null, i));
		if (o > -1) return o;
		let s = Ir(e[t - 2]);
		return t > 1 && Ir(i) === s && a[a.length - 1].path !== s ? a.findIndex(Mn.bind(null, e[t - 2])) : o;
	}), a = H(() => i.value > -1 && Fr(n.params, r.value.params)), o = H(() => i.value > -1 && i.value === n.matched.length - 1 && Nn(n.params, r.value.params));
	function s(n = {}) {
		if (Pr(n)) {
			let n = t[J(e.replace) ? "replace" : "push"](J(e.to)).catch(We);
			return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => n), n;
		}
		return Promise.resolve();
	}
	return {
		route: r,
		href: H(() => r.value.href),
		isActive: a,
		isExactActive: o,
		navigate: s
	};
}
function Mr(e) {
	return e.length === 1 ? e[0] : e;
}
var Nr = /* @__PURE__ */ r({
	name: "RouterLink",
	compatConfig: { MODE: 3 },
	props: {
		to: {
			type: [String, Object],
			required: !0
		},
		replace: Boolean,
		activeClass: String,
		exactActiveClass: String,
		custom: Boolean,
		ariaCurrentValue: {
			type: String,
			default: "page"
		},
		viewTransition: Boolean
	},
	useLink: jr,
	setup(e, { slots: t }) {
		let n = ue(jr(e)), { options: r } = g(Ye), i = H(() => ({
			[Lr(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
			[Lr(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
		}));
		return () => {
			let r = t.default && Mr(t.default(n));
			return e.custom ? r : o("a", {
				"aria-current": n.isExactActive ? e.ariaCurrentValue : null,
				href: n.href,
				onClick: n.navigate,
				class: i.value
			}, r);
		};
	}
});
function Pr(e) {
	if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && (e.button === void 0 || e.button === 0)) {
		if (e.currentTarget && e.currentTarget.getAttribute) {
			let t = e.currentTarget.getAttribute("target");
			if (/\b_blank\b/i.test(t)) return;
		}
		return e.preventDefault && e.preventDefault(), !0;
	}
}
function Fr(e, t) {
	for (let n in t) {
		let r = t[n], i = e[n];
		if (typeof r == "string") {
			if (r !== i) return !1;
		} else if (!ze(i) || i.length !== r.length || r.some((e, t) => e.valueOf() !== i[t].valueOf())) return !1;
	}
	return !0;
}
function Ir(e) {
	return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
var Lr = (e, t, n) => e ?? t ?? n, Rr = /*#__PURE__*/ r({
	name: "RouterView",
	inheritAttrs: !1,
	props: {
		name: {
			type: String,
			default: "default"
		},
		route: Object
	},
	compatConfig: { MODE: 3 },
	setup(e, { attrs: t, slots: n }) {
		let r = g(rt), i = H(() => e.route || r.value), a = g(Ue, 0), s = H(() => {
			let e = J(a), { matched: t } = i.value, n;
			for (; (n = t[e]) && !n.components;) e++;
			return e;
		}), c = H(() => i.value.matched[s.value]);
		De(Ue, H(() => s.value + 1)), De(Je, c), De(rt, i);
		let l = M();
		return v(() => [
			l.value,
			c.value,
			e.name
		], ([e, t, n], [r, i, a]) => {
			t && (t.instances[n] = e, i && i !== t && e && e === r && (t.leaveGuards.size || (t.leaveGuards = i.leaveGuards), t.updateGuards.size || (t.updateGuards = i.updateGuards))), e && t && (!i || !Mn(t, i) || !r) && (t.enterCallbacks[n] || []).forEach((t) => t(e));
		}, { flush: "post" }), () => {
			let r = i.value, a = e.name, s = c.value, u = s && s.components[a];
			if (!u) return zr(n.default, {
				Component: u,
				route: r
			});
			let d = s.props[a], f = d ? d === !0 ? r.params : typeof d == "function" ? d(r) : d : null, p = o(u, X({}, f, t, {
				onVnodeUnmounted: (e) => {
					e.component.isUnmounted && (s.instances[a] = null);
				},
				ref: l
			}));
			return zr(n.default, {
				Component: p,
				route: r
			}) || p;
		};
	}
});
function zr(e, t) {
	if (!e) return null;
	let n = e(t);
	return n.length === 1 ? n[0] : n;
}
var Br = Rr;
function Vr(e) {
	let t = Sr(e.routes, e), n = e.parseQuery || Xn, r = e.stringifyQuery || Zn, i = e.history, a = $n(), o = $n(), s = $n(), c = fe(Ln), l = Ln;
	rn && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
	let u = Ve.bind(null, (e) => "" + e), d = Ve.bind(null, wn), f = Ve.bind(null, Tn);
	function p(e, n) {
		let r, i;
		return Yn(e) ? (r = t.getRecordMatcher(e), i = n) : i = e, t.addRoute(i, r);
	}
	function m(e) {
		let n = t.getRecordMatcher(e);
		n && t.removeRoute(n);
	}
	function h() {
		return t.getRoutes().map((e) => e.record);
	}
	function g(e) {
		return !!t.getRecordMatcher(e);
	}
	function _(e, a) {
		if (a = X({}, a || c.value), typeof e == "string") {
			let r = On(n, e, a.path), o = t.resolve({ path: r.path }, a), s = i.createHref(r.fullPath);
			return X(r, o, {
				params: f(o.params),
				redirectedFrom: void 0,
				href: s
			});
		}
		let o;
		if (e.path != null) o = X({}, e, { path: On(n, e.path, a.path).path });
		else {
			let t = X({}, e.params);
			for (let e in t) t[e] ?? delete t[e];
			o = X({}, e, { params: d(t) }), a.params = d(a.params);
		}
		let s = t.resolve(o, a), l = e.hash || "";
		s.params = u(f(s.params));
		let p = kn(r, X({}, e, {
			hash: bn(l),
			path: s.path
		})), m = i.createHref(p);
		return X({
			fullPath: p,
			hash: l,
			query: r === Zn ? Qn(e.query) : e.query || {}
		}, s, {
			redirectedFrom: void 0,
			href: m
		});
	}
	function v(e) {
		return typeof e == "string" ? On(n, e, c.value.path) : X({}, e);
	}
	function y(e, t) {
		if (l !== e) return tt(8, {
			from: t,
			to: e
		});
	}
	function b(e) {
		return S(e);
	}
	function ee(e) {
		return b(X(v(e), { replace: !0 }));
	}
	function x(e, t) {
		let n = e.matched[e.matched.length - 1];
		if (n && n.redirect) {
			let { redirect: r } = n, i = typeof r == "function" ? r(e, t) : r;
			return typeof i == "string" && (i = i.includes("?") || i.includes("#") ? i = v(i) : { path: i }, i.params = {}), X({
				query: e.query,
				hash: e.hash,
				params: i.path == null ? e.params : {}
			}, i);
		}
	}
	function S(e, t) {
		let n = l = _(e), i = c.value, a = e.state, o = e.force, s = e.replace === !0, u = x(n, i);
		if (u) return S(X(v(u), {
			state: typeof u == "object" ? X({}, a, u.state) : a,
			force: o,
			replace: s
		}), t || n);
		let d = n;
		d.redirectedFrom = t;
		let f;
		return !o && jn(r, i, n) && (f = tt(16, {
			to: d,
			from: i
		}), N(i, i, !0, !1)), (f ? Promise.resolve(f) : C(d, i)).catch((e) => Ke(e) ? Ke(e, 2) ? e : M(e) : A(e, d, i)).then((e) => {
			if (e) {
				if (Ke(e, 2)) return S(X({ replace: s }, v(e.to), {
					state: typeof e.to == "object" ? X({}, a, e.to.state) : a,
					force: o
				}), t || d);
			} else e = re(d, i, !0, s, a);
			return w(d, i, e), e;
		});
	}
	function te(e, t) {
		let n = y(e, t);
		return n ? Promise.reject(n) : Promise.resolve();
	}
	function ne(e) {
		let t = ie.values().next().value;
		return t && typeof t.runWithContext == "function" ? t.runWithContext(e) : e();
	}
	function C(e, t) {
		let n, [r, i, s] = nr(e, t);
		n = tr(r.reverse(), "beforeRouteLeave", e, t);
		for (let i of r) i.leaveGuards.forEach((r) => {
			n.push(er(r, e, t));
		});
		let c = te.bind(null, e, t);
		return n.push(c), L(n).then(() => {
			n = [];
			for (let r of a.list()) n.push(er(r, e, t));
			return n.push(c), L(n);
		}).then(() => {
			n = tr(i, "beforeRouteUpdate", e, t);
			for (let r of i) r.updateGuards.forEach((r) => {
				n.push(er(r, e, t));
			});
			return n.push(c), L(n);
		}).then(() => {
			n = [];
			for (let r of s) if (r.beforeEnter) {
				if (ze(r.beforeEnter)) for (let i of r.beforeEnter) n.push(er(i, e, t));
				else n.push(er(r.beforeEnter, e, t));
			}
			return n.push(c), L(n);
		}).then(() => (e.matched.forEach((e) => e.enterCallbacks = {}), n = tr(s, "beforeRouteEnter", e, t, ne), n.push(c), L(n))).then(() => {
			n = [];
			for (let r of o.list()) n.push(er(r, e, t));
			return n.push(c), L(n);
		}).catch((e) => Ke(e, 8) ? e : Promise.reject(e));
	}
	function w(e, t, n) {
		s.list().forEach((r) => ne(() => r(e, t, n)));
	}
	function re(e, t, n, r, a) {
		let o = y(e, t);
		if (o) return o;
		let s = t === Ln, l = rn ? history.state : {};
		n && (r || s ? i.replace(e.fullPath, X({ scroll: s && l && l.scroll }, a)) : i.push(e.fullPath, a)), c.value = e, N(e, t, n, s), M();
	}
	let T;
	function E() {
		T ||= i.listen((e, t, n) => {
			if (!I.listening) return;
			let r = _(e), a = x(r, I.currentRoute.value);
			if (a) {
				S(X(a, {
					replace: !0,
					force: !0
				}), r).catch(We);
				return;
			}
			l = r;
			let o = c.value;
			rn && Kn(Wn(o.fullPath, n.delta), Hn()), C(r, o).catch((e) => Ke(e, 12) ? e : Ke(e, 2) ? (S(X(v(e.to), { force: !0 }), r).then((e) => {
				Ke(e, 20) && !n.delta && n.type === "pop" && i.go(-1, !1);
			}).catch(We), Promise.reject()) : (n.delta && i.go(-n.delta, !1), A(e, r, o))).then((e) => {
				e ||= re(r, o, !1), e && (n.delta && !Ke(e, 8) ? i.go(-n.delta, !1) : n.type === "pop" && Ke(e, 20) && i.go(-1, !1)), w(r, o, e);
			}).catch(We);
		});
	}
	let D = $n(), O = $n(), k;
	function A(e, t, n) {
		M(e);
		let r = O.list();
		return r.length ? r.forEach((r) => r(e, t, n)) : console.error(e), Promise.reject(e);
	}
	function j() {
		return k && c.value !== Ln ? Promise.resolve() : new Promise((e, t) => {
			D.add([e, t]);
		});
	}
	function M(e) {
		return k || (k = !e, E(), D.list().forEach(([t, n]) => e ? n(e) : t()), D.reset()), e;
	}
	function N(t, n, r, i) {
		let { scrollBehavior: a } = e;
		if (!rn || !a) return Promise.resolve();
		let o = !r && qn(Wn(t.fullPath, 0)) || (i || !r) && history.state && history.state.scroll || null;
		return B().then(() => a(t, n, o)).then((e) => t === c.value && e && Un(e)).catch((e) => t === c.value && A(e, t, n));
	}
	let P = (e) => i.go(e), F, ie = /* @__PURE__ */ new Set(), I = {
		currentRoute: c,
		listening: !0,
		addRoute: p,
		removeRoute: m,
		clearRoutes: t.clearRoutes,
		hasRoute: g,
		getRoutes: h,
		resolve: _,
		options: e,
		push: b,
		replace: ee,
		go: P,
		back: () => P(-1),
		forward: () => P(1),
		beforeEach: a.add,
		beforeResolve: o.add,
		afterEach: s.add,
		onError: O.add,
		isReady: j,
		install(e) {
			e.component("RouterLink", Nr), e.component("RouterView", Br), e.config.globalProperties.$router = I, Object.defineProperty(e.config.globalProperties, "$route", {
				enumerable: !0,
				get: () => J(c)
			}), rn && !F && c.value === Ln && (F = !0, b(i.location).catch((e) => {}));
			let t = {};
			for (let e in Ln) Object.defineProperty(t, e, {
				get: () => c.value[e],
				enumerable: !0
			});
			e.provide(Ye, I), e.provide(Ge, ae(t)), e.provide(rt, c);
			let n = e.unmount;
			ie.add(e), e.unmount = function() {
				ie.delete(e), ie.size < 1 && (l = Ln, T && T(), T = null, c.value = Ln, F = !1, k = !1), n();
			};
		}
	};
	function L(e) {
		return e.reduce((e, t) => e.then(() => ne(t)), Promise.resolve());
	}
	return I;
}
//#endregion
//#region node_modules/@nextcloud/vue/dist/chunks/constants-Ciwvl5xb.mjs
var Hr = /* @__PURE__ */ Symbol.for("NcContent:setHasAppNavigation"), Ur = /* @__PURE__ */ Symbol.for("NcContent:selector");
//#endregion
//#region node_modules/@nextcloud/vue/dist/chunks/NcContent-BYh5hWDN.mjs
ge(Ce);
var Wr = "<!--\n  - SPDX-FileCopyrightText: 2023 Nextcloud GmbH and Nextcloud contributors\n  - SPDX-License-Identifier: AGPL-3.0-or-later\n-->\n<svg width=\"395\" height=\"314\" viewBox=\"0 0 395 314\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"395\" height=\"314\" rx=\"11\" fill=\"#439DCD\"/>\n<rect x=\"13\" y=\"51\" width=\"366\" height=\"248\" rx=\"8\" fill=\"white\"/>\n<rect x=\"22\" y=\"111\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"127\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"63\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"191\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"143\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"79\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"159\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"95\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"175\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<path d=\"M288 145C277.56 147.8 265.32 149 254 149C242.68 149 230.44 147.8 220 145L218 153C225.44 155 234 156.32 242 157V209H250V185H258V209H266V157C274 156.32 282.56 155 290 153L288 145ZM254 145C258.4 145 262 141.4 262 137C262 132.6 258.4 129 254 129C249.6 129 246 132.6 246 137C246 141.4 249.6 145 254 145Z\" fill=\"#DEDEDE\"/>\n<path d=\"M43.5358 13C38.6641 13 34.535 16.2415 33.2552 20.6333C32.143 18.3038 29.7327 16.6718 26.9564 16.6718C23.1385 16.6718 20 19.7521 20 23.4993C20 27.2465 23.1385 30.3282 26.9564 30.3282C29.7327 30.3282 32.1429 28.6952 33.2552 26.3653C34.535 30.7575 38.6641 34 43.5358 34C48.3715 34 52.4796 30.8064 53.7921 26.4637C54.9249 28.7407 57.3053 30.3282 60.0421 30.3282C63.8601 30.3282 67 27.2465 67 23.4993C67 19.7521 63.8601 16.6718 60.0421 16.6718C57.3053 16.6718 54.9249 18.2583 53.7921 20.5349C52.4796 16.1926 48.3715 13 43.5358 13ZM43.5358 17.0079C47.2134 17.0079 50.1512 19.8899 50.1512 23.4993C50.1512 27.1087 47.2134 29.9921 43.5358 29.9921C39.8583 29.9921 36.9218 27.1087 36.9218 23.4993C36.9218 19.8899 39.8583 17.0079 43.5358 17.0079ZM26.9564 20.6797C28.5677 20.6797 29.8307 21.9179 29.8307 23.4993C29.8307 25.0807 28.5677 26.3203 26.9564 26.3203C25.3452 26.3203 24.0836 25.0807 24.0836 23.4993C24.0836 21.9179 25.3452 20.6797 26.9564 20.6797ZM60.0421 20.6797C61.6534 20.6797 62.9164 21.9179 62.9164 23.4993C62.9164 25.0807 61.6534 26.3203 60.0421 26.3203C58.4309 26.3203 57.1693 25.0807 57.1693 23.4993C57.1693 21.9179 58.4309 20.6797 60.0421 20.6797Z\" fill=\"white\"/>\n<rect x=\"79\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<rect x=\"99\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<rect x=\"119\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<rect x=\"139\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<rect x=\"159\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<rect x=\"179\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 0C5.37258 0 0 5.37259 0 12V302C0 308.627 5.37259 314 12 314H383C389.627 314 395 308.627 395 302V12C395 5.37258 389.627 0 383 0H12ZM140 44C132.268 44 126 50.268 126 58V292C126 299.732 132.268 306 140 306H372C379.732 306 386 299.732 386 292V58C386 50.268 379.732 44 372 44H140Z\" fill=\"black\" fill-opacity=\"0.35\"/>\n</svg>\n", Gr = "<!--\n  - SPDX-FileCopyrightText: 2023 Nextcloud GmbH and Nextcloud contributors\n  - SPDX-License-Identifier: AGPL-3.0-or-later\n-->\n<svg width=\"395\" height=\"314\" viewBox=\"0 0 395 314\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"395\" height=\"314\" rx=\"11\" fill=\"#439DCD\"/>\n<rect x=\"13\" y=\"51\" width=\"366\" height=\"248\" rx=\"8\" fill=\"white\"/>\n<rect x=\"22\" y=\"111\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"127\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"63\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"191\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"143\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"79\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"159\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"95\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<rect x=\"22\" y=\"175\" width=\"92\" height=\"12\" rx=\"6\" fill=\"#DEDEDE\"/>\n<path d=\"M288 145C277.56 147.8 265.32 149 254 149C242.68 149 230.44 147.8 220 145L218 153C225.44 155 234 156.32 242 157V209H250V185H258V209H266V157C274 156.32 282.56 155 290 153L288 145ZM254 145C258.4 145 262 141.4 262 137C262 132.6 258.4 129 254 129C249.6 129 246 132.6 246 137C246 141.4 249.6 145 254 145Z\" fill=\"#DEDEDE\"/>\n<path d=\"M43.5358 13C38.6641 13 34.535 16.2415 33.2552 20.6333C32.143 18.3038 29.7327 16.6718 26.9564 16.6718C23.1385 16.6718 20 19.7521 20 23.4993C20 27.2465 23.1385 30.3282 26.9564 30.3282C29.7327 30.3282 32.1429 28.6952 33.2552 26.3653C34.535 30.7575 38.6641 34 43.5358 34C48.3715 34 52.4796 30.8064 53.7921 26.4637C54.9249 28.7407 57.3053 30.3282 60.0421 30.3282C63.8601 30.3282 67 27.2465 67 23.4993C67 19.7521 63.8601 16.6718 60.0421 16.6718C57.3053 16.6718 54.9249 18.2583 53.7921 20.5349C52.4796 16.1926 48.3715 13 43.5358 13ZM43.5358 17.0079C47.2134 17.0079 50.1512 19.8899 50.1512 23.4993C50.1512 27.1087 47.2134 29.9921 43.5358 29.9921C39.8583 29.9921 36.9218 27.1087 36.9218 23.4993C36.9218 19.8899 39.8583 17.0079 43.5358 17.0079ZM26.9564 20.6797C28.5677 20.6797 29.8307 21.9179 29.8307 23.4993C29.8307 25.0807 28.5677 26.3203 26.9564 26.3203C25.3452 26.3203 24.0836 25.0807 24.0836 23.4993C24.0836 21.9179 25.3452 20.6797 26.9564 20.6797ZM60.0421 20.6797C61.6534 20.6797 62.9164 21.9179 62.9164 23.4993C62.9164 25.0807 61.6534 26.3203 60.0421 26.3203C58.4309 26.3203 57.1693 25.0807 57.1693 23.4993C57.1693 21.9179 58.4309 20.6797 60.0421 20.6797Z\" fill=\"white\"/>\n<rect x=\"79\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<rect x=\"99\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<rect x=\"119\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<rect x=\"139\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<rect x=\"159\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<rect x=\"179\" y=\"20\" width=\"8\" height=\"8\" rx=\"4\" fill=\"white\"/>\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12 0C5.37258 0 0 5.37259 0 12V302C0 308.627 5.37259 314 12 314H383C389.627 314 395 308.627 395 302V12C395 5.37258 389.627 0 383 0H12ZM112 44C119.732 44 126 50.268 126 58V292C126 299.732 119.732 306 112 306H20C12.268 306 6 299.732 6 292V58C6 50.268 12.268 44 20 44H112Z\" fill=\"black\" fill-opacity=\"0.35\"/>\n</svg>\n", Kr = { class: "vue-skip-actions__container" }, qr = { class: "vue-skip-actions__headline" }, Jr = { class: "vue-skip-actions__buttons" }, Yr = /* @__PURE__ */ i(/* @__PURE__ */ r({
	__name: "NcContent",
	props: { appName: {} },
	setup(e) {
		let t = e;
		De(Hr, c), De(Ur, "#content-vue"), De("appName", H(() => t.appName));
		let r = ft(), i = M(!1), a = M(), o = H(() => a.value === "navigation" ? Gr : Wr);
		m(() => {
			let e = document.getElementById("skip-actions");
			e && (e.innerHTML = "", e.classList.add("vue-skip-actions"));
		});
		function s() {
			Me("toggle-navigation", { open: !0 }), B(() => {
				window.location.hash = "app-navigation-vue", document.getElementById("app-navigation-vue").focus();
			});
		}
		function c(e) {
			i.value = e, a.value ||= "navigation";
		}
		return (t, c) => (p(), K("div", {
			id: "content-vue",
			class: O(["content", [`app-${e.appName.toLowerCase()}`, { "content--legacy": J(le) }]])
		}, [(p(), I(N, { to: "#skip-actions" }, [R("div", Kr, [
			R("div", qr, n(J(z)("Keyboard navigation help")), 1),
			R("div", Jr, [W(q(Y, {
				href: "#app-navigation-vue",
				variant: "tertiary",
				onClick: j(s, ["prevent"]),
				onFocusin: c[0] ||= (e) => a.value = "navigation",
				onMouseover: c[1] ||= (e) => a.value = "navigation"
			}, {
				default: P(() => [k(n(J(z)("Skip to app navigation")), 1)]),
				_: 1
			}, 512), [[pe, i.value]]), q(Y, {
				href: "#app-content-vue",
				variant: "tertiary",
				onFocusin: c[2] ||= (e) => a.value = "content",
				onMouseover: c[3] ||= (e) => a.value = "content"
			}, {
				default: P(() => [k(n(J(z)("Skip to main content")), 1)]),
				_: 1
			})]),
			W(q(Xe, {
				class: "vue-skip-actions__image",
				svg: o.value,
				size: "auto"
			}, null, 8, ["svg"]), [[pe, !J(r)]])
		])])), l(t.$slots, "default", {}, void 0, !0)], 2));
	}
}), [["__scopeId", "data-v-d13dcb98"]]), Xr = { name: "NcAppNavigationList" }, Zr = { class: "app-navigation-list" };
function Qr(e, t, n, r, i, a) {
	return p(), K("ul", Zr, [l(e.$slots, "default", {}, void 0, !0)]);
}
var $r = /* @__PURE__ */ i(Xr, [["render", Qr], ["__scopeId", "data-v-d72957ed"]]);
//#endregion
//#region node_modules/@nextcloud/vue/dist/chunks/NcAppNavigation-g57j16pB.mjs
ge(ie);
var ei = { class: "app-navigation-toggle-wrapper" }, ti = /* @__PURE__ */ i(/* @__PURE__ */ r({
	__name: "NcAppNavigationToggle",
	props: {
		open: {
			type: Boolean,
			required: !0
		},
		openModifiers: {}
	},
	emits: ["update:open"],
	setup(e) {
		let t = d(e, "open"), n = H(() => t.value ? z("Close navigation") : z("Open navigation"));
		return (e, r) => (p(), K("div", ei, [q(J(Y), {
			class: "app-navigation-toggle",
			"aria-controls": "app-navigation-vue",
			"aria-expanded": t.value ? "true" : "false",
			"aria-label": n.value,
			title: n.value,
			variant: "tertiary",
			onClick: r[0] ||= (e) => t.value = !t.value
		}, {
			icon: P(() => [q(Xe, { path: t.value ? J(nt) : J($e) }, null, 8, ["path"])]),
			_: 1
		}, 8, [
			"aria-expanded",
			"aria-label",
			"title"
		])]));
	}
}), [["__scopeId", "data-v-5a15295d"]]), ni = [
	"aria-hidden",
	"aria-label",
	"aria-labelledby",
	"inert"
], ri = { class: "app-navigation__search" }, ii = /* @__PURE__ */ i(/* @__PURE__ */ r({
	__name: "NcAppNavigation",
	props: {
		ariaLabel: {},
		ariaLabelledby: {}
	},
	setup(t) {
		let n = t, r, i = g(Hr, () => w("NcAppNavigation is not mounted inside NcContent, this is probably an error."), !1), a = ne("appNavigationContainer"), o = ft(), c = M(!o.value), d = H(() => o.value && c.value);
		e(() => {
			!n.ariaLabel && !n.ariaLabelledby && w("NcAppNavigation requires either `ariaLabel` or `ariaLabelledby` to be set for accessibility.");
		}), v(o, () => {
			c.value = !o.value;
		}), v(d, () => {
			h();
		}), s(() => {
			i(!0), je("toggle-navigation", m), Me("navigation-toggled", { open: c.value }), r = Pe(a.value, {
				allowOutsideClick: !0,
				clickOutsideDeactivates: () => (o.value && (r.deactivate({ returnFocus: !1 }), f(!1)), !1),
				fallbackFocus: a.value,
				trapStack: ke(),
				escapeDeactivates: !1
			}), h();
		}), u(() => {
			i(!1), Ae("toggle-navigation", m), r.deactivate();
		});
		function f(e) {
			if (c.value === e) {
				Me("navigation-toggled", { open: c.value });
				return;
			}
			c.value = e === void 0 ? !c.value : e;
			let t = getComputedStyle(document.body), n = parseInt(t.getPropertyValue("--animation-quick")) || 100;
			setTimeout(() => {
				Me("navigation-toggled", { open: c.value });
			}, 1.5 * n);
		}
		function m({ open: e }) {
			return f(e);
		}
		function h() {
			d.value ? r.activate() : r.deactivate();
		}
		function _() {
			o.value && f(!1);
		}
		return (e, n) => (p(), K("div", {
			ref: "appNavigationContainer",
			class: O(["app-navigation", {
				"app-navigation--closed": !c.value,
				"app-navigation--legacy": J(le)
			}])
		}, [R("nav", {
			id: "app-navigation-vue",
			"aria-hidden": c.value ? "false" : "true",
			"aria-label": t.ariaLabel || void 0,
			"aria-labelledby": t.ariaLabelledby || void 0,
			class: "app-navigation__content",
			inert: !c.value || void 0,
			onKeydown: xe(_, ["esc"])
		}, [
			R("div", ri, [l(e.$slots, "search", {}, void 0, !0)]),
			R("div", { class: O(["app-navigation__body", { "app-navigation__body--no-list": !e.$slots.list }]) }, [l(e.$slots, "default", {}, void 0, !0)], 2),
			e.$slots.list ? (p(), I($r, {
				key: 0,
				class: "app-navigation__list"
			}, {
				default: P(() => [l(e.$slots, "list", {}, void 0, !0)]),
				_: 3
			})) : T("", !0),
			l(e.$slots, "footer", {}, void 0, !0)
		], 40, ni), q(ti, {
			open: c.value,
			"onUpdate:open": f
		}, null, 8, ["open"])], 2));
	}
}), [["__scopeId", "data-v-1344f70d"]]), ai = {
	name: "ChevronUpIcon",
	emits: ["click"],
	props: {
		title: { type: String },
		fillColor: {
			type: String,
			default: "currentColor"
		},
		size: {
			type: Number,
			default: 24
		}
	}
}, oi = ["aria-hidden", "aria-label"], si = [
	"fill",
	"width",
	"height"
], ci = { d: "M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" }, li = { key: 0 };
function ui(e, r, i, a, o, s) {
	return p(), K("span", t(e.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon chevron-up-icon",
		role: "img",
		onClick: r[0] ||= (t) => e.$emit("click", t)
	}), [(p(), K("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [R("path", ci, [i.title ? (p(), K("title", li, n(i.title), 1)) : T("", !0)])], 8, si))], 16, oi);
}
var di = /* @__PURE__ */ i(ai, [["render", ui]]), fi = {
	name: "ArrowRightIcon",
	emits: ["click"],
	props: {
		title: { type: String },
		fillColor: {
			type: String,
			default: "currentColor"
		},
		size: {
			type: Number,
			default: 24
		}
	}
}, pi = ["aria-hidden", "aria-label"], mi = [
	"fill",
	"width",
	"height"
], hi = { d: "M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" }, gi = { key: 0 };
function _i(e, r, i, a, o, s) {
	return p(), K("span", t(e.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon arrow-right-icon",
		role: "img",
		onClick: r[0] ||= (t) => e.$emit("click", t)
	}), [(p(), K("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [R("path", hi, [i.title ? (p(), K("title", gi, n(i.title), 1)) : T("", !0)])], 8, mi))], 16, pi);
}
var vi = /* @__PURE__ */ i(fi, [["render", _i]]);
//#endregion
//#region node_modules/@nextcloud/vue/dist/chunks/NcInputConfirmCancel-CGTllrXj.mjs
ge(ye);
var yi = {
	name: "NcInputConfirmCancel",
	components: {
		IconArrowRight: vi,
		IconClose: mt,
		NcButton: Y
	},
	props: {
		primary: {
			default: !1,
			type: Boolean
		},
		placeholder: {
			default: "",
			type: String
		},
		modelValue: {
			default: "",
			type: String
		}
	},
	emits: [
		"cancel",
		"confirm",
		"update:modelValue"
	],
	setup() {
		return { isLegacy34: le };
	},
	data() {
		return {
			labelConfirm: z("Confirm changes"),
			labelCancel: z("Cancel changes")
		};
	},
	computed: { valueModel: {
		get() {
			return this.modelValue;
		},
		set(e) {
			this.$emit("update:modelValue", e);
		}
	} },
	methods: {
		confirm() {
			this.$emit("confirm");
		},
		cancel() {
			this.$emit("cancel");
		},
		focusInput() {
			this.$refs.input.focus();
		}
	}
}, bi = ["placeholder"];
function xi(e, t, n, r, i, a) {
	let o = x("IconArrowRight"), s = x("NcButton"), c = x("IconClose");
	return p(), K("div", { class: O(["app-navigation-input-confirm", { "app-navigation-input-confirm--legacy": r.isLegacy34 }]) }, [R("form", {
		onSubmit: t[1] ||= j((...e) => a.confirm && a.confirm(...e), ["prevent"]),
		onKeydown: t[2] ||= xe(j((...e) => a.cancel && a.cancel(...e), [
			"exact",
			"stop",
			"prevent"
		]), ["esc"]),
		onClick: t[3] ||= j(() => {}, ["stop", "prevent"])
	}, [
		W(R("input", {
			ref: "input",
			"onUpdate:modelValue": t[0] ||= (e) => a.valueModel = e,
			type: "text",
			class: "app-navigation-input-confirm__input",
			placeholder: n.placeholder
		}, null, 8, bi), [[D, a.valueModel]]),
		q(s, {
			"aria-label": i.labelConfirm,
			type: "submit",
			variant: "primary",
			onClick: j(a.confirm, ["stop", "prevent"])
		}, {
			icon: P(() => [q(o, { size: 20 })]),
			_: 1
		}, 8, ["aria-label", "onClick"]),
		q(s, {
			"aria-label": i.labelCancel,
			type: "reset",
			variant: n.primary ? "primary" : "tertiary",
			onClick: j(a.cancel, ["stop", "prevent"])
		}, {
			icon: P(() => [q(c, { size: 20 })]),
			_: 1
		}, 8, [
			"aria-label",
			"variant",
			"onClick"
		])
	], 32)], 2);
}
var Si = /* @__PURE__ */ i(yi, [["render", xi], ["__scopeId", "data-v-6926a0b8"]]), Ci = r({
	name: "NcVNodes",
	props: { vnodes: {
		type: [Array, Object],
		default: null
	} },
	render() {
		return this.vnodes || this.$slots?.default?.({});
	}
}), wi = {
	name: "PencilIcon",
	emits: ["click"],
	props: {
		title: { type: String },
		fillColor: {
			type: String,
			default: "currentColor"
		},
		size: {
			type: Number,
			default: 24
		}
	}
}, Ti = ["aria-hidden", "aria-label"], Ei = [
	"fill",
	"width",
	"height"
], Di = { d: "M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" }, Oi = { key: 0 };
function ki(e, r, i, a, o, s) {
	return p(), K("span", t(e.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon pencil-icon",
		role: "img",
		onClick: r[0] ||= (t) => e.$emit("click", t)
	}), [(p(), K("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [R("path", Di, [i.title ? (p(), K("title", Oi, n(i.title), 1)) : T("", !0)])], 8, Ei))], 16, Ti);
}
var Ai = /* @__PURE__ */ i(wi, [["render", ki]]), ji = {
	name: "UndoIcon",
	emits: ["click"],
	props: {
		title: { type: String },
		fillColor: {
			type: String,
			default: "currentColor"
		},
		size: {
			type: Number,
			default: 24
		}
	}
}, Mi = ["aria-hidden", "aria-label"], Ni = [
	"fill",
	"width",
	"height"
], Pi = { d: "M12.5,8C9.85,8 7.45,9 5.6,10.6L2,7V16H11L7.38,12.38C8.77,11.22 10.54,10.5 12.5,10.5C16.04,10.5 19.05,12.81 20.1,16L22.47,15.22C21.08,11.03 17.15,8 12.5,8Z" }, Fi = { key: 0 };
function Ii(e, r, i, a, o, s) {
	return p(), K("span", t(e.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon undo-icon",
		role: "img",
		onClick: r[0] ||= (t) => e.$emit("click", t)
	}), [(p(), K("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [R("path", Pi, [i.title ? (p(), K("title", Fi, n(i.title), 1)) : T("", !0)])], 8, Ni))], 16, Mi);
}
var Li = /* @__PURE__ */ i(ji, [["render", Ii]]);
ge(me);
var Ri = {
	name: "NcAppNavigationIconCollapsible",
	components: {
		NcButton: Y,
		ChevronDown: ht,
		ChevronUp: di
	},
	props: {
		open: {
			type: Boolean,
			required: !0
		},
		active: {
			type: Boolean,
			required: !0
		}
	},
	emits: ["click"],
	setup() {
		return { isLegacy34: le };
	},
	computed: { labelButton() {
		return this.open ? z("Collapse menu") : z("Open menu");
	} },
	methods: { onClick(e) {
		this.$emit("click", e);
	} }
};
function zi(e, t, n, r, i, a) {
	let o = x("ChevronUp"), s = x("ChevronDown"), c = x("NcButton");
	return p(), I(c, {
		class: O(["icon-collapse", {
			"icon-collapse--active": n.active,
			"icon-collapse--open": n.open
		}]),
		"aria-label": a.labelButton,
		variant: n.active && r.isLegacy34 ? "tertiary-on-primary" : "tertiary",
		onClick: a.onClick
	}, {
		icon: P(() => [n.open ? (p(), I(o, {
			key: 0,
			size: 20
		})) : (p(), I(s, {
			key: 1,
			size: 20
		}))]),
		_: 1
	}, 8, [
		"class",
		"aria-label",
		"variant",
		"onClick"
	]);
}
var Bi = /* @__PURE__ */ i(Ri, [["render", zi], ["__scopeId", "data-v-cfbd3794"]]);
ge(de, b);
var Vi = {
	name: "NcAppNavigationItem",
	components: {
		NcActions: at,
		NcActionButton: bt,
		NcAppNavigationIconCollapsible: Bi,
		NcInputConfirmCancel: Si,
		NcLoadingIcon: St,
		NcVNodes: Ci,
		Pencil: Ai,
		Undo: Li
	},
	props: {
		active: {
			type: Boolean,
			default: !1
		},
		name: {
			type: String,
			required: !0
		},
		title: {
			type: String,
			default: null
		},
		id: {
			type: String,
			default: () => Se(),
			validator: (e) => e.trim() !== ""
		},
		icon: {
			type: String,
			default: ""
		},
		loading: {
			type: Boolean,
			default: !1
		},
		to: {
			type: [String, Object],
			default: null
		},
		href: {
			type: String,
			default: null
		},
		allowCollapse: {
			type: Boolean,
			default: !1
		},
		editable: {
			type: Boolean,
			default: !1
		},
		editLabel: {
			type: String,
			default: ""
		},
		editPlaceholder: {
			type: String,
			default: ""
		},
		pinned: {
			type: Boolean,
			default: !1
		},
		undo: {
			type: Boolean,
			default: !1
		},
		open: {
			type: Boolean,
			default: !1
		},
		menuOpen: {
			type: Boolean,
			default: !1
		},
		forceMenu: {
			type: Boolean,
			default: !1
		},
		menuIcon: {
			type: String,
			default: void 0
		},
		menuPlacement: {
			type: String,
			default: "bottom"
		},
		ariaDescription: {
			type: String,
			default: null
		},
		forceDisplayActions: {
			type: Boolean,
			default: !1
		},
		inlineActions: {
			type: Number,
			default: 0
		}
	},
	emits: [
		"update:menuOpen",
		"update:open",
		"update:name",
		"click",
		"undo"
	],
	setup() {
		return {
			isMobile: ft(),
			isLegacy34: le
		};
	},
	data() {
		return {
			actionsBoundariesElement: void 0,
			editingValue: "",
			opened: this.open,
			editingActive: !1,
			menuOpenLocalValue: !1,
			focused: !1
		};
	},
	computed: {
		isRouterLink() {
			return this.to && !this.href;
		},
		canHaveChildren() {
			return this.$parent.$options._componentTag !== "AppNavigationItem";
		},
		editButtonAriaLabel() {
			return this.editLabel ? this.editLabel : z("Edit item");
		},
		undoButtonAriaLabel() {
			return z("Undo changes");
		}
	},
	watch: { open(e) {
		this.opened = e;
	} },
	mounted() {
		this.actionsBoundariesElement = document.querySelector("#content-vue") || void 0;
	},
	methods: {
		onMenuToggle(e) {
			this.$emit("update:menuOpen", e), this.menuOpenLocalValue = e;
		},
		toggleCollapse() {
			this.opened = !this.opened, this.$emit("update:open", this.opened);
		},
		onClick(e, t, n) {
			this.$emit("click", e), !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && n && (t?.(e), e.preventDefault());
		},
		handleEdit() {
			this.editingValue = this.name, this.editingActive = !0, this.onMenuToggle(!1), this.$nextTick(() => {
				this.$refs.editingInput.focusInput();
			});
		},
		cancelEditing() {
			this.editingActive = !1;
		},
		handleEditingDone() {
			this.$emit("update:name", this.editingValue), this.editingValue = "", this.editingActive = !1;
		},
		handleUndo() {
			this.$emit("undo");
		},
		handleFocus() {
			this.focused = !0;
		},
		handleBlur() {
			this.focused = !1;
		},
		handleTab(e) {
			this.$refs.actions && (this.focused ? (e.preventDefault(), this.$refs.actions.$refs.triggerButton.$el.focus(), this.focused = !1) : this.$refs.actions.$refs.triggerButton.$el.blur());
		},
		isExternal(e) {
			return e && e.match(/[a-z]+:\/\//i);
		}
	}
}, Hi = ["id"], Ui = [
	"aria-current",
	"aria-description",
	"aria-expanded",
	"href",
	"target",
	"title",
	"onClick"
], Wi = {
	key: 0,
	class: "editingContainer"
}, Gi = {
	key: 1,
	class: "app-navigation-entry__deleted"
}, Ki = { class: "app-navigation-entry__deleted-description" }, qi = {
	key: 0,
	class: "app-navigation-entry__counter-wrapper"
}, Ji = {
	key: 0,
	class: "app-navigation-entry__children"
};
function Yi(e, t, r, i, a, o) {
	let s = x("NcLoadingIcon"), u = x("NcInputConfirmCancel"), d = x("Pencil"), f = x("NcActionButton"), m = x("Undo"), h = x("NcActions"), g = x("NcAppNavigationIconCollapsible");
	return p(), K("li", {
		id: r.id,
		class: O([{
			"app-navigation-entry--opened": a.opened,
			"app-navigation-entry--pinned": r.pinned,
			"app-navigation-entry--collapsible": r.allowCollapse && !!e.$slots.default
		}, "app-navigation-entry-wrapper"])
	}, [(p(), I(c(o.isRouterLink ? "router-link" : "NcVNodes"), Te(ee({ ...o.isRouterLink && {
		custom: !0,
		to: r.to
	} })), {
		default: P(({ href: c, navigate: _, isActive: v }) => [R("div", { class: O(["app-navigation-entry", {
			"app-navigation-entry--editing": a.editingActive,
			"app-navigation-entry--deleted": r.undo,
			"app-navigation-entry--legacy": i.isLegacy34,
			active: r.to && v || r.active
		}]) }, [
			r.undo ? T("", !0) : (p(), K("a", {
				key: 0,
				class: "app-navigation-entry-link",
				"aria-current": r.active || r.to && v ? "page" : void 0,
				"aria-description": r.ariaDescription,
				"aria-expanded": e.$slots.default ? a.opened.toString() : void 0,
				href: r.href || c || "#",
				target: o.isExternal(r.href) ? "_blank" : void 0,
				title: r.title || r.name,
				onBlur: t[1] ||= (...e) => o.handleBlur && o.handleBlur(...e),
				onClick: (e) => o.onClick(e, _, c),
				onFocus: t[2] ||= (...e) => o.handleFocus && o.handleFocus(...e),
				onKeydown: t[3] ||= xe(j((...e) => o.handleTab && o.handleTab(...e), ["exact"]), ["tab"])
			}, [
				R("div", { class: O(["app-navigation-entry-icon", { [r.icon]: r.icon }]) }, [r.loading ? (p(), I(s, { key: 0 })) : l(e.$slots, "icon", {
					key: 1,
					active: r.active || r.to && v
				}, void 0, !0)], 2),
				R("span", { class: O(["app-navigation-entry__name", { "hidden-visually": a.editingActive }]) }, n(r.name), 3),
				a.editingActive ? (p(), K("div", Wi, [q(u, {
					ref: "editingInput",
					modelValue: a.editingValue,
					"onUpdate:modelValue": t[0] ||= (e) => a.editingValue = e,
					placeholder: r.editPlaceholder === "" ? r.name : r.editPlaceholder,
					primary: r.to && v || r.active,
					onCancel: o.cancelEditing,
					onConfirm: o.handleEditingDone
				}, null, 8, [
					"modelValue",
					"placeholder",
					"primary",
					"onCancel",
					"onConfirm"
				])])) : T("", !0)
			], 40, Ui)),
			r.undo ? (p(), K("div", Gi, [R("div", Ki, n(r.name), 1)])) : T("", !0),
			(e.$slots.actions || e.$slots.counter || r.editable || r.undo) && !a.editingActive ? (p(), K("div", {
				key: 2,
				class: O(["app-navigation-entry__utils", { "app-navigation-entry__utils--display-actions": r.forceDisplayActions || a.menuOpenLocalValue || r.menuOpen }])
			}, [e.$slots.counter ? (p(), K("div", qi, [l(e.$slots, "counter", {}, void 0, !0)])) : T("", !0), e.$slots.actions || r.editable && !a.editingActive || r.undo ? (p(), I(h, {
				key: 1,
				ref: "actions",
				class: "app-navigation-entry__actions",
				container: "#app-navigation-vue",
				boundariesElement: a.actionsBoundariesElement,
				inline: r.inlineActions,
				placement: r.menuPlacement,
				open: r.menuOpen,
				forceMenu: r.forceMenu,
				defaultIcon: r.menuIcon,
				variant: "tertiary",
				"onUpdate:open": o.onMenuToggle
			}, {
				icon: P(() => [l(e.$slots, "menu-icon", {}, void 0, !0)]),
				default: P(() => [
					r.editable && !a.editingActive ? (p(), I(f, {
						key: 0,
						"aria-label": o.editButtonAriaLabel,
						onClick: o.handleEdit
					}, {
						icon: P(() => [q(d, { size: 20 })]),
						default: P(() => [k(" " + n(r.editLabel), 1)]),
						_: 1
					}, 8, ["aria-label", "onClick"])) : T("", !0),
					r.undo ? (p(), I(f, {
						key: 1,
						"aria-label": o.undoButtonAriaLabel,
						onClick: o.handleUndo
					}, {
						icon: P(() => [q(m, { size: 20 })]),
						_: 1
					}, 8, ["aria-label", "onClick"])) : T("", !0),
					l(e.$slots, "actions", {}, void 0, !0)
				]),
				_: 3
			}, 8, [
				"boundariesElement",
				"inline",
				"placement",
				"open",
				"forceMenu",
				"defaultIcon",
				"onUpdate:open"
			])) : T("", !0)], 2)) : T("", !0),
			r.allowCollapse && e.$slots.default ? (p(), I(g, {
				key: 3,
				active: r.to && v || r.active,
				open: a.opened,
				onClick: j(o.toggleCollapse, ["prevent", "stop"])
			}, null, 8, [
				"active",
				"open",
				"onClick"
			])) : T("", !0),
			l(e.$slots, "extra", {}, void 0, !0)
		], 2)]),
		_: 3
	}, 16)), o.canHaveChildren && e.$slots.default ? (p(), K("ul", Ji, [l(e.$slots, "default", {}, void 0, !0)])) : T("", !0)], 10, Hi);
}
var Xi = /* @__PURE__ */ i(Vi, [["render", Yi], ["__scopeId", "data-v-fcab058b"]]), Zi = /* @__PURE__ */ Object.assign({ inheritAttrs: !1 }, {
	__name: "splitpanes",
	props: {
		horizontal: {
			type: Boolean,
			default: !1
		},
		pushOtherPanes: {
			type: Boolean,
			default: !0
		},
		maximizePanes: {
			type: Boolean,
			default: !0
		},
		rtl: {
			type: Boolean,
			default: !1
		},
		firstSplitter: {
			type: Boolean,
			default: !1
		},
		keyboardStep: {
			type: Number,
			default: 5
		}
	},
	emits: [
		"ready",
		"resize",
		"resized",
		"pane-click",
		"pane-maximize",
		"pane-add",
		"pane-remove",
		"splitter-click",
		"splitter-dblclick",
		"direction-changed"
	],
	setup(e, { emit: t }) {
		let n = t, r = e, i = he(), a = C(), l = M([]), u = H(() => l.value.reduce((e, t) => (e[~~t.id] = t) && e, {})), d = H(() => l.value.length), f = M(null), m = M(!1), g = M({
			mouseDown: !1,
			dragging: !1,
			activeSplitter: null,
			cursorOffset: 0
		}), _ = M({
			splitter: null,
			timeoutId: null
		}), y = H(() => ({
			[`splitpanes splitpanes--${r.horizontal ? "horizontal" : "vertical"}`]: !0,
			"splitpanes--dragging": g.value.dragging,
			"splitpanes--ready": m.value
		})), b = () => {
			document.addEventListener("mousemove", S, { passive: !1 }), document.addEventListener("mouseup", te), "ontouchstart" in window && (document.addEventListener("touchmove", S, { passive: !1 }), document.addEventListener("touchend", te));
		}, ee = () => {
			document.removeEventListener("mousemove", S, { passive: !1 }), document.removeEventListener("mouseup", te), "ontouchstart" in window && (document.removeEventListener("touchmove", S, { passive: !1 }), document.removeEventListener("touchend", te));
		}, x = (e, t) => {
			let n = e.target.closest(".splitpanes__splitter");
			if (n) {
				let { left: t, top: i } = n.getBoundingClientRect(), { clientX: a, clientY: o } = "ontouchstart" in window && e.touches ? e.touches[0] : e;
				g.value.cursorOffset = r.horizontal ? o - i : a - t;
			}
			b(), g.value.mouseDown = !0, g.value.activeSplitter = t, document.documentElement.style.cursor = r.horizontal ? "row-resize" : "col-resize";
		}, S = (e) => {
			g.value.mouseDown && (e.preventDefault(), g.value.dragging || (window.getSelection()?.removeAllRanges(), g.value.dragging = !0), requestAnimationFrame(() => {
				O(E(e)), U("resize", { event: e }, !0);
			}));
		}, te = (e) => {
			g.value.dragging && (window.getSelection()?.removeAllRanges(), U("resized", { event: e }, !0)), g.value.mouseDown = !1, g.value.activeSplitter = null, setTimeout(() => {
				g.value.dragging = !1, ee(), document.documentElement.style.cursor = "";
			}, 100);
		}, ne = (e, t) => {
			"ontouchstart" in window && (e.preventDefault(), _.value.splitter === t ? (clearTimeout(_.value.timeoutId), _.value.timeoutId = null, w(e, t), _.value.splitter = null) : (_.value.splitter = t, _.value.timeoutId = setTimeout(() => _.value.splitter = null, 500))), g.value.dragging || U("splitter-click", {
				event: e,
				index: t
			}, !0);
		}, w = (e, t) => {
			if (U("splitter-dblclick", {
				event: e,
				index: t
			}, !0), r.maximizePanes) {
				let n = 0;
				l.value = l.value.map((e, r) => (e.size = r === t ? e.max : e.min, r !== t && (n += e.min), e)), l.value[t].size -= n, U("pane-maximize", {
					event: e,
					index: t,
					pane: l.value[t]
				}), U("resized", {
					event: e,
					index: t
				}, !0);
			}
		}, re = (e, t) => {
			if (!r.keyboardStep) return;
			let n = r.horizontal ? e.key === "ArrowDown" : e.key === "ArrowRight", i = r.horizontal ? e.key === "ArrowUp" : e.key === "ArrowLeft";
			if (!n && !i) return;
			e.preventDefault(), g.value.activeSplitter = t;
			let a = (n ? 1 : -1) * (r.rtl && !r.horizontal ? -1 : 1), o = j(t) + l.value[t].size;
			k(Math.min(Math.max(o + a * r.keyboardStep, 0), 100)), U("resize", { event: e }, !0), U("resized", { event: e }, !0), g.value.activeSplitter = null;
		}, T = (e, t) => {
			let n = u.value[t];
			n && U("pane-click", {
				event: e,
				index: n.index,
				pane: n
			});
		}, E = (e) => {
			let t = f.value.getBoundingClientRect(), { clientX: n, clientY: i } = "ontouchstart" in window && e.touches ? e.touches[0] : e;
			return {
				x: n - (r.horizontal ? 0 : g.value.cursorOffset) - t.left,
				y: i - (r.horizontal ? g.value.cursorOffset : 0) - t.top
			};
		}, D = (e) => {
			e = e[r.horizontal ? "y" : "x"];
			let t = f.value[r.horizontal ? "clientHeight" : "clientWidth"];
			return r.rtl && !r.horizontal && (e = t - e), e * 100 / t;
		}, O = (e) => {
			k(D(e));
		}, k = (e) => {
			let t = g.value.activeSplitter;
			if (t === null || t >= l.value.length - 1) return;
			let n = {
				prevPanesSize: j(t),
				nextPanesSize: N(t),
				prevReachedMinPanes: 0,
				nextReachedMinPanes: 0
			}, i = 0 + (r.pushOtherPanes ? 0 : n.prevPanesSize), a = 100 - (r.pushOtherPanes ? 0 : n.nextPanesSize);
			e = Math.max(Math.min(e, a), i);
			let o = [t, t + 1], s = l.value[o[0]] || null, c = l.value[o[1]] || null, u = s !== null && s.max < 100 && e >= s.max + n.prevPanesSize, d = c !== null && c.max < 100 && e <= 100 - (c.max + N(t + 1));
			if (u || d) {
				u ? (s.size = s.max, c.size = Math.min(Math.max(100 - s.max - n.prevPanesSize - n.nextPanesSize, c.min), c.max)) : (s.size = Math.min(Math.max(100 - c.max - n.prevPanesSize - N(t + 1), s.min), s.max), c.size = c.max);
				return;
			}
			if (r.pushOtherPanes) {
				let t = A(n, e);
				if (!t) return;
				({sums: n, panesToResize: o} = t), s = l.value[o[0]] || null, c = l.value[o[1]] || null;
			}
			s !== null && (s.size = Math.min(Math.max(e - n.prevPanesSize - n.prevReachedMinPanes, s.min), s.max)), c !== null && (c.size = Math.min(Math.max(100 - e - n.nextPanesSize - n.nextReachedMinPanes, c.min), c.max));
		}, A = (e, t) => {
			let n = g.value.activeSplitter, r = [n, n + 1];
			if (t < e.prevPanesSize + l.value[r[0]].min) {
				if (r[0] = P(n).index, e.prevReachedMinPanes = 0, r[0] < n && l.value.forEach((t, i) => {
					i > r[0] && i <= n && (t.size = t.min, e.prevReachedMinPanes += t.min);
				}), r[0] === void 0) return e.prevReachedMinPanes = 0, l.value[0].size = l.value[0].min, l.value.forEach((t, r) => {
					r > 0 && r <= n && (t.size = t.min, e.prevReachedMinPanes += t.min);
				}), l.value[r[1]].size = 100 - e.prevReachedMinPanes - l.value[0].min - e.prevPanesSize - e.nextPanesSize, null;
				e.prevPanesSize = j(r[0]);
			}
			return t > 100 - e.nextPanesSize - l.value[r[1]].min && (r[1] = F(n).index, e.nextReachedMinPanes = 0, r[1] > n + 1 && l.value.forEach((t, i) => {
				i > n && i < r[1] && (t.size = t.min, e.nextReachedMinPanes += t.min);
			}), e.nextPanesSize = r[1] === void 0 ? 0 : N(r[1] - 1), r[1] === void 0) ? (e.nextReachedMinPanes = 0, l.value.forEach((t, r) => {
				r >= n + 1 && (t.size = t.min, e.nextReachedMinPanes += t.min);
			}), r[0] !== void 0 && (l.value[r[0]].size = 100 - e.prevPanesSize - N(r[0] - 1)), null) : {
				sums: e,
				panesToResize: r
			};
		}, j = (e) => l.value.reduce((t, n, r) => t + (r < e ? n.size : 0), 0), N = (e) => l.value.reduce((t, n, r) => t + (r > e + 1 ? n.size : 0), 0), P = (e) => [...l.value].reverse().find((t) => t.index < e && t.size > t.min) || {}, F = (e) => l.value.find((t) => t.index > e + 1 && t.size > t.min) || {}, ie = () => {
			let e = Array.from(f.value?.children || []);
			for (let t of e) {
				let e = t.classList.contains("splitpanes__pane"), n = t.classList.contains("splitpanes__splitter");
				!e && !n && (t.remove(), console.warn("Splitpanes: Only <pane> elements are allowed at the root of <splitpanes>. One of your DOM nodes was removed."));
			}
		}, ae = (e, t, n = !1) => {
			let i = e - 1, a = document.createElement("div");
			a.classList.add("splitpanes__splitter"), n || (a.onmousedown = (e) => x(e, i), typeof window < "u" && "ontouchstart" in window && (a.ontouchstart = (e) => x(e, i)), a.onclick = (e) => ne(e, i + 1), r.keyboardStep && (a.setAttribute("tabindex", "0"), a.setAttribute("role", "separator"), a.setAttribute("aria-orientation", r.horizontal ? "horizontal" : "vertical"), a.onkeydown = (e) => re(e, i))), a.ondblclick = (e) => w(e, i + 1), t.parentNode.insertBefore(a, t);
		}, L = (e) => {
			e.onmousedown = null, e.onclick = null, e.ondblclick = null, e.onkeydown = null, e.remove();
		}, oe = () => {
			let e = Array.from(f.value?.children || []);
			for (let t of e) t.className.includes("splitpanes__splitter") && L(t);
			let t = 0;
			for (let n of e) n.className.includes("splitpanes__pane") && (!t && r.firstSplitter ? ae(t, n, !0) : t && ae(t, n), t++);
		}, R = ({ uid: e, ...t }) => {
			let n = u.value[e];
			for (let [e, r] of Object.entries(t)) n[e] = r;
		}, z = !1, se = (e) => {
			let t = -1;
			Array.from(f.value?.children || []).some((n) => (n.className.includes("splitpanes__pane") && t++, n.isSameNode(e.el))), l.value.splice(t, 0, {
				...e,
				index: t
			}), l.value.forEach((e, t) => e.index = t), m.value && !z && (z = !0, B(() => {
				oe(), le({ addedPane: l.value[t] }), U("pane-add", { pane: l.value[t] }), z = !1;
			}));
		}, ce = (e) => {
			let t = l.value.findIndex((t) => t.id === e);
			l.value[t].el = null;
			let n = l.value.splice(t, 1)[0];
			l.value.forEach((e, t) => e.index = t), B(() => {
				oe(), U("pane-remove", { pane: n }), le({ removedPane: {
					...n,
					index: t
				} });
			});
		}, le = (e = {}) => {
			!e.addedPane && !e.removedPane ? ue() : l.value.some((e) => e.givenSize !== null || e.min || e.max < 100) ? de(e) : V(), m.value && U("resized");
		}, V = () => {
			let e = 100 / d.value, t = 100, n = [], r = [];
			for (let i of l.value) i.size = Math.max(Math.min(e, i.max), i.min), t -= i.size, i.size >= i.max && n.push(i.id), i.size <= i.min && r.push(i.id);
			Math.abs(t) > .1 && fe(t, n, r);
		}, ue = () => {
			let e = 100, t = [], n = [], r = 0;
			for (let i of l.value) e -= i.size, i.givenSize !== null && r++, i.size >= i.max && t.push(i.id), i.size <= i.min && n.push(i.id);
			let i = 100;
			if (e > .1) {
				for (let t of l.value) t.givenSize === null && (t.size = Math.max(Math.min(e / (d.value - r), t.max), t.min)), i -= t.size;
				i > .1 && fe(i, t, n);
			}
		}, de = ({ addedPane: e, removedPane: t } = {}) => {
			let n = l.value.reduce((e, t) => e + (t.givenSize === null ? 0 : t.givenSize), 0), r = l.value.filter((e) => e.givenSize === null).length, i = r > 0 ? (100 - n) / r : 0, a = 0, o = [], s = [];
			for (let e of l.value) a -= e.size, e.size >= e.max && o.push(e.id), e.size <= e.min && s.push(e.id);
			if (!(Math.abs(a) < .1)) {
				a = 100;
				for (let e of l.value) e.givenSize === null && (e.size = Math.max(Math.min(i, e.max), e.min)), a -= e.size, e.size >= e.max && o.push(e.id), e.size <= e.min && s.push(e.id);
				Math.abs(a) > .1 && fe(a, o, s);
			}
		}, fe = (e, t, n) => {
			let r;
			r = e > 0 ? e / (d.value - t.length) : e / (d.value - n.length), l.value.forEach((i, a) => {
				if (e > 0 && !t.includes(i.id)) {
					let t = Math.max(Math.min(i.size + r, i.max), i.min), n = t - i.size;
					e -= n, i.size = t;
				} else if (!n.includes(i.id)) {
					let t = Math.max(Math.min(i.size + r, i.max), i.min), n = t - i.size;
					e -= n, i.size = t;
				}
			}), Math.abs(e) > .1 && m.value && console.warn("Splitpanes: Could not resize panes correctly due to their constraints.");
		}, U = (e, t = void 0, i = !1) => {
			let a = t?.index ?? g.value.activeSplitter ?? null;
			n(e, {
				...t,
				...a !== null && { index: a },
				...i && a !== null && {
					prevPane: l.value[a - +!!r.firstSplitter],
					nextPane: l.value[a + +!r.firstSplitter]
				},
				panes: l.value.map((e) => ({
					min: e.min,
					max: e.max,
					size: e.size
				}))
			});
		};
		v(() => r.firstSplitter, () => oe()), v(() => r.horizontal, (e) => B(() => {
			n("direction-changed", {
				horizontal: e,
				panes: l.value.map((e) => ({
					min: e.min,
					max: e.max,
					size: e.size
				}))
			});
		})), s(() => {
			ie(), oe(), le(), U("ready"), m.value = !0;
		}), h(() => m.value = !1);
		let pe = () => {
			let { class: e, ...t } = i;
			return o("div", {
				ref: f,
				class: [y.value, e],
				...t
			}, a.default?.());
		};
		return De("panes", l), De("indexedPanes", u), De("horizontal", H(() => r.horizontal)), De("requestUpdate", R), De("onPaneAdd", se), De("onPaneRemove", ce), De("onPaneClick", T), (e, t) => (p(), I(c(pe)));
	}
}), Qi = {
	__name: "pane",
	props: {
		size: { type: [Number, String] },
		minSize: {
			type: [Number, String],
			default: 0
		},
		maxSize: {
			type: [Number, String],
			default: 100
		}
	},
	setup(e) {
		let t = e, n = g("requestUpdate"), r = g("onPaneAdd"), i = g("horizontal"), a = g("onPaneRemove"), o = g("onPaneClick"), c = we()?.uid, u = g("indexedPanes"), d = H(() => u.value[c]), f = M(null), m = H(() => {
			let e = isNaN(t.size) || t.size === void 0 ? 0 : parseFloat(t.size);
			return Math.max(Math.min(e, b.value), _.value);
		}), _ = H(() => {
			let e = parseFloat(t.minSize);
			return isNaN(e) ? 0 : e;
		}), b = H(() => {
			let e = parseFloat(t.maxSize);
			return isNaN(e) ? 100 : e;
		}), ee = H(() => {
			let e = d.value?.size ?? (t.size === void 0 ? void 0 : m.value);
			return e === void 0 ? "" : `${i.value ? "height" : "width"}: ${e}%`;
		});
		return v(() => m.value, (e) => n({
			uid: c,
			size: e
		})), v(() => _.value, (e) => n({
			uid: c,
			min: e
		})), v(() => b.value, (e) => n({
			uid: c,
			max: e
		})), s(() => {
			r({
				id: c,
				el: f.value,
				min: _.value,
				max: b.value,
				givenSize: t.size === void 0 ? null : m.value,
				size: m.value
			});
		}), h(() => a(c)), (e, t) => (p(), K("div", {
			ref_key: "paneEl",
			ref: f,
			class: "splitpanes__pane",
			onClick: t[0] ||= (t) => J(o)(t, e._.uid),
			style: y(ee.value)
		}, [l(e.$slots, "default")], 4));
	}
};
//#endregion
//#region node_modules/@nextcloud/vue/dist/chunks/appName-DyNMVZpX.mjs
function $i(e) {
	let t = !1, n;
	return (...r) => (t || (t = !0, n = e(...r)), n);
}
var ea = "missing-app-name";
try {
	ea = "RECHNUNGSWERK";
} catch {
	Fe.error("The `@nextcloud/vue` library was used without setting / replacing the `appName`.");
}
var ta = ea;
function na() {
	return g("appName", ta);
}
var ra = $i(() => {
	let e = pt("core", "apps", []), t = na();
	return e.find(({ id: e }) => e === t)?.name ?? t;
});
//#endregion
//#region node_modules/@nextcloud/vue/dist/chunks/NcAppContent-DavgjaFX.mjs
ge(L);
var ia = /* @__PURE__ */ i(/* @__PURE__ */ r({
	__name: "NcAppContentDetailsToggle",
	setup(e) {
		let t = ft();
		v(t, n), s(() => {
			n(t.value);
		}), h(() => {
			t.value && n(!1);
		});
		function n(e = !0) {
			let t = document.querySelector(".app-navigation .app-navigation-toggle");
			t && (t.style.display = e ? "none" : "", e === !0 && Me("toggle-navigation", { open: !1 }));
		}
		return (e, n) => (p(), I(J(Y), {
			"aria-label": J(z)("Go back to the list"),
			class: O(["app-details-toggle", { "app-details-toggle--mobile": J(t) }]),
			title: J(z)("Go back to the list"),
			variant: "tertiary"
		}, {
			icon: P(() => [q(J(Xe), {
				directional: "",
				path: J(Qe)
			}, null, 8, ["path"])]),
			_: 1
		}, 8, [
			"aria-label",
			"class",
			"title"
		]));
	}
}), [["__scopeId", "data-v-a28923a1"]]), aa = Le("nextcloud").persist().build(), oa = dt().theming?.name ?? "Nextcloud", sa = {
	name: "NcAppContent",
	components: {
		NcAppContentDetailsToggle: ia,
		Pane: Qi,
		Splitpanes: Zi
	},
	props: {
		disableSwipe: {
			type: Boolean,
			default: !1
		},
		listSize: {
			type: Number,
			default: 20
		},
		listMinWidth: {
			type: Number,
			default: 15
		},
		listMaxWidth: {
			type: Number,
			default: 40
		},
		paneConfigKey: {
			type: String,
			default: ""
		},
		showDetails: {
			type: Boolean,
			default: !0
		},
		layout: {
			type: String,
			default: "vertical-split",
			validator(e) {
				return [
					"no-split",
					"vertical-split",
					"horizontal-split"
				].includes(e);
			}
		},
		pageHeading: {
			type: String,
			default: null
		},
		pageTitle: {
			type: String,
			default: null
		}
	},
	emits: ["update:showDetails", "resizeList"],
	setup() {
		return {
			appName: na(),
			localizedAppName: ra(),
			isMobile: ft(),
			isRtl: Ne
		};
	},
	data() {
		return {
			contentHeight: 0,
			swiping: {},
			listPaneSize: this.restorePaneConfig()
		};
	},
	computed: {
		paneConfigID() {
			if (this.paneConfigKey !== "") return `pane-list-size-${this.paneConfigKey}`;
			try {
				return `pane-list-size-${this.appName}`;
			} catch {
				return Fe.info("[NcAppContent]: falling back to global nextcloud pane config"), "pane-list-size-nextcloud";
			}
		},
		detailsPaneSize() {
			return this.listPaneSize ? 100 - this.listPaneSize : this.paneDefaults.details.size;
		},
		paneDefaults() {
			return {
				list: {
					size: this.listSize,
					min: this.listMinWidth,
					max: this.listMaxWidth
				},
				details: {
					size: 100 - this.listSize,
					min: 100 - this.listMaxWidth,
					max: 100 - this.listMinWidth
				}
			};
		},
		realPageTitle() {
			let e = /* @__PURE__ */ new Set();
			if (this.pageTitle) for (let t of this.pageTitle.split(" - ")) e.add(t);
			else if (this.pageHeading) {
				for (let t of this.pageHeading.split(" - ")) e.add(t);
				e.size > 0 && e.add(this.localizedAppName);
			} else return null;
			return e.add(oa), [...e.values()].join(" - ");
		}
	},
	watch: {
		realPageTitle: {
			immediate: !0,
			handler() {
				this.realPageTitle !== null && (document.title = this.realPageTitle);
			}
		},
		paneConfigKey: {
			immediate: !0,
			handler() {
				this.restorePaneConfig();
			}
		}
	},
	mounted() {
		this.disableSwipe || (this.swiping = it(this.$el, { onSwipeEnd: this.handleSwipe })), this.restorePaneConfig();
	},
	methods: {
		handleSwipe(e, t) {
			Math.abs(this.swiping.lengthX) > 70 && (this.swiping.coordsStart.x < 150 && t === "right" ? Me("toggle-navigation", { open: !0 }) : this.swiping.coordsStart.x < 450 && t === "left" && Me("toggle-navigation", { open: !1 }));
		},
		handlePaneResize(e) {
			let t = parseInt(e.panes[0].size, 10);
			aa.setItem(this.paneConfigID, JSON.stringify(t)), this.listPaneSize = t, this.$emit("resizeList", { size: t }), Fe.debug("[NcAppContent] pane config", { listPaneSize: t });
		},
		restorePaneConfig() {
			let e = parseInt(aa.getItem(this.paneConfigID), 10);
			if (!isNaN(e) && e !== this.listPaneSize) return Fe.debug("[NcAppContent] pane config", { listPaneSize: e }), this.listPaneSize = e, e;
		},
		hideDetails() {
			this.$emit("update:showDetails", !1);
		}
	}
}, ca = {
	key: 0,
	class: "hidden-visually"
}, la = { class: "app-content-wrapper__list" }, ua = {
	key: 1,
	class: "app-content-wrapper"
};
function da(e, t, r, i, a, o) {
	let s = x("NcAppContentDetailsToggle"), c = x("Pane"), u = x("Splitpanes");
	return p(), K("main", {
		id: "app-content-vue",
		class: O(["app-content no-snapper", { "app-content--has-list": !!e.$slots.list }])
	}, [
		r.pageHeading ? (p(), K("h1", ca, n(r.pageHeading), 1)) : T("", !0),
		e.$slots.list ? (p(), K(G, { key: 1 }, [i.isMobile || r.layout === "no-split" ? (p(), K("div", {
			key: 0,
			class: O(["app-content-wrapper app-content-wrapper--no-split", {
				"app-content-wrapper--show-details": r.showDetails,
				"app-content-wrapper--show-list": !r.showDetails,
				"app-content-wrapper--mobile": i.isMobile
			}])
		}, [
			r.showDetails ? (p(), I(s, {
				key: 0,
				onClick: j(o.hideDetails, ["stop", "prevent"])
			}, null, 8, ["onClick"])) : T("", !0),
			W(R("div", la, [l(e.$slots, "list", {}, void 0, !0)], 512), [[pe, !r.showDetails]]),
			r.showDetails ? l(e.$slots, "default", { key: 1 }, void 0, !0) : T("", !0)
		], 2)) : r.layout === "vertical-split" || r.layout === "horizontal-split" ? (p(), K("div", ua, [q(u, {
			horizontal: r.layout === "horizontal-split",
			class: O(["default-theme", {
				"splitpanes--horizontal": r.layout === "horizontal-split",
				"splitpanes--vertical": r.layout === "vertical-split"
			}]),
			rtl: i.isRtl,
			onResized: o.handlePaneResize
		}, {
			default: P(() => [q(c, {
				class: "splitpanes__pane-list",
				size: a.listPaneSize || o.paneDefaults.list.size,
				minSize: o.paneDefaults.list.min,
				maxSize: o.paneDefaults.list.max
			}, {
				default: P(() => [l(e.$slots, "list", {}, void 0, !0)]),
				_: 3
			}, 8, [
				"size",
				"minSize",
				"maxSize"
			]), q(c, {
				class: "splitpanes__pane-details",
				size: o.detailsPaneSize,
				minSize: o.paneDefaults.details.min,
				maxSize: o.paneDefaults.details.max
			}, {
				default: P(() => [l(e.$slots, "default", {}, void 0, !0)]),
				_: 3
			}, 8, [
				"size",
				"minSize",
				"maxSize"
			])]),
			_: 3
		}, 8, [
			"horizontal",
			"class",
			"rtl",
			"onResized"
		])])) : T("", !0)], 64)) : T("", !0),
		e.$slots.list ? T("", !0) : l(e.$slots, "default", { key: 2 }, void 0, !0)
	], 2);
}
var fa = /* @__PURE__ */ i(sa, [["render", da], ["__scopeId", "data-v-51427d61"]]), pa = ["title"], ma = /* @__PURE__ */ i(/* @__PURE__ */ r({
	__name: "NcCounterBubble",
	props: {
		count: {},
		active: { type: Boolean },
		type: { default: "" },
		raw: { type: Boolean }
	},
	setup(e) {
		let t = e, r = H(() => t.raw ? t.count.toString() : new Intl.NumberFormat(_(), {
			notation: "compact",
			compactDisplay: "short"
		}).format(t.count)), i = H(() => {
			if (t.raw) return;
			let e = t.count.toString();
			if (e !== r.value) return e;
		});
		return (t, a) => (p(), K("div", {
			class: O(["counter-bubble__counter", {
				active: e.active,
				"counter-bubble__counter--highlighted": e.type === "highlighted",
				"counter-bubble__counter--outlined": e.type === "outlined"
			}]),
			title: i.value
		}, n(r.value), 11, pa));
	}
}), [["__scopeId", "data-v-36ffc13f"]]), Z = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, ha = {
	name: "FileDocumentIcon",
	emits: ["click"],
	props: {
		title: { type: String },
		fillColor: {
			type: String,
			default: "currentColor"
		},
		size: {
			type: Number,
			default: 24
		}
	}
}, ga = ["aria-hidden", "aria-label"], _a = [
	"fill",
	"width",
	"height"
], va = { d: "M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M15,18V16H6V18H15M18,14V12H6V14H18Z" }, ya = { key: 0 };
function ba(e, r, i, a, o, s) {
	return p(), K("span", t(e.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon file-document-icon",
		role: "img",
		onClick: r[0] ||= (t) => e.$emit("click", t)
	}), [(p(), K("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [R("path", va, [i.title ? (p(), K("title", ya, n(i.title), 1)) : T("", !0)])], 8, _a))], 16, ga);
}
var xa = /*#__PURE__*/ Z(ha, [["render", ba]]), Sa = {
	name: "FileDocumentOutlineIcon",
	emits: ["click"],
	props: {
		title: { type: String },
		fillColor: {
			type: String,
			default: "currentColor"
		},
		size: {
			type: Number,
			default: 24
		}
	}
}, Ca = ["aria-hidden", "aria-label"], wa = [
	"fill",
	"width",
	"height"
], Ta = { d: "M6,2A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6M6,4H13V9H18V20H6V4M8,12V14H16V12H8M8,16V18H13V16H8Z" }, Ea = { key: 0 };
function Da(e, r, i, a, o, s) {
	return p(), K("span", t(e.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon file-document-outline-icon",
		role: "img",
		onClick: r[0] ||= (t) => e.$emit("click", t)
	}), [(p(), K("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [R("path", Ta, [i.title ? (p(), K("title", Ea, n(i.title), 1)) : T("", !0)])], 8, wa))], 16, Ca);
}
var Oa = /*#__PURE__*/ Z(Sa, [["render", Da]]), ka = {
	name: "AccountGroupIcon",
	emits: ["click"],
	props: {
		title: { type: String },
		fillColor: {
			type: String,
			default: "currentColor"
		},
		size: {
			type: Number,
			default: 24
		}
	}
}, Aa = ["aria-hidden", "aria-label"], ja = [
	"fill",
	"width",
	"height"
], Ma = { d: "M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z" }, Na = { key: 0 };
function Pa(e, r, i, a, o, s) {
	return p(), K("span", t(e.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon account-group-icon",
		role: "img",
		onClick: r[0] ||= (t) => e.$emit("click", t)
	}), [(p(), K("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [R("path", Ma, [i.title ? (p(), K("title", Na, n(i.title), 1)) : T("", !0)])], 8, ja))], 16, Aa);
}
var Fa = /*#__PURE__*/ Z(ka, [["render", Pa]]), Ia = {
	name: "AccountIcon",
	emits: ["click"],
	props: {
		title: { type: String },
		fillColor: {
			type: String,
			default: "currentColor"
		},
		size: {
			type: Number,
			default: 24
		}
	}
}, La = ["aria-hidden", "aria-label"], Ra = [
	"fill",
	"width",
	"height"
], za = { d: "M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" }, Ba = { key: 0 };
function Va(e, r, i, a, o, s) {
	return p(), K("span", t(e.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon account-icon",
		role: "img",
		onClick: r[0] ||= (t) => e.$emit("click", t)
	}), [(p(), K("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [R("path", za, [i.title ? (p(), K("title", Ba, n(i.title), 1)) : T("", !0)])], 8, Ra))], 16, La);
}
var Ha = /*#__PURE__*/ Z(Ia, [["render", Va]]), Ua = {
	name: "PackageVariantIcon",
	emits: ["click"],
	props: {
		title: { type: String },
		fillColor: {
			type: String,
			default: "currentColor"
		},
		size: {
			type: Number,
			default: 24
		}
	}
}, Wa = ["aria-hidden", "aria-label"], Ga = [
	"fill",
	"width",
	"height"
], Ka = { d: "M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z" }, qa = { key: 0 };
function Ja(e, r, i, a, o, s) {
	return p(), K("span", t(e.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon package-variant-icon",
		role: "img",
		onClick: r[0] ||= (t) => e.$emit("click", t)
	}), [(p(), K("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [R("path", Ka, [i.title ? (p(), K("title", qa, n(i.title), 1)) : T("", !0)])], 8, Ga))], 16, Wa);
}
var Ya = /*#__PURE__*/ Z(Ua, [["render", Ja]]), Xa = {
	name: "TextBoxIcon",
	emits: ["click"],
	props: {
		title: { type: String },
		fillColor: {
			type: String,
			default: "currentColor"
		},
		size: {
			type: Number,
			default: 24
		}
	}
}, Za = ["aria-hidden", "aria-label"], Qa = [
	"fill",
	"width",
	"height"
], $a = { d: "M14,17H7V15H14M17,13H7V11H17M17,9H7V7H17M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" }, eo = { key: 0 };
function to(e, r, i, a, o, s) {
	return p(), K("span", t(e.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon text-box-icon",
		role: "img",
		onClick: r[0] ||= (t) => e.$emit("click", t)
	}), [(p(), K("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [R("path", $a, [i.title ? (p(), K("title", eo, n(i.title), 1)) : T("", !0)])], 8, Qa))], 16, Za);
}
var no = /*#__PURE__*/ Z(Xa, [["render", to]]), ro = {
	name: "CogIcon",
	emits: ["click"],
	props: {
		title: { type: String },
		fillColor: {
			type: String,
			default: "currentColor"
		},
		size: {
			type: Number,
			default: 24
		}
	}
}, io = ["aria-hidden", "aria-label"], ao = [
	"fill",
	"width",
	"height"
], oo = { d: "M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z" }, so = { key: 0 };
function co(e, r, i, a, o, s) {
	return p(), K("span", t(e.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon cog-icon",
		role: "img",
		onClick: r[0] ||= (t) => e.$emit("click", t)
	}), [(p(), K("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [R("path", oo, [i.title ? (p(), K("title", so, n(i.title), 1)) : T("", !0)])], 8, ao))], 16, io);
}
var lo = /*#__PURE__*/ Z(ro, [["render", co]]), uo = {
	name: "EmailAlertOutlineIcon",
	emits: ["click"],
	props: {
		title: { type: String },
		fillColor: {
			type: String,
			default: "currentColor"
		},
		size: {
			type: Number,
			default: 24
		}
	}
}, fo = ["aria-hidden", "aria-label"], po = [
	"fill",
	"width",
	"height"
], mo = { d: "M24 7H22V13H24V7M24 15H22V17H24V15M20 6C20 4.9 19.1 4 18 4H2C.9 4 0 4.9 0 6V18C0 19.1 .9 20 2 20H18C19.1 20 20 19.1 20 18V6M18 6L10 11L2 6H18M18 18H2V8L10 13L18 8V18Z" }, ho = { key: 0 };
function go(e, r, i, a, o, s) {
	return p(), K("span", t(e.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon email-alert-outline-icon",
		role: "img",
		onClick: r[0] ||= (t) => e.$emit("click", t)
	}), [(p(), K("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [R("path", mo, [i.title ? (p(), K("title", ho, n(i.title), 1)) : T("", !0)])], 8, po))], 16, fo);
}
var _o = /*#__PURE__*/ Z(uo, [["render", go]]), vo = {
	name: "LockIcon",
	emits: ["click"],
	props: {
		title: { type: String },
		fillColor: {
			type: String,
			default: "currentColor"
		},
		size: {
			type: Number,
			default: 24
		}
	}
}, yo = ["aria-hidden", "aria-label"], bo = [
	"fill",
	"width",
	"height"
], xo = { d: "M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z" }, So = { key: 0 };
function Co(e, r, i, a, o, s) {
	return p(), K("span", t(e.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon lock-icon",
		role: "img",
		onClick: r[0] ||= (t) => e.$emit("click", t)
	}), [(p(), K("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [R("path", xo, [i.title ? (p(), K("title", So, n(i.title), 1)) : T("", !0)])], 8, bo))], 16, yo);
}
var wo = /*#__PURE__*/ Z(vo, [["render", Co]]);
//#endregion
//#region src/api/client.ts
function To(e) {
	return Re(`/apps/rechnungswerk/api/v1${e}`);
}
function Eo(e) {
	let t = e;
	return {
		status: t.response?.status ?? 0,
		message: t.response?.data?.error ?? t.message ?? "Unknown error"
	};
}
async function Q(e) {
	try {
		let { data: t } = await vt.get(To(e));
		return t;
	} catch (e) {
		throw Eo(e);
	}
}
async function $(e, t) {
	try {
		let { data: n } = await vt.post(To(e), t);
		return n;
	} catch (e) {
		throw Eo(e);
	}
}
async function Do(e, t) {
	try {
		let { data: n } = await vt.patch(To(e), t);
		return n;
	} catch (e) {
		throw Eo(e);
	}
}
async function Oo(e, t) {
	try {
		let { data: n } = await vt.put(To(e), t);
		return n;
	} catch (e) {
		throw Eo(e);
	}
}
async function ko(e) {
	try {
		let { data: t } = await vt.delete(To(e));
		return t;
	} catch (e) {
		throw Eo(e);
	}
}
//#endregion
//#region src/api/permissions.ts
var Ao = () => Q("/permission-info"), jo = () => Q("/permissions"), Mo = (e) => Oo("/permissions", e), No = (e) => Q(`/principals/search?query=${encodeURIComponent(e)}`), Po = nn("permissions", () => {
	let e = M(null), t = M(!1);
	async function n() {
		try {
			e.value = await Ao();
		} catch {
			e.value = {
				isAdmin: !1,
				hasAccess: !1,
				canEdit: !1
			};
		} finally {
			t.value = !0;
		}
	}
	return {
		info: e,
		loaded: t,
		fetch: n
	};
}), Fo = () => Q("/dunning"), Io = nn("dunning", () => {
	let e = M([]), t = M(!1);
	async function n() {
		t.value = !0;
		try {
			e.value = await Fo();
		} finally {
			t.value = !1;
		}
	}
	return {
		entries: e,
		loading: t,
		fetchAll: n,
		actionableCount: H(() => e.value.filter((e) => e.scheduledLevel > e.dunningLevel).length),
		overdueCount: H(() => e.value.filter((e) => e.daysOverdue > 0).length)
	};
}), Lo = /*#__PURE__*/ Z(/* @__PURE__ */ r({
	__name: "App",
	setup(e) {
		let t = Po(), r = Io(), i = H(() => t.info?.hasAccess ?? !1), a = H(() => t.info?.isAdmin ?? !1);
		return s(async () => {
			await t.fetch(), i.value && r.fetchAll().catch(() => {});
		}), (e, o) => {
			let s = x("router-view");
			return p(), I(J(Yr), { appName: "rechnungswerk" }, {
				default: P(() => [J(t).loaded ? i.value ? (p(), K(G, { key: 2 }, [q(J(ii), null, {
					footer: P(() => [q(J(Xi), {
						name: J(f)("rechnungswerk", "Mein Kontakt"),
						to: { name: "my-contact" }
					}, {
						icon: P(() => [q(Ha, { size: 20 })]),
						_: 1
					}, 8, ["name"]), a.value ? (p(), I(J(Xi), {
						key: 0,
						name: J(f)("rechnungswerk", "Einstellungen"),
						to: { name: "settings" }
					}, {
						icon: P(() => [q(lo, { size: 20 })]),
						_: 1
					}, 8, ["name"])) : T("", !0)]),
					default: P(() => [
						q(J(Xi), {
							name: J(f)("rechnungswerk", "Rechnungen"),
							to: { name: "invoices" }
						}, {
							icon: P(() => [q(xa, { size: 20 })]),
							_: 1
						}, 8, ["name"]),
						q(J(Xi), {
							name: J(f)("rechnungswerk", "Angebote"),
							to: { name: "quotes" }
						}, {
							icon: P(() => [q(Oa, { size: 20 })]),
							_: 1
						}, 8, ["name"]),
						q(J(Xi), {
							name: J(f)("rechnungswerk", "Mahnungen"),
							to: { name: "dunning" }
						}, Ee({
							icon: P(() => [q(_o, { size: 20 })]),
							_: 2
						}, [J(r).actionableCount > 0 ? {
							name: "counter",
							fn: P(() => [q(J(ma), { type: "highlighted" }, {
								default: P(() => [k(n(J(r).actionableCount), 1)]),
								_: 1
							})]),
							key: "0"
						} : void 0]), 1032, ["name"]),
						q(J(Xi), {
							name: J(f)("rechnungswerk", "Kunden"),
							to: { name: "customers" }
						}, {
							icon: P(() => [q(Fa, { size: 20 })]),
							_: 1
						}, 8, ["name"]),
						q(J(Xi), {
							name: J(f)("rechnungswerk", "Produkte"),
							to: { name: "products" }
						}, {
							icon: P(() => [q(Ya, { size: 20 })]),
							_: 1
						}, 8, ["name"]),
						q(J(Xi), {
							name: J(f)("rechnungswerk", "Textbausteine"),
							to: { name: "text-snippets" }
						}, {
							icon: P(() => [q(no, { size: 20 })]),
							_: 1
						}, 8, ["name"])
					]),
					_: 1
				}), q(J(fa), null, {
					default: P(() => [q(s)]),
					_: 1
				})], 64)) : (p(), I(J(fa), { key: 1 }, {
					default: P(() => [q(J(_t), {
						name: J(f)("rechnungswerk", "Kein Zugriff"),
						description: J(f)("rechnungswerk", "Du bist für RechnungsWerk nicht freigeschaltet. Wende dich an einen Administrator.")
					}, {
						icon: P(() => [q(wo, { size: 20 })]),
						_: 1
					}, 8, ["name", "description"])]),
					_: 1
				})) : (p(), I(J(fa), { key: 0 }, {
					default: P(() => [q(J(St), {
						class: "rw-app-loading",
						size: 44
					})]),
					_: 1
				}))]),
				_: 1
			});
		};
	}
}), [["__scopeId", "data-v-5254f09a"]]), Ro = {
	name: "InformationOutlineIcon",
	emits: ["click"],
	props: {
		title: { type: String },
		fillColor: {
			type: String,
			default: "currentColor"
		},
		size: {
			type: Number,
			default: 24
		}
	}
}, zo = ["aria-hidden", "aria-label"], Bo = [
	"fill",
	"width",
	"height"
], Vo = { d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" }, Ho = { key: 0 };
function Uo(e, r, i, a, o, s) {
	return p(), K("span", t(e.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon information-outline-icon",
		role: "img",
		onClick: r[0] ||= (t) => e.$emit("click", t)
	}), [(p(), K("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [R("path", Vo, [i.title ? (p(), K("title", Ho, n(i.title), 1)) : T("", !0)])], 8, Bo))], 16, zo);
}
var Wo = /*#__PURE__*/ Z(Ro, [["render", Uo]]), Go = { class: "info-icon-wrapper" }, Ko = {
	class: "info-popup",
	tabindex: "0"
}, qo = /*#__PURE__*/ Z(/* @__PURE__ */ r({
	__name: "InfoIcon",
	setup(e) {
		return (e, t) => (p(), K("span", Go, [q(J(Ie), {
			popupRole: "tooltip",
			noFocusTrap: ""
		}, {
			trigger: P(() => [q(Wo, {
				class: "info-icon",
				size: 14,
				tabindex: "0"
			})]),
			default: P(() => [R("div", Ko, [l(e.$slots, "default", {}, void 0, !0)])]),
			_: 3
		})]));
	}
}), [["__scopeId", "data-v-6c57a620"]]), Jo = {
	name: "PlusIcon",
	emits: ["click"],
	props: {
		title: { type: String },
		fillColor: {
			type: String,
			default: "currentColor"
		},
		size: {
			type: Number,
			default: 24
		}
	}
}, Yo = ["aria-hidden", "aria-label"], Xo = [
	"fill",
	"width",
	"height"
], Zo = { d: "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" }, Qo = { key: 0 };
function $o(e, r, i, a, o, s) {
	return p(), K("span", t(e.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon plus-icon",
		role: "img",
		onClick: r[0] ||= (t) => e.$emit("click", t)
	}), [(p(), K("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [R("path", Zo, [i.title ? (p(), K("title", Qo, n(i.title), 1)) : T("", !0)])], 8, Xo))], 16, Yo);
}
var es = /*#__PURE__*/ Z(Jo, [["render", $o]]), ts = {
	name: "DownloadIcon",
	emits: ["click"],
	props: {
		title: { type: String },
		fillColor: {
			type: String,
			default: "currentColor"
		},
		size: {
			type: Number,
			default: 24
		}
	}
}, ns = ["aria-hidden", "aria-label"], rs = [
	"fill",
	"width",
	"height"
], is = { d: "M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" }, as = { key: 0 };
function os(e, r, i, a, o, s) {
	return p(), K("span", t(e.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon download-icon",
		role: "img",
		onClick: r[0] ||= (t) => e.$emit("click", t)
	}), [(p(), K("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [R("path", is, [i.title ? (p(), K("title", as, n(i.title), 1)) : T("", !0)])], 8, rs))], 16, ns);
}
var ss = /*#__PURE__*/ Z(ts, [["render", os]]), cs = {
	name: "ContentCopyIcon",
	emits: ["click"],
	props: {
		title: { type: String },
		fillColor: {
			type: String,
			default: "currentColor"
		},
		size: {
			type: Number,
			default: 24
		}
	}
}, ls = ["aria-hidden", "aria-label"], us = [
	"fill",
	"width",
	"height"
], ds = { d: "M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z" }, fs = { key: 0 };
function ps(e, r, i, a, o, s) {
	return p(), K("span", t(e.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon content-copy-icon",
		role: "img",
		onClick: r[0] ||= (t) => e.$emit("click", t)
	}), [(p(), K("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [R("path", ds, [i.title ? (p(), K("title", fs, n(i.title), 1)) : T("", !0)])], 8, us))], 16, ls);
}
var ms = /*#__PURE__*/ Z(cs, [["render", ps]]), hs = {
	name: "PencilOutlineIcon",
	emits: ["click"],
	props: {
		title: { type: String },
		fillColor: {
			type: String,
			default: "currentColor"
		},
		size: {
			type: Number,
			default: 24
		}
	}
}, gs = ["aria-hidden", "aria-label"], _s = [
	"fill",
	"width",
	"height"
], vs = { d: "M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z" }, ys = { key: 0 };
function bs(e, r, i, a, o, s) {
	return p(), K("span", t(e.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon pencil-outline-icon",
		role: "img",
		onClick: r[0] ||= (t) => e.$emit("click", t)
	}), [(p(), K("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [R("path", vs, [i.title ? (p(), K("title", ys, n(i.title), 1)) : T("", !0)])], 8, _s))], 16, gs);
}
var xs = /*#__PURE__*/ Z(hs, [["render", bs]]), Ss = {
	name: "CloseCircleIcon",
	emits: ["click"],
	props: {
		title: { type: String },
		fillColor: {
			type: String,
			default: "currentColor"
		},
		size: {
			type: Number,
			default: 24
		}
	}
}, Cs = ["aria-hidden", "aria-label"], ws = [
	"fill",
	"width",
	"height"
], Ts = { d: "M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z" }, Es = { key: 0 };
function Ds(e, r, i, a, o, s) {
	return p(), K("span", t(e.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon close-circle-icon",
		role: "img",
		onClick: r[0] ||= (t) => e.$emit("click", t)
	}), [(p(), K("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [R("path", Ts, [i.title ? (p(), K("title", Es, n(i.title), 1)) : T("", !0)])], 8, ws))], 16, Cs);
}
var Os = /*#__PURE__*/ Z(Ss, [["render", Ds]]), ks = {
	name: "CheckCircleIcon",
	emits: ["click"],
	props: {
		title: { type: String },
		fillColor: {
			type: String,
			default: "currentColor"
		},
		size: {
			type: Number,
			default: 24
		}
	}
}, As = ["aria-hidden", "aria-label"], js = [
	"fill",
	"width",
	"height"
], Ms = { d: "M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" }, Ns = { key: 0 };
function Ps(e, r, i, a, o, s) {
	return p(), K("span", t(e.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon check-circle-icon",
		role: "img",
		onClick: r[0] ||= (t) => e.$emit("click", t)
	}), [(p(), K("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [R("path", Ms, [i.title ? (p(), K("title", Ns, n(i.title), 1)) : T("", !0)])], 8, js))], 16, As);
}
var Fs = /*#__PURE__*/ Z(ks, [["render", Ps]]), Is = {
	name: "ClockOutlineIcon",
	emits: ["click"],
	props: {
		title: { type: String },
		fillColor: {
			type: String,
			default: "currentColor"
		},
		size: {
			type: Number,
			default: 24
		}
	}
}, Ls = ["aria-hidden", "aria-label"], Rs = [
	"fill",
	"width",
	"height"
], zs = { d: "M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z" }, Bs = { key: 0 };
function Vs(e, r, i, a, o, s) {
	return p(), K("span", t(e.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon clock-outline-icon",
		role: "img",
		onClick: r[0] ||= (t) => e.$emit("click", t)
	}), [(p(), K("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [R("path", zs, [i.title ? (p(), K("title", Bs, n(i.title), 1)) : T("", !0)])], 8, Rs))], 16, Ls);
}
var Hs = /*#__PURE__*/ Z(Is, [["render", Vs]]), Us = {
	name: "HelpCircleOutlineIcon",
	emits: ["click"],
	props: {
		title: { type: String },
		fillColor: {
			type: String,
			default: "currentColor"
		},
		size: {
			type: Number,
			default: 24
		}
	}
}, Ws = ["aria-hidden", "aria-label"], Gs = [
	"fill",
	"width",
	"height"
], Ks = { d: "M11,18H13V16H11V18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,6A4,4 0 0,0 8,10H10A2,2 0 0,1 12,8A2,2 0 0,1 14,10C14,12 11,11.75 11,15H13C13,12.75 16,12.5 16,10A4,4 0 0,0 12,6Z" }, qs = { key: 0 };
function Js(e, r, i, a, o, s) {
	return p(), K("span", t(e.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon help-circle-outline-icon",
		role: "img",
		onClick: r[0] ||= (t) => e.$emit("click", t)
	}), [(p(), K("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [R("path", Ks, [i.title ? (p(), K("title", qs, n(i.title), 1)) : T("", !0)])], 8, Gs))], 16, Ws);
}
var Ys = /*#__PURE__*/ Z(Us, [["render", Js]]), Xs = {
	name: "CheckboxBlankOutlineIcon",
	emits: ["click"],
	props: {
		title: { type: String },
		fillColor: {
			type: String,
			default: "currentColor"
		},
		size: {
			type: Number,
			default: 24
		}
	}
}, Zs = ["aria-hidden", "aria-label"], Qs = [
	"fill",
	"width",
	"height"
], $s = { d: "M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z" }, ec = { key: 0 };
function tc(e, r, i, a, o, s) {
	return p(), K("span", t(e.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon checkbox-blank-outline-icon",
		role: "img",
		onClick: r[0] ||= (t) => e.$emit("click", t)
	}), [(p(), K("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [R("path", $s, [i.title ? (p(), K("title", ec, n(i.title), 1)) : T("", !0)])], 8, Qs))], 16, Zs);
}
var nc = /*#__PURE__*/ Z(Xs, [["render", tc]]), rc = {
	name: "CheckboxMarkedIcon",
	emits: ["click"],
	props: {
		title: { type: String },
		fillColor: {
			type: String,
			default: "currentColor"
		},
		size: {
			type: Number,
			default: 24
		}
	}
}, ic = ["aria-hidden", "aria-label"], ac = [
	"fill",
	"width",
	"height"
], oc = { d: "M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" }, sc = { key: 0 };
function cc(e, r, i, a, o, s) {
	return p(), K("span", t(e.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon checkbox-marked-icon",
		role: "img",
		onClick: r[0] ||= (t) => e.$emit("click", t)
	}), [(p(), K("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [R("path", oc, [i.title ? (p(), K("title", sc, n(i.title), 1)) : T("", !0)])], 8, ac))], 16, ic);
}
var lc = /*#__PURE__*/ Z(rc, [["render", cc]]), uc = () => Q("/invoices"), dc = (e) => Q(`/invoices/${e}`), fc = (e) => $("/invoices", { data: e }), pc = (e, t) => Do(`/invoices/${e}`, { data: t }), mc = (e) => ko(`/invoices/${e}`), hc = (e) => $(`/invoices/${e}/commit`, {}), gc = (e) => $(`/invoices/${e}/cancel`, {}), _c = (e) => $(`/invoices/${e}/duplicate`, {}), vc = (e, t) => $(`/invoices/${e}/pay`, t ? { date: t } : {}), yc = (e) => $(`/invoices/${e}/unpay`, {}), bc = (e, t) => Do(`/invoices/${e}/dunning`, { level: t }), xc = (e) => To(`/invoices/${e}/pdf`), Sc = (e) => To(`/invoices/${e}/preview`) + "?t=" + Date.now(), Cc = (e) => {
	let t = document.createElement("a");
	t.href = xc(e), t.download = "", t.rel = "noopener", t.style.display = "none", document.body.appendChild(t), t.click(), t.remove();
}, wc = (e) => To(`/invoices/${e}/dunning/pdf`), Tc = (e) => {
	let t = document.createElement("a");
	t.href = wc(e), t.download = "", t.rel = "noopener", t.style.display = "none", document.body.appendChild(t), t.click(), t.remove();
}, Ec = (e, t) => $(`/invoices/${e}/send`, t), Dc = nn("invoice", () => {
	let e = M([]), t = M(!1);
	async function n() {
		t.value = !0;
		try {
			e.value = await uc();
		} finally {
			t.value = !1;
		}
	}
	let r = (e) => dc(e);
	async function i(e) {
		let t = await fc(e);
		return await n(), t;
	}
	async function a(e, t) {
		let r = await pc(e, t);
		return await n(), r;
	}
	async function o(t) {
		await mc(t), e.value = e.value.filter((e) => e.id !== t);
	}
	async function s(e) {
		let t = await hc(e);
		return await n(), t;
	}
	async function c(e) {
		let t = await gc(e);
		return await n(), t;
	}
	async function l(e) {
		let t = await _c(e);
		return await n(), t;
	}
	async function u(e, t) {
		let r = await vc(e, t);
		return await n(), r;
	}
	async function d(e) {
		let t = await yc(e);
		return await n(), t;
	}
	async function f(e, t) {
		let r = await bc(e, t);
		return await n(), r;
	}
	return {
		invoices: e,
		loading: t,
		fetchAll: n,
		get: r,
		create: i,
		update: a,
		remove: o,
		commit: s,
		cancel: c,
		duplicate: l,
		markPaid: u,
		markUnpaid: d,
		setDunningLevel: f
	};
}), Oc = (e) => $("/smtp/test", e), kc = () => Q("/settings"), Ac = (e) => Oo("/settings", { data: e }), jc = (e) => Oo("/settings/logo", { path: e }), Mc = () => ko("/settings/logo"), Nc = (e) => `${To("/settings/logo")}?v=${e}`, Pc = (e) => Oo("/settings/archive-folder", { path: e }), Fc = () => ko("/settings/archive-folder"), Ic = nn("settings", () => {
	let e = M(null), t = M(!1), n = M(!1);
	async function r() {
		t.value = !0;
		try {
			e.value = await kc();
		} finally {
			t.value = !1;
		}
	}
	async function i(t) {
		n.value = !0;
		try {
			return e.value = await Ac(t), e.value;
		} finally {
			n.value = !1;
		}
	}
	return {
		settings: e,
		loading: t,
		saving: n,
		fetch: r,
		save: i
	};
}), Lc = [
	"C62",
	"HUR",
	"DAY",
	"MON",
	"KGM",
	"LS",
	"KWH",
	"LTR",
	"MTR",
	"KMT",
	"MTK",
	"GRM",
	"TNE"
], Rc = {
	C62: "Stück",
	HUR: "Stunde",
	DAY: "Tag",
	MON: "Monat",
	KGM: "kg",
	LS: "Pauschal",
	KWH: "kWh",
	LTR: "Liter",
	MTR: "Meter",
	KMT: "Kilometer",
	MTK: "m²",
	GRM: "Gramm",
	TNE: "Tonne"
}, zc = [
	1900,
	700,
	0
], Bc = "Gem. § 19 UStG enthält der Rechnungsbetrag keine Umsatzsteuer.", Vc = {
	invoice: "Rechnung",
	quote: "Angebot"
}, Hc = {
	opening: "Anrede & Einleitung",
	closing: "Schlusstext"
}, Uc = {
	draft: "Entwurf",
	committed: "Festgeschrieben",
	cancelled: "Storniert"
}, Wc = {
	invoice: "Rechnung",
	cancellation: "Storno",
	quote: "Angebot"
}, Gc = {
	draft: "Entwurf",
	open: "Offen",
	expired: "Abgelaufen",
	accepted: "Angenommen",
	rejected: "Abgelehnt",
	converted: "Übernommen",
	superseded: "Revidiert"
};
function Kc(e) {
	return e.includes(".") ? /^\d{1,3}(\.\d{3})+$/.test(e) : /^\d*$/.test(e);
}
function qc(e, t, n) {
	if (e == null) return null;
	let r = String(e).replace(/[\s  ]+/g, "");
	if (r === "") return null;
	let i = !1;
	if (r.startsWith("-") ? (i = !0, r = r.slice(1)) : r.startsWith("+") && (r = r.slice(1)), r === "" || !/^[0-9.,]+$/.test(r)) return null;
	let a = r.indexOf(","), o, s;
	if (a >= 0) {
		if (r.includes(",", a + 1) || (o = r.slice(0, a), s = r.slice(a + 1), s.includes("."))) return null;
	} else o = r, s = "";
	if (!Kc(o) || (o = o.split(".").join(""), o === "" && s === "") || (o === "" && (o = "0"), !/^\d+$/.test(o)) || s !== "" && !/^\d+$/.test(s) || s.length > t || (o = o.replace(/^0+/, ""), o === "" && (o = "0"), o.length > n)) return null;
	s = s.replace(/0+$/, "");
	let c = o + (s === "" ? "" : "." + s);
	return i && c !== "0" ? "-" + c : c;
}
function Jc(e) {
	return e == null || String(e).trim() === "" ? "1" : qc(e, 3, 9);
}
function Yc(e) {
	return e == null || String(e).trim() === "" ? "0" : qc(e, 4, 9);
}
function Xc(e) {
	if (e === null) return "";
	let [t, n] = e.split("."), r = t.startsWith("-") ? "-" : "";
	return r + (r ? t.slice(1) : t).replace(/\B(?=(\d{3})+(?!\d))/g, ".") + (n ? "," + n : "");
}
function Zc(e) {
	if (e == null) return "";
	let t = String(e).trim();
	if (t === "") return "";
	if (!/^[+-]?(\d+(\.\d*)?|\.\d+)$/.test(t)) return t;
	let n = t.startsWith("-");
	(n || t.startsWith("+")) && (t = t.slice(1));
	let [r, i = ""] = t.split("."), a = r.replace(/^0+/, "") || "0", o = i.replace(/0+$/, "");
	return Xc((n && (a !== "0" || o !== "") ? "-" : "") + a + (o === "" ? "" : "." + o));
}
//#endregion
//#region src/utils/money.ts
function Qc(e) {
	return e == null ? "" : Xc((e / 1e4).toFixed(4).replace(/(\.\d\d)(\d*?)0+$/, "$1$2"));
}
function $c(e) {
	let t = Yc(e);
	return t === null ? 0 : Math.round(Number.parseFloat(t) * 1e4);
}
function el(e) {
	let t = (e ?? 0) / 1e4;
	return new Intl.NumberFormat(void 0, {
		style: "currency",
		currency: "EUR",
		minimumFractionDigits: 2,
		maximumFractionDigits: 4
	}).format(t);
}
function tl(e) {
	let t = (e ?? 0) / 100;
	return new Intl.NumberFormat(void 0, {
		style: "currency",
		currency: "EUR"
	}).format(t);
}
function nl(e) {
	return `${e / 100} %`;
}
function rl(e) {
	return e == null ? "" : Xc((e / 100).toFixed(2));
}
function il(e) {
	if (e == null || String(e).trim() === "") return null;
	let t = Yc(e);
	return t === null ? null : Math.round(Number(t) * 100);
}
//#endregion
//#region src/views/InvoicesView.vue?vue&type=script&setup=true&lang.ts
var al = { class: "rw-view" }, ol = { class: "rw-view__head" }, sl = { key: 2 }, cl = { class: "rw-filterbar" }, ll = ["onClick"], ul = { class: "rw-chip__n" }, dl = {
	key: 0,
	class: "rw-chip rw-chip--sum"
}, fl = { class: "rw-table-wrap" }, pl = { class: "rw-table" }, ml = { class: "rw-th-info" }, hl = { class: "rw-info-popup" }, gl = { class: "rw-info-popup__hint" }, _l = { class: "rw-info-popup__group" }, vl = { class: "rw-legend__label" }, yl = { class: "rw-legend__item" }, bl = { class: "rw-legend__item" }, xl = { class: "rw-legend__item" }, Sl = {
	key: 0,
	class: "rw-info-popup__group"
}, Cl = { class: "rw-legend__label" }, wl = { class: "rw-legend__item" }, Tl = { class: "rw-legend__item" }, El = { class: "rw-legend__item" }, Dl = { class: "num" }, Ol = { class: "rw-col-paid" }, kl = { class: "rw-col-dunning" }, Al = ["onClick"], jl = { class: "rw-status-cell" }, Ml = {
	key: 0,
	class: "rw-pill"
}, Nl = { class: "num" }, Pl = { class: "rw-col-paid" }, Fl = [
	"aria-label",
	"title",
	"onClick"
], Il = { class: "rw-col-dunning" }, Ll = [
	"value",
	"title",
	"onChange"
], Rl = { value: 1 }, zl = { value: 2 }, Bl = { value: 3 }, Vl = { class: "rw-col-actions" }, Hl = { class: "rw-actions" }, Ul = 864e5, Wl = /* @__PURE__ */ r({
	__name: "InvoicesView",
	setup(e) {
		let t = Ze(), r = Dc(), i = Ic(), a = M(""), o = H(() => !!i.settings?.imapHost), l = [
			{
				key: "all",
				label: "Alle"
			},
			{
				key: "open",
				label: "Offen"
			},
			{
				key: "overdue",
				label: "Überfällig"
			},
			{
				key: "paid",
				label: "Bezahlt"
			}
		], u = M("all"), d = (e) => e.paymentStatus === "unpaid" || e.paymentStatus === "overdue", m = H(() => {
			let e = {
				all: r.invoices.length,
				open: 0,
				overdue: 0,
				paid: 0
			};
			for (let t of r.invoices) d(t) && e.open++, t.paymentStatus === "overdue" && e.overdue++, t.paymentStatus === "paid" && e.paid++;
			return e;
		}), h = H(() => r.invoices.reduce((e, t) => e + (d(t) ? t.totalCents : 0), 0)), g = H(() => {
			switch (u.value) {
				case "open": return r.invoices.filter(d);
				case "overdue": return r.invoices.filter((e) => e.paymentStatus === "overdue");
				case "paid": return r.invoices.filter((e) => e.paymentStatus === "paid");
				default: return r.invoices;
			}
		});
		function _(e) {
			return e.length === 10 ? /* @__PURE__ */ new Date(`${e}T12:00:00`) : new Date(e);
		}
		function v(e) {
			let t = _(e);
			t.setHours(0, 0, 0, 0);
			let n = /* @__PURE__ */ new Date();
			return n.setHours(0, 0, 0, 0), Math.round((t.getTime() - n.getTime()) / Ul);
		}
		function y(e) {
			return e ? _(e).toLocaleDateString(void 0, {
				day: "numeric",
				month: "numeric"
			}) : "";
		}
		let b = (e) => e.paymentStatus === "overdue" ? "rw-amt-overdue" : e.paymentStatus === "paid" ? "rw-amt-paid" : "";
		function ee(e) {
			if (e.paymentStatus === "paid") return e.paidAt ? f("rechnungswerk", "bezahlt am {date}", { date: y(e.paidAt) }) : f("rechnungswerk", "bezahlt");
			if (!e.dueDate) return "";
			let t = v(e.dueDate);
			if (e.paymentStatus === "overdue") {
				let e = -t;
				return e === 1 ? f("rechnungswerk", "1 Tag überfällig") : f("rechnungswerk", "{days} Tage überfällig", { days: String(e) });
			}
			return e.paymentStatus === "unpaid" ? t <= 0 ? f("rechnungswerk", "fällig heute") : t === 1 ? f("rechnungswerk", "fällig morgen ({date})", { date: y(e.dueDate) }) : f("rechnungswerk", "fällig in {days} Tagen ({date})", {
				days: String(t),
				date: y(e.dueDate)
			}) : "";
		}
		let x = (e) => e.paymentStatus === "paid" ? f("rechnungswerk", "Als unbezahlt markieren") : f("rechnungswerk", "Als bezahlt markieren");
		function ne(e) {
			return e.paymentStatus === "paid" ? e.paidAt ? f("rechnungswerk", "Bezahlt am {date} – klicken, um die Zahlung zurückzunehmen", { date: y(e.paidAt) }) : f("rechnungswerk", "Bezahlt – klicken, um die Zahlung zurückzunehmen") : f("rechnungswerk", "Als bezahlt markieren");
		}
		async function C(e) {
			a.value = "";
			try {
				e.paymentStatus === "paid" ? await r.markUnpaid(e.id) : await r.markPaid(e.id);
			} catch (e) {
				a.value = e.message ?? f("rechnungswerk", "Zahlungsstatus konnte nicht geändert werden");
			}
		}
		function w(e) {
			let t = e.dunningLevel ?? 0;
			return t === 0 || !e.lastDunningAt ? f("rechnungswerk", "Noch keine Mahnstufe gesetzt") : f("rechnungswerk", "Mahnstufe {level} seit {date}", {
				level: String(t),
				date: y(e.lastDunningAt)
			});
		}
		async function re(e, t) {
			let n = Number(t.target.value);
			a.value = "";
			try {
				await r.setDunningLevel(e.id, n);
			} catch (e) {
				a.value = e.message ?? f("rechnungswerk", "Mahnstufe konnte nicht gesetzt werden");
			}
		}
		let E = {
			draft: xs,
			committed: wo,
			cancelled: Os
		}, D = {
			pending: Hs,
			confirmed: Fs,
			unknown: Ys,
			failed: Os
		}, A = (e) => E[e] ?? xa, N = (e) => e ? D[e] ?? null : null, F = {
			pending: f("rechnungswerk", "An DATEV gesendet – Bestätigung ausstehend"),
			confirmed: f("rechnungswerk", "Von DATEV bestätigt (Beleg angenommen)"),
			unknown: f("rechnungswerk", "DATEV-Antwort prüfen"),
			failed: f("rechnungswerk", "Von DATEV abgelehnt")
		}, ie = (e) => F[e] ?? "", ae = (e) => f("rechnungswerk", Uc[e] ?? e), L = (e) => f("rechnungswerk", Wc[e] ?? e), oe = (e) => e.relatedNumber ? f("rechnungswerk", "{type} zu Rechnung {number}", {
			type: L(e.invoiceType),
			number: e.relatedNumber
		}) : L(e.invoiceType);
		function z(e) {
			return e ? new Date(e).toLocaleDateString() : "—";
		}
		s(() => {
			r.fetchAll().catch((e) => {
				a.value = e.message ?? f("rechnungswerk", "Laden fehlgeschlagen");
			}), i.fetch().catch(() => {});
		});
		function se() {
			t.push({ name: "invoice-new" });
		}
		function ce(e) {
			t.push({
				name: "invoice-detail",
				params: { id: String(e) }
			});
		}
		function B(e) {
			Cc(e);
		}
		let le = {
			1: f("rechnungswerk", "Zahlungserinnerung"),
			2: f("rechnungswerk", "1. Mahnung"),
			3: f("rechnungswerk", "2. Mahnung")
		}, V = (e) => f("rechnungswerk", "{document} als PDF herunterladen", { document: le[e.dunningLevel ?? 0] ?? f("rechnungswerk", "Mahnschreiben") });
		function ue(e) {
			Tc(e);
		}
		async function de(e) {
			a.value = "";
			try {
				let n = await r.duplicate(e);
				t.push({
					name: "invoice-detail",
					params: { id: String(n.id) }
				});
			} catch (e) {
				a.value = e.message ?? f("rechnungswerk", "Duplizieren fehlgeschlagen");
			}
		}
		return (e, t) => {
			let i = te("tooltip");
			return p(), K("div", al, [
				R("div", ol, [R("h2", null, n(J(f)("rechnungswerk", "Rechnungen")), 1), q(J(Y), {
					variant: "primary",
					onClick: se
				}, {
					icon: P(() => [q(es, { size: 20 })]),
					default: P(() => [k(" " + n(J(f)("rechnungswerk", "Neue Rechnung")), 1)]),
					_: 1
				})]),
				a.value ? (p(), I(J(st), {
					key: 0,
					type: "error",
					text: a.value
				}, null, 8, ["text"])) : T("", !0),
				!J(r).loading && J(r).invoices.length === 0 ? (p(), I(J(_t), {
					key: 1,
					name: J(f)("rechnungswerk", "Noch keine Rechnungen"),
					description: J(f)("rechnungswerk", "Lege deine erste Rechnung an.")
				}, {
					icon: P(() => [q(xa, { size: 20 })]),
					_: 1
				}, 8, ["name", "description"])) : J(r).invoices.length > 0 ? (p(), K("div", sl, [R("div", cl, [(p(), K(G, null, S(l, (e) => R("button", {
					key: e.key,
					class: O(["rw-chip", {
						"rw-chip--active": u.value === e.key,
						"rw-chip--overdue": e.key === "overdue"
					}]),
					onClick: (t) => u.value = e.key
				}, [k(n(J(f)("rechnungswerk", e.label)) + " ", 1), R("span", ul, n(m.value[e.key]), 1)], 10, ll)), 64)), h.value > 0 ? (p(), K("span", dl, [k(n(J(f)("rechnungswerk", "Offen gesamt:")) + " ", 1), R("strong", null, n(J(tl)(h.value)), 1)])) : T("", !0)]), R("div", fl, [R("table", pl, [R("thead", null, [R("tr", null, [
					R("th", null, [R("span", ml, [k(n(J(f)("rechnungswerk", "Status")) + " ", 1), q(qo, null, {
						default: P(() => [R("div", hl, [
							R("p", gl, n(J(f)("rechnungswerk", "Pro Zeile: links der Rechnungsstatus, rechts (falls vorhanden) der DATEV-Status.")), 1),
							R("div", _l, [
								R("span", vl, n(J(f)("rechnungswerk", "Rechnung")), 1),
								R("span", yl, [q(wo, {
									size: 16,
									class: "rw-sicon rw-sicon--committed"
								}), k(" " + n(J(f)("rechnungswerk", "Festgeschrieben")), 1)]),
								R("span", bl, [q(xs, {
									size: 16,
									class: "rw-sicon rw-sicon--draft"
								}), k(" " + n(J(f)("rechnungswerk", "Entwurf")), 1)]),
								R("span", xl, [q(Os, {
									size: 16,
									class: "rw-sicon rw-sicon--cancelled"
								}), k(" " + n(J(f)("rechnungswerk", "Storniert")), 1)])
							]),
							o.value ? (p(), K("div", Sl, [
								R("span", Cl, n(J(f)("rechnungswerk", "DATEV-Übergabe")), 1),
								R("span", wl, [q(Fs, {
									size: 16,
									class: "rw-sicon rw-sicon--datev-confirmed"
								}), k(" " + n(J(f)("rechnungswerk", "bestätigt")), 1)]),
								R("span", Tl, [q(Hs, {
									size: 16,
									class: "rw-sicon rw-sicon--datev-pending"
								}), k(" " + n(J(f)("rechnungswerk", "gesendet")), 1)]),
								R("span", El, [q(Ys, {
									size: 16,
									class: "rw-sicon rw-sicon--datev-unknown"
								}), k(" " + n(J(f)("rechnungswerk", "Antwort prüfen")), 1)])
							])) : T("", !0)
						])]),
						_: 1
					})])]),
					R("th", null, n(J(f)("rechnungswerk", "Nummer")), 1),
					R("th", null, n(J(f)("rechnungswerk", "Empfänger")), 1),
					R("th", null, n(J(f)("rechnungswerk", "Datum")), 1),
					R("th", Dl, n(J(f)("rechnungswerk", "Brutto")), 1),
					R("th", Ol, n(J(f)("rechnungswerk", "Bezahlt")), 1),
					R("th", kl, n(J(f)("rechnungswerk", "Mahnstufe")), 1),
					t[1] ||= R("th", { class: "rw-col-actions" }, null, -1)
				])]), R("tbody", null, [(p(!0), K(G, null, S(g.value, (e) => (p(), K("tr", {
					key: e.id,
					class: O(["rw-row-clickable", { "rw-row--overdue": e.paymentStatus === "overdue" }]),
					onClick: (t) => ce(e.id)
				}, [
					R("td", null, [R("span", jl, [(p(), I(c(A(e.status)), {
						size: 20,
						class: O(["rw-sicon", `rw-sicon--${e.status}`]),
						title: ae(e.status)
					}, null, 8, ["class", "title"])), o.value && e.datevStatus && N(e.datevStatus) ? (p(), I(c(N(e.datevStatus)), {
						key: 0,
						size: 18,
						class: O(["rw-sicon", `rw-sicon--datev-${e.datevStatus}`]),
						title: ie(e.datevStatus)
					}, null, 8, ["class", "title"])) : T("", !0)])]),
					R("td", null, [k(n(e.number ?? J(f)("rechnungswerk", "(Entwurf)")) + " ", 1), e.invoiceType === "invoice" ? T("", !0) : W((p(), K("span", Ml, [k(n(L(e.invoiceType)), 1)])), [[i, oe(e)]])]),
					R("td", null, n(e.recipientName ?? "—"), 1),
					R("td", null, n(z(e.issueDate ?? e.createdAt)), 1),
					R("td", Nl, [R("span", { class: O(b(e)) }, n(J(tl)(e.totalCents)), 3), ee(e) ? (p(), K("div", {
						key: 0,
						class: O(["rw-subline", { "rw-subline--overdue": e.paymentStatus === "overdue" }])
					}, n(ee(e)), 3)) : T("", !0)]),
					R("td", Pl, [e.paymentStatus ? (p(), K("button", {
						key: 0,
						class: O(["rw-paybox", e.paymentStatus === "paid" ? "rw-paybox--paid" : "rw-paybox--open"]),
						"aria-label": x(e),
						title: ne(e),
						onClick: j((t) => C(e), ["stop"])
					}, [(p(), I(c(e.paymentStatus === "paid" ? lc : nc), { size: 22 }))], 10, Fl)) : T("", !0)]),
					R("td", Il, [e.paymentStatus === "unpaid" || e.paymentStatus === "overdue" ? (p(), K("select", {
						key: 0,
						class: O(["rw-dunning-select", { "rw-dunning-select--active": (e.dunningLevel ?? 0) > 0 }]),
						value: e.dunningLevel ?? 0,
						title: w(e),
						onClick: t[0] ||= j(() => {}, ["stop"]),
						onChange: (t) => re(e, t)
					}, [
						t[2] ||= R("option", { value: 0 }, "–", -1),
						R("option", Rl, n(J(f)("rechnungswerk", "Stufe 1")), 1),
						R("option", zl, n(J(f)("rechnungswerk", "Stufe 2")), 1),
						R("option", Bl, n(J(f)("rechnungswerk", "Stufe 3")), 1)
					], 42, Ll)) : T("", !0)]),
					R("td", Vl, [R("div", Hl, [
						e.invoiceType === "cancellation" ? T("", !0) : (p(), I(J(Y), {
							key: 0,
							variant: "tertiary",
							"aria-label": J(f)("rechnungswerk", "Duplizieren"),
							title: J(f)("rechnungswerk", "Als Vorlage für neue Rechnung duplizieren"),
							onClick: j((t) => de(e.id), ["stop"])
						}, {
							icon: P(() => [q(ms, { size: 20 })]),
							_: 1
						}, 8, [
							"aria-label",
							"title",
							"onClick"
						])),
						e.status === "draft" ? T("", !0) : (p(), I(J(Y), {
							key: 1,
							variant: "tertiary",
							"aria-label": J(f)("rechnungswerk", "PDF herunterladen"),
							title: J(f)("rechnungswerk", "PDF herunterladen"),
							onClick: j((t) => B(e.id), ["stop"])
						}, {
							icon: P(() => [q(ss, { size: 20 })]),
							_: 1
						}, 8, [
							"aria-label",
							"title",
							"onClick"
						])),
						(e.dunningLevel ?? 0) > 0 ? (p(), I(J(Y), {
							key: 2,
							variant: "tertiary",
							"aria-label": J(f)("rechnungswerk", "Mahnschreiben herunterladen"),
							title: V(e),
							onClick: j((t) => ue(e.id), ["stop"])
						}, {
							icon: P(() => [q(_o, { size: 20 })]),
							_: 1
						}, 8, [
							"aria-label",
							"title",
							"onClick"
						])) : T("", !0)
					])])
				], 10, Al))), 128))])])])])) : T("", !0)
			]);
		};
	}
}), Gl = {
	name: "DeleteIcon",
	emits: ["click"],
	props: {
		title: { type: String },
		fillColor: {
			type: String,
			default: "currentColor"
		},
		size: {
			type: Number,
			default: 24
		}
	}
}, Kl = ["aria-hidden", "aria-label"], ql = [
	"fill",
	"width",
	"height"
], Jl = { d: "M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" }, Yl = { key: 0 };
function Xl(e, r, i, a, o, s) {
	return p(), K("span", t(e.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon delete-icon",
		role: "img",
		onClick: r[0] ||= (t) => e.$emit("click", t)
	}), [(p(), K("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [R("path", Jl, [i.title ? (p(), K("title", Yl, n(i.title), 1)) : T("", !0)])], 8, ql))], 16, Kl);
}
var Zl = /*#__PURE__*/ Z(Gl, [["render", Xl]]), Ql = {
	name: "SendIcon",
	emits: ["click"],
	props: {
		title: { type: String },
		fillColor: {
			type: String,
			default: "currentColor"
		},
		size: {
			type: Number,
			default: 24
		}
	}
}, $l = ["aria-hidden", "aria-label"], eu = [
	"fill",
	"width",
	"height"
], tu = { d: "M2,21L23,12L2,3V10L17,12L2,14V21Z" }, nu = { key: 0 };
function ru(e, r, i, a, o, s) {
	return p(), K("span", t(e.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon send-icon",
		role: "img",
		onClick: r[0] ||= (t) => e.$emit("click", t)
	}), [(p(), K("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [R("path", tu, [i.title ? (p(), K("title", nu, n(i.title), 1)) : T("", !0)])], 8, eu))], 16, $l);
}
var iu = /*#__PURE__*/ Z(Ql, [["render", ru]]), au = {
	name: "EyeOutlineIcon",
	emits: ["click"],
	props: {
		title: { type: String },
		fillColor: {
			type: String,
			default: "currentColor"
		},
		size: {
			type: Number,
			default: 24
		}
	}
}, ou = ["aria-hidden", "aria-label"], su = [
	"fill",
	"width",
	"height"
], cu = { d: "M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z" }, lu = { key: 0 };
function uu(e, r, i, a, o, s) {
	return p(), K("span", t(e.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon eye-outline-icon",
		role: "img",
		onClick: r[0] ||= (t) => e.$emit("click", t)
	}), [(p(), K("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [R("path", cu, [i.title ? (p(), K("title", lu, n(i.title), 1)) : T("", !0)])], 8, su))], 16, ou);
}
var du = /*#__PURE__*/ Z(au, [["render", uu]]), fu = {
	name: "CheckIcon",
	emits: ["click"],
	props: {
		title: { type: String },
		fillColor: {
			type: String,
			default: "currentColor"
		},
		size: {
			type: Number,
			default: 24
		}
	}
}, pu = ["aria-hidden", "aria-label"], mu = [
	"fill",
	"width",
	"height"
], hu = { d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" }, gu = { key: 0 };
function _u(e, r, i, a, o, s) {
	return p(), K("span", t(e.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon check-icon",
		role: "img",
		onClick: r[0] ||= (t) => e.$emit("click", t)
	}), [(p(), K("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [R("path", hu, [i.title ? (p(), K("title", gu, n(i.title), 1)) : T("", !0)])], 8, mu))], 16, pu);
}
var vu = /*#__PURE__*/ Z(fu, [["render", _u]]), yu = {
	name: "CloseIcon",
	emits: ["click"],
	props: {
		title: { type: String },
		fillColor: {
			type: String,
			default: "currentColor"
		},
		size: {
			type: Number,
			default: 24
		}
	}
}, bu = ["aria-hidden", "aria-label"], xu = [
	"fill",
	"width",
	"height"
], Su = { d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" }, Cu = { key: 0 };
function wu(e, r, i, a, o, s) {
	return p(), K("span", t(e.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon close-icon",
		role: "img",
		onClick: r[0] ||= (t) => e.$emit("click", t)
	}), [(p(), K("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [R("path", Su, [i.title ? (p(), K("title", Cu, n(i.title), 1)) : T("", !0)])], 8, xu))], 16, bu);
}
var Tu = /*#__PURE__*/ Z(yu, [["render", wu]]), Eu = {
	name: "FileMoveOutlineIcon",
	emits: ["click"],
	props: {
		title: { type: String },
		fillColor: {
			type: String,
			default: "currentColor"
		},
		size: {
			type: Number,
			default: 24
		}
	}
}, Du = ["aria-hidden", "aria-label"], Ou = [
	"fill",
	"width",
	"height"
], ku = { d: "M14 2H6C4.9 2 4 2.9 4 4V20C4 20.41 4.12 20.8 4.34 21.12C4.41 21.23 4.5 21.33 4.59 21.41C4.95 21.78 5.45 22 6 22H13.53C13 21.42 12.61 20.75 12.35 20H6V4H13V9H18V12C18.7 12 19.37 12.12 20 12.34V8L14 2M18 23L23 18.5L20 15.8L18 14V17H14V20H18V23Z" }, Au = { key: 0 };
function ju(e, r, i, a, o, s) {
	return p(), K("span", t(e.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon file-move-outline-icon",
		role: "img",
		onClick: r[0] ||= (t) => e.$emit("click", t)
	}), [(p(), K("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [R("path", ku, [i.title ? (p(), K("title", Au, n(i.title), 1)) : T("", !0)])], 8, Ou))], 16, Du);
}
var Mu = /*#__PURE__*/ Z(Eu, [["render", ju]]), Nu = {
	name: "FileEditOutlineIcon",
	emits: ["click"],
	props: {
		title: { type: String },
		fillColor: {
			type: String,
			default: "currentColor"
		},
		size: {
			type: Number,
			default: 24
		}
	}
}, Pu = ["aria-hidden", "aria-label"], Fu = [
	"fill",
	"width",
	"height"
], Iu = { d: "M10 20H6V4H13V9H18V12.1L20 10.1V8L14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H10V20M20.2 13C20.3 13 20.5 13.1 20.6 13.2L21.9 14.5C22.1 14.7 22.1 15.1 21.9 15.3L20.9 16.3L18.8 14.2L19.8 13.2C19.9 13.1 20 13 20.2 13M20.2 16.9L14.1 23H12V20.9L18.1 14.8L20.2 16.9Z" }, Lu = { key: 0 };
function Ru(e, r, i, a, o, s) {
	return p(), K("span", t(e.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon file-edit-outline-icon",
		role: "img",
		onClick: r[0] ||= (t) => e.$emit("click", t)
	}), [(p(), K("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [R("path", Iu, [i.title ? (p(), K("title", Lu, n(i.title), 1)) : T("", !0)])], 8, Fu))], 16, Pu);
}
var zu = /*#__PURE__*/ Z(Nu, [["render", Ru]]), Bu = (e) => Q(`/contacts/search?q=${encodeURIComponent(e)}`), Vu = () => Q("/me"), Hu = { class: "contact-picker" }, Uu = ["value", "placeholder"], Wu = {
	key: 0,
	class: "contact-picker__list"
}, Gu = ["onMousedown"], Ku = {
	key: 0,
	class: "muted"
}, qu = /*#__PURE__*/ Z(/* @__PURE__ */ r({
	__name: "ContactPicker",
	props: { modelValue: {} },
	emits: ["update:modelValue", "select"],
	setup(e, { emit: t }) {
		let r = t, i = M([]), a = M(!1), o = null;
		function s(e) {
			if (r("update:modelValue", e), o && clearTimeout(o), e.trim().length < 2) {
				i.value = [], a.value = !1;
				return;
			}
			o = setTimeout(async () => {
				try {
					i.value = await Bu(e.trim()), a.value = i.value.length > 0;
				} catch {
					i.value = [], a.value = !1;
				}
			}, 300);
		}
		function c(e) {
			r("update:modelValue", e.name), r("select", e), a.value = !1, i.value = [];
		}
		function l() {
			setTimeout(() => {
				a.value = !1;
			}, 150);
		}
		return h(() => {
			o && clearTimeout(o);
		}), (t, r) => (p(), K("div", Hu, [R("input", {
			value: e.modelValue,
			class: "input",
			type: "text",
			autocomplete: "off",
			placeholder: J(f)("rechnungswerk", "Name eingeben oder Kontakt wählen\xA0…"),
			onInput: r[0] ||= (e) => s(e.target.value),
			onFocus: r[1] ||= (e) => a.value = i.value.length > 0,
			onBlur: l
		}, null, 40, Uu), a.value && i.value.length > 0 ? (p(), K("ul", Wu, [(p(!0), K(G, null, S(i.value, (e, t) => (p(), K("li", {
			key: t,
			class: "contact-picker__item",
			onMousedown: j((t) => c(e), ["prevent"])
		}, [R("strong", null, n(e.name), 1), e.email ? (p(), K("span", Ku, n(e.email), 1)) : T("", !0)], 40, Gu))), 128))])) : T("", !0)]));
	}
}), [["__scopeId", "data-v-23f7f625"]]), Ju = null, Yu = () => (Ju === null && (Ju = Q("/countries").catch((e) => {
	throw Ju = null, e;
})), Ju), Xu = ["disabled", "title"], Zu = ["value"], Qu = ["value"], $u = /* @__PURE__ */ r({
	__name: "CountrySelect",
	props: /*@__PURE__*/ V({
		selectClass: { default: "rw-input" },
		disabled: {
			type: Boolean,
			default: !1
		}
	}, {
		modelValue: { required: !0 },
		modelModifiers: {}
	}),
	emits: ["update:modelValue"],
	setup(e) {
		let t = d(e, "modelValue"), r = M([]), i = H(() => {
			let e = r.value.find((e) => e.code === t.value);
			return e ? `${e.label} (${e.code})` : t.value ?? "";
		}), a = H(() => {
			let e = t.value ?? "";
			return e === "" || r.value.length === 0 ? e : r.value.some((t) => t.code === e) ? "" : e;
		});
		return s(async () => {
			try {
				r.value = await Yu();
			} catch {
				r.value = [];
			}
		}), (o, s) => W((p(), K("select", {
			"onUpdate:modelValue": s[0] ||= (e) => t.value = e,
			class: O(e.selectClass),
			disabled: e.disabled,
			title: i.value
		}, [a.value === "" ? T("", !0) : (p(), K("option", {
			key: 0,
			value: a.value
		}, n(a.value), 9, Zu)), (p(!0), K(G, null, S(r.value, (e) => (p(), K("option", {
			key: e.code,
			value: e.code
		}, n(e.label) + " (" + n(e.code) + ")", 9, Qu))), 128))], 10, Xu)), [[ce, t.value]]);
	}
}), ed = () => Q("/customers"), td = (e) => $("/customers", { data: e }), nd = (e, t) => Do(`/customers/${e}`, { data: t }), rd = (e) => ko(`/customers/${e}`), id = nn("customer", () => {
	let e = M([]), t = M(!1);
	function n() {
		e.value.sort((e, t) => e.name.localeCompare(t.name));
	}
	async function r() {
		t.value = !0;
		try {
			e.value = await ed();
		} finally {
			t.value = !1;
		}
	}
	async function i(t) {
		let r = await td(t);
		return e.value.push(r), n(), r;
	}
	async function a(t, r) {
		let i = await nd(t, r), a = e.value.findIndex((e) => e.id === t);
		return a >= 0 && (e.value[a] = i), n(), i;
	}
	async function o(t) {
		let n = e.value.findIndex((e) => e.id === t), r = n >= 0 ? e.value[n] : null;
		n >= 0 && e.value.splice(n, 1);
		try {
			await rd(t);
		} catch (t) {
			throw r && n >= 0 && e.value.splice(n, 0, r), t;
		}
	}
	return {
		customers: e,
		loading: t,
		fetchAll: r,
		create: i,
		update: a,
		remove: o
	};
}), ad = { class: "customer-picker" }, od = ["value", "placeholder"], sd = {
	key: 0,
	class: "customer-picker__list"
}, cd = ["onMousedown"], ld = { class: "muted" }, ud = /*#__PURE__*/ Z(/* @__PURE__ */ r({
	__name: "CustomerPicker",
	emits: ["select"],
	setup(e, { emit: t }) {
		let r = t, i = id(), a = M(""), o = M([]), c = M(!1);
		s(() => {
			i.customers.length === 0 && i.fetchAll().catch((e) => console.error("[rechnungswerk] customer picker:", e));
		});
		function l(e) {
			a.value = e;
			let t = e.trim().toLowerCase();
			if (t === "") {
				o.value = [], c.value = !1;
				return;
			}
			o.value = i.customers.filter((e) => `${e.name} ${e.customerNumber} ${e.city ?? ""} ${e.vatId ?? ""}`.toLowerCase().includes(t)).slice(0, 20), c.value = o.value.length > 0;
		}
		function u(e) {
			a.value = "", o.value = [], c.value = !1, r("select", e);
		}
		function d() {
			setTimeout(() => {
				c.value = !1;
			}, 150);
		}
		return (e, t) => (p(), K("div", ad, [R("input", {
			value: a.value,
			class: "input",
			type: "text",
			autocomplete: "off",
			placeholder: J(f)("rechnungswerk", "Kunde suchen oder anlegen\xA0…"),
			onInput: t[0] ||= (e) => l(e.target.value),
			onFocus: t[1] ||= (e) => c.value = o.value.length > 0,
			onBlur: d
		}, null, 40, od), c.value && o.value.length > 0 ? (p(), K("ul", sd, [(p(!0), K(G, null, S(o.value, (e) => (p(), K("li", {
			key: e.id,
			class: "customer-picker__item",
			onMousedown: j((t) => u(e), ["prevent"])
		}, [R("strong", null, n(e.name), 1), R("span", ld, n([
			e.customerNumber,
			[e.postalCode, e.city].filter(Boolean).join(" "),
			e.vatId
		].filter(Boolean).join(" · ")), 1)], 40, cd))), 128))])) : T("", !0)]));
	}
}), [["__scopeId", "data-v-4ad9c538"]]);
//#endregion
//#region src/types/editor.ts
function dd(e = 1900) {
	return {
		productId: null,
		name: "",
		description: "",
		quantity: "1",
		unitCode: "C62",
		unitLabel: "",
		priceInput: "0,00",
		taxRateBp: e
	};
}
function fd(e, t) {
	return {
		productId: e.id,
		name: e.name,
		description: e.description ?? "",
		quantity: "1",
		unitCode: e.defaultUnitCode,
		unitLabel: e.defaultUnitLabel ?? "",
		priceInput: Qc(e.defaultPriceE4),
		taxRateBp: t ? 0 : e.defaultTaxRateBp
	};
}
function pd(e) {
	return {
		productId: e.productId,
		name: e.name,
		description: e.description ?? "",
		quantity: Zc(e.quantity),
		unitCode: e.unitCode,
		unitLabel: e.unitLabel ?? "",
		priceInput: Qc(e.unitPriceE4),
		taxRateBp: e.taxRateBp
	};
}
//#endregion
//#region src/utils/invoiceCalc.ts
function md(e, t) {
	let n = Jc(e);
	if (n === null) return 0;
	let r = Math.round(Number(n) * 1e3);
	return Math.round(r * t / 1e5);
}
function hd(e, t = !1) {
	let n = /* @__PURE__ */ new Map(), r = 0;
	for (let t of e) {
		let e = Number(t.taxRateBp), i = Number(t.lineTotalCents);
		r += i, n.set(e, (n.get(e) ?? 0) + i);
	}
	let i = [...n.entries()].sort((e, t) => e[0] - t[0]).map(([e, n]) => ({
		rateBp: e,
		netCents: n,
		taxCents: t ? 0 : Math.round(n * e / 1e4)
	})), a = i.reduce((e, t) => e + t.taxCents, 0);
	return {
		subtotalCents: r,
		taxBreakdown: i,
		totalCents: r + a
	};
}
//#endregion
//#region src/components/InvoiceItemsTable.vue?vue&type=script&setup=true&lang.ts
var gd = { class: "rw-table-wrap" }, _d = { class: "rw-table rw-table--positions" }, vd = {
	key: 0,
	class: "rw-col-actions"
}, yd = { class: "num" }, bd = { class: "num" }, xd = { class: "num" }, Sd = { class: "rw-sum" }, Cd = { key: 0 }, wd = { class: "rw-pos-main" }, Td = [
	"onUpdate:modelValue",
	"readonly",
	"placeholder"
], Ed = { class: "num" }, Dd = [
	"onUpdate:modelValue",
	"readonly",
	"onBlur"
], Od = ["onUpdate:modelValue", "disabled"], kd = ["value"], Ad = { class: "num" }, jd = [
	"onUpdate:modelValue",
	"readonly",
	"onBlur"
], Md = { class: "num" }, Nd = ["onUpdate:modelValue", "disabled"], Pd = ["value"], Fd = { class: "rw-sum" }, Id = {
	key: 0,
	class: "num"
}, Ld = {
	key: 0,
	class: "rw-pos-desc"
}, Rd = ["colspan"], zd = { class: "rw-sub-row" }, Bd = [
	"onUpdate:modelValue",
	"readonly",
	"placeholder",
	"title"
], Vd = [
	"onUpdate:modelValue",
	"readonly",
	"placeholder"
], Hd = { key: 0 }, Ud = ["colspan"], Wd = {
	key: 0,
	class: "rw-toolbar"
}, Gd = /*#__PURE__*/ Z(/* @__PURE__ */ r({
	__name: "InvoiceItemsTable",
	props: /*@__PURE__*/ V({
		products: {},
		readonly: { type: Boolean },
		smallBusiness: { type: Boolean },
		defaultTaxRateBp: {}
	}, {
		items: { required: !0 },
		itemsModifiers: {}
	}),
	emits: ["update:items"],
	setup(e) {
		let t = d(e, "items"), r = e, i = (e) => md(e.quantity, $c(e.priceInput));
		function a(e) {
			let t = Jc(e.quantity);
			t !== null && (e.quantity = Xc(t));
		}
		function o(e) {
			Yc(e.priceInput) !== null && (e.priceInput = Qc($c(e.priceInput)));
		}
		v(() => r.smallBusiness, (e) => {
			if (e) for (let e of t.value) e.taxRateBp = 0;
		}, { immediate: !0 });
		function s() {
			t.value.push(dd(r.smallBusiness ? 0 : r.defaultTaxRateBp ?? 1900));
		}
		function c(e) {
			t.value.push(fd(e, r.smallBusiness ?? !1));
		}
		function l(e) {
			t.value.splice(e, 1);
		}
		return (r, u) => (p(), K("div", null, [R("div", gd, [R("table", _d, [
			R("colgroup", null, [
				u[0] ||= R("col", null, null, -1),
				u[1] ||= R("col", { class: "rw-col-qty" }, null, -1),
				u[2] ||= R("col", { class: "rw-col-unit" }, null, -1),
				u[3] ||= R("col", { class: "rw-col-price" }, null, -1),
				u[4] ||= R("col", { class: "rw-col-tax" }, null, -1),
				u[5] ||= R("col", { class: "rw-col-sum" }, null, -1),
				e.readonly ? T("", !0) : (p(), K("col", vd))
			]),
			R("thead", null, [R("tr", null, [
				R("th", null, n(J(f)("rechnungswerk", "Bezeichnung")), 1),
				R("th", yd, n(J(f)("rechnungswerk", "Menge")), 1),
				R("th", null, n(J(f)("rechnungswerk", "Einheit")), 1),
				R("th", bd, n(J(f)("rechnungswerk", "Einzelpreis (€)")), 1),
				R("th", xd, n(J(f)("rechnungswerk", "USt")), 1),
				R("th", Sd, n(J(f)("rechnungswerk", "Summe netto")), 1),
				e.readonly ? T("", !0) : (p(), K("th", Cd))
			])]),
			R("tbody", null, [(p(!0), K(G, null, S(t.value, (t, r) => (p(), K(G, { key: r }, [R("tr", wd, [
				R("td", null, [W(R("input", {
					"onUpdate:modelValue": (e) => t.name = e,
					class: "rw-input",
					type: "text",
					readonly: e.readonly,
					placeholder: J(f)("rechnungswerk", "Leistung")
				}, null, 8, Td), [[D, t.name]])]),
				R("td", Ed, [W(R("input", {
					"onUpdate:modelValue": (e) => t.quantity = e,
					class: "rw-input num",
					type: "text",
					inputmode: "decimal",
					readonly: e.readonly,
					onBlur: (e) => a(t)
				}, null, 40, Dd), [[D, t.quantity]])]),
				R("td", null, [W(R("select", {
					"onUpdate:modelValue": (e) => t.unitCode = e,
					class: "rw-input",
					disabled: e.readonly
				}, [(p(!0), K(G, null, S(J(Lc), (e) => (p(), K("option", {
					key: e,
					value: e
				}, n(J(f)("rechnungswerk", J(Rc)[e])), 9, kd))), 128))], 8, Od), [[ce, t.unitCode]])]),
				R("td", Ad, [W(R("input", {
					"onUpdate:modelValue": (e) => t.priceInput = e,
					class: "rw-input num",
					type: "text",
					inputmode: "decimal",
					readonly: e.readonly,
					onBlur: (e) => o(t)
				}, null, 40, jd), [[D, t.priceInput]])]),
				R("td", Md, [W(R("select", {
					"onUpdate:modelValue": (e) => t.taxRateBp = e,
					class: "rw-input",
					disabled: e.readonly || e.smallBusiness
				}, [(p(!0), K(G, null, S(J(zc), (e) => (p(), K("option", {
					key: e,
					value: e
				}, n(J(nl)(e)), 9, Pd))), 128))], 8, Nd), [[
					ce,
					t.taxRateBp,
					void 0,
					{ number: !0 }
				]])]),
				R("td", Fd, n(J(tl)(i(t))), 1),
				e.readonly ? T("", !0) : (p(), K("td", Id, [q(J(Y), {
					variant: "tertiary",
					"aria-label": J(f)("rechnungswerk", "Position entfernen"),
					onClick: (e) => l(r)
				}, {
					icon: P(() => [q(Zl, { size: 20 })]),
					_: 1
				}, 8, ["aria-label", "onClick"])]))
			]), !e.readonly || t.description || t.unitLabel ? (p(), K("tr", Ld, [R("td", { colspan: e.readonly ? 6 : 7 }, [R("div", zd, [!e.readonly || t.unitLabel ? W((p(), K("input", {
				key: 0,
				"onUpdate:modelValue": (e) => t.unitLabel = e,
				class: "rw-input rw-input--sub rw-unit-label",
				type: "text",
				maxlength: "64",
				readonly: e.readonly,
				placeholder: J(f)("rechnungswerk", "eigene Einheit"),
				title: J(f)("rechnungswerk", "Freie Bezeichnung – erscheint auf dem PDF; in der E-Rechnung wird die Einheit generisch (Stück) abgebildet.")
			}, null, 8, Bd)), [[D, t.unitLabel]]) : T("", !0), !e.readonly || t.description ? W((p(), K("input", {
				key: 1,
				"onUpdate:modelValue": (e) => t.description = e,
				class: "rw-input rw-input--sub rw-desc",
				type: "text",
				readonly: e.readonly,
				placeholder: J(f)("rechnungswerk", "Beschreibung (optional)")
			}, null, 8, Vd)), [[D, t.description]]) : T("", !0)])], 8, Rd)])) : T("", !0)], 64))), 128)), t.value.length === 0 ? (p(), K("tr", Hd, [R("td", {
				colspan: e.readonly ? 6 : 7,
				class: "rw-muted empty-row"
			}, n(J(f)("rechnungswerk", "Noch keine Positionen.")), 9, Ud)])) : T("", !0)])
		])]), e.readonly ? T("", !0) : (p(), K("div", Wd, [q(J(Y), { onClick: s }, {
			icon: P(() => [q(es, { size: 20 })]),
			default: P(() => [k(" " + n(J(f)("rechnungswerk", "Position hinzufügen")), 1)]),
			_: 1
		}), e.products.length > 0 ? (p(), I(J(at), {
			key: 0,
			menuName: J(f)("rechnungswerk", "Aus Produkt")
		}, {
			icon: P(() => [q(Ya, { size: 20 })]),
			default: P(() => [(p(!0), K(G, null, S(e.products, (e) => (p(), I(J(bt), {
				key: e.id,
				onClick: (t) => c(e)
			}, {
				default: P(() => [k(n(e.name), 1)]),
				_: 2
			}, 1032, ["onClick"]))), 128))]),
			_: 1
		}, 8, ["menuName"])) : T("", !0)]))]));
	}
}), [["__scopeId", "data-v-04862899"]]), Kd = { class: "confirm-dialog" }, qd = { class: "confirm-dialog__message" }, Jd = /*#__PURE__*/ Z(/* @__PURE__ */ r({
	__name: "ConfirmDialog",
	props: {
		open: { type: Boolean },
		name: {},
		message: {},
		confirmLabel: {},
		cancelLabel: {},
		destructive: { type: Boolean }
	},
	emits: ["close", "confirm"],
	setup(e, { emit: t }) {
		let r = t;
		function i(e) {
			e || r("close");
		}
		return (t, r) => (p(), I(J(ot), {
			open: e.open,
			name: e.name,
			"onUpdate:open": i
		}, {
			actions: P(() => [q(J(Y), {
				variant: "secondary",
				onClick: r[0] ||= (e) => t.$emit("close")
			}, {
				default: P(() => [k(n(e.cancelLabel || J(f)("rechnungswerk", "Abbrechen")), 1)]),
				_: 1
			}), q(J(Y), {
				variant: e.destructive ? "error" : "primary",
				onClick: r[1] ||= (e) => t.$emit("confirm")
			}, {
				default: P(() => [k(n(e.confirmLabel || J(f)("rechnungswerk", "Bestätigen")), 1)]),
				_: 1
			}, 8, ["variant"])]),
			default: P(() => [R("div", Kd, [R("p", qd, n(e.message), 1)])]),
			_: 1
		}, 8, ["open", "name"]));
	}
}), [["__scopeId", "data-v-54981555"]]);
//#endregion
//#region src/utils/modalEsc.ts
function Yd(e, t) {
	e.target?.closest?.(".v-select.vs--open") || t();
}
//#endregion
//#region src/components/SendInvoiceDialog.vue?vue&type=script&setup=true&lang.ts
var Xd = { class: "send-modal" }, Zd = { class: "send-modal__hint" }, Qd = { class: "field" }, $d = { class: "field" }, ef = { class: "field" }, tf = { class: "actions" }, nf = /*#__PURE__*/ Z(/* @__PURE__ */ r({
	__name: "SendInvoiceDialog",
	props: {
		open: { type: Boolean },
		invoice: {},
		defaultBody: {},
		saving: { type: Boolean },
		kind: {}
	},
	emits: ["close", "send"],
	setup(e, { emit: t }) {
		let r = e, i = H(() => r.kind === "quote"), a = H(() => i.value ? f("rechnungswerk", "Angebot an Kunde senden") : f("rechnungswerk", "Rechnung an Kunde senden")), o = H(() => i.value ? f("rechnungswerk", "Das Angebot wird als PDF angehängt.") : f("rechnungswerk", "Die E-Rechnung wird als ZUGFeRD-PDF angehängt.")), s = t, c = M(null), l = ue({
			to: "",
			subject: "",
			body: ""
		}), u = H(() => /\S+@\S+\.\S+/.test(l.to.trim()) && l.subject.trim() !== "");
		v(() => r.open, (e) => {
			if (!e) return;
			let t = r.invoice;
			l.to = t?.recipientEmail ?? "", i.value ? l.subject = t?.number ? f("rechnungswerk", "Angebot {number}", { number: t.number }) : f("rechnungswerk", "Ihr Angebot") : l.subject = t?.number ? f("rechnungswerk", "Rechnung {number}", { number: t.number }) : f("rechnungswerk", "Ihre Rechnung"), l.body = r.defaultBody, B(() => c.value?.focus());
		}, { immediate: !0 });
		function d() {
			u.value && s("send", {
				to: l.to.trim(),
				subject: l.subject.trim(),
				body: l.body
			});
		}
		return (t, r) => e.open ? (p(), I(J(lt), {
			key: 0,
			name: a.value,
			onKeydown: r[4] ||= xe((e) => J(Yd)(e, () => t.$emit("close")), ["esc"]),
			onClose: r[5] ||= (e) => t.$emit("close")
		}, {
			default: P(() => [R("div", Xd, [
				R("h2", null, n(a.value), 1),
				R("p", Zd, n(o.value), 1),
				R("label", Qd, [R("span", null, n(J(f)("rechnungswerk", "Empfänger-E-Mail")) + " *", 1), W(R("input", {
					ref_key: "toInput",
					ref: c,
					"onUpdate:modelValue": r[0] ||= (e) => l.to = e,
					class: "input",
					type: "email"
				}, null, 512), [[D, l.to]])]),
				R("label", $d, [R("span", null, n(J(f)("rechnungswerk", "Betreff")) + " *", 1), W(R("input", {
					"onUpdate:modelValue": r[1] ||= (e) => l.subject = e,
					class: "input",
					type: "text"
				}, null, 512), [[D, l.subject]])]),
				R("label", ef, [R("span", null, n(J(f)("rechnungswerk", "Nachricht")), 1), W(R("textarea", {
					"onUpdate:modelValue": r[2] ||= (e) => l.body = e,
					class: "input",
					rows: "6"
				}, null, 512), [[D, l.body]])]),
				R("div", tf, [q(J(Y), { onClick: r[3] ||= (e) => t.$emit("close") }, {
					default: P(() => [k(n(J(f)("rechnungswerk", "Abbrechen")), 1)]),
					_: 1
				}), q(J(Y), {
					variant: "primary",
					disabled: e.saving || !u.value,
					onClick: d
				}, {
					icon: P(() => [q(iu, { size: 20 })]),
					default: P(() => [k(" " + n(J(f)("rechnungswerk", "Senden")), 1)]),
					_: 1
				}, 8, ["disabled"])])
			])]),
			_: 1
		}, 8, ["name"])) : T("", !0);
	}
}), [["__scopeId", "data-v-2f5a808a"]]), rf = () => Q("/quotes"), af = (e) => Q(`/quotes/${e}`), of = (e) => $("/quotes", { data: e }), sf = (e, t) => Do(`/quotes/${e}`, { data: t }), cf = (e) => ko(`/quotes/${e}`), lf = (e) => $(`/quotes/${e}/commit`, {}), uf = (e) => $(`/quotes/${e}/accept`, {}), df = (e) => $(`/quotes/${e}/reject`, {}), ff = (e) => $(`/quotes/${e}/convert`, {}), pf = (e) => $(`/quotes/${e}/revise`, {}), mf = (e) => To(`/quotes/${e}/pdf`), hf = (e) => To(`/quotes/${e}/preview`) + "?t=" + Date.now(), gf = (e) => {
	let t = document.createElement("a");
	t.href = mf(e), t.download = "", t.rel = "noopener", t.style.display = "none", document.body.appendChild(t), t.click(), t.remove();
}, _f = (e, t) => $(`/quotes/${e}/send`, t), vf = nn("quote", () => {
	let e = M([]), t = M(!1);
	async function n() {
		t.value = !0;
		try {
			e.value = await rf();
		} finally {
			t.value = !1;
		}
	}
	let r = (e) => af(e);
	async function i(e) {
		let t = await of(e);
		return await n(), t;
	}
	async function a(e, t) {
		let r = await sf(e, t);
		return await n(), r;
	}
	async function o(t) {
		await cf(t), e.value = e.value.filter((e) => e.id !== t);
	}
	async function s(e) {
		let t = await lf(e);
		return await n(), t;
	}
	async function c(e) {
		let t = await uf(e);
		return await n(), t;
	}
	async function l(e) {
		let t = await df(e);
		return await n(), t;
	}
	async function u(e) {
		let t = await ff(e);
		return await n(), t;
	}
	async function d(e) {
		let t = await pf(e);
		return await n(), t;
	}
	return {
		quotes: e,
		loading: t,
		fetchAll: n,
		get: r,
		create: i,
		update: a,
		remove: o,
		commit: s,
		accept: c,
		reject: l,
		convert: u,
		revise: d
	};
}), yf = () => Q("/products"), bf = (e) => $("/products", { data: e }), xf = (e, t) => Do(`/products/${e}`, { data: t }), Sf = (e) => ko(`/products/${e}`), Cf = nn("product", () => {
	let e = M([]), t = M(!1);
	async function n() {
		t.value = !0;
		try {
			e.value = await yf();
		} finally {
			t.value = !1;
		}
	}
	async function r(t) {
		let n = await bf(t);
		return e.value.push(n), e.value.sort((e, t) => e.name.localeCompare(t.name)), n;
	}
	async function i(t, n) {
		let r = await xf(t, n), i = e.value.findIndex((e) => e.id === t);
		return i >= 0 && (e.value[i] = r), e.value.sort((e, t) => e.name.localeCompare(t.name)), r;
	}
	async function a(t) {
		let n = e.value.findIndex((e) => e.id === t), r = n >= 0 ? e.value[n] : null;
		n >= 0 && e.value.splice(n, 1);
		try {
			await Sf(t);
		} catch (t) {
			throw r && n >= 0 && e.value.splice(n, 0, r), t;
		}
	}
	return {
		products: e,
		loading: t,
		fetchAll: n,
		create: r,
		update: i,
		remove: a
	};
}), wf = () => Q("/text-snippets"), Tf = (e) => $("/text-snippets", { data: e }), Ef = (e, t) => Do(`/text-snippets/${e}`, { data: t }), Df = (e) => ko(`/text-snippets/${e}`);
//#endregion
//#region src/stores/textSnippetStore.ts
function Of(e) {
	e.sort((e, t) => e.docType.localeCompare(t.docType) || e.slot.localeCompare(t.slot) || e.sortOrder - t.sortOrder || e.label.localeCompare(t.label));
}
var kf = nn("textSnippet", () => {
	let e = M([]), t = M(!1), n = M(!1);
	async function r() {
		t.value = !0;
		try {
			e.value = await wf(), n.value = !0;
		} finally {
			t.value = !1;
		}
	}
	async function i() {
		!n.value && !t.value && await r();
	}
	function a(t) {
		if (t.isDefault) for (let n of e.value) n.id !== t.id && n.docType === t.docType && n.slot === t.slot && (n.isDefault = !1);
	}
	async function o(t) {
		let n = await Tf(t);
		return e.value.push(n), a(n), Of(e.value), n;
	}
	async function s(t, n) {
		let r = await Ef(t, n), i = e.value.findIndex((e) => e.id === t);
		return i >= 0 && (e.value[i] = r), a(r), Of(e.value), r;
	}
	async function c(t) {
		let n = e.value.findIndex((e) => e.id === t), r = n >= 0 ? e.value[n] : null;
		n >= 0 && e.value.splice(n, 1);
		try {
			await Df(t);
		} catch (t) {
			throw r && n >= 0 && e.value.splice(n, 0, r), t;
		}
	}
	function l(t, n) {
		return e.value.filter((e) => e.docType === t && e.slot === n).sort((e, t) => Number(t.isDefault) - Number(e.isDefault) || e.sortOrder - t.sortOrder || e.label.localeCompare(t.label));
	}
	function u(t, n) {
		return e.value.find((e) => e.docType === t && e.slot === n && e.isDefault)?.content ?? "";
	}
	return {
		snippets: e,
		loading: t,
		loaded: n,
		fetchAll: r,
		ensureLoaded: i,
		create: o,
		update: s,
		remove: c,
		forSlot: l,
		defaultContent: u
	};
}), Af = () => Q("/me/contact"), jf = (e) => Oo("/me/contact", { data: e }), Mf = { class: "rw-view" }, Nf = { class: "rw-editor-head" }, Pf = {
	key: 0,
	class: "rw-status-group"
}, Ff = { class: "rw-status-tag" }, If = {
	key: 0,
	class: "rw-pill"
}, Lf = {
	key: 1,
	class: "rw-pill"
}, Rf = ["title"], zf = { class: "rw-section" }, Bf = { class: "rw-form-row" }, Vf = { class: "rw-field invoice-no" }, Hf = ["value"], Uf = { class: "rw-field" }, Wf = ["readonly"], Gf = { class: "rw-field" }, Kf = ["readonly"], qf = { class: "rw-hint" }, Jf = { class: "more" }, Yf = { class: "rw-form-row" }, Xf = { class: "rw-field" }, Zf = ["readonly"], Qf = { class: "rw-field" }, $f = ["readonly"], ep = {
	key: 0,
	class: "rw-field"
}, tp = ["readonly", "placeholder"], np = {
	key: 1,
	class: "rw-field",
	"aria-hidden": "true"
}, rp = { class: "rw-form-row" }, ip = { class: "rw-field" }, ap = ["readonly"], op = { class: "rw-field" }, sp = ["readonly"], cp = { class: "rw-section" }, lp = {
	key: 0,
	class: "rw-form-row"
}, up = { class: "rw-field" }, dp = { class: "rw-hint" }, fp = { class: "rw-form-row" }, pp = { class: "rw-field" }, mp = ["value"], hp = { class: "rw-field" }, gp = ["readonly"], _p = { class: "rw-form-row" }, vp = { class: "rw-field" }, yp = ["readonly"], bp = { class: "rw-field rw-field--narrow" }, xp = ["readonly"], Sp = { class: "rw-field" }, Cp = ["readonly"], wp = { class: "rw-field rw-field--country" }, Tp = { class: "rw-form-row" }, Ep = { class: "rw-field" }, Dp = ["readonly"], Op = { class: "rw-field" }, kp = ["readonly"], Ap = { class: "rw-field" }, jp = ["readonly"], Mp = { class: "rw-section" }, Np = { class: "rw-form-row" }, Pp = { class: "rw-field" }, Fp = ["readonly"], Ip = { class: "rw-field" }, Lp = ["readonly"], Rp = { class: "rw-field" }, zp = ["readonly"], Bp = { class: "rw-hint" }, Vp = { class: "rw-section" }, Hp = { class: "rw-section-head" }, Up = { class: "rw-field" }, Wp = ["readonly", "placeholder"], Gp = { class: "rw-section" }, Kp = { class: "rw-section" }, qp = { class: "rw-form-row" }, Jp = { class: "rw-field" }, Yp = ["disabled"], Xp = { value: "" }, Zp = { value: "reverse_charge" }, Qp = { value: "intra_community" }, $p = { value: "export" }, em = { class: "rw-totals" }, tm = { class: "rw-kpi-card" }, nm = { class: "rw-kpi-row" }, rm = { class: "rw-kpi-row rw-kpi-row--grand" }, im = {
	key: 4,
	class: "rw-section"
}, am = { class: "rw-form-row" }, om = { class: "rw-field payterm-days" }, sm = ["readonly"], cm = { class: "rw-field" }, lm = ["value"], um = { class: "rw-field" }, dm = ["readonly", "placeholder"], fm = {
	key: 5,
	class: "rw-section"
}, pm = { class: "rw-form-row" }, mm = { class: "rw-field payterm-days" }, hm = ["readonly"], gm = { class: "rw-field rw-checkbox-field" }, _m = { class: "rw-checkbox-row" }, vm = ["disabled"], ym = { class: "rw-hint" }, bm = { class: "rw-section" }, xm = { class: "rw-section-head" }, Sm = { class: "rw-field" }, Cm = ["readonly", "placeholder"], wm = {
	key: 6,
	class: "rw-section"
}, Tm = [
	"onUpdate:modelValue",
	"readonly",
	"aria-label"
], Em = { class: "rw-hint" }, Dm = { class: "rw-action-bar" }, Om = ["src", "title"], km = /*#__PURE__*/ Z(/* @__PURE__ */ r({
	__name: "InvoiceEditorView",
	props: { id: {} },
	setup(e) {
		let t = e, r = Be(), i = Ze(), a = Dc(), o = vf(), l = Cf(), u = Ic(), d = kf(), m = H(() => typeof r.name == "string" && r.name.startsWith("quote")), h = H(() => m.value ? o : a), g = H(() => m.value ? "quote" : "invoice"), _ = H(() => d.forSlot(g.value, "opening")), y = H(() => d.forSlot(g.value, "closing"));
		function b(e) {
			z.greeting = e.content ?? "";
		}
		function ee(e) {
			z.extraText = e.content ?? "";
		}
		let x = H(() => m.value ? "quotes" : "invoices"), ne = H(() => m.value ? "quote-detail" : "invoice-detail"), C = M(null), w = M([dd()]), re = M([]), E = M(""), A = M(""), j = M(!1), N = M(!1), F = M(!1), ie = M(!1), ae = M(""), L = M(null), oe = () => ({
			customerId: null,
			recipientName: "",
			recipientEmail: "",
			recipientAddress: "",
			recipientPostalCode: "",
			recipientCity: "",
			recipientCountry: "DE",
			recipientVatId: "",
			recipientContactId: "",
			recipientContactPerson: "",
			recipientPhone: "",
			sellerContactPerson: "",
			sellerContactPhone: "",
			sellerContactEmail: "",
			performanceDate: "",
			performancePeriodStart: "",
			performancePeriodEnd: "",
			referenceNumber: "",
			orderNumber: "",
			buyerReference: "",
			contractNumber: "",
			projectReference: "",
			specialTaxCase: "",
			greeting: "",
			extraText: "",
			paymentTermDays: "",
			discountTerms: "",
			validUntil: "",
			offerFreeform: !1
		}), z = ue(oe()), se = [
			"reverse_charge",
			"intra_community",
			"export"
		], B = H(() => (u.settings?.smallBusiness ?? !1) || se.includes(z.specialTaxCase)), le = H(() => {
			let e = Number.parseInt(String(z.paymentTermDays), 10);
			if (Number.isNaN(e)) return "";
			let t = (e) => /* @__PURE__ */ new Date(`${e}T12:00:00`);
			if (C.value?.dueDate) return t(C.value.dueDate).toLocaleDateString();
			let n = C.value?.issueDate ? t(C.value.issueDate) : /* @__PURE__ */ new Date();
			return n.setDate(n.getDate() + e), n.toLocaleDateString();
		}), V = H(() => C.value !== null && C.value.status !== "draft"), de = {
			draft: xs,
			committed: wo,
			cancelled: Os
		}, fe = {
			pending: Hs,
			confirmed: Fs,
			unknown: Ys,
			failed: Os
		}, U = (e) => de[e] ?? xs, pe = (e) => fe[e] ?? Ys, me = H(() => C.value ? m.value && C.value.quoteStatus ? f("rechnungswerk", Gc[C.value.quoteStatus] ?? C.value.status) : f("rechnungswerk", Uc[C.value.status]) : ""), he = H(() => C.value ? f("rechnungswerk", Wc[C.value.invoiceType]) : ""), ge = H(() => {
			let e = {
				pending: f("rechnungswerk", "DATEV: gesendet"),
				confirmed: f("rechnungswerk", "DATEV: bestätigt"),
				failed: f("rechnungswerk", "DATEV: abgelehnt"),
				unknown: f("rechnungswerk", "DATEV: Antwort prüfen")
			}, t = C.value?.datevStatus;
			return t ? e[t] ?? "" : "";
		}), _e = H(() => C.value ? C.value.relatedNumber ? f("rechnungswerk", "{type} zu Rechnung {number}", {
			type: he.value,
			number: C.value.relatedNumber
		}) : he.value : ""), ye = H(() => {
			if (m.value) return f("rechnungswerk", "Das Angebot erhält eine endgültige Angebotsnummer und ist danach unveränderbar. Fortfahren?");
			let e = f("rechnungswerk", "Die Rechnung erhält eine endgültige Nummer und ist danach unveränderbar. Korrektur nur per Storno. Fortfahren?"), t = u.settings;
			return t?.datevAutoSend && t.datevUploadMail && (e += "\n\n" + f("rechnungswerk", "Beim Festschreiben wird automatisch eine E-Rechnung an DATEV ({mail}) gesendet.", { mail: t.datevUploadMail })), e;
		}), be = H(() => {
			let e = (C.value?.greeting ?? d.defaultContent(g.value, "opening")).trim(), t = (C.value?.extraText ?? d.defaultContent(g.value, "closing")).trim(), n = m.value ? f("rechnungswerk", "anbei erhalten Sie unser Angebot als PDF.") : f("rechnungswerk", "anbei erhalten Sie Ihre Rechnung als E-Rechnung (ZUGFeRD-PDF).");
			return [e === "" ? n : e, t].filter((e) => e !== "").join("\n\n");
		}), xe = H(() => C.value ? C.value.number ?? f("rechnungswerk", "Entwurf") : m.value ? f("rechnungswerk", "Neues Angebot") : f("rechnungswerk", "Neue Rechnung")), Se = H(() => hd(w.value.map((e) => ({
			taxRateBp: e.taxRateBp,
			lineTotalCents: md(e.quantity, $c(e.priceInput))
		})), B.value)), Ce = 0;
		s(async () => {
			let e = ++Ce;
			try {
				if (await Promise.all([
					l.fetchAll(),
					u.fetch(),
					d.ensureLoaded()
				]), e !== Ce) return;
				t.id ? await Ee(Number(t.id), e) : await Te(e);
			} catch (e) {
				et(e, f("rechnungswerk", "Laden fehlgeschlagen"));
			}
		}), v(() => [r.name, t.id], async ([, e]) => {
			let t = ++Ce;
			try {
				if (!e) we(), await Te(t);
				else {
					let n = C.value !== null && C.value.invoiceType === "quote" !== m.value;
					(C.value?.id !== Number(e) || n) && (we(), await Ee(Number(e), t));
				}
			} catch (e) {
				et(e, f("rechnungswerk", "Laden fehlgeschlagen"));
			}
		});
		function we() {
			C.value = null, w.value = [dd()], re.value = [], E.value = "", A.value = "", F.value = !1, ie.value = !1, ae.value = "", L.value = null, Object.assign(z, oe());
		}
		async function Te(e = Ce) {
			let t = u.settings;
			z.greeting = d.defaultContent(g.value, "opening"), z.extraText = d.defaultContent(g.value, "closing"), z.paymentTermDays = m.value ? "" : t?.defaultPaymentTermDays ?? "";
			let n = {
				person: "",
				phone: "",
				email: ""
			};
			try {
				n = await Af();
			} catch {}
			e === Ce && (z.sellerContactPerson = n.person || (t?.contactPerson ?? ""), z.sellerContactPhone = n.phone || (t?.contactPhone ?? ""), z.sellerContactEmail = n.email || (t?.contactEmail ?? ""));
		}
		async function Ee(e, t = Ce) {
			let n = await h.value.get(e);
			t === Ce && (C.value = n, z.customerId = n.customerId ?? null, z.recipientName = n.recipientName ?? "", z.recipientEmail = n.recipientEmail ?? "", z.recipientAddress = n.recipientAddress ?? "", z.recipientPostalCode = n.recipientPostalCode ?? "", z.recipientCity = n.recipientCity ?? "", z.recipientCountry = n.recipientCountry ?? "DE", z.recipientVatId = n.recipientVatId ?? "", z.recipientContactId = n.recipientContactId ?? "", z.recipientContactPerson = n.recipientContactPerson ?? "", z.recipientPhone = n.recipientPhone ?? "", z.sellerContactPerson = n.sellerContactPerson ?? "", z.sellerContactPhone = n.sellerContactPhone ?? "", z.sellerContactEmail = n.sellerContactEmail ?? "", z.performancePeriodStart = n.performancePeriodStart ?? n.performanceDate ?? "", z.performancePeriodEnd = n.performancePeriodEnd ?? "", z.referenceNumber = n.referenceNumber ?? "", z.orderNumber = n.orderNumber ?? "", z.buyerReference = n.buyerReference ?? "", z.contractNumber = n.contractNumber ?? "", z.projectReference = n.projectReference ?? "", re.value = [...n.notes ?? []], z.specialTaxCase = n.specialTaxCase ?? "", z.greeting = n.greeting ?? "", z.extraText = n.extraText ?? "", z.paymentTermDays = n.paymentTermDays ?? "", z.discountTerms = n.discountTerms ?? "", z.validUntil = n.validUntil ?? "", z.offerFreeform = n.offerFreeform ?? !1, w.value = n.items.length > 0 ? n.items.map(pd) : [dd()]);
		}
		function De() {
			re.value.push("");
		}
		function Oe(e) {
			re.value.splice(e, 1);
		}
		function ke(e) {
			z.customerId = e.id, z.recipientName = e.name, z.recipientContactId = "", z.recipientEmail = e.email ?? "", z.recipientAddress = e.address ?? "", z.recipientPostalCode = e.postalCode ?? "", z.recipientCity = e.city ?? "", z.recipientCountry = e.country ?? "DE", z.recipientVatId = e.vatId ?? "", z.recipientContactPerson = e.contactPerson ?? "", z.recipientPhone = e.phone ?? "", e.defaultPaymentTermDays != null && (z.paymentTermDays = e.defaultPaymentTermDays);
		}
		function Ae(e) {
			z.customerId = null, z.recipientName = e.name, z.recipientEmail = e.email, e.phone && (z.recipientPhone = e.phone), z.recipientAddress = e.address, z.recipientPostalCode = e.postalCode, z.recipientCity = e.city, e.country && (z.recipientCountry = e.country);
		}
		function je() {
			let e = z.performancePeriodStart, t = z.performancePeriodEnd, n = e && t ? {
				performanceDate: "",
				performancePeriodStart: e,
				performancePeriodEnd: t
			} : {
				performanceDate: e || t || "",
				performancePeriodStart: "",
				performancePeriodEnd: ""
			}, r = {
				...z,
				...n,
				paymentTermDays: z.paymentTermDays === "" ? null : Number(z.paymentTermDays),
				notes: re.value.map((e) => e.trim()).filter((e) => e !== ""),
				items: w.value.filter((e) => e.name.trim() !== "").map((e) => ({
					productId: e.productId,
					name: e.name.trim(),
					description: e.description.trim() === "" ? null : e.description.trim(),
					quantity: e.quantity,
					unitCode: e.unitCode,
					unitLabel: e.unitLabel.trim() === "" ? null : e.unitLabel.trim(),
					unitPriceInput: e.priceInput,
					taxRateBp: e.taxRateBp
				}))
			};
			return m.value ? (r.validUntil = z.validUntil === "" ? null : z.validUntil, r.offerFreeform = z.offerFreeform, r.paymentTermDays = null, r.discountTerms = null) : (delete r.validUntil, delete r.offerFreeform), r;
		}
		async function Me() {
			E.value = "", j.value = !0;
			try {
				let e;
				return C.value ? e = await h.value.update(C.value.id, je()) : (e = await h.value.create(je()), i.replace({
					name: ne.value,
					params: { id: String(e.id) }
				})), C.value = e, e;
			} catch (e) {
				return et(e, f("rechnungswerk", "Speichern fehlgeschlagen")), null;
			} finally {
				j.value = !1;
			}
		}
		async function Ne() {
			let e = await Me();
			e && (ae.value = m.value ? hf(e.id) : Sc(e.id), ie.value = !0);
		}
		function Pe(e) {
			e || (ie.value = !1, ae.value = "");
		}
		function Fe() {
			L.value = "finalize";
		}
		function Ie() {
			L.value = "delete";
		}
		function Le() {
			L.value = "cancel";
		}
		function Re() {
			L.value = "convert";
		}
		function ze() {
			L.value = "revise";
		}
		let Ve = H(() => m.value && C.value?.status === "committed" && !["converted", "superseded"].includes(C.value?.quoteStatus ?? "")), He = H(() => m.value && C.value?.status === "committed" && [
			"open",
			"expired",
			"accepted"
		].includes(C.value?.quoteStatus ?? "")), Ue = H(() => m.value && C.value?.status === "committed" && ["open", "expired"].includes(C.value?.quoteStatus ?? ""));
		function We() {
			C.value && (m.value ? gf(C.value.id) : Cc(C.value.id));
		}
		async function Ge() {
			L.value = null;
			let e = await Me();
			if (e) {
				j.value = !0;
				try {
					let t = await h.value.commit(e.id);
					if (C.value = t, A.value = "", m.value) A.value = f("rechnungswerk", "Angebot festgeschrieben.");
					else {
						let e = t.datevMailSent;
						e === !0 ? A.value = f("rechnungswerk", "Festgeschrieben. E-Rechnung wurde automatisch an DATEV gesendet.") : e === null && (E.value = f("rechnungswerk", "Rechnung festgeschrieben, aber der automatische DATEV-Versand ist fehlgeschlagen. Bitte manuell senden."));
					}
				} catch (e) {
					et(e, f("rechnungswerk", "Festschreiben fehlgeschlagen"));
				} finally {
					j.value = !1;
				}
			}
		}
		async function Ke() {
			if (C.value) {
				j.value = !0, E.value = "";
				try {
					C.value = await o.accept(C.value.id), A.value = f("rechnungswerk", "Angebot als angenommen markiert.");
				} catch (e) {
					et(e, f("rechnungswerk", "Aktion fehlgeschlagen"));
				} finally {
					j.value = !1;
				}
			}
		}
		async function qe() {
			if (C.value) {
				j.value = !0, E.value = "";
				try {
					C.value = await o.reject(C.value.id), A.value = f("rechnungswerk", "Angebot als abgelehnt markiert.");
				} catch (e) {
					et(e, f("rechnungswerk", "Aktion fehlgeschlagen"));
				} finally {
					j.value = !1;
				}
			}
		}
		async function X() {
			if (L.value = null, C.value) {
				j.value = !0, E.value = "";
				try {
					let e = await o.convert(C.value.id);
					i.push({
						name: "invoice-detail",
						params: { id: String(e.id) }
					});
				} catch (e) {
					et(e, f("rechnungswerk", "Übernahme fehlgeschlagen"));
				} finally {
					j.value = !1;
				}
			}
		}
		async function Je() {
			if (L.value = null, C.value) {
				j.value = !0, E.value = "";
				try {
					let e = await o.revise(C.value.id);
					i.push({
						name: "quote-detail",
						params: { id: String(e.id) }
					});
				} catch (e) {
					et(e, f("rechnungswerk", "Revidieren fehlgeschlagen"));
				} finally {
					j.value = !1;
				}
			}
		}
		async function Ye(e) {
			if (C.value) {
				N.value = !0, E.value = "";
				try {
					m.value ? (await _f(C.value.id, e), F.value = !1, A.value = f("rechnungswerk", "Angebot an {to} gesendet.", { to: e.to })) : (await Ec(C.value.id, e), F.value = !1, A.value = f("rechnungswerk", "Rechnung an {to} gesendet.", { to: e.to }));
				} catch (e) {
					et(e, f("rechnungswerk", "Versand fehlgeschlagen"));
				} finally {
					N.value = !1;
				}
			}
		}
		async function Xe() {
			if (L.value = null, !C.value) {
				$e();
				return;
			}
			j.value = !0;
			try {
				await h.value.remove(C.value.id), $e();
			} catch (e) {
				et(e, f("rechnungswerk", "Löschen fehlgeschlagen"));
			} finally {
				j.value = !1;
			}
		}
		async function Qe() {
			if (L.value = null, C.value) {
				j.value = !0;
				try {
					let e = await a.cancel(C.value.id), t = e.datevMailSent;
					await Ee(e.id), A.value = "", t === !0 ? A.value = f("rechnungswerk", "Storniert. Der Stornobeleg wurde automatisch an DATEV gesendet.") : t === null && (E.value = f("rechnungswerk", "Storno erstellt, aber der automatische DATEV-Versand ist fehlgeschlagen. Bitte manuell senden."));
				} catch (e) {
					et(e, f("rechnungswerk", "Stornieren fehlgeschlagen"));
				} finally {
					j.value = !1;
				}
			}
		}
		function $e() {
			i.push({ name: x.value });
		}
		function et(e, t) {
			E.value = e.message ?? t, console.error("[rechnungswerk] editor:", e);
		}
		return (e, t) => {
			let r = te("tooltip");
			return p(), K("div", Mf, [
				R("div", Nf, [q(J(xt), null, {
					default: P(() => [q(J(yt), {
						name: m.value ? J(f)("rechnungswerk", "Angebote") : J(f)("rechnungswerk", "Rechnungen"),
						to: { name: x.value }
					}, null, 8, ["name", "to"]), q(J(yt), { name: xe.value }, null, 8, ["name"])]),
					_: 1
				}), C.value ? (p(), K("span", Pf, [
					R("span", Ff, [(p(), I(c(U(C.value.status)), {
						size: 18,
						class: O(["rw-sicon", `rw-sicon--${C.value.status}`])
					}, null, 8, ["class"])), k(" " + n(me.value), 1)]),
					!m.value && C.value.invoiceType !== "invoice" ? W((p(), K("span", If, [k(n(he.value), 1)])), [[r, _e.value]]) : T("", !0),
					m.value && C.value.relatedQuoteNumber ? (p(), K("span", Lf, n(J(f)("rechnungswerk", "Revision von {number}", { number: C.value.relatedQuoteNumber })), 1)) : T("", !0),
					C.value.datevStatus && ge.value ? (p(), K("span", {
						key: 2,
						class: "rw-status-tag",
						title: J(f)("rechnungswerk", "DATEV-Übergabe")
					}, [(p(), I(c(pe(C.value.datevStatus)), {
						size: 18,
						class: O(["rw-sicon", `rw-sicon--datev-${C.value.datevStatus}`])
					}, null, 8, ["class"])), k(" " + n(ge.value), 1)], 8, Rf)) : T("", !0)
				])) : T("", !0)]),
				E.value ? (p(), I(J(st), {
					key: 0,
					type: "error",
					text: E.value
				}, null, 8, ["text"])) : T("", !0),
				A.value ? (p(), I(J(st), {
					key: 1,
					type: "success",
					text: A.value
				}, null, 8, ["text"])) : T("", !0),
				V.value ? (p(), I(J(st), {
					key: 2,
					type: "info",
					text: m.value ? J(f)("rechnungswerk", "Dieses Angebot ist festgeschrieben und kann nicht mehr geändert werden.") : J(f)("rechnungswerk", "Diese Rechnung ist festgeschrieben und kann nicht mehr geändert werden.")
				}, null, 8, ["text"])) : T("", !0),
				!m.value && C.value?.documentBackfilled ? (p(), I(J(st), {
					key: 3,
					type: "info",
					text: J(f)("rechnungswerk", "Dieser Beleg wurde nicht beim Festschreiben abgelegt, sondern später aus dem Datensatz erzeugt. Beträge, Positionen und Steuerausweis stimmen; Firmendaten und Layout entsprechen dem heutigen Stand, nicht dem von damals.")
				}, null, 8, ["text"])) : T("", !0),
				R("section", zf, [
					R("h3", null, n(m.value ? J(f)("rechnungswerk", "Angebotsdaten") : J(f)("rechnungswerk", "Rechnungsdaten")), 1),
					R("div", Bf, [
						R("label", Vf, [R("span", null, n(m.value ? J(f)("rechnungswerk", "Angebotsnummer") : J(f)("rechnungswerk", "Rechnungsnummer")), 1), R("input", {
							class: "rw-input",
							type: "text",
							readonly: "",
							value: C.value?.number ?? J(f)("rechnungswerk", "(wird vergeben)")
						}, null, 8, Hf)]),
						R("label", Uf, [R("span", null, n(m.value ? J(f)("rechnungswerk", "Geplanter Leistungszeitraum (optional)") : J(f)("rechnungswerk", "Leistungsdatum /-zeitraum")), 1), W(R("input", {
							"onUpdate:modelValue": t[0] ||= (e) => z.performancePeriodStart = e,
							class: "rw-input",
							type: "date",
							readonly: V.value
						}, null, 8, Wf), [[D, z.performancePeriodStart]])]),
						R("label", Gf, [R("span", null, n(J(f)("rechnungswerk", "bis (optional)")), 1), W(R("input", {
							"onUpdate:modelValue": t[1] ||= (e) => z.performancePeriodEnd = e,
							class: "rw-input",
							type: "date",
							readonly: V.value
						}, null, 8, Kf), [[D, z.performancePeriodEnd]])])
					]),
					R("p", qf, n(m.value ? J(f)("rechnungswerk", "Optional: geplanter Termin oder Zeitraum der Leistung. Nur das erste Feld → Datum, beide Felder → Zeitraum. Für ein Angebot nicht verpflichtend.") : J(f)("rechnungswerk", "Pflichtangabe nach § 14 UStG: Nur das erste Feld ausfüllen → Leistungsdatum. Beide Felder → Leistungszeitraum.")), 1),
					R("details", Jf, [
						R("summary", null, n(m.value ? J(f)("rechnungswerk", "Weitere Felder (Referenz, Bestellnummer, Vertrag, Projekt)") : J(f)("rechnungswerk", "Weitere Felder (Referenz, Bestellnummer, Vertrag, Projekt, Leitweg-ID)")), 1),
						R("div", Yf, [
							R("label", Xf, [R("span", null, n(J(f)("rechnungswerk", "Referenznummer")), 1), W(R("input", {
								"onUpdate:modelValue": t[2] ||= (e) => z.referenceNumber = e,
								class: "rw-input",
								type: "text",
								readonly: V.value
							}, null, 8, Zf), [[D, z.referenceNumber]])]),
							R("label", Qf, [R("span", null, n(J(f)("rechnungswerk", "Bestellnummer")), 1), W(R("input", {
								"onUpdate:modelValue": t[3] ||= (e) => z.orderNumber = e,
								class: "rw-input",
								type: "text",
								readonly: V.value
							}, null, 8, $f), [[D, z.orderNumber]])]),
							m.value ? (p(), K("span", np)) : (p(), K("label", ep, [R("span", null, n(J(f)("rechnungswerk", "Käuferreferenz / Leitweg-ID (BT-10)")), 1), W(R("input", {
								"onUpdate:modelValue": t[4] ||= (e) => z.buyerReference = e,
								class: "rw-input",
								type: "text",
								readonly: V.value,
								placeholder: J(f)("rechnungswerk", "nur für öffentliche Auftraggeber")
							}, null, 8, tp), [[D, z.buyerReference]])]))
						]),
						R("div", rp, [
							R("label", ip, [R("span", null, n(J(f)("rechnungswerk", "Vertragsnummer (BT-12)")), 1), W(R("input", {
								"onUpdate:modelValue": t[5] ||= (e) => z.contractNumber = e,
								class: "rw-input",
								type: "text",
								readonly: V.value
							}, null, 8, ap), [[D, z.contractNumber]])]),
							R("label", op, [R("span", null, n(J(f)("rechnungswerk", "Objekt-/Projektkennung (BT-18)")), 1), W(R("input", {
								"onUpdate:modelValue": t[6] ||= (e) => z.projectReference = e,
								class: "rw-input",
								type: "text",
								readonly: V.value
							}, null, 8, sp), [[D, z.projectReference]])]),
							t[35] ||= R("span", {
								class: "rw-field",
								"aria-hidden": "true"
							}, null, -1)
						])
					])
				]),
				R("section", cp, [
					R("h3", null, n(J(f)("rechnungswerk", "Empfänger")), 1),
					V.value ? T("", !0) : (p(), K("div", lp, [R("label", up, [
						R("span", null, n(J(f)("rechnungswerk", "Kunde übernehmen")), 1),
						q(ud, { onSelect: ke }),
						R("span", dp, n(J(f)("rechnungswerk", "Kunde auswählen, um die Empfängerdaten automatisch zu übernehmen.")), 1)
					])])),
					R("div", fp, [R("label", pp, [R("span", null, n(J(f)("rechnungswerk", "Name")), 1), V.value ? (p(), K("input", {
						key: 1,
						class: "rw-input",
						type: "text",
						readonly: "",
						value: z.recipientName
					}, null, 8, mp)) : (p(), I(qu, {
						key: 0,
						modelValue: z.recipientName,
						"onUpdate:modelValue": t[7] ||= (e) => z.recipientName = e,
						onSelect: Ae
					}, null, 8, ["modelValue"]))]), R("label", hp, [R("span", null, n(J(f)("rechnungswerk", "E-Mail")), 1), W(R("input", {
						"onUpdate:modelValue": t[8] ||= (e) => z.recipientEmail = e,
						class: "rw-input",
						type: "email",
						readonly: V.value
					}, null, 8, gp), [[D, z.recipientEmail]])])]),
					R("div", _p, [
						R("label", vp, [R("span", null, n(J(f)("rechnungswerk", "Straße")), 1), W(R("input", {
							"onUpdate:modelValue": t[9] ||= (e) => z.recipientAddress = e,
							class: "rw-input",
							type: "text",
							readonly: V.value
						}, null, 8, yp), [[D, z.recipientAddress]])]),
						R("label", bp, [R("span", null, n(J(f)("rechnungswerk", "PLZ")), 1), W(R("input", {
							"onUpdate:modelValue": t[10] ||= (e) => z.recipientPostalCode = e,
							class: "rw-input",
							type: "text",
							readonly: V.value
						}, null, 8, xp), [[D, z.recipientPostalCode]])]),
						R("label", Sp, [R("span", null, n(J(f)("rechnungswerk", "Ort")), 1), W(R("input", {
							"onUpdate:modelValue": t[11] ||= (e) => z.recipientCity = e,
							class: "rw-input",
							type: "text",
							readonly: V.value
						}, null, 8, Cp), [[D, z.recipientCity]])]),
						R("label", wp, [R("span", null, n(J(f)("rechnungswerk", "Land")), 1), q($u, {
							modelValue: z.recipientCountry,
							"onUpdate:modelValue": t[12] ||= (e) => z.recipientCountry = e,
							disabled: V.value
						}, null, 8, ["modelValue", "disabled"])])
					]),
					R("div", Tp, [
						R("label", Ep, [R("span", null, n(J(f)("rechnungswerk", "USt-IdNr. (optional)")), 1), W(R("input", {
							"onUpdate:modelValue": t[13] ||= (e) => z.recipientVatId = e,
							class: "rw-input",
							type: "text",
							readonly: V.value
						}, null, 8, Dp), [[D, z.recipientVatId]])]),
						R("label", Op, [R("span", null, n(J(f)("rechnungswerk", "Ansprechpartner (optional)")), 1), W(R("input", {
							"onUpdate:modelValue": t[14] ||= (e) => z.recipientContactPerson = e,
							class: "rw-input",
							type: "text",
							readonly: V.value
						}, null, 8, kp), [[D, z.recipientContactPerson]])]),
						R("label", Ap, [R("span", null, n(J(f)("rechnungswerk", "Telefon (optional)")), 1), W(R("input", {
							"onUpdate:modelValue": t[15] ||= (e) => z.recipientPhone = e,
							class: "rw-input",
							type: "text",
							readonly: V.value
						}, null, 8, jp), [[D, z.recipientPhone]])])
					])
				]),
				R("section", Mp, [
					R("h3", null, n(m.value ? J(f)("rechnungswerk", "Ansprechpartner (für dieses Angebot)") : J(f)("rechnungswerk", "Ansprechpartner (für diese Rechnung)")), 1),
					R("div", Np, [
						R("label", Pp, [R("span", null, n(J(f)("rechnungswerk", "Name")), 1), W(R("input", {
							"onUpdate:modelValue": t[16] ||= (e) => z.sellerContactPerson = e,
							class: "rw-input",
							type: "text",
							readonly: V.value
						}, null, 8, Fp), [[D, z.sellerContactPerson]])]),
						R("label", Ip, [R("span", null, n(J(f)("rechnungswerk", "Telefon")), 1), W(R("input", {
							"onUpdate:modelValue": t[17] ||= (e) => z.sellerContactPhone = e,
							class: "rw-input",
							type: "text",
							readonly: V.value
						}, null, 8, Lp), [[D, z.sellerContactPhone]])]),
						R("label", Rp, [R("span", null, n(J(f)("rechnungswerk", "E-Mail")), 1), W(R("input", {
							"onUpdate:modelValue": t[18] ||= (e) => z.sellerContactEmail = e,
							class: "rw-input",
							type: "email",
							readonly: V.value
						}, null, 8, zp), [[D, z.sellerContactEmail]])])
					]),
					R("p", Bp, n(m.value ? J(f)("rechnungswerk", "Vorbelegt aus deinem persönlichen Kontakt („Mein Kontakt“), sonst aus dem zentralen Firmenkontakt. Für dieses Angebot änderbar; leer lassen → Firmenkontakt.") : J(f)("rechnungswerk", "Vorbelegt aus deinem persönlichen Kontakt („Mein Kontakt“), sonst aus dem zentralen Firmenkontakt. Für diese Rechnung änderbar; leer lassen → Firmenkontakt.")), 1)
				]),
				R("section", Vp, [R("div", Hp, [R("h3", null, n(J(f)("rechnungswerk", "Anrede & Einleitung")), 1), !V.value && _.value.length > 0 ? (p(), I(J(at), {
					key: 0,
					menuName: J(f)("rechnungswerk", "Vorlage einfügen")
				}, {
					icon: P(() => [q(no, { size: 18 })]),
					default: P(() => [(p(!0), K(G, null, S(_.value, (e) => (p(), I(J(bt), {
						key: e.id,
						onClick: (t) => b(e)
					}, {
						default: P(() => [k(n(e.label), 1)]),
						_: 2
					}, 1032, ["onClick"]))), 128))]),
					_: 1
				}, 8, ["menuName"])) : T("", !0)]), R("label", Up, [R("span", null, n(J(f)("rechnungswerk", "Anrede & Einleitung")), 1), W(R("textarea", {
					"onUpdate:modelValue": t[19] ||= (e) => z.greeting = e,
					class: "rw-input",
					rows: "3",
					readonly: V.value,
					placeholder: J(f)("rechnungswerk", "Anrede und Einleitung – Vorgabe aus den Textbausteinen")
				}, null, 8, Wp), [[D, z.greeting]])])]),
				R("section", Gp, [R("h3", null, n(J(f)("rechnungswerk", "Positionen")), 1), q(Gd, {
					items: w.value,
					"onUpdate:items": t[20] ||= (e) => w.value = e,
					products: J(l).products,
					readonly: V.value,
					smallBusiness: J(u).settings?.smallBusiness ?? !1,
					defaultTaxRateBp: J(u).settings?.defaultTaxRateBp ?? 1900
				}, null, 8, [
					"items",
					"products",
					"readonly",
					"smallBusiness",
					"defaultTaxRateBp"
				])]),
				R("section", Kp, [
					R("h3", null, n(J(f)("rechnungswerk", "Steuer & Summen")), 1),
					R("div", qp, [R("label", Jp, [R("span", null, n(J(f)("rechnungswerk", "Steuerfall")), 1), W(R("select", {
						"onUpdate:modelValue": t[21] ||= (e) => z.specialTaxCase = e,
						class: "rw-input",
						disabled: V.value
					}, [
						R("option", Xp, n(J(f)("rechnungswerk", "Regelbesteuerung")), 1),
						R("option", Zp, n(J(f)("rechnungswerk", "Reverse Charge (§ 13b – Steuerschuldnerschaft des Leistungsempfängers)")), 1),
						R("option", Qp, n(J(f)("rechnungswerk", "Innergemeinschaftliche Lieferung (steuerfrei)")), 1),
						R("option", $p, n(J(f)("rechnungswerk", "Ausfuhrlieferung Drittland (steuerfrei)")), 1)
					], 8, Yp), [[ce, z.specialTaxCase]])]), t[36] ||= R("span", {
						class: "rw-field",
						"aria-hidden": "true"
					}, null, -1)]),
					z.specialTaxCase === "" ? T("", !0) : (p(), I(J(st), {
						key: 0,
						type: "info",
						text: J(f)("rechnungswerk", "Für diesen Steuerfall wird keine Umsatzsteuer berechnet (0 %). Ein entsprechender Hinweis erscheint auf der Rechnung.")
					}, null, 8, ["text"])),
					R("div", em, [R("div", tm, [
						R("div", nm, [R("span", null, n(J(f)("rechnungswerk", "Zwischensumme (netto)")), 1), R("strong", null, n(J(tl)(Se.value.subtotalCents)), 1)]),
						(p(!0), K(G, null, S(Se.value.taxBreakdown, (e) => (p(), K("div", {
							key: e.rateBp,
							class: "rw-kpi-row rw-kpi-row--muted"
						}, [R("span", null, n(J(f)("rechnungswerk", "USt {rate}", { rate: J(nl)(e.rateBp) })) + " (" + n(J(tl)(e.netCents)) + ")", 1), R("span", null, n(J(tl)(e.taxCents)), 1)]))), 128)),
						R("div", rm, [R("span", null, n(J(f)("rechnungswerk", "Gesamt (brutto)")), 1), R("strong", null, n(J(tl)(Se.value.totalCents)), 1)])
					])])
				]),
				m.value ? (p(), K("section", fm, [
					R("h3", null, n(J(f)("rechnungswerk", "Gültigkeit")), 1),
					R("div", pm, [R("label", mm, [R("span", null, n(J(f)("rechnungswerk", "Gültig bis")), 1), W(R("input", {
						"onUpdate:modelValue": t[24] ||= (e) => z.validUntil = e,
						class: "rw-input",
						type: "date",
						readonly: V.value
					}, null, 8, hm), [[D, z.validUntil]])]), R("label", gm, [R("span", _m, [W(R("input", {
						"onUpdate:modelValue": t[25] ||= (e) => z.offerFreeform = e,
						type: "checkbox",
						disabled: V.value
					}, null, 8, vm), [[ve, z.offerFreeform]]), k(" " + n(J(f)("rechnungswerk", "Freibleibendes Angebot (unverbindlich)")), 1)])])]),
					R("p", ym, n(J(f)("rechnungswerk", "„Gültig bis“ setzt eine klare Annahmefrist (§ 148 BGB). „Freibleibend“ (§ 145 BGB) kennzeichnet das Angebot als unverbindlich – ein entsprechender Hinweis erscheint auf dem PDF.")), 1)
				])) : (p(), K("section", im, [R("h3", null, n(J(f)("rechnungswerk", "Zahlungsbedingungen")), 1), R("div", am, [
					R("label", om, [R("span", null, n(J(f)("rechnungswerk", "Zahlungsziel (Tage)")), 1), W(R("input", {
						"onUpdate:modelValue": t[22] ||= (e) => z.paymentTermDays = e,
						class: "rw-input",
						type: "number",
						min: "0",
						step: "1",
						readonly: V.value
					}, null, 8, sm), [[D, z.paymentTermDays]])]),
					R("label", cm, [R("span", null, n(J(f)("rechnungswerk", "Fällig am")), 1), R("input", {
						class: "rw-input",
						type: "text",
						readonly: "",
						value: le.value || "—"
					}, null, 8, lm)]),
					R("label", um, [R("span", null, n(J(f)("rechnungswerk", "Skonto")), 1), W(R("input", {
						"onUpdate:modelValue": t[23] ||= (e) => z.discountTerms = e,
						class: "rw-input",
						type: "text",
						readonly: V.value,
						placeholder: J(f)("rechnungswerk", "z. B. 2 % bei Zahlung bis\xA0…")
					}, null, 8, dm), [[D, z.discountTerms]])])
				])])),
				R("section", bm, [R("div", xm, [R("h3", null, n(J(f)("rechnungswerk", "Schlusstext")), 1), !V.value && y.value.length > 0 ? (p(), I(J(at), {
					key: 0,
					menuName: J(f)("rechnungswerk", "Vorlage einfügen")
				}, {
					icon: P(() => [q(no, { size: 18 })]),
					default: P(() => [(p(!0), K(G, null, S(y.value, (e) => (p(), I(J(bt), {
						key: e.id,
						onClick: (t) => ee(e)
					}, {
						default: P(() => [k(n(e.label), 1)]),
						_: 2
					}, 1032, ["onClick"]))), 128))]),
					_: 1
				}, 8, ["menuName"])) : T("", !0)]), R("label", Sm, [R("span", null, n(J(f)("rechnungswerk", "Schlusstext / Anmerkungen")), 1), W(R("textarea", {
					"onUpdate:modelValue": t[26] ||= (e) => z.extraText = e,
					class: "rw-input",
					rows: "3",
					readonly: V.value,
					placeholder: J(f)("rechnungswerk", "Schlusstext – Vorgabe aus den Textbausteinen")
				}, null, 8, Cm), [[D, z.extraText]])])]),
				!V.value || re.value.length > 0 ? (p(), K("section", wm, [
					R("h3", null, n(m.value ? J(f)("rechnungswerk", "Notizen / Hinweise auf dem Angebot") : J(f)("rechnungswerk", "Notizen / Hinweise auf der Rechnung")), 1),
					(p(!0), K(G, null, S(re.value, (e, t) => (p(), K("div", {
						key: t,
						class: "rw-note-row"
					}, [W(R("input", {
						"onUpdate:modelValue": (e) => re.value[t] = e,
						class: "rw-input",
						type: "text",
						readonly: V.value,
						"aria-label": J(f)("rechnungswerk", "Notiz {index}", { index: t + 1 })
					}, null, 8, Tm), [[D, re.value[t]]]), V.value ? T("", !0) : (p(), I(J(Y), {
						key: 0,
						variant: "tertiary",
						"aria-label": J(f)("rechnungswerk", "Notiz entfernen"),
						onClick: (e) => Oe(t)
					}, {
						icon: P(() => [q(Zl, { size: 20 })]),
						_: 1
					}, 8, ["aria-label", "onClick"]))]))), 128)),
					V.value ? T("", !0) : (p(), I(J(Y), {
						key: 0,
						variant: "tertiary",
						onClick: De
					}, {
						icon: P(() => [q(es, { size: 20 })]),
						default: P(() => [k(" " + n(J(f)("rechnungswerk", "Notiz hinzufügen")), 1)]),
						_: 1
					})),
					R("p", Em, n(m.value ? J(f)("rechnungswerk", "Erscheint als Freitext auf dem Angebot – kein strukturiertes Datenfeld.") : J(f)("rechnungswerk", "Erscheint als Freitext auf der Rechnung und in der E-Rechnung (Notiz, BT-22) – kein strukturiertes Datenfeld.")), 1)
				])) : T("", !0),
				R("div", Dm, [V.value ? C.value ? (p(), K(G, { key: 1 }, [
					q(J(Y), { onClick: We }, {
						icon: P(() => [q(ss, { size: 20 })]),
						default: P(() => [k(" " + n(J(f)("rechnungswerk", "PDF herunterladen")), 1)]),
						_: 1
					}),
					q(J(Y), {
						variant: m.value ? "secondary" : "primary",
						disabled: N.value,
						onClick: t[28] ||= (e) => F.value = !0
					}, {
						icon: P(() => [q(iu, { size: 20 })]),
						default: P(() => [k(" " + n(J(f)("rechnungswerk", "An Kunde senden")), 1)]),
						_: 1
					}, 8, ["variant", "disabled"]),
					!m.value && C.value.status === "committed" ? (p(), I(J(Y), {
						key: 0,
						variant: "error",
						disabled: j.value,
						onClick: Le
					}, {
						default: P(() => [k(n(J(f)("rechnungswerk", "Stornieren")), 1)]),
						_: 1
					}, 8, ["disabled"])) : T("", !0),
					m.value ? (p(), K(G, { key: 1 }, [
						Ue.value ? (p(), I(J(Y), {
							key: 0,
							disabled: j.value,
							onClick: Ke
						}, {
							icon: P(() => [q(vu, { size: 20 })]),
							default: P(() => [k(" " + n(J(f)("rechnungswerk", "Annehmen")), 1)]),
							_: 1
						}, 8, ["disabled"])) : T("", !0),
						Ue.value ? (p(), I(J(Y), {
							key: 1,
							disabled: j.value,
							onClick: qe
						}, {
							icon: P(() => [q(Tu, { size: 20 })]),
							default: P(() => [k(" " + n(J(f)("rechnungswerk", "Ablehnen")), 1)]),
							_: 1
						}, 8, ["disabled"])) : T("", !0),
						Ve.value ? (p(), I(J(Y), {
							key: 2,
							disabled: j.value,
							onClick: ze
						}, {
							icon: P(() => [q(zu, { size: 20 })]),
							default: P(() => [k(" " + n(J(f)("rechnungswerk", "Revidieren")), 1)]),
							_: 1
						}, 8, ["disabled"])) : T("", !0),
						He.value ? (p(), I(J(Y), {
							key: 3,
							variant: "primary",
							disabled: j.value,
							onClick: Re
						}, {
							icon: P(() => [q(Mu, { size: 20 })]),
							default: P(() => [k(" " + n(J(f)("rechnungswerk", "In Rechnung übernehmen")), 1)]),
							_: 1
						}, 8, ["disabled"])) : T("", !0)
					], 64)) : T("", !0)
				], 64)) : T("", !0) : (p(), K(G, { key: 0 }, [
					q(J(Y), {
						disabled: j.value,
						onClick: t[27] ||= (e) => Me()
					}, {
						default: P(() => [k(n(J(f)("rechnungswerk", "Speichern")), 1)]),
						_: 1
					}, 8, ["disabled"]),
					q(J(Y), {
						disabled: j.value,
						onClick: Ne
					}, {
						icon: P(() => [q(du, { size: 20 })]),
						default: P(() => [k(" " + n(J(f)("rechnungswerk", "Vorschau")), 1)]),
						_: 1
					}, 8, ["disabled"]),
					q(J(Y), {
						variant: "primary",
						disabled: j.value,
						onClick: Fe
					}, {
						icon: P(() => [q(wo, { size: 20 })]),
						default: P(() => [k(" " + n(J(f)("rechnungswerk", "Festschreiben")), 1)]),
						_: 1
					}, 8, ["disabled"]),
					C.value ? (p(), I(J(Y), {
						key: 0,
						variant: "error",
						disabled: j.value,
						onClick: Ie
					}, {
						default: P(() => [k(n(J(f)("rechnungswerk", "Löschen")), 1)]),
						_: 1
					}, 8, ["disabled"])) : T("", !0)
				], 64))]),
				q(Jd, {
					open: L.value === "finalize",
					name: m.value ? J(f)("rechnungswerk", "Angebot festschreiben") : J(f)("rechnungswerk", "Rechnung festschreiben"),
					message: ye.value,
					confirmLabel: J(f)("rechnungswerk", "Festschreiben"),
					onClose: t[29] ||= (e) => L.value = null,
					onConfirm: Ge
				}, null, 8, [
					"open",
					"name",
					"message",
					"confirmLabel"
				]),
				q(Jd, {
					open: L.value === "delete",
					name: m.value ? J(f)("rechnungswerk", "Angebot löschen") : J(f)("rechnungswerk", "Entwurf löschen"),
					message: m.value ? J(f)("rechnungswerk", "Diesen Angebots-Entwurf wirklich löschen?") : J(f)("rechnungswerk", "Diesen Entwurf wirklich löschen?"),
					confirmLabel: J(f)("rechnungswerk", "Löschen"),
					destructive: "",
					onClose: t[30] ||= (e) => L.value = null,
					onConfirm: Xe
				}, null, 8, [
					"open",
					"name",
					"message",
					"confirmLabel"
				]),
				q(Jd, {
					open: L.value === "cancel",
					name: J(f)("rechnungswerk", "Rechnung stornieren"),
					message: J(f)("rechnungswerk", "Es wird ein Stornobeleg erstellt und diese Rechnung als storniert markiert. Fortfahren?"),
					confirmLabel: J(f)("rechnungswerk", "Stornorechnung erstellen"),
					destructive: "",
					onClose: t[31] ||= (e) => L.value = null,
					onConfirm: Qe
				}, null, 8, [
					"open",
					"name",
					"message",
					"confirmLabel"
				]),
				q(Jd, {
					open: L.value === "convert",
					name: J(f)("rechnungswerk", "In Rechnung übernehmen"),
					message: J(f)("rechnungswerk", "Aus diesem Angebot wird ein neuer Rechnungs-Entwurf mit denselben Positionen erstellt. Das Angebot wird als „übernommen“ markiert. Fortfahren?"),
					confirmLabel: J(f)("rechnungswerk", "Rechnung erstellen"),
					onClose: t[32] ||= (e) => L.value = null,
					onConfirm: X
				}, null, 8, [
					"open",
					"name",
					"message",
					"confirmLabel"
				]),
				q(Jd, {
					open: L.value === "revise",
					name: J(f)("rechnungswerk", "Angebot revidieren"),
					message: J(f)("rechnungswerk", "Es wird eine überarbeitbare Kopie als neue Angebots-Revision erstellt. Beim Festschreiben erhält sie eine Revisionsnummer (z. B. AN-…-1) und dieses Angebot wird als „revidiert“ markiert. Fortfahren?"),
					confirmLabel: J(f)("rechnungswerk", "Revision erstellen"),
					onClose: t[33] ||= (e) => L.value = null,
					onConfirm: Je
				}, null, 8, [
					"open",
					"name",
					"message",
					"confirmLabel"
				]),
				q(nf, {
					open: F.value,
					invoice: C.value,
					defaultBody: be.value,
					saving: N.value,
					kind: m.value ? "quote" : "invoice",
					onClose: t[34] ||= (e) => F.value = !1,
					onSend: Ye
				}, null, 8, [
					"open",
					"invoice",
					"defaultBody",
					"saving",
					"kind"
				]),
				q(J(ot), {
					open: ie.value,
					name: J(f)("rechnungswerk", "Vorschau (Entwurf)"),
					size: "large",
					"onUpdate:open": Pe
				}, {
					default: P(() => [ae.value ? (p(), K("iframe", {
						key: 0,
						src: ae.value,
						class: "preview-frame",
						title: J(f)("rechnungswerk", "Vorschau (Entwurf)")
					}, null, 8, Om)) : T("", !0)]),
					_: 1
				}, 8, ["open", "name"])
			]);
		};
	}
}), [["__scopeId", "data-v-7576b8a3"]]), Am = {
	name: "AlertCircleOutlineIcon",
	emits: ["click"],
	props: {
		title: { type: String },
		fillColor: {
			type: String,
			default: "currentColor"
		},
		size: {
			type: Number,
			default: 24
		}
	}
}, jm = ["aria-hidden", "aria-label"], Mm = [
	"fill",
	"width",
	"height"
], Nm = { d: "M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z" }, Pm = { key: 0 };
function Fm(e, r, i, a, o, s) {
	return p(), K("span", t(e.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon alert-circle-outline-icon",
		role: "img",
		onClick: r[0] ||= (t) => e.$emit("click", t)
	}), [(p(), K("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [R("path", Nm, [i.title ? (p(), K("title", Pm, n(i.title), 1)) : T("", !0)])], 8, Mm))], 16, jm);
}
var Im = /*#__PURE__*/ Z(Am, [["render", Fm]]), Lm = { class: "rw-view" }, Rm = { class: "rw-view__head" }, zm = { key: 2 }, Bm = { class: "rw-filterbar" }, Vm = ["onClick"], Hm = { class: "rw-chip__n" }, Um = { class: "rw-table-wrap" }, Wm = { class: "rw-table" }, Gm = { class: "num" }, Km = ["onClick"], qm = { class: "rw-status-cell" }, Jm = { class: "rw-qstatus-text" }, Ym = { class: "num" }, Xm = { class: "rw-col-actions" }, Zm = { class: "rw-actions" }, Qm = /*#__PURE__*/ Z(/* @__PURE__ */ r({
	__name: "QuotesView",
	setup(e) {
		let t = Ze(), r = vf(), i = M(""), a = [
			{
				key: "all",
				label: "Alle"
			},
			{
				key: "open",
				label: "Offen"
			},
			{
				key: "accepted",
				label: "Angenommen"
			},
			{
				key: "rejected",
				label: "Abgelehnt"
			},
			{
				key: "converted",
				label: "Übernommen"
			}
		], o = M("all"), l = (e) => e.quoteStatus === "open" || e.quoteStatus === "expired", u = H(() => {
			let e = {
				all: r.quotes.length,
				open: 0,
				accepted: 0,
				rejected: 0,
				converted: 0
			};
			for (let t of r.quotes) l(t) && e.open++, t.quoteStatus === "accepted" && e.accepted++, t.quoteStatus === "rejected" && e.rejected++, t.quoteStatus === "converted" && e.converted++;
			return e;
		}), d = H(() => {
			switch (o.value) {
				case "open": return r.quotes.filter(l);
				case "accepted": return r.quotes.filter((e) => e.quoteStatus === "accepted");
				case "rejected": return r.quotes.filter((e) => e.quoteStatus === "rejected");
				case "converted": return r.quotes.filter((e) => e.quoteStatus === "converted");
				default: return r.quotes;
			}
		}), m = (e) => e.status === "committed" && (e.quoteStatus === "open" || e.quoteStatus === "expired" || e.quoteStatus === "accepted"), h = {
			draft: xs,
			open: Hs,
			expired: Im,
			accepted: Fs,
			rejected: Os,
			converted: Mu,
			superseded: zu
		}, g = (e) => e ? h[e] ?? xs : xs, _ = (e) => e ? f("rechnungswerk", Gc[e] ?? e) : "";
		function v(e) {
			return e ? (e.length === 10 ? /* @__PURE__ */ new Date(`${e}T12:00:00`) : new Date(e)).toLocaleDateString() : "—";
		}
		s(() => {
			r.fetchAll().catch((e) => {
				i.value = e.message ?? f("rechnungswerk", "Laden fehlgeschlagen");
			});
		});
		function y() {
			t.push({ name: "quote-new" });
		}
		function b(e) {
			t.push({
				name: "quote-detail",
				params: { id: String(e) }
			});
		}
		function ee(e) {
			gf(e);
		}
		async function x(e) {
			i.value = "";
			try {
				let n = await r.convert(e);
				t.push({
					name: "invoice-detail",
					params: { id: String(n.id) }
				});
			} catch (e) {
				i.value = e.message ?? f("rechnungswerk", "Übernahme fehlgeschlagen");
			}
		}
		return (e, t) => (p(), K("div", Lm, [
			R("div", Rm, [R("h2", null, n(J(f)("rechnungswerk", "Angebote")), 1), q(J(Y), {
				variant: "primary",
				onClick: y
			}, {
				icon: P(() => [q(es, { size: 20 })]),
				default: P(() => [k(" " + n(J(f)("rechnungswerk", "Neues Angebot")), 1)]),
				_: 1
			})]),
			i.value ? (p(), I(J(st), {
				key: 0,
				type: "error",
				text: i.value
			}, null, 8, ["text"])) : T("", !0),
			!J(r).loading && J(r).quotes.length === 0 ? (p(), I(J(_t), {
				key: 1,
				name: J(f)("rechnungswerk", "Noch keine Angebote"),
				description: J(f)("rechnungswerk", "Lege dein erstes Angebot an.")
			}, {
				icon: P(() => [q(Oa, { size: 20 })]),
				_: 1
			}, 8, ["name", "description"])) : J(r).quotes.length > 0 ? (p(), K("div", zm, [R("div", Bm, [(p(), K(G, null, S(a, (e) => R("button", {
				key: e.key,
				class: O(["rw-chip", { "rw-chip--active": o.value === e.key }]),
				onClick: (t) => o.value = e.key
			}, [k(n(J(f)("rechnungswerk", e.label)) + " ", 1), R("span", Hm, n(u.value[e.key]), 1)], 10, Vm)), 64))]), R("div", Um, [R("table", Wm, [R("thead", null, [R("tr", null, [
				R("th", null, n(J(f)("rechnungswerk", "Status")), 1),
				R("th", null, n(J(f)("rechnungswerk", "Nummer")), 1),
				R("th", null, n(J(f)("rechnungswerk", "Empfänger")), 1),
				R("th", null, n(J(f)("rechnungswerk", "Datum")), 1),
				R("th", null, n(J(f)("rechnungswerk", "Gültig bis")), 1),
				R("th", Gm, n(J(f)("rechnungswerk", "Brutto")), 1),
				t[0] ||= R("th", { class: "rw-col-actions" }, null, -1)
			])]), R("tbody", null, [(p(!0), K(G, null, S(d.value, (e) => (p(), K("tr", {
				key: e.id,
				class: O(["rw-row-clickable", { "rw-row--overdue": e.quoteStatus === "expired" }]),
				onClick: (t) => b(e.id)
			}, [
				R("td", null, [R("span", qm, [(p(), I(c(g(e.quoteStatus)), {
					size: 20,
					class: O(["rw-sicon", `rw-qsicon--${e.quoteStatus}`]),
					title: _(e.quoteStatus)
				}, null, 8, ["class", "title"])), R("span", Jm, n(_(e.quoteStatus)), 1)])]),
				R("td", null, n(e.number ?? J(f)("rechnungswerk", "(Entwurf)")), 1),
				R("td", null, n(e.recipientName ?? "—"), 1),
				R("td", null, n(v(e.issueDate ?? e.createdAt)), 1),
				R("td", null, [R("span", { class: O({ "rw-amt-overdue": e.quoteStatus === "expired" }) }, n(v(e.validUntil)), 3)]),
				R("td", Ym, n(J(tl)(e.totalCents)), 1),
				R("td", Xm, [R("div", Zm, [m(e) ? (p(), I(J(Y), {
					key: 0,
					variant: "tertiary",
					"aria-label": J(f)("rechnungswerk", "In Rechnung übernehmen"),
					title: J(f)("rechnungswerk", "In Rechnung übernehmen"),
					onClick: j((t) => x(e.id), ["stop"])
				}, {
					icon: P(() => [q(Mu, { size: 20 })]),
					_: 1
				}, 8, [
					"aria-label",
					"title",
					"onClick"
				])) : T("", !0), e.status === "draft" ? T("", !0) : (p(), I(J(Y), {
					key: 1,
					variant: "tertiary",
					"aria-label": J(f)("rechnungswerk", "PDF herunterladen"),
					title: J(f)("rechnungswerk", "PDF herunterladen"),
					onClick: j((t) => ee(e.id), ["stop"])
				}, {
					icon: P(() => [q(ss, { size: 20 })]),
					_: 1
				}, 8, [
					"aria-label",
					"title",
					"onClick"
				]))])])
			], 10, Km))), 128))])])])])) : T("", !0)
		]));
	}
}), [["__scopeId", "data-v-62bdd46f"]]), $m = {
	name: "CheckCircleOutlineIcon",
	emits: ["click"],
	props: {
		title: { type: String },
		fillColor: {
			type: String,
			default: "currentColor"
		},
		size: {
			type: Number,
			default: 24
		}
	}
}, eh = ["aria-hidden", "aria-label"], th = [
	"fill",
	"width",
	"height"
], nh = { d: "M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z" }, rh = { key: 0 };
function ih(e, r, i, a, o, s) {
	return p(), K("span", t(e.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon check-circle-outline-icon",
		role: "img",
		onClick: r[0] ||= (t) => e.$emit("click", t)
	}), [(p(), K("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [R("path", nh, [i.title ? (p(), K("title", rh, n(i.title), 1)) : T("", !0)])], 8, th))], 16, eh);
}
var ah = /*#__PURE__*/ Z($m, [["render", ih]]), oh = { class: "rw-view" }, sh = { class: "rw-view__head" }, ch = { key: 2 }, lh = { class: "rw-filterbar" }, uh = ["onClick"], dh = { class: "rw-chip__n" }, fh = {
	key: 0,
	class: "rw-chip rw-chip--sum"
}, ph = { class: "rw-table-wrap" }, mh = { class: "rw-table" }, hh = { class: "num" }, gh = { class: "num" }, _h = { class: "rw-col-dunning" }, vh = ["onClick"], yh = { class: "num" }, bh = { class: "num" }, xh = { class: "rw-col-dunning" }, Sh = [
	"value",
	"title",
	"onChange"
], Ch = { value: 1 }, wh = { value: 2 }, Th = { value: 3 }, Eh = {
	key: 0,
	class: "rw-subline rw-subline--overdue"
}, Dh = { class: "rw-col-actions" }, Oh = { class: "rw-actions" }, kh = /* @__PURE__ */ r({
	__name: "DunningView",
	setup(e) {
		let t = Ze(), r = Io(), i = Dc(), a = M(""), o = [
			{
				key: "all",
				label: "Alle offenen"
			},
			{
				key: "due",
				label: "Mahnung fällig"
			},
			{
				key: "overdue",
				label: "Überfällig"
			}
		], c = M("all"), l = (e) => e.scheduledLevel > e.dunningLevel, u = H(() => ({
			all: r.entries.length,
			due: r.entries.filter(l).length,
			overdue: r.entries.filter((e) => e.daysOverdue > 0).length
		})), d = H(() => {
			switch (c.value) {
				case "due": return r.entries.filter(l);
				case "overdue": return r.entries.filter((e) => e.daysOverdue > 0);
				default: return r.entries;
			}
		}), m = H(() => d.value.reduce((e, t) => e + t.totalCents, 0));
		function h(e) {
			return e ? (/* @__PURE__ */ new Date(`${e}T12:00:00`)).toLocaleDateString() : "—";
		}
		function g(e) {
			return e.daysOverdue <= 0 ? f("rechnungswerk", "nicht fällig") : e.daysOverdue === 1 ? f("rechnungswerk", "1 Tag") : f("rechnungswerk", "{days} Tage", { days: String(e.daysOverdue) });
		}
		function _(e) {
			return e.dunningLevel === 0 || !e.lastDunningAt ? f("rechnungswerk", "Noch keine Mahnstufe gesetzt") : f("rechnungswerk", "Mahnstufe {level} seit {date}", {
				level: String(e.dunningLevel),
				date: (/* @__PURE__ */ new Date(`${e.lastDunningAt}T12:00:00`)).toLocaleDateString()
			});
		}
		async function v(e, t) {
			a.value = "";
			try {
				await i.setDunningLevel(e.id, t), await r.fetchAll();
			} catch (e) {
				a.value = e.message ?? f("rechnungswerk", "Mahnstufe konnte nicht gesetzt werden");
			}
		}
		let y = (e, t) => v(e, Number(t.target.value)), b = (e) => v(e, e.scheduledLevel);
		function ee(e) {
			Tc(e);
		}
		async function x(e) {
			a.value = "";
			try {
				await i.markPaid(e.id), await r.fetchAll();
			} catch (e) {
				a.value = e.message ?? f("rechnungswerk", "Zahlungsstatus konnte nicht geändert werden");
			}
		}
		function te(e) {
			t.push({
				name: "invoice-detail",
				params: { id: String(e) }
			});
		}
		return s(() => {
			r.fetchAll().catch((e) => {
				a.value = e.message ?? f("rechnungswerk", "Laden fehlgeschlagen");
			});
		}), (e, t) => (p(), K("div", oh, [
			R("div", sh, [R("h2", null, n(J(f)("rechnungswerk", "Mahnungen")), 1)]),
			a.value ? (p(), I(J(st), {
				key: 0,
				type: "error",
				text: a.value
			}, null, 8, ["text"])) : T("", !0),
			!J(r).loading && J(r).entries.length === 0 ? (p(), I(J(_t), {
				key: 1,
				name: J(f)("rechnungswerk", "Keine offenen Posten"),
				description: J(f)("rechnungswerk", "Alle festgeschriebenen Rechnungen sind bezahlt.")
			}, {
				icon: P(() => [q(ah, { size: 20 })]),
				_: 1
			}, 8, ["name", "description"])) : J(r).entries.length > 0 ? (p(), K("div", ch, [R("div", lh, [(p(), K(G, null, S(o, (e) => R("button", {
				key: e.key,
				class: O(["rw-chip", {
					"rw-chip--active": c.value === e.key,
					"rw-chip--overdue": e.key === "due"
				}]),
				onClick: (t) => c.value = e.key
			}, [k(n(J(f)("rechnungswerk", e.label)) + " ", 1), R("span", dh, n(u.value[e.key]), 1)], 10, uh)), 64)), m.value > 0 ? (p(), K("span", fh, [k(n(J(f)("rechnungswerk", "Offen gesamt:")) + " ", 1), R("strong", null, n(J(tl)(m.value)), 1)])) : T("", !0)]), R("div", ph, [R("table", mh, [R("thead", null, [R("tr", null, [
				R("th", null, n(J(f)("rechnungswerk", "Nummer")), 1),
				R("th", null, n(J(f)("rechnungswerk", "Empfänger")), 1),
				R("th", null, n(J(f)("rechnungswerk", "Fällig am")), 1),
				R("th", hh, n(J(f)("rechnungswerk", "Verzug")), 1),
				R("th", gh, n(J(f)("rechnungswerk", "Brutto")), 1),
				R("th", _h, n(J(f)("rechnungswerk", "Mahnstufe")), 1),
				t[1] ||= R("th", { class: "rw-col-actions" }, null, -1)
			])]), R("tbody", null, [(p(!0), K(G, null, S(d.value, (e) => (p(), K("tr", {
				key: e.id,
				class: O(["rw-row-clickable", { "rw-row--overdue": e.daysOverdue > 0 }]),
				onClick: (t) => te(e.id)
			}, [
				R("td", null, n(e.number ?? "—"), 1),
				R("td", null, n(e.recipientName ?? "—"), 1),
				R("td", null, n(h(e.dueDate)), 1),
				R("td", yh, [R("span", { class: O({ "rw-amt-overdue": e.daysOverdue > 0 }) }, n(g(e)), 3)]),
				R("td", bh, [R("span", { class: O({ "rw-amt-overdue": e.daysOverdue > 0 }) }, n(J(tl)(e.totalCents)), 3)]),
				R("td", xh, [R("select", {
					class: O(["rw-dunning-select", { "rw-dunning-select--active": e.dunningLevel > 0 }]),
					value: e.dunningLevel,
					title: _(e),
					onClick: t[0] ||= j(() => {}, ["stop"]),
					onChange: (t) => y(e, t)
				}, [
					t[2] ||= R("option", { value: 0 }, "–", -1),
					R("option", Ch, n(J(f)("rechnungswerk", "Stufe 1")), 1),
					R("option", wh, n(J(f)("rechnungswerk", "Stufe 2")), 1),
					R("option", Th, n(J(f)("rechnungswerk", "Stufe 3")), 1)
				], 42, Sh), e.scheduledLevel > e.dunningLevel ? (p(), K("div", Eh, n(J(f)("rechnungswerk", "Stufe {level} fällig", { level: String(e.scheduledLevel) })), 1)) : T("", !0)]),
				R("td", Dh, [R("div", Oh, [
					e.scheduledLevel > e.dunningLevel ? (p(), I(J(Y), {
						key: 0,
						variant: "secondary",
						"aria-label": J(f)("rechnungswerk", "Vorgeschlagene Mahnstufe übernehmen"),
						title: J(f)("rechnungswerk", "Vorgeschlagene Mahnstufe übernehmen"),
						onClick: j((t) => b(e), ["stop"])
					}, {
						default: P(() => [k(n(J(f)("rechnungswerk", "Übernehmen")), 1)]),
						_: 1
					}, 8, [
						"aria-label",
						"title",
						"onClick"
					])) : T("", !0),
					e.dunningLevel > 0 ? (p(), I(J(Y), {
						key: 1,
						variant: "tertiary",
						"aria-label": J(f)("rechnungswerk", "Mahnschreiben herunterladen"),
						title: J(f)("rechnungswerk", "Mahnschreiben herunterladen"),
						onClick: j((t) => ee(e.id), ["stop"])
					}, {
						icon: P(() => [q(_o, { size: 20 })]),
						_: 1
					}, 8, [
						"aria-label",
						"title",
						"onClick"
					])) : T("", !0),
					q(J(Y), {
						variant: "tertiary",
						"aria-label": J(f)("rechnungswerk", "Als bezahlt markieren"),
						title: J(f)("rechnungswerk", "Als bezahlt markieren"),
						onClick: j((t) => x(e), ["stop"])
					}, {
						icon: P(() => [q(nc, { size: 20 })]),
						_: 1
					}, 8, [
						"aria-label",
						"title",
						"onClick"
					])
				])])
			], 10, vh))), 128))])])])])) : T("", !0)
		]));
	}
}), Ah = { class: "product-modal" }, jh = { class: "field" }, Mh = { class: "field" }, Nh = { class: "field-row" }, Ph = { class: "field" }, Fh = ["value"], Ih = { class: "field" }, Lh = { class: "field" }, Rh = ["value"], zh = { class: "field" }, Bh = ["placeholder"], Vh = { class: "hint" }, Hh = { class: "actions" }, Uh = /*#__PURE__*/ Z(/* @__PURE__ */ r({
	__name: "ProductEditModal",
	props: {
		open: { type: Boolean },
		product: {},
		saving: { type: Boolean }
	},
	emits: ["close", "save"],
	setup(e, { emit: t }) {
		let r = e, i = t, a = M(null), o = ue({
			name: "",
			description: "",
			defaultUnitCode: "C62",
			defaultUnitLabel: "",
			defaultTaxRateBp: 1900
		}), s = M("0,00");
		function c() {
			Yc(s.value) !== null && (s.value = Qc($c(s.value)));
		}
		let l = H(() => r.product ? f("rechnungswerk", "Produkt bearbeiten") : f("rechnungswerk", "Produkt anlegen")), u = H(() => o.name.trim() !== "");
		v(() => r.open, (e) => {
			if (!e) return;
			let t = r.product;
			o.name = t?.name ?? "", o.description = t?.description ?? "", o.defaultUnitCode = t?.defaultUnitCode ?? "C62", o.defaultUnitLabel = t?.defaultUnitLabel ?? "", o.defaultTaxRateBp = t?.defaultTaxRateBp ?? 1900, s.value = Qc(t?.defaultPriceE4 ?? 0), B(() => a.value?.focus());
		}, { immediate: !0 });
		function d() {
			u.value && i("save", {
				name: o.name.trim(),
				description: o.description.trim() === "" ? null : o.description.trim(),
				defaultUnitCode: o.defaultUnitCode,
				defaultUnitLabel: o.defaultUnitLabel.trim() === "" ? null : o.defaultUnitLabel.trim(),
				defaultPriceInput: s.value,
				defaultTaxRateBp: o.defaultTaxRateBp
			});
		}
		return (t, r) => e.open ? (p(), I(J(lt), {
			key: 0,
			name: l.value,
			onKeydown: r[7] ||= xe((e) => J(Yd)(e, () => t.$emit("close")), ["esc"]),
			onClose: r[8] ||= (e) => t.$emit("close")
		}, {
			default: P(() => [R("div", Ah, [
				R("h2", null, n(l.value), 1),
				R("label", jh, [R("span", null, n(J(f)("rechnungswerk", "Name")) + " *", 1), W(R("input", {
					ref_key: "nameInput",
					ref: a,
					"onUpdate:modelValue": r[0] ||= (e) => o.name = e,
					class: "input",
					type: "text"
				}, null, 512), [[D, o.name]])]),
				R("label", Mh, [R("span", null, n(J(f)("rechnungswerk", "Beschreibung")), 1), W(R("textarea", {
					"onUpdate:modelValue": r[1] ||= (e) => o.description = e,
					class: "input",
					rows: "2"
				}, null, 512), [[D, o.description]])]),
				R("div", Nh, [
					R("label", Ph, [R("span", null, n(J(f)("rechnungswerk", "Einheit")), 1), W(R("select", {
						"onUpdate:modelValue": r[2] ||= (e) => o.defaultUnitCode = e,
						class: "input"
					}, [(p(!0), K(G, null, S(J(Lc), (e) => (p(), K("option", {
						key: e,
						value: e
					}, n(J(f)("rechnungswerk", J(Rc)[e])), 9, Fh))), 128))], 512), [[ce, o.defaultUnitCode]])]),
					R("label", Ih, [R("span", null, n(J(f)("rechnungswerk", "Standard-Preis (€)")), 1), W(R("input", {
						"onUpdate:modelValue": r[3] ||= (e) => s.value = e,
						class: "input",
						type: "text",
						inputmode: "decimal",
						onBlur: c
					}, null, 544), [[D, s.value]])]),
					R("label", Lh, [R("span", null, n(J(f)("rechnungswerk", "USt-Satz")), 1), W(R("select", {
						"onUpdate:modelValue": r[4] ||= (e) => o.defaultTaxRateBp = e,
						class: "input"
					}, [(p(!0), K(G, null, S(J(zc), (e) => (p(), K("option", {
						key: e,
						value: e
					}, n(J(nl)(e)), 9, Rh))), 128))], 512), [[
						ce,
						o.defaultTaxRateBp,
						void 0,
						{ number: !0 }
					]])])
				]),
				R("label", zh, [
					R("span", null, n(J(f)("rechnungswerk", "Eigene Einheit (optional)")), 1),
					W(R("input", {
						"onUpdate:modelValue": r[5] ||= (e) => o.defaultUnitLabel = e,
						class: "input",
						type: "text",
						maxlength: "64",
						placeholder: J(f)("rechnungswerk", "z. B. Personen, Sitzung")
					}, null, 8, Bh), [[D, o.defaultUnitLabel]]),
					R("span", Vh, n(J(f)("rechnungswerk", "Freie Bezeichnung – erscheint auf dem PDF. In der E-Rechnung wird die Einheit generisch (Stück) abgebildet, damit sie gültig bleibt.")), 1)
				]),
				R("div", Hh, [q(J(Y), { onClick: r[6] ||= (e) => t.$emit("close") }, {
					default: P(() => [k(n(J(f)("rechnungswerk", "Abbrechen")), 1)]),
					_: 1
				}), q(J(Y), {
					variant: "primary",
					disabled: e.saving || !u.value,
					onClick: d
				}, {
					default: P(() => [k(n(J(f)("rechnungswerk", "Speichern")), 1)]),
					_: 1
				}, 8, ["disabled"])])
			])]),
			_: 1
		}, 8, ["name"])) : T("", !0);
	}
}), [["__scopeId", "data-v-e77e93c0"]]), Wh = { class: "rw-view" }, Gh = { class: "rw-view__head" }, Kh = {
	key: 2,
	class: "rw-table-wrap"
}, qh = { class: "rw-table" }, Jh = { class: "num" }, Yh = { class: "num" }, Xh = ["onClick"], Zh = {
	key: 0,
	class: "rw-muted"
}, Qh = { class: "num" }, $h = { class: "num" }, eg = { class: "rw-col-actions" }, tg = { class: "rw-actions" }, ng = /* @__PURE__ */ r({
	__name: "ProductsView",
	setup(e) {
		let t = Cf(), r = M(!1), i = M(null), a = M(null), o = M(""), c = (e) => Rc[e] ?? e;
		function l(e, t) {
			let n = e.message ?? t;
			o.value = n, console.error("[rechnungswerk] products:", e);
		}
		s(() => {
			t.fetchAll().catch((e) => l(e, f("rechnungswerk", "Laden fehlgeschlagen")));
		});
		function u() {
			i.value = null, r.value = !0;
		}
		function d(e) {
			i.value = e, r.value = !0;
		}
		async function m(e) {
			o.value = "";
			try {
				i.value ? await t.update(i.value.id, e) : await t.create(e), r.value = !1;
			} catch (e) {
				l(e, f("rechnungswerk", "Speichern fehlgeschlagen"));
			}
		}
		function h(e) {
			a.value = e;
		}
		async function g() {
			let e = a.value;
			if (a.value = null, e) {
				o.value = "";
				try {
					await t.remove(e.id);
				} catch (e) {
					l(e, f("rechnungswerk", "Löschen fehlgeschlagen"));
				}
			}
		}
		return (e, s) => (p(), K("div", Wh, [
			R("div", Gh, [R("h2", null, n(J(f)("rechnungswerk", "Produkte")), 1), q(J(Y), {
				variant: "primary",
				onClick: u
			}, {
				icon: P(() => [q(es, { size: 20 })]),
				default: P(() => [k(" " + n(J(f)("rechnungswerk", "Produkt anlegen")), 1)]),
				_: 1
			})]),
			o.value ? (p(), I(J(st), {
				key: 0,
				type: "error",
				text: o.value
			}, null, 8, ["text"])) : T("", !0),
			!J(t).loading && J(t).products.length === 0 ? (p(), I(J(_t), {
				key: 1,
				name: J(f)("rechnungswerk", "Noch keine Produkte"),
				description: J(f)("rechnungswerk", "Pflege wiederkehrende Leistungen, um sie schnell in Rechnungen zu übernehmen.")
			}, {
				icon: P(() => [q(Ya, { size: 20 })]),
				_: 1
			}, 8, ["name", "description"])) : J(t).products.length > 0 ? (p(), K("div", Kh, [R("table", qh, [R("thead", null, [R("tr", null, [
				R("th", null, n(J(f)("rechnungswerk", "Name")), 1),
				R("th", null, n(J(f)("rechnungswerk", "Einheit")), 1),
				R("th", Jh, n(J(f)("rechnungswerk", "Preis")), 1),
				R("th", Yh, n(J(f)("rechnungswerk", "USt")), 1),
				s[2] ||= R("th", { class: "num" }, null, -1)
			])]), R("tbody", null, [(p(!0), K(G, null, S(J(t).products, (e) => (p(), K("tr", {
				key: e.id,
				class: "rw-row-clickable",
				onClick: (t) => d(e)
			}, [
				R("td", null, [k(n(e.name) + " ", 1), e.description ? (p(), K("div", Zh, n(e.description), 1)) : T("", !0)]),
				R("td", null, n(e.defaultUnitLabel || J(f)("rechnungswerk", c(e.defaultUnitCode))), 1),
				R("td", Qh, n(J(el)(e.defaultPriceE4)), 1),
				R("td", $h, n(J(nl)(e.defaultTaxRateBp)), 1),
				R("td", eg, [R("div", tg, [q(J(Y), {
					variant: "tertiary",
					"aria-label": J(f)("rechnungswerk", "Löschen"),
					title: J(f)("rechnungswerk", "Löschen"),
					onClick: j((t) => h(e), ["stop"])
				}, {
					icon: P(() => [q(Zl, { size: 20 })]),
					_: 1
				}, 8, [
					"aria-label",
					"title",
					"onClick"
				])])])
			], 8, Xh))), 128))])])])) : T("", !0),
			q(Uh, {
				open: r.value,
				product: i.value,
				saving: J(t).loading,
				onClose: s[0] ||= (e) => r.value = !1,
				onSave: m
			}, null, 8, [
				"open",
				"product",
				"saving"
			]),
			q(Jd, {
				open: a.value !== null,
				name: J(f)("rechnungswerk", "Produkt löschen"),
				message: a.value ? J(f)("rechnungswerk", "„{name}“ wirklich löschen?", { name: a.value.name }) : "",
				confirmLabel: J(f)("rechnungswerk", "Löschen"),
				destructive: "",
				onClose: s[1] ||= (e) => a.value = null,
				onConfirm: g
			}, null, 8, [
				"open",
				"name",
				"message",
				"confirmLabel"
			])
		]));
	}
}), rg = {
	name: "StarIcon",
	emits: ["click"],
	props: {
		title: { type: String },
		fillColor: {
			type: String,
			default: "currentColor"
		},
		size: {
			type: Number,
			default: 24
		}
	}
}, ig = ["aria-hidden", "aria-label"], ag = [
	"fill",
	"width",
	"height"
], og = { d: "M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" }, sg = { key: 0 };
function cg(e, r, i, a, o, s) {
	return p(), K("span", t(e.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon star-icon",
		role: "img",
		onClick: r[0] ||= (t) => e.$emit("click", t)
	}), [(p(), K("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [R("path", og, [i.title ? (p(), K("title", sg, n(i.title), 1)) : T("", !0)])], 8, ag))], 16, ig);
}
var lg = /*#__PURE__*/ Z(rg, [["render", cg]]), ug = {
	name: "StarOutlineIcon",
	emits: ["click"],
	props: {
		title: { type: String },
		fillColor: {
			type: String,
			default: "currentColor"
		},
		size: {
			type: Number,
			default: 24
		}
	}
}, dg = ["aria-hidden", "aria-label"], fg = [
	"fill",
	"width",
	"height"
], pg = { d: "M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z" }, mg = { key: 0 };
function hg(e, r, i, a, o, s) {
	return p(), K("span", t(e.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon star-outline-icon",
		role: "img",
		onClick: r[0] ||= (t) => e.$emit("click", t)
	}), [(p(), K("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [R("path", pg, [i.title ? (p(), K("title", mg, n(i.title), 1)) : T("", !0)])], 8, fg))], 16, dg);
}
var gg = /*#__PURE__*/ Z(ug, [["render", hg]]), _g = { class: "snippet-modal" }, vg = { class: "field" }, yg = ["placeholder"], bg = { class: "field-row" }, xg = { class: "field" }, Sg = ["value"], Cg = { class: "field" }, wg = ["value"], Tg = { class: "field" }, Eg = { class: "hint" }, Dg = { class: "actions" }, Og = /*#__PURE__*/ Z(/* @__PURE__ */ r({
	__name: "TextSnippetEditModal",
	props: {
		open: { type: Boolean },
		snippet: {},
		saving: { type: Boolean }
	},
	emits: ["close", "save"],
	setup(e, { emit: t }) {
		let r = ["invoice", "quote"], i = ["opening", "closing"], a = e, o = t, s = M(null), c = ue({
			label: "",
			docType: "invoice",
			slot: "opening",
			content: "",
			isDefault: !1
		}), l = H(() => a.snippet ? f("rechnungswerk", "Textbaustein bearbeiten") : f("rechnungswerk", "Textbaustein anlegen")), u = H(() => c.label.trim() !== "");
		v(() => a.open, (e) => {
			if (!e) return;
			let t = a.snippet;
			c.label = t?.label ?? "", c.docType = t?.docType ?? "invoice", c.slot = t?.slot ?? "opening", c.content = t?.content ?? "", c.isDefault = t?.isDefault ?? !1, B(() => s.value?.focus());
		}, { immediate: !0 });
		function d() {
			u.value && o("save", {
				label: c.label.trim(),
				docType: c.docType,
				slot: c.slot,
				content: c.content.trim() === "" ? null : c.content,
				isDefault: c.isDefault
			});
		}
		return (t, a) => e.open ? (p(), I(J(lt), {
			key: 0,
			name: l.value,
			onKeydown: a[6] ||= xe((e) => J(Yd)(e, () => t.$emit("close")), ["esc"]),
			onClose: a[7] ||= (e) => t.$emit("close")
		}, {
			default: P(() => [R("div", _g, [
				R("h2", null, n(l.value), 1),
				R("label", vg, [R("span", null, n(J(f)("rechnungswerk", "Name")) + " *", 1), W(R("input", {
					ref_key: "nameInput",
					ref: s,
					"onUpdate:modelValue": a[0] ||= (e) => c.label = e,
					class: "input",
					type: "text",
					placeholder: J(f)("rechnungswerk", "z. B. Neukunde, Mahnfreundlich")
				}, null, 8, yg), [[D, c.label]])]),
				R("div", bg, [R("label", xg, [R("span", null, n(J(f)("rechnungswerk", "Dokument")), 1), W(R("select", {
					"onUpdate:modelValue": a[1] ||= (e) => c.docType = e,
					class: "input"
				}, [(p(), K(G, null, S(r, (e) => R("option", {
					key: e,
					value: e
				}, n(J(f)("rechnungswerk", J(Vc)[e])), 9, Sg)), 64))], 512), [[ce, c.docType]])]), R("label", Cg, [R("span", null, n(J(f)("rechnungswerk", "Textbereich")), 1), W(R("select", {
					"onUpdate:modelValue": a[2] ||= (e) => c.slot = e,
					class: "input"
				}, [(p(), K(G, null, S(i, (e) => R("option", {
					key: e,
					value: e
				}, n(J(f)("rechnungswerk", J(Hc)[e])), 9, wg)), 64))], 512), [[ce, c.slot]])])]),
				R("label", Tg, [R("span", null, n(J(f)("rechnungswerk", "Text")), 1), W(R("textarea", {
					"onUpdate:modelValue": a[3] ||= (e) => c.content = e,
					class: "input",
					rows: "6"
				}, null, 512), [[D, c.content]])]),
				q(J(Ct), {
					modelValue: c.isDefault,
					"onUpdate:modelValue": a[4] ||= (e) => c.isDefault = e
				}, {
					default: P(() => [k(n(J(f)("rechnungswerk", "Als Standard für neue Dokumente verwenden")), 1)]),
					_: 1
				}, 8, ["modelValue"]),
				R("p", Eg, n(J(f)("rechnungswerk", "Der Standard-Baustein füllt neue Dokumente dieses Typs automatisch vor. Je Dokument und Textbereich gibt es genau einen Standard.")), 1),
				R("div", Dg, [q(J(Y), { onClick: a[5] ||= (e) => t.$emit("close") }, {
					default: P(() => [k(n(J(f)("rechnungswerk", "Abbrechen")), 1)]),
					_: 1
				}), q(J(Y), {
					variant: "primary",
					disabled: e.saving || !u.value,
					onClick: d
				}, {
					default: P(() => [k(n(J(f)("rechnungswerk", "Speichern")), 1)]),
					_: 1
				}, 8, ["disabled"])])
			])]),
			_: 1
		}, 8, ["name"])) : T("", !0);
	}
}), [["__scopeId", "data-v-b60fbea6"]]), kg = { class: "rw-view" }, Ag = { class: "rw-view__head" }, jg = { class: "rw-muted rw-intro" }, Mg = {
	key: 2,
	class: "rw-snippet-groups"
}, Ng = { class: "rw-snippet-group__head" }, Pg = { class: "rw-table-wrap" }, Fg = { class: "rw-table" }, Ig = ["onClick"], Lg = {
	key: 0,
	class: "rw-muted rw-snippet-content"
}, Rg = { class: "rw-snippet-actions" }, zg = { class: "rw-actions" }, Bg = /*#__PURE__*/ Z(/* @__PURE__ */ r({
	__name: "TextSnippetsView",
	setup(e) {
		let t = kf(), r = ["invoice", "quote"], i = ["opening", "closing"], a = H(() => {
			let e = [];
			for (let n of r) for (let r of i) {
				let i = t.snippets.filter((e) => e.docType === n && e.slot === r).sort((e, t) => Number(t.isDefault) - Number(e.isDefault) || e.sortOrder - t.sortOrder || e.label.localeCompare(t.label));
				i.length > 0 && e.push({
					key: `${n}-${r}`,
					docType: n,
					slot: r,
					items: i
				});
			}
			return e;
		}), o = M(!1), c = M(null), l = M(null), u = M("");
		function d(e, t) {
			let n = e.message ?? t;
			u.value = n, console.error("[rechnungswerk] text-snippets:", e);
		}
		s(() => {
			t.fetchAll().catch((e) => d(e, f("rechnungswerk", "Laden fehlgeschlagen")));
		});
		function m() {
			c.value = null, o.value = !0;
		}
		function h(e) {
			c.value = e, o.value = !0;
		}
		async function g(e) {
			if (!e.isDefault) {
				u.value = "";
				try {
					await t.update(e.id, { isDefault: !0 });
				} catch (e) {
					d(e, f("rechnungswerk", "Speichern fehlgeschlagen"));
				}
			}
		}
		async function _(e) {
			u.value = "";
			try {
				c.value ? await t.update(c.value.id, e) : await t.create(e), o.value = !1;
			} catch (e) {
				d(e, f("rechnungswerk", "Speichern fehlgeschlagen"));
			}
		}
		function v(e) {
			l.value = e;
		}
		async function y() {
			let e = l.value;
			if (l.value = null, e) {
				u.value = "";
				try {
					await t.remove(e.id);
				} catch (e) {
					d(e, f("rechnungswerk", "Löschen fehlgeschlagen"));
				}
			}
		}
		return (e, r) => (p(), K("div", kg, [
			R("div", Ag, [R("h2", null, n(J(f)("rechnungswerk", "Textbausteine")), 1), q(J(Y), {
				variant: "primary",
				onClick: m
			}, {
				icon: P(() => [q(es, { size: 20 })]),
				default: P(() => [k(" " + n(J(f)("rechnungswerk", "Textbaustein anlegen")), 1)]),
				_: 1
			})]),
			R("p", jg, n(J(f)("rechnungswerk", "Pflege wiederverwendbare Anrede-/Einleitungs- und Schlusstexte – getrennt für Rechnungen und Angebote. Beim Anlegen eines Dokuments füllt der jeweilige Standard-Baustein die Texte vor; weitere Bausteine lassen sich im Editor per Klick einfügen.")), 1),
			u.value ? (p(), I(J(st), {
				key: 0,
				type: "error",
				text: u.value
			}, null, 8, ["text"])) : T("", !0),
			!J(t).loading && J(t).snippets.length === 0 ? (p(), I(J(_t), {
				key: 1,
				name: J(f)("rechnungswerk", "Noch keine Textbausteine"),
				description: J(f)("rechnungswerk", "Lege wiederkehrende Einleitungs- und Schlusstexte an, um sie schnell in Dokumente zu übernehmen.")
			}, {
				icon: P(() => [q(no, { size: 20 })]),
				_: 1
			}, 8, ["name", "description"])) : J(t).snippets.length > 0 ? (p(), K("div", Mg, [(p(!0), K(G, null, S(a.value, (e) => (p(), K("section", {
				key: e.key,
				class: "rw-snippet-group"
			}, [R("h3", Ng, [
				k(n(J(f)("rechnungswerk", J(Vc)[e.docType])) + " ", 1),
				r[2] ||= R("span", { class: "rw-snippet-group__sep" }, "–", -1),
				k(" " + n(J(f)("rechnungswerk", J(Hc)[e.slot])), 1)
			]), R("div", Pg, [R("table", Fg, [R("tbody", null, [(p(!0), K(G, null, S(e.items, (e) => (p(), K("tr", {
				key: e.id,
				class: "rw-row-clickable rw-snippet-row",
				onClick: (t) => h(e)
			}, [R("td", null, [R("strong", null, n(e.label), 1), e.content ? (p(), K("div", Lg, n(e.content), 1)) : T("", !0)]), R("td", Rg, [R("div", zg, [q(J(Y), {
				variant: "tertiary",
				"aria-label": e.isDefault ? J(f)("rechnungswerk", "Standard-Vorlage") : J(f)("rechnungswerk", "Als Standard festlegen"),
				title: e.isDefault ? J(f)("rechnungswerk", "Standard-Vorlage") : J(f)("rechnungswerk", "Als Standard festlegen"),
				onClick: j((t) => g(e), ["stop"])
			}, {
				icon: P(() => [e.isDefault ? (p(), I(lg, {
					key: 0,
					size: 20,
					class: "rw-star rw-star--active"
				})) : (p(), I(gg, {
					key: 1,
					size: 20,
					class: "rw-star"
				}))]),
				_: 2
			}, 1032, [
				"aria-label",
				"title",
				"onClick"
			]), q(J(Y), {
				variant: "tertiary",
				"aria-label": J(f)("rechnungswerk", "Löschen"),
				title: J(f)("rechnungswerk", "Löschen"),
				onClick: j((t) => v(e), ["stop"])
			}, {
				icon: P(() => [q(Zl, { size: 20 })]),
				_: 1
			}, 8, [
				"aria-label",
				"title",
				"onClick"
			])])])], 8, Ig))), 128))])])])]))), 128))])) : T("", !0),
			q(Og, {
				open: o.value,
				snippet: c.value,
				saving: J(t).loading,
				onClose: r[0] ||= (e) => o.value = !1,
				onSave: _
			}, null, 8, [
				"open",
				"snippet",
				"saving"
			]),
			q(Jd, {
				open: l.value !== null,
				name: J(f)("rechnungswerk", "Textbaustein löschen"),
				message: l.value ? J(f)("rechnungswerk", "„{name}“ wirklich löschen?", { name: l.value.label }) : "",
				confirmLabel: J(f)("rechnungswerk", "Löschen"),
				destructive: "",
				onClose: r[1] ||= (e) => l.value = null,
				onConfirm: y
			}, null, 8, [
				"open",
				"name",
				"message",
				"confirmLabel"
			])
		]));
	}
}), [["__scopeId", "data-v-c438c8e2"]]), Vg = {
	name: "AccountArrowRightIcon",
	emits: ["click"],
	props: {
		title: { type: String },
		fillColor: {
			type: String,
			default: "currentColor"
		},
		size: {
			type: Number,
			default: 24
		}
	}
}, Hg = ["aria-hidden", "aria-label"], Ug = [
	"fill",
	"width",
	"height"
], Wg = { d: "M18 16H14V18H18V20L21 17L18 14V16M11 4C8.8 4 7 5.8 7 8S8.8 12 11 12 15 10.2 15 8 13.2 4 11 4M11 14C6.6 14 3 15.8 3 18V20H12.5C12.2 19.2 12 18.4 12 17.5C12 16.3 12.3 15.2 12.9 14.1C12.3 14.1 11.7 14 11 14" }, Gg = { key: 0 };
function Kg(e, r, i, a, o, s) {
	return p(), K("span", t(e.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon account-arrow-right-icon",
		role: "img",
		onClick: r[0] ||= (t) => e.$emit("click", t)
	}), [(p(), K("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [R("path", Wg, [i.title ? (p(), K("title", Gg, n(i.title), 1)) : T("", !0)])], 8, Ug))], 16, Hg);
}
var qg = /*#__PURE__*/ Z(Vg, [["render", Kg]]), Jg = { class: "customer-modal" }, Yg = { class: "form-section" }, Xg = { class: "row" }, Zg = { class: "field" }, Qg = { class: "field" }, $g = { class: "row" }, e_ = { class: "field" }, t_ = { class: "form-section" }, n_ = { class: "field" }, r_ = { class: "row" }, i_ = { class: "field" }, a_ = { class: "field" }, o_ = { class: "row" }, s_ = { class: "field" }, c_ = { class: "form-section" }, l_ = { class: "row" }, u_ = { class: "field" }, d_ = { class: "field" }, f_ = { class: "field" }, p_ = { class: "form-section" }, m_ = { class: "field" }, h_ = { class: "row" }, g_ = { class: "field" }, __ = { class: "field" }, v_ = { class: "field" }, y_ = { class: "form-section" }, b_ = { class: "row" }, x_ = { class: "field" }, S_ = { class: "field" }, C_ = { value: "" }, w_ = ["value"], T_ = { class: "field" }, E_ = { class: "actions" }, D_ = /*#__PURE__*/ Z(/* @__PURE__ */ r({
	__name: "CustomerEditModal",
	props: {
		open: { type: Boolean },
		customer: {},
		saving: { type: Boolean },
		takenNumbers: {},
		prefill: {}
	},
	emits: ["close", "save"],
	setup(e, { emit: t }) {
		let r = e, i = t, a = M(null), o = () => ({
			customerNumber: "",
			name: "",
			vatId: "",
			address: "",
			postalCode: "",
			city: "",
			country: "DE",
			contactPerson: "",
			phone: "",
			email: "",
			bankAccountHolder: "",
			iban: "",
			bic: "",
			bankName: "",
			note: ""
		}), s = ue(o()), c = M(""), l = M(""), u = H(() => r.customer ? f("rechnungswerk", "Kunde bearbeiten") : f("rechnungswerk", "Kunde anlegen")), d = H(() => {
			let e = s.customerNumber.trim().toLowerCase();
			return e !== "" && (r.takenNumbers ?? []).includes(e);
		}), m = H(() => s.customerNumber.trim() !== "" && s.name.trim() !== "" && !d.value);
		v(() => r.open, (e) => {
			if (!e) return;
			let t = r.customer;
			Object.assign(s, o()), t ? (s.customerNumber = t.customerNumber ?? "", s.name = t.name ?? "", s.vatId = t.vatId ?? "", s.address = t.address ?? "", s.postalCode = t.postalCode ?? "", s.city = t.city ?? "", s.country = t.country ?? "DE", s.contactPerson = t.contactPerson ?? "", s.phone = t.phone ?? "", s.email = t.email ?? "", s.bankAccountHolder = t.bankAccountHolder ?? "", s.iban = t.iban ?? "", s.bic = t.bic ?? "", s.bankName = t.bankName ?? "", s.note = t.note ?? "", c.value = t.defaultPaymentTermDays == null ? "" : String(t.defaultPaymentTermDays), l.value = t.defaultTaxRateBp == null ? "" : String(t.defaultTaxRateBp)) : r.prefill && Object.assign(s, {
				...o(),
				...h(r.prefill)
			}), B(() => a.value?.focus());
		}, { immediate: !0 });
		function h(e) {
			let t = {};
			for (let [n, r] of Object.entries(e)) typeof r == "string" && (t[n] = r);
			return t;
		}
		function g(e) {
			let t = e.trim();
			return t === "" ? null : t;
		}
		function _() {
			m.value && i("save", {
				customerNumber: s.customerNumber.trim(),
				name: s.name.trim(),
				vatId: g(s.vatId),
				address: g(s.address),
				postalCode: g(s.postalCode),
				city: g(s.city),
				country: s.country.trim() === "" ? "DE" : s.country.trim().toUpperCase(),
				contactPerson: g(s.contactPerson),
				phone: g(s.phone),
				email: g(s.email),
				bankAccountHolder: g(s.bankAccountHolder),
				iban: g(s.iban),
				bic: g(s.bic),
				bankName: g(s.bankName),
				defaultPaymentTermDays: String(c.value).trim() === "" ? null : Math.max(0, Number(c.value)),
				defaultTaxRateBp: l.value === "" ? null : Number(l.value),
				note: g(s.note)
			});
		}
		return (t, r) => e.open ? (p(), I(J(lt), {
			key: 0,
			name: u.value,
			onKeydown: r[18] ||= xe((e) => J(Yd)(e, () => t.$emit("close")), ["esc"]),
			onClose: r[19] ||= (e) => t.$emit("close")
		}, {
			default: P(() => [R("div", Jg, [
				R("h2", null, n(u.value), 1),
				R("div", Yg, [
					R("h3", null, n(J(f)("rechnungswerk", "Stammdaten")), 1),
					R("div", Xg, [R("label", Zg, [R("span", null, n(J(f)("rechnungswerk", "Kundennr.")) + " *", 1), W(R("input", {
						ref_key: "numberInput",
						ref: a,
						"onUpdate:modelValue": r[0] ||= (e) => s.customerNumber = e,
						class: "input",
						type: "text"
					}, null, 512), [[D, s.customerNumber]])]), R("label", Qg, [R("span", null, n(J(f)("rechnungswerk", "Name / Firma")) + " *", 1), W(R("input", {
						"onUpdate:modelValue": r[1] ||= (e) => s.name = e,
						class: "input",
						type: "text"
					}, null, 512), [[D, s.name]])])]),
					d.value ? (p(), I(J(st), {
						key: 0,
						type: "error",
						text: J(f)("rechnungswerk", "Die Kundennummer {number} ist bereits vergeben. Bitte eine andere wählen.", { number: s.customerNumber.trim() })
					}, null, 8, ["text"])) : T("", !0),
					R("div", $g, [R("label", e_, [R("span", null, n(J(f)("rechnungswerk", "USt-IdNr.")), 1), W(R("input", {
						"onUpdate:modelValue": r[2] ||= (e) => s.vatId = e,
						class: "input",
						type: "text"
					}, null, 512), [[D, s.vatId]])])])
				]),
				R("div", t_, [
					R("h3", null, n(J(f)("rechnungswerk", "Anschrift")), 1),
					R("label", n_, [R("span", null, n(J(f)("rechnungswerk", "Straße & Hausnummer")), 1), W(R("input", {
						"onUpdate:modelValue": r[3] ||= (e) => s.address = e,
						class: "input",
						type: "text"
					}, null, 512), [[D, s.address]])]),
					R("div", r_, [R("label", i_, [R("span", null, n(J(f)("rechnungswerk", "PLZ")), 1), W(R("input", {
						"onUpdate:modelValue": r[4] ||= (e) => s.postalCode = e,
						class: "input",
						type: "text"
					}, null, 512), [[D, s.postalCode]])]), R("label", a_, [R("span", null, n(J(f)("rechnungswerk", "Ort")), 1), W(R("input", {
						"onUpdate:modelValue": r[5] ||= (e) => s.city = e,
						class: "input",
						type: "text"
					}, null, 512), [[D, s.city]])])]),
					R("div", o_, [R("label", s_, [R("span", null, n(J(f)("rechnungswerk", "Land")), 1), q($u, {
						modelValue: s.country,
						"onUpdate:modelValue": r[6] ||= (e) => s.country = e,
						selectClass: "input"
					}, null, 8, ["modelValue"])])])
				]),
				R("div", c_, [
					R("h3", null, n(J(f)("rechnungswerk", "Ansprechpartner & Kontakt")), 1),
					R("div", l_, [R("label", u_, [R("span", null, n(J(f)("rechnungswerk", "Ansprechpartner")), 1), W(R("input", {
						"onUpdate:modelValue": r[7] ||= (e) => s.contactPerson = e,
						class: "input",
						type: "text"
					}, null, 512), [[D, s.contactPerson]])]), R("label", d_, [R("span", null, n(J(f)("rechnungswerk", "Telefon")), 1), W(R("input", {
						"onUpdate:modelValue": r[8] ||= (e) => s.phone = e,
						class: "input",
						type: "text"
					}, null, 512), [[D, s.phone]])])]),
					R("label", f_, [R("span", null, n(J(f)("rechnungswerk", "E-Mail (für Rechnungsversand)")), 1), W(R("input", {
						"onUpdate:modelValue": r[9] ||= (e) => s.email = e,
						class: "input",
						type: "email"
					}, null, 512), [[D, s.email]])])
				]),
				R("div", p_, [
					R("h3", null, n(J(f)("rechnungswerk", "Bankverbindung")), 1),
					R("label", m_, [R("span", null, n(J(f)("rechnungswerk", "Kontoinhaber")), 1), W(R("input", {
						"onUpdate:modelValue": r[10] ||= (e) => s.bankAccountHolder = e,
						class: "input",
						type: "text"
					}, null, 512), [[D, s.bankAccountHolder]])]),
					R("div", h_, [R("label", g_, [R("span", null, n(J(f)("rechnungswerk", "IBAN")), 1), W(R("input", {
						"onUpdate:modelValue": r[11] ||= (e) => s.iban = e,
						class: "input",
						type: "text"
					}, null, 512), [[D, s.iban]])]), R("label", __, [R("span", null, n(J(f)("rechnungswerk", "BIC")), 1), W(R("input", {
						"onUpdate:modelValue": r[12] ||= (e) => s.bic = e,
						class: "input",
						type: "text"
					}, null, 512), [[D, s.bic]])])]),
					R("label", v_, [R("span", null, n(J(f)("rechnungswerk", "Bank")), 1), W(R("input", {
						"onUpdate:modelValue": r[13] ||= (e) => s.bankName = e,
						class: "input",
						type: "text"
					}, null, 512), [[D, s.bankName]])])
				]),
				R("div", y_, [
					R("h3", null, n(J(f)("rechnungswerk", "Vorgaben für neue Rechnungen")), 1),
					R("div", b_, [R("label", x_, [R("span", null, n(J(f)("rechnungswerk", "Zahlungsziel (Tage)")), 1), W(R("input", {
						"onUpdate:modelValue": r[14] ||= (e) => c.value = e,
						class: "input",
						type: "number",
						min: "0",
						inputmode: "numeric"
					}, null, 512), [[D, c.value]])]), R("label", S_, [R("span", null, n(J(f)("rechnungswerk", "Standard-Steuersatz")), 1), W(R("select", {
						"onUpdate:modelValue": r[15] ||= (e) => l.value = e,
						class: "input"
					}, [R("option", C_, n(J(f)("rechnungswerk", "— keine Vorgabe —")), 1), (p(!0), K(G, null, S(J(zc), (e) => (p(), K("option", {
						key: e,
						value: String(e)
					}, n(J(nl)(e)), 9, w_))), 128))], 512), [[ce, l.value]])])]),
					R("label", T_, [R("span", null, n(J(f)("rechnungswerk", "Notiz (intern, nicht auf der Rechnung)")), 1), W(R("textarea", {
						"onUpdate:modelValue": r[16] ||= (e) => s.note = e,
						class: "input",
						rows: "2"
					}, null, 512), [[D, s.note]])])
				]),
				R("div", E_, [q(J(Y), { onClick: r[17] ||= (e) => t.$emit("close") }, {
					default: P(() => [k(n(J(f)("rechnungswerk", "Abbrechen")), 1)]),
					_: 1
				}), q(J(Y), {
					variant: "primary",
					disabled: e.saving || !m.value,
					onClick: _
				}, {
					default: P(() => [k(n(J(f)("rechnungswerk", "Speichern")), 1)]),
					_: 1
				}, 8, ["disabled"])])
			])]),
			_: 1
		}, 8, ["name"])) : T("", !0);
	}
}), [["__scopeId", "data-v-2d237eab"]]), O_ = { class: "rw-view" }, k_ = { class: "rw-view__head" }, A_ = { class: "rw-view__actions" }, j_ = {
	key: 2,
	class: "rw-table-wrap"
}, M_ = { class: "rw-table" }, N_ = ["onClick"], P_ = { class: "rw-muted" }, F_ = {
	key: 0,
	class: "rw-muted"
}, I_ = { class: "rw-col-actions" }, L_ = { class: "rw-actions" }, R_ = { class: "rw-import" }, z_ = { class: "rw-muted" }, B_ = /*#__PURE__*/ Z(/* @__PURE__ */ r({
	__name: "CustomersView",
	setup(e) {
		let t = id(), r = M(!1), i = M(null), a = M(null), o = M(null), c = M(!1), l = M(""), u = M(""), d = M(!1), m = H(() => t.customers.filter((e) => e.id !== i.value?.id).map((e) => e.customerNumber.trim().toLowerCase()));
		function h(e, t) {
			u.value = e.message ?? t, console.error("[rechnungswerk] customers:", e);
		}
		s(() => {
			t.fetchAll().catch((e) => h(e, f("rechnungswerk", "Laden fehlgeschlagen")));
		});
		function g() {
			i.value = null, a.value = null, r.value = !0;
		}
		function _(e) {
			i.value = e, a.value = null, r.value = !0;
		}
		function v() {
			l.value = "", c.value = !0;
		}
		function y(e) {
			c.value = !1, i.value = null, a.value = {
				name: e.name,
				email: e.email || null,
				phone: e.phone || null,
				address: e.address || null,
				postalCode: e.postalCode || null,
				city: e.city || null,
				country: e.country || "DE"
			}, r.value = !0;
		}
		async function b(e) {
			u.value = "", d.value = !0;
			try {
				i.value ? await t.update(i.value.id, e) : await t.create(e), r.value = !1, a.value = null;
			} catch (e) {
				h(e, f("rechnungswerk", "Speichern fehlgeschlagen"));
			} finally {
				d.value = !1;
			}
		}
		function ee(e) {
			o.value = e;
		}
		async function x() {
			let e = o.value;
			if (o.value = null, e) {
				u.value = "";
				try {
					await t.remove(e.id);
				} catch (e) {
					h(e, f("rechnungswerk", "Löschen fehlgeschlagen"));
				}
			}
		}
		return (e, s) => (p(), K("div", O_, [
			R("div", k_, [R("h2", null, n(J(f)("rechnungswerk", "Kunden")), 1), R("div", A_, [q(J(Y), { onClick: v }, {
				icon: P(() => [q(qg, { size: 20 })]),
				default: P(() => [k(" " + n(J(f)("rechnungswerk", "Aus Kontakten importieren")), 1)]),
				_: 1
			}), q(J(Y), {
				variant: "primary",
				onClick: g
			}, {
				icon: P(() => [q(es, { size: 20 })]),
				default: P(() => [k(" " + n(J(f)("rechnungswerk", "Neuer Kunde")), 1)]),
				_: 1
			})])]),
			u.value ? (p(), I(J(st), {
				key: 0,
				type: "error",
				text: u.value
			}, null, 8, ["text"])) : T("", !0),
			!J(t).loading && J(t).customers.length === 0 ? (p(), I(J(_t), {
				key: 1,
				name: J(f)("rechnungswerk", "Noch keine Kunden"),
				description: J(f)("rechnungswerk", "Lege Kunden an oder übernimm sie aus deinen Nextcloud-Kontakten, um sie schnell in Rechnungen auszuwählen.")
			}, {
				icon: P(() => [q(Fa, { size: 20 })]),
				_: 1
			}, 8, ["name", "description"])) : J(t).customers.length > 0 ? (p(), K("div", j_, [R("table", M_, [R("thead", null, [R("tr", null, [
				R("th", null, n(J(f)("rechnungswerk", "Kundennr.")), 1),
				R("th", null, n(J(f)("rechnungswerk", "Kunde")), 1),
				R("th", null, n(J(f)("rechnungswerk", "Ort")), 1),
				s[5] ||= R("th", { class: "num" }, null, -1)
			])]), R("tbody", null, [(p(!0), K(G, null, S(J(t).customers, (e) => (p(), K("tr", {
				key: e.id,
				class: "rw-row-clickable",
				onClick: (t) => _(e)
			}, [
				R("td", P_, n(e.customerNumber), 1),
				R("td", null, [k(n(e.name) + " ", 1), e.contactPerson || e.vatId ? (p(), K("div", F_, n([e.contactPerson, e.vatId].filter(Boolean).join(" · ")), 1)) : T("", !0)]),
				R("td", null, n([e.postalCode, e.city].filter(Boolean).join(" ")), 1),
				R("td", I_, [R("div", L_, [q(J(Y), {
					variant: "tertiary",
					"aria-label": J(f)("rechnungswerk", "Löschen"),
					title: J(f)("rechnungswerk", "Löschen"),
					onClick: j((t) => ee(e), ["stop"])
				}, {
					icon: P(() => [q(Zl, { size: 20 })]),
					_: 1
				}, 8, [
					"aria-label",
					"title",
					"onClick"
				])])])
			], 8, N_))), 128))])])])) : T("", !0),
			q(D_, {
				open: r.value,
				customer: i.value,
				saving: d.value,
				takenNumbers: m.value,
				prefill: a.value,
				onClose: s[0] ||= (e) => r.value = !1,
				onSave: b
			}, null, 8, [
				"open",
				"customer",
				"saving",
				"takenNumbers",
				"prefill"
			]),
			c.value ? (p(), I(J(lt), {
				key: 3,
				name: J(f)("rechnungswerk", "Aus Nextcloud-Kontakten übernehmen"),
				onKeydown: s[2] ||= xe((e) => J(Yd)(e, () => c.value = !1), ["esc"]),
				onClose: s[3] ||= (e) => c.value = !1
			}, {
				default: P(() => [R("div", R_, [R("p", z_, n(J(f)("rechnungswerk", "Einmaliger Import als Kopie – danach ist der Kunde unabhängig in RechnungsWerk. Kein automatischer Abgleich.")), 1), q(qu, {
					modelValue: l.value,
					"onUpdate:modelValue": s[1] ||= (e) => l.value = e,
					onSelect: y
				}, null, 8, ["modelValue"])])]),
				_: 1
			}, 8, ["name"])) : T("", !0),
			q(Jd, {
				open: o.value !== null,
				name: J(f)("rechnungswerk", "Kunde löschen"),
				message: o.value ? J(f)("rechnungswerk", "„{name}“ wirklich löschen?", { name: o.value.name }) : "",
				confirmLabel: J(f)("rechnungswerk", "Löschen"),
				destructive: "",
				onClose: s[4] ||= (e) => o.value = null,
				onConfirm: x
			}, null, 8, [
				"open",
				"name",
				"message",
				"confirmLabel"
			])
		]));
	}
}), [["__scopeId", "data-v-1eff74a5"]]), V_ = {
	name: "ContentSaveIcon",
	emits: ["click"],
	props: {
		title: { type: String },
		fillColor: {
			type: String,
			default: "currentColor"
		},
		size: {
			type: Number,
			default: 24
		}
	}
}, H_ = ["aria-hidden", "aria-label"], U_ = [
	"fill",
	"width",
	"height"
], W_ = { d: "M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z" }, G_ = { key: 0 };
function K_(e, r, i, a, o, s) {
	return p(), K("span", t(e.$attrs, {
		"aria-hidden": i.title ? null : "true",
		"aria-label": i.title,
		class: "material-design-icon content-save-icon",
		role: "img",
		onClick: r[0] ||= (t) => e.$emit("click", t)
	}), [(p(), K("svg", {
		fill: i.fillColor,
		class: "material-design-icon__svg",
		width: i.size,
		height: i.size,
		viewBox: "0 0 24 24"
	}, [R("path", W_, [i.title ? (p(), K("title", G_, n(i.title), 1)) : T("", !0)])], 8, U_))], 16, H_);
}
var q_ = /*#__PURE__*/ Z(V_, [["render", K_]]), J_ = { class: "rw-view" }, Y_ = {
	key: 2,
	class: "rw-section"
}, X_ = { class: "rw-hint" }, Z_ = { class: "rw-form-row" }, Q_ = { class: "rw-field" }, $_ = { class: "rw-field" }, ev = { class: "rw-field" }, tv = {
	key: 3,
	class: "rw-action-bar"
}, nv = /* @__PURE__ */ r({
	__name: "MyContactView",
	setup(e) {
		let t = M(null), r = M(""), i = M(""), a = M(!1);
		s(async () => {
			try {
				t.value = await Af();
			} catch (e) {
				r.value = e.message ?? f("rechnungswerk", "Laden fehlgeschlagen");
			}
		});
		async function o() {
			r.value = "";
			try {
				let e = await Vu();
				t.value = {
					person: e.person,
					phone: e.phone,
					email: e.email
				};
			} catch (e) {
				r.value = e.message ?? f("rechnungswerk", "Nextcloud-Konto konnte nicht geladen werden.");
			}
		}
		async function c() {
			if (t.value) {
				r.value = "", i.value = "", a.value = !0;
				try {
					t.value = await jf(t.value), i.value = f("rechnungswerk", "Gespeichert.");
				} catch (e) {
					r.value = e.message ?? f("rechnungswerk", "Speichern fehlgeschlagen");
				} finally {
					a.value = !1;
				}
			}
		}
		return (e, s) => (p(), K("div", J_, [
			R("h2", null, n(J(f)("rechnungswerk", "Mein Kontakt")), 1),
			r.value ? (p(), I(J(st), {
				key: 0,
				type: "error",
				text: r.value
			}, null, 8, ["text"])) : T("", !0),
			i.value ? (p(), I(J(st), {
				key: 1,
				type: "success",
				text: i.value
			}, null, 8, ["text"])) : T("", !0),
			t.value ? (p(), K("section", Y_, [
				R("h3", null, n(J(f)("rechnungswerk", "Mein Verkäufer-Ansprechpartner")), 1),
				R("p", X_, n(J(f)("rechnungswerk", "Diese Kontaktdaten füllen deine neuen Rechnungen automatisch vor (nur für dich). Ohne Angabe greift der zentrale Firmenkontakt. Pro Rechnung bleibt eine Änderung möglich.")), 1),
				R("div", Z_, [
					R("label", Q_, [R("span", null, n(J(f)("rechnungswerk", "Name")), 1), W(R("input", {
						"onUpdate:modelValue": s[0] ||= (e) => t.value.person = e,
						class: "rw-input",
						type: "text"
					}, null, 512), [[D, t.value.person]])]),
					R("label", $_, [R("span", null, n(J(f)("rechnungswerk", "Telefon")), 1), W(R("input", {
						"onUpdate:modelValue": s[1] ||= (e) => t.value.phone = e,
						class: "rw-input",
						type: "text"
					}, null, 512), [[D, t.value.phone]])]),
					R("label", ev, [R("span", null, n(J(f)("rechnungswerk", "E-Mail")), 1), W(R("input", {
						"onUpdate:modelValue": s[2] ||= (e) => t.value.email = e,
						class: "rw-input",
						type: "email"
					}, null, 512), [[D, t.value.email]])])
				]),
				q(J(Y), {
					variant: "tertiary",
					onClick: o
				}, {
					icon: P(() => [q(Ha, { size: 20 })]),
					default: P(() => [k(" " + n(J(f)("rechnungswerk", "Aus meinem Nextcloud-Konto übernehmen")), 1)]),
					_: 1
				})
			])) : T("", !0),
			t.value ? (p(), K("div", tv, [q(J(Y), {
				variant: "primary",
				disabled: a.value,
				onClick: c
			}, {
				icon: P(() => [q(q_, { size: 20 })]),
				default: P(() => [k(" " + n(J(f)("rechnungswerk", "Speichern")), 1)]),
				_: 1
			}, 8, ["disabled"])])) : T("", !0)
		]));
	}
});
function rv(e) {
	if (typeof e != "string") return null;
	let t = e.trim().replace(/^#/, "");
	if (t.length === 3 && (t = t.split("").map((e) => e + e).join("")), !/^[0-9a-fA-F]{6}$/.test(t)) return null;
	let n = (e) => {
		let t = e / 255;
		return t <= .03928 ? t / 12.92 : ((t + .055) / 1.055) ** 2.4;
	}, r = parseInt(t, 16);
	return .2126 * n(r >> 16 & 255) + .7152 * n(r >> 8 & 255) + .0722 * n(r & 255);
}
function iv(e, t) {
	let [n, r] = e > t ? [e, t] : [t, e];
	return (n + .05) / (r + .05);
}
function av(e) {
	let t = rv(e);
	return t === null ? "#000000" : iv(t, 1) >= iv(t, 0) ? "#ffffff" : "#000000";
}
function ov(e) {
	let t = rv(e);
	return t !== null && iv(t, 1) < 4.5;
}
//#endregion
//#region src/utils/invoiceNumber.ts
function sv(e, t, n, r, i) {
	return e.replace(/\{YYYY\}/g, String(n).padStart(4, "0")).replace(/\{YY\}/g, String(n % 100).padStart(2, "0")).replace(/\{MM\}/g, String(r).padStart(2, "0")).replace(/\{DD\}/g, String(i).padStart(2, "0")).replace(/\{(#+)\}/g, (e, n) => String(t).padStart(n.length, "0"));
}
//#endregion
//#region src/utils/fileName.ts
var cv = {
	ä: "ae",
	ö: "oe",
	ü: "ue",
	ß: "ss",
	Ä: "Ae",
	Ö: "Oe",
	Ü: "Ue"
};
function lv(e, t) {
	let n = (e) => String(e).padStart(2, "0"), r = {
		"{nummer}": t.nummer,
		"{YYYY}": String(t.date.getFullYear()),
		"{MM}": n(t.date.getMonth() + 1),
		"{DD}": n(t.date.getDate()),
		"{kunde}": t.kunde.replace(/[äöüßÄÖÜ]/g, (e) => cv[e] ?? e),
		"{typ}": t.typ
	}, i = e.replace(/\{nummer\}|\{YYYY\}|\{MM\}|\{DD\}|\{kunde\}|\{typ\}/g, (e) => r[e]);
	return i = i.replace(/[/\\:*?"<>|]/g, "-").replace(/\s+/g, " ").replace(/^[\s.]+|[\s.]+$/g, "").slice(0, 120), (i || "rechnung-1") + ".pdf";
}
//#endregion
//#region src/views/SettingsView.vue?vue&type=script&setup=true&lang.ts
var uv = { class: "rw-view" }, dv = { class: "rw-settings-title" }, fv = {
	key: 1,
	class: "settings-form"
}, pv = { class: "rw-section" }, mv = { class: "rw-field" }, hv = { class: "rw-field" }, gv = { class: "rw-form-row" }, _v = { class: "rw-field" }, vv = { class: "rw-field" }, yv = { class: "rw-form-row" }, bv = { class: "rw-field" }, xv = { class: "rw-field" }, Sv = { class: "rw-field" }, Cv = { class: "rw-hint" }, wv = { class: "rw-section" }, Tv = { class: "rw-form-row" }, Ev = { class: "rw-field" }, Dv = { class: "rw-field" }, Ov = { class: "rw-field" }, kv = { class: "rw-hint" }, Av = { class: "rw-section" }, jv = { class: "rw-field rw-field--inline" }, Mv = { class: "rw-accent" }, Nv = ["aria-label"], Pv = { class: "rw-field" }, Fv = { class: "rw-accent-preview" }, Iv = { class: "rw-hint" }, Lv = {
	key: 0,
	class: "rw-hint"
}, Rv = { class: "rw-field" }, zv = { class: "rw-logo" }, Bv = ["src", "alt"], Vv = {
	key: 1,
	class: "rw-logo__empty"
}, Hv = { class: "rw-logo__actions" }, Uv = { class: "rw-hint" }, Wv = { class: "rw-section" }, Gv = { class: "rw-field" }, Kv = { class: "rw-hint" }, qv = { class: "rw-field rw-reset-mode" }, Jv = { class: "rw-hint" }, Yv = { class: "rw-section" }, Xv = { class: "rw-field" }, Zv = { class: "rw-hint" }, Qv = { class: "rw-field rw-reset-mode" }, $v = { class: "rw-hint" }, ey = { class: "rw-section" }, ty = { class: "rw-field" }, ny = { class: "rw-hint" }, ry = { class: "rw-section" }, iy = {
	key: 0,
	class: "rw-field"
}, ay = ["placeholder"], oy = { class: "rw-hint" }, sy = {
	key: 1,
	class: "rw-field tax-rate-field"
}, cy = ["value"], ly = { class: "rw-section" }, uy = { class: "rw-field rw-field--narrow" }, dy = { class: "rw-hint" }, fy = { class: "rw-field rw-field--narrow" }, py = { class: "rw-hint" }, my = { class: "rw-field rw-field--narrow" }, hy = { class: "rw-hint" }, gy = { class: "rw-field-row" }, _y = { class: "rw-field rw-field--narrow" }, vy = { class: "rw-field rw-field--narrow" }, yy = { class: "rw-field rw-field--narrow" }, by = { class: "rw-hint" }, xy = { class: "rw-section" }, Sy = { class: "rw-field" }, Cy = { class: "rw-hint" }, wy = { class: "rw-form-row" }, Ty = { class: "rw-field" }, Ey = { class: "rw-field" }, Dy = { class: "rw-section" }, Oy = { class: "rw-field" }, ky = { class: "rw-archive-folder" }, Ay = {
	key: 0,
	class: "rw-archive-folder__path"
}, jy = {
	key: 1,
	class: "rw-archive-folder__empty"
}, My = { class: "rw-field" }, Ny = ["placeholder"], Py = { class: "rw-hint" }, Fy = { class: "rw-section" }, Iy = { class: "rw-hint" }, Ly = { class: "rw-form-row" }, Ry = { class: "rw-field" }, zy = { class: "rw-field rw-field--narrow" }, By = { class: "rw-field rw-field--narrow" }, Vy = { value: "none" }, Hy = { class: "rw-form-row" }, Uy = { class: "rw-field" }, Wy = { class: "rw-field" }, Gy = ["placeholder"], Ky = { class: "smtp-test" }, qy = { class: "rw-section" }, Jy = { class: "rw-hint" }, Yy = { class: "rw-form-row" }, Xy = { class: "rw-field" }, Zy = { class: "rw-field rw-field--narrow" }, Qy = { class: "rw-field rw-field--narrow" }, $y = { class: "rw-form-row" }, eb = { class: "rw-field" }, tb = { class: "rw-field" }, nb = ["placeholder"], rb = { class: "rw-section" }, ib = { class: "rw-hint" }, ab = { class: "rw-section" }, ob = { class: "rw-hint rw-access-intro" }, sb = { class: "rw-access-group" }, cb = { class: "rw-access-label" }, lb = { class: "rw-hint rw-access-desc" }, ub = { class: "rw-access-group" }, db = { class: "rw-access-label" }, fb = { class: "rw-hint rw-access-desc" }, pb = { class: "rw-action-bar" }, mb = [
	{
		path: "/",
		redirect: { name: "invoices" }
	},
	{
		path: "/invoices",
		name: "invoices",
		component: Wl
	},
	{
		path: "/invoices/new",
		name: "invoice-new",
		component: km
	},
	{
		path: "/invoices/:id",
		name: "invoice-detail",
		component: km,
		props: !0
	},
	{
		path: "/quotes",
		name: "quotes",
		component: Qm
	},
	{
		path: "/quotes/new",
		name: "quote-new",
		component: km
	},
	{
		path: "/quotes/:id",
		name: "quote-detail",
		component: km,
		props: !0
	},
	{
		path: "/dunning",
		name: "dunning",
		component: kh
	},
	{
		path: "/customers",
		name: "customers",
		component: B_
	},
	{
		path: "/products",
		name: "products",
		component: ng
	},
	{
		path: "/text-snippets",
		name: "text-snippets",
		component: Bg
	},
	{
		path: "/me",
		name: "my-contact",
		component: nv
	},
	{
		path: "/settings",
		name: "settings",
		component: /* @__PURE__ */ Z(/* @__PURE__ */ r({
			__name: "SettingsView",
			setup(e) {
				let t = Ze(), r = Ic(), i = M(null);
				function a() {
					t.push({ name: "text-snippets" });
				}
				let o = M(null), c = M(!1), l = M(""), u = M(!1), d = M(!1), m = M(!1), h = M(!1), g = M(!1), _ = M(0), v = M((/* @__PURE__ */ new Date()).getFullYear()), b = M((/* @__PURE__ */ new Date()).getMonth() + 1), ee = M((/* @__PURE__ */ new Date()).getDate()), x = M(null), te = M(0), ne = M(null), C = H(() => i.value?.accentColor || "#2c3e50"), w = H(() => ({
					background: C.value,
					color: av(C.value)
				})), re = H(() => ov(C.value));
				function E(e) {
					i.value && (i.value.accentColor = e ?? null);
				}
				let A = M([]), j = M([]), N = M([]), F = M(!1), ie = M(!1), ae = M(""), L = null, oe = M(""), z = M(""), se = M(""), B = M(""), le = M(""), V = M(!1), ue = M(""), de = M(!1), fe = M(!1), U = H(() => i.value?.logoFileId ? Nc(i.value.logoFileId) : ""), pe = H(() => F.value ? f("rechnungswerk", "Suche läuft\xA0…") : ae.value.trim().length < 2 ? f("rechnungswerk", "Tippe einen Namen (mind. 2 Zeichen), um Nutzer oder Gruppen zu finden.") : f("rechnungswerk", "Keine Treffer.")), me = H(() => {
					if (!i.value) return "";
					let e = i.value.numberResetMode === "continuous" || v.value === x.value ? _.value : 0;
					return sv(i.value.numberFormat || "RE-{YYYY}-{####}", e + 1, v.value, b.value, ee.value);
				}), he = H(() => {
					if (!i.value) return "";
					let e = i.value.quoteNumberResetMode === "continuous" || v.value === ne.value ? te.value : 0;
					return sv(i.value.quoteNumberFormat || "AN-{YYYY}-{####}", e + 1, v.value, b.value, ee.value);
				}), ge = H(() => i.value ? lv(i.value.fileNameFormat || "{nummer}", {
					nummer: me.value,
					date: /* @__PURE__ */ new Date(),
					kunde: "Muster GmbH",
					typ: "Rechnung"
				}) : "");
				s(async () => {
					try {
						await r.fetch(), ye();
						let e = await jo();
						A.value = _e(e.admins), j.value = _e(e.users);
					} catch (e) {
						Ie(e, f("rechnungswerk", "Laden fehlgeschlagen"));
					}
				});
				function _e(e) {
					return e.map((e) => ({
						id: e,
						type: e.startsWith("group:") ? "group" : "user",
						displayName: e.replace(/^(user|group):/, "")
					}));
				}
				function ve(e) {
					if (ae.value = e, L && clearTimeout(L), e.trim().length < 2) {
						N.value = [], F.value = !1;
						return;
					}
					F.value = !0, L = setTimeout(async () => {
						try {
							N.value = await No(e.trim());
						} catch {
							N.value = [];
						} finally {
							F.value = !1;
						}
					}, 300);
				}
				function ye() {
					let e = r.settings;
					e && (_.value = e.numberCounter, x.value = e.numberCounterYear, te.value = e.quoteNumberCounter, ne.value = e.quoteNumberCounterYear, o.value = e.archiveFolderPath ?? null, i.value = {
						companyName: e.companyName,
						companyAddress: e.companyAddress,
						vatId: e.vatId,
						taxNumber: e.taxNumber,
						iban: e.iban,
						bic: e.bic,
						bankName: e.bankName,
						contactPerson: e.contactPerson,
						contactPhone: e.contactPhone,
						contactEmail: e.contactEmail,
						logoFileId: e.logoFileId,
						accentColor: e.accentColor,
						numberFormat: e.numberFormat,
						numberResetMode: e.numberResetMode,
						quoteNumberFormat: e.quoteNumberFormat,
						quoteNumberResetMode: e.quoteNumberResetMode,
						fileNameFormat: e.fileNameFormat,
						archiveEnabled: e.archiveEnabled,
						archiveFolderId: e.archiveFolderId,
						archiveSubfolder: e.archiveSubfolder,
						girocodeEnabled: e.girocodeEnabled,
						smallBusiness: e.smallBusiness,
						smallBusinessNote: e.smallBusinessNote,
						defaultTaxRateBp: e.defaultTaxRateBp,
						defaultPaymentTermDays: e.defaultPaymentTermDays,
						dunningIntervalDays: e.dunningIntervalDays,
						dunningDueDays: e.dunningDueDays,
						datevUploadMail: e.datevUploadMail,
						datevAutoSend: e.datevAutoSend,
						smtpFromName: e.smtpFromName,
						smtpFromEmail: e.smtpFromEmail,
						smtpHost: e.smtpHost,
						smtpPort: e.smtpPort,
						smtpSecurity: e.smtpSecurity || "starttls",
						smtpUser: e.smtpUser,
						smtpPasswordSet: e.smtpPasswordSet,
						imapHost: e.imapHost,
						imapPort: e.imapPort,
						imapSecurity: e.imapSecurity || "ssl",
						imapUser: e.imapUser,
						imapPasswordSet: e.imapPasswordSet,
						imapCleanup: e.imapCleanup,
						greetingDefault: e.greetingDefault,
						introDefault: e.introDefault,
						closingDefault: e.closingDefault
					}, oe.value = rl(e.dunningFee1Cents), z.value = rl(e.dunningFee2Cents), se.value = rl(e.dunningFee3Cents));
				}
				function be(e) {
					i.value && (e ? u.value = !0 : i.value.smallBusiness = !1);
				}
				function xe() {
					u.value = !1, i.value && (i.value.smallBusiness = !0);
				}
				function Se(e) {
					i.value && (e ? d.value = !0 : i.value.datevAutoSend = !1);
				}
				function Ce() {
					d.value = !1, i.value && (i.value.datevAutoSend = !0);
				}
				function we(e) {
					i.value && (e ? m.value = !0 : i.value.archiveEnabled = !1);
				}
				function Te() {
					m.value = !1, i.value && (i.value.archiveEnabled = !0);
				}
				function Ee(e) {
					!i.value || e === i.value.numberResetMode || (e === "continuous" ? h.value = !0 : i.value.numberResetMode = "yearly");
				}
				function De() {
					h.value = !1, i.value && (i.value.numberResetMode = "continuous");
				}
				function Oe(e) {
					!i.value || e === i.value.quoteNumberResetMode || (e === "continuous" ? g.value = !0 : i.value.quoteNumberResetMode = "yearly");
				}
				function ke() {
					g.value = !1, i.value && (i.value.quoteNumberResetMode = "continuous");
				}
				async function Ae() {
					let e;
					try {
						e = await ct(f("rechnungswerk", "Zielordner für die Ablage wählen")).setMultiSelect(!1).setMimeTypeFilter(["httpd/unix-directory"]).allowDirectories(!0).addButton({
							label: f("rechnungswerk", "Auswählen"),
							variant: "primary",
							callback: () => {}
						}).build().pick();
					} catch (e) {
						if (e instanceof ut) return;
						Ie(e, f("rechnungswerk", "Zielordner konnte nicht gesetzt werden."));
						return;
					}
					if (e) {
						c.value = !0, l.value = "";
						try {
							let t = await Pc(e);
							i.value && (i.value.archiveFolderId = t.archiveFolderId), o.value = t.archiveFolderPath;
						} catch (e) {
							Ie(e, f("rechnungswerk", "Zielordner konnte nicht gesetzt werden."));
						} finally {
							c.value = !1;
						}
					}
				}
				async function je() {
					c.value = !0, l.value = "";
					try {
						await Fc(), i.value && (i.value.archiveFolderId = null, i.value.archiveEnabled = !1), o.value = null;
					} catch (e) {
						Ie(e, f("rechnungswerk", "Zielordner konnte nicht entfernt werden."));
					} finally {
						c.value = !1;
					}
				}
				async function Me() {
					let e;
					try {
						e = await ct(f("rechnungswerk", "Firmenlogo wählen")).setMultiSelect(!1).setMimeTypeFilter([
							"image/png",
							"image/jpeg",
							"image/gif"
						]).addButton({
							label: f("rechnungswerk", "Auswählen"),
							variant: "primary",
							callback: () => {}
						}).build().pick();
					} catch (e) {
						if (e instanceof ut) return;
						Ie(e, f("rechnungswerk", "Logo konnte nicht gesetzt werden."));
						return;
					}
					if (e) {
						fe.value = !0, l.value = "";
						try {
							let t = await jc(e);
							i.value && (i.value.logoFileId = t.logoFileId);
						} catch (e) {
							Ie(e, f("rechnungswerk", "Logo konnte nicht gesetzt werden."));
						} finally {
							fe.value = !1;
						}
					}
				}
				async function Ne() {
					fe.value = !0, l.value = "";
					try {
						await Mc(), i.value && (i.value.logoFileId = null);
					} catch (e) {
						Ie(e, f("rechnungswerk", "Logo konnte nicht entfernt werden."));
					} finally {
						fe.value = !1;
					}
				}
				async function Pe() {
					if (!i.value) return;
					l.value = "";
					let e = (i.value.numberFormat || "").trim();
					if (i.value.numberResetMode === "yearly" && !/\{YYYY\}|\{YY\}/.test(e)) {
						l.value = f("rechnungswerk", "Bei jährlichem Nummernkreis muss das Format eine Jahreskomponente ({YYYY} oder {YY}) enthalten. Alternativ „Fortlaufend“ wählen.");
						return;
					}
					let t = (i.value.quoteNumberFormat || "").trim();
					if (i.value.quoteNumberResetMode === "yearly" && !/\{YYYY\}|\{YY\}/.test(t)) {
						l.value = f("rechnungswerk", "Bei jährlichem Angebots-Nummernkreis muss das Format eine Jahreskomponente ({YYYY} oder {YY}) enthalten. Alternativ „Fortlaufend“ wählen.");
						return;
					}
					let n = (i.value.fileNameFormat || "").trim();
					if (n !== "" && !n.includes("{nummer}")) {
						l.value = f("rechnungswerk", "Das Dateinamen-Schema muss den Platzhalter {nummer} enthalten, damit Dateinamen eindeutig bleiben.");
						return;
					}
					ie.value = !0;
					try {
						let e = { ...i.value };
						e.dunningFee1Cents = il(oe.value), e.dunningFee2Cents = il(z.value), e.dunningFee3Cents = il(se.value), delete e.logoFileId, delete e.archiveFolderId, B.value !== "" && (e.smtpPassword = B.value), le.value !== "" && (e.imapPassword = le.value);
						try {
							await r.save(e);
						} catch (e) {
							Ie(e, f("rechnungswerk", "Speichern der Einstellungen fehlgeschlagen."));
							return;
						}
						try {
							await Mo({
								admins: A.value.map((e) => e.id),
								users: j.value.map((e) => e.id)
							});
						} catch (e) {
							Ie(e, f("rechnungswerk", "Einstellungen gespeichert, aber die Zugriffsrechte konnten nicht gespeichert werden. Bitte erneut speichern."));
							return;
						}
						B.value = "", le.value = "", ye();
					} finally {
						ie.value = !1;
					}
				}
				async function Fe() {
					if (i.value?.smtpHost) {
						V.value = !0, ue.value = "";
						try {
							await Oc({
								host: i.value.smtpHost,
								port: i.value.smtpPort ?? 587,
								security: i.value.smtpSecurity || "starttls",
								user: i.value.smtpUser ?? "",
								password: B.value
							}), de.value = !0, ue.value = f("rechnungswerk", "Verbindung erfolgreich.");
						} catch (e) {
							de.value = !1, ue.value = e.message ?? f("rechnungswerk", "Verbindung fehlgeschlagen.");
						} finally {
							V.value = !1;
						}
					}
				}
				function Ie(e, t) {
					l.value = e.message ?? t, console.error("[rechnungswerk] settings:", e);
				}
				return (e, t) => (p(), K("div", uv, [
					R("h2", dv, n(J(f)("rechnungswerk", "Einstellungen")), 1),
					l.value ? (p(), I(J(st), {
						key: 0,
						type: "error",
						text: l.value
					}, null, 8, ["text"])) : T("", !0),
					i.value ? (p(), K("div", fv, [
						R("section", pv, [
							R("h3", null, n(J(f)("rechnungswerk", "Firma")), 1),
							R("label", mv, [R("span", null, n(J(f)("rechnungswerk", "Firmenname")), 1), W(R("input", {
								"onUpdate:modelValue": t[0] ||= (e) => i.value.companyName = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[D, i.value.companyName]])]),
							R("label", hv, [R("span", null, n(J(f)("rechnungswerk", "Adresse")), 1), W(R("textarea", {
								"onUpdate:modelValue": t[1] ||= (e) => i.value.companyAddress = e,
								class: "rw-input",
								rows: "3"
							}, null, 512), [[D, i.value.companyAddress]])]),
							R("div", gv, [R("label", _v, [R("span", null, n(J(f)("rechnungswerk", "USt-IdNr.")), 1), W(R("input", {
								"onUpdate:modelValue": t[2] ||= (e) => i.value.vatId = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[D, i.value.vatId]])]), R("label", vv, [R("span", null, n(J(f)("rechnungswerk", "Steuernummer")), 1), W(R("input", {
								"onUpdate:modelValue": t[3] ||= (e) => i.value.taxNumber = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[D, i.value.taxNumber]])])]),
							R("div", yv, [
								R("label", bv, [R("span", null, n(J(f)("rechnungswerk", "Ansprechpartner")), 1), W(R("input", {
									"onUpdate:modelValue": t[4] ||= (e) => i.value.contactPerson = e,
									class: "rw-input",
									type: "text"
								}, null, 512), [[D, i.value.contactPerson]])]),
								R("label", xv, [R("span", null, n(J(f)("rechnungswerk", "Telefon")), 1), W(R("input", {
									"onUpdate:modelValue": t[5] ||= (e) => i.value.contactPhone = e,
									class: "rw-input",
									type: "text"
								}, null, 512), [[D, i.value.contactPhone]])]),
								R("label", Sv, [R("span", null, n(J(f)("rechnungswerk", "Kontakt-E-Mail")), 1), W(R("input", {
									"onUpdate:modelValue": t[6] ||= (e) => i.value.contactEmail = e,
									class: "rw-input",
									type: "email"
								}, null, 512), [[D, i.value.contactEmail]])])
							]),
							R("p", Cv, n(J(f)("rechnungswerk", "Ansprechpartner und Kontaktdaten erscheinen auf jeder Rechnung (für Rückfragen des Kunden).")), 1)
						]),
						R("section", wv, [
							R("h3", null, n(J(f)("rechnungswerk", "Bankverbindung")), 1),
							R("div", Tv, [R("label", Ev, [R("span", null, n(J(f)("rechnungswerk", "IBAN")), 1), W(R("input", {
								"onUpdate:modelValue": t[7] ||= (e) => i.value.iban = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[D, i.value.iban]])]), R("label", Dv, [R("span", null, n(J(f)("rechnungswerk", "BIC")), 1), W(R("input", {
								"onUpdate:modelValue": t[8] ||= (e) => i.value.bic = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[D, i.value.bic]])])]),
							R("label", Ov, [R("span", null, n(J(f)("rechnungswerk", "Bankname")), 1), W(R("input", {
								"onUpdate:modelValue": t[9] ||= (e) => i.value.bankName = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[D, i.value.bankName]])]),
							q(J(Ct), {
								type: "switch",
								modelValue: i.value.girocodeEnabled,
								disabled: !i.value.iban && !i.value.girocodeEnabled,
								"onUpdate:modelValue": t[10] ||= (e) => {
									i.value && (i.value.girocodeEnabled = e);
								}
							}, {
								default: P(() => [k(n(J(f)("rechnungswerk", "Girocode (Bezahl-QR-Code) auf Rechnungen anzeigen")), 1)]),
								_: 1
							}, 8, ["modelValue", "disabled"]),
							R("p", kv, n(J(f)("rechnungswerk", "Druckt einen EPC-QR-Code neben die Bankverbindung: Kunden scannen ihn mit der Banking-App, Empfänger, Betrag und Verwendungszweck sind vorausgefüllt. Erscheint nur auf Rechnungen mit positivem Betrag, nicht auf Stornobelegen.")), 1)
						]),
						R("section", Av, [
							R("h3", null, n(J(f)("rechnungswerk", "Branding")), 1),
							R("div", jv, [R("span", null, n(J(f)("rechnungswerk", "Akzentfarbe")), 1), R("div", Mv, [q(J(wt), {
								modelValue: C.value,
								advancedFields: "",
								"onUpdate:modelValue": E
							}, {
								default: P(() => [R("button", {
									type: "button",
									class: "rw-accent__trigger",
									"aria-label": J(f)("rechnungswerk", "Akzentfarbe") + ": " + C.value.toUpperCase(),
									style: y(w.value)
								}, n(C.value.toUpperCase()), 13, Nv)]),
								_: 1
							}, 8, ["modelValue"]), i.value.accentColor ? (p(), I(J(Y), {
								key: 0,
								variant: "tertiary",
								onClick: t[11] ||= (e) => i.value.accentColor = null
							}, {
								default: P(() => [k(n(J(f)("rechnungswerk", "Zurücksetzen")), 1)]),
								_: 1
							})) : T("", !0)])]),
							R("div", Pv, [
								R("table", Fv, [R("thead", null, [R("tr", { style: y(w.value) }, [...t[45] ||= [
									R("th", null, "Beschreibung", -1),
									R("th", { class: "num" }, "Menge", -1),
									R("th", { class: "num" }, "Einzelpreis", -1),
									R("th", { class: "num" }, "Betrag", -1)
								]], 4)]), t[46] ||= R("tbody", null, [R("tr", null, [
									R("td", null, "Beratungsleistung"),
									R("td", { class: "num" }, "2"),
									R("td", { class: "num" }, "95,00 €"),
									R("td", { class: "num" }, "190,00 €")
								])], -1)]),
								R("p", Iv, n(J(f)("rechnungswerk", "So erscheint die Kopfzeile der Positionstabelle auf der Rechnung.")), 1),
								re.value ? (p(), K("p", Lv, n(J(f)("rechnungswerk", "Auf dieser Farbe wäre weiße Schrift zu blass, deshalb steht sie schwarz auf der Rechnung. Die Farbe selbst bleibt unverändert.")), 1)) : T("", !0)
							]),
							R("div", Rv, [
								R("span", null, n(J(f)("rechnungswerk", "Firmenlogo")), 1),
								R("div", zv, [i.value.logoFileId ? (p(), K("img", {
									key: 0,
									src: U.value,
									alt: J(f)("rechnungswerk", "Firmenlogo"),
									class: "rw-logo__preview"
								}, null, 8, Bv)) : (p(), K("span", Vv, n(J(f)("rechnungswerk", "Kein Logo gewählt")), 1)), R("div", Hv, [q(J(Y), {
									disabled: fe.value,
									onClick: Me
								}, {
									default: P(() => [k(n(i.value.logoFileId ? J(f)("rechnungswerk", "Logo ändern") : J(f)("rechnungswerk", "Logo wählen")), 1)]),
									_: 1
								}, 8, ["disabled"]), i.value.logoFileId ? (p(), I(J(Y), {
									key: 0,
									variant: "tertiary",
									disabled: fe.value,
									onClick: Ne
								}, {
									default: P(() => [k(n(J(f)("rechnungswerk", "Entfernen")), 1)]),
									_: 1
								}, 8, ["disabled"])) : T("", !0)])]),
								R("p", Uv, n(J(f)("rechnungswerk", "Wird oben auf der Rechnung angezeigt. PNG, JPEG oder GIF.")), 1)
							])
						]),
						R("section", Wv, [
							R("h3", null, n(J(f)("rechnungswerk", "Rechnungsnummer")), 1),
							R("label", Gv, [R("span", null, n(J(f)("rechnungswerk", "Format")), 1), W(R("input", {
								"onUpdate:modelValue": t[12] ||= (e) => i.value.numberFormat = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[D, i.value.numberFormat]])]),
							R("p", Kv, [
								k(n(J(f)("rechnungswerk", "Platzhalter: {YYYY} Jahr, {YY} Jahr 2-stellig, {MM} Monat, {DD} Tag, {####} fortlaufender Zähler.")) + " ", 1),
								t[47] ||= R("br", null, null, -1),
								k(" " + n(J(f)("rechnungswerk", "Vorschau: {preview}", { preview: me.value })), 1)
							]),
							R("div", qv, [
								R("span", null, n(J(f)("rechnungswerk", "Nummernkreis")), 1),
								q(J(Ct), {
									type: "radio",
									name: "rw-reset-mode",
									value: "yearly",
									modelValue: i.value.numberResetMode,
									"onUpdate:modelValue": Ee
								}, {
									default: P(() => [k(n(J(f)("rechnungswerk", "Jährlich zurücksetzen (Zähler startet jedes Jahr neu bei 1)")), 1)]),
									_: 1
								}, 8, ["modelValue"]),
								q(J(Ct), {
									type: "radio",
									name: "rw-reset-mode",
									value: "continuous",
									modelValue: i.value.numberResetMode,
									"onUpdate:modelValue": Ee
								}, {
									default: P(() => [k(n(J(f)("rechnungswerk", "Fortlaufend (Zähler läuft über Jahre durch)")), 1)]),
									_: 1
								}, 8, ["modelValue"])
							]),
							R("p", Jv, n(J(f)("rechnungswerk", "Bei „Jährlich zurücksetzen“ muss das Format eine Jahreskomponente ({YYYY} oder {YY}) enthalten, sonst entstehen doppelte Rechnungsnummern. „Fortlaufend“ kommt ohne Jahr aus.")), 1)
						]),
						R("section", Yv, [
							R("h3", null, n(J(f)("rechnungswerk", "Angebotsnummer")), 1),
							R("label", Xv, [R("span", null, n(J(f)("rechnungswerk", "Format")), 1), W(R("input", {
								"onUpdate:modelValue": t[13] ||= (e) => i.value.quoteNumberFormat = e,
								class: "rw-input",
								type: "text",
								placeholder: "AN-{YYYY}-{####}"
							}, null, 512), [[D, i.value.quoteNumberFormat]])]),
							R("p", Zv, [
								k(n(J(f)("rechnungswerk", "Eigener, von den Rechnungen unabhängiger Nummernkreis. Platzhalter: {YYYY} Jahr, {YY} Jahr 2-stellig, {MM} Monat, {DD} Tag, {####} fortlaufender Zähler.")) + " ", 1),
								t[48] ||= R("br", null, null, -1),
								k(" " + n(J(f)("rechnungswerk", "Vorschau: {preview}", { preview: he.value })), 1)
							]),
							R("div", Qv, [
								R("span", null, n(J(f)("rechnungswerk", "Nummernkreis")), 1),
								q(J(Ct), {
									type: "radio",
									name: "rw-quote-reset-mode",
									value: "yearly",
									modelValue: i.value.quoteNumberResetMode,
									"onUpdate:modelValue": Oe
								}, {
									default: P(() => [k(n(J(f)("rechnungswerk", "Jährlich zurücksetzen (Zähler startet jedes Jahr neu bei 1)")), 1)]),
									_: 1
								}, 8, ["modelValue"]),
								q(J(Ct), {
									type: "radio",
									name: "rw-quote-reset-mode",
									value: "continuous",
									modelValue: i.value.quoteNumberResetMode,
									"onUpdate:modelValue": Oe
								}, {
									default: P(() => [k(n(J(f)("rechnungswerk", "Fortlaufend (Zähler läuft über Jahre durch)")), 1)]),
									_: 1
								}, 8, ["modelValue"])
							]),
							R("p", $v, n(J(f)("rechnungswerk", "Angebote haben keine gesetzliche Nummernkreis-Pflicht; Lücken sind erlaubt. Bei „Jährlich zurücksetzen“ muss das Format dennoch eine Jahreskomponente enthalten.")), 1)
						]),
						R("section", ey, [
							R("h3", null, n(J(f)("rechnungswerk", "PDF-Dateiname")), 1),
							R("label", ty, [R("span", null, n(J(f)("rechnungswerk", "Schema")), 1), W(R("input", {
								"onUpdate:modelValue": t[14] ||= (e) => i.value.fileNameFormat = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[D, i.value.fileNameFormat]])]),
							R("p", ny, [
								k(n(J(f)("rechnungswerk", "Gilt für Download, Kundenmail und DATEV-Mail. Platzhalter: {nummer} Rechnungsnummer, {YYYY}/{MM}/{DD} Rechnungsdatum, {kunde} Kundenname, {typ} Rechnung/Storno. {nummer} ist Pflicht.")) + " ", 1),
								t[49] ||= R("br", null, null, -1),
								k(" " + n(J(f)("rechnungswerk", "Vorschau: {preview}", { preview: ge.value })), 1)
							])
						]),
						R("section", ry, [
							R("h3", null, n(J(f)("rechnungswerk", "Steuer")), 1),
							q(J(Ct), {
								type: "switch",
								modelValue: i.value.smallBusiness,
								"onUpdate:modelValue": be
							}, {
								default: P(() => [k(n(J(f)("rechnungswerk", "Kleinunternehmer nach §19 UStG (kein USt-Ausweis)")), 1)]),
								_: 1
							}, 8, ["modelValue"]),
							i.value.smallBusiness ? (p(), K("label", iy, [
								R("span", null, n(J(f)("rechnungswerk", "Hinweistext auf der Rechnung (§ 19 UStG)")), 1),
								W(R("textarea", {
									"onUpdate:modelValue": t[15] ||= (e) => i.value.smallBusinessNote = e,
									class: "rw-input",
									rows: "2",
									placeholder: J(Bc)
								}, null, 8, ay), [[D, i.value.smallBusinessNote]]),
								R("span", oy, n(J(f)("rechnungswerk", "Erscheint bei aktiviertem Kleinunternehmer-Status auf der Rechnung. Leer lassen für den Standardtext.")), 1)
							])) : T("", !0),
							i.value.smallBusiness ? T("", !0) : (p(), K("label", sy, [R("span", null, n(J(f)("rechnungswerk", "Standard-USt-Satz")), 1), W(R("select", {
								"onUpdate:modelValue": t[16] ||= (e) => i.value.defaultTaxRateBp = e,
								class: "rw-input"
							}, [(p(!0), K(G, null, S(J(zc), (e) => (p(), K("option", {
								key: e,
								value: e
							}, n(J(nl)(e)), 9, cy))), 128))], 512), [[
								ce,
								i.value.defaultTaxRateBp,
								void 0,
								{ number: !0 }
							]])]))
						]),
						R("section", ly, [
							R("h3", null, n(J(f)("rechnungswerk", "Zahlung")), 1),
							R("label", uy, [R("span", null, n(J(f)("rechnungswerk", "Standard-Zahlungsziel (Tage)")), 1), W(R("input", {
								"onUpdate:modelValue": t[17] ||= (e) => i.value.defaultPaymentTermDays = e,
								class: "rw-input",
								type: "number",
								min: "0",
								step: "1",
								placeholder: "14"
							}, null, 512), [[
								D,
								i.value.defaultPaymentTermDays,
								void 0,
								{ number: !0 }
							]])]),
							R("p", dy, n(J(f)("rechnungswerk", "Wird bei neuen Rechnungen als Zahlungsziel vorbelegt. Leer lassen für kein Standardziel.")), 1),
							R("label", fy, [R("span", null, n(J(f)("rechnungswerk", "Mahnabstand (Tage)")), 1), W(R("input", {
								"onUpdate:modelValue": t[18] ||= (e) => i.value.dunningIntervalDays = e,
								class: "rw-input",
								type: "number",
								min: "1",
								step: "1",
								placeholder: "7"
							}, null, 512), [[
								D,
								i.value.dunningIntervalDays,
								void 0,
								{ number: !0 }
							]])]),
							R("p", py, n(J(f)("rechnungswerk", "Abstand zwischen den Mahnstufen, gerechnet ab dem Fälligkeitsdatum der jeweiligen Rechnung. Der tägliche Mahnlauf schlägt danach eine Stufe vor — versendet wird nie automatisch. Leer lassen für 7 Tage.")), 1),
							R("label", my, [R("span", null, n(J(f)("rechnungswerk", "Zahlungsfrist der Mahnung (Tage)")), 1), W(R("input", {
								"onUpdate:modelValue": t[19] ||= (e) => i.value.dunningDueDays = e,
								class: "rw-input",
								type: "number",
								min: "1",
								step: "1",
								placeholder: "7"
							}, null, 512), [[
								D,
								i.value.dunningDueDays,
								void 0,
								{ number: !0 }
							]])]),
							R("p", hy, n(J(f)("rechnungswerk", "Neue Frist, die das Mahnschreiben setzt („zahlbar bis“). Nicht zu verwechseln mit dem Zahlungsziel der Rechnung. Leer lassen für 7 Tage.")), 1),
							R("div", gy, [
								R("label", _y, [R("span", null, n(J(f)("rechnungswerk", "Mahngebühr Stufe 1 (€)")), 1), W(R("input", {
									"onUpdate:modelValue": t[20] ||= (e) => oe.value = e,
									class: "rw-input",
									type: "text",
									inputmode: "decimal",
									placeholder: "0,00"
								}, null, 512), [[D, oe.value]])]),
								R("label", vy, [R("span", null, n(J(f)("rechnungswerk", "Mahngebühr Stufe 2 (€)")), 1), W(R("input", {
									"onUpdate:modelValue": t[21] ||= (e) => z.value = e,
									class: "rw-input",
									type: "text",
									inputmode: "decimal",
									placeholder: "0,00"
								}, null, 512), [[D, z.value]])]),
								R("label", yy, [R("span", null, n(J(f)("rechnungswerk", "Mahngebühr Stufe 3 (€)")), 1), W(R("input", {
									"onUpdate:modelValue": t[22] ||= (e) => se.value = e,
									class: "rw-input",
									type: "text",
									inputmode: "decimal",
									placeholder: "0,00"
								}, null, 512), [[D, se.value]])])
							]),
							R("p", by, n(J(f)("rechnungswerk", "Pauschale je Stufe, wird auf dem Mahnschreiben ausgewiesen und zum Rechnungsbetrag addiert. Leer oder 0 bedeutet: keine Gebühr.")), 1)
						]),
						R("section", xy, [
							R("h3", null, n(J(f)("rechnungswerk", "Versand")), 1),
							R("label", Sy, [R("span", null, n(J(f)("rechnungswerk", "DATEV-Upload-Mail")), 1), W(R("input", {
								"onUpdate:modelValue": t[23] ||= (e) => i.value.datevUploadMail = e,
								class: "rw-input",
								type: "email"
							}, null, 512), [[D, i.value.datevUploadMail]])]),
							q(J(Ct), {
								type: "switch",
								modelValue: i.value.datevAutoSend,
								disabled: !i.value.datevUploadMail,
								"onUpdate:modelValue": Se
							}, {
								default: P(() => [k(n(J(f)("rechnungswerk", "E-Rechnung beim Festschreiben automatisch an DATEV senden")), 1)]),
								_: 1
							}, 8, ["modelValue", "disabled"]),
							R("p", Cy, n(J(f)("rechnungswerk", "Sendet bei jedem Festschreiben automatisch eine E-Mail mit der ZUGFeRD-PDF an die DATEV-Upload-Mail.")), 1),
							R("div", wy, [R("label", Ty, [R("span", null, n(J(f)("rechnungswerk", "Absender-Name")), 1), W(R("input", {
								"onUpdate:modelValue": t[24] ||= (e) => i.value.smtpFromName = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[D, i.value.smtpFromName]])]), R("label", Ey, [R("span", null, n(J(f)("rechnungswerk", "Absender-E-Mail")), 1), W(R("input", {
								"onUpdate:modelValue": t[25] ||= (e) => i.value.smtpFromEmail = e,
								class: "rw-input",
								type: "email"
							}, null, 512), [[D, i.value.smtpFromEmail]])])])
						]),
						R("section", Dy, [
							R("h3", null, n(J(f)("rechnungswerk", "Ablage in Nextcloud")), 1),
							R("div", Oy, [R("span", null, n(J(f)("rechnungswerk", "Zielordner")), 1), R("div", ky, [
								o.value ? (p(), K("span", Ay, n(o.value), 1)) : (p(), K("span", jy, n(J(f)("rechnungswerk", "Kein Ordner gewählt")), 1)),
								q(J(Y), {
									disabled: c.value,
									onClick: Ae
								}, {
									default: P(() => [k(n(o.value ? J(f)("rechnungswerk", "Ordner ändern") : J(f)("rechnungswerk", "Ordner wählen")), 1)]),
									_: 1
								}, 8, ["disabled"]),
								o.value ? (p(), I(J(Y), {
									key: 2,
									variant: "tertiary",
									disabled: c.value,
									onClick: je
								}, {
									default: P(() => [k(n(J(f)("rechnungswerk", "Entfernen")), 1)]),
									_: 1
								}, 8, ["disabled"])) : T("", !0)
							])]),
							q(J(Ct), {
								type: "switch",
								modelValue: i.value.archiveEnabled,
								disabled: !i.value.archiveFolderId,
								"onUpdate:modelValue": we
							}, {
								default: P(() => [k(n(J(f)("rechnungswerk", "ZUGFeRD-PDF beim Festschreiben automatisch im Zielordner ablegen")), 1)]),
								_: 1
							}, 8, ["modelValue", "disabled"]),
							R("label", My, [R("span", null, n(J(f)("rechnungswerk", "Unterordner (optional)")), 1), W(R("input", {
								"onUpdate:modelValue": t[26] ||= (e) => i.value.archiveSubfolder = e,
								class: "rw-input",
								type: "text",
								placeholder: J(f)("rechnungswerk", "z. B. {YYYY}")
							}, null, 8, Ny), [[D, i.value.archiveSubfolder]])]),
							R("p", Py, [
								k(n(J(f)("rechnungswerk", "Platzhalter: {YYYY} Jahr, {MM} Monat, {DD} Tag (Rechnungsdatum). Unterordner werden bei Bedarf angelegt. Vorhandene Dateien werden nie überschrieben.")) + " ", 1),
								t[50] ||= R("br", null, null, -1),
								k(" " + n(J(f)("rechnungswerk", "Komfort-Ablage für den Team-Zugriff. Kein revisionssicheres Archiv, die GoBD-Archivierung erfolgt über DATEV bzw. Steuerberater.")), 1)
							])
						]),
						R("section", Fy, [
							R("h3", null, n(J(f)("rechnungswerk", "Eigenes SMTP-Konto (optional)")), 1),
							R("p", Iy, n(J(f)("rechnungswerk", "Ohne eigenes Konto wird der globale Nextcloud-Mailserver genutzt. Mit eigenem Konto gehen Rechnungs-Mails über diesen Server – nutze ein Konto, das die Absenderadresse besitzt (SPF/DMARC).")), 1),
							R("div", Ly, [
								R("label", Ry, [R("span", null, n(J(f)("rechnungswerk", "Server (Host)")), 1), W(R("input", {
									"onUpdate:modelValue": t[27] ||= (e) => i.value.smtpHost = e,
									class: "rw-input",
									type: "text",
									placeholder: "smtp.example.com"
								}, null, 512), [[D, i.value.smtpHost]])]),
								R("label", zy, [R("span", null, n(J(f)("rechnungswerk", "Port")), 1), W(R("input", {
									"onUpdate:modelValue": t[28] ||= (e) => i.value.smtpPort = e,
									class: "rw-input",
									type: "number",
									placeholder: "587"
								}, null, 512), [[
									D,
									i.value.smtpPort,
									void 0,
									{ number: !0 }
								]])]),
								R("label", By, [R("span", null, n(J(f)("rechnungswerk", "Verschlüsselung")), 1), W(R("select", {
									"onUpdate:modelValue": t[29] ||= (e) => i.value.smtpSecurity = e,
									class: "rw-input"
								}, [
									t[51] ||= R("option", { value: "starttls" }, "STARTTLS", -1),
									t[52] ||= R("option", { value: "ssl" }, "SSL/TLS", -1),
									R("option", Vy, n(J(f)("rechnungswerk", "Keine")), 1)
								], 512), [[ce, i.value.smtpSecurity]])])
							]),
							R("div", Hy, [R("label", Uy, [R("span", null, n(J(f)("rechnungswerk", "Benutzer")), 1), W(R("input", {
								"onUpdate:modelValue": t[30] ||= (e) => i.value.smtpUser = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[D, i.value.smtpUser]])]), R("label", Wy, [R("span", null, n(J(f)("rechnungswerk", "Passwort")), 1), W(R("input", {
								"onUpdate:modelValue": t[31] ||= (e) => B.value = e,
								class: "rw-input",
								type: "password",
								placeholder: i.value.smtpPasswordSet ? J(f)("rechnungswerk", "•••••••• (gespeichert, leer lassen)") : ""
							}, null, 8, Gy), [[D, B.value]])])]),
							R("div", Ky, [q(J(Y), {
								disabled: !i.value.smtpHost || V.value,
								onClick: Fe
							}, {
								default: P(() => [k(n(J(f)("rechnungswerk", "Verbindung testen")), 1)]),
								_: 1
							}, 8, ["disabled"]), ue.value ? (p(), K("span", {
								key: 0,
								class: O(["smtp-test__result", de.value ? "rw-ok" : "rw-err"])
							}, n(ue.value), 3)) : T("", !0)])
						]),
						R("section", qy, [
							R("h3", null, n(J(f)("rechnungswerk", "DATEV-Rückmeldung (IMAP, optional)")), 1),
							R("p", Jy, n(J(f)("rechnungswerk", "DATEV bestätigt hochgeladene Belege per Antwort-Mail an die Absenderadresse. Mit diesem IMAP-Konto wird das Postfach periodisch geprüft und der Status (gesendet → bestätigt) automatisch gesetzt. In der Regel dasselbe Postfach wie der SMTP-Absender.")), 1),
							R("div", Yy, [
								R("label", Xy, [R("span", null, n(J(f)("rechnungswerk", "Server (Host)")), 1), W(R("input", {
									"onUpdate:modelValue": t[32] ||= (e) => i.value.imapHost = e,
									class: "rw-input",
									type: "text",
									placeholder: "imap.example.com"
								}, null, 512), [[D, i.value.imapHost]])]),
								R("label", Zy, [R("span", null, n(J(f)("rechnungswerk", "Port")), 1), W(R("input", {
									"onUpdate:modelValue": t[33] ||= (e) => i.value.imapPort = e,
									class: "rw-input",
									type: "number",
									placeholder: "993"
								}, null, 512), [[
									D,
									i.value.imapPort,
									void 0,
									{ number: !0 }
								]])]),
								R("label", Qy, [R("span", null, n(J(f)("rechnungswerk", "Verschlüsselung")), 1), W(R("select", {
									"onUpdate:modelValue": t[34] ||= (e) => i.value.imapSecurity = e,
									class: "rw-input"
								}, [...t[53] ||= [
									R("option", { value: "ssl" }, "SSL/TLS", -1),
									R("option", { value: "starttls" }, "STARTTLS", -1),
									R("option", { value: "tls" }, "TLS", -1)
								]], 512), [[ce, i.value.imapSecurity]])])
							]),
							R("div", $y, [R("label", eb, [R("span", null, n(J(f)("rechnungswerk", "Benutzer")), 1), W(R("input", {
								"onUpdate:modelValue": t[35] ||= (e) => i.value.imapUser = e,
								class: "rw-input",
								type: "text"
							}, null, 512), [[D, i.value.imapUser]])]), R("label", tb, [R("span", null, n(J(f)("rechnungswerk", "Passwort")), 1), W(R("input", {
								"onUpdate:modelValue": t[36] ||= (e) => le.value = e,
								class: "rw-input",
								type: "password",
								placeholder: i.value.imapPasswordSet ? J(f)("rechnungswerk", "•••••••• (gespeichert, leer lassen)") : ""
							}, null, 8, nb), [[D, le.value]])])]),
							q(J(Ct), {
								modelValue: i.value.imapCleanup,
								disabled: !i.value.imapHost,
								"onUpdate:modelValue": t[37] ||= (e) => i.value.imapCleanup = e
							}, {
								default: P(() => [k(n(J(f)("rechnungswerk", "Bestätigte DATEV-Quittungen nach Verarbeitung in den Papierkorb verschieben (nur eigene, bestätigte Mails)")), 1)]),
								_: 1
							}, 8, ["modelValue", "disabled"])
						]),
						R("section", rb, [
							R("h3", null, n(J(f)("rechnungswerk", "Standardtexte")), 1),
							R("p", ib, n(J(f)("rechnungswerk", "Anrede-, Einleitungs- und Schlusstexte werden jetzt als Textbausteine verwaltet – getrennt für Rechnungen und Angebote, mit mehreren Vorlagen je Textbereich.")), 1),
							q(J(Y), { onClick: a }, {
								icon: P(() => [q(no, { size: 20 })]),
								default: P(() => [k(" " + n(J(f)("rechnungswerk", "Textbausteine verwalten")), 1)]),
								_: 1
							})
						]),
						R("section", ab, [
							R("h3", null, n(J(f)("rechnungswerk", "Zugriff & Administration")), 1),
							R("p", ob, n(J(f)("rechnungswerk", "Lege fest, wer RechnungsWerk nutzen darf. Nextcloud-Server-Administratoren sind immer Admin.")), 1),
							R("div", sb, [
								R("span", cb, n(J(f)("rechnungswerk", "App-Administratoren")), 1),
								R("p", lb, n(J(f)("rechnungswerk", "Dürfen Firmendaten, Nummernkreis, DATEV und den Zugriff festlegen.")), 1),
								q(J(gt), {
									modelValue: A.value,
									"onUpdate:modelValue": t[38] ||= (e) => A.value = e,
									options: N.value,
									loading: F.value,
									multiple: !0,
									keepOpen: "",
									label: "displayName",
									placeholder: J(f)("rechnungswerk", "Name eingeben, um Nutzer oder Gruppe zu suchen\xA0…"),
									onSearch: ve
								}, {
									"no-options": P(() => [k(n(pe.value), 1)]),
									_: 1
								}, 8, [
									"modelValue",
									"options",
									"loading",
									"placeholder"
								])
							]),
							R("div", ub, [
								R("span", db, n(J(f)("rechnungswerk", "Berechtigte Nutzer")), 1),
								R("p", fb, n(J(f)("rechnungswerk", "Dürfen Rechnungen anlegen, sehen, herunterladen und versenden.")), 1),
								q(J(gt), {
									modelValue: j.value,
									"onUpdate:modelValue": t[39] ||= (e) => j.value = e,
									options: N.value,
									loading: F.value,
									multiple: !0,
									keepOpen: "",
									label: "displayName",
									placeholder: J(f)("rechnungswerk", "Name eingeben, um Nutzer oder Gruppe zu suchen\xA0…"),
									onSearch: ve
								}, {
									"no-options": P(() => [k(n(pe.value), 1)]),
									_: 1
								}, 8, [
									"modelValue",
									"options",
									"loading",
									"placeholder"
								])
							])
						]),
						R("div", pb, [q(J(Y), {
							variant: "primary",
							disabled: J(r).saving || ie.value,
							onClick: Pe
						}, {
							icon: P(() => [q(q_, { size: 20 })]),
							default: P(() => [k(" " + n(J(f)("rechnungswerk", "Speichern")), 1)]),
							_: 1
						}, 8, ["disabled"])])
					])) : T("", !0),
					q(Jd, {
						open: u.value,
						name: J(f)("rechnungswerk", "Kleinunternehmer §19 aktivieren"),
						message: J(f)("rechnungswerk", "Damit werden künftige Rechnungen ohne Umsatzsteuer ausgewiesen (§19 UStG). Bestehende festgeschriebene Rechnungen bleiben unverändert. Fortfahren?"),
						confirmLabel: J(f)("rechnungswerk", "Aktivieren"),
						onClose: t[40] ||= (e) => u.value = !1,
						onConfirm: xe
					}, null, 8, [
						"open",
						"name",
						"message",
						"confirmLabel"
					]),
					q(Jd, {
						open: d.value,
						name: J(f)("rechnungswerk", "Automatischen DATEV-Versand aktivieren"),
						message: J(f)("rechnungswerk", "Ab sofort wird bei jedem Festschreiben automatisch eine E-Mail mit der E-Rechnung an die hinterlegte DATEV-Upload-Mail gesendet. Fortfahren?"),
						confirmLabel: J(f)("rechnungswerk", "Aktivieren"),
						onClose: t[41] ||= (e) => d.value = !1,
						onConfirm: Ce
					}, null, 8, [
						"open",
						"name",
						"message",
						"confirmLabel"
					]),
					q(Jd, {
						open: m.value,
						name: J(f)("rechnungswerk", "Automatische Ablage aktivieren"),
						message: J(f)("rechnungswerk", "Ab sofort wird bei jedem Festschreiben die ZUGFeRD-PDF automatisch im gewählten Ordner abgelegt. Alle Personen mit Zugriff auf den Ordner können die Rechnungen sehen. Fortfahren?"),
						confirmLabel: J(f)("rechnungswerk", "Aktivieren"),
						onClose: t[42] ||= (e) => m.value = !1,
						onConfirm: Te
					}, null, 8, [
						"open",
						"name",
						"message",
						"confirmLabel"
					]),
					q(Jd, {
						open: h.value,
						name: J(f)("rechnungswerk", "Nummernkreis auf „Fortlaufend“ stellen"),
						message: J(f)("rechnungswerk", "Der Zähler läuft dann dauerhaft weiter und wird nicht mehr jährlich zurückgesetzt. Das Format darf ohne Jahreskomponente auskommen. Der Modus wirkt sich auf alle künftig festgeschriebenen Rechnungen aus. Fortfahren?"),
						confirmLabel: J(f)("rechnungswerk", "Fortlaufend aktivieren"),
						onClose: t[43] ||= (e) => h.value = !1,
						onConfirm: De
					}, null, 8, [
						"open",
						"name",
						"message",
						"confirmLabel"
					]),
					q(Jd, {
						open: g.value,
						name: J(f)("rechnungswerk", "Angebots-Nummernkreis auf „Fortlaufend“ stellen"),
						message: J(f)("rechnungswerk", "Der Angebots-Zähler läuft dann dauerhaft weiter und wird nicht mehr jährlich zurückgesetzt. Das Format darf ohne Jahreskomponente auskommen. Fortfahren?"),
						confirmLabel: J(f)("rechnungswerk", "Fortlaufend aktivieren"),
						onClose: t[44] ||= (e) => g.value = !1,
						onConfirm: ke
					}, null, 8, [
						"open",
						"name",
						"message",
						"confirmLabel"
					])
				]));
			}
		}), [["__scopeId", "data-v-c0f15d40"]])
	}
], hb = Vr({
	history: lr(),
	routes: mb
});
//#endregion
//#region src/main.js
document.addEventListener("DOMContentLoaded", () => {
	let e = F(Lo);
	e.use(Ht()), e.use(hb), e.use(Oe, { themes: { tooltip: { delay: {
		show: 100,
		hide: 0
	} } } }), e.mount(".app-rechnungswerk");
});
//#endregion
