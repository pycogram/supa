(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const l of document.querySelectorAll('link[rel="modulepreload"]'))
        r(l);
    new MutationObserver(l=>{
        for (const o of l)
            if (o.type === "childList")
                for (const i of o.addedNodes)
                    i.tagName === "LINK" && i.rel === "modulepreload" && r(i)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(l) {
        const o = {};
        return l.integrity && (o.integrity = l.integrity),
        l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
        l.crossOrigin === "use-credentials" ? o.credentials = "include" : l.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin",
        o
    }
    function r(l) {
        if (l.ep)
            return;
        l.ep = !0;
        const o = n(l);
        fetch(l.href, o)
    }
}
)();
function Gu(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Zu = {
    exports: {}
}
  , sl = {}
  , qu = {
    exports: {}
}
  , T = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tr = Symbol.for("react.element")
  , hc = Symbol.for("react.portal")
  , vc = Symbol.for("react.fragment")
  , gc = Symbol.for("react.strict_mode")
  , yc = Symbol.for("react.profiler")
  , wc = Symbol.for("react.provider")
  , xc = Symbol.for("react.context")
  , kc = Symbol.for("react.forward_ref")
  , Sc = Symbol.for("react.suspense")
  , Ec = Symbol.for("react.memo")
  , _c = Symbol.for("react.lazy")
  , $i = Symbol.iterator;
function Cc(e) {
    return e === null || typeof e != "object" ? null : (e = $i && e[$i] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var bu = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , es = Object.assign
  , ts = {};
function dn(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = ts,
    this.updater = n || bu
}
dn.prototype.isReactComponent = {};
dn.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
dn.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function ns() {}
ns.prototype = dn.prototype;
function Ko(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = ts,
    this.updater = n || bu
}
var Yo = Ko.prototype = new ns;
Yo.constructor = Ko;
es(Yo, dn.prototype);
Yo.isPureReactComponent = !0;
var Bi = Array.isArray
  , rs = Object.prototype.hasOwnProperty
  , Jo = {
    current: null
}
  , ls = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function os(e, t, n) {
    var r, l = {}, o = null, i = null;
    if (t != null)
        for (r in t.ref !== void 0 && (i = t.ref),
        t.key !== void 0 && (o = "" + t.key),
        t)
            rs.call(t, r) && !ls.hasOwnProperty(r) && (l[r] = t[r]);
    var u = arguments.length - 2;
    if (u === 1)
        l.children = n;
    else if (1 < u) {
        for (var s = Array(u), c = 0; c < u; c++)
            s[c] = arguments[c + 2];
        l.children = s
    }
    if (e && e.defaultProps)
        for (r in u = e.defaultProps,
        u)
            l[r] === void 0 && (l[r] = u[r]);
    return {
        $$typeof: tr,
        type: e,
        key: o,
        ref: i,
        props: l,
        _owner: Jo.current
    }
}
function Nc(e, t) {
    return {
        $$typeof: tr,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function Xo(e) {
    return typeof e == "object" && e !== null && e.$$typeof === tr
}
function jc(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var Vi = /\/+/g;
function Cl(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? jc("" + e.key) : t.toString(36)
}
function Cr(e, t, n, r, l) {
    var o = typeof e;
    (o === "undefined" || o === "boolean") && (e = null);
    var i = !1;
    if (e === null)
        i = !0;
    else
        switch (o) {
        case "string":
        case "number":
            i = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case tr:
            case hc:
                i = !0
            }
        }
    if (i)
        return i = e,
        l = l(i),
        e = r === "" ? "." + Cl(i, 0) : r,
        Bi(l) ? (n = "",
        e != null && (n = e.replace(Vi, "$&/") + "/"),
        Cr(l, t, n, "", function(c) {
            return c
        })) : l != null && (Xo(l) && (l = Nc(l, n + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(Vi, "$&/") + "/") + e)),
        t.push(l)),
        1;
    if (i = 0,
    r = r === "" ? "." : r + ":",
    Bi(e))
        for (var u = 0; u < e.length; u++) {
            o = e[u];
            var s = r + Cl(o, u);
            i += Cr(o, t, n, s, l)
        }
    else if (s = Cc(e),
    typeof s == "function")
        for (e = s.call(e),
        u = 0; !(o = e.next()).done; )
            o = o.value,
            s = r + Cl(o, u++),
            i += Cr(o, t, n, s, l);
    else if (o === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return i
}
function sr(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , l = 0;
    return Cr(e, r, "", "", function(o) {
        return t.call(n, o, l++)
    }),
    r
}
function Pc(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var ae = {
    current: null
}
  , Nr = {
    transition: null
}
  , zc = {
    ReactCurrentDispatcher: ae,
    ReactCurrentBatchConfig: Nr,
    ReactCurrentOwner: Jo
};
function is() {
    throw Error("act(...) is not supported in production builds of React.")
}
T.Children = {
    map: sr,
    forEach: function(e, t, n) {
        sr(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return sr(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return sr(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Xo(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
T.Component = dn;
T.Fragment = vc;
T.Profiler = yc;
T.PureComponent = Ko;
T.StrictMode = gc;
T.Suspense = Sc;
T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = zc;
T.act = is;
T.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = es({}, e.props)
      , l = e.key
      , o = e.ref
      , i = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (o = t.ref,
        i = Jo.current),
        t.key !== void 0 && (l = "" + t.key),
        e.type && e.type.defaultProps)
            var u = e.type.defaultProps;
        for (s in t)
            rs.call(t, s) && !ls.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s])
    }
    var s = arguments.length - 2;
    if (s === 1)
        r.children = n;
    else if (1 < s) {
        u = Array(s);
        for (var c = 0; c < s; c++)
            u[c] = arguments[c + 2];
        r.children = u
    }
    return {
        $$typeof: tr,
        type: e.type,
        key: l,
        ref: o,
        props: r,
        _owner: i
    }
}
;
T.createContext = function(e) {
    return e = {
        $$typeof: xc,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: wc,
        _context: e
    },
    e.Consumer = e
}
;
T.createElement = os;
T.createFactory = function(e) {
    var t = os.bind(null, e);
    return t.type = e,
    t
}
;
T.createRef = function() {
    return {
        current: null
    }
}
;
T.forwardRef = function(e) {
    return {
        $$typeof: kc,
        render: e
    }
}
;
T.isValidElement = Xo;
T.lazy = function(e) {
    return {
        $$typeof: _c,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: Pc
    }
}
;
T.memo = function(e, t) {
    return {
        $$typeof: Ec,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
T.startTransition = function(e) {
    var t = Nr.transition;
    Nr.transition = {};
    try {
        e()
    } finally {
        Nr.transition = t
    }
}
;
T.unstable_act = is;
T.useCallback = function(e, t) {
    return ae.current.useCallback(e, t)
}
;
T.useContext = function(e) {
    return ae.current.useContext(e)
}
;
T.useDebugValue = function() {}
;
T.useDeferredValue = function(e) {
    return ae.current.useDeferredValue(e)
}
;
T.useEffect = function(e, t) {
    return ae.current.useEffect(e, t)
}
;
T.useId = function() {
    return ae.current.useId()
}
;
T.useImperativeHandle = function(e, t, n) {
    return ae.current.useImperativeHandle(e, t, n)
}
;
T.useInsertionEffect = function(e, t) {
    return ae.current.useInsertionEffect(e, t)
}
;
T.useLayoutEffect = function(e, t) {
    return ae.current.useLayoutEffect(e, t)
}
;
T.useMemo = function(e, t) {
    return ae.current.useMemo(e, t)
}
;
T.useReducer = function(e, t, n) {
    return ae.current.useReducer(e, t, n)
}
;
T.useRef = function(e) {
    return ae.current.useRef(e)
}
;
T.useState = function(e) {
    return ae.current.useState(e)
}
;
T.useSyncExternalStore = function(e, t, n) {
    return ae.current.useSyncExternalStore(e, t, n)
}
;
T.useTransition = function() {
    return ae.current.useTransition()
}
;
T.version = "18.3.1";
qu.exports = T;
var Tt = qu.exports;
const Lc = Gu(Tt);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tc = Tt
  , Rc = Symbol.for("react.element")
  , Mc = Symbol.for("react.fragment")
  , Oc = Object.prototype.hasOwnProperty
  , Dc = Tc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , Ic = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function us(e, t, n) {
    var r, l = {}, o = null, i = null;
    n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
    for (r in t)
        Oc.call(t, r) && !Ic.hasOwnProperty(r) && (l[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            l[r] === void 0 && (l[r] = t[r]);
    return {
        $$typeof: Rc,
        type: e,
        key: o,
        ref: i,
        props: l,
        _owner: Dc.current
    }
}
sl.Fragment = Mc;
sl.jsx = us;
sl.jsxs = us;
Zu.exports = sl;
var m = Zu.exports
  , ql = {}
  , ss = {
    exports: {}
}
  , Se = {}
  , as = {
    exports: {}
}
  , cs = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(E, P) {
        var z = E.length;
        E.push(P);
        e: for (; 0 < z; ) {
            var R = z - 1 >>> 1
              , H = E[R];
            if (0 < l(H, P))
                E[R] = P,
                E[z] = H,
                z = R;
            else
                break e
        }
    }
    function n(E) {
        return E.length === 0 ? null : E[0]
    }
    function r(E) {
        if (E.length === 0)
            return null;
        var P = E[0]
          , z = E.pop();
        if (z !== P) {
            E[0] = z;
            e: for (var R = 0, H = E.length, _e = H >>> 1; R < _e; ) {
                var ie = 2 * (R + 1) - 1
                  , _l = E[ie]
                  , Et = ie + 1
                  , ur = E[Et];
                if (0 > l(_l, z))
                    Et < H && 0 > l(ur, _l) ? (E[R] = ur,
                    E[Et] = z,
                    R = Et) : (E[R] = _l,
                    E[ie] = z,
                    R = ie);
                else if (Et < H && 0 > l(ur, z))
                    E[R] = ur,
                    E[Et] = z,
                    R = Et;
                else
                    break e
            }
        }
        return P
    }
    function l(E, P) {
        var z = E.sortIndex - P.sortIndex;
        return z !== 0 ? z : E.id - P.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var o = performance;
        e.unstable_now = function() {
            return o.now()
        }
    } else {
        var i = Date
          , u = i.now();
        e.unstable_now = function() {
            return i.now() - u
        }
    }
    var s = []
      , c = []
      , v = 1
      , h = null
      , p = 3
      , w = !1
      , x = !1
      , k = !1
      , D = typeof setTimeout == "function" ? setTimeout : null
      , f = typeof clearTimeout == "function" ? clearTimeout : null
      , a = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function d(E) {
        for (var P = n(c); P !== null; ) {
            if (P.callback === null)
                r(c);
            else if (P.startTime <= E)
                r(c),
                P.sortIndex = P.expirationTime,
                t(s, P);
            else
                break;
            P = n(c)
        }
    }
    function g(E) {
        if (k = !1,
        d(E),
        !x)
            if (n(s) !== null)
                x = !0,
                hn(S);
            else {
                var P = n(c);
                P !== null && vn(g, P.startTime - E)
            }
    }
    function S(E, P) {
        x = !1,
        k && (k = !1,
        f(j),
        j = -1),
        w = !0;
        var z = p;
        try {
            for (d(P),
            h = n(s); h !== null && (!(h.expirationTime > P) || E && !ve()); ) {
                var R = h.callback;
                if (typeof R == "function") {
                    h.callback = null,
                    p = h.priorityLevel;
                    var H = R(h.expirationTime <= P);
                    P = e.unstable_now(),
                    typeof H == "function" ? h.callback = H : h === n(s) && r(s),
                    d(P)
                } else
                    r(s);
                h = n(s)
            }
            if (h !== null)
                var _e = !0;
            else {
                var ie = n(c);
                ie !== null && vn(g, ie.startTime - P),
                _e = !1
            }
            return _e
        } finally {
            h = null,
            p = z,
            w = !1
        }
    }
    var N = !1
      , C = null
      , j = -1
      , F = 5
      , L = -1;
    function ve() {
        return !(e.unstable_now() - L < F)
    }
    function ge() {
        if (C !== null) {
            var E = e.unstable_now();
            L = E;
            var P = !0;
            try {
                P = C(!0, E)
            } finally {
                P ? Te() : (N = !1,
                C = null)
            }
        } else
            N = !1
    }
    var Te;
    if (typeof a == "function")
        Te = function() {
            a(ge)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var tt = new MessageChannel
          , ir = tt.port2;
        tt.port1.onmessage = ge,
        Te = function() {
            ir.postMessage(null)
        }
    } else
        Te = function() {
            D(ge, 0)
        }
        ;
    function hn(E) {
        C = E,
        N || (N = !0,
        Te())
    }
    function vn(E, P) {
        j = D(function() {
            E(e.unstable_now())
        }, P)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(E) {
        E.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        x || w || (x = !0,
        hn(S))
    }
    ,
    e.unstable_forceFrameRate = function(E) {
        0 > E || 125 < E ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : F = 0 < E ? Math.floor(1e3 / E) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return p
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(s)
    }
    ,
    e.unstable_next = function(E) {
        switch (p) {
        case 1:
        case 2:
        case 3:
            var P = 3;
            break;
        default:
            P = p
        }
        var z = p;
        p = P;
        try {
            return E()
        } finally {
            p = z
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(E, P) {
        switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            E = 3
        }
        var z = p;
        p = E;
        try {
            return P()
        } finally {
            p = z
        }
    }
    ,
    e.unstable_scheduleCallback = function(E, P, z) {
        var R = e.unstable_now();
        switch (typeof z == "object" && z !== null ? (z = z.delay,
        z = typeof z == "number" && 0 < z ? R + z : R) : z = R,
        E) {
        case 1:
            var H = -1;
            break;
        case 2:
            H = 250;
            break;
        case 5:
            H = 1073741823;
            break;
        case 4:
            H = 1e4;
            break;
        default:
            H = 5e3
        }
        return H = z + H,
        E = {
            id: v++,
            callback: P,
            priorityLevel: E,
            startTime: z,
            expirationTime: H,
            sortIndex: -1
        },
        z > R ? (E.sortIndex = z,
        t(c, E),
        n(s) === null && E === n(c) && (k ? (f(j),
        j = -1) : k = !0,
        vn(g, z - R))) : (E.sortIndex = H,
        t(s, E),
        x || w || (x = !0,
        hn(S))),
        E
    }
    ,
    e.unstable_shouldYield = ve,
    e.unstable_wrapCallback = function(E) {
        var P = p;
        return function() {
            var z = p;
            p = P;
            try {
                return E.apply(this, arguments)
            } finally {
                p = z
            }
        }
    }
}
)(cs);
as.exports = cs;
var Fc = as.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Uc = Tt
  , ke = Fc;
function y(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var fs = new Set
  , Un = {};
function Ft(e, t) {
    ln(e, t),
    ln(e + "Capture", t)
}
function ln(e, t) {
    for (Un[e] = t,
    e = 0; e < t.length; e++)
        fs.add(t[e])
}
var Ge = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , bl = Object.prototype.hasOwnProperty
  , Ac = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , Wi = {}
  , Hi = {};
function $c(e) {
    return bl.call(Hi, e) ? !0 : bl.call(Wi, e) ? !1 : Ac.test(e) ? Hi[e] = !0 : (Wi[e] = !0,
    !1)
}
function Bc(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function Vc(e, t, n, r) {
    if (t === null || typeof t > "u" || Bc(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function ce(e, t, n, r, l, o, i) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = l,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = o,
    this.removeEmptyString = i
}
var te = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    te[e] = new ce(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    te[t] = new ce(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    te[e] = new ce(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    te[e] = new ce(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    te[e] = new ce(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    te[e] = new ce(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    te[e] = new ce(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    te[e] = new ce(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    te[e] = new ce(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var Go = /[\-:]([a-z])/g;
function Zo(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Go, Zo);
    te[t] = new ce(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Go, Zo);
    te[t] = new ce(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Go, Zo);
    te[t] = new ce(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    te[e] = new ce(e,1,!1,e.toLowerCase(),null,!1,!1)
});
te.xlinkHref = new ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    te[e] = new ce(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function qo(e, t, n, r) {
    var l = te.hasOwnProperty(t) ? te[t] : null;
    (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Vc(t, n, l, r) && (n = null),
    r || l === null ? $c(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName,
    r = l.attributeNamespace,
    n === null ? e.removeAttribute(t) : (l = l.type,
    n = l === 3 || l === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var et = Uc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , ar = Symbol.for("react.element")
  , $t = Symbol.for("react.portal")
  , Bt = Symbol.for("react.fragment")
  , bo = Symbol.for("react.strict_mode")
  , eo = Symbol.for("react.profiler")
  , ds = Symbol.for("react.provider")
  , ps = Symbol.for("react.context")
  , ei = Symbol.for("react.forward_ref")
  , to = Symbol.for("react.suspense")
  , no = Symbol.for("react.suspense_list")
  , ti = Symbol.for("react.memo")
  , lt = Symbol.for("react.lazy")
  , ms = Symbol.for("react.offscreen")
  , Qi = Symbol.iterator;
function gn(e) {
    return e === null || typeof e != "object" ? null : (e = Qi && e[Qi] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var W = Object.assign, Nl;
function Cn(e) {
    if (Nl === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Nl = t && t[1] || ""
        }
    return `
` + Nl + e
}
var jl = !1;
function Pl(e, t) {
    if (!e || jl)
        return "";
    jl = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (c) {
                    var r = c
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (c) {
                    r = c
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (c) {
                r = c
            }
            e()
        }
    } catch (c) {
        if (c && r && typeof c.stack == "string") {
            for (var l = c.stack.split(`
`), o = r.stack.split(`
`), i = l.length - 1, u = o.length - 1; 1 <= i && 0 <= u && l[i] !== o[u]; )
                u--;
            for (; 1 <= i && 0 <= u; i--,
            u--)
                if (l[i] !== o[u]) {
                    if (i !== 1 || u !== 1)
                        do
                            if (i--,
                            u--,
                            0 > u || l[i] !== o[u]) {
                                var s = `
` + l[i].replace(" at new ", " at ");
                                return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)),
                                s
                            }
                        while (1 <= i && 0 <= u);
                    break
                }
        }
    } finally {
        jl = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? Cn(e) : ""
}
function Wc(e) {
    switch (e.tag) {
    case 5:
        return Cn(e.type);
    case 16:
        return Cn("Lazy");
    case 13:
        return Cn("Suspense");
    case 19:
        return Cn("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = Pl(e.type, !1),
        e;
    case 11:
        return e = Pl(e.type.render, !1),
        e;
    case 1:
        return e = Pl(e.type, !0),
        e;
    default:
        return ""
    }
}
function ro(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case Bt:
        return "Fragment";
    case $t:
        return "Portal";
    case eo:
        return "Profiler";
    case bo:
        return "StrictMode";
    case to:
        return "Suspense";
    case no:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case ps:
            return (e.displayName || "Context") + ".Consumer";
        case ds:
            return (e._context.displayName || "Context") + ".Provider";
        case ei:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case ti:
            return t = e.displayName || null,
            t !== null ? t : ro(e.type) || "Memo";
        case lt:
            t = e._payload,
            e = e._init;
            try {
                return ro(e(t))
            } catch {}
        }
    return null
}
function Hc(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return ro(t);
    case 8:
        return t === bo ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function yt(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function hs(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function Qc(e) {
    var t = hs(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var l = n.get
          , o = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return l.call(this)
            },
            set: function(i) {
                r = "" + i,
                o.call(this, i)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(i) {
                r = "" + i
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function cr(e) {
    e._valueTracker || (e._valueTracker = Qc(e))
}
function vs(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = hs(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function Fr(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function lo(e, t) {
    var n = t.checked;
    return W({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function Ki(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = yt(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function gs(e, t) {
    t = t.checked,
    t != null && qo(e, "checked", t, !1)
}
function oo(e, t) {
    gs(e, t);
    var n = yt(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? io(e, t.type, n) : t.hasOwnProperty("defaultValue") && io(e, t.type, yt(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function Yi(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function io(e, t, n) {
    (t !== "number" || Fr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Nn = Array.isArray;
function qt(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var l = 0; l < n.length; l++)
            t["$" + n[l]] = !0;
        for (n = 0; n < e.length; n++)
            l = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== l && (e[n].selected = l),
            l && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + yt(n),
        t = null,
        l = 0; l < e.length; l++) {
            if (e[l].value === n) {
                e[l].selected = !0,
                r && (e[l].defaultSelected = !0);
                return
            }
            t !== null || e[l].disabled || (t = e[l])
        }
        t !== null && (t.selected = !0)
    }
}
function uo(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(y(91));
    return W({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function Ji(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(y(92));
            if (Nn(n)) {
                if (1 < n.length)
                    throw Error(y(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: yt(n)
    }
}
function ys(e, t) {
    var n = yt(t.value)
      , r = yt(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function Xi(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function ws(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function so(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? ws(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var fr, xs = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, l)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (fr = fr || document.createElement("div"),
        fr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = fr.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function An(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var zn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , Kc = ["Webkit", "ms", "Moz", "O"];
Object.keys(zn).forEach(function(e) {
    Kc.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        zn[t] = zn[e]
    })
});
function ks(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || zn.hasOwnProperty(e) && zn[e] ? ("" + t).trim() : t + "px"
}
function Ss(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , l = ks(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, l) : e[n] = l
        }
}
var Yc = W({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function ao(e, t) {
    if (t) {
        if (Yc[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(y(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(y(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(y(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(y(62))
    }
}
function co(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var fo = null;
function ni(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var po = null
  , bt = null
  , en = null;
function Gi(e) {
    if (e = lr(e)) {
        if (typeof po != "function")
            throw Error(y(280));
        var t = e.stateNode;
        t && (t = pl(t),
        po(e.stateNode, e.type, t))
    }
}
function Es(e) {
    bt ? en ? en.push(e) : en = [e] : bt = e
}
function _s() {
    if (bt) {
        var e = bt
          , t = en;
        if (en = bt = null,
        Gi(e),
        t)
            for (e = 0; e < t.length; e++)
                Gi(t[e])
    }
}
function Cs(e, t) {
    return e(t)
}
function Ns() {}
var zl = !1;
function js(e, t, n) {
    if (zl)
        return e(t, n);
    zl = !0;
    try {
        return Cs(e, t, n)
    } finally {
        zl = !1,
        (bt !== null || en !== null) && (Ns(),
        _s())
    }
}
function $n(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = pl(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(y(231, t, typeof n));
    return n
}
var mo = !1;
if (Ge)
    try {
        var yn = {};
        Object.defineProperty(yn, "passive", {
            get: function() {
                mo = !0
            }
        }),
        window.addEventListener("test", yn, yn),
        window.removeEventListener("test", yn, yn)
    } catch {
        mo = !1
    }
function Jc(e, t, n, r, l, o, i, u, s) {
    var c = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, c)
    } catch (v) {
        this.onError(v)
    }
}
var Ln = !1
  , Ur = null
  , Ar = !1
  , ho = null
  , Xc = {
    onError: function(e) {
        Ln = !0,
        Ur = e
    }
};
function Gc(e, t, n, r, l, o, i, u, s) {
    Ln = !1,
    Ur = null,
    Jc.apply(Xc, arguments)
}
function Zc(e, t, n, r, l, o, i, u, s) {
    if (Gc.apply(this, arguments),
    Ln) {
        if (Ln) {
            var c = Ur;
            Ln = !1,
            Ur = null
        } else
            throw Error(y(198));
        Ar || (Ar = !0,
        ho = c)
    }
}
function Ut(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function Ps(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function Zi(e) {
    if (Ut(e) !== e)
        throw Error(y(188))
}
function qc(e) {
    var t = e.alternate;
    if (!t) {
        if (t = Ut(e),
        t === null)
            throw Error(y(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var l = n.return;
        if (l === null)
            break;
        var o = l.alternate;
        if (o === null) {
            if (r = l.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (l.child === o.child) {
            for (o = l.child; o; ) {
                if (o === n)
                    return Zi(l),
                    e;
                if (o === r)
                    return Zi(l),
                    t;
                o = o.sibling
            }
            throw Error(y(188))
        }
        if (n.return !== r.return)
            n = l,
            r = o;
        else {
            for (var i = !1, u = l.child; u; ) {
                if (u === n) {
                    i = !0,
                    n = l,
                    r = o;
                    break
                }
                if (u === r) {
                    i = !0,
                    r = l,
                    n = o;
                    break
                }
                u = u.sibling
            }
            if (!i) {
                for (u = o.child; u; ) {
                    if (u === n) {
                        i = !0,
                        n = o,
                        r = l;
                        break
                    }
                    if (u === r) {
                        i = !0,
                        r = o,
                        n = l;
                        break
                    }
                    u = u.sibling
                }
                if (!i)
                    throw Error(y(189))
            }
        }
        if (n.alternate !== r)
            throw Error(y(190))
    }
    if (n.tag !== 3)
        throw Error(y(188));
    return n.stateNode.current === n ? e : t
}
function zs(e) {
    return e = qc(e),
    e !== null ? Ls(e) : null
}
function Ls(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = Ls(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var Ts = ke.unstable_scheduleCallback
  , qi = ke.unstable_cancelCallback
  , bc = ke.unstable_shouldYield
  , ef = ke.unstable_requestPaint
  , Y = ke.unstable_now
  , tf = ke.unstable_getCurrentPriorityLevel
  , ri = ke.unstable_ImmediatePriority
  , Rs = ke.unstable_UserBlockingPriority
  , $r = ke.unstable_NormalPriority
  , nf = ke.unstable_LowPriority
  , Ms = ke.unstable_IdlePriority
  , al = null
  , Ve = null;
function rf(e) {
    if (Ve && typeof Ve.onCommitFiberRoot == "function")
        try {
            Ve.onCommitFiberRoot(al, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var Ie = Math.clz32 ? Math.clz32 : uf
  , lf = Math.log
  , of = Math.LN2;
function uf(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (lf(e) / of | 0) | 0
}
var dr = 64
  , pr = 4194304;
function jn(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function Br(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , l = e.suspendedLanes
      , o = e.pingedLanes
      , i = n & 268435455;
    if (i !== 0) {
        var u = i & ~l;
        u !== 0 ? r = jn(u) : (o &= i,
        o !== 0 && (r = jn(o)))
    } else
        i = n & ~l,
        i !== 0 ? r = jn(i) : o !== 0 && (r = jn(o));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & l) && (l = r & -r,
    o = t & -t,
    l >= o || l === 16 && (o & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - Ie(t),
            l = 1 << n,
            r |= e[n],
            t &= ~l;
    return r
}
function sf(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function af(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
        var i = 31 - Ie(o)
          , u = 1 << i
          , s = l[i];
        s === -1 ? (!(u & n) || u & r) && (l[i] = sf(u, t)) : s <= t && (e.expiredLanes |= u),
        o &= ~u
    }
}
function vo(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function Os() {
    var e = dr;
    return dr <<= 1,
    !(dr & 4194240) && (dr = 64),
    e
}
function Ll(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function nr(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - Ie(t),
    e[t] = n
}
function cf(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var l = 31 - Ie(n)
          , o = 1 << l;
        t[l] = 0,
        r[l] = -1,
        e[l] = -1,
        n &= ~o
    }
}
function li(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - Ie(n)
          , l = 1 << r;
        l & t | e[r] & t && (e[r] |= t),
        n &= ~l
    }
}
var O = 0;
function Ds(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Is, oi, Fs, Us, As, go = !1, mr = [], ct = null, ft = null, dt = null, Bn = new Map, Vn = new Map, it = [], ff = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function bi(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        ct = null;
        break;
    case "dragenter":
    case "dragleave":
        ft = null;
        break;
    case "mouseover":
    case "mouseout":
        dt = null;
        break;
    case "pointerover":
    case "pointerout":
        Bn.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        Vn.delete(t.pointerId)
    }
}
function wn(e, t, n, r, l, o) {
    return e === null || e.nativeEvent !== o ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l]
    },
    t !== null && (t = lr(t),
    t !== null && oi(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    l !== null && t.indexOf(l) === -1 && t.push(l),
    e)
}
function df(e, t, n, r, l) {
    switch (t) {
    case "focusin":
        return ct = wn(ct, e, t, n, r, l),
        !0;
    case "dragenter":
        return ft = wn(ft, e, t, n, r, l),
        !0;
    case "mouseover":
        return dt = wn(dt, e, t, n, r, l),
        !0;
    case "pointerover":
        var o = l.pointerId;
        return Bn.set(o, wn(Bn.get(o) || null, e, t, n, r, l)),
        !0;
    case "gotpointercapture":
        return o = l.pointerId,
        Vn.set(o, wn(Vn.get(o) || null, e, t, n, r, l)),
        !0
    }
    return !1
}
function $s(e) {
    var t = Nt(e.target);
    if (t !== null) {
        var n = Ut(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = Ps(n),
                t !== null) {
                    e.blockedOn = t,
                    As(e.priority, function() {
                        Fs(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function jr(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = yo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            fo = r,
            n.target.dispatchEvent(r),
            fo = null
        } else
            return t = lr(n),
            t !== null && oi(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function eu(e, t, n) {
    jr(e) && n.delete(t)
}
function pf() {
    go = !1,
    ct !== null && jr(ct) && (ct = null),
    ft !== null && jr(ft) && (ft = null),
    dt !== null && jr(dt) && (dt = null),
    Bn.forEach(eu),
    Vn.forEach(eu)
}
function xn(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    go || (go = !0,
    ke.unstable_scheduleCallback(ke.unstable_NormalPriority, pf)))
}
function Wn(e) {
    function t(l) {
        return xn(l, e)
    }
    if (0 < mr.length) {
        xn(mr[0], e);
        for (var n = 1; n < mr.length; n++) {
            var r = mr[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (ct !== null && xn(ct, e),
    ft !== null && xn(ft, e),
    dt !== null && xn(dt, e),
    Bn.forEach(t),
    Vn.forEach(t),
    n = 0; n < it.length; n++)
        r = it[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < it.length && (n = it[0],
    n.blockedOn === null); )
        $s(n),
        n.blockedOn === null && it.shift()
}
var tn = et.ReactCurrentBatchConfig
  , Vr = !0;
function mf(e, t, n, r) {
    var l = O
      , o = tn.transition;
    tn.transition = null;
    try {
        O = 1,
        ii(e, t, n, r)
    } finally {
        O = l,
        tn.transition = o
    }
}
function hf(e, t, n, r) {
    var l = O
      , o = tn.transition;
    tn.transition = null;
    try {
        O = 4,
        ii(e, t, n, r)
    } finally {
        O = l,
        tn.transition = o
    }
}
function ii(e, t, n, r) {
    if (Vr) {
        var l = yo(e, t, n, r);
        if (l === null)
            $l(e, t, r, Wr, n),
            bi(e, r);
        else if (df(l, e, t, n, r))
            r.stopPropagation();
        else if (bi(e, r),
        t & 4 && -1 < ff.indexOf(e)) {
            for (; l !== null; ) {
                var o = lr(l);
                if (o !== null && Is(o),
                o = yo(e, t, n, r),
                o === null && $l(e, t, r, Wr, n),
                o === l)
                    break;
                l = o
            }
            l !== null && r.stopPropagation()
        } else
            $l(e, t, r, null, n)
    }
}
var Wr = null;
function yo(e, t, n, r) {
    if (Wr = null,
    e = ni(r),
    e = Nt(e),
    e !== null)
        if (t = Ut(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = Ps(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return Wr = e,
    null
}
function Bs(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (tf()) {
        case ri:
            return 1;
        case Rs:
            return 4;
        case $r:
        case nf:
            return 16;
        case Ms:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var st = null
  , ui = null
  , Pr = null;
function Vs() {
    if (Pr)
        return Pr;
    var e, t = ui, n = t.length, r, l = "value"in st ? st.value : st.textContent, o = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++)
        ;
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === l[o - r]; r++)
        ;
    return Pr = l.slice(e, 1 < r ? 1 - r : void 0)
}
function zr(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function hr() {
    return !0
}
function tu() {
    return !1
}
function Ee(e) {
    function t(n, r, l, o, i) {
        this._reactName = n,
        this._targetInst = l,
        this.type = r,
        this.nativeEvent = o,
        this.target = i,
        this.currentTarget = null;
        for (var u in e)
            e.hasOwnProperty(u) && (n = e[u],
            this[u] = n ? n(o) : o[u]);
        return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? hr : tu,
        this.isPropagationStopped = tu,
        this
    }
    return W(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = hr)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = hr)
        },
        persist: function() {},
        isPersistent: hr
    }),
    t
}
var pn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, si = Ee(pn), rr = W({}, pn, {
    view: 0,
    detail: 0
}), vf = Ee(rr), Tl, Rl, kn, cl = W({}, rr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ai,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== kn && (kn && e.type === "mousemove" ? (Tl = e.screenX - kn.screenX,
        Rl = e.screenY - kn.screenY) : Rl = Tl = 0,
        kn = e),
        Tl)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : Rl
    }
}), nu = Ee(cl), gf = W({}, cl, {
    dataTransfer: 0
}), yf = Ee(gf), wf = W({}, rr, {
    relatedTarget: 0
}), Ml = Ee(wf), xf = W({}, pn, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), kf = Ee(xf), Sf = W({}, pn, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), Ef = Ee(Sf), _f = W({}, pn, {
    data: 0
}), ru = Ee(_f), Cf = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, Nf = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, jf = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function Pf(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = jf[e]) ? !!t[e] : !1
}
function ai() {
    return Pf
}
var zf = W({}, rr, {
    key: function(e) {
        if (e.key) {
            var t = Cf[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = zr(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Nf[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ai,
    charCode: function(e) {
        return e.type === "keypress" ? zr(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? zr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , Lf = Ee(zf)
  , Tf = W({}, cl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , lu = Ee(Tf)
  , Rf = W({}, rr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ai
})
  , Mf = Ee(Rf)
  , Of = W({}, pn, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , Df = Ee(Of)
  , If = W({}, cl, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , Ff = Ee(If)
  , Uf = [9, 13, 27, 32]
  , ci = Ge && "CompositionEvent"in window
  , Tn = null;
Ge && "documentMode"in document && (Tn = document.documentMode);
var Af = Ge && "TextEvent"in window && !Tn
  , Ws = Ge && (!ci || Tn && 8 < Tn && 11 >= Tn)
  , ou = " "
  , iu = !1;
function Hs(e, t) {
    switch (e) {
    case "keyup":
        return Uf.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function Qs(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var Vt = !1;
function $f(e, t) {
    switch (e) {
    case "compositionend":
        return Qs(t);
    case "keypress":
        return t.which !== 32 ? null : (iu = !0,
        ou);
    case "textInput":
        return e = t.data,
        e === ou && iu ? null : e;
    default:
        return null
    }
}
function Bf(e, t) {
    if (Vt)
        return e === "compositionend" || !ci && Hs(e, t) ? (e = Vs(),
        Pr = ui = st = null,
        Vt = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return Ws && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var Vf = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function uu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Vf[e.type] : t === "textarea"
}
function Ks(e, t, n, r) {
    Es(r),
    t = Hr(t, "onChange"),
    0 < t.length && (n = new si("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var Rn = null
  , Hn = null;
function Wf(e) {
    ra(e, 0)
}
function fl(e) {
    var t = Qt(e);
    if (vs(t))
        return e
}
function Hf(e, t) {
    if (e === "change")
        return t
}
var Ys = !1;
if (Ge) {
    var Ol;
    if (Ge) {
        var Dl = "oninput"in document;
        if (!Dl) {
            var su = document.createElement("div");
            su.setAttribute("oninput", "return;"),
            Dl = typeof su.oninput == "function"
        }
        Ol = Dl
    } else
        Ol = !1;
    Ys = Ol && (!document.documentMode || 9 < document.documentMode)
}
function au() {
    Rn && (Rn.detachEvent("onpropertychange", Js),
    Hn = Rn = null)
}
function Js(e) {
    if (e.propertyName === "value" && fl(Hn)) {
        var t = [];
        Ks(t, Hn, e, ni(e)),
        js(Wf, t)
    }
}
function Qf(e, t, n) {
    e === "focusin" ? (au(),
    Rn = t,
    Hn = n,
    Rn.attachEvent("onpropertychange", Js)) : e === "focusout" && au()
}
function Kf(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return fl(Hn)
}
function Yf(e, t) {
    if (e === "click")
        return fl(t)
}
function Jf(e, t) {
    if (e === "input" || e === "change")
        return fl(t)
}
function Xf(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Ue = typeof Object.is == "function" ? Object.is : Xf;
function Qn(e, t) {
    if (Ue(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var l = n[r];
        if (!bl.call(t, l) || !Ue(e[l], t[l]))
            return !1
    }
    return !0
}
function cu(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function fu(e, t) {
    var n = cu(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = cu(n)
    }
}
function Xs(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Xs(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function Gs() {
    for (var e = window, t = Fr(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = Fr(e.document)
    }
    return t
}
function fi(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function Gf(e) {
    var t = Gs()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Xs(n.ownerDocument.documentElement, n)) {
        if (r !== null && fi(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var l = n.textContent.length
                  , o = Math.min(r.start, l);
                r = r.end === void 0 ? o : Math.min(r.end, l),
                !e.extend && o > r && (l = r,
                r = o,
                o = l),
                l = fu(n, o);
                var i = fu(n, r);
                l && i && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(),
                t.setStart(l.node, l.offset),
                e.removeAllRanges(),
                o > r ? (e.addRange(t),
                e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var Zf = Ge && "documentMode"in document && 11 >= document.documentMode
  , Wt = null
  , wo = null
  , Mn = null
  , xo = !1;
function du(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    xo || Wt == null || Wt !== Fr(r) || (r = Wt,
    "selectionStart"in r && fi(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    Mn && Qn(Mn, r) || (Mn = r,
    r = Hr(wo, "onSelect"),
    0 < r.length && (t = new si("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = Wt)))
}
function vr(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var Ht = {
    animationend: vr("Animation", "AnimationEnd"),
    animationiteration: vr("Animation", "AnimationIteration"),
    animationstart: vr("Animation", "AnimationStart"),
    transitionend: vr("Transition", "TransitionEnd")
}
  , Il = {}
  , Zs = {};
Ge && (Zs = document.createElement("div").style,
"AnimationEvent"in window || (delete Ht.animationend.animation,
delete Ht.animationiteration.animation,
delete Ht.animationstart.animation),
"TransitionEvent"in window || delete Ht.transitionend.transition);
function dl(e) {
    if (Il[e])
        return Il[e];
    if (!Ht[e])
        return e;
    var t = Ht[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Zs)
            return Il[e] = t[n];
    return e
}
var qs = dl("animationend")
  , bs = dl("animationiteration")
  , ea = dl("animationstart")
  , ta = dl("transitionend")
  , na = new Map
  , pu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function xt(e, t) {
    na.set(e, t),
    Ft(t, [e])
}
for (var Fl = 0; Fl < pu.length; Fl++) {
    var Ul = pu[Fl]
      , qf = Ul.toLowerCase()
      , bf = Ul[0].toUpperCase() + Ul.slice(1);
    xt(qf, "on" + bf)
}
xt(qs, "onAnimationEnd");
xt(bs, "onAnimationIteration");
xt(ea, "onAnimationStart");
xt("dblclick", "onDoubleClick");
xt("focusin", "onFocus");
xt("focusout", "onBlur");
xt(ta, "onTransitionEnd");
ln("onMouseEnter", ["mouseout", "mouseover"]);
ln("onMouseLeave", ["mouseout", "mouseover"]);
ln("onPointerEnter", ["pointerout", "pointerover"]);
ln("onPointerLeave", ["pointerout", "pointerover"]);
Ft("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Ft("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Ft("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ft("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Ft("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Ft("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Pn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , ed = new Set("cancel close invalid load scroll toggle".split(" ").concat(Pn));
function mu(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    Zc(r, t, void 0, e),
    e.currentTarget = null
}
function ra(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , l = r.event;
        r = r.listeners;
        e: {
            var o = void 0;
            if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                    var u = r[i]
                      , s = u.instance
                      , c = u.currentTarget;
                    if (u = u.listener,
                    s !== o && l.isPropagationStopped())
                        break e;
                    mu(l, u, c),
                    o = s
                }
            else
                for (i = 0; i < r.length; i++) {
                    if (u = r[i],
                    s = u.instance,
                    c = u.currentTarget,
                    u = u.listener,
                    s !== o && l.isPropagationStopped())
                        break e;
                    mu(l, u, c),
                    o = s
                }
        }
    }
    if (Ar)
        throw e = ho,
        Ar = !1,
        ho = null,
        e
}
function U(e, t) {
    var n = t[Co];
    n === void 0 && (n = t[Co] = new Set);
    var r = e + "__bubble";
    n.has(r) || (la(t, e, 2, !1),
    n.add(r))
}
function Al(e, t, n) {
    var r = 0;
    t && (r |= 4),
    la(n, e, r, t)
}
var gr = "_reactListening" + Math.random().toString(36).slice(2);
function Kn(e) {
    if (!e[gr]) {
        e[gr] = !0,
        fs.forEach(function(n) {
            n !== "selectionchange" && (ed.has(n) || Al(n, !1, e),
            Al(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[gr] || (t[gr] = !0,
        Al("selectionchange", !1, t))
    }
}
function la(e, t, n, r) {
    switch (Bs(t)) {
    case 1:
        var l = mf;
        break;
    case 4:
        l = hf;
        break;
    default:
        l = ii
    }
    n = l.bind(null, t, n, e),
    l = void 0,
    !mo || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0),
    r ? l !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: l
    }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, {
        passive: l
    }) : e.addEventListener(t, n, !1)
}
function $l(e, t, n, r, l) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var i = r.tag;
            if (i === 3 || i === 4) {
                var u = r.stateNode.containerInfo;
                if (u === l || u.nodeType === 8 && u.parentNode === l)
                    break;
                if (i === 4)
                    for (i = r.return; i !== null; ) {
                        var s = i.tag;
                        if ((s === 3 || s === 4) && (s = i.stateNode.containerInfo,
                        s === l || s.nodeType === 8 && s.parentNode === l))
                            return;
                        i = i.return
                    }
                for (; u !== null; ) {
                    if (i = Nt(u),
                    i === null)
                        return;
                    if (s = i.tag,
                    s === 5 || s === 6) {
                        r = o = i;
                        continue e
                    }
                    u = u.parentNode
                }
            }
            r = r.return
        }
    js(function() {
        var c = o
          , v = ni(n)
          , h = [];
        e: {
            var p = na.get(e);
            if (p !== void 0) {
                var w = si
                  , x = e;
                switch (e) {
                case "keypress":
                    if (zr(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    w = Lf;
                    break;
                case "focusin":
                    x = "focus",
                    w = Ml;
                    break;
                case "focusout":
                    x = "blur",
                    w = Ml;
                    break;
                case "beforeblur":
                case "afterblur":
                    w = Ml;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    w = nu;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    w = yf;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    w = Mf;
                    break;
                case qs:
                case bs:
                case ea:
                    w = kf;
                    break;
                case ta:
                    w = Df;
                    break;
                case "scroll":
                    w = vf;
                    break;
                case "wheel":
                    w = Ff;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    w = Ef;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    w = lu
                }
                var k = (t & 4) !== 0
                  , D = !k && e === "scroll"
                  , f = k ? p !== null ? p + "Capture" : null : p;
                k = [];
                for (var a = c, d; a !== null; ) {
                    d = a;
                    var g = d.stateNode;
                    if (d.tag === 5 && g !== null && (d = g,
                    f !== null && (g = $n(a, f),
                    g != null && k.push(Yn(a, g, d)))),
                    D)
                        break;
                    a = a.return
                }
                0 < k.length && (p = new w(p,x,null,n,v),
                h.push({
                    event: p,
                    listeners: k
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (p = e === "mouseover" || e === "pointerover",
                w = e === "mouseout" || e === "pointerout",
                p && n !== fo && (x = n.relatedTarget || n.fromElement) && (Nt(x) || x[Ze]))
                    break e;
                if ((w || p) && (p = v.window === v ? v : (p = v.ownerDocument) ? p.defaultView || p.parentWindow : window,
                w ? (x = n.relatedTarget || n.toElement,
                w = c,
                x = x ? Nt(x) : null,
                x !== null && (D = Ut(x),
                x !== D || x.tag !== 5 && x.tag !== 6) && (x = null)) : (w = null,
                x = c),
                w !== x)) {
                    if (k = nu,
                    g = "onMouseLeave",
                    f = "onMouseEnter",
                    a = "mouse",
                    (e === "pointerout" || e === "pointerover") && (k = lu,
                    g = "onPointerLeave",
                    f = "onPointerEnter",
                    a = "pointer"),
                    D = w == null ? p : Qt(w),
                    d = x == null ? p : Qt(x),
                    p = new k(g,a + "leave",w,n,v),
                    p.target = D,
                    p.relatedTarget = d,
                    g = null,
                    Nt(v) === c && (k = new k(f,a + "enter",x,n,v),
                    k.target = d,
                    k.relatedTarget = D,
                    g = k),
                    D = g,
                    w && x)
                        t: {
                            for (k = w,
                            f = x,
                            a = 0,
                            d = k; d; d = At(d))
                                a++;
                            for (d = 0,
                            g = f; g; g = At(g))
                                d++;
                            for (; 0 < a - d; )
                                k = At(k),
                                a--;
                            for (; 0 < d - a; )
                                f = At(f),
                                d--;
                            for (; a--; ) {
                                if (k === f || f !== null && k === f.alternate)
                                    break t;
                                k = At(k),
                                f = At(f)
                            }
                            k = null
                        }
                    else
                        k = null;
                    w !== null && hu(h, p, w, k, !1),
                    x !== null && D !== null && hu(h, D, x, k, !0)
                }
            }
            e: {
                if (p = c ? Qt(c) : window,
                w = p.nodeName && p.nodeName.toLowerCase(),
                w === "select" || w === "input" && p.type === "file")
                    var S = Hf;
                else if (uu(p))
                    if (Ys)
                        S = Jf;
                    else {
                        S = Kf;
                        var N = Qf
                    }
                else
                    (w = p.nodeName) && w.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (S = Yf);
                if (S && (S = S(e, c))) {
                    Ks(h, S, n, v);
                    break e
                }
                N && N(e, p, c),
                e === "focusout" && (N = p._wrapperState) && N.controlled && p.type === "number" && io(p, "number", p.value)
            }
            switch (N = c ? Qt(c) : window,
            e) {
            case "focusin":
                (uu(N) || N.contentEditable === "true") && (Wt = N,
                wo = c,
                Mn = null);
                break;
            case "focusout":
                Mn = wo = Wt = null;
                break;
            case "mousedown":
                xo = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                xo = !1,
                du(h, n, v);
                break;
            case "selectionchange":
                if (Zf)
                    break;
            case "keydown":
            case "keyup":
                du(h, n, v)
            }
            var C;
            if (ci)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var j = "onCompositionStart";
                        break e;
                    case "compositionend":
                        j = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        j = "onCompositionUpdate";
                        break e
                    }
                    j = void 0
                }
            else
                Vt ? Hs(e, n) && (j = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (j = "onCompositionStart");
            j && (Ws && n.locale !== "ko" && (Vt || j !== "onCompositionStart" ? j === "onCompositionEnd" && Vt && (C = Vs()) : (st = v,
            ui = "value"in st ? st.value : st.textContent,
            Vt = !0)),
            N = Hr(c, j),
            0 < N.length && (j = new ru(j,e,null,n,v),
            h.push({
                event: j,
                listeners: N
            }),
            C ? j.data = C : (C = Qs(n),
            C !== null && (j.data = C)))),
            (C = Af ? $f(e, n) : Bf(e, n)) && (c = Hr(c, "onBeforeInput"),
            0 < c.length && (v = new ru("onBeforeInput","beforeinput",null,n,v),
            h.push({
                event: v,
                listeners: c
            }),
            v.data = C))
        }
        ra(h, t)
    })
}
function Yn(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function Hr(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var l = e
          , o = l.stateNode;
        l.tag === 5 && o !== null && (l = o,
        o = $n(e, n),
        o != null && r.unshift(Yn(e, o, l)),
        o = $n(e, t),
        o != null && r.push(Yn(e, o, l))),
        e = e.return
    }
    return r
}
function At(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function hu(e, t, n, r, l) {
    for (var o = t._reactName, i = []; n !== null && n !== r; ) {
        var u = n
          , s = u.alternate
          , c = u.stateNode;
        if (s !== null && s === r)
            break;
        u.tag === 5 && c !== null && (u = c,
        l ? (s = $n(n, o),
        s != null && i.unshift(Yn(n, s, u))) : l || (s = $n(n, o),
        s != null && i.push(Yn(n, s, u)))),
        n = n.return
    }
    i.length !== 0 && e.push({
        event: t,
        listeners: i
    })
}
var td = /\r\n?/g
  , nd = /\u0000|\uFFFD/g;
function vu(e) {
    return (typeof e == "string" ? e : "" + e).replace(td, `
`).replace(nd, "")
}
function yr(e, t, n) {
    if (t = vu(t),
    vu(e) !== t && n)
        throw Error(y(425))
}
function Qr() {}
var ko = null
  , So = null;
function Eo(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var _o = typeof setTimeout == "function" ? setTimeout : void 0
  , rd = typeof clearTimeout == "function" ? clearTimeout : void 0
  , gu = typeof Promise == "function" ? Promise : void 0
  , ld = typeof queueMicrotask == "function" ? queueMicrotask : typeof gu < "u" ? function(e) {
    return gu.resolve(null).then(e).catch(od)
}
: _o;
function od(e) {
    setTimeout(function() {
        throw e
    })
}
function Bl(e, t) {
    var n = t
      , r = 0;
    do {
        var l = n.nextSibling;
        if (e.removeChild(n),
        l && l.nodeType === 8)
            if (n = l.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(l),
                    Wn(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = l
    } while (n);
    Wn(t)
}
function pt(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function yu(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var mn = Math.random().toString(36).slice(2)
  , Be = "__reactFiber$" + mn
  , Jn = "__reactProps$" + mn
  , Ze = "__reactContainer$" + mn
  , Co = "__reactEvents$" + mn
  , id = "__reactListeners$" + mn
  , ud = "__reactHandles$" + mn;
function Nt(e) {
    var t = e[Be];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[Ze] || n[Be]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = yu(e); e !== null; ) {
                    if (n = e[Be])
                        return n;
                    e = yu(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function lr(e) {
    return e = e[Be] || e[Ze],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function Qt(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(y(33))
}
function pl(e) {
    return e[Jn] || null
}
var No = []
  , Kt = -1;
function kt(e) {
    return {
        current: e
    }
}
function A(e) {
    0 > Kt || (e.current = No[Kt],
    No[Kt] = null,
    Kt--)
}
function I(e, t) {
    Kt++,
    No[Kt] = e.current,
    e.current = t
}
var wt = {}
  , oe = kt(wt)
  , pe = kt(!1)
  , Rt = wt;
function on(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return wt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var l = {}, o;
    for (o in n)
        l[o] = t[o];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = l),
    l
}
function me(e) {
    return e = e.childContextTypes,
    e != null
}
function Kr() {
    A(pe),
    A(oe)
}
function wu(e, t, n) {
    if (oe.current !== wt)
        throw Error(y(168));
    I(oe, t),
    I(pe, n)
}
function oa(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var l in r)
        if (!(l in t))
            throw Error(y(108, Hc(e) || "Unknown", l));
    return W({}, n, r)
}
function Yr(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || wt,
    Rt = oe.current,
    I(oe, e),
    I(pe, pe.current),
    !0
}
function xu(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(y(169));
    n ? (e = oa(e, t, Rt),
    r.__reactInternalMemoizedMergedChildContext = e,
    A(pe),
    A(oe),
    I(oe, e)) : A(pe),
    I(pe, n)
}
var Ke = null
  , ml = !1
  , Vl = !1;
function ia(e) {
    Ke === null ? Ke = [e] : Ke.push(e)
}
function sd(e) {
    ml = !0,
    ia(e)
}
function St() {
    if (!Vl && Ke !== null) {
        Vl = !0;
        var e = 0
          , t = O;
        try {
            var n = Ke;
            for (O = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            Ke = null,
            ml = !1
        } catch (l) {
            throw Ke !== null && (Ke = Ke.slice(e + 1)),
            Ts(ri, St),
            l
        } finally {
            O = t,
            Vl = !1
        }
    }
    return null
}
var Yt = []
  , Jt = 0
  , Jr = null
  , Xr = 0
  , Ce = []
  , Ne = 0
  , Mt = null
  , Ye = 1
  , Je = "";
function _t(e, t) {
    Yt[Jt++] = Xr,
    Yt[Jt++] = Jr,
    Jr = e,
    Xr = t
}
function ua(e, t, n) {
    Ce[Ne++] = Ye,
    Ce[Ne++] = Je,
    Ce[Ne++] = Mt,
    Mt = e;
    var r = Ye;
    e = Je;
    var l = 32 - Ie(r) - 1;
    r &= ~(1 << l),
    n += 1;
    var o = 32 - Ie(t) + l;
    if (30 < o) {
        var i = l - l % 5;
        o = (r & (1 << i) - 1).toString(32),
        r >>= i,
        l -= i,
        Ye = 1 << 32 - Ie(t) + l | n << l | r,
        Je = o + e
    } else
        Ye = 1 << o | n << l | r,
        Je = e
}
function di(e) {
    e.return !== null && (_t(e, 1),
    ua(e, 1, 0))
}
function pi(e) {
    for (; e === Jr; )
        Jr = Yt[--Jt],
        Yt[Jt] = null,
        Xr = Yt[--Jt],
        Yt[Jt] = null;
    for (; e === Mt; )
        Mt = Ce[--Ne],
        Ce[Ne] = null,
        Je = Ce[--Ne],
        Ce[Ne] = null,
        Ye = Ce[--Ne],
        Ce[Ne] = null
}
var xe = null
  , we = null
  , $ = !1
  , De = null;
function sa(e, t) {
    var n = je(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function ku(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        xe = e,
        we = pt(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        xe = e,
        we = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = Mt !== null ? {
            id: Ye,
            overflow: Je
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = je(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        xe = e,
        we = null,
        !0) : !1;
    default:
        return !1
    }
}
function jo(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function Po(e) {
    if ($) {
        var t = we;
        if (t) {
            var n = t;
            if (!ku(e, t)) {
                if (jo(e))
                    throw Error(y(418));
                t = pt(n.nextSibling);
                var r = xe;
                t && ku(e, t) ? sa(r, n) : (e.flags = e.flags & -4097 | 2,
                $ = !1,
                xe = e)
            }
        } else {
            if (jo(e))
                throw Error(y(418));
            e.flags = e.flags & -4097 | 2,
            $ = !1,
            xe = e
        }
    }
}
function Su(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    xe = e
}
function wr(e) {
    if (e !== xe)
        return !1;
    if (!$)
        return Su(e),
        $ = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !Eo(e.type, e.memoizedProps)),
    t && (t = we)) {
        if (jo(e))
            throw aa(),
            Error(y(418));
        for (; t; )
            sa(e, t),
            t = pt(t.nextSibling)
    }
    if (Su(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(y(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            we = pt(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            we = null
        }
    } else
        we = xe ? pt(e.stateNode.nextSibling) : null;
    return !0
}
function aa() {
    for (var e = we; e; )
        e = pt(e.nextSibling)
}
function un() {
    we = xe = null,
    $ = !1
}
function mi(e) {
    De === null ? De = [e] : De.push(e)
}
var ad = et.ReactCurrentBatchConfig;
function Sn(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(y(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(y(147, e));
            var l = r
              , o = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(i) {
                var u = l.refs;
                i === null ? delete u[o] : u[o] = i
            }
            ,
            t._stringRef = o,
            t)
        }
        if (typeof e != "string")
            throw Error(y(284));
        if (!n._owner)
            throw Error(y(290, e))
    }
    return e
}
function xr(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(y(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function Eu(e) {
    var t = e._init;
    return t(e._payload)
}
function ca(e) {
    function t(f, a) {
        if (e) {
            var d = f.deletions;
            d === null ? (f.deletions = [a],
            f.flags |= 16) : d.push(a)
        }
    }
    function n(f, a) {
        if (!e)
            return null;
        for (; a !== null; )
            t(f, a),
            a = a.sibling;
        return null
    }
    function r(f, a) {
        for (f = new Map; a !== null; )
            a.key !== null ? f.set(a.key, a) : f.set(a.index, a),
            a = a.sibling;
        return f
    }
    function l(f, a) {
        return f = gt(f, a),
        f.index = 0,
        f.sibling = null,
        f
    }
    function o(f, a, d) {
        return f.index = d,
        e ? (d = f.alternate,
        d !== null ? (d = d.index,
        d < a ? (f.flags |= 2,
        a) : d) : (f.flags |= 2,
        a)) : (f.flags |= 1048576,
        a)
    }
    function i(f) {
        return e && f.alternate === null && (f.flags |= 2),
        f
    }
    function u(f, a, d, g) {
        return a === null || a.tag !== 6 ? (a = Xl(d, f.mode, g),
        a.return = f,
        a) : (a = l(a, d),
        a.return = f,
        a)
    }
    function s(f, a, d, g) {
        var S = d.type;
        return S === Bt ? v(f, a, d.props.children, g, d.key) : a !== null && (a.elementType === S || typeof S == "object" && S !== null && S.$$typeof === lt && Eu(S) === a.type) ? (g = l(a, d.props),
        g.ref = Sn(f, a, d),
        g.return = f,
        g) : (g = Ir(d.type, d.key, d.props, null, f.mode, g),
        g.ref = Sn(f, a, d),
        g.return = f,
        g)
    }
    function c(f, a, d, g) {
        return a === null || a.tag !== 4 || a.stateNode.containerInfo !== d.containerInfo || a.stateNode.implementation !== d.implementation ? (a = Gl(d, f.mode, g),
        a.return = f,
        a) : (a = l(a, d.children || []),
        a.return = f,
        a)
    }
    function v(f, a, d, g, S) {
        return a === null || a.tag !== 7 ? (a = Lt(d, f.mode, g, S),
        a.return = f,
        a) : (a = l(a, d),
        a.return = f,
        a)
    }
    function h(f, a, d) {
        if (typeof a == "string" && a !== "" || typeof a == "number")
            return a = Xl("" + a, f.mode, d),
            a.return = f,
            a;
        if (typeof a == "object" && a !== null) {
            switch (a.$$typeof) {
            case ar:
                return d = Ir(a.type, a.key, a.props, null, f.mode, d),
                d.ref = Sn(f, null, a),
                d.return = f,
                d;
            case $t:
                return a = Gl(a, f.mode, d),
                a.return = f,
                a;
            case lt:
                var g = a._init;
                return h(f, g(a._payload), d)
            }
            if (Nn(a) || gn(a))
                return a = Lt(a, f.mode, d, null),
                a.return = f,
                a;
            xr(f, a)
        }
        return null
    }
    function p(f, a, d, g) {
        var S = a !== null ? a.key : null;
        if (typeof d == "string" && d !== "" || typeof d == "number")
            return S !== null ? null : u(f, a, "" + d, g);
        if (typeof d == "object" && d !== null) {
            switch (d.$$typeof) {
            case ar:
                return d.key === S ? s(f, a, d, g) : null;
            case $t:
                return d.key === S ? c(f, a, d, g) : null;
            case lt:
                return S = d._init,
                p(f, a, S(d._payload), g)
            }
            if (Nn(d) || gn(d))
                return S !== null ? null : v(f, a, d, g, null);
            xr(f, d)
        }
        return null
    }
    function w(f, a, d, g, S) {
        if (typeof g == "string" && g !== "" || typeof g == "number")
            return f = f.get(d) || null,
            u(a, f, "" + g, S);
        if (typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
            case ar:
                return f = f.get(g.key === null ? d : g.key) || null,
                s(a, f, g, S);
            case $t:
                return f = f.get(g.key === null ? d : g.key) || null,
                c(a, f, g, S);
            case lt:
                var N = g._init;
                return w(f, a, d, N(g._payload), S)
            }
            if (Nn(g) || gn(g))
                return f = f.get(d) || null,
                v(a, f, g, S, null);
            xr(a, g)
        }
        return null
    }
    function x(f, a, d, g) {
        for (var S = null, N = null, C = a, j = a = 0, F = null; C !== null && j < d.length; j++) {
            C.index > j ? (F = C,
            C = null) : F = C.sibling;
            var L = p(f, C, d[j], g);
            if (L === null) {
                C === null && (C = F);
                break
            }
            e && C && L.alternate === null && t(f, C),
            a = o(L, a, j),
            N === null ? S = L : N.sibling = L,
            N = L,
            C = F
        }
        if (j === d.length)
            return n(f, C),
            $ && _t(f, j),
            S;
        if (C === null) {
            for (; j < d.length; j++)
                C = h(f, d[j], g),
                C !== null && (a = o(C, a, j),
                N === null ? S = C : N.sibling = C,
                N = C);
            return $ && _t(f, j),
            S
        }
        for (C = r(f, C); j < d.length; j++)
            F = w(C, f, j, d[j], g),
            F !== null && (e && F.alternate !== null && C.delete(F.key === null ? j : F.key),
            a = o(F, a, j),
            N === null ? S = F : N.sibling = F,
            N = F);
        return e && C.forEach(function(ve) {
            return t(f, ve)
        }),
        $ && _t(f, j),
        S
    }
    function k(f, a, d, g) {
        var S = gn(d);
        if (typeof S != "function")
            throw Error(y(150));
        if (d = S.call(d),
        d == null)
            throw Error(y(151));
        for (var N = S = null, C = a, j = a = 0, F = null, L = d.next(); C !== null && !L.done; j++,
        L = d.next()) {
            C.index > j ? (F = C,
            C = null) : F = C.sibling;
            var ve = p(f, C, L.value, g);
            if (ve === null) {
                C === null && (C = F);
                break
            }
            e && C && ve.alternate === null && t(f, C),
            a = o(ve, a, j),
            N === null ? S = ve : N.sibling = ve,
            N = ve,
            C = F
        }
        if (L.done)
            return n(f, C),
            $ && _t(f, j),
            S;
        if (C === null) {
            for (; !L.done; j++,
            L = d.next())
                L = h(f, L.value, g),
                L !== null && (a = o(L, a, j),
                N === null ? S = L : N.sibling = L,
                N = L);
            return $ && _t(f, j),
            S
        }
        for (C = r(f, C); !L.done; j++,
        L = d.next())
            L = w(C, f, j, L.value, g),
            L !== null && (e && L.alternate !== null && C.delete(L.key === null ? j : L.key),
            a = o(L, a, j),
            N === null ? S = L : N.sibling = L,
            N = L);
        return e && C.forEach(function(ge) {
            return t(f, ge)
        }),
        $ && _t(f, j),
        S
    }
    function D(f, a, d, g) {
        if (typeof d == "object" && d !== null && d.type === Bt && d.key === null && (d = d.props.children),
        typeof d == "object" && d !== null) {
            switch (d.$$typeof) {
            case ar:
                e: {
                    for (var S = d.key, N = a; N !== null; ) {
                        if (N.key === S) {
                            if (S = d.type,
                            S === Bt) {
                                if (N.tag === 7) {
                                    n(f, N.sibling),
                                    a = l(N, d.props.children),
                                    a.return = f,
                                    f = a;
                                    break e
                                }
                            } else if (N.elementType === S || typeof S == "object" && S !== null && S.$$typeof === lt && Eu(S) === N.type) {
                                n(f, N.sibling),
                                a = l(N, d.props),
                                a.ref = Sn(f, N, d),
                                a.return = f,
                                f = a;
                                break e
                            }
                            n(f, N);
                            break
                        } else
                            t(f, N);
                        N = N.sibling
                    }
                    d.type === Bt ? (a = Lt(d.props.children, f.mode, g, d.key),
                    a.return = f,
                    f = a) : (g = Ir(d.type, d.key, d.props, null, f.mode, g),
                    g.ref = Sn(f, a, d),
                    g.return = f,
                    f = g)
                }
                return i(f);
            case $t:
                e: {
                    for (N = d.key; a !== null; ) {
                        if (a.key === N)
                            if (a.tag === 4 && a.stateNode.containerInfo === d.containerInfo && a.stateNode.implementation === d.implementation) {
                                n(f, a.sibling),
                                a = l(a, d.children || []),
                                a.return = f,
                                f = a;
                                break e
                            } else {
                                n(f, a);
                                break
                            }
                        else
                            t(f, a);
                        a = a.sibling
                    }
                    a = Gl(d, f.mode, g),
                    a.return = f,
                    f = a
                }
                return i(f);
            case lt:
                return N = d._init,
                D(f, a, N(d._payload), g)
            }
            if (Nn(d))
                return x(f, a, d, g);
            if (gn(d))
                return k(f, a, d, g);
            xr(f, d)
        }
        return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d,
        a !== null && a.tag === 6 ? (n(f, a.sibling),
        a = l(a, d),
        a.return = f,
        f = a) : (n(f, a),
        a = Xl(d, f.mode, g),
        a.return = f,
        f = a),
        i(f)) : n(f, a)
    }
    return D
}
var sn = ca(!0)
  , fa = ca(!1)
  , Gr = kt(null)
  , Zr = null
  , Xt = null
  , hi = null;
function vi() {
    hi = Xt = Zr = null
}
function gi(e) {
    var t = Gr.current;
    A(Gr),
    e._currentValue = t
}
function zo(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function nn(e, t) {
    Zr = e,
    hi = Xt = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (de = !0),
    e.firstContext = null)
}
function ze(e) {
    var t = e._currentValue;
    if (hi !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        Xt === null) {
            if (Zr === null)
                throw Error(y(308));
            Xt = e,
            Zr.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            Xt = Xt.next = e;
    return t
}
var jt = null;
function yi(e) {
    jt === null ? jt = [e] : jt.push(e)
}
function da(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? (n.next = n,
    yi(t)) : (n.next = l.next,
    l.next = n),
    t.interleaved = n,
    qe(e, r)
}
function qe(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var ot = !1;
function wi(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function pa(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function Xe(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function mt(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    M & 2) {
        var l = r.pending;
        return l === null ? t.next = t : (t.next = l.next,
        l.next = t),
        r.pending = t,
        qe(e, n)
    }
    return l = r.interleaved,
    l === null ? (t.next = t,
    yi(r)) : (t.next = l.next,
    l.next = t),
    r.interleaved = t,
    qe(e, n)
}
function Lr(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        li(e, n)
    }
}
function _u(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var l = null
          , o = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var i = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                o === null ? l = o = i : o = o.next = i,
                n = n.next
            } while (n !== null);
            o === null ? l = o = t : o = o.next = t
        } else
            l = o = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: l,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function qr(e, t, n, r) {
    var l = e.updateQueue;
    ot = !1;
    var o = l.firstBaseUpdate
      , i = l.lastBaseUpdate
      , u = l.shared.pending;
    if (u !== null) {
        l.shared.pending = null;
        var s = u
          , c = s.next;
        s.next = null,
        i === null ? o = c : i.next = c,
        i = s;
        var v = e.alternate;
        v !== null && (v = v.updateQueue,
        u = v.lastBaseUpdate,
        u !== i && (u === null ? v.firstBaseUpdate = c : u.next = c,
        v.lastBaseUpdate = s))
    }
    if (o !== null) {
        var h = l.baseState;
        i = 0,
        v = c = s = null,
        u = o;
        do {
            var p = u.lane
              , w = u.eventTime;
            if ((r & p) === p) {
                v !== null && (v = v.next = {
                    eventTime: w,
                    lane: 0,
                    tag: u.tag,
                    payload: u.payload,
                    callback: u.callback,
                    next: null
                });
                e: {
                    var x = e
                      , k = u;
                    switch (p = t,
                    w = n,
                    k.tag) {
                    case 1:
                        if (x = k.payload,
                        typeof x == "function") {
                            h = x.call(w, h, p);
                            break e
                        }
                        h = x;
                        break e;
                    case 3:
                        x.flags = x.flags & -65537 | 128;
                    case 0:
                        if (x = k.payload,
                        p = typeof x == "function" ? x.call(w, h, p) : x,
                        p == null)
                            break e;
                        h = W({}, h, p);
                        break e;
                    case 2:
                        ot = !0
                    }
                }
                u.callback !== null && u.lane !== 0 && (e.flags |= 64,
                p = l.effects,
                p === null ? l.effects = [u] : p.push(u))
            } else
                w = {
                    eventTime: w,
                    lane: p,
                    tag: u.tag,
                    payload: u.payload,
                    callback: u.callback,
                    next: null
                },
                v === null ? (c = v = w,
                s = h) : v = v.next = w,
                i |= p;
            if (u = u.next,
            u === null) {
                if (u = l.shared.pending,
                u === null)
                    break;
                p = u,
                u = p.next,
                p.next = null,
                l.lastBaseUpdate = p,
                l.shared.pending = null
            }
        } while (!0);
        if (v === null && (s = h),
        l.baseState = s,
        l.firstBaseUpdate = c,
        l.lastBaseUpdate = v,
        t = l.shared.interleaved,
        t !== null) {
            l = t;
            do
                i |= l.lane,
                l = l.next;
            while (l !== t)
        } else
            o === null && (l.shared.lanes = 0);
        Dt |= i,
        e.lanes = i,
        e.memoizedState = h
    }
}
function Cu(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , l = r.callback;
            if (l !== null) {
                if (r.callback = null,
                r = n,
                typeof l != "function")
                    throw Error(y(191, l));
                l.call(r)
            }
        }
}
var or = {}
  , We = kt(or)
  , Xn = kt(or)
  , Gn = kt(or);
function Pt(e) {
    if (e === or)
        throw Error(y(174));
    return e
}
function xi(e, t) {
    switch (I(Gn, t),
    I(Xn, e),
    I(We, or),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : so(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = so(t, e)
    }
    A(We),
    I(We, t)
}
function an() {
    A(We),
    A(Xn),
    A(Gn)
}
function ma(e) {
    Pt(Gn.current);
    var t = Pt(We.current)
      , n = so(t, e.type);
    t !== n && (I(Xn, e),
    I(We, n))
}
function ki(e) {
    Xn.current === e && (A(We),
    A(Xn))
}
var B = kt(0);
function br(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var Wl = [];
function Si() {
    for (var e = 0; e < Wl.length; e++)
        Wl[e]._workInProgressVersionPrimary = null;
    Wl.length = 0
}
var Tr = et.ReactCurrentDispatcher
  , Hl = et.ReactCurrentBatchConfig
  , Ot = 0
  , V = null
  , X = null
  , Z = null
  , el = !1
  , On = !1
  , Zn = 0
  , cd = 0;
function ne() {
    throw Error(y(321))
}
function Ei(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Ue(e[n], t[n]))
            return !1;
    return !0
}
function _i(e, t, n, r, l, o) {
    if (Ot = o,
    V = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    Tr.current = e === null || e.memoizedState === null ? md : hd,
    e = n(r, l),
    On) {
        o = 0;
        do {
            if (On = !1,
            Zn = 0,
            25 <= o)
                throw Error(y(301));
            o += 1,
            Z = X = null,
            t.updateQueue = null,
            Tr.current = vd,
            e = n(r, l)
        } while (On)
    }
    if (Tr.current = tl,
    t = X !== null && X.next !== null,
    Ot = 0,
    Z = X = V = null,
    el = !1,
    t)
        throw Error(y(300));
    return e
}
function Ci() {
    var e = Zn !== 0;
    return Zn = 0,
    e
}
function $e() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return Z === null ? V.memoizedState = Z = e : Z = Z.next = e,
    Z
}
function Le() {
    if (X === null) {
        var e = V.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = X.next;
    var t = Z === null ? V.memoizedState : Z.next;
    if (t !== null)
        Z = t,
        X = e;
    else {
        if (e === null)
            throw Error(y(310));
        X = e,
        e = {
            memoizedState: X.memoizedState,
            baseState: X.baseState,
            baseQueue: X.baseQueue,
            queue: X.queue,
            next: null
        },
        Z === null ? V.memoizedState = Z = e : Z = Z.next = e
    }
    return Z
}
function qn(e, t) {
    return typeof t == "function" ? t(e) : t
}
function Ql(e) {
    var t = Le()
      , n = t.queue;
    if (n === null)
        throw Error(y(311));
    n.lastRenderedReducer = e;
    var r = X
      , l = r.baseQueue
      , o = n.pending;
    if (o !== null) {
        if (l !== null) {
            var i = l.next;
            l.next = o.next,
            o.next = i
        }
        r.baseQueue = l = o,
        n.pending = null
    }
    if (l !== null) {
        o = l.next,
        r = r.baseState;
        var u = i = null
          , s = null
          , c = o;
        do {
            var v = c.lane;
            if ((Ot & v) === v)
                s !== null && (s = s.next = {
                    lane: 0,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null
                }),
                r = c.hasEagerState ? c.eagerState : e(r, c.action);
            else {
                var h = {
                    lane: v,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null
                };
                s === null ? (u = s = h,
                i = r) : s = s.next = h,
                V.lanes |= v,
                Dt |= v
            }
            c = c.next
        } while (c !== null && c !== o);
        s === null ? i = r : s.next = u,
        Ue(r, t.memoizedState) || (de = !0),
        t.memoizedState = r,
        t.baseState = i,
        t.baseQueue = s,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        l = e;
        do
            o = l.lane,
            V.lanes |= o,
            Dt |= o,
            l = l.next;
        while (l !== e)
    } else
        l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function Kl(e) {
    var t = Le()
      , n = t.queue;
    if (n === null)
        throw Error(y(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , l = n.pending
      , o = t.memoizedState;
    if (l !== null) {
        n.pending = null;
        var i = l = l.next;
        do
            o = e(o, i.action),
            i = i.next;
        while (i !== l);
        Ue(o, t.memoizedState) || (de = !0),
        t.memoizedState = o,
        t.baseQueue === null && (t.baseState = o),
        n.lastRenderedState = o
    }
    return [o, r]
}
function ha() {}
function va(e, t) {
    var n = V
      , r = Le()
      , l = t()
      , o = !Ue(r.memoizedState, l);
    if (o && (r.memoizedState = l,
    de = !0),
    r = r.queue,
    Ni(wa.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || Z !== null && Z.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        bn(9, ya.bind(null, n, r, l, t), void 0, null),
        q === null)
            throw Error(y(349));
        Ot & 30 || ga(n, t, l)
    }
    return l
}
function ga(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = V.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    V.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function ya(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    xa(t) && ka(e)
}
function wa(e, t, n) {
    return n(function() {
        xa(t) && ka(e)
    })
}
function xa(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Ue(e, n)
    } catch {
        return !0
    }
}
function ka(e) {
    var t = qe(e, 1);
    t !== null && Fe(t, e, 1, -1)
}
function Nu(e) {
    var t = $e();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: qn,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = pd.bind(null, V, e),
    [t.memoizedState, e]
}
function bn(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = V.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    V.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function Sa() {
    return Le().memoizedState
}
function Rr(e, t, n, r) {
    var l = $e();
    V.flags |= e,
    l.memoizedState = bn(1 | t, n, void 0, r === void 0 ? null : r)
}
function hl(e, t, n, r) {
    var l = Le();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (X !== null) {
        var i = X.memoizedState;
        if (o = i.destroy,
        r !== null && Ei(r, i.deps)) {
            l.memoizedState = bn(t, n, o, r);
            return
        }
    }
    V.flags |= e,
    l.memoizedState = bn(1 | t, n, o, r)
}
function ju(e, t) {
    return Rr(8390656, 8, e, t)
}
function Ni(e, t) {
    return hl(2048, 8, e, t)
}
function Ea(e, t) {
    return hl(4, 2, e, t)
}
function _a(e, t) {
    return hl(4, 4, e, t)
}
function Ca(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function Na(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    hl(4, 4, Ca.bind(null, t, e), n)
}
function ji() {}
function ja(e, t) {
    var n = Le();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ei(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function Pa(e, t) {
    var n = Le();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ei(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function za(e, t, n) {
    return Ot & 21 ? (Ue(n, t) || (n = Os(),
    V.lanes |= n,
    Dt |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    de = !0),
    e.memoizedState = n)
}
function fd(e, t) {
    var n = O;
    O = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = Hl.transition;
    Hl.transition = {};
    try {
        e(!1),
        t()
    } finally {
        O = n,
        Hl.transition = r
    }
}
function La() {
    return Le().memoizedState
}
function dd(e, t, n) {
    var r = vt(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    Ta(e))
        Ra(t, n);
    else if (n = da(e, t, n, r),
    n !== null) {
        var l = se();
        Fe(n, e, r, l),
        Ma(n, t, r)
    }
}
function pd(e, t, n) {
    var r = vt(e)
      , l = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (Ta(e))
        Ra(t, l);
    else {
        var o = e.alternate;
        if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer,
        o !== null))
            try {
                var i = t.lastRenderedState
                  , u = o(i, n);
                if (l.hasEagerState = !0,
                l.eagerState = u,
                Ue(u, i)) {
                    var s = t.interleaved;
                    s === null ? (l.next = l,
                    yi(t)) : (l.next = s.next,
                    s.next = l),
                    t.interleaved = l;
                    return
                }
            } catch {} finally {}
        n = da(e, t, l, r),
        n !== null && (l = se(),
        Fe(n, e, r, l),
        Ma(n, t, r))
    }
}
function Ta(e) {
    var t = e.alternate;
    return e === V || t !== null && t === V
}
function Ra(e, t) {
    On = el = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function Ma(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        li(e, n)
    }
}
var tl = {
    readContext: ze,
    useCallback: ne,
    useContext: ne,
    useEffect: ne,
    useImperativeHandle: ne,
    useInsertionEffect: ne,
    useLayoutEffect: ne,
    useMemo: ne,
    useReducer: ne,
    useRef: ne,
    useState: ne,
    useDebugValue: ne,
    useDeferredValue: ne,
    useTransition: ne,
    useMutableSource: ne,
    useSyncExternalStore: ne,
    useId: ne,
    unstable_isNewReconciler: !1
}
  , md = {
    readContext: ze,
    useCallback: function(e, t) {
        return $e().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: ze,
    useEffect: ju,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        Rr(4194308, 4, Ca.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return Rr(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return Rr(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = $e();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = $e();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = dd.bind(null, V, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = $e();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: Nu,
    useDebugValue: ji,
    useDeferredValue: function(e) {
        return $e().memoizedState = e
    },
    useTransition: function() {
        var e = Nu(!1)
          , t = e[0];
        return e = fd.bind(null, e[1]),
        $e().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = V
          , l = $e();
        if ($) {
            if (n === void 0)
                throw Error(y(407));
            n = n()
        } else {
            if (n = t(),
            q === null)
                throw Error(y(349));
            Ot & 30 || ga(r, t, n)
        }
        l.memoizedState = n;
        var o = {
            value: n,
            getSnapshot: t
        };
        return l.queue = o,
        ju(wa.bind(null, r, o, e), [e]),
        r.flags |= 2048,
        bn(9, ya.bind(null, r, o, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = $e()
          , t = q.identifierPrefix;
        if ($) {
            var n = Je
              , r = Ye;
            n = (r & ~(1 << 32 - Ie(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = Zn++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = cd++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , hd = {
    readContext: ze,
    useCallback: ja,
    useContext: ze,
    useEffect: Ni,
    useImperativeHandle: Na,
    useInsertionEffect: Ea,
    useLayoutEffect: _a,
    useMemo: Pa,
    useReducer: Ql,
    useRef: Sa,
    useState: function() {
        return Ql(qn)
    },
    useDebugValue: ji,
    useDeferredValue: function(e) {
        var t = Le();
        return za(t, X.memoizedState, e)
    },
    useTransition: function() {
        var e = Ql(qn)[0]
          , t = Le().memoizedState;
        return [e, t]
    },
    useMutableSource: ha,
    useSyncExternalStore: va,
    useId: La,
    unstable_isNewReconciler: !1
}
  , vd = {
    readContext: ze,
    useCallback: ja,
    useContext: ze,
    useEffect: Ni,
    useImperativeHandle: Na,
    useInsertionEffect: Ea,
    useLayoutEffect: _a,
    useMemo: Pa,
    useReducer: Kl,
    useRef: Sa,
    useState: function() {
        return Kl(qn)
    },
    useDebugValue: ji,
    useDeferredValue: function(e) {
        var t = Le();
        return X === null ? t.memoizedState = e : za(t, X.memoizedState, e)
    },
    useTransition: function() {
        var e = Kl(qn)[0]
          , t = Le().memoizedState;
        return [e, t]
    },
    useMutableSource: ha,
    useSyncExternalStore: va,
    useId: La,
    unstable_isNewReconciler: !1
};
function Me(e, t) {
    if (e && e.defaultProps) {
        t = W({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function Lo(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : W({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var vl = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? Ut(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = se()
          , l = vt(e)
          , o = Xe(r, l);
        o.payload = t,
        n != null && (o.callback = n),
        t = mt(e, o, l),
        t !== null && (Fe(t, e, l, r),
        Lr(t, e, l))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = se()
          , l = vt(e)
          , o = Xe(r, l);
        o.tag = 1,
        o.payload = t,
        n != null && (o.callback = n),
        t = mt(e, o, l),
        t !== null && (Fe(t, e, l, r),
        Lr(t, e, l))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = se()
          , r = vt(e)
          , l = Xe(n, r);
        l.tag = 2,
        t != null && (l.callback = t),
        t = mt(e, l, r),
        t !== null && (Fe(t, e, r, n),
        Lr(t, e, r))
    }
};
function Pu(e, t, n, r, l, o, i) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !Qn(n, r) || !Qn(l, o) : !0
}
function Oa(e, t, n) {
    var r = !1
      , l = wt
      , o = t.contextType;
    return typeof o == "object" && o !== null ? o = ze(o) : (l = me(t) ? Rt : oe.current,
    r = t.contextTypes,
    o = (r = r != null) ? on(e, l) : wt),
    t = new t(n,o),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = vl,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = l,
    e.__reactInternalMemoizedMaskedChildContext = o),
    t
}
function zu(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && vl.enqueueReplaceState(t, t.state, null)
}
function To(e, t, n, r) {
    var l = e.stateNode;
    l.props = n,
    l.state = e.memoizedState,
    l.refs = {},
    wi(e);
    var o = t.contextType;
    typeof o == "object" && o !== null ? l.context = ze(o) : (o = me(t) ? Rt : oe.current,
    l.context = on(e, o)),
    l.state = e.memoizedState,
    o = t.getDerivedStateFromProps,
    typeof o == "function" && (Lo(e, t, o, n),
    l.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state,
    typeof l.componentWillMount == "function" && l.componentWillMount(),
    typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(),
    t !== l.state && vl.enqueueReplaceState(l, l.state, null),
    qr(e, n, l, r),
    l.state = e.memoizedState),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308)
}
function cn(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += Wc(r),
            r = r.return;
        while (r);
        var l = n
    } catch (o) {
        l = `
Error generating stack: ` + o.message + `
` + o.stack
    }
    return {
        value: e,
        source: t,
        stack: l,
        digest: null
    }
}
function Yl(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function Ro(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var gd = typeof WeakMap == "function" ? WeakMap : Map;
function Da(e, t, n) {
    n = Xe(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        rl || (rl = !0,
        Vo = r),
        Ro(e, t)
    }
    ,
    n
}
function Ia(e, t, n) {
    n = Xe(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var l = t.value;
        n.payload = function() {
            return r(l)
        }
        ,
        n.callback = function() {
            Ro(e, t)
        }
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
        Ro(e, t),
        typeof r != "function" && (ht === null ? ht = new Set([this]) : ht.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: i !== null ? i : ""
        })
    }
    ),
    n
}
function Lu(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new gd;
        var l = new Set;
        r.set(t, l)
    } else
        l = r.get(t),
        l === void 0 && (l = new Set,
        r.set(t, l));
    l.has(n) || (l.add(n),
    e = Td.bind(null, e, t, n),
    t.then(e, e))
}
function Tu(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function Ru(e, t, n, r, l) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = l,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Xe(-1, 1),
    t.tag = 2,
    mt(n, t, 1))),
    n.lanes |= 1),
    e)
}
var yd = et.ReactCurrentOwner
  , de = !1;
function ue(e, t, n, r) {
    t.child = e === null ? fa(t, null, n, r) : sn(t, e.child, n, r)
}
function Mu(e, t, n, r, l) {
    n = n.render;
    var o = t.ref;
    return nn(t, l),
    r = _i(e, t, n, r, o, l),
    n = Ci(),
    e !== null && !de ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~l,
    be(e, t, l)) : ($ && n && di(t),
    t.flags |= 1,
    ue(e, t, r, l),
    t.child)
}
function Ou(e, t, n, r, l) {
    if (e === null) {
        var o = n.type;
        return typeof o == "function" && !Di(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = o,
        Fa(e, t, o, r, l)) : (e = Ir(n.type, null, r, t, t.mode, l),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (o = e.child,
    !(e.lanes & l)) {
        var i = o.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : Qn,
        n(i, r) && e.ref === t.ref)
            return be(e, t, l)
    }
    return t.flags |= 1,
    e = gt(o, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function Fa(e, t, n, r, l) {
    if (e !== null) {
        var o = e.memoizedProps;
        if (Qn(o, r) && e.ref === t.ref)
            if (de = !1,
            t.pendingProps = r = o,
            (e.lanes & l) !== 0)
                e.flags & 131072 && (de = !0);
            else
                return t.lanes = e.lanes,
                be(e, t, l)
    }
    return Mo(e, t, n, r, l)
}
function Ua(e, t, n) {
    var r = t.pendingProps
      , l = r.children
      , o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            I(Zt, ye),
            ye |= n;
        else {
            if (!(n & 1073741824))
                return e = o !== null ? o.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                I(Zt, ye),
                ye |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = o !== null ? o.baseLanes : n,
            I(Zt, ye),
            ye |= r
        }
    else
        o !== null ? (r = o.baseLanes | n,
        t.memoizedState = null) : r = n,
        I(Zt, ye),
        ye |= r;
    return ue(e, t, l, n),
    t.child
}
function Aa(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function Mo(e, t, n, r, l) {
    var o = me(n) ? Rt : oe.current;
    return o = on(t, o),
    nn(t, l),
    n = _i(e, t, n, r, o, l),
    r = Ci(),
    e !== null && !de ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~l,
    be(e, t, l)) : ($ && r && di(t),
    t.flags |= 1,
    ue(e, t, n, l),
    t.child)
}
function Du(e, t, n, r, l) {
    if (me(n)) {
        var o = !0;
        Yr(t)
    } else
        o = !1;
    if (nn(t, l),
    t.stateNode === null)
        Mr(e, t),
        Oa(t, n, r),
        To(t, n, r, l),
        r = !0;
    else if (e === null) {
        var i = t.stateNode
          , u = t.memoizedProps;
        i.props = u;
        var s = i.context
          , c = n.contextType;
        typeof c == "object" && c !== null ? c = ze(c) : (c = me(n) ? Rt : oe.current,
        c = on(t, c));
        var v = n.getDerivedStateFromProps
          , h = typeof v == "function" || typeof i.getSnapshotBeforeUpdate == "function";
        h || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || s !== c) && zu(t, i, r, c),
        ot = !1;
        var p = t.memoizedState;
        i.state = p,
        qr(t, r, i, l),
        s = t.memoizedState,
        u !== r || p !== s || pe.current || ot ? (typeof v == "function" && (Lo(t, n, v, r),
        s = t.memoizedState),
        (u = ot || Pu(t, n, u, r, p, s, c)) ? (h || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(),
        typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()),
        typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = s),
        i.props = r,
        i.state = s,
        i.context = c,
        r = u) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        i = t.stateNode,
        pa(e, t),
        u = t.memoizedProps,
        c = t.type === t.elementType ? u : Me(t.type, u),
        i.props = c,
        h = t.pendingProps,
        p = i.context,
        s = n.contextType,
        typeof s == "object" && s !== null ? s = ze(s) : (s = me(n) ? Rt : oe.current,
        s = on(t, s));
        var w = n.getDerivedStateFromProps;
        (v = typeof w == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== h || p !== s) && zu(t, i, r, s),
        ot = !1,
        p = t.memoizedState,
        i.state = p,
        qr(t, r, i, l);
        var x = t.memoizedState;
        u !== h || p !== x || pe.current || ot ? (typeof w == "function" && (Lo(t, n, w, r),
        x = t.memoizedState),
        (c = ot || Pu(t, n, c, r, p, x, s) || !1) ? (v || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, x, s),
        typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, x, s)),
        typeof i.componentDidUpdate == "function" && (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = x),
        i.props = r,
        i.state = x,
        i.context = s,
        r = c) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return Oo(e, t, n, r, o, l)
}
function Oo(e, t, n, r, l, o) {
    Aa(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i)
        return l && xu(t, n, !1),
        be(e, t, o);
    r = t.stateNode,
    yd.current = t;
    var u = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && i ? (t.child = sn(t, e.child, null, o),
    t.child = sn(t, null, u, o)) : ue(e, t, u, o),
    t.memoizedState = r.state,
    l && xu(t, n, !0),
    t.child
}
function $a(e) {
    var t = e.stateNode;
    t.pendingContext ? wu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && wu(e, t.context, !1),
    xi(e, t.containerInfo)
}
function Iu(e, t, n, r, l) {
    return un(),
    mi(l),
    t.flags |= 256,
    ue(e, t, n, r),
    t.child
}
var Do = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function Io(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function Ba(e, t, n) {
    var r = t.pendingProps, l = B.current, o = !1, i = (t.flags & 128) !== 0, u;
    if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u ? (o = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1),
    I(B, l & 1),
    e === null)
        return Po(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (i = r.children,
        e = r.fallback,
        o ? (r = t.mode,
        o = t.child,
        i = {
            mode: "hidden",
            children: i
        },
        !(r & 1) && o !== null ? (o.childLanes = 0,
        o.pendingProps = i) : o = wl(i, r, 0, null),
        e = Lt(e, r, n, null),
        o.return = t,
        e.return = t,
        o.sibling = e,
        t.child = o,
        t.child.memoizedState = Io(n),
        t.memoizedState = Do,
        e) : Pi(t, i));
    if (l = e.memoizedState,
    l !== null && (u = l.dehydrated,
    u !== null))
        return wd(e, t, i, r, u, l, n);
    if (o) {
        o = r.fallback,
        i = t.mode,
        l = e.child,
        u = l.sibling;
        var s = {
            mode: "hidden",
            children: r.children
        };
        return !(i & 1) && t.child !== l ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = s,
        t.deletions = null) : (r = gt(l, s),
        r.subtreeFlags = l.subtreeFlags & 14680064),
        u !== null ? o = gt(u, o) : (o = Lt(o, i, n, null),
        o.flags |= 2),
        o.return = t,
        r.return = t,
        r.sibling = o,
        t.child = r,
        r = o,
        o = t.child,
        i = e.child.memoizedState,
        i = i === null ? Io(n) : {
            baseLanes: i.baseLanes | n,
            cachePool: null,
            transitions: i.transitions
        },
        o.memoizedState = i,
        o.childLanes = e.childLanes & ~n,
        t.memoizedState = Do,
        r
    }
    return o = e.child,
    e = o.sibling,
    r = gt(o, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function Pi(e, t) {
    return t = wl({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function kr(e, t, n, r) {
    return r !== null && mi(r),
    sn(t, e.child, null, n),
    e = Pi(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function wd(e, t, n, r, l, o, i) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = Yl(Error(y(422))),
        kr(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (o = r.fallback,
        l = t.mode,
        r = wl({
            mode: "visible",
            children: r.children
        }, l, 0, null),
        o = Lt(o, l, i, null),
        o.flags |= 2,
        r.return = t,
        o.return = t,
        r.sibling = o,
        t.child = r,
        t.mode & 1 && sn(t, e.child, null, i),
        t.child.memoizedState = Io(i),
        t.memoizedState = Do,
        o);
    if (!(t.mode & 1))
        return kr(e, t, i, null);
    if (l.data === "$!") {
        if (r = l.nextSibling && l.nextSibling.dataset,
        r)
            var u = r.dgst;
        return r = u,
        o = Error(y(419)),
        r = Yl(o, r, void 0),
        kr(e, t, i, r)
    }
    if (u = (i & e.childLanes) !== 0,
    de || u) {
        if (r = q,
        r !== null) {
            switch (i & -i) {
            case 4:
                l = 2;
                break;
            case 16:
                l = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                l = 32;
                break;
            case 536870912:
                l = 268435456;
                break;
            default:
                l = 0
            }
            l = l & (r.suspendedLanes | i) ? 0 : l,
            l !== 0 && l !== o.retryLane && (o.retryLane = l,
            qe(e, l),
            Fe(r, e, l, -1))
        }
        return Oi(),
        r = Yl(Error(y(421))),
        kr(e, t, i, r)
    }
    return l.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = Rd.bind(null, e),
    l._reactRetry = t,
    null) : (e = o.treeContext,
    we = pt(l.nextSibling),
    xe = t,
    $ = !0,
    De = null,
    e !== null && (Ce[Ne++] = Ye,
    Ce[Ne++] = Je,
    Ce[Ne++] = Mt,
    Ye = e.id,
    Je = e.overflow,
    Mt = t),
    t = Pi(t, r.children),
    t.flags |= 4096,
    t)
}
function Fu(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    zo(e.return, t, n)
}
function Jl(e, t, n, r, l) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l
    } : (o.isBackwards = t,
    o.rendering = null,
    o.renderingStartTime = 0,
    o.last = r,
    o.tail = n,
    o.tailMode = l)
}
function Va(e, t, n) {
    var r = t.pendingProps
      , l = r.revealOrder
      , o = r.tail;
    if (ue(e, t, r.children, n),
    r = B.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && Fu(e, n, t);
                else if (e.tag === 19)
                    Fu(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (I(B, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (l) {
        case "forwards":
            for (n = t.child,
            l = null; n !== null; )
                e = n.alternate,
                e !== null && br(e) === null && (l = n),
                n = n.sibling;
            n = l,
            n === null ? (l = t.child,
            t.child = null) : (l = n.sibling,
            n.sibling = null),
            Jl(t, !1, l, n, o);
            break;
        case "backwards":
            for (n = null,
            l = t.child,
            t.child = null; l !== null; ) {
                if (e = l.alternate,
                e !== null && br(e) === null) {
                    t.child = l;
                    break
                }
                e = l.sibling,
                l.sibling = n,
                n = l,
                l = e
            }
            Jl(t, !0, n, null, o);
            break;
        case "together":
            Jl(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function Mr(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function be(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    Dt |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(y(153));
    if (t.child !== null) {
        for (e = t.child,
        n = gt(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = gt(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function xd(e, t, n) {
    switch (t.tag) {
    case 3:
        $a(t),
        un();
        break;
    case 5:
        ma(t);
        break;
    case 1:
        me(t.type) && Yr(t);
        break;
    case 4:
        xi(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , l = t.memoizedProps.value;
        I(Gr, r._currentValue),
        r._currentValue = l;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (I(B, B.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? Ba(e, t, n) : (I(B, B.current & 1),
            e = be(e, t, n),
            e !== null ? e.sibling : null);
        I(B, B.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return Va(e, t, n);
            t.flags |= 128
        }
        if (l = t.memoizedState,
        l !== null && (l.rendering = null,
        l.tail = null,
        l.lastEffect = null),
        I(B, B.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        Ua(e, t, n)
    }
    return be(e, t, n)
}
var Wa, Fo, Ha, Qa;
Wa = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
Fo = function() {}
;
Ha = function(e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
        e = t.stateNode,
        Pt(We.current);
        var o = null;
        switch (n) {
        case "input":
            l = lo(e, l),
            r = lo(e, r),
            o = [];
            break;
        case "select":
            l = W({}, l, {
                value: void 0
            }),
            r = W({}, r, {
                value: void 0
            }),
            o = [];
            break;
        case "textarea":
            l = uo(e, l),
            r = uo(e, r),
            o = [];
            break;
        default:
            typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Qr)
        }
        ao(n, r);
        var i;
        n = null;
        for (c in l)
            if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
                if (c === "style") {
                    var u = l[c];
                    for (i in u)
                        u.hasOwnProperty(i) && (n || (n = {}),
                        n[i] = "")
                } else
                    c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Un.hasOwnProperty(c) ? o || (o = []) : (o = o || []).push(c, null));
        for (c in r) {
            var s = r[c];
            if (u = l != null ? l[c] : void 0,
            r.hasOwnProperty(c) && s !== u && (s != null || u != null))
                if (c === "style")
                    if (u) {
                        for (i in u)
                            !u.hasOwnProperty(i) || s && s.hasOwnProperty(i) || (n || (n = {}),
                            n[i] = "");
                        for (i in s)
                            s.hasOwnProperty(i) && u[i] !== s[i] && (n || (n = {}),
                            n[i] = s[i])
                    } else
                        n || (o || (o = []),
                        o.push(c, n)),
                        n = s;
                else
                    c === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0,
                    u = u ? u.__html : void 0,
                    s != null && u !== s && (o = o || []).push(c, s)) : c === "children" ? typeof s != "string" && typeof s != "number" || (o = o || []).push(c, "" + s) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Un.hasOwnProperty(c) ? (s != null && c === "onScroll" && U("scroll", e),
                    o || u === s || (o = [])) : (o = o || []).push(c, s))
        }
        n && (o = o || []).push("style", n);
        var c = o;
        (t.updateQueue = c) && (t.flags |= 4)
    }
}
;
Qa = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function En(e, t) {
    if (!$)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function re(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var l = e.child; l !== null; )
            n |= l.lanes | l.childLanes,
            r |= l.subtreeFlags & 14680064,
            r |= l.flags & 14680064,
            l.return = e,
            l = l.sibling;
    else
        for (l = e.child; l !== null; )
            n |= l.lanes | l.childLanes,
            r |= l.subtreeFlags,
            r |= l.flags,
            l.return = e,
            l = l.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function kd(e, t, n) {
    var r = t.pendingProps;
    switch (pi(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return re(t),
        null;
    case 1:
        return me(t.type) && Kr(),
        re(t),
        null;
    case 3:
        return r = t.stateNode,
        an(),
        A(pe),
        A(oe),
        Si(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (wr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        De !== null && (Qo(De),
        De = null))),
        Fo(e, t),
        re(t),
        null;
    case 5:
        ki(t);
        var l = Pt(Gn.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            Ha(e, t, n, r, l),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(y(166));
                return re(t),
                null
            }
            if (e = Pt(We.current),
            wr(t)) {
                r = t.stateNode,
                n = t.type;
                var o = t.memoizedProps;
                switch (r[Be] = t,
                r[Jn] = o,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    U("cancel", r),
                    U("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    U("load", r);
                    break;
                case "video":
                case "audio":
                    for (l = 0; l < Pn.length; l++)
                        U(Pn[l], r);
                    break;
                case "source":
                    U("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    U("error", r),
                    U("load", r);
                    break;
                case "details":
                    U("toggle", r);
                    break;
                case "input":
                    Ki(r, o),
                    U("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!o.multiple
                    },
                    U("invalid", r);
                    break;
                case "textarea":
                    Ji(r, o),
                    U("invalid", r)
                }
                ao(n, o),
                l = null;
                for (var i in o)
                    if (o.hasOwnProperty(i)) {
                        var u = o[i];
                        i === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && yr(r.textContent, u, e),
                        l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && yr(r.textContent, u, e),
                        l = ["children", "" + u]) : Un.hasOwnProperty(i) && u != null && i === "onScroll" && U("scroll", r)
                    }
                switch (n) {
                case "input":
                    cr(r),
                    Yi(r, o, !0);
                    break;
                case "textarea":
                    cr(r),
                    Xi(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof o.onClick == "function" && (r.onclick = Qr)
                }
                r = l,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                i = l.nodeType === 9 ? l : l.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = ws(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, {
                    is: r.is
                }) : (e = i.createElement(n),
                n === "select" && (i = e,
                r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n),
                e[Be] = t,
                e[Jn] = r,
                Wa(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (i = co(n, r),
                    n) {
                    case "dialog":
                        U("cancel", e),
                        U("close", e),
                        l = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        U("load", e),
                        l = r;
                        break;
                    case "video":
                    case "audio":
                        for (l = 0; l < Pn.length; l++)
                            U(Pn[l], e);
                        l = r;
                        break;
                    case "source":
                        U("error", e),
                        l = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        U("error", e),
                        U("load", e),
                        l = r;
                        break;
                    case "details":
                        U("toggle", e),
                        l = r;
                        break;
                    case "input":
                        Ki(e, r),
                        l = lo(e, r),
                        U("invalid", e);
                        break;
                    case "option":
                        l = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        l = W({}, r, {
                            value: void 0
                        }),
                        U("invalid", e);
                        break;
                    case "textarea":
                        Ji(e, r),
                        l = uo(e, r),
                        U("invalid", e);
                        break;
                    default:
                        l = r
                    }
                    ao(n, l),
                    u = l;
                    for (o in u)
                        if (u.hasOwnProperty(o)) {
                            var s = u[o];
                            o === "style" ? Ss(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0,
                            s != null && xs(e, s)) : o === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && An(e, s) : typeof s == "number" && An(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (Un.hasOwnProperty(o) ? s != null && o === "onScroll" && U("scroll", e) : s != null && qo(e, o, s, i))
                        }
                    switch (n) {
                    case "input":
                        cr(e),
                        Yi(e, r, !1);
                        break;
                    case "textarea":
                        cr(e),
                        Xi(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + yt(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        o = r.value,
                        o != null ? qt(e, !!r.multiple, o, !1) : r.defaultValue != null && qt(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof l.onClick == "function" && (e.onclick = Qr)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return re(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            Qa(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(y(166));
            if (n = Pt(Gn.current),
            Pt(We.current),
            wr(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[Be] = t,
                (o = r.nodeValue !== n) && (e = xe,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        yr(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && yr(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                o && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[Be] = t,
                t.stateNode = r
        }
        return re(t),
        null;
    case 13:
        if (A(B),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if ($ && we !== null && t.mode & 1 && !(t.flags & 128))
                aa(),
                un(),
                t.flags |= 98560,
                o = !1;
            else if (o = wr(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!o)
                        throw Error(y(318));
                    if (o = t.memoizedState,
                    o = o !== null ? o.dehydrated : null,
                    !o)
                        throw Error(y(317));
                    o[Be] = t
                } else
                    un(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                re(t),
                o = !1
            } else
                De !== null && (Qo(De),
                De = null),
                o = !0;
            if (!o)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || B.current & 1 ? G === 0 && (G = 3) : Oi())),
        t.updateQueue !== null && (t.flags |= 4),
        re(t),
        null);
    case 4:
        return an(),
        Fo(e, t),
        e === null && Kn(t.stateNode.containerInfo),
        re(t),
        null;
    case 10:
        return gi(t.type._context),
        re(t),
        null;
    case 17:
        return me(t.type) && Kr(),
        re(t),
        null;
    case 19:
        if (A(B),
        o = t.memoizedState,
        o === null)
            return re(t),
            null;
        if (r = (t.flags & 128) !== 0,
        i = o.rendering,
        i === null)
            if (r)
                En(o, !1);
            else {
                if (G !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (i = br(e),
                        i !== null) {
                            for (t.flags |= 128,
                            En(o, !1),
                            r = i.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                o = n,
                                e = r,
                                o.flags &= 14680066,
                                i = o.alternate,
                                i === null ? (o.childLanes = 0,
                                o.lanes = e,
                                o.child = null,
                                o.subtreeFlags = 0,
                                o.memoizedProps = null,
                                o.memoizedState = null,
                                o.updateQueue = null,
                                o.dependencies = null,
                                o.stateNode = null) : (o.childLanes = i.childLanes,
                                o.lanes = i.lanes,
                                o.child = i.child,
                                o.subtreeFlags = 0,
                                o.deletions = null,
                                o.memoizedProps = i.memoizedProps,
                                o.memoizedState = i.memoizedState,
                                o.updateQueue = i.updateQueue,
                                o.type = i.type,
                                e = i.dependencies,
                                o.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return I(B, B.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                o.tail !== null && Y() > fn && (t.flags |= 128,
                r = !0,
                En(o, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = br(i),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    En(o, !0),
                    o.tail === null && o.tailMode === "hidden" && !i.alternate && !$)
                        return re(t),
                        null
                } else
                    2 * Y() - o.renderingStartTime > fn && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    En(o, !1),
                    t.lanes = 4194304);
            o.isBackwards ? (i.sibling = t.child,
            t.child = i) : (n = o.last,
            n !== null ? n.sibling = i : t.child = i,
            o.last = i)
        }
        return o.tail !== null ? (t = o.tail,
        o.rendering = t,
        o.tail = t.sibling,
        o.renderingStartTime = Y(),
        t.sibling = null,
        n = B.current,
        I(B, r ? n & 1 | 2 : n & 1),
        t) : (re(t),
        null);
    case 22:
    case 23:
        return Mi(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? ye & 1073741824 && (re(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : re(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(y(156, t.tag))
}
function Sd(e, t) {
    switch (pi(t),
    t.tag) {
    case 1:
        return me(t.type) && Kr(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return an(),
        A(pe),
        A(oe),
        Si(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return ki(t),
        null;
    case 13:
        if (A(B),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(y(340));
            un()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return A(B),
        null;
    case 4:
        return an(),
        null;
    case 10:
        return gi(t.type._context),
        null;
    case 22:
    case 23:
        return Mi(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var Sr = !1
  , le = !1
  , Ed = typeof WeakSet == "function" ? WeakSet : Set
  , _ = null;
function Gt(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                K(e, t, r)
            }
        else
            n.current = null
}
function Uo(e, t, n) {
    try {
        n()
    } catch (r) {
        K(e, t, r)
    }
}
var Uu = !1;
function _d(e, t) {
    if (ko = Vr,
    e = Gs(),
    fi(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var l = r.anchorOffset
                      , o = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        o.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var i = 0
                      , u = -1
                      , s = -1
                      , c = 0
                      , v = 0
                      , h = e
                      , p = null;
                    t: for (; ; ) {
                        for (var w; h !== n || l !== 0 && h.nodeType !== 3 || (u = i + l),
                        h !== o || r !== 0 && h.nodeType !== 3 || (s = i + r),
                        h.nodeType === 3 && (i += h.nodeValue.length),
                        (w = h.firstChild) !== null; )
                            p = h,
                            h = w;
                        for (; ; ) {
                            if (h === e)
                                break t;
                            if (p === n && ++c === l && (u = i),
                            p === o && ++v === r && (s = i),
                            (w = h.nextSibling) !== null)
                                break;
                            h = p,
                            p = h.parentNode
                        }
                        h = w
                    }
                    n = u === -1 || s === -1 ? null : {
                        start: u,
                        end: s
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (So = {
        focusedElem: e,
        selectionRange: n
    },
    Vr = !1,
    _ = t; _ !== null; )
        if (t = _,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            _ = e;
        else
            for (; _ !== null; ) {
                t = _;
                try {
                    var x = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (x !== null) {
                                var k = x.memoizedProps
                                  , D = x.memoizedState
                                  , f = t.stateNode
                                  , a = f.getSnapshotBeforeUpdate(t.elementType === t.type ? k : Me(t.type, k), D);
                                f.__reactInternalSnapshotBeforeUpdate = a
                            }
                            break;
                        case 3:
                            var d = t.stateNode.containerInfo;
                            d.nodeType === 1 ? d.textContent = "" : d.nodeType === 9 && d.documentElement && d.removeChild(d.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(y(163))
                        }
                } catch (g) {
                    K(t, t.return, g)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    _ = e;
                    break
                }
                _ = t.return
            }
    return x = Uu,
    Uu = !1,
    x
}
function Dn(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var l = r = r.next;
        do {
            if ((l.tag & e) === e) {
                var o = l.destroy;
                l.destroy = void 0,
                o !== void 0 && Uo(t, n, o)
            }
            l = l.next
        } while (l !== r)
    }
}
function gl(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function Ao(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function Ka(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    Ka(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[Be],
    delete t[Jn],
    delete t[Co],
    delete t[id],
    delete t[ud])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function Ya(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Au(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || Ya(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function $o(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = Qr));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for ($o(e, t, n),
        e = e.sibling; e !== null; )
            $o(e, t, n),
            e = e.sibling
}
function Bo(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Bo(e, t, n),
        e = e.sibling; e !== null; )
            Bo(e, t, n),
            e = e.sibling
}
var b = null
  , Oe = !1;
function nt(e, t, n) {
    for (n = n.child; n !== null; )
        Ja(e, t, n),
        n = n.sibling
}
function Ja(e, t, n) {
    if (Ve && typeof Ve.onCommitFiberUnmount == "function")
        try {
            Ve.onCommitFiberUnmount(al, n)
        } catch {}
    switch (n.tag) {
    case 5:
        le || Gt(n, t);
    case 6:
        var r = b
          , l = Oe;
        b = null,
        nt(e, t, n),
        b = r,
        Oe = l,
        b !== null && (Oe ? (e = b,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : b.removeChild(n.stateNode));
        break;
    case 18:
        b !== null && (Oe ? (e = b,
        n = n.stateNode,
        e.nodeType === 8 ? Bl(e.parentNode, n) : e.nodeType === 1 && Bl(e, n),
        Wn(e)) : Bl(b, n.stateNode));
        break;
    case 4:
        r = b,
        l = Oe,
        b = n.stateNode.containerInfo,
        Oe = !0,
        nt(e, t, n),
        b = r,
        Oe = l;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!le && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            l = r = r.next;
            do {
                var o = l
                  , i = o.destroy;
                o = o.tag,
                i !== void 0 && (o & 2 || o & 4) && Uo(n, t, i),
                l = l.next
            } while (l !== r)
        }
        nt(e, t, n);
        break;
    case 1:
        if (!le && (Gt(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (u) {
                K(n, t, u)
            }
        nt(e, t, n);
        break;
    case 21:
        nt(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (le = (r = le) || n.memoizedState !== null,
        nt(e, t, n),
        le = r) : nt(e, t, n);
        break;
    default:
        nt(e, t, n)
    }
}
function $u(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new Ed),
        t.forEach(function(r) {
            var l = Md.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(l, l))
        })
    }
}
function Re(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var l = n[r];
            try {
                var o = e
                  , i = t
                  , u = i;
                e: for (; u !== null; ) {
                    switch (u.tag) {
                    case 5:
                        b = u.stateNode,
                        Oe = !1;
                        break e;
                    case 3:
                        b = u.stateNode.containerInfo,
                        Oe = !0;
                        break e;
                    case 4:
                        b = u.stateNode.containerInfo,
                        Oe = !0;
                        break e
                    }
                    u = u.return
                }
                if (b === null)
                    throw Error(y(160));
                Ja(o, i, l),
                b = null,
                Oe = !1;
                var s = l.alternate;
                s !== null && (s.return = null),
                l.return = null
            } catch (c) {
                K(l, t, c)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            Xa(t, e),
            t = t.sibling
}
function Xa(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (Re(t, e),
        Ae(e),
        r & 4) {
            try {
                Dn(3, e, e.return),
                gl(3, e)
            } catch (k) {
                K(e, e.return, k)
            }
            try {
                Dn(5, e, e.return)
            } catch (k) {
                K(e, e.return, k)
            }
        }
        break;
    case 1:
        Re(t, e),
        Ae(e),
        r & 512 && n !== null && Gt(n, n.return);
        break;
    case 5:
        if (Re(t, e),
        Ae(e),
        r & 512 && n !== null && Gt(n, n.return),
        e.flags & 32) {
            var l = e.stateNode;
            try {
                An(l, "")
            } catch (k) {
                K(e, e.return, k)
            }
        }
        if (r & 4 && (l = e.stateNode,
        l != null)) {
            var o = e.memoizedProps
              , i = n !== null ? n.memoizedProps : o
              , u = e.type
              , s = e.updateQueue;
            if (e.updateQueue = null,
            s !== null)
                try {
                    u === "input" && o.type === "radio" && o.name != null && gs(l, o),
                    co(u, i);
                    var c = co(u, o);
                    for (i = 0; i < s.length; i += 2) {
                        var v = s[i]
                          , h = s[i + 1];
                        v === "style" ? Ss(l, h) : v === "dangerouslySetInnerHTML" ? xs(l, h) : v === "children" ? An(l, h) : qo(l, v, h, c)
                    }
                    switch (u) {
                    case "input":
                        oo(l, o);
                        break;
                    case "textarea":
                        ys(l, o);
                        break;
                    case "select":
                        var p = l._wrapperState.wasMultiple;
                        l._wrapperState.wasMultiple = !!o.multiple;
                        var w = o.value;
                        w != null ? qt(l, !!o.multiple, w, !1) : p !== !!o.multiple && (o.defaultValue != null ? qt(l, !!o.multiple, o.defaultValue, !0) : qt(l, !!o.multiple, o.multiple ? [] : "", !1))
                    }
                    l[Jn] = o
                } catch (k) {
                    K(e, e.return, k)
                }
        }
        break;
    case 6:
        if (Re(t, e),
        Ae(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(y(162));
            l = e.stateNode,
            o = e.memoizedProps;
            try {
                l.nodeValue = o
            } catch (k) {
                K(e, e.return, k)
            }
        }
        break;
    case 3:
        if (Re(t, e),
        Ae(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                Wn(t.containerInfo)
            } catch (k) {
                K(e, e.return, k)
            }
        break;
    case 4:
        Re(t, e),
        Ae(e);
        break;
    case 13:
        Re(t, e),
        Ae(e),
        l = e.child,
        l.flags & 8192 && (o = l.memoizedState !== null,
        l.stateNode.isHidden = o,
        !o || l.alternate !== null && l.alternate.memoizedState !== null || (Ti = Y())),
        r & 4 && $u(e);
        break;
    case 22:
        if (v = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (le = (c = le) || v,
        Re(t, e),
        le = c) : Re(t, e),
        Ae(e),
        r & 8192) {
            if (c = e.memoizedState !== null,
            (e.stateNode.isHidden = c) && !v && e.mode & 1)
                for (_ = e,
                v = e.child; v !== null; ) {
                    for (h = _ = v; _ !== null; ) {
                        switch (p = _,
                        w = p.child,
                        p.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Dn(4, p, p.return);
                            break;
                        case 1:
                            Gt(p, p.return);
                            var x = p.stateNode;
                            if (typeof x.componentWillUnmount == "function") {
                                r = p,
                                n = p.return;
                                try {
                                    t = r,
                                    x.props = t.memoizedProps,
                                    x.state = t.memoizedState,
                                    x.componentWillUnmount()
                                } catch (k) {
                                    K(r, n, k)
                                }
                            }
                            break;
                        case 5:
                            Gt(p, p.return);
                            break;
                        case 22:
                            if (p.memoizedState !== null) {
                                Vu(h);
                                continue
                            }
                        }
                        w !== null ? (w.return = p,
                        _ = w) : Vu(h)
                    }
                    v = v.sibling
                }
            e: for (v = null,
            h = e; ; ) {
                if (h.tag === 5) {
                    if (v === null) {
                        v = h;
                        try {
                            l = h.stateNode,
                            c ? (o = l.style,
                            typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = h.stateNode,
                            s = h.memoizedProps.style,
                            i = s != null && s.hasOwnProperty("display") ? s.display : null,
                            u.style.display = ks("display", i))
                        } catch (k) {
                            K(e, e.return, k)
                        }
                    }
                } else if (h.tag === 6) {
                    if (v === null)
                        try {
                            h.stateNode.nodeValue = c ? "" : h.memoizedProps
                        } catch (k) {
                            K(e, e.return, k)
                        }
                } else if ((h.tag !== 22 && h.tag !== 23 || h.memoizedState === null || h === e) && h.child !== null) {
                    h.child.return = h,
                    h = h.child;
                    continue
                }
                if (h === e)
                    break e;
                for (; h.sibling === null; ) {
                    if (h.return === null || h.return === e)
                        break e;
                    v === h && (v = null),
                    h = h.return
                }
                v === h && (v = null),
                h.sibling.return = h.return,
                h = h.sibling
            }
        }
        break;
    case 19:
        Re(t, e),
        Ae(e),
        r & 4 && $u(e);
        break;
    case 21:
        break;
    default:
        Re(t, e),
        Ae(e)
    }
}
function Ae(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (Ya(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(y(160))
            }
            switch (r.tag) {
            case 5:
                var l = r.stateNode;
                r.flags & 32 && (An(l, ""),
                r.flags &= -33);
                var o = Au(e);
                Bo(e, o, l);
                break;
            case 3:
            case 4:
                var i = r.stateNode.containerInfo
                  , u = Au(e);
                $o(e, u, i);
                break;
            default:
                throw Error(y(161))
            }
        } catch (s) {
            K(e, e.return, s)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function Cd(e, t, n) {
    _ = e,
    Ga(e)
}
function Ga(e, t, n) {
    for (var r = (e.mode & 1) !== 0; _ !== null; ) {
        var l = _
          , o = l.child;
        if (l.tag === 22 && r) {
            var i = l.memoizedState !== null || Sr;
            if (!i) {
                var u = l.alternate
                  , s = u !== null && u.memoizedState !== null || le;
                u = Sr;
                var c = le;
                if (Sr = i,
                (le = s) && !c)
                    for (_ = l; _ !== null; )
                        i = _,
                        s = i.child,
                        i.tag === 22 && i.memoizedState !== null ? Wu(l) : s !== null ? (s.return = i,
                        _ = s) : Wu(l);
                for (; o !== null; )
                    _ = o,
                    Ga(o),
                    o = o.sibling;
                _ = l,
                Sr = u,
                le = c
            }
            Bu(e)
        } else
            l.subtreeFlags & 8772 && o !== null ? (o.return = l,
            _ = o) : Bu(e)
    }
}
function Bu(e) {
    for (; _ !== null; ) {
        var t = _;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        le || gl(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !le)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var l = t.elementType === t.type ? n.memoizedProps : Me(t.type, n.memoizedProps);
                                r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var o = t.updateQueue;
                        o !== null && Cu(t, o, r);
                        break;
                    case 3:
                        var i = t.updateQueue;
                        if (i !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            Cu(t, i, n)
                        }
                        break;
                    case 5:
                        var u = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = u;
                            var s = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                s.autoFocus && n.focus();
                                break;
                            case "img":
                                s.src && (n.src = s.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var c = t.alternate;
                            if (c !== null) {
                                var v = c.memoizedState;
                                if (v !== null) {
                                    var h = v.dehydrated;
                                    h !== null && Wn(h)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(y(163))
                    }
                le || t.flags & 512 && Ao(t)
            } catch (p) {
                K(t, t.return, p)
            }
        }
        if (t === e) {
            _ = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            _ = n;
            break
        }
        _ = t.return
    }
}
function Vu(e) {
    for (; _ !== null; ) {
        var t = _;
        if (t === e) {
            _ = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            _ = n;
            break
        }
        _ = t.return
    }
}
function Wu(e) {
    for (; _ !== null; ) {
        var t = _;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    gl(4, t)
                } catch (s) {
                    K(t, n, s)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var l = t.return;
                    try {
                        r.componentDidMount()
                    } catch (s) {
                        K(t, l, s)
                    }
                }
                var o = t.return;
                try {
                    Ao(t)
                } catch (s) {
                    K(t, o, s)
                }
                break;
            case 5:
                var i = t.return;
                try {
                    Ao(t)
                } catch (s) {
                    K(t, i, s)
                }
            }
        } catch (s) {
            K(t, t.return, s)
        }
        if (t === e) {
            _ = null;
            break
        }
        var u = t.sibling;
        if (u !== null) {
            u.return = t.return,
            _ = u;
            break
        }
        _ = t.return
    }
}
var Nd = Math.ceil
  , nl = et.ReactCurrentDispatcher
  , zi = et.ReactCurrentOwner
  , Pe = et.ReactCurrentBatchConfig
  , M = 0
  , q = null
  , J = null
  , ee = 0
  , ye = 0
  , Zt = kt(0)
  , G = 0
  , er = null
  , Dt = 0
  , yl = 0
  , Li = 0
  , In = null
  , fe = null
  , Ti = 0
  , fn = 1 / 0
  , Qe = null
  , rl = !1
  , Vo = null
  , ht = null
  , Er = !1
  , at = null
  , ll = 0
  , Fn = 0
  , Wo = null
  , Or = -1
  , Dr = 0;
function se() {
    return M & 6 ? Y() : Or !== -1 ? Or : Or = Y()
}
function vt(e) {
    return e.mode & 1 ? M & 2 && ee !== 0 ? ee & -ee : ad.transition !== null ? (Dr === 0 && (Dr = Os()),
    Dr) : (e = O,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : Bs(e.type)),
    e) : 1
}
function Fe(e, t, n, r) {
    if (50 < Fn)
        throw Fn = 0,
        Wo = null,
        Error(y(185));
    nr(e, n, r),
    (!(M & 2) || e !== q) && (e === q && (!(M & 2) && (yl |= n),
    G === 4 && ut(e, ee)),
    he(e, r),
    n === 1 && M === 0 && !(t.mode & 1) && (fn = Y() + 500,
    ml && St()))
}
function he(e, t) {
    var n = e.callbackNode;
    af(e, t);
    var r = Br(e, e === q ? ee : 0);
    if (r === 0)
        n !== null && qi(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && qi(n),
        t === 1)
            e.tag === 0 ? sd(Hu.bind(null, e)) : ia(Hu.bind(null, e)),
            ld(function() {
                !(M & 6) && St()
            }),
            n = null;
        else {
            switch (Ds(r)) {
            case 1:
                n = ri;
                break;
            case 4:
                n = Rs;
                break;
            case 16:
                n = $r;
                break;
            case 536870912:
                n = Ms;
                break;
            default:
                n = $r
            }
            n = lc(n, Za.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function Za(e, t) {
    if (Or = -1,
    Dr = 0,
    M & 6)
        throw Error(y(327));
    var n = e.callbackNode;
    if (rn() && e.callbackNode !== n)
        return null;
    var r = Br(e, e === q ? ee : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = ol(e, r);
    else {
        t = r;
        var l = M;
        M |= 2;
        var o = ba();
        (q !== e || ee !== t) && (Qe = null,
        fn = Y() + 500,
        zt(e, t));
        do
            try {
                zd();
                break
            } catch (u) {
                qa(e, u)
            }
        while (!0);
        vi(),
        nl.current = o,
        M = l,
        J !== null ? t = 0 : (q = null,
        ee = 0,
        t = G)
    }
    if (t !== 0) {
        if (t === 2 && (l = vo(e),
        l !== 0 && (r = l,
        t = Ho(e, l))),
        t === 1)
            throw n = er,
            zt(e, 0),
            ut(e, r),
            he(e, Y()),
            n;
        if (t === 6)
            ut(e, r);
        else {
            if (l = e.current.alternate,
            !(r & 30) && !jd(l) && (t = ol(e, r),
            t === 2 && (o = vo(e),
            o !== 0 && (r = o,
            t = Ho(e, o))),
            t === 1))
                throw n = er,
                zt(e, 0),
                ut(e, r),
                he(e, Y()),
                n;
            switch (e.finishedWork = l,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(y(345));
            case 2:
                Ct(e, fe, Qe);
                break;
            case 3:
                if (ut(e, r),
                (r & 130023424) === r && (t = Ti + 500 - Y(),
                10 < t)) {
                    if (Br(e, 0) !== 0)
                        break;
                    if (l = e.suspendedLanes,
                    (l & r) !== r) {
                        se(),
                        e.pingedLanes |= e.suspendedLanes & l;
                        break
                    }
                    e.timeoutHandle = _o(Ct.bind(null, e, fe, Qe), t);
                    break
                }
                Ct(e, fe, Qe);
                break;
            case 4:
                if (ut(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                l = -1; 0 < r; ) {
                    var i = 31 - Ie(r);
                    o = 1 << i,
                    i = t[i],
                    i > l && (l = i),
                    r &= ~o
                }
                if (r = l,
                r = Y() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Nd(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = _o(Ct.bind(null, e, fe, Qe), r);
                    break
                }
                Ct(e, fe, Qe);
                break;
            case 5:
                Ct(e, fe, Qe);
                break;
            default:
                throw Error(y(329))
            }
        }
    }
    return he(e, Y()),
    e.callbackNode === n ? Za.bind(null, e) : null
}
function Ho(e, t) {
    var n = In;
    return e.current.memoizedState.isDehydrated && (zt(e, t).flags |= 256),
    e = ol(e, t),
    e !== 2 && (t = fe,
    fe = n,
    t !== null && Qo(t)),
    e
}
function Qo(e) {
    fe === null ? fe = e : fe.push.apply(fe, e)
}
function jd(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var l = n[r]
                      , o = l.getSnapshot;
                    l = l.value;
                    try {
                        if (!Ue(o(), l))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function ut(e, t) {
    for (t &= ~Li,
    t &= ~yl,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - Ie(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function Hu(e) {
    if (M & 6)
        throw Error(y(327));
    rn();
    var t = Br(e, 0);
    if (!(t & 1))
        return he(e, Y()),
        null;
    var n = ol(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = vo(e);
        r !== 0 && (t = r,
        n = Ho(e, r))
    }
    if (n === 1)
        throw n = er,
        zt(e, 0),
        ut(e, t),
        he(e, Y()),
        n;
    if (n === 6)
        throw Error(y(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    Ct(e, fe, Qe),
    he(e, Y()),
    null
}
function Ri(e, t) {
    var n = M;
    M |= 1;
    try {
        return e(t)
    } finally {
        M = n,
        M === 0 && (fn = Y() + 500,
        ml && St())
    }
}
function It(e) {
    at !== null && at.tag === 0 && !(M & 6) && rn();
    var t = M;
    M |= 1;
    var n = Pe.transition
      , r = O;
    try {
        if (Pe.transition = null,
        O = 1,
        e)
            return e()
    } finally {
        O = r,
        Pe.transition = n,
        M = t,
        !(M & 6) && St()
    }
}
function Mi() {
    ye = Zt.current,
    A(Zt)
}
function zt(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    rd(n)),
    J !== null)
        for (n = J.return; n !== null; ) {
            var r = n;
            switch (pi(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && Kr();
                break;
            case 3:
                an(),
                A(pe),
                A(oe),
                Si();
                break;
            case 5:
                ki(r);
                break;
            case 4:
                an();
                break;
            case 13:
                A(B);
                break;
            case 19:
                A(B);
                break;
            case 10:
                gi(r.type._context);
                break;
            case 22:
            case 23:
                Mi()
            }
            n = n.return
        }
    if (q = e,
    J = e = gt(e.current, null),
    ee = ye = t,
    G = 0,
    er = null,
    Li = yl = Dt = 0,
    fe = In = null,
    jt !== null) {
        for (t = 0; t < jt.length; t++)
            if (n = jt[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var l = r.next
                  , o = n.pending;
                if (o !== null) {
                    var i = o.next;
                    o.next = l,
                    r.next = i
                }
                n.pending = r
            }
        jt = null
    }
    return e
}
function qa(e, t) {
    do {
        var n = J;
        try {
            if (vi(),
            Tr.current = tl,
            el) {
                for (var r = V.memoizedState; r !== null; ) {
                    var l = r.queue;
                    l !== null && (l.pending = null),
                    r = r.next
                }
                el = !1
            }
            if (Ot = 0,
            Z = X = V = null,
            On = !1,
            Zn = 0,
            zi.current = null,
            n === null || n.return === null) {
                G = 1,
                er = t,
                J = null;
                break
            }
            e: {
                var o = e
                  , i = n.return
                  , u = n
                  , s = t;
                if (t = ee,
                u.flags |= 32768,
                s !== null && typeof s == "object" && typeof s.then == "function") {
                    var c = s
                      , v = u
                      , h = v.tag;
                    if (!(v.mode & 1) && (h === 0 || h === 11 || h === 15)) {
                        var p = v.alternate;
                        p ? (v.updateQueue = p.updateQueue,
                        v.memoizedState = p.memoizedState,
                        v.lanes = p.lanes) : (v.updateQueue = null,
                        v.memoizedState = null)
                    }
                    var w = Tu(i);
                    if (w !== null) {
                        w.flags &= -257,
                        Ru(w, i, u, o, t),
                        w.mode & 1 && Lu(o, c, t),
                        t = w,
                        s = c;
                        var x = t.updateQueue;
                        if (x === null) {
                            var k = new Set;
                            k.add(s),
                            t.updateQueue = k
                        } else
                            x.add(s);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Lu(o, c, t),
                            Oi();
                            break e
                        }
                        s = Error(y(426))
                    }
                } else if ($ && u.mode & 1) {
                    var D = Tu(i);
                    if (D !== null) {
                        !(D.flags & 65536) && (D.flags |= 256),
                        Ru(D, i, u, o, t),
                        mi(cn(s, u));
                        break e
                    }
                }
                o = s = cn(s, u),
                G !== 4 && (G = 2),
                In === null ? In = [o] : In.push(o),
                o = i;
                do {
                    switch (o.tag) {
                    case 3:
                        o.flags |= 65536,
                        t &= -t,
                        o.lanes |= t;
                        var f = Da(o, s, t);
                        _u(o, f);
                        break e;
                    case 1:
                        u = s;
                        var a = o.type
                          , d = o.stateNode;
                        if (!(o.flags & 128) && (typeof a.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (ht === null || !ht.has(d)))) {
                            o.flags |= 65536,
                            t &= -t,
                            o.lanes |= t;
                            var g = Ia(o, u, t);
                            _u(o, g);
                            break e
                        }
                    }
                    o = o.return
                } while (o !== null)
            }
            tc(n)
        } catch (S) {
            t = S,
            J === n && n !== null && (J = n = n.return);
            continue
        }
        break
    } while (!0)
}
function ba() {
    var e = nl.current;
    return nl.current = tl,
    e === null ? tl : e
}
function Oi() {
    (G === 0 || G === 3 || G === 2) && (G = 4),
    q === null || !(Dt & 268435455) && !(yl & 268435455) || ut(q, ee)
}
function ol(e, t) {
    var n = M;
    M |= 2;
    var r = ba();
    (q !== e || ee !== t) && (Qe = null,
    zt(e, t));
    do
        try {
            Pd();
            break
        } catch (l) {
            qa(e, l)
        }
    while (!0);
    if (vi(),
    M = n,
    nl.current = r,
    J !== null)
        throw Error(y(261));
    return q = null,
    ee = 0,
    G
}
function Pd() {
    for (; J !== null; )
        ec(J)
}
function zd() {
    for (; J !== null && !bc(); )
        ec(J)
}
function ec(e) {
    var t = rc(e.alternate, e, ye);
    e.memoizedProps = e.pendingProps,
    t === null ? tc(e) : J = t,
    zi.current = null
}
function tc(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = Sd(n, t),
            n !== null) {
                n.flags &= 32767,
                J = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                G = 6,
                J = null;
                return
            }
        } else if (n = kd(n, t, ye),
        n !== null) {
            J = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            J = t;
            return
        }
        J = t = e
    } while (t !== null);
    G === 0 && (G = 5)
}
function Ct(e, t, n) {
    var r = O
      , l = Pe.transition;
    try {
        Pe.transition = null,
        O = 1,
        Ld(e, t, n, r)
    } finally {
        Pe.transition = l,
        O = r
    }
    return null
}
function Ld(e, t, n, r) {
    do
        rn();
    while (at !== null);
    if (M & 6)
        throw Error(y(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(y(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var o = n.lanes | n.childLanes;
    if (cf(e, o),
    e === q && (J = q = null,
    ee = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Er || (Er = !0,
    lc($r, function() {
        return rn(),
        null
    })),
    o = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || o) {
        o = Pe.transition,
        Pe.transition = null;
        var i = O;
        O = 1;
        var u = M;
        M |= 4,
        zi.current = null,
        _d(e, n),
        Xa(n, e),
        Gf(So),
        Vr = !!ko,
        So = ko = null,
        e.current = n,
        Cd(n),
        ef(),
        M = u,
        O = i,
        Pe.transition = o
    } else
        e.current = n;
    if (Er && (Er = !1,
    at = e,
    ll = l),
    o = e.pendingLanes,
    o === 0 && (ht = null),
    rf(n.stateNode),
    he(e, Y()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            l = t[n],
            r(l.value, {
                componentStack: l.stack,
                digest: l.digest
            });
    if (rl)
        throw rl = !1,
        e = Vo,
        Vo = null,
        e;
    return ll & 1 && e.tag !== 0 && rn(),
    o = e.pendingLanes,
    o & 1 ? e === Wo ? Fn++ : (Fn = 0,
    Wo = e) : Fn = 0,
    St(),
    null
}
function rn() {
    if (at !== null) {
        var e = Ds(ll)
          , t = Pe.transition
          , n = O;
        try {
            if (Pe.transition = null,
            O = 16 > e ? 16 : e,
            at === null)
                var r = !1;
            else {
                if (e = at,
                at = null,
                ll = 0,
                M & 6)
                    throw Error(y(331));
                var l = M;
                for (M |= 4,
                _ = e.current; _ !== null; ) {
                    var o = _
                      , i = o.child;
                    if (_.flags & 16) {
                        var u = o.deletions;
                        if (u !== null) {
                            for (var s = 0; s < u.length; s++) {
                                var c = u[s];
                                for (_ = c; _ !== null; ) {
                                    var v = _;
                                    switch (v.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Dn(8, v, o)
                                    }
                                    var h = v.child;
                                    if (h !== null)
                                        h.return = v,
                                        _ = h;
                                    else
                                        for (; _ !== null; ) {
                                            v = _;
                                            var p = v.sibling
                                              , w = v.return;
                                            if (Ka(v),
                                            v === c) {
                                                _ = null;
                                                break
                                            }
                                            if (p !== null) {
                                                p.return = w,
                                                _ = p;
                                                break
                                            }
                                            _ = w
                                        }
                                }
                            }
                            var x = o.alternate;
                            if (x !== null) {
                                var k = x.child;
                                if (k !== null) {
                                    x.child = null;
                                    do {
                                        var D = k.sibling;
                                        k.sibling = null,
                                        k = D
                                    } while (k !== null)
                                }
                            }
                            _ = o
                        }
                    }
                    if (o.subtreeFlags & 2064 && i !== null)
                        i.return = o,
                        _ = i;
                    else
                        e: for (; _ !== null; ) {
                            if (o = _,
                            o.flags & 2048)
                                switch (o.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Dn(9, o, o.return)
                                }
                            var f = o.sibling;
                            if (f !== null) {
                                f.return = o.return,
                                _ = f;
                                break e
                            }
                            _ = o.return
                        }
                }
                var a = e.current;
                for (_ = a; _ !== null; ) {
                    i = _;
                    var d = i.child;
                    if (i.subtreeFlags & 2064 && d !== null)
                        d.return = i,
                        _ = d;
                    else
                        e: for (i = a; _ !== null; ) {
                            if (u = _,
                            u.flags & 2048)
                                try {
                                    switch (u.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        gl(9, u)
                                    }
                                } catch (S) {
                                    K(u, u.return, S)
                                }
                            if (u === i) {
                                _ = null;
                                break e
                            }
                            var g = u.sibling;
                            if (g !== null) {
                                g.return = u.return,
                                _ = g;
                                break e
                            }
                            _ = u.return
                        }
                }
                if (M = l,
                St(),
                Ve && typeof Ve.onPostCommitFiberRoot == "function")
                    try {
                        Ve.onPostCommitFiberRoot(al, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            O = n,
            Pe.transition = t
        }
    }
    return !1
}
function Qu(e, t, n) {
    t = cn(n, t),
    t = Da(e, t, 1),
    e = mt(e, t, 1),
    t = se(),
    e !== null && (nr(e, 1, t),
    he(e, t))
}
function K(e, t, n) {
    if (e.tag === 3)
        Qu(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                Qu(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (ht === null || !ht.has(r))) {
                    e = cn(n, e),
                    e = Ia(t, e, 1),
                    t = mt(t, e, 1),
                    e = se(),
                    t !== null && (nr(t, 1, e),
                    he(t, e));
                    break
                }
            }
            t = t.return
        }
}
function Td(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = se(),
    e.pingedLanes |= e.suspendedLanes & n,
    q === e && (ee & n) === n && (G === 4 || G === 3 && (ee & 130023424) === ee && 500 > Y() - Ti ? zt(e, 0) : Li |= n),
    he(e, t)
}
function nc(e, t) {
    t === 0 && (e.mode & 1 ? (t = pr,
    pr <<= 1,
    !(pr & 130023424) && (pr = 4194304)) : t = 1);
    var n = se();
    e = qe(e, t),
    e !== null && (nr(e, t, n),
    he(e, n))
}
function Rd(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    nc(e, n)
}
function Md(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(y(314))
    }
    r !== null && r.delete(t),
    nc(e, n)
}
var rc;
rc = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || pe.current)
            de = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return de = !1,
                xd(e, t, n);
            de = !!(e.flags & 131072)
        }
    else
        de = !1,
        $ && t.flags & 1048576 && ua(t, Xr, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        Mr(e, t),
        e = t.pendingProps;
        var l = on(t, oe.current);
        nn(t, n),
        l = _i(null, t, r, e, l, n);
        var o = Ci();
        return t.flags |= 1,
        typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        me(r) ? (o = !0,
        Yr(t)) : o = !1,
        t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null,
        wi(t),
        l.updater = vl,
        t.stateNode = l,
        l._reactInternals = t,
        To(t, r, e, n),
        t = Oo(null, t, r, !0, o, n)) : (t.tag = 0,
        $ && o && di(t),
        ue(null, t, l, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (Mr(e, t),
            e = t.pendingProps,
            l = r._init,
            r = l(r._payload),
            t.type = r,
            l = t.tag = Dd(r),
            e = Me(r, e),
            l) {
            case 0:
                t = Mo(null, t, r, e, n);
                break e;
            case 1:
                t = Du(null, t, r, e, n);
                break e;
            case 11:
                t = Mu(null, t, r, e, n);
                break e;
            case 14:
                t = Ou(null, t, r, Me(r.type, e), n);
                break e
            }
            throw Error(y(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        l = t.pendingProps,
        l = t.elementType === r ? l : Me(r, l),
        Mo(e, t, r, l, n);
    case 1:
        return r = t.type,
        l = t.pendingProps,
        l = t.elementType === r ? l : Me(r, l),
        Du(e, t, r, l, n);
    case 3:
        e: {
            if ($a(t),
            e === null)
                throw Error(y(387));
            r = t.pendingProps,
            o = t.memoizedState,
            l = o.element,
            pa(e, t),
            qr(t, r, null, n);
            var i = t.memoizedState;
            if (r = i.element,
            o.isDehydrated)
                if (o = {
                    element: r,
                    isDehydrated: !1,
                    cache: i.cache,
                    pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                    transitions: i.transitions
                },
                t.updateQueue.baseState = o,
                t.memoizedState = o,
                t.flags & 256) {
                    l = cn(Error(y(423)), t),
                    t = Iu(e, t, r, n, l);
                    break e
                } else if (r !== l) {
                    l = cn(Error(y(424)), t),
                    t = Iu(e, t, r, n, l);
                    break e
                } else
                    for (we = pt(t.stateNode.containerInfo.firstChild),
                    xe = t,
                    $ = !0,
                    De = null,
                    n = fa(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (un(),
                r === l) {
                    t = be(e, t, n);
                    break e
                }
                ue(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return ma(t),
        e === null && Po(t),
        r = t.type,
        l = t.pendingProps,
        o = e !== null ? e.memoizedProps : null,
        i = l.children,
        Eo(r, l) ? i = null : o !== null && Eo(r, o) && (t.flags |= 32),
        Aa(e, t),
        ue(e, t, i, n),
        t.child;
    case 6:
        return e === null && Po(t),
        null;
    case 13:
        return Ba(e, t, n);
    case 4:
        return xi(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = sn(t, null, r, n) : ue(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        l = t.pendingProps,
        l = t.elementType === r ? l : Me(r, l),
        Mu(e, t, r, l, n);
    case 7:
        return ue(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return ue(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return ue(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            l = t.pendingProps,
            o = t.memoizedProps,
            i = l.value,
            I(Gr, r._currentValue),
            r._currentValue = i,
            o !== null)
                if (Ue(o.value, i)) {
                    if (o.children === l.children && !pe.current) {
                        t = be(e, t, n);
                        break e
                    }
                } else
                    for (o = t.child,
                    o !== null && (o.return = t); o !== null; ) {
                        var u = o.dependencies;
                        if (u !== null) {
                            i = o.child;
                            for (var s = u.firstContext; s !== null; ) {
                                if (s.context === r) {
                                    if (o.tag === 1) {
                                        s = Xe(-1, n & -n),
                                        s.tag = 2;
                                        var c = o.updateQueue;
                                        if (c !== null) {
                                            c = c.shared;
                                            var v = c.pending;
                                            v === null ? s.next = s : (s.next = v.next,
                                            v.next = s),
                                            c.pending = s
                                        }
                                    }
                                    o.lanes |= n,
                                    s = o.alternate,
                                    s !== null && (s.lanes |= n),
                                    zo(o.return, n, t),
                                    u.lanes |= n;
                                    break
                                }
                                s = s.next
                            }
                        } else if (o.tag === 10)
                            i = o.type === t.type ? null : o.child;
                        else if (o.tag === 18) {
                            if (i = o.return,
                            i === null)
                                throw Error(y(341));
                            i.lanes |= n,
                            u = i.alternate,
                            u !== null && (u.lanes |= n),
                            zo(i, n, t),
                            i = o.sibling
                        } else
                            i = o.child;
                        if (i !== null)
                            i.return = o;
                        else
                            for (i = o; i !== null; ) {
                                if (i === t) {
                                    i = null;
                                    break
                                }
                                if (o = i.sibling,
                                o !== null) {
                                    o.return = i.return,
                                    i = o;
                                    break
                                }
                                i = i.return
                            }
                        o = i
                    }
            ue(e, t, l.children, n),
            t = t.child
        }
        return t;
    case 9:
        return l = t.type,
        r = t.pendingProps.children,
        nn(t, n),
        l = ze(l),
        r = r(l),
        t.flags |= 1,
        ue(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        l = Me(r, t.pendingProps),
        l = Me(r.type, l),
        Ou(e, t, r, l, n);
    case 15:
        return Fa(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        l = t.pendingProps,
        l = t.elementType === r ? l : Me(r, l),
        Mr(e, t),
        t.tag = 1,
        me(r) ? (e = !0,
        Yr(t)) : e = !1,
        nn(t, n),
        Oa(t, r, l),
        To(t, r, l, n),
        Oo(null, t, r, !0, e, n);
    case 19:
        return Va(e, t, n);
    case 22:
        return Ua(e, t, n)
    }
    throw Error(y(156, t.tag))
}
;
function lc(e, t) {
    return Ts(e, t)
}
function Od(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function je(e, t, n, r) {
    return new Od(e,t,n,r)
}
function Di(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function Dd(e) {
    if (typeof e == "function")
        return Di(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === ei)
            return 11;
        if (e === ti)
            return 14
    }
    return 2
}
function gt(e, t) {
    var n = e.alternate;
    return n === null ? (n = je(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function Ir(e, t, n, r, l, o) {
    var i = 2;
    if (r = e,
    typeof e == "function")
        Di(e) && (i = 1);
    else if (typeof e == "string")
        i = 5;
    else
        e: switch (e) {
        case Bt:
            return Lt(n.children, l, o, t);
        case bo:
            i = 8,
            l |= 8;
            break;
        case eo:
            return e = je(12, n, t, l | 2),
            e.elementType = eo,
            e.lanes = o,
            e;
        case to:
            return e = je(13, n, t, l),
            e.elementType = to,
            e.lanes = o,
            e;
        case no:
            return e = je(19, n, t, l),
            e.elementType = no,
            e.lanes = o,
            e;
        case ms:
            return wl(n, l, o, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case ds:
                    i = 10;
                    break e;
                case ps:
                    i = 9;
                    break e;
                case ei:
                    i = 11;
                    break e;
                case ti:
                    i = 14;
                    break e;
                case lt:
                    i = 16,
                    r = null;
                    break e
                }
            throw Error(y(130, e == null ? e : typeof e, ""))
        }
    return t = je(i, n, t, l),
    t.elementType = e,
    t.type = r,
    t.lanes = o,
    t
}
function Lt(e, t, n, r) {
    return e = je(7, e, r, t),
    e.lanes = n,
    e
}
function wl(e, t, n, r) {
    return e = je(22, e, r, t),
    e.elementType = ms,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function Xl(e, t, n) {
    return e = je(6, e, null, t),
    e.lanes = n,
    e
}
function Gl(e, t, n) {
    return t = je(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function Id(e, t, n, r, l) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = Ll(0),
    this.expirationTimes = Ll(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = Ll(0),
    this.identifierPrefix = r,
    this.onRecoverableError = l,
    this.mutableSourceEagerHydrationData = null
}
function Ii(e, t, n, r, l, o, i, u, s) {
    return e = new Id(e,t,n,u,s),
    t === 1 ? (t = 1,
    o === !0 && (t |= 8)) : t = 0,
    o = je(3, null, null, t),
    e.current = o,
    o.stateNode = e,
    o.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    wi(o),
    e
}
function Fd(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: $t,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function oc(e) {
    if (!e)
        return wt;
    e = e._reactInternals;
    e: {
        if (Ut(e) !== e || e.tag !== 1)
            throw Error(y(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (me(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(y(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (me(n))
            return oa(e, n, t)
    }
    return t
}
function ic(e, t, n, r, l, o, i, u, s) {
    return e = Ii(n, r, !0, e, l, o, i, u, s),
    e.context = oc(null),
    n = e.current,
    r = se(),
    l = vt(n),
    o = Xe(r, l),
    o.callback = t ?? null,
    mt(n, o, l),
    e.current.lanes = l,
    nr(e, l, r),
    he(e, r),
    e
}
function xl(e, t, n, r) {
    var l = t.current
      , o = se()
      , i = vt(l);
    return n = oc(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = Xe(o, i),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = mt(l, t, i),
    e !== null && (Fe(e, l, i, o),
    Lr(e, l, i)),
    i
}
function il(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function Ku(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function Fi(e, t) {
    Ku(e, t),
    (e = e.alternate) && Ku(e, t)
}
function Ud() {
    return null
}
var uc = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function Ui(e) {
    this._internalRoot = e
}
kl.prototype.render = Ui.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(y(409));
    xl(e, t, null, null)
}
;
kl.prototype.unmount = Ui.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        It(function() {
            xl(null, e, null, null)
        }),
        t[Ze] = null
    }
}
;
function kl(e) {
    this._internalRoot = e
}
kl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = Us();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < it.length && t !== 0 && t < it[n].priority; n++)
            ;
        it.splice(n, 0, e),
        n === 0 && $s(e)
    }
}
;
function Ai(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function Sl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function Yu() {}
function Ad(e, t, n, r, l) {
    if (l) {
        if (typeof r == "function") {
            var o = r;
            r = function() {
                var c = il(i);
                o.call(c)
            }
        }
        var i = ic(t, r, e, 0, null, !1, !1, "", Yu);
        return e._reactRootContainer = i,
        e[Ze] = i.current,
        Kn(e.nodeType === 8 ? e.parentNode : e),
        It(),
        i
    }
    for (; l = e.lastChild; )
        e.removeChild(l);
    if (typeof r == "function") {
        var u = r;
        r = function() {
            var c = il(s);
            u.call(c)
        }
    }
    var s = Ii(e, 0, !1, null, null, !1, !1, "", Yu);
    return e._reactRootContainer = s,
    e[Ze] = s.current,
    Kn(e.nodeType === 8 ? e.parentNode : e),
    It(function() {
        xl(t, s, n, r)
    }),
    s
}
function El(e, t, n, r, l) {
    var o = n._reactRootContainer;
    if (o) {
        var i = o;
        if (typeof l == "function") {
            var u = l;
            l = function() {
                var s = il(i);
                u.call(s)
            }
        }
        xl(t, i, e, l)
    } else
        i = Ad(n, t, e, l, r);
    return il(i)
}
Is = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = jn(t.pendingLanes);
            n !== 0 && (li(t, n | 1),
            he(t, Y()),
            !(M & 6) && (fn = Y() + 500,
            St()))
        }
        break;
    case 13:
        It(function() {
            var r = qe(e, 1);
            if (r !== null) {
                var l = se();
                Fe(r, e, 1, l)
            }
        }),
        Fi(e, 1)
    }
}
;
oi = function(e) {
    if (e.tag === 13) {
        var t = qe(e, 134217728);
        if (t !== null) {
            var n = se();
            Fe(t, e, 134217728, n)
        }
        Fi(e, 134217728)
    }
}
;
Fs = function(e) {
    if (e.tag === 13) {
        var t = vt(e)
          , n = qe(e, t);
        if (n !== null) {
            var r = se();
            Fe(n, e, t, r)
        }
        Fi(e, t)
    }
}
;
Us = function() {
    return O
}
;
As = function(e, t) {
    var n = O;
    try {
        return O = e,
        t()
    } finally {
        O = n
    }
}
;
po = function(e, t, n) {
    switch (t) {
    case "input":
        if (oo(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var l = pl(r);
                    if (!l)
                        throw Error(y(90));
                    vs(r),
                    oo(r, l)
                }
            }
        }
        break;
    case "textarea":
        ys(e, n);
        break;
    case "select":
        t = n.value,
        t != null && qt(e, !!n.multiple, t, !1)
    }
}
;
Cs = Ri;
Ns = It;
var $d = {
    usingClientEntryPoint: !1,
    Events: [lr, Qt, pl, Es, _s, Ri]
}
  , _n = {
    findFiberByHostInstance: Nt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , Bd = {
    bundleType: _n.bundleType,
    version: _n.version,
    rendererPackageName: _n.rendererPackageName,
    rendererConfig: _n.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: et.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = zs(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: _n.findFiberByHostInstance || Ud,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var _r = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!_r.isDisabled && _r.supportsFiber)
        try {
            al = _r.inject(Bd),
            Ve = _r
        } catch {}
}
Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $d;
Se.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Ai(t))
        throw Error(y(200));
    return Fd(e, t, null, n)
}
;
Se.createRoot = function(e, t) {
    if (!Ai(e))
        throw Error(y(299));
    var n = !1
      , r = ""
      , l = uc;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    t = Ii(e, 1, !1, null, null, n, !1, r, l),
    e[Ze] = t.current,
    Kn(e.nodeType === 8 ? e.parentNode : e),
    new Ui(t)
}
;
Se.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(y(188)) : (e = Object.keys(e).join(","),
        Error(y(268, e)));
    return e = zs(t),
    e = e === null ? null : e.stateNode,
    e
}
;
Se.flushSync = function(e) {
    return It(e)
}
;
Se.hydrate = function(e, t, n) {
    if (!Sl(t))
        throw Error(y(200));
    return El(null, e, t, !0, n)
}
;
Se.hydrateRoot = function(e, t, n) {
    if (!Ai(e))
        throw Error(y(405));
    var r = n != null && n.hydratedSources || null
      , l = !1
      , o = ""
      , i = uc;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0),
    n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    t = ic(t, null, e, 1, n ?? null, l, !1, o, i),
    e[Ze] = t.current,
    Kn(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            l = n._getVersion,
            l = l(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(n, l);
    return new kl(t)
}
;
Se.render = function(e, t, n) {
    if (!Sl(t))
        throw Error(y(200));
    return El(null, e, t, !1, n)
}
;
Se.unmountComponentAtNode = function(e) {
    if (!Sl(e))
        throw Error(y(40));
    return e._reactRootContainer ? (It(function() {
        El(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[Ze] = null
        })
    }),
    !0) : !1
}
;
Se.unstable_batchedUpdates = Ri;
Se.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Sl(n))
        throw Error(y(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(y(38));
    return El(e, t, n, !1, r)
}
;
Se.version = "18.3.1-next-f1338f8080-20240426";
function sc() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sc)
        } catch (e) {
            console.error(e)
        }
}
sc(),
ss.exports = Se;
var Vd = ss.exports
  , Ju = Vd;
ql.createRoot = Ju.createRoot,
ql.hydrateRoot = Ju.hydrateRoot;
var ac = {
    exports: {}
}
  , Wd = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
  , Hd = Wd
  , Qd = Hd;
function cc() {}
function fc() {}
fc.resetWarningCache = cc;
var Kd = function() {
    function e(r, l, o, i, u, s) {
        if (s !== Qd) {
            var c = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw c.name = "Invariant Violation",
            c
        }
    }
    e.isRequired = e;
    function t() {
        return e
    }
    var n = {
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
        checkPropTypes: fc,
        resetWarningCache: cc
    };
    return n.PropTypes = n,
    n
};
ac.exports = Kd();
var Yd = ac.exports;
const Zl = Gu(Yd);
Zl.node.isRequired,
Zl.func,
Zl.string;
const ul = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='1em'%20height='1em'%20viewBox='0%200%2024%2024'%3e%3cpath%20fill='none'%20stroke='currentColor'%20stroke-linecap='round'%20stroke-linejoin='round'%20stroke-width='1.5'%20d='m11.985%2015.408l3.242%203.686c1.2%201.365%201.801%202.048%202.43%201.881c.628-.166.844-1.064%201.275-2.861l2.39-9.968c.665-2.768.997-4.151.259-4.834s-2.017-.175-4.575.84L5.14%208.865c-2.046.813-3.069%201.219-3.134%201.917a1%201%200%200%200%200%20.214c.063.699%201.084%201.108%203.128%201.927c.925.371%201.388.557%201.72.912q.056.06.108.124c.306.38.436.88.697%201.876l.489%201.867c.253.97.38%201.456.713%201.522s.622-.336%201.201-1.141zm0%200l-.317-.33c-.362-.378-.543-.566-.543-.8s.18-.423.543-.8l3.573-3.724'%20color='currentColor'/%3e%3c/svg%3e"
  , dc = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='1em'%20height='1em'%20viewBox='0%200%2024%2024'%3e%3cpath%20fill='black'%20d='M8%202H1l8.26%2011.015L1.45%2022H4.1l6.388-7.349L16%2022h7l-8.608-11.478L21.8%202h-2.65l-5.986%206.886zm9%2018L5%204h2l12%2016z'/%3e%3c/svg%3e"
  , Xu = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='1em'%20height='1em'%20viewBox='0%200%2024%2024'%3e%3ccircle%20cx='12'%20cy='12'%20r='0'%20fill='%235ef81b'%3e%3canimate%20id='svgSpinnersPulse20'%20fill='freeze'%20attributeName='r'%20begin='0;svgSpinnersPulse21.begin+0.6s'%20calcMode='spline'%20dur='1.2s'%20keySplines='.52,.6,.25,.99'%20values='0;11'/%3e%3canimate%20fill='freeze'%20attributeName='opacity'%20begin='0;svgSpinnersPulse21.begin+0.6s'%20calcMode='spline'%20dur='1.2s'%20keySplines='.52,.6,.25,.99'%20values='1;0'/%3e%3c/circle%3e%3ccircle%20cx='12'%20cy='12'%20r='0'%20fill='%235ef81b'%3e%3canimate%20id='svgSpinnersPulse21'%20fill='freeze'%20attributeName='r'%20begin='svgSpinnersPulse20.begin+0.6s'%20calcMode='spline'%20dur='1.2s'%20keySplines='.52,.6,.25,.99'%20values='0;11'/%3e%3canimate%20fill='freeze'%20attributeName='opacity'%20begin='svgSpinnersPulse20.begin+0.6s'%20calcMode='spline'%20dur='1.2s'%20keySplines='.52,.6,.25,.99'%20values='1;0'/%3e%3c/circle%3e%3c/svg%3e"
  , Jd = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='1em'%20height='1em'%20viewBox='0%200%2020%2020'%3e%3cpath%20fill='black'%20d='M6%206V2c0-1.1.9-2%202-2h10a2%202%200%200%201%202%202v10a2%202%200%200%201-2%202h-4v4a2%202%200%200%201-2%202H2a2%202%200%200%201-2-2V8c0-1.1.9-2%202-2zm2%200h4a2%202%200%200%201%202%202v4h4V2H8zM2%208v10h10V8z'/%3e%3c/svg%3e"
  , Xd = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='1em'%20height='1em'%20viewBox='0%200%2036%2036'%3e%3cpath%20fill='%2331373d'%20d='M34.459%201.375a2.999%202.999%200%200%200-4.149.884L13.5%2028.17l-8.198-7.58a2.999%202.999%200%201%200-4.073%204.405l10.764%209.952s.309.266.452.359a2.999%202.999%200%200%200%204.15-.884L35.343%205.524a2.999%202.999%200%200%200-.884-4.149'/%3e%3c/svg%3e"
  , He = "assets/supalogo.jpeg"
  , pc = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='1em'%20height='1em'%20viewBox='0%200%2048%2048'%3e%3ccircle%20cx='24'%20cy='24'%20r='21.5'%20fill='none'%20stroke='currentColor'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20fill='none'%20stroke='currentColor'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='M7.051%2037.228c4.519-9.359%201.828-21.471%209.117-23.377s12.056%201.345%2015.87%202.467s6.978%201.716%207.682%205.27C40.729%2026.693%2024.13%2035.71%2027.664%2045.5'/%3e%3cpath%20fill='none'%20stroke='currentColor'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='M24.355%2026.972c3.196%202.523%206.496%201.685%2013.796-1.373m-8.302-10.062c0-2.273-4.148-4.098-6.719-2.079'/%3e%3ccircle%20cx='21.047'%20cy='19.122'%20r='3.308'%20fill='none'%20stroke='currentColor'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3ccircle%20cx='21.047'%20cy='19.122'%20r='1.29'%20fill='none'%20stroke='currentColor'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3ccircle%20cx='34.841'%20cy='22.991'%20r='.775'%20fill='currentColor'/%3e%3cpath%20fill='none'%20stroke='currentColor'%20stroke-linecap='round'%20stroke-linejoin='round'%20d='M42.375%2022.99A18.404%2018.404%200%200%200%2025.033%205.628'/%3e%3c/svg%3e"
  , Gd = ()=>(Tt.useState(!1),
Tt.useState("home"),
m.jsxs("nav", {
    className: "fixed flex left-1/2 transform -translate-x-1/2 w-[90%] md:w-[60%]  justify-between items-center text-center px-6 py-3 bg-white border-2  border-black rounded-full  z-20 shadow-md  ",
    children: [m.jsx("div", {
        children: m.jsx("h1", {
            className: " text-2xl md:text-3xl font-semibold",
            children: "$SUPA"
        })
    }), m.jsxs("div", {
        className: "items-center gap-4 hidden md:flex",
        children: [m.jsx("a", {
            href: "https://t.me/supaportal",
            target: "_blank",
            rel: "noopener noreferrer",
            children: m.jsx("div", {
                className: "bg-white text-black border-[1px] p-2 border-black rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-hover-custom hover:transform hover:translate-custom cursor-pointer",
                children: m.jsx("img", {
                    src: ul,
                    alt: ""
                })
            })
        }), m.jsx("a", {
            href: "https://x.com/SUPA_ON_SOL",
            target: "_blank",
            rel: "noopener noreferrer",
            children: m.jsx("div", {
                className: "bg-white text-black border-[1px] p-2 border-black rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-hover-custom hover:transform hover:translate-custom cursor-pointer",
                children: m.jsx("img", {
                    src: pc,
                    alt: ""
                })
            })
        }), m.jsx("a", {
            href: "https://dexscreener.com/solana/5yhhcby9jqyy2tbmxcju4agkdjanwzzbbtjzwjtjhnlq",
            target: "_blank",
            rel: "noopener noreferrer",
            children: m.jsx("div", {
                className: "bg-white text-black border-[1px] p-2 border-black rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-hover-custom hover:transform hover:translate-custom cursor-pointer",
                children: m.jsx("img", {
                    src: Zd,
                    className: "w-[20px]",
                    alt: ""
                })
            })
        })/*, m.jsx("a", {
            href: "https://t.me/supaportal",
            target: "_blank",
            rel: "noopener noreferrer",
            children: m.jsxs("div", {
                className: "bg-white font-semibold font-comic hidden lg:flex text-black border-[1px] p-2 border-black rounded-md flex items-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-hover-custom hover:transform hover:translate-custom cursor-pointer",
                children: [m.jsx("div", {
                    children: "Meme"
                }), m.jsx("div", {
                    children: m.jsx("img", {
                        src: ul,
                        alt: ""
                    })
                })]
            })
        }) */, m.jsx("a", {
            href: "https://dexscreener.com/solana/5yhhcby9jqyy2tbmxcju4agkdjanwzzbbtjzwjtjhnlq",
            target: "_blank",
            rel: "noopener noreferrer",
            children: m.jsxs("div", {
                className: "bg-white flex items-center font-semibold gap-1 text-black border-2 px-4 py-2  border-black rounded-full hover:shadow-hover-custom hover:transform hover:translate-custom cursor-pointer",
                children: [m.jsx("div", {
                    className: "text-black",
                    children: "Buy $SUPA"
                }), m.jsx("div", {
                    children: m.jsx("img", {
                        src: Xu,
                        alt: ""
                    })
                })]
            })
        })]
    }), m.jsx("a", {
        href: "https://dexscreener.com/solana/5yhhcby9jqyy2tbmxcju4agkdjanwzzbbtjzwjtjhnlq",
        target: "_blank",
        rel: "noopener noreferrer",
        className: "flex md:hidden",
        children: m.jsxs("div", {
            className: "bg-white flex items-center font-semibold gap-1 text-black border-2 px-4 py-2  border-black rounded-full hover:shadow-hover-custom hover:transform hover:translate-custom  cursor-pointer",
            children: [m.jsx("div", {
                className: "text-black",
                children: "Buy $SUPA"
            }), m.jsx("div", {
                children: m.jsx("img", {
                    src: Xu,
                    alt: ""
                })
            })]
        })
    })]
}))
  , Zd = "/assets/dexscreenBlack-aCTEN7lb.png"
  , qd = "/assets/raydium-CiJ2ntu1.png"
  , bd = "/assets/dextooll-0RBf2PJM.png"
  , ep = "/assets/supalogo.jpeg"
  , tp = ()=>{
    const [e,t] = Tt.useState(!1)
      , n = "BKAXwhxf2Ch2PJjRmToWMCYToxgx8g4eLZPkQjv6pump"
      , r = ()=>{
        navigator.clipboard.writeText(n).then(()=>{
            t(!0),
            setTimeout(()=>t(!1), 2e3)
        }
        )
    }
    ;
    return m.jsx("div", {
        className: "flex items-center",
        children: m.jsxs("div", {
            className: "bg-white flex items-center text-xs md:text-base font-semibold gap-1 text-black border-2 md:px-4 py-2  border-black rounded-full",
            children: [m.jsx("span", {
                className: "mr-4",
                children: n
            }), m.jsx("button", {
                onClick: r,
                children: e ? m.jsx("div", {
                    className: "",
                    children: m.jsx("img", {
                        src: Xd,
                        alt: "",
                        className: "inline"
                    })
                }) : m.jsx("div", {
                    className: "",
                    children: m.jsx("img", {
                        src: Jd,
                        alt: "",
                        className: "inline"
                    })
                })
            })]
        })
    })
}
;
var mc = {};
function np(e) {
    if (typeof window > "u")
        return;
    const t = document.createElement("style");
    return t.setAttribute("type", "text/css"),
    t.innerHTML = e,
    document.head.appendChild(t),
    e
}
Object.defineProperty(mc, "__esModule", {
    value: !0
});
var Q = Tt;
function rp(e) {
    return e && typeof e == "object" && "default"in e ? e : {
        default: e
    }
}
var rt = rp(Q);
np(`.rfm-marquee-container {
  overflow-x: hidden;
  display: flex;
  flex-direction: row;
  position: relative;
  width: var(--width);
  transform: var(--transform);
}
.rfm-marquee-container:hover div {
  animation-play-state: var(--pause-on-hover);
}
.rfm-marquee-container:active div {
  animation-play-state: var(--pause-on-click);
}

.rfm-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
}
.rfm-overlay::before, .rfm-overlay::after {
  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));
  content: "";
  height: 100%;
  position: absolute;
  width: var(--gradient-width);
  z-index: 2;
  pointer-events: none;
  touch-action: none;
}
.rfm-overlay::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.rfm-overlay::before {
  left: 0;
  top: 0;
}

.rfm-marquee {
  flex: 0 0 auto;
  min-width: var(--min-width);
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);
  animation-play-state: var(--play);
  animation-delay: var(--delay);
  animation-direction: var(--direction);
}
@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.rfm-initial-child-container {
  flex: 0 0 auto;
  display: flex;
  min-width: auto;
  flex-direction: row;
  align-items: center;
}

.rfm-child {
  transform: var(--transform);
}`);
const lp = Q.forwardRef(function({style: t={}, className: n="", autoFill: r=!1, play: l=!0, pauseOnHover: o=!1, pauseOnClick: i=!1, direction: u="left", speed: s=50, delay: c=0, loop: v=0, gradient: h=!1, gradientColor: p="white", gradientWidth: w=200, onFinish: x, onCycleComplete: k, onMount: D, children: f}, a) {
    const [d,g] = Q.useState(0)
      , [S,N] = Q.useState(0)
      , [C,j] = Q.useState(1)
      , [F,L] = Q.useState(!1)
      , ve = Q.useRef(null)
      , ge = a || ve
      , Te = Q.useRef(null)
      , tt = Q.useCallback(()=>{
        if (Te.current && ge.current) {
            const R = ge.current.getBoundingClientRect()
              , H = Te.current.getBoundingClientRect();
            let _e = R.width
              , ie = H.width;
            (u === "up" || u === "down") && (_e = R.height,
            ie = H.height),
            j(r && _e && ie && ie < _e ? Math.ceil(_e / ie) : 1),
            g(_e),
            N(ie)
        }
    }
    , [r, ge, u]);
    Q.useEffect(()=>{
        if (F && (tt(),
        Te.current && ge.current)) {
            const R = new ResizeObserver(()=>tt());
            return R.observe(ge.current),
            R.observe(Te.current),
            ()=>{
                R && R.disconnect()
            }
        }
    }
    , [tt, ge, F]),
    Q.useEffect(()=>{
        tt()
    }
    , [tt, f]),
    Q.useEffect(()=>{
        L(!0)
    }
    , []),
    Q.useEffect(()=>{
        typeof D == "function" && D()
    }
    , []);
    const ir = Q.useMemo(()=>r ? S * C / s : S < d ? d / s : S / s, [r, d, S, C, s])
      , hn = Q.useMemo(()=>Object.assign(Object.assign({}, t), {
        "--pause-on-hover": !l || o ? "paused" : "running",
        "--pause-on-click": !l || o && !i || i ? "paused" : "running",
        "--width": u === "up" || u === "down" ? "100vh" : "100%",
        "--transform": u === "up" ? "rotate(-90deg)" : u === "down" ? "rotate(90deg)" : "none"
    }), [t, l, o, i, u])
      , vn = Q.useMemo(()=>({
        "--gradient-color": p,
        "--gradient-width": typeof w == "number" ? `${w}px` : w
    }), [p, w])
      , E = Q.useMemo(()=>({
        "--play": l ? "running" : "paused",
        "--direction": u === "left" ? "normal" : "reverse",
        "--duration": `${ir}s`,
        "--delay": `${c}s`,
        "--iteration-count": v ? `${v}` : "infinite",
        "--min-width": r ? "auto" : "100%"
    }), [l, u, ir, c, v, r])
      , P = Q.useMemo(()=>({
        "--transform": u === "up" ? "rotate(90deg)" : u === "down" ? "rotate(-90deg)" : "none"
    }), [u])
      , z = Q.useCallback(R=>[...Array(Number.isFinite(R) && R >= 0 ? R : 0)].map((H,_e)=>rt.default.createElement(Q.Fragment, {
        key: _e
    }, Q.Children.map(f, ie=>rt.default.createElement("div", {
        style: P,
        className: "rfm-child"
    }, ie)))), [P, f]);
    return F ? rt.default.createElement("div", {
        ref: ge,
        style: hn,
        className: "rfm-marquee-container " + n
    }, h && rt.default.createElement("div", {
        style: vn,
        className: "rfm-overlay"
    }), rt.default.createElement("div", {
        className: "rfm-marquee",
        style: E,
        onAnimationIteration: k,
        onAnimationEnd: x
    }, rt.default.createElement("div", {
        className: "rfm-initial-child-container",
        ref: Te
    }, Q.Children.map(f, R=>rt.default.createElement("div", {
        style: P,
        className: "rfm-child"
    }, R))), z(C - 1)), rt.default.createElement("div", {
        className: "rfm-marquee",
        style: E
    }, z(C))) : null
});
var op = mc.default = lp;
const ip = ()=>m.jsx("div", {
    className: "bg-white p-4 ",
    children: m.jsxs(op, {
        speed: 50,
        direction: "left",
        children: [m.jsxs("div", {
            className: "text-black text-xl flex items-center ",
            children: [m.jsx("h2", {
                children: "Buy $SUPA"
            }), m.jsx("img", {
                src: He,
                alt: "",
                className: "px-4 w-[60px] h-[50px]"
            })]
        }), m.jsxs("div", {
            className: "text-black text-xl flex items-center ",
            children: [m.jsx("h2", {
                children: "Buy $SUPA"
            }), m.jsx("img", {
                src: He,
                alt: "",
                className: "px-4 w-[60px] h-[50px]"
            })]
        }), m.jsxs("div", {
            className: "text-black text-xl flex items-center ",
            children: [m.jsx("h2", {
                children: "Buy $SUPA"
            }), m.jsx("img", {
                src: He,
                alt: "",
                className: "px-4 w-[60px] h-[50px]"
            })]
        }), m.jsxs("div", {
            className: "text-black text-xl flex items-center ",
            children: [m.jsx("h2", {
                children: "Buy $SUPA"
            }), m.jsx("img", {
                src: He,
                alt: "",
                className: "px-4 w-[60px] h-[50px]"
            })]
        }), m.jsxs("div", {
            className: "text-black text-xl flex items-center ",
            children: [m.jsx("h2", {
                children: "Buy $SUPA"
            }), m.jsx("img", {
                src: He,
                alt: "",
                className: "px-4 w-[60px] h-[50px]"
            })]
        }), m.jsxs("div", {
            className: "text-black text-xl flex items-center ",
            children: [m.jsx("h2", {
                children: "Buy $SUPA"
            }), m.jsx("img", {
                src: He,
                alt: "",
                className: "px-4 w-[60px] h-[50px]"
            })]
        }), m.jsxs("div", {
            className: "text-black text-xl flex items-center ",
            children: [m.jsx("h2", {
                children: "Buy $SUPA"
            }), m.jsx("img", {
                src: He,
                alt: "",
                className: "px-4 w-[60px] h-[50px]"
            })]
        }), m.jsxs("div", {
            className: "text-black text-xl flex items-center ",
            children: [m.jsx("h2", {
                children: "Buy $SUPA"
            }), m.jsx("img", {
                src: He,
                alt: "",
                className: "px-4 w-[60px] h-[50px]"
            })]
        }), m.jsxs("div", {
            className: "text-black text-xl flex items-center ",
            children: [m.jsx("h2", {
                children: "Buy $SUPA"
            }), m.jsx("img", {
                src: He,
                alt: "",
                className: "px-4 w-[60px] h-[50px]"
            })]
        })]
    })
})
  , up = ()=>m.jsx("div", {
    className: " w-full bg-cover bg-center flex flex-col absolute bg-[#D1C6AE]",
    id: "about",
    children: m.jsx("div", {
        className: "z-20",
        children: m.jsxs("div", {
            className: " flex-grow min-h-screen font-comic ",
            children: [m.jsxs("div", {
                className: "relative container p-6 mx-auto",
                children: [m.jsx(Gd, {}), m.jsx("div", {
                    className: "container flex flex-col lg:flex-row md:px-6 mx-auto items-center justify-center space-y-0 md:space-y-0 pt-24",
                    children: m.jsxs("div", {
                        className: "flex flex-col lg:w-1/2 mb-3 space-y-6 lg:space-y-6  ",
                        children: [m.jsx("h1", {
                            className: "text-6xl md:text-9xl text-white text-center",
                            children: "$SUPA"
                        }), m.jsx("div", {
                            className: "w-[100%]",
                            children: m.jsx("h2", {
                                className: "text-white text-3xl lg:text-4xl font-semibold tracking-wide text-center",
                                children: "A weird dog on Solana"
                            })
                        }), m.jsx("div", {
                            className: "flex md:px-6 items-center justify-center gap-6",
                            children: m.jsx("img", {
                                src: ep,
                                alt: "",
                                className: "w-[200px] h-[200px]"
                            })
                        }), m.jsx("div", {
                            className: "md:hidden flex justify-center ",
                            children: m.jsxs("div", {
                                children: [m.jsx("h2", {
                                    className: "text-32xl text-white text-3xl",
                                    children: "Community :"
                                }), m.jsxs("div", {
                                    className: "flex space-x-3 items-center justify-center",
                                    children: [m.jsx("a", {
                                        href: "https://t.me/supaportal",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: m.jsx("div", {
                                            className: "bg-white text-black border-[1px] p-2 border-black rounded-md shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-hover-custom hover:transform hover:translate-custom cursor-pointer",
                                            children: m.jsx("img", {
                                                src: ul,
                                                alt: "",
                                                className: "w-[25px] h-[25px]"
                                            })
                                        })
                                    }), m.jsx("a", {
                                        href: "https://x.com/SUPA_ON_SOL",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: m.jsx("div", {
                                            className: "bg-white text-black border-[1px] p-2 border-black rounded-md shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-hover-custom hover:transform hover:translate-custom cursor-pointer",
                                            children: m.jsx("img", {
                                                src: pc,
                                                alt: "",
                                                className: "w-[25px] h-[25px]"
                                            })
                                        })
                                    }), m.jsx("a", {
                                        href: "https://dexscreener.com/solana/5yhhcby9jqyy2tbmxcju4agkdjanwzzbbtjzwjtjhnlq",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: m.jsxs("div", {
                                            className: "bg-white font-semibold text-black border-[1px] p-2 border-black rounded-md flex items-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-hover-custom hover:transform hover:translate-custom cursor-pointer",
                                            children: [m.jsx("div", {
                                                children: "Chart"
                                            })]
                                        })
                                    })]
                                })]
                            })
                        }) , m.jsx("div", {
                            className: "flex items-center justify-center",
                            children: m.jsxs("div", {
                                children: [m.jsx("h2", {
                                    className: "text-2xl md:text-3xl text-white",
                                    children: "Contract Address :"
                                }), m.jsx(tp, {})]
                            })
                        })
                        /*, m.jsx("div", {
                            className: "flex items-center justify-center",
                            children: m.jsxs("div", {
                                className: " items-center ",
                                children: [m.jsx("h2", {
                                    className: "text-3xl text-white",
                                    children: "CHART"
                                }), m.jsxs("div", {
                                    className: "flex space-x-3 justify-center",
                                    children: [m.jsx("a", {
                                        href: "https://dexscreener.com/",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        children: m.jsx("div", {
                                            className: "bg-white text-black border-[1px] p-2 border-black rounded-md shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-hover-custom hover:transform hover:translate-custom cursor-pointer",
                                            children: m.jsx("img", {
                                                src: Zd,
                                                alt: "",
                                                className: "w-[25px] h-[25px]"
                                            })
                                        })
                                    })]
                                }),
                              ]
                            })
                        })*/]
                    })
                })]
            }), m.jsx("div", {
                className: "xxl:pt-16",
                children: m.jsx(ip, {})
            })]
        })
    })
});
function sp() {
    return m.jsx("div", {
        className: "",
        children: m.jsx(up, {})
    })
}
ql.createRoot(document.getElementById("root")).render(m.jsx(Lc.StrictMode, {
    children: m.jsx(sp, {})
}));
