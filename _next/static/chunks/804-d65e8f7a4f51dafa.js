(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[804], {
    9771: function(e, t, n) {
        "use strict";
        n.d(t, {
            r: function() {
                return r
            }
        });
        let r = (e, t, n) => {
            let r = t - e;
            return ((n - e) % r + r) % r + e
        }
    },
    7002: function(e) {
        e.exports = {
            style: {
                fontFamily: "'__Gruppo_d8e682', '__Gruppo_Fallback_d8e682'",
                fontWeight: 400,
                fontStyle: "normal"
            },
            className: "__className_d8e682"
        }
    },
    1172: function(e, t, n) {
        "use strict";
        n.d(t, {
            w_: function() {
                return s
            }
        });
        var r = n(2265)
          , o = {
            color: void 0,
            size: void 0,
            className: void 0,
            style: void 0,
            attr: void 0
        }
          , i = r.createContext && r.createContext(o)
          , l = function() {
            return (l = Object.assign || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }
            ).apply(this, arguments)
        }
          , c = function(e, t) {
            var n = {};
            for (var r in e)
                Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
                    0 > t.indexOf(r[o]) && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
            return n
        };
        function s(e) {
            return function(t) {
                return r.createElement(u, l({
                    attr: l({}, e.attr)
                }, t), function e(t) {
                    return t && t.map(function(t, n) {
                        return r.createElement(t.tag, l({
                            key: n
                        }, t.attr), e(t.child))
                    })
                }(e.child))
            }
        }
        function u(e) {
            var t = function(t) {
                var n, o = e.attr, i = e.size, s = e.title, u = c(e, ["attr", "size", "title"]), f = i || t.size || "1em";
                return t.className && (n = t.className),
                e.className && (n = (n ? n + " " : "") + e.className),
                r.createElement("svg", l({
                    stroke: "currentColor",
                    fill: "currentColor",
                    strokeWidth: "0"
                }, t.attr, o, u, {
                    className: n,
                    style: l(l({
                        color: e.color || t.color
                    }, t.style), e.style),
                    height: f,
                    width: f,
                    xmlns: "http://www.w3.org/2000/svg"
                }), s && r.createElement("title", null, s), e.children)
            };
            return void 0 !== i ? r.createElement(i.Consumer, null, function(e) {
                return t(e)
            }) : t(o)
        }
    },
    9804: function(e, t, n) {
        "use strict";
        n.d(t, {
            p: function() {
                return l
            }
        });
        var r = n(4132)
          , o = n(2265)
          , i = n(5968);
        function l(e) {
            let t = (0,
            o.useRef)(0)
              , {isStatic: n} = (0,
            o.useContext)(i._);
            (0,
            o.useEffect)( () => {
                if (n)
                    return;
                let o = ({timestamp: n, delta: r}) => {
                    t.current || (t.current = n),
                    e(n - t.current, r)
                }
                ;
                return r.Z_.update(o, !0),
                () => r.qY.update(o)
            }
            , [e])
        }
    },
    609: function(e, t, n) {
        "use strict";
        n.d(t, {
            c: function() {
                return c
            }
        });
        var r = n(2265)
          , o = n(5818)
          , i = n(5968)
          , l = n(961);
        function c(e) {
            let t = (0,
            l.h)( () => (0,
            o.B)(e))
              , {isStatic: n} = (0,
            r.useContext)(i._);
            if (n) {
                let[,n] = (0,
                r.useState)(e);
                (0,
                r.useEffect)( () => t.on("change", n), [])
            }
            return t
        }
    },
    977: function(e, t, n) {
        "use strict";
        n.d(t, {
            f: function() {
                return l
            },
            p: function() {
                return i
            }
        });
        var r = n(5735)
          , o = n(538);
        function i(e, t) {
            (0,
            o.L)( () => {
                if ((0,
                r.i)(e))
                    return t(e.get()),
                    e.on("change", t)
            }
            , [e, t])
        }
        function l(e, t, n) {
            (0,
            o.L)( () => {
                let r = e.map(e => e.on("change", t));
                return () => {
                    r.forEach(e => e()),
                    n()
                }
            }
            )
        }
    },
    1448: function(e, t, n) {
        "use strict";
        let r, o;
        n.d(t, {
            v: function() {
                return T
            }
        });
        let i = new WeakMap;
        function l({target: e, contentRect: t, borderBoxSize: n}) {
            var r;
            null === (r = i.get(e)) || void 0 === r || r.forEach(r => {
                r({
                    target: e,
                    contentSize: t,
                    get size() {
                        return function(e, t) {
                            if (t) {
                                let {inlineSize: e, blockSize: n} = t[0];
                                return {
                                    width: e,
                                    height: n
                                }
                            }
                            return e instanceof SVGElement && "getBBox"in e ? e.getBBox() : {
                                width: e.offsetWidth,
                                height: e.offsetHeight
                            }
                        }(e, n)
                    }
                })
            }
            )
        }
        function c(e) {
            e.forEach(l)
        }
        let s = new Set
          , u = e => "function" == typeof e
          , f = (e, t, n) => t - e == 0 ? 1 : (n - e) / (t - e)
          , a = () => ({
            current: 0,
            offset: [],
            progress: 0,
            scrollLength: 0,
            targetOffset: 0,
            targetLength: 0,
            containerLength: 0,
            velocity: 0
        })
          , d = () => ({
            time: 0,
            x: a(),
            y: a()
        })
          , g = {
            x: {
                length: "Width",
                position: "Left"
            },
            y: {
                length: "Height",
                position: "Top"
            }
        };
        function h(e, t, n, r) {
            var o;
            let i = n[t]
              , {length: l, position: c} = g[t]
              , s = i.current
              , u = n.time;
            i.current = e["scroll" + c],
            i.scrollLength = e["scroll" + l] - e["client" + l],
            i.offset.length = 0,
            i.offset[0] = 0,
            i.offset[1] = i.scrollLength,
            i.progress = f(0, i.scrollLength, i.current);
            let a = r - u;
            i.velocity = a > 50 ? 0 : (o = i.current - s,
            a ? 1e3 / a * o : 0)
        }
        let p = e => e
          , y = (e, t, n) => -n * e + n * t + e;
        function m(e, t) {
            let n = e[e.length - 1];
            for (let r = 1; r <= t; r++) {
                let o = f(0, t, r);
                e.push(y(n, 1, o))
            }
        }
        function v(e) {
            let t = [0];
            return m(t, e - 1),
            t
        }
        let w = e => "number" == typeof e
          , E = e => Array.isArray(e) && !w(e[0]);
        var x = n(9771);
        let O = (e, t, n) => Math.min(Math.max(n, e), t)
          , b = {
            All: [[0, 0], [1, 1]]
        }
          , L = e => "string" == typeof e
          , W = {
            start: 0,
            center: .5,
            end: 1
        };
        function _(e, t, n=0) {
            let r = 0;
            if (void 0 !== W[e] && (e = W[e]),
            L(e)) {
                let t = parseFloat(e);
                e.endsWith("px") ? r = t : e.endsWith("%") ? e = t / 100 : e.endsWith("vw") ? r = t / 100 * document.documentElement.clientWidth : e.endsWith("vh") ? r = t / 100 * document.documentElement.clientHeight : e = t
            }
            return w(e) && (r = t * e),
            n + r
        }
        let S = [0, 0]
          , z = {
            x: 0,
            y: 0
        }
          , A = new WeakMap
          , N = new WeakMap
          , k = new WeakMap
          , B = e => e === document.documentElement ? window : e;
        var P = n(5818)
          , j = n(961)
          , H = n(2265)
          , C = n(538);
        let M = () => ({
            scrollX: (0,
            P.B)(0),
            scrollY: (0,
            P.B)(0),
            scrollXProgress: (0,
            P.B)(0),
            scrollYProgress: (0,
            P.B)(0)
        });
        function T({container: e, target: t, layoutEffect: n=!0, ...l}={}) {
            let a = (0,
            j.h)(M);
            return (n ? C.L : H.useEffect)( () => (function(e, t={}) {
                var {container: n=document.documentElement} = t
                  , l = function(e, t) {
                    var n = {};
                    for (var r in e)
                        Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
                            0 > t.indexOf(r[o]) && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
                    return n
                }(t, ["container"]);
                let a = k.get(n);
                a || (a = new Set,
                k.set(n, a));
                let g = function(e, t, n, r={}) {
                    var o;
                    let i = r.axis || "y";
                    return {
                        measure: () => (function(e, t=e, n) {
                            if (n.x.targetOffset = 0,
                            n.y.targetOffset = 0,
                            t !== e) {
                                let r = t;
                                for (; r && r != e; )
                                    n.x.targetOffset += r.offsetLeft,
                                    n.y.targetOffset += r.offsetTop,
                                    r = r.offsetParent
                            }
                            n.x.targetLength = t === e ? t.scrollWidth : t.clientWidth,
                            n.y.targetLength = t === e ? t.scrollHeight : t.clientHeight,
                            n.x.containerLength = e.clientWidth,
                            n.y.containerLength = e.clientHeight
                        }
                        )(e, r.target, n),
                        update: t => {
                            h(e, "x", n, t),
                            h(e, "y", n, t),
                            n.time = t,
                            (r.offset || r.target) && function(e, t, n) {
                                let {offset: r=b.All} = n
                                  , {target: o=e, axis: i="y"} = n
                                  , l = "y" === i ? "height" : "width"
                                  , c = o !== e ? function(e, t) {
                                    let n = {
                                        x: 0,
                                        y: 0
                                    }
                                      , r = e;
                                    for (; r && r !== t; )
                                        if (r instanceof HTMLElement)
                                            n.x += r.offsetLeft,
                                            n.y += r.offsetTop,
                                            r = r.offsetParent;
                                        else if (r instanceof SVGGraphicsElement && "getBBox"in r) {
                                            let {top: e, left: t} = r.getBBox();
                                            for (n.x += t,
                                            n.y += e; r && "svg" !== r.tagName; )
                                                r = r.parentNode
                                        }
                                    return n
                                }(o, e) : z
                                  , s = o === e ? {
                                    width: e.scrollWidth,
                                    height: e.scrollHeight
                                } : {
                                    width: o.clientWidth,
                                    height: o.clientHeight
                                }
                                  , u = {
                                    width: e.clientWidth,
                                    height: e.clientHeight
                                };
                                t[i].offset.length = 0;
                                let a = !t[i].interpolate
                                  , d = r.length;
                                for (let e = 0; e < d; e++) {
                                    let n = function(e, t, n, r) {
                                        let o = Array.isArray(e) ? e : S
                                          , i = 0;
                                        return w(e) ? o = [e, e] : L(e) && (o = (e = e.trim()).includes(" ") ? e.split(" ") : [e, W[e] ? e : "0"]),
                                        _(o[0], n, r) - _(o[1], t)
                                    }(r[e], u[l], s[l], c[i]);
                                    a || n === t[i].interpolatorOffsets[e] || (a = !0),
                                    t[i].offset[e] = n
                                }
                                a && (t[i].interpolate = function(e, t=v(e.length), n=p) {
                                    let r = e.length
                                      , o = r - t.length;
                                    return o > 0 && m(t, o),
                                    o => {
                                        var i;
                                        let l = 0;
                                        for (; l < r - 2 && !(o < t[l + 1]); l++)
                                            ;
                                        let c = O(0, 1, f(t[l], t[l + 1], o));
                                        return c = (i = l,
                                        E(n) ? n[(0,
                                        x.r)(0, n.length, i)] : n)(c),
                                        y(e[l], e[l + 1], c)
                                    }
                                }(v(d), t[i].offset),
                                t[i].interpolatorOffsets = [...t[i].offset]),
                                t[i].progress = t[i].interpolate(t[i].current)
                            }(e, n, r)
                        }
                        ,
                        notify: u(t) ? () => t(n) : (o = n[i],
                        t.pause(),
                        t.forEachNative( (e, {easing: t}) => {
                            var n, r;
                            if (e.updateDuration)
                                t || (e.easing = p),
                                e.updateDuration(1);
                            else {
                                let o = {
                                    duration: 1e3
                                };
                                t || (o.easing = "linear"),
                                null === (r = null === (n = e.effect) || void 0 === n ? void 0 : n.updateTiming) || void 0 === r || r.call(n, o)
                            }
                        }
                        ),
                        () => {
                            t.currentTime = o.progress
                        }
                        )
                    }
                }(n, e, d(), l);
                if (a.add(g),
                !A.has(n)) {
                    let e = () => {
                        let e = performance.now();
                        for (let e of a)
                            e.measure();
                        for (let t of a)
                            t.update(e);
                        for (let e of a)
                            e.notify()
                    }
                    ;
                    A.set(n, e);
                    let t = B(n);
                    window.addEventListener("resize", e, {
                        passive: !0
                    }),
                    n !== document.documentElement && N.set(n, u(n) ? (s.add(n),
                    o || (o = () => {
                        let e = {
                            width: window.innerWidth,
                            height: window.innerHeight
                        }
                          , t = {
                            target: window,
                            size: e,
                            contentSize: e
                        };
                        s.forEach(e => e(t))
                    }
                    ,
                    window.addEventListener("resize", o)),
                    () => {
                        s.delete(n),
                        !s.size && o && (o = void 0)
                    }
                    ) : function(e, t) {
                        var n, o, l;
                        r || "undefined" == typeof ResizeObserver || (r = new ResizeObserver(c));
                        let s = ("string" == typeof (n = e) ? o ? (null !== (l = o[n]) && void 0 !== l || (o[n] = document.querySelectorAll(n)),
                        n = o[n]) : n = document.querySelectorAll(n) : n instanceof Element && (n = [n]),
                        Array.from(n || []));
                        return s.forEach(e => {
                            let n = i.get(e);
                            n || (n = new Set,
                            i.set(e, n)),
                            n.add(t),
                            null == r || r.observe(e)
                        }
                        ),
                        () => {
                            s.forEach(e => {
                                let n = i.get(e);
                                null == n || n.delete(t),
                                (null == n ? void 0 : n.size) || null == r || r.unobserve(e)
                            }
                            )
                        }
                    }(n, e)),
                    t.addEventListener("scroll", e, {
                        passive: !0
                    })
                }
                let P = A.get(n)
                  , j = requestAnimationFrame(P);
                return () => {
                    var t;
                    "function" != typeof e && e.stop(),
                    cancelAnimationFrame(j);
                    let r = k.get(n);
                    if (!r || (r.delete(g),
                    r.size))
                        return;
                    let o = A.get(n);
                    A.delete(n),
                    o && (B(n).removeEventListener("scroll", o),
                    null === (t = N.get(n)) || void 0 === t || t(),
                    window.removeEventListener("resize", o))
                }
            }
            )( ({x: e, y: t}) => {
                a.scrollX.set(e.current),
                a.scrollXProgress.set(e.progress),
                a.scrollY.set(t.current),
                a.scrollYProgress.set(t.progress)
            }
            , {
                ...l,
                container: (null == e ? void 0 : e.current) || void 0,
                target: (null == t ? void 0 : t.current) || void 0
            }), []),
            a
        }
    },
    3622: function(e, t, n) {
        "use strict";
        n.d(t, {
            q: function() {
                return u
            }
        });
        var r = n(2265)
          , o = n(5735)
          , i = n(609)
          , l = n(977)
          , c = n(5968)
          , s = n(2057);
        function u(e, t={}) {
            let {isStatic: n} = (0,
            r.useContext)(c._)
              , u = (0,
            r.useRef)(null)
              , f = (0,
            i.c)((0,
            o.i)(e) ? e.get() : e);
            return (0,
            r.useMemo)( () => f.attach( (e, r) => n ? r(e) : (u.current && u.current.stop(),
            u.current = (0,
            s.jt)({
                keyframes: [f.get(), e],
                velocity: f.getVelocity(),
                type: "spring",
                ...t,
                onUpdate: r
            }),
            f.get())), [JSON.stringify(t)]),
            (0,
            l.p)(e, e => f.set(parseFloat(e))),
            f
        }
    },
    2622: function(e, t, n) {
        "use strict";
        n.d(t, {
            H: function() {
                return f
            }
        });
        var r = n(3245);
        let o = e => "object" == typeof e && e.mix
          , i = e => o(e) ? e.mix : void 0;
        var l = n(609)
          , c = n(977)
          , s = n(4132)
          , u = n(961);
        function f(e, t, n, o) {
            let l = "function" == typeof t ? t : function(...e) {
                let t = !Array.isArray(e[0])
                  , n = t ? 0 : -1
                  , o = e[0 + n]
                  , l = e[1 + n]
                  , c = e[2 + n]
                  , s = e[3 + n]
                  , u = (0,
                r.s)(l, c, {
                    mixer: i(c[0]),
                    ...s
                });
                return t ? u(o) : u
            }(t, n, o);
            return Array.isArray(e) ? a(e, l) : a([e], ([e]) => l(e))
        }
        function a(e, t) {
            let n = (0,
            u.h)( () => []);
            return function(e, t) {
                let n = (0,
                l.c)(t())
                  , r = () => n.set(t());
                return r(),
                (0,
                c.f)(e, () => s.Z_.update(r, !1, !0), () => s.qY.update(r)),
                n
            }(e, () => {
                n.length = 0;
                let r = e.length;
                for (let t = 0; t < r; t++)
                    n[t] = e[t].get();
                return t(n)
            }
            )
        }
    },
    8552: function(e, t, n) {
        "use strict";
        n.d(t, {
            T: function() {
                return i
            }
        });
        var r = n(2265)
          , o = n(609);
        function i(e) {
            let t = (0,
            o.c)(e.getVelocity());
            return (0,
            r.useEffect)( () => e.on("velocityChange", e => {
                t.set(e)
            }
            ), [e]),
            t
        }
    }
}]);
