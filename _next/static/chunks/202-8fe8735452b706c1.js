"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[202], {
    703: function(e, t, i) {
        i.d(t, {
            default: function() {
                return s.a
            }
        });
        var n = i(7447)
          , s = i.n(n)
    },
    5601: function(e, t) {
        function i() {
            return null
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function() {
                return i
            }
        }),
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    1749: function(e, t, i) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "Image", {
            enumerable: !0,
            get: function() {
                return b
            }
        });
        let n = i(6921)
          , s = i(1884)
          , r = i(7437)
          , o = s._(i(2265))
          , a = n._(i(4887))
          , l = n._(i(2251))
          , u = i(8630)
          , d = i(6906)
          , h = i(337);
        i(6184);
        let c = i(6993)
          , f = n._(i(536))
          , g = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1
        };
        function p(e, t, i, n, s, r) {
            let o = null == e ? void 0 : e.src;
            e && e["data-loaded-src"] !== o && (e["data-loaded-src"] = o,
            ("decode"in e ? e.decode() : Promise.resolve()).catch( () => {}
            ).then( () => {
                if (e.parentElement && e.isConnected) {
                    if ("empty" !== t && s(!0),
                    null == i ? void 0 : i.current) {
                        let t = new Event("load");
                        Object.defineProperty(t, "target", {
                            writable: !1,
                            value: e
                        });
                        let n = !1
                          , s = !1;
                        i.current({
                            ...t,
                            nativeEvent: t,
                            currentTarget: e,
                            target: e,
                            isDefaultPrevented: () => n,
                            isPropagationStopped: () => s,
                            persist: () => {}
                            ,
                            preventDefault: () => {
                                n = !0,
                                t.preventDefault()
                            }
                            ,
                            stopPropagation: () => {
                                s = !0,
                                t.stopPropagation()
                            }
                        })
                    }
                    (null == n ? void 0 : n.current) && n.current(e)
                }
            }
            ))
        }
        function m(e) {
            let[t,i] = o.version.split(".", 2)
              , n = parseInt(t, 10)
              , s = parseInt(i, 10);
            return n > 18 || 18 === n && s >= 3 ? {
                fetchPriority: e
            } : {
                fetchpriority: e
            }
        }
        "undefined" == typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
        let v = (0,
        o.forwardRef)( (e, t) => {
            let {src: i, srcSet: n, sizes: s, height: a, width: l, decoding: u, className: d, style: h, fetchPriority: c, placeholder: f, loading: g, unoptimized: v, fill: y, onLoadRef: b, onLoadingCompleteRef: w, setBlurComplete: x, setShowAltText: S, onLoad: _, onError: E, ...M} = e;
            return (0,
            r.jsx)("img", {
                ...M,
                ...m(c),
                loading: g,
                width: l,
                height: a,
                decoding: u,
                "data-nimg": y ? "fill" : "1",
                className: d,
                style: h,
                sizes: s,
                srcSet: n,
                src: i,
                ref: (0,
                o.useCallback)(e => {
                    t && ("function" == typeof t ? t(e) : "object" == typeof t && (t.current = e)),
                    e && (E && (e.src = e.src),
                    e.complete && p(e, f, b, w, x, v))
                }
                , [i, f, b, w, x, E, v, t]),
                onLoad: e => {
                    p(e.currentTarget, f, b, w, x, v)
                }
                ,
                onError: e => {
                    S(!0),
                    "empty" !== f && x(!0),
                    E && E(e)
                }
            })
        }
        );
        function y(e) {
            let {isAppRouter: t, imgAttributes: i} = e
              , n = {
                as: "image",
                imageSrcSet: i.srcSet,
                imageSizes: i.sizes,
                crossOrigin: i.crossOrigin,
                referrerPolicy: i.referrerPolicy,
                ...m(i.fetchPriority)
            };
            return t && a.default.preload ? (a.default.preload(i.src, n),
            null) : (0,
            r.jsx)(l.default, {
                children: (0,
                r.jsx)("link", {
                    rel: "preload",
                    href: i.srcSet ? void 0 : i.src,
                    ...n
                }, "__nimg-" + i.src + i.srcSet + i.sizes)
            })
        }
        let b = (0,
        o.forwardRef)( (e, t) => {
            let i = (0,
            o.useContext)(c.RouterContext)
              , n = (0,
            o.useContext)(h.ImageConfigContext)
              , s = (0,
            o.useMemo)( () => {
                let e = g || n || d.imageConfigDefault
                  , t = [...e.deviceSizes, ...e.imageSizes].sort( (e, t) => e - t)
                  , i = e.deviceSizes.sort( (e, t) => e - t);
                return {
                    ...e,
                    allSizes: t,
                    deviceSizes: i
                }
            }
            , [n])
              , {onLoad: a, onLoadingComplete: l} = e
              , p = (0,
            o.useRef)(a);
            (0,
            o.useEffect)( () => {
                p.current = a
            }
            , [a]);
            let m = (0,
            o.useRef)(l);
            (0,
            o.useEffect)( () => {
                m.current = l
            }
            , [l]);
            let[b,w] = (0,
            o.useState)(!1)
              , [x,S] = (0,
            o.useState)(!1)
              , {props: _, meta: E} = (0,
            u.getImgProps)(e, {
                defaultLoader: f.default,
                imgConf: s,
                blurComplete: b,
                showAltText: x
            });
            return (0,
            r.jsxs)(r.Fragment, {
                children: [(0,
                r.jsx)(v, {
                    ..._,
                    unoptimized: E.unoptimized,
                    placeholder: E.placeholder,
                    fill: E.fill,
                    onLoadRef: p,
                    onLoadingCompleteRef: m,
                    setBlurComplete: w,
                    setShowAltText: S,
                    ref: t
                }), E.priority ? (0,
                r.jsx)(y, {
                    isAppRouter: !i,
                    imgAttributes: _
                }) : null]
            })
        }
        );
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    5827: function(e, t, i) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "AmpStateContext", {
            enumerable: !0,
            get: function() {
                return n
            }
        });
        let n = i(6921)._(i(2265)).default.createContext({})
    },
    3044: function(e, t) {
        function i(e) {
            let {ampFirst: t=!1, hybrid: i=!1, hasQuery: n=!1} = void 0 === e ? {} : e;
            return t || i && n
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "isInAmpMode", {
            enumerable: !0,
            get: function() {
                return i
            }
        })
    },
    8630: function(e, t, i) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "getImgProps", {
            enumerable: !0,
            get: function() {
                return a
            }
        }),
        i(6184);
        let n = i(7160)
          , s = i(6906);
        function r(e) {
            return void 0 !== e.default
        }
        function o(e) {
            return void 0 === e ? e : "number" == typeof e ? Number.isFinite(e) ? e : NaN : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
        }
        function a(e, t) {
            var i;
            let a, l, u, {src: d, sizes: h, unoptimized: c=!1, priority: f=!1, loading: g, className: p, quality: m, width: v, height: y, fill: b=!1, style: w, onLoad: x, onLoadingComplete: S, placeholder: _="empty", blurDataURL: E, fetchPriority: M, layout: C, objectFit: j, objectPosition: z, lazyBoundary: P, lazyRoot: O, ...L} = e, {imgConf: A, showAltText: T, blurComplete: I, defaultLoader: B} = t, R = A || s.imageConfigDefault;
            if ("allSizes"in R)
                a = R;
            else {
                let e = [...R.deviceSizes, ...R.imageSizes].sort( (e, t) => e - t)
                  , t = R.deviceSizes.sort( (e, t) => e - t);
                a = {
                    ...R,
                    allSizes: e,
                    deviceSizes: t
                }
            }
            let k = L.loader || B;
            delete L.loader,
            delete L.srcSet;
            let W = "__next_img_default"in k;
            if (W) {
                if ("custom" === a.loader)
                    throw Error('Image with src "' + d + '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')
            } else {
                let e = k;
                k = t => {
                    let {config: i, ...n} = t;
                    return e(n)
                }
            }
            if (C) {
                "fill" === C && (b = !0);
                let e = {
                    intrinsic: {
                        maxWidth: "100%",
                        height: "auto"
                    },
                    responsive: {
                        width: "100%",
                        height: "auto"
                    }
                }[C];
                e && (w = {
                    ...w,
                    ...e
                });
                let t = {
                    responsive: "100vw",
                    fill: "100vw"
                }[C];
                t && !h && (h = t)
            }
            let Y = ""
              , D = o(v)
              , X = o(y);
            if ("object" == typeof (i = d) && (r(i) || void 0 !== i.src)) {
                let e = r(d) ? d.default : d;
                if (!e.src)
                    throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(e));
                if (!e.height || !e.width)
                    throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(e));
                if (l = e.blurWidth,
                u = e.blurHeight,
                E = E || e.blurDataURL,
                Y = e.src,
                !b) {
                    if (D || X) {
                        if (D && !X) {
                            let t = D / e.width;
                            X = Math.round(e.height * t)
                        } else if (!D && X) {
                            let t = X / e.height;
                            D = Math.round(e.width * t)
                        }
                    } else
                        D = e.width,
                        X = e.height
                }
            }
            let G = !f && ("lazy" === g || void 0 === g);
            (!(d = "string" == typeof d ? d : Y) || d.startsWith("data:") || d.startsWith("blob:")) && (c = !0,
            G = !1),
            a.unoptimized && (c = !0),
            W && d.endsWith(".svg") && !a.dangerouslyAllowSVG && (c = !0),
            f && (M = "high");
            let N = o(m)
              , F = Object.assign(b ? {
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                objectFit: j,
                objectPosition: z
            } : {}, T ? {} : {
                color: "transparent"
            }, w)
              , H = I || "empty" === _ ? null : "blur" === _ ? 'url("data:image/svg+xml;charset=utf-8,' + (0,
            n.getImageBlurSvg)({
                widthInt: D,
                heightInt: X,
                blurWidth: l,
                blurHeight: u,
                blurDataURL: E || "",
                objectFit: F.objectFit
            }) + '")' : 'url("' + _ + '")'
              , U = H ? {
                backgroundSize: F.objectFit || "cover",
                backgroundPosition: F.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: H
            } : {}
              , q = function(e) {
                let {config: t, src: i, unoptimized: n, width: s, quality: r, sizes: o, loader: a} = e;
                if (n)
                    return {
                        src: i,
                        srcSet: void 0,
                        sizes: void 0
                    };
                let {widths: l, kind: u} = function(e, t, i) {
                    let {deviceSizes: n, allSizes: s} = e;
                    if (i) {
                        let e = /(^|\s)(1?\d?\d)vw/g
                          , t = [];
                        for (let n; n = e.exec(i); n)
                            t.push(parseInt(n[2]));
                        if (t.length) {
                            let e = .01 * Math.min(...t);
                            return {
                                widths: s.filter(t => t >= n[0] * e),
                                kind: "w"
                            }
                        }
                        return {
                            widths: s,
                            kind: "w"
                        }
                    }
                    return "number" != typeof t ? {
                        widths: n,
                        kind: "w"
                    } : {
                        widths: [...new Set([t, 2 * t].map(e => s.find(t => t >= e) || s[s.length - 1]))],
                        kind: "x"
                    }
                }(t, s, o)
                  , d = l.length - 1;
                return {
                    sizes: o || "w" !== u ? o : "100vw",
                    srcSet: l.map( (e, n) => a({
                        config: t,
                        src: i,
                        quality: r,
                        width: e
                    }) + " " + ("w" === u ? e : n + 1) + u).join(", "),
                    src: a({
                        config: t,
                        src: i,
                        quality: r,
                        width: l[d]
                    })
                }
            }({
                config: a,
                src: d,
                unoptimized: c,
                width: D,
                quality: N,
                sizes: h,
                loader: k
            });
            return {
                props: {
                    ...L,
                    loading: G ? "lazy" : g,
                    fetchPriority: M,
                    width: D,
                    height: X,
                    decoding: "async",
                    className: p,
                    style: {
                        ...F,
                        ...U
                    },
                    sizes: q.sizes,
                    srcSet: q.srcSet,
                    src: q.src
                },
                meta: {
                    unoptimized: c,
                    priority: f,
                    placeholder: _,
                    fill: b
                }
            }
        }
    },
    2251: function(e, t, i) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e, t) {
            for (var i in t)
                Object.defineProperty(e, i, {
                    enumerable: !0,
                    get: t[i]
                })
        }(t, {
            defaultHead: function() {
                return h
            },
            default: function() {
                return p
            }
        });
        let n = i(6921)
          , s = i(1884)
          , r = i(7437)
          , o = s._(i(2265))
          , a = n._(i(7392))
          , l = i(5827)
          , u = i(7484)
          , d = i(3044);
        function h(e) {
            void 0 === e && (e = !1);
            let t = [(0,
            r.jsx)("meta", {
                charSet: "utf-8"
            })];
            return e || t.push((0,
            r.jsx)("meta", {
                name: "viewport",
                content: "width=device-width"
            })),
            t
        }
        function c(e, t) {
            return "string" == typeof t || "number" == typeof t ? e : t.type === o.default.Fragment ? e.concat(o.default.Children.toArray(t.props.children).reduce( (e, t) => "string" == typeof t || "number" == typeof t ? e : e.concat(t), [])) : e.concat(t)
        }
        i(6184);
        let f = ["name", "httpEquiv", "charSet", "itemProp"];
        function g(e, t) {
            let {inAmpMode: i} = t;
            return e.reduce(c, []).reverse().concat(h(i).reverse()).filter(function() {
                let e = new Set
                  , t = new Set
                  , i = new Set
                  , n = {};
                return s => {
                    let r = !0
                      , o = !1;
                    if (s.key && "number" != typeof s.key && s.key.indexOf("$") > 0) {
                        o = !0;
                        let t = s.key.slice(s.key.indexOf("$") + 1);
                        e.has(t) ? r = !1 : e.add(t)
                    }
                    switch (s.type) {
                    case "title":
                    case "base":
                        t.has(s.type) ? r = !1 : t.add(s.type);
                        break;
                    case "meta":
                        for (let e = 0, t = f.length; e < t; e++) {
                            let t = f[e];
                            if (s.props.hasOwnProperty(t)) {
                                if ("charSet" === t)
                                    i.has(t) ? r = !1 : i.add(t);
                                else {
                                    let e = s.props[t]
                                      , i = n[t] || new Set;
                                    ("name" !== t || !o) && i.has(e) ? r = !1 : (i.add(e),
                                    n[t] = i)
                                }
                            }
                        }
                    }
                    return r
                }
            }()).reverse().map( (e, t) => {
                let n = e.key || t;
                if (!i && "link" === e.type && e.props.href && ["https://fonts.googleapis.com/css", "https://use.typekit.net/"].some(t => e.props.href.startsWith(t))) {
                    let t = {
                        ...e.props || {}
                    };
                    return t["data-href"] = t.href,
                    t.href = void 0,
                    t["data-optimized-fonts"] = !0,
                    o.default.cloneElement(e, t)
                }
                return o.default.cloneElement(e, {
                    key: n
                })
            }
            )
        }
        let p = function(e) {
            let {children: t} = e
              , i = (0,
            o.useContext)(l.AmpStateContext)
              , n = (0,
            o.useContext)(u.HeadManagerContext);
            return (0,
            r.jsx)(a.default, {
                reduceComponentsToState: g,
                headManager: n,
                inAmpMode: (0,
                d.isInAmpMode)(i),
                children: t
            })
        };
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    7160: function(e, t) {
        function i(e) {
            let {widthInt: t, heightInt: i, blurWidth: n, blurHeight: s, blurDataURL: r, objectFit: o} = e
              , a = n ? 40 * n : t
              , l = s ? 40 * s : i
              , u = a && l ? "viewBox='0 0 " + a + " " + l + "'" : "";
            return "%3Csvg xmlns='http://www.w3.org/2000/svg' " + u + "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" + (u ? "none" : "contain" === o ? "xMidYMid" : "cover" === o ? "xMidYMid slice" : "none") + "' style='filter: url(%23b);' href='" + r + "'/%3E%3C/svg%3E"
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "getImageBlurSvg", {
            enumerable: !0,
            get: function() {
                return i
            }
        })
    },
    337: function(e, t, i) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "ImageConfigContext", {
            enumerable: !0,
            get: function() {
                return r
            }
        });
        let n = i(6921)._(i(2265))
          , s = i(6906)
          , r = n.default.createContext(s.imageConfigDefault)
    },
    6906: function(e, t) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e, t) {
            for (var i in t)
                Object.defineProperty(e, i, {
                    enumerable: !0,
                    get: t[i]
                })
        }(t, {
            VALID_LOADERS: function() {
                return i
            },
            imageConfigDefault: function() {
                return n
            }
        });
        let i = ["default", "imgix", "cloudinary", "akamai", "custom"]
          , n = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            loaderFile: "",
            domains: [],
            disableStaticImages: !1,
            minimumCacheTTL: 60,
            formats: ["image/webp"],
            dangerouslyAllowSVG: !1,
            contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
            contentDispositionType: "inline",
            remotePatterns: [],
            unoptimized: !1
        }
    },
    7447: function(e, t, i) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e, t) {
            for (var i in t)
                Object.defineProperty(e, i, {
                    enumerable: !0,
                    get: t[i]
                })
        }(t, {
            getImageProps: function() {
                return a
            },
            default: function() {
                return l
            }
        });
        let n = i(6921)
          , s = i(8630)
          , r = i(1749)
          , o = n._(i(536))
          , a = e => {
            let {props: t} = (0,
            s.getImgProps)(e, {
                defaultLoader: o.default,
                imgConf: {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image",
                    loader: "default",
                    dangerouslyAllowSVG: !1,
                    unoptimized: !1
                }
            });
            for (let[e,i] of Object.entries(t))
                void 0 === i && delete t[e];
            return {
                props: t
            }
        }
          , l = r.Image
    },
    536: function(e, t) {
        function i(e) {
            let {config: t, src: i, width: n, quality: s} = e;
            return t.path + "?url=" + encodeURIComponent(i) + "&w=" + n + "&q=" + (s || 75)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function() {
                return n
            }
        }),
        i.__next_img_default = !0;
        let n = i
    },
    6993: function(e, t, i) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "RouterContext", {
            enumerable: !0,
            get: function() {
                return n
            }
        });
        let n = i(6921)._(i(2265)).default.createContext(null)
    },
    7392: function(e, t, i) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function() {
                return a
            }
        });
        let n = i(2265)
          , s = "undefined" == typeof window
          , r = s ? () => {}
        : n.useLayoutEffect
          , o = s ? () => {}
        : n.useEffect;
        function a(e) {
            let {headManager: t, reduceComponentsToState: i} = e;
            function a() {
                if (t && t.mountedInstances) {
                    let s = n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
                    t.updateHead(i(s, e))
                }
            }
            if (s) {
                var l;
                null == t || null == (l = t.mountedInstances) || l.add(e.children),
                a()
            }
            return r( () => {
                var i;
                return null == t || null == (i = t.mountedInstances) || i.add(e.children),
                () => {
                    var i;
                    null == t || null == (i = t.mountedInstances) || i.delete(e.children)
                }
            }
            ),
            r( () => (t && (t._pendingUpdate = a),
            () => {
                t && (t._pendingUpdate = a)
            }
            )),
            o( () => (t && t._pendingUpdate && (t._pendingUpdate(),
            t._pendingUpdate = null),
            () => {
                t && t._pendingUpdate && (t._pendingUpdate(),
                t._pendingUpdate = null)
            }
            )),
            null
        }
    },
    3633: function(e) {
        var t = function(e, t) {
            if (!(e instanceof t))
                throw TypeError("Cannot call a class as a function")
        }
          , i = function() {
            function e(i) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (t(this, e),
                !(i instanceof Node))
                    throw "Can't initialize VanillaTilt because " + i + " is not a Node.";
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
                this.element = i,
                this.settings = this.extendSettings(n),
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
                      , i = this.settings.gyroscopeMaxAngleY - this.settings.gyroscopeMinAngleY
                      , n = t / this.width
                      , s = i / this.height
                      , r = e.gamma - (this.settings.gyroscopeMinAngleX + this.gammazero)
                      , o = e.beta - (this.settings.gyroscopeMinAngleY + this.betazero);
                    null !== this.updateCall && cancelAnimationFrame(this.updateCall),
                    this.event = {
                        clientX: r / n + this.left,
                        clientY: o / s + this.top
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
                  , i = {};
                for (var n in t)
                    if (n in e)
                        i[n] = e[n];
                    else if (this.element.hasAttribute("data-tilt-" + n)) {
                        var s = this.element.getAttribute("data-tilt-" + n);
                        try {
                            i[n] = JSON.parse(s)
                        } catch (e) {
                            i[n] = s
                        }
                    } else
                        i[n] = t[n];
                return i
            }
            ,
            e.init = function(t, i) {
                t instanceof Node && (t = [t]),
                t instanceof NodeList && (t = [].slice.call(t)),
                t instanceof Array && t.forEach(function(t) {
                    "vanillaTilt"in t || (t.vanillaTilt = new e(t,i))
                })
            }
            ,
            e
        }();
        "undefined" != typeof document && (window.VanillaTilt = i,
        i.init(document.querySelectorAll("[data-tilt]"))),
        e.exports = i
    }
}]);
