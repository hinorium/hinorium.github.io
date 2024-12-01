(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[931], {
    6927: function(e, t, s) {
        Promise.resolve().then(s.bind(s, 9571))
    },
    9571: function(e, t, s) {
        "use strict";
        s.r(t),
        s.d(t, {
            default: function() {
                return W
            }
        });
        var i = s(7437)
          , r = s(1448)
          , n = s(2622)
          , a = s(5824)
          , l = s(1396)
          , o = s.n(l)
          , c = s(3159)
          , m = s(4606)
          , h = s(6691)
          , d = s.n(h)
          , p = s(2265)
          , y = s(3225)
          , g = s(6408)
          , x = s(52);
        function f() {
            let e = !1
              , t = []
              , s = new Set
              , i = {
                subscribe: e => (s.add(e),
                () => void s.delete(e)),
                start(i, r) {
                    if (!e)
                        return new Promise(e => {
                            t.push({
                                animation: [i, r],
                                resolve: e
                            })
                        }
                        );
                    {
                        let e = [];
                        return s.forEach(t => {
                            e.push((0,
                            g.d5)(t, i, {
                                transitionOverride: r
                            }))
                        }
                        ),
                        Promise.all(e)
                    }
                },
                set: t => ((0,
                y.k)(e, "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."),
                s.forEach(e => {
                    (0,
                    x.gg)(e, t)
                }
                )),
                stop() {
                    s.forEach(e => {
                        (0,
                        g.p_)(e)
                    }
                    )
                },
                mount: () => (e = !0,
                t.forEach( ({animation: e, resolve: t}) => {
                    i.start(...e).then(t)
                }
                ),
                () => {
                    e = !1,
                    i.stop()
                }
                )
            };
            return i
        }
        var u = s(961);
        let v = function() {
            let e = (0,
            u.h)(f);
            return (0,
            p.useEffect)(e.mount, []),
            e
        };
        var j = Object.defineProperty
          , b = new Map
          , w = new WeakMap
          , N = 0
          , O = void 0;
        function E(e) {
            let {text: t, className: s} = e
              , r = v()
              , {ref: n, inView: l} = function({threshold: e, delay: t, trackVisibility: s, rootMargin: i, root: r, triggerOnce: n, skip: a, initialInView: l, fallbackInView: o, onChange: c}={}) {
                var m;
                let[h,d] = p.useState(null)
                  , y = p.useRef()
                  , [g,x] = p.useState({
                    inView: !!l,
                    entry: void 0
                });
                y.current = c,
                p.useEffect( () => {
                    let l;
                    if (!a && h)
                        return l = function(e, t, s={}, i=O) {
                            if (void 0 === window.IntersectionObserver && void 0 !== i) {
                                let r = e.getBoundingClientRect();
                                return t(i, {
                                    isIntersecting: i,
                                    target: e,
                                    intersectionRatio: "number" == typeof s.threshold ? s.threshold : 0,
                                    time: 0,
                                    boundingClientRect: r,
                                    intersectionRect: r,
                                    rootBounds: r
                                }),
                                () => {}
                            }
                            let {id: r, observer: n, elements: a} = function(e) {
                                let t = Object.keys(e).sort().filter(t => void 0 !== e[t]).map(t => {
                                    var s;
                                    return `${t}_${"root" === t ? (s = e.root) ? (w.has(s) || (N += 1,
                                    w.set(s, N.toString())),
                                    w.get(s)) : "0" : e[t]}`
                                }
                                ).toString()
                                  , s = b.get(t);
                                if (!s) {
                                    let i;
                                    let r = new Map
                                      , n = new IntersectionObserver(t => {
                                        t.forEach(t => {
                                            var s;
                                            let n = t.isIntersecting && i.some(e => t.intersectionRatio >= e);
                                            e.trackVisibility && void 0 === t.isVisible && (t.isVisible = n),
                                            null == (s = r.get(t.target)) || s.forEach(e => {
                                                e(n, t)
                                            }
                                            )
                                        }
                                        )
                                    }
                                    ,e);
                                    i = n.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]),
                                    s = {
                                        id: t,
                                        observer: n,
                                        elements: r
                                    },
                                    b.set(t, s)
                                }
                                return s
                            }(s)
                              , l = a.get(e) || [];
                            return a.has(e) || a.set(e, l),
                            l.push(t),
                            n.observe(e),
                            function() {
                                l.splice(l.indexOf(t), 1),
                                0 === l.length && (a.delete(e),
                                n.unobserve(e)),
                                0 === a.size && (n.disconnect(),
                                b.delete(r))
                            }
                        }(h, (e, t) => {
                            x({
                                inView: e,
                                entry: t
                            }),
                            y.current && y.current(e, t),
                            t.isIntersecting && n && l && (l(),
                            l = void 0)
                        }
                        , {
                            root: r,
                            rootMargin: i,
                            threshold: e,
                            trackVisibility: s,
                            delay: t
                        }, o),
                        () => {
                            l && l()
                        }
                }
                , [Array.isArray(e) ? e.toString() : e, h, r, i, n, a, s, o, t]);
                let f = null == (m = g.entry) ? void 0 : m.target
                  , u = p.useRef();
                h || !f || n || a || u.current === f || (u.current = f,
                x({
                    inView: !!l,
                    entry: void 0
                }));
                let v = [d, g.inView, g.entry];
                return v.ref = v[0],
                v.inView = v[1],
                v.entry = v[2],
                v
            }({
                threshold: .5,
                triggerOnce: !0
            });
            (0,
            p.useEffect)( () => {
                l && r.start("visible"),
                l || r.start("hidden")
            }
            , [r, l]);
            let o = {
                hidden: {},
                visible: {}
            }
              , c = {
                hidden: {
                    opacity: 0,
                    y: "0.25em"
                },
                visible: {
                    opacity: 1,
                    y: "0em",
                    transition: {
                        duration: .5,
                        ease: [.2, .65, .3, .9]
                    }
                }
            };
            return (0,
            i.jsx)("h2", {
                className: s || "text-6xl",
                "aria-label": t,
                role: "heading",
                children: t.split(" ").map( (e, t) => (0,
                i.jsx)(a.E.span, {
                    className: "inline-block whitespace-nowrap mr-2",
                    ref: n,
                    "aria-hidden": "true",
                    initial: "hidden",
                    animate: r,
                    variants: o,
                    transition: {
                        delayChildren: .25 * t,
                        staggerChildren: .05
                    },
                    children: e.split("").map( (e, t) => (0,
                    i.jsx)(a.E.span, {
                        className: "inline-block whitespace-nowrap",
                        "aria-hidden": "true",
                        variants: c,
                        children: e
                    }, t))
                }, t))
            })
        }
        p.Component;
        var k = s(6440)
          , L = s.n(k)
          , z = s(4275)
          , S = s.n(z);
        function C() {
            return (C = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var s = arguments[t];
                    for (var i in s)
                        Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
                }
                return e
            }
            ).apply(this, arguments)
        }
        var M = (0,
        p.forwardRef)(function(e, t) {
            var s = e.color
              , i = e.size
              , r = void 0 === i ? 24 : i
              , n = function(e, t) {
                if (null == e)
                    return {};
                var s, i, r = function(e, t) {
                    if (null == e)
                        return {};
                    var s, i, r = {}, n = Object.keys(e);
                    for (i = 0; i < n.length; i++)
                        s = n[i],
                        t.indexOf(s) >= 0 || (r[s] = e[s]);
                    return r
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    for (i = 0; i < n.length; i++)
                        s = n[i],
                        !(t.indexOf(s) >= 0) && Object.prototype.propertyIsEnumerable.call(e, s) && (r[s] = e[s])
                }
                return r
            }(e, ["color", "size"]);
            return p.createElement("svg", C({
                ref: t,
                xmlns: "http://www.w3.org/2000/svg",
                width: r,
                height: r,
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: void 0 === s ? "currentColor" : s,
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, n), p.createElement("circle", {
                cx: "12",
                cy: "12",
                r: "10"
            }), p.createElement("line", {
                x1: "2",
                y1: "12",
                x2: "22",
                y2: "12"
            }), p.createElement("path", {
                d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
            }))
        });
        function T() {
            return (T = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var s = arguments[t];
                    for (var i in s)
                        Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
                }
                return e
            }
            ).apply(this, arguments)
        }
        M.propTypes = {
            color: S().string,
            size: S().oneOfType([S().string, S().number])
        },
        M.displayName = "Globe";
        var R = (0,
        p.forwardRef)(function(e, t) {
            var s = e.color
              , i = e.size
              , r = void 0 === i ? 24 : i
              , n = function(e, t) {
                if (null == e)
                    return {};
                var s, i, r = function(e, t) {
                    if (null == e)
                        return {};
                    var s, i, r = {}, n = Object.keys(e);
                    for (i = 0; i < n.length; i++)
                        s = n[i],
                        t.indexOf(s) >= 0 || (r[s] = e[s]);
                    return r
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    for (i = 0; i < n.length; i++)
                        s = n[i],
                        !(t.indexOf(s) >= 0) && Object.prototype.propertyIsEnumerable.call(e, s) && (r[s] = e[s])
                }
                return r
            }(e, ["color", "size"]);
            return p.createElement("svg", T({
                ref: t,
                xmlns: "http://www.w3.org/2000/svg",
                width: r,
                height: r,
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: void 0 === s ? "currentColor" : s,
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, n), p.createElement("path", {
                d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
            }))
        });
        function P() {
            return (P = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var s = arguments[t];
                    for (var i in s)
                        Object.prototype.hasOwnProperty.call(s, i) && (e[i] = s[i])
                }
                return e
            }
            ).apply(this, arguments)
        }
        R.propTypes = {
            color: S().string,
            size: S().oneOfType([S().string, S().number])
        },
        R.displayName = "Shield";
        var A = (0,
        p.forwardRef)(function(e, t) {
            var s = e.color
              , i = e.size
              , r = void 0 === i ? 24 : i
              , n = function(e, t) {
                if (null == e)
                    return {};
                var s, i, r = function(e, t) {
                    if (null == e)
                        return {};
                    var s, i, r = {}, n = Object.keys(e);
                    for (i = 0; i < n.length; i++)
                        s = n[i],
                        t.indexOf(s) >= 0 || (r[s] = e[s]);
                    return r
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    for (i = 0; i < n.length; i++)
                        s = n[i],
                        !(t.indexOf(s) >= 0) && Object.prototype.propertyIsEnumerable.call(e, s) && (r[s] = e[s])
                }
                return r
            }(e, ["color", "size"]);
            return p.createElement("svg", P({
                ref: t,
                xmlns: "http://www.w3.org/2000/svg",
                width: r,
                height: r,
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: void 0 === s ? "currentColor" : s,
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, n), p.createElement("polygon", {
                points: "12 2 2 7 12 12 22 7 12 2"
            }), p.createElement("polyline", {
                points: "2 17 12 22 22 17"
            }), p.createElement("polyline", {
                points: "2 12 12 17 22 12"
            }))
        });
        A.propTypes = {
            color: S().string,
            size: S().oneOfType([S().string, S().number])
        },
        A.displayName = "Layers";
        var B = s(1203)
          , W = () => {
            let {scrollYProgress: e} = (0,
            r.v)()
              , t = (0,
            n.H)(e, [0, .5, 1], [.7, .9, 1])
              , s = (0,
            n.H)(e, [0, .5, 1], [0, 2, 0]);
            return (0,
            p.useEffect)( () => {
                L().init(document.querySelectorAll("#tilt"), {
                    speed: 400,
                    glare: !0,
                    "max-glare": .1,
                    gyroscope: !0,
                    scale: 1.1,
                    perspective: 1e3
                })
            }
            , []),
            (0,
            i.jsx)(i.Fragment, {
                children: (0,
                i.jsxs)(a.E.section, {
                    "data-scroll-section": "true",
                    className: "flex min-h-full flex-col",
                    children: [(0,
                    i.jsxs)("div", {
                        className: "lg:flex relative isolate",
                        children: [(0,
                        i.jsx)("div", {
                            className: "absolute inset-x-0 -top-40 transform-gpu overflow-hidden blur-[100px] sm:-top-80",
                            "aria-hidden": "true",
                            children: (0,
                            i.jsx)("div", {
                                className: "relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#e22551] via-[#df5898] to-[#d32642] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]",
                                style: {
                                    clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
                                }
                            })
                        }), (0,
                        i.jsx)("div", {
                            className: "absolute inset-x-0 transform-gpu overflow-hidden blur-[100px]",
                            "aria-hidden": "true",
                            children: (0,
                            i.jsx)("div", {
                                className: "relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#e22551] to-[#ba3f5c] opacity-10 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]",
                                style: {
                                    clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
                                }
                            })
                        })]
                    }), (0,
                    i.jsxs)("section", {
                        className: "min-h-screen flex flex-col justify-center items-center",
                        children: [(0,
                        i.jsx)(p.Suspense, {
                            fallback: (0,
                            i.jsx)("div", {
                                children: "Loading..."
                            })
                        }), (0,
                        i.jsxs)("div", {
                            className: "h-screen w-full grid grid-cols-1 lg:grid-cols-2",
                            children: [(0,
                            i.jsx)("div", {
                                className: "hidden lg:block",
                                children: (0,
                                i.jsx)("div", {
                                    className: "relative flex-none overflow-hidden px-6 lg:pointer-events-none h-full lg:inset-0 lg:z-40 lg:flex lg:px-0",
                                    children: (0,
                                    i.jsx)("div", {
                                        className: "relative flex w-full lg:pointer-events-auto lg:min-w-[32rem] lg:overflow-y-auto lg:overflow-x-hidden flex justify-center w-full",
                                        children: (0,
                                        i.jsxs)("div", {
                                            className: "mx-auto max-w-lg lg:mx-0 lg:flex lg:w-[34rem] lg:max-w-none lg:flex-col lg:before:flex-1 lg:before:pt-6",
                                            children: [(0,
                                            i.jsx)("div", {
                                                className: "pb-16 pt-20 sm:pb-20 sm:pt-32 lg:py-20",
                                                children: (0,
                                                i.jsxs)("div", {
                                                    className: "relative",
                                                    children: [(0,
                                                    i.jsx)(D, {}), (0,
                                                    i.jsxs)("h1", {
                                                        className: "mt-14 text-4xl font-bold lg:text-5xl text-white",
                                                        children: ["Download Codex for", " ", (0,
                                                        i.jsx)("span", {
                                                            className: "text-gradient",
                                                            children: "Windows"
                                                        }), "."]
                                                    }), (0,
                                                    i.jsx)("p", {
                                                        className: "mt-6 text-neutral-400",
                                                        children: "Supported low-end PCs and let you enjoy the stable and smooth. Unleashes your graphics performance with exclusive graphics technology, supports high frame rate and 4K-quality graphics. New keyboard & mouse plan restores the PC experience for you. Take control in the game with ease."
                                                    }), (0,
                                                    i.jsx)("div", {
                                                        className: "flex gap-3",
                                                        children: (0,
                                                        i.jsx)(o(), {
                                                            href: "/windows",
                                                            children: (0,
                                                            i.jsxs)("button", {
                                                                className: "mt-10 primary-button button-padding gap-x-2 w-full justify-center lg:w-auto flex flex-row items-center",
                                                                children: ["Download for Windows ", (0,
                                                                i.jsx)(c.zTP, {
                                                                    size: 19
                                                                })]
                                                            })
                                                        })
                                                    })]
                                                })
                                            }), (0,
                                            i.jsx)("div", {
                                                className: "flex flex-1 items-end justify-center pb-4 lg:justify-start lg:pb-6",
                                                children: (0,
                                                i.jsxs)("p", {
                                                    className: "flex items-center flex-row gap-x-1.5 text-[0.8125rem]/6 text-neutral-500",
                                                    children: ["Join the", " ", (0,
                                                    i.jsxs)(o(), {
                                                        className: "text-neutral-400 flex items-center flex-row gap-x-1",
                                                        href: "https://discord.gg/robloxexploits",
                                                        target: "_blank",
                                                        children: [(0,
                                                        i.jsx)(m.KpZ, {
                                                            size: 15
                                                        }), " Discord"]
                                                    })]
                                                })
                                            })]
                                        })
                                    })
                                })
                            }), (0,
                            i.jsxs)("div", {
                                className: "flex justify-center relative min-w-[320px]",
                                children: [(0,
                                i.jsx)("div", {
                                    className: "pointer-events-none absolute inset-0 z-50 overflow-hidden lg:overflow-visible",
                                    children: (0,
                                    i.jsxs)("svg", {
                                        className: "absolute top-0 h-full w-1.5",
                                        "aria-hidden": "true",
                                        children: [(0,
                                        i.jsx)("defs", {
                                            children: (0,
                                            i.jsx)("pattern", {
                                                id: ":S4:",
                                                width: 6,
                                                height: 8,
                                                patternUnits: "userSpaceOnUse",
                                                children: (0,
                                                i.jsx)("path", {
                                                    d: "M0 0H6M0 8H6",
                                                    className: "stroke-sky-900/10 dark:stroke-white/10 xl:stroke-white/10",
                                                    fill: "none"
                                                })
                                            })
                                        }), (0,
                                        i.jsx)("rect", {
                                            width: "100%",
                                            height: "100%",
                                            fill: "url(#:S4:)"
                                        })]
                                    })
                                }), (0,
                                i.jsx)("div", {
                                    className: "w-full h-full justify-center items-center",
                                    children: (0,
                                    i.jsx)("div", {
                                        className: "flex flex-col items-center justify-center xl:max-w-7xl mx-4 text-center h-full",
                                        children: (0,
                                        i.jsxs)("div", {
                                            className: "flex flex-col items-center",
                                            children: [(0,
                                            i.jsxs)("header", {
                                                className: "w-full flex flex-col text-center items-center justify-center mb-10",
                                                children: [(0,
                                                i.jsxs)("h1", {
                                                    className: "z-10 text-5xl font-bold mb-5",
                                                    children: ["Download Codex for ", (0,
                                                    i.jsx)("span", {
                                                        className: "text-gradient",
                                                        children: "Mobile"
                                                    }), "."]
                                                }), (0,
                                                i.jsx)("p", {
                                                    className: "z-10 text-neutral-400 mx-4 xl:w-[600px] xl:mx-0",
                                                    children: "Codex stands out as the premier Roblox script executor, providing unparalleled functionality to effortlessly run scripts for your preferred Roblox games."
                                                })]
                                            }), (0,
                                            i.jsxs)("div", {
                                                className: "grid grid-cols-2 gap-6 mx-4 xl:mx-0 items-center",
                                                children: [(0,
                                                i.jsx)(o(), {
                                                    href: "/android",
                                                    children: (0,
                                                    i.jsxs)("button", {
                                                        className: "backdrop-blur flex flex-col items-center text-center from-transparent to-white/5 shadow-md rounded-md border border-white/5 bg-gradient-to-tr p-[1.9rem] xs:p-[2.5rem] sm:p-[3rem] md:p-[4rem] lg:p-[6rem]",
                                                        id: "tilt",
                                                        children: [(0,
                                                        i.jsx)(c.q2m, {
                                                            className: "text-6xl"
                                                        }), (0,
                                                        i.jsx)("caption", {
                                                            className: "text-sm text-neutral-400 mt-2",
                                                            children: "Android"
                                                        })]
                                                    })
                                                }), (0,
                                                i.jsx)(o(), {
                                                    href: "/ios",
                                                    children: (0,
                                                    i.jsxs)("button", {
                                                        className: "backdrop-blur flex flex-col items-center text-center from-transparent to-white/5 shadow-md rounded-md border border-white/5 bg-gradient-to-tr p-[1.9rem] xs:p-[2.5rem] sm:p-[3rem] md:p-[4rem] lg:p-[6rem]",
                                                        id: "tilt",
                                                        children: [(0,
                                                        i.jsx)(c.oPZ, {
                                                            className: "text-6xl"
                                                        }), (0,
                                                        i.jsx)("caption", {
                                                            className: "text-sm text-neutral-400 mt-2",
                                                            children: "iOS"
                                                        })]
                                                    })
                                                })]
                                            })]
                                        })
                                    })
                                })]
                            }), (0,
                            i.jsx)("div", {
                                className: "grid-lines",
                                children: (0,
                                i.jsx)("div", {
                                    className: "grid"
                                })
                            })]
                        })]
                    }), (0,
                    i.jsxs)(a.E.section, {
                        "data-scroll-section": "true",
                        className: "h-full flex flex-col gap-y-10 items-center justify-center",
                        children: [(0,
                        i.jsx)("div", {
                            className: "flex py-5 border-t border-b border-neutral-800 w-full",
                            children: (0,
                            i.jsx)(B.Z, {
                                "data-scroll": !0,
                                baseVelocity: 2,
                                children: "Codex"
                            })
                        }), (0,
                        i.jsx)(a.E.div, {
                            "data-scroll": !0,
                            style: {
                                scale: t,
                                rotateZ: s
                            },
                            className: "min-h-screen p-0 lg:p-10 xl:p-10 2xl:p-10 md:p-10 sm:p-10",
                            children: (0,
                            i.jsx)("div", {
                                className: "max-w-6xl mx-auto space-y-32",
                                children: (0,
                                i.jsxs)("section", {
                                    className: "md:flex md:space-x-10 items-start",
                                    children: [(0,
                                    i.jsxs)("div", {
                                        className: "xl:w-4/6 w-full leading-snug text-white",
                                        children: [(0,
                                        i.jsx)(a.E.div, {
                                            initial: {
                                                opacity: 0,
                                                y: 50
                                            },
                                            animate: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            transition: {
                                                duration: .7
                                            },
                                            className: "px-4 max-w-xl mx-auto mb-40 sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0",
                                            children: (0,
                                            i.jsxs)("div", {
                                                className: "sm:mt-6 xl:w-2/3 2xl:w-2/3 w-full",
                                                children: [(0,
                                                i.jsxs)("span", {
                                                    className: "flex flex-row gap-x-3 items-center",
                                                    children: [(0,
                                                    i.jsx)(M, {
                                                        style: {
                                                            stroke: "url(#red-gradient)"
                                                        },
                                                        size: 20
                                                    }), (0,
                                                    i.jsx)(E, {
                                                        text: "Unrivaled execution.",
                                                        className: "text-3xl font-custom font-semibold tracking-tight text-white"
                                                    })]
                                                }), (0,
                                                i.jsx)("p", {
                                                    className: "mt-6 text-lg text-gray-400",
                                                    children: "Codex boasts exceptional support for a wide array of essential libraries and scripts, ensuring smooth development and gameplay. Focus on what matters most - having a great time!"
                                                })]
                                            })
                                        }), (0,
                                        i.jsx)(a.E.div, {
                                            initial: {
                                                opacity: 0,
                                                y: 50
                                            },
                                            animate: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            transition: {
                                                duration: .7
                                            },
                                            className: "px-4 max-w-xl mx-auto mb-40 sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0",
                                            children: (0,
                                            i.jsxs)("div", {
                                                className: "sm:mt-6  xl:w-2/3 2xl:w-2/3 w-full",
                                                children: [(0,
                                                i.jsxs)("span", {
                                                    className: "flex flex-row gap-x-3 items-center",
                                                    children: [(0,
                                                    i.jsx)(R, {
                                                        style: {
                                                            stroke: "url(#red-gradient)"
                                                        },
                                                        size: 20
                                                    }), (0,
                                                    i.jsx)(E, {
                                                        text: "Exclusive Script Hub.",
                                                        className: "text-3xl font-custom font-semibold tracking-tight text-white"
                                                    })]
                                                }), (0,
                                                i.jsx)("p", {
                                                    className: "mt-6 text-lg text-gray-400",
                                                    children: "Our regularly updated Script Hub provides a vast selection of games and scripts, saving you the trouble of searching through third-party sites. With Codex, enjoy one-stop access to everything you need."
                                                })]
                                            })
                                        }), (0,
                                        i.jsx)(a.E.div, {
                                            initial: {
                                                opacity: 0,
                                                y: 50
                                            },
                                            animate: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            transition: {
                                                duration: .7
                                            },
                                            className: "px-4 max-w-xl mx-auto mb-40 sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0",
                                            children: (0,
                                            i.jsxs)("div", {
                                                className: "sm:mt-6 xl:w-2/3 2xl:w-2/3 w-full",
                                                children: [(0,
                                                i.jsxs)("span", {
                                                    className: "flex flex-row gap-x-3 items-center",
                                                    children: [(0,
                                                    i.jsx)(A, {
                                                        style: {
                                                            stroke: "url(#red-gradient)"
                                                        },
                                                        size: 20
                                                    }), (0,
                                                    i.jsx)(E, {
                                                        text: "Cross-Platform Compatibility.",
                                                        className: "text-3xl font-custom font-semibold tracking-tight text-white"
                                                    })]
                                                }), (0,
                                                i.jsx)("p", {
                                                    className: "mt-6 text-lg text-gray-400",
                                                    children: "Our products are designed to work seamlessly across various platforms, allowing you to transition from Android & iOS to PC without missing a beat."
                                                })]
                                            })
                                        })]
                                    }), (0,
                                    i.jsx)("div", {
                                        className: "mx-auto justify-center w-2/3 md:sticky flex md:top-48 py-4 text-white",
                                        children: (0,
                                        i.jsx)("div", {
                                            className: "md:absolute opacity-100",
                                            children: (0,
                                            i.jsx)(d(), {
                                                src: "/assets/ios.webp",
                                                alt: "Codex preview",
                                                className: "rounded-lg red-shadow",
                                                width: 600,
                                                height: 400
                                            })
                                        })
                                    })]
                                })
                            })
                        })]
                    })]
                })
            })
        }
        ;
        let D = () => (0,
        i.jsxs)("svg", {
            viewBox: "0 0 881 211",
            fill: "white",
            "aria-hidden": "true",
            className: "pointer-events-none absolute w-[55.0625rem] origin-top-right rotate-[30deg] overflow-visible opacity-70 -right-44 top-14",
            children: [(0,
            i.jsx)("defs", {
                children: (0,
                i.jsx)("filter", {
                    id: ":Rb6mla:",
                    children: (0,
                    i.jsx)("feGaussianBlur", {
                        in: "SourceGraphic",
                        stdDeviation: ".5"
                    })
                })
            }), (0,
            i.jsx)("path", {
                stroke: "white",
                strokeOpacity: "0.2",
                strokeDasharray: 1,
                strokeDashoffset: 1,
                pathLength: 1,
                fill: "transparent",
                d: "M 247,103L261,86L307,104L357,36",
                className: "invisible",
                style: {
                    strokeDashoffset: 0,
                    visibility: "visible"
                }
            }), (0,
            i.jsx)("g", {
                className: "opacity-0",
                style: {
                    opacity: 1
                },
                children: (0,
                i.jsx)("circle", {
                    cx: 247,
                    cy: 103,
                    r: 1,
                    style: {
                        transformOrigin: "15.4375rem 6.4375rem",
                        opacity: 1,
                        transform: "scale(var(--motion-scale))"
                    }
                })
            }), (0,
            i.jsx)("g", {
                className: "opacity-0",
                style: {
                    opacity: 1
                },
                children: (0,
                i.jsx)("circle", {
                    cx: 261,
                    cy: 86,
                    r: 1,
                    style: {
                        transformOrigin: "16.3125rem 5.375rem",
                        opacity: 1,
                        transform: "scale(var(--motion-scale))"
                    }
                })
            }), (0,
            i.jsx)("g", {
                className: "opacity-0",
                style: {
                    opacity: 1
                },
                children: (0,
                i.jsx)("circle", {
                    cx: 307,
                    cy: 104,
                    r: 1,
                    style: {
                        transformOrigin: "19.1875rem 6.5rem",
                        opacity: 1,
                        transform: "scale(var(--motion-scale))"
                    }
                })
            }), (0,
            i.jsx)("g", {
                className: "opacity-0",
                style: {
                    opacity: 1
                },
                children: (0,
                i.jsx)("circle", {
                    cx: 357,
                    cy: 36,
                    r: 1,
                    style: {
                        transformOrigin: "22.3125rem 2.25rem",
                        opacity: 1,
                        transform: "scale(var(--motion-scale))"
                    }
                })
            }), (0,
            i.jsx)("path", {
                stroke: "white",
                strokeOpacity: "0.2",
                strokeDasharray: 1,
                strokeDashoffset: 1,
                pathLength: 1,
                fill: "transparent",
                d: "M 586,120L516,100L491,62L440,107L477,180L516,100",
                className: "invisible",
                style: {
                    strokeDashoffset: 0,
                    visibility: "visible",
                    fill: "rgba(255, 255, 255, 0.02)"
                }
            }), (0,
            i.jsx)("g", {
                className: "opacity-0",
                style: {
                    opacity: 1
                },
                children: (0,
                i.jsx)("circle", {
                    cx: 586,
                    cy: 120,
                    r: 1,
                    style: {
                        transformOrigin: "36.625rem 7.5rem",
                        opacity: 1,
                        transform: "scale(var(--motion-scale))"
                    }
                })
            }), (0,
            i.jsx)("g", {
                className: "opacity-0",
                style: {
                    opacity: 1
                },
                children: (0,
                i.jsx)("circle", {
                    cx: 516,
                    cy: 100,
                    r: 1,
                    style: {
                        transformOrigin: "32.25rem 6.25rem",
                        opacity: 1,
                        transform: "scale(var(--motion-scale))"
                    }
                })
            }), (0,
            i.jsx)("g", {
                className: "opacity-0",
                style: {
                    opacity: 1
                },
                children: (0,
                i.jsx)("circle", {
                    cx: 491,
                    cy: 62,
                    r: 1,
                    style: {
                        transformOrigin: "30.6875rem 3.875rem",
                        opacity: 1,
                        transform: "scale(var(--motion-scale))"
                    }
                })
            }), (0,
            i.jsx)("g", {
                className: "opacity-0",
                style: {
                    opacity: 1
                },
                children: (0,
                i.jsx)("circle", {
                    cx: 440,
                    cy: 107,
                    r: 1,
                    style: {
                        transformOrigin: "27.5rem 6.6875rem",
                        opacity: 1,
                        transform: "scale(var(--motion-scale))"
                    }
                })
            }), (0,
            i.jsx)("g", {
                className: "opacity-0",
                style: {
                    opacity: 1
                },
                children: (0,
                i.jsx)("circle", {
                    cx: 477,
                    cy: 180,
                    r: 1,
                    style: {
                        transformOrigin: "29.8125rem 11.25rem",
                        opacity: 1,
                        transform: "scale(var(--motion-scale))"
                    }
                })
            }), (0,
            i.jsx)("path", {
                stroke: "white",
                strokeOpacity: "0.2",
                strokeDasharray: 1,
                strokeDashoffset: 1,
                pathLength: 1,
                fill: "transparent",
                d: "M 733,100L803,120L879,113L823,164L803,120",
                className: "invisible",
                style: {
                    strokeDashoffset: 0,
                    visibility: "visible",
                    fill: "rgba(255, 255, 255, 0.02)"
                }
            }), (0,
            i.jsx)("g", {
                className: "opacity-0",
                style: {
                    opacity: 1
                },
                children: (0,
                i.jsx)("circle", {
                    cx: 733,
                    cy: 100,
                    r: 1,
                    style: {
                        transformOrigin: "45.8125rem 6.25rem",
                        opacity: 1,
                        transform: "scale(var(--motion-scale))"
                    }
                })
            }), (0,
            i.jsx)("g", {
                className: "opacity-0",
                style: {
                    opacity: 1
                },
                children: (0,
                i.jsx)("circle", {
                    cx: 803,
                    cy: 120,
                    r: 1,
                    style: {
                        transformOrigin: "50.1875rem 7.5rem",
                        opacity: 1,
                        transform: "scale(var(--motion-scale))"
                    }
                })
            }), (0,
            i.jsx)("g", {
                className: "opacity-0",
                style: {
                    opacity: 1
                },
                children: (0,
                i.jsx)("circle", {
                    cx: 879,
                    cy: 113,
                    r: 1,
                    style: {
                        transformOrigin: "54.9375rem 7.0625rem",
                        opacity: 1,
                        transform: "scale(var(--motion-scale))"
                    }
                })
            }), (0,
            i.jsx)("g", {
                className: "opacity-0",
                style: {
                    opacity: 1
                },
                children: (0,
                i.jsx)("circle", {
                    cx: 823,
                    cy: 164,
                    r: 1,
                    style: {
                        transformOrigin: "51.4375rem 10.25rem",
                        opacity: 1,
                        transform: "scale(var(--motion-scale))"
                    }
                })
            }), (0,
            i.jsx)("g", {
                className: "opacity-0",
                style: {
                    opacity: 1
                },
                children: (0,
                i.jsx)("circle", {
                    cx: 4,
                    cy: 4,
                    r: 1,
                    style: {
                        transformOrigin: "0.25rem 0.25rem",
                        opacity: "0.2",
                        transform: "scale(var(--motion-scale))"
                    },
                    filter: "url(#:Rb6mla:)"
                })
            }), (0,
            i.jsx)("g", {
                className: "opacity-0",
                style: {
                    opacity: 1
                },
                children: (0,
                i.jsx)("circle", {
                    cx: 4,
                    cy: 44,
                    r: 1,
                    style: {
                        transformOrigin: "0.25rem 2.75rem",
                        opacity: "0.2",
                        transform: "scale(var(--motion-scale))"
                    }
                })
            }), (0,
            i.jsx)("g", {
                className: "opacity-0",
                style: {
                    opacity: 1
                },
                children: (0,
                i.jsx)("circle", {
                    cx: 36,
                    cy: 22,
                    r: 1,
                    style: {
                        transformOrigin: "2.25rem 1.375rem",
                        opacity: 1,
                        transform: "scale(var(--motion-scale))"
                    }
                })
            }), (0,
            i.jsx)("g", {
                className: "opacity-0",
                style: {
                    opacity: 1
                },
                children: (0,
                i.jsx)("circle", {
                    cx: 50,
                    cy: 146,
                    r: 1,
                    style: {
                        transformOrigin: "3.125rem 9.125rem",
                        opacity: "0.2",
                        transform: "scale(var(--motion-scale))"
                    },
                    filter: "url(#:Rb6mla:)"
                })
            }), (0,
            i.jsx)("g", {
                className: "opacity-0",
                style: {
                    opacity: 1
                },
                children: (0,
                i.jsx)("circle", {
                    cx: 64,
                    cy: 43,
                    r: 1,
                    style: {
                        transformOrigin: "4rem 2.6875rem",
                        opacity: "0.2",
                        transform: "scale(var(--motion-scale))"
                    },
                    filter: "url(#:Rb6mla:)"
                })
            }), (0,
            i.jsx)("g", {
                className: "opacity-0",
                style: {
                    opacity: 1
                },
                children: (0,
                i.jsx)("circle", {
                    cx: 76,
                    cy: 30,
                    r: 1,
                    style: {
                        transformOrigin: "4.75rem 1.875rem",
                        opacity: "0.2",
                        transform: "scale(var(--motion-scale))"
                    }
                })
            }), (0,
            i.jsx)("g", {
                className: "opacity-0",
                style: {
                    opacity: 1
                },
                children: (0,
                i.jsx)("circle", {
                    cx: 101,
                    cy: 116,
                    r: 1,
                    style: {
                        transformOrigin: "6.3125rem 7.25rem",
                        opacity: 1,
                        transform: "scale(var(--motion-scale))"
                    }
                })
            }), (0,
            i.jsx)("g", {
                className: "opacity-0",
                style: {
                    opacity: 1
                },
                children: (0,
                i.jsx)("circle", {
                    cx: 140,
                    cy: 36,
                    r: 1,
                    style: {
                        transformOrigin: "8.75rem 2.25rem",
                        opacity: "0.2",
                        transform: "scale(var(--motion-scale))"
                    }
                })
            }), (0,
            i.jsx)("g", {
                className: "opacity-0",
                style: {
                    opacity: 1
                },
                children: (0,
                i.jsx)("circle", {
                    cx: 149,
                    cy: 134,
                    r: 1,
                    style: {
                        transformOrigin: "9.3125rem 8.375rem",
                        opacity: 1,
                        transform: "scale(var(--motion-scale))"
                    }
                })
            }), (0,
            i.jsx)("g", {
                className: "opacity-0",
                style: {
                    opacity: 1
                },
                children: (0,
                i.jsx)("circle", {
                    cx: 162,
                    cy: 74,
                    r: 1,
                    style: {
                        transformOrigin: "10.125rem 4.625rem",
                        opacity: "0.2",
                        transform: "scale(var(--motion-scale))"
                    }
                })
            }), (0,
            i.jsx)("g", {
                className: "opacity-0",
                style: {
                    opacity: 1
                },
                children: (0,
                i.jsx)("circle", {
                    cx: 171,
                    cy: 96,
                    r: 1,
                    style: {
                        transformOrigin: "10.6875rem 6rem",
                        opacity: "0.2",
                        transform: "scale(var(--motion-scale))"
                    },
                    filter: "url(#:Rb6mla:)"
                })
            }), (0,
            i.jsx)("g", {
                className: "opacity-0",
                style: {
                    opacity: 1
                },
                children: (0,
                i.jsx)("circle", {
                    cx: 210,
                    cy: 56,
                    r: 1,
                    style: {
                        transformOrigin: "13.125rem 3.5rem",
                        opacity: "0.2",
                        transform: "scale(var(--motion-scale))"
                    },
                    filter: "url(#:Rb6mla:)"
                })
            }), (0,
            i.jsx)("g", {
                className: "opacity-0",
                style: {
                    opacity: 1
                },
                children: (0,
                i.jsx)("circle", {
                    cx: 235,
                    cy: 90,
                    r: 1,
                    style: {
                        transformOrigin: "14.6875rem 5.625rem",
                        opacity: 1,
                        transform: "scale(var(--motion-scale))"
                    }
                })
            }), (0,
            i.jsx)("g", {
                className: "opacity-0",
                style: {
                    opacity: 1
                },
                children: (0,
                i.jsx)("circle", {
                    cx: 275,
                    cy: 82,
                    r: 1,
                    style: {
                        transformOrigin: "17.1875rem 5.125rem",
                        opacity: "0.2",
                        transform: "scale(var(--motion-scale))"
                    },
                    filter: "url(#:Rb6mla:)"
                })
            }), (0,
            i.jsx)("g", {
                className: "opacity-0",
                style: {
                    opacity: 1
                },
                children: (0,
                i.jsx)("circle", {
                    cx: 306,
                    cy: 6,
                    r: 1,
                    style: {
                        transformOrigin: "19.125rem 0.375rem",
                        opacity: 1,
                        transform: "scale(var(--motion-scale))"
                    }
                })
            }), (0,
            i.jsx)("g", {
                className: "opacity-0",
                style: {
                    opacity: 1
                },
                children: (0,
                i.jsx)("circle", {
                    cx: 307,
                    cy: 64,
                    r: 1,
                    style: {
                        transformOrigin: "19.1875rem 4rem",
                        opacity: "0.2",
                        transform: "scale(var(--motion-scale))"
                    },
                    filter: "url(#:Rb6mla:)"
                })
            }), (0,
            i.jsx)("g", {
                className: "opacity-0",
                style: {
                    opacity: 1
                },
                children: (0,
                i.jsx)("circle", {
                    cx: 380,
                    cy: 68,
                    r: 1,
                    style: {
                        transformOrigin: "23.75rem 4.25rem",
                        opacity: "0.2",
                        transform: "scale(var(--motion-scale))"
                    }
                })
            }), (0,
            i.jsx)("g", {
                className: "opacity-0",
                style: {
                    opacity: 1
                },
                children: (0,
                i.jsx)("circle", {
                    cx: 380,
                    cy: 108,
                    r: 1,
                    style: {
                        transformOrigin: "23.75rem 6.75rem",
                        opacity: "0.2",
                        transform: "scale(var(--motion-scale))"
                    },
                    filter: "url(#:Rb6mla:)"
                })
            }), (0,
            i.jsx)("g", {
                className: "opacity-0",
                style: {
                    opacity: 1
                },
                children: (0,
                i.jsx)("circle", {
                    cx: 391,
                    cy: 148,
                    r: 1,
                    style: {
                        transformOrigin: "24.4375rem 9.25rem",
                        opacity: "0.2",
                        transform: "scale(var(--motion-scale))"
                    },
                    filter: "url(#:Rb6mla:)"
                })
            }), (0,
            i.jsx)("g", {
                className: "opacity-0",
                style: {
                    opacity: 1
                },
                children: (0,
                i.jsx)("circle", {
                    cx: 405,
                    cy: 18,
                    r: 1,
                    style: {
                        transformOrigin: "25.3125rem 1.125rem",
                        opacity: "0.2",
                        transform: "scale(var(--motion-scale))"
                    }
                })
            }), (0,
            i.jsx)("g", {
                className: "opacity-0",
                style: {
                    opacity: 1
                },
                children: (0,
                i.jsx)("circle", {
                    cx: 412,
                    cy: 86,
                    r: 1,
                    style: {
                        transformOrigin: "25.75rem 5.375rem",
                        opacity: "0.2",
                        transform: "scale(var(--motion-scale))"
                    },
                    filter: "url(#:Rb6mla:)"
                })
            }), (0,
            i.jsx)("g", {
                className: "opacity-0",
                style: {
                    opacity: 1
                },
                children: (0,
                i.jsx)("circle", {
                    cx: 426,
                    cy: 210,
                    r: 1,
                    style: {
                        transformOrigin: "26.625rem 13.125rem",
                        opacity: "0.2",
                        transform: "scale(var(--motion-scale))"
                    },
                    filter: "url(#:Rb6mla:)"
                })
            }), (0,
            i.jsx)("g", {
                className: "opacity-0",
                style: {
                    opacity: 1
                },
                children: (0,
                i.jsx)("circle", {
                    cx: 427,
                    cy: 56,
                    r: 1,
                    style: {
                        transformOrigin: "26.6875rem 3.5rem",
                        opacity: "0.2",
                        transform: "scale(var(--motion-scale))"
                    },
                    filter: "url(#:Rb6mla:)"
                })
            }), (0,
            i.jsx)("g", {
                className: "opacity-0",
                style: {
                    opacity: 1
                },
                children: (0,
                i.jsx)("circle", {
                    cx: 538,
                    cy: 138,
                    r: 1,
                    style: {
                        transformOrigin: "33.625rem 8.625rem",
                        opacity: 1,
                        transform: "scale(var(--motion-scale))"
                    }
                })
            }), (0,
            i.jsx)("g", {
                className: "opacity-0",
                style: {
                    opacity: 1
                },
                children: (0,
                i.jsx)("circle", {
                    cx: 563,
                    cy: 88,
                    r: 1,
                    style: {
                        transformOrigin: "35.1875rem 5.5rem",
                        opacity: "0.2",
                        transform: "scale(var(--motion-scale))"
                    },
                    filter: "url(#:Rb6mla:)"
                })
            }), (0,
            i.jsx)("g", {
                className: "opacity-0",
                style: {
                    opacity: 1
                },
                children: (0,
                i.jsx)("circle", {
                    cx: 611,
                    cy: 154,
                    r: 1,
                    style: {
                        transformOrigin: "38.1875rem 9.625rem",
                        opacity: "0.2",
                        transform: "scale(var(--motion-scale))"
                    },
                    filter: "url(#:Rb6mla:)"
                })
            }), (0,
            i.jsx)("g", {
                className: "opacity-0",
                style: {
                    opacity: 1
                },
                children: (0,
                i.jsx)("circle", {
                    cx: 637,
                    cy: 150,
                    r: 1,
                    style: {
                        transformOrigin: "39.8125rem 9.375rem",
                        opacity: 1,
                        transform: "scale(var(--motion-scale))"
                    }
                })
            }), (0,
            i.jsx)("g", {
                className: "opacity-0",
                style: {
                    opacity: 1
                },
                children: (0,
                i.jsx)("circle", {
                    cx: 651,
                    cy: 146,
                    r: 1,
                    style: {
                        transformOrigin: "40.6875rem 9.125rem",
                        opacity: "0.2",
                        transform: "scale(var(--motion-scale))"
                    }
                })
            }), (0,
            i.jsx)("g", {
                className: "opacity-0",
                style: {
                    opacity: 1
                },
                children: (0,
                i.jsx)("circle", {
                    cx: 682,
                    cy: 70,
                    r: 1,
                    style: {
                        transformOrigin: "42.625rem 4.375rem",
                        opacity: "0.2",
                        transform: "scale(var(--motion-scale))"
                    },
                    filter: "url(#:Rb6mla:)"
                })
            }), (0,
            i.jsx)("g", {
                className: "opacity-0",
                style: {
                    opacity: 1
                },
                children: (0,
                i.jsx)("circle", {
                    cx: 683,
                    cy: 128,
                    r: 1,
                    style: {
                        transformOrigin: "42.6875rem 8rem",
                        opacity: 1,
                        transform: "scale(var(--motion-scale))"
                    }
                })
            }), (0,
            i.jsx)("g", {
                className: "opacity-0",
                style: {
                    opacity: 1
                },
                children: (0,
                i.jsx)("circle", {
                    cx: 781,
                    cy: 82,
                    r: 1,
                    style: {
                        transformOrigin: "48.8125rem 5.125rem",
                        opacity: "0.2",
                        transform: "scale(var(--motion-scale))"
                    },
                    filter: "url(#:Rb6mla:)"
                })
            }), (0,
            i.jsx)("g", {
                className: "opacity-0",
                style: {
                    opacity: 1
                },
                children: (0,
                i.jsx)("circle", {
                    cx: 785,
                    cy: 158,
                    r: 1,
                    style: {
                        transformOrigin: "49.0625rem 9.875rem",
                        opacity: "0.2",
                        transform: "scale(var(--motion-scale))"
                    }
                })
            }), (0,
            i.jsx)("g", {
                className: "opacity-0",
                style: {
                    opacity: 1
                },
                children: (0,
                i.jsx)("circle", {
                    cx: 832,
                    cy: 146,
                    r: 1,
                    style: {
                        transformOrigin: "52rem 9.125rem",
                        opacity: "0.2",
                        transform: "scale(var(--motion-scale))"
                    },
                    filter: "url(#:Rb6mla:)"
                })
            }), (0,
            i.jsx)("g", {
                className: "opacity-0",
                style: {
                    opacity: 1
                },
                children: (0,
                i.jsx)("circle", {
                    cx: 852,
                    cy: 89,
                    r: 1,
                    style: {
                        transformOrigin: "53.25rem 5.5625rem",
                        opacity: 1,
                        transform: "scale(var(--motion-scale))"
                    }
                })
            })]
        })
    },
    1203: function(e, t, s) {
        "use strict";
        s.d(t, {
            Z: function() {
                return g
            }
        });
        var i = s(7437)
          , r = s(7002)
          , n = s.n(r)
          , a = s(2265)
          , l = s(609)
          , o = s(1448)
          , c = s(8552)
          , m = s(3622)
          , h = s(2622)
          , d = s(9804)
          , p = s(5824)
          , y = s(9771);
        function g(e) {
            let {children: t, baseVelocity: s=100} = e
              , r = (0,
            l.c)(0)
              , {scrollY: g} = (0,
            o.v)()
              , x = (0,
            c.T)(g)
              , f = (0,
            m.q)(x, {
                damping: 50,
                stiffness: 400
            })
              , u = (0,
            h.H)(f, [0, 1e3], [0, 5], {
                clamp: !1
            })
              , v = (0,
            h.H)(r, e => "".concat((0,
            y.r)(-20, -45, e), "%"))
              , j = (0,
            a.useRef)(1);
            return (0,
            d.p)( (e, t) => {
                let i = j.current * s * (t / 1e3);
                0 > u.get() ? j.current = -1 : u.get() > 0 && (j.current = 1),
                i += j.current * i * u.get(),
                r.set(r.get() + i)
            }
            ),
            (0,
            i.jsx)("div", {
                className: "parallax",
                children: (0,
                i.jsx)(p.E.div, {
                    className: n().className + " scroller",
                    style: {
                        x: v
                    },
                    children: [...Array(25)].map( (e, s) => (0,
                    i.jsx)("span", {
                        children: t
                    }, s))
                })
            })
        }
    },
    3018: function(e, t, s) {
        "use strict";
        var i = s(1289);
        function r() {}
        function n() {}
        n.resetWarningCache = r,
        e.exports = function() {
            function e(e, t, s, r, n, a) {
                if (a !== i) {
                    var l = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                    throw l.name = "Invariant Violation",
                    l
                }
            }
            function t() {
                return e
            }
            e.isRequired = e;
            var s = {
                array: e,
                bigint: e,
                bool: e,
                func: e,
                number: e,
                object: e,
                string: e,
                symbol: e,
                any: e,
                arrayOf: t,
                element: e,
                elementType: e,
                instanceOf: t,
                node: e,
                objectOf: t,
                oneOf: t,
                oneOfType: t,
                shape: t,
                exact: t,
                checkPropTypes: n,
                resetWarningCache: r
            };
            return s.PropTypes = s,
            s
        }
    },
    4275: function(e, t, s) {
        e.exports = s(3018)()
    },
    1289: function(e) {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    },
    6440: function(e) {
        "use strict";
        var t = function(e, t) {
            if (!(e instanceof t))
                throw TypeError("Cannot call a class as a function")
        }
          , s = function() {
            function e(s) {
                var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (t(this, e),
                !(s instanceof Node))
                    throw "Can't initialize VanillaTilt because " + s + " is not a Node.";
                this.width = null,
                this.height = null,
                this.clientWidth = null,
                this.clientHeight = null,
                this.left = null,
                this.top = null,
                this.gammazero = null,
                this.betazero = null,
                this.lastgammazero = null,
                this.lastbetazero = null,
                this.transitionTimeout = null,
                this.updateCall = null,
                this.event = null,
                this.updateBind = this.update.bind(this),
                this.resetBind = this.reset.bind(this),
                this.element = s,
                this.settings = this.extendSettings(i),
                this.reverse = this.settings.reverse ? -1 : 1,
                this.resetToStart = e.isSettingTrue(this.settings["reset-to-start"]),
                this.glare = e.isSettingTrue(this.settings.glare),
                this.glarePrerender = e.isSettingTrue(this.settings["glare-prerender"]),
                this.fullPageListening = e.isSettingTrue(this.settings["full-page-listening"]),
                this.gyroscope = e.isSettingTrue(this.settings.gyroscope),
                this.gyroscopeSamples = this.settings.gyroscopeSamples,
                this.elementListener = this.getElementListener(),
                this.glare && this.prepareGlare(),
                this.fullPageListening && this.updateClientSize(),
                this.addEventListeners(),
                this.reset(),
                !1 === this.resetToStart && (this.settings.startX = 0,
                this.settings.startY = 0)
            }
            return e.isSettingTrue = function(e) {
                return "" === e || !0 === e || 1 === e
            }
            ,
            e.prototype.getElementListener = function() {
                if (this.fullPageListening)
                    return window.document;
                if ("string" == typeof this.settings["mouse-event-element"]) {
                    var e = document.querySelector(this.settings["mouse-event-element"]);
                    if (e)
                        return e
                }
                return this.settings["mouse-event-element"]instanceof Node ? this.settings["mouse-event-element"] : this.element
            }
            ,
            e.prototype.addEventListeners = function() {
                this.onMouseEnterBind = this.onMouseEnter.bind(this),
                this.onMouseMoveBind = this.onMouseMove.bind(this),
                this.onMouseLeaveBind = this.onMouseLeave.bind(this),
                this.onWindowResizeBind = this.onWindowResize.bind(this),
                this.onDeviceOrientationBind = this.onDeviceOrientation.bind(this),
                this.elementListener.addEventListener("mouseenter", this.onMouseEnterBind),
                this.elementListener.addEventListener("mouseleave", this.onMouseLeaveBind),
                this.elementListener.addEventListener("mousemove", this.onMouseMoveBind),
                (this.glare || this.fullPageListening) && window.addEventListener("resize", this.onWindowResizeBind),
                this.gyroscope && window.addEventListener("deviceorientation", this.onDeviceOrientationBind)
            }
            ,
            e.prototype.removeEventListeners = function() {
                this.elementListener.removeEventListener("mouseenter", this.onMouseEnterBind),
                this.elementListener.removeEventListener("mouseleave", this.onMouseLeaveBind),
                this.elementListener.removeEventListener("mousemove", this.onMouseMoveBind),
                this.gyroscope && window.removeEventListener("deviceorientation", this.onDeviceOrientationBind),
                (this.glare || this.fullPageListening) && window.removeEventListener("resize", this.onWindowResizeBind)
            }
            ,
            e.prototype.destroy = function() {
                clearTimeout(this.transitionTimeout),
                null !== this.updateCall && cancelAnimationFrame(this.updateCall),
                this.element.style.willChange = "",
                this.element.style.transition = "",
                this.element.style.transform = "",
                this.resetGlare(),
                this.removeEventListeners(),
                this.element.vanillaTilt = null,
                delete this.element.vanillaTilt,
                this.element = null
            }
            ,
            e.prototype.onDeviceOrientation = function(e) {
                if (null !== e.gamma && null !== e.beta) {
                    this.updateElementPosition(),
                    this.gyroscopeSamples > 0 && (this.lastgammazero = this.gammazero,
                    this.lastbetazero = this.betazero,
                    null === this.gammazero ? (this.gammazero = e.gamma,
                    this.betazero = e.beta) : (this.gammazero = (e.gamma + this.lastgammazero) / 2,
                    this.betazero = (e.beta + this.lastbetazero) / 2),
                    this.gyroscopeSamples -= 1);
                    var t = this.settings.gyroscopeMaxAngleX - this.settings.gyroscopeMinAngleX
                      , s = this.settings.gyroscopeMaxAngleY - this.settings.gyroscopeMinAngleY
                      , i = t / this.width
                      , r = s / this.height
                      , n = e.gamma - (this.settings.gyroscopeMinAngleX + this.gammazero)
                      , a = e.beta - (this.settings.gyroscopeMinAngleY + this.betazero);
                    null !== this.updateCall && cancelAnimationFrame(this.updateCall),
                    this.event = {
                        clientX: n / i + this.left,
                        clientY: a / r + this.top
                    },
                    this.updateCall = requestAnimationFrame(this.updateBind)
                }
            }
            ,
            e.prototype.onMouseEnter = function() {
                this.updateElementPosition(),
                this.element.style.willChange = "transform",
                this.setTransition()
            }
            ,
            e.prototype.onMouseMove = function(e) {
                null !== this.updateCall && cancelAnimationFrame(this.updateCall),
                this.event = e,
                this.updateCall = requestAnimationFrame(this.updateBind)
            }
            ,
            e.prototype.onMouseLeave = function() {
                this.setTransition(),
                this.settings.reset && requestAnimationFrame(this.resetBind)
            }
            ,
            e.prototype.reset = function() {
                this.onMouseEnter(),
                this.fullPageListening ? this.event = {
                    clientX: (this.settings.startX + this.settings.max) / (2 * this.settings.max) * this.clientWidth,
                    clientY: (this.settings.startY + this.settings.max) / (2 * this.settings.max) * this.clientHeight
                } : this.event = {
                    clientX: this.left + (this.settings.startX + this.settings.max) / (2 * this.settings.max) * this.width,
                    clientY: this.top + (this.settings.startY + this.settings.max) / (2 * this.settings.max) * this.height
                };
                var e = this.settings.scale;
                this.settings.scale = 1,
                this.update(),
                this.settings.scale = e,
                this.resetGlare()
            }
            ,
            e.prototype.resetGlare = function() {
                this.glare && (this.glareElement.style.transform = "rotate(180deg) translate(-50%, -50%)",
                this.glareElement.style.opacity = "0")
            }
            ,
            e.prototype.getValues = function() {
                var e = void 0
                  , t = void 0;
                return this.fullPageListening ? (e = this.event.clientX / this.clientWidth,
                t = this.event.clientY / this.clientHeight) : (e = (this.event.clientX - this.left) / this.width,
                t = (this.event.clientY - this.top) / this.height),
                e = Math.min(Math.max(e, 0), 1),
                t = Math.min(Math.max(t, 0), 1),
                {
                    tiltX: (this.reverse * (this.settings.max - e * this.settings.max * 2)).toFixed(2),
                    tiltY: (this.reverse * (t * this.settings.max * 2 - this.settings.max)).toFixed(2),
                    percentageX: 100 * e,
                    percentageY: 100 * t,
                    angle: Math.atan2(this.event.clientX - (this.left + this.width / 2), -(this.event.clientY - (this.top + this.height / 2))) * (180 / Math.PI)
                }
            }
            ,
            e.prototype.updateElementPosition = function() {
                var e = this.element.getBoundingClientRect();
                this.width = this.element.offsetWidth,
                this.height = this.element.offsetHeight,
                this.left = e.left,
                this.top = e.top
            }
            ,
            e.prototype.update = function() {
                var e = this.getValues();
                this.element.style.transform = "perspective(" + this.settings.perspective + "px) rotateX(" + ("x" === this.settings.axis ? 0 : e.tiltY) + "deg) rotateY(" + ("y" === this.settings.axis ? 0 : e.tiltX) + "deg) scale3d(" + this.settings.scale + ", " + this.settings.scale + ", " + this.settings.scale + ")",
                this.glare && (this.glareElement.style.transform = "rotate(" + e.angle + "deg) translate(-50%, -50%)",
                this.glareElement.style.opacity = "" + e.percentageY * this.settings["max-glare"] / 100),
                this.element.dispatchEvent(new CustomEvent("tiltChange",{
                    detail: e
                })),
                this.updateCall = null
            }
            ,
            e.prototype.prepareGlare = function() {
                if (!this.glarePrerender) {
                    var e = document.createElement("div");
                    e.classList.add("js-tilt-glare");
                    var t = document.createElement("div");
                    t.classList.add("js-tilt-glare-inner"),
                    e.appendChild(t),
                    this.element.appendChild(e)
                }
                this.glareElementWrapper = this.element.querySelector(".js-tilt-glare"),
                this.glareElement = this.element.querySelector(".js-tilt-glare-inner"),
                this.glarePrerender || (Object.assign(this.glareElementWrapper.style, {
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                    "pointer-events": "none",
                    "border-radius": "inherit"
                }),
                Object.assign(this.glareElement.style, {
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    "pointer-events": "none",
                    "background-image": "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
                    transform: "rotate(180deg) translate(-50%, -50%)",
                    "transform-origin": "0% 0%",
                    opacity: "0"
                }),
                this.updateGlareSize())
            }
            ,
            e.prototype.updateGlareSize = function() {
                if (this.glare) {
                    var e = (this.element.offsetWidth > this.element.offsetHeight ? this.element.offsetWidth : this.element.offsetHeight) * 2;
                    Object.assign(this.glareElement.style, {
                        width: e + "px",
                        height: e + "px"
                    })
                }
            }
            ,
            e.prototype.updateClientSize = function() {
                this.clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
                this.clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
            }
            ,
            e.prototype.onWindowResize = function() {
                this.updateGlareSize(),
                this.updateClientSize()
            }
            ,
            e.prototype.setTransition = function() {
                var e = this;
                clearTimeout(this.transitionTimeout),
                this.element.style.transition = this.settings.speed + "ms " + this.settings.easing,
                this.glare && (this.glareElement.style.transition = "opacity " + this.settings.speed + "ms " + this.settings.easing),
                this.transitionTimeout = setTimeout(function() {
                    e.element.style.transition = "",
                    e.glare && (e.glareElement.style.transition = "")
                }, this.settings.speed)
            }
            ,
            e.prototype.extendSettings = function(e) {
                var t = {
                    reverse: !1,
                    max: 15,
                    startX: 0,
                    startY: 0,
                    perspective: 1e3,
                    easing: "cubic-bezier(.03,.98,.52,.99)",
                    scale: 1,
                    speed: 300,
                    transition: !0,
                    axis: null,
                    glare: !1,
                    "max-glare": 1,
                    "glare-prerender": !1,
                    "full-page-listening": !1,
                    "mouse-event-element": null,
                    reset: !0,
                    "reset-to-start": !0,
                    gyroscope: !0,
                    gyroscopeMinAngleX: -45,
                    gyroscopeMaxAngleX: 45,
                    gyroscopeMinAngleY: -45,
                    gyroscopeMaxAngleY: 45,
                    gyroscopeSamples: 10
                }
                  , s = {};
                for (var i in t)
                    if (i in e)
                        s[i] = e[i];
                    else if (this.element.hasAttribute("data-tilt-" + i)) {
                        var r = this.element.getAttribute("data-tilt-" + i);
                        try {
                            s[i] = JSON.parse(r)
                        } catch (e) {
                            s[i] = r
                        }
                    } else
                        s[i] = t[i];
                return s
            }
            ,
            e.init = function(t, s) {
                t instanceof Node && (t = [t]),
                t instanceof NodeList && (t = [].slice.call(t)),
                t instanceof Array && t.forEach(function(t) {
                    "vanillaTilt"in t || (t.vanillaTilt = new e(t,s))
                })
            }
            ,
            e
        }();
        "undefined" != typeof document && (window.VanillaTilt = s,
        s.init(document.querySelectorAll("[data-tilt]"))),
        e.exports = s
    }
}, function(e) {
    e.O(0, [420, 447, 381, 691, 804, 971, 938, 744], function() {
        return e(e.s = 6927)
    }),
    _N_E = e.O()
}
]);
