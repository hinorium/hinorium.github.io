(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[185], {
    534: function(e, t, i) {
        Promise.resolve().then(i.bind(i, 7503))
    },
    7503: function(e, t, i) {
        "use strict";
        i.r(t),
        i.d(t, {
            default: function() {
                return _
            }
        });
        var n = i(7437)
          , s = i(6385)
          , o = i.n(s);
        i(1359);
        var r = i(2265)
          , a = i(5824)
          , l = i(4440)
          , d = i.n(l)
          , c = i(4033)
          , x = i(1396)
          , h = i.n(x)
          , p = i(4962)
          , m = i.n(p)
          , u = i(6691)
          , j = i.n(u);
        let g = {
            visible: e => ({
                opacity: 1,
                transition: {
                    delay: .12 * e
                },
                ease: "easeInOut"
            }),
            hidden: {
                opacity: 0
            }
        };
        function f(e, t, i, s) {
            let o = (0,
            c.usePathname)() === t;
            return (0,
            n.jsx)(a.E.li, {
                className: "flex-1",
                variants: g,
                initial: "hidden",
                animate: "visible",
                custom: i,
                children: (0,
                n.jsx)(h(), {
                    href: t,
                    className: "block tracking-wider uppercase py-2 px-4 text-center text-xs hover:opacity-80 transition-all duration-300 ".concat(o ? "text-white/80" : "text-white/50"),
                    target: t.startsWith("http") ? "_blank" : "",
                    onClick: () => s(!1),
                    children: e
                })
            })
        }
        function w(e) {
            return (0,
            n.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                className: "h-5 w-5 absolute text-neutral-100",
                width: "20",
                height: "20",
                viewBox: "0 0 20 20",
                fill: "none",
                ...e,
                children: [(0,
                n.jsx)("path", {
                    d: "M2.5 2.5H17.5",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }), (0,
                n.jsx)("path", {
                    d: "M2.5 7.5H17.5",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }), (0,
                n.jsx)("path", {
                    d: "M2.5 12.5H17.5",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                })]
            })
        }
        function b(e) {
            return (0,
            n.jsxs)("svg", {
                className: "h-5 w-5 absolute text-neutral-100",
                viewBox: "0 0 24 24",
                width: "24",
                height: "24",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                fill: "none",
                shapeRendering: "geometricPrecision",
                ...e,
                children: [(0,
                n.jsx)("path", {
                    d: "M18 6L6 18"
                }), (0,
                n.jsx)("path", {
                    d: "M6 6l12 12"
                })]
            })
        }
        var y = () => {
            let[e,t] = (0,
            r.useState)(!1);
            return (0,
            n.jsx)(n.Fragment, {
                children: (0,
                n.jsxs)("nav", {
                    className: "border border-white/5 fixed transition-all duration-300 p-2 top-0 inset-x-0 z-[100] backdrop-blur-xl fixed w-full",
                    children: [(0,
                    n.jsx)("div", {
                        className: "max-w-7xl mx-auto px-2 sm:px-6 lg:px-8",
                        children: (0,
                        n.jsxs)("div", {
                            className: "relative flex items-center justify-between h-16",
                            children: [(0,
                            n.jsx)("div", {
                                className: "absolute inset-y-0 left-0 flex items-center sm:hidden",
                                children: (0,
                                n.jsxs)("button", {
                                    onClick: () => t(!e),
                                    className: d()(m().burger, "transform inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition-all duration-300"),
                                    "aria-controls": "mobile-menu",
                                    "aria-expanded": "false",
                                    children: [(0,
                                    n.jsx)("span", {
                                        className: "sr-only",
                                        children: "Open main menu"
                                    }), (0,
                                    n.jsx)(w, {
                                        "data-hide": e
                                    }), (0,
                                    n.jsx)(b, {
                                        "data-hide": !e
                                    })]
                                })
                            }), (0,
                            n.jsxs)("div", {
                                className: "flex-1 flex items-center justify-center sm:items-stretch sm:justify-between",
                                children: [(0,
                                n.jsx)(h(), {
                                    href: "/",
                                    className: "flex flex-row items-center space-x-1.5",
                                    children: (0,
                                    n.jsxs)(n.Fragment, {
                                        children: [(0,
                                        n.jsx)(j(), {
                                            src: "/static/icons/icon.svg",
                                            alt: "Codex",
                                            width: 32,
                                            height: 32
                                        }), (0,
                                        n.jsx)("h2", {
                                            className: "flex items-center tracking-wide uppercase font-semibold",
                                            children: "Codex"
                                        })]
                                    })
                                }), (0,
                                n.jsxs)("ul", {
                                    className: "hidden sm:flex items-center",
                                    children: [f("Home", "/", 0), f("Windows", "/windows", 1), f("iOS", "/ios", 2), f("Android", "/android", 3), (0,
                                    n.jsx)("li", {
                                        className: "flex-1",
                                        children: (0,
                                        n.jsx)(h(), {
                                            href: "https://discord.gg/robloxexploits",
                                            target: "_blank",
                                            children: (0,
                                            n.jsx)(a.E.button, {
                                                variants: g,
                                                custom: 1,
                                                initial: "hidden",
                                                animate: "visible",
                                                className: "whitespace-nowrap ml-2 text-xs text-white/90 transition-all duration-300 hover:bg-white/5 uppercase rounded-lg border border border-white/10 px-5 py-3",
                                                children: "Discord"
                                            })
                                        })
                                    })]
                                })]
                            })]
                        })
                    }), (0,
                    n.jsx)(a.E.div, {
                        className: "".concat(e ? "block" : "hidden pointer-events-none", " sm:hidden"),
                        initial: {
                            opacity: 0,
                            height: 0
                        },
                        animate: {
                            opacity: e ? 1 : 0,
                            height: e ? "auto" : 0
                        },
                        transition: {
                            duration: .3,
                            ease: "easeInOut"
                        },
                        children: (0,
                        n.jsxs)("ul", {
                            className: "px-2 pt-2 pb-3 space-y-1 border-t border-white/5",
                            children: [f("Home", "/", 0, t), f("iOS", "/ios", 1, t), f("Android", "/android", 2, t), f("Discord", "https://discord.gg/robloxexploits", 3, t)]
                        })
                    })]
                })
            })
        }
          , v = i(4666)
          , k = i(5925)
          , C = i(8475)
          , N = i.n(C)
          , E = i(3845);
        let L = {
            hidden: {
                opacity: 0
            },
            enter: {
                opacity: 1,
                x: 0,
                y: 0
            },
            exit: {
                opacity: 0,
                x: 0,
                y: -100
            }
        };
        var _ = e => {
            let {children: t} = e
              , i = (0,
            r.useRef)(null);
            return (0,
            n.jsx)(v.M, {
                mode: "wait",
                children: (0,
                n.jsxs)("html", {
                    lang: "en",
                    children: [(0,
                    n.jsxs)("head", {
                        children: [(0,
                        n.jsx)("meta", {
                            charSet: "utf-8"
                        }), (0,
                        n.jsx)("meta", {
                            name: "viewport",
                            content: "width=device-width, initial-scale=1"
                        }), (0,
                        n.jsx)("meta", {
                            name: "description",
                            content: "Codex, the best FREE Roblox Exploit/Executor for Android, iOS & PC. Bypass Byfron Anti-Cheat & Exploit on your favorite Roblox games, with no key system & no crashes!"
                        }), (0,
                        n.jsx)("meta", {
                            name: "theme-color",
                            content: "#d32642"
                        }), (0,
                        n.jsx)("meta", {
                            name: "robots",
                            content: "index,follow"
                        }), (0,
                        n.jsx)("link", {
                            rel: "manifest",
                            href: "/manifest.json"
                        }), (0,
                        n.jsx)("link", {
                            rel: "canonical",
                            href: "https://www.codex.lol"
                        }), (0,
                        n.jsx)("meta", {
                            name: "viewport",
                            content: "width=device-width, initial-scale=1"
                        }), (0,
                        n.jsx)("meta", {
                            property: "og:type",
                            content: "website"
                        }), (0,
                        n.jsx)("meta", {
                            property: "og:url",
                            content: "https://www.codex.lol"
                        }), (0,
                        n.jsx)("meta", {
                            property: "og:title",
                            content: "Codex Roblox Executor - #1 Free Android, iOS & PC Exploit"
                        }), (0,
                        n.jsx)("meta", {
                            property: "og:description",
                            content: "Codex, the best FREE Roblox Exploit/Executor for Android, iOS & PC. Bypass Byfron Anti-Cheat & Exploit on your favorite Roblox games, with no key system & no crashes!"
                        }), (0,
                        n.jsx)("meta", {
                            name: "msapplication-TileColor",
                            content: "#da532c"
                        }), (0,
                        n.jsx)("link", {
                            rel: "icon",
                            type: "image/png",
                            sizes: "32x32",
                            href: "/favicon-32x32.png"
                        }), (0,
                        n.jsx)("title", {
                            children: "Codex Roblox Executor - #1 Free Windows, Android, iOS & PC Exploit"
                        }), (0,
                        n.jsx)(E.GoogleAnalytics, {
                            gaId: "G-1PR3KL1NPC"
                        }), (0,
                        n.jsx)("script", {
                            async: !0,
                            src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2249257918045069",
                            crossOrigin: "anonymous"
                        }), (0,
                        n.jsx)("script", {
                            dangerouslySetInnerHTML: {
                                __html: "\n                window.dataLayer = window.dataLayer || [];\n                function gtag(){dataLayer.push(arguments);}\n                gtag('js', new Date());\n                gtag('config', 'G-1PR3KL1NPC');\n              "
                            }
                        }), (0,
                        n.jsx)(N(), {
                            src: "https://www.googletagmanager.com/gtag/js?id=G-1PR3KL1NPC",
                            strategy: "afterInteractive"
                        })]
                    }), (0,
                    n.jsxs)("body", {
                        className: o().className,
                        children: [(0,
                        n.jsx)("svg", {
                            width: "0",
                            height: "0",
                            children: (0,
                            n.jsxs)("linearGradient", {
                                id: "red-gradient",
                                x1: "100%",
                                y1: "100%",
                                x2: "0%",
                                y2: "0%",
                                children: [(0,
                                n.jsx)("stop", {
                                    stopColor: "#e22551",
                                    offset: "0%"
                                }), (0,
                                n.jsx)("stop", {
                                    stopColor: "#ba3f5c",
                                    offset: "100%"
                                })]
                            })
                        }), (0,
                        n.jsx)(y, {}), (0,
                        n.jsxs)(a.E.main, {
                            variants: L,
                            initial: "hidden",
                            animate: "enter",
                            exit: "exit",
                            transition: {
                                type: "linear",
                                duration: 1
                            },
                            "data-scroll-container": "true",
                            ref: i,
                            children: [(0,
                            n.jsx)(k.x7, {
                                position: "bottom-right"
                            }), (0,
                            n.jsx)(a.E.div, {
                                initial: "initial",
                                animate: "visible",
                                variants: L,
                                children: t
                            })]
                        })]
                    })]
                })
            })
        }
    },
    1359: function() {},
    4962: function(e) {
        e.exports = {
            burger: "mobile-menu_burger__A_ajg"
        }
    }
}, function(e) {
    e.O(0, [381, 691, 869, 971, 938, 744], function() {
        return e(e.s = 534)
    }),
    _N_E = e.O()
}
]);
