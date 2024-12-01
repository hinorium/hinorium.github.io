(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[381], {
    3225: function(t, e, n) {
        "use strict";
        n.d(e, {
            K: function() {
                return r
            },
            k: function() {
                return i
            }
        });
        var r = function() {}
          , i = function() {}
    },
    2601: function(t, e, n) {
        "use strict";
        var r, i;
        t.exports = (null == (r = n.g.process) ? void 0 : r.env) && "object" == typeof (null == (i = n.g.process) ? void 0 : i.env) ? n.g.process : n(8960)
    },
    2956: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "addLocale", {
            enumerable: !0,
            get: function() {
                return r
            }
        }),
        n(2139);
        let r = function(t) {
            for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
                n[r - 1] = arguments[r];
            return t
        };
        ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
            value: !0
        }),
        Object.assign(e.default, e),
        t.exports = e.default)
    },
    6406: function(t, e, n) {
        "use strict";
        function r(t, e, n, r) {
            return !1
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "getDomainLocale", {
            enumerable: !0,
            get: function() {
                return r
            }
        }),
        n(2139),
        ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
            value: !0
        }),
        Object.assign(e.default, e),
        t.exports = e.default)
    },
    5250: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "default", {
            enumerable: !0,
            get: function() {
                return y
            }
        });
        let r = n(1024)._(n(2265))
          , i = n(4542)
          , o = n(7434)
          , s = n(1030)
          , a = n(6874)
          , l = n(2956)
          , u = n(6993)
          , c = n(8599)
          , h = n(5291)
          , d = n(6406)
          , f = n(5786)
          , p = n(1414)
          , m = new Set;
        function v(t, e, n, r, i, s) {
            if (s || (0,
            o.isLocalURL)(e)) {
                if (!r.bypassPrefetchedCheck) {
                    let i = e + "%" + n + "%" + (void 0 !== r.locale ? r.locale : "locale"in t ? t.locale : void 0);
                    if (m.has(i))
                        return;
                    m.add(i)
                }
                Promise.resolve(s ? t.prefetch(e, i) : t.prefetch(e, n, r)).catch(t => {}
                )
            }
        }
        function g(t) {
            return "string" == typeof t ? t : (0,
            s.formatUrl)(t)
        }
        let y = r.default.forwardRef(function(t, e) {
            let n, s;
            let {href: m, as: y, children: x, prefetch: b=null, passHref: w, replace: P, shallow: E, scroll: T, locale: A, onClick: C, onMouseEnter: S, onTouchStart: R, legacyBehavior: V=!1, ...M} = t;
            n = x,
            V && ("string" == typeof n || "number" == typeof n) && (n = r.default.createElement("a", null, n));
            let j = r.default.useContext(u.RouterContext)
              , k = r.default.useContext(c.AppRouterContext)
              , O = null != j ? j : k
              , L = !j
              , D = !1 !== b
              , _ = null === b ? p.PrefetchKind.AUTO : p.PrefetchKind.FULL
              , {href: B, as: I} = r.default.useMemo( () => {
                if (!j) {
                    let t = g(m);
                    return {
                        href: t,
                        as: y ? g(y) : t
                    }
                }
                let[t,e] = (0,
                i.resolveHref)(j, m, !0);
                return {
                    href: t,
                    as: y ? (0,
                    i.resolveHref)(j, y) : e || t
                }
            }
            , [j, m, y])
              , F = r.default.useRef(B)
              , N = r.default.useRef(I);
            V && (s = r.default.Children.only(n));
            let U = V ? s && "object" == typeof s && s.ref : e
              , [$,W,z] = (0,
            h.useIntersection)({
                rootMargin: "200px"
            })
              , Y = r.default.useCallback(t => {
                (N.current !== I || F.current !== B) && (z(),
                N.current = I,
                F.current = B),
                $(t),
                U && ("function" == typeof U ? U(t) : "object" == typeof U && (U.current = t))
            }
            , [I, U, B, z, $]);
            r.default.useEffect( () => {
                O && W && D && v(O, B, I, {
                    locale: A
                }, {
                    kind: _
                }, L)
            }
            , [I, B, W, A, D, null == j ? void 0 : j.locale, O, L, _]);
            let Z = {
                ref: Y,
                onClick(t) {
                    V || "function" != typeof C || C(t),
                    V && s.props && "function" == typeof s.props.onClick && s.props.onClick(t),
                    O && !t.defaultPrevented && function(t, e, n, i, s, a, l, u, c) {
                        let {nodeName: h} = t.currentTarget;
                        if ("A" === h.toUpperCase() && (function(t) {
                            let e = t.currentTarget.getAttribute("target");
                            return e && "_self" !== e || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || t.nativeEvent && 2 === t.nativeEvent.which
                        }(t) || !c && !(0,
                        o.isLocalURL)(n)))
                            return;
                        t.preventDefault();
                        let d = () => {
                            let t = null == l || l;
                            "beforePopState"in e ? e[s ? "replace" : "push"](n, i, {
                                shallow: a,
                                locale: u,
                                scroll: t
                            }) : e[s ? "replace" : "push"](i || n, {
                                scroll: t
                            })
                        }
                        ;
                        c ? r.default.startTransition(d) : d()
                    }(t, O, B, I, P, E, T, A, L)
                },
                onMouseEnter(t) {
                    V || "function" != typeof S || S(t),
                    V && s.props && "function" == typeof s.props.onMouseEnter && s.props.onMouseEnter(t),
                    O && (D || !L) && v(O, B, I, {
                        locale: A,
                        priority: !0,
                        bypassPrefetchedCheck: !0
                    }, {
                        kind: _
                    }, L)
                },
                onTouchStart(t) {
                    V || "function" != typeof R || R(t),
                    V && s.props && "function" == typeof s.props.onTouchStart && s.props.onTouchStart(t),
                    O && (D || !L) && v(O, B, I, {
                        locale: A,
                        priority: !0,
                        bypassPrefetchedCheck: !0
                    }, {
                        kind: _
                    }, L)
                }
            };
            if ((0,
            a.isAbsoluteUrl)(I))
                Z.href = I;
            else if (!V || w || "a" === s.type && !("href"in s.props)) {
                let t = void 0 !== A ? A : null == j ? void 0 : j.locale
                  , e = (null == j ? void 0 : j.isLocaleDomain) && (0,
                d.getDomainLocale)(I, t, null == j ? void 0 : j.locales, null == j ? void 0 : j.domainLocales);
                Z.href = e || (0,
                f.addBasePath)((0,
                l.addLocale)(I, t, null == j ? void 0 : j.defaultLocale))
            }
            return V ? r.default.cloneElement(s, Z) : r.default.createElement("a", {
                ...M,
                ...Z
            }, n)
        });
        ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
            value: !0
        }),
        Object.assign(e.default, e),
        t.exports = e.default)
    },
    2185: function(t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        function(t, e) {
            for (var n in e)
                Object.defineProperty(t, n, {
                    enumerable: !0,
                    get: e[n]
                })
        }(e, {
            requestIdleCallback: function() {
                return n
            },
            cancelIdleCallback: function() {
                return r
            }
        });
        let n = "undefined" != typeof self && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(t) {
            let e = Date.now();
            return self.setTimeout(function() {
                t({
                    didTimeout: !1,
                    timeRemaining: function() {
                        return Math.max(0, 50 - (Date.now() - e))
                    }
                })
            }, 1)
        }
          , r = "undefined" != typeof self && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(t) {
            return clearTimeout(t)
        }
        ;
        ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
            value: !0
        }),
        Object.assign(e.default, e),
        t.exports = e.default)
    },
    4542: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "resolveHref", {
            enumerable: !0,
            get: function() {
                return h
            }
        });
        let r = n(5770)
          , i = n(1030)
          , o = n(4544)
          , s = n(6874)
          , a = n(2139)
          , l = n(7434)
          , u = n(2360)
          , c = n(6735);
        function h(t, e, n) {
            let h;
            let d = "string" == typeof e ? e : (0,
            i.formatWithValidation)(e)
              , f = d.match(/^[a-zA-Z]{1,}:\/\//)
              , p = f ? d.slice(f[0].length) : d;
            if ((p.split("?", 1)[0] || "").match(/(\/\/|\\)/)) {
                console.error("Invalid href '" + d + "' passed to next/router in page: '" + t.pathname + "'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");
                let e = (0,
                s.normalizeRepeatedSlashes)(p);
                d = (f ? f[0] : "") + e
            }
            if (!(0,
            l.isLocalURL)(d))
                return n ? [d] : d;
            try {
                h = new URL(d.startsWith("#") ? t.asPath : t.pathname,"http://n")
            } catch (t) {
                h = new URL("/","http://n")
            }
            try {
                let t = new URL(d,h);
                t.pathname = (0,
                a.normalizePathTrailingSlash)(t.pathname);
                let e = "";
                if ((0,
                u.isDynamicRoute)(t.pathname) && t.searchParams && n) {
                    let n = (0,
                    r.searchParamsToUrlQuery)(t.searchParams)
                      , {result: s, params: a} = (0,
                    c.interpolateAs)(t.pathname, t.pathname, n);
                    s && (e = (0,
                    i.formatWithValidation)({
                        pathname: s,
                        hash: t.hash,
                        query: (0,
                        o.omit)(n, a)
                    }))
                }
                let s = t.origin === h.origin ? t.href.slice(t.origin.length) : t.href;
                return n ? [s, e || s] : s
            } catch (t) {
                return n ? [d] : d
            }
        }
        ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
            value: !0
        }),
        Object.assign(e.default, e),
        t.exports = e.default)
    },
    5291: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "useIntersection", {
            enumerable: !0,
            get: function() {
                return l
            }
        });
        let r = n(2265)
          , i = n(2185)
          , o = "function" == typeof IntersectionObserver
          , s = new Map
          , a = [];
        function l(t) {
            let {rootRef: e, rootMargin: n, disabled: l} = t
              , u = l || !o
              , [c,h] = (0,
            r.useState)(!1)
              , d = (0,
            r.useRef)(null)
              , f = (0,
            r.useCallback)(t => {
                d.current = t
            }
            , []);
            return (0,
            r.useEffect)( () => {
                if (o) {
                    if (u || c)
                        return;
                    let t = d.current;
                    if (t && t.tagName)
                        return function(t, e, n) {
                            let {id: r, observer: i, elements: o} = function(t) {
                                let e;
                                let n = {
                                    root: t.root || null,
                                    margin: t.rootMargin || ""
                                }
                                  , r = a.find(t => t.root === n.root && t.margin === n.margin);
                                if (r && (e = s.get(r)))
                                    return e;
                                let i = new Map;
                                return e = {
                                    id: n,
                                    observer: new IntersectionObserver(t => {
                                        t.forEach(t => {
                                            let e = i.get(t.target)
                                              , n = t.isIntersecting || t.intersectionRatio > 0;
                                            e && n && e(n)
                                        }
                                        )
                                    }
                                    ,t),
                                    elements: i
                                },
                                a.push(n),
                                s.set(n, e),
                                e
                            }(n);
                            return o.set(t, e),
                            i.observe(t),
                            function() {
                                if (o.delete(t),
                                i.unobserve(t),
                                0 === o.size) {
                                    i.disconnect(),
                                    s.delete(r);
                                    let t = a.findIndex(t => t.root === r.root && t.margin === r.margin);
                                    t > -1 && a.splice(t, 1)
                                }
                            }
                        }(t, t => t && h(t), {
                            root: null == e ? void 0 : e.current,
                            rootMargin: n
                        })
                } else if (!c) {
                    let t = (0,
                    i.requestIdleCallback)( () => h(!0));
                    return () => (0,
                    i.cancelIdleCallback)(t)
                }
            }
            , [u, n, e, c, d.current]),
            [f, c, (0,
            r.useCallback)( () => {
                h(!1)
            }
            , [])]
        }
        ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", {
            value: !0
        }),
        Object.assign(e.default, e),
        t.exports = e.default)
    },
    2202: function(t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "escapeStringRegexp", {
            enumerable: !0,
            get: function() {
                return i
            }
        });
        let n = /[|\\{}()[\]^$+*?.-]/
          , r = /[|\\{}()[\]^$+*?.-]/g;
        function i(t) {
            return n.test(t) ? t.replace(r, "\\$&") : t
        }
    },
    6993: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "RouterContext", {
            enumerable: !0,
            get: function() {
                return r
            }
        });
        let r = n(1024)._(n(2265)).default.createContext(null)
    },
    1030: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        function(t, e) {
            for (var n in e)
                Object.defineProperty(t, n, {
                    enumerable: !0,
                    get: e[n]
                })
        }(e, {
            formatUrl: function() {
                return o
            },
            urlObjectKeys: function() {
                return s
            },
            formatWithValidation: function() {
                return a
            }
        });
        let r = n(8533)._(n(5770))
          , i = /https?|ftp|gopher|file/;
        function o(t) {
            let {auth: e, hostname: n} = t
              , o = t.protocol || ""
              , s = t.pathname || ""
              , a = t.hash || ""
              , l = t.query || ""
              , u = !1;
            e = e ? encodeURIComponent(e).replace(/%3A/i, ":") + "@" : "",
            t.host ? u = e + t.host : n && (u = e + (~n.indexOf(":") ? "[" + n + "]" : n),
            t.port && (u += ":" + t.port)),
            l && "object" == typeof l && (l = String(r.urlQueryToSearchParams(l)));
            let c = t.search || l && "?" + l || "";
            return o && !o.endsWith(":") && (o += ":"),
            t.slashes || (!o || i.test(o)) && !1 !== u ? (u = "//" + (u || ""),
            s && "/" !== s[0] && (s = "/" + s)) : u || (u = ""),
            a && "#" !== a[0] && (a = "#" + a),
            c && "?" !== c[0] && (c = "?" + c),
            "" + o + u + (s = s.replace(/[?#]/g, encodeURIComponent)) + (c = c.replace("#", "%23")) + a
        }
        let s = ["auth", "hash", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "slashes"];
        function a(t) {
            return o(t)
        }
    },
    2360: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        function(t, e) {
            for (var n in e)
                Object.defineProperty(t, n, {
                    enumerable: !0,
                    get: e[n]
                })
        }(e, {
            getSortedRoutes: function() {
                return r.getSortedRoutes
            },
            isDynamicRoute: function() {
                return i.isDynamicRoute
            }
        });
        let r = n(7409)
          , i = n(1305)
    },
    6735: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "interpolateAs", {
            enumerable: !0,
            get: function() {
                return o
            }
        });
        let r = n(2395)
          , i = n(9935);
        function o(t, e, n) {
            let o = ""
              , s = (0,
            i.getRouteRegex)(t)
              , a = s.groups
              , l = (e !== t ? (0,
            r.getRouteMatcher)(s)(e) : "") || n;
            o = t;
            let u = Object.keys(a);
            return u.every(t => {
                let e = l[t] || ""
                  , {repeat: n, optional: r} = a[t]
                  , i = "[" + (n ? "..." : "") + t + "]";
                return r && (i = (e ? "" : "/") + "[" + i + "]"),
                n && !Array.isArray(e) && (e = [e]),
                (r || t in l) && (o = o.replace(i, n ? e.map(t => encodeURIComponent(t)).join("/") : encodeURIComponent(e)) || "/")
            }
            ) || (o = ""),
            {
                params: u,
                result: o
            }
        }
    },
    1305: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "isDynamicRoute", {
            enumerable: !0,
            get: function() {
                return o
            }
        });
        let r = n(4507)
          , i = /\/\[[^/]+?\](?=\/|$)/;
        function o(t) {
            return (0,
            r.isInterceptionRouteAppPath)(t) && (t = (0,
            r.extractInterceptionRouteInformation)(t).interceptedRoute),
            i.test(t)
        }
    },
    7434: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "isLocalURL", {
            enumerable: !0,
            get: function() {
                return o
            }
        });
        let r = n(6874)
          , i = n(7379);
        function o(t) {
            if (!(0,
            r.isAbsoluteUrl)(t))
                return !0;
            try {
                let e = (0,
                r.getLocationOrigin)()
                  , n = new URL(t,e);
                return n.origin === e && (0,
                i.hasBasePath)(n.pathname)
            } catch (t) {
                return !1
            }
        }
    },
    4544: function(t, e) {
        "use strict";
        function n(t, e) {
            let n = {};
            return Object.keys(t).forEach(r => {
                e.includes(r) || (n[r] = t[r])
            }
            ),
            n
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "omit", {
            enumerable: !0,
            get: function() {
                return n
            }
        })
    },
    5770: function(t, e) {
        "use strict";
        function n(t) {
            let e = {};
            return t.forEach( (t, n) => {
                void 0 === e[n] ? e[n] = t : Array.isArray(e[n]) ? e[n].push(t) : e[n] = [e[n], t]
            }
            ),
            e
        }
        function r(t) {
            return "string" != typeof t && ("number" != typeof t || isNaN(t)) && "boolean" != typeof t ? "" : String(t)
        }
        function i(t) {
            let e = new URLSearchParams;
            return Object.entries(t).forEach(t => {
                let[n,i] = t;
                Array.isArray(i) ? i.forEach(t => e.append(n, r(t))) : e.set(n, r(i))
            }
            ),
            e
        }
        function o(t) {
            for (var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
                n[r - 1] = arguments[r];
            return n.forEach(e => {
                Array.from(e.keys()).forEach(e => t.delete(e)),
                e.forEach( (e, n) => t.append(n, e))
            }
            ),
            t
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        function(t, e) {
            for (var n in e)
                Object.defineProperty(t, n, {
                    enumerable: !0,
                    get: e[n]
                })
        }(e, {
            searchParamsToUrlQuery: function() {
                return n
            },
            urlQueryToSearchParams: function() {
                return i
            },
            assign: function() {
                return o
            }
        })
    },
    2395: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "getRouteMatcher", {
            enumerable: !0,
            get: function() {
                return i
            }
        });
        let r = n(6874);
        function i(t) {
            let {re: e, groups: n} = t;
            return t => {
                let i = e.exec(t);
                if (!i)
                    return !1;
                let o = t => {
                    try {
                        return decodeURIComponent(t)
                    } catch (t) {
                        throw new r.DecodeError("failed to decode param")
                    }
                }
                  , s = {};
                return Object.keys(n).forEach(t => {
                    let e = n[t]
                      , r = i[e.pos];
                    void 0 !== r && (s[t] = ~r.indexOf("/") ? r.split("/").map(t => o(t)) : e.repeat ? [o(r)] : o(r))
                }
                ),
                s
            }
        }
    },
    9935: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        function(t, e) {
            for (var n in e)
                Object.defineProperty(t, n, {
                    enumerable: !0,
                    get: e[n]
                })
        }(e, {
            getRouteRegex: function() {
                return l
            },
            getNamedRouteRegex: function() {
                return h
            },
            getNamedMiddlewareRegex: function() {
                return d
            }
        });
        let r = n(4507)
          , i = n(2202)
          , o = n(5868);
        function s(t) {
            let e = t.startsWith("[") && t.endsWith("]");
            e && (t = t.slice(1, -1));
            let n = t.startsWith("...");
            return n && (t = t.slice(3)),
            {
                key: t,
                repeat: n,
                optional: e
            }
        }
        function a(t) {
            let e = (0,
            o.removeTrailingSlash)(t).slice(1).split("/")
              , n = {}
              , a = 1;
            return {
                parameterizedRoute: e.map(t => {
                    let e = r.INTERCEPTION_ROUTE_MARKERS.find(e => t.startsWith(e))
                      , o = t.match(/\[((?:\[.*\])|.+)\]/);
                    if (e && o) {
                        let {key: t, optional: r, repeat: l} = s(o[1]);
                        return n[t] = {
                            pos: a++,
                            repeat: l,
                            optional: r
                        },
                        "/" + (0,
                        i.escapeStringRegexp)(e) + "([^/]+?)"
                    }
                    if (!o)
                        return "/" + (0,
                        i.escapeStringRegexp)(t);
                    {
                        let {key: t, repeat: e, optional: r} = s(o[1]);
                        return n[t] = {
                            pos: a++,
                            repeat: e,
                            optional: r
                        },
                        e ? r ? "(?:/(.+?))?" : "/(.+?)" : "/([^/]+?)"
                    }
                }
                ).join(""),
                groups: n
            }
        }
        function l(t) {
            let {parameterizedRoute: e, groups: n} = a(t);
            return {
                re: RegExp("^" + e + "(?:/)?$"),
                groups: n
            }
        }
        function u(t) {
            let {interceptionMarker: e, getSafeRouteKey: n, segment: r, routeKeys: o, keyPrefix: a} = t
              , {key: l, optional: u, repeat: c} = s(r)
              , h = l.replace(/\W/g, "");
            a && (h = "" + a + h);
            let d = !1;
            (0 === h.length || h.length > 30) && (d = !0),
            isNaN(parseInt(h.slice(0, 1))) || (d = !0),
            d && (h = n()),
            a ? o[h] = "" + a + l : o[h] = l;
            let f = e ? (0,
            i.escapeStringRegexp)(e) : "";
            return c ? u ? "(?:/" + f + "(?<" + h + ">.+?))?" : "/" + f + "(?<" + h + ">.+?)" : "/" + f + "(?<" + h + ">[^/]+?)"
        }
        function c(t, e) {
            let n;
            let s = (0,
            o.removeTrailingSlash)(t).slice(1).split("/")
              , a = (n = 0,
            () => {
                let t = ""
                  , e = ++n;
                for (; e > 0; )
                    t += String.fromCharCode(97 + (e - 1) % 26),
                    e = Math.floor((e - 1) / 26);
                return t
            }
            )
              , l = {};
            return {
                namedParameterizedRoute: s.map(t => {
                    let n = r.INTERCEPTION_ROUTE_MARKERS.some(e => t.startsWith(e))
                      , o = t.match(/\[((?:\[.*\])|.+)\]/);
                    if (n && o) {
                        let[n] = t.split(o[0]);
                        return u({
                            getSafeRouteKey: a,
                            interceptionMarker: n,
                            segment: o[1],
                            routeKeys: l,
                            keyPrefix: e ? "nxtI" : void 0
                        })
                    }
                    return o ? u({
                        getSafeRouteKey: a,
                        segment: o[1],
                        routeKeys: l,
                        keyPrefix: e ? "nxtP" : void 0
                    }) : "/" + (0,
                    i.escapeStringRegexp)(t)
                }
                ).join(""),
                routeKeys: l
            }
        }
        function h(t, e) {
            let n = c(t, e);
            return {
                ...l(t),
                namedRegex: "^" + n.namedParameterizedRoute + "(?:/)?$",
                routeKeys: n.routeKeys
            }
        }
        function d(t, e) {
            let {parameterizedRoute: n} = a(t)
              , {catchAll: r=!0} = e;
            if ("/" === n)
                return {
                    namedRegex: "^/" + (r ? ".*" : "") + "$"
                };
            let {namedParameterizedRoute: i} = c(t, !1);
            return {
                namedRegex: "^" + i + (r ? "(?:(/.*)?)" : "") + "$"
            }
        }
    },
    7409: function(t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        Object.defineProperty(e, "getSortedRoutes", {
            enumerable: !0,
            get: function() {
                return r
            }
        });
        class n {
            insert(t) {
                this._insert(t.split("/").filter(Boolean), [], !1)
            }
            smoosh() {
                return this._smoosh()
            }
            _smoosh(t) {
                void 0 === t && (t = "/");
                let e = [...this.children.keys()].sort();
                null !== this.slugName && e.splice(e.indexOf("[]"), 1),
                null !== this.restSlugName && e.splice(e.indexOf("[...]"), 1),
                null !== this.optionalRestSlugName && e.splice(e.indexOf("[[...]]"), 1);
                let n = e.map(e => this.children.get(e)._smoosh("" + t + e + "/")).reduce( (t, e) => [...t, ...e], []);
                if (null !== this.slugName && n.push(...this.children.get("[]")._smoosh(t + "[" + this.slugName + "]/")),
                !this.placeholder) {
                    let e = "/" === t ? "/" : t.slice(0, -1);
                    if (null != this.optionalRestSlugName)
                        throw Error('You cannot define a route with the same specificity as a optional catch-all route ("' + e + '" and "' + e + "[[..." + this.optionalRestSlugName + ']]").');
                    n.unshift(e)
                }
                return null !== this.restSlugName && n.push(...this.children.get("[...]")._smoosh(t + "[..." + this.restSlugName + "]/")),
                null !== this.optionalRestSlugName && n.push(...this.children.get("[[...]]")._smoosh(t + "[[..." + this.optionalRestSlugName + "]]/")),
                n
            }
            _insert(t, e, r) {
                if (0 === t.length) {
                    this.placeholder = !1;
                    return
                }
                if (r)
                    throw Error("Catch-all must be the last part of the URL.");
                let i = t[0];
                if (i.startsWith("[") && i.endsWith("]")) {
                    let n = i.slice(1, -1)
                      , s = !1;
                    if (n.startsWith("[") && n.endsWith("]") && (n = n.slice(1, -1),
                    s = !0),
                    n.startsWith("...") && (n = n.substring(3),
                    r = !0),
                    n.startsWith("[") || n.endsWith("]"))
                        throw Error("Segment names may not start or end with extra brackets ('" + n + "').");
                    if (n.startsWith("."))
                        throw Error("Segment names may not start with erroneous periods ('" + n + "').");
                    function o(t, n) {
                        if (null !== t && t !== n)
                            throw Error("You cannot use different slug names for the same dynamic path ('" + t + "' !== '" + n + "').");
                        e.forEach(t => {
                            if (t === n)
                                throw Error('You cannot have the same slug name "' + n + '" repeat within a single dynamic path');
                            if (t.replace(/\W/g, "") === i.replace(/\W/g, ""))
                                throw Error('You cannot have the slug names "' + t + '" and "' + n + '" differ only by non-word symbols within a single dynamic path')
                        }
                        ),
                        e.push(n)
                    }
                    if (r) {
                        if (s) {
                            if (null != this.restSlugName)
                                throw Error('You cannot use both an required and optional catch-all route at the same level ("[...' + this.restSlugName + ']" and "' + t[0] + '" ).');
                            o(this.optionalRestSlugName, n),
                            this.optionalRestSlugName = n,
                            i = "[[...]]"
                        } else {
                            if (null != this.optionalRestSlugName)
                                throw Error('You cannot use both an optional and required catch-all route at the same level ("[[...' + this.optionalRestSlugName + ']]" and "' + t[0] + '").');
                            o(this.restSlugName, n),
                            this.restSlugName = n,
                            i = "[...]"
                        }
                    } else {
                        if (s)
                            throw Error('Optional route parameters are not yet supported ("' + t[0] + '").');
                        o(this.slugName, n),
                        this.slugName = n,
                        i = "[]"
                    }
                }
                this.children.has(i) || this.children.set(i, new n),
                this.children.get(i)._insert(t.slice(1), e, r)
            }
            constructor() {
                this.placeholder = !0,
                this.children = new Map,
                this.slugName = null,
                this.restSlugName = null,
                this.optionalRestSlugName = null
            }
        }
        function r(t) {
            let e = new n;
            return t.forEach(t => e.insert(t)),
            e.smoosh()
        }
    },
    6874: function(t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
        function(t, e) {
            for (var n in e)
                Object.defineProperty(t, n, {
                    enumerable: !0,
                    get: e[n]
                })
        }(e, {
            WEB_VITALS: function() {
                return n
            },
            execOnce: function() {
                return r
            },
            isAbsoluteUrl: function() {
                return o
            },
            getLocationOrigin: function() {
                return s
            },
            getURL: function() {
                return a
            },
            getDisplayName: function() {
                return l
            },
            isResSent: function() {
                return u
            },
            normalizeRepeatedSlashes: function() {
                return c
            },
            loadGetInitialProps: function() {
                return h
            },
            SP: function() {
                return d
            },
            ST: function() {
                return f
            },
            DecodeError: function() {
                return p
            },
            NormalizeError: function() {
                return m
            },
            PageNotFoundError: function() {
                return v
            },
            MissingStaticPage: function() {
                return g
            },
            MiddlewareNotFoundError: function() {
                return y
            },
            stringifyError: function() {
                return x
            }
        });
        let n = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
        function r(t) {
            let e, n = !1;
            return function() {
                for (var r = arguments.length, i = Array(r), o = 0; o < r; o++)
                    i[o] = arguments[o];
                return n || (n = !0,
                e = t(...i)),
                e
            }
        }
        let i = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/
          , o = t => i.test(t);
        function s() {
            let {protocol: t, hostname: e, port: n} = window.location;
            return t + "//" + e + (n ? ":" + n : "")
        }
        function a() {
            let {href: t} = window.location
              , e = s();
            return t.substring(e.length)
        }
        function l(t) {
            return "string" == typeof t ? t : t.displayName || t.name || "Unknown"
        }
        function u(t) {
            return t.finished || t.headersSent
        }
        function c(t) {
            let e = t.split("?");
            return e[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (e[1] ? "?" + e.slice(1).join("?") : "")
        }
        async function h(t, e) {
            let n = e.res || e.ctx && e.ctx.res;
            if (!t.getInitialProps)
                return e.ctx && e.Component ? {
                    pageProps: await h(e.Component, e.ctx)
                } : {};
            let r = await t.getInitialProps(e);
            if (n && u(n))
                return r;
            if (!r)
                throw Error('"' + l(t) + '.getInitialProps()" should resolve to an object. But found "' + r + '" instead.');
            return r
        }
        let d = "undefined" != typeof performance
          , f = d && ["mark", "measure", "getEntriesByName"].every(t => "function" == typeof performance[t]);
        class p extends Error {
        }
        class m extends Error {
        }
        class v extends Error {
            constructor(t) {
                super(),
                this.code = "ENOENT",
                this.name = "PageNotFoundError",
                this.message = "Cannot find module for page: " + t
            }
        }
        class g extends Error {
            constructor(t, e) {
                super(),
                this.message = "Failed to load static file for page: " + t + " " + e
            }
        }
        class y extends Error {
            constructor() {
                super(),
                this.code = "ENOENT",
                this.message = "Cannot find the middleware module"
            }
        }
        function x(t) {
            return JSON.stringify({
                message: t.message,
                stack: t.stack
            })
        }
    },
    8960: function(t) {
        !function() {
            var e = {
                229: function(t) {
                    var e, n, r, i = t.exports = {};
                    function o() {
                        throw Error("setTimeout has not been defined")
                    }
                    function s() {
                        throw Error("clearTimeout has not been defined")
                    }
                    function a(t) {
                        if (e === setTimeout)
                            return setTimeout(t, 0);
                        if ((e === o || !e) && setTimeout)
                            return e = setTimeout,
                            setTimeout(t, 0);
                        try {
                            return e(t, 0)
                        } catch (n) {
                            try {
                                return e.call(null, t, 0)
                            } catch (n) {
                                return e.call(this, t, 0)
                            }
                        }
                    }
                    !function() {
                        try {
                            e = "function" == typeof setTimeout ? setTimeout : o
                        } catch (t) {
                            e = o
                        }
                        try {
                            n = "function" == typeof clearTimeout ? clearTimeout : s
                        } catch (t) {
                            n = s
                        }
                    }();
                    var l = []
                      , u = !1
                      , c = -1;
                    function h() {
                        u && r && (u = !1,
                        r.length ? l = r.concat(l) : c = -1,
                        l.length && d())
                    }
                    function d() {
                        if (!u) {
                            var t = a(h);
                            u = !0;
                            for (var e = l.length; e; ) {
                                for (r = l,
                                l = []; ++c < e; )
                                    r && r[c].run();
                                c = -1,
                                e = l.length
                            }
                            r = null,
                            u = !1,
                            function(t) {
                                if (n === clearTimeout)
                                    return clearTimeout(t);
                                if ((n === s || !n) && clearTimeout)
                                    return n = clearTimeout,
                                    clearTimeout(t);
                                try {
                                    n(t)
                                } catch (e) {
                                    try {
                                        return n.call(null, t)
                                    } catch (e) {
                                        return n.call(this, t)
                                    }
                                }
                            }(t)
                        }
                    }
                    function f(t, e) {
                        this.fun = t,
                        this.array = e
                    }
                    function p() {}
                    i.nextTick = function(t) {
                        var e = Array(arguments.length - 1);
                        if (arguments.length > 1)
                            for (var n = 1; n < arguments.length; n++)
                                e[n - 1] = arguments[n];
                        l.push(new f(t,e)),
                        1 !== l.length || u || a(d)
                    }
                    ,
                    f.prototype.run = function() {
                        this.fun.apply(null, this.array)
                    }
                    ,
                    i.title = "browser",
                    i.browser = !0,
                    i.env = {},
                    i.argv = [],
                    i.version = "",
                    i.versions = {},
                    i.on = p,
                    i.addListener = p,
                    i.once = p,
                    i.off = p,
                    i.removeListener = p,
                    i.removeAllListeners = p,
                    i.emit = p,
                    i.prependListener = p,
                    i.prependOnceListener = p,
                    i.listeners = function(t) {
                        return []
                    }
                    ,
                    i.binding = function(t) {
                        throw Error("process.binding is not supported")
                    }
                    ,
                    i.cwd = function() {
                        return "/"
                    }
                    ,
                    i.chdir = function(t) {
                        throw Error("process.chdir is not supported")
                    }
                    ,
                    i.umask = function() {
                        return 0
                    }
                }
            }
              , n = {};
            function r(t) {
                var i = n[t];
                if (void 0 !== i)
                    return i.exports;
                var o = n[t] = {
                    exports: {}
                }
                  , s = !0;
                try {
                    e[t](o, o.exports, r),
                    s = !1
                } finally {
                    s && delete n[t]
                }
                return o.exports
            }
            r.ab = "//";
            var i = r(229);
            t.exports = i
        }()
    },
    622: function(t, e, n) {
        "use strict";
        var r = n(2265)
          , i = Symbol.for("react.element")
          , o = Symbol.for("react.fragment")
          , s = Object.prototype.hasOwnProperty
          , a = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
          , l = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };
        function u(t, e, n) {
            var r, o = {}, u = null, c = null;
            for (r in void 0 !== n && (u = "" + n),
            void 0 !== e.key && (u = "" + e.key),
            void 0 !== e.ref && (c = e.ref),
            e)
                s.call(e, r) && !l.hasOwnProperty(r) && (o[r] = e[r]);
            if (t && t.defaultProps)
                for (r in e = t.defaultProps)
                    void 0 === o[r] && (o[r] = e[r]);
            return {
                $$typeof: i,
                type: t,
                key: u,
                ref: c,
                props: o,
                _owner: a.current
            }
        }
        e.Fragment = o,
        e.jsx = u,
        e.jsxs = u
    },
    7437: function(t, e, n) {
        "use strict";
        t.exports = n(622)
    },
    1396: function(t, e, n) {
        t.exports = n(5250)
    },
    8695: function(t, e, n) {
        "use strict";
        n.d(e, {
            Z: function() {
                return S
            }
        });
        var r = n(3225)
          , i = n(1356);
        let o = {
            current: !1
        };
        var s = n(4132)
          , a = n(2057);
        let l = ([t,e,n,r]) => `cubic-bezier(${t}, ${e}, ${n}, ${r})`
          , u = {
            linear: "linear",
            ease: "ease",
            easeIn: "ease-in",
            easeOut: "ease-out",
            easeInOut: "ease-in-out",
            circIn: l([0, .65, .55, 1]),
            circOut: l([.55, 0, 1, .45]),
            backIn: l([.31, .01, .66, -.59]),
            backOut: l([.33, 1.53, .69, .99])
        };
        var c = n(3705)
          , h = n(9815)
          , d = n(6442);
        let f = () => ({
            type: "spring",
            stiffness: 500,
            damping: 25,
            restSpeed: 10
        })
          , p = t => ({
            type: "spring",
            stiffness: 550,
            damping: 0 === t ? 2 * Math.sqrt(550) : 30,
            restSpeed: 10
        })
          , m = () => ({
            type: "keyframes",
            ease: "linear",
            duration: .3
        })
          , v = {
            type: "keyframes",
            duration: .8
        }
          , g = {
            x: f,
            y: f,
            z: f,
            rotate: f,
            rotateX: f,
            rotateY: f,
            rotateZ: f,
            scaleX: p,
            scaleY: p,
            scale: p,
            opacity: m,
            backgroundColor: m,
            color: m,
            default: p
        }
          , y = (t, {keyframes: e}) => e.length > 2 ? v : (g[t] || g.default)(e[1]);
        var x = n(9155);
        let b = (t, e) => "zIndex" !== t && !!("number" == typeof e || Array.isArray(e) || "string" == typeof e && x.P.test(e) && !e.startsWith("url("));
        var w = n(9006)
          , P = n(7924);
        let E = {
            waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate")
        }
          , T = {}
          , A = {};
        for (let t in E)
            A[t] = () => (void 0 === T[t] && (T[t] = E[t]()),
            T[t]);
        let C = new Set(["opacity"])
          , S = (t, e, n, f={}) => p => {
            let m = (0,
            P.ev)(f, t) || {}
              , v = m.delay || f.delay || 0
              , {elapsed: g=0} = f;
            g -= (0,
            i.w)(v);
            let x = function(t, e, n, r) {
                let i = b(e, n)
                  , o = void 0 !== r.from ? r.from : t.get();
                return ("none" === o && i && "string" == typeof n ? o = (0,
                w.T)(e, n) : (0,
                P.Fr)(o) && "string" == typeof n ? o = (0,
                P.GZ)(n) : !Array.isArray(n) && (0,
                P.Fr)(n) && "string" == typeof o && (n = (0,
                P.GZ)(o)),
                Array.isArray(n)) ? (null === n[0] && (n[0] = o),
                n) : [o, n]
            }(e, t, n, m)
              , E = x[0]
              , T = x[x.length - 1]
              , S = b(t, E)
              , R = b(t, T);
            (0,
            r.K)(S === R, `You are trying to animate ${t} from "${E}" to "${T}". ${E} is not an animatable value - to enable this animation set ${E} to a value animatable to ${T} via the \`style\` property.`);
            let V = {
                keyframes: x,
                velocity: e.getVelocity(),
                ...m,
                elapsed: g,
                onUpdate: t => {
                    e.set(t),
                    m.onUpdate && m.onUpdate(t)
                }
                ,
                onComplete: () => {
                    p(),
                    m.onComplete && m.onComplete()
                }
            };
            if (!S || !R || o.current || !1 === m.type)
                return function({keyframes: t, elapsed: e, onUpdate: n, onComplete: r}) {
                    let i = () => (n && n(t[t.length - 1]),
                    r && r(),
                    () => {}
                    );
                    return e ? (0,
                    c.g)(i, -e) : i()
                }(V);
            if ("inertia" === m.type) {
                let t = function({keyframes: t, velocity: e=0, min: n, max: r, power: i=.8, timeConstant: o=750, bounceStiffness: s=500, bounceDamping: l=10, restDelta: u=1, modifyTarget: c, driver: f, onUpdate: p, onComplete: m, onStop: v}) {
                    let g;
                    let y = t[0];
                    function x(t) {
                        return void 0 !== n && t < n || void 0 !== r && t > r
                    }
                    function b(t) {
                        return void 0 === n ? r : void 0 === r ? n : Math.abs(n - t) < Math.abs(r - t) ? n : r
                    }
                    function w(t) {
                        null == g || g.stop(),
                        g = (0,
                        a.jt)({
                            keyframes: [0, 1],
                            velocity: 0,
                            ...t,
                            driver: f,
                            onUpdate: e => {
                                var n;
                                null == p || p(e),
                                null === (n = t.onUpdate) || void 0 === n || n.call(t, e)
                            }
                            ,
                            onComplete: m,
                            onStop: v
                        })
                    }
                    function P(t) {
                        w({
                            type: "spring",
                            stiffness: s,
                            damping: l,
                            restDelta: u,
                            ...t
                        })
                    }
                    if (x(y))
                        P({
                            velocity: e,
                            keyframes: [y, b(y)]
                        });
                    else {
                        let t, r, s = i * e + y;
                        void 0 !== c && (s = c(s));
                        let a = b(s)
                          , l = a === n ? -1 : 1;
                        w({
                            type: "decay",
                            keyframes: [y, 0],
                            velocity: e,
                            timeConstant: o,
                            power: i,
                            restDelta: u,
                            modifyTarget: c,
                            onUpdate: x(s) ? n => {
                                t = r,
                                r = n,
                                e = (0,
                                h.R)(n - t, d.frameData.delta),
                                (1 === l && n > a || -1 === l && n < a) && P({
                                    keyframes: [n, a],
                                    velocity: e
                                })
                            }
                            : void 0
                        })
                    }
                    return {
                        stop: () => null == g ? void 0 : g.stop()
                    }
                }(V);
                return () => t.stop()
            }
            (0,
            P.rw)(m) || (V = {
                ...V,
                ...y(t, V)
            }),
            V.duration && (V.duration = (0,
            i.w)(V.duration)),
            V.repeatDelay && (V.repeatDelay = (0,
            i.w)(V.repeatDelay));
            let M = e.owner
              , j = M && M.current;
            if (A.waapi() && C.has(t) && !V.repeatDelay && "mirror" !== V.repeatType && 0 !== V.damping && M && j instanceof HTMLElement && !M.getProps().onUpdate)
                return function(t, e, {onUpdate: n, onComplete: r, ...i}) {
                    var o;
                    let {keyframes: c, duration: h=.3, elapsed: d=0, ease: f} = i;
                    if ("spring" === i.type || !(!(o = i.ease) || Array.isArray(o) || "string" == typeof o && u[o])) {
                        let t = (0,
                        a.jt)(i)
                          , e = {
                            done: !1,
                            value: c[0]
                        }
                          , n = []
                          , r = 0;
                        for (; !e.done; )
                            e = t.sample(r),
                            n.push(e.value),
                            r += 10;
                        c = n,
                        h = r - 10,
                        f = "linear"
                    }
                    let p = function(t, e, n, {delay: r=0, duration: i, repeat: o=0, repeatType: s="loop", ease: a, times: c}={}) {
                        return t.animate({
                            [e]: n,
                            offset: c
                        }, {
                            delay: r,
                            duration: i,
                            easing: function(t) {
                                if (t)
                                    return Array.isArray(t) ? l(t) : u[t]
                            }(a),
                            fill: "both",
                            iterations: o + 1,
                            direction: "reverse" === s ? "alternate" : "normal"
                        })
                    }(t.owner.current, e, c, {
                        ...i,
                        delay: -d,
                        duration: h,
                        ease: f
                    });
                    return p.onfinish = () => {
                        t.set(c[c.length - 1]),
                        r && r()
                    }
                    ,
                    () => {
                        let {currentTime: e} = p;
                        if (e) {
                            let n = (0,
                            a.jt)(i);
                            t.setWithVelocity(n.sample(e - 10).value, n.sample(e).value, 10)
                        }
                        s.Z_.update( () => p.cancel())
                    }
                }(e, t, V);
            {
                let t = (0,
                a.jt)(V);
                return () => t.stop()
            }
        }
    },
    2057: function(t, e, n) {
        "use strict";
        n.d(e, {
            jt: function() {
                return O
            }
        });
        var r = n(933)
          , i = n(484);
        let o = t => t * t
          , s = (0,
        i.M)(o)
          , a = (0,
        r.o)(o);
        var l = n(3245)
          , u = n(3225)
          , c = n(6977);
        let h = (t, e, n) => (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t;
        function d(t, e, n, r) {
            if (t === e && n === r)
                return c.Z;
            let i = e => (function(t, e, n, r, i) {
                let o, s;
                let a = 0;
                do
                    (o = h(s = e + (n - e) / 2, r, i) - t) > 0 ? n = s : e = s;
                while (Math.abs(o) > 1e-7 && ++a < 12);
                return s
            }
            )(e, 0, 1, t, n);
            return t => 0 === t || 1 === t ? t : h(i(t), e, r)
        }
        var f = n(927);
        let p = d(.33, 1.53, .69, .99)
          , m = (0,
        i.M)(p)
          , v = (0,
        r.o)(m)
          , g = {
            linear: c.Z,
            easeIn: o,
            easeInOut: a,
            easeOut: s,
            circIn: f.Z7,
            circInOut: f.X7,
            circOut: f.Bn,
            backIn: m,
            backInOut: v,
            backOut: p,
            anticipate: t => (t *= 2) < 1 ? .5 * m(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
        }
          , y = t => {
            if (Array.isArray(t)) {
                (0,
                u.k)(4 === t.length, "Cubic bezier arrays must contain four numerical values.");
                let[e,n,r,i] = t;
                return d(e, n, r, i)
            }
            return "string" == typeof t ? ((0,
            u.k)(void 0 !== g[t], `Invalid easing type '${t}'`),
            g[t]) : t
        }
          , x = t => Array.isArray(t) && "number" != typeof t[0];
        function b({keyframes: t, ease: e=a, times: n, duration: r=300}) {
            t = [...t];
            let i = b[0]
              , o = x(e) ? e.map(y) : y(e)
              , s = {
                done: !1,
                value: i
            }
              , u = (n && n.length === b.length ? n : function(t) {
                let e = t.length;
                return t.map( (t, n) => 0 !== n ? n / (e - 1) : 0)
            }(t)).map(t => t * r);
            function c() {
                var e;
                return (0,
                l.s)(u, t, {
                    ease: Array.isArray(o) ? o : (e = t).map( () => o || a).splice(0, e.length - 1)
                })
            }
            let h = c();
            return {
                next: t => (s.value = h(t),
                s.done = t >= r,
                s),
                flipTarget: () => {
                    t.reverse(),
                    h = c()
                }
            }
        }
        var w = n(3021);
        function P(t, e) {
            return t * Math.sqrt(1 - e * e)
        }
        var E = n(9815);
        let T = ["duration", "bounce"]
          , A = ["stiffness", "damping", "mass"];
        function C(t, e) {
            return e.some(e => void 0 !== t[e])
        }
        function S({keyframes: t, restSpeed: e=2, restDelta: n=.01, ...r}) {
            let i = t[0]
              , o = t[t.length - 1]
              , s = {
                done: !1,
                value: i
            }
              , {stiffness: a, damping: l, mass: c, velocity: h, duration: d, isResolvedFromDuration: f} = function(t) {
                let e = {
                    velocity: 0,
                    stiffness: 100,
                    damping: 10,
                    mass: 1,
                    isResolvedFromDuration: !1,
                    ...t
                };
                if (!C(t, A) && C(t, T)) {
                    let n = function({duration: t=800, bounce: e=.25, velocity: n=0, mass: r=1}) {
                        let i, o;
                        (0,
                        u.K)(t <= 1e4, "Spring duration must be 10 seconds or less");
                        let s = 1 - e;
                        s = (0,
                        w.u)(.05, 1, s),
                        t = (0,
                        w.u)(.01, 10, t / 1e3),
                        s < 1 ? (i = e => {
                            let r = e * s
                              , i = r * t;
                            return .001 - (r - n) / P(e, s) * Math.exp(-i)
                        }
                        ,
                        o = e => {
                            let r = e * s * t
                              , o = Math.pow(s, 2) * Math.pow(e, 2) * t
                              , a = P(Math.pow(e, 2), s);
                            return (r * n + n - o) * Math.exp(-r) * (-i(e) + .001 > 0 ? -1 : 1) / a
                        }
                        ) : (i = e => -.001 + Math.exp(-e * t) * ((e - n) * t + 1),
                        o = e => t * t * (n - e) * Math.exp(-e * t));
                        let a = function(t, e, n) {
                            let r = n;
                            for (let n = 1; n < 12; n++)
                                r -= t(r) / e(r);
                            return r
                        }(i, o, 5 / t);
                        if (t *= 1e3,
                        isNaN(a))
                            return {
                                stiffness: 100,
                                damping: 10,
                                duration: t
                            };
                        {
                            let e = Math.pow(a, 2) * r;
                            return {
                                stiffness: e,
                                damping: 2 * s * Math.sqrt(r * e),
                                duration: t
                            }
                        }
                    }(t);
                    (e = {
                        ...e,
                        ...n,
                        velocity: 0,
                        mass: 1
                    }).isResolvedFromDuration = !0
                }
                return e
            }(r)
              , p = R
              , m = h ? -(h / 1e3) : 0
              , v = l / (2 * Math.sqrt(a * c));
            function g() {
                let t = o - i
                  , e = Math.sqrt(a / c) / 1e3;
                if (void 0 === n && (n = Math.min(Math.abs(o - i) / 100, .4)),
                v < 1) {
                    let n = P(e, v);
                    p = r => o - Math.exp(-v * e * r) * ((m + v * e * t) / n * Math.sin(n * r) + t * Math.cos(n * r))
                } else if (1 === v)
                    p = n => o - Math.exp(-e * n) * (t + (m + e * t) * n);
                else {
                    let n = e * Math.sqrt(v * v - 1);
                    p = r => {
                        let i = Math.exp(-v * e * r)
                          , s = Math.min(n * r, 300);
                        return o - i * ((m + v * e * t) * Math.sinh(s) + n * t * Math.cosh(s)) / n
                    }
                }
            }
            return g(),
            {
                next: t => {
                    let r = p(t);
                    if (f)
                        s.done = t >= d;
                    else {
                        let i = m;
                        if (0 !== t) {
                            if (v < 1) {
                                let e = Math.max(0, t - 5);
                                i = (0,
                                E.R)(r - p(e), t - e)
                            } else
                                i = 0
                        }
                        let a = Math.abs(i) <= e
                          , l = Math.abs(o - r) <= n;
                        s.done = a && l
                    }
                    return s.value = s.done ? o : r,
                    s
                }
                ,
                flipTarget: () => {
                    m = -m,
                    [i,o] = [o, i],
                    g()
                }
            }
        }
        S.needsInterpolation = (t, e) => "string" == typeof t || "string" == typeof e;
        let R = t => 0;
        var V = n(4132);
        let M = {
            decay: function({keyframes: t=[0], velocity: e=0, power: n=.8, timeConstant: r=350, restDelta: i=.5, modifyTarget: o}) {
                let s = t[0]
                  , a = {
                    done: !1,
                    value: s
                }
                  , l = n * e
                  , u = s + l
                  , c = void 0 === o ? u : o(u);
                return c !== u && (l = c - s),
                {
                    next: t => {
                        let e = -l * Math.exp(-t / r);
                        return a.done = !(e > i || e < -i),
                        a.value = a.done ? c : c + e,
                        a
                    }
                    ,
                    flipTarget: () => {}
                }
            },
            keyframes: b,
            tween: b,
            spring: S
        };
        function j(t, e, n=0) {
            return t - e - n
        }
        let k = t => {
            let e = ({delta: e}) => t(e);
            return {
                start: () => V.Z_.update(e, !0),
                stop: () => V.qY.update(e)
            }
        }
        ;
        function O({duration: t, driver: e=k, elapsed: n=0, repeat: r=0, repeatType: i="loop", repeatDelay: o=0, keyframes: s, autoplay: a=!0, onPlay: u, onStop: c, onComplete: h, onRepeat: d, onUpdate: f, type: p="keyframes", ...m}) {
            var v;
            let g, y, x;
            let b = 0
              , w = t
              , P = !1
              , E = !0
              , T = M[s.length > 2 ? "keyframes" : p]
              , A = s[0]
              , C = s[s.length - 1];
            (null === (v = T.needsInterpolation) || void 0 === v ? void 0 : v.call(T, A, C)) && (x = (0,
            l.s)([0, 100], [A, C], {
                clamp: !1
            }),
            s = [0, 100]);
            let S = T({
                ...m,
                duration: t,
                keyframes: s
            });
            return a && (u && u(),
            (g = e(function(t) {
                if (E || (t = -t),
                n += t,
                !P) {
                    let t = S.next(Math.max(0, n));
                    y = t.value,
                    x && (y = x(y)),
                    P = E ? t.done : n <= 0
                }
                if (f && f(y),
                P) {
                    if (0 === b && (w = void 0 !== w ? w : n),
                    b < r) {
                        var e, s;
                        e = n,
                        s = w,
                        (E ? e >= s + o : e <= -o) && (b++,
                        "reverse" === i ? n = function(t, e=0, n=0, r=!0) {
                            return r ? j(e + -t, e, n) : e - (t - e) + n
                        }(n, w, o, E = b % 2 == 0) : (n = j(n, w, o),
                        "mirror" === i && S.flipTarget()),
                        P = !1,
                        d && d())
                    } else
                        g.stop(),
                        h && h()
                }
            })).start()),
            {
                stop: () => {
                    c && c(),
                    g.stop()
                }
                ,
                sample: t => S.next(Math.max(0, t))
            }
        }
    },
    363: function(t, e, n) {
        "use strict";
        n.d(e, {
            C: function() {
                return r
            }
        });
        let r = t => Array.isArray(t)
    },
    7924: function(t, e, n) {
        "use strict";
        n.d(e, {
            Fr: function() {
                return o
            },
            GZ: function() {
                return s
            },
            ev: function() {
                return a
            },
            rw: function() {
                return i
            }
        });
        var r = n(9006);
        function i({when: t, delay: e, delayChildren: n, staggerChildren: r, staggerDirection: i, repeat: o, repeatType: s, repeatDelay: a, from: l, ...u}) {
            return !!Object.keys(u).length
        }
        function o(t) {
            return 0 === t || "string" == typeof t && 0 === parseFloat(t) && -1 === t.indexOf(" ")
        }
        function s(t) {
            return "number" == typeof t ? 0 : (0,
            r.T)("", t)
        }
        function a(t, e) {
            return t[e] || t.default || t
        }
    },
    781: function(t, e, n) {
        "use strict";
        n.d(e, {
            p: function() {
                return r
            }
        });
        let r = (0,
        n(2265).createContext)({})
    },
    5968: function(t, e, n) {
        "use strict";
        n.d(e, {
            _: function() {
                return r
            }
        });
        let r = (0,
        n(2265).createContext)({
            transformPagePoint: t => t,
            isStatic: !1,
            reducedMotion: "never"
        })
    },
    8243: function(t, e, n) {
        "use strict";
        n.d(e, {
            O: function() {
                return r
            }
        });
        let r = (0,
        n(2265).createContext)(null)
    },
    927: function(t, e, n) {
        "use strict";
        n.d(e, {
            Bn: function() {
                return s
            },
            X7: function() {
                return a
            },
            Z7: function() {
                return o
            }
        });
        var r = n(933)
          , i = n(484);
        let o = t => 1 - Math.sin(Math.acos(t))
          , s = (0,
        i.M)(o)
          , a = (0,
        r.o)(s)
    },
    933: function(t, e, n) {
        "use strict";
        n.d(e, {
            o: function() {
                return r
            }
        });
        let r = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2
    },
    484: function(t, e, n) {
        "use strict";
        n.d(e, {
            M: function() {
                return r
            }
        });
        let r = t => e => 1 - t(1 - e)
    },
    6442: function(t, e, n) {
        "use strict";
        n.d(e, {
            frameData: function() {
                return r
            }
        });
        let r = {
            delta: 0,
            timestamp: 0
        }
    },
    4132: function(t, e, n) {
        "use strict";
        n.d(e, {
            qY: function() {
                return f
            },
            iW: function() {
                return p
            },
            Z_: function() {
                return d
            }
        });
        let r = 1 / 60 * 1e3
          , i = "undefined" != typeof performance ? () => performance.now() : () => Date.now()
          , o = "undefined" != typeof window ? t => window.requestAnimationFrame(t) : t => setTimeout( () => t(i()), r);
        var s = n(6442);
        let a = !0
          , l = !1
          , u = !1
          , c = ["read", "update", "preRender", "render", "postRender"]
          , h = c.reduce( (t, e) => (t[e] = function(t) {
            let e = []
              , n = []
              , r = 0
              , i = !1
              , o = !1
              , s = new WeakSet
              , a = {
                schedule: (t, o=!1, a=!1) => {
                    let l = a && i
                      , u = l ? e : n;
                    return o && s.add(t),
                    -1 === u.indexOf(t) && (u.push(t),
                    l && i && (r = e.length)),
                    t
                }
                ,
                cancel: t => {
                    let e = n.indexOf(t);
                    -1 !== e && n.splice(e, 1),
                    s.delete(t)
                }
                ,
                process: l => {
                    if (i) {
                        o = !0;
                        return
                    }
                    if (i = !0,
                    [e,n] = [n, e],
                    n.length = 0,
                    r = e.length)
                        for (let n = 0; n < r; n++) {
                            let r = e[n];
                            r(l),
                            s.has(r) && (a.schedule(r),
                            t())
                        }
                    i = !1,
                    o && (o = !1,
                    a.process(l))
                }
            };
            return a
        }( () => l = !0),
        t), {})
          , d = c.reduce( (t, e) => {
            let n = h[e];
            return t[e] = (t, e=!1, r=!1) => (l || g(),
            n.schedule(t, e, r)),
            t
        }
        , {})
          , f = c.reduce( (t, e) => (t[e] = h[e].cancel,
        t), {})
          , p = c.reduce( (t, e) => (t[e] = () => h[e].process(s.frameData),
        t), {})
          , m = t => h[t].process(s.frameData)
          , v = t => {
            l = !1,
            s.frameData.delta = a ? r : Math.max(Math.min(t - s.frameData.timestamp, 40), 1),
            s.frameData.timestamp = t,
            u = !0,
            c.forEach(m),
            u = !1,
            l && (a = !1,
            o(v))
        }
          , g = () => {
            l = !0,
            a = !0,
            u || o(v)
        }
    },
    5824: function(t, e, n) {
        "use strict";
        n.d(e, {
            E: function() {
                return ra
            }
        });
        var r, i, o, s, a, l = n(2265), u = n(5968);
        let c = (0,
        l.createContext)({});
        var h = n(8243)
          , d = n(538);
        let f = (0,
        l.createContext)({
            strict: !1
        });
        function p(t) {
            return "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
        }
        function m(t) {
            return "string" == typeof t || Array.isArray(t)
        }
        function v(t) {
            return "object" == typeof t && "function" == typeof t.start
        }
        let g = ["initial", "animate", "exit", "whileHover", "whileDrag", "whileTap", "whileFocus", "whileInView"];
        function y(t) {
            return v(t.animate) || g.some(e => m(t[e]))
        }
        function x(t) {
            return !!(y(t) || t.variants)
        }
        function b(t) {
            return Array.isArray(t) ? t.join(" ") : t
        }
        let w = t => ({
            isEnabled: e => t.some(t => !!e[t])
        })
          , P = {
            measureLayout: w(["layout", "layoutId", "drag"]),
            animation: w(["animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag", "whileInView"]),
            exit: w(["exit"]),
            drag: w(["drag", "dragControls"]),
            focus: w(["whileFocus"]),
            hover: w(["whileHover", "onHoverStart", "onHoverEnd"]),
            tap: w(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
            pan: w(["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]),
            inView: w(["whileInView", "onViewportEnter", "onViewportLeave"])
        };
        var E = n(6613)
          , T = n(961);
        let A = {
            hasAnimatedSinceResize: !0,
            hasEverUpdated: !1
        }
          , C = 1;
        var S = n(781);
        class R extends l.Component {
            getSnapshotBeforeUpdate() {
                let {visualElement: t, props: e} = this.props;
                return t && t.setProps(e),
                null
            }
            componentDidUpdate() {}
            render() {
                return this.props.children
            }
        }
        let V = (0,
        l.createContext)({})
          , M = Symbol.for("motionComponentSymbol")
          , j = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
        function k(t) {
            if ("string" != typeof t || t.includes("-"))
                ;
            else if (j.indexOf(t) > -1 || /[A-Z]/.test(t))
                return !0;
            return !1
        }
        let O = {};
        var L = n(9303);
        function D(t, {layout: e, layoutId: n}) {
            return L.G.has(t) || t.startsWith("origin") || (e || void 0 !== n) && (!!O[t] || "opacity" === t)
        }
        var _ = n(5735);
        let B = {
            x: "translateX",
            y: "translateY",
            z: "translateZ",
            transformPerspective: "perspective"
        }
          , I = (t, e) => L._.indexOf(t) - L._.indexOf(e);
        function F(t) {
            return t.startsWith("--")
        }
        let N = (t, e) => e && "number" == typeof t ? e.transform(t) : t;
        var U = n(3002);
        function $(t, e, n, r) {
            let {style: i, vars: o, transform: s, transformKeys: a, transformOrigin: l} = t;
            a.length = 0;
            let u = !1
              , c = !1
              , h = !0;
            for (let t in e) {
                let n = e[t];
                if (F(t)) {
                    o[t] = n;
                    continue
                }
                let r = U.j[t]
                  , d = N(n, r);
                if (L.G.has(t)) {
                    if (u = !0,
                    s[t] = d,
                    a.push(t),
                    !h)
                        continue;
                    n !== (r.default || 0) && (h = !1)
                } else
                    t.startsWith("origin") ? (c = !0,
                    l[t] = d) : i[t] = d
            }
            if (!e.transform && (u || r ? i.transform = function({transform: t, transformKeys: e}, {enableHardwareAcceleration: n=!0, allowTransformNone: r=!0}, i, o) {
                let s = "";
                for (let n of (e.sort(I),
                e))
                    s += `${B[n] || n}(${t[n]}) `;
                return n && !t.z && (s += "translateZ(0)"),
                s = s.trim(),
                o ? s = o(t, i ? "" : s) : r && i && (s = "none"),
                s
            }(t, n, h, r) : i.transform && (i.transform = "none")),
            c) {
                let {originX: t="50%", originY: e="50%", originZ: n=0} = l;
                i.transformOrigin = `${t} ${e} ${n}`
            }
        }
        let W = () => ({
            style: {},
            transform: {},
            transformKeys: [],
            transformOrigin: {},
            vars: {}
        });
        function z(t, e, n) {
            for (let r in e)
                (0,
                _.i)(e[r]) || D(r, n) || (t[r] = e[r])
        }
        let Y = new Set(["initial", "style", "values", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "layout", "layoutId", "layoutDependency", "onLayoutAnimationStart", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "drag", "dragControls", "dragListener", "dragConstraints", "dragDirectionLock", "dragSnapToOrigin", "_dragX", "_dragY", "dragElastic", "dragMomentum", "dragPropagation", "dragTransition", "onHoverStart", "onHoverEnd", "layoutScroll", "whileInView", "onViewportEnter", "onViewportLeave", "viewport", "whileTap", "onTap", "onTapStart", "onTapCancel", "animate", "exit", "variants", "whileHover", "whileTap", "whileFocus", "whileDrag", "whileInView", "onPan", "onPanStart", "onPanSessionStart", "onPanEnd"]);
        function Z(t) {
            return Y.has(t)
        }
        let q = t => !Z(t);
        try {
            (r = require("@emotion/is-prop-valid").default) && (q = t => t.startsWith("on") ? !Z(t) : r(t))
        } catch (t) {}
        var H = n(3681);
        function G(t, e, n) {
            return "string" == typeof t ? t : H.px.transform(e + n * t)
        }
        let K = {
            offset: "stroke-dashoffset",
            array: "stroke-dasharray"
        }
          , X = {
            offset: "strokeDashoffset",
            array: "strokeDasharray"
        };
        function Q(t, {attrX: e, attrY: n, originX: r, originY: i, pathLength: o, pathSpacing: s=1, pathOffset: a=0, ...l}, u, c, h) {
            if ($(t, l, u, h),
            c) {
                t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
                return
            }
            t.attrs = t.style,
            t.style = {};
            let {attrs: d, style: f, dimensions: p} = t;
            d.transform && (p && (f.transform = d.transform),
            delete d.transform),
            p && (void 0 !== r || void 0 !== i || f.transform) && (f.transformOrigin = function(t, e, n) {
                let r = G(e, t.x, t.width)
                  , i = G(n, t.y, t.height);
                return `${r} ${i}`
            }(p, void 0 !== r ? r : .5, void 0 !== i ? i : .5)),
            void 0 !== e && (d.x = e),
            void 0 !== n && (d.y = n),
            void 0 !== o && function(t, e, n=1, r=0, i=!0) {
                t.pathLength = 1;
                let o = i ? K : X;
                t[o.offset] = H.px.transform(-r);
                let s = H.px.transform(e)
                  , a = H.px.transform(n);
                t[o.array] = `${s} ${a}`
            }(d, o, s, a, !1)
        }
        let J = () => ({
            ...W(),
            attrs: {}
        })
          , tt = t => "string" == typeof t && "svg" === t.toLowerCase();
        var te = n(7905);
        function tn(t, {style: e, vars: n}, r, i) {
            for (let o in Object.assign(t.style, e, i && i.getProjectionStyles(r)),
            n)
                t.style.setProperty(o, n[o])
        }
        let tr = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
        function ti(t, e, n, r) {
            for (let n in tn(t, e, void 0, r),
            e.attrs)
                t.setAttribute(tr.has(n) ? n : (0,
                te.D)(n), e.attrs[n])
        }
        function to(t) {
            let {style: e} = t
              , n = {};
            for (let r in e)
                ((0,
                _.i)(e[r]) || D(r, t)) && (n[r] = e[r]);
            return n
        }
        function ts(t) {
            let e = to(t);
            for (let n in t)
                (0,
                _.i)(t[n]) && (e["x" === n || "y" === n ? "attr" + n.toUpperCase() : n] = t[n]);
            return e
        }
        var ta = n(3331)
          , tl = n(1832);
        function tu(t) {
            let e = (0,
            _.i)(t) ? t.get() : t;
            return (0,
            tl.p)(e) ? e.toValue() : e
        }
        let tc = t => (e, n) => {
            let r = (0,
            l.useContext)(c)
              , i = (0,
            l.useContext)(h.O)
              , o = () => (function({scrapeMotionValuesFromProps: t, createRenderState: e, onMount: n}, r, i, o) {
                let s = {
                    latestValues: function(t, e, n, r) {
                        let i = {}
                          , o = r(t);
                        for (let t in o)
                            i[t] = tu(o[t]);
                        let {initial: s, animate: a} = t
                          , l = y(t)
                          , u = x(t);
                        e && u && !l && !1 !== t.inherit && (void 0 === s && (s = e.initial),
                        void 0 === a && (a = e.animate));
                        let c = !!n && !1 === n.initial
                          , h = (c = c || !1 === s) ? a : s;
                        return h && "boolean" != typeof h && !v(h) && (Array.isArray(h) ? h : [h]).forEach(e => {
                            let n = (0,
                            ta.o)(t, e);
                            if (!n)
                                return;
                            let {transitionEnd: r, transition: o, ...s} = n;
                            for (let t in s) {
                                let e = s[t];
                                if (Array.isArray(e)) {
                                    let t = c ? e.length - 1 : 0;
                                    e = e[t]
                                }
                                null !== e && (i[t] = e)
                            }
                            for (let t in r)
                                i[t] = r[t]
                        }
                        ),
                        i
                    }(r, i, o, t),
                    renderState: e()
                };
                return n && (s.mount = t => n(r, t, s)),
                s
            }
            )(t, e, r, i);
            return n ? o() : (0,
            T.h)(o)
        }
          , th = {
            useVisualState: tc({
                scrapeMotionValuesFromProps: ts,
                createRenderState: J,
                onMount: (t, e, {renderState: n, latestValues: r}) => {
                    try {
                        n.dimensions = "function" == typeof e.getBBox ? e.getBBox() : e.getBoundingClientRect()
                    } catch (t) {
                        n.dimensions = {
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        }
                    }
                    Q(n, r, {
                        enableHardwareAcceleration: !1
                    }, tt(e.tagName), t.transformTemplate),
                    ti(e, n)
                }
            })
        }
          , td = {
            useVisualState: tc({
                scrapeMotionValuesFromProps: to,
                createRenderState: W
            })
        };
        function tf(t, e, n, r={
            passive: !0
        }) {
            return t.addEventListener(e, n, r),
            () => t.removeEventListener(e, n)
        }
        function tp(t, e, n, r) {
            (0,
            l.useEffect)( () => {
                let i = t.current;
                if (n && i)
                    return tf(i, e, n, r)
            }
            , [t, e, n, r])
        }
        function tm(t) {
            return "undefined" != typeof PointerEvent && t instanceof PointerEvent ? !("mouse" !== t.pointerType) : t instanceof MouseEvent
        }
        (i = s || (s = {})).Animate = "animate",
        i.Hover = "whileHover",
        i.Tap = "whileTap",
        i.Drag = "whileDrag",
        i.Focus = "whileFocus",
        i.InView = "whileInView",
        i.Exit = "exit";
        let tv = {
            pageX: 0,
            pageY: 0
        };
        function tg(t, e="page") {
            return {
                point: t.touches ? function(t, e="page") {
                    let n = t.touches[0] || t.changedTouches[0] || tv;
                    return {
                        x: n[e + "X"],
                        y: n[e + "Y"]
                    }
                }(t, e) : function(t, e="page") {
                    return {
                        x: t[e + "X"],
                        y: t[e + "Y"]
                    }
                }(t, e)
            }
        }
        let ty = (t, e=!1) => {
            let n = e => t(e, tg(e));
            return e ? t => {
                let e = t instanceof MouseEvent;
                (!e || e && 0 === t.button) && n(t)
            }
            : n
        }
          , tx = () => E.j && null === window.onpointerdown
          , tb = () => E.j && null === window.ontouchstart
          , tw = () => E.j && null === window.onmousedown
          , tP = {
            pointerdown: "mousedown",
            pointermove: "mousemove",
            pointerup: "mouseup",
            pointercancel: "mousecancel",
            pointerover: "mouseover",
            pointerout: "mouseout",
            pointerenter: "mouseenter",
            pointerleave: "mouseleave"
        }
          , tE = {
            pointerdown: "touchstart",
            pointermove: "touchmove",
            pointerup: "touchend",
            pointercancel: "touchcancel"
        };
        function tT(t) {
            if (tx())
                ;
            else if (tb())
                return tE[t];
            else if (tw())
                return tP[t];
            return t
        }
        function tA(t, e, n, r) {
            return tf(t, tT(e), ty(n, "pointerdown" === e), r)
        }
        function tC(t, e, n, r) {
            return tp(t, tT(e), n && ty(n, "pointerdown" === e), r)
        }
        function tS(t) {
            let e = null;
            return () => null === e && (e = t,
            () => {
                e = null
            }
            )
        }
        let tR = tS("dragHorizontal")
          , tV = tS("dragVertical");
        function tM(t) {
            let e = !1;
            if ("y" === t)
                e = tV();
            else if ("x" === t)
                e = tR();
            else {
                let t = tR()
                  , n = tV();
                t && n ? e = () => {
                    t(),
                    n()
                }
                : (t && t(),
                n && n())
            }
            return e
        }
        function tj() {
            let t = tM(!0);
            return !t || (t(),
            !1)
        }
        function tk(t, e, n) {
            return (r, i) => {
                !(!tm(r) || tj()) && (t.animationState && t.animationState.setActive(s.Hover, e),
                n && n(r, i))
            }
        }
        let tO = (t, e) => !!e && (t === e || tO(t, e.parentElement));
        var tL = n(3276)
          , tD = n(4694)
          , t_ = n(1332)
          , tB = n(8704);
        let tI = new WeakMap
          , tF = new WeakMap
          , tN = t => {
            let e = tI.get(t.target);
            e && e(t)
        }
          , tU = t => {
            t.forEach(tN)
        }
          , t$ = {
            some: 0,
            all: 1
        }
          , tW = t => e => (t(e),
        null)
          , tz = {
            inView: tW(function({visualElement: t, whileInView: e, onViewportEnter: n, onViewportLeave: r, viewport: i={}}) {
                let o = (0,
                l.useRef)({
                    hasEnteredView: !1,
                    isInView: !1
                })
                  , a = !!(e || n || r);
                i.once && o.current.hasEnteredView && (a = !1),
                ("undefined" == typeof IntersectionObserver ? function(t, e, n, {fallback: r=!0}) {
                    (0,
                    l.useEffect)( () => {
                        t && r && ("production" !== t_.O && (0,
                        tB.O)(!1, "IntersectionObserver not available on this device. whileInView animations will trigger on mount."),
                        requestAnimationFrame( () => {
                            e.hasEnteredView = !0;
                            let {onViewportEnter: t} = n.getProps();
                            t && t(null),
                            n.animationState && n.animationState.setActive(s.InView, !0)
                        }
                        ))
                    }
                    , [t])
                }
                : function(t, e, n, {root: r, margin: i, amount: o="some", once: a}) {
                    (0,
                    l.useEffect)( () => {
                        if (!t || !n.current)
                            return;
                        let l = {
                            root: null == r ? void 0 : r.current,
                            rootMargin: i,
                            threshold: "number" == typeof o ? o : t$[o]
                        };
                        return function(t, e, n) {
                            let r = function({root: t, ...e}) {
                                let n = t || document;
                                tF.has(n) || tF.set(n, {});
                                let r = tF.get(n)
                                  , i = JSON.stringify(e);
                                return r[i] || (r[i] = new IntersectionObserver(tU,{
                                    root: t,
                                    ...e
                                })),
                                r[i]
                            }(e);
                            return tI.set(t, n),
                            r.observe(t),
                            () => {
                                tI.delete(t),
                                r.unobserve(t)
                            }
                        }(n.current, l, t => {
                            let {isIntersecting: r} = t;
                            if (e.isInView === r || (e.isInView = r,
                            a && !r && e.hasEnteredView))
                                return;
                            r && (e.hasEnteredView = !0),
                            n.animationState && n.animationState.setActive(s.InView, r);
                            let i = n.getProps()
                              , o = r ? i.onViewportEnter : i.onViewportLeave;
                            o && o(t)
                        }
                        )
                    }
                    , [t, r, i, o])
                }
                )(a, o.current, t, i)
            }),
            tap: tW(function({onTap: t, onTapStart: e, onTapCancel: n, whileTap: r, visualElement: i}) {
                let o = t || e || n || r
                  , a = (0,
                l.useRef)(!1)
                  , u = (0,
                l.useRef)(null)
                  , c = {
                    passive: !(e || t || n || m)
                };
                function h() {
                    u.current && u.current(),
                    u.current = null
                }
                function d() {
                    return h(),
                    a.current = !1,
                    i.animationState && i.animationState.setActive(s.Tap, !1),
                    !tj()
                }
                function f(e, r) {
                    d() && (tO(i.current, e.target) ? t && t(e, r) : n && n(e, r))
                }
                function p(t, e) {
                    d() && n && n(t, e)
                }
                function m(t, n) {
                    h(),
                    !a.current && (a.current = !0,
                    u.current = (0,
                    tD.z)(tA(window, "pointerup", f, c), tA(window, "pointercancel", p, c)),
                    i.animationState && i.animationState.setActive(s.Tap, !0),
                    e && e(t, n))
                }
                tC(i, "pointerdown", o ? m : void 0, c),
                (0,
                tL.z)(h)
            }),
            focus: tW(function({whileFocus: t, visualElement: e}) {
                let {animationState: n} = e;
                tp(e, "focus", t ? () => {
                    n && n.setActive(s.Focus, !0)
                }
                : void 0),
                tp(e, "blur", t ? () => {
                    n && n.setActive(s.Focus, !1)
                }
                : void 0)
            }),
            hover: tW(function({onHoverStart: t, onHoverEnd: e, whileHover: n, visualElement: r}) {
                tC(r, "pointerenter", t || n ? tk(r, !0, t) : void 0, {
                    passive: !t
                }),
                tC(r, "pointerleave", e || n ? tk(r, !1, e) : void 0, {
                    passive: !e
                })
            })
        };
        function tY() {
            let t = (0,
            l.useContext)(h.O);
            if (null === t)
                return [!0, null];
            let {isPresent: e, onExitComplete: n, register: r} = t
              , i = (0,
            l.useId)();
            return (0,
            l.useEffect)( () => r(i), []),
            !e && n ? [!1, () => n && n(i)] : [!0]
        }
        var tZ = n(363);
        function tq(t, e) {
            if (!Array.isArray(e))
                return !1;
            let n = e.length;
            if (n !== t.length)
                return !1;
            for (let r = 0; r < n; r++)
                if (e[r] !== t[r])
                    return !1;
            return !0
        }
        var tH = n(6408)
          , tG = n(2593);
        let tK = [s.Animate, s.InView, s.Focus, s.Hover, s.Tap, s.Drag, s.Exit]
          , tX = [...tK].reverse()
          , tQ = tK.length;
        function tJ(t=!1) {
            return {
                isActive: t,
                protectedKeys: {},
                needsAnimating: {},
                prevResolvedValues: {}
            }
        }
        let t0 = {
            animation: tW( ({visualElement: t, animate: e}) => {
                t.animationState || (t.animationState = function(t) {
                    let e = e => Promise.all(e.map( ({animation: e, options: n}) => (0,
                    tH.d5)(t, e, n)))
                      , n = {
                        [s.Animate]: tJ(!0),
                        [s.InView]: tJ(),
                        [s.Hover]: tJ(),
                        [s.Tap]: tJ(),
                        [s.Drag]: tJ(),
                        [s.Focus]: tJ(),
                        [s.Exit]: tJ()
                    }
                      , r = !0
                      , i = (e, n) => {
                        let r = (0,
                        tG.x)(t, n);
                        if (r) {
                            let {transition: t, transitionEnd: n, ...i} = r;
                            e = {
                                ...e,
                                ...i,
                                ...n
                            }
                        }
                        return e
                    }
                    ;
                    function o(o, s) {
                        let a = t.getProps()
                          , l = t.getVariantContext(!0) || {}
                          , u = []
                          , c = new Set
                          , h = {}
                          , d = 1 / 0;
                        for (let e = 0; e < tQ; e++) {
                            var f;
                            let p = tX[e]
                              , g = n[p]
                              , y = void 0 !== a[p] ? a[p] : l[p]
                              , x = m(y)
                              , b = p === s ? g.isActive : null;
                            !1 === b && (d = e);
                            let w = y === l[p] && y !== a[p] && x;
                            if (w && r && t.manuallyAnimateOnMount && (w = !1),
                            g.protectedKeys = {
                                ...h
                            },
                            !g.isActive && null === b || !y && !g.prevProp || v(y) || "boolean" == typeof y)
                                continue;
                            let P = (f = g.prevProp,
                            "string" == typeof y ? y !== f : !!Array.isArray(y) && !tq(y, f))
                              , E = P || p === s && g.isActive && !w && x || e > d && x
                              , T = Array.isArray(y) ? y : [y]
                              , A = T.reduce(i, {});
                            !1 === b && (A = {});
                            let {prevResolvedValues: C={}} = g
                              , S = {
                                ...C,
                                ...A
                            }
                              , R = t => {
                                E = !0,
                                c.delete(t),
                                g.needsAnimating[t] = !0
                            }
                            ;
                            for (let t in S) {
                                let e = A[t]
                                  , n = C[t];
                                h.hasOwnProperty(t) || (e !== n ? (0,
                                tZ.C)(e) && (0,
                                tZ.C)(n) ? !tq(e, n) || P ? R(t) : g.protectedKeys[t] = !0 : void 0 !== e ? R(t) : c.add(t) : void 0 !== e && c.has(t) ? R(t) : g.protectedKeys[t] = !0)
                            }
                            g.prevProp = y,
                            g.prevResolvedValues = A,
                            g.isActive && (h = {
                                ...h,
                                ...A
                            }),
                            r && t.blockInitialAnimation && (E = !1),
                            E && !w && u.push(...T.map(t => ({
                                animation: t,
                                options: {
                                    type: p,
                                    ...o
                                }
                            })))
                        }
                        if (c.size) {
                            let e = {};
                            c.forEach(n => {
                                let r = t.getBaseTarget(n);
                                void 0 !== r && (e[n] = r)
                            }
                            ),
                            u.push({
                                animation: e
                            })
                        }
                        let p = !!u.length;
                        return r && !1 === a.initial && !t.manuallyAnimateOnMount && (p = !1),
                        r = !1,
                        p ? e(u) : Promise.resolve()
                    }
                    return {
                        animateChanges: o,
                        setActive: function(e, r, i) {
                            var s;
                            if (n[e].isActive === r)
                                return Promise.resolve();
                            null === (s = t.variantChildren) || void 0 === s || s.forEach(t => {
                                var n;
                                return null === (n = t.animationState) || void 0 === n ? void 0 : n.setActive(e, r)
                            }
                            ),
                            n[e].isActive = r;
                            let a = o(i, e);
                            for (let t in n)
                                n[t].protectedKeys = {};
                            return a
                        },
                        setAnimateFunction: function(n) {
                            e = n(t)
                        },
                        getState: () => n
                    }
                }(t)),
                v(e) && (0,
                l.useEffect)( () => e.subscribe(t), [e])
            }
            ),
            exit: tW(t => {
                let {custom: e, visualElement: n} = t
                  , [r,i] = tY()
                  , o = (0,
                l.useContext)(h.O);
                (0,
                l.useEffect)( () => {
                    n.isPresent = r;
                    let t = n.animationState && n.animationState.setActive(s.Exit, !r, {
                        custom: o && o.custom || e
                    });
                    t && !r && t.then(i)
                }
                , [r])
            }
            )
        };
        var t1 = n(3225)
          , t2 = n(4132)
          , t5 = n(1356);
        let t3 = (t, e) => Math.abs(t - e);
        var t9 = n(6442);
        class t6 {
            constructor(t, e, {transformPagePoint: n}={}) {
                if (this.startEvent = null,
                this.lastMoveEvent = null,
                this.lastMoveEventInfo = null,
                this.handlers = {},
                this.updatePoint = () => {
                    var t, e;
                    if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                        return;
                    let n = t7(this.lastMoveEventInfo, this.history)
                      , r = null !== this.startEvent
                      , i = (t = n.offset,
                    e = {
                        x: 0,
                        y: 0
                    },
                    Math.sqrt(t3(t.x, e.x) ** 2 + t3(t.y, e.y) ** 2) >= 3);
                    if (!r && !i)
                        return;
                    let {point: o} = n
                      , {timestamp: s} = t9.frameData;
                    this.history.push({
                        ...o,
                        timestamp: s
                    });
                    let {onStart: a, onMove: l} = this.handlers;
                    r || (a && a(this.lastMoveEvent, n),
                    this.startEvent = this.lastMoveEvent),
                    l && l(this.lastMoveEvent, n)
                }
                ,
                this.handlePointerMove = (t, e) => {
                    if (this.lastMoveEvent = t,
                    this.lastMoveEventInfo = t8(e, this.transformPagePoint),
                    tm(t) && 0 === t.buttons) {
                        this.handlePointerUp(t, e);
                        return
                    }
                    t2.Z_.update(this.updatePoint, !0)
                }
                ,
                this.handlePointerUp = (t, e) => {
                    this.end();
                    let {onEnd: n, onSessionEnd: r} = this.handlers
                      , i = t7(t8(e, this.transformPagePoint), this.history);
                    this.startEvent && n && n(t, i),
                    r && r(t, i)
                }
                ,
                t.touches && t.touches.length > 1)
                    return;
                this.handlers = e,
                this.transformPagePoint = n;
                let r = t8(tg(t), this.transformPagePoint)
                  , {point: i} = r
                  , {timestamp: o} = t9.frameData;
                this.history = [{
                    ...i,
                    timestamp: o
                }];
                let {onSessionStart: s} = e;
                s && s(t, t7(r, this.history)),
                this.removeListeners = (0,
                tD.z)(tA(window, "pointermove", this.handlePointerMove), tA(window, "pointerup", this.handlePointerUp), tA(window, "pointercancel", this.handlePointerUp))
            }
            updateHandlers(t) {
                this.handlers = t
            }
            end() {
                this.removeListeners && this.removeListeners(),
                t2.qY.update(this.updatePoint)
            }
        }
        function t8(t, e) {
            return e ? {
                point: e(t.point)
            } : t
        }
        function t4(t, e) {
            return {
                x: t.x - e.x,
                y: t.y - e.y
            }
        }
        function t7({point: t}, e) {
            return {
                point: t,
                delta: t4(t, et(e)),
                offset: t4(t, e[0]),
                velocity: function(t, e) {
                    if (t.length < 2)
                        return {
                            x: 0,
                            y: 0
                        };
                    let n = t.length - 1
                      , r = null
                      , i = et(t);
                    for (; n >= 0 && (r = t[n],
                    !(i.timestamp - r.timestamp > (0,
                    t5.w)(.1))); )
                        n--;
                    if (!r)
                        return {
                            x: 0,
                            y: 0
                        };
                    let o = (i.timestamp - r.timestamp) / 1e3;
                    if (0 === o)
                        return {
                            x: 0,
                            y: 0
                        };
                    let s = {
                        x: (i.x - r.x) / o,
                        y: (i.y - r.y) / o
                    };
                    return s.x === 1 / 0 && (s.x = 0),
                    s.y === 1 / 0 && (s.y = 0),
                    s
                }(e, 0)
            }
        }
        function et(t) {
            return t[t.length - 1]
        }
        var ee = n(2868)
          , en = n(7);
        function er(t) {
            return t.max - t.min
        }
        function ei(t, e=0, n=.01) {
            return Math.abs(t - e) <= n
        }
        function eo(t, e, n, r=.5) {
            t.origin = r,
            t.originPoint = (0,
            en.C)(e.min, e.max, t.origin),
            t.scale = er(n) / er(e),
            (ei(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1),
            t.translate = (0,
            en.C)(n.min, n.max, t.origin) - t.originPoint,
            (ei(t.translate) || isNaN(t.translate)) && (t.translate = 0)
        }
        function es(t, e, n, r) {
            eo(t.x, e.x, n.x, null == r ? void 0 : r.originX),
            eo(t.y, e.y, n.y, null == r ? void 0 : r.originY)
        }
        function ea(t, e, n) {
            t.min = n.min + e.min,
            t.max = t.min + er(e)
        }
        function el(t, e, n) {
            t.min = e.min - n.min,
            t.max = t.min + er(e)
        }
        function eu(t, e, n) {
            el(t.x, e.x, n.x),
            el(t.y, e.y, n.y)
        }
        var ec = n(3021);
        function eh(t, e, n) {
            return {
                min: void 0 !== e ? t.min + e : void 0,
                max: void 0 !== n ? t.max + n - (t.max - t.min) : void 0
            }
        }
        function ed(t, e) {
            let n = e.min - t.min
              , r = e.max - t.max;
            return e.max - e.min < t.max - t.min && ([n,r] = [r, n]),
            {
                min: n,
                max: r
            }
        }
        function ef(t, e, n) {
            return {
                min: ep(t, e),
                max: ep(t, n)
            }
        }
        function ep(t, e) {
            return "number" == typeof t ? t : t[e] || 0
        }
        let em = () => ({
            translate: 0,
            scale: 1,
            origin: 0,
            originPoint: 0
        })
          , ev = () => ({
            x: em(),
            y: em()
        })
          , eg = () => ({
            min: 0,
            max: 0
        })
          , ey = () => ({
            x: eg(),
            y: eg()
        });
        function ex(t) {
            return [t("x"), t("y")]
        }
        function eb({top: t, left: e, right: n, bottom: r}) {
            return {
                x: {
                    min: e,
                    max: n
                },
                y: {
                    min: t,
                    max: r
                }
            }
        }
        function ew(t) {
            return void 0 === t || 1 === t
        }
        function eP({scale: t, scaleX: e, scaleY: n}) {
            return !ew(t) || !ew(e) || !ew(n)
        }
        function eE(t) {
            return eP(t) || eT(t) || t.z || t.rotate || t.rotateX || t.rotateY
        }
        function eT(t) {
            var e, n;
            return (e = t.x) && "0%" !== e || (n = t.y) && "0%" !== n
        }
        function eA(t, e, n, r, i) {
            return void 0 !== i && (t = r + i * (t - r)),
            r + n * (t - r) + e
        }
        function eC(t, e=0, n=1, r, i) {
            t.min = eA(t.min, e, n, r, i),
            t.max = eA(t.max, e, n, r, i)
        }
        function eS(t, {x: e, y: n}) {
            eC(t.x, e.translate, e.scale, e.originPoint),
            eC(t.y, n.translate, n.scale, n.originPoint)
        }
        function eR(t) {
            return Number.isInteger(t) ? t : t > 1.0000000000001 || t < .999999999999 ? t : 1
        }
        function eV(t, e) {
            t.min = t.min + e,
            t.max = t.max + e
        }
        function eM(t, e, [n,r,i]) {
            let o = void 0 !== e[i] ? e[i] : .5
              , s = (0,
            en.C)(t.min, t.max, o);
            eC(t, e[n], e[r], s, e.scale)
        }
        let ej = ["x", "scaleX", "originX"]
          , ek = ["y", "scaleY", "originY"];
        function eO(t, e) {
            eM(t.x, e, ej),
            eM(t.y, e, ek)
        }
        function eL(t, e) {
            return eb(function(t, e) {
                if (!e)
                    return t;
                let n = e({
                    x: t.left,
                    y: t.top
                })
                  , r = e({
                    x: t.right,
                    y: t.bottom
                });
                return {
                    top: n.y,
                    left: n.x,
                    bottom: r.y,
                    right: r.x
                }
            }(t.getBoundingClientRect(), e))
        }
        var eD = n(8695);
        let e_ = new WeakMap;
        class eB {
            constructor(t) {
                this.openGlobalLock = null,
                this.isDragging = !1,
                this.currentDirection = null,
                this.originPoint = {
                    x: 0,
                    y: 0
                },
                this.constraints = !1,
                this.hasMutatedConstraints = !1,
                this.elastic = ey(),
                this.visualElement = t
            }
            start(t, {snapToCursor: e=!1}={}) {
                !1 !== this.visualElement.isPresent && (this.panSession = new t6(t,{
                    onSessionStart: t => {
                        this.stopAnimation(),
                        e && this.snapToCursor(tg(t, "page").point)
                    }
                    ,
                    onStart: (t, e) => {
                        var n;
                        let {drag: r, dragPropagation: i, onDragStart: o} = this.getProps();
                        (!r || i || (this.openGlobalLock && this.openGlobalLock(),
                        this.openGlobalLock = tM(r),
                        this.openGlobalLock)) && (this.isDragging = !0,
                        this.currentDirection = null,
                        this.resolveConstraints(),
                        this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
                        this.visualElement.projection.target = void 0),
                        ex(t => {
                            var e, n;
                            let r = this.getAxisMotionValue(t).get() || 0;
                            if (H.aQ.test(r)) {
                                let i = null === (n = null === (e = this.visualElement.projection) || void 0 === e ? void 0 : e.layout) || void 0 === n ? void 0 : n.layoutBox[t];
                                if (i) {
                                    let t = er(i);
                                    r = parseFloat(r) / 100 * t
                                }
                            }
                            this.originPoint[t] = r
                        }
                        ),
                        null == o || o(t, e),
                        null === (n = this.visualElement.animationState) || void 0 === n || n.setActive(s.Drag, !0))
                    }
                    ,
                    onMove: (t, e) => {
                        let {dragPropagation: n, dragDirectionLock: r, onDirectionLock: i, onDrag: o} = this.getProps();
                        if (!n && !this.openGlobalLock)
                            return;
                        let {offset: s} = e;
                        if (r && null === this.currentDirection) {
                            this.currentDirection = function(t, e=10) {
                                let n = null;
                                return Math.abs(t.y) > e ? n = "y" : Math.abs(t.x) > e && (n = "x"),
                                n
                            }(s),
                            null !== this.currentDirection && (null == i || i(this.currentDirection));
                            return
                        }
                        this.updateAxis("x", e.point, s),
                        this.updateAxis("y", e.point, s),
                        this.visualElement.render(),
                        null == o || o(t, e)
                    }
                    ,
                    onSessionEnd: (t, e) => this.stop(t, e)
                },{
                    transformPagePoint: this.visualElement.getTransformPagePoint()
                }))
            }
            stop(t, e) {
                let n = this.isDragging;
                if (this.cancel(),
                !n)
                    return;
                let {velocity: r} = e;
                this.startAnimation(r);
                let {onDragEnd: i} = this.getProps();
                null == i || i(t, e)
            }
            cancel() {
                var t, e;
                this.isDragging = !1,
                this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !1),
                null === (t = this.panSession) || void 0 === t || t.end(),
                this.panSession = void 0;
                let {dragPropagation: n} = this.getProps();
                !n && this.openGlobalLock && (this.openGlobalLock(),
                this.openGlobalLock = null),
                null === (e = this.visualElement.animationState) || void 0 === e || e.setActive(s.Drag, !1)
            }
            updateAxis(t, e, n) {
                let {drag: r} = this.getProps();
                if (!n || !eI(t, r, this.currentDirection))
                    return;
                let i = this.getAxisMotionValue(t)
                  , o = this.originPoint[t] + n[t];
                this.constraints && this.constraints[t] && (o = function(t, {min: e, max: n}, r) {
                    return void 0 !== e && t < e ? t = r ? (0,
                    en.C)(e, t, r.min) : Math.max(t, e) : void 0 !== n && t > n && (t = r ? (0,
                    en.C)(n, t, r.max) : Math.min(t, n)),
                    t
                }(o, this.constraints[t], this.elastic[t])),
                i.set(o)
            }
            resolveConstraints() {
                let {dragConstraints: t, dragElastic: e} = this.getProps()
                  , {layout: n} = this.visualElement.projection || {}
                  , r = this.constraints;
                t && p(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && n ? this.constraints = function(t, {top: e, left: n, bottom: r, right: i}) {
                    return {
                        x: eh(t.x, n, i),
                        y: eh(t.y, e, r)
                    }
                }(n.layoutBox, t) : this.constraints = !1,
                this.elastic = function(t=.35) {
                    return !1 === t ? t = 0 : !0 === t && (t = .35),
                    {
                        x: ef(t, "left", "right"),
                        y: ef(t, "top", "bottom")
                    }
                }(e),
                r !== this.constraints && n && this.constraints && !this.hasMutatedConstraints && ex(t => {
                    this.getAxisMotionValue(t) && (this.constraints[t] = function(t, e) {
                        let n = {};
                        return void 0 !== e.min && (n.min = e.min - t.min),
                        void 0 !== e.max && (n.max = e.max - t.min),
                        n
                    }(n.layoutBox[t], this.constraints[t]))
                }
                )
            }
            resolveRefConstraints() {
                var t;
                let {dragConstraints: e, onMeasureDragConstraints: n} = this.getProps();
                if (!e || !p(e))
                    return !1;
                let r = e.current;
                (0,
                t1.k)(null !== r, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
                let {projection: i} = this.visualElement;
                if (!i || !i.layout)
                    return !1;
                let o = function(t, e, n) {
                    let r = eL(t, n)
                      , {scroll: i} = e;
                    return i && (eV(r.x, i.offset.x),
                    eV(r.y, i.offset.y)),
                    r
                }(r, i.root, this.visualElement.getTransformPagePoint())
                  , s = {
                    x: ed((t = i.layout.layoutBox).x, o.x),
                    y: ed(t.y, o.y)
                };
                if (n) {
                    let t = n(function({x: t, y: e}) {
                        return {
                            top: e.min,
                            right: t.max,
                            bottom: e.max,
                            left: t.min
                        }
                    }(s));
                    this.hasMutatedConstraints = !!t,
                    t && (s = eb(t))
                }
                return s
            }
            startAnimation(t) {
                let {drag: e, dragMomentum: n, dragElastic: r, dragTransition: i, dragSnapToOrigin: o, onDragTransitionEnd: s} = this.getProps()
                  , a = this.constraints || {};
                return Promise.all(ex(s => {
                    if (!eI(s, e, this.currentDirection))
                        return;
                    let l = (null == a ? void 0 : a[s]) || {};
                    o && (l = {
                        min: 0,
                        max: 0
                    });
                    let u = {
                        type: "inertia",
                        velocity: n ? t[s] : 0,
                        bounceStiffness: r ? 200 : 1e6,
                        bounceDamping: r ? 40 : 1e7,
                        timeConstant: 750,
                        restDelta: 1,
                        restSpeed: 10,
                        ...i,
                        ...l
                    };
                    return this.startAxisValueAnimation(s, u)
                }
                )).then(s)
            }
            startAxisValueAnimation(t, e) {
                let n = this.getAxisMotionValue(t);
                return n.start((0,
                eD.Z)(t, n, 0, e))
            }
            stopAnimation() {
                ex(t => this.getAxisMotionValue(t).stop())
            }
            getAxisMotionValue(t) {
                var e;
                let n = "_drag" + t.toUpperCase();
                return this.visualElement.getProps()[n] || this.visualElement.getValue(t, (null === (e = this.visualElement.getProps().initial) || void 0 === e ? void 0 : e[t]) || 0)
            }
            snapToCursor(t) {
                ex(e => {
                    let {drag: n} = this.getProps();
                    if (!eI(e, n, this.currentDirection))
                        return;
                    let {projection: r} = this.visualElement
                      , i = this.getAxisMotionValue(e);
                    if (r && r.layout) {
                        let {min: n, max: o} = r.layout.layoutBox[e];
                        i.set(t[e] - (0,
                        en.C)(n, o, .5))
                    }
                }
                )
            }
            scalePositionWithinConstraints() {
                var t;
                if (!this.visualElement.current)
                    return;
                let {drag: e, dragConstraints: n} = this.getProps()
                  , {projection: r} = this.visualElement;
                if (!p(n) || !r || !this.constraints)
                    return;
                this.stopAnimation();
                let i = {
                    x: 0,
                    y: 0
                };
                ex(t => {
                    let e = this.getAxisMotionValue(t);
                    if (e) {
                        let n = e.get();
                        i[t] = function(t, e) {
                            let n = .5
                              , r = er(t)
                              , i = er(e);
                            return i > r ? n = (0,
                            ee.Y)(e.min, e.max - r, t.min) : r > i && (n = (0,
                            ee.Y)(t.min, t.max - i, e.min)),
                            (0,
                            ec.u)(0, 1, n)
                        }({
                            min: n,
                            max: n
                        }, this.constraints[t])
                    }
                }
                );
                let {transformTemplate: o} = this.visualElement.getProps();
                this.visualElement.current.style.transform = o ? o({}, "") : "none",
                null === (t = r.root) || void 0 === t || t.updateScroll(),
                r.updateLayout(),
                this.resolveConstraints(),
                ex(t => {
                    if (!eI(t, e, null))
                        return;
                    let n = this.getAxisMotionValue(t)
                      , {min: r, max: o} = this.constraints[t];
                    n.set((0,
                    en.C)(r, o, i[t]))
                }
                )
            }
            addListeners() {
                var t;
                if (!this.visualElement.current)
                    return;
                e_.set(this.visualElement, this);
                let e = tA(this.visualElement.current, "pointerdown", t => {
                    let {drag: e, dragListener: n=!0} = this.getProps();
                    e && n && this.start(t)
                }
                )
                  , n = () => {
                    let {dragConstraints: t} = this.getProps();
                    p(t) && (this.constraints = this.resolveRefConstraints())
                }
                  , {projection: r} = this.visualElement
                  , i = r.addEventListener("measure", n);
                r && !r.layout && (null === (t = r.root) || void 0 === t || t.updateScroll(),
                r.updateLayout()),
                n();
                let o = tf(window, "resize", () => this.scalePositionWithinConstraints())
                  , s = r.addEventListener("didUpdate", ({delta: t, hasLayoutChanged: e}) => {
                    this.isDragging && e && (ex(e => {
                        let n = this.getAxisMotionValue(e);
                        n && (this.originPoint[e] += t[e].translate,
                        n.set(n.get() + t[e].translate))
                    }
                    ),
                    this.visualElement.render())
                }
                );
                return () => {
                    o(),
                    e(),
                    i(),
                    null == s || s()
                }
            }
            getProps() {
                let t = this.visualElement.getProps()
                  , {drag: e=!1, dragDirectionLock: n=!1, dragPropagation: r=!1, dragConstraints: i=!1, dragElastic: o=.35, dragMomentum: s=!0} = t;
                return {
                    ...t,
                    drag: e,
                    dragDirectionLock: n,
                    dragPropagation: r,
                    dragConstraints: i,
                    dragElastic: o,
                    dragMomentum: s
                }
            }
        }
        function eI(t, e, n) {
            return (!0 === e || e === t) && (null === n || n === t)
        }
        let eF = {
            pan: tW(function({onPan: t, onPanStart: e, onPanEnd: n, onPanSessionStart: r, visualElement: i}) {
                let o = (0,
                l.useRef)(null)
                  , {transformPagePoint: s} = (0,
                l.useContext)(u._)
                  , a = {
                    onSessionStart: r,
                    onStart: e,
                    onMove: t,
                    onEnd: (t, e) => {
                        o.current = null,
                        n && n(t, e)
                    }
                };
                (0,
                l.useEffect)( () => {
                    null !== o.current && o.current.updateHandlers(a)
                }
                ),
                tC(i, "pointerdown", (t || e || n || r) && function(t) {
                    o.current = new t6(t,a,{
                        transformPagePoint: s
                    })
                }
                ),
                (0,
                tL.z)( () => o.current && o.current.end())
            }),
            drag: tW(function(t) {
                let {dragControls: e, visualElement: n} = t
                  , r = (0,
                T.h)( () => new eB(n));
                (0,
                l.useEffect)( () => e && e.subscribe(r), [r, e]),
                (0,
                l.useEffect)( () => r.addListeners(), [r])
            })
        };
        var eN = n(5008)
          , eU = n(52);
        function e$(t) {
            return "string" == typeof t && t.startsWith("var(--")
        }
        let eW = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
        function ez(t, e, n=1) {
            (0,
            t1.k)(n <= 4, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`);
            let[r,i] = function(t) {
                let e = eW.exec(t);
                if (!e)
                    return [, ];
                let[,n,r] = e;
                return [n, r]
            }(t);
            if (!r)
                return;
            let o = window.getComputedStyle(e).getPropertyValue(r);
            return o ? o.trim() : e$(i) ? ez(i, e, n + 1) : i
        }
        var eY = n(8824)
          , eZ = n(2980);
        let eq = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y"])
          , eH = t => eq.has(t)
          , eG = t => Object.keys(t).some(eH)
          , eK = (t, e) => {
            t.set(e, !1),
            t.set(e)
        }
          , eX = t => t === eZ.Rx || t === H.px;
        (o = a || (a = {})).width = "width",
        o.height = "height",
        o.left = "left",
        o.right = "right",
        o.top = "top",
        o.bottom = "bottom";
        let eQ = (t, e) => parseFloat(t.split(", ")[e])
          , eJ = (t, e) => (n, {transform: r}) => {
            if ("none" === r || !r)
                return 0;
            let i = r.match(/^matrix3d\((.+)\)$/);
            if (i)
                return eQ(i[1], e);
            {
                let e = r.match(/^matrix\((.+)\)$/);
                return e ? eQ(e[1], t) : 0
            }
        }
          , e0 = new Set(["x", "y", "z"])
          , e1 = L._.filter(t => !e0.has(t))
          , e2 = {
            width: ({x: t}, {paddingLeft: e="0", paddingRight: n="0"}) => t.max - t.min - parseFloat(e) - parseFloat(n),
            height: ({y: t}, {paddingTop: e="0", paddingBottom: n="0"}) => t.max - t.min - parseFloat(e) - parseFloat(n),
            top: (t, {top: e}) => parseFloat(e),
            left: (t, {left: e}) => parseFloat(e),
            bottom: ({y: t}, {top: e}) => parseFloat(e) + (t.max - t.min),
            right: ({x: t}, {left: e}) => parseFloat(e) + (t.max - t.min),
            x: eJ(4, 13),
            y: eJ(5, 14)
        }
          , e5 = (t, e, n) => {
            let r = e.measureViewportBox()
              , i = e.current
              , o = getComputedStyle(i)
              , {display: s} = o
              , a = {};
            "none" === s && e.setStaticValue("display", t.display || "block"),
            n.forEach(t => {
                a[t] = e2[t](r, o)
            }
            ),
            e.render();
            let l = e.measureViewportBox();
            return n.forEach(n => {
                eK(e.getValue(n), a[n]),
                t[n] = e2[n](l, o)
            }
            ),
            t
        }
          , e3 = (t, e, n={}, r={}) => {
            e = {
                ...e
            },
            r = {
                ...r
            };
            let i = Object.keys(e).filter(eH)
              , o = []
              , s = !1
              , a = [];
            if (i.forEach(i => {
                let l;
                let u = t.getValue(i);
                if (!t.hasValue(i))
                    return;
                let c = n[i]
                  , h = (0,
                eY.C)(c)
                  , d = e[i];
                if ((0,
                tZ.C)(d)) {
                    let t = d.length
                      , e = null === d[0] ? 1 : 0;
                    c = d[e],
                    h = (0,
                    eY.C)(c);
                    for (let n = e; n < t; n++)
                        l ? (0,
                        t1.k)((0,
                        eY.C)(d[n]) === l, "All keyframes must be of the same type") : (l = (0,
                        eY.C)(d[n]),
                        (0,
                        t1.k)(l === h || eX(h) && eX(l), "Keyframes must be of the same dimension as the current value"))
                } else
                    l = (0,
                    eY.C)(d);
                if (h !== l) {
                    if (eX(h) && eX(l)) {
                        let t = u.get();
                        "string" == typeof t && u.set(parseFloat(t)),
                        "string" == typeof d ? e[i] = parseFloat(d) : Array.isArray(d) && l === H.px && (e[i] = d.map(parseFloat))
                    } else
                        (null == h ? void 0 : h.transform) && (null == l ? void 0 : l.transform) && (0 === c || 0 === d) ? 0 === c ? u.set(l.transform(c)) : e[i] = h.transform(d) : (s || (o = function(t) {
                            let e = [];
                            return e1.forEach(n => {
                                let r = t.getValue(n);
                                void 0 !== r && (e.push([n, r.get()]),
                                r.set(n.startsWith("scale") ? 1 : 0))
                            }
                            ),
                            e.length && t.render(),
                            e
                        }(t),
                        s = !0),
                        a.push(i),
                        r[i] = void 0 !== r[i] ? r[i] : e[i],
                        eK(u, d))
                }
            }
            ),
            !a.length)
                return {
                    target: e,
                    transitionEnd: r
                };
            {
                let n = a.indexOf("height") >= 0 ? window.pageYOffset : null
                  , i = e5(e, t, a);
                return o.length && o.forEach( ([e,n]) => {
                    t.getValue(e).set(n)
                }
                ),
                t.render(),
                E.j && null !== n && window.scrollTo({
                    top: n
                }),
                {
                    target: i,
                    transitionEnd: r
                }
            }
        }
          , e9 = (t, e, n, r) => {
            var i, o;
            let s = function(t, {...e}, n) {
                let r = t.current;
                if (!(r instanceof Element))
                    return {
                        target: e,
                        transitionEnd: n
                    };
                for (let i in n && (n = {
                    ...n
                }),
                t.values.forEach(t => {
                    let e = t.get();
                    if (!e$(e))
                        return;
                    let n = ez(e, r);
                    n && t.set(n)
                }
                ),
                e) {
                    let t = e[i];
                    if (!e$(t))
                        continue;
                    let o = ez(t, r);
                    o && (e[i] = o,
                    n && void 0 === n[i] && (n[i] = t))
                }
                return {
                    target: e,
                    transitionEnd: n
                }
            }(t, e, r);
            return e = s.target,
            r = s.transitionEnd,
            i = e,
            o = r,
            eG(i) ? e3(t, i, n, o) : {
                target: i,
                transitionEnd: o
            }
        }
          , e6 = {
            current: null
        }
          , e8 = {
            current: !1
        };
        var e4 = n(7026)
          , e7 = n(5818)
          , nt = n(3227);
        let ne = Object.keys(P)
          , nn = ne.length
          , nr = ["AnimationStart", "AnimationComplete", "Update", "Unmount", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
        class ni {
            constructor({parent: t, props: e, reducedMotionConfig: n, visualState: r}, i={}) {
                this.current = null,
                this.children = new Set,
                this.isVariantNode = !1,
                this.isControllingVariants = !1,
                this.shouldReduceMotion = null,
                this.values = new Map,
                this.isPresent = !0,
                this.valueSubscriptions = new Map,
                this.prevMotionValues = {},
                this.events = {},
                this.propEventSubscriptions = {},
                this.notifyUpdate = () => this.notify("Update", this.latestValues),
                this.render = () => {
                    this.current && (this.triggerBuild(),
                    this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
                }
                ,
                this.scheduleRender = () => t2.Z_.render(this.render, !1, !0);
                let {latestValues: o, renderState: s} = r;
                this.latestValues = o,
                this.baseTarget = {
                    ...o
                },
                this.initialValues = e.initial ? {
                    ...o
                } : {},
                this.renderState = s,
                this.parent = t,
                this.props = e,
                this.depth = t ? t.depth + 1 : 0,
                this.reducedMotionConfig = n,
                this.options = i,
                this.isControllingVariants = y(e),
                this.isVariantNode = x(e),
                this.isVariantNode && (this.variantChildren = new Set),
                this.manuallyAnimateOnMount = !!(t && t.current);
                let {willChange: a, ...l} = this.scrapeMotionValuesFromProps(e);
                for (let t in l) {
                    let e = l[t];
                    void 0 !== o[t] && (0,
                    _.i)(e) && (e.set(o[t], !1),
                    (0,
                    nt.L)(a) && a.add(t))
                }
            }
            scrapeMotionValuesFromProps(t) {
                return {}
            }
            mount(t) {
                var e;
                this.current = t,
                this.projection && this.projection.mount(t),
                this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = null === (e = this.parent) || void 0 === e ? void 0 : e.addVariantChild(this)),
                this.values.forEach( (t, e) => this.bindToMotionValue(e, t)),
                e8.current || function() {
                    if (e8.current = !0,
                    E.j) {
                        if (window.matchMedia) {
                            let t = window.matchMedia("(prefers-reduced-motion)")
                              , e = () => e6.current = t.matches;
                            t.addListener(e),
                            e()
                        } else
                            e6.current = !1
                    }
                }(),
                this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || e6.current),
                this.parent && this.parent.children.add(this),
                this.setProps(this.props)
            }
            unmount() {
                var t, e, n;
                for (let r in null === (t = this.projection) || void 0 === t || t.unmount(),
                t2.qY.update(this.notifyUpdate),
                t2.qY.render(this.render),
                this.valueSubscriptions.forEach(t => t()),
                null === (e = this.removeFromVariantTree) || void 0 === e || e.call(this),
                null === (n = this.parent) || void 0 === n || n.children.delete(this),
                this.events)
                    this.events[r].clear();
                this.current = null
            }
            bindToMotionValue(t, e) {
                let n = L.G.has(t)
                  , r = e.on("change", e => {
                    this.latestValues[t] = e,
                    this.props.onUpdate && t2.Z_.update(this.notifyUpdate, !1, !0),
                    n && this.projection && (this.projection.isTransformDirty = !0)
                }
                )
                  , i = e.on("renderRequest", this.scheduleRender);
                this.valueSubscriptions.set(t, () => {
                    r(),
                    i()
                }
                )
            }
            sortNodePosition(t) {
                return this.current && this.sortInstanceNodePosition && this.type === t.type ? this.sortInstanceNodePosition(this.current, t.current) : 0
            }
            loadFeatures(t, e, n, r, i, o) {
                let s = [];
                "production" !== t_.O && n && e && (0,
                t1.k)(!1, "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.");
                for (let e = 0; e < nn; e++) {
                    let n = ne[e]
                      , {isEnabled: r, Component: i} = P[n];
                    r(t) && i && s.push((0,
                    l.createElement)(i, {
                        key: n,
                        ...t,
                        visualElement: this
                    }))
                }
                if (!this.projection && i) {
                    this.projection = new i(r,this.latestValues,this.parent && this.parent.projection);
                    let {layoutId: e, layout: n, drag: s, dragConstraints: a, layoutScroll: l} = t;
                    this.projection.setOptions({
                        layoutId: e,
                        layout: n,
                        alwaysMeasureLayout: !!s || a && p(a),
                        visualElement: this,
                        scheduleRender: () => this.scheduleRender(),
                        animationType: "string" == typeof n ? n : "both",
                        initialPromotionConfig: o,
                        layoutScroll: l
                    })
                }
                return s
            }
            triggerBuild() {
                this.build(this.renderState, this.latestValues, this.options, this.props)
            }
            measureViewportBox() {
                return this.current ? this.measureInstanceViewportBox(this.current, this.props) : ey()
            }
            getStaticValue(t) {
                return this.latestValues[t]
            }
            setStaticValue(t, e) {
                this.latestValues[t] = e
            }
            makeTargetAnimatable(t, e=!0) {
                return this.makeTargetAnimatableFromInstance(t, this.props, e)
            }
            setProps(t) {
                (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
                this.props = t;
                for (let e = 0; e < nr.length; e++) {
                    let n = nr[e];
                    this.propEventSubscriptions[n] && (this.propEventSubscriptions[n](),
                    delete this.propEventSubscriptions[n]);
                    let r = t["on" + n];
                    r && (this.propEventSubscriptions[n] = this.on(n, r))
                }
                this.prevMotionValues = function(t, e, n) {
                    let {willChange: r} = e;
                    for (let i in e) {
                        let o = e[i]
                          , s = n[i];
                        if ((0,
                        _.i)(o))
                            t.addValue(i, o),
                            (0,
                            nt.L)(r) && r.add(i);
                        else if ((0,
                        _.i)(s))
                            t.addValue(i, (0,
                            e7.B)(o, {
                                owner: t
                            })),
                            (0,
                            nt.L)(r) && r.remove(i);
                        else if (s !== o) {
                            if (t.hasValue(i)) {
                                let e = t.getValue(i);
                                e.hasAnimated || e.set(o)
                            } else {
                                let e = t.getStaticValue(i);
                                t.addValue(i, (0,
                                e7.B)(void 0 !== e ? e : o))
                            }
                        }
                    }
                    for (let r in n)
                        void 0 === e[r] && t.removeValue(r);
                    return e
                }(this, this.scrapeMotionValuesFromProps(t), this.prevMotionValues)
            }
            getProps() {
                return this.props
            }
            getVariant(t) {
                var e;
                return null === (e = this.props.variants) || void 0 === e ? void 0 : e[t]
            }
            getDefaultTransition() {
                return this.props.transition
            }
            getTransformPagePoint() {
                return this.props.transformPagePoint
            }
            getClosestVariantNode() {
                var t;
                return this.isVariantNode ? this : null === (t = this.parent) || void 0 === t ? void 0 : t.getClosestVariantNode()
            }
            getVariantContext(t=!1) {
                var e, n;
                if (t)
                    return null === (e = this.parent) || void 0 === e ? void 0 : e.getVariantContext();
                if (!this.isControllingVariants) {
                    let t = (null === (n = this.parent) || void 0 === n ? void 0 : n.getVariantContext()) || {};
                    return void 0 !== this.props.initial && (t.initial = this.props.initial),
                    t
                }
                let r = {};
                for (let t = 0; t < ns; t++) {
                    let e = no[t]
                      , n = this.props[e];
                    (m(n) || !1 === n) && (r[e] = n)
                }
                return r
            }
            addVariantChild(t) {
                var e;
                let n = this.getClosestVariantNode();
                if (n)
                    return null === (e = n.variantChildren) || void 0 === e || e.add(t),
                    () => n.variantChildren.delete(t)
            }
            addValue(t, e) {
                this.hasValue(t) && this.removeValue(t),
                this.values.set(t, e),
                this.latestValues[t] = e.get(),
                this.bindToMotionValue(t, e)
            }
            removeValue(t) {
                var e;
                this.values.delete(t),
                null === (e = this.valueSubscriptions.get(t)) || void 0 === e || e(),
                this.valueSubscriptions.delete(t),
                delete this.latestValues[t],
                this.removeValueFromRenderState(t, this.renderState)
            }
            hasValue(t) {
                return this.values.has(t)
            }
            getValue(t, e) {
                if (this.props.values && this.props.values[t])
                    return this.props.values[t];
                let n = this.values.get(t);
                return void 0 === n && void 0 !== e && (n = (0,
                e7.B)(e, {
                    owner: this
                }),
                this.addValue(t, n)),
                n
            }
            readValue(t) {
                return void 0 === this.latestValues[t] && this.current ? this.readValueFromInstance(this.current, t, this.options) : this.latestValues[t]
            }
            setBaseTarget(t, e) {
                this.baseTarget[t] = e
            }
            getBaseTarget(t) {
                var e;
                let {initial: n} = this.props
                  , r = "string" == typeof n || "object" == typeof n ? null === (e = (0,
                ta.o)(this.props, n)) || void 0 === e ? void 0 : e[t] : void 0;
                if (n && void 0 !== r)
                    return r;
                let i = this.getBaseTargetFromProps(this.props, t);
                return void 0 === i || (0,
                _.i)(i) ? void 0 !== this.initialValues[t] && void 0 === r ? void 0 : this.baseTarget[t] : i
            }
            on(t, e) {
                return this.events[t] || (this.events[t] = new e4.L),
                this.events[t].add(e)
            }
            notify(t, ...e) {
                var n;
                null === (n = this.events[t]) || void 0 === n || n.notify(...e)
            }
        }
        let no = ["initial", ...tK]
          , ns = no.length;
        class na extends ni {
            sortInstanceNodePosition(t, e) {
                return 2 & t.compareDocumentPosition(e) ? 1 : -1
            }
            getBaseTargetFromProps(t, e) {
                var n;
                return null === (n = t.style) || void 0 === n ? void 0 : n[e]
            }
            removeValueFromRenderState(t, {vars: e, style: n}) {
                delete e[t],
                delete n[t]
            }
            makeTargetAnimatableFromInstance({transition: t, transitionEnd: e, ...n}, {transformValues: r}, i) {
                let o = (0,
                eU.P$)(n, t || {}, this);
                if (r && (e && (e = r(e)),
                n && (n = r(n)),
                o && (o = r(o))),
                i) {
                    (0,
                    eU.GJ)(this, n, o);
                    let t = e9(this, n, o, e);
                    e = t.transitionEnd,
                    n = t.target
                }
                return {
                    transition: t,
                    transitionEnd: e,
                    ...n
                }
            }
        }
        class nl extends na {
            readValueFromInstance(t, e) {
                if (L.G.has(e)) {
                    let t = (0,
                    eN.A)(e);
                    return t && t.default || 0
                }
                {
                    let n = window.getComputedStyle(t)
                      , r = (F(e) ? n.getPropertyValue(e) : n[e]) || 0;
                    return "string" == typeof r ? r.trim() : r
                }
            }
            measureInstanceViewportBox(t, {transformPagePoint: e}) {
                return eL(t, e)
            }
            build(t, e, n, r) {
                $(t, e, n, r.transformTemplate)
            }
            scrapeMotionValuesFromProps(t) {
                return to(t)
            }
            renderInstance(t, e, n, r) {
                tn(t, e, n, r)
            }
        }
        class nu extends na {
            constructor() {
                super(...arguments),
                this.isSVGTag = !1
            }
            getBaseTargetFromProps(t, e) {
                return t[e]
            }
            readValueFromInstance(t, e) {
                var n;
                return L.G.has(e) ? (null === (n = (0,
                eN.A)(e)) || void 0 === n ? void 0 : n.default) || 0 : (e = tr.has(e) ? e : (0,
                te.D)(e),
                t.getAttribute(e))
            }
            measureInstanceViewportBox() {
                return ey()
            }
            scrapeMotionValuesFromProps(t) {
                return ts(t)
            }
            build(t, e, n, r) {
                Q(t, e, n, this.isSVGTag, r.transformTemplate)
            }
            renderInstance(t, e, n, r) {
                ti(t, e, n, r)
            }
            mount(t) {
                this.isSVGTag = tt(t.tagName),
                super.mount(t)
            }
        }
        let nc = (t, e) => k(t) ? new nu(e,{
            enableHardwareAcceleration: !1
        }) : new nl(e,{
            enableHardwareAcceleration: !0
        });
        function nh(t, e) {
            return e.max === e.min ? 0 : t / (e.max - e.min) * 100
        }
        let nd = {
            correct: (t, e) => {
                if (!e.target)
                    return t;
                if ("string" == typeof t) {
                    if (!H.px.test(t))
                        return t;
                    t = parseFloat(t)
                }
                let n = nh(t, e.target.x)
                  , r = nh(t, e.target.y);
                return `${n}% ${r}%`
            }
        };
        var nf = n(9155);
        let np = "_$css"
          , nm = {
            correct: (t, {treeScale: e, projectionDelta: n}) => {
                let r = t
                  , i = t.includes("var(")
                  , o = [];
                i && (t = t.replace(eW, t => (o.push(t),
                np)));
                let s = nf.P.parse(t);
                if (s.length > 5)
                    return r;
                let a = nf.P.createTransformer(t)
                  , l = "number" != typeof s[0] ? 1 : 0
                  , u = n.x.scale * e.x
                  , c = n.y.scale * e.y;
                s[0 + l] /= u,
                s[1 + l] /= c;
                let h = (0,
                en.C)(u, c, .5);
                "number" == typeof s[2 + l] && (s[2 + l] /= h),
                "number" == typeof s[3 + l] && (s[3 + l] /= h);
                let d = a(s);
                if (i) {
                    let t = 0;
                    d = d.replace(np, () => {
                        let e = o[t];
                        return t++,
                        e
                    }
                    )
                }
                return d
            }
        };
        class nv extends l.Component {
            componentDidMount() {
                let {visualElement: t, layoutGroup: e, switchLayoutGroup: n, layoutId: r} = this.props
                  , {projection: i} = t;
                Object.assign(O, ng),
                i && (e.group && e.group.add(i),
                n && n.register && r && n.register(i),
                i.root.didUpdate(),
                i.addEventListener("animationComplete", () => {
                    this.safeToRemove()
                }
                ),
                i.setOptions({
                    ...i.options,
                    onExitComplete: () => this.safeToRemove()
                })),
                A.hasEverUpdated = !0
            }
            getSnapshotBeforeUpdate(t) {
                let {layoutDependency: e, visualElement: n, drag: r, isPresent: i} = this.props
                  , o = n.projection;
                return o && (o.isPresent = i,
                r || t.layoutDependency !== e || void 0 === e ? o.willUpdate() : this.safeToRemove(),
                t.isPresent === i || (i ? o.promote() : o.relegate() || t2.Z_.postRender( () => {
                    var t;
                    (null === (t = o.getStack()) || void 0 === t ? void 0 : t.members.length) || this.safeToRemove()
                }
                ))),
                null
            }
            componentDidUpdate() {
                let {projection: t} = this.props.visualElement;
                t && (t.root.didUpdate(),
                !t.currentAnimation && t.isLead() && this.safeToRemove())
            }
            componentWillUnmount() {
                let {visualElement: t, layoutGroup: e, switchLayoutGroup: n} = this.props
                  , {projection: r} = t;
                r && (r.scheduleCheckAfterUnmount(),
                (null == e ? void 0 : e.group) && e.group.remove(r),
                (null == n ? void 0 : n.deregister) && n.deregister(r))
            }
            safeToRemove() {
                let {safeToRemove: t} = this.props;
                null == t || t()
            }
            render() {
                return null
            }
        }
        let ng = {
            borderRadius: {
                ...nd,
                applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
            },
            borderTopLeftRadius: nd,
            borderTopRightRadius: nd,
            borderBottomLeftRadius: nd,
            borderBottomRightRadius: nd,
            boxShadow: nm
        };
        var ny = n(927)
          , nx = n(6977);
        let nb = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
          , nw = nb.length
          , nP = t => "string" == typeof t ? parseFloat(t) : t
          , nE = t => "number" == typeof t || H.px.test(t);
        function nT(t, e) {
            return void 0 !== t[e] ? t[e] : t.borderRadius
        }
        let nA = nS(0, .5, ny.Bn)
          , nC = nS(.5, .95, nx.Z);
        function nS(t, e, n) {
            return r => r < t ? 0 : r > e ? 1 : n((0,
            ee.Y)(t, e, r))
        }
        function nR(t, e) {
            t.min = e.min,
            t.max = e.max
        }
        function nV(t, e) {
            nR(t.x, e.x),
            nR(t.y, e.y)
        }
        function nM(t, e, n, r, i) {
            return t -= e,
            t = r + 1 / n * (t - r),
            void 0 !== i && (t = r + 1 / i * (t - r)),
            t
        }
        function nj(t, e, [n,r,i], o, s) {
            !function(t, e=0, n=1, r=.5, i, o=t, s=t) {
                if (H.aQ.test(e) && (e = parseFloat(e),
                e = (0,
                en.C)(s.min, s.max, e / 100) - s.min),
                "number" != typeof e)
                    return;
                let a = (0,
                en.C)(o.min, o.max, r);
                t === o && (a -= e),
                t.min = nM(t.min, e, n, a, i),
                t.max = nM(t.max, e, n, a, i)
            }(t, e[n], e[r], e[i], e.scale, o, s)
        }
        let nk = ["x", "scaleX", "originX"]
          , nO = ["y", "scaleY", "originY"];
        function nL(t, e, n, r) {
            nj(t.x, e, nk, null == n ? void 0 : n.x, null == r ? void 0 : r.x),
            nj(t.y, e, nO, null == n ? void 0 : n.y, null == r ? void 0 : r.y)
        }
        var nD = n(7924);
        function n_(t) {
            return 0 === t.translate && 1 === t.scale
        }
        function nB(t) {
            return n_(t.x) && n_(t.y)
        }
        function nI(t, e) {
            return t.x.min === e.x.min && t.x.max === e.x.max && t.y.min === e.y.min && t.y.max === e.y.max
        }
        function nF(t) {
            return er(t.x) / er(t.y)
        }
        var nN = n(7081);
        class nU {
            constructor() {
                this.members = []
            }
            add(t) {
                (0,
                nN.y4)(this.members, t),
                t.scheduleRender()
            }
            remove(t) {
                if ((0,
                nN.cl)(this.members, t),
                t === this.prevLead && (this.prevLead = void 0),
                t === this.lead) {
                    let t = this.members[this.members.length - 1];
                    t && this.promote(t)
                }
            }
            relegate(t) {
                let e;
                let n = this.members.findIndex(e => t === e);
                if (0 === n)
                    return !1;
                for (let t = n; t >= 0; t--) {
                    let n = this.members[t];
                    if (!1 !== n.isPresent) {
                        e = n;
                        break
                    }
                }
                return !!e && (this.promote(e),
                !0)
            }
            promote(t, e) {
                var n;
                let r = this.lead;
                if (t !== r && (this.prevLead = r,
                this.lead = t,
                t.show(),
                r)) {
                    r.instance && r.scheduleRender(),
                    t.scheduleRender(),
                    t.resumeFrom = r,
                    e && (t.resumeFrom.preserveOpacity = !0),
                    r.snapshot && (t.snapshot = r.snapshot,
                    t.snapshot.latestValues = r.animationValues || r.latestValues),
                    (null === (n = t.root) || void 0 === n ? void 0 : n.isUpdating) && (t.isLayoutDirty = !0);
                    let {crossfade: i} = t.options;
                    !1 === i && r.hide()
                }
            }
            exitAnimationComplete() {
                this.members.forEach(t => {
                    var e, n, r, i, o;
                    null === (n = (e = t.options).onExitComplete) || void 0 === n || n.call(e),
                    null === (o = null === (r = t.resumingFrom) || void 0 === r ? void 0 : (i = r.options).onExitComplete) || void 0 === o || o.call(i)
                }
                )
            }
            scheduleRender() {
                this.members.forEach(t => {
                    t.instance && t.scheduleRender(!1)
                }
                )
            }
            removeLeadSnapshot() {
                this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
            }
        }
        function n$(t, e, n) {
            let r = ""
              , i = t.x.translate / e.x
              , o = t.y.translate / e.y;
            if ((i || o) && (r = `translate3d(${i}px, ${o}px, 0) `),
            (1 !== e.x || 1 !== e.y) && (r += `scale(${1 / e.x}, ${1 / e.y}) `),
            n) {
                let {rotate: t, rotateX: e, rotateY: i} = n;
                t && (r += `rotate(${t}deg) `),
                e && (r += `rotateX(${e}deg) `),
                i && (r += `rotateY(${i}deg) `)
            }
            let s = t.x.scale * e.x
              , a = t.y.scale * e.y;
            return (1 !== s || 1 !== a) && (r += `scale(${s}, ${a})`),
            r || "none"
        }
        let nW = (t, e) => t.depth - e.depth;
        class nz {
            constructor() {
                this.children = [],
                this.isDirty = !1
            }
            add(t) {
                (0,
                nN.y4)(this.children, t),
                this.isDirty = !0
            }
            remove(t) {
                (0,
                nN.cl)(this.children, t),
                this.isDirty = !0
            }
            forEach(t) {
                this.isDirty && this.children.sort(nW),
                this.isDirty = !1,
                this.children.forEach(t)
            }
        }
        var nY = n(3705);
        let nZ = ["", "X", "Y", "Z"]
          , nq = 0;
        function nH({attachResizeListener: t, defaultParent: e, measureScroll: n, checkIsScrollRoot: r, resetTransform: i}) {
            return class {
                constructor(t, n={}, r=null == e ? void 0 : e()) {
                    this.id = nq++,
                    this.animationId = 0,
                    this.children = new Set,
                    this.options = {},
                    this.isTreeAnimating = !1,
                    this.isAnimationBlocked = !1,
                    this.isLayoutDirty = !1,
                    this.isTransformDirty = !1,
                    this.isProjectionDirty = !1,
                    this.updateManuallyBlocked = !1,
                    this.updateBlockedByResize = !1,
                    this.isUpdating = !1,
                    this.isSVG = !1,
                    this.needsReset = !1,
                    this.shouldResetTransform = !1,
                    this.treeScale = {
                        x: 1,
                        y: 1
                    },
                    this.eventHandlers = new Map,
                    this.potentialNodes = new Map,
                    this.checkUpdateFailed = () => {
                        this.isUpdating && (this.isUpdating = !1,
                        this.clearAllSnapshots())
                    }
                    ,
                    this.updateProjection = () => {
                        this.nodes.forEach(nX),
                        this.nodes.forEach(n2),
                        this.nodes.forEach(n5)
                    }
                    ,
                    this.hasProjected = !1,
                    this.isVisible = !0,
                    this.animationProgress = 0,
                    this.sharedNodes = new Map,
                    this.elementId = t,
                    this.latestValues = n,
                    this.root = r ? r.root || r : this,
                    this.path = r ? [...r.path, r] : [],
                    this.parent = r,
                    this.depth = r ? r.depth + 1 : 0,
                    t && this.root.registerPotentialNode(t, this);
                    for (let t = 0; t < this.path.length; t++)
                        this.path[t].shouldResetTransform = !0;
                    this.root === this && (this.nodes = new nz)
                }
                addEventListener(t, e) {
                    return this.eventHandlers.has(t) || this.eventHandlers.set(t, new e4.L),
                    this.eventHandlers.get(t).add(e)
                }
                notifyListeners(t, ...e) {
                    let n = this.eventHandlers.get(t);
                    null == n || n.notify(...e)
                }
                hasListeners(t) {
                    return this.eventHandlers.has(t)
                }
                registerPotentialNode(t, e) {
                    this.potentialNodes.set(t, e)
                }
                mount(e, n=!1) {
                    var r;
                    if (this.instance)
                        return;
                    this.isSVG = e instanceof SVGElement && "svg" !== e.tagName,
                    this.instance = e;
                    let {layoutId: i, layout: o, visualElement: s} = this.options;
                    if (s && !s.current && s.mount(e),
                    this.root.nodes.add(this),
                    null === (r = this.parent) || void 0 === r || r.children.add(this),
                    this.elementId && this.root.potentialNodes.delete(this.elementId),
                    n && (o || i) && (this.isLayoutDirty = !0),
                    t) {
                        let n;
                        let r = () => this.root.updateBlockedByResize = !1;
                        t(e, () => {
                            this.root.updateBlockedByResize = !0,
                            n && n(),
                            n = (0,
                            nY.g)(r, 250),
                            A.hasAnimatedSinceResize && (A.hasAnimatedSinceResize = !1,
                            this.nodes.forEach(n1))
                        }
                        )
                    }
                    i && this.root.registerSharedNode(i, this),
                    !1 !== this.options.animate && s && (i || o) && this.addEventListener("didUpdate", ({delta: t, hasLayoutChanged: e, hasRelativeTargetChanged: n, layout: r}) => {
                        var i, o, a, l, u;
                        if (this.isTreeAnimationBlocked()) {
                            this.target = void 0,
                            this.relativeTarget = void 0;
                            return
                        }
                        let c = null !== (o = null !== (i = this.options.transition) && void 0 !== i ? i : s.getDefaultTransition()) && void 0 !== o ? o : n7
                          , {onLayoutAnimationStart: h, onLayoutAnimationComplete: d} = s.getProps()
                          , f = !this.targetLayout || !nI(this.targetLayout, r) || n
                          , p = !e && n;
                        if ((null === (a = this.resumeFrom) || void 0 === a ? void 0 : a.instance) || p || e && (f || !this.currentAnimation)) {
                            this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                            this.resumingFrom.resumingFrom = void 0),
                            this.setAnimationOrigin(t, p);
                            let e = {
                                ...(0,
                                nD.ev)(c, "layout"),
                                onPlay: h,
                                onComplete: d
                            };
                            s.shouldReduceMotion && (e.delay = 0,
                            e.type = !1),
                            this.startAnimation(e)
                        } else
                            e || 0 !== this.animationProgress || n1(this),
                            this.isLead() && (null === (u = (l = this.options).onExitComplete) || void 0 === u || u.call(l));
                        this.targetLayout = r
                    }
                    )
                }
                unmount() {
                    var t, e;
                    this.options.layoutId && this.willUpdate(),
                    this.root.nodes.remove(this),
                    null === (t = this.getStack()) || void 0 === t || t.remove(this),
                    null === (e = this.parent) || void 0 === e || e.children.delete(this),
                    this.instance = void 0,
                    t2.qY.preRender(this.updateProjection)
                }
                blockUpdate() {
                    this.updateManuallyBlocked = !0
                }
                unblockUpdate() {
                    this.updateManuallyBlocked = !1
                }
                isUpdateBlocked() {
                    return this.updateManuallyBlocked || this.updateBlockedByResize
                }
                isTreeAnimationBlocked() {
                    var t;
                    return this.isAnimationBlocked || (null === (t = this.parent) || void 0 === t ? void 0 : t.isTreeAnimationBlocked()) || !1
                }
                startUpdate() {
                    var t;
                    !this.isUpdateBlocked() && (this.isUpdating = !0,
                    null === (t = this.nodes) || void 0 === t || t.forEach(n3),
                    this.animationId++)
                }
                willUpdate(t=!0) {
                    var e, n, r;
                    if (this.root.isUpdateBlocked()) {
                        null === (n = (e = this.options).onExitComplete) || void 0 === n || n.call(e);
                        return
                    }
                    if (this.root.isUpdating || this.root.startUpdate(),
                    this.isLayoutDirty)
                        return;
                    this.isLayoutDirty = !0;
                    for (let t = 0; t < this.path.length; t++) {
                        let e = this.path[t];
                        e.shouldResetTransform = !0,
                        e.updateScroll("snapshot")
                    }
                    let {layoutId: i, layout: o} = this.options;
                    if (void 0 === i && !o)
                        return;
                    let s = null === (r = this.options.visualElement) || void 0 === r ? void 0 : r.getProps().transformTemplate;
                    this.prevTransformTemplateValue = null == s ? void 0 : s(this.latestValues, ""),
                    this.updateSnapshot(),
                    t && this.notifyListeners("willUpdate")
                }
                didUpdate() {
                    if (this.isUpdateBlocked()) {
                        this.unblockUpdate(),
                        this.clearAllSnapshots(),
                        this.nodes.forEach(nJ);
                        return
                    }
                    this.isUpdating && (this.isUpdating = !1,
                    this.potentialNodes.size && (this.potentialNodes.forEach(rt),
                    this.potentialNodes.clear()),
                    this.nodes.forEach(n0),
                    this.nodes.forEach(nG),
                    this.nodes.forEach(nK),
                    this.clearAllSnapshots(),
                    t2.iW.update(),
                    t2.iW.preRender(),
                    t2.iW.render())
                }
                clearAllSnapshots() {
                    this.nodes.forEach(nQ),
                    this.sharedNodes.forEach(n9)
                }
                scheduleUpdateProjection() {
                    t2.Z_.preRender(this.updateProjection, !1, !0)
                }
                scheduleCheckAfterUnmount() {
                    t2.Z_.postRender( () => {
                        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
                    }
                    )
                }
                updateSnapshot() {
                    !this.snapshot && this.instance && (this.snapshot = this.measure())
                }
                updateLayout() {
                    var t;
                    if (!this.instance || (this.updateScroll(),
                    !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                        return;
                    if (this.resumeFrom && !this.resumeFrom.instance)
                        for (let t = 0; t < this.path.length; t++)
                            this.path[t].updateScroll();
                    let e = this.layout;
                    this.layout = this.measure(!1),
                    this.layoutCorrected = ey(),
                    this.isLayoutDirty = !1,
                    this.projectionDelta = void 0,
                    this.notifyListeners("measure", this.layout.layoutBox),
                    null === (t = this.options.visualElement) || void 0 === t || t.notify("LayoutMeasure", this.layout.layoutBox, null == e ? void 0 : e.layoutBox)
                }
                updateScroll(t="measure") {
                    let e = !!(this.options.layoutScroll && this.instance);
                    this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = !1),
                    e && (this.scroll = {
                        animationId: this.root.animationId,
                        phase: t,
                        isRoot: r(this.instance),
                        offset: n(this.instance)
                    })
                }
                resetTransform() {
                    var t;
                    if (!i)
                        return;
                    let e = this.isLayoutDirty || this.shouldResetTransform
                      , n = this.projectionDelta && !nB(this.projectionDelta)
                      , r = null === (t = this.options.visualElement) || void 0 === t ? void 0 : t.getProps().transformTemplate
                      , o = null == r ? void 0 : r(this.latestValues, "")
                      , s = o !== this.prevTransformTemplateValue;
                    e && (n || eE(this.latestValues) || s) && (i(this.instance, o),
                    this.shouldResetTransform = !1,
                    this.scheduleRender())
                }
                measure(t=!0) {
                    var e;
                    let n = this.measurePageBox()
                      , r = this.removeElementScroll(n);
                    return t && (r = this.removeTransform(r)),
                    re((e = r).x),
                    re(e.y),
                    {
                        animationId: this.root.animationId,
                        measuredBox: n,
                        layoutBox: r,
                        latestValues: {},
                        source: this.id
                    }
                }
                measurePageBox() {
                    let {visualElement: t} = this.options;
                    if (!t)
                        return ey();
                    let e = t.measureViewportBox()
                      , {scroll: n} = this.root;
                    return n && (eV(e.x, n.offset.x),
                    eV(e.y, n.offset.y)),
                    e
                }
                removeElementScroll(t) {
                    let e = ey();
                    nV(e, t);
                    for (let n = 0; n < this.path.length; n++) {
                        let r = this.path[n]
                          , {scroll: i, options: o} = r;
                        if (r !== this.root && i && o.layoutScroll) {
                            if (i.isRoot) {
                                nV(e, t);
                                let {scroll: n} = this.root;
                                n && (eV(e.x, -n.offset.x),
                                eV(e.y, -n.offset.y))
                            }
                            eV(e.x, i.offset.x),
                            eV(e.y, i.offset.y)
                        }
                    }
                    return e
                }
                applyTransform(t, e=!1) {
                    let n = ey();
                    nV(n, t);
                    for (let t = 0; t < this.path.length; t++) {
                        let r = this.path[t];
                        !e && r.options.layoutScroll && r.scroll && r !== r.root && eO(n, {
                            x: -r.scroll.offset.x,
                            y: -r.scroll.offset.y
                        }),
                        eE(r.latestValues) && eO(n, r.latestValues)
                    }
                    return eE(this.latestValues) && eO(n, this.latestValues),
                    n
                }
                removeTransform(t) {
                    var e;
                    let n = ey();
                    nV(n, t);
                    for (let t = 0; t < this.path.length; t++) {
                        let r = this.path[t];
                        if (!r.instance || !eE(r.latestValues))
                            continue;
                        eP(r.latestValues) && r.updateSnapshot();
                        let i = ey();
                        nV(i, r.measurePageBox()),
                        nL(n, r.latestValues, null === (e = r.snapshot) || void 0 === e ? void 0 : e.layoutBox, i)
                    }
                    return eE(this.latestValues) && nL(n, this.latestValues),
                    n
                }
                setTargetDelta(t) {
                    this.targetDelta = t,
                    this.isProjectionDirty = !0,
                    this.root.scheduleUpdateProjection()
                }
                setOptions(t) {
                    this.options = {
                        ...this.options,
                        ...t,
                        crossfade: void 0 === t.crossfade || t.crossfade
                    }
                }
                clearMeasurements() {
                    this.scroll = void 0,
                    this.layout = void 0,
                    this.snapshot = void 0,
                    this.prevTransformTemplateValue = void 0,
                    this.targetDelta = void 0,
                    this.target = void 0,
                    this.isLayoutDirty = !1
                }
                resolveTargetDelta() {
                    var t, e, n, r;
                    let i = this.getLead();
                    if (this.isProjectionDirty || (this.isProjectionDirty = i.isProjectionDirty),
                    this.isTransformDirty || (this.isTransformDirty = i.isTransformDirty),
                    !this.isProjectionDirty && !this.attemptToResolveRelativeTarget)
                        return;
                    let {layout: o, layoutId: s} = this.options;
                    if (this.layout && (o || s)) {
                        if (!this.targetDelta && !this.relativeTarget) {
                            let t = this.getClosestProjectingParent();
                            t && t.layout ? (this.relativeParent = t,
                            this.relativeTarget = ey(),
                            this.relativeTargetOrigin = ey(),
                            eu(this.relativeTargetOrigin, this.layout.layoutBox, t.layout.layoutBox),
                            nV(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                        }
                        if ((this.relativeTarget || this.targetDelta) && ((this.target || (this.target = ey(),
                        this.targetWithTransforms = ey()),
                        this.relativeTarget && this.relativeTargetOrigin && (null === (t = this.relativeParent) || void 0 === t ? void 0 : t.target)) ? (e = this.target,
                        n = this.relativeTarget,
                        r = this.relativeParent.target,
                        ea(e.x, n.x, r.x),
                        ea(e.y, n.y, r.y)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : nV(this.target, this.layout.layoutBox),
                        eS(this.target, this.targetDelta)) : nV(this.target, this.layout.layoutBox),
                        this.attemptToResolveRelativeTarget)) {
                            this.attemptToResolveRelativeTarget = !1;
                            let t = this.getClosestProjectingParent();
                            t && !!t.resumingFrom == !!this.resumingFrom && !t.options.layoutScroll && t.target ? (this.relativeParent = t,
                            this.relativeTarget = ey(),
                            this.relativeTargetOrigin = ey(),
                            eu(this.relativeTargetOrigin, this.target, t.target),
                            nV(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                        }
                    }
                }
                getClosestProjectingParent() {
                    if (!(!this.parent || eP(this.parent.latestValues) || eT(this.parent.latestValues)))
                        return (this.parent.relativeTarget || this.parent.targetDelta) && this.parent.layout ? this.parent : this.parent.getClosestProjectingParent()
                }
                calcProjection() {
                    var t;
                    let {isProjectionDirty: e, isTransformDirty: n} = this;
                    this.isProjectionDirty = this.isTransformDirty = !1;
                    let r = this.getLead()
                      , i = !!this.resumingFrom || this !== r
                      , o = !0;
                    if (e && (o = !1),
                    i && n && (o = !1),
                    o)
                        return;
                    let {layout: s, layoutId: a} = this.options;
                    if (this.isTreeAnimating = !!((null === (t = this.parent) || void 0 === t ? void 0 : t.isTreeAnimating) || this.currentAnimation || this.pendingAnimation),
                    this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
                    !this.layout || !(s || a))
                        return;
                    nV(this.layoutCorrected, this.layout.layoutBox),
                    function(t, e, n, r=!1) {
                        var i, o;
                        let s, a;
                        let l = n.length;
                        if (l) {
                            e.x = e.y = 1;
                            for (let u = 0; u < l; u++)
                                a = (s = n[u]).projectionDelta,
                                (null === (o = null === (i = s.instance) || void 0 === i ? void 0 : i.style) || void 0 === o ? void 0 : o.display) !== "contents" && (r && s.options.layoutScroll && s.scroll && s !== s.root && eO(t, {
                                    x: -s.scroll.offset.x,
                                    y: -s.scroll.offset.y
                                }),
                                a && (e.x *= a.x.scale,
                                e.y *= a.y.scale,
                                eS(t, a)),
                                r && eE(s.latestValues) && eO(t, s.latestValues));
                            e.x = eR(e.x),
                            e.y = eR(e.y)
                        }
                    }(this.layoutCorrected, this.treeScale, this.path, i);
                    let {target: l} = r;
                    if (!l)
                        return;
                    this.projectionDelta || (this.projectionDelta = ev(),
                    this.projectionDeltaWithTransform = ev());
                    let u = this.treeScale.x
                      , c = this.treeScale.y
                      , h = this.projectionTransform;
                    es(this.projectionDelta, this.layoutCorrected, l, this.latestValues),
                    this.projectionTransform = n$(this.projectionDelta, this.treeScale),
                    (this.projectionTransform !== h || this.treeScale.x !== u || this.treeScale.y !== c) && (this.hasProjected = !0,
                    this.scheduleRender(),
                    this.notifyListeners("projectionUpdate", l))
                }
                hide() {
                    this.isVisible = !1
                }
                show() {
                    this.isVisible = !0
                }
                scheduleRender(t=!0) {
                    var e, n, r;
                    null === (n = (e = this.options).scheduleRender) || void 0 === n || n.call(e),
                    t && (null === (r = this.getStack()) || void 0 === r || r.scheduleRender()),
                    this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
                }
                setAnimationOrigin(t, e=!1) {
                    var n, r;
                    let i = this.snapshot
                      , o = (null == i ? void 0 : i.latestValues) || {}
                      , s = {
                        ...this.latestValues
                    }
                      , a = ev();
                    this.relativeTarget = this.relativeTargetOrigin = void 0,
                    this.attemptToResolveRelativeTarget = !e;
                    let l = ey()
                      , u = (null == i ? void 0 : i.source) !== (null === (n = this.layout) || void 0 === n ? void 0 : n.source)
                      , c = 1 >= ((null === (r = this.getStack()) || void 0 === r ? void 0 : r.members.length) || 0)
                      , h = !!(u && !c && !0 === this.options.crossfade && !this.path.some(n4));
                    this.animationProgress = 0,
                    this.mixTargetDelta = e => {
                        var n, r, i;
                        let d = e / 1e3;
                        n6(a.x, t.x, d),
                        n6(a.y, t.y, d),
                        this.setTargetDelta(a),
                        this.relativeTarget && this.relativeTargetOrigin && this.layout && (null === (n = this.relativeParent) || void 0 === n ? void 0 : n.layout) && (eu(l, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                        r = this.relativeTarget,
                        i = this.relativeTargetOrigin,
                        n8(r.x, i.x, l.x, d),
                        n8(r.y, i.y, l.y, d)),
                        u && (this.animationValues = s,
                        function(t, e, n, r, i, o) {
                            i ? (t.opacity = (0,
                            en.C)(0, void 0 !== n.opacity ? n.opacity : 1, nA(r)),
                            t.opacityExit = (0,
                            en.C)(void 0 !== e.opacity ? e.opacity : 1, 0, nC(r))) : o && (t.opacity = (0,
                            en.C)(void 0 !== e.opacity ? e.opacity : 1, void 0 !== n.opacity ? n.opacity : 1, r));
                            for (let i = 0; i < nw; i++) {
                                let o = `border${nb[i]}Radius`
                                  , s = nT(e, o)
                                  , a = nT(n, o);
                                (void 0 !== s || void 0 !== a) && (s || (s = 0),
                                a || (a = 0),
                                0 === s || 0 === a || nE(s) === nE(a) ? (t[o] = Math.max((0,
                                en.C)(nP(s), nP(a), r), 0),
                                (H.aQ.test(a) || H.aQ.test(s)) && (t[o] += "%")) : t[o] = a)
                            }
                            (e.rotate || n.rotate) && (t.rotate = (0,
                            en.C)(e.rotate || 0, n.rotate || 0, r))
                        }(s, o, this.latestValues, d, h, c)),
                        this.root.scheduleUpdateProjection(),
                        this.scheduleRender(),
                        this.animationProgress = d
                    }
                    ,
                    this.mixTargetDelta(0)
                }
                startAnimation(t) {
                    var e, n;
                    this.notifyListeners("animationStart"),
                    null === (e = this.currentAnimation) || void 0 === e || e.stop(),
                    this.resumingFrom && (null === (n = this.resumingFrom.currentAnimation) || void 0 === n || n.stop()),
                    this.pendingAnimation && (t2.qY.update(this.pendingAnimation),
                    this.pendingAnimation = void 0),
                    this.pendingAnimation = t2.Z_.update( () => {
                        A.hasAnimatedSinceResize = !0,
                        this.currentAnimation = function(t, e, n={}) {
                            let r = (0,
                            _.i)(t) ? t : (0,
                            e7.B)(t);
                            return r.start((0,
                            eD.Z)("", r, 1e3, n)),
                            {
                                stop: () => r.stop(),
                                isAnimating: () => r.isAnimating()
                            }
                        }(0, 0, {
                            ...t,
                            onUpdate: e => {
                                var n;
                                this.mixTargetDelta(e),
                                null === (n = t.onUpdate) || void 0 === n || n.call(t, e)
                            }
                            ,
                            onComplete: () => {
                                var e;
                                null === (e = t.onComplete) || void 0 === e || e.call(t),
                                this.completeAnimation()
                            }
                        }),
                        this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                        this.pendingAnimation = void 0
                    }
                    )
                }
                completeAnimation() {
                    var t;
                    this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
                    this.resumingFrom.preserveOpacity = void 0),
                    null === (t = this.getStack()) || void 0 === t || t.exitAnimationComplete(),
                    this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
                    this.notifyListeners("animationComplete")
                }
                finishAnimation() {
                    var t;
                    this.currentAnimation && (null === (t = this.mixTargetDelta) || void 0 === t || t.call(this, 1e3),
                    this.currentAnimation.stop()),
                    this.completeAnimation()
                }
                applyTransformsToTarget() {
                    let t = this.getLead()
                      , {targetWithTransforms: e, target: n, layout: r, latestValues: i} = t;
                    if (e && n && r) {
                        if (this !== t && this.layout && r && rn(this.options.animationType, this.layout.layoutBox, r.layoutBox)) {
                            n = this.target || ey();
                            let e = er(this.layout.layoutBox.x);
                            n.x.min = t.target.x.min,
                            n.x.max = n.x.min + e;
                            let r = er(this.layout.layoutBox.y);
                            n.y.min = t.target.y.min,
                            n.y.max = n.y.min + r
                        }
                        nV(e, n),
                        eO(e, i),
                        es(this.projectionDeltaWithTransform, this.layoutCorrected, e, i)
                    }
                }
                registerSharedNode(t, e) {
                    var n, r, i;
                    this.sharedNodes.has(t) || this.sharedNodes.set(t, new nU),
                    this.sharedNodes.get(t).add(e),
                    e.promote({
                        transition: null === (n = e.options.initialPromotionConfig) || void 0 === n ? void 0 : n.transition,
                        preserveFollowOpacity: null === (i = null === (r = e.options.initialPromotionConfig) || void 0 === r ? void 0 : r.shouldPreserveFollowOpacity) || void 0 === i ? void 0 : i.call(r, e)
                    })
                }
                isLead() {
                    let t = this.getStack();
                    return !t || t.lead === this
                }
                getLead() {
                    var t;
                    let {layoutId: e} = this.options;
                    return e && (null === (t = this.getStack()) || void 0 === t ? void 0 : t.lead) || this
                }
                getPrevLead() {
                    var t;
                    let {layoutId: e} = this.options;
                    return e ? null === (t = this.getStack()) || void 0 === t ? void 0 : t.prevLead : void 0
                }
                getStack() {
                    let {layoutId: t} = this.options;
                    if (t)
                        return this.root.sharedNodes.get(t)
                }
                promote({needsReset: t, transition: e, preserveFollowOpacity: n}={}) {
                    let r = this.getStack();
                    r && r.promote(this, n),
                    t && (this.projectionDelta = void 0,
                    this.needsReset = !0),
                    e && this.setOptions({
                        transition: e
                    })
                }
                relegate() {
                    let t = this.getStack();
                    return !!t && t.relegate(this)
                }
                resetRotation() {
                    let {visualElement: t} = this.options;
                    if (!t)
                        return;
                    let e = !1
                      , {latestValues: n} = t;
                    if ((n.rotate || n.rotateX || n.rotateY || n.rotateZ) && (e = !0),
                    !e)
                        return;
                    let r = {};
                    for (let e = 0; e < nZ.length; e++) {
                        let i = "rotate" + nZ[e];
                        n[i] && (r[i] = n[i],
                        t.setStaticValue(i, 0))
                    }
                    for (let e in null == t || t.render(),
                    r)
                        t.setStaticValue(e, r[e]);
                    t.scheduleRender()
                }
                getProjectionStyles(t={}) {
                    var e, n, r;
                    let i = {};
                    if (!this.instance || this.isSVG)
                        return i;
                    if (!this.isVisible)
                        return {
                            visibility: "hidden"
                        };
                    i.visibility = "";
                    let o = null === (e = this.options.visualElement) || void 0 === e ? void 0 : e.getProps().transformTemplate;
                    if (this.needsReset)
                        return this.needsReset = !1,
                        i.opacity = "",
                        i.pointerEvents = tu(t.pointerEvents) || "",
                        i.transform = o ? o(this.latestValues, "") : "none",
                        i;
                    let s = this.getLead();
                    if (!this.projectionDelta || !this.layout || !s.target) {
                        let e = {};
                        return this.options.layoutId && (e.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1,
                        e.pointerEvents = tu(t.pointerEvents) || ""),
                        this.hasProjected && !eE(this.latestValues) && (e.transform = o ? o({}, "") : "none",
                        this.hasProjected = !1),
                        e
                    }
                    let a = s.animationValues || s.latestValues;
                    this.applyTransformsToTarget(),
                    i.transform = n$(this.projectionDeltaWithTransform, this.treeScale, a),
                    o && (i.transform = o(a, i.transform));
                    let {x: l, y: u} = this.projectionDelta;
                    for (let t in i.transformOrigin = `${100 * l.origin}% ${100 * u.origin}% 0`,
                    s.animationValues ? i.opacity = s === this ? null !== (r = null !== (n = a.opacity) && void 0 !== n ? n : this.latestValues.opacity) && void 0 !== r ? r : 1 : this.preserveOpacity ? this.latestValues.opacity : a.opacityExit : i.opacity = s === this ? void 0 !== a.opacity ? a.opacity : "" : void 0 !== a.opacityExit ? a.opacityExit : 0,
                    O) {
                        if (void 0 === a[t])
                            continue;
                        let {correct: e, applyTo: n} = O[t]
                          , r = e(a[t], s);
                        if (n) {
                            let t = n.length;
                            for (let e = 0; e < t; e++)
                                i[n[e]] = r
                        } else
                            i[t] = r
                    }
                    return this.options.layoutId && (i.pointerEvents = s === this ? tu(t.pointerEvents) || "" : "none"),
                    i
                }
                clearSnapshot() {
                    this.resumeFrom = this.snapshot = void 0
                }
                resetTree() {
                    this.root.nodes.forEach(t => {
                        var e;
                        return null === (e = t.currentAnimation) || void 0 === e ? void 0 : e.stop()
                    }
                    ),
                    this.root.nodes.forEach(nJ),
                    this.root.sharedNodes.clear()
                }
            }
        }
        function nG(t) {
            t.updateLayout()
        }
        function nK(t) {
            var e, n, r;
            let i = (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) || t.snapshot;
            if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
                let {layoutBox: e, measuredBox: n} = t.layout
                  , {animationType: r} = t.options
                  , o = i.source !== t.layout.source;
                "size" === r ? ex(t => {
                    let n = o ? i.measuredBox[t] : i.layoutBox[t]
                      , r = er(n);
                    n.min = e[t].min,
                    n.max = n.min + r
                }
                ) : rn(r, i.layoutBox, e) && ex(t => {
                    let n = o ? i.measuredBox[t] : i.layoutBox[t]
                      , r = er(e[t]);
                    n.max = n.min + r
                }
                );
                let s = ev();
                es(s, e, i.layoutBox);
                let a = ev();
                o ? es(a, t.applyTransform(n, !0), i.measuredBox) : es(a, e, i.layoutBox);
                let l = !nB(s)
                  , u = !1;
                if (!t.resumeFrom) {
                    let n = t.getClosestProjectingParent();
                    if (n && !n.resumeFrom) {
                        let {snapshot: t, layout: r} = n;
                        if (t && r) {
                            let n = ey();
                            eu(n, i.layoutBox, t.layoutBox);
                            let o = ey();
                            eu(o, e, r.layoutBox),
                            nI(n, o) || (u = !0)
                        }
                    }
                }
                t.notifyListeners("didUpdate", {
                    layout: e,
                    snapshot: i,
                    delta: a,
                    layoutDelta: s,
                    hasLayoutChanged: l,
                    hasRelativeTargetChanged: u
                })
            } else
                t.isLead() && (null === (r = (n = t.options).onExitComplete) || void 0 === r || r.call(n));
            t.options.transition = void 0
        }
        function nX(t) {
            t.isProjectionDirty || (t.isProjectionDirty = !!(t.parent && t.parent.isProjectionDirty)),
            t.isTransformDirty || (t.isTransformDirty = !!(t.parent && t.parent.isTransformDirty))
        }
        function nQ(t) {
            t.clearSnapshot()
        }
        function nJ(t) {
            t.clearMeasurements()
        }
        function n0(t) {
            let {visualElement: e} = t.options;
            (null == e ? void 0 : e.getProps().onBeforeLayoutMeasure) && e.notify("BeforeLayoutMeasure"),
            t.resetTransform()
        }
        function n1(t) {
            t.finishAnimation(),
            t.targetDelta = t.relativeTarget = t.target = void 0
        }
        function n2(t) {
            t.resolveTargetDelta()
        }
        function n5(t) {
            t.calcProjection()
        }
        function n3(t) {
            t.resetRotation()
        }
        function n9(t) {
            t.removeLeadSnapshot()
        }
        function n6(t, e, n) {
            t.translate = (0,
            en.C)(e.translate, 0, n),
            t.scale = (0,
            en.C)(e.scale, 1, n),
            t.origin = e.origin,
            t.originPoint = e.originPoint
        }
        function n8(t, e, n, r) {
            t.min = (0,
            en.C)(e.min, n.min, r),
            t.max = (0,
            en.C)(e.max, n.max, r)
        }
        function n4(t) {
            return t.animationValues && void 0 !== t.animationValues.opacityExit
        }
        let n7 = {
            duration: .45,
            ease: [.4, 0, .1, 1]
        };
        function rt(t, e) {
            let n = t.root;
            for (let e = t.path.length - 1; e >= 0; e--)
                if (t.path[e].instance) {
                    n = t.path[e];
                    break
                }
            let r = (n && n !== t.root ? n.instance : document).querySelector(`[data-projection-id="${e}"]`);
            r && t.mount(r, !0)
        }
        function re(t) {
            t.min = Math.round(t.min),
            t.max = Math.round(t.max)
        }
        function rn(t, e, n) {
            return "position" === t || "preserve-aspect" === t && !ei(nF(e), nF(n), .2)
        }
        let rr = nH({
            attachResizeListener: (t, e) => tf(t, "resize", e),
            measureScroll: () => ({
                x: document.documentElement.scrollLeft || document.body.scrollLeft,
                y: document.documentElement.scrollTop || document.body.scrollTop
            }),
            checkIsScrollRoot: () => !0
        })
          , ri = {
            current: void 0
        }
          , ro = nH({
            measureScroll: t => ({
                x: t.scrollLeft,
                y: t.scrollTop
            }),
            defaultParent: () => {
                if (!ri.current) {
                    let t = new rr(0,{});
                    t.mount(window),
                    t.setOptions({
                        layoutScroll: !0
                    }),
                    ri.current = t
                }
                return ri.current
            }
            ,
            resetTransform: (t, e) => {
                t.style.transform = void 0 !== e ? e : "none"
            }
            ,
            checkIsScrollRoot: t => "fixed" === window.getComputedStyle(t).position
        })
          , rs = {
            ...t0,
            ...tz,
            ...eF,
            measureLayout: function(t) {
                let[e,n] = tY()
                  , r = (0,
                l.useContext)(S.p);
                return l.createElement(nv, {
                    ...t,
                    layoutGroup: r,
                    switchLayoutGroup: (0,
                    l.useContext)(V),
                    isPresent: e,
                    safeToRemove: n
                })
            }
        }
          , ra = function(t) {
            function e(e, n={}) {
                return function({preloadedFeatures: t, createVisualElement: e, projectionNodeConstructor: n, useRender: r, useVisualState: i, Component: o}) {
                    t && function(t) {
                        for (let e in t)
                            "projectionNodeConstructor" === e ? P.projectionNodeConstructor = t[e] : P[e].Component = t[e]
                    }(t);
                    let s = (0,
                    l.forwardRef)(function(s, a) {
                        var v;
                        let g = {
                            ...(0,
                            l.useContext)(u._),
                            ...s,
                            layoutId: function({layoutId: t}) {
                                let e = (0,
                                l.useContext)(S.p).id;
                                return e && void 0 !== t ? e + "-" + t : t
                            }(s)
                        }
                          , {isStatic: x} = g
                          , w = null
                          , M = function(t) {
                            let {initial: e, animate: n} = function(t, e) {
                                if (y(t)) {
                                    let {initial: e, animate: n} = t;
                                    return {
                                        initial: !1 === e || m(e) ? e : void 0,
                                        animate: m(n) ? n : void 0
                                    }
                                }
                                return !1 !== t.inherit ? e : {}
                            }(t, (0,
                            l.useContext)(c));
                            return (0,
                            l.useMemo)( () => ({
                                initial: e,
                                animate: n
                            }), [b(e), b(n)])
                        }(s)
                          , j = x ? void 0 : (0,
                        T.h)( () => {
                            if (A.hasEverUpdated)
                                return C++
                        }
                        )
                          , k = i(s, x);
                        if (!x && E.j) {
                            M.visualElement = function(t, e, n, r) {
                                let i = (0,
                                l.useContext)(c).visualElement
                                  , o = (0,
                                l.useContext)(f)
                                  , s = (0,
                                l.useContext)(h.O)
                                  , a = (0,
                                l.useContext)(u._).reducedMotion
                                  , p = (0,
                                l.useRef)();
                                r = r || o.renderer,
                                !p.current && r && (p.current = r(t, {
                                    visualState: e,
                                    parent: i,
                                    props: n,
                                    presenceId: s ? s.id : void 0,
                                    blockInitialAnimation: !!s && !1 === s.initial,
                                    reducedMotionConfig: a
                                }));
                                let m = p.current;
                                return (0,
                                d.L)( () => {
                                    m && m.render()
                                }
                                ),
                                (0,
                                d.L)( () => {
                                    m && m.animationState && m.animationState.animateChanges()
                                }
                                ),
                                (0,
                                d.L)( () => () => m && m.notify("Unmount"), []),
                                m
                            }(o, k, g, e);
                            let r = (0,
                            l.useContext)(f).strict
                              , i = (0,
                            l.useContext)(V);
                            M.visualElement && (w = M.visualElement.loadFeatures(g, r, t, j, n || P.projectionNodeConstructor, i))
                        }
                        return l.createElement(R, {
                            visualElement: M.visualElement,
                            props: g
                        }, w, l.createElement(c.Provider, {
                            value: M
                        }, r(o, s, j, (v = M.visualElement,
                        (0,
                        l.useCallback)(t => {
                            t && k.mount && k.mount(t),
                            v && (t ? v.mount(t) : v.unmount()),
                            a && ("function" == typeof a ? a(t) : p(a) && (a.current = t))
                        }
                        , [v])), k, x, M.visualElement)))
                    });
                    return s[M] = o,
                    s
                }(t(e, n))
            }
            if ("undefined" == typeof Proxy)
                return e;
            let n = new Map;
            return new Proxy(e,{
                get: (t, r) => (n.has(r) || n.set(r, e(r)),
                n.get(r))
            })
        }( (t, e) => (function(t, {forwardMotionProps: e=!1}, n, r, i) {
            return {
                ...k(t) ? th : td,
                preloadedFeatures: n,
                useRender: function(t=!1) {
                    return (e, n, r, i, {latestValues: o}, s) => {
                        let a = (k(e) ? function(t, e, n, r) {
                            let i = (0,
                            l.useMemo)( () => {
                                let n = J();
                                return Q(n, e, {
                                    enableHardwareAcceleration: !1
                                }, tt(r), t.transformTemplate),
                                {
                                    ...n.attrs,
                                    style: {
                                        ...n.style
                                    }
                                }
                            }
                            , [e]);
                            if (t.style) {
                                let e = {};
                                z(e, t.style, t),
                                i.style = {
                                    ...e,
                                    ...i.style
                                }
                            }
                            return i
                        }
                        : function(t, e, n) {
                            let r = {}
                              , i = function(t, e, n) {
                                let r = t.style || {}
                                  , i = {};
                                return z(i, r, t),
                                Object.assign(i, function({transformTemplate: t}, e, n) {
                                    return (0,
                                    l.useMemo)( () => {
                                        let r = W();
                                        return $(r, e, {
                                            enableHardwareAcceleration: !n
                                        }, t),
                                        Object.assign({}, r.vars, r.style)
                                    }
                                    , [e])
                                }(t, e, n)),
                                t.transformValues ? t.transformValues(i) : i
                            }(t, e, n);
                            return t.drag && !1 !== t.dragListener && (r.draggable = !1,
                            i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none",
                            i.touchAction = !0 === t.drag ? "none" : `pan-${"x" === t.drag ? "y" : "x"}`),
                            r.style = i,
                            r
                        }
                        )(n, o, s, e)
                          , u = {
                            ...function(t, e, n) {
                                let r = {};
                                for (let i in t)
                                    (q(i) || !0 === n && Z(i) || !e && !Z(i) || t.draggable && i.startsWith("onDrag")) && (r[i] = t[i]);
                                return r
                            }(n, "string" == typeof e, t),
                            ...a,
                            ref: i
                        };
                        return r && (u["data-projection-id"] = r),
                        (0,
                        l.createElement)(e, u)
                    }
                }(e),
                createVisualElement: r,
                projectionNodeConstructor: i,
                Component: t
            }
        }
        )(t, e, rs, nc, ro))
    },
    7905: function(t, e, n) {
        "use strict";
        n.d(e, {
            D: function() {
                return r
            }
        });
        let r = t => t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
    },
    9006: function(t, e, n) {
        "use strict";
        n.d(e, {
            T: function() {
                return s
            }
        });
        var r = n(9155)
          , i = n(4875)
          , o = n(5008);
        function s(t, e) {
            var n;
            let s = (0,
            o.A)(t);
            return s !== i.h && (s = r.P),
            null === (n = s.getAnimatableNone) || void 0 === n ? void 0 : n.call(s, e)
        }
    },
    5008: function(t, e, n) {
        "use strict";
        n.d(e, {
            A: function() {
                return s
            }
        });
        var r = n(2199)
          , i = n(4875);
        let o = {
            ...n(3002).j,
            color: r.$,
            backgroundColor: r.$,
            outlineColor: r.$,
            fill: r.$,
            stroke: r.$,
            borderColor: r.$,
            borderTopColor: r.$,
            borderRightColor: r.$,
            borderBottomColor: r.$,
            borderLeftColor: r.$,
            filter: i.h,
            WebkitFilter: i.h
        }
          , s = t => o[t]
    },
    8824: function(t, e, n) {
        "use strict";
        n.d(e, {
            $: function() {
                return s
            },
            C: function() {
                return a
            }
        });
        var r = n(2980)
          , i = n(3681)
          , o = n(8598);
        let s = [r.Rx, i.px, i.aQ, i.RW, i.vw, i.vh, {
            test: t => "auto" === t,
            parse: t => t
        }]
          , a = t => s.find((0,
        o.l)(t))
    },
    3002: function(t, e, n) {
        "use strict";
        n.d(e, {
            j: function() {
                return s
            }
        });
        var r = n(2980)
          , i = n(3681);
        let o = {
            ...r.Rx,
            transform: Math.round
        }
          , s = {
            borderWidth: i.px,
            borderTopWidth: i.px,
            borderRightWidth: i.px,
            borderBottomWidth: i.px,
            borderLeftWidth: i.px,
            borderRadius: i.px,
            radius: i.px,
            borderTopLeftRadius: i.px,
            borderTopRightRadius: i.px,
            borderBottomRightRadius: i.px,
            borderBottomLeftRadius: i.px,
            width: i.px,
            maxWidth: i.px,
            height: i.px,
            maxHeight: i.px,
            size: i.px,
            top: i.px,
            right: i.px,
            bottom: i.px,
            left: i.px,
            padding: i.px,
            paddingTop: i.px,
            paddingRight: i.px,
            paddingBottom: i.px,
            paddingLeft: i.px,
            margin: i.px,
            marginTop: i.px,
            marginRight: i.px,
            marginBottom: i.px,
            marginLeft: i.px,
            rotate: i.RW,
            rotateX: i.RW,
            rotateY: i.RW,
            rotateZ: i.RW,
            scale: r.bA,
            scaleX: r.bA,
            scaleY: r.bA,
            scaleZ: r.bA,
            skew: i.RW,
            skewX: i.RW,
            skewY: i.RW,
            distance: i.px,
            translateX: i.px,
            translateY: i.px,
            translateZ: i.px,
            x: i.px,
            y: i.px,
            z: i.px,
            perspective: i.px,
            transformPerspective: i.px,
            opacity: r.Fq,
            originX: i.$C,
            originY: i.$C,
            originZ: i.px,
            zIndex: o,
            fillOpacity: r.Fq,
            strokeOpacity: r.Fq,
            numOctaves: o
        }
    },
    8598: function(t, e, n) {
        "use strict";
        n.d(e, {
            l: function() {
                return r
            }
        });
        let r = t => e => e.test(t)
    },
    9303: function(t, e, n) {
        "use strict";
        n.d(e, {
            G: function() {
                return i
            },
            _: function() {
                return r
            }
        });
        let r = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
          , i = new Set(r)
    },
    6408: function(t, e, n) {
        "use strict";
        n.d(e, {
            d5: function() {
                return h
            },
            p_: function() {
                return p
            }
        });
        var r = n(52)
          , i = n(2593)
          , o = n(9303)
          , s = n(3227)
          , a = n(4132);
        let l = (t, e) => `${t}: ${e}`
          , u = "data-" + (0,
        n(7905).D)("framerAppearId");
        var c = n(8695);
        function h(t, e, n={}) {
            let r;
            if (t.notify("AnimationStart", e),
            Array.isArray(e))
                r = Promise.all(e.map(e => d(t, e, n)));
            else if ("string" == typeof e)
                r = d(t, e, n);
            else {
                let o = "function" == typeof e ? (0,
                i.x)(t, e, n.custom) : e;
                r = f(t, o, n)
            }
            return r.then( () => t.notify("AnimationComplete", e))
        }
        function d(t, e, n={}) {
            var r;
            let o = (0,
            i.x)(t, e, n.custom)
              , {transition: s=t.getDefaultTransition() || {}} = o || {};
            n.transitionOverride && (s = n.transitionOverride);
            let a = o ? () => f(t, o, n) : () => Promise.resolve()
              , l = (null === (r = t.variantChildren) || void 0 === r ? void 0 : r.size) ? (r=0) => {
                let {delayChildren: i=0, staggerChildren: o, staggerDirection: a} = s;
                return function(t, e, n=0, r=0, i=1, o) {
                    let s = []
                      , a = (t.variantChildren.size - 1) * r
                      , l = 1 === i ? (t=0) => t * r : (t=0) => a - t * r;
                    return Array.from(t.variantChildren).sort(m).forEach( (t, r) => {
                        s.push(d(t, e, {
                            ...o,
                            delay: n + l(r)
                        }).then( () => t.notify("AnimationComplete", e)))
                    }
                    ),
                    Promise.all(s)
                }(t, e, i + r, o, a, n)
            }
            : () => Promise.resolve()
              , {when: u} = s;
            if (!u)
                return Promise.all([a(), l(n.delay)]);
            {
                let[t,e] = "beforeChildren" === u ? [a, l] : [l, a];
                return t().then(e)
            }
        }
        function f(t, e, {delay: n=0, transitionOverride: i, type: h}={}) {
            var d;
            let {transition: f=t.getDefaultTransition(), transitionEnd: p, ...m} = t.makeTargetAnimatable(e)
              , v = t.getValue("willChange");
            i && (f = i);
            let g = []
              , y = h && (null === (d = t.animationState) || void 0 === d ? void 0 : d.getState()[h]);
            for (let e in m) {
                let r = t.getValue(e)
                  , i = m[e];
                if (!r || void 0 === i || y && function({protectedKeys: t, needsAnimating: e}, n) {
                    let r = t.hasOwnProperty(n) && !0 !== e[n];
                    return e[n] = !1,
                    r
                }(y, e))
                    continue;
                let h = {
                    delay: n,
                    elapsed: 0,
                    ...f
                };
                if (t.shouldReduceMotion && o.G.has(e) && (h = {
                    ...h,
                    type: !1,
                    delay: 0
                }),
                !r.hasAnimated) {
                    let n = t.getProps()[u];
                    n && (h.elapsed = function(t, e) {
                        let {MotionAppearAnimations: n} = window
                          , r = l(t, o.G.has(e) ? "transform" : e)
                          , i = n && n.get(r);
                        return i ? (a.Z_.render( () => {
                            try {
                                i.cancel(),
                                n.delete(r)
                            } catch (t) {}
                        }
                        ),
                        i.currentTime || 0) : 0
                    }(n, e))
                }
                let d = r.start((0,
                c.Z)(e, r, i, h));
                (0,
                s.L)(v) && (v.add(e),
                d = d.then( () => v.remove(e))),
                g.push(d)
            }
            return Promise.all(g).then( () => {
                p && (0,
                r.CD)(t, p)
            }
            )
        }
        function p(t) {
            t.values.forEach(t => t.stop())
        }
        function m(t, e) {
            return t.sortNodePosition(e)
        }
    },
    2593: function(t, e, n) {
        "use strict";
        n.d(e, {
            x: function() {
                return i
            }
        });
        var r = n(3331);
        function i(t, e, n) {
            let i = t.getProps();
            return (0,
            r.o)(i, e, void 0 !== n ? n : i.custom, function(t) {
                let e = {};
                return t.values.forEach( (t, n) => e[n] = t.get()),
                e
            }(t), function(t) {
                let e = {};
                return t.values.forEach( (t, n) => e[n] = t.getVelocity()),
                e
            }(t))
        }
    },
    3331: function(t, e, n) {
        "use strict";
        function r(t, e, n, r={}, i={}) {
            return "function" == typeof e && (e = e(void 0 !== n ? n : t.custom, r, i)),
            "string" == typeof e && (e = t.variants && t.variants[e]),
            "function" == typeof e && (e = e(void 0 !== n ? n : t.custom, r, i)),
            e
        }
        n.d(e, {
            o: function() {
                return r
            }
        })
    },
    52: function(t, e, n) {
        "use strict";
        n.d(e, {
            GJ: function() {
                return y
            },
            P$: function() {
                return x
            },
            CD: function() {
                return m
            },
            gg: function() {
                return g
            }
        });
        let r = t => /^\-?\d*\.?\d+$/.test(t)
          , i = t => /^0[^.\s]+$/.test(t);
        var o = n(1832)
          , s = n(5818)
          , a = n(9155)
          , l = n(9006)
          , u = n(2199)
          , c = n(8824)
          , h = n(8598);
        let d = [...c.$, u.$, a.P]
          , f = t => d.find((0,
        h.l)(t));
        var p = n(2593);
        function m(t, e) {
            let n = (0,
            p.x)(t, e)
              , {transitionEnd: r={}, transition: i={}, ...a} = n ? t.makeTargetAnimatable(n, !1) : {};
            for (let e in a = {
                ...a,
                ...r
            }) {
                let n = (0,
                o.Y)(a[e]);
                t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, (0,
                s.B)(n))
            }
        }
        function v(t, e) {
            [...e].reverse().forEach(n => {
                var r;
                let i = t.getVariant(n);
                i && m(t, i),
                null === (r = t.variantChildren) || void 0 === r || r.forEach(t => {
                    v(t, e)
                }
                )
            }
            )
        }
        function g(t, e) {
            return Array.isArray(e) ? v(t, e) : "string" == typeof e ? v(t, [e]) : void m(t, e)
        }
        function y(t, e, n) {
            var o, u;
            let c = Object.keys(e).filter(e => !t.hasValue(e))
              , h = c.length;
            if (h)
                for (let d = 0; d < h; d++) {
                    let h = c[d]
                      , p = e[h]
                      , m = null;
                    Array.isArray(p) && (m = p[0]),
                    null === m && (m = null !== (u = null !== (o = n[h]) && void 0 !== o ? o : t.readValue(h)) && void 0 !== u ? u : e[h]),
                    null != m && ("string" == typeof m && (r(m) || i(m)) ? m = parseFloat(m) : !f(m) && a.P.test(p) && (m = (0,
                    l.T)(h, p)),
                    t.addValue(h, (0,
                    s.B)(m, {
                        owner: t
                    })),
                    void 0 === n[h] && (n[h] = m),
                    null !== m && t.setBaseTarget(h, m))
                }
        }
        function x(t, e, n) {
            var r;
            let i = {};
            for (let o in t) {
                let t = function(t, e) {
                    if (e)
                        return (e[t] || e.default || e).from
                }(o, e);
                i[o] = void 0 !== t ? t : null === (r = n.getValue(o)) || void 0 === r ? void 0 : r.get()
            }
            return i
        }
    },
    7081: function(t, e, n) {
        "use strict";
        function r(t, e) {
            -1 === t.indexOf(e) && t.push(e)
        }
        function i(t, e) {
            let n = t.indexOf(e);
            n > -1 && t.splice(n, 1)
        }
        n.d(e, {
            cl: function() {
                return i
            },
            y4: function() {
                return r
            }
        })
    },
    3021: function(t, e, n) {
        "use strict";
        n.d(e, {
            u: function() {
                return r
            }
        });
        let r = (t, e, n) => Math.min(Math.max(n, t), e)
    },
    3705: function(t, e, n) {
        "use strict";
        n.d(e, {
            g: function() {
                return i
            }
        });
        var r = n(4132);
        function i(t, e) {
            let n = performance.now()
              , i = ({timestamp: o}) => {
                let s = o - n;
                s >= e && (r.qY.read(i),
                t(s - e))
            }
            ;
            return r.Z_.read(i, !0),
            () => r.qY.read(i)
        }
    },
    3245: function(t, e, n) {
        "use strict";
        n.d(e, {
            s: function() {
                return T
            }
        });
        var r = n(3225)
          , i = n(2199)
          , o = n(3021)
          , s = n(7);
        function a(t, e, n) {
            return (n < 0 && (n += 1),
            n > 1 && (n -= 1),
            n < 1 / 6) ? t + (e - t) * 6 * n : n < .5 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
        }
        var l = n(3257)
          , u = n(2808)
          , c = n(6002);
        let h = (t, e, n) => {
            let r = t * t;
            return Math.sqrt(Math.max(0, n * (e * e - r) + r))
        }
          , d = [l.$, u.m, c.J]
          , f = t => d.find(e => e.test(t));
        function p(t) {
            let e = f(t);
            (0,
            r.k)(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`);
            let n = e.parse(t);
            return e === c.J && (n = function({hue: t, saturation: e, lightness: n, alpha: r}) {
                t /= 360,
                n /= 100;
                let i = 0
                  , o = 0
                  , s = 0;
                if (e /= 100) {
                    let r = n < .5 ? n * (1 + e) : n + e - n * e
                      , l = 2 * n - r;
                    i = a(l, r, t + 1 / 3),
                    o = a(l, r, t),
                    s = a(l, r, t - 1 / 3)
                } else
                    i = o = s = n;
                return {
                    red: Math.round(255 * i),
                    green: Math.round(255 * o),
                    blue: Math.round(255 * s),
                    alpha: r
                }
            }(n)),
            n
        }
        let m = (t, e) => {
            let n = p(t)
              , r = p(e)
              , i = {
                ...n
            };
            return t => (i.red = h(n.red, r.red, t),
            i.green = h(n.green, r.green, t),
            i.blue = h(n.blue, r.blue, t),
            i.alpha = (0,
            s.C)(n.alpha, r.alpha, t),
            u.m.transform(i))
        }
        ;
        var v = n(4694)
          , g = n(9155);
        function y(t, e) {
            return "number" == typeof t ? n => (0,
            s.C)(t, e, n) : i.$.test(t) ? m(t, e) : w(t, e)
        }
        let x = (t, e) => {
            let n = [...t]
              , r = n.length
              , i = t.map( (t, n) => y(t, e[n]));
            return t => {
                for (let e = 0; e < r; e++)
                    n[e] = i[e](t);
                return n
            }
        }
          , b = (t, e) => {
            let n = {
                ...t,
                ...e
            }
              , r = {};
            for (let i in n)
                void 0 !== t[i] && void 0 !== e[i] && (r[i] = y(t[i], e[i]));
            return t => {
                for (let e in r)
                    n[e] = r[e](t);
                return n
            }
        }
          , w = (t, e) => {
            let n = g.P.createTransformer(e)
              , i = (0,
            g.V)(t)
              , o = (0,
            g.V)(e);
            return i.numColors === o.numColors && i.numNumbers >= o.numNumbers ? (0,
            v.z)(x(i.values, o.values), n) : ((0,
            r.K)(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),
            n => `${n > 0 ? e : t}`)
        }
        ;
        var P = n(2868);
        let E = (t, e) => n => (0,
        s.C)(t, e, n);
        function T(t, e, {clamp: n=!0, ease: s, mixer: a}={}) {
            let l = t.length;
            (0,
            r.k)(l === e.length, "Both input and output ranges must be the same length"),
            (0,
            r.k)(!s || !Array.isArray(s) || s.length === l - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."),
            t[0] > t[l - 1] && (t = [...t].reverse(),
            e = [...e].reverse());
            let u = function(t, e, n) {
                let r = []
                  , o = n || function(t) {
                    if ("number" == typeof t)
                        ;
                    else if ("string" == typeof t)
                        return i.$.test(t) ? m : w;
                    else if (Array.isArray(t))
                        return x;
                    else if ("object" == typeof t)
                        return b;
                    return E
                }(t[0])
                  , s = t.length - 1;
                for (let n = 0; n < s; n++) {
                    let i = o(t[n], t[n + 1]);
                    if (e) {
                        let t = Array.isArray(e) ? e[n] : e;
                        i = (0,
                        v.z)(t, i)
                    }
                    r.push(i)
                }
                return r
            }(e, s, a)
              , c = u.length
              , h = e => {
                let n = 0;
                if (c > 1)
                    for (; n < t.length - 2 && !(e < t[n + 1]); n++)
                        ;
                let r = (0,
                P.Y)(t[n], t[n + 1], e);
                return u[n](r)
            }
            ;
            return n ? e => h((0,
            o.u)(t[0], t[l - 1], e)) : h
        }
    },
    6613: function(t, e, n) {
        "use strict";
        n.d(e, {
            j: function() {
                return r
            }
        });
        let r = "undefined" != typeof document
    },
    7: function(t, e, n) {
        "use strict";
        n.d(e, {
            C: function() {
                return r
            }
        });
        let r = (t, e, n) => -n * t + n * e + t
    },
    6977: function(t, e, n) {
        "use strict";
        n.d(e, {
            Z: function() {
                return r
            }
        });
        let r = t => t
    },
    4694: function(t, e, n) {
        "use strict";
        n.d(e, {
            z: function() {
                return i
            }
        });
        let r = (t, e) => n => e(t(n))
          , i = (...t) => t.reduce(r)
    },
    1332: function(t, e, n) {
        "use strict";
        n.d(e, {
            O: function() {
                return i
            }
        });
        var r = n(2601);
        let i = (void 0 === r || r.env,
        "production")
    },
    2868: function(t, e, n) {
        "use strict";
        n.d(e, {
            Y: function() {
                return r
            }
        });
        let r = (t, e, n) => {
            let r = e - t;
            return 0 === r ? 1 : (n - t) / r
        }
    },
    1832: function(t, e, n) {
        "use strict";
        n.d(e, {
            Y: function() {
                return o
            },
            p: function() {
                return i
            }
        });
        var r = n(363);
        let i = t => !!(t && "object" == typeof t && t.mix && t.toValue)
          , o = t => (0,
        r.C)(t) ? t[t.length - 1] || 0 : t
    },
    7026: function(t, e, n) {
        "use strict";
        n.d(e, {
            L: function() {
                return i
            }
        });
        var r = n(7081);
        class i {
            constructor() {
                this.subscriptions = []
            }
            add(t) {
                return (0,
                r.y4)(this.subscriptions, t),
                () => (0,
                r.cl)(this.subscriptions, t)
            }
            notify(t, e, n) {
                let r = this.subscriptions.length;
                if (r) {
                    if (1 === r)
                        this.subscriptions[0](t, e, n);
                    else
                        for (let i = 0; i < r; i++) {
                            let r = this.subscriptions[i];
                            r && r(t, e, n)
                        }
                }
            }
            getSize() {
                return this.subscriptions.length
            }
            clear() {
                this.subscriptions.length = 0
            }
        }
    },
    1356: function(t, e, n) {
        "use strict";
        n.d(e, {
            w: function() {
                return r
            }
        });
        let r = t => 1e3 * t
    },
    961: function(t, e, n) {
        "use strict";
        n.d(e, {
            h: function() {
                return i
            }
        });
        var r = n(2265);
        function i(t) {
            let e = (0,
            r.useRef)(null);
            return null === e.current && (e.current = t()),
            e.current
        }
    },
    538: function(t, e, n) {
        "use strict";
        n.d(e, {
            L: function() {
                return i
            }
        });
        var r = n(2265);
        let i = n(6613).j ? r.useLayoutEffect : r.useEffect
    },
    3276: function(t, e, n) {
        "use strict";
        n.d(e, {
            z: function() {
                return i
            }
        });
        var r = n(2265);
        function i(t) {
            return (0,
            r.useEffect)( () => () => t(), [])
        }
    },
    9815: function(t, e, n) {
        "use strict";
        function r(t, e) {
            return e ? 1e3 / e * t : 0
        }
        n.d(e, {
            R: function() {
                return r
            }
        })
    },
    8704: function(t, e, n) {
        "use strict";
        n.d(e, {
            O: function() {
                return i
            }
        });
        let r = new Set;
        function i(t, e, n) {
            t || r.has(e) || (console.warn(e),
            n && console.warn(n),
            r.add(e))
        }
    },
    5818: function(t, e, n) {
        "use strict";
        n.d(e, {
            B: function() {
                return u
            }
        });
        var r = n(6442)
          , i = n(4132)
          , o = n(7026)
          , s = n(9815);
        let a = t => !isNaN(parseFloat(t));
        class l {
            constructor(t, e={}) {
                this.version = "7.10.3",
                this.timeDelta = 0,
                this.lastUpdated = 0,
                this.canTrackVelocity = !1,
                this.events = {},
                this.updateAndNotify = (t, e=!0) => {
                    this.prev = this.current,
                    this.current = t;
                    let {delta: n, timestamp: o} = r.frameData;
                    this.lastUpdated !== o && (this.timeDelta = n,
                    this.lastUpdated = o,
                    i.Z_.postRender(this.scheduleVelocityCheck)),
                    this.prev !== this.current && this.events.change && this.events.change.notify(this.current),
                    this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()),
                    e && this.events.renderRequest && this.events.renderRequest.notify(this.current)
                }
                ,
                this.scheduleVelocityCheck = () => i.Z_.postRender(this.velocityCheck),
                this.velocityCheck = ({timestamp: t}) => {
                    t !== this.lastUpdated && (this.prev = this.current,
                    this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()))
                }
                ,
                this.hasAnimated = !1,
                this.prev = this.current = t,
                this.canTrackVelocity = a(this.current),
                this.owner = e.owner
            }
            onChange(t) {
                return this.on("change", t)
            }
            on(t, e) {
                return this.events[t] || (this.events[t] = new o.L),
                this.events[t].add(e)
            }
            clearListeners() {
                for (let t in this.events)
                    this.events[t].clear()
            }
            attach(t) {
                this.passiveEffect = t
            }
            set(t, e=!0) {
                e && this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t, e)
            }
            setWithVelocity(t, e, n) {
                this.set(e),
                this.prev = t,
                this.timeDelta = n
            }
            get() {
                return this.current
            }
            getPrevious() {
                return this.prev
            }
            getVelocity() {
                return this.canTrackVelocity ? (0,
                s.R)(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
            }
            start(t) {
                return this.stop(),
                new Promise(e => {
                    this.hasAnimated = !0,
                    this.stopAnimation = t(e),
                    this.events.animationStart && this.events.animationStart.notify()
                }
                ).then( () => {
                    this.events.animationComplete && this.events.animationComplete.notify(),
                    this.clearAnimation()
                }
                )
            }
            stop() {
                this.stopAnimation && (this.stopAnimation(),
                this.events.animationCancel && this.events.animationCancel.notify()),
                this.clearAnimation()
            }
            isAnimating() {
                return !!this.stopAnimation
            }
            clearAnimation() {
                this.stopAnimation = null
            }
            destroy() {
                this.clearListeners(),
                this.stop()
            }
        }
        function u(t, e) {
            return new l(t,e)
        }
    },
    3257: function(t, e, n) {
        "use strict";
        n.d(e, {
            $: function() {
                return i
            }
        });
        var r = n(2808);
        let i = {
            test: (0,
            n(686).i)("#"),
            parse: function(t) {
                let e = ""
                  , n = ""
                  , r = ""
                  , i = "";
                return t.length > 5 ? (e = t.substring(1, 3),
                n = t.substring(3, 5),
                r = t.substring(5, 7),
                i = t.substring(7, 9)) : (e = t.substring(1, 2),
                n = t.substring(2, 3),
                r = t.substring(3, 4),
                i = t.substring(4, 5),
                e += e,
                n += n,
                r += r,
                i += i),
                {
                    red: parseInt(e, 16),
                    green: parseInt(n, 16),
                    blue: parseInt(r, 16),
                    alpha: i ? parseInt(i, 16) / 255 : 1
                }
            },
            transform: r.m.transform
        }
    },
    6002: function(t, e, n) {
        "use strict";
        n.d(e, {
            J: function() {
                return a
            }
        });
        var r = n(2980)
          , i = n(3681)
          , o = n(2038)
          , s = n(686);
        let a = {
            test: (0,
            s.i)("hsl", "hue"),
            parse: (0,
            s.d)("hue", "saturation", "lightness"),
            transform: ({hue: t, saturation: e, lightness: n, alpha: s=1}) => "hsla(" + Math.round(t) + ", " + i.aQ.transform((0,
            o.Nw)(e)) + ", " + i.aQ.transform((0,
            o.Nw)(n)) + ", " + (0,
            o.Nw)(r.Fq.transform(s)) + ")"
        }
    },
    2199: function(t, e, n) {
        "use strict";
        n.d(e, {
            $: function() {
                return a
            }
        });
        var r = n(2038)
          , i = n(3257)
          , o = n(6002)
          , s = n(2808);
        let a = {
            test: t => s.m.test(t) || i.$.test(t) || o.J.test(t),
            parse: t => s.m.test(t) ? s.m.parse(t) : o.J.test(t) ? o.J.parse(t) : i.$.parse(t),
            transform: t => (0,
            r.HD)(t) ? t : t.hasOwnProperty("red") ? s.m.transform(t) : o.J.transform(t)
        }
    },
    2808: function(t, e, n) {
        "use strict";
        n.d(e, {
            m: function() {
                return u
            }
        });
        var r = n(3021)
          , i = n(2980)
          , o = n(2038)
          , s = n(686);
        let a = t => (0,
        r.u)(0, 255, t)
          , l = {
            ...i.Rx,
            transform: t => Math.round(a(t))
        }
          , u = {
            test: (0,
            s.i)("rgb", "red"),
            parse: (0,
            s.d)("red", "green", "blue"),
            transform: ({red: t, green: e, blue: n, alpha: r=1}) => "rgba(" + l.transform(t) + ", " + l.transform(e) + ", " + l.transform(n) + ", " + (0,
            o.Nw)(i.Fq.transform(r)) + ")"
        }
    },
    686: function(t, e, n) {
        "use strict";
        n.d(e, {
            d: function() {
                return o
            },
            i: function() {
                return i
            }
        });
        var r = n(2038);
        let i = (t, e) => n => !!((0,
        r.HD)(n) && r.mj.test(n) && n.startsWith(t) || e && Object.prototype.hasOwnProperty.call(n, e))
          , o = (t, e, n) => i => {
            if (!(0,
            r.HD)(i))
                return i;
            let[o,s,a,l] = i.match(r.KP);
            return {
                [t]: parseFloat(o),
                [e]: parseFloat(s),
                [n]: parseFloat(a),
                alpha: void 0 !== l ? parseFloat(l) : 1
            }
        }
    },
    4875: function(t, e, n) {
        "use strict";
        n.d(e, {
            h: function() {
                return l
            }
        });
        var r = n(9155)
          , i = n(2038);
        let o = new Set(["brightness", "contrast", "saturate", "opacity"]);
        function s(t) {
            let[e,n] = t.slice(0, -1).split("(");
            if ("drop-shadow" === e)
                return t;
            let[r] = n.match(i.KP) || [];
            if (!r)
                return t;
            let s = n.replace(r, "")
              , a = o.has(e) ? 1 : 0;
            return r !== n && (a *= 100),
            e + "(" + a + s + ")"
        }
        let a = /([a-z-]*)\(.*?\)/g
          , l = {
            ...r.P,
            getAnimatableNone: t => {
                let e = t.match(a);
                return e ? e.map(s).join(" ") : t
            }
        }
    },
    9155: function(t, e, n) {
        "use strict";
        n.d(e, {
            P: function() {
                return d
            },
            V: function() {
                return l
            }
        });
        var r = n(2199)
          , i = n(2980)
          , o = n(2038);
        let s = "${c}"
          , a = "${n}";
        function l(t) {
            "number" == typeof t && (t = `${t}`);
            let e = []
              , n = 0
              , l = 0
              , u = t.match(o.dA);
            u && (n = u.length,
            t = t.replace(o.dA, s),
            e.push(...u.map(r.$.parse)));
            let c = t.match(o.KP);
            return c && (l = c.length,
            t = t.replace(o.KP, a),
            e.push(...c.map(i.Rx.parse))),
            {
                values: e,
                numColors: n,
                numNumbers: l,
                tokenised: t
            }
        }
        function u(t) {
            return l(t).values
        }
        function c(t) {
            let {values: e, numColors: n, tokenised: i} = l(t)
              , u = e.length;
            return t => {
                let e = i;
                for (let i = 0; i < u; i++)
                    e = e.replace(i < n ? s : a, i < n ? r.$.transform(t[i]) : (0,
                    o.Nw)(t[i]));
                return e
            }
        }
        let h = t => "number" == typeof t ? 0 : t
          , d = {
            test: function(t) {
                var e, n;
                return isNaN(t) && (0,
                o.HD)(t) && ((null === (e = t.match(o.KP)) || void 0 === e ? void 0 : e.length) || 0) + ((null === (n = t.match(o.dA)) || void 0 === n ? void 0 : n.length) || 0) > 0
            },
            parse: u,
            createTransformer: c,
            getAnimatableNone: function(t) {
                let e = u(t);
                return c(t)(e.map(h))
            }
        }
    },
    2980: function(t, e, n) {
        "use strict";
        n.d(e, {
            Fq: function() {
                return o
            },
            Rx: function() {
                return i
            },
            bA: function() {
                return s
            }
        });
        var r = n(3021);
        let i = {
            test: t => "number" == typeof t,
            parse: parseFloat,
            transform: t => t
        }
          , o = {
            ...i,
            transform: t => (0,
            r.u)(0, 1, t)
        }
          , s = {
            ...i,
            default: 1
        }
    },
    3681: function(t, e, n) {
        "use strict";
        n.d(e, {
            $C: function() {
                return c
            },
            RW: function() {
                return o
            },
            aQ: function() {
                return s
            },
            px: function() {
                return a
            },
            vh: function() {
                return l
            },
            vw: function() {
                return u
            }
        });
        var r = n(2038);
        let i = t => ({
            test: e => (0,
            r.HD)(e) && e.endsWith(t) && 1 === e.split(" ").length,
            parse: parseFloat,
            transform: e => `${e}${t}`
        })
          , o = i("deg")
          , s = i("%")
          , a = i("px")
          , l = i("vh")
          , u = i("vw")
          , c = {
            ...s,
            parse: t => s.parse(t) / 100,
            transform: t => s.transform(100 * t)
        }
    },
    2038: function(t, e, n) {
        "use strict";
        n.d(e, {
            HD: function() {
                return a
            },
            KP: function() {
                return i
            },
            Nw: function() {
                return r
            },
            dA: function() {
                return o
            },
            mj: function() {
                return s
            }
        });
        let r = t => Math.round(1e5 * t) / 1e5
          , i = /(-)?([\d]*\.?[\d])+/g
          , o = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi
          , s = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
        function a(t) {
            return "string" == typeof t
        }
    },
    3227: function(t, e, n) {
        "use strict";
        n.d(e, {
            L: function() {
                return i
            }
        });
        var r = n(5735);
        function i(t) {
            return !!((0,
            r.i)(t) && t.add)
        }
    },
    5735: function(t, e, n) {
        "use strict";
        n.d(e, {
            i: function() {
                return r
            }
        });
        let r = t => !!(null == t ? void 0 : t.getVelocity)
    }
}]);
