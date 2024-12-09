/*! jQuery UI - v1.13.1 - 2022-05-10
* http://jqueryui.com
* Includes: widget.js, position.js, data.js, disable-selection.js, focusable.js, form-reset-mixin.js, jquery-patch.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/draggable.js, widgets/resizable.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/dialog.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, effect.js, effects/effect-blind.js, effects/effect-fade.js, effects/effect-highlight.js, effects/effect-pulsate.js, effects/effect-size.js, effects/effect-slide.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */

!function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function(x) {
    "use strict";
    x.ui = x.ui || {};
    x.ui.version = "1.13.1";
    var o, i = 0, a = Array.prototype.hasOwnProperty, r = Array.prototype.slice;
    x.cleanData = (o = x.cleanData,
    function(t) {
        for (var e, i, s = 0; null != (i = t[s]); s++)
            (e = x._data(i, "events")) && e.remove && x(i).triggerHandler("remove");
        o(t)
    }
    ),
    x.widget = function(t, i, e) {
        var s, o, n, a = {}, r = t.split(".")[0], l = r + "-" + (t = t.split(".")[1]);
        return e || (e = i,
        i = x.Widget),
        Array.isArray(e) && (e = x.extend.apply(null, [{}].concat(e))),
        x.expr.pseudos[l.toLowerCase()] = function(t) {
            return !!x.data(t, l)
        }
        ,
        x[r] = x[r] || {},
        s = x[r][t],
        o = x[r][t] = function(t, e) {
            if (!this || !this._createWidget)
                return new o(t,e);
            arguments.length && this._createWidget(t, e)
        }
        ,
        x.extend(o, s, {
            version: e.version,
            _proto: x.extend({}, e),
            _childConstructors: []
        }),
        (n = new i).options = x.widget.extend({}, n.options),
        x.each(e, function(e, s) {
            function o() {
                return i.prototype[e].apply(this, arguments)
            }
            function n(t) {
                return i.prototype[e].apply(this, t)
            }
            a[e] = "function" == typeof s ? function() {
                var t, e = this._super, i = this._superApply;
                return this._super = o,
                this._superApply = n,
                t = s.apply(this, arguments),
                this._super = e,
                this._superApply = i,
                t
            }
            : s
        }),
        o.prototype = x.widget.extend(n, {
            widgetEventPrefix: s && n.widgetEventPrefix || t
        }, a, {
            constructor: o,
            namespace: r,
            widgetName: t,
            widgetFullName: l
        }),
        s ? (x.each(s._childConstructors, function(t, e) {
            var i = e.prototype;
            x.widget(i.namespace + "." + i.widgetName, o, e._proto)
        }),
        delete s._childConstructors) : i._childConstructors.push(o),
        x.widget.bridge(t, o),
        o
    }
    ,
    x.widget.extend = function(t) {
        for (var e, i, s = r.call(arguments, 1), o = 0, n = s.length; o < n; o++)
            for (e in s[o])
                i = s[o][e],
                a.call(s[o], e) && void 0 !== i && (x.isPlainObject(i) ? t[e] = x.isPlainObject(t[e]) ? x.widget.extend({}, t[e], i) : x.widget.extend({}, i) : t[e] = i);
        return t
    }
    ,
    x.widget.bridge = function(n, e) {
        var a = e.prototype.widgetFullName || n;
        x.fn[n] = function(i) {
            var t = "string" == typeof i
              , s = r.call(arguments, 1)
              , o = this;
            return t ? this.length || "instance" !== i ? this.each(function() {
                var t, e = x.data(this, a);
                return "instance" === i ? (o = e,
                !1) : e ? "function" != typeof e[i] || "_" === i.charAt(0) ? x.error("no such method '" + i + "' for " + n + " widget instance") : (t = e[i].apply(e, s)) !== e && void 0 !== t ? (o = t && t.jquery ? o.pushStack(t.get()) : t,
                !1) : void 0 : x.error("cannot call methods on " + n + " prior to initialization; attempted to call method '" + i + "'")
            }) : o = void 0 : (s.length && (i = x.widget.extend.apply(null, [i].concat(s))),
            this.each(function() {
                var t = x.data(this, a);
                t ? (t.option(i || {}),
                t._init && t._init()) : x.data(this, a, new e(i,this))
            })),
            o
        }
    }
    ,
    x.Widget = function() {}
    ,
    x.Widget._childConstructors = [],
    x.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            classes: {},
            disabled: !1,
            create: null
        },
        _createWidget: function(t, e) {
            e = x(e || this.defaultElement || this)[0],
            this.element = x(e),
            this.uuid = i++,
            this.eventNamespace = "." + this.widgetName + this.uuid,
            this.bindings = x(),
            this.hoverable = x(),
            this.focusable = x(),
            this.classesElementLookup = {},
            e !== this && (x.data(e, this.widgetFullName, this),
            this._on(!0, this.element, {
                remove: function(t) {
                    t.target === e && this.destroy()
                }
            }),
            this.document = x(e.style ? e.ownerDocument : e.document || e),
            this.window = x(this.document[0].defaultView || this.document[0].parentWindow)),
            this.options = x.widget.extend({}, this.options, this._getCreateOptions(), t),
            this._create(),
            this.options.disabled && this._setOptionDisabled(this.options.disabled),
            this._trigger("create", null, this._getCreateEventData()),
            this._init()
        },
        _getCreateOptions: function() {
            return {}
        },
        _getCreateEventData: x.noop,
        _create: x.noop,
        _init: x.noop,
        destroy: function() {
            var i = this;
            this._destroy(),
            x.each(this.classesElementLookup, function(t, e) {
                i._removeClass(e, t)
            }),
            this.element.off(this.eventNamespace).removeData(this.widgetFullName),
            this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),
            this.bindings.off(this.eventNamespace)
        },
        _destroy: x.noop,
        widget: function() {
            return this.element
        },
        option: function(t, e) {
            var i, s, o, n = t;
            if (0 === arguments.length)
                return x.widget.extend({}, this.options);
            if ("string" == typeof t)
                if (n = {},
                t = (i = t.split(".")).shift(),
                i.length) {
                    for (s = n[t] = x.widget.extend({}, this.options[t]),
                    o = 0; o < i.length - 1; o++)
                        s[i[o]] = s[i[o]] || {},
                        s = s[i[o]];
                    if (t = i.pop(),
                    1 === arguments.length)
                        return void 0 === s[t] ? null : s[t];
                    s[t] = e
                } else {
                    if (1 === arguments.length)
                        return void 0 === this.options[t] ? null : this.options[t];
                    n[t] = e
                }
            return this._setOptions(n),
            this
        },
        _setOptions: function(t) {
            for (var e in t)
                this._setOption(e, t[e]);
            return this
        },
        _setOption: function(t, e) {
            return "classes" === t && this._setOptionClasses(e),
            this.options[t] = e,
            "disabled" === t && this._setOptionDisabled(e),
            this
        },
        _setOptionClasses: function(t) {
            var e, i, s;
            for (e in t)
                s = this.classesElementLookup[e],
                t[e] !== this.options.classes[e] && s && s.length && (i = x(s.get()),
                this._removeClass(s, e),
                i.addClass(this._classes({
                    element: i,
                    keys: e,
                    classes: t,
                    add: !0
                })))
        },
        _setOptionDisabled: function(t) {
            this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t),
            t && (this._removeClass(this.hoverable, null, "ui-state-hover"),
            this._removeClass(this.focusable, null, "ui-state-focus"))
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            })
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            })
        },
        _classes: function(o) {
            var n = []
              , a = this;
            function t(t, e) {
                for (var i, s = 0; s < t.length; s++)
                    i = a.classesElementLookup[t[s]] || x(),
                    i = o.add ? (function() {
                        var i = [];
                        o.element.each(function(t, e) {
                            x.map(a.classesElementLookup, function(t) {
                                return t
                            }).some(function(t) {
                                return t.is(e)
                            }) || i.push(e)
                        }),
                        a._on(x(i), {
                            remove: "_untrackClassesElement"
                        })
                    }(),
                    x(x.uniqueSort(i.get().concat(o.element.get())))) : x(i.not(o.element).get()),
                    a.classesElementLookup[t[s]] = i,
                    n.push(t[s]),
                    e && o.classes[t[s]] && n.push(o.classes[t[s]])
            }
            return (o = x.extend({
                element: this.element,
                classes: this.options.classes || {}
            }, o)).keys && t(o.keys.match(/\S+/g) || [], !0),
            o.extra && t(o.extra.match(/\S+/g) || []),
            n.join(" ")
        },
        _untrackClassesElement: function(i) {
            var s = this;
            x.each(s.classesElementLookup, function(t, e) {
                -1 !== x.inArray(i.target, e) && (s.classesElementLookup[t] = x(e.not(i.target).get()))
            }),
            this._off(x(i.target))
        },
        _removeClass: function(t, e, i) {
            return this._toggleClass(t, e, i, !1)
        },
        _addClass: function(t, e, i) {
            return this._toggleClass(t, e, i, !0)
        },
        _toggleClass: function(t, e, i, s) {
            var o = "string" == typeof t || null === t
              , i = {
                extra: o ? e : i,
                keys: o ? t : e,
                element: o ? this.element : t,
                add: s = "boolean" == typeof s ? s : i
            };
            return i.element.toggleClass(this._classes(i), s),
            this
        },
        _on: function(o, n, t) {
            var a, r = this;
            "boolean" != typeof o && (t = n,
            n = o,
            o = !1),
            t ? (n = a = x(n),
            this.bindings = this.bindings.add(n)) : (t = n,
            n = this.element,
            a = this.widget()),
            x.each(t, function(t, e) {
                function i() {
                    if (o || !0 !== r.options.disabled && !x(this).hasClass("ui-state-disabled"))
                        return ("string" == typeof e ? r[e] : e).apply(r, arguments)
                }
                "string" != typeof e && (i.guid = e.guid = e.guid || i.guid || x.guid++);
                var s = t.match(/^([\w:-]*)\s*(.*)$/)
                  , t = s[1] + r.eventNamespace
                  , s = s[2];
                s ? a.on(t, s, i) : n.on(t, i)
            })
        },
        _off: function(t, e) {
            e = (e || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace,
            t.off(e),
            this.bindings = x(this.bindings.not(t).get()),
            this.focusable = x(this.focusable.not(t).get()),
            this.hoverable = x(this.hoverable.not(t).get())
        },
        _delay: function(t, e) {
            var i = this;
            return setTimeout(function() {
                return ("string" == typeof t ? i[t] : t).apply(i, arguments)
            }, e || 0)
        },
        _hoverable: function(t) {
            this.hoverable = this.hoverable.add(t),
            this._on(t, {
                mouseenter: function(t) {
                    this._addClass(x(t.currentTarget), null, "ui-state-hover")
                },
                mouseleave: function(t) {
                    this._removeClass(x(t.currentTarget), null, "ui-state-hover")
                }
            })
        },
        _focusable: function(t) {
            this.focusable = this.focusable.add(t),
            this._on(t, {
                focusin: function(t) {
                    this._addClass(x(t.currentTarget), null, "ui-state-focus")
                },
                focusout: function(t) {
                    this._removeClass(x(t.currentTarget), null, "ui-state-focus")
                }
            })
        },
        _trigger: function(t, e, i) {
            var s, o, n = this.options[t];
            if (i = i || {},
            (e = x.Event(e)).type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(),
            e.target = this.element[0],
            o = e.originalEvent)
                for (s in o)
                    s in e || (e[s] = o[s]);
            return this.element.trigger(e, i),
            !("function" == typeof n && !1 === n.apply(this.element[0], [e].concat(i)) || e.isDefaultPrevented())
        }
    },
    x.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(n, a) {
        x.Widget.prototype["_" + n] = function(e, t, i) {
            var s, o = (t = "string" == typeof t ? {
                effect: t
            } : t) ? !0 !== t && "number" != typeof t && t.effect || a : n;
            "number" == typeof (t = t || {}) ? t = {
                duration: t
            } : !0 === t && (t = {}),
            s = !x.isEmptyObject(t),
            t.complete = i,
            t.delay && e.delay(t.delay),
            s && x.effects && x.effects.effect[o] ? e[n](t) : o !== n && e[o] ? e[o](t.duration, t.easing, i) : e.queue(function(t) {
                x(this)[n](),
                i && i.call(e[0]),
                t()
            })
        }
    });
    var s, C, k, n, l, h, u, c, z;
    x.widget;
    function T(t, e, i) {
        return [parseFloat(t[0]) * (c.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (c.test(t[1]) ? i / 100 : 1)]
    }
    function P(t, e) {
        return parseInt(x.css(t, e), 10) || 0
    }
    function D(t) {
        return null != t && t === t.window
    }
    C = Math.max,
    k = Math.abs,
    n = /left|center|right/,
    l = /top|center|bottom/,
    h = /[\+\-]\d+(\.[\d]+)?%?/,
    u = /^\w+/,
    c = /%$/,
    z = x.fn.position,
    x.position = {
        scrollbarWidth: function() {
            if (void 0 !== s)
                return s;
            var t, e = x("<div style='display:block;position:absolute;width:200px;height:200px;overflow:hidden;'><div style='height:300px;width:auto;'></div></div>"), i = e.children()[0];
            return x("body").append(e),
            t = i.offsetWidth,
            e.css("overflow", "scroll"),
            t === (i = i.offsetWidth) && (i = e[0].clientWidth),
            e.remove(),
            s = t - i
        },
        getScrollInfo: function(t) {
            var e = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x")
              , i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y")
              , e = "scroll" === e || "auto" === e && t.width < t.element[0].scrollWidth;
            return {
                width: "scroll" === i || "auto" === i && t.height < t.element[0].scrollHeight ? x.position.scrollbarWidth() : 0,
                height: e ? x.position.scrollbarWidth() : 0
            }
        },
        getWithinInfo: function(t) {
            var e = x(t || window)
              , i = D(e[0])
              , s = !!e[0] && 9 === e[0].nodeType;
            return {
                element: e,
                isWindow: i,
                isDocument: s,
                offset: !i && !s ? x(t).offset() : {
                    left: 0,
                    top: 0
                },
                scrollLeft: e.scrollLeft(),
                scrollTop: e.scrollTop(),
                width: e.outerWidth(),
                height: e.outerHeight()
            }
        }
    },
    x.fn.position = function(c) {
        if (!c || !c.of)
            return z.apply(this, arguments);
        var p, d, f, m, g, t, v = "string" == typeof (c = x.extend({}, c)).of ? x(document).find(c.of) : x(c.of), _ = x.position.getWithinInfo(c.within), b = x.position.getScrollInfo(_), y = (c.collision || "flip").split(" "), w = {}, e = 9 === (t = (e = v)[0]).nodeType ? {
            width: e.width(),
            height: e.height(),
            offset: {
                top: 0,
                left: 0
            }
        } : D(t) ? {
            width: e.width(),
            height: e.height(),
            offset: {
                top: e.scrollTop(),
                left: e.scrollLeft()
            }
        } : t.preventDefault ? {
            width: 0,
            height: 0,
            offset: {
                top: t.pageY,
                left: t.pageX
            }
        } : {
            width: e.outerWidth(),
            height: e.outerHeight(),
            offset: e.offset()
        };
        return v[0].preventDefault && (c.at = "left top"),
        d = e.width,
        f = e.height,
        g = x.extend({}, m = e.offset),
        x.each(["my", "at"], function() {
            var t, e, i = (c[this] || "").split(" ");
            (i = 1 === i.length ? n.test(i[0]) ? i.concat(["center"]) : l.test(i[0]) ? ["center"].concat(i) : ["center", "center"] : i)[0] = n.test(i[0]) ? i[0] : "center",
            i[1] = l.test(i[1]) ? i[1] : "center",
            t = h.exec(i[0]),
            e = h.exec(i[1]),
            w[this] = [t ? t[0] : 0, e ? e[0] : 0],
            c[this] = [u.exec(i[0])[0], u.exec(i[1])[0]]
        }),
        1 === y.length && (y[1] = y[0]),
        "right" === c.at[0] ? g.left += d : "center" === c.at[0] && (g.left += d / 2),
        "bottom" === c.at[1] ? g.top += f : "center" === c.at[1] && (g.top += f / 2),
        p = T(w.at, d, f),
        g.left += p[0],
        g.top += p[1],
        this.each(function() {
            var i, t, a = x(this), r = a.outerWidth(), l = a.outerHeight(), e = P(this, "marginLeft"), s = P(this, "marginTop"), o = r + e + P(this, "marginRight") + b.width, n = l + s + P(this, "marginBottom") + b.height, h = x.extend({}, g), u = T(w.my, a.outerWidth(), a.outerHeight());
            "right" === c.my[0] ? h.left -= r : "center" === c.my[0] && (h.left -= r / 2),
            "bottom" === c.my[1] ? h.top -= l : "center" === c.my[1] && (h.top -= l / 2),
            h.left += u[0],
            h.top += u[1],
            i = {
                marginLeft: e,
                marginTop: s
            },
            x.each(["left", "top"], function(t, e) {
                x.ui.position[y[t]] && x.ui.position[y[t]][e](h, {
                    targetWidth: d,
                    targetHeight: f,
                    elemWidth: r,
                    elemHeight: l,
                    collisionPosition: i,
                    collisionWidth: o,
                    collisionHeight: n,
                    offset: [p[0] + u[0], p[1] + u[1]],
                    my: c.my,
                    at: c.at,
                    within: _,
                    elem: a
                })
            }),
            c.using && (t = function(t) {
                var e = m.left - h.left
                  , i = e + d - r
                  , s = m.top - h.top
                  , o = s + f - l
                  , n = {
                    target: {
                        element: v,
                        left: m.left,
                        top: m.top,
                        width: d,
                        height: f
                    },
                    element: {
                        element: a,
                        left: h.left,
                        top: h.top,
                        width: r,
                        height: l
                    },
                    horizontal: i < 0 ? "left" : 0 < e ? "right" : "center",
                    vertical: o < 0 ? "top" : 0 < s ? "bottom" : "middle"
                };
                d < r && k(e + i) < d && (n.horizontal = "center"),
                f < l && k(s + o) < f && (n.vertical = "middle"),
                C(k(e), k(i)) > C(k(s), k(o)) ? n.important = "horizontal" : n.important = "vertical",
                c.using.call(this, t, n)
            }
            ),
            a.offset(x.extend(h, {
                using: t
            }))
        })
    }
    ,
    x.ui.position = {
        fit: {
            left: function(t, e) {
                var i = e.within
                  , s = i.isWindow ? i.scrollLeft : i.offset.left
                  , o = i.width
                  , n = t.left - e.collisionPosition.marginLeft
                  , a = s - n
                  , r = n + e.collisionWidth - o - s;
                e.collisionWidth > o ? 0 < a && r <= 0 ? (i = t.left + a + e.collisionWidth - o - s,
                t.left += a - i) : t.left = !(0 < r && a <= 0) && r < a ? s + o - e.collisionWidth : s : 0 < a ? t.left += a : 0 < r ? t.left -= r : t.left = C(t.left - n, t.left)
            },
            top: function(t, e) {
                var i = e.within
                  , s = i.isWindow ? i.scrollTop : i.offset.top
                  , o = e.within.height
                  , n = t.top - e.collisionPosition.marginTop
                  , a = s - n
                  , r = n + e.collisionHeight - o - s;
                e.collisionHeight > o ? 0 < a && r <= 0 ? (i = t.top + a + e.collisionHeight - o - s,
                t.top += a - i) : t.top = !(0 < r && a <= 0) && r < a ? s + o - e.collisionHeight : s : 0 < a ? t.top += a : 0 < r ? t.top -= r : t.top = C(t.top - n, t.top)
            }
        },
        flip: {
            left: function(t, e) {
                var i = e.within
                  , s = i.offset.left + i.scrollLeft
                  , o = i.width
                  , n = i.isWindow ? i.scrollLeft : i.offset.left
                  , a = t.left - e.collisionPosition.marginLeft
                  , r = a - n
                  , l = a + e.collisionWidth - o - n
                  , h = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0
                  , i = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0
                  , a = -2 * e.offset[0];
                r < 0 ? ((s = t.left + h + i + a + e.collisionWidth - o - s) < 0 || s < k(r)) && (t.left += h + i + a) : 0 < l && (0 < (n = t.left - e.collisionPosition.marginLeft + h + i + a - n) || k(n) < l) && (t.left += h + i + a)
            },
            top: function(t, e) {
                var i = e.within
                  , s = i.offset.top + i.scrollTop
                  , o = i.height
                  , n = i.isWindow ? i.scrollTop : i.offset.top
                  , a = t.top - e.collisionPosition.marginTop
                  , r = a - n
                  , l = a + e.collisionHeight - o - n
                  , h = "top" === e.my[1] ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0
                  , i = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0
                  , a = -2 * e.offset[1];
                r < 0 ? ((s = t.top + h + i + a + e.collisionHeight - o - s) < 0 || s < k(r)) && (t.top += h + i + a) : 0 < l && (0 < (n = t.top - e.collisionPosition.marginTop + h + i + a - n) || k(n) < l) && (t.top += h + i + a)
            }
        },
        flipfit: {
            left: function() {
                x.ui.position.flip.left.apply(this, arguments),
                x.ui.position.fit.left.apply(this, arguments)
            },
            top: function() {
                x.ui.position.flip.top.apply(this, arguments),
                x.ui.position.fit.top.apply(this, arguments)
            }
        }
    };
    var t;
    x.ui.position,
    x.extend(x.expr.pseudos, {
        data: x.expr.createPseudo ? x.expr.createPseudo(function(e) {
            return function(t) {
                return !!x.data(t, e)
            }
        }) : function(t, e, i) {
            return !!x.data(t, i[3])
        }
    }),
    x.fn.extend({
        disableSelection: (t = "onselectstart"in document.createElement("div") ? "selectstart" : "mousedown",
        function() {
            return this.on(t + ".ui-disableSelection", function(t) {
                t.preventDefault()
            })
        }
        ),
        enableSelection: function() {
            return this.off(".ui-disableSelection")
        }
    });
    x.ui.focusable = function(t, e) {
        var i, s, o, n, a = t.nodeName.toLowerCase();
        return "area" === a ? (s = (i = t.parentNode).name,
        !(!t.href || !s || "map" !== i.nodeName.toLowerCase()) && (0 < (s = x("img[usemap='#" + s + "']")).length && s.is(":visible"))) : (/^(input|select|textarea|button|object)$/.test(a) ? (o = !t.disabled) && (n = x(t).closest("fieldset")[0]) && (o = !n.disabled) : o = "a" === a && t.href || e,
        o && x(t).is(":visible") && function(t) {
            var e = t.css("visibility");
            for (; "inherit" === e; )
                t = t.parent(),
                e = t.css("visibility");
            return "visible" === e
        }(x(t)))
    }
    ,
    x.extend(x.expr.pseudos, {
        focusable: function(t) {
            return x.ui.focusable(t, null != x.attr(t, "tabindex"))
        }
    });
    var e, p;
    x.ui.focusable,
    x.fn._form = function() {
        return "string" == typeof this[0].form ? this.closest("form") : x(this[0].form)
    }
    ,
    x.ui.formResetMixin = {
        _formResetHandler: function() {
            var e = x(this);
            setTimeout(function() {
                var t = e.data("ui-form-reset-instances");
                x.each(t, function() {
                    this.refresh()
                })
            })
        },
        _bindFormResetHandler: function() {
            var t;
            this.form = this.element._form(),
            this.form.length && ((t = this.form.data("ui-form-reset-instances") || []).length || this.form.on("reset.ui-form-reset", this._formResetHandler),
            t.push(this),
            this.form.data("ui-form-reset-instances", t))
        },
        _unbindFormResetHandler: function() {
            var t;
            this.form.length && ((t = this.form.data("ui-form-reset-instances")).splice(x.inArray(this, t), 1),
            t.length ? this.form.data("ui-form-reset-instances", t) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset"))
        }
    };
    x.expr.pseudos || (x.expr.pseudos = x.expr[":"]),
    x.uniqueSort || (x.uniqueSort = x.unique),
    x.escapeSelector || (e = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
    p = function(t, e) {
        return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
    }
    ,
    x.escapeSelector = function(t) {
        return (t + "").replace(e, p)
    }
    ),
    x.fn.even && x.fn.odd || x.fn.extend({
        even: function() {
            return this.filter(function(t) {
                return t % 2 == 0
            })
        },
        odd: function() {
            return this.filter(function(t) {
                return t % 2 == 1
            })
        }
    });
    x.ui.keyCode = {
        BACKSPACE: 8,
        COMMA: 188,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        LEFT: 37,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38
    },
    x.fn.labels = function() {
        var t, e, i;
        return this.length ? this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (e = this.eq(0).parents("label"),
        (t = this.attr("id")) && (i = (i = this.eq(0).parents().last()).add((i.length ? i : this).siblings()),
        t = "label[for='" + x.escapeSelector(t) + "']",
        e = e.add(i.find(t).addBack(t))),
        this.pushStack(e)) : this.pushStack([])
    }
    ,
    x.fn.scrollParent = function(t) {
        var e = this.css("position")
          , i = "absolute" === e
          , s = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/
          , t = this.parents().filter(function() {
            var t = x(this);
            return (!i || "static" !== t.css("position")) && s.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
        }).eq(0);
        return "fixed" !== e && t.length ? t : x(this[0].ownerDocument || document)
    }
    ,
    x.extend(x.expr.pseudos, {
        tabbable: function(t) {
            var e = x.attr(t, "tabindex")
              , i = null != e;
            return (!i || 0 <= e) && x.ui.focusable(t, i)
        }
    }),
    x.fn.extend({
        uniqueId: (d = 0,
        function() {
            return this.each(function() {
                this.id || (this.id = "ui-id-" + ++d)
            })
        }
        ),
        removeUniqueId: function() {
            return this.each(function() {
                /^ui-id-\d+$/.test(this.id) && x(this).removeAttr("id")
            })
        }
    }),
    x.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
    var d, f = !1;
    x(document).on("mouseup", function() {
        f = !1
    });
    x.widget("ui.mouse", {
        version: "1.13.1",
        options: {
            cancel: "input, textarea, button, select, option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var e = this;
            this.element.on("mousedown." + this.widgetName, function(t) {
                return e._mouseDown(t)
            }).on("click." + this.widgetName, function(t) {
                if (!0 === x.data(t.target, e.widgetName + ".preventClickEvent"))
                    return x.removeData(t.target, e.widgetName + ".preventClickEvent"),
                    t.stopImmediatePropagation(),
                    !1
            }),
            this.started = !1
        },
        _mouseDestroy: function() {
            this.element.off("." + this.widgetName),
            this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(t) {
            if (!f) {
                this._mouseMoved = !1,
                this._mouseStarted && this._mouseUp(t),
                this._mouseDownEvent = t;
                var e = this
                  , i = 1 === t.which
                  , s = !("string" != typeof this.options.cancel || !t.target.nodeName) && x(t.target).closest(this.options.cancel).length;
                return i && !s && this._mouseCapture(t) ? (this.mouseDelayMet = !this.options.delay,
                this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    e.mouseDelayMet = !0
                }, this.options.delay)),
                this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = !1 !== this._mouseStart(t),
                !this._mouseStarted) ? (t.preventDefault(),
                !0) : (!0 === x.data(t.target, this.widgetName + ".preventClickEvent") && x.removeData(t.target, this.widgetName + ".preventClickEvent"),
                this._mouseMoveDelegate = function(t) {
                    return e._mouseMove(t)
                }
                ,
                this._mouseUpDelegate = function(t) {
                    return e._mouseUp(t)
                }
                ,
                this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate),
                t.preventDefault(),
                f = !0)) : !0
            }
        },
        _mouseMove: function(t) {
            if (this._mouseMoved) {
                if (x.ui.ie && (!document.documentMode || document.documentMode < 9) && !t.button)
                    return this._mouseUp(t);
                if (!t.which)
                    if (t.originalEvent.altKey || t.originalEvent.ctrlKey || t.originalEvent.metaKey || t.originalEvent.shiftKey)
                        this.ignoreMissingWhich = !0;
                    else if (!this.ignoreMissingWhich)
                        return this._mouseUp(t)
            }
            return (t.which || t.button) && (this._mouseMoved = !0),
            this._mouseStarted ? (this._mouseDrag(t),
            t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, t),
            this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)),
            !this._mouseStarted)
        },
        _mouseUp: function(t) {
            this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate),
            this._mouseStarted && (this._mouseStarted = !1,
            t.target === this._mouseDownEvent.target && x.data(t.target, this.widgetName + ".preventClickEvent", !0),
            this._mouseStop(t)),
            this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer),
            delete this._mouseDelayTimer),
            this.ignoreMissingWhich = !1,
            f = !1,
            t.preventDefault()
        },
        _mouseDistanceMet: function(t) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0
        }
    }),
    x.ui.plugin = {
        add: function(t, e, i) {
            var s, o = x.ui[t].prototype;
            for (s in i)
                o.plugins[s] = o.plugins[s] || [],
                o.plugins[s].push([e, i[s]])
        },
        call: function(t, e, i, s) {
            var o, n = t.plugins[e];
            if (n && (s || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType))
                for (o = 0; o < n.length; o++)
                    t.options[n[o][0]] && n[o][1].apply(t.element, i)
        }
    },
    x.ui.safeActiveElement = function(e) {
        var i;
        try {
            i = e.activeElement
        } catch (t) {
            i = e.body
        }
        return i = !(i = i || e.body).nodeName ? e.body : i
    }
    ,
    x.ui.safeBlur = function(t) {
        t && "body" !== t.nodeName.toLowerCase() && x(t).trigger("blur")
    }
    ;
    x.widget("ui.draggable", x.ui.mouse, {
        version: "1.13.1",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1,
            drag: null,
            start: null,
            stop: null
        },
        _create: function() {
            "original" === this.options.helper && this._setPositionRelative(),
            this.options.addClasses && this._addClass("ui-draggable"),
            this._setHandleClassName(),
            this._mouseInit()
        },
        _setOption: function(t, e) {
            this._super(t, e),
            "handle" === t && (this._removeHandleClassName(),
            this._setHandleClassName())
        },
        _destroy: function() {
            (this.helper || this.element).is(".ui-draggable-dragging") ? this.destroyOnClear = !0 : (this._removeHandleClassName(),
            this._mouseDestroy())
        },
        _mouseCapture: function(t) {
            var e = this.options;
            return !(this.helper || e.disabled || 0 < x(t.target).closest(".ui-resizable-handle").length) && (this.handle = this._getHandle(t),
            !!this.handle && (this._blurActiveElement(t),
            this._blockFrames(!0 === e.iframeFix ? "iframe" : e.iframeFix),
            !0))
        },
        _blockFrames: function(t) {
            this.iframeBlocks = this.document.find(t).map(function() {
                var t = x(this);
                return x("<div>").css("position", "absolute").appendTo(t.parent()).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).offset(t.offset())[0]
            })
        },
        _unblockFrames: function() {
            this.iframeBlocks && (this.iframeBlocks.remove(),
            delete this.iframeBlocks)
        },
        _blurActiveElement: function(t) {
            var e = x.ui.safeActiveElement(this.document[0]);
            x(t.target).closest(e).length || x.ui.safeBlur(e)
        },
        _mouseStart: function(t) {
            var e = this.options;
            return this.helper = this._createHelper(t),
            this._addClass(this.helper, "ui-draggable-dragging"),
            this._cacheHelperProportions(),
            x.ui.ddmanager && (x.ui.ddmanager.current = this),
            this._cacheMargins(),
            this.cssPosition = this.helper.css("position"),
            this.scrollParent = this.helper.scrollParent(!0),
            this.offsetParent = this.helper.offsetParent(),
            this.hasFixedAncestor = 0 < this.helper.parents().filter(function() {
                return "fixed" === x(this).css("position")
            }).length,
            this.positionAbs = this.element.offset(),
            this._refreshOffsets(t),
            this.originalPosition = this.position = this._generatePosition(t, !1),
            this.originalPageX = t.pageX,
            this.originalPageY = t.pageY,
            e.cursorAt && this._adjustOffsetFromHelper(e.cursorAt),
            this._setContainment(),
            !1 === this._trigger("start", t) ? (this._clear(),
            !1) : (this._cacheHelperProportions(),
            x.ui.ddmanager && !e.dropBehaviour && x.ui.ddmanager.prepareOffsets(this, t),
            this._mouseDrag(t, !0),
            x.ui.ddmanager && x.ui.ddmanager.dragStart(this, t),
            !0)
        },
        _refreshOffsets: function(t) {
            this.offset = {
                top: this.positionAbs.top - this.margins.top,
                left: this.positionAbs.left - this.margins.left,
                scroll: !1,
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            },
            this.offset.click = {
                left: t.pageX - this.offset.left,
                top: t.pageY - this.offset.top
            }
        },
        _mouseDrag: function(t, e) {
            if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()),
            this.position = this._generatePosition(t, !0),
            this.positionAbs = this._convertPositionTo("absolute"),
            !e) {
                e = this._uiHash();
                if (!1 === this._trigger("drag", t, e))
                    return this._mouseUp(new x.Event("mouseup",t)),
                    !1;
                this.position = e.position
            }
            return this.helper[0].style.left = this.position.left + "px",
            this.helper[0].style.top = this.position.top + "px",
            x.ui.ddmanager && x.ui.ddmanager.drag(this, t),
            !1
        },
        _mouseStop: function(t) {
            var e = this
              , i = !1;
            return x.ui.ddmanager && !this.options.dropBehaviour && (i = x.ui.ddmanager.drop(this, t)),
            this.dropped && (i = this.dropped,
            this.dropped = !1),
            "invalid" === this.options.revert && !i || "valid" === this.options.revert && i || !0 === this.options.revert || "function" == typeof this.options.revert && this.options.revert.call(this.element, i) ? x(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                !1 !== e._trigger("stop", t) && e._clear()
            }) : !1 !== this._trigger("stop", t) && this._clear(),
            !1
        },
        _mouseUp: function(t) {
            return this._unblockFrames(),
            x.ui.ddmanager && x.ui.ddmanager.dragStop(this, t),
            this.handleElement.is(t.target) && this.element.trigger("focus"),
            x.ui.mouse.prototype._mouseUp.call(this, t)
        },
        cancel: function() {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp(new x.Event("mouseup",{
                target: this.element[0]
            })) : this._clear(),
            this
        },
        _getHandle: function(t) {
            return !this.options.handle || !!x(t.target).closest(this.element.find(this.options.handle)).length
        },
        _setHandleClassName: function() {
            this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element,
            this._addClass(this.handleElement, "ui-draggable-handle")
        },
        _removeHandleClassName: function() {
            this._removeClass(this.handleElement, "ui-draggable-handle")
        },
        _createHelper: function(t) {
            var e = this.options
              , i = "function" == typeof e.helper
              , t = i ? x(e.helper.apply(this.element[0], [t])) : "clone" === e.helper ? this.element.clone().removeAttr("id") : this.element;
            return t.parents("body").length || t.appendTo("parent" === e.appendTo ? this.element[0].parentNode : e.appendTo),
            i && t[0] === this.element[0] && this._setPositionRelative(),
            t[0] === this.element[0] || /(fixed|absolute)/.test(t.css("position")) || t.css("position", "absolute"),
            t
        },
        _setPositionRelative: function() {
            /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
        },
        _adjustOffsetFromHelper: function(t) {
            "string" == typeof t && (t = t.split(" ")),
            "left"in (t = Array.isArray(t) ? {
                left: +t[0],
                top: +t[1] || 0
            } : t) && (this.offset.click.left = t.left + this.margins.left),
            "right"in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left),
            "top"in t && (this.offset.click.top = t.top + this.margins.top),
            "bottom"in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _isRootNode: function(t) {
            return /(html|body)/i.test(t.tagName) || t === this.document[0]
        },
        _getParentOffset: function() {
            var t = this.offsetParent.offset()
              , e = this.document[0];
            return "absolute" === this.cssPosition && this.scrollParent[0] !== e && x.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(),
            t.top += this.scrollParent.scrollTop()),
            {
                top: (t = this._isRootNode(this.offsetParent[0]) ? {
                    top: 0,
                    left: 0
                } : t).top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" !== this.cssPosition)
                return {
                    top: 0,
                    left: 0
                };
            var t = this.element.position()
              , e = this._isRootNode(this.scrollParent[0]);
            return {
                top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + (e ? 0 : this.scrollParent.scrollTop()),
                left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + (e ? 0 : this.scrollParent.scrollLeft())
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var t, e, i, s = this.options, o = this.document[0];
            this.relativeContainer = null,
            s.containment ? "window" !== s.containment ? "document" !== s.containment ? s.containment.constructor !== Array ? ("parent" === s.containment && (s.containment = this.helper[0].parentNode),
            (i = (e = x(s.containment))[0]) && (t = /(scroll|auto)/.test(e.css("overflow")),
            this.containment = [(parseInt(e.css("borderLeftWidth"), 10) || 0) + (parseInt(e.css("paddingLeft"), 10) || 0), (parseInt(e.css("borderTopWidth"), 10) || 0) + (parseInt(e.css("paddingTop"), 10) || 0), (t ? Math.max(i.scrollWidth, i.offsetWidth) : i.offsetWidth) - (parseInt(e.css("borderRightWidth"), 10) || 0) - (parseInt(e.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (t ? Math.max(i.scrollHeight, i.offsetHeight) : i.offsetHeight) - (parseInt(e.css("borderBottomWidth"), 10) || 0) - (parseInt(e.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom],
            this.relativeContainer = e)) : this.containment = s.containment : this.containment = [0, 0, x(o).width() - this.helperProportions.width - this.margins.left, (x(o).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top] : this.containment = [x(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, x(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, x(window).scrollLeft() + x(window).width() - this.helperProportions.width - this.margins.left, x(window).scrollTop() + (x(window).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top] : this.containment = null
        },
        _convertPositionTo: function(t, e) {
            e = e || this.position;
            var i = "absolute" === t ? 1 : -1
              , t = this._isRootNode(this.scrollParent[0]);
            return {
                top: e.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : t ? 0 : this.offset.scroll.top) * i,
                left: e.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : t ? 0 : this.offset.scroll.left) * i
            }
        },
        _generatePosition: function(t, e) {
            var i, s = this.options, o = this._isRootNode(this.scrollParent[0]), n = t.pageX, a = t.pageY;
            return o && this.offset.scroll || (this.offset.scroll = {
                top: this.scrollParent.scrollTop(),
                left: this.scrollParent.scrollLeft()
            }),
            e && (this.containment && (i = this.relativeContainer ? (i = this.relativeContainer.offset(),
            [this.containment[0] + i.left, this.containment[1] + i.top, this.containment[2] + i.left, this.containment[3] + i.top]) : this.containment,
            t.pageX - this.offset.click.left < i[0] && (n = i[0] + this.offset.click.left),
            t.pageY - this.offset.click.top < i[1] && (a = i[1] + this.offset.click.top),
            t.pageX - this.offset.click.left > i[2] && (n = i[2] + this.offset.click.left),
            t.pageY - this.offset.click.top > i[3] && (a = i[3] + this.offset.click.top)),
            s.grid && (t = s.grid[1] ? this.originalPageY + Math.round((a - this.originalPageY) / s.grid[1]) * s.grid[1] : this.originalPageY,
            a = !i || t - this.offset.click.top >= i[1] || t - this.offset.click.top > i[3] ? t : t - this.offset.click.top >= i[1] ? t - s.grid[1] : t + s.grid[1],
            t = s.grid[0] ? this.originalPageX + Math.round((n - this.originalPageX) / s.grid[0]) * s.grid[0] : this.originalPageX,
            n = !i || t - this.offset.click.left >= i[0] || t - this.offset.click.left > i[2] ? t : t - this.offset.click.left >= i[0] ? t - s.grid[0] : t + s.grid[0]),
            "y" === s.axis && (n = this.originalPageX),
            "x" === s.axis && (a = this.originalPageY)),
            {
                top: a - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : o ? 0 : this.offset.scroll.top),
                left: n - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : o ? 0 : this.offset.scroll.left)
            }
        },
        _clear: function() {
            this._removeClass(this.helper, "ui-draggable-dragging"),
            this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(),
            this.helper = null,
            this.cancelHelperRemoval = !1,
            this.destroyOnClear && this.destroy()
        },
        _trigger: function(t, e, i) {
            return i = i || this._uiHash(),
            x.ui.plugin.call(this, t, [e, i, this], !0),
            /^(drag|start|stop)/.test(t) && (this.positionAbs = this._convertPositionTo("absolute"),
            i.offset = this.positionAbs),
            x.Widget.prototype._trigger.call(this, t, e, i)
        },
        plugins: {},
        _uiHash: function() {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    }),
    x.ui.plugin.add("draggable", "connectToSortable", {
        start: function(e, t, i) {
            var s = x.extend({}, t, {
                item: i.element
            });
            i.sortables = [],
            x(i.options.connectToSortable).each(function() {
                var t = x(this).sortable("instance");
                t && !t.options.disabled && (i.sortables.push(t),
                t.refreshPositions(),
                t._trigger("activate", e, s))
            })
        },
        stop: function(e, t, i) {
            var s = x.extend({}, t, {
                item: i.element
            });
            i.cancelHelperRemoval = !1,
            x.each(i.sortables, function() {
                var t = this;
                t.isOver ? (t.isOver = 0,
                i.cancelHelperRemoval = !0,
                t.cancelHelperRemoval = !1,
                t._storedCSS = {
                    position: t.placeholder.css("position"),
                    top: t.placeholder.css("top"),
                    left: t.placeholder.css("left")
                },
                t._mouseStop(e),
                t.options.helper = t.options._helper) : (t.cancelHelperRemoval = !0,
                t._trigger("deactivate", e, s))
            })
        },
        drag: function(i, s, o) {
            x.each(o.sortables, function() {
                var t = !1
                  , e = this;
                e.positionAbs = o.positionAbs,
                e.helperProportions = o.helperProportions,
                e.offset.click = o.offset.click,
                e._intersectsWith(e.containerCache) && (t = !0,
                x.each(o.sortables, function() {
                    return this.positionAbs = o.positionAbs,
                    this.helperProportions = o.helperProportions,
                    this.offset.click = o.offset.click,
                    t = this !== e && this._intersectsWith(this.containerCache) && x.contains(e.element[0], this.element[0]) ? !1 : t
                })),
                t ? (e.isOver || (e.isOver = 1,
                o._parent = s.helper.parent(),
                e.currentItem = s.helper.appendTo(e.element).data("ui-sortable-item", !0),
                e.options._helper = e.options.helper,
                e.options.helper = function() {
                    return s.helper[0]
                }
                ,
                i.target = e.currentItem[0],
                e._mouseCapture(i, !0),
                e._mouseStart(i, !0, !0),
                e.offset.click.top = o.offset.click.top,
                e.offset.click.left = o.offset.click.left,
                e.offset.parent.left -= o.offset.parent.left - e.offset.parent.left,
                e.offset.parent.top -= o.offset.parent.top - e.offset.parent.top,
                o._trigger("toSortable", i),
                o.dropped = e.element,
                x.each(o.sortables, function() {
                    this.refreshPositions()
                }),
                o.currentItem = o.element,
                e.fromOutside = o),
                e.currentItem && (e._mouseDrag(i),
                s.position = e.position)) : e.isOver && (e.isOver = 0,
                e.cancelHelperRemoval = !0,
                e.options._revert = e.options.revert,
                e.options.revert = !1,
                e._trigger("out", i, e._uiHash(e)),
                e._mouseStop(i, !0),
                e.options.revert = e.options._revert,
                e.options.helper = e.options._helper,
                e.placeholder && e.placeholder.remove(),
                s.helper.appendTo(o._parent),
                o._refreshOffsets(i),
                s.position = o._generatePosition(i, !0),
                o._trigger("fromSortable", i),
                o.dropped = !1,
                x.each(o.sortables, function() {
                    this.refreshPositions()
                }))
            })
        }
    }),
    x.ui.plugin.add("draggable", "cursor", {
        start: function(t, e, i) {
            var s = x("body")
              , i = i.options;
            s.css("cursor") && (i._cursor = s.css("cursor")),
            s.css("cursor", i.cursor)
        },
        stop: function(t, e, i) {
            i = i.options;
            i._cursor && x("body").css("cursor", i._cursor)
        }
    }),
    x.ui.plugin.add("draggable", "opacity", {
        start: function(t, e, i) {
            e = x(e.helper),
            i = i.options;
            e.css("opacity") && (i._opacity = e.css("opacity")),
            e.css("opacity", i.opacity)
        },
        stop: function(t, e, i) {
            i = i.options;
            i._opacity && x(e.helper).css("opacity", i._opacity)
        }
    }),
    x.ui.plugin.add("draggable", "scroll", {
        start: function(t, e, i) {
            i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)),
            i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset())
        },
        drag: function(t, e, i) {
            var s = i.options
              , o = !1
              , n = i.scrollParentNotHidden[0]
              , a = i.document[0];
            n !== a && "HTML" !== n.tagName ? (s.axis && "x" === s.axis || (i.overflowOffset.top + n.offsetHeight - t.pageY < s.scrollSensitivity ? n.scrollTop = o = n.scrollTop + s.scrollSpeed : t.pageY - i.overflowOffset.top < s.scrollSensitivity && (n.scrollTop = o = n.scrollTop - s.scrollSpeed)),
            s.axis && "y" === s.axis || (i.overflowOffset.left + n.offsetWidth - t.pageX < s.scrollSensitivity ? n.scrollLeft = o = n.scrollLeft + s.scrollSpeed : t.pageX - i.overflowOffset.left < s.scrollSensitivity && (n.scrollLeft = o = n.scrollLeft - s.scrollSpeed))) : (s.axis && "x" === s.axis || (t.pageY - x(a).scrollTop() < s.scrollSensitivity ? o = x(a).scrollTop(x(a).scrollTop() - s.scrollSpeed) : x(window).height() - (t.pageY - x(a).scrollTop()) < s.scrollSensitivity && (o = x(a).scrollTop(x(a).scrollTop() + s.scrollSpeed))),
            s.axis && "y" === s.axis || (t.pageX - x(a).scrollLeft() < s.scrollSensitivity ? o = x(a).scrollLeft(x(a).scrollLeft() - s.scrollSpeed) : x(window).width() - (t.pageX - x(a).scrollLeft()) < s.scrollSensitivity && (o = x(a).scrollLeft(x(a).scrollLeft() + s.scrollSpeed)))),
            !1 !== o && x.ui.ddmanager && !s.dropBehaviour && x.ui.ddmanager.prepareOffsets(i, t)
        }
    }),
    x.ui.plugin.add("draggable", "snap", {
        start: function(t, e, i) {
            var s = i.options;
            i.snapElements = [],
            x(s.snap.constructor !== String ? s.snap.items || ":data(ui-draggable)" : s.snap).each(function() {
                var t = x(this)
                  , e = t.offset();
                this !== i.element[0] && i.snapElements.push({
                    item: this,
                    width: t.outerWidth(),
                    height: t.outerHeight(),
                    top: e.top,
                    left: e.left
                })
            })
        },
        drag: function(t, e, i) {
            for (var s, o, n, a, r, l, h, u, c, p = i.options, d = p.snapTolerance, f = e.offset.left, m = f + i.helperProportions.width, g = e.offset.top, v = g + i.helperProportions.height, _ = i.snapElements.length - 1; 0 <= _; _--)
                l = (r = i.snapElements[_].left - i.margins.left) + i.snapElements[_].width,
                u = (h = i.snapElements[_].top - i.margins.top) + i.snapElements[_].height,
                m < r - d || l + d < f || v < h - d || u + d < g || !x.contains(i.snapElements[_].item.ownerDocument, i.snapElements[_].item) ? (i.snapElements[_].snapping && i.options.snap.release && i.options.snap.release.call(i.element, t, x.extend(i._uiHash(), {
                    snapItem: i.snapElements[_].item
                })),
                i.snapElements[_].snapping = !1) : ("inner" !== p.snapMode && (s = Math.abs(h - v) <= d,
                o = Math.abs(u - g) <= d,
                n = Math.abs(r - m) <= d,
                a = Math.abs(l - f) <= d,
                s && (e.position.top = i._convertPositionTo("relative", {
                    top: h - i.helperProportions.height,
                    left: 0
                }).top),
                o && (e.position.top = i._convertPositionTo("relative", {
                    top: u,
                    left: 0
                }).top),
                n && (e.position.left = i._convertPositionTo("relative", {
                    top: 0,
                    left: r - i.helperProportions.width
                }).left),
                a && (e.position.left = i._convertPositionTo("relative", {
                    top: 0,
                    left: l
                }).left)),
                c = s || o || n || a,
                "outer" !== p.snapMode && (s = Math.abs(h - g) <= d,
                o = Math.abs(u - v) <= d,
                n = Math.abs(r - f) <= d,
                a = Math.abs(l - m) <= d,
                s && (e.position.top = i._convertPositionTo("relative", {
                    top: h,
                    left: 0
                }).top),
                o && (e.position.top = i._convertPositionTo("relative", {
                    top: u - i.helperProportions.height,
                    left: 0
                }).top),
                n && (e.position.left = i._convertPositionTo("relative", {
                    top: 0,
                    left: r
                }).left),
                a && (e.position.left = i._convertPositionTo("relative", {
                    top: 0,
                    left: l - i.helperProportions.width
                }).left)),
                !i.snapElements[_].snapping && (s || o || n || a || c) && i.options.snap.snap && i.options.snap.snap.call(i.element, t, x.extend(i._uiHash(), {
                    snapItem: i.snapElements[_].item
                })),
                i.snapElements[_].snapping = s || o || n || a || c)
        }
    }),
    x.ui.plugin.add("draggable", "stack", {
        start: function(t, e, i) {
            var s, i = i.options, i = x.makeArray(x(i.stack)).sort(function(t, e) {
                return (parseInt(x(t).css("zIndex"), 10) || 0) - (parseInt(x(e).css("zIndex"), 10) || 0)
            });
            i.length && (s = parseInt(x(i[0]).css("zIndex"), 10) || 0,
            x(i).each(function(t) {
                x(this).css("zIndex", s + t)
            }),
            this.css("zIndex", s + i.length))
        }
    }),
    x.ui.plugin.add("draggable", "zIndex", {
        start: function(t, e, i) {
            e = x(e.helper),
            i = i.options;
            e.css("zIndex") && (i._zIndex = e.css("zIndex")),
            e.css("zIndex", i.zIndex)
        },
        stop: function(t, e, i) {
            i = i.options;
            i._zIndex && x(e.helper).css("zIndex", i._zIndex)
        }
    });
    x.ui.draggable;
    x.widget("ui.resizable", x.ui.mouse, {
        version: "1.13.1",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            classes: {
                "ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se"
            },
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 90,
            resize: null,
            start: null,
            stop: null
        },
        _num: function(t) {
            return parseFloat(t) || 0
        },
        _isNumber: function(t) {
            return !isNaN(parseFloat(t))
        },
        _hasScroll: function(t, e) {
            if ("hidden" === x(t).css("overflow"))
                return !1;
            var i = e && "left" === e ? "scrollLeft" : "scrollTop"
              , e = !1;
            if (0 < t[i])
                return !0;
            try {
                t[i] = 1,
                e = 0 < t[i],
                t[i] = 0
            } catch (t) {}
            return e
        },
        _create: function() {
            var t, e = this.options, i = this;
            this._addClass("ui-resizable"),
            x.extend(this, {
                _aspectRatio: !!e.aspectRatio,
                aspectRatio: e.aspectRatio,
                originalElement: this.element,
                _proportionallyResizeElements: [],
                _helper: e.helper || e.ghost || e.animate ? e.helper || "ui-resizable-helper" : null
            }),
            this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(x("<div class='ui-wrapper'></div>").css({
                overflow: "hidden",
                position: this.element.css("position"),
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                top: this.element.css("top"),
                left: this.element.css("left")
            })),
            this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")),
            this.elementIsWrapper = !0,
            t = {
                marginTop: this.originalElement.css("marginTop"),
                marginRight: this.originalElement.css("marginRight"),
                marginBottom: this.originalElement.css("marginBottom"),
                marginLeft: this.originalElement.css("marginLeft")
            },
            this.element.css(t),
            this.originalElement.css("margin", 0),
            this.originalResizeStyle = this.originalElement.css("resize"),
            this.originalElement.css("resize", "none"),
            this._proportionallyResizeElements.push(this.originalElement.css({
                position: "static",
                zoom: 1,
                display: "block"
            })),
            this.originalElement.css(t),
            this._proportionallyResize()),
            this._setupHandles(),
            e.autoHide && x(this.element).on("mouseenter", function() {
                e.disabled || (i._removeClass("ui-resizable-autohide"),
                i._handles.show())
            }).on("mouseleave", function() {
                e.disabled || i.resizing || (i._addClass("ui-resizable-autohide"),
                i._handles.hide())
            }),
            this._mouseInit()
        },
        _destroy: function() {
            this._mouseDestroy(),
            this._addedHandles.remove();
            function t(t) {
                x(t).removeData("resizable").removeData("ui-resizable").off(".resizable")
            }
            var e;
            return this.elementIsWrapper && (t(this.element),
            e = this.element,
            this.originalElement.css({
                position: e.css("position"),
                width: e.outerWidth(),
                height: e.outerHeight(),
                top: e.css("top"),
                left: e.css("left")
            }).insertAfter(e),
            e.remove()),
            this.originalElement.css("resize", this.originalResizeStyle),
            t(this.originalElement),
            this
        },
        _setOption: function(t, e) {
            switch (this._super(t, e),
            t) {
            case "handles":
                this._removeHandles(),
                this._setupHandles();
                break;
            case "aspectRatio":
                this._aspectRatio = !!e
            }
        },
        _setupHandles: function() {
            var t, e, i, s, o, n = this.options, a = this;
            if (this.handles = n.handles || (x(".ui-resizable-handle", this.element).length ? {
                n: ".ui-resizable-n",
                e: ".ui-resizable-e",
                s: ".ui-resizable-s",
                w: ".ui-resizable-w",
                se: ".ui-resizable-se",
                sw: ".ui-resizable-sw",
                ne: ".ui-resizable-ne",
                nw: ".ui-resizable-nw"
            } : "e,s,se"),
            this._handles = x(),
            this._addedHandles = x(),
            this.handles.constructor === String)
                for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"),
                i = this.handles.split(","),
                this.handles = {},
                e = 0; e < i.length; e++)
                    s = "ui-resizable-" + (t = String.prototype.trim.call(i[e])),
                    o = x("<div>"),
                    this._addClass(o, "ui-resizable-handle " + s),
                    o.css({
                        zIndex: n.zIndex
                    }),
                    this.handles[t] = ".ui-resizable-" + t,
                    this.element.children(this.handles[t]).length || (this.element.append(o),
                    this._addedHandles = this._addedHandles.add(o));
            this._renderAxis = function(t) {
                var e, i, s;
                for (e in t = t || this.element,
                this.handles)
                    this.handles[e].constructor === String ? this.handles[e] = this.element.children(this.handles[e]).first().show() : (this.handles[e].jquery || this.handles[e].nodeType) && (this.handles[e] = x(this.handles[e]),
                    this._on(this.handles[e], {
                        mousedown: a._mouseDown
                    })),
                    this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (i = x(this.handles[e], this.element),
                    s = /sw|ne|nw|se|n|s/.test(e) ? i.outerHeight() : i.outerWidth(),
                    i = ["padding", /ne|nw|n/.test(e) ? "Top" : /se|sw|s/.test(e) ? "Bottom" : /^e$/.test(e) ? "Right" : "Left"].join(""),
                    t.css(i, s),
                    this._proportionallyResize()),
                    this._handles = this._handles.add(this.handles[e])
            }
            ,
            this._renderAxis(this.element),
            this._handles = this._handles.add(this.element.find(".ui-resizable-handle")),
            this._handles.disableSelection(),
            this._handles.on("mouseover", function() {
                a.resizing || (this.className && (o = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),
                a.axis = o && o[1] ? o[1] : "se")
            }),
            n.autoHide && (this._handles.hide(),
            this._addClass("ui-resizable-autohide"))
        },
        _removeHandles: function() {
            this._addedHandles.remove()
        },
        _mouseCapture: function(t) {
            var e, i, s = !1;
            for (e in this.handles)
                (i = x(this.handles[e])[0]) !== t.target && !x.contains(i, t.target) || (s = !0);
            return !this.options.disabled && s
        },
        _mouseStart: function(t) {
            var e, i, s = this.options, o = this.element;
            return this.resizing = !0,
            this._renderProxy(),
            e = this._num(this.helper.css("left")),
            i = this._num(this.helper.css("top")),
            s.containment && (e += x(s.containment).scrollLeft() || 0,
            i += x(s.containment).scrollTop() || 0),
            this.offset = this.helper.offset(),
            this.position = {
                left: e,
                top: i
            },
            this.size = this._helper ? {
                width: this.helper.width(),
                height: this.helper.height()
            } : {
                width: o.width(),
                height: o.height()
            },
            this.originalSize = this._helper ? {
                width: o.outerWidth(),
                height: o.outerHeight()
            } : {
                width: o.width(),
                height: o.height()
            },
            this.sizeDiff = {
                width: o.outerWidth() - o.width(),
                height: o.outerHeight() - o.height()
            },
            this.originalPosition = {
                left: e,
                top: i
            },
            this.originalMousePosition = {
                left: t.pageX,
                top: t.pageY
            },
            this.aspectRatio = "number" == typeof s.aspectRatio ? s.aspectRatio : this.originalSize.width / this.originalSize.height || 1,
            s = x(".ui-resizable-" + this.axis).css("cursor"),
            x("body").css("cursor", "auto" === s ? this.axis + "-resize" : s),
            this._addClass("ui-resizable-resizing"),
            this._propagate("start", t),
            !0
        },
        _mouseDrag: function(t) {
            var e = this.originalMousePosition
              , i = this.axis
              , s = t.pageX - e.left || 0
              , e = t.pageY - e.top || 0
              , i = this._change[i];
            return this._updatePrevProperties(),
            i && (e = i.apply(this, [t, s, e]),
            this._updateVirtualBoundaries(t.shiftKey),
            (this._aspectRatio || t.shiftKey) && (e = this._updateRatio(e, t)),
            e = this._respectSize(e, t),
            this._updateCache(e),
            this._propagate("resize", t),
            e = this._applyChanges(),
            !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(),
            x.isEmptyObject(e) || (this._updatePrevProperties(),
            this._trigger("resize", t, this.ui()),
            this._applyChanges())),
            !1
        },
        _mouseStop: function(t) {
            this.resizing = !1;
            var e, i, s, o = this.options, n = this;
            return this._helper && (s = (e = (i = this._proportionallyResizeElements).length && /textarea/i.test(i[0].nodeName)) && this._hasScroll(i[0], "left") ? 0 : n.sizeDiff.height,
            i = e ? 0 : n.sizeDiff.width,
            e = {
                width: n.helper.width() - i,
                height: n.helper.height() - s
            },
            i = parseFloat(n.element.css("left")) + (n.position.left - n.originalPosition.left) || null,
            s = parseFloat(n.element.css("top")) + (n.position.top - n.originalPosition.top) || null,
            o.animate || this.element.css(x.extend(e, {
                top: s,
                left: i
            })),
            n.helper.height(n.size.height),
            n.helper.width(n.size.width),
            this._helper && !o.animate && this._proportionallyResize()),
            x("body").css("cursor", "auto"),
            this._removeClass("ui-resizable-resizing"),
            this._propagate("stop", t),
            this._helper && this.helper.remove(),
            !1
        },
        _updatePrevProperties: function() {
            this.prevPosition = {
                top: this.position.top,
                left: this.position.left
            },
            this.prevSize = {
                width: this.size.width,
                height: this.size.height
            }
        },
        _applyChanges: function() {
            var t = {};
            return this.position.top !== this.prevPosition.top && (t.top = this.position.top + "px"),
            this.position.left !== this.prevPosition.left && (t.left = this.position.left + "px"),
            this.size.width !== this.prevSize.width && (t.width = this.size.width + "px"),
            this.size.height !== this.prevSize.height && (t.height = this.size.height + "px"),
            this.helper.css(t),
            t
        },
        _updateVirtualBoundaries: function(t) {
            var e, i, s = this.options, o = {
                minWidth: this._isNumber(s.minWidth) ? s.minWidth : 0,
                maxWidth: this._isNumber(s.maxWidth) ? s.maxWidth : 1 / 0,
                minHeight: this._isNumber(s.minHeight) ? s.minHeight : 0,
                maxHeight: this._isNumber(s.maxHeight) ? s.maxHeight : 1 / 0
            };
            (this._aspectRatio || t) && (e = o.minHeight * this.aspectRatio,
            i = o.minWidth / this.aspectRatio,
            s = o.maxHeight * this.aspectRatio,
            t = o.maxWidth / this.aspectRatio,
            e > o.minWidth && (o.minWidth = e),
            i > o.minHeight && (o.minHeight = i),
            s < o.maxWidth && (o.maxWidth = s),
            t < o.maxHeight && (o.maxHeight = t)),
            this._vBoundaries = o
        },
        _updateCache: function(t) {
            this.offset = this.helper.offset(),
            this._isNumber(t.left) && (this.position.left = t.left),
            this._isNumber(t.top) && (this.position.top = t.top),
            this._isNumber(t.height) && (this.size.height = t.height),
            this._isNumber(t.width) && (this.size.width = t.width)
        },
        _updateRatio: function(t) {
            var e = this.position
              , i = this.size
              , s = this.axis;
            return this._isNumber(t.height) ? t.width = t.height * this.aspectRatio : this._isNumber(t.width) && (t.height = t.width / this.aspectRatio),
            "sw" === s && (t.left = e.left + (i.width - t.width),
            t.top = null),
            "nw" === s && (t.top = e.top + (i.height - t.height),
            t.left = e.left + (i.width - t.width)),
            t
        },
        _respectSize: function(t) {
            var e = this._vBoundaries
              , i = this.axis
              , s = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width
              , o = this._isNumber(t.height) && e.maxHeight && e.maxHeight < t.height
              , n = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width
              , a = this._isNumber(t.height) && e.minHeight && e.minHeight > t.height
              , r = this.originalPosition.left + this.originalSize.width
              , l = this.originalPosition.top + this.originalSize.height
              , h = /sw|nw|w/.test(i)
              , i = /nw|ne|n/.test(i);
            return n && (t.width = e.minWidth),
            a && (t.height = e.minHeight),
            s && (t.width = e.maxWidth),
            o && (t.height = e.maxHeight),
            n && h && (t.left = r - e.minWidth),
            s && h && (t.left = r - e.maxWidth),
            a && i && (t.top = l - e.minHeight),
            o && i && (t.top = l - e.maxHeight),
            t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null,
            t
        },
        _getPaddingPlusBorderDimensions: function(t) {
            for (var e = 0, i = [], s = [t.css("borderTopWidth"), t.css("borderRightWidth"), t.css("borderBottomWidth"), t.css("borderLeftWidth")], o = [t.css("paddingTop"), t.css("paddingRight"), t.css("paddingBottom"), t.css("paddingLeft")]; e < 4; e++)
                i[e] = parseFloat(s[e]) || 0,
                i[e] += parseFloat(o[e]) || 0;
            return {
                height: i[0] + i[2],
                width: i[1] + i[3]
            }
        },
        _proportionallyResize: function() {
            if (this._proportionallyResizeElements.length)
                for (var t, e = 0, i = this.helper || this.element; e < this._proportionallyResizeElements.length; e++)
                    t = this._proportionallyResizeElements[e],
                    this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(t)),
                    t.css({
                        height: i.height() - this.outerDimensions.height || 0,
                        width: i.width() - this.outerDimensions.width || 0
                    })
        },
        _renderProxy: function() {
            var t = this.element
              , e = this.options;
            this.elementOffset = t.offset(),
            this._helper ? (this.helper = this.helper || x("<div></div>").css({
                overflow: "hidden"
            }),
            this._addClass(this.helper, this._helper),
            this.helper.css({
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                position: "absolute",
                left: this.elementOffset.left + "px",
                top: this.elementOffset.top + "px",
                zIndex: ++e.zIndex
            }),
            this.helper.appendTo("body").disableSelection()) : this.helper = this.element
        },
        _change: {
            e: function(t, e) {
                return {
                    width: this.originalSize.width + e
                }
            },
            w: function(t, e) {
                var i = this.originalSize;
                return {
                    left: this.originalPosition.left + e,
                    width: i.width - e
                }
            },
            n: function(t, e, i) {
                var s = this.originalSize;
                return {
                    top: this.originalPosition.top + i,
                    height: s.height - i
                }
            },
            s: function(t, e, i) {
                return {
                    height: this.originalSize.height + i
                }
            },
            se: function(t, e, i) {
                return x.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, e, i]))
            },
            sw: function(t, e, i) {
                return x.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, e, i]))
            },
            ne: function(t, e, i) {
                return x.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, e, i]))
            },
            nw: function(t, e, i) {
                return x.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, e, i]))
            }
        },
        _propagate: function(t, e) {
            x.ui.plugin.call(this, t, [e, this.ui()]),
            "resize" !== t && this._trigger(t, e, this.ui())
        },
        plugins: {},
        ui: function() {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    }),
    x.ui.plugin.add("resizable", "animate", {
        stop: function(e) {
            var i = x(this).resizable("instance")
              , t = i.options
              , s = i._proportionallyResizeElements
              , o = s.length && /textarea/i.test(s[0].nodeName)
              , n = o && i._hasScroll(s[0], "left") ? 0 : i.sizeDiff.height
              , a = o ? 0 : i.sizeDiff.width
              , o = {
                width: i.size.width - a,
                height: i.size.height - n
            }
              , a = parseFloat(i.element.css("left")) + (i.position.left - i.originalPosition.left) || null
              , n = parseFloat(i.element.css("top")) + (i.position.top - i.originalPosition.top) || null;
            i.element.animate(x.extend(o, n && a ? {
                top: n,
                left: a
            } : {}), {
                duration: t.animateDuration,
                easing: t.animateEasing,
                step: function() {
                    var t = {
                        width: parseFloat(i.element.css("width")),
                        height: parseFloat(i.element.css("height")),
                        top: parseFloat(i.element.css("top")),
                        left: parseFloat(i.element.css("left"))
                    };
                    s && s.length && x(s[0]).css({
                        width: t.width,
                        height: t.height
                    }),
                    i._updateCache(t),
                    i._propagate("resize", e)
                }
            })
        }
    }),
    x.ui.plugin.add("resizable", "containment", {
        start: function() {
            var i, s, o = x(this).resizable("instance"), t = o.options, e = o.element, n = t.containment, a = n instanceof x ? n.get(0) : /parent/.test(n) ? e.parent().get(0) : n;
            a && (o.containerElement = x(a),
            /document/.test(n) || n === document ? (o.containerOffset = {
                left: 0,
                top: 0
            },
            o.containerPosition = {
                left: 0,
                top: 0
            },
            o.parentData = {
                element: x(document),
                left: 0,
                top: 0,
                width: x(document).width(),
                height: x(document).height() || document.body.parentNode.scrollHeight
            }) : (i = x(a),
            s = [],
            x(["Top", "Right", "Left", "Bottom"]).each(function(t, e) {
                s[t] = o._num(i.css("padding" + e))
            }),
            o.containerOffset = i.offset(),
            o.containerPosition = i.position(),
            o.containerSize = {
                height: i.innerHeight() - s[3],
                width: i.innerWidth() - s[1]
            },
            t = o.containerOffset,
            e = o.containerSize.height,
            n = o.containerSize.width,
            n = o._hasScroll(a, "left") ? a.scrollWidth : n,
            e = o._hasScroll(a) ? a.scrollHeight : e,
            o.parentData = {
                element: a,
                left: t.left,
                top: t.top,
                width: n,
                height: e
            }))
        },
        resize: function(t) {
            var e = x(this).resizable("instance")
              , i = e.options
              , s = e.containerOffset
              , o = e.position
              , n = e._aspectRatio || t.shiftKey
              , a = {
                top: 0,
                left: 0
            }
              , r = e.containerElement
              , t = !0;
            r[0] !== document && /static/.test(r.css("position")) && (a = s),
            o.left < (e._helper ? s.left : 0) && (e.size.width = e.size.width + (e._helper ? e.position.left - s.left : e.position.left - a.left),
            n && (e.size.height = e.size.width / e.aspectRatio,
            t = !1),
            e.position.left = i.helper ? s.left : 0),
            o.top < (e._helper ? s.top : 0) && (e.size.height = e.size.height + (e._helper ? e.position.top - s.top : e.position.top),
            n && (e.size.width = e.size.height * e.aspectRatio,
            t = !1),
            e.position.top = e._helper ? s.top : 0),
            i = e.containerElement.get(0) === e.element.parent().get(0),
            o = /relative|absolute/.test(e.containerElement.css("position")),
            i && o ? (e.offset.left = e.parentData.left + e.position.left,
            e.offset.top = e.parentData.top + e.position.top) : (e.offset.left = e.element.offset().left,
            e.offset.top = e.element.offset().top),
            o = Math.abs(e.sizeDiff.width + (e._helper ? e.offset.left - a.left : e.offset.left - s.left)),
            s = Math.abs(e.sizeDiff.height + (e._helper ? e.offset.top - a.top : e.offset.top - s.top)),
            o + e.size.width >= e.parentData.width && (e.size.width = e.parentData.width - o,
            n && (e.size.height = e.size.width / e.aspectRatio,
            t = !1)),
            s + e.size.height >= e.parentData.height && (e.size.height = e.parentData.height - s,
            n && (e.size.width = e.size.height * e.aspectRatio,
            t = !1)),
            t || (e.position.left = e.prevPosition.left,
            e.position.top = e.prevPosition.top,
            e.size.width = e.prevSize.width,
            e.size.height = e.prevSize.height)
        },
        stop: function() {
            var t = x(this).resizable("instance")
              , e = t.options
              , i = t.containerOffset
              , s = t.containerPosition
              , o = t.containerElement
              , n = x(t.helper)
              , a = n.offset()
              , r = n.outerWidth() - t.sizeDiff.width
              , n = n.outerHeight() - t.sizeDiff.height;
            t._helper && !e.animate && /relative/.test(o.css("position")) && x(this).css({
                left: a.left - s.left - i.left,
                width: r,
                height: n
            }),
            t._helper && !e.animate && /static/.test(o.css("position")) && x(this).css({
                left: a.left - s.left - i.left,
                width: r,
                height: n
            })
        }
    }),
    x.ui.plugin.add("resizable", "alsoResize", {
        start: function() {
            var t = x(this).resizable("instance").options;
            x(t.alsoResize).each(function() {
                var t = x(this);
                t.data("ui-resizable-alsoresize", {
                    width: parseFloat(t.width()),
                    height: parseFloat(t.height()),
                    left: parseFloat(t.css("left")),
                    top: parseFloat(t.css("top"))
                })
            })
        },
        resize: function(t, i) {
            var e = x(this).resizable("instance")
              , s = e.options
              , o = e.originalSize
              , n = e.originalPosition
              , a = {
                height: e.size.height - o.height || 0,
                width: e.size.width - o.width || 0,
                top: e.position.top - n.top || 0,
                left: e.position.left - n.left || 0
            };
            x(s.alsoResize).each(function() {
                var t = x(this)
                  , s = x(this).data("ui-resizable-alsoresize")
                  , o = {}
                  , e = t.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                x.each(e, function(t, e) {
                    var i = (s[e] || 0) + (a[e] || 0);
                    i && 0 <= i && (o[e] = i || null)
                }),
                t.css(o)
            })
        },
        stop: function() {
            x(this).removeData("ui-resizable-alsoresize")
        }
    }),
    x.ui.plugin.add("resizable", "ghost", {
        start: function() {
            var t = x(this).resizable("instance")
              , e = t.size;
            t.ghost = t.originalElement.clone(),
            t.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: e.height,
                width: e.width,
                margin: 0,
                left: 0,
                top: 0
            }),
            t._addClass(t.ghost, "ui-resizable-ghost"),
            !1 !== x.uiBackCompat && "string" == typeof t.options.ghost && t.ghost.addClass(this.options.ghost),
            t.ghost.appendTo(t.helper)
        },
        resize: function() {
            var t = x(this).resizable("instance");
            t.ghost && t.ghost.css({
                position: "relative",
                height: t.size.height,
                width: t.size.width
            })
        },
        stop: function() {
            var t = x(this).resizable("instance");
            t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0))
        }
    }),
    x.ui.plugin.add("resizable", "grid", {
        resize: function() {
            var t, e = x(this).resizable("instance"), i = e.options, s = e.size, o = e.originalSize, n = e.originalPosition, a = e.axis, r = "number" == typeof i.grid ? [i.grid, i.grid] : i.grid, l = r[0] || 1, h = r[1] || 1, u = Math.round((s.width - o.width) / l) * l, c = Math.round((s.height - o.height) / h) * h, p = o.width + u, d = o.height + c, f = i.maxWidth && i.maxWidth < p, m = i.maxHeight && i.maxHeight < d, g = i.minWidth && i.minWidth > p, s = i.minHeight && i.minHeight > d;
            i.grid = r,
            g && (p += l),
            s && (d += h),
            f && (p -= l),
            m && (d -= h),
            /^(se|s|e)$/.test(a) ? (e.size.width = p,
            e.size.height = d) : /^(ne)$/.test(a) ? (e.size.width = p,
            e.size.height = d,
            e.position.top = n.top - c) : /^(sw)$/.test(a) ? (e.size.width = p,
            e.size.height = d,
            e.position.left = n.left - u) : ((d - h <= 0 || p - l <= 0) && (t = e._getPaddingPlusBorderDimensions(this)),
            0 < d - h ? (e.size.height = d,
            e.position.top = n.top - c) : (d = h - t.height,
            e.size.height = d,
            e.position.top = n.top + o.height - d),
            0 < p - l ? (e.size.width = p,
            e.position.left = n.left - u) : (p = l - t.width,
            e.size.width = p,
            e.position.left = n.left + o.width - p))
        }
    });
    x.ui.resizable,
    x.widget("ui.menu", {
        version: "1.13.1",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {
                submenu: "ui-icon-caret-1-e"
            },
            items: "> *",
            menus: "ul",
            position: {
                my: "left top",
                at: "right top"
            },
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function() {
            this.activeMenu = this.element,
            this.mouseHandled = !1,
            this.lastMousePosition = {
                x: null,
                y: null
            },
            this.element.uniqueId().attr({
                role: this.options.role,
                tabIndex: 0
            }),
            this._addClass("ui-menu", "ui-widget ui-widget-content"),
            this._on({
                "mousedown .ui-menu-item": function(t) {
                    t.preventDefault(),
                    this._activateItem(t)
                },
                "click .ui-menu-item": function(t) {
                    var e = x(t.target)
                      , i = x(x.ui.safeActiveElement(this.document[0]));
                    !this.mouseHandled && e.not(".ui-state-disabled").length && (this.select(t),
                    t.isPropagationStopped() || (this.mouseHandled = !0),
                    e.has(".ui-menu").length ? this.expand(t) : !this.element.is(":focus") && i.closest(".ui-menu").length && (this.element.trigger("focus", [!0]),
                    this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                },
                "mouseenter .ui-menu-item": "_activateItem",
                "mousemove .ui-menu-item": "_activateItem",
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function(t, e) {
                    var i = this.active || this._menuItems().first();
                    e || this.focus(t, i)
                },
                blur: function(t) {
                    this._delay(function() {
                        x.contains(this.element[0], x.ui.safeActiveElement(this.document[0])) || this.collapseAll(t)
                    })
                },
                keydown: "_keydown"
            }),
            this.refresh(),
            this._on(this.document, {
                click: function(t) {
                    this._closeOnDocumentClick(t) && this.collapseAll(t, !0),
                    this.mouseHandled = !1
                }
            })
        },
        _activateItem: function(t) {
            var e, i;
            this.previousFilter || t.clientX === this.lastMousePosition.x && t.clientY === this.lastMousePosition.y || (this.lastMousePosition = {
                x: t.clientX,
                y: t.clientY
            },
            e = x(t.target).closest(".ui-menu-item"),
            i = x(t.currentTarget),
            e[0] === i[0] && (i.is(".ui-state-active") || (this._removeClass(i.siblings().children(".ui-state-active"), null, "ui-state-active"),
            this.focus(t, i))))
        },
        _destroy: function() {
            var t = this.element.find(".ui-menu-item").removeAttr("role aria-disabled").children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(),
            t.children().each(function() {
                var t = x(this);
                t.data("ui-menu-submenu-caret") && t.remove()
            })
        },
        _keydown: function(t) {
            var e, i, s, o = !0;
            switch (t.keyCode) {
            case x.ui.keyCode.PAGE_UP:
                this.previousPage(t);
                break;
            case x.ui.keyCode.PAGE_DOWN:
                this.nextPage(t);
                break;
            case x.ui.keyCode.HOME:
                this._move("first", "first", t);
                break;
            case x.ui.keyCode.END:
                this._move("last", "last", t);
                break;
            case x.ui.keyCode.UP:
                this.previous(t);
                break;
            case x.ui.keyCode.DOWN:
                this.next(t);
                break;
            case x.ui.keyCode.LEFT:
                this.collapse(t);
                break;
            case x.ui.keyCode.RIGHT:
                this.active && !this.active.is(".ui-state-disabled") && this.expand(t);
                break;
            case x.ui.keyCode.ENTER:
            case x.ui.keyCode.SPACE:
                this._activate(t);
                break;
            case x.ui.keyCode.ESCAPE:
                this.collapse(t);
                break;
            default:
                e = this.previousFilter || "",
                s = o = !1,
                i = 96 <= t.keyCode && t.keyCode <= 105 ? (t.keyCode - 96).toString() : String.fromCharCode(t.keyCode),
                clearTimeout(this.filterTimer),
                i === e ? s = !0 : i = e + i,
                e = this._filterMenuItems(i),
                (e = s && -1 !== e.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : e).length || (i = String.fromCharCode(t.keyCode),
                e = this._filterMenuItems(i)),
                e.length ? (this.focus(t, e),
                this.previousFilter = i,
                this.filterTimer = this._delay(function() {
                    delete this.previousFilter
                }, 1e3)) : delete this.previousFilter
            }
            o && t.preventDefault()
        },
        _activate: function(t) {
            this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(t) : this.select(t))
        },
        refresh: function() {
            var t, e, s = this, o = this.options.icons.submenu, i = this.element.find(this.options.menus);
            this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length),
            e = i.filter(":not(.ui-menu)").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each(function() {
                var t = x(this)
                  , e = t.prev()
                  , i = x("<span>").data("ui-menu-submenu-caret", !0);
                s._addClass(i, "ui-menu-icon", "ui-icon " + o),
                e.attr("aria-haspopup", "true").prepend(i),
                t.attr("aria-labelledby", e.attr("id"))
            }),
            this._addClass(e, "ui-menu", "ui-widget ui-widget-content ui-front"),
            (t = i.add(this.element).find(this.options.items)).not(".ui-menu-item").each(function() {
                var t = x(this);
                s._isDivider(t) && s._addClass(t, "ui-menu-divider", "ui-widget-content")
            }),
            i = (e = t.not(".ui-menu-item, .ui-menu-divider")).children().not(".ui-menu").uniqueId().attr({
                tabIndex: -1,
                role: this._itemRole()
            }),
            this._addClass(e, "ui-menu-item")._addClass(i, "ui-menu-item-wrapper"),
            t.filter(".ui-state-disabled").attr("aria-disabled", "true"),
            this.active && !x.contains(this.element[0], this.active[0]) && this.blur()
        },
        _itemRole: function() {
            return {
                menu: "menuitem",
                listbox: "option"
            }[this.options.role]
        },
        _setOption: function(t, e) {
            var i;
            "icons" === t && (i = this.element.find(".ui-menu-icon"),
            this._removeClass(i, null, this.options.icons.submenu)._addClass(i, null, e.submenu)),
            this._super(t, e)
        },
        _setOptionDisabled: function(t) {
            this._super(t),
            this.element.attr("aria-disabled", String(t)),
            this._toggleClass(null, "ui-state-disabled", !!t)
        },
        focus: function(t, e) {
            var i;
            this.blur(t, t && "focus" === t.type),
            this._scrollIntoView(e),
            this.active = e.first(),
            i = this.active.children(".ui-menu-item-wrapper"),
            this._addClass(i, null, "ui-state-active"),
            this.options.role && this.element.attr("aria-activedescendant", i.attr("id")),
            i = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"),
            this._addClass(i, null, "ui-state-active"),
            t && "keydown" === t.type ? this._close() : this.timer = this._delay(function() {
                this._close()
            }, this.delay),
            (i = e.children(".ui-menu")).length && t && /^mouse/.test(t.type) && this._startOpening(i),
            this.activeMenu = e.parent(),
            this._trigger("focus", t, {
                item: e
            })
        },
        _scrollIntoView: function(t) {
            var e, i, s;
            this._hasScroll() && (i = parseFloat(x.css(this.activeMenu[0], "borderTopWidth")) || 0,
            s = parseFloat(x.css(this.activeMenu[0], "paddingTop")) || 0,
            e = t.offset().top - this.activeMenu.offset().top - i - s,
            i = this.activeMenu.scrollTop(),
            s = this.activeMenu.height(),
            t = t.outerHeight(),
            e < 0 ? this.activeMenu.scrollTop(i + e) : s < e + t && this.activeMenu.scrollTop(i + e - s + t))
        },
        blur: function(t, e) {
            e || clearTimeout(this.timer),
            this.active && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"),
            this._trigger("blur", t, {
                item: this.active
            }),
            this.active = null)
        },
        _startOpening: function(t) {
            clearTimeout(this.timer),
            "true" === t.attr("aria-hidden") && (this.timer = this._delay(function() {
                this._close(),
                this._open(t)
            }, this.delay))
        },
        _open: function(t) {
            var e = x.extend({
                of: this.active
            }, this.options.position);
            clearTimeout(this.timer),
            this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden", "true"),
            t.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(e)
        },
        collapseAll: function(e, i) {
            clearTimeout(this.timer),
            this.timer = this._delay(function() {
                var t = i ? this.element : x(e && e.target).closest(this.element.find(".ui-menu"));
                t.length || (t = this.element),
                this._close(t),
                this.blur(e),
                this._removeClass(t.find(".ui-state-active"), null, "ui-state-active"),
                this.activeMenu = t
            }, i ? 0 : this.delay)
        },
        _close: function(t) {
            (t = t || (this.active ? this.active.parent() : this.element)).find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false")
        },
        _closeOnDocumentClick: function(t) {
            return !x(t.target).closest(".ui-menu").length
        },
        _isDivider: function(t) {
            return !/[^\-\u2014\u2013\s]/.test(t.text())
        },
        collapse: function(t) {
            var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            e && e.length && (this._close(),
            this.focus(t, e))
        },
        expand: function(t) {
            var e = this.active && this._menuItems(this.active.children(".ui-menu")).first();
            e && e.length && (this._open(e.parent()),
            this._delay(function() {
                this.focus(t, e)
            }))
        },
        next: function(t) {
            this._move("next", "first", t)
        },
        previous: function(t) {
            this._move("prev", "last", t)
        },
        isFirstItem: function() {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        isLastItem: function() {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        _menuItems: function(t) {
            return (t || this.element).find(this.options.items).filter(".ui-menu-item")
        },
        _move: function(t, e, i) {
            var s;
            (s = this.active ? "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").last() : this.active[t + "All"](".ui-menu-item").first() : s) && s.length && this.active || (s = this._menuItems(this.activeMenu)[e]()),
            this.focus(i, s)
        },
        nextPage: function(t) {
            var e, i, s;
            this.active ? this.isLastItem() || (this._hasScroll() ? (i = this.active.offset().top,
            s = this.element.innerHeight(),
            0 === x.fn.jquery.indexOf("3.2.") && (s += this.element[0].offsetHeight - this.element.outerHeight()),
            this.active.nextAll(".ui-menu-item").each(function() {
                return (e = x(this)).offset().top - i - s < 0
            }),
            this.focus(t, e)) : this.focus(t, this._menuItems(this.activeMenu)[this.active ? "last" : "first"]())) : this.next(t)
        },
        previousPage: function(t) {
            var e, i, s;
            this.active ? this.isFirstItem() || (this._hasScroll() ? (i = this.active.offset().top,
            s = this.element.innerHeight(),
            0 === x.fn.jquery.indexOf("3.2.") && (s += this.element[0].offsetHeight - this.element.outerHeight()),
            this.active.prevAll(".ui-menu-item").each(function() {
                return 0 < (e = x(this)).offset().top - i + s
            }),
            this.focus(t, e)) : this.focus(t, this._menuItems(this.activeMenu).first())) : this.next(t)
        },
        _hasScroll: function() {
            return this.element.outerHeight() < this.element.prop("scrollHeight")
        },
        select: function(t) {
            this.active = this.active || x(t.target).closest(".ui-menu-item");
            var e = {
                item: this.active
            };
            this.active.has(".ui-menu").length || this.collapseAll(t, !0),
            this._trigger("select", t, e)
        },
        _filterMenuItems: function(t) {
            var t = t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
              , e = new RegExp("^" + t,"i");
            return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() {
                return e.test(String.prototype.trim.call(x(this).children(".ui-menu-item-wrapper").text()))
            })
        }
    });
    x.widget("ui.autocomplete", {
        version: "1.13.1",
        defaultElement: "<input>",
        options: {
            appendTo: null,
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        requestIndex: 0,
        pending: 0,
        liveRegionTimer: null,
        _create: function() {
            var i, s, o, t = this.element[0].nodeName.toLowerCase(), e = "textarea" === t, t = "input" === t;
            this.isMultiLine = e || !t && this._isContentEditable(this.element),
            this.valueMethod = this.element[e || t ? "val" : "text"],
            this.isNewMenu = !0,
            this._addClass("ui-autocomplete-input"),
            this.element.attr("autocomplete", "off"),
            this._on(this.element, {
                keydown: function(t) {
                    if (this.element.prop("readOnly"))
                        s = o = i = !0;
                    else {
                        s = o = i = !1;
                        var e = x.ui.keyCode;
                        switch (t.keyCode) {
                        case e.PAGE_UP:
                            i = !0,
                            this._move("previousPage", t);
                            break;
                        case e.PAGE_DOWN:
                            i = !0,
                            this._move("nextPage", t);
                            break;
                        case e.UP:
                            i = !0,
                            this._keyEvent("previous", t);
                            break;
                        case e.DOWN:
                            i = !0,
                            this._keyEvent("next", t);
                            break;
                        case e.ENTER:
                            this.menu.active && (i = !0,
                            t.preventDefault(),
                            this.menu.select(t));
                            break;
                        case e.TAB:
                            this.menu.active && this.menu.select(t);
                            break;
                        case e.ESCAPE:
                            this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term),
                            this.close(t),
                            t.preventDefault());
                            break;
                        default:
                            s = !0,
                            this._searchTimeout(t)
                        }
                    }
                },
                keypress: function(t) {
                    if (i)
                        return i = !1,
                        void (this.isMultiLine && !this.menu.element.is(":visible") || t.preventDefault());
                    if (!s) {
                        var e = x.ui.keyCode;
                        switch (t.keyCode) {
                        case e.PAGE_UP:
                            this._move("previousPage", t);
                            break;
                        case e.PAGE_DOWN:
                            this._move("nextPage", t);
                            break;
                        case e.UP:
                            this._keyEvent("previous", t);
                            break;
                        case e.DOWN:
                            this._keyEvent("next", t)
                        }
                    }
                },
                input: function(t) {
                    if (o)
                        return o = !1,
                        void t.preventDefault();
                    this._searchTimeout(t)
                },
                focus: function() {
                    this.selectedItem = null,
                    this.previous = this._value()
                },
                blur: function(t) {
                    clearTimeout(this.searching),
                    this.close(t),
                    this._change(t)
                }
            }),
            this._initSource(),
            this.menu = x("<ul>").appendTo(this._appendTo()).menu({
                role: null
            }).hide().attr({
                unselectable: "on"
            }).menu("instance"),
            this._addClass(this.menu.element, "ui-autocomplete", "ui-front"),
            this._on(this.menu.element, {
                mousedown: function(t) {
                    t.preventDefault()
                },
                menufocus: function(t, e) {
                    var i, s;
                    if (this.isNewMenu && (this.isNewMenu = !1,
                    t.originalEvent && /^mouse/.test(t.originalEvent.type)))
                        return this.menu.blur(),
                        void this.document.one("mousemove", function() {
                            x(t.target).trigger(t.originalEvent)
                        });
                    s = e.item.data("ui-autocomplete-item"),
                    !1 !== this._trigger("focus", t, {
                        item: s
                    }) && t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(s.value),
                    (i = e.item.attr("aria-label") || s.value) && String.prototype.trim.call(i).length && (clearTimeout(this.liveRegionTimer),
                    this.liveRegionTimer = this._delay(function() {
                        this.liveRegion.html(x("<div>").text(i))
                    }, 100))
                },
                menuselect: function(t, e) {
                    var i = e.item.data("ui-autocomplete-item")
                      , s = this.previous;
                    this.element[0] !== x.ui.safeActiveElement(this.document[0]) && (this.element.trigger("focus"),
                    this.previous = s,
                    this._delay(function() {
                        this.previous = s,
                        this.selectedItem = i
                    })),
                    !1 !== this._trigger("select", t, {
                        item: i
                    }) && this._value(i.value),
                    this.term = this._value(),
                    this.close(t),
                    this.selectedItem = i
                }
            }),
            this.liveRegion = x("<div>", {
                role: "status",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).appendTo(this.document[0].body),
            this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"),
            this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _destroy: function() {
            clearTimeout(this.searching),
            this.element.removeAttr("autocomplete"),
            this.menu.element.remove(),
            this.liveRegion.remove()
        },
        _setOption: function(t, e) {
            this._super(t, e),
            "source" === t && this._initSource(),
            "appendTo" === t && this.menu.element.appendTo(this._appendTo()),
            "disabled" === t && e && this.xhr && this.xhr.abort()
        },
        _isEventTargetInWidget: function(t) {
            var e = this.menu.element[0];
            return t.target === this.element[0] || t.target === e || x.contains(e, t.target)
        },
        _closeOnClickOutside: function(t) {
            this._isEventTargetInWidget(t) || this.close()
        },
        _appendTo: function() {
            var t = this.options.appendTo;
            return t = !(t = !(t = t && (t.jquery || t.nodeType ? x(t) : this.document.find(t).eq(0))) || !t[0] ? this.element.closest(".ui-front, dialog") : t).length ? this.document[0].body : t
        },
        _initSource: function() {
            var i, s, o = this;
            Array.isArray(this.options.source) ? (i = this.options.source,
            this.source = function(t, e) {
                e(x.ui.autocomplete.filter(i, t.term))
            }
            ) : "string" == typeof this.options.source ? (s = this.options.source,
            this.source = function(t, e) {
                o.xhr && o.xhr.abort(),
                o.xhr = x.ajax({
                    url: s,
                    data: t,
                    dataType: "json",
                    success: function(t) {
                        e(t)
                    },
                    error: function() {
                        e([])
                    }
                })
            }
            ) : this.source = this.options.source
        },
        _searchTimeout: function(s) {
            clearTimeout(this.searching),
            this.searching = this._delay(function() {
                var t = this.term === this._value()
                  , e = this.menu.element.is(":visible")
                  , i = s.altKey || s.ctrlKey || s.metaKey || s.shiftKey;
                t && (e || i) || (this.selectedItem = null,
                this.search(null, s))
            }, this.options.delay)
        },
        search: function(t, e) {
            return t = null != t ? t : this._value(),
            this.term = this._value(),
            t.length < this.options.minLength ? this.close(e) : !1 !== this._trigger("search", e) ? this._search(t) : void 0
        },
        _search: function(t) {
            this.pending++,
            this._addClass("ui-autocomplete-loading"),
            this.cancelSearch = !1,
            this.source({
                term: t
            }, this._response())
        },
        _response: function() {
            var e = ++this.requestIndex;
            return function(t) {
                e === this.requestIndex && this.__response(t),
                this.pending--,
                this.pending || this._removeClass("ui-autocomplete-loading")
            }
            .bind(this)
        },
        __response: function(t) {
            t = t && this._normalize(t),
            this._trigger("response", null, {
                content: t
            }),
            !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t),
            this._trigger("open")) : this._close()
        },
        close: function(t) {
            this.cancelSearch = !0,
            this._close(t)
        },
        _close: function(t) {
            this._off(this.document, "mousedown"),
            this.menu.element.is(":visible") && (this.menu.element.hide(),
            this.menu.blur(),
            this.isNewMenu = !0,
            this._trigger("close", t))
        },
        _change: function(t) {
            this.previous !== this._value() && this._trigger("change", t, {
                item: this.selectedItem
            })
        },
        _normalize: function(t) {
            return t.length && t[0].label && t[0].value ? t : x.map(t, function(t) {
                return "string" == typeof t ? {
                    label: t,
                    value: t
                } : x.extend({}, t, {
                    label: t.label || t.value,
                    value: t.value || t.label
                })
            })
        },
        _suggest: function(t) {
            var e = this.menu.element.empty();
            this._renderMenu(e, t),
            this.isNewMenu = !0,
            this.menu.refresh(),
            e.show(),
            this._resizeMenu(),
            e.position(x.extend({
                of: this.element
            }, this.options.position)),
            this.options.autoFocus && this.menu.next(),
            this._on(this.document, {
                mousedown: "_closeOnClickOutside"
            })
        },
        _resizeMenu: function() {
            var t = this.menu.element;
            t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function(i, t) {
            var s = this;
            x.each(t, function(t, e) {
                s._renderItemData(i, e)
            })
        },
        _renderItemData: function(t, e) {
            return this._renderItem(t, e).data("ui-autocomplete-item", e)
        },
        _renderItem: function(t, e) {
            return x("<li>").append(x("<div>").text(e.label)).appendTo(t)
        },
        _move: function(t, e) {
            if (this.menu.element.is(":visible"))
                return this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this.isMultiLine || this._value(this.term),
                void this.menu.blur()) : void this.menu[t](e);
            this.search(null, e)
        },
        widget: function() {
            return this.menu.element
        },
        _value: function() {
            return this.valueMethod.apply(this.element, arguments)
        },
        _keyEvent: function(t, e) {
            this.isMultiLine && !this.menu.element.is(":visible") || (this._move(t, e),
            e.preventDefault())
        },
        _isContentEditable: function(t) {
            if (!t.length)
                return !1;
            var e = t.prop("contentEditable");
            return "inherit" === e ? this._isContentEditable(t.parent()) : "true" === e
        }
    }),
    x.extend(x.ui.autocomplete, {
        escapeRegex: function(t) {
            return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        },
        filter: function(t, e) {
            var i = new RegExp(x.ui.autocomplete.escapeRegex(e),"i");
            return x.grep(t, function(t) {
                return i.test(t.label || t.value || t)
            })
        }
    }),
    x.widget("ui.autocomplete", x.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function(t) {
                    return t + (1 < t ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                }
            }
        },
        __response: function(t) {
            var e;
            this._superApply(arguments),
            this.options.disabled || this.cancelSearch || (e = t && t.length ? this.options.messages.results(t.length) : this.options.messages.noResults,
            clearTimeout(this.liveRegionTimer),
            this.liveRegionTimer = this._delay(function() {
                this.liveRegion.html(x("<div>").text(e))
            }, 100))
        }
    });
    x.ui.autocomplete;
    var m = /ui-corner-([a-z]){2,6}/g;
    x.widget("ui.controlgroup", {
        version: "1.13.1",
        defaultElement: "<div>",
        options: {
            direction: "horizontal",
            disabled: null,
            onlyVisible: !0,
            items: {
                button: "input[type=button], input[type=submit], input[type=reset], button, a",
                controlgroupLabel: ".ui-controlgroup-label",
                checkboxradio: "input[type='checkbox'], input[type='radio']",
                selectmenu: "select",
                spinner: ".ui-spinner-input"
            }
        },
        _create: function() {
            this._enhance()
        },
        _enhance: function() {
            this.element.attr("role", "toolbar"),
            this.refresh()
        },
        _destroy: function() {
            this._callChildMethod("destroy"),
            this.childWidgets.removeData("ui-controlgroup-data"),
            this.element.removeAttr("role"),
            this.options.items.controlgroupLabel && this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()
        },
        _initWidgets: function() {
            var n = this
              , a = [];
            x.each(this.options.items, function(s, t) {
                var e, o = {};
                if (t)
                    return "controlgroupLabel" === s ? ((e = n.element.find(t)).each(function() {
                        var t = x(this);
                        t.children(".ui-controlgroup-label-contents").length || t.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")
                    }),
                    n._addClass(e, null, "ui-widget ui-widget-content ui-state-default"),
                    void (a = a.concat(e.get()))) : void (x.fn[s] && (o = n["_" + s + "Options"] ? n["_" + s + "Options"]("middle") : {
                        classes: {}
                    },
                    n.element.find(t).each(function() {
                        var t = x(this)
                          , e = t[s]("instance")
                          , i = x.widget.extend({}, o);
                        "button" === s && t.parent(".ui-spinner").length || ((e = e || t[s]()[s]("instance")) && (i.classes = n._resolveClassesValues(i.classes, e)),
                        t[s](i),
                        i = t[s]("widget"),
                        x.data(i[0], "ui-controlgroup-data", e || t[s]("instance")),
                        a.push(i[0]))
                    })))
            }),
            this.childWidgets = x(x.uniqueSort(a)),
            this._addClass(this.childWidgets, "ui-controlgroup-item")
        },
        _callChildMethod: function(e) {
            this.childWidgets.each(function() {
                var t = x(this).data("ui-controlgroup-data");
                t && t[e] && t[e]()
            })
        },
        _updateCornerClass: function(t, e) {
            e = this._buildSimpleOptions(e, "label").classes.label;
            this._removeClass(t, null, "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all"),
            this._addClass(t, null, e)
        },
        _buildSimpleOptions: function(t, e) {
            var i = "vertical" === this.options.direction
              , s = {
                classes: {}
            };
            return s.classes[e] = {
                middle: "",
                first: "ui-corner-" + (i ? "top" : "left"),
                last: "ui-corner-" + (i ? "bottom" : "right"),
                only: "ui-corner-all"
            }[t],
            s
        },
        _spinnerOptions: function(t) {
            t = this._buildSimpleOptions(t, "ui-spinner");
            return t.classes["ui-spinner-up"] = "",
            t.classes["ui-spinner-down"] = "",
            t
        },
        _buttonOptions: function(t) {
            return this._buildSimpleOptions(t, "ui-button")
        },
        _checkboxradioOptions: function(t) {
            return this._buildSimpleOptions(t, "ui-checkboxradio-label")
        },
        _selectmenuOptions: function(t) {
            var e = "vertical" === this.options.direction;
            return {
                width: e && "auto",
                classes: {
                    middle: {
                        "ui-selectmenu-button-open": "",
                        "ui-selectmenu-button-closed": ""
                    },
                    first: {
                        "ui-selectmenu-button-open": "ui-corner-" + (e ? "top" : "tl"),
                        "ui-selectmenu-button-closed": "ui-corner-" + (e ? "top" : "left")
                    },
                    last: {
                        "ui-selectmenu-button-open": e ? "" : "ui-corner-tr",
                        "ui-selectmenu-button-closed": "ui-corner-" + (e ? "bottom" : "right")
                    },
                    only: {
                        "ui-selectmenu-button-open": "ui-corner-top",
                        "ui-selectmenu-button-closed": "ui-corner-all"
                    }
                }[t]
            }
        },
        _resolveClassesValues: function(i, s) {
            var o = {};
            return x.each(i, function(t) {
                var e = s.options.classes[t] || ""
                  , e = String.prototype.trim.call(e.replace(m, ""));
                o[t] = (e + " " + i[t]).replace(/\s+/g, " ")
            }),
            o
        },
        _setOption: function(t, e) {
            "direction" === t && this._removeClass("ui-controlgroup-" + this.options.direction),
            this._super(t, e),
            "disabled" !== t ? this.refresh() : this._callChildMethod(e ? "disable" : "enable")
        },
        refresh: function() {
            var o, n = this;
            this._addClass("ui-controlgroup ui-controlgroup-" + this.options.direction),
            "horizontal" === this.options.direction && this._addClass(null, "ui-helper-clearfix"),
            this._initWidgets(),
            o = this.childWidgets,
            (o = this.options.onlyVisible ? o.filter(":visible") : o).length && (x.each(["first", "last"], function(t, e) {
                var i, s = o[e]().data("ui-controlgroup-data");
                s && n["_" + s.widgetName + "Options"] ? ((i = n["_" + s.widgetName + "Options"](1 === o.length ? "only" : e)).classes = n._resolveClassesValues(i.classes, s),
                s.element[s.widgetName](i)) : n._updateCornerClass(o[e](), e)
            }),
            this._callChildMethod("refresh"))
        }
    });
    x.widget("ui.checkboxradio", [x.ui.formResetMixin, {
        version: "1.13.1",
        options: {
            disabled: null,
            label: null,
            icon: !0,
            classes: {
                "ui-checkboxradio-label": "ui-corner-all",
                "ui-checkboxradio-icon": "ui-corner-all"
            }
        },
        _getCreateOptions: function() {
            var t, e = this, i = this._super() || {};
            return this._readType(),
            t = this.element.labels(),
            this.label = x(t[t.length - 1]),
            this.label.length || x.error("No label found for checkboxradio widget"),
            this.originalLabel = "",
            this.label.contents().not(this.element[0]).each(function() {
                e.originalLabel += 3 === this.nodeType ? x(this).text() : this.outerHTML
            }),
            this.originalLabel && (i.label = this.originalLabel),
            null != (t = this.element[0].disabled) && (i.disabled = t),
            i
        },
        _create: function() {
            var t = this.element[0].checked;
            this._bindFormResetHandler(),
            null == this.options.disabled && (this.options.disabled = this.element[0].disabled),
            this._setOption("disabled", this.options.disabled),
            this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible"),
            this._addClass(this.label, "ui-checkboxradio-label", "ui-button ui-widget"),
            "radio" === this.type && this._addClass(this.label, "ui-checkboxradio-radio-label"),
            this.options.label && this.options.label !== this.originalLabel ? this._updateLabel() : this.originalLabel && (this.options.label = this.originalLabel),
            this._enhance(),
            t && this._addClass(this.label, "ui-checkboxradio-checked", "ui-state-active"),
            this._on({
                change: "_toggleClasses",
                focus: function() {
                    this._addClass(this.label, null, "ui-state-focus ui-visual-focus")
                },
                blur: function() {
                    this._removeClass(this.label, null, "ui-state-focus ui-visual-focus")
                }
            })
        },
        _readType: function() {
            var t = this.element[0].nodeName.toLowerCase();
            this.type = this.element[0].type,
            "input" === t && /radio|checkbox/.test(this.type) || x.error("Can't create checkboxradio on element.nodeName=" + t + " and element.type=" + this.type)
        },
        _enhance: function() {
            this._updateIcon(this.element[0].checked)
        },
        widget: function() {
            return this.label
        },
        _getRadioGroup: function() {
            var t = this.element[0].name
              , e = "input[name='" + x.escapeSelector(t) + "']";
            return t ? (this.form.length ? x(this.form[0].elements).filter(e) : x(e).filter(function() {
                return 0 === x(this)._form().length
            })).not(this.element) : x([])
        },
        _toggleClasses: function() {
            var t = this.element[0].checked;
            this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", t),
            this.options.icon && "checkbox" === this.type && this._toggleClass(this.icon, null, "ui-icon-check ui-state-checked", t)._toggleClass(this.icon, null, "ui-icon-blank", !t),
            "radio" === this.type && this._getRadioGroup().each(function() {
                var t = x(this).checkboxradio("instance");
                t && t._removeClass(t.label, "ui-checkboxradio-checked", "ui-state-active")
            })
        },
        _destroy: function() {
            this._unbindFormResetHandler(),
            this.icon && (this.icon.remove(),
            this.iconSpace.remove())
        },
        _setOption: function(t, e) {
            if ("label" !== t || e) {
                if (this._super(t, e),
                "disabled" === t)
                    return this._toggleClass(this.label, null, "ui-state-disabled", e),
                    void (this.element[0].disabled = e);
                this.refresh()
            }
        },
        _updateIcon: function(t) {
            var e = "ui-icon ui-icon-background ";
            this.options.icon ? (this.icon || (this.icon = x("<span>"),
            this.iconSpace = x("<span> </span>"),
            this._addClass(this.iconSpace, "ui-checkboxradio-icon-space")),
            "checkbox" === this.type ? (e += t ? "ui-icon-check ui-state-checked" : "ui-icon-blank",
            this._removeClass(this.icon, null, t ? "ui-icon-blank" : "ui-icon-check")) : e += "ui-icon-blank",
            this._addClass(this.icon, "ui-checkboxradio-icon", e),
            t || this._removeClass(this.icon, null, "ui-icon-check ui-state-checked"),
            this.icon.prependTo(this.label).after(this.iconSpace)) : void 0 !== this.icon && (this.icon.remove(),
            this.iconSpace.remove(),
            delete this.icon)
        },
        _updateLabel: function() {
            var t = this.label.contents().not(this.element[0]);
            this.icon && (t = t.not(this.icon[0])),
            (t = this.iconSpace ? t.not(this.iconSpace[0]) : t).remove(),
            this.label.append(this.options.label)
        },
        refresh: function() {
            var t = this.element[0].checked
              , e = this.element[0].disabled;
            this._updateIcon(t),
            this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", t),
            null !== this.options.label && this._updateLabel(),
            e !== this.options.disabled && this._setOptions({
                disabled: e
            })
        }
    }]);
    var g;
    x.ui.checkboxradio;
    x.widget("ui.button", {
        version: "1.13.1",
        defaultElement: "<button>",
        options: {
            classes: {
                "ui-button": "ui-corner-all"
            },
            disabled: null,
            icon: null,
            iconPosition: "beginning",
            label: null,
            showLabel: !0
        },
        _getCreateOptions: function() {
            var t, e = this._super() || {};
            return this.isInput = this.element.is("input"),
            null != (t = this.element[0].disabled) && (e.disabled = t),
            this.originalLabel = this.isInput ? this.element.val() : this.element.html(),
            this.originalLabel && (e.label = this.originalLabel),
            e
        },
        _create: function() {
            !this.option.showLabel & !this.options.icon && (this.options.showLabel = !0),
            null == this.options.disabled && (this.options.disabled = this.element[0].disabled || !1),
            this.hasTitle = !!this.element.attr("title"),
            this.options.label && this.options.label !== this.originalLabel && (this.isInput ? this.element.val(this.options.label) : this.element.html(this.options.label)),
            this._addClass("ui-button", "ui-widget"),
            this._setOption("disabled", this.options.disabled),
            this._enhance(),
            this.element.is("a") && this._on({
                keyup: function(t) {
                    t.keyCode === x.ui.keyCode.SPACE && (t.preventDefault(),
                    this.element[0].click ? this.element[0].click() : this.element.trigger("click"))
                }
            })
        },
        _enhance: function() {
            this.element.is("button") || this.element.attr("role", "button"),
            this.options.icon && (this._updateIcon("icon", this.options.icon),
            this._updateTooltip())
        },
        _updateTooltip: function() {
            this.title = this.element.attr("title"),
            this.options.showLabel || this.title || this.element.attr("title", this.options.label)
        },
        _updateIcon: function(t, e) {
            var i = "iconPosition" !== t
              , s = i ? this.options.iconPosition : e
              , t = "top" === s || "bottom" === s;
            this.icon ? i && this._removeClass(this.icon, null, this.options.icon) : (this.icon = x("<span>"),
            this._addClass(this.icon, "ui-button-icon", "ui-icon"),
            this.options.showLabel || this._addClass("ui-button-icon-only")),
            i && this._addClass(this.icon, null, e),
            this._attachIcon(s),
            t ? (this._addClass(this.icon, null, "ui-widget-icon-block"),
            this.iconSpace && this.iconSpace.remove()) : (this.iconSpace || (this.iconSpace = x("<span> </span>"),
            this._addClass(this.iconSpace, "ui-button-icon-space")),
            this._removeClass(this.icon, null, "ui-wiget-icon-block"),
            this._attachIconSpace(s))
        },
        _destroy: function() {
            this.element.removeAttr("role"),
            this.icon && this.icon.remove(),
            this.iconSpace && this.iconSpace.remove(),
            this.hasTitle || this.element.removeAttr("title")
        },
        _attachIconSpace: function(t) {
            this.icon[/^(?:end|bottom)/.test(t) ? "before" : "after"](this.iconSpace)
        },
        _attachIcon: function(t) {
            this.element[/^(?:end|bottom)/.test(t) ? "append" : "prepend"](this.icon)
        },
        _setOptions: function(t) {
            var e = (void 0 === t.showLabel ? this.options : t).showLabel
              , i = (void 0 === t.icon ? this.options : t).icon;
            e || i || (t.showLabel = !0),
            this._super(t)
        },
        _setOption: function(t, e) {
            "icon" === t && (e ? this._updateIcon(t, e) : this.icon && (this.icon.remove(),
            this.iconSpace && this.iconSpace.remove())),
            "iconPosition" === t && this._updateIcon(t, e),
            "showLabel" === t && (this._toggleClass("ui-button-icon-only", null, !e),
            this._updateTooltip()),
            "label" === t && (this.isInput ? this.element.val(e) : (this.element.html(e),
            this.icon && (this._attachIcon(this.options.iconPosition),
            this._attachIconSpace(this.options.iconPosition)))),
            this._super(t, e),
            "disabled" === t && (this._toggleClass(null, "ui-state-disabled", e),
            (this.element[0].disabled = e) && this.element.trigger("blur"))
        },
        refresh: function() {
            var t = this.element.is("input, button") ? this.element[0].disabled : this.element.hasClass("ui-button-disabled");
            t !== this.options.disabled && this._setOptions({
                disabled: t
            }),
            this._updateTooltip()
        }
    }),
    !1 !== x.uiBackCompat && (x.widget("ui.button", x.ui.button, {
        options: {
            text: !0,
            icons: {
                primary: null,
                secondary: null
            }
        },
        _create: function() {
            this.options.showLabel && !this.options.text && (this.options.showLabel = this.options.text),
            !this.options.showLabel && this.options.text && (this.options.text = this.options.showLabel),
            this.options.icon || !this.options.icons.primary && !this.options.icons.secondary ? this.options.icon && (this.options.icons.primary = this.options.icon) : this.options.icons.primary ? this.options.icon = this.options.icons.primary : (this.options.icon = this.options.icons.secondary,
            this.options.iconPosition = "end"),
            this._super()
        },
        _setOption: function(t, e) {
            "text" !== t ? ("showLabel" === t && (this.options.text = e),
            "icon" === t && (this.options.icons.primary = e),
            "icons" === t && (e.primary ? (this._super("icon", e.primary),
            this._super("iconPosition", "beginning")) : e.secondary && (this._super("icon", e.secondary),
            this._super("iconPosition", "end"))),
            this._superApply(arguments)) : this._super("showLabel", e)
        }
    }),
    x.fn.button = (g = x.fn.button,
    function(i) {
        var t = "string" == typeof i
          , s = Array.prototype.slice.call(arguments, 1)
          , o = this;
        return t ? this.length || "instance" !== i ? this.each(function() {
            var t = x(this).attr("type")
              , e = x.data(this, "ui-" + ("checkbox" !== t && "radio" !== t ? "button" : "checkboxradio"));
            return "instance" === i ? (o = e,
            !1) : e ? "function" != typeof e[i] || "_" === i.charAt(0) ? x.error("no such method '" + i + "' for button widget instance") : (t = e[i].apply(e, s)) !== e && void 0 !== t ? (o = t && t.jquery ? o.pushStack(t.get()) : t,
            !1) : void 0 : x.error("cannot call methods on button prior to initialization; attempted to call method '" + i + "'")
        }) : o = void 0 : (s.length && (i = x.widget.extend.apply(null, [i].concat(s))),
        this.each(function() {
            var t = x(this).attr("type")
              , e = "checkbox" !== t && "radio" !== t ? "button" : "checkboxradio"
              , t = x.data(this, "ui-" + e);
            t ? (t.option(i || {}),
            t._init && t._init()) : "button" != e ? x(this).checkboxradio(x.extend({
                icon: !1
            }, i)) : g.call(x(this), i)
        })),
        o
    }
    ),
    x.fn.buttonset = function() {
        return x.ui.controlgroup || x.error("Controlgroup widget missing"),
        "option" === arguments[0] && "items" === arguments[1] && arguments[2] ? this.controlgroup.apply(this, [arguments[0], "items.button", arguments[2]]) : "option" === arguments[0] && "items" === arguments[1] ? this.controlgroup.apply(this, [arguments[0], "items.button"]) : ("object" == typeof arguments[0] && arguments[0].items && (arguments[0].items = {
            button: arguments[0].items
        }),
        this.controlgroup.apply(this, arguments))
    }
    );
    x.ui.button;
    x.widget("ui.dialog", {
        version: "1.13.1",
        options: {
            appendTo: "body",
            autoOpen: !0,
            buttons: [],
            classes: {
                "ui-dialog": "ui-corner-all",
                "ui-dialog-titlebar": "ui-corner-all"
            },
            closeOnEscape: !0,
            closeText: "Close",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: null,
            maxWidth: null,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center",
                at: "center",
                of: window,
                collision: "fit",
                using: function(t) {
                    var e = x(this).css(t).offset().top;
                    e < 0 && x(this).css("top", t.top - e)
                }
            },
            resizable: !0,
            show: null,
            title: null,
            width: 300,
            beforeClose: null,
            close: null,
            drag: null,
            dragStart: null,
            dragStop: null,
            focus: null,
            open: null,
            resize: null,
            resizeStart: null,
            resizeStop: null
        },
        sizeRelatedOptions: {
            buttons: !0,
            height: !0,
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0,
            width: !0
        },
        resizableRelatedOptions: {
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0
        },
        _create: function() {
            this.originalCss = {
                display: this.element[0].style.display,
                width: this.element[0].style.width,
                minHeight: this.element[0].style.minHeight,
                maxHeight: this.element[0].style.maxHeight,
                height: this.element[0].style.height
            },
            this.originalPosition = {
                parent: this.element.parent(),
                index: this.element.parent().children().index(this.element)
            },
            this.originalTitle = this.element.attr("title"),
            null == this.options.title && null != this.originalTitle && (this.options.title = this.originalTitle),
            this.options.disabled && (this.options.disabled = !1),
            this._createWrapper(),
            this.element.show().removeAttr("title").appendTo(this.uiDialog),
            this._addClass("ui-dialog-content", "ui-widget-content"),
            this._createTitlebar(),
            this._createButtonPane(),
            this.options.draggable && x.fn.draggable && this._makeDraggable(),
            this.options.resizable && x.fn.resizable && this._makeResizable(),
            this._isOpen = !1,
            this._trackFocus()
        },
        _init: function() {
            this.options.autoOpen && this.open()
        },
        _appendTo: function() {
            var t = this.options.appendTo;
            return t && (t.jquery || t.nodeType) ? x(t) : this.document.find(t || "body").eq(0)
        },
        _destroy: function() {
            var t, e = this.originalPosition;
            this._untrackInstance(),
            this._destroyOverlay(),
            this.element.removeUniqueId().css(this.originalCss).detach(),
            this.uiDialog.remove(),
            this.originalTitle && this.element.attr("title", this.originalTitle),
            (t = e.parent.children().eq(e.index)).length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element)
        },
        widget: function() {
            return this.uiDialog
        },
        disable: x.noop,
        enable: x.noop,
        close: function(t) {
            var e = this;
            this._isOpen && !1 !== this._trigger("beforeClose", t) && (this._isOpen = !1,
            this._focusedElement = null,
            this._destroyOverlay(),
            this._untrackInstance(),
            this.opener.filter(":focusable").trigger("focus").length || x.ui.safeBlur(x.ui.safeActiveElement(this.document[0])),
            this._hide(this.uiDialog, this.options.hide, function() {
                e._trigger("close", t)
            }))
        },
        isOpen: function() {
            return this._isOpen
        },
        moveToTop: function() {
            this._moveToTop()
        },
        _moveToTop: function(t, e) {
            var i = !1
              , s = this.uiDialog.siblings(".ui-front:visible").map(function() {
                return +x(this).css("z-index")
            }).get()
              , s = Math.max.apply(null, s);
            return s >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", s + 1),
            i = !0),
            i && !e && this._trigger("focus", t),
            i
        },
        open: function() {
            var t = this;
            this._isOpen ? this._moveToTop() && this._focusTabbable() : (this._isOpen = !0,
            this.opener = x(x.ui.safeActiveElement(this.document[0])),
            this._size(),
            this._position(),
            this._createOverlay(),
            this._moveToTop(null, !0),
            this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1),
            this._show(this.uiDialog, this.options.show, function() {
                t._focusTabbable(),
                t._trigger("focus")
            }),
            this._makeFocusTarget(),
            this._trigger("open"))
        },
        _focusTabbable: function() {
            var t = this._focusedElement;
            (t = !(t = !(t = !(t = !(t = t || this.element.find("[autofocus]")).length ? this.element.find(":tabbable") : t).length ? this.uiDialogButtonPane.find(":tabbable") : t).length ? this.uiDialogTitlebarClose.filter(":tabbable") : t).length ? this.uiDialog : t).eq(0).trigger("focus")
        },
        _restoreTabbableFocus: function() {
            var t = x.ui.safeActiveElement(this.document[0]);
            this.uiDialog[0] === t || x.contains(this.uiDialog[0], t) || this._focusTabbable()
        },
        _keepFocus: function(t) {
            t.preventDefault(),
            this._restoreTabbableFocus(),
            this._delay(this._restoreTabbableFocus)
        },
        _createWrapper: function() {
            this.uiDialog = x("<div>").hide().attr({
                tabIndex: -1,
                role: "dialog"
            }).appendTo(this._appendTo()),
            this._addClass(this.uiDialog, "ui-dialog", "ui-widget ui-widget-content ui-front"),
            this._on(this.uiDialog, {
                keydown: function(t) {
                    if (this.options.closeOnEscape && !t.isDefaultPrevented() && t.keyCode && t.keyCode === x.ui.keyCode.ESCAPE)
                        return t.preventDefault(),
                        void this.close(t);
                    var e, i, s;
                    t.keyCode !== x.ui.keyCode.TAB || t.isDefaultPrevented() || (e = this.uiDialog.find(":tabbable"),
                    i = e.first(),
                    s = e.last(),
                    t.target !== s[0] && t.target !== this.uiDialog[0] || t.shiftKey ? t.target !== i[0] && t.target !== this.uiDialog[0] || !t.shiftKey || (this._delay(function() {
                        s.trigger("focus")
                    }),
                    t.preventDefault()) : (this._delay(function() {
                        i.trigger("focus")
                    }),
                    t.preventDefault()))
                },
                mousedown: function(t) {
                    this._moveToTop(t) && this._focusTabbable()
                }
            }),
            this.element.find("[aria-describedby]").length || this.uiDialog.attr({
                "aria-describedby": this.element.uniqueId().attr("id")
            })
        },
        _createTitlebar: function() {
            var t;
            this.uiDialogTitlebar = x("<div>"),
            this._addClass(this.uiDialogTitlebar, "ui-dialog-titlebar", "ui-widget-header ui-helper-clearfix"),
            this._on(this.uiDialogTitlebar, {
                mousedown: function(t) {
                    x(t.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.trigger("focus")
                }
            }),
            this.uiDialogTitlebarClose = x("<button type='button'></button>").button({
                label: x("<a>").text(this.options.closeText).html(),
                icon: "ui-icon-closethick",
                showLabel: !1
            }).appendTo(this.uiDialogTitlebar),
            this._addClass(this.uiDialogTitlebarClose, "ui-dialog-titlebar-close"),
            this._on(this.uiDialogTitlebarClose, {
                click: function(t) {
                    t.preventDefault(),
                    this.close(t)
                }
            }),
            t = x("<span>").uniqueId().prependTo(this.uiDialogTitlebar),
            this._addClass(t, "ui-dialog-title"),
            this._title(t),
            this.uiDialogTitlebar.prependTo(this.uiDialog),
            this.uiDialog.attr({
                "aria-labelledby": t.attr("id")
            })
        },
        _title: function(t) {
            this.options.title ? t.text(this.options.title) : t.html("&#160;")
        },
        _createButtonPane: function() {
            this.uiDialogButtonPane = x("<div>"),
            this._addClass(this.uiDialogButtonPane, "ui-dialog-buttonpane", "ui-widget-content ui-helper-clearfix"),
            this.uiButtonSet = x("<div>").appendTo(this.uiDialogButtonPane),
            this._addClass(this.uiButtonSet, "ui-dialog-buttonset"),
            this._createButtons()
        },
        _createButtons: function() {
            var s = this
              , t = this.options.buttons;
            this.uiDialogButtonPane.remove(),
            this.uiButtonSet.empty(),
            x.isEmptyObject(t) || Array.isArray(t) && !t.length ? this._removeClass(this.uiDialog, "ui-dialog-buttons") : (x.each(t, function(t, e) {
                var i;
                e = x.extend({
                    type: "button"
                }, e = "function" == typeof e ? {
                    click: e,
                    text: t
                } : e),
                i = e.click,
                t = {
                    icon: e.icon,
                    iconPosition: e.iconPosition,
                    showLabel: e.showLabel,
                    icons: e.icons,
                    text: e.text
                },
                delete e.click,
                delete e.icon,
                delete e.iconPosition,
                delete e.showLabel,
                delete e.icons,
                "boolean" == typeof e.text && delete e.text,
                x("<button></button>", e).button(t).appendTo(s.uiButtonSet).on("click", function() {
                    i.apply(s.element[0], arguments)
                })
            }),
            this._addClass(this.uiDialog, "ui-dialog-buttons"),
            this.uiDialogButtonPane.appendTo(this.uiDialog))
        },
        _makeDraggable: function() {
            var o = this
              , n = this.options;
            function a(t) {
                return {
                    position: t.position,
                    offset: t.offset
                }
            }
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function(t, e) {
                    o._addClass(x(this), "ui-dialog-dragging"),
                    o._blockFrames(),
                    o._trigger("dragStart", t, a(e))
                },
                drag: function(t, e) {
                    o._trigger("drag", t, a(e))
                },
                stop: function(t, e) {
                    var i = e.offset.left - o.document.scrollLeft()
                      , s = e.offset.top - o.document.scrollTop();
                    n.position = {
                        my: "left top",
                        at: "left" + (0 <= i ? "+" : "") + i + " top" + (0 <= s ? "+" : "") + s,
                        of: o.window
                    },
                    o._removeClass(x(this), "ui-dialog-dragging"),
                    o._unblockFrames(),
                    o._trigger("dragStop", t, a(e))
                }
            })
        },
        _makeResizable: function() {
            var o = this
              , n = this.options
              , t = n.resizable
              , e = this.uiDialog.css("position")
              , t = "string" == typeof t ? t : "n,e,s,w,se,sw,ne,nw";
            function a(t) {
                return {
                    originalPosition: t.originalPosition,
                    originalSize: t.originalSize,
                    position: t.position,
                    size: t.size
                }
            }
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: n.maxWidth,
                maxHeight: n.maxHeight,
                minWidth: n.minWidth,
                minHeight: this._minHeight(),
                handles: t,
                start: function(t, e) {
                    o._addClass(x(this), "ui-dialog-resizing"),
                    o._blockFrames(),
                    o._trigger("resizeStart", t, a(e))
                },
                resize: function(t, e) {
                    o._trigger("resize", t, a(e))
                },
                stop: function(t, e) {
                    var i = o.uiDialog.offset()
                      , s = i.left - o.document.scrollLeft()
                      , i = i.top - o.document.scrollTop();
                    n.height = o.uiDialog.height(),
                    n.width = o.uiDialog.width(),
                    n.position = {
                        my: "left top",
                        at: "left" + (0 <= s ? "+" : "") + s + " top" + (0 <= i ? "+" : "") + i,
                        of: o.window
                    },
                    o._removeClass(x(this), "ui-dialog-resizing"),
                    o._unblockFrames(),
                    o._trigger("resizeStop", t, a(e))
                }
            }).css("position", e)
        },
        _trackFocus: function() {
            this._on(this.widget(), {
                focusin: function(t) {
                    this._makeFocusTarget(),
                    this._focusedElement = x(t.target)
                }
            })
        },
        _makeFocusTarget: function() {
            this._untrackInstance(),
            this._trackingInstances().unshift(this)
        },
        _untrackInstance: function() {
            var t = this._trackingInstances()
              , e = x.inArray(this, t);
            -1 !== e && t.splice(e, 1)
        },
        _trackingInstances: function() {
            var t = this.document.data("ui-dialog-instances");
            return t || this.document.data("ui-dialog-instances", t = []),
            t
        },
        _minHeight: function() {
            var t = this.options;
            return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height)
        },
        _position: function() {
            var t = this.uiDialog.is(":visible");
            t || this.uiDialog.show(),
            this.uiDialog.position(this.options.position),
            t || this.uiDialog.hide()
        },
        _setOptions: function(t) {
            var i = this
              , s = !1
              , o = {};
            x.each(t, function(t, e) {
                i._setOption(t, e),
                t in i.sizeRelatedOptions && (s = !0),
                t in i.resizableRelatedOptions && (o[t] = e)
            }),
            s && (this._size(),
            this._position()),
            this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", o)
        },
        _setOption: function(t, e) {
            var i, s = this.uiDialog;
            "disabled" !== t && (this._super(t, e),
            "appendTo" === t && this.uiDialog.appendTo(this._appendTo()),
            "buttons" === t && this._createButtons(),
            "closeText" === t && this.uiDialogTitlebarClose.button({
                label: x("<a>").text("" + this.options.closeText).html()
            }),
            "draggable" === t && ((i = s.is(":data(ui-draggable)")) && !e && s.draggable("destroy"),
            !i && e && this._makeDraggable()),
            "position" === t && this._position(),
            "resizable" === t && ((i = s.is(":data(ui-resizable)")) && !e && s.resizable("destroy"),
            i && "string" == typeof e && s.resizable("option", "handles", e),
            i || !1 === e || this._makeResizable()),
            "title" === t && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
        },
        _size: function() {
            var t, e, i, s = this.options;
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                maxHeight: "none",
                height: 0
            }),
            s.minWidth > s.width && (s.width = s.minWidth),
            t = this.uiDialog.css({
                height: "auto",
                width: s.width
            }).outerHeight(),
            e = Math.max(0, s.minHeight - t),
            i = "number" == typeof s.maxHeight ? Math.max(0, s.maxHeight - t) : "none",
            "auto" === s.height ? this.element.css({
                minHeight: e,
                maxHeight: i,
                height: "auto"
            }) : this.element.height(Math.max(0, s.height - t)),
            this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        },
        _blockFrames: function() {
            this.iframeBlocks = this.document.find("iframe").map(function() {
                var t = x(this);
                return x("<div>").css({
                    position: "absolute",
                    width: t.outerWidth(),
                    height: t.outerHeight()
                }).appendTo(t.parent()).offset(t.offset())[0]
            })
        },
        _unblockFrames: function() {
            this.iframeBlocks && (this.iframeBlocks.remove(),
            delete this.iframeBlocks)
        },
        _allowInteraction: function(t) {
            return !!x(t.target).closest(".ui-dialog").length || !!x(t.target).closest(".ui-datepicker").length
        },
        _createOverlay: function() {
            var i, s;
            this.options.modal && (i = x.fn.jquery.substring(0, 4),
            s = !0,
            this._delay(function() {
                s = !1
            }),
            this.document.data("ui-dialog-overlays") || this.document.on("focusin.ui-dialog", function(t) {
                var e;
                s || ((e = this._trackingInstances()[0])._allowInteraction(t) || (t.preventDefault(),
                e._focusTabbable(),
                "3.4." !== i && "3.5." !== i || e._delay(e._restoreTabbableFocus)))
            }
            .bind(this)),
            this.overlay = x("<div>").appendTo(this._appendTo()),
            this._addClass(this.overlay, null, "ui-widget-overlay ui-front"),
            this._on(this.overlay, {
                mousedown: "_keepFocus"
            }),
            this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1))
        },
        _destroyOverlay: function() {
            var t;
            this.options.modal && this.overlay && ((t = this.document.data("ui-dialog-overlays") - 1) ? this.document.data("ui-dialog-overlays", t) : (this.document.off("focusin.ui-dialog"),
            this.document.removeData("ui-dialog-overlays")),
            this.overlay.remove(),
            this.overlay = null)
        }
    }),
    !1 !== x.uiBackCompat && x.widget("ui.dialog", x.ui.dialog, {
        options: {
            dialogClass: ""
        },
        _createWrapper: function() {
            this._super(),
            this.uiDialog.addClass(this.options.dialogClass)
        },
        _setOption: function(t, e) {
            "dialogClass" === t && this.uiDialog.removeClass(this.options.dialogClass).addClass(e),
            this._superApply(arguments)
        }
    });
    x.ui.dialog,
    x.widget("ui.progressbar", {
        version: "1.13.1",
        options: {
            classes: {
                "ui-progressbar": "ui-corner-all",
                "ui-progressbar-value": "ui-corner-left",
                "ui-progressbar-complete": "ui-corner-right"
            },
            max: 100,
            value: 0,
            change: null,
            complete: null
        },
        min: 0,
        _create: function() {
            this.oldValue = this.options.value = this._constrainedValue(),
            this.element.attr({
                role: "progressbar",
                "aria-valuemin": this.min
            }),
            this._addClass("ui-progressbar", "ui-widget ui-widget-content"),
            this.valueDiv = x("<div>").appendTo(this.element),
            this._addClass(this.valueDiv, "ui-progressbar-value", "ui-widget-header"),
            this._refreshValue()
        },
        _destroy: function() {
            this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"),
            this.valueDiv.remove()
        },
        value: function(t) {
            if (void 0 === t)
                return this.options.value;
            this.options.value = this._constrainedValue(t),
            this._refreshValue()
        },
        _constrainedValue: function(t) {
            return void 0 === t && (t = this.options.value),
            this.indeterminate = !1 === t,
            "number" != typeof t && (t = 0),
            !this.indeterminate && Math.min(this.options.max, Math.max(this.min, t))
        },
        _setOptions: function(t) {
            var e = t.value;
            delete t.value,
            this._super(t),
            this.options.value = this._constrainedValue(e),
            this._refreshValue()
        },
        _setOption: function(t, e) {
            "max" === t && (e = Math.max(this.min, e)),
            this._super(t, e)
        },
        _setOptionDisabled: function(t) {
            this._super(t),
            this.element.attr("aria-disabled", t),
            this._toggleClass(null, "ui-state-disabled", !!t)
        },
        _percentage: function() {
            return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
        },
        _refreshValue: function() {
            var t = this.options.value
              , e = this._percentage();
            this.valueDiv.toggle(this.indeterminate || t > this.min).width(e.toFixed(0) + "%"),
            this._toggleClass(this.valueDiv, "ui-progressbar-complete", null, t === this.options.max)._toggleClass("ui-progressbar-indeterminate", null, this.indeterminate),
            this.indeterminate ? (this.element.removeAttr("aria-valuenow"),
            this.overlayDiv || (this.overlayDiv = x("<div>").appendTo(this.valueDiv),
            this._addClass(this.overlayDiv, "ui-progressbar-overlay"))) : (this.element.attr({
                "aria-valuemax": this.options.max,
                "aria-valuenow": t
            }),
            this.overlayDiv && (this.overlayDiv.remove(),
            this.overlayDiv = null)),
            this.oldValue !== t && (this.oldValue = t,
            this._trigger("change")),
            t === this.options.max && this._trigger("complete")
        }
    });
    var v = x
      , _ = {}
      , b = _.toString
      , y = /^([\-+])=\s*(\d+\.?\d*)/
      , w = [{
        re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
        parse: function(t) {
            return [t[1], t[2], t[3], t[4]]
        }
    }, {
        re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
        parse: function(t) {
            return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
        }
    }, {
        re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})?/,
        parse: function(t) {
            return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16), t[4] ? (parseInt(t[4], 16) / 255).toFixed(2) : 1]
        }
    }, {
        re: /#([a-f0-9])([a-f0-9])([a-f0-9])([a-f0-9])?/,
        parse: function(t) {
            return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16), t[4] ? (parseInt(t[4] + t[4], 16) / 255).toFixed(2) : 1]
        }
    }, {
        re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
        space: "hsla",
        parse: function(t) {
            return [t[1], t[2] / 100, t[3] / 100, t[4]]
        }
    }]
      , S = v.Color = function(t, e, i, s) {
        return new v.Color.fn.parse(t,e,i,s)
    }
      , H = {
        rgba: {
            props: {
                red: {
                    idx: 0,
                    type: "byte"
                },
                green: {
                    idx: 1,
                    type: "byte"
                },
                blue: {
                    idx: 2,
                    type: "byte"
                }
            }
        },
        hsla: {
            props: {
                hue: {
                    idx: 0,
                    type: "degrees"
                },
                saturation: {
                    idx: 1,
                    type: "percent"
                },
                lightness: {
                    idx: 2,
                    type: "percent"
                }
            }
        }
    }
      , E = {
        byte: {
            floor: !0,
            max: 255
        },
        percent: {
            max: 1
        },
        degrees: {
            mod: 360,
            floor: !0
        }
    }
      , W = S.support = {}
      , I = v("<p>")[0]
      , O = v.each;
    function M(t) {
        return null == t ? t + "" : "object" == typeof t ? _[b.call(t)] || "object" : typeof t
    }
    function R(t, e, i) {
        var s = E[e.type] || {};
        return null == t ? i || !e.def ? null : e.def : (t = s.floor ? ~~t : parseFloat(t),
        isNaN(t) ? e.def : s.mod ? (t + s.mod) % s.mod : Math.min(s.max, Math.max(0, t)))
    }
    function L(s) {
        var o = S()
          , n = o._rgba = [];
        return s = s.toLowerCase(),
        O(w, function(t, e) {
            var i = e.re.exec(s)
              , i = i && e.parse(i)
              , e = e.space || "rgba";
            if (i)
                return i = o[e](i),
                o[H[e].cache] = i[H[e].cache],
                n = o._rgba = i._rgba,
                !1
        }),
        n.length ? ("0,0,0,0" === n.join() && v.extend(n, K.transparent),
        o) : K[s]
    }
    function N(t, e, i) {
        return 6 * (i = (i + 1) % 1) < 1 ? t + (e - t) * i * 6 : 2 * i < 1 ? e : 3 * i < 2 ? t + (e - t) * (2 / 3 - i) * 6 : t
    }
    I.style.cssText = "background-color:rgba(1,1,1,.5)",
    W.rgba = -1 < I.style.backgroundColor.indexOf("rgba"),
    O(H, function(t, e) {
        e.cache = "_" + t,
        e.props.alpha = {
            idx: 3,
            type: "percent",
            def: 1
        }
    }),
    v.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
        _["[object " + e + "]"] = e.toLowerCase()
    }),
    (S.fn = v.extend(S.prototype, {
        parse: function(o, t, e, i) {
            if (void 0 === o)
                return this._rgba = [null, null, null, null],
                this;
            (o.jquery || o.nodeType) && (o = v(o).css(t),
            t = void 0);
            var n = this
              , s = M(o)
              , a = this._rgba = [];
            return void 0 !== t && (o = [o, t, e, i],
            s = "array"),
            "string" === s ? this.parse(L(o) || K._default) : "array" === s ? (O(H.rgba.props, function(t, e) {
                a[e.idx] = R(o[e.idx], e)
            }),
            this) : "object" === s ? (O(H, o instanceof S ? function(t, e) {
                o[e.cache] && (n[e.cache] = o[e.cache].slice())
            }
            : function(t, i) {
                var s = i.cache;
                O(i.props, function(t, e) {
                    if (!n[s] && i.to) {
                        if ("alpha" === t || null == o[t])
                            return;
                        n[s] = i.to(n._rgba)
                    }
                    n[s][e.idx] = R(o[t], e, !0)
                }),
                n[s] && v.inArray(null, n[s].slice(0, 3)) < 0 && (null == n[s][3] && (n[s][3] = 1),
                i.from && (n._rgba = i.from(n[s])))
            }
            ),
            this) : void 0
        },
        is: function(t) {
            var o = S(t)
              , n = !0
              , a = this;
            return O(H, function(t, e) {
                var i, s = o[e.cache];
                return s && (i = a[e.cache] || e.to && e.to(a._rgba) || [],
                O(e.props, function(t, e) {
                    if (null != s[e.idx])
                        return n = s[e.idx] === i[e.idx]
                })),
                n
            }),
            n
        },
        _space: function() {
            var i = []
              , s = this;
            return O(H, function(t, e) {
                s[e.cache] && i.push(t)
            }),
            i.pop()
        },
        transition: function(t, a) {
            var e = (h = S(t))._space()
              , i = H[e]
              , t = 0 === this.alpha() ? S("transparent") : this
              , r = t[i.cache] || i.to(t._rgba)
              , l = r.slice()
              , h = h[i.cache];
            return O(i.props, function(t, e) {
                var i = e.idx
                  , s = r[i]
                  , o = h[i]
                  , n = E[e.type] || {};
                null !== o && (null === s ? l[i] = o : (n.mod && (o - s > n.mod / 2 ? s += n.mod : s - o > n.mod / 2 && (s -= n.mod)),
                l[i] = R((o - s) * a + s, e)))
            }),
            this[e](l)
        },
        blend: function(t) {
            if (1 === this._rgba[3])
                return this;
            var e = this._rgba.slice()
              , i = e.pop()
              , s = S(t)._rgba;
            return S(v.map(e, function(t, e) {
                return (1 - i) * s[e] + i * t
            }))
        },
        toRgbaString: function() {
            var t = "rgba("
              , e = v.map(this._rgba, function(t, e) {
                return null != t ? t : 2 < e ? 1 : 0
            });
            return 1 === e[3] && (e.pop(),
            t = "rgb("),
            t + e.join() + ")"
        },
        toHslaString: function() {
            var t = "hsla("
              , e = v.map(this.hsla(), function(t, e) {
                return null == t && (t = 2 < e ? 1 : 0),
                t = e && e < 3 ? Math.round(100 * t) + "%" : t
            });
            return 1 === e[3] && (e.pop(),
            t = "hsl("),
            t + e.join() + ")"
        },
        toHexString: function(t) {
            var e = this._rgba.slice()
              , i = e.pop();
            return t && e.push(~~(255 * i)),
            "#" + v.map(e, function(t) {
                return 1 === (t = (t || 0).toString(16)).length ? "0" + t : t
            }).join("")
        },
        toString: function() {
            return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
        }
    })).parse.prototype = S.fn,
    H.hsla.to = function(t) {
        if (null == t[0] || null == t[1] || null == t[2])
            return [null, null, null, t[3]];
        var e = t[0] / 255
          , i = t[1] / 255
          , s = t[2] / 255
          , o = t[3]
          , n = Math.max(e, i, s)
          , a = Math.min(e, i, s)
          , r = n - a
          , l = n + a
          , t = .5 * l
          , i = a === n ? 0 : e === n ? 60 * (i - s) / r + 360 : i === n ? 60 * (s - e) / r + 120 : 60 * (e - i) / r + 240
          , l = 0 == r ? 0 : t <= .5 ? r / l : r / (2 - l);
        return [Math.round(i) % 360, l, t, null == o ? 1 : o]
    }
    ,
    H.hsla.from = function(t) {
        if (null == t[0] || null == t[1] || null == t[2])
            return [null, null, null, t[3]];
        var e = t[0] / 360
          , i = t[1]
          , s = t[2]
          , t = t[3]
          , i = s <= .5 ? s * (1 + i) : s + i - s * i
          , s = 2 * s - i;
        return [Math.round(255 * N(s, i, e + 1 / 3)), Math.round(255 * N(s, i, e)), Math.round(255 * N(s, i, e - 1 / 3)), t]
    }
    ,
    O(H, function(l, t) {
        var e = t.props
          , n = t.cache
          , a = t.to
          , r = t.from;
        S.fn[l] = function(t) {
            if (a && !this[n] && (this[n] = a(this._rgba)),
            void 0 === t)
                return this[n].slice();
            var i = M(t)
              , s = "array" === i || "object" === i ? t : arguments
              , o = this[n].slice();
            return O(e, function(t, e) {
                t = s["object" === i ? t : e.idx];
                null == t && (t = o[e.idx]),
                o[e.idx] = R(t, e)
            }),
            r ? ((t = S(r(o)))[n] = o,
            t) : S(o)
        }
        ,
        O(e, function(a, r) {
            S.fn[a] || (S.fn[a] = function(t) {
                var e, i = M(t), s = "alpha" === a ? this._hsla ? "hsla" : "rgba" : l, o = this[s](), n = o[r.idx];
                return "undefined" === i ? n : ("function" === i && (i = M(t = t.call(this, n))),
                null == t && r.empty ? this : ("string" === i && (e = y.exec(t)) && (t = n + parseFloat(e[2]) * ("+" === e[1] ? 1 : -1)),
                o[r.idx] = t,
                this[s](o)))
            }
            )
        })
    }),
    (S.hook = function(t) {
        t = t.split(" ");
        O(t, function(t, n) {
            v.cssHooks[n] = {
                set: function(t, e) {
                    var i, s, o = "";
                    if ("transparent" !== e && ("string" !== M(e) || (i = L(e)))) {
                        if (e = S(i || e),
                        !W.rgba && 1 !== e._rgba[3]) {
                            for (s = "backgroundColor" === n ? t.parentNode : t; ("" === o || "transparent" === o) && s && s.style; )
                                try {
                                    o = v.css(s, "backgroundColor"),
                                    s = s.parentNode
                                } catch (t) {}
                            e = e.blend(o && "transparent" !== o ? o : "_default")
                        }
                        e = e.toRgbaString()
                    }
                    try {
                        t.style[n] = e
                    } catch (t) {}
                }
            },
            v.fx.step[n] = function(t) {
                t.colorInit || (t.start = S(t.elem, n),
                t.end = S(t.end),
                t.colorInit = !0),
                v.cssHooks[n].set(t.elem, t.start.transition(t.end, t.pos))
            }
        })
    }
    )("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"),
    v.cssHooks.borderColor = {
        expand: function(i) {
            var s = {};
            return O(["Top", "Right", "Bottom", "Left"], function(t, e) {
                s["border" + e + "Color"] = i
            }),
            s
        }
    };
    var A, F, B, q, j, U, V, X, Y, $, K = v.Color.names = {
        aqua: "#00ffff",
        black: "#000000",
        blue: "#0000ff",
        fuchsia: "#ff00ff",
        gray: "#808080",
        green: "#008000",
        lime: "#00ff00",
        maroon: "#800000",
        navy: "#000080",
        olive: "#808000",
        purple: "#800080",
        red: "#ff0000",
        silver: "#c0c0c0",
        teal: "#008080",
        white: "#ffffff",
        yellow: "#ffff00",
        transparent: [null, null, null, 0],
        _default: "#ffffff"
    }, G = "ui-effects-", Q = "ui-effects-style", J = "ui-effects-animated";
    function Z(t) {
        var e, i, s = t.ownerDocument.defaultView ? t.ownerDocument.defaultView.getComputedStyle(t, null) : t.currentStyle, o = {};
        if (s && s.length && s[0] && s[s[0]])
            for (i = s.length; i--; )
                "string" == typeof s[e = s[i]] && (o[e.replace(/-([\da-z])/gi, function(t, e) {
                    return e.toUpperCase()
                })] = s[e]);
        else
            for (e in s)
                "string" == typeof s[e] && (o[e] = s[e]);
        return o
    }
    function tt(t, e, i, s) {
        return t = {
            effect: t = x.isPlainObject(t) ? (e = t).effect : t
        },
        "function" == typeof (e = null == e ? {} : e) && (s = e,
        i = null,
        e = {}),
        "number" != typeof e && !x.fx.speeds[e] || (s = i,
        i = e,
        e = {}),
        "function" == typeof i && (s = i,
        i = null),
        e && x.extend(t, e),
        i = i || e.duration,
        t.duration = x.fx.off ? 0 : "number" == typeof i ? i : i in x.fx.speeds ? x.fx.speeds[i] : x.fx.speeds._default,
        t.complete = s || e.complete,
        t
    }
    function et(t) {
        return !t || "number" == typeof t || x.fx.speeds[t] || ("string" == typeof t && !x.effects.effect[t] || ("function" == typeof t || "object" == typeof t && !t.effect))
    }
    function it(t, e) {
        var i = e.outerWidth()
          , e = e.outerHeight()
          , t = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/.exec(t) || ["", 0, i, e, 0];
        return {
            top: parseFloat(t[1]) || 0,
            right: "auto" === t[2] ? i : parseFloat(t[2]),
            bottom: "auto" === t[3] ? e : parseFloat(t[3]),
            left: parseFloat(t[4]) || 0
        }
    }
    x.effects = {
        effect: {}
    },
    q = ["add", "remove", "toggle"],
    j = {
        border: 1,
        borderBottom: 1,
        borderColor: 1,
        borderLeft: 1,
        borderRight: 1,
        borderTop: 1,
        borderWidth: 1,
        margin: 1,
        padding: 1
    },
    x.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(t, e) {
        x.fx.step[e] = function(t) {
            ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (v.style(t.elem, e, t.end),
            t.setAttr = !0)
        }
    }),
    x.fn.addBack || (x.fn.addBack = function(t) {
        return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
    }
    ),
    x.effects.animateClass = function(o, t, e, i) {
        var n = x.speed(t, e, i);
        return this.queue(function() {
            var i = x(this)
              , t = i.attr("class") || ""
              , e = (e = n.children ? i.find("*").addBack() : i).map(function() {
                return {
                    el: x(this),
                    start: Z(this)
                }
            })
              , s = function() {
                x.each(q, function(t, e) {
                    o[e] && i[e + "Class"](o[e])
                })
            };
            s(),
            e = e.map(function() {
                return this.end = Z(this.el[0]),
                this.diff = function(t, e) {
                    var i, s, o = {};
                    for (i in e)
                        s = e[i],
                        t[i] !== s && (j[i] || !x.fx.step[i] && isNaN(parseFloat(s)) || (o[i] = s));
                    return o
                }(this.start, this.end),
                this
            }),
            i.attr("class", t),
            e = e.map(function() {
                var t = this
                  , e = x.Deferred()
                  , i = x.extend({}, n, {
                    queue: !1,
                    complete: function() {
                        e.resolve(t)
                    }
                });
                return this.el.animate(this.diff, i),
                e.promise()
            }),
            x.when.apply(x, e.get()).done(function() {
                s(),
                x.each(arguments, function() {
                    var e = this.el;
                    x.each(this.diff, function(t) {
                        e.css(t, "")
                    })
                }),
                n.complete.call(i[0])
            })
        })
    }
    ,
    x.fn.extend({
        addClass: (B = x.fn.addClass,
        function(t, e, i, s) {
            return e ? x.effects.animateClass.call(this, {
                add: t
            }, e, i, s) : B.apply(this, arguments)
        }
        ),
        removeClass: (F = x.fn.removeClass,
        function(t, e, i, s) {
            return 1 < arguments.length ? x.effects.animateClass.call(this, {
                remove: t
            }, e, i, s) : F.apply(this, arguments)
        }
        ),
        toggleClass: (A = x.fn.toggleClass,
        function(t, e, i, s, o) {
            return "boolean" == typeof e || void 0 === e ? i ? x.effects.animateClass.call(this, e ? {
                add: t
            } : {
                remove: t
            }, i, s, o) : A.apply(this, arguments) : x.effects.animateClass.call(this, {
                toggle: t
            }, e, i, s)
        }
        ),
        switchClass: function(t, e, i, s, o) {
            return x.effects.animateClass.call(this, {
                add: e,
                remove: t
            }, i, s, o)
        }
    }),
    x.expr && x.expr.pseudos && x.expr.pseudos.animated && (x.expr.pseudos.animated = (U = x.expr.pseudos.animated,
    function(t) {
        return !!x(t).data(J) || U(t)
    }
    )),
    !1 !== x.uiBackCompat && x.extend(x.effects, {
        save: function(t, e) {
            for (var i = 0, s = e.length; i < s; i++)
                null !== e[i] && t.data(G + e[i], t[0].style[e[i]])
        },
        restore: function(t, e) {
            for (var i, s = 0, o = e.length; s < o; s++)
                null !== e[s] && (i = t.data(G + e[s]),
                t.css(e[s], i))
        },
        setMode: function(t, e) {
            return e = "toggle" === e ? t.is(":hidden") ? "show" : "hide" : e
        },
        createWrapper: function(i) {
            if (i.parent().is(".ui-effects-wrapper"))
                return i.parent();
            var s = {
                width: i.outerWidth(!0),
                height: i.outerHeight(!0),
                float: i.css("float")
            }
              , t = x("<div></div>").addClass("ui-effects-wrapper").css({
                fontSize: "100%",
                background: "transparent",
                border: "none",
                margin: 0,
                padding: 0
            })
              , e = {
                width: i.width(),
                height: i.height()
            }
              , o = document.activeElement;
            try {
                o.id
            } catch (t) {
                o = document.body
            }
            return i.wrap(t),
            i[0] !== o && !x.contains(i[0], o) || x(o).trigger("focus"),
            t = i.parent(),
            "static" === i.css("position") ? (t.css({
                position: "relative"
            }),
            i.css({
                position: "relative"
            })) : (x.extend(s, {
                position: i.css("position"),
                zIndex: i.css("z-index")
            }),
            x.each(["top", "left", "bottom", "right"], function(t, e) {
                s[e] = i.css(e),
                isNaN(parseInt(s[e], 10)) && (s[e] = "auto")
            }),
            i.css({
                position: "relative",
                top: 0,
                left: 0,
                right: "auto",
                bottom: "auto"
            })),
            i.css(e),
            t.css(s).show()
        },
        removeWrapper: function(t) {
            var e = document.activeElement;
            return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t),
            t[0] !== e && !x.contains(t[0], e) || x(e).trigger("focus")),
            t
        }
    }),
    x.extend(x.effects, {
        version: "1.13.1",
        define: function(t, e, i) {
            return i || (i = e,
            e = "effect"),
            x.effects.effect[t] = i,
            x.effects.effect[t].mode = e,
            i
        },
        scaledDimensions: function(t, e, i) {
            if (0 === e)
                return {
                    height: 0,
                    width: 0,
                    outerHeight: 0,
                    outerWidth: 0
                };
            var s = "horizontal" !== i ? (e || 100) / 100 : 1
              , e = "vertical" !== i ? (e || 100) / 100 : 1;
            return {
                height: t.height() * e,
                width: t.width() * s,
                outerHeight: t.outerHeight() * e,
                outerWidth: t.outerWidth() * s
            }
        },
        clipToBox: function(t) {
            return {
                width: t.clip.right - t.clip.left,
                height: t.clip.bottom - t.clip.top,
                left: t.clip.left,
                top: t.clip.top
            }
        },
        unshift: function(t, e, i) {
            var s = t.queue();
            1 < e && s.splice.apply(s, [1, 0].concat(s.splice(e, i))),
            t.dequeue()
        },
        saveStyle: function(t) {
            t.data(Q, t[0].style.cssText)
        },
        restoreStyle: function(t) {
            t[0].style.cssText = t.data(Q) || "",
            t.removeData(Q)
        },
        mode: function(t, e) {
            t = t.is(":hidden");
            return "toggle" === e && (e = t ? "show" : "hide"),
            e = (t ? "hide" === e : "show" === e) ? "none" : e
        },
        getBaseline: function(t, e) {
            var i, s;
            switch (t[0]) {
            case "top":
                i = 0;
                break;
            case "middle":
                i = .5;
                break;
            case "bottom":
                i = 1;
                break;
            default:
                i = t[0] / e.height
            }
            switch (t[1]) {
            case "left":
                s = 0;
                break;
            case "center":
                s = .5;
                break;
            case "right":
                s = 1;
                break;
            default:
                s = t[1] / e.width
            }
            return {
                x: s,
                y: i
            }
        },
        createPlaceholder: function(t) {
            var e, i = t.css("position"), s = t.position();
            return t.css({
                marginTop: t.css("marginTop"),
                marginBottom: t.css("marginBottom"),
                marginLeft: t.css("marginLeft"),
                marginRight: t.css("marginRight")
            }).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()),
            /^(static|relative)/.test(i) && (i = "absolute",
            e = x("<" + t[0].nodeName + ">").insertAfter(t).css({
                display: /^(inline|ruby)/.test(t.css("display")) ? "inline-block" : "block",
                visibility: "hidden",
                marginTop: t.css("marginTop"),
                marginBottom: t.css("marginBottom"),
                marginLeft: t.css("marginLeft"),
                marginRight: t.css("marginRight"),
                float: t.css("float")
            }).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).addClass("ui-effects-placeholder"),
            t.data(G + "placeholder", e)),
            t.css({
                position: i,
                left: s.left,
                top: s.top
            }),
            e
        },
        removePlaceholder: function(t) {
            var e = G + "placeholder"
              , i = t.data(e);
            i && (i.remove(),
            t.removeData(e))
        },
        cleanUp: function(t) {
            x.effects.restoreStyle(t),
            x.effects.removePlaceholder(t)
        },
        setTransition: function(s, t, o, n) {
            return n = n || {},
            x.each(t, function(t, e) {
                var i = s.cssUnit(e);
                0 < i[0] && (n[e] = i[0] * o + i[1])
            }),
            n
        }
    }),
    x.fn.extend({
        effect: function() {
            function t(t) {
                var e = x(this)
                  , i = x.effects.mode(e, r) || n;
                e.data(J, !0),
                l.push(i),
                n && ("show" === i || i === n && "hide" === i) && e.show(),
                n && "none" === i || x.effects.saveStyle(e),
                "function" == typeof t && t()
            }
            var s = tt.apply(this, arguments)
              , o = x.effects.effect[s.effect]
              , n = o.mode
              , e = s.queue
              , i = e || "fx"
              , a = s.complete
              , r = s.mode
              , l = [];
            return x.fx.off || !o ? r ? this[r](s.duration, a) : this.each(function() {
                a && a.call(this)
            }) : !1 === e ? this.each(t).each(h) : this.queue(i, t).queue(i, h);
            function h(t) {
                var e = x(this);
                function i() {
                    "function" == typeof a && a.call(e[0]),
                    "function" == typeof t && t()
                }
                s.mode = l.shift(),
                !1 === x.uiBackCompat || n ? "none" === s.mode ? (e[r](),
                i()) : o.call(e[0], s, function() {
                    e.removeData(J),
                    x.effects.cleanUp(e),
                    "hide" === s.mode && e.hide(),
                    i()
                }) : (e.is(":hidden") ? "hide" === r : "show" === r) ? (e[r](),
                i()) : o.call(e[0], s, i)
            }
        },
        show: (Y = x.fn.show,
        function(t) {
            if (et(t))
                return Y.apply(this, arguments);
            t = tt.apply(this, arguments);
            return t.mode = "show",
            this.effect.call(this, t)
        }
        ),
        hide: (X = x.fn.hide,
        function(t) {
            if (et(t))
                return X.apply(this, arguments);
            t = tt.apply(this, arguments);
            return t.mode = "hide",
            this.effect.call(this, t)
        }
        ),
        toggle: (V = x.fn.toggle,
        function(t) {
            if (et(t) || "boolean" == typeof t)
                return V.apply(this, arguments);
            t = tt.apply(this, arguments);
            return t.mode = "toggle",
            this.effect.call(this, t)
        }
        ),
        cssUnit: function(t) {
            var i = this.css(t)
              , s = [];
            return x.each(["em", "px", "%", "pt"], function(t, e) {
                0 < i.indexOf(e) && (s = [parseFloat(i), e])
            }),
            s
        },
        cssClip: function(t) {
            return t ? this.css("clip", "rect(" + t.top + "px " + t.right + "px " + t.bottom + "px " + t.left + "px)") : it(this.css("clip"), this)
        },
        transfer: function(t, e) {
            var i = x(this)
              , s = x(t.to)
              , o = "fixed" === s.css("position")
              , n = x("body")
              , a = o ? n.scrollTop() : 0
              , r = o ? n.scrollLeft() : 0
              , n = s.offset()
              , n = {
                top: n.top - a,
                left: n.left - r,
                height: s.innerHeight(),
                width: s.innerWidth()
            }
              , s = i.offset()
              , l = x("<div class='ui-effects-transfer'></div>");
            l.appendTo("body").addClass(t.className).css({
                top: s.top - a,
                left: s.left - r,
                height: i.innerHeight(),
                width: i.innerWidth(),
                position: o ? "fixed" : "absolute"
            }).animate(n, t.duration, t.easing, function() {
                l.remove(),
                "function" == typeof e && e()
            })
        }
    }),
    x.fx.step.clip = function(t) {
        t.clipInit || (t.start = x(t.elem).cssClip(),
        "string" == typeof t.end && (t.end = it(t.end, t.elem)),
        t.clipInit = !0),
        x(t.elem).cssClip({
            top: t.pos * (t.end.top - t.start.top) + t.start.top,
            right: t.pos * (t.end.right - t.start.right) + t.start.right,
            bottom: t.pos * (t.end.bottom - t.start.bottom) + t.start.bottom,
            left: t.pos * (t.end.left - t.start.left) + t.start.left
        })
    }
    ,
    $ = {},
    x.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(e, t) {
        $[t] = function(t) {
            return Math.pow(t, e + 2)
        }
    }),
    x.extend($, {
        Sine: function(t) {
            return 1 - Math.cos(t * Math.PI / 2)
        },
        Circ: function(t) {
            return 1 - Math.sqrt(1 - t * t)
        },
        Elastic: function(t) {
            return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
        },
        Back: function(t) {
            return t * t * (3 * t - 2)
        },
        Bounce: function(t) {
            for (var e, i = 4; t < ((e = Math.pow(2, --i)) - 1) / 11; )
                ;
            return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
        }
    }),
    x.each($, function(t, e) {
        x.easing["easeIn" + t] = e,
        x.easing["easeOut" + t] = function(t) {
            return 1 - e(1 - t)
        }
        ,
        x.easing["easeInOut" + t] = function(t) {
            return t < .5 ? e(2 * t) / 2 : 1 - e(-2 * t + 2) / 2
        }
    });
    x.effects,
    x.effects.define("blind", "hide", function(t, e) {
        var i = {
            up: ["bottom", "top"],
            vertical: ["bottom", "top"],
            down: ["top", "bottom"],
            left: ["right", "left"],
            horizontal: ["right", "left"],
            right: ["left", "right"]
        }
          , s = x(this)
          , o = t.direction || "up"
          , n = s.cssClip()
          , a = {
            clip: x.extend({}, n)
        }
          , r = x.effects.createPlaceholder(s);
        a.clip[i[o][0]] = a.clip[i[o][1]],
        "show" === t.mode && (s.cssClip(a.clip),
        r && r.css(x.effects.clipToBox(a)),
        a.clip = n),
        r && r.animate(x.effects.clipToBox(a), t.duration, t.easing),
        s.animate(a, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: e
        })
    }),
    x.effects.define("fade", "toggle", function(t, e) {
        var i = "show" === t.mode;
        x(this).css("opacity", i ? 0 : 1).animate({
            opacity: i ? 1 : 0
        }, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: e
        })
    }),
    x.effects.define("highlight", "show", function(t, e) {
        var i = x(this)
          , s = {
            backgroundColor: i.css("backgroundColor")
        };
        "hide" === t.mode && (s.opacity = 0),
        x.effects.saveStyle(i),
        i.css({
            backgroundImage: "none",
            backgroundColor: t.color || "#ffff99"
        }).animate(s, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: e
        })
    }),
    x.effects.define("pulsate", "show", function(t, e) {
        var i = x(this)
          , s = t.mode
          , o = "show" === s
          , n = 2 * (t.times || 5) + (o || "hide" === s ? 1 : 0)
          , a = t.duration / n
          , r = 0
          , l = 1
          , s = i.queue().length;
        for (!o && i.is(":visible") || (i.css("opacity", 0).show(),
        r = 1); l < n; l++)
            i.animate({
                opacity: r
            }, a, t.easing),
            r = 1 - r;
        i.animate({
            opacity: r
        }, a, t.easing),
        i.queue(e),
        x.effects.unshift(i, s, 1 + n)
    }),
    x.effects.define("size", function(s, e) {
        var o, i = x(this), t = ["fontSize"], n = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"], a = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"], r = s.mode, l = "effect" !== r, h = s.scale || "both", u = s.origin || ["middle", "center"], c = i.css("position"), p = i.position(), d = x.effects.scaledDimensions(i), f = s.from || d, m = s.to || x.effects.scaledDimensions(i, 0);
        x.effects.createPlaceholder(i),
        "show" === r && (r = f,
        f = m,
        m = r),
        o = {
            from: {
                y: f.height / d.height,
                x: f.width / d.width
            },
            to: {
                y: m.height / d.height,
                x: m.width / d.width
            }
        },
        "box" !== h && "both" !== h || (o.from.y !== o.to.y && (f = x.effects.setTransition(i, n, o.from.y, f),
        m = x.effects.setTransition(i, n, o.to.y, m)),
        o.from.x !== o.to.x && (f = x.effects.setTransition(i, a, o.from.x, f),
        m = x.effects.setTransition(i, a, o.to.x, m))),
        "content" !== h && "both" !== h || o.from.y !== o.to.y && (f = x.effects.setTransition(i, t, o.from.y, f),
        m = x.effects.setTransition(i, t, o.to.y, m)),
        u && (u = x.effects.getBaseline(u, d),
        f.top = (d.outerHeight - f.outerHeight) * u.y + p.top,
        f.left = (d.outerWidth - f.outerWidth) * u.x + p.left,
        m.top = (d.outerHeight - m.outerHeight) * u.y + p.top,
        m.left = (d.outerWidth - m.outerWidth) * u.x + p.left),
        delete f.outerHeight,
        delete f.outerWidth,
        i.css(f),
        "content" !== h && "both" !== h || (n = n.concat(["marginTop", "marginBottom"]).concat(t),
        a = a.concat(["marginLeft", "marginRight"]),
        i.find("*[width]").each(function() {
            var t = x(this)
              , e = x.effects.scaledDimensions(t)
              , i = {
                height: e.height * o.from.y,
                width: e.width * o.from.x,
                outerHeight: e.outerHeight * o.from.y,
                outerWidth: e.outerWidth * o.from.x
            }
              , e = {
                height: e.height * o.to.y,
                width: e.width * o.to.x,
                outerHeight: e.height * o.to.y,
                outerWidth: e.width * o.to.x
            };
            o.from.y !== o.to.y && (i = x.effects.setTransition(t, n, o.from.y, i),
            e = x.effects.setTransition(t, n, o.to.y, e)),
            o.from.x !== o.to.x && (i = x.effects.setTransition(t, a, o.from.x, i),
            e = x.effects.setTransition(t, a, o.to.x, e)),
            l && x.effects.saveStyle(t),
            t.css(i),
            t.animate(e, s.duration, s.easing, function() {
                l && x.effects.restoreStyle(t)
            })
        })),
        i.animate(m, {
            queue: !1,
            duration: s.duration,
            easing: s.easing,
            complete: function() {
                var t = i.offset();
                0 === m.opacity && i.css("opacity", f.opacity),
                l || (i.css("position", "static" === c ? "relative" : c).offset(t),
                x.effects.saveStyle(i)),
                e()
            }
        })
    }),
    x.effects.define("slide", "show", function(t, e) {
        var i, s, o = x(this), n = {
            up: ["bottom", "top"],
            down: ["top", "bottom"],
            left: ["right", "left"],
            right: ["left", "right"]
        }, a = t.mode, r = t.direction || "left", l = "up" === r || "down" === r ? "top" : "left", h = "up" === r || "left" === r, u = t.distance || o["top" == l ? "outerHeight" : "outerWidth"](!0), c = {};
        x.effects.createPlaceholder(o),
        i = o.cssClip(),
        s = o.position()[l],
        c[l] = (h ? -1 : 1) * u + s,
        c.clip = o.cssClip(),
        c.clip[n[r][1]] = c.clip[n[r][0]],
        "show" === a && (o.cssClip(c.clip),
        o.css(l, c[l]),
        c.clip = i,
        c[l] = s),
        o.animate(c, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: e
        })
    })
});
/*!
 * jQuery UI Touch Punch 0.2.3
 *
 * Copyright 2011?2014, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 */
(function(c) {
    c.support.touch = "ontouchend"in document;
    if (!c.support.touch) {
        return
    }
    var b = c.ui.mouse.prototype, f = b._mouseInit, g = b._mouseDestroy, e, d, i, h;
    function a(k, l) {
        if (k.originalEvent.touches.length > 1) {
            return
        }
        k.preventDefault();
        var m = k.originalEvent.changedTouches[0]
          , j = document.createEvent("MouseEvents");
        j.initMouseEvent(l, true, true, window, 1, m.screenX, m.screenY, m.clientX, m.clientY, false, false, false, false, 0, null);
        k.target.dispatchEvent(j)
    }
    b._touchStart = function(k) {
        var j = this;
        if (i || !j._mouseCapture(k.originalEvent.changedTouches[0])) {
            return
        }
        i = true;
        h = false;
        e = k.originalEvent.touches[0].screenX;
        d = k.originalEvent.touches[0].screenY;
        a(k, "mouseover");
        a(k, "mousemove");
        a(k, "mousedown")
    }
    ;
    b._touchMove = function(l) {
        if (!i) {
            return
        }
        var k = l.originalEvent.touches[0].screenX
          , j = l.originalEvent.touches[0].screenY;
        if (e >= k - 2 && e <= k + 2 && d >= j - 2 && d <= j + 2) {
            h = false;
            return
        }
        h = true;
        a(l, "mousemove")
    }
    ;
    b._touchEnd = function(j) {
        if (!i) {
            return
        }
        a(j, "mouseup");
        a(j, "mouseout");
        if (!h) {
            a(j, "click")
        }
        i = false
    }
    ;
    b._mouseInit = function() {
        var j = this;
        j.element.bind({
            touchstart: c.proxy(j, "_touchStart"),
            touchmove: c.proxy(j, "_touchMove"),
            touchend: c.proxy(j, "_touchEnd")
        });
        f.call(j)
    }
    ;
    b._mouseDestroy = function() {
        var j = this;
        j.element.unbind({
            touchstart: c.proxy(j, "_touchStart"),
            touchmove: c.proxy(j, "_touchMove"),
            touchend: c.proxy(j, "_touchEnd")
        });
        g.call(j)
    }
}
)(jQuery);

$.ui.dialog.prototype.options.responsive = true;
$.ui.dialog.prototype.options.scaleH = 0.9;
$.ui.dialog.prototype.options.scaleW = 1;

// extend _init
var _init = $.ui.dialog.prototype._init;
$.ui.dialog.prototype._init = function() {
    var self = this;

    // apply original arguments
    _init.apply(this, arguments);

}
;
// end _init

// extend open function
var _open = $.ui.dialog.prototype.open;
$.ui.dialog.prototype.open = function() {
    var self = this;

    // apply original arguments
    _open.apply(this, arguments);

    // get dialog original size on open
    var oHeight = self.element.parent().outerHeight()
      , oWidth = self.element.parent().outerWidth();

    // responsive width & height
    var resize = function() {

        if (self.options.responsive === true) {
            var elem = self.element
              , wHeight = $(window).height()
              , wWidth = $(window).width()
              , dHeight = elem.parent().outerHeight()
              , dWidth = elem.parent().outerWidth()
              , setHeight = Math.min(wHeight * self.options.scaleH, oHeight)
              , setWidth = Math.min(wWidth * self.options.scaleW, oWidth);
            elem.dialog("option", "height", setHeight).parent().css("max-height", setHeight);
            elem.dialog("option", "width", setWidth).parent().css("max-width", setWidth);
            elem.dialog("option", "position", {
                my: "center",
                at: "center",
                of: window
            });
            elem.css("overflow", "auto");
        }

    };

    // call resize()
    resize();

    // resize on window resize
    $(window).on("resize", resize);

    self.element.on('dialogclose', function() {
        $(window).off("resize", resize);
    });

    // resize on orientation change
    window.addEventListener("orientationchange", function() {
        resize();
    });

}
;
//end open
;var c_cache = []
  , dle_poll_voted = []
  , file_uploaders = [];
function reload() {
    var e = (new Date).getTime();
    document.getElementById("dle-captcha").innerHTML = '<img src="' + dle_root + "engine/modules/antibot/antibot.php?rndval=" + e + '" width="160" height="80" alt="" />'
}
function dle_change_sort(e, t) {
    var o = document.getElementById("news_set_sort");
    return o.dlenewssortby.value = e,
    o.dledirection.value = t,
    o.submit(),
    !1
}
function doPoll(e, t) {
    var o = document.getElementById("dlepollform_" + t)
      , n = o.status.value
      , i = "";
    if (1 != dle_poll_voted[t]) {
        if ("results" != e && 1 != n) {
            for (var d = 0; d < o.elements.length; d++) {
                var l = o.elements[d];
                if ("radio" == l.type && 1 == l.checked) {
                    i = l.value;
                    break
                }
                "checkbox" == l.type && 1 == l.checked && (i = i + l.value + " ")
            }
            if ("vote" == e && "" == i)
                return;
            dle_poll_voted[t] = 1
        } else
            n = 1,
            o.status.value = 1;
        1 == n && "vote" == e && (n = 0,
        o.status.value = 0,
        e = "list"),
        ShowLoading(""),
        $.post(dle_root + "engine/ajax/controller.php?mod=poll", {
            news_id: t,
            action: e,
            answer: i,
            dle_skin: dle_skin,
            user_hash: dle_login_hash
        }, function(e) {
            HideLoading(""),
            $("#dle-poll-list-" + t).fadeOut(500, function() {
                $(this).html(e),
                $(this).fadeIn(500)
            })
        })
    }
}
function IPMenu(e, t, o, n) {
    var i = [];
    return i[0] = '<a href="https://www.nic.ru/whois/?searchWord=' + e + '" target="_blank">' + t + "</a>",
    i[1] = '<a href="' + dle_root + dle_admin + "?mod=iptools&ip=" + e + '" target="_blank">' + o + "</a>",
    i[2] = '<a href="' + dle_root + dle_admin + "?mod=blockip&ip=" + e + '" target="_blank">' + n + "</a>",
    i
}
function ajax_save_for_edit(e, t) {
    var o = {};
    return "2" == quick_wysiwyg && tinyMCE.triggerSave(),
    $.each($("#ajaxnews" + e).serializeArray(), function(e, t) {
        o[t.name] = t.value
    }),
    o.id = e,
    o.field = t,
    o.action = "save",
    o.user_hash = dle_login_hash,
    ShowLoading(""),
    $.post(dle_root + "engine/ajax/controller.php?mod=editnews", o, function(e) {
        HideLoading(""),
        "ok" != e ? DLEalert(e, dle_info) : ($("#dlepopup-news-edit").dialog("close"),
        DLEconfirm(dle_save_ok, dle_confirm, function() {
            location.reload(!0)
        }))
    }),
    !1
}
function ajax_prep_for_edit(d, l) {
    for (var e = 0, t = c_cache.length; e < t; e++)
        e in c_cache && (!c_cache[e] && "" == c_cache[e] || ajax_cancel_comm_edit(e));
    return ShowLoading(""),
    $.get(dle_root + "engine/ajax/controller.php?mod=editnews", {
        id: d,
        field: l,
        action: "edit"
    }, function(e) {
        HideLoading("");
        var o = "none";
        $("#modal-overlay").remove(),
        $("body").prepend('<div id="modal-overlay" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: #666666; opacity: .40;filter:Alpha(Opacity=40); z-index: 980; display:none;"></div>'),
        $("#modal-overlay").css({
            filter: "alpha(opacity=40)"
        }).fadeIn();
        var t = {};
        t[dle_act_lang[3]] = function() {
            $(this).dialog("close")
        }
        ,
        t[dle_act_lang[4]] = function() {
            ajax_save_for_edit(d, l)
        }
        ,
        $("#dlepopup-news-edit").remove(),
        $("body").prepend("<div id='dlepopup-news-edit' class='dlepopupnewsedit' title='" + menu_short + "' style='display:none'></div>"),
        $(".dlepopupnewsedit").html("");
        var n = .9 * $(window).height()
          , i = .9 * $(window).width();
        1024 < i && (i = 1024),
        $("#dlepopup-news-edit").dialog({
            autoOpen: !0,
            width: i,
            height: n,
            buttons: t,
            resizable: !1,
            dialogClass: "modalfixed dle-popup-quickedit",
            dragStart: function(e, t) {
                o = $(".modalfixed").css("box-shadow"),
                $(".modalfixed").css("box-shadow", "none")
            },
            dragStop: function(e, t) {
                $(".modalfixed").css("box-shadow", o)
            },
            close: function(e, t) {
                $(this).dialog("destroy"),
                $("#modal-overlay").fadeOut(function() {
                    $("#modal-overlay").remove()
                })
            }
        }),
        830 < $(window).width() && 530 < $(window).height() && ($(".modalfixed.ui-dialog").css({
            position: "fixed"
        }),
        $("#dlepopup-news-edit").dialog("option", "position", {
            my: "center",
            at: "center",
            of: window
        })),
        $("#dlepopup-news-edit").css({
            overflow: "auto"
        }),
        $("#dlepopup-news-edit").css({
            "overflow-x": "hidden"
        }),
        $("#dlepopup-news-edit").html(e)
    }, "html"),
    !1
}
function ajax_comm_edit(t, e) {
    for (var o = 0, n = c_cache.length; o < n; o++)
        o in c_cache && "" != c_cache[o] && ajax_cancel_comm_edit(o);
    return c_cache[t] && "" != c_cache[t] || (c_cache[t] = $("#comm-id-" + t).html()),
    ShowLoading(""),
    $.get(dle_root + "engine/ajax/controller.php?mod=editcomments", {
        id: t,
        area: e,
        action: "edit"
    }, function(e) {
        HideLoading(""),
        $("#comm-id-" + t).html(e),
        setTimeout(function() {
            $("html,body").stop().animate({
                scrollTop: $("#comm-id-" + t).offset().top - 100
            }, 700)
        }, 600)
    }, "html"),
    !1
}
function ajax_cancel_comm_edit(e) {
    return "" != c_cache[e] && $("#comm-id-" + e).html(c_cache[e]),
    c_cache[e] = "",
    !1
}
function ajax_save_comm_edit(t, e) {
    "2" == dle_wysiwyg && tinyMCE.triggerSave();
    var o = $("#dleeditcomments" + t).val();
    return ShowLoading(""),
    $.post(dle_root + "engine/ajax/controller.php?mod=editcomments", {
        id: t,
        comm_txt: o,
        area: e,
        action: "save",
        user_hash: dle_login_hash
    }, function(e) {
        HideLoading(""),
        c_cache[t] = "",
        $("#comm-id-" + t).html(e)
    }),
    !1
}
function DeleteComments(e, t) {
    DLEconfirm(dle_del_agree, dle_confirm, function() {
        ShowLoading(""),
        $.get(dle_root + "engine/ajax/controller.php?mod=deletecomments", {
            id: e,
            dle_allow_hash: t
        }, function(e) {
            var t;
            HideLoading(""),
            e = parseInt(e),
            isNaN(e) || (t = null,
            t = "1" == dle_tree_comm ? $("#comments-tree-item-" + e) : $("#comment-id-" + e),
            $("html,body").stop().animate({
                scrollTop: t.offset().top - 70
            }, 700),
            setTimeout(function() {
                t.hide("blind", {}, 1400)
            }, 700))
        })
    })
}
function MarkSpam(e, t) {
    DLEconfirm(dle_spam_agree, dle_confirm, function() {
        ShowLoading(""),
        $.get(dle_root + "engine/ajax/controller.php?mod=adminfunction", {
            id: e,
            action: "commentsspam",
            user_hash: t
        }, function(e) {
            HideLoading(""),
            "error" != e && DLEconfirm(e, dle_confirm, function() {
                location.reload(!0)
            })
        })
    })
}
function doFavorites(t, e, o) {
    return ShowLoading(""),
    $.get(dle_root + "engine/ajax/controller.php?mod=favorites", {
        fav_id: t,
        action: e,
        skin: dle_skin,
        alert: o,
        user_hash: dle_login_hash
    }, function(e) {
        HideLoading(""),
        e.success ? o ? DLEalert(e.content, dle_info) : $("#fav-id-" + t).html(e.content) : e.error && DLEalert(e.content, dle_info)
    }, "json"),
    !1
}
function CheckLogin() {
    var e = document.getElementById("name").value;
    return ShowLoading(""),
    $.post(dle_root + "engine/ajax/controller.php?mod=registration", {
        name: e,
        user_hash: dle_login_hash
    }, function(e) {
        HideLoading(""),
        $("#result-registration").html(e)
    }),
    !1
}
function doCalendar(e, t, o) {
    ShowLoading(""),
    $.get(dle_root + "engine/ajax/controller.php?mod=calendar", {
        month: e,
        year: t
    }, function(e) {
        HideLoading(""),
        "left" == o ? $("#calendar-layer").hide("slide", {
            direction: "left"
        }, 500, function() {
            $("#calendar-layer").html(e).show("slide", {
                direction: "right"
            }, 500)
        }) : $("#calendar-layer").hide("slide", {
            direction: "right"
        }, 500, function() {
            $("#calendar-layer").html(e).show("slide", {
                direction: "left"
            }, 500)
        })
    })
}
function doRate(e, o) {
    ShowLoading(""),
    $.get(dle_root + "engine/ajax/controller.php?mod=rating", {
        go_rate: e,
        news_id: o,
        skin: dle_skin,
        user_hash: dle_login_hash
    }, function(e) {
        var t;
        HideLoading(""),
        e.success ? (t = (t = (t = (t = e.rating).replace(/&lt;/g, "<")).replace(/&gt;/g, ">")).replace(/&amp;/g, "&"),
        $('[data-ratig-layer-id="' + o + '"]').html(t),
        $('[data-vote-num-id="' + o + '"]').html(e.votenum),
        $('[data-likes-id="' + o + '"]').html(e.likes),
        $('[data-dislikes-id="' + o + '"]').html(e.dislikes)) : e.error && DLEalert(e.errorinfo, dle_info)
    }, "json")
}
function doCommentsRate(e, o) {
    ShowLoading(""),
    $.get(dle_root + "engine/ajax/controller.php?mod=ratingcomments", {
        go_rate: e,
        c_id: o,
        skin: dle_skin,
        user_hash: dle_login_hash
    }, function(e) {
        var t;
        HideLoading(""),
        e.success ? (t = (t = (t = (t = e.rating).replace(/&lt;/g, "<")).replace(/&gt;/g, ">")).replace(/&amp;/g, "&"),
        $('[data-comments-ratig-layer-id="' + o + '"]').html(t),
        $('[data-comments-vote-num-id="' + o + '"]').html(e.votenum),
        $('[data-comments-likes-id="' + o + '"]').html(e.likes),
        $('[data-comments-dislikes-id="' + o + '"]').html(e.dislikes)) : e.error && DLEalert(e.errorinfo, dle_info)
    }, "json")
}
function ajax_cancel_reply() {
    $("#dlefastreplycomments").hide("blind", {}, 1400)
}
function DLESendPM(e) {
    var s = {};
    return $("#dlesendpmpopup").remove(),
    $("#dleprofilepopup").remove(),
    s[dle_act_lang[3]] = function() {
        $(this).dialog("close")
    }
    ,
    s[dle_p_send] = function() {
        "2" == dle_wysiwyg && tinyMCE.triggerSave();
        var e = $("#pm_subj").val()
          , t = $("#pm_text").val()
          , o = $("#pm_name").val()
          , n = $("#pm_question_answer").val()
          , i = $("#sec_code_pm").val()
          , d = $("#outboxcopy:checked").val()
          , l = "";
        if ("" == o)
            return DLEalert(dle_req_field[0], dle_info),
            !1;
        if ("" == t)
            return DLEalert(dle_req_field[1], dle_info),
            !1;
        if ("" == e)
            return DLEalert(dle_req_field[2], dle_info),
            !1;
        if ("1" == dle_captcha_type)
            "undefined" != typeof grecaptcha && (l = grecaptcha.getResponse(recaptcha_widget));
        else if ("2" == dle_captcha_type && "undefined" != typeof grecaptcha) {
            if ("" == (l = $("#pm-recaptcha-response").val())) {
                var a = $("#pm-recaptcha-response").data("key");
                return grecaptcha.execute(a, {
                    action: "personal_message"
                }).then(function(e) {
                    $("#pm-recaptcha-response").val(e),
                    s[dle_p_send]()
                }),
                !1
            }
        } else
            "3" == dle_captcha_type && "undefined" != typeof hcaptcha && (l = hcaptcha.getResponse(recaptcha_widget));
        return d = d || 0,
        i = i || "",
        n = n || "",
        ShowLoading(""),
        $.post(dle_root + "engine/ajax/controller.php?mod=pm", {
            action: "send_pm",
            subj: e,
            comments: t,
            name: o,
            skin: dle_skin,
            sec_code: i,
            question_answer: n,
            g_recaptcha_response: l,
            outboxcopy: d,
            user_hash: dle_login_hash
        }, function(e) {
            var t;
            HideLoading(""),
            e.success ? ($("#dlesendpmpopup").remove(),
            DLEalert(e.success, dle_info)) : e.error && ("2" == dle_captcha_type && "undefined" != typeof grecaptcha && (t = $("#pm-recaptcha-response").data("key"),
            grecaptcha.execute(t, {
                action: "pm"
            }).then(function(e) {
                $("#pm-recaptcha-response").val(e)
            })),
            DLEalert(e.error, dle_info))
        }, "json"),
        !1
    }
    ,
    ShowLoading(""),
    $.get(dle_root + "engine/ajax/controller.php?mod=pm", {
        name: e,
        action: "show_send",
        skin: dle_skin,
        user_hash: dle_login_hash
    }, function(e) {
        HideLoading(""),
        $("body").append(e),
        $("#dlesendpmpopup").dialog({
            autoOpen: !0,
            width: 800,
            resizable: !1,
            dialogClass: "modalfixed dle-popup-sendpm",
            buttons: s
        }),
        $(".modalfixed.ui-dialog").css({
            position: "fixed"
        }),
        $("#dlesendpmpopup").dialog("option", "position", {
            my: "center",
            at: "center",
            of: window
        })
    }, "html"),
    !1
}
function ajax_fast_reply(t, o, n) {
    var e = "";
    "1" != dle_wysiwyg && "2" != dle_wysiwyg || ("2" == dle_wysiwyg && tinyMCE.triggerSave(),
    e = "wysiwyg");
    var i = $("#comments" + t).val()
      , d = $("#name" + t).val()
      , l = $("#question_answer" + t).val()
      , a = $("#sec_code" + t).val()
      , s = $("#subscribe" + t + ":checked").val()
      , r = $("#postid" + t).val()
      , c = "";
    if ("" == d)
        return DLEalert(dle_req_field[0], dle_info),
        !1;
    if ("" == i)
        return DLEalert(dle_req_field[1], dle_info),
        !1;
    if ("1" == dle_captcha_type)
        "undefined" != typeof grecaptcha && (c = grecaptcha.getResponse(recaptcha_widget));
    else if ("2" == dle_captcha_type && "undefined" != typeof grecaptcha) {
        if ("" == (c = $("#comments-recaptcha-response" + t).val())) {
            var p = $("#comments-recaptcha-response" + t).data("key");
            return grecaptcha.execute(p, {
                action: "comments"
            }).then(function(e) {
                $("#comments-recaptcha-response" + t).val(e),
                ajax_fast_reply(t, o, n)
            }),
            !1
        }
    } else
        "3" == dle_captcha_type && "undefined" != typeof hcaptcha && (c = hcaptcha.getResponse(recaptcha_widget));
    return s = s || 0,
    a = a || "",
    l = l || "",
    ShowLoading(""),
    $.post(dle_root + "engine/ajax/controller.php?mod=addcomments", {
        post_id: r,
        parent: t,
        indent: o,
        comments: i,
        name: d,
        mail: "",
        editor_mode: e,
        skin: dle_skin,
        sec_code: a,
        question_answer: l,
        g_recaptcha_response: c,
        allow_subscribe: s,
        user_hash: dle_login_hash,
        needwrap: n
    }, function(e) {
        var t;
        HideLoading(""),
        e.error ? $(e.content).insertBefore("#dlefastreplyesponse") : e.success && ($("#comm-id-" + e.id).length ? (t = $(e.content).find("#comm-id-" + e.id).html(),
        $("#dlefastreplycomments").hide(),
        $("html,body").stop().animate({
            scrollTop: $("#comm-id-" + e.id).offset().top - 100
        }, 600, function() {
            $("#comm-id-" + e.id).fadeOut("slow", function() {
                $(this).html(t + "<script>" + e.scripts + "<\/script>"),
                $("#comm-id-" + e.id).fadeIn("slow")
            })
        })) : ($(e.content + "<script>" + e.scripts + "<\/script>").insertBefore("#dlefastreplyesponse"),
        $("#dlefastreplycomments").hide("blind", {}, 500),
        setTimeout(function() {
            $("html,body").stop().animate({
                scrollTop: $("#dlefastreplyesponse").offset().top - 100
            }, 600, function() {
                $("#comments-tree-item-" + e.id).show("blind", {}, 700)
            })
        }, 600)))
    }, "json"),
    !1
}
function dle_reply(r, c, t) {
    var p = {}
      , m = ""
      , u = 0;
    return $("#dlereplypopup").remove(),
    $("#dlefastreplyesponse").remove(),
    $("#dlefastreplycomments").remove(),
    $("#comment-id-" + r).next(".comments-tree-list").length ? $("#comment-id-" + r).next(".comments-tree-list").append("<div id='dlefastreplyesponse'></div>") : ($("<div id='dlefastreplyesponse'></div>").insertAfter("#comment-id-" + r),
    u = 1),
    p[dle_act_lang[3]] = function() {
        $(this).dialog("close")
    }
    ,
    p[dle_p_send] = function() {
        "1" != dle_wysiwyg && "2" != dle_wysiwyg || ("2" == dle_wysiwyg && tinyMCE.triggerSave(),
        m = "wysiwyg");
        var e = $("#comments" + r).val()
          , t = $("#name" + r).val()
          , o = $("#mail" + r).val()
          , n = $("#question_answer" + r).val()
          , i = $("#sec_code" + r).val()
          , d = $("#subscribe" + r + ":checked").val()
          , l = $("#postid" + r).val()
          , a = "";
        if ("" == t)
            return DLEalert(dle_req_field[0], dle_info),
            !1;
        if ("" == e)
            return DLEalert(dle_req_field[1], dle_info),
            !1;
        if ("1" == dle_captcha_type)
            "undefined" != typeof grecaptcha && (a = grecaptcha.getResponse(recaptcha_widget));
        else if ("2" == dle_captcha_type && "undefined" != typeof grecaptcha) {
            if ("" == (a = $("#comments-recaptcha-response" + r).val())) {
                var s = $("#comments-recaptcha-response" + r).data("key");
                return grecaptcha.execute(s, {
                    action: "comments"
                }).then(function(e) {
                    $("#comments-recaptcha-response" + r).val(e),
                    p[dle_p_send]()
                }),
                !1
            }
        } else
            "3" == dle_captcha_type && "undefined" != typeof hcaptcha && (a = hcaptcha.getResponse(recaptcha_widget));
        return d = d || 0,
        i = i || "",
        n = n || "",
        ShowLoading(""),
        $.post(dle_root + "engine/ajax/controller.php?mod=addcomments", {
            post_id: l,
            parent: r,
            indent: c,
            comments: e,
            name: t,
            mail: o,
            editor_mode: m,
            skin: dle_skin,
            sec_code: i,
            question_answer: n,
            g_recaptcha_response: a,
            allow_subscribe: d,
            user_hash: dle_login_hash,
            needwrap: u
        }, function(e) {
            var t;
            HideLoading(""),
            e.error ? $(e.content).insertBefore("#dlefastreplyesponse") : e.success && ($("#dlereplypopup").remove(),
            $("#comm-id-" + e.id).length ? (t = $(e.content).find("#comm-id-" + e.id).html(),
            $("#dlefastreplycomments").hide(),
            $("html,body").stop().animate({
                scrollTop: $("#comm-id-" + e.id).offset().top - 100
            }, 600, function() {
                $("#comm-id-" + e.id).fadeOut("slow", function() {
                    $(this).html(t + "<script>" + e.scripts + "<\/script>"),
                    $("#comm-id-" + e.id).fadeIn("slow")
                })
            })) : ($(e.content + "<script>" + e.scripts + "<\/script>").insertBefore("#dlefastreplyesponse"),
            $("#dlefastreplycomments").hide("blind", {}, 500),
            setTimeout(function() {
                $("html,body").stop().animate({
                    scrollTop: $("#dlefastreplyesponse").offset().top - 100
                }, 600, function() {
                    $("#comments-tree-item-" + e.id).show("blind", {}, 700)
                })
            }, 600)))
        }, "json"),
        !1
    }
    ,
    ShowLoading(""),
    $.get(dle_root + "engine/ajax/controller.php?mod=replycomments", {
        id: r,
        indent: c,
        skin: dle_skin,
        user_hash: dle_login_hash,
        needwrap: u
    }, function(e) {
        HideLoading(""),
        "0" != t ? ($("<div id='dlefastreplycomments' style='display:none'></div>").insertAfter("#comment-id-" + r),
        $("html,body").stop().animate({
            scrollTop: $("#comment-id-" + r).offset().top + $("#comment-id-" + r).height() - 100
        }, 600, function() {
            $("#dlefastreplycomments").html(e),
            setTimeout(function() {
                $("#dlefastreplycomments").show("blind", {}, 700)
            }, 200)
        })) : ($("body").append("<div id='dlereplypopup' title='" + dle_reply_title + "' style='display:none'></div>"),
        $("#dlereplypopup").html(e),
        $("#dlereplypopup").dialog({
            autoOpen: !0,
            width: 800,
            resizable: !1,
            dialogClass: "modalfixed dle-popup-replycomments",
            buttons: p
        }),
        $(".modalfixed.ui-dialog").css({
            position: "fixed"
        }),
        $(".dle-popup-replycomments").css({
            cssText: "width:800px; max-height: none !important"
        }),
        $("#dlereplypopup").css({
            cssText: "height: auto !important"
        }),
        $("#dlereplypopup").dialog("option", "position", {
            my: "center",
            at: "center",
            of: window
        }))
    }, "html"),
    !1
}
function doAddComments() {
    var o = document.getElementById("dle-comments-form")
      , e = ""
      , t = ""
      , n = ""
      , i = ""
      , d = "0"
      , l = "";
    return "1" != dle_wysiwyg && "2" != dle_wysiwyg || ("2" == dle_wysiwyg && tinyMCE.triggerSave(),
    e = "wysiwyg"),
    "" == o.name.value ? DLEalert(dle_req_field[0], dle_info) : "" == o.comments.value ? DLEalert(dle_req_field[1], dle_info) : (o.question_answer && (t = o.question_answer.value),
    o.sec_code && (n = o.sec_code.value),
    "1" == dle_captcha_type ? "undefined" != typeof grecaptcha && (i = grecaptcha.getResponse()) : "2" == dle_captcha_type ? i = $("#g-recaptcha-response").val() : "3" == dle_captcha_type && "undefined" != typeof hcaptcha && (i = hcaptcha.getResponse()),
    o.allow_subscribe && 1 == o.allow_subscribe.checked && (d = "1"),
    o.mail && (l = o.mail.value),
    ShowLoading(""),
    $.post(dle_root + "engine/ajax/controller.php?mod=addcomments", {
        post_id: o.post_id.value,
        comments: o.comments.value,
        name: o.name.value,
        mail: l,
        editor_mode: e,
        skin: dle_skin,
        sec_code: n,
        question_answer: t,
        g_recaptcha_response: i,
        allow_subscribe: d,
        user_hash: dle_login_hash
    }, function(e) {
        var t;
        HideLoading(""),
        e.error ? $("#dle-ajax-comments").append(e.content) : e.success && ($("#comm-id-" + e.id).length ? (t = $(e.content).find("#comm-id-" + e.id).html(),
        $("html,body").stop().animate({
            scrollTop: $("#comm-id-" + e.id).offset().top - 100
        }, 600, function() {
            $("#comm-id-" + e.id).fadeOut("slow", function() {
                $(this).html(t + "<script>" + e.scripts + "<\/script>"),
                $("#comm-id-" + e.id).fadeIn("slow")
            })
        })) : ($(e.content + "<script>" + e.scripts + "<\/script>").insertBefore("#dle-ajax-comments"),
        node = $("#comments-tree-item-" + e.id).length ? $("#comments-tree-item-" + e.id) : $("#blind-animation-" + e.id),
        $("html,body").stop().animate({
            scrollTop: $("#dle-ajax-comments").offset().top - 100
        }, 600, function() {
            $(node).show("blind", {}, 700)
        })),
        o.sec_code && (o.sec_code.value = "",
        reload()),
        "1" == dle_captcha_type ? "undefined" != typeof grecaptcha && grecaptcha.reset() : "3" == dle_captcha_type && "undefined" != typeof hcaptcha && hcaptcha.reset())
    }, "json")),
    !1
}
function isHistoryApiAvailable() {
    return !(!window.history || !history.pushState)
}
function CommentsPage(t, o, n) {
    return ShowLoading(""),
    $.get(dle_root + "engine/ajax/controller.php?mod=comments", {
        cstart: t,
        news_id: o,
        skin: dle_skin
    }, function(e) {
        HideLoading(""),
        isNaN(t) || isNaN(o) || ($("#dle-comm-link").off("click"),
        $("#dle-comm-link").on("click", function() {
            return CommentsPage(t, o),
            !1
        })),
        scroll(0, $("#dle-comments-list").offset().top - 100),
        $("#dle-comments-list").html(e.comments),
        $(".dle-comments-navigation").html(e.navigation),
        isHistoryApiAvailable() && window.history.pushState(null, null, n)
    }, "json"),
    !1
}
function dle_copy_quote(e, t, o) {
    dle_txt = "",
    window.getSelection ? dle_txt = window.getSelection().toString() : document.selection && (dle_txt = document.selection.createRange().text.toString()),
    "" != dle_txt && (dle_txt = "0" == dle_wysiwyg || "-1" == dle_wysiwyg ? "[quote=" + e + "]" + dle_txt + "[/quote]" : (dle_txt = dle_txt.replace(/\n/g, "<br>"),
    dle_txt = dle_txt.replace(/\r/g, ""),
    '<div class="quote_block noncontenteditable"><div class="title_quote" data-commenttime="' + t + '" data-commentuser="' + e + '"' + ("1" == dle_wysiwyg ? ' contenteditable="false"' : "") + ">" + o + '</div><div class="quote"><div class="quote_body contenteditable">' + dle_txt + "</div></div></div>"))
}
function dle_fastreply(e, t) {
    if (!document.getElementById("dle-comments-form"))
        return !1;
    var o = document.getElementById("dle-comments-form").comments
      , n = ""
      , i = "";
    return "0" == dle_wysiwyg || "-1" == dle_wysiwyg ? ("0" == dle_wysiwyg ? o.value += "[b]" + e + "[/b], " : o.value += e + ", ",
    setTimeout(function() {
        o.focus()
    }, 800),
    i = ".bb-editor") : (i = ".wseditor",
    "1" == dle_wysiwyg ? (n = t ? '<span class="comments-user-profile noncontenteditable fr-deletable" data-username="' + encodeURI(e) + '" data-userurl="' + t + '" contenteditable="false">@' + e + "</span> " + $.FE.MARKERS : "<b>" + e + "</b>, ",
    $("#comments").froalaEditor("events.focus"),
    $("#comments").froalaEditor("html.insert", n, !0)) : (n = t ? '<span class="comments-user-profile noncontenteditable" data-username="' + encodeURI(e) + '" data-userurl="' + t + '">@' + e + "</span> " : "<b>" + e + "</b>, ",
    tinyMCE.execCommand("mceInsertContent", !1, n))),
    setTimeout(function() {
        $("html,body").stop().animate({
            scrollTop: $(i).offset().top - 100
        }, 700)
    }, 100),
    !1
}
function dle_ins(e) {
    if (!document.getElementById("dle-comments-form"))
        return !1;
    var t = document.getElementById("dle-comments-form").comments
      , o = ""
      , n = "";
    return "" != dle_txt ? ("0" == dle_wysiwyg || "-1" == dle_wysiwyg ? (t.value += dle_txt + "\n",
    setTimeout(function() {
        t.focus()
    }, 800),
    n = ".bb-editor") : (o = dle_txt,
    n = ".wseditor",
    "1" == dle_wysiwyg ? ($("#comments").froalaEditor("events.focus"),
    $("#comments").froalaEditor("html.insert", o + $.FE.MARKERS, !0)) : tinyMCE.execCommand("mceInsertContent", !1, o + "<p><br></p>")),
    setTimeout(function() {
        $("html,body").stop().animate({
            scrollTop: $(n).offset().top - 100
        }, 700)
    }, 100)) : (ShowLoading(""),
    $.get(dle_root + "engine/ajax/controller.php?mod=quote", {
        id: e,
        user_hash: dle_login_hash
    }, function(e) {
        HideLoading(""),
        e = (e = (e = (e = (e = (e = (e = e.replace(/&lt;/g, "<")).replace(/&gt;/g, ">")).replace(/&amp;/g, "&")).replace(/&quot;/g, '"')).replace(/&#039;/g, "'")).replace(/&#039;/g, "'")).replace(/&#34;/g, '"'),
        "0" == dle_wysiwyg || "-1" == dle_wysiwyg ? (t.value += e + "\n",
        setTimeout(function() {
            t.focus()
        }, 800),
        n = ".bb-editor") : (o = e,
        n = ".wseditor",
        "1" == dle_wysiwyg ? ($("#comments").froalaEditor("events.focus"),
        $("#comments").froalaEditor("html.insert", o + $.FE.MARKERS, !0)) : tinyMCE.execCommand("mceInsertContent", !1, o + "<p><br></p>")),
        setTimeout(function() {
            $("html,body").stop().animate({
                scrollTop: $(n).offset().top - 100
            }, 700)
        }, 100)
    })),
    !1
}
function ShowOrHide(e) {
    var t = $("#" + e)
      , o = null;
    document.getElementById("image-" + e) && (o = document.getElementById("image-" + e)),
    jQuery().lazyLoadXT && $("#" + e + " *[data-src]").lazyLoadXT();
    e = t.height() / 200 * 1e3;
    3e3 < e && (e = 3e3),
    e < 250 && (e = 250),
    "none" == t.css("display") ? (t.show("blind", {}, e),
    o && (o.src = dle_root + "templates/" + dle_skin + "/dleimages/spoiler-minus.gif")) : (2e3 < e && (e = 2e3),
    t.hide("blind", {}, e),
    o && (o.src = dle_root + "templates/" + dle_skin + "/dleimages/spoiler-plus.gif"))
}
function ckeck_uncheck_all() {
    for (var e = document.pmlist, t = 0; t < e.elements.length; t++) {
        var o = e.elements[t];
        "checkbox" == o.type && (1 == e.master_box.checked ? o.checked = !1 : o.checked = !0)
    }
    1 == e.master_box.checked ? e.master_box.checked = !1 : e.master_box.checked = !0
}
function confirmDelete(e) {
    DLEconfirm(dle_del_agree, dle_confirm, function() {
        document.location = e
    })
}
function setNewField(e, t) {
    e != selField && (fombj = t,
    selField = e)
}
function dle_news_delete(t) {
    var e = {};
    e[dle_act_lang[1]] = function() {
        $(this).dialog("close")
    }
    ,
    allow_dle_delete_news && (e[dle_del_msg] = function() {
        $(this).dialog("close");
        var e = {};
        e[dle_act_lang[3]] = function() {
            $(this).dialog("close")
        }
        ,
        e[dle_p_send] = function() {
            var e;
            $("#dle-promt-text").val().length < 1 ? $("#dle-promt-text").addClass("ui-state-error") : (e = $("#dle-promt-text").val(),
            $(this).dialog("close"),
            $("#dlepopup").remove(),
            $.post(dle_root + "engine/ajax/controller.php?mod=message", {
                id: t,
                user_hash: dle_login_hash,
                text: e
            }, function(e) {
                "ok" == e ? document.location = dle_root + "index.php?do=deletenews&id=" + t + "&hash=" + dle_login_hash : DLEalert("Send Error", dle_info)
            }))
        }
        ,
        $("#dlepopup").remove(),
        $("body").append("<div id='dlepopup' class='dle-promt' title='" + dle_notice + "' style='display:none'>" + dle_p_text + "<br /><br /><textarea name='dle-promt-text' id='dle-promt-text' class='ui-widget-content ui-corner-all' style='width:97%;height:100px;'></textarea></div>"),
        $("#dlepopup").dialog({
            autoOpen: !0,
            width: 500,
            resizable: !1,
            dialogClass: "modalfixed dle-popup-newsdelete",
            buttons: e
        }),
        $(".modalfixed.ui-dialog").css({
            position: "fixed"
        }),
        $("#dlepopup").dialog("option", "position", {
            my: "center",
            at: "center",
            of: window
        })
    }
    ),
    e[dle_act_lang[0]] = function() {
        $(this).dialog("close"),
        document.location = dle_root + "index.php?do=deletenews&id=" + t + "&hash=" + dle_login_hash
    }
    ,
    $("#dlepopup").remove(),
    $("body").append("<div id='dlepopup' class='dle-promt' title='" + dle_confirm + "' style='display:none'><div id='dlepopupmessage'>" + dle_del_agree + "</div></div>"),
    $("#dlepopup").dialog({
        autoOpen: !0,
        width: 500,
        resizable: !1,
        dialogClass: "modalfixed dle-popup-newsdelete",
        buttons: e
    }),
    $(".modalfixed.ui-dialog").css({
        position: "fixed"
    }),
    $("#dlepopup").dialog("option", "position", {
        my: "center",
        at: "center",
        of: window
    })
}
function MenuNewsBuild(e, t) {
    var o = [];
    return o[0] = "<a onclick=\"ajax_prep_for_edit('" + e + "', '" + t + '\'); return false;" href="#">' + menu_short + "</a>",
    "" != dle_admin ? o[1] = '<a href="' + dle_root + dle_admin + "?mod=editnews&action=editnews&id=" + e + '" target="_blank">' + menu_full + "</a>" : o[1] = '<a href="' + dle_root + "index.php?do=addnews&id=" + e + '" target="_blank">' + menu_full + "</a>",
    allow_dle_delete_news && (o[2] = "<a onclick=\"sendNotice ('" + e + '\'); return false;" href="#">' + dle_notice + "</a>",
    o[3] = "<a onclick=\"dle_news_delete ('" + e + '\'); return false;" href="#">' + dle_del_news + "</a>"),
    o
}
function sendNotice(t) {
    var e = {};
    e[dle_act_lang[3]] = function() {
        $(this).dialog("close")
    }
    ,
    e[dle_p_send] = function() {
        var e;
        $("#dle-promt-text").val().length < 1 ? $("#dle-promt-text").addClass("ui-state-error") : (e = $("#dle-promt-text").val(),
        $(this).dialog("close"),
        $("#dlepopup").remove(),
        $.post(dle_root + "engine/ajax/controller.php?mod=message", {
            id: t,
            user_hash: dle_login_hash,
            text: e,
            allowdelete: "no"
        }, function(e) {
            "ok" == e && DLEalert(dle_p_send_ok, dle_info)
        }))
    }
    ,
    $("#dlepopup").remove(),
    $("body").append("<div id='dlepopup' title='" + dle_notice + "' style='display:none'>" + dle_p_text + "<br /><br /><textarea name='dle-promt-text' id='dle-promt-text' class='ui-widget-content ui-corner-all' style='width:97%;height:100px;'></textarea></div>"),
    $("#dlepopup").dialog({
        autoOpen: !0,
        width: 500,
        resizable: !1,
        dialogClass: "modalfixed dle-popup-sendmessage",
        buttons: e
    }),
    $(".modalfixed.ui-dialog").css({
        position: "fixed"
    }),
    $("#dlepopup").dialog("option", "position", {
        my: "center",
        at: "center",
        of: window
    })
}
function AddComplaint(o, n) {
    var e = {}
      , t = "";
    e[dle_act_lang[3]] = function() {
        $(this).dialog("close")
    }
    ,
    e[dle_p_send] = function() {
        var e, t;
        $("#dle-promt-text").val().length < 1 ? $("#dle-promt-text").addClass("ui-state-error") : (e = $("#dle-promt-text").val(),
        t = "",
        $("#dle-promt-mail").val() && (t = $("#dle-promt-mail").val()),
        ShowLoading(""),
        $.post(dle_root + "engine/ajax/controller.php?mod=complaint", {
            id: o,
            text: e,
            action: n,
            mail: t,
            user_hash: dle_login_hash
        }, function(e) {
            HideLoading(""),
            "ok" == e ? ($("#dlecomplaint").remove(),
            DLEalert(dle_p_send_ok, dle_info)) : DLEalert(e, dle_info)
        }))
    }
    ,
    $("#dlecomplaint").remove(),
    5 == dle_group && (t = dle_mail + '<br><input type="text" name="dle-promt-mail" id="dle-promt-mail" class="ui-widget-content ui-corner-all" style="width:100%;" value="">'),
    $("body").append("<div id='dlecomplaint' title='" + dle_c_title + "' style='display:none'>" + dle_complaint + "<br><textarea name='dle-promt-text' id='dle-promt-text' class='ui-widget-content ui-corner-all' style='width:100%;height:140px;'></textarea>" + t + "</div>"),
    $("#dlecomplaint").dialog({
        autoOpen: !0,
        width: 600,
        resizable: !1,
        dialogClass: "modalfixed dle-popup-complaint",
        buttons: e
    }),
    $(".modalfixed.ui-dialog").css({
        position: "fixed"
    }),
    $("#dlecomplaint").dialog("option", "position", {
        my: "center",
        at: "center",
        of: window
    })
}
function DLEalert(e, t) {
    $("#dlepopup").remove(),
    $("body").append("<div id='dlepopup' class='dle-alert' title='" + t + "' style='display:none'>" + e + "</div>"),
    $("#dlepopup").dialog({
        autoOpen: !0,
        width: 470,
        resizable: !1,
        dialogClass: "modalfixed dle-popup-alert",
        buttons: {
            Ok: function() {
                $(this).dialog("close"),
                $("#dlepopup").remove()
            }
        }
    }),
    $(".modalfixed.ui-dialog").css({
        position: "fixed"
    }),
    $("#dlepopup").dialog("option", "position", {
        my: "center",
        at: "center",
        of: window
    })
}
function DLEconfirm(e, t, o) {
    var n = {};
    n[dle_act_lang[1]] = function() {
        $(this).dialog("close"),
        $("#dlepopup").remove()
    }
    ,
    n[dle_act_lang[0]] = function() {
        $(this).dialog("close"),
        $("#dlepopup").remove(),
        o && o()
    }
    ,
    $("#dlepopup").remove(),
    $("body").append("<div id='dlepopup' class='dle-confirm' title='" + t + "' style='display:none'>" + e + "</div>"),
    $("#dlepopup").dialog({
        autoOpen: !0,
        width: 500,
        resizable: !1,
        dialogClass: "modalfixed dle-popup-confirm",
        buttons: n
    }),
    $(".modalfixed.ui-dialog").css({
        position: "fixed"
    }),
    $("#dlepopup").dialog("option", "position", {
        my: "center",
        at: "center",
        of: window
    })
}
function DLEprompt(e, t, o, n, i) {
    var d = {};
    d[dle_act_lang[3]] = function() {
        $(this).dialog("close")
    }
    ,
    d[dle_act_lang[2]] = function() {
        var e;
        !i && $("#dle-promt-text").val().length < 1 ? $("#dle-promt-text").addClass("ui-state-error") : (e = $("#dle-promt-text").val(),
        $(this).dialog("close"),
        $("#dlepopup").remove(),
        n && n(e))
    }
    ,
    $("#dlepopup").remove(),
    $("body").append("<div id='dlepopup' class='dle-promt' title='" + o + "' style='display:none'>" + e + "<br /><br /><input type='text' name='dle-promt-text' id='dle-promt-text' class='ui-widget-content ui-corner-all' style='width:97%;' value='" + t + "'/></div>"),
    $("#dlepopup").dialog({
        autoOpen: !0,
        width: 500,
        resizable: !1,
        dialogClass: "modalfixed dle-popup-promt",
        buttons: d
    }),
    $(".modalfixed.ui-dialog").css({
        position: "fixed"
    }),
    $("#dlepopup").dialog("option", "position", {
        my: "center",
        at: "center",
        of: window
    }),
    (0 < t.length ? $("#dle-promt-text").select() : $("#dle-promt-text")).focus()
}
var dle_user_profile = ""
  , dle_user_profile_link = "";
function ShowPopupProfile(e, t) {
    var o = {};
    return o[menu_profile] = function() {
        document.location = dle_user_profile_link
    }
    ,
    5 != dle_group && (o[menu_send] = function() {
        DLESendPM(dle_user_profile)
    }
    ),
    1 == t && (o[menu_uedit] = function() {
        $(this).dialog("close");
        var e = {};
        return $("body").append('<div id="modal-overlay" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: #666666; opacity: .40;filter:Alpha(Opacity=40); z-index: 980; display:none;"></div>'),
        $("#modal-overlay").css({
            filter: "alpha(opacity=40)"
        }).fadeIn("slow"),
        $("#dleuserpopup").remove(),
        $("body").append("<div id='dleuserpopup' title='" + menu_uedit + "' style='display:none'></div>"),
        e[dle_act_lang[3]] = function() {
            $(this).dialog("close"),
            $("#dleuserpopup").remove()
        }
        ,
        e[dle_act_lang[5]] = function() {
            window.frames.edituserframe.confirmDelete(dle_login_hash)
        }
        ,
        e[dle_act_lang[4]] = function() {
            document.getElementById("edituserframe").contentWindow.document.getElementById("saveuserform").submit()
        }
        ,
        $("#dleuserpopup").dialog({
            autoOpen: !0,
            width: 700,
            resizable: !1,
            dialogClass: "modalfixed dle-popup-userprofileadmin",
            buttons: e,
            open: function(e, t) {
                $("#dleuserpopup").html("<iframe name='edituserframe' id='edituserframe' width='100%' height='400' src='" + dle_root + dle_admin + "?mod=editusers&action=edituser&user=" + dle_user_profile + "&skin=" + dle_skin + "' frameborder='0' marginwidth='0' marginheight='0' allowtransparency='true'></iframe>")
            },
            beforeClose: function(e, t) {
                $("#dleuserpopup").html("")
            },
            close: function(e, t) {
                $("#modal-overlay").fadeOut("slow", function() {
                    $("#modal-overlay").remove()
                })
            }
        }),
        830 < $(window).width() && 530 < $(window).height() && ($(".modalfixed.ui-dialog").css({
            position: "fixed"
        }),
        $("#dleuserpopup").dialog("option", "position", {
            my: "center",
            at: "center",
            of: window
        })),
        !1
    }
    ),
    $("#dleprofilepopup").remove(),
    $("body").append(e),
    $("#dleprofilepopup").dialog({
        autoOpen: !0,
        resizable: !1,
        dialogClass: "dle-popup-userprofile",
        buttons: o,
        width: 550
    }),
    !1
}
function ShowProfile(e, t, o) {
    return dle_user_profile == e && document.getElementById("dleprofilepopup") ? $("#dleprofilepopup").dialog("open") : (dle_user_profile = e,
    dle_user_profile_link = t,
    ShowLoading(""),
    $.get(dle_root + "engine/ajax/controller.php?mod=profile", {
        name: e,
        skin: dle_skin,
        user_hash: dle_login_hash
    }, function(e) {
        HideLoading(""),
        ShowPopupProfile(e, o)
    })),
    !1
}
function FastSearch() {
    $("#story").attr("autocomplete", "off"),
    $("#story").blur(function() {
        $("#searchsuggestions").fadeOut()
    }),
    $("#story").keyup(function() {
        var e = $(this).val();
        0 == e.length ? $("#searchsuggestions").fadeOut() : dle_search_value != e && e.length >= dle_min_search && (clearInterval(dle_search_delay),
        dle_search_delay = setInterval(function() {
            dle_do_search(e)
        }, 600))
    })
}
function dle_do_search(e) {
    clearInterval(dle_search_delay),
    $("#searchsuggestions").remove(),
    $("body").append("<div id='searchsuggestions' style='display:none'></div>"),
    $.post(dle_root + "engine/ajax/controller.php?mod=search", {
        query: "" + e,
        user_hash: dle_login_hash
    }, function(e) {
        $("#searchsuggestions").html(e).fadeIn().css({
            position: "absolute",
            top: 0,
            left: 0
        }).position({
            my: "left top",
            at: "left bottom",
            of: "#story",
            collision: "fit flip"
        })
    }),
    dle_search_value = e
}
function ShowLoading(e, t, o) {
    var n = "";
    void 0 === t && (t = "center"),
    void 0 === o && (o = "center"),
    void 0 === e && (o = ""),
    $("#loading-layer").remove(),
    0 !== e.length && e.trim() ? (n = "withtext",
    e = "<span>" + e + "</span>") : (e = '<svg xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.0" width="32px" height="32px" viewBox="0 0 128 128" xml:space="preserve"><g><path fill="#ffffff" d="M64,128a64,64,0,1,1,64-64A64,64,0,0,1,64,128ZM64,2.75A61.25,61.25,0,1,0,125.25,64,61.25,61.25,0,0,0,64,2.75Z"/><path fill="#ffffff" d="M64 128a64 64 0 1 1 64-64 64 64 0 0 1-64 64zM64 2.75A61.2 61.2 0 0 0 3.34 72.4c1.28-3.52 3.9-6.32 7.5-6.86 6.55-1 11.9 2.63 13.6 8.08 3.52 11.27.5 23 15 35.25 19.47 16.46 40.34 13.54 52.84 9.46A61.25 61.25 0 0 0 64 2.75z"/><animateTransform attributeName="transform" type="rotate" from="0 64 64" to="360 64 64" dur="1400ms" repeatCount="indefinite"></animateTransform></g></svg>',
    n = "withouttext"),
    $("body").append('<div id="loading-layer" class="' + n + '" style="display:none">' + e + "</div>");
    var i = ($(window).width() - $("#loading-layer").outerWidth()) / 2
      , d = ($(window).height() - $("#loading-layer").outerHeight()) / 2;
    switch (t) {
    case "left":
        i = 15;
        break;
    case "right":
        i = $(window).width() - $("#loading-layer").outerWidth() - 15
    }
    switch (o) {
    case "top":
        d = 15;
        break;
    case "bottom":
        d = $(window).height() - $("#loading-layer").outerHeight() - 15
    }
    $("#loading-layer").css({
        left: i + "px",
        top: d + "px",
        position: "fixed",
        zIndex: "9999"
    }),
    $("#loading-layer").fadeTo("slow", 1)
}
function HideLoading(e) {
    $("#loading-layer").fadeOut("slow", function() {
        $("#loading-layer").remove()
    })
}
function ShowAllVotes() {
    return document.getElementById("dlevotespopup") ? $("#dlevotespopup").dialog("open") : ($.ajaxSetup({
        cache: !1
    }),
    ShowLoading(""),
    $.get(dle_root + "engine/ajax/controller.php?mod=allvotes&dle_skin=" + dle_skin, function(e) {
        HideLoading(""),
        $("#dlevotespopup").remove(),
        $("body").append(e),
        $(".dlevotebutton").button(),
        $("#dlevotespopup").dialog({
            autoOpen: !0,
            resizable: !1,
            dialogClass: "dle-popup-allvotes",
            width: 600
        }),
        400 < $("#dlevotespopupcontent").height() && $("#dlevotespopupcontent").height(400),
        $("#dlevotespopup").dialog("option", "height", $("#dlevotespopupcontent").height() + 60),
        $("#dlevotespopup").dialog("option", "position", "center")
    })),
    !1
}
function fast_vote(t) {
    var e = $("#vote_" + t + " input:radio[name=vote_check]:checked").val();
    return void 0 === e || (ShowLoading(""),
    $.get(dle_root + "engine/ajax/controller.php?mod=vote", {
        vote_id: t,
        vote_action: "vote",
        vote_mode: "fast_vote",
        vote_check: e,
        dle_skin: dle_skin,
        user_hash: dle_login_hash
    }, function(e) {
        HideLoading(""),
        $("#dle-vote_list-" + t).fadeOut(500, function() {
            $(this).html(e),
            $(this).fadeIn(500)
        })
    })),
    !1
}
function AddIgnorePM(e, t) {
    DLEconfirm(t, dle_confirm, function() {
        ShowLoading(""),
        $.get(dle_root + "engine/ajax/controller.php?mod=adminfunction", {
            id: e,
            action: "add_ignore",
            skin: dle_skin,
            user_hash: dle_login_hash
        }, function(e) {
            return HideLoading(""),
            DLEalert(e, dle_info),
            !1
        })
    })
}
function DelIgnorePM(t, e) {
    return DLEconfirm(e, dle_confirm, function() {
        ShowLoading(""),
        $.get(dle_root + "engine/ajax/controller.php?mod=adminfunction", {
            id: t,
            action: "del_ignore",
            skin: dle_skin,
            user_hash: dle_login_hash
        }, function(e) {
            return HideLoading(""),
            $("#dle-ignore-list-" + t).html(""),
            DLEalert(e, dle_info),
            !1
        })
    }),
    !1
}
function DelSocial(t, e) {
    return DLEconfirm(e, dle_confirm, function() {
        ShowLoading(""),
        $.get(dle_root + "engine/ajax/controller.php?mod=adminfunction", {
            id: t,
            action: "del_social",
            user_hash: dle_login_hash
        }, function(e) {
            return HideLoading(""),
            $("#dle-social-list-" + t).html(""),
            DLEalert(e, dle_info),
            !1
        })
    }),
    !1
}
function subscribe(e, t) {
    var o = dle_sub_agree;
    return 0 == t && (o = dle_unsub_agree),
    DLEconfirm(o, dle_confirm, function() {
        ShowLoading(""),
        $.get(dle_root + "engine/ajax/controller.php?mod=commentssubscribe", {
            news_id: e,
            skin: dle_skin,
            sub_action: t,
            user_hash: dle_login_hash
        }, function(e) {
            HideLoading(""),
            e.success ? DLEalert(e.info, dle_info) : e.error && DLEalert(e.errorinfo, dle_info)
        }, "json")
    }),
    !1
}
var media_upload_manager = !1;
function media_upload(e, t, o, n) {
    var i = "none"
      , d = e + t + o + n;
    return $("#mediaupload").hasClass("ui-dialog-content") && media_upload_manager == d ? ($("#mediaupload").dialog("open"),
    check_all()) : ($("#mediaupload").remove(),
    $("body").append("<div id='mediaupload' class='mediaupload-body' title='" + text_upload + "' style='display:none'></div>"),
    ShowLoading(""),
    $.get(dle_root + "engine/ajax/controller.php", {
        mod: "upload",
        area: e,
        news_id: o,
        author: t,
        wysiwyg: n
    }, function(e) {
        HideLoading(""),
        $("#mediaupload").html(e);
        var t = .9 * $(window).height()
          , e = .9 * $(window).width();
        830 < e && (e = 830),
        600 < t && (t = 600),
        $("#mediaupload").dialog({
            autoOpen: !0,
            width: e,
            height: t,
            resizable: !1,
            dialogClass: "modalfixed dle-popup-mediaupload",
            open: function(e, t) {
                $(".dle-popup-mediaupload").append($("#mediaupload-buttonpane").html()),
                $("#mediaupload-buttonpane").remove()
            },
            dragStart: function(e, t) {
                i = $(".modalfixed").css("box-shadow"),
                $(".modalfixed").fadeTo(0, .7).css("box-shadow", "none"),
                $("#mediaupload").css("visibility", "hidden")
            },
            dragStop: function(e, t) {
                $(".modalfixed").fadeTo(0, 1).css("box-shadow", i),
                $("#mediaupload").css("visibility", "visible")
            }
        }),
        media_upload_manager = d,
        830 < $(window).width() && 530 < $(window).height() && ($(".modalfixed.ui-dialog").css({
            position: "fixed"
        }),
        $("#mediaupload").dialog("option", "position", {
            my: "center",
            at: "center",
            of: window
        }))
    }, "html")),
    !1
}
function dropdownmenu(e, t, o, n) {
    window.event ? event.cancelBubble = !0 : t.stopPropagation && t.stopPropagation();
    t = $("#dropmenudiv");
    if (t.is(":visible"))
        return clearhidemenu(),
        t.fadeOut("fast"),
        !1;
    t.remove(),
    $("body").append('<div id="dropmenudiv" style="display:none;position:absolute;z-index:100;width:165px;"></div>'),
    (t = $("#dropmenudiv")).html(o.join("")),
    n && t.width(n);
    o = $(document).width() - 30,
    n = $(e).offset();
    return o - n.left < t.width() && (n.left = n.left - (t.width() - $(e).width())),
    t.css({
        left: n.left + "px",
        top: n.top + $(e).height() + "px"
    }),
    t.fadeTo("fast", .9),
    t.mouseenter(function() {
        clearhidemenu()
    }).mouseleave(function() {
        delayhidemenu()
    }),
    $(document).one("click", function() {
        hidemenu()
    }),
    !1
}
function setcookie(e, t) {
    var o = new Date;
    o.setTime(o.getTime() + 26784e5);
    o = "expires=" + o.toUTCString();
    document.cookie = e + "=" + t + ";" + o + ";path=/"
}
function get_local_storage(e) {
    try {
        return localStorage.getItem(e) ? JSON.parse(localStorage.getItem(e)) : null
    } catch (e) {
        return null
    }
}
function set_local_storage(e, t) {
    try {
        localStorage.setItem(e, JSON.stringify(t))
    } catch (e) {}
}
function del_local_storage(e, t) {
    try {
        localStorage.removeItem(e)
    } catch (e) {}
}
function save_last_viewed(e) {
    if (e = parseInt(e),
    isNaN(e))
        return null;
    var t = get_local_storage("viewed_ids");
    return $.isArray(t) ? -1 == $.inArray(e, t) && (19 < t.length && t.pop(),
    t.unshift(e)) : (t = []).push(e),
    set_local_storage("viewed_ids", t),
    setcookie("viewed_ids", t.join()),
    !0
}
function hidemenu(e) {
    $("#dropmenudiv").fadeOut("fast")
}
function delayhidemenu() {
    delayhide = setTimeout("hidemenu()", 1e3)
}
function clearhidemenu() {
    "undefined" != typeof delayhide && clearTimeout(delayhide)
}
jQuery(function(n) {
    var o = !1
      , e = new Array
      , i = "";
    n(document).keydown(function(e) {
        if (13 == e.which && e.ctrlKey) {
            var t;
            if (e.preventDefault(),
            window.getSelection ? t = window.getSelection() : document.getSelection ? t = document.getSelection() : document.selection && (t = document.selection.createRange().text),
            "" == t)
                return !1;
            if (255 < t.toString().length)
                return DLEalert(dle_big_text, dle_info),
                !1;
            e = {};
            e[dle_act_lang[3]] = function() {
                n(this).dialog("close")
            }
            ,
            e[dle_p_send] = function() {
                var e, t, o;
                n("#dle-promt-text").val().length < 1 ? n("#dle-promt-text").addClass("ui-state-error") : (e = n("#dle-promt-text").val(),
                t = n("#orfom").text(),
                o = "",
                n("#dle-promt-mail").val() && (o = n("#dle-promt-mail").val()),
                ShowLoading(""),
                n.post(dle_root + "engine/ajax/controller.php?mod=complaint", {
                    seltext: t,
                    text: e,
                    mail: o,
                    user_hash: dle_login_hash,
                    action: "orfo",
                    url: window.location.href
                }, function(e) {
                    HideLoading(""),
                    "ok" == e ? (n("#dlecomplaint").remove(),
                    DLEalert(dle_p_send_ok, dle_info)) : DLEalert(e, dle_info)
                }))
            }
            ,
            n("#dlecomplaint").remove(),
            5 == dle_group && (i = dle_mail + '<br><input type="text" name="dle-promt-mail" id="dle-promt-mail" class="ui-widget-content ui-corner-all" style="width:100%;" value="">'),
            n("body").append("<div id='dlecomplaint' class='dle-promt' title='" + dle_c_title + "' style='display:none'>" + dle_orfo_title + "<br><textarea name='dle-promt-text' id='dle-promt-text' class='ui-widget-content ui-corner-all' style='width:100%;height:140px;'></textarea>" + i + "<div id='orfom' style='display:none'>" + t + "</div></div>"),
            n("#dlecomplaint").dialog({
                autoOpen: !0,
                width: 600,
                resizable: !1,
                dialogClass: "modalfixed dle-popup-complaint",
                buttons: e
            }),
            n(".modalfixed.ui-dialog").css({
                position: "fixed"
            }),
            n("#dlecomplaint").dialog("option", "position", {
                my: "center",
                at: "center",
                of: window
            })
        }
    }),
    setTimeout(function() {
        n("img[data-maxwidth]").each(function() {
            var e = n(this).width()
              , t = n(this).data("maxwidth");
            n(this)[0].naturalWidth && (e = n(this)[0].naturalWidth),
            t < e && (n(this).width(t),
            n(this).wrap('<a href="' + n(this).attr("src") + '" data-highslide="single" target="_blank"></a>'),
            "undefined" == typeof Fancybox && 0 == o && (o = !0,
            n.getCachedScript(dle_root + "engine/classes/fancybox/fancybox.js")))
        })
    }, 300),
    setTimeout(function() {
        n("div[data-dlebclicks]").each(function() {
            var e = n(this).data("dlebid");
            n(this).find("a").on("click", function() {
                n.post(dle_root + "engine/ajax/controller.php?mod=adminfunction", {
                    id: e,
                    action: "bannersclick",
                    user_hash: dle_login_hash
                })
            })
        })
    }, 400),
    n("div[data-dlebviews]").each(function() {
        e.push(n(this).data("dlebid"))
    }),
    e.length && setTimeout(function() {
        n.post(dle_root + "engine/ajax/controller.php?mod=adminfunction", {
            "ids[]": e,
            action: "bannersviews",
            user_hash: dle_login_hash
        })
    }, 1e3),
    n(document).on("click", ".comments-user-profile", function(e) {
        return n(this).data("userurl") && n(this).data("username") && ShowProfile(n(this).data("username"), n(this).data("userurl"), 0),
        !1
    })
}),
jQuery.getCachedScript = function(e, t) {
    return t = $.extend(t || {}, {
        dataType: "script",
        cache: !0,
        url: e
    }),
    jQuery.ajax(t)
}
;
