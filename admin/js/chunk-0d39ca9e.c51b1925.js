(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-0d39ca9e"], {
    "07ac": function(e, t, i) {
        var s = i("23e7"),
            r = i("6f53").values;
        s({
                target: "Object",
                stat: !0
            },
            {
                values: function(e) {
                    return r(e)
                }
            })
    },
    1148 : function(e, t, i) {
        "use strict";
        var s = i("a691"),
            r = i("1d80");
        e.exports = "".repeat ||
            function(e) {
                var t = String(r(this)),
                    i = "",
                    n = s(e);
                if (n < 0 || n == 1 / 0) throw RangeError("Wrong number of repetitions");
                for (; n > 0; (n >>>= 1) && (t += t)) 1 & n && (i += t);
                return i
            }
    },
    "12c9": function(e, t, i) {},
    2014 : function(e, t, i) {
        "use strict";
        var s = i("8d04"),
            r = i.n(s);
        r.a
    },
    "21a6": function(e, t, i) { (function(i) {
        var s, r, n; (function(i, a) {
            r = [],
                s = a,
                n = "function" === typeof s ? s.apply(t, r) : s,
            void 0 === n || (e.exports = n)
        })(0, (function() {
            "use strict";
            function t(e, t) {
                return "undefined" == typeof t ? t = {
                    autoBom: !1
                }: "object" != typeof t && (console.warn("Deprecated: Expected third argument to be a object"), t = {
                    autoBom: !t
                }),
                    t.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["\ufeff", e], {
                        type: e.type
                    }) : e
            }
            function s(e, t, i) {
                var s = new XMLHttpRequest;
                s.open("GET", e),
                    s.responseType = "blob",
                    s.onload = function() {
                        o(s.response, t, i)
                    },
                    s.onerror = function() {
                        console.error("could not download file")
                    },
                    s.send()
            }
            function r(e) {
                var t = new XMLHttpRequest;
                t.open("HEAD", e, !1);
                try {
                    t.send()
                } catch(e) {}
                return 200 <= t.status && 299 >= t.status
            }
            function n(e) {
                try {
                    e.dispatchEvent(new MouseEvent("click"))
                } catch(s) {
                    var t = document.createEvent("MouseEvents");
                    t.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null),
                        e.dispatchEvent(t)
                }
            }
            var a = "object" == typeof window && window.window === window ? window: "object" == typeof self && self.self === self ? self: "object" == typeof i && i.global === i ? i: void 0,
                o = a.saveAs || ("object" != typeof window || window !== a ?
                    function() {}: "download" in HTMLAnchorElement.prototype ?
                        function(e, t, i) {
                            var o = a.URL || a.webkitURL,
                                c = document.createElement("a");
                            t = t || e.name || "download",
                                c.download = t,
                                c.rel = "noopener",
                                "string" == typeof e ? (c.href = e, c.origin === location.origin ? n(c) : r(c.href) ? s(e, t, i) : n(c, c.target = "_blank")) : (c.href = o.createObjectURL(e), setTimeout((function() {
                                    o.revokeObjectURL(c.href)
                                }), 4e4), setTimeout((function() {
                                    n(c)
                                }), 0))
                        }: "msSaveOrOpenBlob" in navigator ?
                            function(e, i, a) {
                                if (i = i || e.name || "download", "string" != typeof e) navigator.msSaveOrOpenBlob(t(e, a), i);
                                else if (r(e)) s(e, i, a);
                                else {
                                    var o = document.createElement("a");
                                    o.href = e,
                                        o.target = "_blank",
                                        setTimeout((function() {
                                            n(o)
                                        }))
                                }
                            }: function(e, t, i, r) {
                                if (r = r || open("", "_blank"), r && (r.document.title = r.document.body.innerText = "downloading..."), "string" == typeof e) return s(e, t, i);
                                var n = "application/octet-stream" === e.type,
                                    o = /constructor/i.test(a.HTMLElement) || a.safari,
                                    c = /CriOS\/[\d]+/.test(navigator.userAgent);
                                if ((c || n && o) && "object" == typeof FileReader) {
                                    var l = new FileReader;
                                    l.onloadend = function() {
                                        var e = l.result;
                                        e = c ? e: e.replace(/^data:[^;]*;/, "data:attachment/file;"),
                                            r ? r.location.href = e: location = e,
                                            r = null
                                    },
                                        l.readAsDataURL(e)
                                } else {
                                    var d = a.URL || a.webkitURL,
                                        u = d.createObjectURL(e);
                                    r ? r.location = u: location.href = u,
                                        r = null,
                                        setTimeout((function() {
                                            d.revokeObjectURL(u)
                                        }), 4e4)
                                }
                            });
            a.saveAs = o.saveAs = o,
                e.exports = o
        }))
    }).call(this, i("c8ba"))
    },
    "2ccb": function(e, t, i) {
        e.exports = i.p + "img/jpsb.4551fec1.png"
    },
    "2fcb": function(e, t, i) {
        e.exports = i.p + "img/i_sm.d75ee28b.png"
    },
    "32db": function(e, t, i) {
        "use strict";
        var s = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("transition-group", {
                        staticClass: "upload-list",
                        attrs: {
                            tag: "ul",
                            name: "el-list"
                        }
                    },
                    e._l(e.files, (function(t) {
                        return i("li", {
                                key: t.uid,
                                class: ["upload-list__item", "is-" + e.getStatus(t), e.focusing ? "focusing": ""],
                                on: {
                                    focus: function(t) {
                                        e.focusing = !0
                                    },
                                    blur: function(t) {
                                        e.focusing = !1
                                    },
                                    click: function(t) {
                                        e.focusing = !1
                                    }
                                }
                            },
                            [e._t("default", [i("div", {
                                    staticClass: "upload-list__item-name"
                                },
                                [i("el-row", {
                                        attrs: {
                                            gutter: 20
                                        }
                                    },
                                    [i("el-col", {
                                            staticClass: "type",
                                            attrs: {
                                                span: 14
                                            }
                                        },
                                        [e.isApp(t.name) ? i("svg-icon", {
                                            attrs: {
                                                "icon-class": "android"
                                            }
                                        }) : i("svg-icon", {
                                            attrs: {
                                                "icon-class": "file"
                                            }
                                        }), e._v(" " + e._s(t.name) + " ")], 1), i("el-col", {
                                            staticClass: "size",
                                            attrs: {
                                                span: 10
                                            }
                                        },
                                        [e._v(" " + e._s(e._f("humanFileSize")(t.size)) + " ")])], 1)], 1), i("label", {
                                    staticClass: "upload-list__item-status-label"
                                },
                                ["success" === t.status && "success" === t.hippoStatus ? i("i", {
                                    class: {
                                        "el-icon-upload-success": !0,
                                        "el-icon-circle-check": !0
                                    }
                                }) : i("i", {
                                    class: {
                                        "el-icon-upload-fail": !0,
                                        "el-icon-warning-outline": !0
                                    }
                                })]), "uploading" !== t.hippoStatus ? i("i", {
                                staticClass: "el-icon-close",
                                on: {
                                    click: function(i) {
                                        return e.$emit("remove", t)
                                    }
                                }
                            }) : e._e(), "uploading" === t.status || "uploading" === t.hippoStatus ? i("el-progress", {
                                attrs: {
                                    "stroke-width": 4,
                                    percentage: e.parsePercentage(t)
                                }
                            }) : e._e()], {
                                file: t
                            })], 2)
                    })), 0)
            },
            r = [],
            n = (i("b680"), i("ac1f"), i("1276"),
                function(e) {
                    return e.split(".").pop()
                }),
            a = function(e, t) {
                var i = t ? 1e3: 1024;
                if (Math.abs(e) < i) return e + " B";
                var s = t ? ["KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"] : ["KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"],
                    r = -1;
                do {
                    e /= i, ++r
                } while ( Math . abs ( e ) >= i && r < s.length - 1);
                return e.toFixed(1) + " " + s[r]
            },
            o = {
                name: "UploadList",
                data: function() {
                    return {
                        focusing: !1
                    }
                },
                props: {
                    files: {
                        type: Array,
                        default:
                            function() {
                                return []
                            }
                    }
                },
                filters: {
                    humanFileSize: function(e) {
                        return 0 === e ? "": a(e, !0)
                    }
                },
                methods: {
                    getStatus: function(e) {
                        return "success" === e.status && "success" === e.hippoStatus ? "success": "fail" === e.status || "fail" === e.hippoStatus ? "fail": "normal"
                    },
                    getPercentage: function(e) {
                        return e.remote ? e.hippoProgress: e.hippoProgress ? .8 * e.percentage + .2 * e.hippoProgress: .8 * e.percentage
                    },
                    parsePercentage: function(e) {
                        var t = this.getPercentage(e);
                        return parseInt(t, 10)
                    },
                    isApp: function(e) {
                        return "apk" === n(e)
                    }
                }
            },
            c = o,
            l = (i("d51d"), i("2877")),
            d = Object(l["a"])(c, s, r, !1, null, null, null);
        t["a"] = d.exports
    },
    "3d84": function(e, t, i) {},
    "408a": function(e, t, i) {
        var s = i("c6b6");
        e.exports = function(e) {
            if ("number" != typeof e && "Number" != s(e)) throw TypeError("Incorrect invocation");
            return + e
        }
    },
    4602 : function(e, t, i) {
        "use strict";
        var s = i("12c9"),
            r = i.n(s);
        r.a
    },
    "47c5": function(e, t, i) {
        "use strict";
        i.d(t, "a", (function() {
            return r
        })),
            i.d(t, "b", (function() {
                return n
            }));
        var s = i("b775");
        function r(e) {
            return Object(s["a"])({
                url: "/coco/package/order/individual/business",
                method: "post",
                data: e
            })
        }
        function n(e) {
            return Object(s["a"])({
                url: "/coco/core/ebroadcast",
                method: "post",
                data: e
            })
        }
    },
    "4ba7": function(e, t, i) {},
    "4ec9": function(e, t, i) {
        "use strict";
        var s = i("6d61"),
            r = i("6566");
        e.exports = s("Map", (function(e) {
            return function() {
                return e(this, arguments.length ? arguments[0] : void 0)
            }
        }), r)
    },
    5319 : function(e, t, i) {
        "use strict";
        var s = i("d784"),
            r = i("825a"),
            n = i("7b0b"),
            a = i("50c4"),
            o = i("a691"),
            c = i("1d80"),
            l = i("8aa5"),
            d = i("14c3"),
            u = Math.max,
            p = Math.min,
            v = Math.floor,
            h = /\$([$&'`]|\d\d?|<[^>]*>)/g,
            m = /\$([$&'`]|\d\d?)/g,
            f = function(e) {
                return void 0 === e ? e: String(e)
            };
        s("replace", 2, (function(e, t, i, s) {
            var g = s.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
                b = s.REPLACE_KEEPS_$0,
                S = g ? "$": "$0";
            return [function(i, s) {
                var r = c(this),
                    n = void 0 == i ? void 0 : i[e];
                return void 0 !== n ? n.call(i, r, s) : t.call(String(r), i, s)
            },
                function(e, s) {
                    if (!g && b || "string" === typeof s && -1 === s.indexOf(S)) {
                        var n = i(t, e, this, s);
                        if (n.done) return n.value
                    }
                    var c = r(e),
                        v = String(this),
                        h = "function" === typeof s;
                    h || (s = String(s));
                    var m = c.global;
                    if (m) {
                        var y = c.unicode;
                        c.lastIndex = 0
                    }
                    var k = [];
                    while (1) {
                        var D = d(c, v);
                        if (null === D) break;
                        if (k.push(D), !m) break;
                        var C = String(D[0]);
                        "" === C && (c.lastIndex = l(v, a(c.lastIndex), y))
                    }
                    for (var L = "",
                             I = 0,
                             x = 0; x < k.length; x++) {
                        D = k[x];
                        for (var F = String(D[0]), A = u(p(o(D.index), v.length), 0), _ = [], O = 1; O < D.length; O++) _.push(f(D[O]));
                        var P = D.groups;
                        if (h) {
                            var E = [F].concat(_, A, v);
                            void 0 !== P && E.push(P);
                            var T = String(s.apply(void 0, E))
                        } else T = w(F, v, A, _, P, s);
                        A >= I && (L += v.slice(I, A) + T, I = A + F.length)
                    }
                    return L + v.slice(I)
                }];
            function w(e, i, s, r, a, o) {
                var c = s + e.length,
                    l = r.length,
                    d = m;
                return void 0 !== a && (a = n(a), d = h),
                    t.call(o, d, (function(t, n) {
                        var o;
                        switch (n.charAt(0)) {
                            case "$":
                                return "$";
                            case "&":
                                return e;
                            case "`":
                                return i.slice(0, s);
                            case "'":
                                return i.slice(c);
                            case "<":
                                o = a[n.slice(1, -1)];
                                break;
                            default:
                                var d = +n;
                                if (0 === d) return t;
                                if (d > l) {
                                    var u = v(d / 10);
                                    return 0 === u ? t: u <= l ? void 0 === r[u - 1] ? n.charAt(1) : r[u - 1] + n.charAt(1) : t
                                }
                                o = r[d - 1]
                        }
                        return void 0 === o ? "": o
                    }))
            }
        }))
    },
    "586a": function(e, t, i) {
        "use strict";
        var s = i("4ba7"),
            r = i.n(s);
        r.a
    },
    "5cc2": function(e, t, i) {
        "use strict";
        var s = i("6d79"),
            r = i.n(s);
        r.a
    },
    "5ed7": function(e, t, i) {
        "use strict";
        var s = i("f20a"),
            r = i.n(s);
        r.a
    },
    6566 : function(e, t, i) {
        "use strict";
        var s = i("9bf2").f,
            r = i("7c73"),
            n = i("e2cc"),
            a = i("0366"),
            o = i("19aa"),
            c = i("2266"),
            l = i("7dd0"),
            d = i("2626"),
            u = i("83ab"),
            p = i("f183").fastKey,
            v = i("69f3"),
            h = v.set,
            m = v.getterFor;
        e.exports = {
            getConstructor: function(e, t, i, l) {
                var d = e((function(e, s) {
                        o(e, d, t),
                            h(e, {
                                type: t,
                                index: r(null),
                                first: void 0,
                                last: void 0,
                                size: 0
                            }),
                        u || (e.size = 0),
                        void 0 != s && c(s, e[l], e, i)
                    })),
                    v = m(t),
                    f = function(e, t, i) {
                        var s, r, n = v(e),
                            a = g(e, t);
                        return a ? a.value = i: (n.last = a = {
                            index: r = p(t, !0),
                            key: t,
                            value: i,
                            previous: s = n.last,
                            next: void 0,
                            removed: !1
                        },
                        n.first || (n.first = a), s && (s.next = a), u ? n.size++:e.size++, "F" !== r && (n.index[r] = a)),
                            e
                    },
                    g = function(e, t) {
                        var i, s = v(e),
                            r = p(t);
                        if ("F" !== r) return s.index[r];
                        for (i = s.first; i; i = i.next) if (i.key == t) return i
                    };
                return n(d.prototype, {
                    clear: function() {
                        var e = this,
                            t = v(e),
                            i = t.index,
                            s = t.first;
                        while (s) s.removed = !0,
                        s.previous && (s.previous = s.previous.next = void 0),
                            delete i[s.index],
                            s = s.next;
                        t.first = t.last = void 0,
                            u ? t.size = 0 : e.size = 0
                    },
                    delete: function(e) {
                        var t = this,
                            i = v(t),
                            s = g(t, e);
                        if (s) {
                            var r = s.next,
                                n = s.previous;
                            delete i.index[s.index],
                                s.removed = !0,
                            n && (n.next = r),
                            r && (r.previous = n),
                            i.first == s && (i.first = r),
                            i.last == s && (i.last = n),
                                u ? i.size--:t.size--
                        }
                        return !! s
                    },
                    forEach: function(e) {
                        var t, i = v(this),
                            s = a(e, arguments.length > 1 ? arguments[1] : void 0, 3);
                        while (t = t ? t.next: i.first) {
                            s(t.value, t.key, this);
                            while (t && t.removed) t = t.previous
                        }
                    },
                    has: function(e) {
                        return !! g(this, e)
                    }
                }),
                    n(d.prototype, i ? {
                        get: function(e) {
                            var t = g(this, e);
                            return t && t.value
                        },
                        set: function(e, t) {
                            return f(this, 0 === e ? 0 : e, t)
                        }
                    }: {
                        add: function(e) {
                            return f(this, e = 0 === e ? 0 : e, e)
                        }
                    }),
                u && s(d.prototype, "size", {
                    get: function() {
                        return v(this).size
                    }
                }),
                    d
            },
            setStrong: function(e, t, i) {
                var s = t + " Iterator",
                    r = m(t),
                    n = m(s);
                l(e, t, (function(e, t) {
                    h(this, {
                        type: s,
                        target: e,
                        state: r(e),
                        kind: t,
                        last: void 0
                    })
                }), (function() {
                    var e = n(this),
                        t = e.kind,
                        i = e.last;
                    while (i && i.removed) i = i.previous;
                    return e.target && (e.last = i = i ? i.next: e.state.first) ? "keys" == t ? {
                        value: i.key,
                        done: !1
                    }: "values" == t ? {
                        value: i.value,
                        done: !1
                    }: {
                        value: [i.key, i.value],
                        done: !1
                    }: (e.target = void 0, {
                        value: void 0,
                        done: !0
                    })
                }), i ? "entries": "values", !i, !0),
                    d(t)
            }
        }
    },
    "6d61": function(e, t, i) {
        "use strict";
        var s = i("23e7"),
            r = i("da84"),
            n = i("94ca"),
            a = i("6eeb"),
            o = i("f183"),
            c = i("2266"),
            l = i("19aa"),
            d = i("861d"),
            u = i("d039"),
            p = i("1c7e"),
            v = i("d44e"),
            h = i("7156");
        e.exports = function(e, t, i) {
            var m = -1 !== e.indexOf("Map"),
                f = -1 !== e.indexOf("Weak"),
                g = m ? "set": "add",
                b = r[e],
                S = b && b.prototype,
                w = b,
                y = {},
                k = function(e) {
                    var t = S[e];
                    a(S, e, "add" == e ?
                        function(e) {
                            return t.call(this, 0 === e ? 0 : e),
                                this
                        }: "delete" == e ?
                            function(e) {
                                return ! (f && !d(e)) && t.call(this, 0 === e ? 0 : e)
                            }: "get" == e ?
                                function(e) {
                                    return f && !d(e) ? void 0 : t.call(this, 0 === e ? 0 : e)
                                }: "has" == e ?
                                    function(e) {
                                        return ! (f && !d(e)) && t.call(this, 0 === e ? 0 : e)
                                    }: function(e, i) {
                                        return t.call(this, 0 === e ? 0 : e, i),
                                            this
                                    })
                };
            if (n(e, "function" != typeof b || !(f || S.forEach && !u((function() { (new b).entries().next()
            }))))) w = i.getConstructor(t, e, m, g),
                o.REQUIRED = !0;
            else if (n(e, !0)) {
                var D = new w,
                    C = D[g](f ? {}: -0, 1) != D,
                    L = u((function() {
                        D.has(1)
                    })),
                    I = p((function(e) {
                        new b(e)
                    })),
                    x = !f && u((function() {
                        var e = new b,
                            t = 5;
                        while (t--) e[g](t, t);
                        return ! e.has( - 0)
                    }));
                I || (w = t((function(t, i) {
                    l(t, w, e);
                    var s = h(new b, t, w);
                    return void 0 != i && c(i, s[g], s, m),
                        s
                })), w.prototype = S, S.constructor = w),
                (L || x) && (k("delete"), k("has"), m && k("get")),
                (x || C) && k(g),
                f && S.clear && delete S.clear
            }
            return y[e] = w,
                s({
                        global: !0,
                        forced: w != b
                    },
                    y),
                v(w, e),
            f || i.setStrong(w, e, m),
                w
        }
    },
    "6d79": function(e, t, i) {},
    "6f53": function(e, t, i) {
        var s = i("83ab"),
            r = i("df75"),
            n = i("fc6a"),
            a = i("d1e7").f,
            o = function(e) {
                return function(t) {
                    var i, o = n(t),
                        c = r(o),
                        l = c.length,
                        d = 0,
                        u = [];
                    while (l > d) i = c[d++],
                    s && !a.call(o, i) || u.push(e ? [i, o[i]] : o[i]);
                    return u
                }
            };
        e.exports = {
            entries: o(!0),
            values: o(!1)
        }
    },
    "72d1": function(e, t, i) {
        "use strict";
        i.d(t, "h", (function() {
            return r
        })),
            i.d(t, "l", (function() {
                return n
            })),
            i.d(t, "k", (function() {
                return a
            })),
            i.d(t, "b", (function() {
                return o
            })),
            i.d(t, "j", (function() {
                return c
            })),
            i.d(t, "i", (function() {
                return l
            })),
            i.d(t, "r", (function() {
                return d
            })),
            i.d(t, "n", (function() {
                return u
            })),
            i.d(t, "p", (function() {
                return p
            })),
            i.d(t, "o", (function() {
                return v
            })),
            i.d(t, "q", (function() {
                return h
            })),
            i.d(t, "m", (function() {
                return m
            })),
            i.d(t, "a", (function() {
                return f
            })),
            i.d(t, "e", (function() {
                return g
            })),
            i.d(t, "d", (function() {
                return b
            })),
            i.d(t, "f", (function() {
                return S
            })),
            i.d(t, "c", (function() {
                return w
            })),
            i.d(t, "g", (function() {
                return y
            }));
        var s = i("b775");
        function r(e) {
            return Object(s["a"])({
                url: "/coco/device/status",
                method: "post",
                data: e
            })
        }
        function n(e) {
            return Object(s["a"])({
                url: "/coco/package/order/user/order/list",
                method: "post",
                data: e
            })
        }
        function a(e) {
            return Object(s["a"])({
                url: "/coco/package/order/detail",
                method: "get",
                params: e
            })
        }
        function o(e) {
            return Object(s["a"])({
                url: "/coco/package/order/user/order/query",
                method: "post",
                data: e
            })
        }
        function c(e) {
            return Object(s["a"])({
                url: "/coco/core/device/snapshot",
                method: "post",
                data: e
            })
        }
        function l(e) {
            return Object(s["a"])({
                url: "/coco/core/device/remote",
                method: "post",
                data: e
            })
        }
        function d(e) {
            return Object(s["a"])({
                url: "/coco/core/device/restart",
                method: "post",
                data: e
            })
        }
        function u(e) {
            return Object(s["a"])({
                url: "/coco/core/device/gohome",
                method: "post",
                data: e
            })
        }
        function p(e) {
            return Object(s["a"])({
                url: "/coco/core/device/ipswitch",
                method: "post",
                data: e
            })
        }
        function v(e) {
            return Object(s["a"])({
                url: "/coco/core/device/ipproxyclose",
                method: "post",
                data: e
            })
        }
        function h(e) {
            return Object(s["a"])({
                url: "/coco/core/device/reset",
                method: "post",
                data: e
            })
        }
        function m(e) {
            return Object(s["a"])({
                url: "/coco/core/device/batch/newphone",
                method: "post",
                data: e
            })
        }
        function f(e) {
            return Object(s["a"])({
                url: "/coco/device/group/set",
                method: "post",
                data: e
            })
        }
        function g(e) {
            return Object(s["a"])({
                url: "/coco/core/device/virtual/camera",
                method: "post",
                data: e
            })
        }
        function b(e) {
            return Object(s["a"])({
                url: "/coco/core/device/replace",
                method: "post",
                data: e
            })
        }
        function S(e) {
            return Object(s["a"])({
                url: "/coco/core/ip/areas",
                method: "post",
                data: e
            })
        }
        function w(e) {
            return Object(s["a"])({
                url: "/coco/device/remarks/set",
                method: "post",
                data: e
            })
        }
        function y(e) {
            return Object(s["a"])({
                url: "/coco/core/batch/snap/shot",
                method: "post",
                data: e
            })
        }
    },
    7780 : function(e, t, i) {
        "use strict";
        var s = i("f36a"),
            r = i.n(s);
        r.a
    },
    8546 : function(e, t, i) {},
    8555 : function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAABMCAYAAADHl1ErAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoyQkJCN0JFMDk0QUNFNzExQkZFRUEyMDcyMDU0RDc1OSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpENjM5OENGM0RDMjMxMUU4ODQxRUFCQjk5QURFMEQzNyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpENjM5OENGMkRDMjMxMUU4ODQxRUFCQjk5QURFMEQzNyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjU2MDZGODdFMjJEQ0U4MTE5ODREQkY3MEM0RDMwRkRGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjJCQkI3QkUwOTRBQ0U3MTFCRkVFQTIwNzIwNTRENzU5Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Qs4KmgAAC2hJREFUeNrsXAlwVPUZ/71jj2w2m5NDuYLlEhAQBAWF2tbCgDhqVRy1CtZjeqjTjtMZa51WRztVR6cdp7XTdlSoAh7QVioqiheMQpUAiiJCQDmSkDu72c3uvn1Hv///vezBbpINCdm3Tb6Zb0LI7r73fu87fr/v/38rhP92KXowgXwh+eXkF5NPIC8ldyK/TSFvJa8m/4j8NfLt5Ea3YHQDmEi+ivxXFkiDwRh4vydfTa53BUomG0++k/yZQQQWrGt9xrr28dkCxkLuY/K5GLw218JgUU+ALSbfQl6BIWMYvE2+pCvAJpNv+D8o5v1pTguTyacCJpE/T140hFGaeS1spGTAVg7ympVNTVvVCZhgUYch697uY1iJVieYMIRHVpRjEQNs2RAWWdsyBtiCIRyytvkMsIlDOGRtk0RLSA9ZdlYqDhHV3hFZcQiD3pl8pg/gumkjBE9Zt6/Rg01o+vty+LwFQ4BF168geuwgVGLpQBkG/EEF4Y4gYOgQRQFej3twAybPuRWCdwQHJNkMAiuqxFBE3LmgrQYt7/8JgWAHJJF+dzsHMWAzb8jq4AwwZq2BIATBC7fLOTgB0/a/CqF4FOWfyn9XVR2qpsX/LkgyYi3HUt7TGgihvESE0yHbDjA20zcG4kAsBdsIiHBUyer1oiCgvNQHhywNrghzXPYgBN8oaBRV5ZlujQDEmo+i/p+/TGsILW3tqCDQJEkcPICJw6dBKChBd5csFWQWG5quo9kCjXVQO9gZvXWhjgiUtjqWj926Gqjr8jNYvWOgsYjL/wiT3ZBGzYYRakLy+ierV8FQGBExBp+7ED2sjUJ0eeEaYY3NhfR7KPtGwH/yM5S46M85DrS+FX3JCef3fgNx1AVnlvzW7UfdS3eT6I2irNibxympKVDeegB6wxdWFPW/K43VqH3hdujRdkSow/rbQ/lfw5TN90JtONhjreqts+5Zs2YliQQ1URfDUa4I8r7ot268C6q/tt8iSws1o3btHTC0dA0apGYSCkfyG7Ait4TmDT+DHmnvc2QZShg1lIZa2N/l8fztHQhHlPwFjJlPjKLx5Z/SRWt9iq6adXdStNb1eLy29iAX8HkLGGv5Pq0ZDa/cfdpg1b14F5SG6izlFol2fxBKTM18MvlAXAU6UW/oKBpfvb/XqVj/7/sRPr6n1xq1xd9Ooj4h6F3L/8AVRt4wfSZjPC2fofmtx7N+T+OWRxE6tO20jqfrBlcDTEoJhcMgFI2E0dGUX9KIDQKdJ7ahdftfe4yslg+eRvu+zX2jhEx3tjIJZaai0dGaf1qSjWakg5vgr3qpy5rV9vFatH2yvl+Ox3RnSCzihBqGmn+AMWNDQGPPGgT3b0n7W+CzTWhhEdh/FRQFU5dBVzoocIX8BIwZGzfHPnwKHUd2xtMw9NV7aHr7yf6DSpR5xDrLKxGu+RztKl2aoyCjmM+d+O6lMYZecuMaGLEIjj93c3+gxBdXSubdAPeIKZB9w+GsOMesaZEAr2OC/yj0xgMw/CdgRPwwQo3mTcsHwJi1x0SEQh08bfpirmETOFCFEy7Jln/w2qbV7oG6m25auC0H87DTkVAOHaqoInzaQSWhbOEdKJ51dbev8+/ewH96p1wGyVNiElnZBWnsRRB9ZyH2ybPQmw9bqsTGgDEr9Xnphgf5uCYNELooQ41mBktyYOxtayEVFHcdSBRF3/zlavqp8ibAIqt4znWpn1MyDo4Fd0P9dD20ox/Zr+hnBq0wbRnNM/5CnH3dk/BOuhRSYVmKvJG9Faj88cZuwbJQhejwmO+RRXjHzcz8ssIKyOffBKF4TNcfVTKWk+AUfvnAFZUP5gIwJqHcbicXz4ypc8YeDcJROgal829B4TkLIHtKoathTtnGUWSxNcwsaD9cIybBobSigmqcPGZe5kiMkpzatwF63d7MxLvyEji/cz+kcQvMhtF+MjdFPxNDb2oJ8J9xwls6GsWzr4Gnch5kijQ12AS5aHj/HJDSXTvyHmJVa7pvKksfpwgzo4911uime3KbkskSqry0KGUZLdZ6Ak3vPIXal3+BIPG1fgFLV6HXf4Hoaz/PDJaVxp10RavdnZS+wyBNXGwPwHitkajzFRfxNE1KGqjtDfCcMz8RHIGTlLYhq6D3YqIRbIDy/mNQ3n0kjU6Iw8/lCzmOC+9MeoNOzeBDGIHaxDnOoMZBHdo2mxdYA2ArQmxU08krPZVzITrNO1//+iMIf7MLotuL8oV3onDiop6BIq6nfr4B2ldvpNdQKubytKshjV+UuEGUgkbbcfM3Aks78j7kWTear3d6CbTrYavdHi6nAyVFXr6Dh5lvxhVmnQv7ETq03cysWJhqWnMPhVHhdCH23ww6leSSPGkJpMnLILiKUnSoY84qKO88bKWwBu3YDoij6aZVmPum5clLYbvtMWxvmG54EOhQeNHndc5dhIKxsxGp2QdH2VgUn98FaaWL1FuOILbz6XhXS6mXYy6EfN61RCVGZ+ZYw6dCPGtWvHMaHc3QDr8DsXQcX4MF6VX77SciKyxw89oS52FUhEcu/y1fQeqKWhjhFmLvz0Cv2Z0ORPkEAuo6AmNGzyOp2TcjunlvXE6xz9Po/dKEy3LH9LMx78jUp3kEh5t7mrEU/fI/UL/4V3qd8hA5nXYVpG9dygltVvzQdzava9rX2xJ87dBWAnsm75a2BUxIbvMZ61QMWk0VTz+cunZJEopFhHzuFRAKev8YgmPe7eaEg7qr2QBqKDWJ3sxYYV/AMtWgzpbPmLey48/U0Y6lp9+o2ZCnXwuxbHwfpoQOagC3QvngsTiH045/TMJ9vo0BY7uuGb9I4mZGJAB19z84R0rXfSSoqaCLo/tnY4x49izeHfWmQ9YNrKXU3GJfwPSGA+boRaBTVCNQD26B+umL6UC5SyCduxzyRCrKkqtfz8Ex93ZE37wvPiXWa/fYu4YxVs7SL8bSTwmeqt6pmH8X8tQreTE+I+dQMhYS8TCWjibNaLFxShIHin34R3PId2q6jDzPpAkVZ/5BPHn2yjhgtqYVTKqcChZr+fL0a/jIZcAi3VPGuy2jLjYHLOmkScdJU5ZBmriE/u0Z+OEAaU62FsDKQ148zea46Cf8pHMBVqf+dFzwo/h4R7E7YCrpuVwbk2qkMxUGWKut0s873Jx0ygmKwPSc3vBl7iN9zi2tDLBDtkFLdsO5+GG4lj4G1/cfSuFV6p4Xcn8zPRUHGWA7bIPXlMshuHx8NsWYuzwl8Q0RbGyjHduZ2xOU5B0MsM22ibBYR1p3Yh0yEWVrMz6oOmCmKa8zwNgco9oOeKlfvZkquiUHXztMkNkmqPs35YYVhhqro2/+ersIc6PWo3Yhq+redalZULkwZTGVryW2fj2AURWDemAzopvvfdQI1OidPGw1+S47QKbV7OL1KtHPJTguvgfmdypZoO1+vk87cHp1C6MBEv0vVRFwqzt5GD9Pcrb/KJj7IKMo2/Uckh/oEkvH84aQPMnQ6z8foM5YHpTPu+aHkJxaMmDMDpCvsAOR1ZurSbu9lpqaU680N8hZqRurWo2enpLr/c1K28nDsFghT73yAFsXOBUwZmwB7yo7RJq67xUYkcSiq+Dy8hWf+LWxdcPqd/upO4ehHXqLfGvy/wYtLN7opDzshmXSkuwF7BvZqnJbzKjY7k3dLCxPXJwy+2KgQov2LZoptaNbH0KMygCTYJaiqLIwiK8As9G3NGJal+KbpSdbFLyN/HDOMPt6Owz/8aQGIEOeeX0iyiL+tNTtTTFXtj0B5d3fwWg7av5f24nDWvXW24gPzrMwSC0L03/Q7bSCbad5lnwS+bfJn4D5FcT1A1fnqFbtWZeWPqmpu/H0dKYWU/S6vfXWNT1hXqMxSa/79Fnt5L7M3xJMzed/AgwACck4Vad8OAQAAAAASUVORK5CYII="
    },
    "85c0": function(e, t, i) {
        "use strict";
        i.r(t);
        var s = function() {
                var e = this,
                    t = e.$createElement,
                    s = e._self._c || t;
                return s("div", {
                        staticClass: "app-container"
                    },
                    [s("div", {
                            staticClass: "sidebar-wrapper"
                        },
                        [s("treebar", {
                            attrs: {
                                deviceList: e.userDeviceList,
                                groupList: e.userGroupList
                            },
                            on: {
                                update: e.handleTreebarUpdate,
                                check: function(t) {
                                    return e.handleTreebarCheckedChange(t)
                                }
                            }
                        })], 1), s("div", {
                            staticClass: "device-wrapper"
                        },
                        [s("div", {
                                staticClass: "control-container",
                                class: {
                                    "headroom--pinned": e.fixedControl
                                }
                            },
                            [s("div", {
                                    staticClass: "left"
                                },
                                [s("el-checkbox", {
                                        on: {
                                            change: e.handleDeviceAllSelectChange
                                        },
                                        model: {
                                            value: e.allSelect,
                                            callback: function(t) {
                                                e.allSelect = t
                                            },
                                            expression: "allSelect"
                                        }
                                    },
                                    [e._v("全选")]), s("el-divider", {
                                    attrs: {
                                        direction: "vertical"
                                    }
                                }), s("span", {
                                        staticClass: "upload",
                                        on: {
                                            click: e.installAppClick
                                        }
                                    },
                                    [s("svg-icon", {
                                        attrs: {
                                            "icon-class": "upload_app"
                                        }
                                    }), e._v(" 安装应用 ")], 1), s("span", {
                                        staticClass: "upload",
                                        on: {
                                            click: e.uploadFileClick
                                        }
                                    },
                                    [s("svg-icon", {
                                        attrs: {
                                            "icon-class": "upload_file"
                                        }
                                    }), e._v(" 上传文件 ")], 1), s("el-divider", {
                                    attrs: {
                                        direction: "vertical"
                                    }
                                })], 1), s("div", {
                                    staticClass: "mid"
                                },
                                [s("el-button", {
                                        staticClass: "control-button",
                                        attrs: {
                                            disabled: e.selectDeviceIdList.length < 2,
                                            type: "primary",
                                            size: "small",
                                            icon: "el-icon-mobile"
                                        },
                                        on: {
                                            click: function(t) {
                                                return e.handleContorlButtonClick("DEVICE_SYNC")
                                            }
                                        }
                                    },
                                    [e._v(" 云机同步 ")]), e.userLiveList.length > 0 ? s("el-button", {
                                        staticClass: "control-button",
                                        attrs: {
                                            disabled: 0 === e.selectDeviceIdList.length,
                                            type: "primary",
                                            size: "small",
                                            icon: "el-icon-video-camera"
                                        },
                                        on: {
                                            click: e.handleUserLiveStart
                                        }
                                    },
                                    [e._v(" 多路直播 ")]) : e._e(), s("el-dropdown", {
                                        on: {
                                            command: e.handleContorlButtonClick
                                        }
                                    },
                                    [s("el-button", {
                                            staticClass: "control-button",
                                            staticStyle: {
                                                "margin-left": "10px"
                                            },
                                            attrs: {
                                                disabled: 0 === e.selectDeviceIdList.length || !e.deviceControlEnabled,
                                                type: "primary",
                                                size: "small"
                                            }
                                        },
                                        [e._v(" 批量操作"), s("i", {
                                            staticClass: "el-icon-arrow-down el-icon--right"
                                        })]), s("el-dropdown-menu", {
                                            attrs: {
                                                slot: "dropdown"
                                            },
                                            slot: "dropdown"
                                        },
                                        e._l(e.controlButtons, (function(t) {
                                            return s("el-dropdown-item", {
                                                    key: t.name,
                                                    attrs: {
                                                        command: t.action
                                                    }
                                                },
                                                [e._v(" " + e._s(t.name) + " ")])
                                        })), 1)], 1)], 1), s("div", {
                                    staticClass: "right"
                                },
                                [s("el-divider", {
                                    attrs: {
                                        direction: "vertical"
                                    }
                                }), s("el-button", {
                                        staticClass: "control-item",
                                        staticStyle: {
                                            "margin-left": "10px"
                                        },
                                        attrs: {
                                            size: "small",
                                            icon: "el-icon-refresh"
                                        },
                                        on: {
                                            click: e.getUserDeviceList
                                        }
                                    },
                                    [e._v(" 刷新 ")]), s("el-dropdown", {
                                        attrs: {
                                            size: "small"
                                        },
                                        on: {
                                            command: e.handleDeviceListAutoRefresh
                                        }
                                    },
                                    [s("span", {
                                            staticClass: "el-dropdown-link"
                                        },
                                        [e._v(" " + e._s(e.autoRefreshText)), s("i", {
                                            staticClass: "el-icon-arrow-down el-icon--right"
                                        })]), s("el-dropdown-menu", {
                                            attrs: {
                                                slot: "dropdown"
                                            },
                                            slot: "dropdown"
                                        },
                                        [s("el-dropdown-item", {
                                                attrs: {
                                                    command: 10
                                                }
                                            },
                                            [10 === e.autoRefreshTimeout ? s("i", {
                                                staticClass: "el-icon-check"
                                            }) : e._e(), e._v("间隔10s")]), s("el-dropdown-item", {
                                                attrs: {
                                                    command: 20
                                                }
                                            },
                                            [20 === e.autoRefreshTimeout ? s("i", {
                                                staticClass: "el-icon-check"
                                            }) : e._e(), e._v("间隔20s")]), s("el-dropdown-item", {
                                                attrs: {
                                                    command: 300
                                                }
                                            },
                                            [300 === e.autoRefreshTimeout ? s("i", {
                                                staticClass: "el-icon-check"
                                            }) : e._e(), e._v("间隔5分钟")]), s("el-dropdown-item", {
                                                attrs: {
                                                    command: 0,
                                                    divided: ""
                                                }
                                            },
                                            [0 === e.autoRefreshTimeout ? s("i", {
                                                staticClass: "el-icon-check"
                                            }) : e._e(), e._v("不自动刷新")])], 1)], 1), s("el-dropdown", {
                                        attrs: {
                                            size: "small"
                                        },
                                        on: {
                                            command: e.handleDeviceListPreviewSize
                                        }
                                    },
                                    [s("span", {
                                            staticClass: "el-dropdown-link"
                                        },
                                        [e._v(" 预览图( " + e._s(e.previewSizeText) + " )"), s("i", {
                                            staticClass: "el-icon-arrow-down el-icon--right"
                                        })]), s("el-dropdown-menu", {
                                            attrs: {
                                                slot: "dropdown"
                                            },
                                            slot: "dropdown"
                                        },
                                        [s("el-dropdown-item", {
                                                attrs: {
                                                    command: "mini"
                                                }
                                            },
                                            ["mini" === e.previewSize ? s("i", {
                                                staticClass: "el-icon-check"
                                            }) : e._e(), e._v("超小")]), s("el-dropdown-item", {
                                                attrs: {
                                                    command: "small"
                                                }
                                            },
                                            ["small" === e.previewSize ? s("i", {
                                                staticClass: "el-icon-check"
                                            }) : e._e(), e._v("小")]), s("el-dropdown-item", {
                                                attrs: {
                                                    command: "normal"
                                                }
                                            },
                                            ["normal" === e.previewSize ? s("i", {
                                                staticClass: "el-icon-check"
                                            }) : e._e(), e._v("中")]), s("el-dropdown-item", {
                                                attrs: {
                                                    command: "large"
                                                }
                                            },
                                            ["large" === e.previewSize ? s("i", {
                                                staticClass: "el-icon-check"
                                            }) : e._e(), e._v("大")]), s("el-dropdown-item", {
                                                attrs: {
                                                    command: "super"
                                                }
                                            },
                                            ["super" === e.previewSize ? s("i", {
                                                staticClass: "el-icon-check"
                                            }) : e._e(), e._v("超大")])], 1)], 1)], 1)]), s("div", {
                                staticClass: "device-container",
                                class: [e.previewSize]
                            },
                            [e._l(e.deviceCheckedList, (function(t) {
                                return [s("device-card", {
                                    key: t.deviceId,
                                    attrs: {
                                        allSelect: e.allSelect,
                                        device: t,
                                        size: e.previewSize
                                    },
                                    on: {
                                        "select-change": function(i) {
                                            return e.handleDeviceSelectChange(t.deviceId, i)
                                        },
                                        "remote-control": function(i) {
                                            return e.handleDeviceRemoteControl(t.deviceId)
                                        },
                                        restart: function(i) {
                                            return e.handleDeviceEvent("RESTART", t.deviceId)
                                        },
                                        "ip-switch": function(i) {
                                            return e.handleDeviceEvent("IP_SWITCH", t.deviceId)
                                        },
                                        "ip-close": function(i) {
                                            return e.handleDeviceEvent("IP_CLOSE", t.deviceId)
                                        }
                                    }
                                })]
                            }))], 2)]), e._l(e.deviceRemoteControlData, (function(t) {
                        return s("device-remote-control", {
                            key: t.id,
                            attrs: {
                                device: t
                            },
                            on: {
                                close: function(i) {
                                    return e.handleDeviceRemoteControlClose(t.id)
                                }
                            }
                        })
                    })), s("el-dialog", {
                            attrs: {
                                visible: e.appInstallDialogVisible,
                                title: "上传应用",
                                "custom-class": "upload-dialog",
                                width: "520px",
                                "close-on-click-modal": !1
                            },
                            on: {
                                "update:visible": function(t) {
                                    e.appInstallDialogVisible = t
                                }
                            }
                        },
                        [s("el-tabs", {
                                model: {
                                    value: e.appListTab,
                                    callback: function(t) {
                                        e.appListTab = t
                                    },
                                    expression: "appListTab"
                                }
                            },
                            [s("el-tab-pane", {
                                    attrs: {
                                        label: "已上传应用",
                                        name: "upload"
                                    }
                                },
                                [s("el-table", {
                                        directives: [{
                                            name: "loading",
                                            rawName: "v-loading",
                                            value: e.appUploadListLoading,
                                            expression: "appUploadListLoading"
                                        }],
                                        attrs: {
                                            data: e.appUploadTableList,
                                            "highlight-current-row": "",
                                            size: "small",
                                            "max-height": "380"
                                        }
                                    },
                                    [s("el-table-column", {
                                        attrs: {
                                            label: "应用名称",
                                            align: "center"
                                        },
                                        scopedSlots: e._u([{
                                            key: "default",
                                            fn: function(t) {
                                                var i = t.row;
                                                return [s("span", [e._v(e._s(i.appname))])]
                                            }
                                        }])
                                    }), s("el-table-column", {
                                        attrs: {
                                            label: "版本号",
                                            width: "150",
                                            align: "center"
                                        },
                                        scopedSlots: e._u([{
                                            key: "default",
                                            fn: function(t) {
                                                var i = t.row;
                                                return [s("span", [e._v(e._s(i.versionname))])]
                                            }
                                        }])
                                    }), s("el-table-column", {
                                        attrs: {
                                            label: "管理",
                                            width: "150",
                                            align: "center"
                                        },
                                        scopedSlots: e._u([{
                                            key: "default",
                                            fn: function(t) {
                                                var i = t.row;
                                                return [s("el-button", {
                                                        attrs: {
                                                            type: "text",
                                                            size: "mini"
                                                        },
                                                        on: {
                                                            click: function(t) {
                                                                return e.handleAppUploadInstall(i.packagename)
                                                            }
                                                        }
                                                    },
                                                    [e._v(" 安装 ")]), s("el-button", {
                                                        attrs: {
                                                            type: "text",
                                                            size: "mini"
                                                        },
                                                        on: {
                                                            click: function(t) {
                                                                return e.handleAppUploadDelete(i.packagename)
                                                            }
                                                        }
                                                    },
                                                    [e._v(" 删除 ")])]
                                            }
                                        }])
                                    })], 1)], 1), s("el-tab-pane", {
                                    attrs: {
                                        label: "应用市场",
                                        name: "store"
                                    }
                                },
                                [s("el-table", {
                                        directives: [{
                                            name: "loading",
                                            rawName: "v-loading",
                                            value: e.appStoreListLoading,
                                            expression: "appStoreListLoading"
                                        }],
                                        attrs: {
                                            data: e.appStoreTableList,
                                            "highlight-current-row": "",
                                            "max-height": "380",
                                            size: "small"
                                        }
                                    },
                                    [s("el-table-column", {
                                        attrs: {
                                            label: "应用名称",
                                            align: "center"
                                        },
                                        scopedSlots: e._u([{
                                            key: "default",
                                            fn: function(t) {
                                                var i = t.row;
                                                return [s("span", [e._v(e._s(i.appname))])]
                                            }
                                        }])
                                    }), s("el-table-column", {
                                        attrs: {
                                            label: "版本号",
                                            width: "150",
                                            align: "center"
                                        },
                                        scopedSlots: e._u([{
                                            key: "default",
                                            fn: function(t) {
                                                var i = t.row;
                                                return [s("span", [e._v(e._s(i.versionname))])]
                                            }
                                        }])
                                    }), s("el-table-column", {
                                        attrs: {
                                            label: "管理",
                                            width: "150",
                                            align: "center"
                                        },
                                        scopedSlots: e._u([{
                                            key: "default",
                                            fn: function(t) {
                                                var i = t.row;
                                                return [s("el-button", {
                                                        attrs: {
                                                            type: "text",
                                                            size: "mini"
                                                        },
                                                        on: {
                                                            click: function(t) {
                                                                return e.handleAppStoreInstall(i.packagename)
                                                            }
                                                        }
                                                    },
                                                    [e._v(" 安装 ")])]
                                            }
                                        }])
                                    })], 1)], 1)], 1), s("span", {
                                staticClass: "dialog-footer",
                                attrs: {
                                    slot: "footer"
                                },
                                slot: "footer"
                            },
                            ["upload" === e.appListTab ? s("span", {
                                    staticStyle: {
                                        color: "#909399",
                                        "font-size": "13px",
                                        "margin-right": "20px"
                                    }
                                },
                                [e._v("安装应用需先将应用上传, 成功以后可以在这里进行安装即可！")]) : e._e(), "upload" === e.appListTab ? s("el-button", {
                                    attrs: {
                                        size: "small",
                                        type: "primary"
                                    },
                                    on: {
                                        click: e.userUploadAppClick
                                    }
                                },
                                [e._v(" 上传应用 ")]) : e._e()], 1)], 1), s("el-dialog", {
                            attrs: {
                                visible: e.uploadDialogVisible,
                                title: e.isAppInstall ? "上传应用": "上传文件",
                                width: "480px",
                                "custom-class": "upload-dialog",
                                "close-on-click-modal": !1
                            },
                            on: {
                                "update:visible": function(t) {
                                    e.uploadDialogVisible = t
                                },
                                close: e.handleUploadDialogClose
                            }
                        },
                        [s("div", {
                                staticClass: "content"
                            },
                            [s("div", {
                                    staticClass: "tooltip"
                                },
                                [e.isAppInstall ? e._e() : s("p", [e._v(e._s(e.uploadTootip))]), s("p", [e._v("文件名请不要包含空格、斜杠和中文等特殊字符")]), e.isAppInstall ? s("p", {
                                        staticStyle: {
                                            color: "#F56C6C"
                                        }
                                    },
                                    [s("i", {
                                        staticClass: "el-icon-warning",
                                        staticStyle: {
                                            "margin-right": "5px"
                                        }
                                    }), e._v("如本地上传速度较慢，建议使用APK下载地址进行上传")]) : e._e()]), s("div", {
                                    staticClass: "button"
                                },
                                [e.isAppInstall ? e._e() : [s("el-input", {
                                        staticStyle: {
                                            width: "auto"
                                        },
                                        attrs: {
                                            placeholder: "请输入要存储的云机路径",
                                            size: "small"
                                        },
                                        model: {
                                            value: e.uploadFilePath,
                                            callback: function(t) {
                                                e.uploadFilePath = t
                                            },
                                            expression: "uploadFilePath"
                                        }
                                    },
                                    [s("template", {
                                            slot: "prepend"
                                        },
                                        [e._v("/sdcard")])], 2)], e.isAppInstall ? [s("el-input", {
                                    attrs: {
                                        placeholder: "请输入APK下载地址",
                                        size: "small"
                                    },
                                    model: {
                                        value: e.uploadAppRemotePath,
                                        callback: function(t) {
                                            e.uploadAppRemotePath = t
                                        },
                                        expression: "uploadAppRemotePath"
                                    }
                                }), s("el-button", {
                                        style: {
                                            marginLeft: "10px"
                                        },
                                        attrs: {
                                            type: "primary",
                                            size: "small"
                                        },
                                        on: {
                                            click: e.handleAppRemoteUpload
                                        }
                                    },
                                    [e._v(" 确定 ")])] : e._e(), s("el-upload", {
                                        ref: "upload",
                                        attrs: {
                                            action: e.uploadAction,
                                            data: e.uploadData,
                                            name: e.uploadName,
                                            multiple: !1,
                                            "on-error": e.handleUploadError,
                                            "on-success": e.handleUploadSuccess,
                                            "on-change": e.handleUploadChange,
                                            "before-upload": e.handleBeforeUpload,
                                            "show-file-list": !1
                                        }
                                    },
                                    [s("el-button", {
                                            style: {
                                                marginLeft: "10px"
                                            },
                                            attrs: {
                                                type: "primary",
                                                size: "small"
                                            }
                                        },
                                        [e._v(" " + e._s(e.isAppInstall ? "本地上传": "选择文件") + " ")])], 1)], 2)])]), e.uploadList.length > 0 ? s("upload-drawer", {
                            ref: "uploadDrawer"
                        },
                        [s("upload-list", {
                            attrs: {
                                slot: "content",
                                files: e.uploadList
                            },
                            on: {
                                remove: function(t) {
                                    return e.handleUploadListRemove(t)
                                }
                            },
                            slot: "content"
                        })], 1) : e._e(), s("el-dialog", {
                            attrs: {
                                visible: e.userPasswordDialogShow,
                                title: "修改密码",
                                width: "380px",
                                center: "",
                                "custom-class": "password-dialog",
                                "close-on-click-modal": !1
                            },
                            on: {
                                close: e.userPasswordDialogClose
                            }
                        },
                        [s("el-form", {
                                ref: "passwordForm",
                                attrs: {
                                    model: e.passwordForm,
                                    rules: e.passwordFormRules,
                                    "label-width": "100px",
                                    size: "mini"
                                }
                            },
                            [s("el-form-item", {
                                    attrs: {
                                        label: "原密码",
                                        prop: "userPassword"
                                    }
                                },
                                [s("el-input", {
                                    attrs: {
                                        tabindex: "1",
                                        "show-password": ""
                                    },
                                    model: {
                                        value: e.passwordForm.userPassword,
                                        callback: function(t) {
                                            e.$set(e.passwordForm, "userPassword", t)
                                        },
                                        expression: "passwordForm.userPassword"
                                    }
                                })], 1), s("el-form-item", {
                                    attrs: {
                                        label: "新密码",
                                        prop: "newUserPassword"
                                    }
                                },
                                [s("el-input", {
                                    attrs: {
                                        tabindex: "2",
                                        "show-password": ""
                                    },
                                    model: {
                                        value: e.passwordForm.newUserPassword,
                                        callback: function(t) {
                                            e.$set(e.passwordForm, "newUserPassword", t)
                                        },
                                        expression: "passwordForm.newUserPassword"
                                    }
                                })], 1), s("el-form-item", {
                                    attrs: {
                                        label: "确认新密码",
                                        prop: "newUserPasswordConfirm"
                                    }
                                },
                                [s("el-input", {
                                    attrs: {
                                        tabindex: "3",
                                        "show-password": ""
                                    },
                                    model: {
                                        value: e.passwordForm.newUserPasswordConfirm,
                                        callback: function(t) {
                                            e.$set(e.passwordForm, "newUserPasswordConfirm", t)
                                        },
                                        expression: "passwordForm.newUserPasswordConfirm"
                                    }
                                })], 1)], 1), s("span", {
                                staticClass: "dialog-footer",
                                attrs: {
                                    slot: "footer"
                                },
                                slot: "footer"
                            },
                            [s("el-button", {
                                    attrs: {
                                        type: "primary",
                                        size: "mini"
                                    },
                                    on: {
                                        click: e.handlePasswordFormSumbit
                                    }
                                },
                                [e._v(" 确定 ")]), s("el-button", {
                                    attrs: {
                                        size: "mini"
                                    },
                                    on: {
                                        click: e.userPasswordDialogClose
                                    }
                                },
                                [e._v(" 取消 ")])], 1)], 1), s("el-dialog", {
                            attrs: {
                                visible: e.lastPayDialogShow,
                                width: "480px",
                                center: "",
                                title: "当前有订单未支付，不能再次订购",
                                "custom-class": "lastpay-dialog",
                                "close-on-click-modal": !1
                            },
                            on: {
                                "update:visible": function(t) {
                                    e.lastPayDialogShow = t
                                }
                            }
                        },
                        [s("el-form", {
                                attrs: {
                                    model: e.orderLastData,
                                    "label-width": "150px",
                                    size: "small"
                                }
                            },
                            [s("el-form-item", {
                                    attrs: {
                                        label: "订单号:"
                                    }
                                },
                                [e._v(" " + e._s(e.orderLastData.orderNo) + " ")]), s("el-form-item", {
                                    attrs: {
                                        label: "订购内容:"
                                    }
                                },
                                [e._v(" " + e._s(e.orderLastData.content) + " ")]), s("el-form-item", {
                                    attrs: {
                                        label: "支付方式:"
                                    }
                                },
                                [e._v(" " + e._s(e._f("paymentTypeString")(e.orderLastData.paymentType)) + " ")]), s("el-form-item", {
                                    attrs: {
                                        label: "支付金额:"
                                    }
                                },
                                [e._v(" " + e._s(e.orderLastData.userOrderAmount) + "元 ")])], 1), s("span", {
                                staticClass: "dialog-footer",
                                attrs: {
                                    slot: "footer"
                                },
                                slot: "footer"
                            },
                            [s("el-button", {
                                    attrs: {
                                        size: "small",
                                        type: "primary"
                                    },
                                    on: {
                                        click: function(t) {
                                            return e.handlePayOrder(e.orderLastData)
                                        }
                                    }
                                },
                                [e._v(" 继续支付 ")]), s("el-button", {
                                    attrs: {
                                        size: "small"
                                    },
                                    on: {
                                        click: function(t) {
                                            return e.handleCancalOrder(e.orderLastData.orderNo)
                                        }
                                    }
                                },
                                [e._v(" 取消订单 ")])], 1)], 1), s("el-dialog", {
                            attrs: {
                                visible: e.wxpayDialogShow,
                                width: "380px",
                                center: "",
                                title: "微信扫码进行支付",
                                "custom-class": "wxpay-qrcode-dialog",
                                "close-on-click-modal": !1
                            },
                            on: {
                                "update:visible": function(t) {
                                    e.wxpayDialogShow = t
                                }
                            }
                        },
                        [s("div", {
                                staticClass: "qrcode"
                            },
                            [s("qrcode", {
                                attrs: {
                                    value: e.wxpayQrcodeData,
                                    options: {
                                        width: 220,
                                        margin: 0
                                    }
                                }
                            })], 1), s("span", {
                                staticClass: "dialog-footer",
                                attrs: {
                                    slot: "footer"
                                },
                                slot: "footer"
                            },
                            [s("el-button", {
                                    attrs: {
                                        size: "small",
                                        type: "primary"
                                    },
                                    on: {
                                        click: function(t) {
                                            return e.$router.go()
                                        }
                                    }
                                },
                                [e._v(" 已完成支付 ")])], 1)]), s("el-dialog", {
                            attrs: {
                                visible: e.alipayDialogShow,
                                width: "380px",
                                center: "",
                                top: "30vh",
                                title: "请在打开的支付宝页面进行支付",
                                "custom-class": "alipay-qrcode-dialog",
                                "close-on-click-modal": !1
                            },
                            on: {
                                "update:visible": function(t) {
                                    e.alipayDialogShow = t
                                }
                            }
                        },
                        [s("span", {
                                staticClass: "dialog-footer",
                                attrs: {
                                    slot: "footer"
                                },
                                slot: "footer"
                            },
                            [s("el-button", {
                                    attrs: {
                                        size: "small",
                                        type: "primary"
                                    },
                                    on: {
                                        click: function(t) {
                                            return e.$router.go()
                                        }
                                    }
                                },
                                [e._v(" 已完成支付 ")]), s("el-button", {
                                    attrs: {
                                        size: "small"
                                    },
                                    on: {
                                        click: function(t) {
                                            return e.handleCancalOrder(e.orderLastData.orderNo)
                                        }
                                    }
                                },
                                [e._v(" 取消订单 ")])], 1)]), s("el-dialog", {
                            attrs: {
                                visible: e.userPackageOrderDialogShow,
                                width: "650px",
                                "custom-class": "user-device-order-dialog",
                                "close-on-click-modal": !1
                            },
                            on: {
                                open: e.userPackageOrderDialogOpen,
                                close: e.userPackageOrderDialogClose
                            }
                        },
                        [s("el-dialog", {
                                staticClass: "device-select-dialog",
                                attrs: {
                                    title: "选择云机",
                                    visible: e.renewalPackageSelectDialogShow,
                                    "close-on-click-modal": !1,
                                    width: "800px",
                                    "append-to-body": ""
                                },
                                on: {
                                    "update:visible": function(t) {
                                        e.renewalPackageSelectDialogShow = t
                                    }
                                }
                            },
                            [s("el-table", {
                                    ref: "renewalPackageList",
                                    staticStyle: {
                                        "max-width": "780px"
                                    },
                                    attrs: {
                                        data: e.currentRenewalPackageList,
                                        border: "",
                                        "highlight-current-row": "",
                                        size: "mini",
                                        "max-height": "650"
                                    },
                                    on: {
                                        "row-click": e.handleRenewalPackageListRowClick
                                    }
                                },
                                [s("el-table-column", {
                                    attrs: {
                                        fixed: "",
                                        type: "selection",
                                        width: "45"
                                    }
                                }), s("el-table-column", {
                                    attrs: {
                                        label: "云机ID",
                                        prop: "id",
                                        width: "85",
                                        align: "center"
                                    },
                                    scopedSlots: e._u([{
                                        key: "default",
                                        fn: function(t) {
                                            var i = t.row;
                                            return [s("span", [e._v(e._s(i.deviceId))])]
                                        }
                                    }])
                                }), s("el-table-column", {
                                    attrs: {
                                        label: "云机状态",
                                        width: "100",
                                        align: "center"
                                    },
                                    scopedSlots: e._u([{
                                        key: "default",
                                        fn: function(t) {
                                            var i = t.row;
                                            return [s("span", [e._v(e._s(e._f("deviceStatusMapping")(i.deviceStatus)))])]
                                        }
                                    }])
                                }), s("el-table-column", {
                                    attrs: {
                                        label: "到期时间",
                                        "min-width": "150",
                                        align: "center"
                                    },
                                    scopedSlots: e._u([{
                                        key: "default",
                                        fn: function(t) {
                                            var i = t.row;
                                            return [s("span", [e._v(e._s(i.expireTime))])]
                                        }
                                    }])
                                }), s("el-table-column", {
                                        attrs: {
                                            label: "配套服务",
                                            align: "center"
                                        }
                                    },
                                    [s("el-table-column", {
                                        attrs: {
                                            label: "内容",
                                            width: "160",
                                            align: "center"
                                        },
                                        scopedSlots: e._u([{
                                            key: "default",
                                            fn: function(t) {
                                                var i = t.row;
                                                return [e._l(i.businessServiceList, (function(t) {
                                                    return [s("p", {
                                                            key: t.businessServiceId
                                                        },
                                                        [e._v(e._s(t.businessServiceName))])]
                                                }))]
                                            }
                                        }])
                                    }), s("el-table-column", {
                                        attrs: {
                                            label: "到期时间",
                                            width: "180",
                                            align: "center"
                                        },
                                        scopedSlots: e._u([{
                                            key: "default",
                                            fn: function(t) {
                                                var i = t.row;
                                                return [e._l(i.businessServiceList, (function(t) {
                                                    return [s("p", {
                                                            key: t.businessServiceId
                                                        },
                                                        [e._v(e._s(t.businessExpireTime))])]
                                                }))]
                                            }
                                        }])
                                    })], 1)], 1), s("span", {
                                    staticClass: "dialog-footer",
                                    attrs: {
                                        slot: "footer"
                                    },
                                    slot: "footer"
                                },
                                [s("span", {
                                        staticStyle: {
                                            float: "left",
                                            "font-size": "14px",
                                            "line-height": "32px"
                                        }
                                    },
                                    [e._v("选中"), s("span", {
                                            staticStyle: {
                                                color: "#F56C6C",
                                                "font-weight": "600",
                                                padding: "0 3px"
                                            }
                                        },
                                        [e._v(e._s(e.getSelectionLength("renewalPackageList")))]), e._v("台云机 ")]), s("el-button", {
                                        attrs: {
                                            type: "primary",
                                            size: "small"
                                        },
                                        on: {
                                            click: e.handleRenewalPackageSelectSubmit
                                        }
                                    },
                                    [e._v("确定 ")])], 1)], 1), s("el-tabs", {
                                directives: [{
                                    name: "loading",
                                    rawName: "v-loading",
                                    value: e.userPackageOrderDialogLoding,
                                    expression: "userPackageOrderDialogLoding"
                                }],
                                attrs: {
                                    type: "card"
                                },
                                on: {
                                    "tab-click": e.handlePackageTabClick
                                },
                                model: {
                                    value: e.packageOrderTabName,
                                    callback: function(t) {
                                        e.packageOrderTabName = t
                                    },
                                    expression: "packageOrderTabName"
                                }
                            },
                            [s("el-tab-pane", {
                                    attrs: {
                                        label: "套餐订购",
                                        name: "order"
                                    }
                                },
                                [s("el-form", {
                                        ref: "packageForm",
                                        attrs: {
                                            model: e.packageForm,
                                            "label-width": "80px",
                                            size: "small"
                                        }
                                    },
                                    [s("el-form-item", {
                                            staticClass: "package-version-item",
                                            attrs: {
                                                label: "套餐版本"
                                            }
                                        },
                                        [s("el-radio-group", {
                                                model: {
                                                    value: e.packageForm.id,
                                                    callback: function(t) {
                                                        e.$set(e.packageForm, "id", t)
                                                    },
                                                    expression: "packageForm.id"
                                                }
                                            },
                                            e._l(e.packageOrderList, (function(t) {
                                                return s("el-radio-button", {
                                                        key: t.id,
                                                        attrs: {
                                                            label: t.id
                                                        }
                                                    },
                                                    [s("el-badge", {
                                                            attrs: {
                                                                value: t.flagDesc
                                                            }
                                                        },
                                                        [e._v(" " + e._s(t.packetName) + " ")])], 1)
                                            })), 1)], 1), s("el-form-item", {
                                            attrs: {
                                                label: "套餐介绍"
                                            }
                                        },
                                        [s("span", [e._v(e._s(e.getPackageDesc()))])]), s("el-form-item", {
                                            attrs: {
                                                label: "套餐时长"
                                            }
                                        },
                                        [s("span", [e._v(e._s(e.getPackageDays()) + "天")])]), s("el-form-item", {
                                            attrs: {
                                                label: "购买数量"
                                            }
                                        },
                                        [s("el-input-number", {
                                            attrs: {
                                                "controls-position": "right",
                                                min: 1,
                                                max: 1e3,
                                                step: 1,
                                                "step-strictly": ""
                                            },
                                            model: {
                                                value: e.packageForm.applyNum,
                                                callback: function(t) {
                                                    e.$set(e.packageForm, "applyNum", t)
                                                },
                                                expression: "packageForm.applyNum"
                                            }
                                        })], 1), s("el-form-item", {
                                            attrs: {
                                                label: "支付方式"
                                            }
                                        },
                                        [s("el-radio-group", {
                                                attrs: {
                                                    fill: 2 === e.packageForm.paymentType ? "#0e9dec": "#1AAD19"
                                                },
                                                model: {
                                                    value: e.packageForm.paymentType,
                                                    callback: function(t) {
                                                        e.$set(e.packageForm, "paymentType", t)
                                                    },
                                                    expression: "packageForm.paymentType"
                                                }
                                            },
                                            [s("el-radio-button", {
                                                    attrs: {
                                                        label: 2
                                                    }
                                                },
                                                [s("svg-icon", {
                                                    staticStyle: {
                                                        "margin-right": "3px"
                                                    },
                                                    attrs: {
                                                        "icon-class": "alipay"
                                                    }
                                                }), e._v("支付宝")], 1), s("el-radio-button", {
                                                    attrs: {
                                                        label: 3
                                                    }
                                                },
                                                [s("svg-icon", {
                                                    staticStyle: {
                                                        "margin-right": "3px"
                                                    },
                                                    attrs: {
                                                        "icon-class": "wx"
                                                    }
                                                }), e._v("微 信")], 1)], 1)], 1), s("el-form-item", {
                                            attrs: {
                                                label: "支付金额"
                                            }
                                        },
                                        [s("span", {
                                                staticStyle: {
                                                    color: "#F56C6C",
                                                    "font-weight": "600",
                                                    "font-size": "16px"
                                                }
                                            },
                                            [e._v(e._s(e.getPackagePrice()) + "元")])])], 1)], 1), s("el-tab-pane", {
                                    attrs: {
                                        label: "套餐续费",
                                        name: "renewal"
                                    }
                                },
                                [s("el-form", {
                                        ref: "packageRenewalForm",
                                        attrs: {
                                            model: e.packageForm,
                                            "label-width": "80px",
                                            size: "small"
                                        }
                                    },
                                    [s("el-form-item", {
                                            staticClass: "package-version-item",
                                            attrs: {
                                                label: "套餐版本"
                                            }
                                        },
                                        [s("el-radio-group", {
                                                model: {
                                                    value: e.packageForm.id,
                                                    callback: function(t) {
                                                        e.$set(e.packageForm, "id", t)
                                                    },
                                                    expression: "packageForm.id"
                                                }
                                            },
                                            e._l(e.packageRenewalList, (function(t) {
                                                return s("el-radio-button", {
                                                        key: t.id,
                                                        staticClass: "package-version-item",
                                                        attrs: {
                                                            label: t.id
                                                        }
                                                    },
                                                    [s("el-badge", {
                                                            attrs: {
                                                                value: t.flagDesc
                                                            }
                                                        },
                                                        [e._v(" " + e._s(t.packetName) + " ")])], 1)
                                            })), 1)], 1), s("el-form-item", {
                                            attrs: {
                                                label: "套餐介绍"
                                            }
                                        },
                                        [s("span", [e._v(e._s(e.getPackageDesc()))])]), s("el-form-item", {
                                            attrs: {
                                                label: "套餐时长"
                                            }
                                        },
                                        [s("span", [e._v(e._s(e.getPackageDays()) + "天")])]), s("el-form-item", {
                                            attrs: {
                                                label: "选择云机"
                                            }
                                        },
                                        [s("el-button", {
                                                attrs: {
                                                    type: "primary",
                                                    icon: "el-icon-plus"
                                                },
                                                on: {
                                                    click: function(t) {
                                                        e.renewalPackageSelectDialogShow = !0
                                                    }
                                                }
                                            },
                                            [e._v("点击选择")]), e.packageForm.deviceIdList.length > 0 ? s("div", [e._v(" 已选云机"), s("span", {
                                                staticStyle: {
                                                    color: "#F56C6C",
                                                    "font-weight": "600",
                                                    padding: "0 3px"
                                                }
                                            },
                                            [e._v(" " + e._s(e.packageForm.deviceIdList.length))]), e._v("台 ")]) : e._e()], 1), s("el-form-item", {
                                            attrs: {
                                                label: "支付方式"
                                            }
                                        },
                                        [s("el-radio-group", {
                                                attrs: {
                                                    fill: 2 === e.packageForm.paymentType ? "#0e9dec": "#1AAD19"
                                                },
                                                model: {
                                                    value: e.packageForm.paymentType,
                                                    callback: function(t) {
                                                        e.$set(e.packageForm, "paymentType", t)
                                                    },
                                                    expression: "packageForm.paymentType"
                                                }
                                            },
                                            [s("el-radio-button", {
                                                    attrs: {
                                                        label: 2
                                                    }
                                                },
                                                [s("svg-icon", {
                                                    staticStyle: {
                                                        "margin-right": "3px"
                                                    },
                                                    attrs: {
                                                        "icon-class": "alipay"
                                                    }
                                                }), e._v("支付宝")], 1), s("el-radio-button", {
                                                    attrs: {
                                                        label: 3
                                                    }
                                                },
                                                [s("svg-icon", {
                                                    staticStyle: {
                                                        "margin-right": "3px"
                                                    },
                                                    attrs: {
                                                        "icon-class": "wx"
                                                    }
                                                }), e._v("微 信")], 1)], 1)], 1), s("el-form-item", {
                                            attrs: {
                                                label: "支付金额"
                                            }
                                        },
                                        [s("span", {
                                                staticStyle: {
                                                    color: "#F56C6C",
                                                    "font-weight": "600",
                                                    "font-size": "16px"
                                                }
                                            },
                                            [e._v(e._s(e.getPackagePrice()) + "元")])])], 1)], 1)], 1), s("span", {
                                staticClass: "dialog-footer",
                                attrs: {
                                    slot: "footer"
                                },
                                slot: "footer"
                            },
                            [s("el-button", {
                                    attrs: {
                                        size: "small",
                                        type: "primary"
                                    },
                                    on: {
                                        click: e.handlePackageOrderSumbit
                                    }
                                },
                                [e._v(" 确认支付 ")]), s("el-button", {
                                    attrs: {
                                        size: "small"
                                    },
                                    on: {
                                        click: e.userPackageOrderDialogClose
                                    }
                                },
                                [e._v(" 取消 ")])], 1)], 1), s("el-dialog", {
                            attrs: {
                                visible: e.userDeviceOrderDialogShow,
                                width: "650px",
                                "custom-class": "user-device-order-dialog",
                                "close-on-click-modal": !1
                            },
                            on: {
                                open: e.userDeviceOrderDialogOpen,
                                close: e.userDeviceOrderDialogClose
                            }
                        },
                        [s("el-dialog", {
                                staticClass: "device-select-dialog",
                                attrs: {
                                    title: "选择云机",
                                    visible: e.renewalDeviceSelectDialogShow,
                                    "close-on-click-modal": !1,
                                    width: "800px",
                                    "append-to-body": ""
                                },
                                on: {
                                    "update:visible": function(t) {
                                        e.renewalDeviceSelectDialogShow = t
                                    }
                                }
                            },
                            [s("div", {
                                    staticClass: "filter-container"
                                },
                                [s("el-select", {
                                        staticClass: "filter-item",
                                        staticStyle: {
                                            width: "120px"
                                        },
                                        attrs: {
                                            size: "mini"
                                        },
                                        on: {
                                            change: e.onRenewalFormSiteChange
                                        },
                                        model: {
                                            value: e.renewalForm.site,
                                            callback: function(t) {
                                                e.$set(e.renewalForm, "site", t)
                                            },
                                            expression: "renewalForm.site"
                                        }
                                    },
                                    e._l(e.siteOptions, (function(e) {
                                        return s("el-option", {
                                            key: e.value,
                                            attrs: {
                                                label: e.label,
                                                value: e.value
                                            }
                                        })
                                    })), 1), s("el-select", {
                                        staticClass: "filter-item",
                                        staticStyle: {
                                            width: "120px"
                                        },
                                        attrs: {
                                            size: "mini"
                                        },
                                        on: {
                                            change: e.onRenewalFormVersionChange
                                        },
                                        model: {
                                            value: e.renewalForm.version,
                                            callback: function(t) {
                                                e.$set(e.renewalForm, "version", t)
                                            },
                                            expression: "renewalForm.version"
                                        }
                                    },
                                    e._l(e.getDeviceVersionIdList(e.renewalForm.site), (function(e) {
                                        return s("el-option", {
                                            key: e.deviceVersionId,
                                            attrs: {
                                                label: e.deviceVersionName,
                                                value: e.deviceVersionId
                                            }
                                        })
                                    })), 1)], 1), s("el-table", {
                                    ref: "renewalDeviceList",
                                    staticStyle: {
                                        "max-width": "780px"
                                    },
                                    attrs: {
                                        data: e.currentRenewalDeviceList,
                                        border: "",
                                        "highlight-current-row": "",
                                        size: "mini",
                                        "max-height": "650"
                                    },
                                    on: {
                                        "row-click": e.handleRenewalDeviceListRowClick
                                    }
                                },
                                [s("el-table-column", {
                                    attrs: {
                                        fixed: "",
                                        type: "selection",
                                        width: "45"
                                    }
                                }), s("el-table-column", {
                                    attrs: {
                                        label: "云机ID",
                                        prop: "id",
                                        width: "85",
                                        align: "center"
                                    },
                                    scopedSlots: e._u([{
                                        key: "default",
                                        fn: function(t) {
                                            var i = t.row;
                                            return [s("span", [e._v(e._s(i.deviceId))])]
                                        }
                                    }])
                                }), s("el-table-column", {
                                    attrs: {
                                        label: "云机状态",
                                        width: "100",
                                        align: "center"
                                    },
                                    scopedSlots: e._u([{
                                        key: "default",
                                        fn: function(t) {
                                            var i = t.row;
                                            return [s("span", [e._v(e._s(e._f("deviceStatusMapping")(i.deviceStatus)))])]
                                        }
                                    }])
                                }), s("el-table-column", {
                                    attrs: {
                                        label: "到期时间",
                                        "min-width": "150",
                                        align: "center"
                                    },
                                    scopedSlots: e._u([{
                                        key: "default",
                                        fn: function(t) {
                                            var i = t.row;
                                            return [s("span", [e._v(e._s(i.expireTime))])]
                                        }
                                    }])
                                }), s("el-table-column", {
                                        attrs: {
                                            label: "配套服务",
                                            align: "center"
                                        }
                                    },
                                    [s("el-table-column", {
                                        attrs: {
                                            label: "内容",
                                            width: "160",
                                            align: "center"
                                        },
                                        scopedSlots: e._u([{
                                            key: "default",
                                            fn: function(t) {
                                                var i = t.row;
                                                return [e._l(i.businessServiceList, (function(t) {
                                                    return [s("p", {
                                                            key: t.businessServiceId
                                                        },
                                                        [e._v(e._s(t.businessServiceName))])]
                                                }))]
                                            }
                                        }])
                                    }), s("el-table-column", {
                                        attrs: {
                                            label: "到期时间",
                                            width: "180",
                                            align: "center"
                                        },
                                        scopedSlots: e._u([{
                                            key: "default",
                                            fn: function(t) {
                                                var i = t.row;
                                                return [e._l(i.businessServiceList, (function(t) {
                                                    return [s("p", {
                                                            key: t.businessServiceId
                                                        },
                                                        [e._v(e._s(t.businessExpireTime))])]
                                                }))]
                                            }
                                        }])
                                    })], 1)], 1), s("span", {
                                    staticClass: "dialog-footer",
                                    attrs: {
                                        slot: "footer"
                                    },
                                    slot: "footer"
                                },
                                [s("span", {
                                        staticStyle: {
                                            float: "left",
                                            "font-size": "14px",
                                            "line-height": "32px"
                                        }
                                    },
                                    [e._v("选中"), s("span", {
                                            staticStyle: {
                                                color: "#F56C6C",
                                                "font-weight": "600",
                                                padding: "0 3px"
                                            }
                                        },
                                        [e._v(e._s(e.$refs["renewalDeviceList"] ? e.$refs["renewalDeviceList"].selection.length: 0))]), e._v("台云机 ")]), s("el-button", {
                                        attrs: {
                                            type: "primary",
                                            size: "small"
                                        },
                                        on: {
                                            click: e.handleRenewalDeviceSelectSubmit
                                        }
                                    },
                                    [e._v("确定 ")])], 1)], 1), s("el-tabs", {
                                directives: [{
                                    name: "loading",
                                    rawName: "v-loading",
                                    value: e.userDeviceOrderDialogLoding,
                                    expression: "userDeviceOrderDialogLoding"
                                }],
                                attrs: {
                                    type: "card"
                                },
                                model: {
                                    value: e.deviceOrderTabName,
                                    callback: function(t) {
                                        e.deviceOrderTabName = t
                                    },
                                    expression: "deviceOrderTabName"
                                }
                            },
                            [s("el-tab-pane", {
                                    attrs: {
                                        label: "云机订购",
                                        name: "order"
                                    }
                                },
                                [s("el-form", {
                                        ref: "orderForm",
                                        attrs: {
                                            model: e.orderForm,
                                            "label-width": "80px",
                                            size: "small"
                                        }
                                    },
                                    [s("el-form-item", {
                                            attrs: {
                                                label: "选择站点"
                                            }
                                        },
                                        [s("el-radio-group", {
                                                on: {
                                                    change: e.onOrderFormSiteChange
                                                },
                                                model: {
                                                    value: e.orderForm.site,
                                                    callback: function(t) {
                                                        e.$set(e.orderForm, "site", t)
                                                    },
                                                    expression: "orderForm.site"
                                                }
                                            },
                                            e._l(e.siteOptions, (function(t) {
                                                return s("el-radio-button", {
                                                        key: t.value,
                                                        attrs: {
                                                            label: t.value
                                                        }
                                                    },
                                                    [e._v(e._s(t.label))])
                                            })), 1), s("el-tooltip", {
                                                attrs: {
                                                    content: "使用多路直播，请在二站购买云机",
                                                    placement: "right"
                                                }
                                            },
                                            [s("i", {
                                                staticClass: "el-icon-question",
                                                staticStyle: {
                                                    "font-size": "16px",
                                                    "margin-left": "5px",
                                                    cursor: "pointer"
                                                }
                                            })])], 1), s("el-form-item", {
                                            attrs: {
                                                label: "云机版本"
                                            }
                                        },
                                        [s("el-radio-group", {
                                                model: {
                                                    value: e.orderForm.version,
                                                    callback: function(t) {
                                                        e.$set(e.orderForm, "version", t)
                                                    },
                                                    expression: "orderForm.version"
                                                }
                                            },
                                            e._l(e.getDeviceVersionIdList(e.orderForm.site), (function(t) {
                                                return s("el-radio-button", {
                                                        key: t.deviceVersionId,
                                                        attrs: {
                                                            label: t.deviceVersionId
                                                        }
                                                    },
                                                    [e._v(" " + e._s(t.deviceVersionName))])
                                            })), 1)], 1), s("el-form-item", {
                                            attrs: {
                                                label: "订购时长"
                                            }
                                        },
                                        [s("el-radio-group", {
                                                model: {
                                                    value: e.orderForm.days,
                                                    callback: function(t) {
                                                        e.$set(e.orderForm, "days", t)
                                                    },
                                                    expression: "orderForm.days"
                                                }
                                            },
                                            e._l(e.getDevicePriceList(e.orderForm.site, e.orderForm.version), (function(t) {
                                                return s("el-radio-button", {
                                                        key: t.productDays,
                                                        attrs: {
                                                            label: t.productDays
                                                        }
                                                    },
                                                    [e._v(" " + e._s(t.productDays) + "天" + e._s(t.userProductPrice) + "元")])
                                            })), 1)], 1), s("el-form-item", {
                                            attrs: {
                                                label: "订购数量1"
                                            }
                                        },
                                        [s("el-input-number", {
                                            attrs: {
                                                "controls-position": "right",
                                                min: 2,
                                                max: 1e3,
                                                step: 1,
                                                "step-strictly": ""
                                            },
                                            model: {
                                                value: e.orderForm.num,
                                                callback: function(t) {
                                                    e.$set(e.orderForm, "num", t)
                                                },
                                                expression: "orderForm.num"
                                            }
                                        })], 1), s("el-form-item", {
                                            attrs: {
                                                label: "配套服务"
                                            }
                                        },
                                        [s("el-switch", {
                                            model: {
                                                value: e.orderForm.serviceSwitch,
                                                callback: function(t) {
                                                    e.$set(e.orderForm, "serviceSwitch", t)
                                                },
                                                expression: "orderForm.serviceSwitch"
                                            }
                                        }), s("el-tooltip", {
                                                attrs: {
                                                    content: "服务时间与云机订购时长一致",
                                                    placement: "right"
                                                }
                                            },
                                            [s("i", {
                                                staticClass: "el-icon-question",
                                                staticStyle: {
                                                    "font-size": "16px",
                                                    "margin-left": "5px",
                                                    cursor: "pointer"
                                                }
                                            })]), e.orderForm.serviceSwitch ? s("el-checkbox-group", {
                                                on: {
                                                    change: e.handleOrderFormServicesChange
                                                },
                                                model: {
                                                    value: e.orderForm.services,
                                                    callback: function(t) {
                                                        e.$set(e.orderForm, "services", t)
                                                    },
                                                    expression: "orderForm.services"
                                                }
                                            },
                                            e._l(e.getDeviceServiceList(e.orderForm.site, e.orderForm.days), (function(t) {
                                                return s("el-checkbox", {
                                                        key: t.businessServiceId,
                                                        staticClass: "device-service-checkbox",
                                                        attrs: {
                                                            label: t.businessServiceId,
                                                            disabled: e.isServiceDisabled(e.orderForm, t.businessServiceId),
                                                            border: ""
                                                        },
                                                        on: {
                                                            change: function(i) {
                                                                return e.handleOrderFormServiceChange(t)
                                                            }
                                                        }
                                                    },
                                                    [e._v(" " + e._s(t.businessServiceName + " " + e.orderForm.days + "天") + e._s(t.userProductPrice ? t.userProductPrice + "元": "") + " "), s("el-button", {
                                                            staticStyle: {
                                                                "font-size": "10px"
                                                            },
                                                            attrs: {
                                                                type: "text",
                                                                size: "mini"
                                                            },
                                                            on: {
                                                                click: function(i) {
                                                                    return e.downServiceHelpDoc(t.businessServiceId)
                                                                }
                                                            }
                                                        },
                                                        [e._v(" 服务介绍 ")]), 7 === t.businessServiceId ? s("div", {
                                                            staticClass: "device-service-checkbox__content"
                                                        },
                                                        [s("el-radio-group", {
                                                                attrs: {
                                                                    size: "mini"
                                                                },
                                                                model: {
                                                                    value: e.orderForm.ipPorxyType,
                                                                    callback: function(t) {
                                                                        e.$set(e.orderForm, "ipPorxyType", t)
                                                                    },
                                                                    expression: "orderForm.ipPorxyType"
                                                                }
                                                            },
                                                            e._l(e.getDeviceServiceChildrenList(t, e.orderForm.days), (function(t) {
                                                                return s("el-radio-button", {
                                                                        key: t.businessServiceId,
                                                                        attrs: {
                                                                            size: "mini",
                                                                            label: t.businessServiceId
                                                                        }
                                                                    },
                                                                    [e._v(" " + e._s(t.businessServiceName.substring(4)) + e._s(t.userProductPrice) + "元 ")])
                                                            })), 1)], 1) : e._e()], 1)
                                            })), 1) : e._e()], 1), s("el-form-item", {
                                            attrs: {
                                                label: "支付方式"
                                            }
                                        },
                                        [s("el-radio-group", {
                                                attrs: {
                                                    fill: 2 === e.orderForm.paymentType ? "#0e9dec": "#1AAD19"
                                                },
                                                model: {
                                                    value: e.orderForm.paymentType,
                                                    callback: function(t) {
                                                        e.$set(e.orderForm, "paymentType", t)
                                                    },
                                                    expression: "orderForm.paymentType"
                                                }
                                            },
                                            [s("el-radio-button", {
                                                    attrs: {
                                                        label: 2
                                                    }
                                                },
                                                [s("svg-icon", {
                                                    staticStyle: {
                                                        "margin-right": "3px"
                                                    },
                                                    attrs: {
                                                        "icon-class": "alipay"
                                                    }
                                                }), e._v("支付宝")], 1), s("el-radio-button", {
                                                    attrs: {
                                                        label: 3
                                                    }
                                                },
                                                [s("svg-icon", {
                                                    staticStyle: {
                                                        "margin-right": "3px"
                                                    },
                                                    attrs: {
                                                        "icon-class": "wx"
                                                    }
                                                }), e._v("微 信")], 1)], 1)], 1), s("el-form-item", {
                                            attrs: {
                                                label: "支付金额"
                                            }
                                        },
                                        [s("span", {
                                                staticStyle: {
                                                    color: "#F56C6C",
                                                    "font-weight": "600",
                                                    "font-size": "16px"
                                                }
                                            },
                                            [e._v(e._s(e.getOrderPrice(e.orderForm)) + "元")])])], 1)], 1), s("el-tab-pane", {
                                    attrs: {
                                        label: "云机续费",
                                        name: "renewal"
                                    }
                                },
                                [s("el-form", {
                                        ref: "renewalForm",
                                        attrs: {
                                            model: e.renewalForm,
                                            "label-width": "80px",
                                            size: "small"
                                        }
                                    },
                                    [s("el-form-item", {
                                            attrs: {
                                                label: "选择站点"
                                            }
                                        },
                                        [s("el-radio-group", {
                                                on: {
                                                    change: e.onRenewalFormSiteChange
                                                },
                                                model: {
                                                    value: e.renewalForm.site,
                                                    callback: function(t) {
                                                        e.$set(e.renewalForm, "site", t)
                                                    },
                                                    expression: "renewalForm.site"
                                                }
                                            },
                                            e._l(e.siteOptions, (function(t) {
                                                return s("el-radio-button", {
                                                        key: t.value,
                                                        attrs: {
                                                            label: t.value
                                                        }
                                                    },
                                                    [e._v(e._s(t.label))])
                                            })), 1)], 1), s("el-form-item", {
                                            attrs: {
                                                label: "云机版本"
                                            }
                                        },
                                        [s("el-radio-group", {
                                                on: {
                                                    change: e.onRenewalFormVersionChange
                                                },
                                                model: {
                                                    value: e.renewalForm.version,
                                                    callback: function(t) {
                                                        e.$set(e.renewalForm, "version", t)
                                                    },
                                                    expression: "renewalForm.version"
                                                }
                                            },
                                            e._l(e.getDeviceVersionIdList(e.renewalForm.site), (function(t) {
                                                return s("el-radio-button", {
                                                        key: t.deviceVersionId,
                                                        attrs: {
                                                            label: t.deviceVersionId
                                                        }
                                                    },
                                                    [e._v(" " + e._s(t.deviceVersionName))])
                                            })), 1), s("el-tooltip", {
                                                attrs: {
                                                    content: "每次只能续费相同版本的云手机",
                                                    placement: "right"
                                                }
                                            },
                                            [s("i", {
                                                staticClass: "el-icon-question",
                                                staticStyle: {
                                                    "font-size": "16px",
                                                    "margin-left": "5px",
                                                    cursor: "pointer"
                                                }
                                            })])], 1), s("el-form-item", {
                                            attrs: {
                                                label: "订购时长"
                                            }
                                        },
                                        [s("el-radio-group", {
                                                model: {
                                                    value: e.renewalForm.days,
                                                    callback: function(t) {
                                                        e.$set(e.renewalForm, "days", t)
                                                    },
                                                    expression: "renewalForm.days"
                                                }
                                            },
                                            e._l(e.getDevicePriceList(e.renewalForm.site, e.renewalForm.version), (function(t) {
                                                return s("el-radio-button", {
                                                        key: t.productDays,
                                                        attrs: {
                                                            label: t.productDays
                                                        }
                                                    },
                                                    [e._v(" " + e._s(t.productDays) + "天" + e._s(t.userProductPrice) + "元")])
                                            })), 1)], 1), s("el-form-item", {
                                            attrs: {
                                                label: "选择云机"
                                            }
                                        },
                                        [s("el-button", {
                                                attrs: {
                                                    type: "primary",
                                                    icon: "el-icon-plus"
                                                },
                                                on: {
                                                    click: function(t) {
                                                        e.renewalDeviceSelectDialogShow = !0
                                                    }
                                                }
                                            },
                                            [e._v("点击选择")]), e.renewalForm.devices.length > 0 ? s("div", [e._v(" 已选云机"), s("span", {
                                                staticStyle: {
                                                    color: "#F56C6C",
                                                    "font-weight": "600",
                                                    padding: "0 3px"
                                                }
                                            },
                                            [e._v(" " + e._s(e.renewalForm.devices.length))]), e._v("台 ")]) : e._e()], 1), s("el-form-item", {
                                            attrs: {
                                                label: "配套服务"
                                            }
                                        },
                                        [s("el-switch", {
                                            model: {
                                                value: e.renewalForm.serviceSwitch,
                                                callback: function(t) {
                                                    e.$set(e.renewalForm, "serviceSwitch", t)
                                                },
                                                expression: "renewalForm.serviceSwitch"
                                            }
                                        }), s("el-tooltip", {
                                                attrs: {
                                                    content: "服务时间与云机订购时长一致",
                                                    placement: "right"
                                                }
                                            },
                                            [s("i", {
                                                staticClass: "el-icon-question",
                                                staticStyle: {
                                                    "font-size": "16px",
                                                    "margin-left": "5px",
                                                    cursor: "pointer"
                                                }
                                            })]), e.renewalForm.serviceSwitch ? s("el-checkbox-group", {
                                                on: {
                                                    change: e.handleRenewalFormServicesChange
                                                },
                                                model: {
                                                    value: e.renewalForm.services,
                                                    callback: function(t) {
                                                        e.$set(e.renewalForm, "services", t)
                                                    },
                                                    expression: "renewalForm.services"
                                                }
                                            },
                                            e._l(e.getDeviceServiceList(e.renewalForm.site, e.renewalForm.days), (function(t) {
                                                return s("el-checkbox", {
                                                        key: t.businessServiceId,
                                                        staticClass: "device-service-checkbox",
                                                        attrs: {
                                                            label: t.businessServiceId,
                                                            disabled: e.isServiceDisabled(e.renewalForm, t.businessServiceId),
                                                            border: ""
                                                        },
                                                        on: {
                                                            change: function(i) {
                                                                return e.handleRenewalFormServiceChange(t)
                                                            }
                                                        }
                                                    },
                                                    [e._v(" " + e._s(t.businessServiceName + " " + e.renewalForm.days + "天") + e._s(t.userProductPrice ? t.userProductPrice + "元": "") + " "), s("el-button", {
                                                            staticStyle: {
                                                                "font-size": "10px"
                                                            },
                                                            attrs: {
                                                                type: "text",
                                                                size: "mini"
                                                            },
                                                            on: {
                                                                click: function(i) {
                                                                    return e.downServiceHelpDoc(t.businessServiceId)
                                                                }
                                                            }
                                                        },
                                                        [e._v(" 服务介绍 ")]), 7 === t.businessServiceId ? s("div", {
                                                            staticClass: "device-service-checkbox__content"
                                                        },
                                                        [s("el-radio-group", {
                                                                attrs: {
                                                                    size: "mini"
                                                                },
                                                                model: {
                                                                    value: e.renewalForm.ipPorxyType,
                                                                    callback: function(t) {
                                                                        e.$set(e.renewalForm, "ipPorxyType", t)
                                                                    },
                                                                    expression: "renewalForm.ipPorxyType"
                                                                }
                                                            },
                                                            e._l(e.getDeviceServiceChildrenList(t, e.renewalForm.days), (function(t) {
                                                                return s("el-radio-button", {
                                                                        key: t.businessServiceId,
                                                                        attrs: {
                                                                            size: "mini",
                                                                            label: t.businessServiceId
                                                                        }
                                                                    },
                                                                    [e._v(" " + e._s(t.businessServiceName.substring(4)) + e._s(t.userProductPrice) + "元 ")])
                                                            })), 1)], 1) : e._e()], 1)
                                            })), 1) : e._e()], 1), s("el-form-item", {
                                            attrs: {
                                                label: "支付方式"
                                            }
                                        },
                                        [s("el-radio-group", {
                                                attrs: {
                                                    fill: 2 === e.renewalForm.paymentType ? "#0e9dec": "#1AAD19"
                                                },
                                                model: {
                                                    value: e.renewalForm.paymentType,
                                                    callback: function(t) {
                                                        e.$set(e.renewalForm, "paymentType", t)
                                                    },
                                                    expression: "renewalForm.paymentType"
                                                }
                                            },
                                            [s("el-radio-button", {
                                                    attrs: {
                                                        label: 2
                                                    }
                                                },
                                                [s("svg-icon", {
                                                    staticStyle: {
                                                        "margin-right": "3px"
                                                    },
                                                    attrs: {
                                                        "icon-class": "alipay"
                                                    }
                                                }), e._v("支付宝")], 1), s("el-radio-button", {
                                                    attrs: {
                                                        label: 3
                                                    }
                                                },
                                                [s("svg-icon", {
                                                    staticStyle: {
                                                        "margin-right": "3px"
                                                    },
                                                    attrs: {
                                                        "icon-class": "wx"
                                                    }
                                                }), e._v("微 信")], 1)], 1)], 1), s("el-form-item", {
                                            attrs: {
                                                label: "支付金额"
                                            }
                                        },
                                        [s("span", {
                                                staticStyle: {
                                                    color: "#F56C6C",
                                                    "font-weight": "600",
                                                    "font-size": "16px"
                                                }
                                            },
                                            [e._v(e._s(e.getOrderPrice(e.renewalForm)) + "元")])])], 1)], 1)], 1), s("span", {
                                staticClass: "dialog-footer",
                                attrs: {
                                    slot: "footer"
                                },
                                slot: "footer"
                            },
                            [s("el-button", {
                                    attrs: {
                                        size: "small",
                                        type: "primary"
                                    },
                                    on: {
                                        click: e.handleDeviceOrderSumbit
                                    }
                                },
                                [e._v(" 确认支付 ")]), s("el-button", {
                                    attrs: {
                                        size: "small"
                                    },
                                    on: {
                                        click: e.userDeviceOrderDialogClose
                                    }
                                },
                                [e._v(" 取消 ")])], 1)], 1), s("el-dialog", {
                            staticClass: "user-service-dialog",
                            attrs: {
                                title: "配套服务",
                                visible: e.userServiceOrderDialogShow,
                                "close-on-click-modal": !1,
                                width: "750px"
                            },
                            on: {
                                open: e.getUserDeviceServiceList,
                                close: function(t) {
                                    return e.$store.dispatch("settings/setUserServiceOrderDialogShow", !1)
                                }
                            }
                        },
                        [s("span", {
                                staticStyle: {
                                    "padding-left": "12px"
                                }
                            },
                            [e._v("云机配套服务")]), s("el-divider"), s("el-row", {
                                attrs: {
                                    gutter: 20
                                }
                            },
                            [s("el-col", {
                                    attrs: {
                                        span: 6
                                    }
                                },
                                [e.isServiceOrderVisible(7) ? s("div", {
                                        staticClass: "business-item"
                                    },
                                    [s("div", {
                                            staticClass: "business-item-info"
                                        },
                                        [s("span", {
                                                staticClass: "icon"
                                            },
                                            [s("img", {
                                                attrs: {
                                                    src: i("b06d")
                                                }
                                            })]), s("span", {
                                                staticClass: "desc"
                                            },
                                            [e._v("IP代理"), e.isServiceOrderVisible(2) ? s("span", [e._v("及接口")]) : e._e()])]), s("el-button", {
                                            staticClass: "business-item-btn",
                                            attrs: {
                                                size: "mini",
                                                type: "primary"
                                            },
                                            on: {
                                                click: function(t) {
                                                    return e.handleUserServiceOrder(7)
                                                }
                                            }
                                        },
                                        [e._v("订购")]), s("div", {
                                            staticClass: "business-item-btns"
                                        },
                                        [s("el-button", {
                                                staticClass: "business-item-btn",
                                                class: {
                                                    "help-doc": e.isServiceOrderVisible(2)
                                                },
                                                attrs: {
                                                    size: "mini"
                                                },
                                                on: {
                                                    click: function(t) {
                                                        return e.downHelpDoc("http://img.coco5i.com/Ip%E4%BB%A3%E7%90%86.pdf")
                                                    }
                                                }
                                            },
                                            [e._v("使用说明")]), e.isServiceOrderVisible(2) ? s("el-button", {
                                                staticClass: "business-item-btn help-doc",
                                                attrs: {
                                                    size: "mini"
                                                },
                                                on: {
                                                    click: function(t) {
                                                        return e.downHelpDoc("http://img.coco5i.com/IP%E4%BB%A3%E7%90%86%E9%AB%98%E7%BA%A7%E5%87%BD%E6%95%B0%E6%8E%A5%E5%8F%A3.pdf")
                                                    }
                                                }
                                            },
                                            [e._v("接口文档")]) : e._e()], 1)], 1) : e._e()]), s("el-col", {
                                    attrs: {
                                        span: 6
                                    }
                                },
                                [e.isServiceOrderVisible(3) ? s("div", {
                                        staticClass: "business-item"
                                    },
                                    [s("div", {
                                            staticClass: "business-item-info"
                                        },
                                        [s("span", {
                                                staticClass: "icon"
                                            },
                                            [s("img", {
                                                attrs: {
                                                    src: i("f11b")
                                                }
                                            })]), s("span", {
                                                staticClass: "desc"
                                            },
                                            [e._v("设备大师"), e.isServiceOrderVisible(4) ? s("span", [e._v("及接口")]) : e._e()])]), s("el-button", {
                                            staticClass: "business-item-btn",
                                            attrs: {
                                                size: "mini",
                                                type: "primary"
                                            },
                                            on: {
                                                click: function(t) {
                                                    return e.handleUserServiceOrder(3)
                                                }
                                            }
                                        },
                                        [e._v("订购")]), s("div", {
                                            staticClass: "business-item-btns"
                                        },
                                        [s("el-button", {
                                                staticClass: "business-item-btn",
                                                class: {
                                                    "help-doc": e.isServiceOrderVisible(4)
                                                },
                                                attrs: {
                                                    size: "mini"
                                                },
                                                on: {
                                                    click: function(t) {
                                                        return e.downHelpDoc("http://img.coco5i.com/%E8%AE%BE%E5%A4%87%E5%A4%A7%E5%B8%88.pdf")
                                                    }
                                                }
                                            },
                                            [e._v("使用说明")]), e.isServiceOrderVisible(4) ? s("el-button", {
                                                staticClass: "business-item-btn help-doc",
                                                attrs: {
                                                    size: "mini"
                                                },
                                                on: {
                                                    click: function(t) {
                                                        return e.downHelpDoc("http://img.coco5i.com/%E8%AE%BE%E5%A4%87%E5%A4%A7%E5%B8%88%E9%AB%98%E7%BA%A7%E5%87%BD%E6%95%B0%E6%8E%A5%E5%8F%A3.pdf")
                                                    }
                                                }
                                            },
                                            [e._v("接口文档")]) : e._e()], 1)], 1) : e._e()]), s("el-col", {
                                    attrs: {
                                        span: 6
                                    }
                                },
                                [e.isServiceOrderVisible(10) ? s("div", {
                                        staticClass: "business-item"
                                    },
                                    [s("div", {
                                            staticClass: "business-item-info"
                                        },
                                        [s("span", {
                                                staticClass: "icon"
                                            },
                                            [s("img", {
                                                attrs: {
                                                    src: i("8555")
                                                }
                                            })]), s("span", {
                                                staticClass: "desc"
                                            },
                                            [e._v("云机内下载")])]), s("el-button", {
                                            staticClass: "business-item-btn",
                                            attrs: {
                                                size: "mini",
                                                type: "primary"
                                            },
                                            on: {
                                                click: function(t) {
                                                    return e.handleUserServiceOrder(10)
                                                }
                                            }
                                        },
                                        [e._v("订购")]), s("el-button", {
                                            staticClass: "business-item-btn help-doc",
                                            attrs: {
                                                size: "mini"
                                            },
                                            on: {
                                                click: function(t) {
                                                    return e.downHelpDoc("http://img.coco5i.com/%E4%BA%91%E6%9C%BA%E5%86%85%E4%B8%8B%E8%BD%BD.pdf")
                                                }
                                            }
                                        },
                                        [e._v("使用说明")])], 1) : e._e()]), s("el-col", {
                                    attrs: {
                                        span: 6
                                    }
                                },
                                [s("div", {
                                        staticClass: "business-item"
                                    },
                                    [s("div", {
                                            staticClass: "business-item-info"
                                        },
                                        [s("span", {
                                                staticClass: "icon"
                                            },
                                            [s("img", {
                                                attrs: {
                                                    src: i("89ef")
                                                }
                                            })]), s("span", {
                                                staticClass: "desc"
                                            },
                                            [e._v("虚拟定位"), e.isServiceOrderVisible(11) ? s("span", [e._v("接口")]) : e._e()])]), e.isServiceOrderVisible(11) ? s("el-button", {
                                            staticClass: "business-item-btn",
                                            attrs: {
                                                size: "mini",
                                                type: "primary"
                                            },
                                            on: {
                                                click: function(t) {
                                                    return e.handleUserServiceOrder(11)
                                                }
                                            }
                                        },
                                        [e._v("订购")]) : s("el-button", {
                                            staticClass: "business-item-btn",
                                            attrs: {
                                                size: "mini",
                                                disabled: !0
                                            }
                                        },
                                        [e._v("免费")]), s("div", {
                                            staticClass: "business-item-btns"
                                        },
                                        [s("el-button", {
                                                staticClass: "business-item-btn",
                                                class: {
                                                    "help-doc": e.isServiceOrderVisible(11)
                                                },
                                                attrs: {
                                                    size: "mini"
                                                },
                                                on: {
                                                    click: function(t) {
                                                        return e.downHelpDoc("http://img.coco5i.com/%E8%99%9A%E6%8B%9F%E5%AE%9A%E4%BD%8D.pdf")
                                                    }
                                                }
                                            },
                                            [e._v("使用说明")]), e.isServiceOrderVisible(11) ? s("el-button", {
                                                staticClass: "business-item-btn help-doc",
                                                attrs: {
                                                    size: "mini"
                                                },
                                                on: {
                                                    click: function(t) {
                                                        return e.downHelpDoc("http://img.coco5i.com/%E8%99%9A%E6%8B%9F%E5%AE%9A%E4%BD%8D%E6%8E%A5%E5%8F%A3.pdf")
                                                    }
                                                }
                                            },
                                            [e._v("接口文档")]) : e._e()], 1)], 1)]), s("el-col", {
                                    attrs: {
                                        span: 6
                                    }
                                },
                                [s("div", {
                                        staticClass: "business-item"
                                    },
                                    [s("div", {
                                            staticClass: "business-item-info"
                                        },
                                        [s("span", {
                                                staticClass: "icon"
                                            },
                                            [s("img", {
                                                attrs: {
                                                    src: i("2fcb")
                                                }
                                            })]), s("span", {
                                                staticClass: "desc"
                                            },
                                            [e._v("虚拟相机")])]), s("div", {
                                            staticClass: "business-item-btns"
                                        },
                                        [s("el-tooltip", {
                                                staticClass: "item",
                                                attrs: {
                                                    effect: "dark",
                                                    content: "适用于分辨率为720的云机",
                                                    placement: "top-end"
                                                }
                                            },
                                            [s("el-button", {
                                                    staticClass: "business-item-btn help-doc",
                                                    attrs: {
                                                        size: "mini",
                                                        type: "primary"
                                                    },
                                                    on: {
                                                        click: function(t) {
                                                            return e.downHelpDoc("http://img.coco5i.com/CloudCamera-v1.1-2020-05-20.apk")
                                                        }
                                                    }
                                                },
                                                [e._v("apk下载")])], 1), s("el-tooltip", {
                                                staticClass: "item",
                                                attrs: {
                                                    effect: "dark",
                                                    content: "适用于分辨率为1080的云机",
                                                    placement: "top-start"
                                                }
                                            },
                                            [s("el-button", {
                                                    staticClass: "business-item-btn help-doc",
                                                    attrs: {
                                                        size: "mini",
                                                        type: "primary"
                                                    },
                                                    on: {
                                                        click: function(t) {
                                                            return e.downHelpDoc("http://img.coco5i.com/CloudHdCameraSendPic-v1.1-2020-09-08.apk")
                                                        }
                                                    }
                                                },
                                                [e._v("apk下载")])], 1)], 1), s("el-button", {
                                            staticClass: "business-item-btn help-doc",
                                            attrs: {
                                                size: "mini"
                                            },
                                            on: {
                                                click: function(t) {
                                                    return e.downHelpDoc("http://img.coco5i.com/%E8%BF%9C%E7%A8%8B%E8%99%9A%E6%8B%9F%E7%9B%B8%E6%9C%BA.pdf")
                                                }
                                            }
                                        },
                                        [e._v("使用说明")])], 1)]), s("el-col", {
                                    attrs: {
                                        span: 6
                                    }
                                },
                                [s("div", {
                                        staticClass: "business-item"
                                    },
                                    [s("div", {
                                            staticClass: "business-item-info"
                                        },
                                        [s("span", {
                                                staticClass: "icon"
                                            },
                                            [s("img", {
                                                attrs: {
                                                    src: i("a4db")
                                                }
                                            })]), s("span", {
                                                staticClass: "desc"
                                            },
                                            [e._v("音视频导入")])]), s("el-button", {
                                            staticClass: "business-item-btn",
                                            attrs: {
                                                size: "mini",
                                                type: "primary"
                                            },
                                            on: {
                                                click: function(t) {
                                                    return e.downHelpDoc("http://img.coco5i.com/audio4.0.apk")
                                                }
                                            }
                                        },
                                        [e._v("apk下载")]), s("el-button", {
                                            staticClass: "business-item-btn help-doc",
                                            attrs: {
                                                size: "mini"
                                            },
                                            on: {
                                                click: function(t) {
                                                    return e.downHelpDoc("http://img.coco5i.com/%E9%9F%B3%E8%A7%86%E9%A2%91%E5%AF%BC%E5%85%A5.pdf")
                                                }
                                            }
                                        },
                                        [e._v("使用说明")])], 1)])], 1), s("span", {
                                staticStyle: {
                                    "padding-left": "12px"
                                }
                            },
                            [e._v("用户配套服务")]), s("el-divider"), s("el-row", {
                                attrs: {
                                    gutter: 20
                                }
                            },
                            [s("el-col", {
                                    attrs: {
                                        span: 6
                                    }
                                },
                                [e.isAccountServiceOrderVisible(13) ? s("div", {
                                        staticClass: "business-item"
                                    },
                                    [s("div", {
                                            staticClass: "business-item-info"
                                        },
                                        [s("span", {
                                                staticClass: "icon"
                                            },
                                            [s("img", {
                                                attrs: {
                                                    src: i("9d3f")
                                                }
                                            })]), s("span", {
                                                staticClass: "desc"
                                            },
                                            [e._v("多路直播")])]), s("el-button", {
                                            staticClass: "business-item-btn",
                                            attrs: {
                                                size: "mini",
                                                type: "primary"
                                            },
                                            on: {
                                                click: function(t) {
                                                    return e.handleAccountServiceOrder(13)
                                                }
                                            }
                                        },
                                        [e._v("订购")]), s("el-button", {
                                            staticClass: "business-item-btn help-doc",
                                            attrs: {
                                                size: "mini"
                                            },
                                            on: {
                                                click: function(t) {
                                                    return e.downHelpDoc("http://img.coco5i.com/%E5%A4%9A%E8%B7%AF%E7%9B%B4%E6%92%AD.pdf")
                                                }
                                            }
                                        },
                                        [e._v("使用说明")])], 1) : e._e()]), s("el-col", {
                                    attrs: {
                                        span: 6
                                    }
                                },
                                [e.isAccountServiceOrderVisible(15) ? s("div", {
                                        staticClass: "business-item"
                                    },
                                    [s("div", {
                                            staticClass: "business-item-info"
                                        },
                                        [s("span", {
                                                staticClass: "icon"
                                            },
                                            [s("img", {
                                                attrs: {
                                                    src: i("dea0")
                                                }
                                            })]), s("span", {
                                                staticClass: "desc"
                                            },
                                            [e._v("多开窗口")])]), s("el-button", {
                                            staticClass: "business-item-btn",
                                            attrs: {
                                                size: "mini",
                                                type: "primary"
                                            },
                                            on: {
                                                click: function(t) {
                                                    return e.handleAccountServiceOrder(15)
                                                }
                                            }
                                        },
                                        [e._v("订购")]), s("el-button", {
                                            staticClass: "business-item-btn help-doc",
                                            attrs: {
                                                size: "mini"
                                            },
                                            on: {
                                                click: function(t) {
                                                    return e.downHelpDoc("http://img.coco5i.com/%E5%A4%9A%E5%BC%80%E7%AA%97%E5%8F%A3.pdf")
                                                }
                                            }
                                        },
                                        [e._v("使用说明")])], 1) : e._e()]), s("el-col", {
                                    attrs: {
                                        span: 6
                                    }
                                },
                                [e.isServiceOrderVisible(16) ? s("div", {
                                        staticClass: "business-item"
                                    },
                                    [s("div", {
                                            staticClass: "business-item-info"
                                        },
                                        [s("span", {
                                                staticClass: "icon"
                                            },
                                            [s("img", {
                                                attrs: {
                                                    src: i("e1c4")
                                                }
                                            })]), s("span", {
                                                staticClass: "desc"
                                            },
                                            [e._v("高级调试ADB")])]), s("el-button", {
                                            staticClass: "business-item-btn",
                                            attrs: {
                                                size: "mini",
                                                type: "primary"
                                            },
                                            on: {
                                                click: e.handleADBServiceOrder
                                            }
                                        },
                                        [e._v("订购/续费")]), s("el-button", {
                                            staticClass: "business-item-btn help-doc",
                                            attrs: {
                                                size: "mini"
                                            },
                                            on: {
                                                click: function(t) {
                                                    return e.downHelpDoc("http://img.coco5i.com/%E9%AB%98%E7%BA%A7%E8%B0%83%E8%AF%95adb.pdf")
                                                }
                                            }
                                        },
                                        [e._v("使用说明")])], 1) : e._e()])], 1)], 1), s("el-dialog", {
                            attrs: {
                                visible: e.deviceServiceOrderDialogShow,
                                title: "云机配套服务",
                                width: "680px",
                                "close-on-click-modal": !1
                            },
                            on: {
                                open: e.deviceServiceOrderDialogOpen,
                                close: e.deviceServiceOrderDialogClose
                            }
                        },
                        [s("el-dialog", {
                                staticClass: "device-select-dialog",
                                attrs: {
                                    title: "选择云机",
                                    visible: e.deviceServiceSelectDialogShow,
                                    "close-on-click-modal": !1,
                                    width: "800px",
                                    "append-to-body": ""
                                },
                                on: {
                                    "update:visible": function(t) {
                                        e.deviceServiceSelectDialogShow = t
                                    }
                                }
                            },
                            [s("div", {
                                    staticClass: "filter-container"
                                },
                                [s("el-radio-group", {
                                        staticClass: "filter-item",
                                        attrs: {
                                            size: "mini"
                                        },
                                        model: {
                                            value: e.deviceServiceSelectSiteId,
                                            callback: function(t) {
                                                e.deviceServiceSelectSiteId = t
                                            },
                                            expression: "deviceServiceSelectSiteId"
                                        }
                                    },
                                    e._l(e.siteOptions, (function(t) {
                                        return s("el-radio-button", {
                                                key: t.value,
                                                attrs: {
                                                    label: t.value
                                                }
                                            },
                                            [e._v(e._s(t.label))])
                                    })), 1), s("el-select", {
                                        staticClass: "filter-item",
                                        staticStyle: {
                                            width: "160px"
                                        },
                                        attrs: {
                                            placeholder: "选择云机分组",
                                            clearable: "",
                                            size: "mini"
                                        },
                                        model: {
                                            value: e.deviceServiceSelectGroupId,
                                            callback: function(t) {
                                                e.deviceServiceSelectGroupId = t
                                            },
                                            expression: "deviceServiceSelectGroupId"
                                        }
                                    },
                                    e._l(e.userGroupList, (function(e) {
                                        return s("el-option", {
                                            key: e.id,
                                            attrs: {
                                                label: e.groupName,
                                                value: e.id
                                            }
                                        })
                                    })), 1), s("el-checkbox", {
                                        staticClass: "filter-item",
                                        attrs: {
                                            size: "mini"
                                        },
                                        model: {
                                            value: e.deviceServiceSelectNullChecked,
                                            callback: function(t) {
                                                e.deviceServiceSelectNullChecked = t
                                            },
                                            expression: "deviceServiceSelectNullChecked"
                                        }
                                    },
                                    [e._v("未订购服务")])], 1), s("el-table", {
                                    ref: "deviceServiceSelectList",
                                    staticStyle: {
                                        "max-width": "780px"
                                    },
                                    attrs: {
                                        data: e.currentDeviceServiceSelectList,
                                        border: "",
                                        "highlight-current-row": "",
                                        size: "mini",
                                        "max-height": "650"
                                    },
                                    on: {
                                        "row-click": e.handleDeviceServiceSelectListRowClick
                                    }
                                },
                                [s("el-table-column", {
                                    attrs: {
                                        fixed: "",
                                        type: "selection",
                                        width: "45"
                                    }
                                }), s("el-table-column", {
                                    attrs: {
                                        label: "云机ID",
                                        prop: "id",
                                        width: "85",
                                        align: "center"
                                    },
                                    scopedSlots: e._u([{
                                        key: "default",
                                        fn: function(t) {
                                            var i = t.row;
                                            return [s("span", [e._v(e._s(i.deviceId))])]
                                        }
                                    }])
                                }), s("el-table-column", {
                                    attrs: {
                                        label: "云机状态",
                                        width: "100",
                                        align: "center"
                                    },
                                    scopedSlots: e._u([{
                                        key: "default",
                                        fn: function(t) {
                                            var i = t.row;
                                            return [s("span", [e._v(e._s(e._f("deviceStatusMapping")(i.deviceStatus)))])]
                                        }
                                    }])
                                }), s("el-table-column", {
                                    attrs: {
                                        label: "到期时间",
                                        "min-width": "150",
                                        align: "center"
                                    },
                                    scopedSlots: e._u([{
                                        key: "default",
                                        fn: function(t) {
                                            var i = t.row;
                                            return [s("span", [e._v(e._s(i.expireTime))])]
                                        }
                                    }])
                                }), s("el-table-column", {
                                        attrs: {
                                            label: "配套服务",
                                            align: "center"
                                        }
                                    },
                                    [s("el-table-column", {
                                        attrs: {
                                            label: "内容",
                                            width: "160",
                                            align: "center"
                                        },
                                        scopedSlots: e._u([{
                                            key: "default",
                                            fn: function(t) {
                                                var i = t.row;
                                                return [e._l(i.businessServiceList, (function(t) {
                                                    return [s("p", {
                                                            key: t.businessServiceId
                                                        },
                                                        [e._v(e._s(t.businessServiceName))])]
                                                }))]
                                            }
                                        }])
                                    }), s("el-table-column", {
                                        attrs: {
                                            label: "到期时间",
                                            width: "180",
                                            align: "center"
                                        },
                                        scopedSlots: e._u([{
                                            key: "default",
                                            fn: function(t) {
                                                var i = t.row;
                                                return [e._l(i.businessServiceList, (function(t) {
                                                    return [s("p", {
                                                            key: t.businessServiceId
                                                        },
                                                        [e._v(e._s(t.businessExpireTime))])]
                                                }))]
                                            }
                                        }])
                                    })], 1)], 1), s("span", {
                                    staticClass: "dialog-footer",
                                    attrs: {
                                        slot: "footer"
                                    },
                                    slot: "footer"
                                },
                                [s("span", {
                                        staticStyle: {
                                            float: "left",
                                            "font-size": "14px",
                                            "line-height": "32px"
                                        }
                                    },
                                    [e._v("选中"), s("span", {
                                            staticStyle: {
                                                color: "#F56C6C",
                                                "font-weight": "600",
                                                padding: "0 3px"
                                            }
                                        },
                                        [e._v(e._s(e.$refs["deviceServiceSelectList"] ? e.$refs["deviceServiceSelectList"].selection.length: 0))]), e._v("台云机 ")]), s("el-button", {
                                        attrs: {
                                            type: "primary",
                                            size: "small"
                                        },
                                        on: {
                                            click: e.handleDeviceServiceSelectSubmit
                                        }
                                    },
                                    [e._v("确定 ")])], 1)], 1), s("el-form", {
                                ref: "deviceServiceForm",
                                attrs: {
                                    model: e.deviceServiceForm,
                                    "label-width": "80px",
                                    size: "small"
                                }
                            },
                            [s("el-form-item", {
                                    attrs: {
                                        label: "服务类型"
                                    }
                                },
                                [s("el-radio-group", {
                                        model: {
                                            value: e.deviceServiceForm.type,
                                            callback: function(t) {
                                                e.$set(e.deviceServiceForm, "type", t)
                                            },
                                            expression: "deviceServiceForm.type"
                                        }
                                    },
                                    e._l(e.getDeviceServiceNameList(1), (function(t) {
                                        return s("el-radio-button", {
                                                key: t.businessServiceId,
                                                attrs: {
                                                    label: t.businessServiceId
                                                }
                                            },
                                            [e._v(" " + e._s(t.businessServiceName))])
                                    })), 1)], 1), s("el-form-item", {
                                    directives: [{
                                        name: "show",
                                        rawName: "v-show",
                                        value: 7 === e.deviceServiceForm.type,
                                        expression: "deviceServiceForm.type === 7"
                                    }],
                                    attrs: {
                                        label: "代理方式"
                                    }
                                },
                                [s("el-radio-group", {
                                        model: {
                                            value: e.deviceServiceForm.ipPorxyType,
                                            callback: function(t) {
                                                e.$set(e.deviceServiceForm, "ipPorxyType", t)
                                            },
                                            expression: "deviceServiceForm.ipPorxyType"
                                        }
                                    },
                                    e._l(e.getDeviceServiceChildrenList(e.getDeviceService(e.deviceServiceOrderList, 7), e.deviceServiceForm.days), (function(t) {
                                        return s("el-radio-button", {
                                                key: t.businessServiceId,
                                                attrs: {
                                                    label: t.businessServiceId
                                                }
                                            },
                                            [e._v(" " + e._s(t.businessServiceName.substring(4)) + " ")])
                                    })), 1)], 1), s("el-form-item", {
                                    attrs: {
                                        label: "订购时长"
                                    }
                                },
                                [s("el-radio-group", {
                                        model: {
                                            value: e.deviceServiceForm.days,
                                            callback: function(t) {
                                                e.$set(e.deviceServiceForm, "days", t)
                                            },
                                            expression: "deviceServiceForm.days"
                                        }
                                    },
                                    e._l(e.getDeviceServiceDaysList(1), (function(t) {
                                        return s("el-radio-button", {
                                                key: t.productDays,
                                                attrs: {
                                                    label: t.productDays
                                                }
                                            },
                                            [e._v(" " + e._s(t.productDays) + "天" + e._s(e.getDeviceServiceOrderUnitPrice(e.deviceServiceForm, t.productDays)) + "元")])
                                    })), 1)], 1), s("el-form-item", {
                                    attrs: {
                                        label: "选择云机"
                                    }
                                },
                                [s("el-button", {
                                        attrs: {
                                            type: "primary",
                                            icon: "el-icon-plus"
                                        },
                                        on: {
                                            click: function(t) {
                                                e.deviceServiceSelectDialogShow = !0
                                            }
                                        }
                                    },
                                    [e._v("点击选择")]), e.deviceServiceForm.devices.length > 0 ? s("div", [e._v(" 已选云机"), s("span", {
                                        staticStyle: {
                                            color: "#F56C6C",
                                            "font-weight": "600",
                                            padding: "0 3px"
                                        }
                                    },
                                    [e._v(" " + e._s(e.deviceServiceForm.devices.length))]), e._v("台 ")]) : e._e()], 1), s("el-form-item", {
                                    attrs: {
                                        label: "支付方式"
                                    }
                                },
                                [s("el-radio-group", {
                                        attrs: {
                                            fill: 2 === e.deviceServiceForm.paymentType ? "#0e9dec": "#1AAD19"
                                        },
                                        model: {
                                            value: e.deviceServiceForm.paymentType,
                                            callback: function(t) {
                                                e.$set(e.deviceServiceForm, "paymentType", t)
                                            },
                                            expression: "deviceServiceForm.paymentType"
                                        }
                                    },
                                    [s("el-radio-button", {
                                            attrs: {
                                                label: 2
                                            }
                                        },
                                        [s("svg-icon", {
                                            staticStyle: {
                                                "margin-right": "3px"
                                            },
                                            attrs: {
                                                "icon-class": "alipay"
                                            }
                                        }), e._v("支付宝")], 1), s("el-radio-button", {
                                            attrs: {
                                                label: 3
                                            }
                                        },
                                        [s("svg-icon", {
                                            staticStyle: {
                                                "margin-right": "3px"
                                            },
                                            attrs: {
                                                "icon-class": "wx"
                                            }
                                        }), e._v("微 信")], 1)], 1)], 1), s("el-form-item", {
                                    attrs: {
                                        label: "支付金额"
                                    }
                                },
                                [s("span", {
                                        staticStyle: {
                                            color: "#F56C6C",
                                            "font-weight": "600",
                                            "font-size": "16px"
                                        }
                                    },
                                    [e._v(e._s(e.getDeviceServiceOrderPrice(e.deviceServiceForm)) + "元")])])], 1), s("span", {
                                staticClass: "dialog-footer",
                                attrs: {
                                    slot: "footer"
                                },
                                slot: "footer"
                            },
                            [s("el-button", {
                                    attrs: {
                                        size: "small",
                                        type: "primary"
                                    },
                                    on: {
                                        click: e.handleDeviceServiceOrderSumbit
                                    }
                                },
                                [e._v(" 确认支付 ")]), s("el-button", {
                                    attrs: {
                                        size: "small"
                                    },
                                    on: {
                                        click: e.deviceServiceOrderDialogClose
                                    }
                                },
                                [e._v(" 取消 ")])], 1)], 1), s("el-dialog", {
                            attrs: {
                                visible: e.accountServiceOrderDialogShow,
                                "close-on-click-modal": !1,
                                title: "用户配套服务",
                                width: "450px"
                            },
                            on: {
                                "update:visible": function(t) {
                                    e.accountServiceOrderDialogShow = t
                                },
                                open: e.accountServiceOrderDialogOpen,
                                close: e.accountServiceOrderDialogClose
                            }
                        },
                        [s("el-form", {
                                ref: "accountServiceForm",
                                attrs: {
                                    model: e.accountServiceForm,
                                    "label-width": "80px",
                                    size: "small"
                                }
                            },
                            [s("el-form-item", {
                                    attrs: {
                                        label: "服务类型"
                                    }
                                },
                                [s("el-radio-group", {
                                        model: {
                                            value: e.accountServiceForm.type,
                                            callback: function(t) {
                                                e.$set(e.accountServiceForm, "type", t)
                                            },
                                            expression: "accountServiceForm.type"
                                        }
                                    },
                                    [s("el-radio-button", {
                                            attrs: {
                                                label: 13
                                            }
                                        },
                                        [e._v("多路直播")]), s("el-radio-button", {
                                            attrs: {
                                                label: 15
                                            }
                                        },
                                        [e._v("多开窗口")])], 1)], 1), s("el-form-item", {
                                    attrs: {
                                        label: "订购时长"
                                    }
                                },
                                [s("el-radio-group", {
                                        model: {
                                            value: e.accountServiceForm.days,
                                            callback: function(t) {
                                                e.$set(e.accountServiceForm, "days", t)
                                            },
                                            expression: "accountServiceForm.days"
                                        }
                                    },
                                    [s("el-radio-button", {
                                            attrs: {
                                                label: 1
                                            }
                                        },
                                        [e._v("1天")]), s("el-radio-button", {
                                            attrs: {
                                                label: 7
                                            }
                                        },
                                        [e._v("7天")]), s("el-radio-button", {
                                            attrs: {
                                                label: 30
                                            }
                                        },
                                        [e._v("30天")])], 1)], 1), s("el-form-item", {
                                    attrs: {
                                        label: "订购数量2"
                                    }
                                },
                                [s("el-input-number", {
                                    attrs: {
                                        "controls-position": "right",
                                        min: 1,
                                        max: 1e3,
                                        step: 1,
                                        "step-strictly": ""
                                    },
                                    model: {
                                        value: e.accountServiceForm.num,
                                        callback: function(t) {
                                            e.$set(e.accountServiceForm, "num", t)
                                        },
                                        expression: "accountServiceForm.num"
                                    }
                                })], 1), s("el-form-item", {
                                    attrs: {
                                        label: "支付方式"
                                    }
                                },
                                [s("el-radio-group", {
                                        attrs: {
                                            fill: 2 === e.accountServiceForm.paymentType ? "#0e9dec": "#1AAD19"
                                        },
                                        model: {
                                            value: e.accountServiceForm.paymentType,
                                            callback: function(t) {
                                                e.$set(e.accountServiceForm, "paymentType", t)
                                            },
                                            expression: "accountServiceForm.paymentType"
                                        }
                                    },
                                    [s("el-radio-button", {
                                            attrs: {
                                                label: 2
                                            }
                                        },
                                        [s("svg-icon", {
                                            staticStyle: {
                                                "margin-right": "3px"
                                            },
                                            attrs: {
                                                "icon-class": "alipay"
                                            }
                                        }), e._v("支付宝")], 1), s("el-radio-button", {
                                            attrs: {
                                                label: 3
                                            }
                                        },
                                        [s("svg-icon", {
                                            staticStyle: {
                                                "margin-right": "3px"
                                            },
                                            attrs: {
                                                "icon-class": "wx"
                                            }
                                        }), e._v("微 信")], 1)], 1)], 1), s("el-form-item", {
                                    attrs: {
                                        label: "支付金额"
                                    }
                                },
                                [s("span", {
                                        staticStyle: {
                                            color: "#F56C6C",
                                            "font-weight": "600",
                                            "font-size": "16px"
                                        }
                                    },
                                    [e._v(e._s(e.getAccountServiceOrderPrice(e.accountServiceForm)) + "元")])])], 1), s("span", {
                                staticClass: "dialog-footer",
                                attrs: {
                                    slot: "footer"
                                },
                                slot: "footer"
                            },
                            [s("el-button", {
                                    attrs: {
                                        size: "small",
                                        type: "primary"
                                    },
                                    on: {
                                        click: e.handleAccountServiceOrderSumbit
                                    }
                                },
                                [e._v(" 确认支付 ")]), s("el-button", {
                                    attrs: {
                                        size: "small"
                                    },
                                    on: {
                                        click: e.accountServiceOrderDialogClose
                                    }
                                },
                                [e._v(" 取消 ")])], 1)], 1), s("el-dialog", {
                            attrs: {
                                visible: e.adbServiceOrderDialogShow,
                                "close-on-click-modal": !1,
                                "custom-class": "adb-service-dialog",
                                title: "高级调试ADB",
                                width: "650px"
                            },
                            on: {
                                "update:visible": function(t) {
                                    e.adbServiceOrderDialogShow = t
                                },
                                open: e.adbServiceOrderDialogOpen,
                                close: e.adbServiceOrderDialogClose
                            }
                        },
                        [s("el-dialog", {
                                staticClass: "device-select-dialog",
                                attrs: {
                                    title: "选择云机",
                                    visible: e.adbServiceRenewalSelectDialogShow,
                                    "close-on-click-modal": !1,
                                    width: "800px",
                                    "append-to-body": ""
                                },
                                on: {
                                    "update:visible": function(t) {
                                        e.adbServiceRenewalSelectDialogShow = t
                                    }
                                }
                            },
                            [s("div", {
                                    staticClass: "filter-container"
                                },
                                [s("el-radio-group", {
                                        staticClass: "filter-item",
                                        attrs: {
                                            size: "mini"
                                        },
                                        model: {
                                            value: e.adbServiceRenewalSelectSiteId,
                                            callback: function(t) {
                                                e.adbServiceRenewalSelectSiteId = t
                                            },
                                            expression: "adbServiceRenewalSelectSiteId"
                                        }
                                    },
                                    e._l(e.siteOptions, (function(t) {
                                        return s("el-radio-button", {
                                                key: t.value,
                                                attrs: {
                                                    label: t.value
                                                }
                                            },
                                            [e._v(e._s(t.label))])
                                    })), 1)], 1), s("el-table", {
                                    ref: "adbServiceRenewalSelectList",
                                    staticStyle: {
                                        "max-width": "780px"
                                    },
                                    attrs: {
                                        data: e.currentADBServiceRenewalSelectList,
                                        border: "",
                                        "highlight-current-row": "",
                                        size: "mini",
                                        "max-height": "650"
                                    },
                                    on: {
                                        "row-click": e.handleADBServiceRenewalSelectListRowClick
                                    }
                                },
                                [s("el-table-column", {
                                    attrs: {
                                        fixed: "",
                                        type: "selection",
                                        width: "45"
                                    }
                                }), s("el-table-column", {
                                    attrs: {
                                        label: "云机ID",
                                        prop: "id",
                                        width: "85",
                                        align: "center"
                                    },
                                    scopedSlots: e._u([{
                                        key: "default",
                                        fn: function(t) {
                                            var i = t.row;
                                            return [s("span", [e._v(e._s(i.deviceId))])]
                                        }
                                    }])
                                }), s("el-table-column", {
                                    attrs: {
                                        label: "云机状态",
                                        width: "100",
                                        align: "center"
                                    },
                                    scopedSlots: e._u([{
                                        key: "default",
                                        fn: function(t) {
                                            var i = t.row;
                                            return [s("span", [e._v(e._s(e._f("deviceStatusMapping")(i.deviceStatus)))])]
                                        }
                                    }])
                                }), s("el-table-column", {
                                    attrs: {
                                        label: "到期时间",
                                        "min-width": "150",
                                        align: "center"
                                    },
                                    scopedSlots: e._u([{
                                        key: "default",
                                        fn: function(t) {
                                            var i = t.row;
                                            return [s("span", [e._v(e._s(i.expireTime))])]
                                        }
                                    }])
                                }), s("el-table-column", {
                                        attrs: {
                                            label: "配套服务",
                                            align: "center"
                                        }
                                    },
                                    [s("el-table-column", {
                                        attrs: {
                                            label: "内容",
                                            width: "160",
                                            align: "center"
                                        },
                                        scopedSlots: e._u([{
                                            key: "default",
                                            fn: function(t) {
                                                var i = t.row;
                                                return [e._l(i.businessServiceList, (function(t) {
                                                    return [s("p", {
                                                            key: t.businessServiceId
                                                        },
                                                        [e._v(e._s(t.businessServiceName))])]
                                                }))]
                                            }
                                        }])
                                    }), s("el-table-column", {
                                        attrs: {
                                            label: "到期时间",
                                            width: "180",
                                            align: "center"
                                        },
                                        scopedSlots: e._u([{
                                            key: "default",
                                            fn: function(t) {
                                                var i = t.row;
                                                return [e._l(i.businessServiceList, (function(t) {
                                                    return [s("p", {
                                                            key: t.businessServiceId
                                                        },
                                                        [e._v(e._s(t.businessExpireTime))])]
                                                }))]
                                            }
                                        }])
                                    })], 1)], 1), s("span", {
                                    staticClass: "dialog-footer",
                                    attrs: {
                                        slot: "footer"
                                    },
                                    slot: "footer"
                                },
                                [s("span", {
                                        staticStyle: {
                                            float: "left",
                                            "font-size": "14px",
                                            "line-height": "32px"
                                        }
                                    },
                                    [e._v("选中"), s("span", {
                                            staticStyle: {
                                                color: "#F56C6C",
                                                "font-weight": "600",
                                                padding: "0 3px"
                                            }
                                        },
                                        [e._v(e._s(e.$refs["adbServiceRenewalSelectList"] ? e.$refs["adbServiceRenewalSelectList"].selection.length: 0))]), e._v("台云机 ")]), s("el-button", {
                                        attrs: {
                                            type: "primary",
                                            size: "small"
                                        },
                                        on: {
                                            click: e.handleADBServiceRenewalSelectSubmit
                                        }
                                    },
                                    [e._v("确定 ")])], 1)], 1), s("el-tabs", {
                                directives: [{
                                    name: "loading",
                                    rawName: "v-loading",
                                    value: e.adbServiceOrderDialogLoding,
                                    expression: "adbServiceOrderDialogLoding"
                                }],
                                model: {
                                    value: e.adbServiceTabActiveName,
                                    callback: function(t) {
                                        e.adbServiceTabActiveName = t
                                    },
                                    expression: "adbServiceTabActiveName"
                                }
                            },
                            [s("el-tab-pane", {
                                    attrs: {
                                        label: "订购",
                                        name: "order"
                                    }
                                },
                                [s("el-form", {
                                        ref: "adbServiceOrderForm",
                                        attrs: {
                                            model: e.adbServiceForm,
                                            "label-width": "80px",
                                            size: "small"
                                        }
                                    },
                                    [s("el-form-item", {
                                            attrs: {
                                                label: "选择站点"
                                            }
                                        },
                                        [s("el-radio-group", {
                                                on: {
                                                    change: e.onADBServiceFormSiteChange
                                                },
                                                model: {
                                                    value: e.adbServiceForm.site,
                                                    callback: function(t) {
                                                        e.$set(e.adbServiceForm, "site", t)
                                                    },
                                                    expression: "adbServiceForm.site"
                                                }
                                            },
                                            e._l(e.siteOptions, (function(t) {
                                                return s("el-radio-button", {
                                                        key: t.value,
                                                        attrs: {
                                                            label: t.value
                                                        }
                                                    },
                                                    [e._v(e._s(t.label))])
                                            })), 1)], 1), s("el-form-item", {
                                            attrs: {
                                                label: "云机版本"
                                            }
                                        },
                                        [s("el-radio-group", {
                                                model: {
                                                    value: e.adbServiceForm.version,
                                                    callback: function(t) {
                                                        e.$set(e.adbServiceForm, "version", t)
                                                    },
                                                    expression: "adbServiceForm.version"
                                                }
                                            },
                                            e._l(e.getDeviceVersionIdList(e.adbServiceForm.site), (function(t) {
                                                return s("el-radio-button", {
                                                        key: t.deviceVersionId,
                                                        attrs: {
                                                            label: t.deviceVersionId
                                                        }
                                                    },
                                                    [e._v(" " + e._s(t.deviceVersionName))])
                                            })), 1)], 1), s("el-form-item", {
                                            attrs: {
                                                label: "订购时长"
                                            }
                                        },
                                        [s("el-radio-group", {
                                                model: {
                                                    value: e.adbServiceForm.days,
                                                    callback: function(t) {
                                                        e.$set(e.adbServiceForm, "days", t)
                                                    },
                                                    expression: "adbServiceForm.days"
                                                }
                                            },
                                            e._l(e.getADBServicePriceList(), (function(t) {
                                                return s("el-radio-button", {
                                                        key: t.productDays,
                                                        attrs: {
                                                            label: t.productDays
                                                        }
                                                    },
                                                    [e._v(" " + e._s(t.productDays) + "天" + e._s(t.userProductPrice) + "元")])
                                            })), 1)], 1), s("el-form-item", {
                                            attrs: {
                                                label: "订购数量3"
                                            }
                                        },
                                        [s("el-input-number", {
                                            attrs: {
                                                "controls-position": "right",
                                                min: 1,
                                                max: 1e3,
                                                step: 1,
                                                "step-strictly": ""
                                            },
                                            model: {
                                                value: e.adbServiceForm.num,
                                                callback: function(t) {
                                                    e.$set(e.adbServiceForm, "num", t)
                                                },
                                                expression: "adbServiceForm.num"
                                            }
                                        })], 1), s("el-form-item", {
                                            attrs: {
                                                label: "支付方式"
                                            }
                                        },
                                        [s("el-radio-group", {
                                                attrs: {
                                                    fill: 2 === e.adbServiceForm.paymentType ? "#0e9dec": "#1AAD19"
                                                },
                                                model: {
                                                    value: e.adbServiceForm.paymentType,
                                                    callback: function(t) {
                                                        e.$set(e.adbServiceForm, "paymentType", t)
                                                    },
                                                    expression: "adbServiceForm.paymentType"
                                                }
                                            },
                                            [s("el-radio-button", {
                                                    attrs: {
                                                        label: 2
                                                    }
                                                },
                                                [s("svg-icon", {
                                                    staticStyle: {
                                                        "margin-right": "3px"
                                                    },
                                                    attrs: {
                                                        "icon-class": "alipay"
                                                    }
                                                }), e._v("支付宝")], 1), s("el-radio-button", {
                                                    attrs: {
                                                        label: 3
                                                    }
                                                },
                                                [s("svg-icon", {
                                                    staticStyle: {
                                                        "margin-right": "3px"
                                                    },
                                                    attrs: {
                                                        "icon-class": "wx"
                                                    }
                                                }), e._v("微 信")], 1)], 1)], 1), s("el-form-item", {
                                            attrs: {
                                                label: "支付金额"
                                            }
                                        },
                                        [s("span", {
                                                staticStyle: {
                                                    color: "#F56C6C",
                                                    "font-weight": "600",
                                                    "font-size": "16px"
                                                }
                                            },
                                            [e._v(e._s(e.getADBServiceOrderPrice()) + "元")])])], 1)], 1), s("el-tab-pane", {
                                    attrs: {
                                        label: "续费",
                                        name: "renewal"
                                    }
                                },
                                [s("el-form", {
                                        ref: "adbServiceRenewalForm",
                                        attrs: {
                                            model: e.adbServiceForm,
                                            "label-width": "80px",
                                            size: "small"
                                        }
                                    },
                                    [s("el-form-item", {
                                            attrs: {
                                                label: "订购时长"
                                            }
                                        },
                                        [s("el-radio-group", {
                                                model: {
                                                    value: e.adbServiceForm.days,
                                                    callback: function(t) {
                                                        e.$set(e.adbServiceForm, "days", t)
                                                    },
                                                    expression: "adbServiceForm.days"
                                                }
                                            },
                                            e._l(e.getADBServicePriceList(), (function(t) {
                                                return s("el-radio-button", {
                                                        key: t.productDays,
                                                        attrs: {
                                                            label: t.productDays
                                                        }
                                                    },
                                                    [e._v(" " + e._s(t.productDays) + "天" + e._s(t.userProductPrice) + "元")])
                                            })), 1)], 1), s("el-form-item", {
                                            attrs: {
                                                label: "选择云机"
                                            }
                                        },
                                        [s("el-button", {
                                                attrs: {
                                                    type: "primary",
                                                    icon: "el-icon-plus"
                                                },
                                                on: {
                                                    click: function(t) {
                                                        e.adbServiceRenewalSelectDialogShow = !0
                                                    }
                                                }
                                            },
                                            [e._v("点击选择")]), e.adbServiceForm.devices.length > 0 ? s("div", [e._v(" 已选云机"), s("span", {
                                                staticStyle: {
                                                    color: "#F56C6C",
                                                    "font-weight": "600",
                                                    padding: "0 3px"
                                                }
                                            },
                                            [e._v(" " + e._s(e.adbServiceForm.devices.length))]), e._v("台 ")]) : e._e()], 1), s("el-form-item", {
                                            attrs: {
                                                label: "支付方式"
                                            }
                                        },
                                        [s("el-radio-group", {
                                                attrs: {
                                                    fill: 2 === e.adbServiceForm.paymentType ? "#0e9dec": "#1AAD19"
                                                },
                                                model: {
                                                    value: e.adbServiceForm.paymentType,
                                                    callback: function(t) {
                                                        e.$set(e.adbServiceForm, "paymentType", t)
                                                    },
                                                    expression: "adbServiceForm.paymentType"
                                                }
                                            },
                                            [s("el-radio-button", {
                                                    attrs: {
                                                        label: 2
                                                    }
                                                },
                                                [s("svg-icon", {
                                                    staticStyle: {
                                                        "margin-right": "3px"
                                                    },
                                                    attrs: {
                                                        "icon-class": "alipay"
                                                    }
                                                }), e._v("支付宝")], 1), s("el-radio-button", {
                                                    attrs: {
                                                        label: 3
                                                    }
                                                },
                                                [s("svg-icon", {
                                                    staticStyle: {
                                                        "margin-right": "3px"
                                                    },
                                                    attrs: {
                                                        "icon-class": "wx"
                                                    }
                                                }), e._v("微 信")], 1)], 1)], 1), s("el-form-item", {
                                            attrs: {
                                                label: "支付金额"
                                            }
                                        },
                                        [s("span", {
                                                staticStyle: {
                                                    color: "#F56C6C",
                                                    "font-weight": "600",
                                                    "font-size": "16px"
                                                }
                                            },
                                            [e._v(e._s(e.getADBServiceOrderPrice()) + "元")])])], 1)], 1)], 1), s("span", {
                                staticClass: "dialog-footer",
                                attrs: {
                                    slot: "footer"
                                },
                                slot: "footer"
                            },
                            [s("el-button", {
                                    attrs: {
                                        size: "small",
                                        type: "primary"
                                    },
                                    on: {
                                        click: e.handleADBServiceOrderSumbit
                                    }
                                },
                                [e._v(" 确认支付 ")]), s("el-button", {
                                    attrs: {
                                        size: "small"
                                    },
                                    on: {
                                        click: e.adbServiceOrderDialogClose
                                    }
                                },
                                [e._v(" 取消 ")])], 1)], 1), s("el-dialog", {
                            attrs: {
                                visible: e.userSettingDialogShow,
                                title: "账号设置",
                                center: "",
                                width: "380px",
                                "custom-class": "setting-dialog",
                                "close-on-click-modal": !1
                            },
                            on: {
                                close: e.userSettingDialogClose
                            }
                        },
                        [s("el-form", {
                                ref: "settingForm",
                                attrs: {
                                    model: e.settingForm,
                                    rules: e.settingFormRules,
                                    "label-width": "100px",
                                    size: "mini"
                                }
                            },
                            [s("el-form-item", {
                                    attrs: {
                                        label: "手机号"
                                    }
                                },
                                [s("span", [e._v(e._s(e.phoneNum))])]), s("el-form-item", {
                                    attrs: {
                                        label: "昵称",
                                        prop: "userNick"
                                    }
                                },
                                [s("el-input", {
                                    attrs: {
                                        tabindex: "1"
                                    },
                                    model: {
                                        value: e.settingForm.userNick,
                                        callback: function(t) {
                                            e.$set(e.settingForm, "userNick", t)
                                        },
                                        expression: "settingForm.userNick"
                                    }
                                })], 1), s("el-form-item", {
                                    attrs: {
                                        label: "联系QQ",
                                        prop: "contactQq"
                                    }
                                },
                                [s("el-input", {
                                    attrs: {
                                        tabindex: "2"
                                    },
                                    model: {
                                        value: e.settingForm.contactQq,
                                        callback: function(t) {
                                            e.$set(e.settingForm, "contactQq", t)
                                        },
                                        expression: "settingForm.contactQq"
                                    }
                                })], 1)], 1), s("span", {
                                staticClass: "dialog-footer",
                                attrs: {
                                    slot: "footer"
                                },
                                slot: "footer"
                            },
                            [s("el-button", {
                                    attrs: {
                                        type: "primary",
                                        size: "mini"
                                    },
                                    on: {
                                        click: e.handleSettingFormSumbit
                                    }
                                },
                                [e._v(" 确定 ")]), s("el-button", {
                                    attrs: {
                                        size: "mini"
                                    },
                                    on: {
                                        click: e.userSettingDialogClose
                                    }
                                },
                                [e._v(" 取消 ")])], 1)], 1), s("el-dialog", {
                            attrs: {
                                visible: e.userLiveSelectDialogVisible,
                                title: "选择线路",
                                width: "380px",
                                "close-on-click-modal": !1
                            },
                            on: {
                                "update:visible": function(t) {
                                    e.userLiveSelectDialogVisible = t
                                }
                            }
                        },
                        [s("el-select", {
                                staticStyle: {
                                    width: "280px"
                                },
                                attrs: {
                                    placeholder: "请选择"
                                },
                                model: {
                                    value: e.userLiveSelectIndex,
                                    callback: function(t) {
                                        e.userLiveSelectIndex = t
                                    },
                                    expression: "userLiveSelectIndex"
                                }
                            },
                            e._l(e.userLiveList, (function(e, t) {
                                return s("el-option", {
                                    key: e.urlId,
                                    attrs: {
                                        label: e.urlId,
                                        value: t,
                                        size: "small"
                                    }
                                })
                            })), 1), void 0 !== e.userLiveSelectIndex ? s("el-button", {
                                staticStyle: {
                                    "margin-left": "10px"
                                },
                                attrs: {
                                    size: "mini",
                                    type: "text"
                                },
                                on: {
                                    click: e.handleLiveUrlShow
                                }
                            },
                            [e._v("查看地址")]) : e._e(), s("span", {
                                staticClass: "dialog-footer",
                                attrs: {
                                    slot: "footer"
                                },
                                slot: "footer"
                            },
                            [s("el-button", {
                                    attrs: {
                                        type: "primary",
                                        size: "small"
                                    },
                                    on: {
                                        click: e.gotoLivePage
                                    }
                                },
                                [e._v("确 定")])], 1)], 1), s("el-dialog", {
                            staticClass: "ip-switch-dialog",
                            attrs: {
                                visible: e.ipSwitchDialogVisible,
                                title: "IP代理切换",
                                width: "720px",
                                "close-on-click-modal": !1
                            },
                            on: {
                                "update:visible": function(t) {
                                    e.ipSwitchDialogVisible = t
                                },
                                close: function(t) {
                                    e.ipSwitchForm.cities = [0]
                                }
                            }
                        },
                        [s("el-form", {
                                directives: [{
                                    name: "loading",
                                    rawName: "v-loading",
                                    value: e.ipSwitchSumbitLoding,
                                    expression: "ipSwitchSumbitLoding"
                                }],
                                ref: "ipSwitchForm",
                                attrs: {
                                    model: e.ipSwitchForm,
                                    "label-width": "120px",
                                    size: "small",
                                    "element-loading-text": "正在切换中",
                                    "element-loading-spinner": "el-icon-loading"
                                }
                            },
                            [s("el-form-item", {
                                    attrs: {
                                        label: "切换方式"
                                    }
                                },
                                [s("el-radio-group", {
                                        model: {
                                            value: e.ipSwitchForm.ipMode,
                                            callback: function(t) {
                                                e.$set(e.ipSwitchForm, "ipMode", t)
                                            },
                                            expression: "ipSwitchForm.ipMode"
                                        }
                                    },
                                    [s("el-radio-button", {
                                            attrs: {
                                                label: 0
                                            }
                                        },
                                        [e._v("随机")]), s("el-radio-button", {
                                            attrs: {
                                                label: 1
                                            }
                                        },
                                        [e._v("绑定")])], 1), s("el-tooltip", {
                                        attrs: {
                                            content: "选择随机在点击切换后IP会发生变化，绑定则保持不变，除非进行恢复出厂设置操作",
                                            placement: "right"
                                        }
                                    },
                                    [s("i", {
                                        staticClass: "el-icon-question",
                                        staticStyle: {
                                            "font-size": "16px",
                                            "margin-left": "5px",
                                            cursor: "pointer"
                                        }
                                    })])], 1), 0 === e.ipSwitchForm.ipMode ? s("el-form-item", {
                                    attrs: {
                                        label: "地域选择"
                                    }
                                },
                                [s("el-checkbox-group", {
                                        on: {
                                            change: e.handleIpSwitchCitiesChange
                                        },
                                        model: {
                                            value: e.ipSwitchForm.cities,
                                            callback: function(t) {
                                                e.$set(e.ipSwitchForm, "cities", t)
                                            },
                                            expression: "ipSwitchForm.cities"
                                        }
                                    },
                                    e._l(e.ipSwitchCities, (function(t) {
                                        return s("el-checkbox", {
                                                key: t.id,
                                                attrs: {
                                                    label: t.id
                                                }
                                            },
                                            [e._v(e._s(t.city))])
                                    })), 1)], 1) : e._e()], 1), s("span", {
                                staticClass: "dialog-footer",
                                attrs: {
                                    slot: "footer"
                                },
                                slot: "footer"
                            },
                            [s("el-button", {
                                    attrs: {
                                        type: "primary",
                                        size: "small",
                                        loading: e.ipSwitchSumbitLoding
                                    },
                                    on: {
                                        click: e.ipSwitchSumbit
                                    }
                                },
                                [e._v(e._s(e.ipSwitchSumbitLoding ? "切换中": "确 定"))])], 1)], 1), s("el-dialog", {
                            attrs: {
                                visible: e.appActionDialogVisible,
                                title: "选择应用",
                                width: "380px",
                                "close-on-click-modal": !1
                            },
                            on: {
                                "update:visible": function(t) {
                                    e.appActionDialogVisible = t
                                },
                                close: function(t) {
                                    e.appActionSelect = ""
                                }
                            }
                        },
                        [s("el-select", {
                                staticStyle: {
                                    width: "100%"
                                },
                                attrs: {
                                    placeholder: "请选择应用"
                                },
                                model: {
                                    value: e.appActionSelect,
                                    callback: function(t) {
                                        e.appActionSelect = t
                                    },
                                    expression: "appActionSelect"
                                }
                            },
                            e._l(e.appActionAppList, (function(e) {
                                return s("el-option", {
                                    key: e.appid,
                                    attrs: {
                                        label: e.appname,
                                        value: e.packagename
                                    }
                                })
                            })), 1), s("span", {
                                staticClass: "dialog-footer",
                                attrs: {
                                    slot: "footer"
                                },
                                slot: "footer"
                            },
                            [s("el-button", {
                                    attrs: {
                                        type: "primary",
                                        size: "small",
                                        loading: e.appActionSumbitLoding
                                    },
                                    on: {
                                        click: e.appActionSumbit
                                    }
                                },
                                [e._v(e._s(e.appActionSumbitLoding ? "提交中": "确 定"))])], 1)], 1)], 2)
            },
            r = [],
            n = (i("99af"), i("a623"), i("4de4"), i("7db0"), i("c740"), i("4160"), i("caad"), i("c975"), i("a15b"), i("d81d"), i("13d5"), i("fb6a"), i("45fc"), i("a434"), i("b0c0"), i("4ec9"), i("b64b"), i("d3b7"), i("07ac"), i("ac1f"), i("25f0"), i("2532"), i("3ca3"), i("5319"), i("1276"), i("159b"), i("ddb0"), i("2909")),
            a = (i("96cf"), i("1da1")),
            o = i("5530"),
            c = i("2f62"),
            l = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", {
                        ref: "deviceCard",
                        staticClass: "device-card",
                        class: [e.size]
                    },
                    [i("el-dialog", {
                            attrs: {
                                visible: e.adbDebugDialogVisible,
                                width: "350px",
                                center: "",
                                "show-close": !1,
                                "custom-class": "adb-dialog",
                                "close-on-click-modal": !1
                            },
                            on: {
                                "update:visible": function(t) {
                                    e.adbDebugDialogVisible = t
                                }
                            }
                        },
                        [e.currentADBInfo ? i("p", [e._v("远程连接地址: " + e._s(e.currentADBInfo.remoteIp))]) : e._e(), e.currentADBInfo ? i("p", [e._v("远程连接端口: " + e._s(e.currentADBInfo.port))]) : e._e(), i("span", {
                                staticClass: "dialog-footer",
                                attrs: {
                                    slot: "footer"
                                },
                                slot: "footer"
                            },
                            [i("el-button", {
                                    attrs: {
                                        type: "primary",
                                        size: "mini"
                                    },
                                    on: {
                                        click: function(t) {
                                            e.adbDebugDialogVisible = !1
                                        }
                                    }
                                },
                                [e._v(" 确定 ")])], 1)]), i("el-dialog", {
                            attrs: {
                                visible: e.qrcodeDialogVisible,
                                width: "350px",
                                center: "",
                                title: e.qrcodeAppShow ? "APP二维码": "相机二维码",
                                "custom-class": "camera-qrcode-dialog",
                                "close-on-click-modal": !1
                            },
                            on: {
                                "update:visible": function(t) {
                                    e.qrcodeDialogVisible = t
                                }
                            }
                        },
                        [i("div", [i("div", {
                                directives: [{
                                    name: "loading",
                                    rawName: "v-loading",
                                    value: e.qrcodeLoding,
                                    expression: "qrcodeLoding"
                                }],
                                staticClass: "qrcode"
                            },
                            [i("qrcode", {
                                attrs: {
                                    value: e.qrcodeAppShow ? e.virtualCameraAppSrc: e.virtualCameraSrc,
                                    options: {
                                        width: 220,
                                        margin: 0
                                    }
                                }
                            })], 1), i("div", {
                                staticClass: "app"
                            },
                            [i("p", [e._v(" " + e._s(e.qrcodeAppShow ? "使用Android手机浏览器扫描二维码下载": "使用虚拟相机APP扫描上方二维码连接") + " ")]), i("span", {
                                    on: {
                                        click: function(t) {
                                            e.qrcodeAppShow = !e.qrcodeAppShow
                                        }
                                    }
                                },
                                [e._v(e._s(e.qrcodeAppShow ? "相机二维码": "下载地址"))])])])]), i("el-card", {
                            staticClass: "card"
                        },
                        [i("div", {
                                staticClass: " header",
                                attrs: {
                                    slot: "header"
                                },
                                slot: "header"
                            },
                            [i("el-checkbox", {
                                    on: {
                                        change: e.selectChange
                                    },
                                    model: {
                                        value: e.select,
                                        callback: function(t) {
                                            e.select = t
                                        },
                                        expression: "select"
                                    }
                                },
                                [e._v(e._s(e.device.deviceId))]), i("el-tooltip", {
                                    attrs: {
                                        placement: "right",
                                        "open-delay": 1e3
                                    }
                                },
                                [i("div", {
                                        attrs: {
                                            slot: "content"
                                        },
                                        slot: "content"
                                    },
                                    [e._v(" 云机ID：" + e._s(e.device.deviceId) + " "), i("br"), e._v(" 云机序列：" + e._s(e.device.siteId) + "#" + e._s(e.device.hippoCloudDeviceId) + " "), i("br"), e._v(" 云机版本：" + e._s(e.device.deviceVersionName) + " "), i("br"), e._v(" 云机到期时间：" + e._s(e.device.expireTime) + " "), i("br"), e._l(e.device.businessServiceList, (function(t) {
                                        return [e._v(" " + e._s(t.businessServiceName) + "：" + e._s(t.businessExpireTime) + " "), i("br")]
                                    }))], 2), i("span", {
                                        staticClass: "version"
                                    },
                                    [e._v(e._s(e.device.deviceVersionName))])])], 1), i("div", {
                                staticClass: "device"
                            },
                            [0 === e.device.deviceStatus || 2 === e.device.deviceStatus ? [i("div", {
                                    staticClass: "device-snapshot"
                                },
                                [i("img", {
                                    staticStyle: {
                                        width: "100%"
                                    },
                                    attrs: {
                                        src: e.imgSrc
                                    }
                                }), e.getUserDeviceSnapshotFailed ? i("span", {
                                        staticClass: "refresh",
                                        on: {
                                            click: e.getUserDeviceSnapshot
                                        }
                                    },
                                    [e._v("重新获取")]) : e._e(), e.currentADBInfo ? i("span", {
                                        staticClass: "adb"
                                    },
                                    [e._v("ADB")]) : e._e()]), e.getUserDeviceSnapshotFailed ? e._e() : i("div", {
                                    staticClass: "device-overlay",
                                    on: {
                                        click: function(t) {
                                            return e.$emit("remote-control")
                                        }
                                    }
                                },
                                [i("div", {
                                        staticClass: "quick-btns"
                                    },
                                    [i("el-button", {
                                            staticClass: "button",
                                            attrs: {
                                                size: "mini"
                                            },
                                            on: {
                                                click: function(t) {
                                                    return t.stopPropagation(),
                                                        e.$emit("restart")
                                                }
                                            }
                                        },
                                        [e._v("重启云机")]), void 0 !== e.currentIpporxy ? i("el-button", {
                                            staticClass: "button",
                                            attrs: {
                                                size: "mini"
                                            },
                                            on: {
                                                click: function(t) {
                                                    return t.stopPropagation(),
                                                        e.$emit("ip-switch")
                                                }
                                            }
                                        },
                                        [e._v("IP代理切换")]) : e._e(), void 0 !== e.currentIpporxy ? i("el-button", {
                                            staticClass: "button",
                                            attrs: {
                                                size: "mini"
                                            },
                                            on: {
                                                click: function(t) {
                                                    return t.stopPropagation(),
                                                        e.$emit("ip-close")
                                                }
                                            }
                                        },
                                        [e._v("IP代理关闭")]) : e._e(), 1 !== e.device.deviceVersionId && 2 !== e.device.deviceVersionId ? i("el-button", {
                                            staticClass: "button",
                                            attrs: {
                                                size: "mini"
                                            },
                                            on: {
                                                click: function(t) {
                                                    return t.stopPropagation(),
                                                        e.handleDeviceCameraQrcode(t)
                                                }
                                            }
                                        },
                                        [e._v("相机二维码")]) : e._e(), e.currentADBInfo ? i("el-button", {
                                            staticClass: "button",
                                            attrs: {
                                                size: "mini"
                                            },
                                            on: {
                                                click: function(t) {
                                                    return t.stopPropagation(),
                                                        e.handleADBDebugVisible(t)
                                                }
                                            }
                                        },
                                        [e._v("高级调试ADB")]) : e._e()], 1), i("span", {
                                        staticStyle: {
                                            color: "rgb(121, 187, 255)"
                                        }
                                    },
                                    [e._v("点击控制云机")])])] : [i("div", {
                                    staticClass: "device-exception"
                                },
                                [3 === e.device.deviceStatus ? i("span", {
                                        staticClass: "error"
                                    },
                                    [i("svg-icon", {
                                        attrs: {
                                            "icon-class": "device-error"
                                        }
                                    }), e._v(" 设备故障 ")], 1) : e._e(), 1 === e.device.deviceStatus || 8 === e.device.deviceStatus ? i("span", {
                                        staticClass: "restart"
                                    },
                                    [i("i", {
                                        staticClass: "el-icon-loading"
                                    }), e._v(" 正在重启 ")]) : e._e(), 5 === e.device.deviceStatus ? i("span", {
                                        staticClass: "restart"
                                    },
                                    [i("i", {
                                        staticClass: "el-icon-loading"
                                    }), e._v(" 恢复出厂设置 ")]) : e._e()])], e.expireTimeNotice ? i("div", {
                                    staticClass: "device-xpiration-date"
                                },
                                [e._v(" " + e._s(e.expireTimeMessage) + " ")]) : e._e()], 2), i("div", {
                                staticClass: "device-info"
                            },
                            [void 0 !== e.currentIpporxy ? [i("span", [e._v(e._s(e.device.ipAddr ? e.device.ipAddr: e.currentIpporxy.businessServiceName))])] : e._e()], 2)])], 1)
            },
            d = [],
            u = i("72d1"),
            p = "data:image/png;base64,",
            v = function(e) {
                if (e) {
                    var t = e.split(" "),
                        i = t[0].split("-"),
                        s = t[1].split(":"),
                        r = new Date(i[0], i[1] - 1, i[2], s[0], s[1], s[2]);
                    return r
                }
            },
            h = function(e) {
                var t = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
                    i = e.getBoundingClientRect() && e.getBoundingClientRect().top;
                return i <= t + 100
            },
            m = {
                name: "DeviceCard",
                props: {
                    device: {
                        type: Object,
                        required: !0
                    },
                    allSelect: {
                        type: Boolean,
                        default:
                            !1
                    },
                    size: {
                        type: String,
                        default:
                            ""
                    }
                },
                data: function() {
                    return {
                        select: !1,
                        imgSrc: "",
                        virtualCameraSrc: "https://example.com",
                        virtualCameraAppSrc: "http://img.coco5i.com/CloudCamera-v1.1-2020-05-20.apk",
                        virtualHdCameraAppSrc: "http://img.coco5i.com/CloudHdCameraSendPic-v1.1-2020-09-08.apk",
                        qrcodeLoding: !0,
                        qrcodeAppShow: !1,
                        qrcodeDialogVisible: !1,
                        expireTimeNotice: !1,
                        expireTimeMessage: "",
                        getUserDeviceSnapshotFailed: !1,
                        adbDebugDialogVisible: !1
                    }
                },
                computed: Object(o["a"])({},
                    Object(c["b"])(["token"]), {
                        businessServiceNames: function() {
                            var e = this.device.businessServiceList;
                            return e.length > 0 ? e.map((function(e) {
                                return e.businessServiceName
                            })).join("+") : ""
                        },
                        currentIpporxy: function() {
                            return this.device.businessServiceList.find((function(e) {
                                return 1 === e.businessServiceId || 8 === e.businessServiceId || 9 === e.businessServiceId
                            }))
                        },
                        currentADBInfo: function() {
                            return this.device.businessServiceList.find((function(e) {
                                return 16 === e.businessServiceId
                            }))
                        }
                    }),
                watch: {
                    allSelect: function(e, t) {
                        this.select = e
                    }
                },
                created: function() {},
                mounted: function() {
                    var e = new Date,
                        t = e.getTime(),
                        i = v(this.device.expireTime),
                        s = (i - t) / 864e5;
                    s < 3 && (this.expireTimeNotice = !0, this.expireTimeMessage = "".concat(Math.ceil(s), "天内到期"), s < 1 && (this.expireTimeMessage = "".concat(Math.ceil(24 * s), "小时内到期"))),
                    0 !== this.device.deviceStatus && 2 !== this.device.deviceStatus || (h(this.$refs["deviceCard"]) ? this.getUserDeviceSnapshot() : (window.addEventListener("scroll", this.handleIsInViewPort), window.addEventListener("resize", this.handleIsInViewPort)))
                },
                methods: {
                    hasBusinessServiceId: function(e) {
                        var t = this.device.businessServiceList;
                        return t.some((function(t) {
                            return t.businessServiceId === e
                        }))
                    },
                    selectChange: function(e) {
                        this.$emit("select-change", e)
                    },
                    getUserDeviceSnapshot: function() {
                        var e = this;
                        Object(u["j"])({
                            token: this.token,
                            deviceId: this.device.deviceId,
                            scale: 40
                        }).then((function(t) {
                            var i = t.data;
                            e.imgSrc = p + i.snapdata,
                                e.getUserDeviceSnapshotFailed = !1
                        })).
                        catch((function(t) {
                            e.getUserDeviceSnapshotFailed = !0,
                                e.imgSrc = i("2ccb")
                        }))
                    },
                    handleDeviceCameraQrcode: function() {
                        var e = this;
                        this.qrcodeDialogVisible = !0,
                            this.qrcodeLoding = !0,
                            Object(u["e"])({
                                token: this.token,
                                deviceId: this.device.deviceId
                            }).then((function(t) {
                                var i = t.data;
                                e.virtualCameraSrc = i,
                                    e.qrcodeLoding = !1
                            }))
                    },
                    handleADBDebugVisible: function() {
                        this.adbDebugDialogVisible = !0
                    },
                    handleIpSwitch: function(e) {
                        e ? this.$emit("ip-switch-bind") : this.$emit("ip-switch")
                    },
                    handleIsInViewPort: function() {
                        h(this.$refs["deviceCard"]) && (this.getUserDeviceSnapshot(), window.removeEventListener("scroll", this.handleIsInViewPort), window.removeEventListener("resize", this.handleIsInViewPort))
                    }
                }
            },
            f = m,
            g = (i("586a"), i("fa06"), i("2877")),
            b = Object(g["a"])(f, l, d, !1, null, "2faea914", null),
            S = b.exports,
            w = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", {
                        staticClass: "device"
                    },
                    [i("vue-draggable-resizable", {
                            attrs: {
                                parent: !0,
                                resizable: !1,
                                "drag-handle": ".header",
                                x: e.windowLeft,
                                y: e.windowTop
                            }
                        },
                        [i("div", {
                                staticClass: "window"
                            },
                            [i("div", {
                                    staticClass: "header",
                                    style: {
                                        width: e.deviceWidth + "px"
                                    }
                                },
                                [i("span", {
                                        staticClass: "id"
                                    },
                                    [e._v(e._s(e.device.id))]), i("i", {
                                    staticClass: "close el-icon-close",
                                    on: {
                                        click: e.closeClick
                                    }
                                })]), i("div", {
                                    staticClass: "body",
                                    style: {
                                        width: e.deviceWidth + "px",
                                        height: e.deviceHeight + "px"
                                    }
                                },
                                [e.deviceMessage ? i("div", {
                                        staticClass: "message"
                                    },
                                    [e._v(e._s(e.deviceMessage))]) : e._e(), i("div", {
                                    style: {
                                        width: e.deviceWidth + "px",
                                        height: e.deviceHeight + "px"
                                    },
                                    attrs: {
                                        id: e.device.id
                                    }
                                })]), i("div", {
                                    staticClass: "footer",
                                    style: {
                                        width: e.deviceWidth + "px"
                                    }
                                },
                                [i("el-tooltip", {
                                        staticClass: "tooltip",
                                        attrs: {
                                            effect: "dark",
                                            content: "返回键",
                                            placement: "top-start"
                                        }
                                    },
                                    [i("div", {
                                        staticClass: "return",
                                        on: {
                                            click: e.returnClick
                                        }
                                    })]), i("el-tooltip", {
                                        staticClass: "tooltip",
                                        attrs: {
                                            effect: "dark",
                                            content: "主页键",
                                            placement: "top"
                                        }
                                    },
                                    [i("div", {
                                        staticClass: "home",
                                        on: {
                                            click: e.homeClick
                                        }
                                    })]), i("el-tooltip", {
                                        staticClass: "tooltip",
                                        attrs: {
                                            effect: "dark",
                                            content: "任务键",
                                            placement: "top"
                                        }
                                    },
                                    [i("div", {
                                        staticClass: "recent",
                                        on: {
                                            click: e.recentClick
                                        }
                                    })]), i("el-tooltip", {
                                        staticClass: "tooltip",
                                        attrs: {
                                            effect: "dark",
                                            content: "音量+",
                                            placement: "top"
                                        }
                                    },
                                    [i("div", {
                                        staticClass: "vol-up",
                                        on: {
                                            click: e.volUpClick
                                        }
                                    })]), i("el-tooltip", {
                                        staticClass: "tooltip",
                                        attrs: {
                                            effect: "dark",
                                            content: "音量-",
                                            placement: "top"
                                        }
                                    },
                                    [i("div", {
                                        staticClass: "vol-down",
                                        on: {
                                            click: e.volDownClick
                                        }
                                    })]), i("el-tooltip", {
                                        staticClass: "tooltip",
                                        attrs: {
                                            effect: "dark",
                                            content: "切换横竖屏",
                                            placement: "top"
                                        }
                                    },
                                    [i("div", {
                                        staticClass: "toogle-orientation",
                                        on: {
                                            click: e.toogleOrientationClick
                                        }
                                    })]), i("el-tooltip", {
                                        staticClass: "tooltip",
                                        attrs: {
                                            effect: "dark",
                                            content: "屏幕截图",
                                            placement: "top"
                                        }
                                    },
                                    [i("div", {
                                        staticClass: "device-snapshot",
                                        on: {
                                            click: e.handleDeviceSnapshotClick
                                        }
                                    })]), i("el-tooltip", {
                                        staticClass: "tooltip",
                                        attrs: {
                                            effect: "dark",
                                            content: "拖拽拉伸窗口",
                                            placement: "top-end"
                                        }
                                    },
                                    [i("div", {
                                        staticClass: "resize",
                                        on: {
                                            mousedown: function(t) {
                                                return t.stopPropagation(),
                                                    t.preventDefault(),
                                                    e.handleResize(t)
                                            }
                                        }
                                    })])], 1)])])], 1)
            },
            y = [],
            k = (i("fb19"), i("21a6")),
            D = {
                name: "DeviceRemoteControl",
                props: {
                    device: {
                        type: Object,
                        required: !0
                    }
                },
                data: function() {
                    return {
                        player: null,
                        deviceWidth: 720,
                        deviceHeight: 1280,
                        deviceMessage: "",
                        windowLeft: 0,
                        windowTop: 0,
                        resizeStartPosition: {
                            deviceWidth: 0,
                            deviceHeight: 0,
                            mouseX: 0,
                            mouseY: 0
                        },
                        snapshotLoding: !1
                    }
                },
                beforeMount: function() {
                    window.addEventListener("resize", this.computeDeviceSize),
                        this.computeDeviceSize(),
                        this.windowLeft = this.computeWindowLeft(),
                        this.windowTop = this.computeWindowTop()
                },
                mounted: function() {
                    var e = this;
                    LongeneClient.LoggingControl.setLogLevel("info"),
                        this.player = LongeneClient.createAppPlayer("".concat(this.device.id), {
                            keyboard: !0,
                            orientation: "portrait"
                        });
                    var t = this.device,
                        i = t.ip,
                        s = t.port,
                        r = t.token,
                        n = t.domain;
                    this.player.open({
                        ip: i,
                        port: s,
                        token: r,
                        domain: n
                    }),
                        this.player.on("error", (function(t) {
                            t && t.message && t.code && (e.deviceMessage = t.message + "(" + t.code + ")")
                        })),
                        this.deviceMessage = "正在连接中...",
                        this.player.on("statechange", (function() {
                            "playing" == e.player.state && (e.deviceMessage = "")
                        }))
                },
                beforeDestroy: function() {
                    this.player.close()
                },
                computed: {},
                methods: {
                    computeWindowLeft: function() {
                        var e = document.documentElement.clientWidth,
                            t = Math.floor((e - this.deviceWidth) / 2) + Math.round(100 * Math.random());
                        return t > 0 ? t: 0
                    },
                    computeWindowTop: function() {
                        var e = document.documentElement.clientHeight,
                            t = Math.floor((e - this.deviceHeight - 72) / 2) + Math.round(100 * Math.random());
                        return t > 0 ? t: 0
                    },
                    computeDeviceSize: function() {
                        var e = this,
                            t = document.documentElement.clientWidth,
                            i = document.documentElement.clientHeight;
                        if (this.deviceWidth = Math.floor(.2 * t), this.deviceHeight = Math.floor(16 * this.deviceWidth / 9), this.deviceHeight > i && (this.deviceHeight = Math.floor(.8 * i), this.deviceWidth = Math.floor(9 * this.deviceHeight / 16)), this.player) {
                            var s = this.player.orientation;
                            if ("landscape" == s) {
                                var r = this.deviceWidth;
                                this.deviceWidth = 1.5 * this.deviceHeight,
                                    this.deviceHeight = 1.5 * r
                            }
                            setTimeout((function() {
                                e.player.updateInterface()
                            }), 50)
                        }
                    },
                    closeClick: function() {
                        this.player && this.player.close(),
                            this.$emit("close")
                    },
                    returnClick: function() {
                        this.player && this.player.emitBack()
                    },
                    homeClick: function() {
                        this.player && this.player.emitHome()
                    },
                    recentClick: function() {
                        this.player && this.player.openRecent()
                    },
                    volUpClick: function() {
                        this.player && this.player.emitVolumeUp()
                    },
                    volDownClick: function() {
                        this.player && this.player.emitVolumeDown()
                    },
                    toogleOrientationClick: function() {
                        var e = this;
                        if (this.player) {
                            var t = this.deviceWidth;
                            this.deviceWidth = this.deviceHeight,
                                this.deviceHeight = t;
                            var i = this.player.orientation;
                            "portrait" == i ? this.player.setOrientation("landscape") : this.player.setOrientation("portrait"),
                                setTimeout((function() {
                                    e.player.updateInterface()
                                }), 0)
                        }
                    },
                    handleDeviceSnapshotClick: function() {
                        var e = this;
                        "playing" === this.player.state ? this.snapshotLoding || (this.$message.success("正在进行屏幕截图，请稍后..."), this.snapshotLoding = !0, Object(u["g"])({
                            deviceIdList: [this.device.id]
                        }).then((function(t) {
                            var i = document.createElement("canvas");
                            i.width = 1280,
                                i.height = 720;
                            var s = e.player.mediaElement,
                                r = i.getContext("2d");
                            r.drawImage(s, 0, 0, 1280, 720),
                                i.toBlob((function(t) {
                                    Object(k["saveAs"])(t, "云机截屏".concat(e.device.id, ".png"))
                                })),
                                e.snapshotLoding = !1
                        })).
                        catch((function(t) {
                            e.snapshotLoding = !1
                        }))) : this.$message.warning("截屏失败，云机还未连接")
                    },
                    handleResize: function(e) {
                        e.stopPropagation && e.stopPropagation(),
                            this.resizeStartPosition.mouseX = e.clientX,
                            this.resizeStartPosition.mouseY = e.clientY,
                            this.resizeStartPosition.deviceWidth = this.deviceWidth,
                            this.resizeStartPosition.deviceHeight = this.deviceHeight,
                            document.documentElement.addEventListener("mousemove", this.doResize, !1),
                            document.documentElement.addEventListener("mouseup", this.stopResize, !1)
                    },
                    doResize: function(e) {
                        var t = this.resizeStartPosition,
                            i = t.deviceWidth,
                            s = t.deviceHeight,
                            r = t.mouseX;
                        t.mouseY;
                        this.deviceWidth = i + e.clientX - r,
                            this.deviceHeight = s + Math.round((e.clientX - r) / .5625),
                            this.player.updateInterface()
                    },
                    stopResize: function(e) {
                        document.documentElement.removeEventListener("mousemove", this.doResize, !1),
                            document.documentElement.removeEventListener("mouseup", this.stopResize, !1)
                    }
                }
            },
            C = D,
            L = (i("a910"), Object(g["a"])(C, w, y, !1, null, "9c1812b8", null)),
            I = L.exports,
            x = i("c04a"),
            F = i("32db"),
            A = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", {
                        staticClass: "treebar-container"
                    },
                    [i("el-dialog", {
                            attrs: {
                                title: "新建分组",
                                visible: e.groupCreateDialogVisible,
                                width: "30%",
                                "append-to-body": ""
                            },
                            on: {
                                "update:visible": function(t) {
                                    e.groupCreateDialogVisible = t
                                }
                            }
                        },
                        [i("el-input", {
                            attrs: {
                                placeholder: "请输入要创建的分组名",
                                size: "small",
                                maxlength: 8
                            },
                            model: {
                                value: e.newGroupName,
                                callback: function(t) {
                                    e.newGroupName = t
                                },
                                expression: "newGroupName"
                            }
                        }), i("span", {
                                attrs: {
                                    slot: "footer"
                                },
                                slot: "footer"
                            },
                            [i("el-button", {
                                    attrs: {
                                        size: "small"
                                    },
                                    on: {
                                        click: function(t) {
                                            e.groupCreateDialogVisible = !1
                                        }
                                    }
                                },
                                [e._v("取 消")]), i("el-button", {
                                    attrs: {
                                        size: "small",
                                        type: "primary"
                                    },
                                    on: {
                                        click: e.groupCreateSubmit
                                    }
                                },
                                [e._v("确 定")])], 1)], 1), i("el-dialog", {
                            attrs: {
                                title: "移动云机",
                                visible: e.deviceSetDialogVisible,
                                width: "450px",
                                "append-to-body": ""
                            },
                            on: {
                                "update:visible": function(t) {
                                    e.deviceSetDialogVisible = t
                                }
                            }
                        },
                        [i("div", [i("div", {
                                staticClass: "treebar-info"
                            },
                            [i("span", {
                                    staticStyle: {
                                        "margin-right": "15px"
                                    }
                                },
                                [e._v("已选择："), i("span", {
                                        staticStyle: {
                                            color: "#409EFF",
                                            "font-weight": "600"
                                        }
                                    },
                                    [e._v(e._s(e.moveDeviceList.length))])]), i("span", {
                                    staticStyle: {
                                        "margin-right": "0px"
                                    }
                                },
                                [e._v("移动到：")]), i("el-select", {
                                    staticClass: "select",
                                    attrs: {
                                        size: "mini"
                                    },
                                    model: {
                                        value: e.moveGroupId,
                                        callback: function(t) {
                                            e.moveGroupId = t
                                        },
                                        expression: "moveGroupId"
                                    }
                                },
                                e._l(e.groupOptions, (function(e) {
                                    return i("el-option", {
                                        key: e.id,
                                        attrs: {
                                            label: e.label,
                                            value: e.id
                                        }
                                    })
                                })), 1)], 1), i("div", {
                                staticClass: "treebar-title"
                            },
                            [i("span", [e._v("云机ID")]), i("span", [e._v("备注")]), i("span", [e._v("状态")])]), i("el-tree", {
                            ref: "moveTree",
                            staticClass: "treebar-tree",
                            attrs: {
                                data: e.data,
                                "node-key": "id",
                                "show-checkbox": ""
                            },
                            on: {
                                check: e.handleMoveTreeCheck
                            },
                            scopedSlots: e._u([{
                                key: "default",
                                fn: function(t) {
                                    var s = t.node;
                                    t.data;
                                    return i("span", {
                                            staticClass: "tree-node",
                                            class: {
                                                "tree-group-node": s.data.root
                                            }
                                        },
                                        [s.data.root ? [i("span", [e._v(e._s(s.label) + "（"), i("span", {
                                                staticStyle: {
                                                    color: "#F56C6C"
                                                }
                                            },
                                            [e._v(e._s(s.data.children.length))]), e._v("）")])] : [i("span", [e._v(e._s(s.label))]), i("span", {
                                                staticStyle: {
                                                    "margin-right": "26px"
                                                }
                                            },
                                            [e._v(e._s(s.data.remarks))]), i("span", {
                                                style: {
                                                    color: 3 === s.data.status ? "#F56C6C": "#606266"
                                                }
                                            },
                                            [e._v(e._s(e._f("deviceStatusMapping")(s.data.status)))])]], 2)
                                }
                            }])
                        })], 1), i("span", {
                                attrs: {
                                    slot: "footer"
                                },
                                slot: "footer"
                            },
                            [i("el-button", {
                                    attrs: {
                                        size: "small"
                                    },
                                    on: {
                                        click: function(t) {
                                            e.deviceSetDialogVisible = !1
                                        }
                                    }
                                },
                                [e._v("取 消")]), i("el-button", {
                                    attrs: {
                                        size: "small",
                                        type: "primary"
                                    },
                                    on: {
                                        click: e.deviceMoveSubmit
                                    }
                                },
                                [e._v("确 定")])], 1)]), i("div", {
                            staticClass: "treebar-search"
                        },
                        [i("el-input", {
                                staticClass: "item",
                                staticStyle: {
                                    width: "120px"
                                },
                                attrs: {
                                    placeholder: "云机ID",
                                    size: "mini"
                                },
                                nativeOn: {
                                    keyup: function(t) {
                                        return ! t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null: e.handleDeviceIdSearch(t.target.value)
                                    }
                                },
                                model: {
                                    value: e.deviceIdSearch,
                                    callback: function(t) {
                                        e.deviceIdSearch = t
                                    },
                                    expression: "deviceIdSearch"
                                }
                            },
                            [i("i", {
                                staticClass: "el-input__icon el-icon-search",
                                attrs: {
                                    slot: "prefix"
                                },
                                slot: "prefix"
                            })]), i("el-button", {
                                staticClass: "item",
                                staticStyle: {
                                    "font-size": "10px"
                                },
                                attrs: {
                                    type: "primary",
                                    size: "mini"
                                },
                                on: {
                                    click: e.handleGroupCreate
                                }
                            },
                            [e._v("新建分组")])], 1), e._m(0), i("el-tree", {
                        ref: "treebar",
                        staticClass: "treebar-tree",
                        attrs: {
                            data: e.data,
                            "node-key": "id",
                            accordion: "",
                            "show-checkbox": "",
                            "check-on-click-node": "",
                            "default-expanded-keys": e.defaultExpandedKeys,
                            "default-checked-keys": e.defaultCheckedKeys
                        },
                        on: {
                            check: e.handleTreeNodeCheck,
                            "node-expand": e.handleTreeNodeExpand
                        },
                        scopedSlots: e._u([{
                            key: "default",
                            fn: function(t) {
                                var s = t.node,
                                    r = t.data;
                                return i("span", {
                                        staticClass: "tree-node",
                                        class: {
                                            "tree-group-node": s.data.root
                                        }
                                    },
                                    [s.data.root ? [s.data.inputVisible ? [i("el-input", {
                                        ref: "treeInput" + r.id,
                                        attrs: {
                                            size: "mini",
                                            maxlength: 8
                                        },
                                        on: {
                                            blur: function(t) {
                                                return e.handleGroupNameCancel(s.data)
                                            }
                                        },
                                        nativeOn: {
                                            keyup: function(t) {
                                                return ! t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null: e.handleGroupNameUpdate(s.data)
                                            }
                                        },
                                        model: {
                                            value: s.data.name,
                                            callback: function(t) {
                                                e.$set(s.data, "name", t)
                                            },
                                            expression: "node.data.name"
                                        }
                                    })] : [i("span", [e._v(e._s(s.label) + "（"), i("span", {
                                            staticStyle: {
                                                color: "#F56C6C"
                                            }
                                        },
                                        [e._v(e._s(s.data.children.length))]), e._v("） "), i("el-tooltip", {
                                            attrs: {
                                                content: "修改分组名",
                                                "popper-class": "tree-node-popper"
                                            }
                                        },
                                        [s.data.id > 0 ? i("i", {
                                            staticClass: "el-icon-edit tree-node-btn",
                                            on: {
                                                click: function(t) {
                                                    return t.stopPropagation(),
                                                        e.handleGroupNameModify(s.data)
                                                }
                                            }
                                        }) : e._e()])], 1), i("span", [i("el-tooltip", {
                                            attrs: {
                                                content: "加入云机到分组",
                                                "popper-class": "tree-node-popper"
                                            }
                                        },
                                        [i("i", {
                                            staticClass: "el-icon-plus tree-node-btn",
                                            on: {
                                                click: function(t) {
                                                    return t.stopPropagation(),
                                                        e.handleGroupJoin(s.data)
                                                }
                                            }
                                        })]), i("el-tooltip", {
                                            attrs: {
                                                content: "删除分组",
                                                "popper-class": "tree-node-popper"
                                            }
                                        },
                                        [s.data.id > 0 ? i("i", {
                                            staticClass: "el-icon-delete tree-node-btn",
                                            on: {
                                                click: function(t) {
                                                    return t.stopPropagation(),
                                                        e.handleGroupDelete(s.data)
                                                }
                                            }
                                        }) : e._e()])], 1)]] : [i("span", [e._v(e._s(s.label))]), i("span", {
                                            staticStyle: {
                                                "margin-right": "16px"
                                            }
                                        },
                                        [e._v(e._s(s.data.remarks) + " "), i("i", {
                                            staticClass: "el-icon-edit tree-node-btn-remarks",
                                            on: {
                                                click: function(t) {
                                                    return t.stopPropagation(),
                                                        e.handleRemarksNameModify(s.data)
                                                }
                                            }
                                        })]), i("span", {
                                            style: {
                                                color: 3 === s.data.status ? "#F56C6C": "#606266"
                                            }
                                        },
                                        [e._v(e._s(e._f("deviceStatusMapping")(s.data.status)))])]], 2)
                            }
                        }])
                    })], 1)
            },
            _ = [function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", {
                        staticClass: "treebar-title"
                    },
                    [i("span", [e._v("云机ID")]), i("span", [e._v("备注")]), i("span", [e._v("状态")])])
            }],
            O = (i("a9e3"), i("945b")),
            P = i.n(O),
            E = i("c24f"),
            T = {
                name: "Treebar",
                components: {},
                props: {
                    groupList: {
                        type: Array,
                        default:
                            function() {
                                return []
                            }
                    },
                    deviceList: {
                        type: Array,
                        default:
                            function() {
                                return []
                            }
                    }
                },
                computed: Object(o["a"])({},
                    Object(c["b"])(["token"]), {
                        defaultExpandedKeys: function() {
                            return void 0 !== this.groupIdChecked ? [this.groupIdChecked] : [0]
                        },
                        defaultCheckedKeys: function() {
                            return void 0 !== this.groupIdChecked ? this.deviceIdCheckedList: [0]
                        },
                        groupOptions: function() {
                            var e = [{
                                id: 0,
                                label: "未分组"
                            }];
                            return this.groupList.slice().reverse().forEach((function(t) {
                                e.push({
                                    id: t.id,
                                    label: t.groupName
                                })
                            })),
                                e
                        },
                        data: function() {
                            var e = [{
                                id: 0,
                                label: "未分组",
                                name: "未分组",
                                root: !0,
                                inputVisible: !1,
                                popoverVisible: !1,
                                children: []
                            }];
                            return this.groupList.slice().reverse().forEach((function(t) {
                                e.push({
                                    id: t.id,
                                    label: t.groupName,
                                    name: t.groupName,
                                    root: !0,
                                    inputVisible: !1,
                                    popoverVisible: !1,
                                    children: []
                                })
                            })),
                                this.deviceList.forEach((function(t) {
                                    var i = t.groupId || 0,
                                        s = e.find((function(e) {
                                            return e.id === i
                                        }));
                                    s && s.children && s.children.push({
                                        id: t.deviceId,
                                        parent: t.groupId,
                                        label: t.deviceId,
                                        status: t.deviceStatus,
                                        remarks: t.remarks
                                    })
                                })),
                                e
                        },
                        variables: function() {
                            return P.a
                        }
                    }),
                mounted: function() {
                    var e = this;
                    void 0 !== this.groupIdChecked && setTimeout((function() {
                        var t = e.data.find((function(t) {
                            return t.id === e.groupIdChecked
                        }));
                        t && e.handleTreeNodeCheck(t)
                    }), 1e3)
                },
                watch: {
                    deviceList: function(e, t) {
                        var i = this;
                        setTimeout((function() {
                            var e = i.$refs["treebar"].getCheckedNodes(!0).filter((function(e) {
                                return ! e.root
                            })).map((function(e) {
                                return e.id
                            }));
                            i.$emit("check", e)
                        }), 50)
                    }
                },
                data: function() {
                    return {
                        deviceIdSearch: void 0,
                        newGroupName: void 0,
                        groupCreateDialogVisible: !1,
                        moveDeviceList: [],
                        moveGroupId: 0,
                        deviceSetDialogVisible: !1,
                        visible: !1,
                        groupIdChecked: this.$store.getters.deviceGroupSelect,
                        deviceIdCheckedList: []
                    }
                },
                filters: {
                    deviceStatusMapping: function(e) {
                        switch (e) {
                            case 0:
                                return "正常";
                            case 1:
                                return "重启中";
                            case 2:
                                return "软件安装中";
                            case 3:
                                return "故障";
                            case 10:
                                return "回收中"
                        }
                        return "未知"
                    }
                },
                methods: {
                    handleTreeNodeCheck: function(e, t) {
                        e.root ? (this.$refs["treebar"].setCheckedKeys([e.id], !1), this.$refs["treebar"].store.nodesMap[e.id].expanded = !0, this.groupIdChecked = e.id, 0 === e.children.length ? this.deviceIdCheckedList = [] : this.deviceIdCheckedList = this.$refs["treebar"].getCheckedKeys(!0)) : (void 0 === this.groupIdChecked && (this.groupIdChecked = 0), this.groupIdChecked !== e.parent && (this.groupIdChecked = e.parent, this.$refs["treebar"].setCheckedKeys([e.id], !1)), this.deviceIdCheckedList = this.$refs["treebar"].getCheckedKeys(!0)),
                            this.$store.dispatch("app/setDeviceGroupSelect", this.groupIdChecked),
                            this.$emit("check", this.deviceIdCheckedList)
                    },
                    handleTreeNodeExpand: function(e) {},
                    updateDeviceIdSelectedList: function() {
                        this.deviceIdCheckedList = this.$refs["treebar"].getCheckedKeys(!0)
                    },
                    updateTreeNodeGroupSelect: function() {
                        var e = this;
                        setTimeout((function() {
                            e.$refs["treebar"].setCheckedKeys([e.groupIdChecked], !1),
                                e.$refs["treebar"].store.nodesMap[e.groupIdChecked].expanded = !0,
                                console.log(e.$refs["treebar"].getCheckedKeys(!0))
                        }), 50)
                    },
                    handleDeviceIdSearch: function(e) {
                        var t = Number(e),
                            i = this.deviceList.find((function(e) {
                                return e.deviceId == t
                            }));
                        i ? (this.$refs["treebar"].setCheckedKeys([t], !1), this.$refs["treebar"].store.nodesMap[i.groupId].expanded = !0, this.deviceIdCheckedList = [t], this.$emit("check", this.deviceIdCheckedList)) : this.$message.warning("没有找到ID为".concat(t, "的云机"))
                    },
                    handleGroupCreate: function() {
                        this.newGroupName = "",
                            this.groupCreateDialogVisible = !0
                    },
                    setTreeNodeExpand: function(e) {},
                    groupCreateSubmit: function() {
                        var e = this;
                        this.newGroupName && "" !== this.newGroupName ? Object(E["o"])({
                            token: this.token,
                            groupName: this.newGroupName
                        }).then((function() {
                            e.$emit("update"),
                                e.groupCreateDialogVisible = !1,
                                e.$message.success("创建成功")
                        })) : this.$message.warning("请输入分组名")
                    },
                    handleGroupNameModify: function(e) {
                        var t = this;
                        e.inputVisible = !0,
                            setTimeout((function() {
                                t.$refs["treeInput" + e.id].$refs.input.focus()
                            }), 50)
                    },
                    handleGroupNameUpdate: function(e) {
                        var t = this,
                            i = e.id,
                            s = e.name;
                        s && "" !== s ? Object(E["q"])({
                            token: this.token,
                            id: i,
                            groupName: s
                        }).then((function() {
                            t.$emit("update"),
                                e.inputVisible = !1,
                                t.$message.success("修改成功")
                        })) : this.$message.warning("请输入分组名")
                    },
                    handleGroupNameCancel: function(e) {
                        e.inputVisible = !1,
                            e.name = e.label
                    },
                    handleGroupJoin: function(e) {
                        this.deviceSetDialogVisible = !0,
                            this.moveGroupId = e.id,
                            this.moveDeviceList = []
                    },
                    handleGroupDelete: function(e) {
                        var t = this;
                        this.$confirm("此操作将会删除分组，是否继续?", "提示", {
                            confirmButtonText: "确定",
                            cancelButtonText: "取消",
                            type: "warning"
                        }).then((function() {
                            var i = e.id;
                            Object(E["p"])({
                                token: t.token,
                                groupIdList: [i]
                            }).then((function() {
                                t.$emit("update"),
                                    t.$message.success("删除成功")
                            }))
                        }))
                    },
                    remarksValidateInput: function(e) {
                        return ! (e && e.length > 8) || "最长7个字符"
                    },
                    handleRemarksNameModify: function(e) {
                        var t = this;
                        this.$prompt("请输入备注", "提示", {
                            confirmButtonText: "确定",
                            cancelButtonText: "取消",
                            inputValue: e.remarks,
                            inputValidator: this.remarksValidateInput
                        }).then((function(i) {
                            var s = i.value;
                            Object(u["c"])({
                                token: t.token,
                                deviceIdList: [e.id],
                                remarks: s
                            }).then((function(e) {
                                t.$emit("update"),
                                    t.$message({
                                        type: "success",
                                        message: "修改成功！"
                                    })
                            }))
                        })).
                        catch((function() {}))
                    },
                    handleMoveTreeCheck: function(e, t) {
                        var i = t.checkedNodes;
                        this.moveDeviceList = i.filter((function(e) {
                            return ! e.root
                        })).map((function(e) {
                            return e.id
                        }))
                    },
                    deviceMoveSubmit: function() {
                        var e = this; ! this.moveDeviceList.length > 0 ? this.$message.warning("请选择要移动的云机") : Object(u["a"])({
                            token: this.token,
                            deviceIdList: this.moveDeviceList,
                            groupId: this.moveGroupId
                        }).then((function(t) {
                            e.$emit("update"),
                                e.$message.success("云机移动成功"),
                                e.deviceSetDialogVisible = !1
                        }))
                    }
                }
            },
            R = T,
            z = (i("4602"), i("f68d"), Object(g["a"])(R, A, _, !1, null, "02e5abaa", null)),
            U = z.exports,
            B = i("b562"),
            j = i("47c5"),
            N = [{
                name: "重启云机",
                action: "RESTART"
            },
                {
                    name: "返回桌面",
                    action: "GO_HOME"
                },
                {
                    name: "启动应用",
                    action: "APP_START"
                },
                {
                    name: "关闭应用",
                    action: "APP_STOP"
                },
                {
                    name: "卸载应用",
                    action: "APP_DELETE"
                },
                {
                    name: "切换IP代理",
                    action: "IP_SWITCH"
                },
                {
                    name: "关闭IP代理",
                    action: "IP_CLOSE"
                },
                {
                    name: "恢复出厂设置",
                    action: "RESET"
                }],
            V = function(e) {
                return e.split(".").pop()
            };
        function M(e) {
            e = e.toString().replace(/\$|\,/g, ""),
            isNaN(e) && (e = "0");
            var t = e == (e = Math.abs(e));
            e = Math.floor(100 * e + .50000000001);
            var i = e % 100;
            e = Math.floor(e / 100).toString(),
            i < 10 && (i = "0" + i);
            for (var s = 0; s < Math.floor((e.length - (1 + s)) / 3); s++) e = e.substring(0, e.length - (4 * s + 3)) + "," + e.substring(e.length - (4 * s + 3));
            return (t ? "": "-") + e + "." + i
        }
        var G = function() {
                var e = (new Date).getTime(),
                    t = performance && performance.now && 1e3 * performance.now() || 0;
                return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(i) {
                    var s = 16 * Math.random();
                    return e > 0 ? (s = (e + s) % 16 | 0, e = Math.floor(e / 16)) : (s = (t + s) % 16 | 0, t = Math.floor(t / 16)),
                        ("x" === i ? s: 3 & s | 8).toString(16)
                }))
            },
            H = function(e) {
                var t = document.createElement("textarea");
                t.value = e,
                    t.style.top = "0",
                    t.style.left = "0",
                    t.style.position = "fixed",
                    document.body.appendChild(t),
                    t.focus(),
                    t.select();
                var i = !1;
                try {
                    i = document.execCommand("copy")
                } catch(s) {}
                return document.body.removeChild(t),
                    i
            },
            Z = {
                name: "Preview",
                components: {
                    DeviceCard: S,
                    DeviceRemoteControl: I,
                    UploadDrawer: x["a"],
                    UploadList: F["a"],
                    Treebar: U
                },
                data: function() {
                    var e = this,
                        t = function(e, t, i) {
                            "" === t ? i(new Error("请输入原密码")) : i()
                        },
                        i = function(t, i, s) {
                            "" === i ? s(new Error("请输入新密码")) : ("" !== e.passwordForm.newUserPasswordConfirm && e.$refs["passwordForm"].validateField("newUserPasswordConfirm"), s())
                        },
                        s = function(t, i, s) {
                            "" === i ? s(new Error("请再次输入密码")) : i !== e.passwordForm.newUserPassword ? s(new Error("两次输入密码不一致!")) : s()
                        },
                        r = {
                            userPassword: [{
                                validator: t,
                                trigger: "blur"
                            }],
                            newUserPassword: [{
                                validator: i,
                                trigger: "blur"
                            },
                                {
                                    min: 6,
                                    max: 20,
                                    message: "长度在 6 到 20 个字符",
                                    trigger: "blur"
                                }],
                            newUserPasswordConfirm: [{
                                validator: s,
                                trigger: "blur"
                            }]
                        },
                        n = {
                            userNick: [{
                                required: !0,
                                message: "请输入昵称",
                                trigger: "blur"
                            },
                                {
                                    min: 3,
                                    max: 10,
                                    message: "长度在 3 到 10 个字符",
                                    trigger: "blur"
                                }],
                            contactQq: [{
                                required: !0,
                                message: "请输入QQ号",
                                trigger: "blur"
                            }]
                        },
                        a = [{
                            value: 1,
                            label: "一站",
                            userDeviceVersionInfoList: [],
                            userBusinessServicePackageList: []
                        },
                            {
                                value: 2,
                                label: "二站",
                                userDeviceVersionInfoList: [],
                                userBusinessServicePackageList: []
                            }],
                        o = [{
                            id: 7,
                            name: "IP代理"
                        },
                            {
                                id: 2,
                                name: "IP代理接口"
                            },
                            {
                                id: 3,
                                name: "设备大师"
                            },
                            {
                                id: 4,
                                name: "设备大师接口"
                            },
                            {
                                id: 10,
                                name: "云机内下载"
                            },
                            {
                                id: 11,
                                name: "虚拟定位接口"
                            }];
                    return {
                        allSelect: !1,
                        controlButtons: N,
                        deviceControlEnabled: !0,
                        limitPosition: 50,
                        fixedControl: !1,
                        lastPosition: 0,
                        deviceCheckedList: [],
                        userDeviceList: [],
                        selectDeviceIdList: [],
                        deviceRemoteControlShow: !1,
                        deviceRemoteControlCount: 0,
                        deviceRemoteControlData: [],
                        isAppInstall: !0,
                        uploadFilePath: "",
                        uploadAppRemotePath: "",
                        uploadDialogVisible: !1,
                        uploadLocalList: [],
                        uploadRemoteList: [],
                        passwordForm: {
                            userPassword: "",
                            newUserPassword: "",
                            newUserPasswordConfirm: ""
                        },
                        passwordFormRules: r,
                        settingForm: {
                            userNick: "",
                            contactQq: ""
                        },
                        settingFormRules: n,
                        userGroupList: [],
                        autoRefreshTimeout: 0,
                        autoRefreshInterval: null,
                        previewSize: "small",
                        appInstallDialogVisible: !1,
                        appListTab: "upload",
                        appUploadListLoading: !1,
                        appUploadList: [],
                        appStoreListLoading: !1,
                        appStoreList: [],
                        userLiveList: [],
                        userLiveSelectIndex: void 0,
                        userLiveSelectDialogVisible: !1,
                        userControlCount: 1,
                        ipSwitchDialogVisible: !1,
                        ipSwitchForm: {
                            deviceIdList: [],
                            ipMode: 0,
                            cities: [0]
                        },
                        ipSwitchCities: [{
                            id: 0,
                            city: "随机"
                        }],
                        ipSwitchSumbitLoding: !1,
                        appActionRequest: null,
                        appActionDialogVisible: !1,
                        appActionSelect: "",
                        appActionAppList: [],
                        appActionIds: [],
                        appActionSumbitLoding: !1,
                        siteOptions: a,
                        serviceOptions: o,
                        deviceOrderTabName: "order",
                        packageOrderTabName: "order",
                        userDeviceOrderDialogLoding: !1,
                        userPackageOrderDialogLoding: !1,
                        renewalDeviceSelectDialogShow: !1,
                        renewalPackageSelectDialogShow: !1,
                        packageOrderList: [],
                        packageRenewalList: [],
                        packageOrderApplying: !1,
                        packageForm: {
                            id: void 0,
                            applyNum: 0,
                            deviceIdList: [],
                            paymentType: 2,
                            orderType: 0
                        },
                        orderApplying: !1,
                        orderForm: {
                            version: void 0,
                            services: [],
                            num: 2,
                            days: 30,
                            site: 1,
                            serviceSwitch: !1,
                            paymentType: 2,
                            ipPorxyType: 1
                        },
                        renewalForm: {
                            version: void 0,
                            services: [],
                            devices: [],
                            days: 30,
                            site: 1,
                            serviceSwitch: !1,
                            paymentType: 2,
                            ipPorxyType: 1
                        },
                        deviceServiceForm: {
                            type: void 0,
                            services: [],
                            devices: [],
                            days: 30,
                            apiSwitch: !1,
                            paymentType: 2,
                            ipPorxyType: 1
                        },
                        wxpayQrcodeData: "",
                        wxpayDialogShow: !1,
                        alipayDialogShow: !1,
                        lastPayDialogShow: !1,
                        deviceServiceOrderDialogShow: !1,
                        deviceServiceOrderDialogLoding: !1,
                        deviceServiceOrderList: [],
                        deviceServiceSelectDialogShow: !1,
                        deviceServiceSelectSiteId: 1,
                        deviceServiceSelectGroupId: void 0,
                        deviceServiceSelectNullChecked: !1,
                        userDeviceServiceList: [],
                        userAccountServiceList: [],
                        accountServiceOrderDialogShow: !1,
                        accountServiceForm: {
                            type: void 0,
                            days: 30,
                            num: 1,
                            paymentType: 2
                        },
                        adbServiceOrderDialogShow: !1,
                        adbServiceOrderDialogLoding: !1,
                        adbServiceTabActiveName: "order",
                        adbServiceRenewalSelectDialogShow: !1,
                        adbServiceRenewalSelectSiteId: 1,
                        adbServiceForm: {
                            days: 30,
                            num: 1,
                            paymentType: 2,
                            site: 1,
                            version: void 0,
                            devices: []
                        },
                        orderLastData: {
                            content: "",
                            orderNo: "",
                            paymentType: void 0,
                            qrCode: "",
                            userOrderAmount: 0
                        }
                    }
                },
                computed: Object(o["a"])({},
                    Object(c["b"])(["token", "userSettingDialogShow", "userPasswordDialogShow", "userDeviceOrderDialogShow", "userPackageOrderDialogShow", "userServiceOrderDialogShow", "phoneNum", "qqNum", "name"]), {
                        currentRenewalDeviceList: function() {
                            var e = this;
                            return this.userDeviceOrderDialogShow && "renewal" === this.deviceOrderTabName ? this.userDeviceList.filter((function(t) {
                                return t.siteId === e.renewalForm.site && t.deviceVersionId === e.renewalForm.version
                            })).filter((function(e) {
                                return ! (e.businessServiceList && e.businessServiceList.some((function(e) {
                                    return 16 === e.businessServiceId
                                })))
                            })) : []
                        },
                        currentRenewalPackageList: function() {
                            var e = this;
                            if (this.userPackageOrderDialogShow && "renewal" === this.packageOrderTabName) {
                                var t = this.packageRenewalList.find((function(t) {
                                    return t.id === e.packageForm.id
                                }));
                                return t ? this.userDeviceList.filter((function(e) {
                                    return e.siteId === t.siteId && e.deviceVersionName === t.deviceVersionName
                                })).filter((function(e) {
                                    return ! (e.businessServiceList && e.businessServiceList.some((function(e) {
                                        return 16 === e.businessServiceId
                                    })))
                                })) : []
                            }
                            return []
                        },
                        currentDeviceServiceSelectList: function() {
                            var e = this;
                            return this.deviceServiceOrderDialogShow ? this.userDeviceList.filter((function(t) {
                                var i = !0;
                                return e.deviceServiceSelectSiteId && (i = i && t.siteId === e.deviceServiceSelectSiteId),
                                e.deviceServiceSelectGroupId && (i = i && t.groupId === e.deviceServiceSelectGroupId),
                                e.deviceServiceSelectNullChecked && (i = i && !t.businessServiceList.some((function(t) {
                                    return 7 === e.deviceServiceForm.type ? t.businessServiceId === e.deviceServiceForm.ipPorxyType: t.businessServiceId === e.deviceServiceForm.type
                                }))),
                                    i
                            })) : []
                        },
                        currentADBServiceRenewalSelectList: function() {
                            var e = this;
                            return this.adbServiceRenewalSelectDialogShow ? this.userDeviceList.filter((function(t) {
                                var i = !0;
                                return i = !!(t.businessStatusList && t.businessStatusList.length > 0) && (i && t.businessStatusList.some((function(e) {
                                    return 16 === e.businessServiceId
                                }))),
                                e.adbServiceRenewalSelectSiteId && (i = i && t.siteId === e.adbServiceRenewalSelectSiteId),
                                    i
                            })) : []
                        },
                        autoRefreshText: function() {
                            switch (this.autoRefreshTimeout) {
                                case 0:
                                    return "不自动刷新";
                                case 10:
                                    return "间隔10s";
                                case 20:
                                    return "间隔20s";
                                case 300:
                                    return "间隔5分钟";
                                default:
                                    return "自动刷新"
                            }
                        },
                        previewSizeText: function() {
                            switch (this.previewSize) {
                                case "mini":
                                    return "超小";
                                case "small":
                                    return "小";
                                case "normal":
                                    return "中";
                                case "large":
                                    return "大";
                                case "super":
                                    return "超大";
                                default:
                                    return ""
                            }
                        },
                        appUploadTableList: function() {
                            var e = this;
                            return this.appUploadList.length > 1 ? this.appUploadList[0].filter((function(t) {
                                return e.appUploadList.slice(1).every((function(e) {
                                    return e.some((function(e) {
                                        return e.packagename === t.packagename
                                    }))
                                }))
                            })) : this.appUploadList
                        },
                        appStoreTableList: function() {
                            var e = this;
                            return this.appStoreList.length > 1 ? this.appStoreList[0].filter((function(t) {
                                return e.appStoreList.slice(1).every((function(e) {
                                    return e.some((function(e) {
                                        return e.packagename === t.packagename
                                    }))
                                }))
                            })) : this.appStoreList
                        },
                        selectHippoCloudDeviceIdList: function() {
                            var e = this;
                            return this.selectDeviceIdList.map((function(t) {
                                var i = e.userDeviceList.find((function(e) {
                                    return e.deviceId === t
                                }));
                                return i.hippoCloudDeviceId
                            }))
                        },
                        uploadList: function() {
                            return this.uploadLocalList.concat(this.uploadRemoteList)
                        },
                        uploadTootip: function() {
                            return this.isAppInstall ? "上传的应用将会在上传成功后，自动安装到所选云机上": "上传的文件将会在上传成功后，存储在所填写的路径下"
                        },
                        uploadAction: function() {
                            var e = location.protocol + "//" + location.host;
                            return this.isAppInstall ? e + "/coco/app/upload": e + "/coco/file/upload"
                        },
                        uploadData: function() {
                            return this.isAppInstall ? {
                                token: this.token
                            }: {
                                token: this.token,
                                deviceId: this.selectHippoCloudDeviceIdList.join(","),
                                filePath: "/sdcard/" + this.uploadFilePath
                            }
                        },
                        uploadName: function() {
                            return this.isAppInstall ? "app": "file"
                        }
                    }),
                filters: {
                    deviceStatusMapping: function(e) {
                        switch (e) {
                            case 0:
                                return "正常";
                            case 1:
                                return "重启中";
                            case 2:
                                return "软件安装中";
                            case 3:
                                return "故障";
                            case 10:
                                return "回收中"
                        }
                        return "未知"
                    },
                    paymentTypeString: function(e) {
                        switch (e) {
                            case 2:
                                return "支付宝";
                            case 3:
                                return "微信"
                        }
                        return ""
                    }
                },
                created: function() {},
                mounted: function() {
                    this.getUserDeviceList(),
                        this.settingForm.userNick = this.name,
                        this.settingForm.contactQq = this.qqNum,
                        this.getUserGroupList(),
                        this.getUserLiveList(),
                        this.getUserControlList(),
                    this.userServiceOrderDialogShow && this.getUserDeviceServiceList(),
                    this.userDeviceOrderDialogShow && this.userDeviceOrderDialogOpen(),
                    this.userPackageOrderDialogShow && this.userPackageOrderDialogOpen()
                },
                beforeDestroy: function() {
                    this.autoRefreshInterval && (clearInterval(this.autoRefreshInterval), this.autoRefreshInterval = null)
                },
                methods: {
                    handleScroll: function() {
                        var e = this;
                        this.lastPosition < window.scrollY && this.limitPosition < window.scrollY && setTimeout((function() {
                            e.fixedControl = !0
                        }), 100),
                        this.lastPosition > window.scrollY && (this.fixedControl = !1),
                            this.lastPosition = window.scrollY
                    },
                    getUserDeviceList: function() {
                        var e = this;
                        this.userDeviceList = [],
                            this.allSelect = !1,
                            this.selectDeviceIdList = [],
                            Object(u["h"])({
                                token: this.token,
                                page: 1,
                                pageSize: 1e4
                            }).then((function(t) {
                                var i = t.list;
                                e.userDeviceList = i
                            })).
                            catch((function(e) {}))
                    },
                    handleDeviceSelectChange: function(e, t) {
                        var i = this.selectDeviceIdList.indexOf(e);
                        t && -1 === i && this.selectDeviceIdList.push(e),
                        !t && i > -1 && this.selectDeviceIdList.splice(i, 1)
                    },
                    handleDeviceRemoteControl: function(e) {
                        var t = this;
                        if (this.deviceRemoteControlCount === this.userControlCount) this.$message.warning("控制窗口打开数量已满");
                        else {
                            if (this.deviceRemoteControlData.find((function(t) {
                                return t.id === e
                            }))) return void this.$message.warning("该云机已在控制中");
                            Object(u["i"])({
                                token: this.token,
                                deviceId: e
                            }).then((function(i) {
                                var s = i.data;
                                t.deviceRemoteControlData.push({
                                    id: e,
                                    ip: s.deviceip,
                                    port: s.deviceport,
                                    token: s.tokens,
                                    domain: s.domainname
                                }),
                                    t.deviceRemoteControlCount++
                            }))
                        }
                    },
                    handleDeviceRemoteControlClose: function(e) {
                        var t = this.deviceRemoteControlData.findIndex((function(t) {
                            return t.id === e
                        }));
                        t > -1 && (this.deviceRemoteControlData.splice(t, 1), this.deviceRemoteControlCount--)
                    },
                    handleDeviceAllSelectChange: function(e) {
                        this.selectDeviceIdList = e ? this.deviceCheckedList.map((function(e) {
                            return e.deviceId
                        })) : []
                    },
                    handleDeviceAction: function(e, t) {
                        var i = this,
                            s = t,
                            r = {
                                token: this.token,
                                deviceIdList: s
                            };
                        switch (e) {
                            case "DEVICE_SYNC":
                                this.$router.push({
                                    path:
                                        "/user/sync",
                                    query: {
                                        device: s
                                    }
                                });
                                break;
                            case "RESTART":
                                Object(u["r"])(r).then((function() {
                                    i.$message.success("设备开始重启"),
                                        i.getUserDeviceList()
                                }));
                                break;
                            case "GO_HOME":
                                Object(u["n"])(r).then((function() {
                                    i.$message.success("回到桌面"),
                                        i.getUserDeviceList()
                                }));
                                break;
                            case "DEVICE_MASTER":
                                Object(u["m"])(r).then((function() {
                                    i.$message.success("开始设备修改"),
                                        i.getUserDeviceList()
                                }));
                                break;
                            case "IP_SWITCH":
                                this.ipSwitchForm.deviceIdList = s,
                                    this.getIpSwitchCities(s);
                                break;
                            case "APP_START":
                            case "APP_STOP":
                            case "APP_DELETE":
                                this.handleAppAction(e, t);
                                break;
                            case "IP_CLOSE":
                                Object(u["o"])(r).then((function() {
                                    i.$message.success("已关闭IP代理")
                                })).then((function(e) {
                                    return i.getUserDeviceList()
                                }));
                                break;
                            case "RESET":
                                this.$message.success("已开始重置设备"),
                                    s.forEach((function(e) {
                                        Object(u["q"])({
                                            token: i.token,
                                            deviceIdList: [e]
                                        }).then((function() {}))
                                    }));
                                break;
                            default:
                                break
                        }
                    },
                    handleDeviceEvent: function(e, t) {
                        this.handleDeviceAction(e, [t])
                    },
                    handleAppAction: function(e, t) {
                        var i = this;
                        switch (e) {
                            case "APP_START":
                                this.appActionRequest = B["e"];
                                break;
                            case "APP_STOP":
                                this.appActionRequest = B["f"];
                                break;
                            case "APP_DELETE":
                                this.appActionRequest = B["a"];
                                break;
                            default:
                                break
                        }
                        this.appActionIds = t,
                            Object(B["c"])({
                                token: this.token,
                                deviceIdList: []
                            }).then((function(e) {
                                var t = new Map;
                                i.appActionAppList = e.data.filter((function(e) {
                                    return ! t.has(e.packagename) && t.set(e.packagename, 1)
                                })),
                                    i.appActionDialogVisible = !0
                            }))
                    },
                    appActionSumbit: function() {
                        var e = this;
                        if ("" === this.appActionSelect) this.$message({
                            type: "warning",
                            message: "请先选择应用!"
                        });
                        else {
                            if (this.appActionSumbitLoding) return;
                            this.appActionSumbitLoding = !0,
                                this.appActionRequest({
                                    token: this.token,
                                    deviceIdList: this.appActionIds,
                                    packageName: this.appActionSelect
                                }).then((function(t) {
                                    e.$message({
                                        type: "success",
                                        message: "请求发送成功"
                                    }),
                                        e.appActionDialogVisible = !1,
                                        e.appActionSumbitLoding = !1,
                                        e.appActionSelect = "",
                                        e.getUserDeviceList()
                                })).
                                catch((function(t) {
                                    e.appActionDialogVisible = !1,
                                        e.appActionSumbitLoding = !1
                                }))
                        }
                    },
                    handleContorlButtonClick: function(e) {
                        var t = this,
                            i = this.selectDeviceIdList;
                        this.deviceControlEnabled && (this.deviceControlEnabled = !1, this.handleDeviceAction(e, i), setTimeout((function() {
                            t.deviceControlEnabled = !0
                        }), 1e3))
                    },
                    handleDeviceListAutoRefresh: function(e) {
                        var t = this;
                        this.autoRefreshTimeout = e,
                        this.autoRefreshInterval && (clearInterval(this.autoRefreshInterval), this.autoRefreshInterval = null),
                        0 !== e && (this.autoRefreshInterval = setInterval((function() {
                            t.getUserDeviceList()
                        }), 1e3 * e))
                    },
                    handleDeviceListPreviewSize: function(e) {
                        this.previewSize = e
                    },
                    installAppClick: function() {
                        this.getAppList(),
                            this.appInstallDialogVisible = !0
                    },
                    userUploadAppClick: function() {
                        this.uploadDialogVisible = !0,
                            this.isAppInstall = !0
                    },
                    uploadFileClick: function() {
                        0 === this.selectDeviceIdList.length ? this.$message.warning("至少选择一台云机") : (this.uploadDialogVisible = !0, this.isAppInstall = !1)
                    },
                    handleUploadDialogClose: function() {
                        this.uploadFilePath = "",
                            this.uploadAppRemotePath = ""
                    },
                    updateHipppUploadProgress: function(e) {
                        var t = this;
                        e.hippoStatus || this.$set(e, "hippoStatus", "uploading"),
                        e.hippoProgress || this.$set(e, "hippoProgress", 0);
                        var i = e.response.data,
                            s = {},
                            r = setInterval((function() {
                                100 === e.hippoProgress ? (e.hippoStatus = "success", t.isAppInstall ? (t.$message.success("应用上传成功，请在上传应用列表里进行安装"), t.appInstallDialogVisible && t.getAppList()) : t.$message.success("文件上传成功"), clearInterval(r)) : i.forEach((function(n) {
                                    Object(B["h"])({
                                        fileId: n
                                    }).then((function(a) {
                                        "00000" === a.code && "uploading" === e.hippoStatus && (a.data < 0 ? (e.hippoStatus = "fail", clearInterval(r), -2 == a.data ? t.$confirm("".concat(e.name, "文件在黑名单中, 上传失败!"), "提示", {
                                            confirmButtonText: "确定",
                                            showCancelButton: !1,
                                            type: "error"
                                        }) : t.$confirm("".concat(e.name, "文件存在问题, 上传失败!"), "提示", {
                                            confirmButtonText: "确定",
                                            showCancelButton: !1,
                                            type: "error"
                                        })) : (s[n] = a.data, e.hippoProgress = Object.values(s).reduce((function(e, t) {
                                            return e + t
                                        }), 0) / i.length))
                                    }))
                                }))
                            }), 2e3)
                    },
                    handleUploadChange: function(e, t) {
                        this.uploadLocalList = t
                    },
                    handleUploadSuccess: function(e, t, i) {
                        var s = e.code;
                        "00000" !== s ? (this.$message.error(t.name + "上传失败 " + e.message), t.status = "fail") : this.updateHipppUploadProgress(t)
                    },
                    handleUploadError: function(e, t, i) {
                        this.$message.error(t.name + "上传失败"),
                            i.push(t)
                    },
                    handleBeforeUpload: function(e) {
                        return this.isAppInstall && "apk" !== V(e.name) ? (this.$message.warning("上传应用不是apk文件"), !1) : /^[a-zA-Z0-9_\(\)\.\-]+$/.test(e.name) ? e.name.length > 50 ? (this.$message.warning("文件名过长"), !1) : this.isAppInstall || 0 !== this.selectHippoCloudDeviceIdList.length ? (this.$refs["uploadDrawer"] && (this.$refs["uploadDrawer"].isExpanded = !0), this.uploadDialogVisible = !1, !0) : (this.$message.warning("至少选择一台云机"), !1) : (this.$message.warning("文件名不能包含特殊字符和中文"), !1)
                    },
                    handleUploadListRemove: function(e) {
                        e.remote || this.$refs["upload"].abort(e);
                        var t = e.remote ? this.uploadRemoteList: this.uploadLocalList;
                        t.splice(t.indexOf(e), 1)
                    },
                    handleAppRemoteUpload: function() {
                        var e = this,
                            t = G(),
                            i = {
                                name: t.split("-")[0] + ".apk",
                                remote: !0,
                                uid: t,
                                size: 0,
                                status: "success",
                                hippoStatus: "uploading",
                                hippoProgress: 0
                            };
                        Object(B["d"])({
                            token: this.token,
                            fileUrl: this.uploadAppRemotePath
                        }).then((function(t) {
                            i.response = t,
                                e.updateHipppUploadProgress(i)
                        })).
                        catch((function(e) {
                            i.hippoStatus = "fail"
                        })),
                            this.uploadRemoteList.push(i),
                        this.$refs["uploadDrawer"] && (this.$refs["uploadDrawer"].isExpanded = !0),
                            this.uploadDialogVisible = !1
                    },
                    userPasswordDialogClose: function() {
                        this.$refs["passwordForm"].resetFields(),
                            this.$store.dispatch("settings/setUserPasswordDialogShow", !1)
                    },
                    handlePasswordFormSumbit: function() {
                        var e = this;
                        this.$refs["passwordForm"].validate((function(t) {
                            if (!t) return ! 1;
                            Object(E["y"])({
                                token: e.token,
                                userPassword: e.passwordForm.userPassword,
                                newUserPassword: e.passwordForm.newUserPassword
                            }).then((function(t) {
                                e.$message.success("修改密码成功"),
                                    e.userPasswordDialogClose(),
                                    e.logout()
                            })).
                            catch((function(e) {}))
                        }))
                    },
                    logout: function() {
                        var e = this;
                        return Object(a["a"])(regeneratorRuntime.mark((function t() {
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2,
                                            e.$store.dispatch("user/userLogout");
                                    case 2:
                                        e.$router.push("/login?redirect=".concat(e.$route.fullPath));
                                    case 3:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    userSettingDialogClose: function() {
                        this.$store.dispatch("settings/setUserSettingDialogShow", !1)
                    },
                    handleSettingFormSumbit: function() {
                        var e = this;
                        this.$refs["settingForm"].validate((function(t) {
                            if (!t) return ! 1;
                            Object(E["x"])({
                                token: e.token,
                                userNick: e.settingForm.userNick,
                                contactQq: e.settingForm.contactQq
                            }).then((function(t) {
                                e.$message.success("修改资料成功"),
                                    e.userSettingDialogClose(),
                                    e.$store.dispatch("user/getUserInfo")
                            })).
                            catch((function(e) {}))
                        }))
                    },
                    getUserGroupList: function() {
                        var e = this;
                        Object(E["d"])({
                            token: this.token,
                            page: 1,
                            pageSize: 1e4
                        }).then((function(t) {
                            var i = t.list;
                            e.userGroupList = i
                        }))
                    },
                    handleTreebarUpdate: function() {
                        this.getUserDeviceList(),
                            this.getUserGroupList()
                    },
                    handleTreebarCheckedChange: function(e) {
                        this.deviceCheckedList = this.userDeviceList.filter((function(t) {
                            return e.includes(t.deviceId)
                        }))
                    },
                    getAppList: function() {
                        var e = this;
                        this.appUploadListLoading = !0,
                            Object(B["g"])({
                                token: this.token,
                                isCommon: !1
                            }).then((function(t) {
                                e.appUploadListLoading = !1,
                                    e.appUploadList = t.data
                            })).
                            catch((function() {
                                e.appUploadListLoading = !1,
                                    e.appUploadList = []
                            })),
                            this.appStoreListLoading = !0,
                            Object(B["g"])({
                                token: this.token,
                                isCommon: !0
                            }).then((function(t) {
                                e.appStoreListLoading = !1,
                                    e.appStoreList = t.data
                            })).
                            catch((function() {
                                e.appStoreListLoading = !1,
                                    e.appUploadList = []
                            }))
                    },
                    handleAppUploadDelete: function(e) {
                        var t = this;
                        this.$confirm("此操作将删除该应用, 下次安装需要重新上传, 是否继续?", "提示", {
                            confirmButtonText: "确定",
                            cancelButtonText: "取消",
                            type: "warning"
                        }).then((function() {
                            Object(B["a"])({
                                token: t.token,
                                deviceIdList: [],
                                packageName: e
                            }).then((function(e) {
                                t.$message.success("删除成功"),
                                    t.getAppList()
                            }))
                        })).
                        catch((function() {}))
                    },
                    handleAppUploadInstall: function(e) {
                        var t = this;
                        if (0 === this.selectDeviceIdList.length) this.$message.warning("至少选择一台云机");
                        else {
                            var i = this.getSiteIdDeviceList(this.selectDeviceIdList),
                                s = [];
                            Object.keys(i).forEach((function(r) {
                                var n = t.appUploadList[r - 1].find((function(t) {
                                    return t.packagename === e
                                }));
                                n && s.push(Object(B["b"])({
                                    token: t.token,
                                    appid: n.appid,
                                    deviceIdList: i[r]
                                }))
                            })),
                                Promise.all(s).then((function() {
                                    t.$message.success("应用开始安装中，可能需要一段时间，请耐心等待")
                                }))
                        }
                    },
                    handleAppStoreInstall: function(e) {
                        var t = this;
                        if (0 === this.selectDeviceIdList.length) this.$message.warning("至少选择一台云机");
                        else {
                            var i = this.getSiteIdDeviceList(this.selectDeviceIdList),
                                s = [];
                            Object.keys(i).forEach((function(r) {
                                var n = t.appStoreList[r - 1].find((function(t) {
                                    return t.packagename === e
                                }));
                                n && s.push(Object(B["b"])({
                                    token: t.token,
                                    appid: n.appid,
                                    deviceIdList: i[r]
                                }))
                            })),
                                Promise.all(s).then((function() {
                                    t.$message.success("应用开始安装中，可能需要一段时间，请耐心等待")
                                }))
                        }
                    },
                    getSiteIdDeviceList: function(e) {
                        var t = [1, 2],
                            i = {},
                            s = this.userDeviceList.filter((function(t) {
                                return e.includes(t.deviceId)
                            }));
                        return t.forEach((function(e) {
                            i[e] = s.filter((function(t) {
                                return t.siteId === e
                            })).map((function(e) {
                                return e.deviceId
                            }))
                        })),
                            i
                    },
                    getUserLiveList: function() {
                        var e = this;
                        Object(E["b"])({
                            token: this.token,
                            businessId: 13,
                            page: 1,
                            pageSize: 1e4
                        }).then((function(t) {
                            var i = t.list;
                            e.userLiveList = i
                        }))
                    },
                    getUserControlList: function() {
                        var e = this;
                        Object(E["b"])({
                            token: this.token,
                            businessId: 15,
                            page: 1,
                            pageSize: 1e4
                        }).then((function(t) {
                            var i = t.list;
                            i.length > 0 && (1 === i.length ? e.userControlCount += i[0].windows: e.userControlCount += i.reduce((function(e, t) {
                                return e.windows + t.windows
                            })))
                        }))
                    },
                    handleUserLiveStart: function() {
                        this.userLiveSelectDialogVisible = !0
                    },
                    userLiveStart: function(e) {
                        var t = this,
                            i = this.userLiveList[e];
                        Object(j["b"])({
                            token: this.token,
                            deviceIdList: this.selectDeviceIdList,
                            urlId: i.urlId
                        }).then((function() {
                            t.$router.push({
                                path: "/user/live",
                                query: {
                                    device: t.selectDeviceIdList,
                                    url: i.ebroadUrl
                                }
                            })
                        }))
                    },
                    gotoLivePage: function() {
                        this.userLiveStart(this.userLiveSelectIndex)
                    },
                    handleLiveUrlShow: function() {
                        var e = this.userLiveList[this.userLiveSelectIndex].ebroadUrl;
                        this.$alert(e, "线路地址", {
                            confirmButtonText: "确定",
                            customClass: "live-url-show"
                        });
                        var t = H(e);
                        t && this.$message.success("地址已复制")
                    },
                    handleDeviceRelpaceClick: function() {
                        var e = this,
                            t = this.selectDeviceIdList[0],
                            i = this.token;
                        Object(u["d"])({
                            token: i,
                            deviceId: t
                        }).then((function() {
                            e.$message.success("云机更换成功!"),
                                e.getUserDeviceList()
                        }))
                    },
                    getIpSwitchCities: function(e) {
                        var t = this,
                            i = this.userDeviceList.find((function(t) {
                                return t.deviceId === e[0]
                            })).businessServiceList,
                            s = i.find((function(e) {
                                return 1 === e.businessServiceId || 8 === e.businessServiceId || 9 === e.businessServiceId
                            })),
                            r = s ? s.businessServiceId: null;
                        if (s && r) {
                            if (e.length > 1) {
                                var a = this.userDeviceList.filter((function(t) {
                                        return e.includes(t.deviceId)
                                    })),
                                    o = a.every((function(e) {
                                        return e.businessServiceList.find((function(e) {
                                            return e.businessServiceId === r
                                        }))
                                    }));
                                if (!o) return void this.$message.error("批量切换IP代理，需要选择的云机IP代理类型一致")
                            }
                            Object(u["f"])({
                                businessId: r
                            }).then((function(e) {
                                t.ipSwitchCities = [{
                                    id: 0,
                                    city: "随机"
                                }].concat(Object(n["a"])(e.data))
                            })),
                                this.ipSwitchDialogVisible = !0
                        } else this.$message.error("没有订购IP代理服务")
                    },
                    ipSwitchSumbit: function() {
                        var e = this,
                            t = this.ipSwitchForm.cities.includes(0) ? 0 : 1,
                            i = this.ipSwitchForm.cities.join(",");
                        this.ipSwitchSumbitLoding = !0,
                            Object(u["p"])({
                                token: this.token,
                                deviceIdList: this.ipSwitchForm.deviceIdList,
                                ipMode: this.ipSwitchForm.ipMode,
                                region: t,
                                cities: i
                            }).then((function(t) {
                                e.$message.success("IP代理正在切换..."),
                                    e.getUserDeviceList(),
                                    e.ipSwitchDialogVisible = !1,
                                    e.ipSwitchSumbitLoding = !1
                            })).
                            catch((function(t) {
                                e.ipSwitchDialogVisible = !1,
                                    e.ipSwitchSumbitLoding = !1
                            }))
                    },
                    handleIpSwitchCitiesChange: function(e) {
                        e.includes(0) && (0 === e[e.length - 1] ? this.ipSwitchForm.cities = [0] : this.ipSwitchForm.cities.splice(0, 1))
                    },
                    userPackageOrderDialogOpen: function() {
                        var e = this;
                        this.userPackageOrderDialogLoding = !0,
                            Object(E["h"])().then((function(t) {
                                var i, s = t.data;
                                e.packageOrderList = s.filter((function(e) {
                                    return 0 === e.packetPos || 1 === e.packetPos
                                })),
                                    e.packageRenewalList = s.filter((function(e) {
                                        return 0 === e.packetPos || 2 === e.packetPos
                                    })),
                                    e.packageForm.id = null === (i = e.packageOrderList[0]) || void 0 === i ? void 0 : i.id,
                                    e.userPackageOrderDialogLoding = !1
                            })).
                            catch((function(t) {
                                e.userPackageOrderDialogLoding = !1
                            }))
                    },
                    userPackageOrderDialogClose: function() {
                        this.$store.dispatch("settings/setUserPackageOrderDialogShow", !1),
                            this.packageForm = {
                                id: void 0,
                                applyNum: 0,
                                deviceIdList: [],
                                paymentType: 2,
                                orderType: 0
                            }
                    },
                    userDeviceOrderDialogOpen: function() {
                        var e = this;
                        this.userDeviceOrderDialogLoding = !0;
                        var t = this.siteOptions.map((function(e) {
                            return Object(E["g"])({
                                siteId: e.value
                            })
                        }));
                        Promise.all(t).then((function(t) {
                            t.forEach((function(t, i) {
                                e.siteOptions[i].userDeviceVersionInfoList = t.data.dicUserDeviceVersionInfoList,
                                    e.siteOptions[i].userBusinessServicePackageList = t.data.dicUserBusinessServicePackageList
                            })),
                                e.orderForm.version = e.getDeviceVersionIdList(e.orderForm.site)[0].deviceVersionId,
                                e.renewalForm.version = e.getDeviceVersionIdList(e.renewalForm.site)[0].deviceVersionId,
                                e.userDeviceOrderDialogLoding = !1
                        })).
                        catch((function(t) {
                            e.userDeviceOrderDialogLoding = !1
                        }))
                    },
                    userDeviceOrderDialogClose: function() {
                        this.$store.dispatch("settings/setUserDeviceOrderDialogShow", !1),
                            this.orderForm = {
                                version: void 0,
                                services: [],
                                num: 2,
                                days: 30,
                                site: 1,
                                serviceSwitch: !1,
                                paymentType: 2,
                                ipPorxyType: 1
                            },
                            this.renewalForm = {
                                version: void 0,
                                services: [],
                                devices: [],
                                days: 30,
                                site: 1,
                                serviceSwitch: !1,
                                paymentType: 2,
                                ipPorxyType: 1
                            }
                    },
                    onOrderFormSiteChange: function() {
                        var e = this,
                            t = this.getDeviceVersionIdList(this.orderForm.site);
                        t.some((function(t) {
                            return t.deviceVersionId === e.orderForm.version
                        })) || (this.orderForm.version = t[0].deviceVersionId)
                    },
                    onADBServiceFormSiteChange: function() {
                        var e = this,
                            t = this.getDeviceVersionIdList(this.adbServiceForm.site);
                        t.some((function(t) {
                            return t.deviceVersionId === e.adbServiceForm.version
                        })) || (this.adbServiceForm.version = t[0].deviceVersionId)
                    },
                    onRenewalFormSiteChange: function() {
                        var e = this,
                            t = this.getDeviceVersionIdList(this.renewalForm.site);
                        t.some((function(t) {
                            return t.deviceVersionId === e.renewalForm.version
                        })) || (this.renewalForm.version = t[0].deviceVersionId),
                            this.renewalForm.devices = []
                    },
                    onRenewalFormVersionChange: function() {
                        this.renewalForm.devices = []
                    },
                    getDeviceVersionIdList: function(e) {
                        return this.siteOptions[e - 1].userDeviceVersionInfoList.reduce((function(e, t) {
                            return e.find((function(e) {
                                return e.deviceVersionId === t.deviceVersionId
                            })) ? e: [].concat(Object(n["a"])(e), [t])
                        }), [])
                    },
                    getDevicePriceList: function(e, t) {
                        return this.siteOptions[e - 1].userDeviceVersionInfoList.filter((function(e) {
                            return e.deviceVersionId === t
                        }))
                    },
                    getDeviceServiceList: function(e, t) {
                        return this.siteOptions[e - 1].userBusinessServicePackageList.filter((function(e) {
                            return [2, 3, 4, 7, 10].includes(e.businessServiceId) && (0 === e.productDays || e.productDays === t)
                        })).filter((function(e) {
                            return 7 !== e.businessServiceId || e.dicUserBusinessServicePriceList.length > 0
                        }))
                    },
                    getDeviceServiceNameList: function() {
                        return this.deviceServiceOrderList.filter((function(e) {
                            return 7 !== e.businessServiceId || e.dicUserBusinessServicePriceList.length > 0
                        })).reduce((function(e, t) {
                            return e.find((function(e) {
                                return e.businessServiceId === t.businessServiceId
                            })) ? e: [].concat(Object(n["a"])(e), [t])
                        }), [])
                    },
                    getDeviceServiceDaysList: function() {
                        var e = this.deviceServiceForm.type;
                        return 7 === this.deviceServiceForm.type && (e = this.deviceServiceForm.ipPorxyType),
                            this.deviceServiceOrderList.reduce((function(e, t) {
                                return 7 === t.businessServiceId ? [].concat(Object(n["a"])(e), Object(n["a"])(t.dicUserBusinessServicePriceList)) : [].concat(Object(n["a"])(e), [t])
                            }), []).filter((function(t) {
                                return t.businessServiceId === e
                            }))
                    },
                    getDeviceServiceChildrenList: function(e, t) {
                        return e && e.dicUserBusinessServicePriceList ? e.dicUserBusinessServicePriceList.filter((function(e) {
                            return e.productDays === t
                        })) : []
                    },
                    handleOrderFormServicesChange: function() {
                        var e = this.orderForm.services; ! e.includes(7) && e.includes(2) && e.splice(e.findIndex((function(e) {
                            return 2 === e
                        })), 1),
                        !e.includes(3) && e.includes(4) && e.splice(e.findIndex((function(e) {
                            return 4 === e
                        })), 1)
                    },
                    handleOrderFormServiceChange: function(e) {
                        var t = this;
                        if (7 === e.businessServiceId && this.orderForm.services.includes(7)) {
                            var i = this.getDeviceServiceChildrenList(e, this.orderForm.days);
                            i.find((function(e) {
                                return e.businessServiceId === t.orderForm.ipPorxyType
                            })) || (this.orderForm.ipPorxyType = i[0].businessServiceId)
                        }
                    },
                    handleRenewalFormServicesChange: function() {
                        var e = this.renewalForm.services; ! e.includes(7) && e.includes(2) && e.splice(e.findIndex((function(e) {
                            return 2 === e
                        })), 1),
                        !e.includes(3) && e.includes(4) && e.splice(e.findIndex((function(e) {
                            return 4 === e
                        })), 1)
                    },
                    handleRenewalFormServiceChange: function(e) {
                        var t = this;
                        if (7 === e.businessServiceId && this.renewalForm.services.includes(7)) {
                            var i = this.getDeviceServiceChildrenList(e, this.renewalForm.days);
                            i.find((function(e) {
                                return e.businessServiceId === t.renewalForm.ipPorxyType
                            })) || (this.renewalForm.ipPorxyType = i[0].businessServiceId)
                        }
                    },
                    isServiceDisabled: function(e, t) {
                        var i = e.services;
                        return 2 === t ? !i.includes(7) : 4 === t && !i.includes(3)
                    },
                    getDeviceService: function(e, t) {
                        return e.find((function(e) {
                            return e.businessServiceId === t
                        }))
                    },
                    getDeviceServicePrice: function(e, t) {
                        var i = "*";
                        return this.userDeviceServiceList.some((function(s) {
                            return s.businessServiceId == e && s.productDays === t ? (i = s.userProductPrice, !0) : s.dicUserBusinessServicePriceList ? s.dicUserBusinessServicePriceList.some((function(s) {
                                if (s.businessServiceId == e && s.productDays === t) return i = s.userProductPrice,
                                    !0
                            })) : void 0
                        })),
                            i
                    },
                    isAccountServiceOrderVisible: function(e) {
                        return this.userAccountServiceList.find((function(t) {
                            return t.businessId === e
                        }))
                    },
                    getAccountServicePrice: function(e, t) {
                        var i = "*";
                        return this.userAccountServiceList.some((function(s) {
                            if (s.businessId == e && s.packageDays === t) return i = s.packagePrice,
                                !0
                        })),
                            i
                    },
                    getADBServicePriceList: function() {
                        return this.userDeviceServiceList.filter((function(e) {
                            return 16 === e.businessServiceId
                        }))
                    },
                    handlePackageTabClick: function(e) {
                        var t, i;
                        "order" === e ? (this.packageForm.id = null === (t = this.packageOrderList[0]) || void 0 === t ? void 0 : t.id, this.packageForm.deviceIdList = [], this.packageForm.applyNum = 1) : (this.packageForm.id = null === (i = this.packageRenewalList[0]) || void 0 === i ? void 0 : i.id, this.packageForm.deviceIdList = [], this.packageForm.applyNum = 1)
                    },
                    getPackageDesc: function() {
                        var e, t, i = this.packageForm.id;
                        return "order" === this.packageOrderTabName ? (null === (e = this.packageOrderList.find((function(e) {
                            return e.id === i
                        }))) || void 0 === e ? void 0 : e.packetDesc) || "无": "renewal" === this.packageOrderTabName ? (null === (t = this.packageRenewalList.find((function(e) {
                            return e.id === i
                        }))) || void 0 === t ? void 0 : t.packetDesc) || "无": ""
                    },
                    getPackageLabel: function() {
                        var e, t, i = this.packageForm.id;
                        return "order" === this.packageOrderTabName ? (null === (e = this.packageOrderList.find((function(e) {
                            return e.id === i
                        }))) || void 0 === e ? void 0 : e.flagDesc) || "": "renewal" === this.packageOrderTabName && (null === (t = this.packageRenewalList.find((function(e) {
                            return e.id === i
                        }))) || void 0 === t ? void 0 : t.flagDesc) || ""
                    },
                    getPackageDays: function() {
                        var e, t, i = this.packageForm.id;
                        return "order" === this.packageOrderTabName ? (null === (e = this.packageOrderList.find((function(e) {
                            return e.id === i
                        }))) || void 0 === e ? void 0 : e.packageDays) || 0 : "renewal" === this.packageOrderTabName && (null === (t = this.packageRenewalList.find((function(e) {
                            return e.id === i
                        }))) || void 0 === t ? void 0 : t.packageDays) || 0
                    },
                    getPackagePrice: function() {
                        var e, t, i = this.packageForm,
                            s = i.id,
                            r = i.applyNum,
                            n = i.deviceIdList,
                            a = 0;
                        return "order" === this.packageOrderTabName ? (a = (null === (e = this.packageOrderList.find((function(e) {
                            return e.id === s
                        }))) || void 0 === e ? void 0 : e.packetPrice) || 0, M(a * r)) : "renewal" === this.packageOrderTabName ? (a = (null === (t = this.packageRenewalList.find((function(e) {
                            return e.id === s
                        }))) || void 0 === t ? void 0 : t.packetPrice) || 0, M(a * n.length)) : a
                    },
                    getOrderPrice: function(e) {
                        var t = this,
                            i = 0,
                            s = 0,
                            r = [],
                            a = e.site,
                            o = e.days,
                            c = e.version,
                            l = e.num || e.devices.length,
                            d = this.getDevicePriceList(a, c).find((function(e) {
                                return e.productDays === o
                            }));
                        return d && (i = d.userProductPrice),
                        e.serviceSwitch && (r = Object(n["a"])(e.services), this.getDeviceServiceList(a, o).forEach((function(i) {
                            if (r.includes(i.businessServiceId) && (s += i.userProductPrice, 7 === i.businessServiceId)) {
                                var n = t.getDeviceServiceChildrenList(i, o).find((function(t) {
                                    return t.businessServiceId === e.ipPorxyType
                                }));
                                n && (s += n.userProductPrice)
                            }
                        }))),
                            M((i + s) * l)
                    },
                    handleRenewalPackageListRowClick: function(e) {
                        this.$refs["renewalPackageList"].toggleRowSelection(e)
                    },
                    handleRenewalPackageSelectSubmit: function() {
                        var e = this.packageForm.deviceIdList = [];
                        this.$refs["renewalPackageList"].selection.forEach((function(t) {
                            e.push(t.deviceId)
                        })),
                            this.renewalPackageSelectDialogShow = !1
                    },
                    handleRenewalDeviceListRowClick: function(e) {
                        this.$refs["renewalDeviceList"].toggleRowSelection(e)
                    },
                    handleRenewalDeviceSelectSubmit: function() {
                        var e = this.renewalForm.devices = [];
                        this.$refs["renewalDeviceList"].selection.forEach((function(t) {
                            e.push(t.deviceId)
                        })),
                            this.renewalDeviceSelectDialogShow = !1
                    },
                    handlePackageOrderSumbit: function() {
                        var e = this;
                        this.packageOrderApplying ? this.$message.warning("有订单正在提交中，请稍后...") : "renewal" !== this.packageOrderTabName || 0 !== this.packageForm.deviceIdList.length ? (this.packageOrderApplying = !0, "order" === this.packageOrderTabName && Object(E["w"])({
                            token: this.token,
                            extensionPacketId: this.packageForm.id,
                            applyNum: this.packageForm.applyNum,
                            paymentType: this.packageForm.paymentType,
                            orderType: 1
                        }).then((function(t) {
                            e.handleCreateOrder(t),
                                e.packageOrderApplying = !1
                        })).
                        catch((function(t) {
                            e.packageOrderApplying = !1
                        })), "renewal" === this.packageOrderTabName && Object(E["w"])({
                            token: this.token,
                            extensionPacketId: this.packageForm.id,
                            deviceIdList: this.packageForm.deviceIdList,
                            paymentType: this.packageForm.paymentType,
                            orderType: 2
                        }).then((function(t) {
                            e.handleCreateOrder(t),
                                e.packageOrderApplying = !1
                        })).
                        catch((function(t) {
                            e.packageOrderApplying = !1
                        }))) : this.$message.warning("请先选择要续费的云机")
                    },
                    handleDeviceOrderSumbit: function() {
                        var e = this;
                        if (this.orderApplying) this.$message.warning("有订单正在提交中，请稍后...");
                        else {
                            var t = [];
                            if ("order" === this.deviceOrderTabName) {
                                if (this.orderForm.serviceSwitch) {
                                    t = Object(n["a"])(this.orderForm.services);
                                    var i = t.findIndex((function(e) {
                                        return 7 === e
                                    }));
                                    i > -1 && (t[i] = this.orderForm.ipPorxyType)
                                }
                                this.orderApplying = !0,
                                    Object(E["l"])({
                                        token: this.token,
                                        deviceVersionId: this.orderForm.version,
                                        applyNum: this.orderForm.num,
                                        businessServiceIdList: t,
                                        applyDays: this.orderForm.days,
                                        orderSiteId: this.orderForm.site,
                                        paymentType: this.orderForm.paymentType
                                    }).then((function(t) {
                                        e.handleCreateOrder(t),
                                            e.orderApplying = !1
                                    })).
                                    catch((function(t) {
                                        e.orderApplying = !1
                                    }))
                            } else {
                                if (!this.renewalForm.devices.length > 0) return void this.$message.warning("请先选择要续费的云机");
                                if (this.renewalForm.serviceSwitch) {
                                    t = Object(n["a"])(this.renewalForm.services);
                                    var s = t.findIndex((function(e) {
                                        return 7 === e
                                    }));
                                    s > -1 && (t[s] = this.orderForm.ipPorxyType)
                                }
                                this.orderApplying = !0,
                                    Object(E["m"])({
                                        token: this.token,
                                        deviceVersionId: this.renewalForm.version,
                                        deviceIdList: this.renewalForm.devices,
                                        businessServiceIdList: t,
                                        applyDays: this.renewalForm.days,
                                        orderSiteId: this.renewalForm.site,
                                        paymentType: this.renewalForm.paymentType
                                    }).then((function(t) {
                                        e.handleCreateOrder(t),
                                            e.orderApplying = !1
                                    })).
                                    catch((function(t) {
                                        e.orderApplying = !1
                                    }))
                            }
                        }
                    },
                    openAlipayPage: function(e) {
                        var t = window.open(),
                            i = document.createElement("div"),
                            s = e.replace(/[\\\b\f\n\r\t]/g, "");
                        i.innerHTML = s,
                            t.document.body.appendChild(i),
                            t.document.forms[0].submit(),
                            this.alipayDialogShow = !0
                    },
                    showWxpayCode: function(e) {
                        this.wxpayQrcodeData = e,
                            this.wxpayDialogShow = !0
                    },
                    handlePayOrder: function(e) {
                        var t = e.paymentType;
                        2 === t && this.openAlipayPage(e.qrCode),
                        3 === t && this.showWxpayCode(e.qrCode)
                    },
                    handleCreateOrder: function(e) {
                        var t = e.code,
                            i = e.data;
                        this.orderLastData = Object(o["a"])({},
                            i),
                            10030 == t ? this.lastPayDialogShow = !0 : this.handlePayOrder(i)
                    },
                    handleCancalOrder: function(e) {
                        var t = this;
                        Object(E["v"])({
                            token: this.token,
                            orderNo: e
                        }).then((function(e) {
                            t.$message.success("订单取消成功"),
                                t.alipayDialogShow = !1,
                                t.wxpayDialogShow = !1,
                                t.lastPayDialogShow = !1
                        }))
                    },
                    downHelpDoc: function(e) {
                        var t = document.createElement("a");
                        t.href = e,
                            t.download = "file.pdf",
                            t.dispatchEvent(new MouseEvent("click"))
                    },
                    downServiceHelpDoc: function(e) {
                        7 === e && this.downHelpDoc("http://img.coco5i.com/Ip%E4%BB%A3%E7%90%86.pdf"),
                        2 === e && this.downHelpDoc("http://img.coco5i.com/IP%E4%BB%A3%E7%90%86%E9%AB%98%E7%BA%A7%E5%87%BD%E6%95%B0%E6%8E%A5%E5%8F%A3.pdf"),
                        3 === e && this.downHelpDoc("http://img.coco5i.com/%E8%AE%BE%E5%A4%87%E5%A4%A7%E5%B8%88.pdf"),
                        4 === e && this.downHelpDoc("http://img.coco5i.com/%E8%AE%BE%E5%A4%87%E5%A4%A7%E5%B8%88%E9%AB%98%E7%BA%A7%E5%87%BD%E6%95%B0%E6%8E%A5%E5%8F%A3.pdf"),
                        10 === e && this.downHelpDoc("http://img.coco5i.com/%E4%BA%91%E6%9C%BA%E5%86%85%E4%B8%8B%E8%BD%BD.pdf")
                    },
                    isServiceOrderVisible: function(e) {
                        var t;
                        return 7 === e ? null === (t = this.userDeviceServiceList.find((function(t) {
                            return t.businessServiceId === e
                        }))) || void 0 === t ? void 0 : t.dicUserBusinessServicePriceList.find((function(e) {
                            return e.productDays > 0
                        })) : this.userDeviceServiceList.find((function(t) {
                            return t.businessServiceId === e && t.productDays > 0
                        }))
                    },
                    handleUserServiceOrder: function(e) {
                        this.deviceServiceOrderDialogShow = !0,
                            this.deviceServiceForm.type = e
                    },
                    handleAccountServiceOrder: function(e) {
                        this.accountServiceOrderDialogShow = !0,
                            this.accountServiceForm.type = e
                    },
                    handleADBServiceOrder: function() {
                        this.adbServiceOrderDialogShow = !0,
                            this.adbServiceTabActiveName = "order"
                    },
                    adbServiceOrderDialogOpen: function() {
                        var e = this;
                        this.adbServiceOrderDialogLoding = !0;
                        var t = this.siteOptions.map((function(e) {
                            return Object(E["g"])({
                                siteId: e.value
                            })
                        }));
                        Promise.all(t).then((function(t) {
                            t.forEach((function(t, i) {
                                e.siteOptions[i].userDeviceVersionInfoList = t.data.dicUserDeviceVersionInfoList,
                                    e.siteOptions[i].userBusinessServicePackageList = t.data.dicUserBusinessServicePackageList
                            })),
                                e.adbServiceForm.version = e.getDeviceVersionIdList(e.adbServiceForm.site)[0].deviceVersionId,
                                e.adbServiceOrderDialogLoding = !1
                        })).
                        catch((function(t) {
                            e.adbServiceOrderDialogLoding = !1
                        }))
                    },
                    adbServiceOrderDialogClose: function() {
                        this.adbServiceForm = {
                            days: 30,
                            num: 1,
                            paymentType: 2,
                            site: 1,
                            version: void 0,
                            devices: []
                        }
                    },
                    handleDeviceServiceSelectListRowClick: function(e) {
                        this.$refs["deviceServiceSelectList"].toggleRowSelection(e)
                    },
                    handleDeviceServiceSelectSubmit: function() {
                        var e = this.deviceServiceForm.devices = [];
                        this.$refs["deviceServiceSelectList"].selection.forEach((function(t) {
                            e.push(t.deviceId)
                        })),
                            this.deviceServiceSelectDialogShow = !1
                    },
                    deviceServiceOrderDialogOpen: function() {
                        var e = this;
                        this.deviceServiceOrderDialogLoding = !0,
                            Object(E["g"])({
                                siteId: 0
                            }).then((function(t) {
                                e.deviceServiceOrderList = t.data.dicUserBusinessServicePackageList.filter((function(e) {
                                    return [7, 2, 3, 4, 10, 11].includes(e.businessServiceId)
                                })),
                                    e.deviceServiceOrderDialogLoding = !1
                            })).
                            catch((function(t) {
                                e.deviceServiceOrderDialogLoding = !1
                            }))
                    },
                    getDeviceServiceOrderUnitPrice: function(e, t) {
                        var i = 0,
                            s = 0,
                            r = e.type;
                        return 7 === r && (r = e.ipPorxyType),
                            this.deviceServiceOrderList.some((function(e) {
                                return e.businessServiceId == r && e.productDays === t ? (i = e.userProductPrice, !0) : e.dicUserBusinessServicePriceList ? e.dicUserBusinessServicePriceList.some((function(e) {
                                    if (e.businessServiceId == r && e.productDays === t) return i = e.userProductPrice,
                                        !0
                                })) : void 0
                            })),
                        e.apiSwitch && ([1, 8, 9].includes(r) && this.deviceServiceOrderList.some((function(e) {
                            if (2 == e.businessServiceId && e.productDays === t) return s = e.userProductPrice,
                                !0
                        })), 3 === r && this.deviceServiceOrderList.some((function(e) {
                            if (4 == e.businessServiceId && e.productDays === t) return s = e.userProductPrice,
                                !0
                        }))),
                            M(i + s)
                    },
                    getDeviceServiceOrderPrice: function(e, t) {
                        var i = 0,
                            s = 0,
                            r = e.type;
                        return 7 === r && (r = e.ipPorxyType),
                            this.deviceServiceOrderList.some((function(t) {
                                return t.businessServiceId == r && t.productDays === e.days ? (i = t.userProductPrice, !0) : t.dicUserBusinessServicePriceList ? t.dicUserBusinessServicePriceList.some((function(t) {
                                    if (t.businessServiceId == r && t.productDays === e.days) return i = t.userProductPrice,
                                        !0
                                })) : void 0
                            })),
                        e.apiSwitch && ([1, 8, 9].includes(r) && this.deviceServiceOrderList.some((function(t) {
                            if (2 == t.businessServiceId && t.productDays === e.days) return s = t.userProductPrice,
                                !0
                        })), 3 === r && this.deviceServiceOrderList.some((function(t) {
                            if (4 == t.businessServiceId && t.productDays === e.days) return s = t.userProductPrice,
                                !0
                        }))),
                            M(t ? i + s: (i + s) * e.devices.length)
                    },
                    deviceServiceOrderDialogClose: function() {
                        this.deviceServiceOrderDialogShow = !1,
                            this.deviceServiceForm = {
                                type: void 0,
                                services: [],
                                devices: [],
                                days: 30,
                                apiSwitch: !1,
                                paymentType: 2,
                                ipPorxyType: 1
                            }
                    },
                    handleDeviceServiceOrderSumbit: function() {
                        var e = this;
                        if (this.orderApplying) this.$message.warning("有订单正在提交中，请稍后...");
                        else if (!this.deviceServiceForm.devices.length > 0) this.$message.warning("请先选择要购买服务的云机");
                        else {
                            var t = [];
                            7 === this.deviceServiceForm.type ? (t.push(this.deviceServiceForm.ipPorxyType), this.deviceServiceForm.apiSwitch && t.push(2)) : t.push(this.deviceServiceForm.type),
                            3 === this.deviceServiceForm.type && this.deviceServiceForm.apiSwitch && t.push(4),
                                this.orderApplying = !0,
                                Object(E["n"])({
                                    token: this.token,
                                    deviceIdList: this.deviceServiceForm.devices,
                                    businessServiceIdList: t,
                                    applyDays: this.deviceServiceForm.days,
                                    paymentType: this.deviceServiceForm.paymentType
                                }).then((function(t) {
                                    e.handleCreateOrder(t),
                                        e.orderApplying = !1
                                })).
                                catch((function(t) {
                                    e.orderApplying = !1
                                }))
                        }
                    },
                    getUserDeviceServiceList: function() {
                        var e = this;
                        Object(E["g"])({
                            siteId: 0
                        }).then((function(t) {
                            e.userDeviceServiceList = t.data.dicUserBusinessServicePackageList
                        })),
                            Object(E["e"])({
                                token: this.token
                            }).then((function(t) {
                                e.userAccountServiceList = t.data
                            }))
                    },
                    accountServiceOrderDialogOpen: function() {},
                    accountServiceOrderDialogClose: function() {
                        this.accountServiceForm = {
                            type: void 0,
                            days: 30,
                            num: 1,
                            paymentType: 2
                        },
                            this.accountServiceOrderDialogShow = !1
                    },
                    getAccountServiceOrderPrice: function(e) {
                        var t = 0,
                            i = e.type,
                            s = e.days,
                            r = e.num,
                            n = this.userAccountServiceList.find((function(e) {
                                return e.businessId === i && e.packageDays === s
                            }));
                        return n && (t = n.packagePrice),
                            M(t * r)
                    },
                    handleAccountServiceOrderSumbit: function() {
                        var e = this;
                        if (this.orderApplying) this.$message.warning("有订单正在提交中，请稍后...");
                        else {
                            var t = null,
                                i = this.accountServiceForm.type;
                            13 === i && (t = E["t"]),
                            15 === i && (t = E["u"]),
                                this.orderApplying = !0,
                            t && t({
                                token: this.token,
                                applyNum: this.accountServiceForm.num,
                                days: this.accountServiceForm.days,
                                paymentType: this.accountServiceForm.paymentType
                            }).then((function(t) {
                                e.handleCreateOrder(t),
                                    e.orderApplying = !1
                            })).
                            catch((function(t) {
                                e.orderApplying = !1
                            }))
                        }
                    },
                    handleADBServiceRenewalSelectListRowClick: function(e) {
                        this.$refs["adbServiceRenewalSelectList"].toggleRowSelection(e)
                    },
                    handleADBServiceRenewalSelectSubmit: function() {
                        var e = this.adbServiceForm.devices = [];
                        this.$refs["adbServiceRenewalSelectList"].selection.forEach((function(t) {
                            e.push(t.deviceId)
                        })),
                            this.adbServiceRenewalSelectDialogShow = !1
                    },
                    handleADBServiceOrderSumbit: function() {
                        var e = this;
                        if (this.orderApplying) this.$message.warning("有订单正在提交中，请稍后...");
                        else {
                            var t = null,
                                i = this.adbServiceTabActiveName,
                                s = {
                                    token: this.token
                                };
                            if ("order" === i && (t = E["j"], s.deviceVersionId = this.adbServiceForm.version, s.applyNum = this.adbServiceForm.num, s.applyDays = this.adbServiceForm.days, s.orderSiteId = this.adbServiceForm.site, s.paymentType = this.adbServiceForm.paymentType), "renewal" === i) {
                                if (t = E["k"], 0 === this.adbServiceForm.devices.length) return void this.$message.warning("请选择要续费的ADB云机");
                                s.deviceIdList = this.adbServiceForm.devices,
                                    s.applyDays = this.adbServiceForm.days,
                                    s.paymentType = this.adbServiceForm.paymentType
                            }
                            t && (this.orderApplying = !0, t(s).then((function(t) {
                                e.handleCreateOrder(t),
                                    e.orderApplying = !1
                            })).
                            catch((function(t) {
                                e.orderApplying = !1
                            })))
                        }
                    },
                    getADBServiceOrderPrice: function() {
                        var e = 0,
                            t = this.adbServiceForm,
                            i = this.adbServiceTabActiveName,
                            s = this.getADBServicePriceList();
                        if ("order" === i) {
                            var r = t.days,
                                n = t.num,
                                a = s.find((function(e) {
                                    return e.productDays === r
                                }));
                            return a && (e = a.userProductPrice),
                            e * n
                        }
                        var o = t.days,
                            c = t.devices,
                            l = s.find((function(e) {
                                return e.productDays === o
                            }));
                        return l && (e = l.userProductPrice),
                            M(e * c.length)
                    },
                    getSelectionLength: function(e) {
                        return this.$refs[e] ? this.$refs[e].selection.length: 0
                    }
                }
            },
            W = Z,
            Q = (i("7780"), i("5cc2"), i("2014"), Object(g["a"])(W, s, r, !1, null, "facdecd2", null));
        t["default"] = Q.exports
    },
    "89ef": function(e, t, i) {
        e.exports = i.p + "img/i_xndw.8ebcd0b1.png"
    },
    "8d04": function(e, t, i) {},
    "948a": function(e, t, i) {},
    "9d3f": function(e, t, i) {
        e.exports = i.p + "img/i_zb.276a904d.png"
    },
    a4db: function(e, t, i) {
        e.exports = i.p + "img/i_yspdr.3b4a452e.png"
    },
    a623: function(e, t, i) {
        "use strict";
        var s = i("23e7"),
            r = i("b727").every,
            n = i("a640"),
            a = i("ae40"),
            o = n("every"),
            c = a("every");
        s({
                target: "Array",
                proto: !0,
                forced: !o || !c
            },
            {
                every: function(e) {
                    return r(this, e, arguments.length > 1 ? arguments[1] : void 0)
                }
            })
    },
    a910: function(e, t, i) {
        "use strict";
        var s = i("948a"),
            r = i.n(s);
        r.a
    },
    b06d: function(e, t, i) {
        e.exports = i.p + "img/i_ip.a91f48cf.png"
    },
    b562: function(e, t, i) {
        "use strict";
        i.d(t, "g", (function() {
            return r
        })),
            i.d(t, "a", (function() {
                return n
            })),
            i.d(t, "b", (function() {
                return a
            })),
            i.d(t, "e", (function() {
                return o
            })),
            i.d(t, "f", (function() {
                return c
            })),
            i.d(t, "c", (function() {
                return l
            })),
            i.d(t, "h", (function() {
                return d
            })),
            i.d(t, "d", (function() {
                return u
            }));
        var s = i("b775");
        function r(e) {
            return Object(s["a"])({
                url: "/coco/app/store/list",
                method: "post",
                data: e
            })
        }
        function n(e) {
            return Object(s["a"])({
                url: "/coco/app/delete",
                method: "post",
                data: e
            })
        }
        function a(e) {
            return Object(s["a"])({
                url: "/coco/app/issue",
                method: "post",
                data: e
            })
        }
        function o(e) {
            return Object(s["a"])({
                url: "/coco/app/start",
                method: "post",
                data: e
            })
        }
        function c(e) {
            return Object(s["a"])({
                url: "/coco/app/stop",
                method: "post",
                data: e
            })
        }
        function l(e) {
            return Object(s["a"])({
                url: "/coco/app/list",
                method: "post",
                data: e
            })
        }
        function d(e) {
            return Object(s["a"])({
                url: "/coco/file/upload/progress",
                method: "post",
                data: e
            })
        }
        function u(e) {
            return Object(s["a"])({
                url: "/coco/app/remote/upload",
                method: "post",
                data: e
            })
        }
    },
    b680: function(e, t, i) {
        "use strict";
        var s = i("23e7"),
            r = i("a691"),
            n = i("408a"),
            a = i("1148"),
            o = i("d039"),
            c = 1..toFixed,
            l = Math.floor,
            d = function(e, t, i) {
                return 0 === t ? i: t % 2 === 1 ? d(e, t - 1, i * e) : d(e * e, t / 2, i)
            },
            u = function(e) {
                var t = 0,
                    i = e;
                while (i >= 4096) t += 12,
                    i /= 4096;
                while (i >= 2) t += 1,
                    i /= 2;
                return t
            },
            p = c && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0)) || !o((function() {
                c.call({})
            }));
        s({
                target: "Number",
                proto: !0,
                forced: p
            },
            {
                toFixed: function(e) {
                    var t, i, s, o, c = n(this),
                        p = r(e),
                        v = [0, 0, 0, 0, 0, 0],
                        h = "",
                        m = "0",
                        f = function(e, t) {
                            var i = -1,
                                s = t;
                            while (++i < 6) s += e * v[i],
                                v[i] = s % 1e7,
                                s = l(s / 1e7)
                        },
                        g = function(e) {
                            var t = 6,
                                i = 0;
                            while (--t >= 0) i += v[t],
                                v[t] = l(i / e),
                                i = i % e * 1e7
                        },
                        b = function() {
                            var e = 6,
                                t = "";
                            while (--e >= 0) if ("" !== t || 0 === e || 0 !== v[e]) {
                                var i = String(v[e]);
                                t = "" === t ? i: t + a.call("0", 7 - i.length) + i
                            }
                            return t
                        };
                    if (p < 0 || p > 20) throw RangeError("Incorrect fraction digits");
                    if (c != c) return "NaN";
                    if (c <= -1e21 || c >= 1e21) return String(c);
                    if (c < 0 && (h = "-", c = -c), c > 1e-21) if (t = u(c * d(2, 69, 1)) - 69, i = t < 0 ? c * d(2, -t, 1) : c / d(2, t, 1), i *= 4503599627370496, t = 52 - t, t > 0) {
                        f(0, i),
                            s = p;
                        while (s >= 7) f(1e7, 0),
                            s -= 7;
                        f(d(10, s, 1), 0),
                            s = t - 1;
                        while (s >= 23) g(1 << 23),
                            s -= 23;
                        g(1 << s),
                            f(1, 1),
                            g(2),
                            m = b()
                    } else f(0, i),
                        f(1 << -t, 0),
                        m = b() + a.call("0", p);
                    return p > 0 ? (o = m.length, m = h + (o <= p ? "0." + a.call("0", p - o) + m: m.slice(0, o - p) + "." + m.slice(o - p))) : m = h + m,
                        m
                }
            })
    },
    bb2f: function(e, t, i) {
        var s = i("d039");
        e.exports = !s((function() {
            return Object.isExtensible(Object.preventExtensions({}))
        }))
    },
    c04a: function(e, t, i) {
        "use strict";
        var s = function() {
                var e = this,
                    t = e.$createElement,
                    i = e._self._c || t;
                return i("div", {
                        staticClass: "upload-drawer",
                        class: [{
                            hover: e.hovering
                        }],
                        on: {
                            mouseenter: function(t) {
                                e.hovering = !0
                            },
                            mouseleave: function(t) {
                                e.hovering = !1
                            }
                        }
                    },
                    [i("div", {
                            ref: "control",
                            staticClass: "upload-drawer-control",
                            on: {
                                click: function(t) {
                                    e.isExpanded = !e.isExpanded
                                }
                            }
                        },
                        [i("transition", {
                                attrs: {
                                    name: "arrow-slide"
                                }
                            },
                            [i("i", {
                                class: [e.iconClass, {
                                    hovering: e.hovering
                                }]
                            })]), i("transition", {
                                attrs: {
                                    name: "text-slide"
                                }
                            },
                            [i("span", {
                                    directives: [{
                                        name: "show",
                                        rawName: "v-show",
                                        value: e.hovering,
                                        expression: "hovering"
                                    }]
                                },
                                [e._v(e._s(e.controlText) + "上传进度")])])], 1), i("div", {
                            ref: "content",
                            staticClass: "content"
                        },
                        [e._t("content")], 2)])
            },
            r = [],
            n = {
                name: "UploadDrawer",
                data: function() {
                    return {
                        hovering: !1,
                        isExpanded: !0
                    }
                },
                methods: {},
                computed: {
                    iconClass: function() {
                        return this.isExpanded ? "el-icon-caret-bottom": "el-icon-caret-top"
                    },
                    controlText: function() {
                        return this.isExpanded ? "隐藏": "显示"
                    },
                    contentArea: function() {
                        return this.$refs["content"]
                    }
                },
                watch: {
                    isExpanded: function(e) {
                        this.contentArea.style.height = e ? "450px": "0",
                        e || (this.$refs.control.style.left = "0")
                    }
                }
            },
            a = n,
            o = (i("5ed7"), i("2877")),
            c = Object(o["a"])(a, s, r, !1, null, "3672987a", null);
        t["a"] = c.exports
    },
    d51d: function(e, t, i) {
        "use strict";
        var s = i("8546"),
            r = i.n(s);
        r.a
    },
    dea0: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAABMCAYAAADHl1ErAAAJAElEQVR4nO2cXWwcVxXHf3d2dtbr7zqJgUYBYoLa0hb6FVQFXCBRK1q1KgGhSi1ISBVVeeEF8aGqKepbaZ94QOoDAoSolEoIVFCFoEo/81CQo0RKsKhIk1LIR5Mmsb3e9X7MzEVn7qy9m9i7M7Pe9Xqdvzy2tdq5M/c/95zzv+eeucp/5ClWgqLulyAN3AfcCtwOTACbAWfFRroLZeAC8C5wCDgM/CX8HNDVnxVhR+zOx4DHgW+FJK1njAM3APeHfTgB/A54HjjTrF9WhI7/EPQx0E+BnjD899QxEfbtmOlrcsJuBN5E8yyasd7j6YpjLOir9Nn0fVmsZJJfBF7SMBZhBPYaJoGDwF7g9SgjTMh6g41JVhWjwKsheXWw0BIZwgP9KeDPEX1br0OkwZ8CTmo4qjXJFLAf9OhGZ6oGwsWLwOcBXz62anzfj7TmjtoBF+UwokWtyhH32h06btfwk2pXlffwPunxJuAUkIlDv2WJRWs8z2v5UUpb1fa0biQd1wQibK8V0Vs1ye/HJUspRcV1KebmqVyYASFNqQhnLgPfJzU8iDM2Sl8mE7TdZaQ5IUc/Vd7DT8p05z+hmm8ODSplUalUyJ05F/zv7LwJBrKGtLhQCmWnqEyfoHL8v2SvHad/cCA09a4iTWYBn7C1Zk9ksjAd9FyPwvkLqIEsw09+F3vXZ1u+Gz0zT/7Z37DwytukPrmVjJOhyyxTONpjL6c1GsESUyyX8RZKDD72DUNWoQgVN7lJao0aHWTgB9/G/ff7lC/O4nxkSzea5qTorc/FPcv3fUjbpG/+tPnAbcF/YUYtc3nUphHsHdvw5wvd6PgFt9hoHS/7oPWia9FuZfVuRVXb9CRk1muG7sF2WxtJEZ2vWlfst6EzIUHKsoKjGWHB/fi6UwFikx1XTnQKpWLR+LAm1xOfatt2oOH89o/GjB3bWVTlfSs+qwFkVGnfp3DqAyNTrAbTWgkWloU9OkT2mhFSwbltJU3bcZtv9zPUxRIqm2HkiUdheABK5eW/KESmbdzD/2Lh9weYP3+RgS1jpJTV1oARNUXdOYjTt1Okd+8M/jZD+s6bSW37KLmf/ZpKfoGUiN42wo4dhWqiZFsgpi7zyQ9nUJtHjcZb8V7Eq6Rx7p8k/crbVKamcfqzgV9r1yhLZJJdE+jFjYrJ9jmkhoeoVDwzeY8QLJLCjt/9rqJsMfho10VZCkvr4Gg2woJeJIhbdty+d6cAX0LZNvqtEWHCk+VpLJmxhKMxKnexTbL2ol0FZWYFhWIp0s1Zto2TTpNxTYYlKg8JTbIL4Xoo22bk63tQgRxZZtomRKYs/PwCxalpSmc/RKXTOGU3snnasU3M191JmecHZDg37YAtK0VXFdqjwtnxceb2/5XSmfOkxPd5Jlg0Q/fpsKSoypFcHuXYsFBq2JAaHyO780bm/ngAz3GwIiY/4+sw1oHnjwLfwxrKLk3xZEoVYXExsdNf95AY4QUrZ3VVA81wdcE2JpKZZC+h6ucjTvk2rklehqgmmdDp07Z82JpgMR3e/OJXfVhMJDLJXjPjOFEyodPvQc+nfdDNDe6q0w8RfYT14miJBRXLKGPnwwJsYCeWOEXdQ6KizU5fR216nUEm36p5v67qsJiwEy1H9dAAC1yL1qbMIAIXrY2wRsv4idtU7SlyWSW0pPRVdWVar0athTlfKSuoee1kFiXOlZIpfckGlyuUXj9E9jMTpr5VFh2sBKRVr9/fh//eacp/P0r6luvMQobbenV2U9Sld6LosCTXkELegSzFP7yKNTpE5r4vQMZJ1kEZmVJUcvQ4hed+i3/uIn17v2IeQi6f5PbaiuTrkn0Z9EKRwi9epPTyQejPmJWbZrAUei6/VBOrjC/0TpzCn51n8IlHSX91F+SLHQ0u0dclk/oKqc3qywSjw/vfWUNWBD8mtV/W+FhQ0hSc4xtTcPbspO+BL2FP3grlCrgtFBnHRYzy0NaW2eQCUlo5FLHESL6fKzC47zHs266rXzt00qa8Kb/QepFxG7FG2Qpd9ydAsWyiI53P5uorbmZlrMkiiEqFcmQV3lFaLCJO22ZkJhXiHRGuSeD7+DNz4Y22+LCCgjqzoYF/aS6QJlIu0M5g0VGTDAzNsiju/1ugtRgZXJV2yy8fpPTmYbL37kKNDUPZjXV++4VrQgRpocH+QHPN//jnOHt3o4b6jcSIi2pR8NQ0hV+9RGrzKH133wlWCtzGdRX1UObd0Y5EyQSQsiI1MkB5+iSVI89Hb0AKTcou3mxusfBEHoHK9pG+fjuD33mQ1MQ2mJ1vZ7JOSbaiwyEpLJcazALZ6OelbVJjIwzcdr0hK9Rv6pphnBu2w+gwzMUka3FahKlYbD7CfBlhccbv6kFHrDMTqSElmJZFeus4mW/eYwqBdZj3FYEr2i0gK96zV1bzsvbLULTDvWjG28dMi1AmkEvBry9v/r5/1rzwkCvUj6Y4ZIXzV08i62IGOdL5M2KSJ8O9aLoUKphCSSLEvTBL4Y0p+h+4CzaPJMubhf7PP3GK4j+OBm8U+wvFcPGoaXsnZYQdCXds6lJok07KF1GjwxSPvBNM0u2JrYt+LBZZMvnPFyn981383LyZt8oRLRl6RAh7q3vJCiGl4Z6Hns2RGuqn9M57lI4db6k9lUkHek1eZq2afQS8JcL1QPgCePT3vtcCMgJcF/fSHEom6qnYDnsJMtuYLZmAIY4/mvsTjg6IcJX67F8C+7qaMGre+iiVW9DbxsFLEDFmGPndKeGoos7d8z3CjT5Or6Od5jqNxY0+qsYr0uLpjdP/2Hg65KguW/GMhkO1y+ZXj+CQvRKfqZJUO5eU7N1DaC1fGOnaZ91ZzKLUQ9WdnQh2dwpflQvnUrL75IO9WTyRCF8TTmo5Wk6AyO50X5ZpwDroULswC+yOuqUf4caJk+tC1K4+DobbGr62XMuNJK5s03lXsBEbXNwAAeCS9DUcKMdWIiVKAvE5tH4h3Pj2kR7Y+PZyyMa3LwQb3yp1utmX1Qd3P97wC4H3X5LVImzvDbdWviMkT/YJ7FsHRYnSCVkIFd8sJE1dsbWyzDEbtQD8HyWo3pPa5b8UAAAAAElFTkSuQmCC"
    },
    e1c4: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAABMCAYAAADHl1ErAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoyQkJCN0JFMDk0QUNFNzExQkZFRUEyMDcyMDU0RDc1OSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowQUM4MzhENDVFNjkxMUU4QjNDNkI5Q0I3RUQyODdDNCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowQUM4MzhEMzVFNjkxMUU4QjNDNkI5Q0I3RUQyODdDNCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjAyMUM0MzFBMkU1RUU4MTE5QUMxQ0Y0REQwOTZEQkNDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjJCQkI3QkUwOTRBQ0U3MTFCRkVFQTIwNzIwNTRENzU5Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/0dblwAABhRJREFUeNrsnHtMU3cUxw8tpVChvAoLusncnNOB4sSY4WI2Fg1mDzfF4GvJ/nBKlsU4hw5jshmzP3xsytySLVlI9ogaYXEquk2TTVx0OMVNnTA3swEC6lZahNIChdLunNt7S1+3vUBvy+D3TU6g9/HrvZ+e3/md87s3v6i8shYIoMloq9Hy0R5DS0NTw9iSGa0V7RbaWbQKtEaxg6NEgBGoXWhFaEoYX7Lz0LaiNXvvVPg5YQlaHdqqcQhLYEL3Xs//DQhsI9pRtARgikc7iLZJDNgKtDIRrxuvikLby7PxAEYxq5w/gMkXWjnPyAVsJ++CTOLdc7cALBNtJWMSVJQxZCp4WCxuSRs9Vyr4pJRJmvIJWDbjIFnZBEzHOEhWmmIM1oZyKoYF+2FEfiYGjAFjwBgwBoyJAWPAGDAGbKwpWu4vmJcZCzufTxXd/2WtCb641MWACVJHR0GcSvxRwYCdeZiHbHZHwP2LHtVAZkq0D8QrrVb4/mb3qAMaHekLeCRNxZm3lmRPgNW5CbDpqAHauwdY0JcKc99LOq5bMw/j9c3vFjhZ3+2xrXi+FmZPcs5rTktXwQdLdfDaV23jw8M0qsDeYbTY4dptq4dtONIGl1usrmNyEN57L46OmXR6e8cR6kafnhoHlj471DZb4aFUFRTmiD8jrmnsgZ8ae30vDK0MPYvSEkHf3eiGd0+3h+bG0RyjAVjelFjYi96w54d7cOy6ZcTtvY9tzZ8yCK3iihn2/9gxrLaexHYKZmhgZoYalNi3mu/Z4NzfPVCJbToiEcMKpmtg++IU7n+9OTQj2+bjBtj9QioseDiO+7zi8Xgw9drhs4umIbWzdWEyN/K6SzdBCXPuV8NzWROgtMoId0228MUwuhEBFkkZFbqRrfSEEc7+1eP6vC5PC8tzpL8KUpKf5APLXVN1KvikKC1ggh1SYOtxVNv4VJLHto6e0OZO204a4eAvXa6u8yZCII8OpsnJ0QFjqKD0eCWsmZsgb5ek36PkmSRYNsv3grInqjHLDx0wq80BpzDo52IXmn5fDLdN8GiKRWIqHIInLpymgfILJvmA7Xg2hfsSf9qwIFGWYd27VHIPAyNVhlYpb5eswXSgz+aAcEqpkK+I75VwLyPyMOoiTUYb7MN8KSnO804+OtcJV1utsgO0OxwYL+1c/HEfCCjenbnZw6Uka5/QSmrrxr998qcVf+j74NXDeviwUAcTtYPN1d2xSrqAUIiSW/cB4NMaE3x+yeSCQHHM+wf1pwO1XfJ2SUF3Om2w9pAe/tT3u7YlxoWnrl+GMKjWTFA7v29vdYcLlisHO2GAILNMcOByl0c5Jnse1onJ5PoKPVcOca6rkH+GoQhzv835g+nMjlPtcOSa2ee43+44e8H1u74eb7AMcFXJx+c7I1dLUhJ4GuOb1NIo78FYmPOAGjAcwc9NvfCrhNi3JjcBXncbid+qMsD5ht6g582aGANZWBqRp9zGnnHxVi/09EtHIAsw8q0ULDuMlsDJa2KsAnZh2ZMzyfMVNcrq3/m2XXS29pV5CVA8P9GVn9Ek49Xb1rCEAFkCjYObtgme6e/BwtobljDbsW1Rst9zaMQTYNHoWFypDxuskBffQ9Fc7IIzM2JE9y+eoQEteqC7l2liFNx5JCqU3/jaAC0dtrBed8SACeVNILlP67irwdjPdcM2c/jn+iMGjKZohiMa6UqOGcBsjczjpIgB8zfL6i6KgVuOG6HfK/A3onfZHRAxRQwYAaHp5rcL/BfP2zGnoipitCmiT41ojp5GuuWz47mnRAPoOpT4HsI6sP6f0Qcr4sBIFzBRJfu/iL29w4AxYAwYA8aAMTFgDBgDxoAxYEwcMCvDIFl9BMzAOEhWGwGrZxwkq46AnWEcJKuagNHydXbGIqi4pf4IWBNaJeMRVMSoSUgrSsG52iSTf5l5Rq48jFaTXAfDe3V9rMvBs2n2TlwPg3OBRBbPPGFt4dn4zfT3oy1F62KsuG74MjgXjQxYGlWBc02xw+PU2+z8vWehHfLeKfaYjfrrKj7QCUsrUwPpaKoxBohem9TzCXw1Pxo2iB38nwADALyW8bEIRBqZAAAAAElFTkSuQmCC"
    },
    f11b: function(e, t, i) {
        e.exports = i.p + "img/i_onebtn.ff5f12d5.png"
    },
    f183: function(e, t, i) {
        var s = i("d012"),
            r = i("861d"),
            n = i("5135"),
            a = i("9bf2").f,
            o = i("90e3"),
            c = i("bb2f"),
            l = o("meta"),
            d = 0,
            u = Object.isExtensible ||
                function() {
                    return ! 0
                },
            p = function(e) {
                a(e, l, {
                    value: {
                        objectID: "O" + ++d,
                        weakData: {}
                    }
                })
            },
            v = function(e, t) {
                if (!r(e)) return "symbol" == typeof e ? e: ("string" == typeof e ? "S": "P") + e;
                if (!n(e, l)) {
                    if (!u(e)) return "F";
                    if (!t) return "E";
                    p(e)
                }
                return e[l].objectID
            },
            h = function(e, t) {
                if (!n(e, l)) {
                    if (!u(e)) return ! 0;
                    if (!t) return ! 1;
                    p(e)
                }
                return e[l].weakData
            },
            m = function(e) {
                return c && f.REQUIRED && u(e) && !n(e, l) && p(e),
                    e
            },
            f = e.exports = {
                REQUIRED: !1,
                fastKey: v,
                getWeakData: h,
                onFreeze: m
            };
        s[l] = !0
    },
    f20a: function(e, t, i) {},
    f36a: function(e, t, i) {},
    f54d: function(e, t, i) {},
    f68d: function(e, t, i) {
        "use strict";
        var s = i("3d84"),
            r = i.n(s);
        r.a
    },
    fa06: function(e, t, i) {
        "use strict";
        var s = i("f54d"),
            r = i.n(s);
        r.a
    },
    fb6a: function(e, t, i) {
        "use strict";
        var s = i("23e7"),
            r = i("861d"),
            n = i("e8b5"),
            a = i("23cb"),
            o = i("50c4"),
            c = i("fc6a"),
            l = i("8418"),
            d = i("b622"),
            u = i("1dde"),
            p = i("ae40"),
            v = u("slice"),
            h = p("slice", {
                ACCESSORS: !0,
                0 : 0,
                1 : 2
            }),
            m = d("species"),
            f = [].slice,
            g = Math.max;
        s({
                target: "Array",
                proto: !0,
                forced: !v || !h
            },
            {
                slice: function(e, t) {
                    var i, s, d, u = c(this),
                        p = o(u.length),
                        v = a(e, p),
                        h = a(void 0 === t ? p: t, p);
                    if (n(u) && (i = u.constructor, "function" != typeof i || i !== Array && !n(i.prototype) ? r(i) && (i = i[m], null === i && (i = void 0)) : i = void 0, i === Array || void 0 === i)) return f.call(u, v, h);
                    for (s = new(void 0 === i ? Array: i)(g(h - v, 0)), d = 0; v < h; v++, d++) v in u && l(s, d, u[v]);
                    return s.length = d,
                        s
                }
            })
    }
}]);