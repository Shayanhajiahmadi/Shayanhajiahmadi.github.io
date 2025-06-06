const btnNotes = document.getElementById('toggleNotes');
let notesHidden = false;
if (btnNotes) {
    btnNotes.addEventListener('click', () => {
        document.querySelectorAll('.note').forEach(el => {
            el.style.display = notesHidden ? 'inline': 'none';
        });
        notesHidden = ! notesHidden;
        btnNotes.textContent = notesHidden ? 'Show Notes': 'Hide Notes';
    });
}
//////////////////////////////////////////////////////////

const legendpeople = document.getElementById('legendpeople');
if (legendpeople) {
    legendpeople.addEventListener('change', function () {
        //alert('Checkbox is ' + (this.checked ? 'checked' : 'unchecked'));
        var people = document.getElementsByClassName("persName"),
        len = people !== null ? people.length: 0, i = 0;
        setTimeout(function () {
            for (i; i < len; i++) {
                people[i].classList.toggle('peopleNameOn');
            }
        },
        500);
    });
}
const legendplaces = document.getElementById('legendplaces');
if (legendplaces) {
    legendplaces.addEventListener('change', function () {
        //alert('Checkbox is ' + (this.checked ? 'checked' : 'unchecked'));
        var places = document.getElementsByClassName("placeName"),
        len = places !== null ? places.length: 0, i = 0;
        setTimeout(function () {
            for (i; i < len; i++) {
                places[i].classList.toggle('placeNameOn');
            }
        },
        500);
    });
}

/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */ ! function (a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, ! 0): function (a) {
        if (! a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    }: b(a)
}
("undefined" != typeof window ? window: this, function (a, b) {
    var c =[], d = c.slice, e = c.concat, f = c.push, g = c.indexOf, h = {
    },
    i = h.toString, j = h.hasOwnProperty, k = {
    },
    l = "1.11.1", m = function (a, b) {
        return new m.fn.init(a, b)
    },
    n = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, o = /^-ms-/, p = /-([\da-z])/gi, q = function (a, b) {
        return b.toUpperCase()
    };
    m.fn = m.prototype = {
        jquery: l, constructor: m, selector: "", length: 0, toArray: function () {
            return d.call(this)
        },
        get: function (a) {
            return null != a ? 0 > a ? this[a + this.length]: this[a]: d.call(this)
        },
        pushStack: function (a) {
            var b = m.merge(this. constructor (), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function (a, b) {
            return m.each(this, a, b)
        },
        map: function (a) {
            return this.pushStack(m.map(this, function (b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function () {
            return this.pushStack(d.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (a) {
            var b = this.length, c = + a +(0 > a ? b: 0);
            return this.pushStack(c >= 0 && b > c ?[ this[c]]:[])
        },
        end: function () {
            return this.prevObject || this. constructor (null)
        },
        push: f, sort: c.sort, splice: c.splice
    },
    m.extend = m.fn.extend = function () {
        var a, b, c, d, e, f, g = arguments[0] || {
        },
        h = 1, i = arguments.length, j = ! 1; for ("boolean" == typeof g &&(j = g, g = arguments[h] || {
        },
        h++), "object" == typeof g || m.isFunction(g) ||(g = {
        }), h === i &&(g = this, h--);
        i > h; h++) if (null !=(e = arguments[h])) for (d in e) a = g[d], c = e[d], g !== c &&(j && c &&(m.isPlainObject(c) ||(b = m.isArray(c))) ?(b ?(b = ! 1, f = a && m.isArray(a) ? a:[]): f = a && m.isPlainObject(a) ? a: {
        },
        g[d] = m.extend(j, f, c)): void 0 !== c &&(g[d] = c));
        return g
    },
    m.extend({
        expando: "jQuery" +(l + Math.random()).replace(/\D/g, ""), isReady: ! 0, error: function (a) {
            throw new Error(a)
        },
        noop: function () {
        },
        isFunction: function (a) {
            return "function" === m.type(a)
        },
        isArray: Array.isArray || function (a) {
            return "array" === m.type(a)
        },
        isWindow: function (a) {
            return null != a && a == a.window
        },
        isNumeric: function (a) {
            return ! m.isArray(a) && a - parseFloat(a) >= 0
        },
        isEmptyObject: function (a) {
            var b; for (b in a) return ! 1; return ! 0
        },
        isPlainObject: function (a) {
            var b; if (! a || "object" !== m.type(a) || a.nodeType || m.isWindow(a)) return ! 1; try {
                if (a. constructor && ! j.call(a, "constructor") && ! j.call(a. constructor.prototype, "isPrototypeOf")) return ! 1
            }
            catch (c) {
                return ! 1
            }
            if (k.ownLast) for (b in a) return j.call(a, b);
            for (b in a);
            return void 0 === b || j.call(a, b)
        },
        type: function (a) {
            return null == a ? a + "": "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object": typeof a
        },
        globalEval: function (b) {
            b && m.trim(b) &&(a.execScript || function (b) {
                a.eval.call(a, b)
            })(b)
        },
        camelCase: function (a) {
            return a.replace(o, "ms-").replace(p, q)
        },
        nodeName: function (a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function (a, b, c) {
            var d, e = 0, f = a.length, g = r(a);
            if (c) {
                if (g) {
                    for (; f > e; e++) if (d = b.apply(a[e], c), d === ! 1) break
                } else for (e in a) if (d = b.apply(a[e], c), d === ! 1) break
            } else if (g) {
                for (; f > e; e++) if (d = b.call(a[e], e, a[e]), d === ! 1) break
            } else for (e in a) if (d = b.call(a[e], e, a[e]), d === ! 1) break; return a
        },
        trim: function (a) {
            return null == a ? "":(a + "").replace(n, "")
        },
        makeArray: function (a, b) {
            var c = b ||[]; return null != a &&(r(Object(a)) ? m.merge(c, "string" == typeof a ?[a]: a): f.call(c, a)), c
        },
        inArray: function (a, b, c) {
            var d; if (b) {
                if (g) return g.call(b, a, c);
                for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c): c: 0; d > c; c++) if (c in b && b[c] === a) return c
            }
            return -1
        },
        merge: function (a, b) {
            var c = + b.length, d = 0, e = a.length; while (c > d) a[e++] = b[d++]; if (c !== c) while (void 0 !== b[d]) a[e++] = b[d++]; return a.length = e, a
        },
        grep: function (a, b, c) {
            for (var d, e =[], f = 0, g = a.length, h = ! c; g > f; f++) d = ! b(a[f], f), d !== h && e.push(a[f]);
            return e
        },
        map: function (a, b, c) {
            var d, f = 0, g = a.length, h = r(a), i =[]; if (h) for (; g > f; f++) d = b(a[f], f, c), null != d && i.push(d); else for (f in a) d = b(a[f], f, c), null != d && i.push(d);
            return e.apply([], i)
        },
        guid: 1, proxy: function (a, b) {
            var c, e, f; return "string" == typeof b &&(f = a[b], b = a, a = f), m.isFunction(a) ?(c = d.call(arguments, 2), e = function () {
                return a.apply(b || this, c.concat(d.call(arguments)))
            },
            e.guid = a.guid = a.guid || m.guid++, e): void 0
        },
        now: function () {
            return + new Date
        },
        support: k
    }), m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
        h[ "[object " + b + "]"] = b.toLowerCase()
    });
    function r(a) {
        var b = a.length, c = m.type(a);
        return "function" === c || m.isWindow(a) ? ! 1: 1 === a.nodeType && b ? ! 0: "array" === c || 0 === b || "number" == typeof b && b > 0 && b -1 in a
    }
    var s = function (a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + - new Date, v = a.document, w = 0, x = 0, y = gb(), z = gb(), A = gb(), B = function (a, b) {
            return a === b &&(l = ! 0), 0
        },
        C = "undefined", D = 1 << 31, E = {
        }.hasOwnProperty, F =[], G = F.pop, H = F.push, I = F.push, J = F.slice, K = F.indexOf || function (a) {
            for (var b = 0, c = this.length; c > b; b++) if (this[b] === a) return b; return -1
        },
        L = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", N = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", O = N.replace("w", "w#"), P = "\\[" + M + "*(" + N + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + O + "))|)" + M + "*\\]", Q = ":(" + N + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + P + ")*)|.*)\\)|)", R = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"), S = new RegExp("^" + M + "*," + M + "*"), T = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), U = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"), V = new RegExp(Q), W = new RegExp("^" + O + "$"), X = {
            ID: new RegExp("^#(" + N + ")"), CLASS: new RegExp("^\\.(" + N + ")"), TAG: new RegExp("^(" + N.replace("w", "w*") + ")"), ATTR: new RegExp("^" + P), PSEUDO: new RegExp("^" + Q), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"), bool: new RegExp("^(?:" + L + ")$", "i"), needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
        },
        Y = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, $ = /^[^{]+\{\s*\[native \w/, _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ab = /[+~]/, bb = /'|\\/g, cb = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"), db = function (a, b, c) {
            var d = "0x" + b -65536; return d !== d || c ? b: 0 > d ? String.fromCharCode(d + 65536): String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
        };
        try {
            I.apply(F = J.call(v.childNodes), v.childNodes), F[v.childNodes.length].nodeType
        }
        catch (eb) {
            I = {
                apply: F.length ? function (a, b) {
                    H.apply(a, J.call(b))
                }: function (a, b) {
                    var c = a.length, d = 0; while (a[c++] = b[d++]);
                    a.length = c -1
                }
            }
        }
        function fb(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w, x; if ((b ? b.ownerDocument || b: v) !== n && m(b), b = b || n, d = d ||[], ! a || "string" != typeof a) return d; if (1 !==(k = b.nodeType) && 9 !== k) return[]; if (p && ! e) {
                if (f = _.exec(a)) if (j = f[1]) {
                    if (9 === k) {
                        if (h = b.getElementById(j), ! h || ! h.parentNode) return d; if (h.id === j) return d.push(h), d
                    } else if (b.ownerDocument &&(h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(h), d
                } else {
                    if (f[2]) return I.apply(d, b.getElementsByTagName(a)), d; if ((j = f[3]) && c.getElementsByClassName && b.getElementsByClassName) return I.apply(d, b.getElementsByClassName(j)), d
                }
                if (c.qsa &&(! q || ! q.test(a))) {
                    if (s = r = u, w = b, x = 9 === k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
                        o = g(a),(r = b.getAttribute("id")) ? s = r.replace(bb, "\\$&"): b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length; while (l--) o[l] = s + qb(o[l]);
                        w = ab.test(a) && ob(b.parentNode) || b, x = o.join(",")
                    }
                    if (x) try {
                        return I.apply(d, w.querySelectorAll(x)), d
                    }
                    catch (y) {
                    }
                    finally {
                        r || b.removeAttribute("id")
                    }
                }
            }
            return i(a.replace(R, "$1"), b, d, e)
        }
        function gb() {
            var a =[]; function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }
            return b
        }
        function hb(a) {
            return a[u] = ! 0, a
        }
        function ib(a) {
            var b = n.createElement("div");
            try {
                return ! ! a(b)
            }
            catch (c) {
                return ! 1
            }
            finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }
        function jb(a, b) {
            var c = a.split("|"), e = a.length; while (e--) d.attrHandle[c[e]] = b
        }
        function kb(a, b) {
            var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType &&(~ b.sourceIndex || D) -(~ a.sourceIndex || D);
            if (d) return d; if (c) while (c = c.nextSibling) if (c === b) return -1; return a ? 1: -1
        }
        function lb(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }
        function mb(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }
        function nb(a) {
            return hb(function (b) {
                return b = + b, hb(function (c, d) {
                    var e, f = a([], c.length, b), g = f.length; while (g--) c[e = f[g]] &&(c[e] = !(d[e] = c[e]))
                })
            })
        }
        function ob(a) {
            return a && typeof a.getElementsByTagName !== C && a
        }
        c = fb.support = {
        },
        f = fb.isXML = function (a) {
            var b = a &&(a.ownerDocument || a).documentElement; return b ? "HTML" !== b.nodeName: ! 1
        },
        m = fb.setDocument = function (a) {
            var b, e = a ? a.ownerDocument || a: v, g = e.defaultView; return e !== n && 9 === e.nodeType && e.documentElement ?(n = e, o = e.documentElement, p = ! f(e), g && g !== g.top &&(g.addEventListener ? g.addEventListener("unload", function () {
                m()
            }, ! 1): g.attachEvent && g.attachEvent("onunload", function () {
                m()
            })), c.attributes = ib(function (a) {
                return a.className = "i", ! a.getAttribute("className")
            }), c.getElementsByTagName = ib(function (a) {
                return a.appendChild(e.createComment("")), ! a.getElementsByTagName("*").length
            }), c.getElementsByClassName = $.test(e.getElementsByClassName) && ib(function (a) {
                return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length
            }), c.getById = ib(function (a) {
                return o.appendChild(a).id = u, ! e.getElementsByName || ! e.getElementsByName(u).length
            }), c.getById ?(d.find.ID = function (a, b) {
                if (typeof b.getElementById !== C && p) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ?[c]:[]
                }
            },
            d.filter.ID = function (a) {
                var b = a.replace(cb, db);
                return function (a) {
                    return a.getAttribute("id") === b
                }
            }):(delete d.find.ID, d.filter.ID = function (a) {
                var b = a.replace(cb, db);
                return function (a) {
                    var c = typeof a.getAttributeNode !== C && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
                return typeof b.getElementsByTagName !== C ? b.getElementsByTagName(a): void 0
            }: function (a, b) {
                var c, d =[], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            },
            d.find. CLASS = c.getElementsByClassName && function (a, b) {
                return typeof b.getElementsByClassName !== C && p ? b.getElementsByClassName(a): void 0
            },
            r =[], q =[],(c.qsa = $.test(e.querySelectorAll)) &&(ib(function (a) {
                a.innerHTML = "<select msallowclip=''><option selected=''></option></select>", a.querySelectorAll("[msallowclip^='']").length && q.push("[*^$]=" + M + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + M + "*(?:value|" + L + ")"), a.querySelectorAll(":checked").length || q.push(":checked")
            }), ib(function (a) {
                var b = e.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + M + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })),(c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ib(function (a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", Q)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function (a, b) {
                var c = 9 === a.nodeType ? a.documentElement: a, d = b && b.parentNode; return a === d || !(! d || 1 !== d.nodeType || !(c.contains ? c.contains(d): a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            }: function (a, b) {
                if (b) while (b = b.parentNode) if (b === a) return ! 0; return ! 1
            },
            B = b ? function (a, b) {
                if (a === b) return l = ! 0, 0; var d = ! a.compareDocumentPosition - ! b.compareDocumentPosition; return d ? d:(d =(a.ownerDocument || a) ===(b.ownerDocument || b) ? a.compareDocumentPosition(b): 1, 1 & d || ! c.sortDetached && b.compareDocumentPosition(a) === d ? a === e || a.ownerDocument === v && t(v, a) ? -1: b === e || b.ownerDocument === v && t(v, b) ? 1: k ? K.call(k, a) - K.call(k, b): 0: 4 & d ? -1: 1)
            }: function (a, b) {
                if (a === b) return l = ! 0, 0; var c, d = 0, f = a.parentNode, g = b.parentNode, h =[a], i =[b]; if (! f || ! g) return a === e ? -1: b === e ? 1: f ? -1: g ? 1: k ? K.call(k, a) - K.call(k, b): 0; if (f === g) return kb(a, b);
                c = a; while (c = c.parentNode) h.unshift(c);
                c = b; while (c = c.parentNode) i.unshift(c);
                while (h[d] === i[d]) d++; return d ? kb(h[d], i[d]): h[d] === v ? -1: i[d] === v ? 1: 0
            },
            e): n
        },
        fb.matches = function (a, b) {
            return fb(a, null, null, b)
        },
        fb.matchesSelector = function (a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(! c.matchesSelector || ! p || r && r.test(b) || q && q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            }
            catch (e) {
            }
            return fb(b, n, null,[a]).length > 0
        },
        fb.contains = function (a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        },
        fb.attr = function (a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()], f = e && E.call(d.attrHandle, b.toLowerCase()) ? e(a, b, ! p): void 0; return void 0 !== f ? f: c.attributes || ! p ? a.getAttribute(b):(f = a.getAttributeNode(b)) && f.specified ? f.value: null
        },
        fb.error = function (a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        },
        fb.uniqueSort = function (a) {
            var b, d =[], e = 0, f = 0; if (l = ! c.detectDuplicates, k = ! c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) b === a[f] &&(e = d.push(f));
                while (e--) a.splice(d[e], 1)
            }
            return k = null, a
        },
        e = fb.getText = function (a) {
            var b, c = "", d = 0, f = a.nodeType; if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent; for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                } else if (3 === f || 4 === f) return a.nodeValue
            } else while (b = a[d++]) c += e(b);
            return c
        },
        d = fb.selectors = {
            cacheLength: 50, createPseudo: hb, match: X, attrHandle: {
            },
            find: {
            },
            relative: {
                ">": {
                    dir: "parentNode", first: ! 0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling", first: ! 0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (a) {
                    return a[1] = a[1].replace(cb, db), a[3] =(a[3] || a[4] || a[5] || "").replace(cb, db), "~=" === a[2] &&(a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function (a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ?(a[3] || fb.error(a[0]), a[4] = +(a[4] ? a[5] +(a[6] || 1): 2 *("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])): a[3] && fb.error(a[0]), a
                },
                PSEUDO: function (a) {
                    var b, c = ! a[6] && a[2]; return X.CHILD.test(a[0]) ? null:(a[3] ? a[2] = a[4] || a[5] || "": c && V.test(c) &&(b = g(c, ! 0)) &&(b = c.indexOf(")", c.length - b) - c.length) &&(a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function (a) {
                    var b = a.replace(cb, db).toLowerCase();
                    return "*" === a ? function () {
                        return ! 0
                    }: function (a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function (a) {
                    var b = y[a + " "]; return b ||(b = new RegExp("(^|" + M + ")" + a + "(" + M + "|$)")) && y(a, function (a) {
                        return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== C && a.getAttribute("class") || "")
                    })
                },
                ATTR: function (a, b, c) {
                    return function (d) {
                        var e = fb.attr(d, a);
                        return null == e ? "!=" === b: b ?(e += "", "=" === b ? e === c: "!=" === b ? e !== c: "^=" === b ? c && 0 === e.indexOf(c): "*=" === b ? c && e.indexOf(c) > -1: "$=" === b ? c && e.slice(- c.length) === c: "~=" === b ?(" " + e + " ").indexOf(c) > -1: "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-": ! 1): ! 0
                    }
                },
                CHILD: function (a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b; return 1 === d && 0 === e ? function (a) {
                        return ! ! a.parentNode
                    }: function (b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling": "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = ! i && ! h; if (q) {
                            if (f) {
                                while (p) {
                                    l = b; while (l = l[p]) if (h ? l.nodeName.toLowerCase() === r: 1 === l.nodeType) return ! 1; o = p = "only" === a && ! o && "nextSibling"
                                }
                                return ! 0
                            }
                            if (o =[g ? q.firstChild: q.lastChild], g && s) {
                                k = q[u] ||(q[u] = {
                                }), j = k[a] ||[], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n]; while (l =++ n && l && l[p] ||(m = n = 0) || o.pop()) if (1 === l.nodeType &&++ m && l === b) {
                                    k[a] =[w, n, m]; break
                                }
                            } else if (s &&(j =(b[u] ||(b[u] = {
                            }))[a]) && j[0] === w) m = j[1]; else while (l =++ n && l && l[p] ||(m = n = 0) || o.pop()) if ((h ? l.nodeName.toLowerCase() === r: 1 === l.nodeType) &&++ m &&(s &&((l[u] ||(l[u] = {
                            }))[a] =[w, m]), l === b)) break; return m -= e, m === d || m % d === 0 && m / d >= 0
                        }
                    }
                },
                PSEUDO: function (a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fb.error("unsupported pseudo: " + a);
                    return e[u] ? e(b): e.length > 1 ?(c =[a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? hb(function (a, c) {
                        var d, f = e(a, b), g = f.length; while (g--) d = K.call(a, f[g]), a[d] = !(c[d] = f[g])
                    }): function (a) {
                        return e(a, 0, c)
                    }): e
                }
            },
            pseudos: {
                not: hb(function (a) {
                    var b =[], c =[], d = h(a.replace(R, "$1"));
                    return d[u] ? hb(function (a, b, c, e) {
                        var f, g = d(a, null, e,[]), h = a.length; while (h--)(f = g[h]) &&(a[h] = !(b[h] = f))
                    }): function (a, e, f) {
                        return b[0] = a, d(b, null, f, c), ! c.pop()
                    }
                }), has: hb(function (a) {
                    return function (b) {
                        return fb(a, b).length > 0
                    }
                }), contains: hb(function (a) {
                    return function (b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                    }
                }), lang: hb(function (a) {
                    return W.test(a || "") || fb.error("unsupported lang: " + a), a = a.replace(cb, db).toLowerCase(), function (b) {
                        var c; do if (c = p ? b.lang: b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                        while ((b = b.parentNode) && 1 === b.nodeType);
                        return ! 1
                    }
                }), target: function (b) {
                    var c = a.location && a.location.hash; return c && c.slice(1) === b.id
                },
                root: function (a) {
                    return a === o
                },
                focus: function (a) {
                    return a === n.activeElement &&(! n.hasFocus || n.hasFocus()) && ! !(a.type || a.href || ~ a.tabIndex)
                },
                enabled: function (a) {
                    return a.disabled === ! 1
                },
                disabled: function (a) {
                    return a.disabled === ! 0
                },
                checked: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && ! ! a.checked || "option" === b && ! ! a.selected
                },
                selected: function (a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === ! 0
                },
                empty: function (a) {
                    for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return ! 1; return ! 0
                },
                parent: function (a) {
                    return ! d.pseudos.empty(a)
                },
                header: function (a) {
                    return Z.test(a.nodeName)
                },
                input: function (a) {
                    return Y.test(a.nodeName)
                },
                button: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function (a) {
                    var b; return "input" === a.nodeName.toLowerCase() && "text" === a.type &&(null ==(b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: nb(function () {
                    return[0]
                }), last: nb(function (a, b) {
                    return[b -1]
                }), eq: nb(function (a, b, c) {
                    return[0 > c ? c + b: c]
                }), even: nb(function (a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }), odd: nb(function (a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }), lt: nb(function (a, b, c) {
                    for (var d = 0 > c ? c + b: c;-- d >= 0;) a.push(d);
                    return a
                }), gt: nb(function (a, b, c) {
                    for (var d = 0 > c ? c + b: c;++ d < b;) a.push(d);
                    return a
                })
            }
        },
        d.pseudos.nth = d.pseudos.eq; for (b in {
            radio: ! 0, checkbox: ! 0, file: ! 0, password: ! 0, image: ! 0
        }) d.pseudos[b] = lb(b);
        for (b in {
            submit: ! 0, reset: ! 0
        }) d.pseudos[b] = mb(b);
        function pb() {
        }
        pb.prototype = d.filters = d.pseudos, d.setFilters = new pb, g = fb.tokenize = function (a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "]; if (k) return b ? 0: k.slice(0);
            h = a, i =[], j = d.preFilter; while (h) {
                (! c ||(e = S.exec(h))) &&(e &&(h = h.slice(e[0].length) || h), i.push(f =[])), c = ! 1,(e = T.exec(h)) &&(c = e.shift(), f.push({
                    value: c, type: e[0].replace(R, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) ||(c = e.shift(), f.push({
                    value: c, type: g, matches: e
                }), h = h.slice(c.length));
                if (! c) break
            }
            return b ? h.length: h ? fb.error(a): z(a, i).slice(0)
        };
        function qb(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value; return d
        }
        function rb(a, b, c) {
            var d = b.dir, e = c && "parentNode" === d, f = x++; return b.first ? function (b, c, f) {
                while (b = b[d]) if (1 === b.nodeType || e) return a(b, c, f)
            }: function (b, c, g) {
                var h, i, j =[w, f]; if (g) {
                    while (b = b[d]) if ((1 === b.nodeType || e) && a(b, c, g)) return ! 0
                } else while (b = b[d]) if (1 === b.nodeType || e) {
                    if (i = b[u] ||(b[u] = {
                    }),(h = i[d]) && h[0] === w && h[1] === f) return j[2] = h[2]; if (i[d] = j, j[2] = a(b, c, g)) return ! 0
                }
            }
        }
        function sb(a) {
            return a.length > 1 ? function (b, c, d) {
                var e = a.length; while (e--) if (! a[e](b, c, d)) return ! 1; return ! 0
            }: a[0]
        }
        function tb(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) fb(a, b[d], c);
            return c
        }
        function ub(a, b, c, d, e) {
            for (var f, g =[], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) &&(! c || c(f, d, e)) &&(g.push(f), j && b.push(h));
            return g
        }
        function vb(a, b, c, d, e, f) {
            return d && ! d[u] &&(d = vb(d)), e && ! e[u] &&(e = vb(e, f)), hb(function (f, g, h, i) {
                var j, k, l, m =[], n =[], o = g.length, p = f || tb(b || "*", h.nodeType ?[h]: h,[]), q = ! a || ! f && b ? p: ub(p, m, a, h, i), r = c ? e ||(f ? a: o || d) ?[]: g: q; if (c && c(q, r, h, i), d) {
                    j = ub(r, n), d(j,[], h, i), k = j.length; while (k--)(l = j[k]) &&(r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j =[], k = r.length; while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r =[], j, i)
                        }
                        k = r.length; while (k--)(l = r[k]) &&(j = e ? K.call(f, l): m[k]) > -1 &&(f[j] = !(g[j] = l))
                    }
                } else r = ub(r === g ? r.splice(o, r.length): r), e ? e(null, g, r, i): I.apply(g, r)
            })
        }
        function wb(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[ " "], i = g ? 1: 0, k = rb(function (a) {
                return a === b
            },
            h, ! 0), l = rb(function (a) {
                return K.call(b, a) > -1
            },
            h, ! 0), m =[ function (a, c, d) {
                return ! g &&(d || c !== j) ||((b = c).nodeType ? k(a, c, d): l(a, c, d))
            }]; f > i; i++) if (c = d.relative[a[i].type]) m =[rb(sb(m), c)]; else {
                if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                    for (e =++ i; f > e; e++) if (d.relative[a[e].type]) break; return vb(i > 1 && sb(m), i > 1 && qb(a.slice(0, i -1).concat({
                        value: " " === a[i -2].type ? "*": ""
                    })).replace(R, "$1"), c, e > i && wb(a.slice(i, e)), f > e && wb(a = a.slice(e)), f > e && qb(a))
                }
                m.push(c)
            }
            return sb(m)
        }
        function xb(a, b) {
            var c = b.length > 0, e = a.length > 0, f = function (f, g, h, i, k) {
                var l, m, o, p = 0, q = "0", r = f &&[], s =[], t = j, u = f || e && d.find.TAG("*", k), v = w += null == t ? 1: Math.random() || .1, x = u.length; for (k &&(j = g !== n && g);
                q !== x && null !=(l = u[q]);
                q++) {
                    if (e && l) {
                        m = 0; while (o = a[m++]) if (o(l, g, h)) {
                            i.push(l);
                            break
                        }
                        k &&(w = v)
                    }
                    c &&((l = ! o && l) && p--, f && r.push(l))
                }
                if (p += q, c && q !== p) {
                    m = 0; while (o = b[m++]) o(r, s, g, h);
                    if (f) {
                        if (p > 0) while (q--) r[q] || s[q] ||(s[q] = G.call(i));
                        s = ub(s)
                    }
                    I.apply(i, s), k && ! f && s.length > 0 && p + b.length > 1 && fb.uniqueSort(i)
                }
                return k &&(w = v, j = t), r
            };
            return c ? hb(f): f
        }
        return h = fb.compile = function (a, b) {
            var c, d =[], e =[], f = A[a + " "]; if (! f) {
                b ||(b = g(a)), c = b.length; while (c--) f = wb(b[c]), f[u] ? d.push(f): e.push(f);
                f = A(a, xb(e, d)), f.selector = a
            }
            return f
        },
        i = fb.select = function (a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a, o = ! f && g(a = n.selector || a);
            if (e = e ||[], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" ===(k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b =(d.find.ID(k.matches[0].replace(cb, db), b) ||[])[0], ! b) return e; n &&(b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                i = X.needsContext.test(a) ? 0: j.length; while (i--) {
                    if (k = j[i], d.relative[l = k.type]) break; if ((m = d.find[l]) &&(f = m(k.matches[0].replace(cb, db), ab.test(j[0].type) && ob(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && qb(j), ! a) return I.apply(e, f), e; break
                    }
                }
            }
            return (n || h(a, o))(f, b, ! p, e, ab.test(a) && ob(b.parentNode) || b), e
        },
        c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = ! ! l, m(), c.sortDetached = ib(function (a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }), ib(function (a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || jb("type|href|height|width", function (a, b, c) {
            return c ? void 0: a.getAttribute(b, "type" === b.toLowerCase() ? 1: 2)
        }), c.attributes && ib(function (a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || jb("value", function (a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0: a.defaultValue
        }), ib(function (a) {
            return null == a.getAttribute("disabled")
        }) || jb(L, function (a, b, c) {
            var d; return c ? void 0: a[b] === ! 0 ? b.toLowerCase():(d = a.getAttributeNode(b)) && d.specified ? d.value: null
        }), fb
    }
    (a);
    m.find = s, m.expr = s.selectors, m.expr[ ":"] = m.expr.pseudos, m.unique = s.uniqueSort, m.text = s.getText, m.isXMLDoc = s.isXML, m.contains = s.contains; var t = m.expr.match.needsContext, u = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, v = /^.[^:#\[\.,]*$/; function w(a, b, c) {
        if (m.isFunction(b)) return m.grep(a, function (a, d) {
            return ! ! b.call(a, d, a) !== c
        });
        if (b.nodeType) return m.grep(a, function (a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (v.test(b)) return m.filter(b, a, c);
            b = m.filter(b, a)
        }
        return m.grep(a, function (a) {
            return m.inArray(a, b) >= 0 !== c
        })
    }
    m.filter = function (a, b, c) {
        var d = b[0]; return c &&(a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? m.find.matchesSelector(d, a) ?[d]:[]: m.find.matches(a, m.grep(b, function (a) {
            return 1 === a.nodeType
        }))
    },
    m.fn.extend({
        find: function (a) {
            var b, c =[], d = this, e = d.length; if ("string" != typeof a) return this.pushStack(m(a).filter(function () {
                for (b = 0; e > b; b++) if (m.contains(d[b], this)) return ! 0
            }));
            for (b = 0; e > b; b++) m.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? m.unique(c): c), c.selector = this.selector ? this.selector + " " + a: a, c
        },
        filter: function (a) {
            return this.pushStack(w(this, a ||[], ! 1))
        },
        not: function (a) {
            return this.pushStack(w(this, a ||[], ! 0))
        },
        is: function (a) {
            return ! ! w(this, "string" == typeof a && t.test(a) ? m(a): a ||[], ! 1).length
        }
    });
    var x, y = a.document, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, A = m.fn.init = function (a, b) {
        var c, d; if (! a) return this; if ("string" == typeof a) {
            if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length -1) && a.length >= 3 ?[ null, a, null]: z.exec(a), ! c || ! c[1] && b) return ! b || b.jquery ?(b || x).find(a): this. constructor (b).find(a);
            if (c[1]) {
                if (b = b instanceof m ? b[0]: b, m.merge(this, m.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b: y, ! 0)), u.test(c[1]) && m.isPlainObject(b)) for (c in b) m.isFunction(this[c]) ? this[c](b[c]): this.attr(c, b[c]);
                return this
            }
            if (d = y.getElementById(c[2]), d && d.parentNode) {
                if (d.id !== c[2]) return x.find(a);
                this.length = 1, this[0] = d
            }
            return this.context = y, this.selector = a, this
        }
        return a.nodeType ?(this.context = this[0] = a, this.length = 1, this): m.isFunction(a) ? "undefined" != typeof x.ready ? x.ready(a): a(m):(void 0 !== a.selector &&(this.selector = a.selector, this.context = a.context), m.makeArray(a, this))
    };
    A.prototype = m.fn, x = m(y);
    var B = /^(?:parents|prev(?:Until|All))/, C = {
        children: ! 0, contents: ! 0, next: ! 0, prev: ! 0
    };
    m.extend({
        dir: function (a, b, c) {
            var d =[], e = a[b]; while (e && 9 !== e.nodeType &&(void 0 === c || 1 !== e.nodeType || ! m(e).is(c))) 1 === e.nodeType && d.push(e), e = e[b]; return d
        },
        sibling: function (a, b) {
            for (var c =[]; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }), m.fn.extend({
        has: function (a) {
            var b, c = m(a, this), d = c.length; return this.filter(function () {
                for (b = 0; d > b; b++) if (m.contains(this, c[b])) return ! 0
            })
        },
        closest: function (a, b) {
            for (var c, d = 0, e = this.length, f =[], g = t.test(a) || "string" != typeof a ? m(a, b || this.context): 0; e > d; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 &&(g ? g.index(c) > -1: 1 === c.nodeType && m.find.matchesSelector(c, a))) {
                f.push(c);
                break
            }
            return this.pushStack(f.length > 1 ? m.unique(f): f)
        },
        index: function (a) {
            return a ? "string" == typeof a ? m.inArray(this[0], m(a)): m.inArray(a.jquery ? a[0]: a, this): this[0] && this[0].parentNode ? this.first().prevAll().length: -1
        },
        add: function (a, b) {
            return this.pushStack(m.unique(m.merge(this. get (), m(a, b))))
        },
        addBack: function (a) {
            return this.add(null == a ? this.prevObject: this.prevObject.filter(a))
        }
    });
    function D(a, b) {
        do a = a[b]; while (a && 1 !== a.nodeType);
        return a
    }
    m.each({
        parent: function (a) {
            var b = a.parentNode; return b && 11 !== b.nodeType ? b: null
        },
        parents: function (a) {
            return m.dir(a, "parentNode")
        },
        parentsUntil: function (a, b, c) {
            return m.dir(a, "parentNode", c)
        },
        next: function (a) {
            return D(a, "nextSibling")
        },
        prev: function (a) {
            return D(a, "previousSibling")
        },
        nextAll: function (a) {
            return m.dir(a, "nextSibling")
        },
        prevAll: function (a) {
            return m.dir(a, "previousSibling")
        },
        nextUntil: function (a, b, c) {
            return m.dir(a, "nextSibling", c)
        },
        prevUntil: function (a, b, c) {
            return m.dir(a, "previousSibling", c)
        },
        siblings: function (a) {
            return m.sibling((a.parentNode || {
            }).firstChild, a)
        },
        children: function (a) {
            return m.sibling(a.firstChild)
        },
        contents: function (a) {
            return m.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document: m.merge([], a.childNodes)
        }
    },
    function (a, b) {
        m.fn[a] = function (c, d) {
            var e = m.map(this, b, c);
            return "Until" !== a.slice(-5) &&(d = c), d && "string" == typeof d &&(e = m.filter(d, e)), this.length > 1 &&(C[a] ||(e = m.unique(e)), B.test(a) &&(e = e.reverse())), this.pushStack(e)
        }
    });
    var E = /\S+/g, F = {
    };
    function G(a) {
        var b = F[a] = {
        };
        return m.each(a.match(E) ||[], function (a, c) {
            b[c] = ! 0
        }), b
    }
    m.Callbacks = function (a) {
        a = "string" == typeof a ? F[a] || G(a): m.extend({
        },
        a);
        var b, c, d, e, f, g, h =[], i = ! a.once &&[], j = function (l) {
            for (c = a.memory && l, d = ! 0, f = g || 0, g = 0, e = h.length, b = ! 0; h && e > f; f++) if (h[f].apply(l[0], l[1]) === ! 1 && a.stopOnFalse) {
                c = ! 1; break
            }
            b = ! 1, h &&(i ? i.length && j(i.shift()): c ? h =[]: k.disable())
        },
        k = {
            add: function () {
                if (h) {
                    var d = h.length;! function f(b) {
                        m.each(b, function (b, c) {
                            var d = m.type(c);
                            "function" === d ? a.unique && k.has(c) || h.push(c): c && c.length && "string" !== d && f(c)
                        })
                    }
                    (arguments), b ? e = h.length: c &&(g = d, j(c))
                }
                return this
            },
            remove: function () {
                return h && m.each(arguments, function (a, c) {
                    var d; while ((d = m.inArray(c, h, d)) > -1) h.splice(d, 1), b &&(e >= d && e--, f >= d && f--)
                }), this
            },
            has: function (a) {
                return a ? m.inArray(a, h) > -1: !(! h || ! h.length)
            },
            empty: function () {
                return h =[], e = 0, this
            },
            disable: function () {
                return h = i = c = void 0, this
            },
            disabled: function () {
                return ! h
            },
            lock: function () {
                return i = void 0, c || k.disable(), this
            },
            locked: function () {
                return ! i
            },
            fireWith: function (a, c) {
                return ! h || d && ! i ||(c = c ||[], c =[a, c.slice ? c.slice(): c], b ? i.push(c): j(c)), this
            },
            fire: function () {
                return k.fireWith(this, arguments), this
            },
            fired: function () {
                return ! ! d
            }
        };
        return k
    },
    m.extend({
        Deferred: function (a) {
            var b =[[ "resolve", "done", m.Callbacks("once memory"), "resolved"],[ "reject", "fail", m.Callbacks("once memory"), "rejected"],[ "notify", "progress", m.Callbacks("memory")]], c = "pending", d = {
                state: function () {
                    return c
                },
                always: function () {
                    return e.done(arguments).fail(arguments), this
                },
                then: function () {
                    var a = arguments; return m.Deferred(function (c) {
                        m.each(b, function (b, f) {
                            var g = m.isFunction(a[b]) && a[b]; e[f[1]](function () {
                                var a = g && g.apply(this, arguments);
                                a && m.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify): c[f[0] + "With"](this === d ? c.promise(): this, g ?[a]: arguments)
                            })
                        }), a = null
                    }).promise()
                },
                promise: function (a) {
                    return null != a ? m.extend(a, d): d
                }
            },
            e = {
            };
            return d.pipe = d.then, m.each(b, function (a, f) {
                var g = f[2], h = f[3]; d[f[1]] = g.add, h && g.add(function () {
                    c = h
                },
                b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
                    return e[f[0] + "With"](this === e ? d: this, arguments), this
                },
                e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function (a) {
            var b = 0, c = d.call(arguments), e = c.length, f = 1 !== e || a && m.isFunction(a.promise) ? e: 0, g = 1 === f ? a: m.Deferred(), h = function (a, b, c) {
                return function (e) {
                    b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments): e, c === i ? g.notifyWith(b, c):-- f || g.resolveWith(b, c)
                }
            },
            i, j, k; if (e > 1) for (i = new Array(e), j = new Array(e), k = new Array(e);
            e > b; b++) c[b] && m.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)):-- f; return f || g.resolveWith(k, c), g.promise()
        }
    });
    var H; m.fn.ready = function (a) {
        return m.ready.promise().done(a), this
    },
    m.extend({
        isReady: ! 1, readyWait: 1, holdReady: function (a) {
            a ? m.readyWait++: m.ready(! 0)
        },
        ready: function (a) {
            if (a === ! 0 ? !-- m.readyWait: ! m.isReady) {
                if (! y.body) return setTimeout(m.ready);
                m.isReady = ! 0, a !== ! 0 &&-- m.readyWait > 0 ||(H.resolveWith(y,[m]), m.fn.triggerHandler &&(m(y).triggerHandler("ready"), m(y).off("ready")))
            }
        }
    });
    function I() {
        y.addEventListener ?(y.removeEventListener("DOMContentLoaded", J, ! 1), a.removeEventListener("load", J, ! 1)):(y.detachEvent("onreadystatechange", J), a.detachEvent("onload", J))
    }
    function J() {
        (y.addEventListener || "load" === event.type || "complete" === y.readyState) &&(I(), m.ready())
    }
    m.ready.promise = function (b) {
        if (! H) if (H = m.Deferred(), "complete" === y.readyState) setTimeout(m.ready); else if (y.addEventListener) y.addEventListener("DOMContentLoaded", J, ! 1), a.addEventListener("load", J, ! 1); else {
            y.attachEvent("onreadystatechange", J), a.attachEvent("onload", J);
            var c = ! 1; try {
                c = null == a.frameElement && y.documentElement
            }
            catch (d) {
            }
            c && c.doScroll && ! function e() {
                if (! m.isReady) {
                    try {
                        c.doScroll("left")
                    }
                    catch (a) {
                        return setTimeout(e, 50)
                    }
                    I(), m.ready()
                }
            }
            ()
        }
        return H.promise(b)
    };
    var K = "undefined", L; for (L in m(k)) break; k.ownLast = "0" !== L, k.inlineBlockNeedsLayout = ! 1, m(function () {
        var a, b, c, d; c = y.getElementsByTagName("body")[0], c && c.style &&(b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K &&(b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", k.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a &&(c.style.zoom = 1)), c.removeChild(d))
    }), function () {
        var a = y.createElement("div");
        if (null == k.deleteExpando) {
            k.deleteExpando = ! 0; try {
                delete a.test
            }
            catch (b) {
                k.deleteExpando = ! 1
            }
        }
        a = null
    }
    (), m.acceptData = function (a) {
        var b = m.noData[(a.nodeName + " ").toLowerCase()], c = + a.nodeType || 1; return 1 !== c && 9 !== c ? ! 1: ! b || b !== ! 0 && a.getAttribute("classid") === b
    };
    var M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, N = /([A-Z])/g; function O(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(N, "-$1").toLowerCase();
            if (c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? ! 0: "false" === c ? ! 1: "null" === c ? null: + c + "" === c ? + c: M.test(c) ? m.parseJSON(c): c
                }
                catch (e) {
                }
                m.data(a, b, c)
            } else c = void 0
        }
        return c
    }
    function P(a) {
        var b; for (b in a) if (("data" !== b || ! m.isEmptyObject(a[b])) && "toJSON" !== b) return ! 1; return ! 0
    }
    function Q(a, b, d, e) {
        if (m.acceptData(a)) {
            var f, g, h = m.expando, i = a.nodeType, j = i ? m.cache: a, k = i ? a[h]: a[h] && h;
            if (k && j[k] &&(e || j[k].data) || void 0 !== d || "string" != typeof b) return k ||(k = i ? a[h] = c.pop() || m.guid++: h), j[k] ||(j[k] = i ? {
            }: {
                toJSON: m.noop
            }),("object" == typeof b || "function" == typeof b) &&(e ? j[k] = m.extend(j[k], b): j[k].data = m.extend(j[k].data, b)), g = j[k], e ||(g.data ||(g.data = {
            }), g = g.data), void 0 !== d &&(g[m.camelCase(b)] = d), "string" == typeof b ?(f = g[b], null == f &&(f = g[m.camelCase(b)])): f = g, f
        }
    }
    function R(a, b, c) {
        if (m.acceptData(a)) {
            var d, e, f = a.nodeType, g = f ? m.cache: a, h = f ? a[m.expando]: m.expando; if (g[h]) {
                if (b &&(d = c ? g[h]: g[h].data)) {
                    m.isArray(b) ? b = b.concat(m.map(b, m.camelCase)): b in d ? b =[b]:(b = m.camelCase(b), b = b in d ?[b]: b.split(" ")), e = b.length; while (e--) delete d[b[e]]; if (c ? ! P(d): ! m.isEmptyObject(d)) return
                }
                (c ||(delete g[h].data, P(g[h]))) &&(f ? m.cleanData([a], ! 0): k.deleteExpando || g != g.window ? delete g[h]: g[h] = null)
            }
        }
    }
    m.extend({
        cache: {
        },
        noData: {
            "applet ": ! 0, "embed ": ! 0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function (a) {
            return a = a.nodeType ? m.cache[a[m.expando]]: a[m.expando], ! ! a && ! P(a)
        },
        data: function (a, b, c) {
            return Q(a, b, c)
        },
        removeData: function (a, b) {
            return R(a, b)
        },
        _data: function (a, b, c) {
            return Q(a, b, c, ! 0)
        },
        _removeData: function (a, b) {
            return R(a, b, ! 0)
        }
    }), m.fn.extend({
        data: function (a, b) {
            var c, d, e, f = this[0], g = f && f.attributes; if (void 0 === a) {
                if (this.length &&(e = m.data(f), 1 === f.nodeType && ! m._data(f, "parsedAttrs"))) {
                    c = g.length; while (c--) g[c] &&(d = g[c].name, 0 === d.indexOf("data-") &&(d = m.camelCase(d.slice(5)), O(f, d, e[d])));
                    m._data(f, "parsedAttrs", ! 0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function () {
                m.data(this, a)
            }): arguments.length > 1 ? this.each(function () {
                m.data(this, a, b)
            }): f ? O(f, a, m.data(f, a)): void 0
        },
        removeData: function (a) {
            return this.each(function () {
                m.removeData(this, a)
            })
        }
    }), m.extend({
        queue: function (a, b, c) {
            var d; return a ?(b =(b || "fx") + "queue", d = m._data(a, b), c &&(! d || m.isArray(c) ? d = m._data(a, b, m.makeArray(c)): d.push(c)), d ||[]): void 0
        },
        dequeue: function (a, b) {
            b = b || "fx"; var c = m.queue(a, b), d = c.length, e = c.shift(), f = m._queueHooks(a, b), g = function () {
                m.dequeue(a, b)
            };
            "inprogress" === e &&(e = c.shift(), d--), e &&("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), ! d && f && f.empty.fire()
        },
        _queueHooks: function (a, b) {
            var c = b + "queueHooks"; return m._data(a, c) || m._data(a, c, {
                empty: m.Callbacks("once memory").add(function () {
                    m._removeData(a, b + "queue"), m._removeData(a, c)
                })
            })
        }
    }), m.fn.extend({
        queue: function (a, b) {
            var c = 2; return "string" != typeof a &&(b = a, a = "fx", c--), arguments.length < c ? m.queue(this[0], a): void 0 === b ? this: this.each(function () {
                var c = m.queue(this, a, b);
                m._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && m.dequeue(this, a)
            })
        },
        dequeue: function (a) {
            return this.each(function () {
                m.dequeue(this, a)
            })
        },
        clearQueue: function (a) {
            return this.queue(a || "fx",[])
        },
        promise: function (a, b) {
            var c, d = 1, e = m.Deferred(), f = this, g = this.length, h = function () {-- d || e.resolveWith(f,[f])
            };
            "string" != typeof a &&(b = a, a = void 0), a = a || "fx"; while (g--) c = m._data(f[g], a + "queueHooks"), c && c.empty &&(d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, T =[ "Top", "Right", "Bottom", "Left"], U = function (a, b) {
        return a = b || a, "none" === m.css(a, "display") || ! m.contains(a.ownerDocument, a)
    },
    V = m.access = function (a, b, c, d, e, f, g) {
        var h = 0, i = a.length, j = null == c; if ("object" === m.type(c)) {
            e = ! 0; for (h in c) m.access(a, b, h, c[h], ! 0, f, g)
        } else if (void 0 !== d &&(e = ! 0, m.isFunction(d) ||(g = ! 0), j &&(g ?(b.call(a, d), b = null):(j = b, b = function (a, b, c) {
            return j.call(m(a), c)
        })), b)) for (; i > h; h++) b(a[h], c, g ? d: d.call(a[h], h, b(a[h], c)));
        return e ? a: j ? b.call(a): i ? b(a[0], c): f
    },
    W = /^(?:checkbox|radio)$/i;! function () {
        var a = y.createElement("input"), b = y.createElement("div"), c = y.createDocumentFragment();
        if (b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", k.leadingWhitespace = 3 === b.firstChild.nodeType, k.tbody = ! b.getElementsByTagName("tbody").length, k.htmlSerialize = ! ! b.getElementsByTagName("link").length, k.html5Clone = "<:nav></:nav>" !== y.createElement("nav").cloneNode(! 0).outerHTML, a.type = "checkbox", a.checked = ! 0, c.appendChild(a), k.appendChecked = a.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = ! ! b.cloneNode(! 0).lastChild.defaultValue, c.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", k.checkClone = b.cloneNode(! 0).cloneNode(! 0).lastChild.checked, k.noCloneEvent = ! 0, b.attachEvent &&(b.attachEvent("onclick", function () {
            k.noCloneEvent = ! 1
        }), b.cloneNode(! 0).click()), null == k.deleteExpando) {
            k.deleteExpando = ! 0; try {
                delete b.test
            }
            catch (d) {
                k.deleteExpando = ! 1
            }
        }
    }
    (), function () {
        var b, c, d = y.createElement("div");
        for (b in {
            submit: ! 0, change: ! 0, focusin: ! 0
        }) c = "on" + b,(k[b + "Bubbles"] = c in a) ||(d.setAttribute(c, "t"), k[b + "Bubbles"] = d.attributes[c].expando === ! 1);
        d = null
    }
    ();
    var X = /^(?:input|select|textarea)$/i, Y = /^key/, Z = /^(?:mouse|pointer|contextmenu)|click/, $ = /^(?:focusinfocus|focusoutblur)$/, _ = /^([^.]*)(?:\.(.+)|)$/; function ab() {
        return ! 0
    }
    function bb() {
        return ! 1
    }
    function cb() {
        try {
            return y.activeElement
        }
        catch (a) {
        }
    }
    m.event = {
        global: {
        },
        add: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, n, o, p, q, r = m._data(a);
            if (r) {
                c.handler &&(i = c, c = i.handler, e = i.selector), c.guid ||(c.guid = m.guid++),(g = r.events) ||(g = r.events = {
                }),(k = r.handle) ||(k = r.handle = function (a) {
                    return typeof m === K || a && m.event.triggered === a.type ? void 0: m.event.dispatch.apply(k.elem, arguments)
                },
                k.elem = a), b =(b || "").match(E) ||[ ""], h = b.length; while (h--) f = _.exec(b[h]) ||[], o = q = f[1], p =(f[2] || "").split(".").sort(), o &&(j = m.event.special[o] || {
                },
                o =(e ? j.delegateType: j.bindType) || o, j = m.event.special[o] || {
                },
                l = m.extend({
                    type: o, origType: q, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && m.expr.match.needsContext.test(e), namespace: p.join(".")
                },
                i),(n = g[o]) ||(n = g[o] =[], n.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== ! 1 ||(a.addEventListener ? a.addEventListener(o, k, ! 1): a.attachEvent && a.attachEvent("on" + o, k))), j.add &&(j.add.call(a, l), l.handler.guid ||(l.handler.guid = c.guid)), e ? n.splice(n.delegateCount++, 0, l): n.push(l), m.event.global[o] = ! 0);
                a = null
            }
        },
        remove: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, n, o, p, q, r = m.hasData(a) && m._data(a);
            if (r &&(k = r.events)) {
                b =(b || "").match(E) ||[ ""], j = b.length; while (j--) if (h = _.exec(b[j]) ||[], o = q = h[1], p =(h[2] || "").split(".").sort(), o) {
                    l = m.event.special[o] || {
                    },
                    o =(d ? l.delegateType: l.bindType) || o, n = k[o] ||[], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = n.length; while (f--) g = n[f], ! e && q !== g.origType || c && c.guid !== g.guid || h && ! h.test(g.namespace) || d && d !== g.selector &&("**" !== d || ! g.selector) ||(n.splice(f, 1), g.selector && n.delegateCount--, l.remove && l.remove.call(a, g));
                    i && ! n.length &&(l.teardown && l.teardown.call(a, p, r.handle) !== ! 1 || m.removeEvent(a, o, r.handle), delete k[o])
                } else for (o in k) m.event.remove(a, o + b[j], c, d, ! 0);
                m.isEmptyObject(k) &&(delete r.handle, m._removeData(a, "events"))
            }
        },
        trigger: function (b, c, d, e) {
            var f, g, h, i, k, l, n, o =[d || y], p = j.call(b, "type") ? b.type: b, q = j.call(b, "namespace") ? b.namespace.split("."):[]; if (h = l = d = d || y, 3 !== d.nodeType && 8 !== d.nodeType && ! $.test(p + m.event.triggered) &&(p.indexOf(".") >= 0 &&(q = p.split("."), p = q.shift(), q.sort()), g = p.indexOf(":") < 0 && "on" + p, b = b[m.expando] ? b: new m.Event(p, "object" == typeof b && b), b.isTrigger = e ? 2: 3, b.namespace = q.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)"): null, b.result = void 0, b.target ||(b.target = d), c = null == c ?[b]: m.makeArray(c,[b]), k = m.event.special[p] || {
            },
            e || ! k.trigger || k.trigger.apply(d, c) !== ! 1)) {
                if (! e && ! k.noBubble && ! m.isWindow(d)) {
                    for (i = k.delegateType || p, $.test(i + p) ||(h = h.parentNode);
                    h; h = h.parentNode) o.push(h), l = h; l ===(d.ownerDocument || y) && o.push(l.defaultView || l.parentWindow || a)
                }
                n = 0; while ((h = o[n++]) && ! b.isPropagationStopped()) b.type = n > 1 ? i: k.bindType || p, f =(m._data(h, "events") || {
                })[b.type] && m._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && m.acceptData(h) &&(b.result = f.apply(h, c), b.result === ! 1 && b.preventDefault());
                if (b.type = p, ! e && ! b.isDefaultPrevented() &&(! k._default || k._default.apply(o.pop(), c) === ! 1) && m.acceptData(d) && g && d[p] && ! m.isWindow(d)) {
                    l = d[g], l &&(d[g] = null), m.event.triggered = p; try {
                        d[p]()
                    }
                    catch (r) {
                    }
                    m.event.triggered = void 0, l &&(d[g] = l)
                }
                return b.result
            }
        },
        dispatch: function (a) {
            a = m.event.fix(a);
            var b, c, e, f, g, h =[], i = d.call(arguments), j =(m._data(this, "events") || {
            })[a.type] ||[], k = m.event.special[a.type] || {
            };
            if (i[0] = a, a.delegateTarget = this, ! k.preDispatch || k.preDispatch.call(this, a) !== ! 1) {
                h = m.event.handlers.call(this, a, j), b = 0; while ((f = h[b++]) && ! a.isPropagationStopped()) {
                    a.currentTarget = f.elem, g = 0; while ((e = f.handlers[g++]) && ! a.isImmediatePropagationStopped())(! a.namespace_re || a.namespace_re.test(e.namespace)) &&(a.handleObj = e, a.data = e.data, c =((m.event.special[e.origType] || {
                    }).handle || e.handler).apply(f.elem, i), void 0 !== c &&(a.result = c) === ! 1 &&(a.preventDefault(), a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function (a, b) {
            var c, d, e, f, g =[], h = b.delegateCount, i = a.target; if (h && i.nodeType &&(! a.button || "click" !== a.type)) for (; i != this; i = i.parentNode || this) if (1 === i.nodeType &&(i.disabled !== ! 0 || "click" !== a.type)) {
                for (e =[], f = 0; h > f; f++) d = b[f], c = d.selector + " ", void 0 === e[c] &&(e[c] = d.needsContext ? m(c, this).index(i) >= 0: m.find(c, this, null,[i]).length), e[c] && e.push(d);
                e.length && g.push({
                    elem: i, handlers: e
                })
            }
            return h < b.length && g.push({
                elem: this, handlers: b.slice(h)
            }), g
        },
        fix: function (a) {
            if (a[m.expando]) return a; var b, c, d, e = a.type, f = a, g = this.fixHooks[e]; g ||(this.fixHooks[e] = g = Z.test(e) ? this.mouseHooks: Y.test(e) ? this.keyHooks: {
            }), d = g.props ? this.props.concat(g.props): this.props, a = new m.Event(f), b = d.length; while (b--) c = d[b], a[c] = f[c]; return a.target ||(a.target = f.srcElement || y), 3 === a.target.nodeType &&(a.target = a.target.parentNode), a.metaKey = ! ! a.metaKey, g.filter ? g.filter(a, f): a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {
        },
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (a, b) {
                return null == a.which &&(a.which = null != b.charCode ? b.charCode: b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function (a, b) {
                var c, d, e, f = b.button, g = b.fromElement; return null == a.pageX && null != b.clientX &&(d = a.target.ownerDocument || y, e = d.documentElement, c = d.body, a.pageX = b.clientX +(e && e.scrollLeft || c && c.scrollLeft || 0) -(e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY +(e && e.scrollTop || c && c.scrollTop || 0) -(e && e.clientTop || c && c.clientTop || 0)), ! a.relatedTarget && g &&(a.relatedTarget = g === a.target ? b.toElement: g), a.which || void 0 === f ||(a.which = 1 & f ? 1: 2 & f ? 3: 4 & f ? 2: 0), a
            }
        },
        special: {
            load: {
                noBubble: ! 0
            },
            focus: {
                trigger: function () {
                    if (this !== cb() && this.focus) try {
                        return this.focus(), ! 1
                    }
                    catch (a) {
                    }
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    return this === cb() && this.blur ?(this.blur(), ! 1): void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    return m.nodeName(this, "input") && "checkbox" === this.type && this.click ?(this.click(), ! 1): void 0
                },
                _default: function (a) {
                    return m.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (a) {
                    void 0 !== a.result && a.originalEvent &&(a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function (a, b, c, d) {
            var e = m.extend(new m.Event, c, {
                type: a, isSimulated: ! 0, originalEvent: {
                }
            });
            d ? m.event.trigger(e, null, b): m.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    },
    m.removeEvent = y.removeEventListener ? function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, ! 1)
    }: function (a, b, c) {
        var d = "on" + b; a.detachEvent &&(typeof a[d] === K &&(a[d] = null), a.detachEvent(d, c))
    },
    m.Event = function (a, b) {
        return this instanceof m.Event ?(a && a.type ?(this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === ! 1 ? ab: bb): this.type = a, b && m.extend(this, b), this.timeStamp = a && a.timeStamp || m.now(), void (this[m.expando] = ! 0)): new m.Event(a, b)
    },
    m.Event.prototype = {
        isDefaultPrevented: bb, isPropagationStopped: bb, isImmediatePropagationStopped: bb, preventDefault: function () {
            var a = this.originalEvent; this.isDefaultPrevented = ab, a &&(a.preventDefault ? a.preventDefault(): a.returnValue = ! 1)
        },
        stopPropagation: function () {
            var a = this.originalEvent; this.isPropagationStopped = ab, a &&(a.stopPropagation && a.stopPropagation(), a.cancelBubble = ! 0)
        },
        stopImmediatePropagation: function () {
            var a = this.originalEvent; this.isImmediatePropagationStopped = ab, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    },
    m.each({
        mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout"
    },
    function (a, b) {
        m.event.special[a] = {
            delegateType: b, bindType: b, handle: function (a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj; return (! e || e !== d && ! m.contains(d, e)) &&(a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), k.submitBubbles ||(m.event.special.submit = {
        setup: function () {
            return m.nodeName(this, "form") ? ! 1: void m.event.add(this, "click._submit keypress._submit", function (a) {
                var b = a.target, c = m.nodeName(b, "input") || m.nodeName(b, "button") ? b.form: void 0; c && ! m._data(c, "submitBubbles") &&(m.event.add(c, "submit._submit", function (a) {
                    a._submit_bubble = ! 0
                }), m._data(c, "submitBubbles", ! 0))
            })
        },
        postDispatch: function (a) {
            a._submit_bubble &&(delete a._submit_bubble, this.parentNode && ! a.isTrigger && m.event.simulate("submit", this.parentNode, a, ! 0))
        },
        teardown: function () {
            return m.nodeName(this, "form") ? ! 1: void m.event.remove(this, "._submit")
        }
    }), k.changeBubbles ||(m.event.special.change = {
        setup: function () {
            return X.test(this.nodeName) ?(("checkbox" === this.type || "radio" === this.type) &&(m.event.add(this, "propertychange._change", function (a) {
                "checked" === a.originalEvent.propertyName &&(this._just_changed = ! 0)
            }), m.event.add(this, "click._change", function (a) {
                this._just_changed && ! a.isTrigger &&(this._just_changed = ! 1), m.event.simulate("change", this, a, ! 0)
            })), ! 1): void m.event.add(this, "beforeactivate._change", function (a) {
                var b = a.target; X.test(b.nodeName) && ! m._data(b, "changeBubbles") &&(m.event.add(b, "change._change", function (a) { ! this.parentNode || a.isSimulated || a.isTrigger || m.event.simulate("change", this.parentNode, a, ! 0)
                }), m._data(b, "changeBubbles", ! 0))
            })
        },
        handle: function (a) {
            var b = a.target; return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments): void 0
        },
        teardown: function () {
            return m.event.remove(this, "._change"), ! X.test(this.nodeName)
        }
    }), k.focusinBubbles || m.each({
        focus: "focusin", blur: "focusout"
    },
    function (a, b) {
        var c = function (a) {
            m.event.simulate(b, a.target, m.event.fix(a), ! 0)
        };
        m.event.special[b] = {
            setup: function () {
                var d = this.ownerDocument || this, e = m._data(d, b);
                e || d.addEventListener(a, c, ! 0), m._data(d, b,(e || 0) + 1)
            },
            teardown: function () {
                var d = this.ownerDocument || this, e = m._data(d, b) -1; e ? m._data(d, b, e):(d.removeEventListener(a, c, ! 0), m._removeData(d, b))
            }
        }
    }), m.fn.extend({
        on: function (a, b, c, d, e) {
            var f, g; if ("object" == typeof a) {
                "string" != typeof b &&(c = c || b, b = void 0);
                for (f in a) this.on(f, b, c, a[f], e);
                return this
            }
            if (null == c && null == d ?(d = b, c = b = void 0): null == d &&("string" == typeof b ?(d = c, c = void 0):(d = c, c = b, b = void 0)), d === ! 1) d = bb; else if (! d) return this; return 1 === e &&(g = d, d = function (a) {
                return m().off(a), g.apply(this, arguments)
            },
            d.guid = g.guid ||(g.guid = m.guid++)), this.each(function () {
                m.event.add(this, a, d, c, b)
            })
        },
        one: function (a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function (a, b, c) {
            var d, e; if (a && a.preventDefault && a.handleObj) return d = a.handleObj, m(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace: d.origType, d.selector, d.handler), this; if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return (b === ! 1 || "function" == typeof b) &&(c = b, b = void 0), c === ! 1 &&(c = bb), this.each(function () {
                m.event.remove(this, a, c, b)
            })
        },
        trigger: function (a, b) {
            return this.each(function () {
                m.event.trigger(a, b, this)
            })
        },
        triggerHandler: function (a, b) {
            var c = this[0]; return c ? m.event.trigger(a, b, c, ! 0): void 0
        }
    });
    function db(a) {
        var b = eb.split("|"), c = a.createDocumentFragment();
        if (c.createElement) while (b.length) c.createElement(b.pop());
        return c
    }
    var eb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", fb = / jQuery\d+="(?:null|\d+)"/g, gb = new RegExp("<(?:" + eb + ")[\\s/>]", "i"), hb = /^\s+/, ib = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, jb = /<([\w:]+)/, kb = /<tbody/i, lb = /<|&#?\w+;/, mb = /<(?:script|style|link)/i, nb = /checked\s*(?:[^=]|=\s*.checked.)/i, ob = /^$|\/(?:java|ecma)script/i, pb = /^true\/(.*)/, qb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, rb = {
        option:[1, "<select multiple='multiple'>", "</select>"], legend:[1, "<fieldset>", "</fieldset>"], area:[1, "<map>", "</map>"], param:[1, "<object>", "</object>"], thead:[1, "<table>", "</table>"], tr:[2, "<table><tbody>", "</tbody></table>"], col:[2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td:[3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: k.htmlSerialize ?[0, "", ""]:[1, "X<div>", "</div>"]
    },
    sb = db(y), tb = sb.appendChild(y.createElement("div"));
    rb.optgroup = rb.option, rb.tbody = rb.tfoot = rb.colgroup = rb.caption = rb.thead, rb.th = rb.td; function ub(a, b) {
        var c, d, e = 0, f = typeof a.getElementsByTagName !== K ? a.getElementsByTagName(b || "*"): typeof a.querySelectorAll !== K ? a.querySelectorAll(b || "*"): void 0; if (! f) for (f =[], c = a.childNodes || a; null !=(d = c[e]);
        e++) ! b || m.nodeName(d, b) ? f.push(d): m.merge(f, ub(d, b));
        return void 0 === b || b && m.nodeName(a, b) ? m.merge([a], f): f
    }
    function vb(a) {
        W.test(a.type) &&(a.defaultChecked = a.checked)
    }
    function wb(a, b) {
        return m.nodeName(a, "table") && m.nodeName(11 !== b.nodeType ? b: b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")): a
    }
    function xb(a) {
        return a.type =(null !== m.find.attr(a, "type")) + "/" + a.type, a
    }
    function yb(a) {
        var b = pb.exec(a.type);
        return b ? a.type = b[1]: a.removeAttribute("type"), a
    }
    function zb(a, b) {
        for (var c, d = 0; null !=(c = a[d]);
        d++) m._data(c, "globalEval", ! b || m._data(b[d], "globalEval"))
    }
    function Ab(a, b) {
        if (1 === b.nodeType && m.hasData(a)) {
            var c, d, e, f = m._data(a), g = m._data(b, f), h = f.events; if (h) {
                delete g.handle, g.events = {
                };
                for (c in h) for (d = 0, e = h[c].length; e > d; d++) m.event.add(b, c, h[c][d])
            }
            g.data &&(g.data = m.extend({
            },
            g.data))
        }
    }
    function Bb(a, b) {
        var c, d, e; if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), ! k.noCloneEvent && b[m.expando]) {
                e = m._data(b);
                for (d in e.events) m.removeEvent(b, d, e.handle);
                b.removeAttribute(m.expando)
            }
            "script" === c && b.text !== a.text ?(xb(b).text = a.text, yb(b)): "object" === c ?(b.parentNode &&(b.outerHTML = a.outerHTML), k.html5Clone && a.innerHTML && ! m.trim(b.innerHTML) &&(b.innerHTML = a.innerHTML)): "input" === c && W.test(a.type) ?(b.defaultChecked = b.checked = a.checked, b.value !== a.value &&(b.value = a.value)): "option" === c ? b.defaultSelected = b.selected = a.defaultSelected:("input" === c || "textarea" === c) &&(b.defaultValue = a.defaultValue)
        }
    }
    m.extend({
        clone: function (a, b, c) {
            var d, e, f, g, h, i = m.contains(a.ownerDocument, a);
            if (k.html5Clone || m.isXMLDoc(a) || ! gb.test("<" + a.nodeName + ">") ? f = a.cloneNode(! 0):(tb.innerHTML = a.outerHTML, tb.removeChild(f = tb.firstChild)), !(k.noCloneEvent && k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || m.isXMLDoc(a))) for (d = ub(f), h = ub(a), g = 0; null !=(e = h[g]);++ g) d[g] && Bb(e, d[g]);
            if (b) if (c) for (h = h || ub(a), d = d || ub(f), g = 0; null !=(e = h[g]);
            g++) Ab(e, d[g]); else Ab(a, f);
            return d = ub(f, "script"), d.length > 0 && zb(d, ! i && ub(a, "script")), d = h = e = null, f
        },
        buildFragment: function (a, b, c, d) {
            for (var e, f, g, h, i, j, l, n = a.length, o = db(b), p =[], q = 0; n > q; q++) if (f = a[q], f || 0 === f) if ("object" === m.type(f)) m.merge(p, f.nodeType ?[f]: f); else if (lb.test(f)) {
                h = h || o.appendChild(b.createElement("div")), i =(jb.exec(f) ||[ "", ""])[1].toLowerCase(), l = rb[i] || rb._default, h.innerHTML = l[1] + f.replace(ib, "<$1></$2>") + l[2], e = l[0]; while (e--) h = h.lastChild; if (! k.leadingWhitespace && hb.test(f) && p.push(b.createTextNode(hb.exec(f)[0])), ! k.tbody) {
                    f = "table" !== i || kb.test(f) ? "<table>" !== l[1] || kb.test(f) ? 0: h: h.firstChild, e = f && f.childNodes.length; while (e--) m.nodeName(j = f.childNodes[e], "tbody") && ! j.childNodes.length && f.removeChild(j)
                }
                m.merge(p, h.childNodes), h.textContent = ""; while (h.firstChild) h.removeChild(h.firstChild);
                h = o.lastChild
            } else p.push(b.createTextNode(f));
            h && o.removeChild(h), k.appendChecked || m.grep(ub(p, "input"), vb), q = 0; while (f = p[q++]) if ((! d || -1 === m.inArray(f, d)) &&(g = m.contains(f.ownerDocument, f), h = ub(o.appendChild(f), "script"), g && zb(h), c)) {
                e = 0; while (f = h[e++]) ob.test(f.type || "") && c.push(f)
            }
            return h = null, o
        },
        cleanData: function (a, b) {
            for (var d, e, f, g, h = 0, i = m.expando, j = m.cache, l = k.deleteExpando, n = m.event.special; null !=(d = a[h]);
            h++) if ((b || m.acceptData(d)) &&(f = d[i], g = f && j[f])) {
                if (g.events) for (e in g.events) n[e] ? m.event.remove(d, e): m.removeEvent(d, e, g.handle);
                j[f] &&(delete j[f], l ? delete d[i]: typeof d.removeAttribute !== K ? d.removeAttribute(i): d[i] = null, c.push(f))
            }
        }
    }), m.fn.extend({
        text: function (a) {
            return V(this, function (a) {
                return void 0 === a ? m.text(this): this.empty().append((this[0] && this[0].ownerDocument || y).createTextNode(a))
            },
            null, a, arguments.length)
        },
        append: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = wb(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = wb(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function (a, b) {
            for (var c, d = a ? m.filter(a, this): this, e = 0; null !=(c = d[e]);
            e++) b || 1 !== c.nodeType || m.cleanData(ub(c)), c.parentNode &&(b && m.contains(c.ownerDocument, c) && zb(ub(c, "script")), c.parentNode.removeChild(c));
            return this
        },
        empty: function () {
            for (var a, b = 0; null !=(a = this[b]);
            b++) {
                1 === a.nodeType && m.cleanData(ub(a, ! 1));
                while (a.firstChild) a.removeChild(a.firstChild);
                a.options && m.nodeName(a, "select") &&(a.options.length = 0)
            }
            return this
        },
        clone: function (a, b) {
            return a = null == a ? ! 1: a, b = null == b ? a: b, this.map(function () {
                return m.clone(this, a, b)
            })
        },
        html: function (a) {
            return V(this, function (a) {
                var b = this[0] || {
                },
                c = 0, d = this.length; if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(fb, ""): void 0; if (!("string" != typeof a || mb.test(a) || ! k.htmlSerialize && gb.test(a) || ! k.leadingWhitespace && hb.test(a) || rb[(jb.exec(a) ||[ "", ""])[1].toLowerCase()])) {
                    a = a.replace(ib, "<$1></$2>");
                    try {
                        for (; d > c; c++) b = this[c] || {
                        },
                        1 === b.nodeType &&(m.cleanData(ub(b, ! 1)), b.innerHTML = a);
                        b = 0
                    }
                    catch (e) {
                    }
                }
                b && this.empty().append(a)
            },
            null, a, arguments.length)
        },
        replaceWith: function () {
            var a = arguments[0]; return this.domManip(arguments, function (b) {
                a = this.parentNode, m.cleanData(ub(this)), a && a.replaceChild(b, this)
            }), a &&(a.length || a.nodeType) ? this: this.remove()
        },
        detach: function (a) {
            return this.remove(a, ! 0)
        },
        domManip: function (a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0, l = this.length, n = this, o = l -1, p = a[0], q = m.isFunction(p);
            if (q || l > 1 && "string" == typeof p && ! k.checkClone && nb.test(p)) return this.each(function (c) {
                var d = n.eq(c);
                q &&(a[0] = p.call(this, c, d.html())), d.domManip(a, b)
            });
            if (l &&(i = m.buildFragment(a, this[0].ownerDocument, ! 1, this), c = i.firstChild, 1 === i.childNodes.length &&(i = c), c)) {
                for (g = m.map(ub(i, "script"), xb), f = g.length; l > j; j++) d = i, j !== o &&(d = m.clone(d, ! 0, ! 0), f && m.merge(g, ub(d, "script"))), b.call(this[j], d, j);
                if (f) for (h = g[g.length -1].ownerDocument, m.map(g, yb), j = 0; f > j; j++) d = g[j], ob.test(d.type || "") && ! m._data(d, "globalEval") && m.contains(h, d) &&(d.src ? m._evalUrl && m._evalUrl(d.src): m.globalEval((d.text || d.textContent || d.innerHTML || "").replace(qb, "")));
                i = c = null
            }
            return this
        }
    }), m.each({
        appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith"
    },
    function (a, b) {
        m.fn[a] = function (a) {
            for (var c, d = 0, e =[], g = m(a), h = g.length -1; h >= d; d++) c = d === h ? this: this.clone(! 0), m(g[d])[b](c), f.apply(e, c. get ());
            return this.pushStack(e)
        }
    });
    var Cb, Db = {
    };
    function Eb(b, c) {
        var d, e = m(c.createElement(b)).appendTo(c.body), f = a.getDefaultComputedStyle &&(d = a.getDefaultComputedStyle(e[0])) ? d.display: m.css(e[0], "display");
        return e.detach(), f
    }
    function Fb(a) {
        var b = y, c = Db[a]; return c ||(c = Eb(a, b), "none" !== c && c ||(Cb =(Cb || m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b =(Cb[0].contentWindow || Cb[0].contentDocument).document, b.write(), b.close(), c = Eb(a, b), Cb.detach()), Db[a] = c), c
    } ! function () {
        var a; k.shrinkWrapBlocks = function () {
            if (null != a) return a; a = ! 1; var b, c, d; return c = y.getElementsByTagName("body")[0], c && c.style ?(b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K &&(b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(y.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(d), a): void 0
        }
    }
    ();
    var Gb = /^margin/, Hb = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"), Ib, Jb, Kb = /^(top|right|bottom|left)$/; a.getComputedStyle ?(Ib = function (a) {
        return a.ownerDocument.defaultView.getComputedStyle(a, null)
    },
    Jb = function (a, b, c) {
        var d, e, f, g, h = a.style; return c = c || Ib(a), g = c ? c.getPropertyValue(b) || c[b]: void 0, c &&("" !== g || m.contains(a.ownerDocument, a) ||(g = m.style(a, b)), Hb.test(g) && Gb.test(b) &&(d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g: g + ""
    }): y.documentElement.currentStyle &&(Ib = function (a) {
        return a.currentStyle
    },
    Jb = function (a, b, c) {
        var d, e, f, g, h = a.style; return c = c || Ib(a), g = c ? c[b]: void 0, null == g && h && h[b] &&(g = h[b]), Hb.test(g) && ! Kb.test(b) &&(d = h.left, e = a.runtimeStyle, f = e && e.left, f &&(e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em": g, g = h.pixelLeft + "px", h.left = d, f &&(e.left = f)), void 0 === g ? g: g + "" || "auto"
    });
    function Lb(a, b) {
        return {
            get: function () {
                var c = a();
                if (null != c) return c ? void delete this. get:(this. get = b).apply(this, arguments)
            }
        }
    } ! function () {
        var b, c, d, e, f, g, h; if (b = y.createElement("div"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = d && d.style) {
            c.cssText = "float:left;opacity:.5", k.opacity = "0.5" === c.opacity, k.cssFloat = ! ! c.cssFloat, b.style.backgroundClip = "content-box", b.cloneNode(! 0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === b.style.backgroundClip, k.boxSizing = "" === c.boxSizing || "" === c.MozBoxSizing || "" === c.WebkitBoxSizing, m.extend(k, {
                reliableHiddenOffsets: function () {
                    return null == g && i(), g
                },
                boxSizingReliable: function () {
                    return null == f && i(), f
                },
                pixelPosition: function () {
                    return null == e && i(), e
                },
                reliableMarginRight: function () {
                    return null == h && i(), h
                }
            });
            function i() {
                var b, c, d, i; c = y.getElementsByTagName("body")[0], c && c.style &&(b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), b.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", e = f = ! 1, h = ! 0, a.getComputedStyle &&(e = "1%" !==(a.getComputedStyle(b, null) || {
                }).top, f = "4px" ===(a.getComputedStyle(b, null) || {
                    width: "4px"
                }).width, i = b.appendChild(y.createElement("div")), i.style.cssText = b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", b.style.width = "1px", h = ! parseFloat((a.getComputedStyle(i, null) || {
                }).marginRight)), b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = b.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", g = 0 === i[0].offsetHeight, g &&(i[0].style.display = "", i[1].style.display = "none", g = 0 === i[0].offsetHeight), c.removeChild(d))
            }
        }
    }
    (), m.swap = function (a, b, c, d) {
        var e, f, g = {
        };
        for (f in b) g[f] = a.style[f], a.style[f] = b[f]; e = c.apply(a, d ||[]);
        for (f in b) a.style[f] = g[f]; return e
    };
    var Mb = /alpha\([^)]*\)/i, Nb = /opacity\s*=\s*([^)]*)/, Ob = /^(none|table(?!-c[ea]).+)/, Pb = new RegExp("^(" + S + ")(.*)$", "i"), Qb = new RegExp("^([+-])=(" + S + ")", "i"), Rb = {
        position: "absolute", visibility: "hidden", display: "block"
    },
    Sb = {
        letterSpacing: "0", fontWeight: "400"
    },
    Tb =[ "Webkit", "O", "Moz", "ms"]; function Ub(a, b) {
        if (b in a) return b; var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = Tb.length; while (e--) if (b = Tb[e] + c, b in a) return b; return d
    }
    function Vb(a, b) {
        for (var c, d, e, f =[], g = 0, h = a.length; h > g; g++) d = a[g], d.style &&(f[g] = m._data(d, "olddisplay"), c = d.style.display, b ?(f[g] || "none" !== c ||(d.style.display = ""), "" === d.style.display && U(d) &&(f[g] = m._data(d, "olddisplay", Fb(d.nodeName)))):(e = U(d),(c && "none" !== c || ! e) && m._data(d, "olddisplay", e ? c: m.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style &&(b && "none" !== d.style.display && "" !== d.style.display ||(d.style.display = b ? f[g] || "": "none"));
        return a
    }
    function Wb(a, b, c) {
        var d = Pb.exec(b);
        return d ? Math.max(0, d[1] -(c || 0)) +(d[2] || "px"): b
    }
    function Xb(a, b, c, d, e) {
        for (var f = c ===(d ? "border": "content") ? 4: "width" === b ? 1: 0, g = 0; 4 > f; f += 2) "margin" === c &&(g += m.css(a, c + T[f], ! 0, e)), d ?("content" === c &&(g -= m.css(a, "padding" + T[f], ! 0, e)), "margin" !== c &&(g -= m.css(a, "border" + T[f] + "Width", ! 0, e))):(g += m.css(a, "padding" + T[f], ! 0, e), "padding" !== c &&(g += m.css(a, "border" + T[f] + "Width", ! 0, e)));
        return g
    }
    function Yb(a, b, c) {
        var d = ! 0, e = "width" === b ? a.offsetWidth: a.offsetHeight, f = Ib(a), g = k.boxSizing && "border-box" === m.css(a, "boxSizing", ! 1, f);
        if (0 >= e || null == e) {
            if (e = Jb(a, b, f),(0 > e || null == e) &&(e = a.style[b]), Hb.test(e)) return e; d = g &&(k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + Xb(a, b, c ||(g ? "border": "content"), d, f) + "px"
    }
    m.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = Jb(a, "opacity");
                        return "" === c ? "1": c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: ! 0, fillOpacity: ! 0, flexGrow: ! 0, flexShrink: ! 0, fontWeight: ! 0, lineHeight: ! 0, opacity: ! 0, order: ! 0, orphans: ! 0, widows: ! 0, zIndex: ! 0, zoom: ! 0
        },
        cssProps: {
            "float": k.cssFloat ? "cssFloat": "styleFloat"
        },
        style: function (a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = m.camelCase(b), i = a.style; if (b = m.cssProps[h] ||(m.cssProps[h] = Ub(i, h)), g = m.cssHooks[b] || m.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !==(e = g. get (a, ! 1, d)) ? e: i[b]; if (f = typeof c, "string" === f &&(e = Qb.exec(c)) &&(c =(e[1] + 1) * e[2] + parseFloat(m.css(a, b)), f = "number"), null != c && c === c &&("number" !== f || m.cssNumber[h] ||(c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") ||(i[b] = "inherit"), !(g && "set" in g && void 0 ===(c = g. set (a, c, d))))) try {
                    i[b] = c
                }
                catch (j) {
                }
            }
        },
        css: function (a, b, c, d) {
            var e, f, g, h = m.camelCase(b);
            return b = m.cssProps[h] ||(m.cssProps[h] = Ub(a.style, h)), g = m.cssHooks[b] || m.cssHooks[h], g && "get" in g &&(f = g. get (a, ! 0, c)), void 0 === f &&(f = Jb(a, b, d)), "normal" === f && b in Sb &&(f = Sb[b]), "" === c || c ?(e = parseFloat(f), c === ! 0 || m.isNumeric(e) ? e || 0: f): f
        }
    }), m.each([ "height", "width"], function (a, b) {
        m.cssHooks[b] = {
            get: function (a, c, d) {
                return c ? Ob.test(m.css(a, "display")) && 0 === a.offsetWidth ? m.swap(a, Rb, function () {
                    return Yb(a, b, d)
                }): Yb(a, b, d): void 0
            },
            set: function (a, c, d) {
                var e = d && Ib(a);
                return Wb(a, c, d ? Xb(a, b, d, k.boxSizing && "border-box" === m.css(a, "boxSizing", ! 1, e), e): 0)
            }
        }
    }), k.opacity ||(m.cssHooks.opacity = {
        get: function (a, b) {
            return Nb.test((b && a.currentStyle ? a.currentStyle.filter: a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "": b ? "1": ""
        },
        set: function (a, b) {
            var c = a.style, d = a.currentStyle, e = m.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")": "", f = d && d.filter || c.filter || ""; c.zoom = 1,(b >= 1 || "" === b) && "" === m.trim(f.replace(Mb, "")) && c.removeAttribute &&(c.removeAttribute("filter"), "" === b || d && ! d.filter) ||(c.filter = Mb.test(f) ? f.replace(Mb, e): f + " " + e)
        }
    }), m.cssHooks.marginRight = Lb(k.reliableMarginRight, function (a, b) {
        return b ? m.swap(a, {
            display: "inline-block"
        },
        Jb,[a, "marginRight"]): void 0
    }), m.each({
        margin: "", padding: "", border: "Width"
    },
    function (a, b) {
        m.cssHooks[a + b] = {
            expand: function (c) {
                for (var d = 0, e = {
                },
                f = "string" == typeof c ? c.split(" "):[c]; 4 > d; d++) e[a + T[d] + b] = f[d] || f[d -2] || f[0]; return e
            }
        },
        Gb.test(a) ||(m.cssHooks[a + b]. set = Wb)
    }), m.fn.extend({
        css: function (a, b) {
            return V(this, function (a, b, c) {
                var d, e, f = {
                },
                g = 0; if (m.isArray(b)) {
                    for (d = Ib(a), e = b.length; e > g; g++) f[b[g]] = m.css(a, b[g], ! 1, d);
                    return f
                }
                return void 0 !== c ? m.style(a, b, c): m.css(a, b)
            },
            a, b, arguments.length > 1)
        },
        show: function () {
            return Vb(this, ! 0)
        },
        hide: function () {
            return Vb(this)
        },
        toggle: function (a) {
            return "boolean" == typeof a ? a ? this.show(): this.hide(): this.each(function () {
                U(this) ? m(this).show(): m(this).hide()
            })
        }
    });
    function Zb(a, b, c, d, e) {
        return new Zb.prototype.init(a, b, c, d, e)
    }
    m.Tween = Zb, Zb.prototype = {
        constructor: Zb, init: function (a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f ||(m.cssNumber[c] ? "": "px")
        },
        cur: function () {
            var a = Zb.propHooks[ this.prop]; return a && a. get ? a. get (this): Zb.propHooks._default. get (this)
        },
        run: function (a) {
            var b, c = Zb.propHooks[ this.prop]; return this.pos = b = this.options.duration ? m.easing[ this.easing](a, this.options.duration * a, 0, 1, this.options.duration): a, this.now =(this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c. set ? c. set (this): Zb.propHooks._default. set (this), this
        }
    },
    Zb.prototype.init.prototype = Zb.prototype, Zb.propHooks = {
        _default: {
            get: function (a) {
                var b; return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ?(b = m.css(a.elem, a.prop, ""), b && "auto" !== b ? b: 0): a.elem[a.prop]
            },
            set: function (a) {
                m.fx.step[a.prop] ? m.fx.step[a.prop](a): a.elem.style &&(null != a.elem.style[m.cssProps[a.prop]] || m.cssHooks[a.prop]) ? m.style(a.elem, a.prop, a.now + a.unit): a.elem[a.prop] = a.now
            }
        }
    },
    Zb.propHooks.scrollTop = Zb.propHooks.scrollLeft = {
        set: function (a) {
            a.elem.nodeType && a.elem.parentNode &&(a.elem[a.prop] = a.now)
        }
    },
    m.easing = {
        linear: function (a) {
            return a
        },
        swing: function (a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    },
    m.fx = Zb.prototype.init, m.fx.step = {
    };
    var $b, _b, ac = /^(?:toggle|show|hide)$/, bc = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"), cc = /queueHooks$/, dc =[ic], ec = {
        "*":[ function (a, b) {
            var c = this.createTween(a, b), d = c.cur(), e = bc.exec(b), f = e && e[3] ||(m.cssNumber[a] ? "": "px"), g =(m.cssNumber[a] || "px" !== f && + d) && bc.exec(m.css(c.elem, a)), h = 1, i = 20; if (g && g[3] !== f) {
                f = f || g[3], e = e ||[], g = + d || 1; do h = h || ".5", g /= h, m.style(c.elem, a, g + f);
                while (h !==(h = c.cur() / d) && 1 !== h &&-- i)
            }
            return e &&(g = c.start = + g || + d || 0, c.unit = f, c.end = e[1] ? g +(e[1] + 1) * e[2]: + e[2]), c
        }]
    };
    function fc() {
        return setTimeout(function () {
            $b = void 0
        }), $b = m.now()
    }
    function gc(a, b) {
        var c, d = {
            height: a
        },
        e = 0; for (b = b ? 1: 0; 4 > e; e += 2 - b) c = T[e], d[ "margin" + c] = d[ "padding" + c] = a; return b &&(d.opacity = d.width = a), d
    }
    function hc(a, b, c) {
        for (var d, e =(ec[b] ||[]).concat(ec[ "*"]), f = 0, g = e.length; g > f; f++) if (d = e[f].call(c, b, a)) return d
    }
    function ic(a, b, c) {
        var d, e, f, g, h, i, j, l, n = this, o = {
        },
        p = a.style, q = a.nodeType && U(a), r = m._data(a, "fxshow");
        c.queue ||(h = m._queueHooks(a, "fx"), null == h.unqueued &&(h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
            h.unqueued || i()
        }), h.unqueued++, n.always(function () {
            n.always(function () {
                h.unqueued--, m.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType &&("height" in b || "width" in b) &&(c.overflow =[p.overflow, p.overflowX, p.overflowY], j = m.css(a, "display"), l = "none" === j ? m._data(a, "olddisplay") || Fb(a.nodeName): j, "inline" === l && "none" === m.css(a, "float") &&(k.inlineBlockNeedsLayout && "inline" !== Fb(a.nodeName) ? p.zoom = 1: p.display = "inline-block")), c.overflow &&(p.overflow = "hidden", k.shrinkWrapBlocks() || n.always(function () {
            p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2]
        }));
        for (d in b) if (e = b[d], ac.exec(e)) {
            if (delete b[d], f = f || "toggle" === e, e ===(q ? "hide": "show")) {
                if ("show" !== e || ! r || void 0 === r[d]) continue; q = ! 0
            }
            o[d] = r && r[d] || m.style(a, d)
        } else j = void 0; if (m.isEmptyObject(o)) "inline" ===("none" === j ? Fb(a.nodeName): j) &&(p.display = j); else {
            r ? "hidden" in r &&(q = r.hidden): r = m._data(a, "fxshow", {
            }), f &&(r.hidden = ! q), q ? m(a).show(): n.done(function () {
                m(a).hide()
            }), n.done(function () {
                var b; m._removeData(a, "fxshow");
                for (b in o) m.style(a, b, o[b])
            });
            for (d in o) g = hc(q ? r[d]: 0, d, n), d in r ||(r[d] = g.start, q &&(g.end = g.start, g.start = "width" === d || "height" === d ? 1: 0))
        }
    }
    function jc(a, b) {
        var c, d, e, f, g; for (c in a) if (d = m.camelCase(c), e = b[d], f = a[c], m.isArray(f) &&(e = f[1], f = a[c] = f[0]), c !== d &&(a[d] = f, delete a[c]), g = m.cssHooks[d], g && "expand" in g) {
            f = g.expand(f), delete a[d]; for (c in f) c in a ||(a[c] = f[c], b[c] = e)
        } else b[d] = e
    }
    function kc(a, b, c) {
        var d, e, f = 0, g = dc.length, h = m.Deferred().always(function () {
            delete i.elem
        }), i = function () {
            if (e) return ! 1; for (var b = $b || fc(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
            return h.notifyWith(a,[j, f, c]), 1 > f && i ? c:(h.resolveWith(a,[j]), ! 1)
        },
        j = h.promise({
            elem: a, props: m.extend({
            },
            b), opts: m.extend(! 0, {
                specialEasing: {
                }
            },
            c), originalProperties: b, originalOptions: c, startTime: $b || fc(), duration: c.duration, tweens:[], createTween: function (b, c) {
                var d = m.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d), d
            },
            stop: function (b) {
                var c = 0, d = b ? j.tweens.length: 0; if (e) return this; for (e = ! 0; d > c; c++) j.tweens[c].run(1);
                return b ? h.resolveWith(a,[j, b]): h.rejectWith(a,[j, b]), this
            }
        }), k = j.props; for (jc(k, j.opts.specialEasing);
        g > f; f++) if (d = dc[f].call(j, a, k, j.opts)) return d; return m.map(k, hc, j), m.isFunction(j.opts.start) && j.opts.start.call(a, j), m.fx.timer(m.extend(i, {
            elem: a, anim: j, queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    m.Animation = m.extend(kc, {
        tweener: function (a, b) {
            m.isFunction(a) ?(b = a, a =[ "*"]): a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++) c = a[d], ec[c] = ec[c] ||[], ec[c].unshift(b)
        },
        prefilter: function (a, b) {
            b ? dc.unshift(a): dc.push(a)
        }
    }), m.speed = function (a, b, c) {
        var d = a && "object" == typeof a ? m.extend({
        },
        a): {
            complete: c || ! c && b || m.isFunction(a) && a, duration: a, easing: c && b || b && ! m.isFunction(b) && b
        };
        return d.duration = m.fx.off ? 0: "number" == typeof d.duration ? d.duration: d.duration in m.fx.speeds ? m.fx.speeds[d.duration]: m.fx.speeds._default,(null == d.queue || d.queue === ! 0) &&(d.queue = "fx"), d.old = d.complete, d.complete = function () {
            m.isFunction(d.old) && d.old.call(this), d.queue && m.dequeue(this, d.queue)
        },
        d
    },
    m.fn.extend({
        fadeTo: function (a, b, c, d) {
            return this.filter(U).css("opacity", 0).show().end().animate({
                opacity: b
            },
            a, c, d)
        },
        animate: function (a, b, c, d) {
            var e = m.isEmptyObject(a), f = m.speed(b, c, d), g = function () {
                var b = kc(this, m.extend({
                },
                a), f);
                (e || m._data(this, "finish")) && b.stop(! 0)
            };
            return g.finish = g, e || f.queue === ! 1 ? this.each(g): this.queue(f.queue, g)
        },
        stop: function (a, b, c) {
            var d = function (a) {
                var b = a.stop; delete a.stop, b(c)
            };
            return "string" != typeof a &&(c = b, b = a, a = void 0), b && a !== ! 1 && this.queue(a || "fx",[]), this.each(function () {
                var b = ! 0, e = null != a && a + "queueHooks", f = m.timers, g = m._data(this);
                if (e) g[e] && g[e].stop && d(g[e]); else for (e in g) g[e] && g[e].stop && cc.test(e) && d(g[e]);
                for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a ||(f[e].anim.stop(c), b = ! 1, f.splice(e, 1));
                (b || ! c) && m.dequeue(this, a)
            })
        },
        finish: function (a) {
            return a !== ! 1 &&(a = a || "fx"), this.each(function () {
                var b, c = m._data(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = m.timers, g = d ? d.length: 0; for (c.finish = ! 0, m.queue(this, a,[]), e && e.stop && e.stop.call(this, ! 0), b = f.length; b--;) f[b].elem === this && f[b].queue === a &&(f[b].anim.stop(! 0), f.splice(b, 1));
                for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }), m.each([ "toggle", "show", "hide"], function (a, b) {
        var c = m.fn[b]; m.fn[b] = function (a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments): this.animate(gc(b, ! 0), a, d, e)
        }
    }), m.each({
        slideDown: gc("show"), slideUp: gc("hide"), slideToggle: gc("toggle"), fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    },
    function (a, b) {
        m.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), m.timers =[], m.fx.tick = function () {
        var a, b = m.timers, c = 0; for ($b = m.now();
        c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
        b.length || m.fx.stop(), $b = void 0
    },
    m.fx.timer = function (a) {
        m.timers.push(a), a() ? m.fx.start(): m.timers.pop()
    },
    m.fx.interval = 13, m.fx.start = function () {
        _b ||(_b = setInterval(m.fx.tick, m.fx.interval))
    },
    m.fx.stop = function () {
        clearInterval(_b), _b = null
    },
    m.fx.speeds = {
        slow: 600, fast: 200, _default: 400
    },
    m.fn.delay = function (a, b) {
        return a = m.fx ? m.fx.speeds[a] || a: a, b = b || "fx", this.queue(b, function (b, c) {
            var d = setTimeout(b, a);
            c.stop = function () {
                clearTimeout(d)
            }
        })
    },
    function () {
        var a, b, c, d, e; b = y.createElement("div"), b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = y.createElement("select"), e = c.appendChild(y.createElement("option")), a = b.getElementsByTagName("input")[0], d.style.cssText = "top:1px", k.getSetAttribute = "t" !== b.className, k.style = /top/.test(d.getAttribute("style")), k.hrefNormalized = "/a" === d.getAttribute("href"), k.checkOn = ! ! a.value, k.optSelected = e.selected, k.enctype = ! ! y.createElement("form").enctype, c.disabled = ! 0, k.optDisabled = ! e.disabled, a = y.createElement("input"), a.setAttribute("value", ""), k.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), k.radioValue = "t" === a.value
    }
    ();
    var lc = /\r/g; m.fn.extend({
        val: function (a) {
            var b, c, d, e = this[0]; {
                if (arguments.length) return d = m.isFunction(a), this.each(function (c) {
                    var e; 1 === this.nodeType &&(e = d ? a.call(this, c, m(this).val()): a, null == e ? e = "": "number" == typeof e ? e += "": m.isArray(e) &&(e = m.map(e, function (a) {
                        return null == a ? "": a + ""
                    })), b = m.valHooks[ this.type] || m.valHooks[ this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b. set (this, e, "value") ||(this.value = e))
                });
                if (e) return b = m.valHooks[e.type] || m.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !==(c = b. get (e, "value")) ? c:(c = e.value, "string" == typeof c ? c.replace(lc, ""): null == c ? "": c)
            }
        }
    }), m.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = m.find.attr(a, "value");
                    return null != b ? b: m.trim(m.text(a))
                }
            },
            select: {
                get: function (a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null:[], h = f ? e + 1: d.length, i = 0 > e ? h: f ? e: 0; h > i; i++) if (c = d[i], !(! c.selected && i !== e ||(k.optDisabled ? c.disabled: null !== c.getAttribute("disabled")) || c.parentNode.disabled && m.nodeName(c.parentNode, "optgroup"))) {
                        if (b = m(c).val(), f) return b; g.push(b)
                    }
                    return g
                },
                set: function (a, b) {
                    var c, d, e = a.options, f = m.makeArray(b), g = e.length; while (g--) if (d = e[g], m.inArray(m.valHooks.option. get (d), f) >= 0) try {
                        d.selected = c = ! 0
                    }
                    catch (h) {
                        d.scrollHeight
                    } else d.selected = ! 1; return c ||(a.selectedIndex = -1), e
                }
            }
        }
    }), m.each([ "radio", "checkbox"], function () {
        m.valHooks[ this] = {
            set: function (a, b) {
                return m.isArray(b) ? a.checked = m.inArray(m(a).val(), b) >= 0: void 0
            }
        },
        k.checkOn ||(m.valHooks[ this]. get = function (a) {
            return null === a.getAttribute("value") ? "on": a.value
        })
    });
    var mc, nc, oc = m.expr.attrHandle, pc = /^(?:checked|selected)$/i, qc = k.getSetAttribute, rc = k.input; m.fn.extend({
        attr: function (a, b) {
            return V(this, m.attr, a, b, arguments.length > 1)
        },
        removeAttr: function (a) {
            return this.each(function () {
                m.removeAttr(this, a)
            })
        }
    }), m.extend({
        attr: function (a, b, c) {
            var d, e, f = a.nodeType; if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === K ? m.prop(a, b, c):(1 === f && m.isXMLDoc(a) ||(b = b.toLowerCase(), d = m.attrHooks[b] ||(m.expr.match.bool.test(b) ? nc: mc)), void 0 === c ? d && "get" in d && null !==(e = d. get (a, b)) ? e:(e = m.find.attr(a, b), null == e ? void 0: e): null !== c ? d && "set" in d && void 0 !==(e = d. set (a, c, b)) ? e:(a.setAttribute(b, c + ""), c): void m.removeAttr(a, b))
        },
        removeAttr: function (a, b) {
            var c, d, e = 0, f = b && b.match(E);
            if (f && 1 === a.nodeType) while (c = f[e++]) d = m.propFix[c] || c, m.expr.match.bool.test(c) ? rc && qc || ! pc.test(c) ? a[d] = ! 1: a[m.camelCase("default-" + c)] = a[d] = ! 1: m.attr(a, c, ""), a.removeAttribute(qc ? c: d)
        },
        attrHooks: {
            type: {
                set: function (a, b) {
                    if (! k.radioValue && "radio" === b && m.nodeName(a, "input")) {
                        var c = a.value; return a.setAttribute("type", b), c &&(a.value = c), b
                    }
                }
            }
        }
    }), nc = {
        set: function (a, b, c) {
            return b === ! 1 ? m.removeAttr(a, c): rc && qc || ! pc.test(c) ? a.setAttribute(! qc && m.propFix[c] || c, c): a[m.camelCase("default-" + c)] = a[c] = ! 0, c
        }
    },
    m.each(m.expr.match.bool.source.match(/\w+/g), function (a, b) {
        var c = oc[b] || m.find.attr; oc[b] = rc && qc || ! pc.test(b) ? function (a, b, d) {
            var e, f; return d ||(f = oc[b], oc[b] = e, e = null != c(a, b, d) ? b.toLowerCase(): null, oc[b] = f), e
        }: function (a, b, c) {
            return c ? void 0: a[m.camelCase("default-" + b)] ? b.toLowerCase(): null
        }
    }), rc && qc ||(m.attrHooks.value = {
        set: function (a, b, c) {
            return m.nodeName(a, "input") ? void (a.defaultValue = b): mc && mc. set (a, b, c)
        }
    }), qc ||(mc = {
        set: function (a, b, c) {
            var d = a.getAttributeNode(c);
            return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b: void 0
        }
    },
    oc.id = oc.name = oc.coords = function (a, b, c) {
        var d; return c ? void 0:(d = a.getAttributeNode(b)) && "" !== d.value ? d.value: null
    },
    m.valHooks.button = {
        get: function (a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ? c.value: void 0
        },
        set: mc. set
    },
    m.attrHooks.contenteditable = {
        set: function (a, b, c) {
            mc. set (a, "" === b ? ! 1: b, c)
        }
    },
    m.each([ "width", "height"], function (a, b) {
        m.attrHooks[b] = {
            set: function (a, c) {
                return "" === c ?(a.setAttribute(b, "auto"), c): void 0
            }
        }
    })), k.style ||(m.attrHooks.style = {
        get: function (a) {
            return a.style.cssText || void 0
        },
        set: function (a, b) {
            return a.style.cssText = b + ""
        }
    });
    var sc = /^(?:input|select|textarea|button|object)$/i, tc = /^(?:a|area)$/i; m.fn.extend({
        prop: function (a, b) {
            return V(this, m.prop, a, b, arguments.length > 1)
        },
        removeProp: function (a) {
            return a = m.propFix[a] || a, this.each(function () {
                try {
                    this[a] = void 0, delete this[a]
                }
                catch (b) {
                }
            })
        }
    }), m.extend({
        propFix: {
            "for": "htmlFor", "class": "className"
        },
        prop: function (a, b, c) {
            var d, e, f, g = a.nodeType; if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || ! m.isXMLDoc(a), f &&(b = m.propFix[b] || b, e = m.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !==(d = e. set (a, c, b)) ? d: a[b] = c: e && "get" in e && null !==(d = e. get (a, b)) ? d: a[b]
        },
        propHooks: {
            tabIndex: {
                get: function (a) {
                    var b = m.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10): sc.test(a.nodeName) || tc.test(a.nodeName) && a.href ? 0: -1
                }
            }
        }
    }), k.hrefNormalized || m.each([ "href", "src"], function (a, b) {
        m.propHooks[b] = {
            get: function (a) {
                return a.getAttribute(b, 4)
            }
        }
    }), k.optSelected ||(m.propHooks.selected = {
        get: function (a) {
            var b = a.parentNode; return b &&(b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        }
    }), m.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        m.propFix[ this.toLowerCase()] = this
    }), k.enctype ||(m.propFix.enctype = "encoding");
    var uc = /[\t\r\n\f]/g; m.fn.extend({
        addClass: function (a) {
            var b, c, d, e, f, g, h = 0, i = this.length, j = "string" == typeof a && a; if (m.isFunction(a)) return this.each(function (b) {
                m(this).addClass(a.call(this, b, this.className))
            });
            if (j) for (b =(a || "").match(E) ||[]; i > h; h++) if (c = this[h], d = 1 === c.nodeType &&(c.className ?(" " + c.className + " ").replace(uc, " "): " ")) {
                f = 0; while (e = b[f++]) d.indexOf(" " + e + " ") < 0 &&(d += e + " ");
                g = m.trim(d), c.className !== g &&(c.className = g)
            }
            return this
        },
        removeClass: function (a) {
            var b, c, d, e, f, g, h = 0, i = this.length, j = 0 === arguments.length || "string" == typeof a && a; if (m.isFunction(a)) return this.each(function (b) {
                m(this).removeClass(a.call(this, b, this.className))
            });
            if (j) for (b =(a || "").match(E) ||[]; i > h; h++) if (c = this[h], d = 1 === c.nodeType &&(c.className ?(" " + c.className + " ").replace(uc, " "): "")) {
                f = 0; while (e = b[f++]) while (d.indexOf(" " + e + " ") >= 0) d = d.replace(" " + e + " ", " ");
                g = a ? m.trim(d): "", c.className !== g &&(c.className = g)
            }
            return this
        },
        toggleClass: function (a, b) {
            var c = typeof a; return "boolean" == typeof b && "string" === c ? b ? this.addClass(a): this.removeClass(a): this.each(m.isFunction(a) ? function (c) {
                m(this).toggleClass(a.call(this, c, this.className, b), b)
            }: function () {
                if ("string" === c) {
                    var b, d = 0, e = m(this), f = a.match(E) ||[]; while (b = f[d++]) e.hasClass(b) ? e.removeClass(b): e.addClass(b)
                } else (c === K || "boolean" === c) &&(this.className && m._data(this, "__className__", this.className), this.className = this.className || a === ! 1 ? "": m._data(this, "__className__") || "")
            })
        },
        hasClass: function (a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++) if (1 === this[c].nodeType &&(" " + this[c].className + " ").replace(uc, " ").indexOf(b) >= 0) return ! 0; return ! 1
        }
    }), m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
        m.fn[b] = function (a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c): this.trigger(b)
        }
    }), m.fn.extend({
        hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function (a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function (a, b) {
            return this.off(a, null, b)
        },
        delegate: function (a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function (a, b, c) {
            return 1 === arguments.length ? this.off(a, "**"): this.off(b, a || "**", c)
        }
    });
    var vc = m.now(), wc = /\?/, xc = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g; m.parseJSON = function (b) {
        if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
        var c, d = null, e = m.trim(b + "");
        return e && ! m.trim(e.replace(xc, function (a, b, e, f) {
            return c && b &&(d = 0), 0 === d ? a:(c = e || b, d += ! f - ! e, "")
        })) ? Function ("return " + e)(): m.error("Invalid JSON: " + b)
    },
    m.parseXML = function (b) {
        var c, d; if (! b || "string" != typeof b) return null; try {
            a.DOMParser ?(d = new DOMParser, c = d.parseFromString(b, "text/xml")):(c = new ActiveXObject("Microsoft.XMLDOM"), c. async = "false", c.loadXML(b))
        }
        catch (e) {
            c = void 0
        }
        return c && c.documentElement && ! c.getElementsByTagName("parsererror").length || m.error("Invalid XML: " + b), c
    };
    var yc, zc, Ac = /#.*$/, Bc = /([?&])_=[^&]*/, Cc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Dc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Ec = /^(?:GET|HEAD)$/, Fc = /^\/\//, Gc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Hc = {
    },
    Ic = {
    },
    Jc = "*/".concat("*");
    try {
        zc = location.href
    }
    catch (Kc) {
        zc = y.createElement("a"), zc.href = "", zc = zc.href
    }
    yc = Gc.exec(zc.toLowerCase()) ||[]; function Lc(a) {
        return function (b, c) {
            "string" != typeof b &&(c = b, b = "*");
            var d, e = 0, f = b.toLowerCase().match(E) ||[]; if (m.isFunction(c)) while (d = f[e++]) "+" === d.charAt(0) ?(d = d.slice(1) || "*",(a[d] = a[d] ||[]).unshift(c)):(a[d] = a[d] ||[]).push(c)
        }
    }
    function Mc(a, b, c, d) {
        var e = {
        },
        f = a === Ic; function g(h) {
            var i; return e[h] = ! 0, m.each(a[h] ||[], function (a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j): void 0:(b.dataTypes.unshift(j), g(j), ! 1)
            }), i
        }
        return g(b.dataTypes[0]) || ! e[ "*"] && g("*")
    }
    function Nc(a, b) {
        var c, d, e = m.ajaxSettings.flatOptions || {
        };
        for (d in b) void 0 !== b[d] &&((e[d] ? a: c ||(c = {
        }))[d] = b[d]);
        return c && m.extend(! 0, a, c), a
    }
    function Oc(a, b, c) {
        var d, e, f, g, h = a.contents, i = a.dataTypes; while ("*" === i[0]) i.shift(), void 0 === e &&(e = a.mimeType || b.getResponseHeader("Content-Type"));
        if (e) for (g in h) if (h[g] && h[g].test(e)) {
            i.unshift(g);
            break
        }
        if (i[0] in c) f = i[0]; else {
            for (g in c) {
                if (! i[0] || a.converters[g + " " + i[0]]) {
                    f = g; break
                }
                d ||(d = g)
            }
            f = f || d
        }
        return f ?(f !== i[0] && i.unshift(f), c[f]): void 0
    }
    function Pc(a, b, c, d) {
        var e, f, g, h, i, j = {
        },
        k = a.dataTypes.slice();
        if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g]; f = k.shift();
        while (f) if (a.responseFields[f] &&(c[a.responseFields[f]] = b), ! i && d && a.dataFilter &&(b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i; else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j[ "* " + f], ! g) for (e in j) if (h = e.split(" "), h[1] === f &&(g = j[i + " " + h[0]] || j[ "* " + h[0]])) {
                g === ! 0 ? g = j[e]: j[e] !== ! 0 &&(f = h[0], k.unshift(h[1]));
                break
            }
            if (g !== ! 0) if (g && a[ "throws"]) b = g(b); else try {
                b = g(b)
            }
            catch (l) {
                return {
                    state: "parsererror", error: g ? l: "No conversion from " + i + " to " + f
                }
            }
        }
        return {
            state: "success", data: b
        }
    }
    m.extend({
        active: 0, lastModified: {
        },
        etag: {
        },
        ajaxSettings: {
            url: zc, type: "GET", isLocal: Dc.test(yc[1]), global: ! 0, processData: ! 0, async: ! 0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: {
                "*": Jc, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/, html: /html/, json: /json/
            },
            responseFields: {
                xml: "responseXML", text: "responseText", json: "responseJSON"
            },
            converters: {
                "* text": String, "text html": ! 0, "text json": m.parseJSON, "text xml": m.parseXML
            },
            flatOptions: {
                url: ! 0, context: ! 0
            }
        },
        ajaxSetup: function (a, b) {
            return b ? Nc(Nc(a, m.ajaxSettings), b): Nc(m.ajaxSettings, a)
        },
        ajaxPrefilter: Lc(Hc), ajaxTransport: Lc(Ic), ajax: function (a, b) {
            "object" == typeof a &&(b = a, a = void 0), b = b || {
            };
            var c, d, e, f, g, h, i, j, k = m.ajaxSetup({
            },
            b), l = k.context || k, n = k.context &&(l.nodeType || l.jquery) ? m(l): m.event, o = m.Deferred(), p = m.Callbacks("once memory"), q = k.statusCode || {
            },
            r = {
            },
            s = {
            },
            t = 0, u = "canceled", v = {
                readyState: 0, getResponseHeader: function (a) {
                    var b; if (2 === t) {
                        if (! j) {
                            j = {
                            };
                            while (b = Cc.exec(f)) j[b[1].toLowerCase()] = b[2]
                        }
                        b = j[a.toLowerCase()]
                    }
                    return null == b ? null: b
                },
                getAllResponseHeaders: function () {
                    return 2 === t ? f: null
                },
                setRequestHeader: function (a, b) {
                    var c = a.toLowerCase();
                    return t ||(a = s[c] = s[c] || a, r[a] = b), this
                },
                overrideMimeType: function (a) {
                    return t ||(k.mimeType = a), this
                },
                statusCode: function (a) {
                    var b; if (a) if (2 > t) for (b in a) q[b] =[q[b], a[b]]; else v.always(a[v.status]);
                    return this
                },
                abort: function (a) {
                    var b = a || u; return i && i.abort(b), x(0, b), this
                }
            };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url =((a || k.url || zc) + "").replace(Ac, "").replace(Fc, yc[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = m.trim(k.dataType || "*").toLowerCase().match(E) ||[ ""], null == k.crossDomain &&(c = Gc.exec(k.url.toLowerCase()), k.crossDomain = !(! c || c[1] === yc[1] && c[2] === yc[2] &&(c[3] ||("http:" === c[1] ? "80": "443")) ===(yc[3] ||("http:" === yc[1] ? "80": "443")))), k.data && k.processData && "string" != typeof k.data &&(k.data = m.param(k.data, k.traditional)), Mc(Hc, k, b, v), 2 === t) return v; h = k.global, h && 0 === m.active++ && m.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = ! Ec.test(k.type), e = k.url, k.hasContent ||(k.data &&(e = k.url +=(wc.test(e) ? "&": "?") + k.data, delete k.data), k.cache === ! 1 &&(k.url = Bc.test(e) ? e.replace(Bc, "$1_=" + vc++): e +(wc.test(e) ? "&": "?") + "_=" + vc++)), k.ifModified &&(m.lastModified[e] && v.setRequestHeader("If-Modified-Since", m.lastModified[e]), m.etag[e] && v.setRequestHeader("If-None-Match", m.etag[e])),(k.data && k.hasContent && k.contentType !== ! 1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] +("*" !== k.dataTypes[0] ? ", " + Jc + "; q=0.01": ""): k.accepts[ "*"]);
            for (d in k.headers) v.setRequestHeader(d, k.headers[d]);
            if (k.beforeSend &&(k.beforeSend.call(l, v, k) === ! 1 || 2 === t)) return v.abort();
            u = "abort"; for (d in {
                success: 1, error: 1, complete: 1
            }) v[d](k[d]);
            if (i = Mc(Ic, k, b, v)) {
                v.readyState = 1, h && n.trigger("ajaxSend",[v, k]), k. async && k.timeout > 0 &&(g = setTimeout(function () {
                    v.abort("timeout")
                },
                k.timeout));
                try {
                    t = 1, i.send(r, x)
                }
                catch (w) {
                    if (!(2 > t)) throw w; x(-1, w)
                }
            } else x(-1, "No Transport");
            function x(a, b, c, d) {
                var j, r, s, u, w, x = b; 2 !== t &&(t = 2, g && clearTimeout(g), i = void 0, f = d || "", v.readyState = a > 0 ? 4: 0, j = a >= 200 && 300 > a || 304 === a, c &&(u = Oc(k, v, c)), u = Pc(k, u, v, j), j ?(k.ifModified &&(w = v.getResponseHeader("Last-Modified"), w &&(m.lastModified[e] = w), w = v.getResponseHeader("etag"), w &&(m.etag[e] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent": 304 === a ? x = "notmodified":(x = u.state, r = u.data, s = u.error, j = ! s)):(s = x,(a || ! x) &&(x = "error", 0 > a &&(a = 0))), v.status = a, v.statusText =(b || x) + "", j ? o.resolveWith(l,[r, x, v]): o.rejectWith(l,[v, x, s]), v.statusCode(q), q = void 0, h && n.trigger(j ? "ajaxSuccess": "ajaxError",[v, k, j ? r: s]), p.fireWith(l,[v, x]), h &&(n.trigger("ajaxComplete",[v, k]),-- m.active || m.event.trigger("ajaxStop")))
            }
            return v
        },
        getJSON: function (a, b, c) {
            return m. get (a, b, c, "json")
        },
        getScript: function (a, b) {
            return m. get (a, void 0, b, "script")
        }
    }), m.each([ "get", "post"], function (a, b) {
        m[b] = function (a, c, d, e) {
            return m.isFunction(c) &&(e = e || d, d = c, c = void 0), m.ajax({
                url: a, type: b, dataType: e, data: c, success: d
            })
        }
    }), m.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
        m.fn[b] = function (a) {
            return this.on(b, a)
        }
    }), m._evalUrl = function (a) {
        return m.ajax({
            url: a, type: "GET", dataType: "script", async: ! 1, global: ! 1, "throws": ! 0
        })
    },
    m.fn.extend({
        wrapAll: function (a) {
            if (m.isFunction(a)) return this.each(function (b) {
                m(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = m(a, this[0].ownerDocument).eq(0).clone(! 0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                    var a = this; while (a.firstChild && 1 === a.firstChild.nodeType) a = a.firstChild; return a
                }).append(this)
            }
            return this
        },
        wrapInner: function (a) {
            return this.each(m.isFunction(a) ? function (b) {
                m(this).wrapInner(a.call(this, b))
            }: function () {
                var b = m(this), c = b.contents();
                c.length ? c.wrapAll(a): b.append(a)
            })
        },
        wrap: function (a) {
            var b = m.isFunction(a);
            return this.each(function (c) {
                m(this).wrapAll(b ? a.call(this, c): a)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                m.nodeName(this, "body") || m(this).replaceWith(this.childNodes)
            }).end()
        }
    }), m.expr.filters.hidden = function (a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0 || ! k.reliableHiddenOffsets() && "none" ===(a.style && a.style.display || m.css(a, "display"))
    },
    m.expr.filters.visible = function (a) {
        return ! m.expr.filters.hidden(a)
    };
    var Qc = /%20/g, Rc = /\[\]$/, Sc = /\r?\n/g, Tc = /^(?:submit|button|image|reset|file)$/i, Uc = /^(?:input|select|textarea|keygen)/i; function Vc(a, b, c, d) {
        var e; if (m.isArray(b)) m.each(b, function (b, e) {
            c || Rc.test(a) ? d(a, e): Vc(a + "[" +("object" == typeof e ? b: "") + "]", e, c, d)
        }); else if (c || "object" !== m.type(b)) d(a, b); else for (e in b) Vc(a + "[" + e + "]", b[e], c, d)
    }
    m.param = function (a, b) {
        var c, d =[], e = function (a, b) {
            b = m.isFunction(b) ? b(): null == b ? "": b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        if (void 0 === b &&(b = m.ajaxSettings && m.ajaxSettings.traditional), m.isArray(a) || a.jquery && ! m.isPlainObject(a)) m.each(a, function () {
            e(this.name, this.value)
        }); else for (c in a) Vc(c, a[c], b, e);
        return d.join("&").replace(Qc, "+")
    },
    m.fn.extend({
        serialize: function () {
            return m.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var a = m.prop(this, "elements");
                return a ? m.makeArray(a): this
            }).filter(function () {
                var a = this.type; return this.name && ! m(this).is(":disabled") && Uc.test(this.nodeName) && ! Tc.test(a) &&(this.checked || ! W.test(a))
            }).map(function (a, b) {
                var c = m(this).val();
                return null == c ? null: m.isArray(c) ? m.map(c, function (a) {
                    return {
                        name: b.name, value: a.replace(Sc, "\r\n")
                    }
                }): {
                    name: b.name, value: c.replace(Sc, "\r\n")
                }
            }). get ()
        }
    }), m.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function () {
        return ! this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Zc() || $c()
    }: Zc; var Wc = 0, Xc = {
    },
    Yc = m.ajaxSettings.xhr();
    a.ActiveXObject && m(a).on("unload", function () {
        for (var a in Xc) Xc[a](void 0, ! 0)
    }), k.cors = ! ! Yc && "withCredentials" in Yc, Yc = k.ajax = ! ! Yc, Yc && m.ajaxTransport(function (a) {
        if (! a.crossDomain || k.cors) {
            var b; return {
                send: function (c, d) {
                    var e, f = a.xhr(), g =++ Wc; if (f.open(a.type, a.url, a. async, a.username, a.password), a.xhrFields) for (e in a.xhrFields) f[e] = a.xhrFields[e]; a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c[ "X-Requested-With"] ||(c[ "X-Requested-With"] = "XMLHttpRequest");
                    for (e in c) void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
                    f.send(a.hasContent && a.data || null), b = function (c, e) {
                        var h, i, j; if (b &&(e || 4 === f.readyState)) if (delete Xc[g], b = void 0, f.onreadystatechange = m.noop, e) 4 !== f.readyState && f.abort(); else {
                            j = {
                            },
                            h = f.status, "string" == typeof f.responseText &&(j.text = f.responseText);
                            try {
                                i = f.statusText
                            }
                            catch (k) {
                                i = ""
                            }
                            h || ! a.isLocal || a.crossDomain ? 1223 === h &&(h = 204): h = j.text ? 200: 404
                        }
                        j && d(h, i, j, f.getAllResponseHeaders())
                    },
                    a. async ? 4 === f.readyState ? setTimeout(b): f.onreadystatechange = Xc[g] = b: b()
                },
                abort: function () {
                    b && b(void 0, ! 0)
                }
            }
        }
    });
    function Zc() {
        try {
            return new a.XMLHttpRequest
        }
        catch (b) {
        }
    }
    function $c() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        }
        catch (b) {
        }
    }
    m.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function (a) {
                return m.globalEval(a), a
            }
        }
    }), m.ajaxPrefilter("script", function (a) {
        void 0 === a.cache &&(a.cache = ! 1), a.crossDomain &&(a.type = "GET", a.global = ! 1)
    }), m.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var b, c = y.head || m("head")[0] || y.documentElement; return {
                send: function (d, e) {
                    b = y.createElement("script"), b. async = ! 0, a.scriptCharset &&(b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function (a, c) {
                        (c || ! b.readyState || /loaded|complete/.test(b.readyState)) &&(b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success"))
                    },
                    c.insertBefore(b, c.firstChild)
                },
                abort: function () {
                    b && b.onload(void 0, ! 0)
                }
            }
        }
    });
    var _c =[], ad = /(=)\?(?=&|$)|\?\?/; m.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var a = _c.pop() || m.expando + "_" + vc++; return this[a] = ! 0, a
        }
    }), m.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e, f, g, h = b.jsonp !== ! 1 &&(ad.test(b.url) ? "url": "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && ad.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ?(e = b.jsonpCallback = m.isFunction(b.jsonpCallback) ? b.jsonpCallback(): b.jsonpCallback, h ? b[h] = b[h].replace(ad, "$1" + e): b.jsonp !== ! 1 &&(b.url +=(wc.test(b.url) ? "&": "?") + b.jsonp + "=" + e), b.converters[ "script json"] = function () {
            return g || m.error(e + " was not called"), g[0]
        },
        b.dataTypes[0] = "json", f = a[e], a[e] = function () {
            g = arguments
        },
        d.always(function () {
            a[e] = f, b[e] &&(b.jsonpCallback = c.jsonpCallback, _c.push(e)), g && m.isFunction(f) && f(g[0]), g = f = void 0
        }), "script"): void 0
    }), m.parseHTML = function (a, b, c) {
        if (! a || "string" != typeof a) return null; "boolean" == typeof b &&(c = b, b = ! 1), b = b || y; var d = u.exec(a), e = ! c &&[]; return d ?[b.createElement(d[1])]:(d = m.buildFragment([a], b, e), e && e.length && m(e).remove(), m.merge([], d.childNodes))
    };
    var bd = m.fn.load; m.fn.load = function (a, b, c) {
        if ("string" != typeof a && bd) return bd.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h >= 0 &&(d = m.trim(a.slice(h, a.length)), a = a.slice(0, h)), m.isFunction(b) ?(c = b, b = void 0): b && "object" == typeof b &&(f = "POST"), g.length > 0 && m.ajax({
            url: a, type: f, dataType: "html", data: b
        }).done(function (a) {
            e = arguments, g.html(d ? m("<div>").append(m.parseHTML(a)).find(d): a)
        }).complete(c && function (a, b) {
            g.each(c, e ||[a.responseText, b, a])
        }), this
    },
    m.expr.filters.animated = function (a) {
        return m.grep(m.timers, function (b) {
            return a === b.elem
        }).length
    };
    var cd = a.document.documentElement; function dd(a) {
        return m.isWindow(a) ? a: 9 === a.nodeType ? a.defaultView || a.parentWindow: ! 1
    }
    m.offset = {
        setOffset: function (a, b, c) {
            var d, e, f, g, h, i, j, k = m.css(a, "position"), l = m(a), n = {
            };
            "static" === k &&(a.style.position = "relative"), h = l.offset(), f = m.css(a, "top"), i = m.css(a, "left"), j =("absolute" === k || "fixed" === k) && m.inArray("auto",[f, i]) > -1, j ?(d = l.position(), g = d.top, e = d.left):(g = parseFloat(f) || 0, e = parseFloat(i) || 0), m.isFunction(b) &&(b = b.call(a, c, h)), null != b.top &&(n.top = b.top - h.top + g), null != b.left &&(n.left = b.left - h.left + e), "using" in b ? b.using.call(a, n): l.css(n)
        }
    },
    m.fn.extend({
        offset: function (a) {
            if (arguments.length) return void 0 === a ? this: this.each(function (b) {
                m.offset.setOffset(this, a, b)
            });
            var b, c, d = {
                top: 0, left: 0
            },
            e = this[0], f = e && e.ownerDocument; if (f) return b = f.documentElement, m.contains(b, e) ?(typeof e.getBoundingClientRect !== K &&(d = e.getBoundingClientRect()), c = dd(f), {
                top: d.top +(c.pageYOffset || b.scrollTop) -(b.clientTop || 0), left: d.left +(c.pageXOffset || b.scrollLeft) -(b.clientLeft || 0)
            }): d
        },
        position: function () {
            if (this[0]) {
                var a, b, c = {
                    top: 0, left: 0
                },
                d = this[0]; return "fixed" === m.css(d, "position") ? b = d.getBoundingClientRect():(a = this.offsetParent(), b = this.offset(), m.nodeName(a[0], "html") ||(c = a.offset()), c.top += m.css(a[0], "borderTopWidth", ! 0), c.left += m.css(a[0], "borderLeftWidth", ! 0)), {
                    top: b.top - c.top - m.css(d, "marginTop", ! 0), left: b.left - c.left - m.css(d, "marginLeft", ! 0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                var a = this.offsetParent || cd; while (a && ! m.nodeName(a, "html") && "static" === m.css(a, "position")) a = a.offsetParent; return a || cd
            })
        }
    }), m.each({
        scrollLeft: "pageXOffset", scrollTop: "pageYOffset"
    },
    function (a, b) {
        var c = /Y/.test(b);
        m.fn[a] = function (d) {
            return V(this, function (a, d, e) {
                var f = dd(a);
                return void 0 === e ? f ? b in f ? f[b]: f.document.documentElement[d]: a[d]: void (f ? f.scrollTo(c ? m(f).scrollLeft(): e, c ? e: m(f).scrollTop()): a[d] = e)
            },
            a, d, arguments.length, null)
        }
    }), m.each([ "top", "left"], function (a, b) {
        m.cssHooks[b] = Lb(k.pixelPosition, function (a, c) {
            return c ?(c = Jb(a, b), Hb.test(c) ? m(a).position()[b] + "px": c): void 0
        })
    }), m.each({
        Height: "height", Width: "width"
    },
    function (a, b) {
        m.each({
            padding: "inner" + a, content: b, "": "outer" + a
        },
        function (c, d) {
            m.fn[d] = function (d, e) {
                var f = arguments.length &&(c || "boolean" != typeof d), g = c ||(d === ! 0 || e === ! 0 ? "margin": "border");
                return V(this, function (b, c, d) {
                    var e; return m.isWindow(b) ? b.document.documentElement[ "client" + a]: 9 === b.nodeType ?(e = b.documentElement, Math.max(b.body[ "scroll" + a], e[ "scroll" + a], b.body[ "offset" + a], e[ "offset" + a], e[ "client" + a])): void 0 === d ? m.css(b, c, g): m.style(b, c, d, g)
                },
                b, f ? d: void 0, f, null)
            }
        })
    }), m.fn.size = function () {
        return this.length
    },
    m.fn.andSelf = m.fn.addBack, "function" == typeof define && define.amd && define("jquery",[], function () {
        return m
    });
    var ed = a.jQuery, fd = a.$; return m.noConflict = function (b) {
        return a.$ === m &&(a.$ = fd), b && a.jQuery === m &&(a.jQuery = ed), m
    },
    typeof b === K &&(a.jQuery = a.$ = m), m
});
//# sourceMappingURL=jquery.min.map

/*
 Copyright (C) Federico Zivolo 2018
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */(function (e, t) {
    'object' == typeof exports && 'undefined' != typeof module ? module.exports = t(): 'function' == typeof define && define.amd ? define(t): e.Popper = t()
})(this, function () {
    'use strict'; function e(e) {
        return e && '[object Function]' === {
        }.toString.call(e)
    }
    function t(e, t) {
        if (1 !== e.nodeType) return[]; var o = getComputedStyle(e, null);
        return t ? o[t]: o
    }
    function o(e) {
        return 'HTML' === e.nodeName ? e: e.parentNode || e.host
    }
    function n(e) {
        if (! e) return document.body; switch (e.nodeName) {
            case 'HTML': case 'BODY': return e.ownerDocument.body; case '#document': return e.body;
        }
        var i = t(e), r = i.overflow, p = i.overflowX, s = i.overflowY; return /(auto|scroll|overlay)/.test(r + s + p) ? e: n(o(e))
    }
    function r(e) {
        return 11 === e ? re: 10 === e ? pe: re || pe
    }
    function p(e) {
        if (! e) return document.documentElement; for (var o = r(10) ? document.body: null, n = e.offsetParent; n === o && e.nextElementSibling;) n =(e = e.nextElementSibling).offsetParent; var i = n && n.nodeName; return i && 'BODY' !== i && 'HTML' !== i ? -1 !==[ 'TD', 'TABLE'].indexOf(n.nodeName) && 'static' === t(n, 'position') ? p(n): n: e ? e.ownerDocument.documentElement: document.documentElement
    }
    function s(e) {
        var t = e.nodeName; return 'BODY' !== t &&('HTML' === t || p(e.firstElementChild) === e)
    }
    function d(e) {
        return null === e.parentNode ? e: d(e.parentNode)
    }
    function a(e, t) {
        if (! e || ! e.nodeType || ! t || ! t.nodeType) return document.documentElement; var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING, n = o ? e: t, i = o ? t: e, r = document.createRange();
        r.setStart(n, 0), r.setEnd(i, 0);
        var l = r.commonAncestorContainer; if (e !== l && t !== l || n.contains(i)) return s(l) ? l: p(l);
        var f = d(e);
        return f.host ? a(f.host, t): a(e, d(t).host)
    }
    function l(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1]: 'top', o = 'top' === t ? 'scrollTop': 'scrollLeft', n = e.nodeName; if ('BODY' === n || 'HTML' === n) {
            var i = e.ownerDocument.documentElement, r = e.ownerDocument.scrollingElement || i; return r[o]
        }
        return e[o]
    }
    function f(e, t) {
        var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], n = l(t, 'top'), i = l(t, 'left'), r = o ? -1: 1; return e.top += n * r, e.bottom += n * r, e.left += i * r, e.right += i * r, e
    }
    function m(e, t) {
        var o = 'x' === t ? 'Left': 'Top', n = 'Left' == o ? 'Right': 'Bottom'; return parseFloat(e[ 'border' + o + 'Width'], 10) + parseFloat(e[ 'border' + n + 'Width'], 10)
    }
    function h(e, t, o, n) {
        return $(t[ 'offset' + e], t[ 'scroll' + e], o[ 'client' + e], o[ 'offset' + e], o[ 'scroll' + e], r(10) ? o[ 'offset' + e] + n[ 'margin' +('Height' === e ? 'Top': 'Left')] + n[ 'margin' +('Height' === e ? 'Bottom': 'Right')]: 0)
    }
    function c() {
        var e = document.body, t = document.documentElement, o = r(10) && getComputedStyle(t);
        return {
            height: h('Height', e, t, o), width: h('Width', e, t, o)
        }
    }
    function g(e) {
        return le({
        },
        e, {
            right: e.left + e.width, bottom: e.top + e.height
        })
    }
    function u(e) {
        var o = {
        };
        try {
            if (r(10)) {
                o = e.getBoundingClientRect();
                var n = l(e, 'top'), i = l(e, 'left');
                o.top += n, o.left += i, o.bottom += n, o.right += i
            } else o = e.getBoundingClientRect()
        }
        catch (t) {
        }
        var p = {
            left: o.left, top: o.top, width: o.right - o.left, height: o.bottom - o.top
        },
        s = 'HTML' === e.nodeName ? c(): {
        },
        d = s.width || e.clientWidth || p.right - p.left, a = s.height || e.clientHeight || p.bottom - p.top, f = e.offsetWidth - d, h = e.offsetHeight - a; if (f || h) {
            var u = t(e);
            f -= m(u, 'x'), h -= m(u, 'y'), p.width -= f, p.height -= h
        }
        return g(p)
    }
    function b(e, o) {
        var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], p = r(10), s = 'HTML' === o.nodeName, d = u(e), a = u(o), l = n(e), m = t(o), h = parseFloat(m.borderTopWidth, 10), c = parseFloat(m.borderLeftWidth, 10);
        i && 'HTML' === o.nodeName &&(a.top = $(a.top, 0), a.left = $(a.left, 0));
        var b = g({
            top: d.top - a.top - h, left: d.left - a.left - c, width: d.width, height: d.height
        });
        if (b.marginTop = 0, b.marginLeft = 0, ! p && s) {
            var y = parseFloat(m.marginTop, 10), w = parseFloat(m.marginLeft, 10);
            b.top -= h - y, b.bottom -= h - y, b.left -= c - w, b.right -= c - w, b.marginTop = y, b.marginLeft = w
        }
        return (p && ! i ? o.contains(l): o === l && 'BODY' !== l.nodeName) &&(b = f(b, o)), b
    }
    function y(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1], o = e.ownerDocument.documentElement, n = b(e, o), i = $(o.clientWidth, window.innerWidth || 0), r = $(o.clientHeight, window.innerHeight || 0), p = t ? 0: l(o), s = t ? 0: l(o, 'left'), d = {
            top: p - n.top + n.marginTop, left: s - n.left + n.marginLeft, width: i, height: r
        };
        return g(d)
    }
    function w(e) {
        var n = e.nodeName; return 'BODY' === n || 'HTML' === n ? ! 1: 'fixed' === t(e, 'position') || w(o(e))
    }
    function E(e) {
        if (! e || ! e.parentElement || r()) return document.documentElement; for (var o = e.parentElement; o && 'none' === t(o, 'transform');) o = o.parentElement; return o || document.documentElement
    }
    function v(e, t, i, r) {
        var p = 4 < arguments.length && void 0 !== arguments[4] && arguments[4], s = {
            top: 0, left: 0
        },
        d = p ? E(e): a(e, t);
        if ('viewport' === r) s = y(d, p); else {
            var l; 'scrollParent' === r ?(l = n(o(t)), 'BODY' === l.nodeName &&(l = e.ownerDocument.documentElement)): 'window' === r ? l = e.ownerDocument.documentElement: l = r; var f = b(l, d, p);
            if ('HTML' === l.nodeName && ! w(d)) {
                var m = c(), h = m.height, g = m.width; s.top += f.top - f.marginTop, s.bottom = h + f.top, s.left += f.left - f.marginLeft, s.right = g + f.left
            } else s = f
        }
        return s.left += i, s.top += i, s.right -= i, s.bottom -= i, s
    }
    function x(e) {
        var t = e.width, o = e.height; return t * o
    }
    function O(e, t, o, n, i) {
        var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5]: 0; if (-1 === e.indexOf('auto')) return e; var p = v(o, n, r, i), s = {
            top: {
                width: p.width, height: t.top - p.top
            },
            right: {
                width: p.right - t.right, height: p.height
            },
            bottom: {
                width: p.width, height: p.bottom - t.bottom
            },
            left: {
                width: t.left - p.left, height: p.height
            }
        },
        d = Object.keys(s).map(function (e) {
            return le({
                key: e
            },
            s[e], {
                area: x(s[e])
            })
        }).sort(function (e, t) {
            return t.area - e.area
        }), a = d.filter(function (e) {
            var t = e.width, n = e.height; return t >= o.clientWidth && n >= o.clientHeight
        }), l = 0 < a.length ? a[0].key: d[0].key, f = e.split('-')[1]; return l +(f ? '-' + f: '')
    }
    function L(e, t, o) {
        var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3]: null, i = n ? E(t): a(t, o);
        return b(o, i, n)
    }
    function S(e) {
        var t = getComputedStyle(e), o = parseFloat(t.marginTop) + parseFloat(t.marginBottom), n = parseFloat(t.marginLeft) + parseFloat(t.marginRight), i = {
            width: e.offsetWidth + n, height: e.offsetHeight + o
        };
        return i
    }
    function T(e) {
        var t = {
            left: 'right', right: 'left', bottom: 'top', top: 'bottom'
        };
        return e.replace(/left|right|bottom|top/g, function (e) {
            return t[e]
        })
    }
    function C(e, t, o) {
        o = o.split('-')[0]; var n = S(e), i = {
            width: n.width, height: n.height
        },
        r = -1 !==[ 'right', 'left'].indexOf(o), p = r ? 'top': 'left', s = r ? 'left': 'top', d = r ? 'height': 'width', a = r ? 'width': 'height'; return i[p] = t[p] + t[d] /2-n[d]/ 2, i[s] = o === s ? t[s] - n[a]: t[T(s)], i
    }
    function D(e, t) {
        return Array.prototype.find ? e.find(t): e.filter(t)[0]
    }
    function N(e, t, o) {
        if (Array.prototype.findIndex) return e.findIndex(function (e) {
            return e[t] === o
        });
        var n = D(e, function (e) {
            return e[t] === o
        });
        return e.indexOf(n)
    }
    function P(t, o, n) {
        var i = void 0 === n ? t: t.slice(0, N(t, 'name', n));
        return i.forEach(function (t) {
            t[ 'function'] && console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
            var n = t[ 'function'] || t.fn; t.enabled && e(n) &&(o.offsets.popper = g(o.offsets.popper), o.offsets.reference = g(o.offsets.reference), o = n(o, t))
        }), o
    }
    function k() {
        if (! this.state.isDestroyed) {
            var e = {
                instance: this, styles: {
                },
                arrowStyles: {
                },
                attributes: {
                },
                flipped: ! 1, offsets: {
                }
            };
            e.offsets.reference = L(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = O(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = C(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? 'fixed': 'absolute', e = P(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e):(this.state.isCreated = ! 0, this.options.onCreate(e))
        }
    }
    function W(e, t) {
        return e.some(function (e) {
            var o = e.name, n = e.enabled; return n && o === t
        })
    }
    function B(e) {
        for (var t =[ ! 1, 'ms', 'Webkit', 'Moz', 'O'], o = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length; n++) {
            var i = t[n], r = i ? '' + i + o: e; if ('undefined' != typeof document.body.style[r]) return r
        }
        return null
    }
    function H() {
        return this.state.isDestroyed = ! 0, W(this.modifiers, 'applyStyle') &&(this.popper.removeAttribute('x-placement'), this.popper.style.position = '', this.popper.style.top = '', this.popper.style.left = '', this.popper.style.right = '', this.popper.style.bottom = '', this.popper.style.willChange = '', this.popper.style[B('transform')] = ''), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
    }
    function A(e) {
        var t = e.ownerDocument; return t ? t.defaultView: window
    }
    function M(e, t, o, i) {
        var r = 'BODY' === e.nodeName, p = r ? e.ownerDocument.defaultView: e; p.addEventListener(t, o, {
            passive: ! 0
        }), r || M(n(p.parentNode), t, o, i), i.push(p)
    }
    function I(e, t, o, i) {
        o.updateBound = i, A(e).addEventListener('resize', o.updateBound, {
            passive: ! 0
        });
        var r = n(e);
        return M(r, 'scroll', o.updateBound, o.scrollParents), o.scrollElement = r, o.eventsEnabled = ! 0, o
    }
    function F() {
        this.state.eventsEnabled ||(this.state = I(this.reference, this.options, this.state, this.scheduleUpdate))
    }
    function R(e, t) {
        return A(e).removeEventListener('resize', t.updateBound), t.scrollParents.forEach(function (e) {
            e.removeEventListener('scroll', t.updateBound)
        }), t.updateBound = null, t.scrollParents =[], t.scrollElement = null, t.eventsEnabled = ! 1, t
    }
    function U() {
        this.state.eventsEnabled &&(cancelAnimationFrame(this.scheduleUpdate), this.state = R(this.reference, this.state))
    }
    function Y(e) {
        return '' !== e && ! isNaN(parseFloat(e)) && isFinite(e)
    }
    function j(e, t) {
        Object.keys(t).forEach(function (o) {
            var n = ''; -1 !==[ 'width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(o) && Y(t[o]) &&(n = 'px'), e.style[o] = t[o] + n
        })
    }
    function K(e, t) {
        Object.keys(t).forEach(function (o) {
            var n = t[o];! 1 === n ? e.removeAttribute(o): e.setAttribute(o, t[o])
        })
    }
    function q(e, t, o) {
        var n = D(e, function (e) {
            var o = e.name; return o === t
        }), i = ! ! n && e.some(function (e) {
            return e.name === o && e.enabled && e.order < n.order
        });
        if (! i) {
            var r = '`' + t + '`'; console.warn('`' + o + '`' + ' modifier is required by ' + r + ' modifier in order to work, be sure to include it before ' + r + '!')
        }
        return i
    }
    function G(e) {
        return 'end' === e ? 'start': 'start' === e ? 'end': e
    }
    function z(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1], o = me.indexOf(e), n = me.slice(o + 1).concat(me.slice(0, o));
        return t ? n.reverse(): n
    }
    function V(e, t, o, n) {
        var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/), r = + i[1], p = i[2]; if (! r) return e; if (0 === p.indexOf('%')) {
            var s; switch (p) {
                case '%p': s = o; break; case '%': case '%r': default: s = n;
            }
            var d = g(s);
            return d[t] /100*r}if('vh'===p||'vw'===p){var a;return a='vh'===p?$(document.documentElement.clientHeight,window.innerHeight||0):$(document.documentElement.clientWidth,window.innerWidth||0),a/ 100 * r
        }
        return r
    }
    function _(e, t, o, n) {
        var i =[0, 0], r = -1 !==[ 'right', 'left'].indexOf(n), p = e.split(/(\+|\-)/).map(function (e) {
            return e.trim()
        }), s = p.indexOf(D(p, function (e) {
            return -1 !== e.search(/,|\s/)
        }));
        p[s] && -1 === p[s].indexOf(',') && console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
        var d = /\s*,\s*|\s+/, a = -1 === s ?[p]:[p.slice(0, s).concat([p[s].split(d)[0]]),[p[s].split(d)[1]].concat(p.slice(s + 1))]; return a = a.map(function (e, n) {
            var i =(1 === n ? ! r: r) ? 'height': 'width', p = ! 1; return e.reduce(function (e, t) {
                return '' === e[e.length -1] && -1 !==[ '+', '-'].indexOf(t) ?(e[e.length -1] = t, p = ! 0, e): p ?(e[e.length -1] += t, p = ! 1, e): e.concat(t)
            },[]).map(function (e) {
                return V(e, i, t, o)
            })
        }), a.forEach(function (e, t) {
            e.forEach(function (o, n) {
                Y(o) &&(i[t] += o *('-' === e[n -1] ? -1: 1))
            })
        }), i
    }
    function X(e, t) {
        var o, n = t.offset, i = e.placement, r = e.offsets, p = r.popper, s = r.reference, d = i.split('-')[0]; return o = Y(+ n) ?[+ n, 0]: _(n, p, s, d), 'left' === d ?(p.top += o[0], p.left -= o[1]): 'right' === d ?(p.top += o[0], p.left += o[1]): 'top' === d ?(p.left += o[0], p.top -= o[1]): 'bottom' === d &&(p.left += o[0], p.top += o[1]), e.popper = p, e
    }
    for (var J = Math.min, Q = Math.round, Z = Math.floor, $ = Math.max, ee = 'undefined' != typeof window && 'undefined' != typeof document, te =[ 'Edge', 'Trident', 'Firefox'], oe = 0, ne = 0; ne < te.length; ne += 1) if (ee && 0 <= navigator.userAgent.indexOf(te[ne])) {
        oe = 1; break
    }
    var i = ee && window.Promise, ie = i ? function (e) {
        var t = ! 1; return function () {
            t ||(t = ! 0, window.Promise.resolve().then(function () {
                t = ! 1, e()
            }))
        }
    }: function (e) {
        var t = ! 1; return function () {
            t ||(t = ! 0, setTimeout(function () {
                t = ! 1, e()
            },
            oe))
        }
    },
    re = ee && ! !(window.MSInputMethodContext && document.documentMode), pe = ee && /MSIE 10/.test(navigator.userAgent), se = function (e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
    },
    de = function () {
        function e(e, t) {
            for (var o, n = 0; n < t.length; n++) o = t[n], o.enumerable = o.enumerable || ! 1, o.configurable = ! 0, 'value' in o &&(o.writable = ! 0), Object.defineProperty(e, o.key, o)
        }
        return function (t, o, n) {
            return o && e(t.prototype, o), n && e(t, n), t
        }
    }
    (), ae = function (e, t, o) {
        return t in e ? Object.defineProperty(e, t, {
            value: o, enumerable: ! 0, configurable: ! 0, writable: ! 0
        }): e[t] = o, e
    },
    le = Object.assign || function (e) {
        for (var t, o = 1; o < arguments.length; o++) for (var n in t = arguments[o], t) Object.prototype.hasOwnProperty.call(t, n) &&(e[n] = t[n]);
        return e
    },
    fe =[ 'auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'], me = fe.slice(3), he = {
        FLIP: 'flip', CLOCKWISE: 'clockwise', COUNTERCLOCKWISE: 'counterclockwise'
    },
    ce = function () {
        function t(o, n) {
            var i = this, r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2]: {
            };
            se(this, t), this.scheduleUpdate = function () {
                return requestAnimationFrame(i.update)
            },
            this.update = ie(this.update.bind(this)), this.options = le({
            },
            t.Defaults, r), this.state = {
                isDestroyed: ! 1, isCreated: ! 1, scrollParents:[]
            },
            this.reference = o && o.jquery ? o[0]: o, this.popper = n && n.jquery ? n[0]: n, this.options.modifiers = {
            },
            Object.keys(le({
            },
            t.Defaults.modifiers, r.modifiers)).forEach(function (e) {
                i.options.modifiers[e] = le({
                },
                t.Defaults.modifiers[e] || {
                },
                r.modifiers ? r.modifiers[e]: {
                })
            }), this.modifiers = Object.keys(this.options.modifiers).map(function (e) {
                return le({
                    name: e
                },
                i.options.modifiers[e])
            }).sort(function (e, t) {
                return e.order - t.order
            }), this.modifiers.forEach(function (t) {
                t.enabled && e(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state)
            }), this.update();
            var p = this.options.eventsEnabled; p && this.enableEventListeners(), this.state.eventsEnabled = p
        }
        return de(t,[ {
            key: 'update', value: function () {
                return k.call(this)
            }
        },
        {
            key: 'destroy', value: function () {
                return H.call(this)
            }
        },
        {
            key: 'enableEventListeners', value: function () {
                return F.call(this)
            }
        },
        {
            key: 'disableEventListeners', value: function () {
                return U.call(this)
            }
        }]), t
    }
    ();
    return ce.Utils =('undefined' == typeof window ? global: window).PopperUtils, ce.placements = fe, ce.Defaults = {
        placement: 'bottom', positionFixed: ! 1, eventsEnabled: ! 0, removeOnDestroy: ! 1, onCreate: function () {
        },
        onUpdate: function () {
        },
        modifiers: {
            shift: {
                order: 100, enabled: ! 0, fn: function (e) {
                    var t = e.placement, o = t.split('-')[0], n = t.split('-')[1]; if (n) {
                        var i = e.offsets, r = i.reference, p = i.popper, s = -1 !==[ 'bottom', 'top'].indexOf(o), d = s ? 'left': 'top', a = s ? 'width': 'height', l = {
                            start: ae({
                            },
                            d, r[d]), end: ae({
                            },
                            d, r[d] + r[a] - p[a])
                        };
                        e.offsets.popper = le({
                        },
                        p, l[n])
                    }
                    return e
                }
            },
            offset: {
                order: 200, enabled: ! 0, fn: X, offset: 0
            },
            preventOverflow: {
                order: 300, enabled: ! 0, fn: function (e, t) {
                    var o = t.boundariesElement || p(e.instance.popper);
                    e.instance.reference === o &&(o = p(o));
                    var n = B('transform'), i = e.instance.popper.style, r = i.top, s = i.left, d = i[n]; i.top = '', i.left = '', i[n] = ''; var a = v(e.instance.popper, e.instance.reference, t.padding, o, e.positionFixed);
                    i.top = r, i.left = s, i[n] = d, t.boundaries = a; var l = t.priority, f = e.offsets.popper, m = {
                        primary: function (e) {
                            var o = f[e]; return f[e] < a[e] && ! t.escapeWithReference &&(o = $(f[e], a[e])), ae({
                            },
                            e, o)
                        },
                        secondary: function (e) {
                            var o = 'right' === e ? 'left': 'top', n = f[o]; return f[e] > a[e] && ! t.escapeWithReference &&(n = J(f[o], a[e] -('right' === e ? f.width: f.height))), ae({
                            },
                            o, n)
                        }
                    };
                    return l.forEach(function (e) {
                        var t = -1 ===[ 'left', 'top'].indexOf(e) ? 'secondary': 'primary'; f = le({
                        },
                        f, m[t](e))
                    }), e.offsets.popper = f, e
                },
                priority:[ 'left', 'right', 'top', 'bottom'], padding: 5, boundariesElement: 'scrollParent'
            },
            keepTogether: {
                order: 400, enabled: ! 0, fn: function (e) {
                    var t = e.offsets, o = t.popper, n = t.reference, i = e.placement.split('-')[0], r = Z, p = -1 !==[ 'top', 'bottom'].indexOf(i), s = p ? 'right': 'bottom', d = p ? 'left': 'top', a = p ? 'width': 'height'; return o[s] < r(n[d]) &&(e.offsets.popper[d] = r(n[d]) - o[a]), o[d] > r(n[s]) &&(e.offsets.popper[d] = r(n[s])), e
                }
            },
            arrow: {
                order: 500, enabled: ! 0, fn: function (e, o) {
                    var n; if (! q(e.instance.modifiers, 'arrow', 'keepTogether')) return e; var i = o.element; if ('string' == typeof i) {
                        if (i = e.instance.popper.querySelector(i), ! i) return e;
                    } else if (! e.instance.popper.contains(i)) return console.warn('WARNING: `arrow.element` must be child of its popper element!'), e; var r = e.placement.split('-')[0], p = e.offsets, s = p.popper, d = p.reference, a = -1 !==[ 'left', 'right'].indexOf(r), l = a ? 'height': 'width', f = a ? 'Top': 'Left', m = f.toLowerCase(), h = a ? 'left': 'top', c = a ? 'bottom': 'right', u = S(i)[l]; d[c] - u < s[m] &&(e.offsets.popper[m] -= s[m] -(d[c] - u)), d[m] + u > s[c] &&(e.offsets.popper[m] += d[m] + u - s[c]), e.offsets.popper = g(e.offsets.popper);
                    var b = d[m] + d[l] /2-u/ 2, y = t(e.instance.popper), w = parseFloat(y[ 'margin' + f], 10), E = parseFloat(y[ 'border' + f + 'Width'], 10), v = b - e.offsets.popper[m] - w - E; return v = $(J(s[l] - u, v), 0), e.arrowElement = i, e.offsets.arrow =(n = {
                    },
                    ae(n, m, Q(v)), ae(n, h, ''), n), e
                },
                element: '[x-arrow]'
            },
            flip: {
                order: 600, enabled: ! 0, fn: function (e, t) {
                    if (W(e.instance.modifiers, 'inner')) return e; if (e.flipped && e.placement === e.originalPlacement) return e; var o = v(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed), n = e.placement.split('-')[0], i = T(n), r = e.placement.split('-')[1] || '', p =[]; switch (t.behavior) {
                        case he.FLIP: p =[n, i]; break; case he.CLOCKWISE: p = z(n);
                        break; case he.COUNTERCLOCKWISE: p = z(n, ! 0);
                        break; default: p = t.behavior;
                    }
                    return p.forEach(function (s, d) {
                        if (n !== s || p.length === d + 1) return e; n = e.placement.split('-')[0], i = T(n);
                        var a = e.offsets.popper, l = e.offsets.reference, f = Z, m = 'left' === n && f(a.right) > f(l.left) || 'right' === n && f(a.left) < f(l.right) || 'top' === n && f(a.bottom) > f(l.top) || 'bottom' === n && f(a.top) < f(l.bottom), h = f(a.left) < f(o.left), c = f(a.right) > f(o.right), g = f(a.top) < f(o.top), u = f(a.bottom) > f(o.bottom), b = 'left' === n && h || 'right' === n && c || 'top' === n && g || 'bottom' === n && u, y = -1 !==[ 'top', 'bottom'].indexOf(n), w = ! ! t.flipVariations &&(y && 'start' === r && h || y && 'end' === r && c || ! y && 'start' === r && g || ! y && 'end' === r && u);
                        (m || b || w) &&(e.flipped = ! 0,(m || b) &&(n = p[d + 1]), w &&(r = G(r)), e.placement = n +(r ? '-' + r: ''), e.offsets.popper = le({
                        },
                        e.offsets.popper, C(e.instance.popper, e.offsets.reference, e.placement)), e = P(e.instance.modifiers, e, 'flip'))
                    }), e
                },
                behavior: 'flip', padding: 5, boundariesElement: 'viewport'
            },
            inner: {
                order: 700, enabled: ! 1, fn: function (e) {
                    var t = e.placement, o = t.split('-')[0], n = e.offsets, i = n.popper, r = n.reference, p = -1 !==[ 'left', 'right'].indexOf(o), s = -1 ===[ 'top', 'left'].indexOf(o);
                    return i[p ? 'left': 'top'] = r[o] -(s ? i[p ? 'width': 'height']: 0), e.placement = T(t), e.offsets.popper = g(i), e
                }
            },
            hide: {
                order: 800, enabled: ! 0, fn: function (e) {
                    if (! q(e.instance.modifiers, 'hide', 'preventOverflow')) return e; var t = e.offsets.reference, o = D(e.instance.modifiers, function (e) {
                        return 'preventOverflow' === e.name
                    }).boundaries; if (t.bottom < o.top || t.left > o.right || t.top > o.bottom || t.right < o.left) {
                        if (! 0 === e.hide) return e; e.hide = ! 0, e.attributes[ 'x-out-of-boundaries'] = ''
                    } else {
                        if (! 1 === e.hide) return e; e.hide = ! 1, e.attributes[ 'x-out-of-boundaries'] = ! 1
                    }
                    return e
                }
            },
            computeStyle: {
                order: 850, enabled: ! 0, fn: function (e, t) {
                    var o = t.x, n = t.y, i = e.offsets.popper, r = D(e.instance.modifiers, function (e) {
                        return 'applyStyle' === e.name
                    }).gpuAcceleration; void 0 !== r && console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
                    var s, d, a = void 0 === r ? t.gpuAcceleration: r, l = p(e.instance.popper), f = u(l), m = {
                        position: i.position
                    },
                    h = {
                        left: Z(i.left), top: Q(i.top), bottom: Q(i.bottom), right: Z(i.right)
                    },
                    c = 'bottom' === o ? 'top': 'bottom', g = 'right' === n ? 'left': 'right', b = B('transform');
                    if (d = 'bottom' == c ? - f.height + h.bottom: h.top, s = 'right' == g ? - f.width + h.right: h.left, a && b) m[b] = 'translate3d(' + s + 'px, ' + d + 'px, 0)', m[c] = 0, m[g] = 0, m.willChange = 'transform'; else {
                        var y = 'bottom' == c ? -1: 1, w = 'right' == g ? -1: 1; m[c] = d * y, m[g] = s * w, m.willChange = c + ', ' + g
                    }
                    var E = {
                        "x-placement": e.placement
                    };
                    return e.attributes = le({
                    },
                    E, e.attributes), e.styles = le({
                    },
                    m, e.styles), e.arrowStyles = le({
                    },
                    e.offsets.arrow, e.arrowStyles), e
                },
                gpuAcceleration: ! 0, x: 'bottom', y: 'right'
            },
            applyStyle: {
                order: 900, enabled: ! 0, fn: function (e) {
                    return j(e.instance.popper, e.styles), K(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && j(e.arrowElement, e.arrowStyles), e
                },
                onLoad: function (e, t, o, n, i) {
                    var r = L(i, t, e, o.positionFixed), p = O(o.placement, r, t, e, o.modifiers.flip.boundariesElement, o.modifiers.flip.padding);
                    return t.setAttribute('x-placement', p), j(t, {
                        position: o.positionFixed ? 'fixed': 'absolute'
                    }), o
                },
                gpuAcceleration: void 0
            }
        }
    },
    ce
});
//# sourceMappingURL=popper.min.js.map


/*!
 * Bootstrap v4.1.3 (https://getbootstrap.com/)
 * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */ ! function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery"), require("popper.js")): "function" == typeof define && define.amd ? define([ "exports", "jquery", "popper.js"], e): e(t.bootstrap = {
    },
    t.jQuery, t.Popper)
}
(this, function (t, e, h) {
    "use strict"; function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n]; i.enumerable = i.enumerable || ! 1, i.configurable = ! 0, "value" in i &&(i.writable = ! 0), Object.defineProperty(t, i.key, i)
        }
    }
    function s(t, e, n) {
        return e && i(t.prototype, e), n && i(t, n), t
    }
    function l(r) {
        for (var t = 1; t < arguments.length; t++) {
            var o = null != arguments[t] ? arguments[t]: {
            },
            e = Object.keys(o);
            "function" == typeof Object.getOwnPropertySymbols &&(e = e.concat(Object.getOwnPropertySymbols(o).filter(function (t) {
                return Object.getOwnPropertyDescriptor(o, t).enumerable
            }))), e.forEach(function (t) {
                var e, n, i; e = r, i = o[n = t], n in e ? Object.defineProperty(e, n, {
                    value: i, enumerable: ! 0, configurable: ! 0, writable: ! 0
                }): e[n] = i
            })
        }
        return r
    }
    e = e && e.hasOwnProperty("default") ? e. default: e, h = h && h.hasOwnProperty("default") ? h. default: h; var r, n, o, a, c, u, f, d, g, _, m, p, v, y, E, C, T, b, S, I, A, D, w, N, O, k, P, j, H, L, R, x, W, U, q, F, K, M, Q, B, V, Y, z, J, Z, G, $, X, tt, et, nt, it, rt, ot, st, at, lt, ct, ht, ut, ft, dt, gt, _t, mt, pt, vt, yt, Et, Ct, Tt, bt, St, It, At, Dt, wt, Nt, Ot, kt, Pt, jt, Ht, Lt, Rt, xt, Wt, Ut, qt, Ft, Kt, Mt, Qt, Bt, Vt, Yt, zt, Jt, Zt, Gt, $t, Xt, te, ee, ne, ie, re, oe, se, ae, le, ce, he, ue, fe, de, ge, _e, me, pe, ve, ye, Ee, Ce, Te, be, Se, Ie, Ae, De, we, Ne, Oe, ke, Pe, je, He, Le, Re, xe, We, Ue, qe, Fe, Ke, Me, Qe, Be, Ve, Ye, ze, Je, Ze, Ge, $e, Xe, tn, en, nn, rn, on, sn, an, ln, cn, hn, un, fn, dn, gn, _n, mn, pn, vn, yn, En, Cn, Tn, bn, Sn, In, An, Dn, wn, Nn, On, kn, Pn, jn, Hn, Ln, Rn, xn, Wn, Un, qn, Fn = function (i) {
        var e = "transitionend"; function t(t) {
            var e = this, n = ! 1; return i(this).one(l.TRANSITION_END, function () {
                n = ! 0
            }), setTimeout(function () {
                n || l.triggerTransitionEnd(e)
            },
            t), this
        }
        var l = {
            TRANSITION_END: "bsTransitionEnd", getUID: function (t) {
                for (; t += ~ ~(1e6 * Math.random()), document.getElementById(t););
                return t
            },
            getSelectorFromElement: function (t) {
                var e = t.getAttribute("data-target");
                e && "#" !== e ||(e = t.getAttribute("href") || "");
                try {
                    return document.querySelector(e) ? e: null
                }
                catch (t) {
                    return null
                }
            },
            getTransitionDurationFromElement: function (t) {
                if (! t) return 0; var e = i(t).css("transition-duration");
                return parseFloat(e) ?(e = e.split(",")[0], 1e3 * parseFloat(e)): 0
            },
            reflow: function (t) {
                return t.offsetHeight
            },
            triggerTransitionEnd: function (t) {
                i(t).trigger(e)
            },
            supportsTransitionEnd: function () {
                return Boolean (e)
            },
            isElement: function (t) {
                return (t[0] || t).nodeType
            },
            typeCheckConfig: function (t, e, n) {
                for (var i in n) if (Object.prototype.hasOwnProperty.call(n, i)) {
                    var r = n[i], o = e[i], s = o && l.isElement(o) ? "element":(a = o, {
                    }.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());
                    if (! new RegExp(r).test(s)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + r + '".')
                }
                var a
            }
        };
        return i.fn.emulateTransitionEnd = t, i.event.special[l.TRANSITION_END] = {
            bindType: e, delegateType: e, handle: function (t) {
                if (i(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
            }
        },
        l
    }
    (e), Kn =(n = "alert", a = "." +(o = "bs.alert"), c =(r = e).fn[n], u = {
        CLOSE: "close" + a, CLOSED: "closed" + a, CLICK_DATA_API: "click" + a + ".data-api"
    },
    f = "alert", d = "fade", g = "show", _ = function () {
        function i(t) {
            this._element = t
        }
        var t = i.prototype; return t.close = function (t) {
            var e = this._element; t &&(e = this._getRootElement(t)), this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
        },
        t.dispose = function () {
            r.removeData(this._element, o), this._element = null
        },
        t._getRootElement = function (t) {
            var e = Fn.getSelectorFromElement(t), n = ! 1; return e &&(n = document.querySelector(e)), n ||(n = r(t).closest("." + f)[0]), n
        },
        t._triggerCloseEvent = function (t) {
            var e = r.Event(u.CLOSE);
            return r(t).trigger(e), e
        },
        t._removeElement = function (e) {
            var n = this; if (r(e).removeClass(g), r(e).hasClass(d)) {
                var t = Fn.getTransitionDurationFromElement(e);
                r(e).one(Fn.TRANSITION_END, function (t) {
                    return n._destroyElement(e, t)
                }).emulateTransitionEnd(t)
            } else this._destroyElement(e)
        },
        t._destroyElement = function (t) {
            r(t).detach().trigger(u.CLOSED).remove()
        },
        i._jQueryInterface = function (n) {
            return this.each(function () {
                var t = r(this), e = t.data(o);
                e ||(e = new i(this), t.data(o, e)), "close" === n && e[n](this)
            })
        },
        i._handleDismiss = function (e) {
            return function (t) {
                t && t.preventDefault(), e.close(this)
            }
        },
        s(i, null,[ {
            key: "VERSION", get: function () {
                return "4.1.3"
            }
        }]), i
    }
    (), r(document).on(u.CLICK_DATA_API, '[data-dismiss="alert"]', _._handleDismiss(new _)), r.fn[n] = _._jQueryInterface, r.fn[n]. Constructor = _, r.fn[n].noConflict = function () {
        return r.fn[n] = c, _._jQueryInterface
    },
    _), Mn =(p = "button", y = "." +(v = "bs.button"), E = ".data-api", C =(m = e).fn[p], T = "active", b = "btn", I = '[data-toggle^="button"]', A = '[data-toggle="buttons"]', D = "input", w = ".active", N = ".btn", O = {
        CLICK_DATA_API: "click" + y + E, FOCUS_BLUR_DATA_API:(S = "focus") + y + E + " blur" + y + E
    },
    k = function () {
        function n(t) {
            this._element = t
        }
        var t = n.prototype; return t.toggle = function () {
            var t = ! 0, e = ! 0, n = m(this._element).closest(A)[0]; if (n) {
                var i = this._element.querySelector(D);
                if (i) {
                    if ("radio" === i.type) if (i.checked && this._element.classList.contains(T)) t = ! 1; else {
                        var r = n.querySelector(w);
                        r && m(r).removeClass(T)
                    }
                    if (t) {
                        if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return; i.checked = ! this._element.classList.contains(T), m(i).trigger("change")
                    }
                    i.focus(), e = ! 1
                }
            }
            e && this._element.setAttribute("aria-pressed", ! this._element.classList.contains(T)), t && m(this._element).toggleClass(T)
        },
        t.dispose = function () {
            m.removeData(this._element, v), this._element = null
        },
        n._jQueryInterface = function (e) {
            return this.each(function () {
                var t = m(this).data(v);
                t ||(t = new n(this), m(this).data(v, t)), "toggle" === e && t[e]()
            })
        },
        s(n, null,[ {
            key: "VERSION", get: function () {
                return "4.1.3"
            }
        }]), n
    }
    (), m(document).on(O.CLICK_DATA_API, I, function (t) {
        t.preventDefault();
        var e = t.target; m(e).hasClass(b) ||(e = m(e).closest(N)), k._jQueryInterface.call(m(e), "toggle")
    }).on(O.FOCUS_BLUR_DATA_API, I, function (t) {
        var e = m(t.target).closest(N)[0]; m(e).toggleClass(S, /^focus(in)?$/.test(t.type))
    }), m.fn[p] = k._jQueryInterface, m.fn[p]. Constructor = k, m.fn[p].noConflict = function () {
        return m.fn[p] = C, k._jQueryInterface
    },
    k), Qn =(j = "carousel", L = "." +(H = "bs.carousel"), R = ".data-api", x =(P = e).fn[j], W = {
        interval: 5e3, keyboard: ! 0, slide: ! 1, pause: "hover", wrap: ! 0
    },
    U = {
        interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean"
    },
    q = "next", F = "prev", K = "left", M = "right", Q = {
        SLIDE: "slide" + L, SLID: "slid" + L, KEYDOWN: "keydown" + L, MOUSEENTER: "mouseenter" + L, MOUSELEAVE: "mouseleave" + L, TOUCHEND: "touchend" + L, LOAD_DATA_API: "load" + L + R, CLICK_DATA_API: "click" + L + R
    },
    B = "carousel", V = "active", Y = "slide", z = "carousel-item-right", J = "carousel-item-left", Z = "carousel-item-next", G = "carousel-item-prev", $ = ".active", X = ".active.carousel-item", tt = ".carousel-item", et = ".carousel-item-next, .carousel-item-prev", nt = ".carousel-indicators", it = "[data-slide], [data-slide-to]", rt = '[data-ride="carousel"]', ot = function () {
        function o(t, e) {
            this._items = null, this._interval = null, this._activeElement = null, this._isPaused = ! 1, this._isSliding = ! 1, this.touchTimeout = null, this._config = this._getConfig(e), this._element = P(t)[0], this._indicatorsElement = this._element.querySelector(nt), this._addEventListeners()
        }
        var t = o.prototype; return t.next = function () {
            this._isSliding || this._slide(q)
        },
        t.nextWhenVisible = function () { ! document.hidden && P(this._element).is(":visible") && "hidden" !== P(this._element).css("visibility") && this.next()
        },
        t.prev = function () {
            this._isSliding || this._slide(F)
        },
        t.pause = function (t) {
            t ||(this._isPaused = ! 0), this._element.querySelector(et) &&(Fn.triggerTransitionEnd(this._element), this.cycle(! 0)), clearInterval(this._interval), this._interval = null
        },
        t.cycle = function (t) {
            t ||(this._isPaused = ! 1), this._interval &&(clearInterval(this._interval), this._interval = null), this._config.interval && ! this._isPaused &&(this._interval = setInterval((document.visibilityState ? this.nextWhenVisible: this.next).bind(this), this._config.interval))
        },
        t.to = function (t) {
            var e = this; this._activeElement = this._element.querySelector(X);
            var n = this._getItemIndex(this._activeElement);
            if (!(t > this._items.length -1 || t < 0)) if (this._isSliding) P(this._element).one(Q.SLID, function () {
                return e.to(t)
            }); else {
                if (n === t) return this.pause(), void this.cycle();
                var i = n < t ? q: F; this._slide(i, this._items[t])
            }
        },
        t.dispose = function () {
            P(this._element).off(L), P.removeData(this._element, H), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
        },
        t._getConfig = function (t) {
            return t = l({
            },
            W, t), Fn.typeCheckConfig(j, t, U), t
        },
        t._addEventListeners = function () {
            var e = this; this._config.keyboard && P(this._element).on(Q.KEYDOWN, function (t) {
                return e._keydown(t)
            }), "hover" === this._config.pause &&(P(this._element).on(Q.MOUSEENTER, function (t) {
                return e.pause(t)
            }).on(Q.MOUSELEAVE, function (t) {
                return e.cycle(t)
            }), "ontouchstart" in document.documentElement && P(this._element).on(Q.TOUCHEND, function () {
                e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function (t) {
                    return e.cycle(t)
                },
                500 + e._config.interval)
            }))
        },
        t._keydown = function (t) {
            if (! /input|textarea/i.test(t.target.tagName)) switch (t.which) {
                case 37: t.preventDefault(), this.prev();
                break; case 39: t.preventDefault(), this.next()
            }
        },
        t._getItemIndex = function (t) {
            return this._items = t && t.parentNode ?[].slice.call(t.parentNode.querySelectorAll(tt)):[], this._items.indexOf(t)
        },
        t._getItemByDirection = function (t, e) {
            var n = t === q, i = t === F, r = this._getItemIndex(e), o = this._items.length -1; if ((i && 0 === r || n && r === o) && ! this._config.wrap) return e; var s =(r +(t === F ? -1: 1)) % this._items.length; return -1 === s ? this._items[ this._items.length -1]: this._items[s]
        },
        t._triggerSlideEvent = function (t, e) {
            var n = this._getItemIndex(t), i = this._getItemIndex(this._element.querySelector(X)), r = P.Event(Q.SLIDE, {
                relatedTarget: t, direction: e, from: i, to: n
            });
            return P(this._element).trigger(r), r
        },
        t._setActiveIndicatorElement = function (t) {
            if (this._indicatorsElement) {
                var e =[].slice.call(this._indicatorsElement.querySelectorAll($));
                P(e).removeClass(V);
                var n = this._indicatorsElement.children[ this._getItemIndex(t)]; n && P(n).addClass(V)
            }
        },
        t._slide = function (t, e) {
            var n, i, r, o = this, s = this._element.querySelector(X), a = this._getItemIndex(s), l = e || s && this._getItemByDirection(t, s), c = this._getItemIndex(l), h = Boolean (this._interval);
            if (t === q ?(n = J, i = Z, r = K):(n = z, i = G, r = M), l && P(l).hasClass(V)) this._isSliding = ! 1; else if (! this._triggerSlideEvent(l, r).isDefaultPrevented() && s && l) {
                this._isSliding = ! 0, h && this.pause(), this._setActiveIndicatorElement(l);
                var u = P.Event(Q.SLID, {
                    relatedTarget: l, direction: r, from: a, to: c
                });
                if (P(this._element).hasClass(Y)) {
                    P(l).addClass(i), Fn.reflow(l), P(s).addClass(n), P(l).addClass(n);
                    var f = Fn.getTransitionDurationFromElement(s);
                    P(s).one(Fn.TRANSITION_END, function () {
                        P(l).removeClass(n + " " + i).addClass(V), P(s).removeClass(V + " " + i + " " + n), o._isSliding = ! 1, setTimeout(function () {
                            return P(o._element).trigger(u)
                        },
                        0)
                    }).emulateTransitionEnd(f)
                } else P(s).removeClass(V), P(l).addClass(V), this._isSliding = ! 1, P(this._element).trigger(u);
                h && this.cycle()
            }
        },
        o._jQueryInterface = function (i) {
            return this.each(function () {
                var t = P(this).data(H), e = l({
                },
                W, P(this).data());
                "object" == typeof i &&(e = l({
                },
                e, i));
                var n = "string" == typeof i ? i: e.slide; if (t ||(t = new o(this, e), P(this).data(H, t)), "number" == typeof i) t.to(i); else if ("string" == typeof n) {
                    if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                    t[n]()
                } else e.interval &&(t.pause(), t.cycle())
            })
        },
        o._dataApiClickHandler = function (t) {
            var e = Fn.getSelectorFromElement(this);
            if (e) {
                var n = P(e)[0]; if (n && P(n).hasClass(B)) {
                    var i = l({
                    },
                    P(n).data(), P(this).data()), r = this.getAttribute("data-slide-to");
                    r &&(i.interval = ! 1), o._jQueryInterface.call(P(n), i), r && P(n).data(H).to(r), t.preventDefault()
                }
            }
        },
        s(o, null,[ {
            key: "VERSION", get: function () {
                return "4.1.3"
            }
        }, {
            key: "Default", get: function () {
                return W
            }
        }]), o
    }
    (), P(document).on(Q.CLICK_DATA_API, it, ot._dataApiClickHandler), P(window).on(Q.LOAD_DATA_API, function () {
        for (var t =[].slice.call(document.querySelectorAll(rt)), e = 0, n = t.length; e < n; e++) {
            var i = P(t[e]);
            ot._jQueryInterface.call(i, i.data())
        }
    }), P.fn[j] = ot._jQueryInterface, P.fn[j]. Constructor = ot, P.fn[j].noConflict = function () {
        return P.fn[j] = x, ot._jQueryInterface
    },
    ot), Bn =(at = "collapse", ct = "." +(lt = "bs.collapse"), ht =(st = e).fn[at], ut = {
        toggle: ! 0, parent: ""
    },
    ft = {
        toggle: "boolean", parent: "(string|element)"
    },
    dt = {
        SHOW: "show" + ct, SHOWN: "shown" + ct, HIDE: "hide" + ct, HIDDEN: "hidden" + ct, CLICK_DATA_API: "click" + ct + ".data-api"
    },
    gt = "show", _t = "collapse", mt = "collapsing", pt = "collapsed", vt = "width", yt = "height", Et = ".show, .collapsing", Ct = '[data-toggle="collapse"]', Tt = function () {
        function a(e, t) {
            this._isTransitioning = ! 1, this._element = e, this._config = this._getConfig(t), this._triggerArray = st.makeArray(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
            for (var n =[].slice.call(document.querySelectorAll(Ct)), i = 0, r = n.length; i < r; i++) {
                var o = n[i], s = Fn.getSelectorFromElement(o), a =[].slice.call(document.querySelectorAll(s)).filter(function (t) {
                    return t === e
                });
                null !== s && 0 < a.length &&(this._selector = s, this._triggerArray.push(o))
            }
            this._parent = this._config.parent ? this._getParent(): null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
        }
        var t = a.prototype; return t.toggle = function () {
            st(this._element).hasClass(gt) ? this.hide(): this.show()
        },
        t.show = function () {
            var t, e, n = this; if (! this._isTransitioning && ! st(this._element).hasClass(gt) &&(this._parent && 0 ===(t =[].slice.call(this._parent.querySelectorAll(Et)).filter(function (t) {
                return t.getAttribute("data-parent") === n._config.parent
            })).length &&(t = null), !(t &&(e = st(t).not(this._selector).data(lt)) && e._isTransitioning))) {
                var i = st.Event(dt.SHOW);
                if (st(this._element).trigger(i), ! i.isDefaultPrevented()) {
                    t &&(a._jQueryInterface.call(st(t).not(this._selector), "hide"), e || st(t).data(lt, null));
                    var r = this._getDimension();
                    st(this._element).removeClass(_t).addClass(mt), this._element.style[r] = 0, this._triggerArray.length && st(this._triggerArray).removeClass(pt).attr("aria-expanded", ! 0), this.setTransitioning(! 0);
                    var o = "scroll" +(r[0].toUpperCase() + r.slice(1)), s = Fn.getTransitionDurationFromElement(this._element);
                    st(this._element).one(Fn.TRANSITION_END, function () {
                        st(n._element).removeClass(mt).addClass(_t).addClass(gt), n._element.style[r] = "", n.setTransitioning(! 1), st(n._element).trigger(dt.SHOWN)
                    }).emulateTransitionEnd(s), this._element.style[r] = this._element[o] + "px"
                }
            }
        },
        t.hide = function () {
            var t = this; if (! this._isTransitioning && st(this._element).hasClass(gt)) {
                var e = st.Event(dt.HIDE);
                if (st(this._element).trigger(e), ! e.isDefaultPrevented()) {
                    var n = this._getDimension();
                    this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", Fn.reflow(this._element), st(this._element).addClass(mt).removeClass(_t).removeClass(gt);
                    var i = this._triggerArray.length; if (0 < i) for (var r = 0; r < i; r++) {
                        var o = this._triggerArray[r], s = Fn.getSelectorFromElement(o);
                        if (null !== s) st([].slice.call(document.querySelectorAll(s))).hasClass(gt) || st(o).addClass(pt).attr("aria-expanded", ! 1)
                    }
                    this.setTransitioning(! 0);
                    this._element.style[n] = ""; var a = Fn.getTransitionDurationFromElement(this._element);
                    st(this._element).one(Fn.TRANSITION_END, function () {
                        t.setTransitioning(! 1), st(t._element).removeClass(mt).addClass(_t).trigger(dt.HIDDEN)
                    }).emulateTransitionEnd(a)
                }
            }
        },
        t.setTransitioning = function (t) {
            this._isTransitioning = t
        },
        t.dispose = function () {
            st.removeData(this._element, lt), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
        },
        t._getConfig = function (t) {
            return (t = l({
            },
            ut, t)).toggle = Boolean (t.toggle), Fn.typeCheckConfig(at, t, ft), t
        },
        t._getDimension = function () {
            return st(this._element).hasClass(vt) ? vt: yt
        },
        t._getParent = function () {
            var n = this, t = null; Fn.isElement(this._config.parent) ?(t = this._config.parent, "undefined" != typeof this._config.parent.jquery &&(t = this._config.parent[0])): t = document.querySelector(this._config.parent);
            var e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]', i =[].slice.call(t.querySelectorAll(e));
            return st(i).each(function (t, e) {
                n._addAriaAndCollapsedClass(a._getTargetFromElement(e),[e])
            }), t
        },
        t._addAriaAndCollapsedClass = function (t, e) {
            if (t) {
                var n = st(t).hasClass(gt);
                e.length && st(e).toggleClass(pt, ! n).attr("aria-expanded", n)
            }
        },
        a._getTargetFromElement = function (t) {
            var e = Fn.getSelectorFromElement(t);
            return e ? document.querySelector(e): null
        },
        a._jQueryInterface = function (i) {
            return this.each(function () {
                var t = st(this), e = t.data(lt), n = l({
                },
                ut, t.data(), "object" == typeof i && i ? i: {
                });
                if (! e && n.toggle && /show|hide/.test(i) &&(n.toggle = ! 1), e ||(e = new a(this, n), t.data(lt, e)), "string" == typeof i) {
                    if ("undefined" == typeof e[i]) throw new TypeError('No method named "' + i + '"');
                    e[i]()
                }
            })
        },
        s(a, null,[ {
            key: "VERSION", get: function () {
                return "4.1.3"
            }
        }, {
            key: "Default", get: function () {
                return ut
            }
        }]), a
    }
    (), st(document).on(dt.CLICK_DATA_API, Ct, function (t) {
        "A" === t.currentTarget.tagName && t.preventDefault();
        var n = st(this), e = Fn.getSelectorFromElement(this), i =[].slice.call(document.querySelectorAll(e));
        st(i).each(function () {
            var t = st(this), e = t.data(lt) ? "toggle": n.data();
            Tt._jQueryInterface.call(t, e)
        })
    }), st.fn[at] = Tt._jQueryInterface, st.fn[at]. Constructor = Tt, st.fn[at].noConflict = function () {
        return st.fn[at] = ht, Tt._jQueryInterface
    },
    Tt), Vn =(St = "dropdown", At = "." +(It = "bs.dropdown"), Dt = ".data-api", wt =(bt = e).fn[St], Nt = new RegExp("38|40|27"), Ot = {
        HIDE: "hide" + At, HIDDEN: "hidden" + At, SHOW: "show" + At, SHOWN: "shown" + At, CLICK: "click" + At, CLICK_DATA_API: "click" + At + Dt, KEYDOWN_DATA_API: "keydown" + At + Dt, KEYUP_DATA_API: "keyup" + At + Dt
    },
    kt = "disabled", Pt = "show", jt = "dropup", Ht = "dropright", Lt = "dropleft", Rt = "dropdown-menu-right", xt = "position-static", Wt = '[data-toggle="dropdown"]', Ut = ".dropdown form", qt = ".dropdown-menu", Ft = ".navbar-nav", Kt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", Mt = "top-start", Qt = "top-end", Bt = "bottom-start", Vt = "bottom-end", Yt = "right-start", zt = "left-start", Jt = {
        offset: 0, flip: ! 0, boundary: "scrollParent", reference: "toggle", display: "dynamic"
    },
    Zt = {
        offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)", reference: "(string|element)", display: "string"
    },
    Gt = function () {
        function c(t, e) {
            this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
        }
        var t = c.prototype; return t.toggle = function () {
            if (! this._element.disabled && ! bt(this._element).hasClass(kt)) {
                var t = c._getParentFromElement(this._element), e = bt(this._menu).hasClass(Pt);
                if (c._clearMenus(), ! e) {
                    var n = {
                        relatedTarget: this._element
                    },
                    i = bt.Event(Ot.SHOW, n);
                    if (bt(t).trigger(i), ! i.isDefaultPrevented()) {
                        if (! this._inNavbar) {
                            if ("undefined" == typeof h) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                            var r = this._element; "parent" === this._config.reference ? r = t: Fn.isElement(this._config.reference) &&(r = this._config.reference, "undefined" != typeof this._config.reference.jquery &&(r = this._config.reference[0])), "scrollParent" !== this._config.boundary && bt(t).addClass(xt), this._popper = new h(r, this._menu, this._getPopperConfig())
                        }
                        "ontouchstart" in document.documentElement && 0 === bt(t).closest(Ft).length && bt(document.body).children().on("mouseover", null, bt.noop), this._element.focus(), this._element.setAttribute("aria-expanded", ! 0), bt(this._menu).toggleClass(Pt), bt(t).toggleClass(Pt).trigger(bt.Event(Ot.SHOWN, n))
                    }
                }
            }
        },
        t.dispose = function () {
            bt.removeData(this._element, It), bt(this._element).off(At), this._element = null,(this._menu = null) !== this._popper &&(this._popper.destroy(), this._popper = null)
        },
        t.update = function () {
            this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
        },
        t._addEventListeners = function () {
            var e = this; bt(this._element).on(Ot.CLICK, function (t) {
                t.preventDefault(), t.stopPropagation(), e.toggle()
            })
        },
        t._getConfig = function (t) {
            return t = l({
            },
            this. constructor. Default, bt(this._element).data(), t), Fn.typeCheckConfig(St, t, this. constructor.DefaultType), t
        },
        t._getMenuElement = function () {
            if (! this._menu) {
                var t = c._getParentFromElement(this._element);
                t &&(this._menu = t.querySelector(qt))
            }
            return this._menu
        },
        t._getPlacement = function () {
            var t = bt(this._element.parentNode), e = Bt; return t.hasClass(jt) ?(e = Mt, bt(this._menu).hasClass(Rt) &&(e = Qt)): t.hasClass(Ht) ? e = Yt: t.hasClass(Lt) ? e = zt: bt(this._menu).hasClass(Rt) &&(e = Vt), e
        },
        t._detectNavbar = function () {
            return 0 < bt(this._element).closest(".navbar").length
        },
        t._getPopperConfig = function () {
            var e = this, t = {
            };
            "function" == typeof this._config.offset ? t.fn = function (t) {
                return t.offsets = l({
                },
                t.offsets, e._config.offset(t.offsets) || {
                }), t
            }: t.offset = this._config.offset; var n = {
                placement: this._getPlacement(), modifiers: {
                    offset: t, flip: {
                        enabled: this._config.flip
                    },
                    preventOverflow: {
                        boundariesElement: this._config.boundary
                    }
                }
            };
            return "static" === this._config.display &&(n.modifiers.applyStyle = {
                enabled: ! 1
            }), n
        },
        c._jQueryInterface = function (e) {
            return this.each(function () {
                var t = bt(this).data(It);
                if (t ||(t = new c(this, "object" == typeof e ? e: null), bt(this).data(It, t)), "string" == typeof e) {
                    if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');
                    t[e]()
                }
            })
        },
        c._clearMenus = function (t) {
            if (! t || 3 !== t.which &&("keyup" !== t.type || 9 === t.which)) for (var e =[].slice.call(document.querySelectorAll(Wt)), n = 0, i = e.length; n < i; n++) {
                var r = c._getParentFromElement(e[n]), o = bt(e[n]).data(It), s = {
                    relatedTarget: e[n]
                };
                if (t && "click" === t.type &&(s.clickEvent = t), o) {
                    var a = o._menu; if (bt(r).hasClass(Pt) && !(t &&("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && bt.contains(r, t.target))) {
                        var l = bt.Event(Ot.HIDE, s);
                        bt(r).trigger(l), l.isDefaultPrevented() ||("ontouchstart" in document.documentElement && bt(document.body).children().off("mouseover", null, bt.noop), e[n].setAttribute("aria-expanded", "false"), bt(a).removeClass(Pt), bt(r).removeClass(Pt).trigger(bt.Event(Ot.HIDDEN, s)))
                    }
                }
            }
        },
        c._getParentFromElement = function (t) {
            var e, n = Fn.getSelectorFromElement(t);
            return n &&(e = document.querySelector(n)), e || t.parentNode
        },
        c._dataApiKeydownHandler = function (t) {
            if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which &&(40 !== t.which && 38 !== t.which || bt(t.target).closest(qt).length)): Nt.test(t.which)) &&(t.preventDefault(), t.stopPropagation(), ! this.disabled && ! bt(this).hasClass(kt))) {
                var e = c._getParentFromElement(this), n = bt(e).hasClass(Pt);
                if ((n || 27 === t.which && 32 === t.which) &&(! n || 27 !== t.which && 32 !== t.which)) {
                    var i =[].slice.call(e.querySelectorAll(Kt));
                    if (0 !== i.length) {
                        var r = i.indexOf(t.target);
                        38 === t.which && 0 < r && r--, 40 === t.which && r < i.length -1 && r++, r < 0 &&(r = 0), i[r].focus()
                    }
                } else {
                    if (27 === t.which) {
                        var o = e.querySelector(Wt);
                        bt(o).trigger("focus")
                    }
                    bt(this).trigger("click")
                }
            }
        },
        s(c, null,[ {
            key: "VERSION", get: function () {
                return "4.1.3"
            }
        }, {
            key: "Default", get: function () {
                return Jt
            }
        }, {
            key: "DefaultType", get: function () {
                return Zt
            }
        }]), c
    }
    (), bt(document).on(Ot.KEYDOWN_DATA_API, Wt, Gt._dataApiKeydownHandler).on(Ot.KEYDOWN_DATA_API, qt, Gt._dataApiKeydownHandler).on(Ot.CLICK_DATA_API + " " + Ot.KEYUP_DATA_API, Gt._clearMenus).on(Ot.CLICK_DATA_API, Wt, function (t) {
        t.preventDefault(), t.stopPropagation(), Gt._jQueryInterface.call(bt(this), "toggle")
    }).on(Ot.CLICK_DATA_API, Ut, function (t) {
        t.stopPropagation()
    }), bt.fn[St] = Gt._jQueryInterface, bt.fn[St]. Constructor = Gt, bt.fn[St].noConflict = function () {
        return bt.fn[St] = wt, Gt._jQueryInterface
    },
    Gt), Yn =(Xt = "modal", ee = "." +(te = "bs.modal"), ne =($t = e).fn[Xt], ie = {
        backdrop: ! 0, keyboard: ! 0, focus: ! 0, show: ! 0
    },
    re = {
        backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean"
    },
    oe = {
        HIDE: "hide" + ee, HIDDEN: "hidden" + ee, SHOW: "show" + ee, SHOWN: "shown" + ee, FOCUSIN: "focusin" + ee, RESIZE: "resize" + ee, CLICK_DISMISS: "click.dismiss" + ee, KEYDOWN_DISMISS: "keydown.dismiss" + ee, MOUSEUP_DISMISS: "mouseup.dismiss" + ee, MOUSEDOWN_DISMISS: "mousedown.dismiss" + ee, CLICK_DATA_API: "click" + ee + ".data-api"
    },
    se = "modal-scrollbar-measure", ae = "modal-backdrop", le = "modal-open", ce = "fade", he = "show", ue = ".modal-dialog", fe = '[data-toggle="modal"]', de = '[data-dismiss="modal"]', ge = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", _e = ".sticky-top", me = function () {
        function r(t, e) {
            this._config = this._getConfig(e), this._element = t, this._dialog = t.querySelector(ue), this._backdrop = null, this._isShown = ! 1, this._isBodyOverflowing = ! 1, this._ignoreBackdropClick = ! 1, this._scrollbarWidth = 0
        }
        var t = r.prototype; return t.toggle = function (t) {
            return this._isShown ? this.hide(): this.show(t)
        },
        t.show = function (t) {
            var e = this; if (! this._isTransitioning && ! this._isShown) {
                $t(this._element).hasClass(ce) &&(this._isTransitioning = ! 0);
                var n = $t.Event(oe.SHOW, {
                    relatedTarget: t
                });
                $t(this._element).trigger(n), this._isShown || n.isDefaultPrevented() ||(this._isShown = ! 0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), $t(document.body).addClass(le), this._setEscapeEvent(), this._setResizeEvent(), $t(this._element).on(oe.CLICK_DISMISS, de, function (t) {
                    return e.hide(t)
                }), $t(this._dialog).on(oe.MOUSEDOWN_DISMISS, function () {
                    $t(e._element).one(oe.MOUSEUP_DISMISS, function (t) {
                        $t(t.target).is(e._element) &&(e._ignoreBackdropClick = ! 0)
                    })
                }), this._showBackdrop(function () {
                    return e._showElement(t)
                }))
            }
        },
        t.hide = function (t) {
            var e = this; if (t && t.preventDefault(), ! this._isTransitioning && this._isShown) {
                var n = $t.Event(oe.HIDE);
                if ($t(this._element).trigger(n), this._isShown && ! n.isDefaultPrevented()) {
                    this._isShown = ! 1; var i = $t(this._element).hasClass(ce);
                    if (i &&(this._isTransitioning = ! 0), this._setEscapeEvent(), this._setResizeEvent(), $t(document).off(oe.FOCUSIN), $t(this._element).removeClass(he), $t(this._element).off(oe.CLICK_DISMISS), $t(this._dialog).off(oe.MOUSEDOWN_DISMISS), i) {
                        var r = Fn.getTransitionDurationFromElement(this._element);
                        $t(this._element).one(Fn.TRANSITION_END, function (t) {
                            return e._hideModal(t)
                        }).emulateTransitionEnd(r)
                    } else this._hideModal()
                }
            }
        },
        t.dispose = function () {
            $t.removeData(this._element, te), $t(window, document, this._element, this._backdrop).off(ee), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null
        },
        t.handleUpdate = function () {
            this._adjustDialog()
        },
        t._getConfig = function (t) {
            return t = l({
            },
            ie, t), Fn.typeCheckConfig(Xt, t, re), t
        },
        t._showElement = function (t) {
            var e = this, n = $t(this._element).hasClass(ce);
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, n && Fn.reflow(this._element), $t(this._element).addClass(he), this._config.focus && this._enforceFocus();
            var i = $t.Event(oe.SHOWN, {
                relatedTarget: t
            }), r = function () {
                e._config.focus && e._element.focus(), e._isTransitioning = ! 1, $t(e._element).trigger(i)
            };
            if (n) {
                var o = Fn.getTransitionDurationFromElement(this._element);
                $t(this._dialog).one(Fn.TRANSITION_END, r).emulateTransitionEnd(o)
            } else r()
        },
        t._enforceFocus = function () {
            var e = this; $t(document).off(oe.FOCUSIN).on(oe.FOCUSIN, function (t) {
                document !== t.target && e._element !== t.target && 0 === $t(e._element).has(t.target).length && e._element.focus()
            })
        },
        t._setEscapeEvent = function () {
            var e = this; this._isShown && this._config.keyboard ? $t(this._element).on(oe.KEYDOWN_DISMISS, function (t) {
                27 === t.which &&(t.preventDefault(), e.hide())
            }): this._isShown || $t(this._element).off(oe.KEYDOWN_DISMISS)
        },
        t._setResizeEvent = function () {
            var e = this; this._isShown ? $t(window).on(oe.RESIZE, function (t) {
                return e.handleUpdate(t)
            }): $t(window).off(oe.RESIZE)
        },
        t._hideModal = function () {
            var t = this; this._element.style.display = "none", this._element.setAttribute("aria-hidden", ! 0), this._isTransitioning = ! 1, this._showBackdrop(function () {
                $t(document.body).removeClass(le), t._resetAdjustments(), t._resetScrollbar(), $t(t._element).trigger(oe.HIDDEN)
            })
        },
        t._removeBackdrop = function () {
            this._backdrop &&($t(this._backdrop).remove(), this._backdrop = null)
        },
        t._showBackdrop = function (t) {
            var e = this, n = $t(this._element).hasClass(ce) ? ce: ""; if (this._isShown && this._config.backdrop) {
                if (this._backdrop = document.createElement("div"), this._backdrop.className = ae, n && this._backdrop.classList.add(n), $t(this._backdrop).appendTo(document.body), $t(this._element).on(oe.CLICK_DISMISS, function (t) {
                    e._ignoreBackdropClick ? e._ignoreBackdropClick = ! 1: t.target === t.currentTarget &&("static" === e._config.backdrop ? e._element.focus(): e.hide())
                }), n && Fn.reflow(this._backdrop), $t(this._backdrop).addClass(he), ! t) return; if (! n) return void t();
                var i = Fn.getTransitionDurationFromElement(this._backdrop);
                $t(this._backdrop).one(Fn.TRANSITION_END, t).emulateTransitionEnd(i)
            } else if (! this._isShown && this._backdrop) {
                $t(this._backdrop).removeClass(he);
                var r = function () {
                    e._removeBackdrop(), t && t()
                };
                if ($t(this._element).hasClass(ce)) {
                    var o = Fn.getTransitionDurationFromElement(this._backdrop);
                    $t(this._backdrop).one(Fn.TRANSITION_END, r).emulateTransitionEnd(o)
                } else r()
            } else t && t()
        },
        t._adjustDialog = function () {
            var t = this._element.scrollHeight > document.documentElement.clientHeight;! this._isBodyOverflowing && t &&(this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && ! t &&(this._element.style.paddingRight = this._scrollbarWidth + "px")
        },
        t._resetAdjustments = function () {
            this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
        },
        t._checkScrollbar = function () {
            var t = document.body.getBoundingClientRect();
            this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
        },
        t._setScrollbar = function () {
            var r = this; if (this._isBodyOverflowing) {
                var t =[].slice.call(document.querySelectorAll(ge)), e =[].slice.call(document.querySelectorAll(_e));
                $t(t).each(function (t, e) {
                    var n = e.style.paddingRight, i = $t(e).css("padding-right");
                    $t(e).data("padding-right", n).css("padding-right", parseFloat(i) + r._scrollbarWidth + "px")
                }), $t(e).each(function (t, e) {
                    var n = e.style.marginRight, i = $t(e).css("margin-right");
                    $t(e).data("margin-right", n).css("margin-right", parseFloat(i) - r._scrollbarWidth + "px")
                });
                var n = document.body.style.paddingRight, i = $t(document.body).css("padding-right");
                $t(document.body).data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px")
            }
        },
        t._resetScrollbar = function () {
            var t =[].slice.call(document.querySelectorAll(ge));
            $t(t).each(function (t, e) {
                var n = $t(e).data("padding-right");
                $t(e).removeData("padding-right"), e.style.paddingRight = n || ""
            });
            var e =[].slice.call(document.querySelectorAll("" + _e));
            $t(e).each(function (t, e) {
                var n = $t(e).data("margin-right");
                "undefined" != typeof n && $t(e).css("margin-right", n).removeData("margin-right")
            });
            var n = $t(document.body).data("padding-right");
            $t(document.body).removeData("padding-right"), document.body.style.paddingRight = n || ""
        },
        t._getScrollbarWidth = function () {
            var t = document.createElement("div");
            t.className = se, document.body.appendChild(t);
            var e = t.getBoundingClientRect().width - t.clientWidth; return document.body.removeChild(t), e
        },
        r._jQueryInterface = function (n, i) {
            return this.each(function () {
                var t = $t(this).data(te), e = l({
                },
                ie, $t(this).data(), "object" == typeof n && n ? n: {
                });
                if (t ||(t = new r(this, e), $t(this).data(te, t)), "string" == typeof n) {
                    if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                    t[n](i)
                } else e.show && t.show(i)
            })
        },
        s(r, null,[ {
            key: "VERSION", get: function () {
                return "4.1.3"
            }
        }, {
            key: "Default", get: function () {
                return ie
            }
        }]), r
    }
    (), $t(document).on(oe.CLICK_DATA_API, fe, function (t) {
        var e, n = this, i = Fn.getSelectorFromElement(this);
        i &&(e = document.querySelector(i));
        var r = $t(e).data(te) ? "toggle": l({
        },
        $t(e).data(), $t(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
        var o = $t(e).one(oe.SHOW, function (t) {
            t.isDefaultPrevented() || o.one(oe.HIDDEN, function () {
                $t(n).is(":visible") && n.focus()
            })
        });
        me._jQueryInterface.call($t(e), r, this)
    }), $t.fn[Xt] = me._jQueryInterface, $t.fn[Xt]. Constructor = me, $t.fn[Xt].noConflict = function () {
        return $t.fn[Xt] = ne, me._jQueryInterface
    },
    me), zn =(ve = "tooltip", Ee = "." +(ye = "bs.tooltip"), Ce =(pe = e).fn[ve], Te = "bs-tooltip", be = new RegExp("(^|\\s)" + Te + "\\S+", "g"), Ae = {
        animation: ! 0, template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !(Ie = {
            AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left"
        }), selector: !(Se = {
            animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "(number|string)", container: "(string|element|boolean)", fallbackPlacement: "(string|array)", boundary: "(string|element)"
        }), placement: "top", offset: 0, container: ! 1, fallbackPlacement: "flip", boundary: "scrollParent"
    },
    we = "out", Ne = {
        HIDE: "hide" + Ee, HIDDEN: "hidden" + Ee, SHOW:(De = "show") + Ee, SHOWN: "shown" + Ee, INSERTED: "inserted" + Ee, CLICK: "click" + Ee, FOCUSIN: "focusin" + Ee, FOCUSOUT: "focusout" + Ee, MOUSEENTER: "mouseenter" + Ee, MOUSELEAVE: "mouseleave" + Ee
    },
    Oe = "fade", ke = "show", Pe = ".tooltip-inner", je = ".arrow", He = "hover", Le = "focus", Re = "click", xe = "manual", We = function () {
        function i(t, e) {
            if ("undefined" == typeof h) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
            this._isEnabled = ! 0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {
            },
            this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners()
        }
        var t = i.prototype; return t.enable = function () {
            this._isEnabled = ! 0
        },
        t.disable = function () {
            this._isEnabled = ! 1
        },
        t.toggleEnabled = function () {
            this._isEnabled = ! this._isEnabled
        },
        t.toggle = function (t) {
            if (this._isEnabled) if (t) {
                var e = this. constructor.DATA_KEY, n = pe(t.currentTarget).data(e);
                n ||(n = new this. constructor (t.currentTarget, this._getDelegateConfig()), pe(t.currentTarget).data(e, n)), n._activeTrigger.click = ! n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n): n._leave(null, n)
            } else {
                if (pe(this.getTipElement()).hasClass(ke)) return void this._leave(null, this);
                this._enter(null, this)
            }
        },
        t.dispose = function () {
            clearTimeout(this._timeout), pe.removeData(this.element, this. constructor.DATA_KEY), pe(this.element).off(this. constructor.EVENT_KEY), pe(this.element).closest(".modal").off("hide.bs.modal"), this.tip && pe(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null,(this._activeTrigger = null) !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
        },
        t.show = function () {
            var e = this; if ("none" === pe(this.element).css("display")) throw new Error("Please use show on visible elements");
            var t = pe.Event(this. constructor.Event.SHOW);
            if (this.isWithContent() && this._isEnabled) {
                pe(this.element).trigger(t);
                var n = pe.contains(this.element.ownerDocument.documentElement, this.element);
                if (t.isDefaultPrevented() || ! n) return; var i = this.getTipElement(), r = Fn.getUID(this. constructor.NAME);
                i.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && pe(i).addClass(Oe);
                var o = "function" == typeof this.config.placement ? this.config.placement.call(this, i, this.element): this.config.placement, s = this._getAttachment(o);
                this.addAttachmentClass(s);
                var a = ! 1 === this.config.container ? document.body: pe(document).find(this.config.container);
                pe(i).data(this. constructor.DATA_KEY, this), pe.contains(this.element.ownerDocument.documentElement, this.tip) || pe(i).appendTo(a), pe(this.element).trigger(this. constructor.Event.INSERTED), this._popper = new h(this.element, i, {
                    placement: s, modifiers: {
                        offset: {
                            offset: this.config.offset
                        },
                        flip: {
                            behavior: this.config.fallbackPlacement
                        },
                        arrow: {
                            element: je
                        },
                        preventOverflow: {
                            boundariesElement: this.config.boundary
                        }
                    },
                    onCreate: function (t) {
                        t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                    },
                    onUpdate: function (t) {
                        e._handlePopperPlacementChange(t)
                    }
                }), pe(i).addClass(ke), "ontouchstart" in document.documentElement && pe(document.body).children().on("mouseover", null, pe.noop);
                var l = function () {
                    e.config.animation && e._fixTransition();
                    var t = e._hoverState; e._hoverState = null, pe(e.element).trigger(e. constructor.Event.SHOWN), t === we && e._leave(null, e)
                };
                if (pe(this.tip).hasClass(Oe)) {
                    var c = Fn.getTransitionDurationFromElement(this.tip);
                    pe(this.tip).one(Fn.TRANSITION_END, l).emulateTransitionEnd(c)
                } else l()
            }
        },
        t.hide = function (t) {
            var e = this, n = this.getTipElement(), i = pe.Event(this. constructor.Event.HIDE), r = function () {
                e._hoverState !== De && n.parentNode && n.parentNode.removeChild(n), e._cleanTipClass(), e.element.removeAttribute("aria-describedby"), pe(e.element).trigger(e. constructor.Event.HIDDEN), null !== e._popper && e._popper.destroy(), t && t()
            };
            if (pe(this.element).trigger(i), ! i.isDefaultPrevented()) {
                if (pe(n).removeClass(ke), "ontouchstart" in document.documentElement && pe(document.body).children().off("mouseover", null, pe.noop), this._activeTrigger[Re] = ! 1, this._activeTrigger[Le] = ! 1, this._activeTrigger[He] = ! 1, pe(this.tip).hasClass(Oe)) {
                    var o = Fn.getTransitionDurationFromElement(n);
                    pe(n).one(Fn.TRANSITION_END, r).emulateTransitionEnd(o)
                } else r();
                this._hoverState = ""
            }
        },
        t.update = function () {
            null !== this._popper && this._popper.scheduleUpdate()
        },
        t.isWithContent = function () {
            return Boolean (this.getTitle())
        },
        t.addAttachmentClass = function (t) {
            pe(this.getTipElement()).addClass(Te + "-" + t)
        },
        t.getTipElement = function () {
            return this.tip = this.tip || pe(this.config.template)[0], this.tip
        },
        t.setContent = function () {
            var t = this.getTipElement();
            this.setElementContent(pe(t.querySelectorAll(Pe)), this.getTitle()), pe(t).removeClass(Oe + " " + ke)
        },
        t.setElementContent = function (t, e) {
            var n = this.config.html; "object" == typeof e &&(e.nodeType || e.jquery) ? n ? pe(e).parent().is(t) || t.empty().append(e): t.text(pe(e).text()): t[n ? "html": "text"](e)
        },
        t.getTitle = function () {
            var t = this.element.getAttribute("data-original-title");
            return t ||(t = "function" == typeof this.config.title ? this.config.title.call(this.element): this.config.title), t
        },
        t._getAttachment = function (t) {
            return Ie[t.toUpperCase()]
        },
        t._setListeners = function () {
            var i = this; this.config.trigger.split(" ").forEach(function (t) {
                if ("click" === t) pe(i.element).on(i. constructor.Event.CLICK, i.config.selector, function (t) {
                    return i.toggle(t)
                }); else if (t !== xe) {
                    var e = t === He ? i. constructor.Event.MOUSEENTER: i. constructor.Event.FOCUSIN, n = t === He ? i. constructor.Event.MOUSELEAVE: i. constructor.Event.FOCUSOUT; pe(i.element).on(e, i.config.selector, function (t) {
                        return i._enter(t)
                    }).on(n, i.config.selector, function (t) {
                        return i._leave(t)
                    })
                }
                pe(i.element).closest(".modal").on("hide.bs.modal", function () {
                    return i.hide()
                })
            }), this.config.selector ? this.config = l({
            },
            this.config, {
                trigger: "manual", selector: ""
            }): this._fixTitle()
        },
        t._fixTitle = function () {
            var t = typeof this.element.getAttribute("data-original-title");
            (this.element.getAttribute("title") || "string" !== t) &&(this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
        },
        t._enter = function (t, e) {
            var n = this. constructor.DATA_KEY;(e = e || pe(t.currentTarget).data(n)) ||(e = new this. constructor (t.currentTarget, this._getDelegateConfig()), pe(t.currentTarget).data(n, e)), t &&(e._activeTrigger[ "focusin" === t.type ? Le: He] = ! 0), pe(e.getTipElement()).hasClass(ke) || e._hoverState === De ? e._hoverState = De:(clearTimeout(e._timeout), e._hoverState = De, e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function () {
                e._hoverState === De && e.show()
            },
            e.config.delay.show): e.show())
        },
        t._leave = function (t, e) {
            var n = this. constructor.DATA_KEY;(e = e || pe(t.currentTarget).data(n)) ||(e = new this. constructor (t.currentTarget, this._getDelegateConfig()), pe(t.currentTarget).data(n, e)), t &&(e._activeTrigger[ "focusout" === t.type ? Le: He] = ! 1), e._isWithActiveTrigger() ||(clearTimeout(e._timeout), e._hoverState = we, e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function () {
                e._hoverState === we && e.hide()
            },
            e.config.delay.hide): e.hide())
        },
        t._isWithActiveTrigger = function () {
            for (var t in this._activeTrigger) if (this._activeTrigger[t]) return ! 0; return ! 1
        },
        t._getConfig = function (t) {
            return "number" == typeof (t = l({
            },
            this. constructor. Default, pe(this.element).data(), "object" == typeof t && t ? t: {
            })).delay &&(t.delay = {
                show: t.delay, hide: t.delay
            }), "number" == typeof t.title &&(t.title = t.title.toString()), "number" == typeof t.content &&(t.content = t.content.toString()), Fn.typeCheckConfig(ve, t, this. constructor.DefaultType), t
        },
        t._getDelegateConfig = function () {
            var t = {
            };
            if (this.config) for (var e in this.config) this. constructor. Default[e] !== this.config[e] &&(t[e] = this.config[e]);
            return t
        },
        t._cleanTipClass = function () {
            var t = pe(this.getTipElement()), e = t.attr("class").match(be);
            null !== e && e.length && t.removeClass(e.join(""))
        },
        t._handlePopperPlacementChange = function (t) {
            var e = t.instance; this.tip = e.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement))
        },
        t._fixTransition = function () {
            var t = this.getTipElement(), e = this.config.animation; null === t.getAttribute("x-placement") &&(pe(t).removeClass(Oe), this.config.animation = ! 1, this.hide(), this.show(), this.config.animation = e)
        },
        i._jQueryInterface = function (n) {
            return this.each(function () {
                var t = pe(this).data(ye), e = "object" == typeof n && n; if ((t || ! /dispose|hide/.test(n)) &&(t ||(t = new i(this, e), pe(this).data(ye, t)), "string" == typeof n)) {
                    if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                    t[n]()
                }
            })
        },
        s(i, null,[ {
            key: "VERSION", get: function () {
                return "4.1.3"
            }
        }, {
            key: "Default", get: function () {
                return Ae
            }
        }, {
            key: "NAME", get: function () {
                return ve
            }
        }, {
            key: "DATA_KEY", get: function () {
                return ye
            }
        }, {
            key: "Event", get: function () {
                return Ne
            }
        }, {
            key: "EVENT_KEY", get: function () {
                return Ee
            }
        }, {
            key: "DefaultType", get: function () {
                return Se
            }
        }]), i
    }
    (), pe.fn[ve] = We._jQueryInterface, pe.fn[ve]. Constructor = We, pe.fn[ve].noConflict = function () {
        return pe.fn[ve] = Ce, We._jQueryInterface
    },
    We), Jn =(qe = "popover", Ke = "." +(Fe = "bs.popover"), Me =(Ue = e).fn[qe], Qe = "bs-popover", Be = new RegExp("(^|\\s)" + Qe + "\\S+", "g"), Ve = l({
    },
    zn. Default, {
        placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
    }), Ye = l({
    },
    zn.DefaultType, {
        content: "(string|element|function)"
    }), ze = "fade", Ze = ".popover-header", Ge = ".popover-body", $e = {
        HIDE: "hide" + Ke, HIDDEN: "hidden" + Ke, SHOW:(Je = "show") + Ke, SHOWN: "shown" + Ke, INSERTED: "inserted" + Ke, CLICK: "click" + Ke, FOCUSIN: "focusin" + Ke, FOCUSOUT: "focusout" + Ke, MOUSEENTER: "mouseenter" + Ke, MOUSELEAVE: "mouseleave" + Ke
    },
    Xe = function (t) {
        var e, n; function i() {
            return t.apply(this, arguments) || this
        }
        n = t,(e = i).prototype = Object.create(n.prototype),(e.prototype. constructor = e).__proto__ = n; var r = i.prototype; return r.isWithContent = function () {
            return this.getTitle() || this._getContent()
        },
        r.addAttachmentClass = function (t) {
            Ue(this.getTipElement()).addClass(Qe + "-" + t)
        },
        r.getTipElement = function () {
            return this.tip = this.tip || Ue(this.config.template)[0], this.tip
        },
        r.setContent = function () {
            var t = Ue(this.getTipElement());
            this.setElementContent(t.find(Ze), this.getTitle());
            var e = this._getContent();
            "function" == typeof e &&(e = e.call(this.element)), this.setElementContent(t.find(Ge), e), t.removeClass(ze + " " + Je)
        },
        r._getContent = function () {
            return this.element.getAttribute("data-content") || this.config.content
        },
        r._cleanTipClass = function () {
            var t = Ue(this.getTipElement()), e = t.attr("class").match(Be);
            null !== e && 0 < e.length && t.removeClass(e.join(""))
        },
        i._jQueryInterface = function (n) {
            return this.each(function () {
                var t = Ue(this).data(Fe), e = "object" == typeof n ? n: null; if ((t || ! /destroy|hide/.test(n)) &&(t ||(t = new i(this, e), Ue(this).data(Fe, t)), "string" == typeof n)) {
                    if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                    t[n]()
                }
            })
        },
        s(i, null,[ {
            key: "VERSION", get: function () {
                return "4.1.3"
            }
        }, {
            key: "Default", get: function () {
                return Ve
            }
        }, {
            key: "NAME", get: function () {
                return qe
            }
        }, {
            key: "DATA_KEY", get: function () {
                return Fe
            }
        }, {
            key: "Event", get: function () {
                return $e
            }
        }, {
            key: "EVENT_KEY", get: function () {
                return Ke
            }
        }, {
            key: "DefaultType", get: function () {
                return Ye
            }
        }]), i
    }
    (zn), Ue.fn[qe] = Xe._jQueryInterface, Ue.fn[qe]. Constructor = Xe, Ue.fn[qe].noConflict = function () {
        return Ue.fn[qe] = Me, Xe._jQueryInterface
    },
    Xe), Zn =(en = "scrollspy", rn = "." +(nn = "bs.scrollspy"), on =(tn = e).fn[en], sn = {
        offset: 10, method: "auto", target: ""
    },
    an = {
        offset: "number", method: "string", target: "(string|element)"
    },
    ln = {
        ACTIVATE: "activate" + rn, SCROLL: "scroll" + rn, LOAD_DATA_API: "load" + rn + ".data-api"
    },
    cn = "dropdown-item", hn = "active", un = '[data-spy="scroll"]', fn = ".active", dn = ".nav, .list-group", gn = ".nav-link", _n = ".nav-item", mn = ".list-group-item", pn = ".dropdown", vn = ".dropdown-item", yn = ".dropdown-toggle", En = "offset", Cn = "position", Tn = function () {
        function n(t, e) {
            var n = this; this._element = t, this._scrollElement = "BODY" === t.tagName ? window: t, this._config = this._getConfig(e), this._selector = this._config.target + " " + gn + "," + this._config.target + " " + mn + "," + this._config.target + " " + vn, this._offsets =[], this._targets =[], this._activeTarget = null, this._scrollHeight = 0, tn(this._scrollElement).on(ln.SCROLL, function (t) {
                return n._process(t)
            }), this.refresh(), this._process()
        }
        var t = n.prototype; return t.refresh = function () {
            var e = this, t = this._scrollElement === this._scrollElement.window ? En: Cn, r = "auto" === this._config.method ? t: this._config.method, o = r === Cn ? this._getScrollTop(): 0; this._offsets =[], this._targets =[], this._scrollHeight = this._getScrollHeight(),[].slice.call(document.querySelectorAll(this._selector)).map(function (t) {
                var e, n = Fn.getSelectorFromElement(t);
                if (n &&(e = document.querySelector(n)), e) {
                    var i = e.getBoundingClientRect();
                    if (i.width || i.height) return[tn(e)[r]().top + o, n]
                }
                return null
            }).filter(function (t) {
                return t
            }).sort(function (t, e) {
                return t[0] - e[0]
            }).forEach(function (t) {
                e._offsets.push(t[0]), e._targets.push(t[1])
            })
        },
        t.dispose = function () {
            tn.removeData(this._element, nn), tn(this._scrollElement).off(rn), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
        },
        t._getConfig = function (t) {
            if ("string" != typeof (t = l({
            },
            sn, "object" == typeof t && t ? t: {
            })).target) {
                var e = tn(t.target).attr("id");
                e ||(e = Fn.getUID(en), tn(t.target).attr("id", e)), t.target = "#" + e
            }
            return Fn.typeCheckConfig(en, t, an), t
        },
        t._getScrollTop = function () {
            return this._scrollElement === window ? this._scrollElement.pageYOffset: this._scrollElement.scrollTop
        },
        t._getScrollHeight = function () {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
        },
        t._getOffsetHeight = function () {
            return this._scrollElement === window ? window.innerHeight: this._scrollElement.getBoundingClientRect().height
        },
        t._process = function () {
            var t = this._getScrollTop() + this._config.offset, e = this._getScrollHeight(), n = this._config.offset + e - this._getOffsetHeight();
            if (this._scrollHeight !== e && this.refresh(), n <= t) {
                var i = this._targets[ this._targets.length -1]; this._activeTarget !== i && this._activate(i)
            } else {
                if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();
                for (var r = this._offsets.length; r--;) {
                    this._activeTarget !== this._targets[r] && t >= this._offsets[r] &&("undefined" == typeof this._offsets[r + 1] || t < this._offsets[r + 1]) && this._activate(this._targets[r])
                }
            }
        },
        t._activate = function (e) {
            this._activeTarget = e, this._clear();
            var t = this._selector.split(",");
            t = t.map(function (t) {
                return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
            });
            var n = tn([].slice.call(document.querySelectorAll(t.join(","))));
            n.hasClass(cn) ?(n.closest(pn).find(yn).addClass(hn), n.addClass(hn)):(n.addClass(hn), n.parents(dn).prev(gn + ", " + mn).addClass(hn), n.parents(dn).prev(_n).children(gn).addClass(hn)), tn(this._scrollElement).trigger(ln.ACTIVATE, {
                relatedTarget: e
            })
        },
        t._clear = function () {
            var t =[].slice.call(document.querySelectorAll(this._selector));
            tn(t).filter(fn).removeClass(hn)
        },
        n._jQueryInterface = function (e) {
            return this.each(function () {
                var t = tn(this).data(nn);
                if (t ||(t = new n(this, "object" == typeof e && e), tn(this).data(nn, t)), "string" == typeof e) {
                    if ("undefined" == typeof t[e]) throw new TypeError('No method named "' + e + '"');
                    t[e]()
                }
            })
        },
        s(n, null,[ {
            key: "VERSION", get: function () {
                return "4.1.3"
            }
        }, {
            key: "Default", get: function () {
                return sn
            }
        }]), n
    }
    (), tn(window).on(ln.LOAD_DATA_API, function () {
        for (var t =[].slice.call(document.querySelectorAll(un)), e = t.length; e--;) {
            var n = tn(t[e]);
            Tn._jQueryInterface.call(n, n.data())
        }
    }), tn.fn[en] = Tn._jQueryInterface, tn.fn[en]. Constructor = Tn, tn.fn[en].noConflict = function () {
        return tn.fn[en] = on, Tn._jQueryInterface
    },
    Tn), Gn =(In = "." +(Sn = "bs.tab"), An =(bn = e).fn.tab, Dn = {
        HIDE: "hide" + In, HIDDEN: "hidden" + In, SHOW: "show" + In, SHOWN: "shown" + In, CLICK_DATA_API: "click" + In + ".data-api"
    },
    wn = "dropdown-menu", Nn = "active", On = "disabled", kn = "fade", Pn = "show", jn = ".dropdown", Hn = ".nav, .list-group", Ln = ".active", Rn = "> li > .active", xn = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', Wn = ".dropdown-toggle", Un = "> .dropdown-menu .active", qn = function () {
        function i(t) {
            this._element = t
        }
        var t = i.prototype; return t.show = function () {
            var n = this; if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && bn(this._element).hasClass(Nn) || bn(this._element).hasClass(On))) {
                var t, i, e = bn(this._element).closest(Hn)[0], r = Fn.getSelectorFromElement(this._element);
                if (e) {
                    var o = "UL" === e.nodeName ? Rn: Ln; i =(i = bn.makeArray(bn(e).find(o)))[i.length -1]
                }
                var s = bn.Event(Dn.HIDE, {
                    relatedTarget: this._element
                }), a = bn.Event(Dn.SHOW, {
                    relatedTarget: i
                });
                if (i && bn(i).trigger(s), bn(this._element).trigger(a), ! a.isDefaultPrevented() && ! s.isDefaultPrevented()) {
                    r &&(t = document.querySelector(r)), this._activate(this._element, e);
                    var l = function () {
                        var t = bn.Event(Dn.HIDDEN, {
                            relatedTarget: n._element
                        }), e = bn.Event(Dn.SHOWN, {
                            relatedTarget: i
                        });
                        bn(i).trigger(t), bn(n._element).trigger(e)
                    };
                    t ? this._activate(t, t.parentNode, l): l()
                }
            }
        },
        t.dispose = function () {
            bn.removeData(this._element, Sn), this._element = null
        },
        t._activate = function (t, e, n) {
            var i = this, r =("UL" === e.nodeName ? bn(e).find(Rn): bn(e).children(Ln))[0], o = n && r && bn(r).hasClass(kn), s = function () {
                return i._transitionComplete(t, r, n)
            };
            if (r && o) {
                var a = Fn.getTransitionDurationFromElement(r);
                bn(r).one(Fn.TRANSITION_END, s).emulateTransitionEnd(a)
            } else s()
        },
        t._transitionComplete = function (t, e, n) {
            if (e) {
                bn(e).removeClass(Pn + " " + Nn);
                var i = bn(e.parentNode).find(Un)[0]; i && bn(i).removeClass(Nn), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", ! 1)
            }
            if (bn(t).addClass(Nn), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", ! 0), Fn.reflow(t), bn(t).addClass(Pn), t.parentNode && bn(t.parentNode).hasClass(wn)) {
                var r = bn(t).closest(jn)[0]; if (r) {
                    var o =[].slice.call(r.querySelectorAll(Wn));
                    bn(o).addClass(Nn)
                }
                t.setAttribute("aria-expanded", ! 0)
            }
            n && n()
        },
        i._jQueryInterface = function (n) {
            return this.each(function () {
                var t = bn(this), e = t.data(Sn);
                if (e ||(e = new i(this), t.data(Sn, e)), "string" == typeof n) {
                    if ("undefined" == typeof e[n]) throw new TypeError('No method named "' + n + '"');
                    e[n]()
                }
            })
        },
        s(i, null,[ {
            key: "VERSION", get: function () {
                return "4.1.3"
            }
        }]), i
    }
    (), bn(document).on(Dn.CLICK_DATA_API, xn, function (t) {
        t.preventDefault(), qn._jQueryInterface.call(bn(this), "show")
    }), bn.fn.tab = qn._jQueryInterface, bn.fn.tab. Constructor = qn, bn.fn.tab.noConflict = function () {
        return bn.fn.tab = An, qn._jQueryInterface
    },
    qn);! function (t) {
        if ("undefined" == typeof t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
        var e = t.fn.jquery.split(" ")[0].split(".");
        if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || 4 <= e[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
    }
    (e), t.Util = Fn, t.Alert = Kn, t.Button = Mn, t.Carousel = Qn, t.Collapse = Bn, t.Dropdown = Vn, t.Modal = Yn, t.Popover = Jn, t.Scrollspy = Zn, t.Tab = Gn, t.Tooltip = zn, Object.defineProperty(t, "__esModule", {
        value: ! 0
    })
});
//# sourceMappingURL=bootstrap.min.js.map

/*!
 * Jasny Bootstrap v3.2.0 (http://jasny.github.io/bootstrap)
 * Copyright 2012-2019 Arnold Daniels
 * Licensed under  ()
 */
if ("undefined" == typeof jQuery) throw new Error("Jasny Bootstrap's JavaScript requires jQuery"); + function (a) {
    "use strict";
    function b() {
        var a = document.createElement("bootstrap"), b = {
            WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend"
        };
        for (var c in b) if (void 0 !== a.style[c]) return {
            end: b[c]
        };
        return ! 1
    }
    void 0 === a.support.transition &&(a.fn.emulateTransitionEnd = function (b) {
        var c = ! 1, d = this; a(this).one(a.support.transition.end, function () {
            c = ! 0
        });
        var e = function () {
            c || a(d).trigger(a.support.transition.end)
        };
        return setTimeout(e, b), this
    },
    a(function () {
        a.support.transition = b()
    }))
}
(window.jQuery), + function (a) {
    "use strict";
    var b = navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i), c = function (b, d) {
        if (this.$element = a(b), this.options = a.extend({
        },
        c.DEFAULTS, d), this.state = null, this.placement = null, this.$calcClone = null, this.calcClone(), this.options.recalc && a(window).on("resize", a.proxy(this.recalc, this)), this.options.autohide && ! this.options.modal) {
            null === navigator.userAgent.match(/(iPad|iPhone)/i) ? "click": "touchstart";
            a(document).on("click touchstart", a.proxy(this.autohide, this))
        }
        a(this.$element).on("shown.bs.dropdown", a.proxy(function (b) {
            a(this.$element).find(".dropdown .dropdown-backdrop").remove()
        },
        this)), "boolean" == typeof this.options.disablescrolling &&(this.options.disableScrolling = this.options.disablescrolling, delete this.options.disablescrolling), this.options.toggle && this.toggle()
    };
    c.DEFAULTS = {
        toggle: ! 0, placement: "auto", autohide: ! 0, recalc: ! 0, disableScrolling: ! 0, modal: ! 1, backdrop: ! 1, exclude: null
    },
    c.prototype.setWidth = function () {
        var b = this.$element.outerWidth(), c = a(window).width();
        c -= 68, this.$element.css("width", b > c ? c: b)
    },
    c.prototype.offset = function () {
        switch (this.placement) {
            case "left": case "right": return this.$element.outerWidth();
            case "top": case "bottom": return this.$element.outerHeight()
        }
    },
    c.prototype.calcPlacement = function () {
        function b(a, b) {
            if ("auto" === e.css(b)) return a;
            if ("auto" === e.css(a)) return b;
            var c = parseInt(e.css(a), 10), d = parseInt(e.css(b), 10);
            return c > d ? b: a
        }
        if ("auto" !== this.options.placement) return void (this.placement = this.options.placement);
        this.$element.hasClass("in") || this.$element.css("visiblity", "hidden !important").addClass("in");
        var c = a(window).width() / this.$element.outerWidth(), d = a(window).height() / this.$element.outerHeight(), e = this.$element;
        this.placement = c > d ? b("left", "right"): b("top", "bottom"), "hidden !important" === this.$element.css("visibility") && this.$element.removeClass("in").css("visiblity", "")
    },
    c.prototype.opposite = function (a) {
        switch (a) {
            case "top": return "bottom";
            case "left": return "right";
            case "bottom": return "top";
            case "right": return "left"
        }
    },
    c.prototype.getCanvasElements = function () {
        var b = this.options.canvas ? a(this.options.canvas): this.$element, c = b.find("*").filter(function () {
            return "fixed" === getComputedStyle(this).getPropertyValue("position")
        }).not(this.options.exclude);
        return b.add(c)
    },
    c.prototype.slide = function (b, c, d) {
        if (! a.support.transition) {
            var e = {
            };
            return e[ this.placement] = "+=" + c, e[ this.opposite(this.placement)] = "-=" + c, b.animate(e, 350, d)
        }
        var f = this.placement, g = this.opposite(f);
        b.each(function () {
            "auto" !== a(this).css(f) && a(this).css(f,(parseInt(a(this).css(f), 10) || 0) + c), "auto" !== a(this).css(g) && a(this).css(g,(parseInt(a(this).css(g), 10) || 0) - c)
        }), this.$element.one(a.support.transition.end, d).emulateTransitionEnd(350)
    },
    c.prototype.disableScrolling = function () {
        var c = a("body").width(), d = "padding-right";
        if (void 0 === a("body").data("offcanvas-style") && a("body").data("offcanvas-style", a("body").attr("style") || ""), a("body").css("overflow", "hidden"), b && a("body").addClass("lockIphone"), a("body").width() > c) {
            var e = parseInt(a("body").css(d), 10) + a("body").width() - c;
            setTimeout(function () {
                a("body").css(d, e)
            },
            1)
        }
        a("body").on("touchmove.bs", function (b) {
            a(event.target).closest(".offcanvas").length || b.preventDefault()
        })
    },
    c.prototype.enableScrolling = function () {
        a("body").off("touchmove.bs"), a("body").removeClass("lockIphone")
    },
    c.prototype.show = function () {
        if (! this.state) {
            var c = a.Event("show.bs.offcanvas");
            this.$element.trigger(c), c.isDefaultPrevented() || this.hideOthers(a.proxy(function () {
                this.state = "slide-in", this.$element.css("width", ""), this.calcPlacement(), this.setWidth();
                var c = this.getCanvasElements(), d = this.placement, e = this.opposite(d), f = this.offset();
                c.index(this.$element) !== -1 &&(a(this.$element).data("offcanvas-style", a(this.$element).attr("style") || ""), this.$element.css(d, -1 * f), this.$element.css(d)), c.addClass("canvas-sliding").each(function () {
                    var c = a(this);
                    void 0 === c.data("offcanvas-style") && c.data("offcanvas-style", c.attr("style") || ""), "static" !== c.css("position") || b || c.css("position", "relative"), "auto" !== c.css(d) && "0px" !== c.css(d) || "auto" !== c.css(e) && "0px" !== c.css(e) || c.css(d, 0)
                }), this.options.disableScrolling && this.disableScrolling(),(this.options.modal || this.options.backdrop) && this.toggleBackdrop();
                var g = function () {
                    "slide-in" == this.state &&(this.state = "slid", c.removeClass("canvas-sliding").addClass("canvas-slid"), this.$element.trigger("shown.bs.offcanvas"))
                };
                setTimeout(a.proxy(function () {
                    this.$element.addClass("in"), this.slide(c, f, a.proxy(g, this))
                },
                this), 1)
            },
            this))
        }
    },
    c.prototype.hideOthers = function (b) {
        var c = ! 1, d = this.$element.attr("id"), e = a('.offcanvas-clone:not([data-id="' + d + '"])');
        return e.length ?(e.each(function (d, e) {
            var f = a(e).attr("data-id"), g = a("#" + f);
            c = g.hasClass("canvas-slid"), c &&(g.one("hidden.bs.offcanvas", b), g.offcanvas("hide"))
        }), void (c || b())): b()
    },
    c.prototype.hide = function () {
        if ("slid" === this.state) {
            var b = a.Event("hide.bs.offcanvas");
            if (this.$element.trigger(b), ! b.isDefaultPrevented()) {
                this.state = "slide-out";
                var c = a(".canvas-slid"), d =(this.placement, -1 * this.offset()), e = function () {
                    "slide-out" == this.state &&(this.state = null, this.placement = null, this.$element.removeClass("in"), c.removeClass("canvas-sliding"), c.add(this.$element).add("body").each(function () {
                        a(this).attr("style", a(this).data("offcanvas-style")).removeData("offcanvas-style")
                    }), this.$element.css("width", ""), this.$element.trigger("hidden.bs.offcanvas"))
                };
                this.options.disableScrolling && this.enableScrolling(),(this.options.modal || this.options.backdrop) && this.toggleBackdrop(), c.removeClass("canvas-slid").addClass("canvas-sliding"), setTimeout(a.proxy(function () {
                    this.slide(c, d, a.proxy(e, this))
                },
                this), 1)
            }
        }
    },
    c.prototype.toggle = function () {
        "slide-in" !== this.state && "slide-out" !== this.state && this[ "slid" === this.state ? "hide": "show"]()
    },
    c.prototype.toggleBackdrop = function (b) {
        b = b || a.noop;
        var c = 150;
        if ("slide-in" == this.state) {
            var d = a("body"), e = a.support.transition;
            this.$backdrop = a('<div class="modal-backdrop fade" />'), this.options.backdrop ?(this.$backdrop.addClass("allow-navbar"), this.options.canvas && a(this.options.canvas)[0] !== d[0] ?(a(this.options.canvas).addClass("limit-backdrop"), this.$backdrop.appendTo(this.options.canvas)): this.$backdrop.insertAfter(this.$element)): this.$backdrop.insertAfter(this.$element), e && this.$backdrop[0].offsetWidth, d.addClass("modal-open"), this.$backdrop.addClass("show").show(), this.$backdrop.on("click.bs", a.proxy(this.autohide, this)), e ? this.$backdrop.one(a.support.transition.end, b).emulateTransitionEnd(c): b()
        } else if ("slide-out" == this.state && this.$backdrop) {
            var f = this;
            if (this.$backdrop.hide().removeClass("show"), a("body").removeClass("modal-open").off("touchmove.bs"), a.support.transition ? this.$backdrop.one(a.support.transition.end, function () {
                f.$backdrop.remove(), b(), f.$backdrop = null
            }).emulateTransitionEnd(c):(this.$backdrop.remove(), this.$backdrop = null, b()), this.options.canvas && a(this.options.canvas)[0] !== a("body")[0]) {
                var g = this.options.canvas;
                setTimeout(function () {
                    a(g).removeClass("limit-backdrop")
                },
                c)
            }
        } else b && b()
    },
    c.prototype.calcClone = function () {
        var b = this.$element.attr("id");
        this.$calcClone = a('.offcanvas-clone[data-id="' + b + '"]'), this.$calcClone.length ||(this.$calcClone = this.$element.clone().addClass("offcanvas-clone").attr("data-id", b).removeAttr("id").appendTo(a("body")).html("")), this.$calcClone.removeClass("in")
    },
    c.prototype.recalc = function () {
        if ("none" !== this.$calcClone.css("display") &&("slid" === this.state || "slide-in" === this.state)) {
            this.state = null, this.placement = null;
            var b = this.getCanvasElements();
            this.$element.trigger("hide.bs.offcanvas"), this.$element.removeClass("in"), b.removeClass("canvas-slid"), b.add(this.$element).add("body").each(function () {
                a(this).attr("style", a(this).data("offcanvas-style")).removeData("offcanvas-style")
            }), this.$element.trigger("hidden.bs.offcanvas")
        }
    },
    c.prototype.autohide = function (b) {
        var c = a(b.target), d = ! c.hasClass("dropdown-backdrop") && 0 === c.closest(this.$element).length;
        d && this.hide()
    };
    var d = a.fn.offcanvas;
    a.fn.offcanvas = function (b) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.offcanvas"), f = a.extend({
            },
            c.DEFAULTS, d.data(), "object" == typeof b && b);
            d.hasClass("offcanvas-clone") ||(e || d.data("bs.offcanvas", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    },
    a.fn.offcanvas. Constructor = c, a.fn.offcanvas.noConflict = function () {
        return a.fn.offcanvas = d, this
    },
    a(document).on("click.bs.offcanvas.data-api", "[data-toggle=offcanvas]", function (b) {
        var c, d = a(this), e = d.attr("data-target") ||(c = d.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, ""), f = a(e), g = f.data("bs.offcanvas"), h = g ? "toggle": a.extend(d.data(), f.data());
        b.preventDefault(), b.stopPropagation(), g ? g.toggle(): f.offcanvas(h)
    })
}
(window.jQuery) + function (a) {
    "use strict";
    var b = function (c, d) {
        this.$element = a(c), this.options = a.extend({
        },
        b.DEFAULTS, d), this.$element.on("click.bs.rowlink mouseup.bs.rowlink", "td:not(.rowlink-skip)", a.proxy(this.click, this))
    };
    b.DEFAULTS = {
        target: "a"
    },
    b.prototype.click = function (b, c) {
        var d = a(b.currentTarget).closest("tr").find(this.options.target)[0];
        if ("undefined" != typeof d && a(b.target)[0] !== d &&("mouseup" !== b.type || 2 === b.which)) if (b.preventDefault(), c = c || b.ctrlKey || "mouseup" === b.type && 2 === b.which, ! c && d.click) d.click(); else if (document.createEvent) {
            var e = new MouseEvent("click", {
                view: window, bubbles: ! 0, cancelable: ! 0, ctrlKey: c
            });
            d.dispatchEvent(e)
        }
    };
    var c = a.fn.rowlink;
    a.fn.rowlink = function (c) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.rowlink");
            e || d.data("bs.rowlink", e = new b(this, c))
        })
    },
    a.fn.rowlink. Constructor = b, a.fn.rowlink.noConflict = function () {
        return a.fn.rowlink = c, this
    },
    a(document).on("click.bs.rowlink.data-api mouseup.bs.rowlink.data-api", '[data-link="row"]', function (b) {
        if (("mouseup" !== b.type || 2 === b.which) && 0 === a(b.target).closest(".rowlink-skip").length) {
            var c = a(this);
            if (! c.data("bs.rowlink")) {
                c.rowlink(c.data());
                var d = b.ctrlKey || 2 === b.which; a(b.target).trigger("click.bs.rowlink",[d])
            }
        }
    })
}
(window.jQuery), + function (a) {
    "use strict";
    var b = "Microsoft Internet Explorer" == window.navigator.appName, c = function (b, d) {
        if (this.$element = a(b), this.options = a.extend({
        },
        c.DEFAULTS, d), this.$input = this.$element.find(":file"), 0 !== this.$input.length) {
            this.name = this.$input.attr("name") || d.name, this.$hidden = this.$element.find('input[type=hidden][name="' + this.name + '"]'), 0 === this.$hidden.length &&(this.$hidden = a('<input type="hidden">').insertBefore(this.$input)), this.$preview = this.$element.find(".fileinput-preview");
            var e = this.$preview.css("height");
            "inline" !== this.$preview.css("display") && "0px" !== e && "none" !== e && this.$preview.css("line-height", e), this.original = {
                exists: this.$element.hasClass("fileinput-exists"), preview: this.$preview.html(), hiddenVal: this.$hidden.val()
            },
            this.listen(), this.reset()
        }
    };
    c.DEFAULTS = {
        clearName: ! 0
    },
    c.prototype.listen = function () {
        this.$input.on("change.bs.fileinput", a.proxy(this.change, this)), a(this.$input[0].form).on("reset.bs.fileinput", a.proxy(this.reset, this)), this.$element.find('[data-trigger="fileinput"]').on("click.bs.fileinput", a.proxy(this.trigger, this)), this.$element.find('[data-dismiss="fileinput"]').on("click.bs.fileinput", a.proxy(this.clear, this))
    },
    c.prototype.verifySizes = function (a) {
        if ("undefined" == typeof this.options.maxSize) return ! 0;
        var b = parseFloat(this.options.maxSize);
        if (b !== this.options.maxSize) return ! 0;
        for (var c = 0; c < a.length; c++) {
            var d = "undefined" != typeof a[c].size ? a[c].size: null;
            if (null !== d &&(d = d / 1e3 / 1e3, d > b)) return ! 1
        }
        return ! 0
    },
    c.prototype.change = function (b) {
        var c = void 0 === b.target.files ? b.target && b.target.value ?[ {
            name: b.target.value.replace(/^.+\\/, "")
        }]:[]: b.target.files;
        if (b.stopPropagation(), 0 === c.length) return this.clear(), void this.$element.trigger("clear.bs.fileinput");
        if (! this.verifySizes(c)) return this.$element.trigger("max_size.bs.fileinput"), this.clear(), void this.$element.trigger("clear.bs.fileinput");
        this.$hidden.val(""), this.$hidden.attr("name", ""), this.$input.attr("name", this.name);
        var d = c[0];
        if (this.$preview.length > 0 &&("undefined" != typeof d.type ? d.type.match(/^image\/(gif|png|jpeg|svg\+xml)$/): d.name.match(/\.(gif|png|jpe?g|svg)$/i)) && "undefined" != typeof FileReader) {
            var e = this, f = new FileReader, g = this.$preview, h = this.$element;
            f.onload = function (b) {
                var f = a("<img>");
                if (f[0].src = b.target.result, c[0].result = b.target.result, h.find(".fileinput-filename").text(d.name), "none" != g.css("max-height")) {
                    var i = parseInt(g.css("max-height"), 10) || 0, j = parseInt(g.css("padding-top"), 10) || 0, k = parseInt(g.css("padding-bottom"), 10) || 0, l = parseInt(g.css("border-top"), 10) || 0, m = parseInt(g.css("border-bottom"), 10) || 0;
                    f.css("max-height", i - j - k - l - m)
                }
                g.html(f), e.options.exif && e.setImageTransform(f, d), h.addClass("fileinput-exists").removeClass("fileinput-new"), h.trigger("change.bs.fileinput", c)
            },
            f.readAsDataURL(d)
        } else {
            var i = d.name, j = this.$element.find(".fileinput-filename");
            c.length > 1 &&(i = a.map(c, function (a) {
                return a.name
            }).join(", ")), j.text(i), this.$preview.text(d.name), this.$element.addClass("fileinput-exists").removeClass("fileinput-new"), this.$element.trigger("change.bs.fileinput")
        }
    },
    c.prototype.setImageTransform = function (a, b) {
        var c = this, d = new FileReader;
        d.onload = function (b) {
            var e = new DataView(d.result), f = c.getImageExif(e);
            f && c.resetOrientation(a, f)
        },
        d.readAsArrayBuffer(b)
    },
    c.prototype.getImageExif = function (a) {
        if (65496 != a.getUint16(0, ! 1)) return -2;
        for (var b = a.byteLength, c = 2; c < b;) {
            var d = a.getUint16(c, ! 1);
            if (c += 2, 65505 == d) {
                if (1165519206 != a.getUint32(c += 2, ! 1)) return -1;
                var e = 18761 == a.getUint16(c += 6, ! 1);
                c += a.getUint32(c + 4, e);
                var f = a.getUint16(c, e);
                c += 2;
                for (var g = 0; g < f; g++) if (274 == a.getUint16(c + 12 * g, e)) return a.getUint16(c + 12 * g + 8, e)
            } else {
                if (65280 !=(65280 & d)) break;
                c += a.getUint16(c, ! 1)
            }
        }
        return -1
    },
    c.prototype.resetOrientation = function (a, b) {
        var c = new Image;
        c.onload = function () {
            var d = c.width, e = c.height, f = document.createElement("canvas"), g = f.getContext("2d");
            switch ([5, 6, 7, 8].indexOf(b) > -1 ?(f.width = e, f.height = d):(f.width = d, f.height = e), b) {
                case 2: g.transform(-1, 0, 0, 1, d, 0);
                break;
                case 3: g.transform(-1, 0, 0, -1, d, e);
                break;
                case 4: g.transform(1, 0, 0, -1, 0, e);
                break;
                case 5: g.transform(0, 1, 1, 0, 0, 0);
                break;
                case 6: g.transform(0, 1, -1, 0, e, 0);
                break;
                case 7: g.transform(0, -1, -1, 0, e, d);
                break;
                case 8: g.transform(0, -1, 1, 0, 0, d);
                break;
                default: g.transform(1, 0, 0, 1, 0, 0)
            }
            g.drawImage(c, 0, 0), a.attr("src", f.toDataURL())
        },
        c.src = a.attr("src")
    },
    c.prototype.clear = function (a) {
        if (a && a.preventDefault(), this.$hidden.val(""), this.$hidden.attr("name", this.name), this.options.clearName && this.$input.attr("name", ""), b) {
            var c = this.$input.clone(! 0);
            this.$input.after(c), this.$input.remove(), this.$input = c
        } else this.$input.val("");
        this.$preview.html(""), this.$element.find(".fileinput-filename").text(""), this.$element.addClass("fileinput-new").removeClass("fileinput-exists"), void 0 !== a &&(this.$input.trigger("change"), this.$element.trigger("clear.bs.fileinput"))
    },
    c.prototype.reset = function () {
        this.clear(), this.$hidden.val(this.original.hiddenVal), this.$preview.html(this.original.preview), this.$element.find(".fileinput-filename").text(""), this.original.exists ? this.$element.addClass("fileinput-exists").removeClass("fileinput-new"): this.$element.addClass("fileinput-new").removeClass("fileinput-exists"), this.$element.trigger("reseted.bs.fileinput")
    },
    c.prototype.trigger = function (a) {
        this.$input.trigger("click"), a.preventDefault()
    };
    var d = a.fn.fileinput;
    a.fn.fileinput = function (b) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.fileinput");
            e || d.data("bs.fileinput", e = new c(this, b)), "string" == typeof b && e[b]()
        })
    },
    a.fn.fileinput. Constructor = c, a.fn.fileinput.noConflict = function () {
        return a.fn.fileinput = d, this
    },
    a(document).on("click.fileinput.data-api", '[data-provides="fileinput"]', function (b) {
        var c = a(this);
        if (! c.data("bs.fileinput")) {
            c.fileinput(c.data());
            var d = a(b.target).closest('[data-dismiss="fileinput"],[data-trigger="fileinput"]');
            d.length > 0 &&(b.preventDefault(), d.trigger("click.bs.fileinput"))
        }
    })
}
(window.jQuery);
