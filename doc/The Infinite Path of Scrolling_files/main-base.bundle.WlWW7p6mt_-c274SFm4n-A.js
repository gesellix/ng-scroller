PLOVR_MODULE_INFO={"creators":["posters"],"export":["base"],"stats":["base"],"followup-editor":["has-editor"],"settings":["has-editor"],"base":[],"has-editor":["base"],"tailor":["base"],"notes":["has-editor"],"posters":["has-editor"],"notes-mobile":["has-editor"],"profile":["has-editor"]};
PLOVR_MODULE_URIS={"creators":"fingerprint:creators","export":"fingerprint:export","stats":"fingerprint:stats","followup-editor":"fingerprint:followup-editor","settings":"fingerprint:settings","base":"fingerprint:base","has-editor":"fingerprint:has-editor","tailor":"fingerprint:tailor","notes":"fingerprint:notes","posters":"fingerprint:posters","notes-mobile":"fingerprint:notes-mobile","profile":"fingerprint:profile"};
PLOVR_MODULE_USE_DEBUG_MODE=false;
_mdm={};(function(z){
z.g = function(a) {
  throw a;
};
z.l = void 0;
z.m = !0;
z.n = null;
z.s = !1;
z.aa = function() {
  return function(a) {
    return a
  }
};
z.t = function() {
  return function() {
  }
};
z.ca = function(a) {
  return function(b) {
    this[a] = b
  }
};
z.ea = function(a) {
  return function() {
    return this[a]
  }
};
z.v = function(a) {
  return function() {
    return a
  }
};
z.x = function(a) {
  return function() {
    return z.fa[a].apply(this, arguments)
  }
};
z.B = function(a, b) {
  return z.fa[a] = b
};
z.ga = function(a) {
  a = a.split(".");
  for(var b = z.ha, c;c = a.shift();) {
    if(b[c] != z.n) {
      b = b[c]
    }else {
      return z.n
    }
  }
  return b
};
z.ja = function() {
};
z.ka = function(a) {
  var b = typeof a;
  if("object" == b) {
    if(a) {
      if(a instanceof window.Array) {
        return"array"
      }
      if(a instanceof window.Object) {
        return b
      }
      var c = window.Object.prototype.toString.call(a);
      if("[object Window]" == c) {
        return"object"
      }
      if("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return"array"
      }
      if("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return"function"
      }
    }else {
      return"null"
    }
  }else {
    if("function" == b && "undefined" == typeof a.call) {
      return"object"
    }
  }
  return b
};
z.la = function(a) {
  return a !== z.l
};
z.ma = function(a) {
  return"array" == (0,z.ka)(a)
};
z.na = function(a) {
  var b = (0,z.ka)(a);
  return"array" == b || "object" == b && "number" == typeof a.length
};
z.oa = function(a) {
  return"string" == typeof a
};
z.pa = function(a) {
  return"number" == typeof a
};
z.qa = function(a) {
  return"function" == (0,z.ka)(a)
};
z.ra = function(a) {
  var b = typeof a;
  return"object" == b && a != z.n || "function" == b
};
z.sa = function(a) {
  return a[z.ta] || (a[z.ta] = ++z.ua)
};
z.va = function(a, b, c) {
  return a.call.apply(a.bind, arguments)
};
z.wa = function(a, b, c) {
  a || (0,z.g)((0,window.Error)());
  if(2 < arguments.length) {
    var d = window.Array.prototype.slice.call(arguments, 2);
    return function() {
      var c = window.Array.prototype.slice.call(arguments);
      window.Array.prototype.unshift.apply(c, d);
      return a.apply(b, c)
    }
  }
  return function() {
    return a.apply(b, arguments)
  }
};
z.ya = function(a, b, c) {
  z.ya = window.Function.prototype.bind && -1 != window.Function.prototype.bind.toString().indexOf("native code") ? z.va : z.wa;
  return z.ya.apply(z.n, arguments)
};
z.za = function(a, b) {
  var c = window.Array.prototype.slice.call(arguments, 1);
  return function() {
    var b = window.Array.prototype.slice.call(arguments);
    b.unshift.apply(b, c);
    return a.apply(this, b)
  }
};
z.C = function(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.q = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a
};
z.Aa = function(a) {
  window.Error.captureStackTrace ? window.Error.captureStackTrace(this, z.Aa) : this.stack = (0,window.Error)().stack || "";
  a && (this.message = (0,window.String)(a))
};
z.Ba = function(a, b) {
  return 0 == a.lastIndexOf(b, 0)
};
z.Ca = function(a, b) {
  var c = a.length - b.length;
  return 0 <= c && a.indexOf(b, c) == c
};
z.Da = function(a) {
  if(!z.Fa.test(a)) {
    return a
  }
  -1 != a.indexOf("\x26") && (a = a.replace(z.Ha, "\x26amp;"));
  -1 != a.indexOf("\x3c") && (a = a.replace(z.Ia, "\x26lt;"));
  -1 != a.indexOf("\x3e") && (a = a.replace(z.Ja, "\x26gt;"));
  -1 != a.indexOf('"') && (a = a.replace(z.La, "\x26quot;"));
  return a
};
z.Oa = function(a) {
  return(0,window.String)(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
};
z.Pa = function(a, b) {
  for(var c = 0, d = (0,window.String)(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = (0,window.String)(b).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), f = window.Math.max(d.length, e.length), h = 0;0 == c && h < f;h++) {
    var k = d[h] || "", p = e[h] || "", q = (0,window.RegExp)("(\\d*)(\\D*)", "g"), z$ = (0,window.RegExp)("(\\d*)(\\D*)", "g");
    do {
      var U = q.exec(k) || ["", "", ""], F = z$.exec(p) || ["", "", ""];
      if(0 == U[0].length && 0 == F[0].length) {
        break
      }
      c = ((0 == U[1].length ? 0 : (0,window.parseInt)(U[1], 10)) < (0 == F[1].length ? 0 : (0,window.parseInt)(F[1], 10)) ? -1 : (0 == U[1].length ? 0 : (0,window.parseInt)(U[1], 10)) > (0 == F[1].length ? 0 : (0,window.parseInt)(F[1], 10)) ? 1 : 0) || ((0 == U[2].length) < (0 == F[2].length) ? -1 : (0 == U[2].length) > (0 == F[2].length) ? 1 : 0) || (U[2] < F[2] ? -1 : U[2] > F[2] ? 1 : 0)
    }while(0 == c)
  }
  return c
};
z.Ra = function(a) {
  return(0,window.String)(a).replace(/\-([a-z])/g, function(a, c) {
    return c.toUpperCase()
  })
};
z.Sa = function(a) {
  var b = (0,z.oa)(z.l) ? (0,z.Oa)(z.l) : "\\s";
  return a.replace((0,window.RegExp)("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function(a, b, e) {
    return b + e.toUpperCase()
  })
};
z.Ta = function(a) {
  return a[a.length - 1]
};
z.Ua = function(a, b, c) {
  a: {
    for(var d = a.length, e = (0,z.oa)(a) ? a.split("") : a, f = 0;f < d;f++) {
      if(f in e && b.call(c, e[f], f, a)) {
        b = f;
        break a
      }
    }
    b = -1
  }
  return 0 > b ? z.n : (0,z.oa)(a) ? a.charAt(b) : a[b]
};
z.Va = function(a, b) {
  for(var c = a.length, d = (0,z.oa)(a) ? a.split("") : a, c = c - 1;0 <= c;c--) {
    if(c in d && b.call(z.l, d[c], c, a)) {
      return c
    }
  }
  return-1
};
z.Wa = function(a, b) {
  return 0 <= (0,z.Xa)(a, b)
};
z.Ya = function(a, b) {
  var c = (0,z.Xa)(a, b), d;
  (d = 0 <= c) && z.bb.splice.call(a, c, 1);
  return d
};
z.cb = function(a) {
  return z.bb.concat.apply(z.bb, arguments)
};
z.eb = function(a) {
  var b = a.length;
  if(0 < b) {
    for(var c = (0,window.Array)(b), d = 0;d < b;d++) {
      c[d] = a[d]
    }
    return c
  }
  return[]
};
z.fb = function(a, b) {
  for(var c = 1;c < arguments.length;c++) {
    var d = arguments[c], e;
    if((0,z.ma)(d) || (e = (0,z.na)(d)) && window.Object.prototype.hasOwnProperty.call(d, "callee")) {
      a.push.apply(a, d)
    }else {
      if(e) {
        for(var f = a.length, h = d.length, k = 0;k < h;k++) {
          a[f + k] = d[k]
        }
      }else {
        a.push(d)
      }
    }
  }
};
z.gb = function(a, b, c, d) {
  z.bb.splice.apply(a, (0,z.hb)(arguments, 1))
};
z.hb = function(a, b, c) {
  return 2 >= arguments.length ? z.bb.slice.call(a, b) : z.bb.slice.call(a, b, c)
};
z.ib = function(a, b) {
  z.bb.sort.call(a, b || z.jb)
};
z.jb = function(a, b) {
  return a > b ? 1 : a < b ? -1 : 0
};
z.kb = function(a, b) {
  for(var c in a) {
    b.call(z.l, a[c], c, a)
  }
};
z.mb = function(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = a[d]
  }
  return b
};
z.nb = function(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = d
  }
  return b
};
z.ob = function(a, b) {
  for(var c in a) {
    if(a[c] == b) {
      return z.m
    }
  }
  return z.s
};
z.pb = function(a) {
  var b = {}, c;
  for(c in a) {
    b[c] = a[c]
  }
  return b
};
z.qb = function(a) {
  var b = {}, c;
  for(c in a) {
    b[a[c]] = c
  }
  return b
};
z.rb = function(a, b) {
  for(var c, d, e = 1;e < arguments.length;e++) {
    d = arguments[e];
    for(c in d) {
      a[c] = d[c]
    }
    for(var f = 0;f < z.sb.length;f++) {
      c = z.sb[f], window.Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
  }
};
z.tb = function(a) {
  var b = arguments.length;
  if(1 == b && (0,z.ma)(arguments[0])) {
    return z.tb.apply(z.n, arguments[0])
  }
  b % 2 && (0,z.g)((0,window.Error)("Uneven number of arguments"));
  for(var c = {}, d = 0;d < b;d += 2) {
    c[arguments[d]] = arguments[d + 1]
  }
  return c
};
z.ub = function(a) {
  var b = arguments.length;
  if(1 == b && (0,z.ma)(arguments[0])) {
    return z.ub.apply(z.n, arguments[0])
  }
  for(var c = {}, d = 0;d < b;d++) {
    c[arguments[d]] = z.m
  }
  return c
};
z.vb = function(a, b) {
  this.mn = [];
  this.Tv = a;
  this.Ou = b || z.n
};
z.wb = function(a, b, c) {
  a.Oc = z.m;
  a.uk = c;
  a.Zj = !b;
  (0,z.xb)(a)
};
z.yb = function(a) {
  a.Oc && (a.mr || (0,z.g)(new z.zb(a)), a.mr = z.s)
};
z.G = function(a, b, c) {
  return(0,z.Ab)(a, b, z.n, c)
};
z.H = function(a, b, c) {
  return(0,z.Ab)(a, z.n, b, c)
};
z.Bb = function(a, b, c) {
  return(0,z.Ab)(a, b, b, c)
};
z.Ab = function(a, b, c, d) {
  a.mn.push([b, c, d]);
  a.Oc && (0,z.xb)(a);
  return a
};
z.Cb = function(a, b) {
  return(0,z.G)(a, (0,z.ya)(b.Ie, b))
};
z.Fb = function(a) {
  return(0,z.Gb)(a.mn, function(a) {
    return(0,z.qa)(a[1])
  })
};
z.xb = function(a) {
  a.vr && (a.Oc && (0,z.Fb)(a)) && (z.ha.clearTimeout(a.vr), delete a.vr);
  a.kb && (a.kb.qm--, delete a.kb);
  for(var b = a.uk, c = z.s, d = z.s;a.mn.length && !a.Qp;) {
    var e = a.mn.shift(), f = e[0], h = e[1], e = e[2];
    if(f = a.Zj ? h : f) {
      try {
        var k = f.call(e || a.Ou, b);
        (0,z.la)(k) && (a.Zj = a.Zj && (k == b || k instanceof window.Error), a.uk = b = k);
        b instanceof z.vb && (d = z.m, a.Qp = z.m)
      }catch(p) {
        b = p, a.Zj = z.m, (0,z.Fb)(a) || (c = z.m)
      }
    }
  }
  a.uk = b;
  d && ((0,z.Ab)(b, (0,z.ya)(a.Ku, a, z.m), (0,z.ya)(a.Ku, a, z.s)), b.PB = z.m);
  c && (a.vr = z.ha.setTimeout(function() {
    (0,z.g)(b)
  }, 0))
};
z.Hb = function(a) {
  var b = new z.vb;
  b.Ga(a);
  return b
};
z.Ib = function(a) {
  var b = new z.vb;
  b.If(a);
  return b
};
z.Jb = function() {
  var a = new z.vb;
  a.cancel();
  return a
};
z.Kb = function(a, b, c) {
  return a instanceof z.vb ? (0,z.G)(a.Ie(z.m), b, c) : (0,z.G)((0,z.Hb)(a), b, c)
};
z.zb = function(a) {
  z.Aa.call(this);
  this.cb = a
};
z.Lb = function(a) {
  z.Aa.call(this);
  this.cb = a
};
z.Mb = function(a) {
  this.eb = a
};
z.Nb = function(a) {
  a = (a.eb.cookie || "").split(z.Ob);
  for(var b = [], c = [], d, e, f = 0;e = a[f];f++) {
    d = e.indexOf("\x3d"), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)))
  }
  return{keys:b, Bk:c}
};
z.I = function(a) {
  this.name = a
};
z.Qb = function(a) {
  this.name = a
};
z.J = function(a, b, c) {
  this.name = a;
  this.ZG = b;
  this.uH = c
};
z.Rb = function() {
  return z.ha.navigator ? z.ha.navigator.userAgent : z.n
};
z.Sb = function() {
  return z.ha.navigator
};
z.Tb = function() {
  var a = z.ha.document;
  return a ? a.documentMode : z.l
};
z.Ub = function(a) {
  return z.Vb[a] || (z.Vb[a] = 0 <= (0,z.Pa)(z.Wb, a))
};
z.Xb = function(a) {
  return z.L && z.Yb >= a
};
z.Zb = function(a) {
  a = a.className;
  return(0,z.oa)(a) && a.match(/\S+/g) || []
};
z.N = function(a, b) {
  var c = (0,z.Zb)(a), d = (0,z.hb)(arguments, 1), e = c.length + d.length;
  (0,z.$b)(c, d);
  a.className = c.join(" ");
  return c.length == e
};
z.O = function(a, b) {
  var c = (0,z.Zb)(a), d = (0,z.hb)(arguments, 1), c = (0,z.ac)(c, d);
  a.className = c.join(" ")
};
z.$b = function(a, b) {
  for(var c = 0;c < b.length;c++) {
    (0,z.Wa)(a, b[c]) || a.push(b[c])
  }
};
z.ac = function(a, b) {
  return(0,z.bc)(a, function(a) {
    return!(0,z.Wa)(b, a)
  })
};
z.cc = function(a, b, c) {
  var d = (0,z.Zb)(a);
  (0,z.oa)(b) ? (0,z.Ya)(d, b) : (0,z.ma)(b) && (d = (0,z.ac)(d, b));
  (0,z.oa)(c) && !(0,z.Wa)(d, c) ? d.push(c) : (0,z.ma)(c) && (0,z.$b)(d, c);
  a.className = d.join(" ")
};
z.dc = function(a, b) {
  return(0,z.Wa)((0,z.Zb)(a), b)
};
z.ec = function(a, b, c) {
  c ? (0,z.N)(a, b) : (0,z.O)(a, b)
};
z.fc = function(a, b) {
  var c = !(0,z.dc)(a, b);
  (0,z.ec)(a, b, c)
};
z.hc = function(a, b) {
  this.x = (0,z.la)(a) ? a : 0;
  this.y = (0,z.la)(b) ? b : 0
};
z.ic = function(a, b) {
  this.width = a;
  this.height = b
};
z.jc = function(a) {
  return a ? new z.kc((0,z.lc)(a)) : z.mc || (z.mc = new z.kc)
};
z.nc = function(a, b, c, d) {
  a = d || a;
  b = b && "*" != b ? b.toUpperCase() : "";
  if(a.querySelectorAll && a.querySelector && (b || c)) {
    return a.querySelectorAll(b + (c ? "." + c : ""))
  }
  if(c && a.getElementsByClassName) {
    a = a.getElementsByClassName(c);
    if(b) {
      d = {};
      for(var e = 0, f = 0, h;h = a[f];f++) {
        b == h.nodeName && (d[e++] = h)
      }
      d.length = e;
      return d
    }
    return a
  }
  a = a.getElementsByTagName(b || "*");
  if(c) {
    d = {};
    for(f = e = 0;h = a[f];f++) {
      b = h.className, "function" == typeof b.split && (0,z.Wa)(b.split(/\s+/), c) && (d[e++] = h)
    }
    d.length = e;
    return d
  }
  return a
};
z.pc = function(a, b) {
  (0,z.kb)(b, function(b, d) {
    "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in z.qc ? a.setAttribute(z.qc[d], b) : (0,z.Ba)(d, "aria-") || (0,z.Ba)(d, "data-") ? a.setAttribute(d, b) : a[d] = b
  })
};
z.rc = function(a) {
  a = a.document;
  a = (0,z.sc)(a) ? a.documentElement : a.body;
  return new z.ic(a.clientWidth, a.clientHeight)
};
z.tc = function(a) {
  var b = !z.uc && (0,z.sc)(a) ? a.documentElement : a.body;
  a = a.parentWindow || a.defaultView;
  return z.L && (0,z.Ub)("10") && a.pageYOffset != b.scrollTop ? new z.hc(b.scrollLeft, b.scrollTop) : new z.hc(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
};
z.vc = function(a) {
  return a ? a.parentWindow || a.defaultView : window
};
z.wc = function(a, b, c, d) {
  function e(c) {
    c && b.appendChild((0,z.oa)(c) ? a.createTextNode(c) : c)
  }
  for(;d < c.length;d++) {
    var f = c[d];
    (0,z.na)(f) && !((0,z.ra)(f) && 0 < f.nodeType) ? (0,z.xc)((0,z.yc)(f) ? (0,z.eb)(f) : f, e) : e(f)
  }
};
z.zc = function(a) {
  return(0,z.Ac)(a)
};
z.Ac = function(a) {
  var b = window.document, c = b.createElement("div");
  z.L ? (c.innerHTML = "\x3cbr\x3e" + a, c.removeChild(c.firstChild)) : c.innerHTML = a;
  if(1 == c.childNodes.length) {
    return c.removeChild(c.firstChild)
  }
  for(a = b.createDocumentFragment();c.firstChild;) {
    a.appendChild(c.firstChild)
  }
  return a
};
z.sc = function(a) {
  return"CSS1Compat" == a.compatMode
};
z.Cc = function(a) {
  if(1 != a.nodeType) {
    return z.s
  }
  switch(a.tagName) {
    case "APPLET":
    ;
    case "AREA":
    ;
    case "BASE":
    ;
    case "BR":
    ;
    case "COL":
    ;
    case "COMMAND":
    ;
    case "EMBED":
    ;
    case "FRAME":
    ;
    case "HR":
    ;
    case "IMG":
    ;
    case "INPUT":
    ;
    case "IFRAME":
    ;
    case "ISINDEX":
    ;
    case "KEYGEN":
    ;
    case "LINK":
    ;
    case "NOFRAMES":
    ;
    case "NOSCRIPT":
    ;
    case "META":
    ;
    case "OBJECT":
    ;
    case "PARAM":
    ;
    case "SCRIPT":
    ;
    case "SOURCE":
    ;
    case "STYLE":
    ;
    case "TRACK":
    ;
    case "WBR":
      return z.s
  }
  return z.m
};
z.Dc = function(a, b) {
  (0,z.wc)((0,z.lc)(a), a, arguments, 1)
};
z.Ec = function(a, b) {
  b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
};
z.P = function(a) {
  return a && a.parentNode ? a.parentNode.removeChild(a) : z.n
};
z.Fc = function(a) {
  var b, c = a.parentNode;
  if(c && 11 != c.nodeType) {
    if(a.removeNode) {
      return a.removeNode(z.s)
    }
    for(;b = a.firstChild;) {
      c.insertBefore(b, a)
    }
    return(0,z.P)(a)
  }
};
z.Gc = function(a) {
  return(0,z.ra)(a) && 1 == a.nodeType
};
z.Hc = function(a, b) {
  if(a.contains && 1 == b.nodeType) {
    return a == b || a.contains(b)
  }
  if("undefined" != typeof a.compareDocumentPosition) {
    return a == b || (0,window.Boolean)(a.compareDocumentPosition(b) & 16)
  }
  for(;b && a != b;) {
    b = b.parentNode
  }
  return b == a
};
z.Ic = function(a, b) {
  if(a == b) {
    return 0
  }
  if(a.compareDocumentPosition) {
    return a.compareDocumentPosition(b) & 2 ? 1 : -1
  }
  if(z.L && !(0,z.Xb)(9)) {
    if(9 == a.nodeType) {
      return-1
    }
    if(9 == b.nodeType) {
      return 1
    }
  }
  if("sourceIndex" in a || a.parentNode && "sourceIndex" in a.parentNode) {
    var c = 1 == a.nodeType, d = 1 == b.nodeType;
    if(c && d) {
      return a.sourceIndex - b.sourceIndex
    }
    var e = a.parentNode, f = b.parentNode;
    return e == f ? (0,z.Jc)(a, b) : !c && (0,z.Hc)(e, b) ? -1 * (0,z.Kc)(a, b) : !d && (0,z.Hc)(f, a) ? (0,z.Kc)(b, a) : (c ? a.sourceIndex : e.sourceIndex) - (d ? b.sourceIndex : f.sourceIndex)
  }
  d = (0,z.lc)(a);
  c = d.createRange();
  c.selectNode(a);
  c.collapse(z.m);
  d = d.createRange();
  d.selectNode(b);
  d.collapse(z.m);
  return c.compareBoundaryPoints(z.ha.Range.START_TO_END, d)
};
z.Kc = function(a, b) {
  var c = a.parentNode;
  if(c == b) {
    return-1
  }
  for(var d = b;d.parentNode != c;) {
    d = d.parentNode
  }
  return(0,z.Jc)(d, a)
};
z.Jc = function(a, b) {
  for(var c = b;c = c.previousSibling;) {
    if(c == a) {
      return-1
    }
  }
  return 1
};
z.Lc = function(a) {
  var b, c = arguments.length;
  if(c) {
    if(1 == c) {
      return arguments[0]
    }
  }else {
    return z.n
  }
  var d = [], e = window.Infinity;
  for(b = 0;b < c;b++) {
    for(var f = [], h = arguments[b];h;) {
      f.unshift(h), h = h.parentNode
    }
    d.push(f);
    e = window.Math.min(e, f.length)
  }
  f = z.n;
  for(b = 0;b < e;b++) {
    for(var h = d[0][b], k = 1;k < c;k++) {
      if(h != d[k][b]) {
        return f
      }
    }
    f = h
  }
  return f
};
z.lc = function(a) {
  return 9 == a.nodeType ? a : a.ownerDocument || a.document
};
z.Mc = function(a) {
  return a.contentDocument || a.contentWindow.document
};
z.Nc = function(a) {
  if(z.Oc && "innerText" in a) {
    a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n")
  }else {
    var b = [];
    (0,z.Pc)(a, b, z.m);
    a = b.join("")
  }
  a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
  a = a.replace(/\u200B/g, "");
  z.Oc || (a = a.replace(/ +/g, " "));
  " " != a && (a = a.replace(/^\s*/, ""));
  return a
};
z.Pc = function(a, b, c) {
  if(!(a.nodeName in z.Qc)) {
    if(a.nodeType == z.Rc) {
      c ? b.push((0,window.String)(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue)
    }else {
      if(a.nodeName in z.Sc) {
        b.push(z.Sc[a.nodeName])
      }else {
        for(a = a.firstChild;a;) {
          (0,z.Pc)(a, b, c), a = a.nextSibling
        }
      }
    }
  }
};
z.yc = function(a) {
  if(a && "number" == typeof a.length) {
    if((0,z.ra)(a)) {
      return"function" == typeof a.item || "string" == typeof a.item
    }
    if((0,z.qa)(a)) {
      return"function" == typeof a.item
    }
  }
  return z.s
};
z.Tc = function(a, b, c) {
  if(!b && !c) {
    return z.n
  }
  var d = b ? b.toUpperCase() : z.n;
  return(0,z.Uc)(a, function(a) {
    return(!d || a.nodeName == d) && (!c || (0,z.dc)(a, c))
  }, z.m)
};
z.Uc = function(a, b, c) {
  c || (a = a.parentNode);
  for(c = 0;a;) {
    if(b(a)) {
      return a
    }
    a = a.parentNode;
    c++
  }
  return z.n
};
z.kc = function(a) {
  this.eb = a || z.ha.document || window.document
};
z.Vc = function(a, b) {
  (0,z.Gc)(b) ? a.appendChild(b) : (0,z.ma)(b) ? b.forEach(function(b) {
    (0,z.Vc)(a, b)
  }) : a.appendChild(window.document.createTextNode((0,window.String)(b)))
};
z.Xc = function(a) {
  var b = window.Array.prototype.splice.call(arguments, 0), c;
  "string" == typeof b[0] ? (c = window.document.createElement(b[0]), b.shift()) : c = window.document.createElement("div");
  if(b[0] == z.n) {
    b.shift()
  }else {
    if("string" == typeof b[0]) {
      c.className = b[0], b.shift()
    }else {
      if(!(0,z.Gc)(b[0])) {
        for(var d in b[0]) {
          c.setAttribute(d, b[0][d])
        }
        b.shift()
      }
    }
  }
  for(d = 0;d < b.length;d++) {
    (0,z.Vc)(c, b[d])
  }
  return c
};
z.Yc = function(a) {
  this.hp = a;
  this.Qs = z.s
};
z.Zc = function(a) {
  if(!a.Qs) {
    for(var b = a.hp.split("/"), c = {}, d = 0;d < b.length;d++) {
      if(":" == b[d].charAt(0)) {
        var e = z.$c.exec(b[d]);
        e || (0,z.g)((0,window.Error)("Parse error " + a.hp));
        c[e[1]] = new z.ad(d, e[2] == z.n ? z.n : (0,window.Number)(e[2]));
        b[d] = ":" + e[1]
      }
    }
    a.ip = c;
    a.Jl = b;
    a.Qs = z.m
  }
};
z.ad = function(a, b) {
  this.index = a;
  this.padding = b
};
z.bd = function() {
  this.X = {};
  this.qu = z.s;
  window.Object.preventExtensions && window.Object.preventExtensions(this)
};
z.cd = function(a, b) {
  var c = a.oe().fields[b];
  if(!c) {
    if(z.dd[b]) {
      return z.n
    }
    (0,z.g)((0,window.Error)("Unrecognized field " + b))
  }
  return c
};
z.ed = function(a, b) {
  (0,z.cd)(a, b);
  return b in a.X ? a.X[b] : (0,z.fd)(a, b)
};
z.gd = function(a, b, c) {
  var d = (0,z.cd)(a, b);
  if(a.qu && d) {
    if(d.N()) {
      window.Array.isArray(c) || (0,z.g)((0,window.Error)("Type mismatch. Expected Array. Actual: " + c));
      for(var e = 0;e < c.length;e++) {
        (0,z.hd)(b, d, c[e])
      }
    }else {
      (0,z.hd)(b, d, c)
    }
  }
  a.X[b] = c;
  return a
};
z.hd = function(a, b, c) {
  b = b.C();
  var d = b.name || b, e = z.s;
  b == window.Number ? e = "number" == typeof c : b == window.String ? e = "string" == typeof c : b == window.Boolean ? e = "boolean" == typeof c : b == window.Object ? e = c && "object" == typeof c && !(c instanceof z.bd) : b.prototype instanceof z.bd ? e = c instanceof b : b.$isProtoEnum ? e = "number" == typeof c && (0,z.ob)(b, c) : (0,z.g)((0,window.Error)("I don't know how to type-check " + d + " on field " + a));
  e || (0,z.g)((0,window.Error)("Type mismatch. Expected: " + d + " on field " + a + ", Value " + c))
};
z.fd = function(a, b) {
  var c = (0,z.cd)(a, b);
  if(!c || c.N()) {
    return z.n
  }
  var d = c.defaultValue();
  if(d !== z.l) {
    return d
  }
  c = c.C();
  switch(c) {
    case window.Number:
      return 0;
    case window.String:
      return"";
    case window.Boolean:
      return z.s;
    case window.Object:
      return z.n;
    default:
      if(c.$isProtoEnum) {
        for(var e in c) {
          if(c.hasOwnProperty(e) && "number" == typeof c[e]) {
            return c[e]
          }
        }
      }
      return z.n
  }
};
z.id = function(a, b, c) {
  a.XE = c.name;
  a.mF = c.Yc;
  a.DE = c.zc;
  a.eF = c.Bc.toString();
  a.xE = c.fields;
  a.prototype.oe = function() {
    return c
  };
  a = a.prototype;
  for(var d in c.fields) {
    (0,z.jd)(a, d)
  }
  b && a && (window.Object.defineProperty(a, "id", {get:z.bd.prototype.kv, set:(0,z.t)()}), (0,z.jd)(a, "column"), window.Object.defineProperty(a, "hashKey", {get:z.bd.prototype.kv}), window.Object.defineProperty(a, "rangeKey", {get:z.bd.prototype.qC}))
};
z.jd = function(a, b) {
  b in a && (0,z.g)((0,window.Error)('Can not define setters/getters for "' + b + '", property name already exists.'));
  window.Object.defineProperty(a, b, {get:function() {
    return(0,z.ed)(this, b)
  }, set:function(a) {
    (0,z.gd)(this, b, a)
  }})
};
z.kd = function() {
};
z.ld = function() {
};
z.md = function(a, b, c) {
  b = b.C();
  if(b == window.String || b == window.Number || b == window.Boolean || b == window.Object || b.$isProtoEnum) {
    return c
  }
  if(b.prototype instanceof z.bd) {
    return a.Ld(c)
  }
  (0,z.g)((0,window.Error)('Unknown schema type "' + b + '"'))
};
z.nd = function() {
  z.bd.call(this)
};
z.od = function() {
  z.bd.call(this)
};
z.pd = function() {
  z.bd.call(this)
};
z.Q = function(a) {
  a = a.split(".");
  var b;
  b = a.shift();
  b = z.qd[b] || b;
  for(var c = z.rd[b];c && (b = a.shift());) {
    c = c[b]
  }
  return c
};
z.sd = function(a, b) {
  return a(b || {}, z.n, z.rd)
};
z.td = function(a, b) {
  return(0,z.zc)((0,z.sd)(a, b))
};
z.ud = function() {
  var a = window.GLOBALS;
  z.rd = {};
  for(var b in z.qd) {
    z.rd[z.qd[b]] = a[b]
  }
  z.rd.deviceWidth = z.vd
};
z.wd = function() {
  return!!(0,z.Q)("useragent.requiresBodyScroll")
};
z.xd = function() {
  if((0,z.wd)()) {
    return window.document.body
  }
  if(1E3 < window.innerWidth) {
    var a = this.l.querySelector(".wrapper");
    if(a) {
      return a
    }
  }
  return this.l
};
z.yd = function(a, b, c) {
  a == window.document.body && (a = window);
  "function" == typeof a.scrollTo ? a.scrollTo(b, c) : (a.scrollTop = c, a.scrollLeft = b)
};
z.zd = function(a) {
  this.Ro = a;
  this.Jg = {}
};
z.Ad = function(a) {
  z.zd.call(this, a)
};
z.Bd = function(a) {
  this.Zi = a;
  this.Ni = z.s
};
z.Fd = function() {
};
z.Gd = function() {
};
z.Hd = function() {
  0 != z.Id && (this.qG = (0,window.Error)().stack, z.Jd[(0,z.sa)(this)] = this)
};
z.Kd = function(a) {
  a && "function" == typeof a.Wa && a.Wa()
};
z.Ld = function(a) {
  z.Hd.call(this);
  this.t = a
};
z.Md = function(a, b) {
  return a.t.get(b)
};
z.Nd = function(a) {
  z.Ld.call(this, a)
};
z.Od = function(a, b) {
  z.Ld.call(this, a);
  var c = b.path;
  (0 === c.indexOf("/") || 0 === c.indexOf("http")) && (0,z.g)((0,window.Error)("You cannot construct an html screen with an absolute path. Try removing the leading slash."));
  this.mb = c
};
z.Pd = function(a, b) {
  z.Od.call(this, a, b)
};
z.Qd = function() {
  return z.uc ? "Webkit" : z.R ? "Moz" : z.L ? "ms" : z.Rd ? "O" : z.n
};
z.Sd = function(a, b, c) {
  (0,z.oa)(b) ? (0,z.Td)(a, c, b) : (0,z.kb)(b, (0,z.za)(z.Td, a))
};
z.Td = function(a, b, c) {
  (c = (0,z.Ud)(a, c)) && (a.style[c] = b)
};
z.Ud = function(a, b) {
  var c = (0,z.Ra)(b);
  if(a.style[c] === z.l) {
    var d = (0,z.Qd)() + (0,z.Sa)(b);
    if(a.style[d] !== z.l) {
      return d
    }
  }
  return c
};
z.Vd = function(a, b) {
  var c = a.style[(0,z.Ra)(b)];
  return"undefined" !== typeof c ? c : a.style[(0,z.Ud)(a, b)] || ""
};
z.Wd = function(a, b) {
  var c = (0,z.lc)(a);
  return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, z.n)) ? c[b] || c.getPropertyValue(b) || "" : ""
};
z.Xd = function(a, b) {
  return(0,z.Wd)(a, b) || (a.currentStyle ? a.currentStyle[b] : z.n) || a.style && a.style[b]
};
z.Yd = function(a) {
  var b = a.getBoundingClientRect();
  z.L && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
  return b
};
z.Zd = function(a) {
  if(z.L && !(0,z.Xb)(8)) {
    return a.offsetParent
  }
  var b = (0,z.lc)(a), c = (0,z.Xd)(a, "position"), d = "fixed" == c || "absolute" == c;
  for(a = a.parentNode;a && a != b;a = a.parentNode) {
    if(c = (0,z.Xd)(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) {
      return a
    }
  }
  return z.n
};
z.$d = function(a) {
  var b, c = (0,z.lc)(a), d = (0,z.Xd)(a, "position"), e = z.R && c.getBoxObjectFor && !a.getBoundingClientRect && "absolute" == d && (b = c.getBoxObjectFor(a)) && (0 > b.screenX || 0 > b.screenY), f = new z.hc(0, 0), h;
  b = c ? (0,z.lc)(c) : window.document;
  if(h = z.L) {
    if(h = !(0,z.Xb)(9)) {
      h = (0,z.jc)(b), h = !(0,z.sc)(h.eb)
    }
  }
  h = h ? b.body : b.documentElement;
  if(a == h) {
    return f
  }
  if(a.getBoundingClientRect) {
    b = (0,z.Yd)(a), a = (0,z.jc)(c), a = (0,z.tc)(a.eb), f.x = b.left + a.x, f.y = b.top + a.y
  }else {
    if(c.getBoxObjectFor && !e) {
      b = c.getBoxObjectFor(a), a = c.getBoxObjectFor(h), f.x = b.screenX - a.screenX, f.y = b.screenY - a.screenY
    }else {
      e = a;
      do {
        f.x += e.offsetLeft;
        f.y += e.offsetTop;
        e != a && (f.x += e.clientLeft || 0, f.y += e.clientTop || 0);
        if(z.uc && "fixed" == (0,z.Xd)(e, "position")) {
          f.x += c.body.scrollLeft;
          f.y += c.body.scrollTop;
          break
        }
        e = e.offsetParent
      }while(e && e != a);
      if(z.Rd || z.uc && "absolute" == d) {
        f.y -= c.body.offsetTop
      }
      for(e = a;(e = (0,z.Zd)(e)) && e != c.body && e != h;) {
        if(f.x -= e.scrollLeft, !z.Rd || "TR" != e.tagName) {
          f.y -= e.scrollTop
        }
      }
    }
  }
  return f
};
z.ae = function(a, b) {
  var c = (0,z.ce)(a), d = (0,z.ce)(b);
  return new z.hc(c.x - d.x, c.y - d.y)
};
z.ce = function(a) {
  var b = new z.hc;
  if(1 == a.nodeType) {
    if(a.getBoundingClientRect) {
      var c = (0,z.Yd)(a);
      b.x = c.left;
      b.y = c.top
    }else {
      var c = (0,z.jc)(a), c = (0,z.tc)(c.eb), d = (0,z.$d)(a);
      b.x = d.x - c.x;
      b.y = d.y - c.y
    }
    if(z.R && !(0,z.Ub)(12)) {
      var e;
      z.L ? e = "-ms-transform" : z.uc ? e = "-webkit-transform" : z.Rd ? e = "-o-transform" : z.R && (e = "-moz-transform");
      var f;
      e && (f = (0,z.Xd)(a, e));
      f || (f = (0,z.Xd)(a, "transform"));
      f ? (a = f.match(z.de), a = !a ? new z.hc(0, 0) : new z.hc((0,window.parseFloat)(a[1]), (0,window.parseFloat)(a[2]))) : a = new z.hc(0, 0);
      b = new z.hc(b.x + a.x, b.y + a.y)
    }
  }else {
    e = (0,z.qa)(a.gv), f = a, a.targetTouches ? f = a.targetTouches[0] : e && a.Kd.targetTouches && (f = a.Kd.targetTouches[0]), b.x = f.clientX, b.y = f.clientY
  }
  return b
};
z.ee = function(a, b) {
  "number" == typeof a && (a = (b ? window.Math.round(a) : a) + "px");
  return a
};
z.fe = function(a, b) {
  var c = (0,z.jc)(b), d = z.n;
  if(z.L) {
    c = d = c.Pc().createStyleSheet(), z.L ? c.cssText = a : c.innerHTML = a
  }else {
    var e = (0,z.nc)(c.eb, "head", z.l, z.l)[0];
    e || (d = (0,z.nc)(c.eb, "body", z.l, z.l)[0], e = c.ab("head"), d.parentNode.insertBefore(e, d));
    var f = d = c.ab("style");
    z.L ? f.cssText = a : f.innerHTML = a;
    c.appendChild(e, d)
  }
  return d
};
z.ge = function(a) {
  (0,z.P)(a.ownerNode || a.owningElement || a)
};
z.he = function() {
};
z.ie = function(a) {
  if(a instanceof z.he) {
    return a
  }
  if("function" == typeof a.cg) {
    return a.cg(z.s)
  }
  if((0,z.na)(a)) {
    var b = 0, c = new z.he;
    c.next = function() {
      for(;;) {
        b >= a.length && (0,z.g)(z.je);
        if(b in a) {
          return a[b++]
        }
        b++
      }
    };
    return c
  }
  (0,z.g)((0,window.Error)("Not implemented"))
};
z.ke = function(a, b, c, d, e) {
  this.xb = !!b;
  a && (0,z.le)(this, a, d);
  this.depth = e != z.l ? e : this.vb || 0;
  this.xb && (this.depth *= -1);
  this.um = !c
};
z.le = function(a, b, c, d) {
  if(a.z = b) {
    a.vb = (0,z.pa)(c) ? c : 1 != a.z.nodeType ? 0 : a.xb ? -1 : 1
  }
  (0,z.pa)(d) && (a.depth = d)
};
z.me = function(a) {
  if("function" == typeof a.pe) {
    return a.pe()
  }
  if((0,z.oa)(a)) {
    return a.split("")
  }
  if((0,z.na)(a)) {
    for(var b = [], c = a.length, d = 0;d < c;d++) {
      b.push(a[d])
    }
    return b
  }
  return(0,z.mb)(a)
};
z.ne = function(a) {
  if("function" == typeof a.Kf) {
    return a.Kf()
  }
  if("function" != typeof a.pe) {
    if((0,z.na)(a) || (0,z.oa)(a)) {
      var b = [];
      a = a.length;
      for(var c = 0;c < a;c++) {
        b.push(c)
      }
      return b
    }
    return(0,z.nb)(a)
  }
};
z.oe = function(a, b, c) {
  if("function" == typeof a.forEach) {
    a.forEach(b, c)
  }else {
    if((0,z.na)(a) || (0,z.oa)(a)) {
      (0,z.xc)(a, b, c)
    }else {
      for(var d = (0,z.ne)(a), e = (0,z.me)(a), f = e.length, h = 0;h < f;h++) {
        b.call(c, e[h], d && d[h], a)
      }
    }
  }
};
z.pe = function(a, b) {
  this.Uc = {};
  this.Xa = [];
  var c = arguments.length;
  if(1 < c) {
    c % 2 && (0,z.g)((0,window.Error)("Uneven number of arguments"));
    for(var d = 0;d < c;d += 2) {
      this.set(arguments[d], arguments[d + 1])
    }
  }else {
    a && this.Lc(a)
  }
};
z.qe = function(a) {
  if(a.qa != a.Xa.length) {
    for(var b = 0, c = 0;b < a.Xa.length;) {
      var d = a.Xa[b];
      (0,z.re)(a.Uc, d) && (a.Xa[c++] = d);
      b++
    }
    a.Xa.length = c
  }
  if(a.qa != a.Xa.length) {
    for(var e = {}, c = b = 0;b < a.Xa.length;) {
      d = a.Xa[b], (0,z.re)(e, d) || (a.Xa[c++] = d, e[d] = 1), b++
    }
    a.Xa.length = c
  }
};
z.re = function(a, b) {
  return window.Object.prototype.hasOwnProperty.call(a, b)
};
z.te = function(a) {
  return(0,z.ue)(a || arguments.callee.caller, [])
};
z.ue = function(a, b) {
  var c = [];
  if((0,z.Wa)(b, a)) {
    c.push("[...circular reference...]")
  }else {
    if(a && 50 > b.length) {
      c.push((0,z.ve)(a) + "(");
      for(var d = a.arguments, e = 0;e < d.length;e++) {
        0 < e && c.push(", ");
        var f;
        f = d[e];
        switch(typeof f) {
          case "object":
            f = f ? "object" : "null";
            break;
          case "string":
            break;
          case "number":
            f = (0,window.String)(f);
            break;
          case "boolean":
            f = f ? "true" : "false";
            break;
          case "function":
            f = (f = (0,z.ve)(f)) ? f : "[fn]";
            break;
          default:
            f = typeof f
        }
        40 < f.length && (f = f.substr(0, 40) + "...");
        c.push(f)
      }
      b.push(a);
      c.push(")\n");
      try {
        c.push((0,z.ue)(a.caller, b))
      }catch(h) {
        c.push("[exception trying to get caller]\n")
      }
    }else {
      a ? c.push("[...long stack...]") : c.push("[end]")
    }
  }
  return c.join("")
};
z.ve = function(a) {
  if(z.we[a]) {
    return z.we[a]
  }
  a = (0,window.String)(a);
  if(!z.we[a]) {
    var b = /function ([^\(]+)/.exec(a);
    z.we[a] = b ? b[1] : "[Anonymous]"
  }
  return z.we[a]
};
z.xe = function(a, b, c, d, e) {
  this.reset(a, b, c, d, e)
};
z.ye = function(a) {
  this.Ov = a
};
z.ze = function(a, b) {
  this.name = a;
  this.value = b
};
z.Ae = function(a) {
  return a.jk ? a.jk : a.kb ? (0,z.Ae)(a.kb) : z.n
};
z.Be = function(a) {
  z.Ce || (z.Ce = new z.ye(""), z.De[""] = z.Ce, z.Ce.vw(z.Ee));
  var b;
  if(!(b = z.De[a])) {
    b = new z.ye(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = (0,z.Be)(a.substr(0, c));
    c.hv()[d] = b;
    b.kb = c;
    z.De[a] = b
  }
  return b
};
z.Fe = function() {
  z.Hd.call(this)
};
z.Ge = function() {
};
z.He = function(a) {
  if(a.getSelection) {
    return a.getSelection()
  }
  a = a.document;
  var b = a.selection;
  if(b) {
    try {
      var c = b.createRange();
      if(c.parentElement) {
        if(c.parentElement().document != a) {
          return z.n
        }
      }else {
        if(!c.length || c.item(0).document != a) {
          return z.n
        }
      }
    }catch(d) {
      return z.n
    }
    return b
  }
  return z.n
};
z.Ie = function(a) {
  for(var b = [], c = 0, d = a.li();c < d;c++) {
    b.push(a.Od(c))
  }
  return b
};
z.Je = function(a) {
  return a.se() ? a.ra() : a.ba()
};
z.Ke = function(a) {
  return a.se() ? a.rb() : a.Ka()
};
z.Le = function(a) {
  return a.se() ? a.ba() : a.ra()
};
z.Me = function(a) {
  return a.se() ? a.Ka() : a.rb()
};
z.Ne = function(a, b) {
  z.ke.call(this, a, b, z.m)
};
z.Oe = function() {
};
z.Pe = function(a, b, c, d, e) {
  var f;
  a && (this.la = a, this.oa = b, this.ha = c, this.na = d, 1 == a.nodeType && "BR" != a.tagName && (a = a.childNodes, (b = a[b]) ? (this.la = b, this.oa = 0) : (a.length && (this.la = (0,z.Ta)(a)), f = z.m)), 1 == c.nodeType && ((this.ha = c.childNodes[d]) ? this.na = 0 : this.ha = c));
  z.ke.call(this, e ? this.ha : this.la, e, z.m);
  if(f) {
    try {
      this.next()
    }catch(h) {
      h != z.je && (0,z.g)(h)
    }
  }
};
z.Qe = function() {
};
z.Re = function(a) {
  this.O = a
};
z.Se = function(a) {
  var b = (0,z.lc)(a).createRange();
  if(a.nodeType == z.Rc) {
    b.setStart(a, 0), b.setEnd(a, a.length)
  }else {
    if((0,z.Te)(a)) {
      for(var c, d = a;(c = d.firstChild) && (0,z.Te)(c);) {
        d = c
      }
      b.setStart(d, 0);
      for(d = a;(c = d.lastChild) && (0,z.Te)(c);) {
        d = c
      }
      b.setEnd(d, 1 == d.nodeType ? d.childNodes.length : d.length)
    }else {
      c = a.parentNode, a = (0,z.Xa)(c.childNodes, a), b.setStart(c, a), b.setEnd(c, a + 1)
    }
  }
  return b
};
z.Ue = function(a, b, c, d) {
  var e = (0,z.lc)(a).createRange();
  e.setStart(a, b);
  e.setEnd(c, d);
  return e
};
z.Ve = function(a) {
  this.O = a
};
z.We = function(a, b) {
  this.O = a;
  this.Bm = b
};
z.Xe = function(a) {
  var b = (0,z.lc)(a).body.createTextRange();
  if(1 == a.nodeType) {
    b.moveToElementText(a), (0,z.Te)(a) && !a.childNodes.length && b.collapse(z.s)
  }else {
    for(var c = 0, d = a;d = d.previousSibling;) {
      var e = d.nodeType;
      if(e == z.Rc) {
        c += d.length
      }else {
        if(1 == e) {
          b.moveToElementText(d);
          break
        }
      }
    }
    d || b.moveToElementText(a.parentNode);
    b.collapse(!d);
    c && b.move("character", c);
    b.moveEnd("character", a.length)
  }
  return b
};
z.Ye = function(a, b) {
  for(var c = b.childNodes, d = 0, e = c.length;d < e;d++) {
    var f = c[d];
    if((0,z.Te)(f)) {
      var h = (0,z.Xe)(f), k = h.htmlText != f.outerHTML;
      if(a.isCollapsed() && k ? 0 <= a.qd(h, 1, 1) && 0 >= a.qd(h, 1, 0) : a.O.inRange(h)) {
        return(0,z.Ye)(a, f)
      }
    }
  }
  return b
};
z.Ze = function(a, b, c) {
  c = c || a.wc();
  if(!c || !c.firstChild) {
    return c
  }
  for(var d = 1 == b, e = 0, f = c.childNodes.length;e < f;e++) {
    var h = d ? e : f - e - 1, k = c.childNodes[h], p;
    try {
      p = (0,z.$e)(k)
    }catch(q) {
      continue
    }
    var z$ = p.O;
    if(a.isCollapsed()) {
      if((0,z.Te)(k)) {
        if(p.Je(a)) {
          return(0,z.Ze)(a, b, k)
        }
      }else {
        if(0 == a.qd(z$, 1, 1)) {
          a.oa = a.na = h;
          break
        }
      }
    }else {
      if(a.Je(p)) {
        if(!(0,z.Te)(k)) {
          d ? a.oa = h : a.na = h + 1;
          break
        }
        return(0,z.Ze)(a, b, k)
      }
      if(0 > a.qd(z$, 1, 0) && 0 < a.qd(z$, 0, 1)) {
        return(0,z.Ze)(a, b, k)
      }
    }
  }
  return c
};
z.af = function(a, b) {
  var c = 1 == b, d = c ? a.ba() : a.ra();
  if(1 == d.nodeType) {
    for(var d = d.childNodes, e = d.length, f = c ? 1 : -1, h = c ? 0 : e - 1;0 <= h && h < e;h += f) {
      var k = d[h];
      if(!(0,z.Te)(k) && 0 == a.O.compareEndPoints((1 == b ? "Start" : "End") + "To" + (1 == b ? "Start" : "End"), (0,z.$e)(k).O)) {
        return c ? h : h + 1
      }
    }
    return-1 == h ? 0 : h
  }
  e = a.O.duplicate();
  f = (0,z.Xe)(d);
  e.setEndPoint(c ? "EndToEnd" : "StartToStart", f);
  e = e.text.length;
  return c ? d.length - e : e
};
z.bf = function(a) {
  this.O = a
};
z.cf = function(a) {
  this.O = a
};
z.df = function(a) {
  return z.L && !(0,z.Xb)(9) ? new z.We(a, (0,z.lc)(a.parentElement())) : z.uc ? new z.cf(a) : z.R ? new z.Ve(a) : z.Rd ? new z.bf(a) : new z.Re(a)
};
z.$e = function(a) {
  if(z.L && !(0,z.Xb)(9)) {
    var b = new z.We((0,z.Xe)(a), (0,z.lc)(a));
    if((0,z.Te)(a)) {
      for(var c, d = a;(c = d.firstChild) && (0,z.Te)(c);) {
        d = c
      }
      b.la = d;
      b.oa = 0;
      for(d = a;(c = d.lastChild) && (0,z.Te)(c);) {
        d = c
      }
      b.ha = d;
      b.na = 1 == d.nodeType ? d.childNodes.length : d.length;
      b.ve = a
    }else {
      b.la = b.ha = b.ve = a.parentNode, b.oa = (0,z.Xa)(b.ve.childNodes, a), b.na = b.oa + 1
    }
    a = b
  }else {
    a = z.uc ? new z.cf((0,z.Se)(a)) : z.R ? new z.Ve((0,z.Se)(a)) : z.Rd ? new z.bf((0,z.Se)(a)) : new z.Re((0,z.Se)(a))
  }
  return a
};
z.Te = function(a) {
  return(0,z.Cc)(a) || a.nodeType == z.Rc
};
z.ef = function() {
};
z.ff = function(a, b) {
  var c = new z.ef;
  c.Ng = a;
  c.Td = !!b;
  return c
};
z.gf = function(a) {
  var b;
  if(!(b = a.Ng)) {
    b = a.ba();
    var c = a.Ka(), d = a.ra(), e = a.rb();
    if(z.L && !(0,z.Xb)(9)) {
      var f = b, h = c, k = d, p = e, q = z.s;
      1 == f.nodeType && (h > f.childNodes.length && z.hf.log(z.jf, "Cannot have startOffset \x3e startNode child count", z.l), h = f.childNodes[h], q = !h, f = h || f.lastChild || f, h = 0);
      var z$ = (0,z.Xe)(f);
      h && z$.move("character", h);
      f == k && h == p ? z$.collapse(z.m) : (q && z$.collapse(z.s), q = z.s, 1 == k.nodeType && (p > k.childNodes.length && z.hf.log(z.jf, "Cannot have endOffset \x3e endNode child count", z.l), k = (h = k.childNodes[p]) || k.lastChild || k, p = 0, q = !h), f = (0,z.Xe)(k), f.collapse(!q), p && f.moveEnd("character", p), z$.setEndPoint("EndToEnd", f));
      p = new z.We(z$, (0,z.lc)(b));
      p.la = b;
      p.oa = c;
      p.ha = d;
      p.na = e;
      b = p
    }else {
      b = z.uc ? new z.cf((0,z.Ue)(b, c, d, e)) : z.R ? new z.Ve((0,z.Ue)(b, c, d, e)) : z.Rd ? new z.bf((0,z.Ue)(b, c, d, e)) : new z.Re((0,z.Ue)(b, c, d, e))
    }
    b = a.Ng = b
  }
  return b
};
z.kf = function(a) {
  this.zu = (0,z.Je)(a);
  this.LB = (0,z.Ke)(a);
  this.ev = (0,z.Le)(a);
  this.nC = (0,z.Me)(a)
};
z.lf = function(a) {
  if(!a.Gb && (a.Gb = [], a.O)) {
    for(var b = 0;b < a.O.length;b++) {
      a.Gb.push(a.O.item(b))
    }
  }
  return a.Gb
};
z.mf = function() {
  this.Gd = [];
  this.Bi = [];
  this.vm = this.Fi = z.n
};
z.nf = function(a) {
  a.Fi || (a.Fi = (0,z.Ie)(a), a.Fi.sort(function(a, c) {
    var d = a.ba(), e = a.Ka(), f = c.ba(), h = c.Ka();
    return d == f && e == h ? 0 : (0,z.of)(d, e, f, h) ? 1 : -1
  }));
  return a.Fi
};
z.pf = function(a) {
  this.hr = (0,z.qf)((0,z.Ie)(a), function(a) {
    return a.gr()
  })
};
z.rf = function(a) {
  a && (this.Qf = (0,z.qf)((0,z.nf)(a), function(a) {
    return(0,z.ie)(a)
  }));
  z.Ne.call(this, a ? this.ba() : z.n, z.s)
};
z.yf = function(a) {
  return(0,z.ff)((0,z.$e)(a), z.l)
};
z.of = function(a, b, c, d) {
  if(a == c) {
    return d < b
  }
  var e;
  if(1 == a.nodeType && b) {
    if(e = a.childNodes[b]) {
      a = e, b = 0
    }else {
      if((0,z.Hc)(a, c)) {
        return z.m
      }
    }
  }
  if(1 == c.nodeType && d) {
    if(e = c.childNodes[d]) {
      c = e, d = 0
    }else {
      if((0,z.Hc)(c, a)) {
        return z.s
      }
    }
  }
  return 0 < ((0,z.Ic)(a, c) || b - d)
};
z.zf = function(a) {
  return(a = a.exec((0,z.Rb)())) ? a[1] : ""
};
z.Af = function(a) {
  return function() {
    return a
  }
};
z.Bf = function(a) {
  var b = arguments, c = b.length;
  return function() {
    for(var a, e = 0;e < c;e++) {
      a = b[e].apply(this, arguments)
    }
    return a
  }
};
z.Cf = function(a) {
  var b = arguments, c = b.length;
  return function() {
    for(var a = 0;a < c;a++) {
      if(!b[a].apply(this, arguments)) {
        return z.s
      }
    }
    return z.m
  }
};
z.Df = function(a) {
  z.Df[" "](a);
  return a
};
z.Ef = function(a, b, c, d) {
  var e = (0,z.T)(a, b, function() {
    (0,z.Ff)(e);
    c.apply(d || this, arguments)
  }, d, z.l)
};
z.T = function(a, b, c, d, e) {
  a || (0,z.g)((0,window.Error)("Can not add listener, element is not defined"));
  return(0,z.Gf)(a, b, c, d, e)
};
z.Gf = function(a, b, c, d, e) {
  function f(b) {
    b = (0,z.Hf)(b);
    c.call(d || a, b)
  }
  if(!a) {
    return z.n
  }
  b = z.If ? b : "on" + b;
  e = e || z.s;
  a[z.Jf](b, f, e);
  return{l:a, type:b, ak:f, capture:e}
};
z.Ff = function(a) {
  if(a) {
    if((0,z.ma)(a)) {
      for(var b = 0;b < a.length;b++) {
        (0,z.Ff)(a[b])
      }
    }else {
      a.l[z.Kf](a.type, a.ak, a.capture)
    }
  }
};
z.Hf = function(a) {
  var b = a || window.event;
  b.preventDefault || (b.preventDefault = function() {
    b.returnValue = z.s
  });
  b.stopPropagation || (b.stopPropagation = function() {
    b.cancelBubble = z.m
  });
  "mouseover" == b.type && !b.relatedTarget && (b.relatedTarget = b.fromElement);
  "mouseout" == b.type && !b.relatedTarget && (b.relatedTarget = b.toElement);
  return b
};
z.Lf = function(a) {
  return!!z.Mf[a.tagName]
};
z.Nf = function(a) {
  return"LI" == a.tagName ? z.m : (0,z.Of)(a) ? z.s : (0,z.Lf)(a)
};
z.Pf = function(a, b) {
  for(var c = {x:0, y:0}, d = b || window.document.body;a && a != d;) {
    c.y += a.offsetTop, c.x += a.offsetLeft, a = a.offsetParent
  }
  return c
};
z.Qf = function(a) {
  return(0,z.Pf)(a, (0,z.Rf)(a)).y
};
z.Rf = function(a) {
  for(a = a.parentNode;a.parentNode && "auto" != (0,z.Xd)(a, "overflowY");a = a.parentNode) {
  }
  a == window.document && (a = window.document.body);
  return a
};
z.Sf = function(a, b, c) {
  (0,z.Tf)(a, z.Nf, (0,z.Bf)(b, (0,z.Af)(z.m)), c)
};
z.Tf = function(a, b, c, d) {
  for(var e = 0, f = a.children.length;e < f;e++) {
    var h = a.children[e], k = h.tagName;
    if("OL" == k || "UL" == k) {
      if((0,z.Tf)(h, b, c, d)) {
        continue
      }else {
        return z.s
      }
    }
    if(b(h) && !c.call(d, h)) {
      return z.s
    }
  }
  return z.m
};
z.Of = function(a) {
  a = a.tagName;
  return"OL" == a || "UL" == a
};
z.Uf = function(a) {
  this.id = a;
  this.sc = {}
};
z.Vf = function(a, b) {
  if("undefined" == typeof b) {
    for(var c in a.sc) {
      return z.m
    }
    return z.s
  }
  return!!a.sc[b]
};
z.Wf = function(a, b, c) {
  (0,z.Xf)();
  z.Yf.g(a, b, c);
  return z.Yf
};
z.Zf = function(a, b, c) {
  z.$f && z.Yf.clear(a, b, c)
};
z.ag = function(a) {
  (0,z.Xf)();
  var b;
  "string" == typeof a ? b = a : (b = a.getAttribute("data-action-scope"), b || (b = "_actionscope_" + z.bg++, a.setAttribute("data-action-scope", b)));
  z.cg[b] || (z.cg[b] = new z.Uf(b));
  return z.cg[b]
};
z.dg = function(a) {
  a = "string" == typeof a ? a : a instanceof z.Uf ? a.id : a.getAttribute("data-action-scope");
  z.cg[a] && (z.cg[a].clear(), delete z.cg[a])
};
z.Xf = function() {
  z.$f || (z.$f = z.m, (0,z.T)(window.document.body, "click", z.eg), (0,z.T)(window.document.body, "mousedown", z.fg), (0,z.T)(window.document, "keydown", z.gg), z.Yf = (0,z.ag)(window.document.body))
};
z.hg = function(a) {
  return z.L && !(0,z.Ub)(9) ? 1 == a.button : z.uc && z.ig ? !a.button && !a.ctrlKey : !a.button
};
z.jg = function(a) {
  return"true" == a.contentEditable || "INPUT" == a.tagName && "text" == a.type || "TEXTAREA" == a.tagName
};
z.fg = function(a) {
  if((0,z.hg)(a)) {
    var b = (0,z.kg)(a), c = a.target;
    b && !(0,z.Uc)(c, z.jg, z.m) && a.preventDefault()
  }
};
z.eg = function(a) {
  (0,z.hg)(a) && ((0,z.lg)(a) && !a.metaKey && !a.shiftKey && !a.altKey && !a.ctrlKey) && (a.preventDefault(), a.stopPropagation())
};
z.gg = function(a) {
  13 == a.keyCode && (0,z.lg)(a) && a.preventDefault()
};
z.kg = function(a) {
  for(var b = a.target;b && b != window.document;) {
    var c = b.getAttribute("data-action");
    if(c) {
      return{Zf:c, target:b, value:b.getAttribute("data-action-value"), event:a, ck:a.metaKey || a.shiftKey || a.altKey || a.ctrlKey}
    }
    b = b.parentNode
  }
  return z.n
};
z.lg = function(a) {
  return!z.$f ? z.s : (a = (0,z.kg)(a)) ? (0,z.mg)(a) : z.s
};
z.mg = function(a) {
  if(a.target.disabled) {
    return z.s
  }
  for(var b = a.target, c = z.s;b && b != window.document;) {
    var d = z.cg[b.getAttribute("data-action-scope")];
    if(d) {
      if(d = d.pq(a)) {
        return z.m
      }
      c = c || d === z.s
    }
    b = b.parentNode
  }
  return c
};
z.ng = function() {
  z.Hd.call(this);
  this.Xc = [];
  this.Ud = {}
};
z.og = function(a) {
  delete a.Xc;
  delete a.Ud;
  delete a.pk
};
z.pg = function(a, b, c, d) {
  this.fa = a.get("request");
  this.mb = b;
  this.Yk = this.iu = c;
  this.Wy = d;
  this.yg = [];
  this.gd = z.n;
  this.Vl = z.s;
  (0,z.T)(window, "beforeunload", this.zo, this)
};
z.qg = function(a, b) {
  a.yg.length > a.Wy || (a.yg.push(b), !a.Vl && a.gd == z.n && (a.gd = window.setTimeout(a.St.bind(a), a.Yk)))
};
z.rg = function() {
};
z.sg = function() {
};
z.tg = function() {
  var a = (0,z.ug)(z.vg);
  return a ? new window.ActiveXObject(a) : new window.XMLHttpRequest
};
z.ug = function(a) {
  if(!a.wv && "undefined" == typeof window.XMLHttpRequest && "undefined" != typeof window.ActiveXObject) {
    for(var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0;c < b.length;c++) {
      var d = b[c];
      try {
        return new window.ActiveXObject(d), a.wv = d
      }catch(e) {
      }
    }
    (0,z.g)((0,window.Error)("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed"))
  }
  return a.wv
};
z.wg = function(a, b, c, d) {
  var e = z.s, f = new z.vb(function() {
    e = z.m;
    h.abort();
    h.onreadystatechange = z.ja
  }), h = (0,z.xg)(a, b, c, d, function(a) {
    e || (e = z.m, f.Ga(a))
  }, function(a) {
    e || (e = z.m, f.If(a))
  });
  return f
};
z.xg = function(a, b, c, d, e, f) {
  d = d || {};
  var h = e || z.ja, k = f || z.ja, p, q = (0,z.tg)();
  try {
    q.open(a, b, z.m)
  }catch(z$) {
    return k(new z.yg("Error opening XHR: " + z$.message, b, q)), q
  }
  q.onreadystatechange = function() {
    if(4 == q.readyState) {
      window.clearTimeout(p);
      var a;
      a: {
        switch(q.status) {
          case 200:
          ;
          case 201:
          ;
          case 202:
          ;
          case 204:
          ;
          case 206:
          ;
          case 304:
          ;
          case 1223:
            a = z.m;
            break a;
          default:
            a = z.s
        }
      }
      if(!a && (a = 0 === q.status)) {
        a = b.match(z.zg)[1] || z.n, !a && window.self.location && (a = window.self.location.protocol, a = a.substr(0, a.length - 1)), a = a ? a.toLowerCase() : "", a = !("http" == a || "https" == a || "" == a)
      }
      a ? h(q) : k(new z.Ag(q.status, b, q))
    }
  };
  e = z.s;
  if(d.headers) {
    for(var U in d.headers) {
      q.setRequestHeader(U, d.headers[U])
    }
    e = "Content-Type" in d.headers
  }
  "POST" == a && !e && q.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset\x3dutf-8");
  d.withCredentials && (q.withCredentials = d.withCredentials);
  d.Oq && q.overrideMimeType(d.Oq);
  0 < d.ur && (p = window.setTimeout(function() {
    q.onreadystatechange = z.ja;
    q.abort();
    k(new z.Bg(b, q))
  }, d.ur));
  try {
    q.send(c)
  }catch(F) {
    k(new z.yg("Error sending XHR: " + F.message, b, q))
  }
  return q
};
z.yg = function(a, b, c) {
  z.Aa.call(this, a + ", url\x3d" + b);
  this.url = b;
  this.yr = c
};
z.Ag = function(a, b, c) {
  z.yg.call(this, "Request Failed, status\x3d" + a, b, c);
  this.status = a
};
z.Bg = function(a, b) {
  z.yg.call(this, "Request timed out", a, b)
};
z.Cg = function(a, b) {
  z.Dg[a] = b
};
z.Eg = function(a, b, c) {
  a.Mi || (a.Mi = {});
  a.Mi[b] = c
};
z.Fg = function(a) {
  z.Gg && (0,z.g)((0,window.Error)("Guard reporter already configured"));
  z.Gg = a
};
z.Hg = function() {
  var a = window || window, b = a.onerror;
  a.onerror = function(a, d, e) {
    b && b(a, d, e);
    d = (0,window.String)(d).split(/[\/\\]/).pop();
    (0,z.Ig)({message:a, fileName:d, Qm:e});
    return z.m
  }
};
z.Jg = function(a) {
  return"function" != typeof a ? a : function() {
    try {
      a.apply(this, arguments)
    }catch(b) {
      var c;
      c = b;
      c.stack ? (c = c.stack.split("\n"), c = /[^@]+@.*\/_\/fp\/js\//.test(c[0]) || /\/_\/fp\/js\//.test(c[1])) : c = c.fileName ? /\/_\/fp\/js\//.test(c.fileName) : z.m;
      c && (0,z.Ig)(b);
      (0,z.g)(b)
    }
  }
};
z.Kg = function() {
  var a = z.xg;
  z.xg = function(b, c, d, e, f, h) {
    return a(b, c, d, e, f ? (0,z.Jg)(f) : z.n, h ? (0,z.Jg)(h) : z.n)
  }
};
z.Lg = function() {
  var a = z.T;
  z.T = function(b, c, d, e, f) {
    return a(b, c, (0,z.Jg)(d), e, f)
  }
};
z.Mg = function() {
  var a = window, b = a.setTimeout;
  a.setTimeout = function(a, d) {
    a = (0,z.Jg)(a);
    return b.call ? b.call(this, a, d) : b(a, d)
  }
};
z.Ng = function() {
  var a = window, b = a.setInterval;
  a.setInterval = function(a, d) {
    a = (0,z.Jg)(a);
    return b.call ? b.call(this, a, d) : b(a, d)
  }
};
z.Og = function(a) {
  "string" == typeof a && (a = (0,window.Error)(a));
  (0,z.Ig)(a)
};
z.Pg = function(a) {
  for(var b = a.message + a.stack, c = 0;c < z.Yg.length;c++) {
    var d = z.Yg[c];
    if("string" == typeof d) {
      if(-1 != b.indexOf(d)) {
        return z.m
      }
    }else {
      if(a instanceof d) {
        return z.m
      }
    }
  }
  return z.s
};
z.Ig = function(a) {
  if(!(0,z.Pg)(a)) {
    var b = {}, c;
    for(c in z.Dg) {
      b[c] = (0,window.String)(z.Dg[c])
    }
    if(a.Mi) {
      for(c in a.Mi) {
        b[c] = (0,window.String)(a.Mi[c])
      }
    }
    a = {message:a.message, name:a.name, lineNumber:a.lineNumber || a.line || "Not available", fileName:a.fileName || a.filename || a.sourceURL || window.location.href, stack:a.stack || "Not available", timestamp:(new window.Date).getTime(), extra:b};
    z.Gg ? (0,z.qg)(z.Gg, a) : z.Zg.push(a)
  }
};
z.$g = function() {
  z.ng.call(this);
  this.wj = [];
  this.Ir = z.m
};
z.ah = function(a, b) {
  for(var c = 0;c < a.wj.length;c++) {
    if(a.wj[c][0] == b) {
      return a.wj[c][1]
    }
  }
  return z.n
};
z.bh = function(a) {
  z.$g.call(this);
  this.Ic = a || {};
  this.lo = {}
};
z.ch = function(a) {
  return(0,z.qf)(a, function(a) {
    return a.La()
  })
};
z.dh = function(a, b) {
  var c = a.get(b);
  return c != z.n ? (0,window.String)(c) : ""
};
z.eh = function(a, b) {
  var c = a.get(b);
  return c != z.n ? (0,window.Number)(c) : 0
};
z.fh = function(a) {
  a.F("remove", a)
};
z.gh = function() {
  "animation-name" in z.hh || (z.hh["animation-name"] = {});
  if(!("a" in z.hh["animation-name"])) {
    var a = z.hh["animation-name"], b;
    "CSS" in window && "supports" in window.CSS ? b = window.CSS.supports("animation-name", "a") ? "native" : window.CSS.supports((z.uc ? "-webkit" : z.R ? "-moz" : z.L ? "-ms" : z.Rd ? "-o" : z.n) + "-animation-name", "a") ? "prefixed" : "unsupported" : (b = window.document.createElement("div"), b = (0,z.Ra)("animation-name") in b.style ? "native" : (0,z.Qd)() + (0,z.Sa)("animation-name") in b.style ? "prefixed" : "unsupported");
    a.a = b
  }
  return z.hh["animation-name"].a
};
z.ih = function(a, b) {
  z.vb.call(this);
  this.Zd = a;
  this.Pl = (0,z.ma)(b) ? b : [b];
  this.Uk = {};
  this.Pn = z.n;
  (0,z.H)(this, this.pause, this);
  (0,z.Bb)(this, this.Kx, this)
};
z.jh = function(a) {
  return"prefixed" == (0,z.gh)() ? (0,z.Qd)().toLowerCase() + "Animation" + a.charAt(0).toUpperCase() + a.substr(1) : "animation" + a
};
z.kh = function(a, b, c, d) {
  var e = c ? (0,z.ub)(c) : z.n;
  a.Pl.forEach(function(a) {
    if((!e || a.name in e) && (!d || d.call(this, a.name))) {
      a.paused = b
    }
  }, a);
  (0,z.lh)(a);
  return a
};
z.lh = function(a) {
  var b = (0,z.qf)(a.Pl, function(a) {
    a.paused || (this.Uk[a.name] = z.s);
    return a.paused ? "paused" : "running"
  }, a);
  (0,z.Sd)(a.Zd, "animationPlayState", b.join(","))
};
z.mh = function() {
  z.bd.call(this)
};
z.nh = function() {
  z.bd.call(this)
};
z.oh = function() {
  z.bd.call(this)
};
z.ph = function() {
  z.bd.call(this)
};
z.qh = function() {
  z.bd.call(this)
};
z.rh = function(a, b, c) {
  this.Nc = a || z.n;
  this.ud = !!c
};
z.sh = function(a) {
  if(!a.tb && (a.tb = new z.pe, a.qa = 0, a.Nc)) {
    for(var b = a.Nc.split("\x26"), c = 0;c < b.length;c++) {
      var d = b[c].indexOf("\x3d"), e = z.n, f = z.n;
      0 <= d ? (e = b[c].substring(0, d), f = b[c].substring(d + 1)) : e = b[c];
      e = (0,window.decodeURIComponent)(e.replace(/\+/g, " "));
      e = (0,z.th)(a, e);
      a.add(e, f ? (0,window.decodeURIComponent)(f.replace(/\+/g, " ")) : "")
    }
  }
};
z.uh = function(a, b, c) {
  a.remove(b);
  0 < c.length && (a.Nc = z.n, a.tb.set((0,z.th)(a, b), (0,z.eb)(c)), a.qa += c.length)
};
z.th = function(a, b) {
  var c = (0,window.String)(b);
  a.ud && (c = c.toLowerCase());
  return c
};
z.vh = function() {
  this.Dc = {}
};
z.wh = function(a, b) {
  var c = new z.xh(a);
  c.Rf = z.s;
  b ? a.Dc[b] = c : a.fq = c
};
z.yh = function(a) {
  var b = new z.xh(a);
  b.Tc = z.s;
  b.Rf = z.m;
  a.fq = b
};
z.zh = function(a, b, c, d) {
  var e = new z.xh(a);
  e.Tc = z.m;
  c && ((0,z.ma)(c) ? e.attributes = (0,z.ub)(c) : e.attributes = c);
  if(d) {
    e.Tc = b;
    for(c = 0;c < d.length;c++) {
      a.Dc[d[c].toUpperCase()] = e
    }
  }
  return a.Dc[b] = e
};
z.xh = function(a) {
  this.attributes = {};
  this.mc = a;
  this.Tc = z.s;
  this.Rf = z.m
};
z.Ah = function() {
  var a = new z.vh;
  (0,z.wh)(a, "SCRIPT");
  (0,z.wh)(a, "STYLE");
  (0,z.wh)(a, "HEAD");
  (0,z.yh)(a);
  return a
};
z.Bh = function(a) {
  return!a ? a : a.replace(/[&"'><]/g, function(a) {
    return z.Ch[a]
  })
};
z.Dh = function(a) {
  return z.Eh[a] || z.Fh
};
z.Gh = function(a, b) {
  function c() {
  }
  c.prototype = a;
  var d = new c, e;
  for(e in b) {
    d[e] = b[e]
  }
  return d
};
z.Hh = function(a, b, c) {
  var d = "key_" + a + ":" + b, e = z.Ih[d];
  e === z.l || 0 > e ? (z.Ih[d] = 0, z.Jh[d] = c) : 0 == e && (0,z.g)((0,window.Error)('Encountered two active delegates with the same priority ("' + a + ":" + b + '").'))
};
z.Kh = function(a, b) {
  var c = z.Jh["key_" + a + ":" + b];
  !c && "" != b && (c = z.Jh["key_" + a + ":"]);
  return c ? c : z.Lh;
  (0,z.g)((0,window.Error)('Found no active impl for delegate call to "' + a + ":" + b + '" (and not allowemptydefault\x3d"true").'))
};
z.Lh = function() {
  return""
};
z.X = function(a) {
  return a && a.Ef && a.Ef === z.Mh ? a.content : (0,window.String)(a).replace(z.Nh, z.Oh)
};
z.Y = function(a) {
  a && a.Ef && a.Ef === z.Mh ? (a = (0,window.String)(a.content).replace(z.Ph, "").replace(z.Qh, "\x26lt;"), a = (0,window.String)(a).replace(z.Rh, z.Oh)) : a = (0,window.String)(a).replace(z.Nh, z.Oh);
  return a
};
z.Sh = function(a) {
  return"%" + a.charCodeAt(0).toString(16)
};
z.Th = function(a) {
  if(a && a.Ef === z.Uh) {
    return(0,window.String)(a).replace(z.Vh, z.Wh)
  }
  a = (0,window.encodeURIComponent)((0,window.String)((0,window.String)(a)));
  z.Xh.lastIndex = 0;
  return z.Xh.test(a) ? a.replace(z.Xh, z.Sh) : a
};
z.Yh = function(a) {
  a && a.Ef == z.Uh ? a = (0,window.String)(a).replace(z.Vh, z.Wh) : (a = (0,window.String)(a), a = z.Zh.test(a) ? a.replace(z.Vh, z.Wh) : "#zSoyz");
  return a
};
z.$h = function(a) {
  return a && a.Ef === z.ai ? "zSoyz" : (0,window.String)(a)
};
z.bi = function(a, b) {
  var c = z.m;
  a = (0,window.String)(a);
  if(a.length <= b) {
    return a
  }
  c && (3 < b ? b -= 3 : c = z.s);
  55296 <= a.charAt(b - 1) && 56319 >= a.charAt(b - 1) && (56320 <= a.charAt(b) && 57343 >= a.charAt(b)) && (b -= 1);
  a = a.substring(0, b);
  c && (a += "...");
  return a
};
z.Oh = function(a) {
  return z.ci[a]
};
z.Wh = function(a) {
  return z.di[a]
};
z.ei = function(a) {
  return'\x3ctextarea class\x3d"post-css-editor-textarea" placeholder\x3d"Type your CSS here"\x3e' + (a.Pg && a.Pg.Ef && a.Pg.Ef === z.Mh ? (0,window.String)(a.Pg.content).replace(z.Rh, z.Oh) : (0,window.String)(a.Pg).replace(z.Nh, z.Oh)) + '\x3c/textarea\x3e\x3cbutton class\x3d"btn" data-action\x3d"install-css"\x3ePreview CSS\x3c/button\x3e\x3cbutton class\x3d"btn btn-primary" data-action\x3d"save-css"\x3eSave CSS\x3c/button\x3e'
};
z.fi = function(a) {
  return'\x3cspan class\x3d"post-css-editor-link" data-action\x3d"popover-css-editor"\x3eEdit CSS' + (a.Pg ? " (!)" : "") + "\x3c/span\x3e"
};
z.gi = function(a, b, c) {
  z.Hd.call(this);
  this.t = a;
  this.Nl = b;
  this.pg = z.n;
  this.zg = a.get("popover");
  this.UA = a.get("request");
  a = window.document.createElement("div");
  a.className = "post-css-editor";
  c.appendChild(a);
  this.D = a;
  this.fe()
};
z.hi = function(a, b) {
  z.Hd.call(this);
  this.Lh = a;
  this.Rb = b
};
z.ii = function() {
  z.Hd.call(this);
  this.pa = {}
};
z.ji = function(a, b) {
  var c = (0,z.sa)(b);
  c in a.pa || (a.pa[c] = b, (0,z.Bb)(b, function() {
    delete this.pa[c]
  }, a));
  return b
};
z.ki = function(a, b, c) {
  b = "";
  if(a.imageId) {
    var d = c.useragent.isMobile && a.mobileWidth ? a.mobileWidth : a.width ? a.width : c.deviceWidth, e = c.useragent.isMobile && a.mobileHeight ? a.mobileHeight : a.height ? a.height : 0.8 * d, f = a.ym ? a.ym : "c";
    b += (0,z.X)(c.miroUrl) + "/";
    switch(a.strategy) {
      case "resample":
        b += "max/" + (0,z.X)(d);
        break;
      case "crop-fixed":
        b += "fit/" + (0,z.X)(f) + "/" + (0,z.X)(d) + "/" + (0,z.X)(e);
        break;
      case "crop-preserve":
        b += "fit/" + (0,z.X)(f) + "/" + (0,z.X)(d) + "/" + (0,z.X)(a.height * d);
        break;
      default:
        b += "proxy"
    }
    b += "/" + (0,z.X)(a.imageId)
  }
  return b
};
z.li = function(a, b) {
  return(0,z.mi)(a) + (!a.post.latestPublishedVersion && a.post.creatorId == b.currentUser.userId && b.useragent.supportsEdit ? "/edit" : "")
};
z.mi = function(a) {
  return"/" + (a.Ub ? (0,z.X)(a.Ub) : a.collection ? (0,z.X)(a.collection.slug) : a.post.homeCollection ? (0,z.X)(a.post.homeCollection.slug) : "p") + "/" + (0,z.X)(a.post.id)
};
z.ni = function(a) {
  return a.user.userId ? "/@" + (0,z.X)(a.user.username) : "/m/errors/404"
};
z.oi = function(a, b, c) {
  b = "";
  var d = a.imageId ? (0,z.ki)({imageId:a.imageId, strategy:"crop-fixed", width:"150", height:"150", ym:"t"}, 0, c) : "https:" + (0,z.X)(c.defaultPreviewImage);
  return b += "https://www.facebook.com/dialog/feed? app_id\x3d" + (0,z.Th)(c.facebookKey) + "\x26 link\x3d" + (0,z.Th)(a.url) + "\x26 name\x3d" + (0,z.Th)(a.title) + "\x26 display\x3dpopup\x26 picture\x3d" + (0,z.Th)(d) + "\x26 caption\x3d" + (0,z.Th)(a.caption) + "\x26 description\x3d" + (0,z.Th)(a.description) + "\x26 redirect_uri\x3d" + (0,z.Th)(a.KD)
};
z.pi = function(a, b, c) {
  this.t = a;
  this.U = a.get("datastore");
  this.Z = a.get("app");
  this.w = b;
  this.Tm = c;
  this.pa = new z.ii
};
z.qi = function(a) {
  var b = a.Q, c;
  a: {
    c = a.Q;
    a = a.w;
    for(var d = 0;d < c.ma.length;d++) {
      if(c.ma[d].get("id") === a) {
        c = d;
        break a
      }
    }
    c = -1
  }
  return b.ma[c + 1] || z.n
};
z.ri = function(a) {
  var b = (0,z.qi)(a);
  return!b ? z.n : (0,z.sd)(z.mi, {post:b.La(), Ub:a.Q.ki("preferredCollection")})
};
z.si = function(a) {
  return a.user.userId ? '\x3ca href\x3d"' + (0,z.ni)(a) + '" data-id\x3d"' + (0,z.Y)(a.user.userId) + '" title\x3d"Go to the profile of ' + (0,z.Y)(a.user.name) + '"' + (a.rel ? ' rel\x3d"' + (0,z.Y)(a.rel) + '"' : "") + (0,z.ti)(a) + "\x3e" + (0,z.X)(a.user.name) + "\x3c/a\x3e" : "Unknown User"
};
z.ui = function(a) {
  return'\x3ca href\x3d"/' + (0,z.Y)(a.collection.slug) + '" title\x3d"Go to ' + (0,z.Y)(a.collection.name) + '" data-collection-slug\x3d"' + (0,z.Y)(a.collection.slug) + '" data-id\x3d"' + (0,z.Y)(a.collection.id) + '"' + (0,z.ti)(a) + "\x3e" + (0,z.X)(a.collection.name) + "\x3c/a\x3e"
};
z.ti = function(a) {
  a = a || {};
  return(a.Ia ? ' class\x3d"' + (0,z.Y)(a.Ia) + '"' : "") + (a.kd ? ' data-action\x3d"' + (0,z.Y)(a.kd) + '"' : "") + (a.ld ? ' data-action-value\x3d"' + (0,z.Y)(a.ld) + '"' : "")
};
z.vi = function(a) {
  return'\x3cspan class\x3d"reading-time"\x3e' + (0,z.X)(window.Math.ceil(a.readingTime)) + " min read\x3c/span\x3e"
};
z.wi = function(a, b, c) {
  b = "";
  c.variants.can_read_later && c.isAuthenticated ? a.isOnReadingList ? (b += '\x3cspan class\x3d"reading-list-status on-reading-list" data-post-id\x3d"' + (0,z.Y)(a.postId) + '" data-reading-time\x3d"' + (0,z.Y)(a.readingTime) + '" data-action\x3d"remove-from-reading-list" data-action-value\x3d"' + (0,z.Y)(a.postId) + '"\x3e\x3cspan class\x3d"icons icons-reading-list no-user-select"\x3e\x3c/span\x3e', c = a.bD && 1E3 > c.deviceWidth, b += '\x3cspan class\x3d"reading-list-status-' + (0,z.Y)(c ? "display" : 
  "message") + '"\x3eAdded to reading list\x3c/span\x3e' + (!c ? (0,z.vi)(a) : "") + "\x3c/span\x3e") : b += '\x3cspan class\x3d"reading-list-status" data-post-id\x3d"' + (0,z.Y)(a.postId) + '" data-reading-time\x3d"' + (0,z.Y)(a.readingTime) + '" data-action\x3d"add-to-reading-list" data-action-value\x3d"' + (0,z.Y)(a.postId) + '"\x3e\x3cspan class\x3d"icons icons-reading-list no-user-select"\x3e\x3c/span\x3e\x3cspan class\x3d"reading-list-status-message"\x3eAdd to reading list\x3c/span\x3e' + (0,z.vi)(a) + 
  "\x3c/span\x3e" : b += (0,z.vi)(a);
  return b
};
z.xi = function(a, b) {
  var c;
  if(!a.qe || a.post.homeCollection && !a.Pd) {
    if(a.post.reason && b.variants.can_view_prl_homepage) {
      c = '\x3cli class\x3d"post-item-meta-item"\x3e' + (0,z.Kh)("b", a.post.reason.templateData.providerName)(a, z.n, b) + "\x3c/li\x3e";
      var d;
      if(b.variants.can_view_prl_debug) {
        d = "\x3cpre\x3eID: " + (0,z.X)(a.post.id) + ", Weight: " + (0,z.X)(a.post.weight) + ", Magnitude: " + (0,z.X)(a.post.magnitude) + "\n\n";
        for(var e = a.post.reasons, f = e.length, h = 0;h < f;h++) {
          var k = e[h];
          d += (0,z.Kh)("a", k.providerName)({reason:k}, z.n, b) + "\n"
        }
        d = '\x3cdiv class\x3d"prl-debug"\x3e' + (d + "\x3c/pre\x3e") + "\x3c/div\x3e"
      }else {
        d = ""
      }
      c += d
    }else {
      c = ""
    }
    c = c + '\x3cli class\x3d"post-item-meta-item"\x3e' + (!a.qe ? (0,z.si)({user:a.post.creator, Ia:"post-item-author"}) : "") + (a.post.homeCollection && !a.Pd && (!a.post.reason || !b.variants.can_view_prl_homepage) ? (!a.qe ? " " : "") + "in " + (0,z.ui)({collection:a.post.homeCollection}) : "") + "\x3c/li\x3e"
  }else {
    c = ""
  }
  return'\x3cul class\x3d"post-item-meta"\x3e' + c + (b.variants.enable_debug && !a.HC ? '\x3cli class\x3d"post-item-meta-item" data-tooltip\x3d"Detected language (debug only)"\x3e' + (a.post.detectedLanguage ? (0,z.X)(a.post.detectedLanguage) : "n/a") + "\x3c/li\x3e" : "") + (b.variants.can_see_reading_time ? '\x3cli class\x3d"post-item-meta-item"\x3e' + (0,z.wi)({postId:a.post.id, isOnReadingList:a.post.virtuals.isOnReadingList, readingTime:a.post.virtuals.readingTime}, 0, b) + "\x3c/li\x3e" : 
  "") + "\x3c/ul\x3e"
};
z.yi = function(a, b) {
  return(0,z.zi)((0,z.Gh)(a, {width:64, height:64}), b)
};
z.Ai = function(a, b) {
  return(0,z.zi)((0,z.Gh)(a, {width:100, height:100}), b)
};
z.zi = function(a, b) {
  var c = "", d = a.miroUrl ? a.miroUrl : b.miroUrl;
  if(a.user && a.user.username && a.user.imageId) {
    if(a.Cm) {
      c += '\x3cimg src\x3d"' + (0,z.Y)((0,z.Yh)(d)) + "/fit/c/" + (0,z.Y)(a.width) + "/" + (0,z.Y)(a.height) + "/" + (0,z.Y)(a.user.imageId) + '"' + (a.Wb ? ' class\x3d"' + (0,z.Y)(a.Wb) + '"' : "") + 'title\x3d"' + (0,z.Y)(a.cf ? a.cf : a.user.name) + '"' + (a.cf ? ' data-tooltip\x3d"' + (0,z.Y)(a.cf) + '"' : "") + (a.kd ? ' data-action\x3d"' + (0,z.Y)(a.kd) + '"' : "") + (a.ld ? ' data-action-value\x3d"' + (0,z.Y)(a.ld) + '"' : "") + "\x3e"
    }else {
      var e = "Go to the profile of " + a.user.name, c = c + ('\x3ca href\x3d"' + (0,z.ni)(a) + '"' + (a.Ia ? ' class\x3d"' + (0,z.Y)(a.Ia) + '"' : "") + (a.kd ? ' data-action\x3d"' + (0,z.Y)(a.kd) + '"' : "") + (a.tabIndex ? '  tabindex\x3d"' + (0,z.Y)(a.tabIndex) + '"' : "") + (a.ld ? ' data-action-value\x3d"' + (0,z.Y)(a.ld) + '"' : "") + ' title\x3d"' + (0,z.Y)(a.cf ? a.cf : e) + '" \x3e\x3cimg src\x3d"' + (0,z.Y)((0,z.Yh)(d)) + "/fit/c/" + (0,z.Y)(a.width) + "/" + (0,z.Y)(a.height) + "/" + (0,z.Y)(a.user.imageId) + 
      '"' + (a.Wb ? 'class\x3d"' + (0,z.Y)(a.Wb) + '"' : "") + (a.cf ? 'data-tooltip\x3d"' + (0,z.Y)(a.cf) + '"' : "") + 'title\x3d"' + (0,z.Y)(a.cf ? a.cf : a.user.name) + '" \x3e' + (a.LC ? "\x3cspan " + (a.Nv ? 'class\x3d"' + (0,z.Y)(a.Nv) + '"' : "") + "\x3e" + (0,z.X)(a.user.name) + "\x3c/span\x3e" : "") + "\x3c/a\x3e")
    }
  }else {
    c += '\x3cspan class\x3d"icons icons-avatar' + (a.Ia ? " " + (0,z.Y)(a.Ia) : "") + (a.Wb ? " " + (0,z.Y)(a.Wb) : "") + '"\x3e\x3c/span\x3e'
  }
  return c
};
z.Bi = function(a) {
  var b = '\x3cdiv class\x3d"overlay"\x3e\x3cbutton class\x3d"overlay-close" data-action\x3d"overlay-close"\x3e\x26times;\x3c/button\x3e\x3cdiv class\x3d"overlay-dialog ' + (a.type ? "overlay-dialog-" + (0,z.Y)(a.type) : "") + '" tabindex\x3d"-1"\x3e' + (a.title ? '\x3ch3 class\x3d"overlay-title"\x3e' + (0,z.X)(a.title) + "\x3c/h3\x3e" : "") + '\x3cdiv class\x3d"overlay-content"\x3e' + (0,z.$h)(a.jc) + "\x3c/div\x3e";
  a = a.type ? (0,z.Kh)("c", a.type)(a, z.n, z.l) : "";
  return b += (a ? '\x3cdiv class\x3d"overlay-actions"\x3e' + (0,z.$h)(a) + "\x3c/div\x3e" : "") + "\x3c/div\x3e\x3c/div\x3e"
};
z.Ci = function(a) {
  return'\x3cdiv class\x3d"popover-inner ' + (a.Mv ? (0,z.Y)(a.Mv) : "") + '"\x3e' + (0,z.$h)(a.wm) + '\x3c/div\x3e\x3cdiv class\x3d"popover-arrow"\x3e\x3c/div\x3e'
};
z.Di = function(a, b, c) {
  b = "\x3carticle " + ('class\x3d"post-article ' + ("edit" == a.mode ? "grid-breaking " : "") + (0 < a.post.vote ? " has-vote" : "") + '"' + (a.contextCollection ? 'data-collection-slug\x3d"' + (0,z.Y)(a.contextCollection.slug) + '" data-collection-name\x3d"' + (0,z.Y)(a.contextCollection.name) + '"' : "") + 'data-post-id\x3d"' + (0,z.Y)(a.post.id) + '" data-post-version\x3d"' + (a.post.versionId ? (0,z.Y)(a.post.versionId) : "") + '" data-author\x3d"' + (0,z.Y)(a.post.creator.userId) + '" data-author-name\x3d"' + 
  (0,z.Y)(a.post.creator.name) + '" data-post-type\x3d"' + (0,z.Y)(a.post.postType) + '" data-allow-notes\x3d"' + (0,z.Y)(a.post.virtuals.allowNotes) + '" data-is-published\x3d"' + (0,z.Y)(a.post.isPublished) + '"') + "\x3e";
  var d = '\x3cdiv class\x3d"metabar' + (!a.post.isPublished || "owner" == a.mode || "edit" == a.mode || "pending" == a.postStatus || "rejected" == a.postStatus || a.isCrossPoster ? " active" : "") + '"\x3e', e = "owner" == a.mode && !c.variants.can_edit_post ? "Editing is currently unavailable." : "edit" != a.mode && !a.post.latestPublishedVersion ? "Draft" : "", d = d + (("edit" == a.mode || e ? '\x3csection class\x3d"metabar-status"\x3e\x3cspan class\x3d"metabar-message' + (e ? " active" : "") + 
  '"\x3e' + (0,z.$h)(e) + "\x3c/span\x3e\x3c/section\x3e" : "") + '\x3cdiv class\x3d"metabar-actions metabar-mode-' + (0,z.Y)(a.mode) + '"\x3e\x3cul class\x3d"metabar-actions-btns"\x3e');
  switch(a.mode) {
    case "owner":
      e = (0,z.mi)({collection:a.contextCollection, post:a.post});
      d += (a.contextCollection ? '\x3cli\x3e\x3cbutton class\x3d"btn btn-small" title\x3d"Remove from this collection" data-action\x3d"remove-crosspost"\x3eRemove from Collection\x3c/button\x3e\x3c/li\x3e' : "") + '\x3cli class\x3d"metabar-actions-edit"\x3e' + (c.variants.can_edit_post && c.useragent.supportsEdit ? "owner" == a.mode && a.post.isPublished && !a.post.isLatestVersion ? '\x3ca class\x3d"btn btn-small" data-action\x3d"post-edit" data-tooltip\x3d"This post has unpublished edits" href\x3d"' + 
      (0,z.Y)((0,z.Yh)(e)) + '/edit"\x3e\x3cspan class\x3d"icons icons-info"\x3e\x3c/span\x3eEdit\x3c/a\x3e' : '\x3ca class\x3d"btn btn-small" data-action\x3d"post-edit" href\x3d"' + (0,z.Y)((0,z.Yh)(e)) + '/edit"\x3eEdit\x3c/a\x3e' : '\x3cbutton class\x3d"btn btn-small" disabled\x3d"disabled" title\x3d"Edit mode not supported"\x3eEdit\x3c/button\x3e') + "\x3c/li\x3e";
      break;
    case "edit":
      d += '\x3cli\x3e\x3cbutton class\x3d"btn btn-small" title\x3d"Delete this post" data-action\x3d"delete-post"\x3eDelete\x3c/button\x3e\x3c/li\x3e' + (a.post.latestPublishedVersion ? '\x3cli\x3e\x3cbutton class\x3d"btn btn-small" title\x3d"Exit edit mode, discarding changes" data-action\x3d"cancel"\x3eCancel\x3c/button\x3e\x3c/li\x3e\x3cli\x3e\x3cbutton class\x3d"btn btn-primary btn-small btn-publish" title\x3d"Publish" data-action\x3d"publish"\x3ePublish Changes\x3c/button\x3e\x3c/li\x3e' : 
      '\x3cli\x3e\x3cbutton class\x3d"btn btn-small" title\x3d"Share Draft" data-action\x3d"share-draft"\x3eShare Draft\x3c/button\x3e\x3c/li\x3e\x3cli\x3e\x3cbutton class\x3d"btn btn-primary btn-small btn-publish" title\x3d"Publish" data-action\x3d"publish"\x3ePublish\x3c/button\x3e\x3c/li\x3e');
      break;
    default:
      d += a.isCrossPoster || a.contextCollection && a.contextCollection.virtuals.canAdminister ? '\x3cli\x3e\x3cbutton class\x3d"btn btn-small" title\x3d"Remove from this collection" data-action\x3d"remove-crosspost"\x3eRemove from Collection\x3c/button\x3e\x3c/li\x3e' : ""
  }
  b = b + (d + "\x3c/ul\x3e\x3c/div\x3e\x3c/div\x3e") + '\x3csection class\x3d"post-page-wrapper ' + (a.post.content.image.backgroundSize ? " post-page-wrapper-" + (0,z.Y)(a.post.content.image.backgroundSize) : "") + '"\x3e\x3cdiv class\x3d"post-page-wrapper-inner"\x3e' + ("cover" != a.post.content.image.backgroundSize ? '\x3cdiv class\x3d"post-author-side"\x3e' + ("edit" != a.mode ? (0,z.Ei)(a, c) : "") + "\x3c/div\x3e" : "") + ((0,z.Fi)((0,z.Gh)(a, {image:a.post.content.image}), c) + '\x3cheader class\x3d"post-header"\x3e' + 
  ("cover" == a.post.content.image.backgroundSize ? '\x3cdiv class\x3d"post-author-side"\x3e' + ("edit" != a.mode ? (0,z.Ei)(a, c) : "") + "\x3c/div\x3e" : "") + ('\x3cul class\x3d"post-meta"\x3e' + (a.contextCollection ? '\x3cli class\x3d"post-meta-item"\x3e\x3cspan class\x3d"post-meta-author"\x3e' + (0,z.si)({user:a.post.creator, Ia:"post-author"}) + '\x3c/span\x3e\x3cspan class\x3d"divider-word"\x3e in \x3c/span\x3e\x3ca href\x3d"/' + (0,z.Y)(a.contextCollection.slug) + '" data-collection-slug\x3d"' + 
  (0,z.Y)(a.contextCollection.slug) + '" title\x3d"Go to ' + (0,z.Y)(a.contextCollection.name) + '"\x3e' + (0,z.X)(a.contextCollection.name) + "\x3c/a\x3e\x3c/li\x3e" : '\x3cli class\x3d"post-meta-item post-meta-author"\x3e' + (0,z.si)({user:a.post.creator, Ia:"post-author"}) + "\x3c/li\x3e") + (c.variants.can_see_reading_time && a.post.virtuals.readingTime ? '\x3cli class\x3d"post-meta-item post-meta-reading-time"\x3e' + (c.isAuthenticated && a.post.latestPublishedVersion ? (0,z.wi)({postId:a.post.id, 
  isOnReadingList:a.post.virtuals.isOnReadingList, readingTime:a.post.virtuals.readingTime}, 0, c) : (0,z.vi)(a.post.virtuals)) + "\x3c/li\x3e" : "") + "\x3c/ul\x3e") + '\x3ch1 itemprop\x3d"name" class\x3d"post-title"\x3e' + (0,z.X)(a.post.title) + "\x3c/h1\x3e" + ("edit" == a.mode || a.post.content.subtitle ? '\x3ch2 class\x3d"post-field subtitle"\x3e' + (0,z.X)(a.post.content.subtitle) + "\x3c/h2\x3e" : "") + "\x3c/header\x3e") + '\x3cdiv class\x3d"post-content"\x3e\x3cdiv class\x3d"post-content-inner"\x3e\x3cdiv class\x3d"post-field body notes-source"\x3e' + 
  (0,z.$h)(a.post.content.body) + '\x3c/div\x3e\x3cdiv class\x3d"post-follow-ups post-supplemental"\x3e\x3c/div\x3e';
  if("edit" != a.mode) {
    d = "";
    a.post.latestPublishedVersion && (d += '\x3cbutton class\x3d"btn btn-primary recommend-button no-user-select' + (0 < a.post.vote ? " active" : "") + '"', d = c.isAuthenticated ? d + ('data-action\x3d"' + (0,z.Y)(c.useragent.supportsInteract && c.variants.can_vote ? 0 < a.post.vote ? "unvote" : "upvote" : "disabled") + '" data-action-value\x3d"' + (0,z.Y)(a.post.id) + '"') : d + ('data-action\x3d"sign-in-prompt" data-redirect\x3d"/_/vote/' + (a.post.homeCollection ? (0,z.Y)(a.post.homeCollection.slug) : 
    "p") + "/" + (0,z.Y)(a.post.id) + '" data-requires-token\x3d"true" data-popover-type\x3d"sign-in" data-popover\x3d"Sign in to recommend" data-popover-position\x3d"bottom" data-popover-signin-action\x3d"recommend"'), d += 'title\x3d"Recommend this post"\x3e' + (c.variants.recommend_as_heart ? '\x3cspan class\x3d"icons icons-heart"\x3e\x3c/span\x3e' : '\x3cspan class\x3d"icons icons-solid-check"\x3e\x3c/span\x3e\x3cspan class\x3d"recommend-button-label" data-suffix\x3d"ed"\x3eRecommend\x3c/span\x3e') + 
    '\x3c/button\x3e\x3cdiv class\x3d"recommend-button-meta"\x3e\x3c/div\x3e');
    d = '\x3cdiv class\x3d"post-footer-actions post-supplemental"\x3e\x3cdiv class\x3d"btn-set"\x3e' + d + '\x3cdiv class\x3d"post-footer-secondary-actions"\x3e' + (a.post.latestPublishedVersion ? '\x3ca class\x3d"btn btn-chromeless" title\x3d"Share this post on Twitter" data-action\x3d"share-on-twitter" data-action-value\x3d"' + (0,z.Y)(a.post.id) + '"\x3e\x3ci class\x3d"icons icons-twitter icons-twitter-dark"\x3e\x3c/i\x3e\x3c/a\x3e' + (c.variants.can_share_to_facebook ? '\x3ca class\x3d"btn btn-chromeless" title\x3d"Share this post on Facebook" data-action\x3d"share-on-facebook" data-action-value\x3d"' + 
    (0,z.Y)(a.post.id) + '"\x3e\x3ci class\x3d"icons icons-facebook"\x3e\x3c/i\x3e\x3c/a\x3e' : "") : "") + (c.isAuthenticated && c.variants.can_cross_post && a.post.latestPublishedVersion ? '\x3ca class\x3d"btn btn-chromeless" data-action\x3d"crosspost-to-collection" data-action-value\x3d"' + (0,z.Y)(a.post.id) + '" title\x3d"Add this post to an additional collection"\x3e\x3ci class\x3d"icons icons-add-to-collection"\x3e\x3c/i\x3e\x3c/a\x3e' : "") + "\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e";
    e = "";
    if(1 <= a.post.virtuals.postedIn.length && !a.contextCollection || 2 <= a.post.virtuals.postedIn.length) {
      for(var e = e + ('\x3cdiv class\x3d"other-collections post-supplemental"\x3e\x3ch4 class\x3d"title"\x3e' + (a.contextCollection ? "Also found in" : "Found in") + '\x3c/h4\x3e\x3cul class\x3d"other-collections-list"\x3e'), f = a.post.virtuals.postedIn, h = f.length, k = 0;k < h;k++) {
        var p = f[k], e = e + (!a.contextCollection || p.collection.id != a.contextCollection.id ? '\x3cli class\x3d"other-collections-item"\x3e' + (0,z.ui)({collection:p.collection, Ia:"other-collections-link", kd:"stat-link", ld:"post-discovery.collection." + (0,z.X)(k)}) + "\x3c/li\x3e" : "")
      }
      e += "\x3c/ul\x3e\x3c/div\x3e"
    }
    c = d + e + '\x3cdiv class\x3d"post-author-bottom post-supplemental"\x3e' + (0,z.Ei)(a, c) + "\x3c/div\x3e"
  }else {
    c = ""
  }
  return b + c + "\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/section\x3e" + ("edit" != a.mode ? '\x3cfooter class\x3d"post-footer post-supplemental"\x3e\x3c/footer\x3e' : "") + "\x3c/article\x3e"
};
z.Fi = function(a, b) {
  var c = "";
  if("edit" == a.mode || a.image.imageId) {
    var d = (0,z.ki)((0,z.Gh)(a.image, {ym:"t"}), 0, b), c = c + ('\x3cdiv class\x3d"post-field image image-picker-wrap ' + (a.image.backgroundSize ? " background-size-" + (0,z.Y)(a.image.backgroundSize) : "") + '" data-url\x3d"' + (0,z.Y)((0,z.Yh)(d)) + '" data-id\x3d"' + (a.image.imageId ? (0,z.Y)(a.image.imageId) : "") + '" data-image-style\x3d"' + (0,z.Y)(a.image.backgroundSize) + '" data-width\x3d"' + (0,z.Y)(a.image.originalWidth) + '" data-height\x3d"' + (0,z.Y)(a.image.originalHeight) + '"\x3e\x3cdiv class\x3d"post-header-image-wrap" data-load-img\x3d".post-header-image-cover"\x3e');
    "edit" == a.mode ? c += '\x3cdiv class\x3d"cover-edit"\x3e' + (0,z.Gi)() + '\x3cimg class\x3d"cover-picker-target post-header-image-cover" src\x3d"' + (0,z.Y)((0,z.Yh)(d)) + '"\x3e\x3c/div\x3e\x3cdiv class\x3d"contain-edit"\x3e\x3cimg class\x3d"picker-target post-header-image-contain" src\x3d"' + (0,z.Y)((0,z.Yh)(d)) + '" ' + (!a.image.imageId ? 'style\x3d"display: none"' : "") + "\x3e\x3c/div\x3e" : (c += '\x3cdiv class\x3d"post-preview"\x3e\x3cdiv class\x3d"post-preview-content post-content"\x3e\x3cdiv class\x3d"post-preview-description"\x3eRead next\x3c/div\x3e\x3ch3 class\x3d"post-preview-title"\x3e' + 
    (0,z.X)(a.post.title) + '\x3c/h3\x3e\x3ch4 class\x3d"post-preview-subtitle"\x3e' + (0,z.X)(a.post.virtuals.draftSnippet) + "\x3c/h4\x3e" + (0,z.xi)((0,z.Gh)(a, {Pd:z.m, HC:z.m}), b) + "\x3c/div\x3e\x3c/div\x3e", "cover" == a.image.backgroundSize ? c += (0,z.Gi)() + '\x3cimg class\x3d"post-header-image-cover" src\x3d"' + (0,z.Y)((0,z.Yh)(d)) + '"\x3e' : (c += '\x3cimg class\x3d"post-header-image-contain" src\x3d"' + (0,z.Y)((0,z.Yh)(d)) + '" alt\x3d"' + (a.post.content ? (0,z.Y)(a.post.content.caption) : 
    "") + '"  ', a.image.originalWidth && "contain" == a.image.backgroundSize && (d = b.postColumnWidth * a.image.originalHeight / a.image.originalWidth, c += 'width\x3d"' + (0,z.Y)(b.postColumnWidth) + '" height\x3d"' + (0,z.Y)(d) + '"'), c += "\x3e"));
    c += "\x3c/div\x3e" + ("edit" == a.mode || a.post.content && a.post.content.caption ? '\x3cdiv class\x3d"post-field caption" data-action\x3d"dummy"\x3e' + (0,z.X)(a.post.content.caption) + "\x3c/div\x3e" : "") + ("edit" == a.mode ? '\x3cbutton class\x3d"btn-chromeless btn-replace-image" data-action\x3d"pick-image"\x3e\x3cspan class\x3d"icons icons-replace-image" data-tooltip\x3d"Add optional feature image"\x3e\x3c/span\x3e\x3cspan class\x3d"screen-reader-text"\x3eAdd optional feature image\x3c/span\x3e\x3c/button\x3e\x3cdiv class\x3d"replace-image-message" data-action\x3d"pick-image"\x3e\x3cspan class\x3d"icons icons-replace-image"\x3e\x3c/span\x3e\x3cspan class\x3d"message"\x3eDrag‘n drop or click to replace image\x3c/span\x3e\x3c/div\x3e\x3cdiv class\x3d"upload-feedback" data-action\x3d"dummy"\x3e\x3cdiv class\x3d"upload-feedback-preview"\x3e\x3c/div\x3e\x3cdiv class\x3d"upload-feedback-inner"\x3e\x3cdiv class\x3d"progress-bar-wrap"\x3e\x3cdiv class\x3d"progress-bar"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv data-action\x3d"cancel-upload" class\x3d"cancel-button no-user-select"\x3e\x26#215;\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cbutton class\x3d"remove-header-image btn-chromeless icons icons-remove" data-action\x3d"remove-image"\x3e\x3c/button\x3e' + 
    (b.variants.full_width_flex_template ? '\x3cbutton class\x3d"resize-header-image btn-chromeless" data-action\x3d"toggle-background-size"\x3e\x3cspan class\x3d"icons icons-enlarge enlarge-btn"\x3e\x3c/span\x3e\x3cspan class\x3d"icons icons-shrink shrink-btn"\x3e\x3c/span\x3e\x3c/button\x3e' : "") : "") + "\x3c/div\x3e"
  }
  return c
};
z.Hi = function(a, b, c) {
  b = "" + ('\x3cdiv class\x3d"popover-upvotes popover-static popover-small popover-right ' + (3 < a.count ? "fade" : "") + '" data-count\x3d"' + (0,z.Y)(a.count) + '"\x3e' + (0,z.Ci)({wm:a.count}) + '\x3c/div\x3e\x3cul class\x3d"upvoters ' + (a.count ? "fade" : "") + '"\x3e');
  for(var d = window.Math.min(a.count, 3), e = 0;e < d;e++) {
    b += '\x3cli class\x3d"upvoters-item"\x3e' + (0,z.yi)({user:a.users[e], Ia:"avatar-chromeless avatar-icon"}, c) + "\x3c/li\x3e"
  }
  return b + "\x3c/ul\x3e"
};
z.Ii = function(a, b, c) {
  b = '\x3cdiv class\x3d"recommended-posts post-footer-section"\x3e\x3cdiv class\x3d"post-content"\x3e\x3ch4 class\x3d"title"\x3eRecommended Posts on ' + (0,z.X)(c.productName) + "\x3c/h4\x3e\x3cul\x3e";
  a = a.recommendations;
  c = a.length;
  for(var d = 0;d < c;d++) {
    var e = a[d], f = (0,z.mi)({post:e.post, collection:e.post.homeCollection});
    b += '\x3cli class\x3d"recommended-post"\x3e\x3cspan class\x3d"recommended-post-title"\x3e\x3ca href\x3d"' + (0,z.Y)((0,z.Yh)(f)) + '" data-action\x3d"stat-link" title\x3d"' + (0,z.Y)(e.post.title) + '" data-action-value\x3d"post-discovery.recommended.title.' + (0,z.Y)(d) + "." + (0,z.Y)(e.source) + '"\x3e' + (0,z.X)(e.post.title) + "\x3c/a\x3e\x3c/span\x3e" + (0,z.si)({user:e.post.creator, Ia:"recommended-post-author", kd:"stat-link", ld:"post-discovery.recommended.author." + (0,z.X)(d) + "." + 
    (0,z.X)(e.source)}) + "\x3c/li\x3e"
  }
  return b + "\x3c/ul\x3e\x3c/div\x3e\x3c/div\x3e"
};
z.Ji = function(a) {
  var b = (0,z.Gh)(a, {index:0}), c = "", d = b.recommendations[b.index].post;
  (0,z.mi)({post:d});
  c += '\x3cdiv class\x3d"read-next-primary"\x3e\x3cdiv class\x3d"read-next-header"\x3e' + (0,z.Ki)((0,z.Gh)(b, {content:"Read Next", Ia:"read-next-prompt"})) + '\x3c/div\x3e\x3cdiv class\x3d"post-content"\x3e\x3ch1 class\x3d"read-next-title"\x3e' + (0,z.Ki)((0,z.Gh)(b, {Ia:"read-next-title-link"})) + '\x3c/h1\x3e\x3cdiv class\x3d"read-next-meta"\x3e' + (0,z.Li)(b) + "\x3c/div\x3e" + (d.virtuals.snippet ? "\x3cdiv class \x3d 'read-next-snippet'\x3e" + (0,z.Ki)((0,z.Gh)(b, {content:d.virtuals.snippet, 
  Ia:"read-next-snippet-content"})) + (0,z.Ki)((0,z.Gh)(b, {content:"Continue reading", Ia:"read-next-snippet-prompt"})) + "\x3c/div\x3e" : "") + "\x3c/div\x3e\x3c/div\x3e";
  return'\x3cdiv class\x3d"read-next"\x3e' + c + (3 <= a.recommendations.length ? '\x3cdiv class\x3d"read-next-secondary-posts"\x3e\x3cdiv class\x3d"post-content"\x3e' + (0,z.Mi)((0,z.Gh)(a, {index:1})) + (0,z.Mi)((0,z.Gh)(a, {index:2})) + "\x3c/div\x3e\x3c/div\x3e" : "") + "\x3c/div\x3e"
};
z.Mi = function(a) {
  var b = "";
  (0,z.mi)({post:a.recommendations[a.index].post});
  return b += '\x3cdiv class\x3d"read-next-secondary"\x3e' + (0,z.Ki)((0,z.Gh)(a, {Ia:"read-next-secondary-title"})) + '\x3cdiv class\x3d"read-next-secondary-source"\x3e' + (0,z.Li)(a) + "\x3c/div\x3e\x3c/div\x3e"
};
z.Li = function(a) {
  var b = a.recommendations[a.index].post;
  return a = "" + ((0,z.si)({user:b.creator, Ia:"read-next-meta-link", kd:"stat-link", ld:(0,z.Ni)((0,z.Gh)(a, {target:"profile"}))}) + (b.homeCollection ? " in " + (0,z.ui)({collection:b.homeCollection, Ia:"read-next-meta-link", kd:"stat-link", ld:(0,z.Ni)((0,z.Gh)(a, {target:"collection"}))}) : ""))
};
z.Ki = function(a) {
  var b = a.recommendations[a.index].post, c = b.title ? b.title : "Untitled", d = "", b = '\x3ca href\x3d"' + (0,z.mi)({post:b}) + '" title\x3d"' + (0,z.Y)(c) + '"' + (a.Ia ? ' class\x3d"' + (0,z.Y)(a.Ia) + '"' : "") + ' data-id\x3d"' + (0,z.Y)(b.id) + '" ', e;
  e = (0,z.Gh)(a, {target:"post"});
  e = 'data-action\x3d"stat-link" data-action-value\x3d"' + ("post-discovery.recommended." + (0,z.Y)(e.target) + "." + (0,z.Y)(e.index) + "." + (0,z.Y)(e.recommendations[e.index].source)) + '"';
  return a = d + (b + e + ' data-source\x3d"related" \x3e' + (a.content ? (0,z.X)(a.content) : (0,z.X)(c)) + "\x3c/a\x3e")
};
z.Ni = function(a) {
  return"post-discovery.recommended." + (0,z.X)(a.target) + "." + (0,z.X)(a.index) + "." + (0,z.X)(a.recommendations[a.index].source)
};
z.Ei = function(a, b) {
  var c = '\x3cdiv class\x3d"post-author-card"\x3e' + (0,z.zi)((0,z.Gh)({user:a.post.creator, Ia:"post-author-image", kd:"stat-link", ld:"post-discovery.author.image"}, {width:190, height:190}), b) + '\x3cdiv class\x3d"post-author-info"\x3e' + (0,z.si)({user:a.post.creator, Ia:"post-author-name", kd:"stat-link", ld:"post-discovery.author.name", rel:"author"}) + "\x3cp\x3e" + (a.post.creator.virtuals.bioHTML && "null" != a.post.creator.virtuals.bioHTML ? (0,z.$h)(a.post.creator.virtuals.bioHTML) : 
  "") + '\x3cp\x3e\x3c/div\x3e\x3cdiv class\x3d"post-published-date"\x3e' + (a.post.firstPublishedAt || a.post.latestPublishedVersion ? a.post.latestPublishedAt > a.post.firstPublishedAt && a.post.virtuals.latestPublishedAtEnglish != a.post.virtuals.firstPublishedAtEnglish ? '\x3cstrong data-tooltip\x3d"Originally published ' + (0,z.Y)(a.post.virtuals.firstPublishedAtEnglish) + '"\x3eUpdated\x3c/strong\x3e' : "\x3cstrong\x3ePublished\x3c/strong\x3e" : "\x3cstrong\x3eDraft\x3c/strong\x3e") + '\x3c/strong\x3e\x3cp\x3e\x3ctime class\x3d"post-date"\x3e' + 
  (a.post.latestPublishedAt > a.post.firstPublishedAt && a.post.latestPublishedAt ? (0,z.X)(a.post.virtuals.latestPublishedAtEnglish) : a.post.firstPublishedAt ? (0,z.X)(a.post.virtuals.firstPublishedAtEnglish) : a.post.createdAt ? (0,z.X)(a.post.virtuals.createdAtEnglish) : "") + "\x3c/time\x3e\x3c/p\x3e\x3c/div\x3e";
  if(a.collaborators && a.collaborators.length) {
    for(var c = c + ('\x3cdiv class\x3d"post-collaborators"\x3e\x3cstrong class\x3d"post-collaborators-title" data-tooltip\x3d"The following people helped ' + (0,z.Y)(a.post.creator.name) + ' with this post by adding notes to provide feedback before the post was published."\x3eThanks to\x3c/strong\x3e\x3cul class\x3d"post-collaborators-list"\x3e'), d = a.collaborators, e = d.length, f = 0;f < e;f++) {
      var h = d[f], c = c + ('\x3cli class\x3d"post-collaborator-' + (0,z.Y)(h.state) + '"\x3e'), c = c + ('\x3ca class\x3d"post-collaborator-link' + (0,z.Y)("dnf" == h.user.username ? " post-collaborator-throb" : "") + '" href\x3d"/@' + (0,z.Y)(h.user.username) + '"\x3e' + (0,z.X)(h.user.name) + "\x3c/a\x3e" + (a.post.creator.userId == b.currentUser.userId ? "hidden-author" == h.state ? '\x3cbutton class\x3d"btn btn-chromeless" data-action\x3d"show-collaborator" data-action-value\x3d"' + (0,z.Y)(h.user.userId) + 
      '"\x3e(show)\x3c/button\x3e' : "visible" == h.state ? '\x3cbutton class\x3d"btn btn-chromeless" data-action\x3d"hide-collaborator" data-action-value\x3d"' + (0,z.Y)(h.user.userId) + '"\x3e(hide)\x3c/button\x3e' : '\x3cspan class\x3d"post-collaborator-decline"\x3e(declined)\x3c/span\x3e' : h.user.userId == b.currentUser.userId ? "hidden-collab" == h.state ? '\x3cbutton class\x3d"btn btn-chromeless" data-action\x3d"show-collaborator" data-action-value\x3d"' + (0,z.Y)(h.user.userId) + '"\x3e(show)\x3c/button\x3e' : 
      "visible" == h.state ? '\x3cbutton class\x3d"btn btn-chromeless" data-action\x3d"hide-collaborator" data-action-value\x3d"' + (0,z.Y)(h.user.userId) + '"\x3e(hide)\x3c/button\x3e' : "" : "") + "\x3c/li\x3e")
    }
    c += "\x3c/ul\x3e\x3c/div\x3e"
  }
  return c + "\x3c/div\x3e"
};
z.Gi = function() {
  return'\x3cimg class\x3d"post-header-image-aspect-ratio" src\x3d"data:image/gif;base64,R0lGODlhMgAVAPAAAP///wAAACH5BAEAAAAALAAAAAAyABUAAAIfhI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8dTAQA7"\x3e'
};
z.Oi = function(a) {
  return'\x3cdiv class\x3d"post-to-post" data-action\x3d"next-post"\x3e\x3cspan class\x3d"icons icons-read-next post-to-post-icon"\x3e\x3c/span\x3e\x3cdiv class\x3d"post-to-post-preview"\x3e\x3cdiv class\x3d"post-content"\x3e\x3cdiv class\x3d"post-to-post-reason"\x3eRead next\x3c/div\x3e\x3cdiv class\x3d"post-to-post-title"\x3e' + (0,z.X)(a.post.title) + "\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e"
};
z.Pi = function(a, b, c) {
  return'\x3cdiv class\x3d"footer-post-preview post-preview-enabled" data-action\x3d"next-post"\x3e' + (0,z.Fi)((0,z.Gh)(a, {image:a.post.virtuals.previewImage}), c) + "\x3c/div\x3e"
};
z.Qi = function(a, b, c, d) {
  z.pi.call(this, a, c, d);
  this.qf = b
};
z.Ri = function(a, b, c, d) {
  z.pi.call(this, a, c, d);
  this.qf = b
};
z.Si = function(a) {
  var b = a.contentWindow || (0,z.Mc)(a).parentWindow || (0,z.Mc)(a).defaultView;
  if(b && b.document && b.document.body) {
    a = a.style;
    var c = (0,z.jc)(b).Bb(), b = c.document, d = 0;
    if(b) {
      var c = (0,z.rc)(c).height, d = b.body, e = b.documentElement;
      if((0,z.sc)(b) && e.scrollHeight) {
        d = e.scrollHeight != c ? e.scrollHeight : e.offsetHeight
      }else {
        var b = e.scrollHeight, f = e.offsetHeight;
        e.clientHeight != f && (b = d.scrollHeight, f = d.offsetHeight);
        d = b > c ? b > f ? b : f : b < f ? b : f
      }
    }
    a.height = d + "px"
  }
};
z.Ti = function(a, b) {
  var c = a.name;
  (0,z.ej)(["_trackEvent", "Event", c]);
  (0,z.fj)(["record", c, (0,z.pb)(b)]);
  (0,z.gj)(a, b)
};
z.hj = function(a, b) {
  z.ij[a] = b
};
z.gj = function(a, b) {
  var c = a.name, d;
  for(d in z.ij) {
    var e = z.ij[d];
    b[d] = "function" == typeof e ? e() : e
  }
  (0,z.jj)({type:"e", key:c, data:b})
};
z.kj = function(a) {
  a = "string" === typeof a ? a : a.name;
  (0,z.jj)({type:"i", key:a});
  (0,z.ej)(["_trackEvent", "Impression", a])
};
z.lj = function(a, b) {
  b = window.Math.max(0, b);
  3E4 < b || ((0,z.jj)({type:"t", key:a, value:b}), (0,z.ej)(["_trackEvent", "Timer", a, z.n, b, z.m]))
};
z.jj = function(a) {
  a.timestamp = window.Date.now();
  a.eventId = window.Date.now().toString(36) + window.Math.round(1E16 * window.Math.random()).toString(36);
  (0,z.qg)(z.mj, a)
};
z.nj = function(a) {
  z.mj = a
};
z.ej = function(a) {
  (0,z.Q)("variants.dont_track_user") || window._gaq && window._gaq.push(a)
};
z.fj = function(a) {
  (0,z.Q)("variants.dont_track_user") || window._kmq && window._kmq.push(a)
};
z.oj = function(a, b, c) {
  var d;
  a: {
    switch(a) {
      case z.pj:
        d = "page-type";
        break a;
      case 2:
        d = "user";
        break a
    }
    d = "unknown"
  }
  (0,z.ej)(["_setCustomVar", a, d, b, c || 3])
};
z.qj = function(a, b, c) {
  function d() {
    function d() {
      e = z.n;
      b.apply(k, h)
    }
    var h = arguments, k = c || this;
    (0,window.clearTimeout)(e);
    k instanceof z.Hd && k.Gf || (e = (0,window.setTimeout)(d, a))
  }
  var e;
  d.cancel = function() {
    (0,window.clearTimeout)(e);
    e = z.n
  };
  return d
};
z.rj = function(a, b, c) {
  var d = -window.Infinity;
  return function() {
    var e = c || this;
    if(!(e instanceof z.Hd && e.Gf)) {
      var f = window.Date.now();
      f - d >= a && (b.apply(e, arguments), d = f)
    }
  }
};
z.sj = function(a, b) {
  (0,window.setTimeout)(function() {
    a.call(b)
  }, 0)
};
z.tj = function(a) {
  var b = new z.vb;
  (0,window.setTimeout)(b.Ga.bind(b, z.m), a);
  return b
};
z.uj = function(a) {
  z.ng.call(this);
  this.wu = window.innerWidth;
  this.vu = window.innerHeight;
  this.Z = a.get("app");
  this.Us = -window.Infinity;
  this.Gc = z.n;
  this.WA = (0,z.T)(window, "resize", this.Tz, this);
  this.Z.h(z.vj, this.ug, this)
};
z.wj = function(a) {
  this.eB = a
};
z.xj = function(a) {
  this.$A = a
};
z.yj = function(a) {
  this.D = a;
  this.ou = z.zj;
  this.Jr = z.n
};
z.zj = function(a, b) {
  if(!b) {
    return a.style.display = "none", a.style.visibility = "hidden", z.n
  }
  b.style.display = "block";
  b.style.visibility = "visible";
  a && (a.style.visibility = "hidden");
  a && (a.style.display = "none");
  return z.n
};
z.Aj = function(a, b) {
  var c = "_obv.shell._surface_" + z.Bj++, d = (0,z.Xc)("div", {id:c, "class":"surface"});
  a.ou(d, z.n);
  (0,z.Vc)(a.D, d);
  (0,z.Vc)(d, b);
  return c
};
z.Cj = function(a, b, c) {
  z.$g.call(this);
  this.Rn = a;
  this.t = b;
  this.Gx = c || window.document.title;
  this.Xt = this.Kl = this.vh = this.ad = this.hb = z.n;
  this.nb = {};
  this.cm = new z.yj(window.document.getElementById("container"));
  this.Yt = {};
  this.np = [];
  this.Nn = [];
  this.Sk = z.n;
  window.setInterval(this.XA.bind(this), z.Dj)
};
z.Ej = function(a, b) {
  a.Xt = b;
  return a
};
z.Fj = function(a, b) {
  a.np.push(b);
  return a
};
z.Gj = function(a) {
  a.Nn.push(/^\/r\/?$/);
  return a
};
z.Hj = function(a) {
  var b = !!(0,z.Q)("useragent.requiresBodyScroll");
  a.em = b;
  return a
};
z.Ij = function(a) {
  return a.hb
};
z.Jj = function(a, b, c) {
  c = c || {};
  return!!a.nb[b] && a.nb[b].Hd.Pf(b, c, a.nb[b])
};
z.Kj = function(a, b) {
  a.vh.hash != b && (a.vh.hash = b, (0,z.Lj)(a, a.hb.Qc(), a.ad, a.vh, z.m))
};
z.Mj = function(a, b, c, d, e) {
  var f = b.path;
  a.F("startNav", f, c);
  if(!e && f == a.ad) {
    return b.hash ? ((0,z.Kj)(a, b.hash), a.F("historyUpdate"), (0,z.H)((0,z.Hb)(a.hb), a.xj.bind(a, z.vj, f, z.m))) : (0,z.H)((0,z.Jb)(), a.xj.bind(a, z.vj, f, z.s))
  }
  var h = c || {};
  h.hash = b.hash || h.hash || "";
  h.kk = h.kk || a.ad;
  h.wn = h.wn || z.n;
  b = a.hb && a.hb.pm();
  "string" == typeof b && (b = !(0,window.confirm)(b));
  if(b) {
    return(0,z.H)((0,z.Jb)(), a.xj.bind(a, z.vj, f, z.s))
  }
  b = z.n;
  if(b = (0,z.Nj)(a, f, h)) {
    b = (0,z.Hb)(b)
  }else {
    if(b = (0,z.Oj)(a, f)) {
      b = (0,z.Kb)(b.factory.create(a.t, b.Zm, h), function(a) {
        a.rr = (0,z.Aj)(this.cm, a.Gm())
      }, a)
    }else {
      return b = new z.Pj(f), a.F(z.vj, f, z.s, b), (0,z.Ib)(b)
    }
  }
  a.Kl && (a.Kl.cancel(), a.Kl = z.n);
  a.Pt();
  var k = new z.vb;
  (0,z.G)(b, function(a) {
    var b = a.ke();
    b ? ((0,z.G)(b, this.su.bind(this, a, h.wn)), (0,z.H)(b, this.vy.bind(this, f, a))) : b = this.su(a, h.wn);
    this.Kl = b;
    (0,z.G)(b, function() {
      (0,z.Lj)(this, a.Qc(), f, h, !!d)
    }, this);
    (0,z.G)(b, this.IB.bind(this, h, a));
    (0,z.G)(b, this.Xx.bind(this, f, h, a));
    (0,z.G)(b, this.xj.bind(this, z.vj, f, z.m));
    (0,z.H)(b, this.xj.bind(this, z.vj, f, z.s));
    b.Bf(k)
  }, a);
  (0,z.H)(b, k.If, k);
  return k
};
z.Qj = function(a, b, c) {
  var d = new z.vb;
  z.Rj ? (0,z.sj)(function() {
    (0,z.yd)(a, b, c);
    d.Ga(z.n)
  }) : ((0,z.yd)(a, b, c), d.Ga(z.n));
  return d
};
z.Lj = function(a, b, c, d, e) {
  b = b || a.Gx;
  d.Bq || (d.Bq = "h" + window.Date.now());
  var f = {path:c, isNavigate:z.m, data:window.JSON.stringify(d)};
  c = (a.Rn + c).replace("//", "/");
  var h;
  if(h = window.location.search) {
    "?" == h.charAt(0) && (h = h.substr(1));
    h = new z.rh(h);
    for(var k = h.Kf(), p = 0;p < k.length;p++) {
      for(var q = 0;q < a.np.length;q++) {
        var z$ = k[p], U = a.np[q];
        if("string" == typeof U && z$ == U || U.test && U.test(z$)) {
          h.remove(z$);
          break
        }
      }
    }
    h = h.Mm() ? "" : "?" + h.toString()
  }else {
    h = ""
  }
  c += h;
  d.hash && (c += "#" + d.hash);
  if(z.Sj) {
    try {
      e ? window.history.replaceState(f, b, c) : window.history.pushState(f, b, c)
    }catch(F) {
      (0,z.Og)(F)
    }
  }
  window.document.title = b;
  a.eo = d.Bq
};
z.Tj = function(a, b, c) {
  try {
    c.Wa.call(c)
  }catch(d) {
    (0,z.Og)(d)
  }
  delete a.nb[b];
  a.cm.remove(c.rr)
};
z.Uj = function(a) {
  a = a.split("#");
  return{path:a[0], hash:a[1] || ""}
};
z.Oj = function(a, b) {
  var c;
  var d;
  c = a.Xt.Lt;
  var e = b.replace(/(^\/|\/$)/g, "").split("/");
  c = c.Fw;
  var f = z.n, h = [];
  d = [];
  for(var k = 0;k < e.length;k++) {
    var p = e[k], q = z.s;
    c["*"] && (f = c["*"], h = []);
    c[p] && (c = c[p], q = z.m);
    if(!q && c["@"]) {
      for(var z$ in c["@"]) {
        if("parent" != z$) {
          var U = c["@"][z$];
          if(U.JD.test(p)) {
            c = U;
            d.push(p);
            q = z.m;
            break
          }
        }
      }
    }
    !q && c[":"] && (c = c[":"], q = z.m, d.push(p));
    if(!q) {
      c = c["*"] || f || z.n;
      h = h.concat(e.slice(k));
      break
    }
    f && h.push(p)
  }
  if(!c || !c.object && f) {
    c = f
  }
  if(c && c.object) {
    e = {};
    f == c && (e["*"] = h);
    for(f = 0;f < c.matches.length;f++) {
      e[c.matches[f]] = d[f]
    }
    d = {object:c.object, matches:e}
  }else {
    d = z.n
  }
  c = d && d.object;
  !c || !c.screen ? c = z.n : (d = d.matches, d.path = b, c = {screen:c.screen, Zm:d});
  if(!c) {
    return z.n
  }
  d = c.screen;
  return{Zm:c.Zm, factory:"string" === typeof d ? new z.wj(d) : new z.xj(d)}
};
z.Nj = function(a, b, c) {
  var d = z.n;
  (0,z.Jj)(a, b, c) ? d = a.nb[b] : a.nb[b] && (0,z.Tj)(a, b, a.nb[b]);
  return d
};
z.Vj = function(a, b, c) {
  c = c || {};
  b = (0,z.Uj)(b).path;
  if(b == a.ad) {
    return(0,z.Hb)(a.hb)
  }
  var d = (0,z.Nj)(a, b, c);
  return d ? (0,z.Hb)(d) : (d = (0,z.Oj)(a, b)) ? (c = d.factory.create(a.t, d.Zm, c), (0,z.Kb)(c, function(a) {
    a.rr = (0,z.Aj)(this.cm, a.Gm());
    a.Hd = new z.Bd(a.Hd);
    this.nb[b] = a
  }, a)) : (0,z.Ib)((0,window.Error)("No screen or factory for " + b))
};
z.Pj = function(a) {
  this.path = a
};
z.Wj = function(a) {
  this.t = a;
  this.Li = z.n
};
z.Xj = function(a, b, c) {
  return function(a) {
    (0,z.Pg)(a) || (c || (0,z.Og)(a), this.open({title:"Uh oh!", jc:b, type:z.Yj}))
  }.bind(a)
};
z.Zj = function(a, b, c) {
  z.$g.call(this);
  this.t = a;
  this.$i = !!c;
  a = window.document.createElement("div");
  a.innerHTML = (0,z.Bi)(b);
  this.D = a.children[0];
  this.J = this.D.getElementsByClassName("overlay-dialog")[0];
  (0,z.T)(this.D, "click", function(a) {
    a.target === this.D && this.close()
  }, this);
  this.t.get("app").h(z.vj, this.close, this);
  (0,z.ag)(this.D).g("overlay-close", this.close, this).g("overlay-confirm", this.wx, this).g("overlay-cancel", this.ef, this).g("overlay-refresh", this.PA, this)
};
z.ak = function(a, b, c) {
  z.Ld.call(this, a);
  this.t = a;
  this.w = b.postId;
  this.ea = b.collectionSlug;
  this.Z = a.get("app");
  this.Yn = (0,z.Md)(this, "coreactions");
  this.U = a.get("datastore");
  this.fa = a.get("request");
  this.J = a.get("dialog");
  this.Ba = a.get("dom-monitor");
  this.Gj = a.get("twitter");
  this.Ux = a.get("facebook");
  this.aB = a.get("scroll-tracker");
  this.xa = [];
  this.pa = z.n;
  this.Na = (0,z.Md)(this, "butter-bar");
  this.yA = c;
  this.Q = c.wb && this.U.ua[c.wb] ? (0,z.bk)(this.U, c.wb) : this.ea ? (0,z.ck)(this.U, this.ea) : z.n;
  this.Kh = new z.hi(c.kk || this.ea || "", this.Q ? (0,window.String)(this.Q.ki("id")) : "");
  this.ol = this.Ko = z.s
};
z.dk = function(a) {
  return a.Ja.get("creator.userId") == (0,z.Q)("currentUser.userId")
};
z.ek = function(a) {
  if((0,z.Q)("variants.enable_notes")) {
    var b = 500 >= window.innerWidth && (0,z.Q)("variants.enable_mobile_notes") ? "notes-mobile" : "notes";
    (0,z.H)((0,z.G)((0,z.G)((0,z.ji)(a.pa, (0,z.tj)(250)), function() {
      return(0,z.fk)(this.t, b)
    }, a), function(a) {
      this.cd = a.gi(this.Ja, this.eg, (0,z.dk)(this))
    }, a), z.Og)
  }else {
    (0,z.Hb)(z.m)
  }
};
z.gk = function(a) {
  return!(!(0,z.Q)("variants.enable_next_post_in_footer") || !a.Ad() || (0,z.wd)())
};
z.hk = function(a) {
  return a.Ad() ? (0,z.H)((0,z.G)((0,z.G)((0,z.ji)(a.pa, (0,z.tj)(500)), function() {
    return this.fa.get("/p/" + this.w + "/upvotes", {V:z.m, background:z.m})
  }, a), a.eu, a), z.Og) : (0,z.Hb)(z.m)
};
z.ik = function(a) {
  return!a.ol && a.Ad() && (0,z.Q)("variants.can_see_recommended_posts") && !(0,z.gk)(a) ? (0,z.H)((0,z.G)((0,z.G)((0,z.ji)(a.pa, (0,z.tj)(500)), function() {
    return this.fa.get("/" + this.kg() + "/recommended", {V:z.m, background:z.m})
  }, a), a.lB, a), z.Og) : (0,z.Hb)(z.m)
};
z.jk = function(a) {
  a.Z.navigate(a.Kh.Lh, {wb:a.Kh.Rb})
};
z.kk = function(a) {
  a.Kg.set("count", (0,z.eh)(a.Kg, "count") + (a.Ja.get("vote") ? 1 : -1));
  a.Kg.set("users", (0,z.lk)(a, a.Kg.get("users")));
  a.eu()
};
z.lk = function(a, b) {
  var c = (0,z.Q)("currentUser");
  c && (b = b.filter(function(a) {
    return a.userId != c.userId
  }), a.Ja.get("vote") && b.unshift(c));
  return b
};
z.mk = function() {
  var a = window.document.getElementById("temp-experimental-css");
  a && (0,z.P)(a)
};
z.nk = function(a) {
  this.Ro = a;
  this.nb = {}
};
z.ok = function(a, b, c) {
  return'\x3cdiv class\x3d"bucket post-bucket' + (a.className ? " " + (0,z.Y)(a.className) : "") + '"\x3e' + (0,z.pk)(a, c) + (0,z.qk)(a, 0, c) + "\x3c/div\x3e"
};
z.qk = function(a, b, c) {
  b = "";
  var d = a.posts, e = d.length;
  if(0 < e) {
    for(var f = 0;f < e;f++) {
      var h = d[f];
      b += !a.Iv || f < a.Iv ? (0,z.Kh)("e", a.cw)((0,z.Gh)(a, {post:h}), z.n, c) : ""
    }
  }else {
    c = b, a = a || {}, a = '\x3cdiv class\x3d"empty-bucket"\x3e\x3ch3 class\x3d"empty-bucket-title"\x3e' + (a.Qg && a.Qg.title ? (0,z.$h)(a.Qg.title) : "There's nothing here yet.") + '\x3c/h3\x3e\x3cp class\x3d"empty-bucket-description"\x3e' + (a.Qg && a.Qg.description ? (0,z.$h)(a.Qg.description) : 'Check out our \x3ca href\x3d"/collections" title\x3d"Go to featured collections"\x3efeatured collections\x3c/a\x3e for good reads.') + "\x3c/p\x3e\x3c/div\x3e", b = c + a
  }
  return b
};
z.rk = function(a, b) {
  for(var c = '\x3cdiv class\x3d"bucket collection-bucket"\x3e' + (0,z.pk)(a, b) + '\x3cdiv class\x3d"bucket-grid"\x3e', d = a.collections, e = d.length, f = 0;f < e;f++) {
    var h = (0,z.Gh)(a, {collection:d[f]}), k = "", p = b.miroUrl + "/max/300/" + h.collection.image.imageId, k = k + ('\x3ca class\x3d"collection-item" href\x3d"/' + (0,z.Y)(h.collection.slug) + '" title\x3d"Go to ' + (0,z.Y)(h.collection.name) + '" style\x3d"background-image:url(' + (0,z.Y)((0,z.Yh)(p)) + ')"\x3e\x3cdiv class\x3d"collection-item-body"\x3e\x3ch3 class\x3d"collection-item-title"\x3e' + (0,z.X)(h.collection.name) + '\x3c/h3\x3e\x3cdiv class\x3d"collection-item-meta"\x3e' + (0,z.X)(h.collection.metadata.postCount) + 
    " post" + (1 != h.collection.metadata.postCount ? "s" : "") + "\x3c/div\x3e\x3c/div\x3e\x3c/a\x3e"), c = c + k
  }
  return c + "\x3c/div\x3e\x3c/div\x3e"
};
z.pk = function(a, b) {
  var c = "";
  if(a.sections.length) {
    for(var c = c + ('\x3cdiv class\x3d"bucket-header' + (1 < a.sections.length ? " bucket-header-list" : "") + (b.variants.show_subtitles ? " show-subtitles-variant" : "") + '"\x3e\x3cnav class\x3d"bucket-sort"\x3e'), d = a.sections, e = d.length, f = 0;f < e;f++) {
      var h = d[f], k = (a.bg ? a.bg : "") + (h.url ? h.url : ""), c = c + ('\x3ch5 class\x3d"bucket-title' + (a.filterBy && a.filterBy == h.filterBy ? " active" : "") + '"\x3e' + (k ? '\x3ca href\x3d"' + (0,z.Y)((0,z.Yh)(k)) + '" title\x3d"' + (0,z.Y)(h.title) + '"\x3e\x3cspan class\x3d"bucket-header-title"\x3e' + (0,z.X)(h.title) + "\x3c/span\x3e " + (1 == a.sections.length ? '\x3cspan class\x3d"bucket-header-chevron"\x3emore \x3cspan class\x3d"icons icons-arrow-right"\x3e\x3c/span\x3e\x3c/span\x3e' : 
      "") + "\x3c/a\x3e" : '\x3cspan class\x3d"no-link"\x3e' + (0,z.X)(h.title) + "\x3c/span\x3e") + "\x3c/h5\x3e")
    }
    c += "\x3c/nav\x3e\x3c/div\x3e"
  }
  return c
};
z.sk = function(a, b) {
  var c = "", d = a.collection ? (0,z.tk)({imageId:a.collection.image.imageId}, b) : "", e = !a.Hf ? !b.useragent.isMobile && !b.useragent.HH ? b.isAuthenticated && a.collection.virtuals.canPost && b.useragent.supportsEdit ? '\x3ca class\x3d"btn ' + (b.variants.enable_subscribe_collection ? "btn-chromeless" : "btn-primary") + ' btn-new-post" data-action\x3d"new-post" data-action-value\x3d"' + (0,z.Y)(a.collection.metadata.postType) + '" title\x3d"Write a new post" href\x3d"/' + (0,z.Y)(a.collection.slug) + 
  '/new-post"\x3e\x3cspan class\x3d"icons icons-new-post"\x3e\x3c/span\x3e\x3c/a\x3e' : b.isAuthenticated && "open" == a.collection.collectionType ? '\x3ca class\x3d"btn" title\x3d"How do I post?" href\x3d"' + (0,z.Y)((0,z.Yh)(b.howToPostUrl)) + '"\x3eHow do I post?\x3c/a\x3e' : "" : "" : "", f = !a.Hf && b.isAuthenticated && b.variants.enable_subscribe_collection ? '\x3cbutton class\x3d"btn btn-follow no-user-select ' + (a.collection.virtuals.isSubscribed ? "active" : "") + '" data-action\x3d"toggle-subscribe-collection"\x3e\x3cspan class\x3d"icons icons-follow"\x3e\x3c/span\x3e\x3cspan class\x3d"follow-label" data-suffix\x3d"ing"\x3eFollow\x3c/span\x3e\x3c/button\x3e' : 
  "", h = !a.Hf && b.isAuthenticated && a.collection.user && b.currentUser.userId == a.collection.user.userId ? '\x3ca class\x3d"btn btn-edit ' + (b.variants.enable_subscribe_collection ? "btn-chromeless" : "") + '" title\x3d"Edit ' + (0,z.Y)(a.collection.name) + '" href\x3d"/' + (0,z.Y)(a.collection.slug) + '/settings"\x3e' + (b.variants.enable_subscribe_collection ? '\x3cspan class\x3d"icons icons-settings"\x3e\x3c/span\x3e' : "Edit") + "\x3c/a\x3e" : "";
  return c += '\x3caside class\x3d"cover cover-collection" data-load-img\x3d".cover-img"\x3e\x3cdiv class\x3d"cover-img" style\x3d"background-image: url(\'' + (0,z.Y)((0,z.Yh)(d)) + "')\"\x3e" + (a.Hf ? '\x3cdiv class\x3d"image-picker-region"\x3e\x3c/div\x3e\x3ca class\x3d"image-controls" data-action\x3d"pick-image" href\x3d"#"\x3e\x3cspan class\x3d"icons icons-replace-image replace-image-button" title\x3d"Replace image" data-action\x3d"pick-image"\x3e\x3c/span\x3e\x3c/a\x3e\x3cdiv class\x3d"upload-feedback"\x3e\x3cdiv class\x3d"progress-bar-wrap"\x3e\x3cdiv class\x3d"progress-bar"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e' : 
  "") + '\x3c/div\x3e\x3cdiv class\x3d"cover-body"\x3e\x3cdiv class\x3d"cover-body-inner"\x3e\x3ch1 class\x3d"cover-title"\x3e' + (a.collection ? (0,z.X)(a.collection.name) : "") + '\x3c/h1\x3e\x3cp class\x3d"cover-description"\x3e' + (a.collection ? (0,z.X)(a.collection.description) : "") + '\x3c/p\x3e\x3cdiv class\x3d"cover-meta"\x3e' + (a.collection && a.collection.user ? "By " + (0,z.si)({user:a.collection.user}) : b.isAuthenticated && a.Hf ? "By " + (0,z.si)({user:b.currentUser}) : "By Unknown User") + 
  (a.collection ? " · " + (0,z.X)(a.collection.metadata.postCount) + " Post" + (1 != a.collection.metadata.postCount ? "s" : "") + (!a.Hf && "open" != a.collection.collectionType ? " · Invite Only" : "") : "") + "\x3c/div\x3e" + (a.Hf || e || f || h ? '\x3cdiv class\x3d"cover-actions ' + (f ? "cover-has-subscribe-action" : "") + '"\x3e' + (a.Hf ? '\x3cbutton class\x3d"btn btn-primary btn-save-settings" data-action\x3d"collection-save"\x3e' + (!a.collection ? "Create" : "Save") + '\x3c/button\x3e\x3ca href\x3d"/' + 
  (a.collection ? (0,z.Y)(a.collection.slug) : "") + '" class\x3d"btn"\x3eCancel\x3c/a\x3e' + (a.collection && 0 == a.collection.metadata.postCount ? '\x3cbutton class\x3d"btn btn-delete" data-action\x3d"collection-delete"\x3eDelete\x3c/button\x3e' : "") : '\x3cdiv class\x3d"cover-primary-actions"\x3e' + (0,z.$h)(f) + '\x3c/div\x3e\x3cdiv class\x3d"cover-secondary-actions"\x3e' + (0,z.$h)(e) + (0,z.$h)(h) + "\x3c/div\x3e") + "\x3c/div\x3e" : "") + "\x3c/div\x3e\x3c/div\x3e\x3c/aside\x3e"
};
z.tk = function(a, b) {
  return(0,z.ki)({imageId:a.imageId, strategy:"resample", width:"1000", mobileWidth:"640"}, 0, b)
};
z.uk = function(a, b, c) {
  b = "";
  var d = c.isAuthenticated && a.collection.virtuals.canPost && c.useragent.supportsEdit ? '\x3ca href\x3d"/' + (0,z.Y)(a.collection.slug) + '/new-post" title\x3d"Create a new post in ' + (0,z.Y)(a.collection.name) + '" class\x3d"btn btn-primary btn-new-post"\x3e\x3cspan class\x3d"icons icons-new-post"\x3e\x3c/span\x3eNew Post\x3c/a\x3e' : 'Check back soon to see new posts in this collection. In the meantime, browse our \x3ca title\x3d"Go home" href\x3d"/"\x3erecommended posts\x3c/a\x3e.', e = "/" + 
  a.collection.slug;
  b += (0,z.sk)(a, c) + '\x3csection class\x3d"wrapper" tabindex\x3d"-1"\x3e\x3cdiv class\x3d"wrapper-section collection-content"\x3e\x3cdiv class\x3d"wrapper-inner"\x3e';
  a.oldestPosts && a.oldestPosts.length ? b += (0,z.ok)((0,z.Gh)(a, {Pd:z.m, posts:a.oldestPosts, bg:e, sections:[], className:"collection-by-oldest"}), 0, c) : a.recommendedPosts && !a.recommendedPosts.length ? b += (0,z.ok)((0,z.Gh)(a, {posts:[], sections:[], Qg:{title:"There’s nothing here… yet.", description:d}}), 0, c) : a.recommendedPosts ? b += (0,z.ok)((0,z.Gh)(a, {Pd:z.m, posts:a.recommendedPosts, bg:e, sections:[{title:"Most Recommended", url:"/recommended"}], className:"collection-by-recommended", 
  source:"recommended"}), 0, c) + (0,z.ok)((0,z.Gh)(a, {posts:a.latestPosts, en:z.m, Pd:z.m, bg:e, sections:[{title:"Latest", url:"/latest"}], className:"collection-by-latest", source:"latest"}), 0, c) : (d = a.filterBy, b += "latest" == a.filterBy ? (0,z.ok)((0,z.Gh)(a, {sections:[{title:"Latest"}], Pd:z.m, source:d}), 0, c) : "oldest" == a.filterBy ? (0,z.ok)((0,z.Gh)(a, {sections:[{title:"By Publication Date"}], Pd:z.m, source:d}), 0, c) : (0,z.ok)((0,z.Gh)(a, {sections:[{title:"Most Recommended"}], 
  Pd:z.m, source:d}), 0, c));
  return b + "\x3c/div\x3e\x3c/div\x3e\x3c/section\x3e"
};
z.vk = function(a, b, c) {
  return'\x3cdiv class\x3d"wrapper-section related-collections"\x3e\x3cdiv class\x3d"wrapper-inner"\x3e' + (0,z.rk)((0,z.Gh)(a, {collections:a.collections, sections:[{title:"Suggested Collections"}]}), c) + "\x3c/div\x3e\x3c/div\x3e"
};
z.wk = function(a) {
  this.X = a;
  this.Ml = this.uj = z.n
};
z.xk = function(a, b) {
  a.uj && (0,z.g)((0,window.Error)("Called populate() before the previous populate() was complete"));
  a.uj = b;
  return a
};
z.yk = function(a, b) {
  a.uj || (0,z.g)((0,window.Error)("Cannot call as() before populate()"));
  a.Ml && (0,z.g)((0,window.Error)("Cannot call as() twice"));
  a.Ml = b;
  return a
};
z.zk = function(a, b) {
  var c = a.X, d;
  b = b || {};
  var e = a.uj.split(".");
  if(c) {
    for(var f = window.Array.isArray(c) ? c : [c];e.length && f.length;) {
      for(var h = e.shift(), k = 0 < e.length, p = [], c = 0;c < f.length;c++) {
        var q = f[c];
        if(k) {
          if(q = q[h], window.Array.isArray(q)) {
            for(d = 0;d < q.length;d++) {
              p.push(q[d])
            }
          }else {
            "object" === typeof q && q && p.push(q)
          }
        }else {
          var z$ = a.Ml || h;
          if(window.Array.isArray(q[h])) {
            for(d = 0;d < q[h].length;d++) {
              b[q[h][d]] && (q[z$][d] = b[q[h][d]])
            }
          }else {
            "string" === typeof q[h] && b[q[h]] && (q[z$] = b[q[h]])
          }
        }
      }
      f = p
    }
  }
  a.uj = a.Ml = z.n
};
z.Ak = function(a, b) {
  (!b || "object" !== typeof b) && (0,z.g)((0,window.Error)("References are now a required argument for autoPopulate()"));
  if(!a) {
    return a
  }
  var c = window.Array.isArray(a);
  if(c && 0 === a.length) {
    return a
  }
  var d;
  d = new z.wk(a);
  var e = c ? a[0].type : a.type, c = c ? a : [a];
  if("Collection" == e) {
    (0,z.zk)((0,z.yk)((0,z.xk)(d, "creatorId"), "user"), b.User)
  }else {
    if("Post" == e) {
      (0,z.zk)((0,z.yk)((0,z.xk)(d, "creatorId"), "creator"), b.User), (0,z.zk)((0,z.yk)((0,z.xk)(d, "homeCollectionId"), "homeCollection"), b.Collection), (0,z.zk)((0,z.yk)((0,z.xk)(d, "virtuals.postedIn.collectionId"), "collection"), b.Collection)
    }else {
      if("RecommendedPost" == e) {
        for(d = c.length - 1;0 <= d;d--) {
          (e = c[d].post) && "object" == typeof e ? (0,z.Ak)(e, b) : (window.console.warn("Missing post data in RecommendedPost for post ID: " + e), c.splice(d, 1))
        }
      }else {
        if("RelatedCollectionReference" == e) {
          (0,z.zk)((0,z.yk)((0,z.xk)(d, "collectionId"), "collection"), b.Collection);
          for(d = 0;d < c.length;d++) {
            (0,z.Ak)(c[d].collection, b)
          }
        }else {
          "FollowUp" == e ? ((0,z.zk)((0,z.yk)((0,z.xk)(d, "value.mediaResourceId"), "mediaResource"), b.MediaResource), (0,z.zk)((0,z.yk)((0,z.xk)(d, "value.creatorId"), "creator"), b.User), (0,z.Ak)(a.value.mediaResource, b)) : "MediaResource" == e && "MediaResourceMediumPost" == a.value.mediaResourceType && ((0,z.zk)((0,z.yk)((0,z.xk)(d, "value.mediumPost.postId"), "post"), b.Post), (0,z.Ak)(a.value.mediumPost.post, b))
        }
      }
    }
  }
  for(d = 0;d < c.length;d++) {
    c[d]._isPopulated = z.m
  }
  return a
};
z.Bk = function(a) {
  a = window.Array.isArray(a) ? a : [a];
  for(var b = 0;b < a.length;b++) {
    if(!a[b]._isPopulated) {
      return z.s
    }
  }
  return z.m
};
z.Ck = function(a, b) {
  z.Ld.call(this, a);
  this.Ub = b.collectionSlug;
  this.path = b.path;
  this.filterBy = this.gp(b.path);
  this.ei = a.get("app");
  this.Le = a.get("datastore");
  this.jh = a.get("request");
  this.Na = (0,z.Md)(this, "butter-bar")
};
z.Dk = function(a, b) {
  z.Ck.call(this, a, b);
  this.Fs = z.s
};
z.Ek = function(a) {
  z.$g.call(this);
  this.ma = a || [];
  this.Lv = {}
};
z.Fk = function(a, b, c) {
  return a.find(function(a) {
    return a.get(b) === c
  })
};
z.Gk = function(a, b) {
  b.h("change", a.xt, a);
  b.h("remove", a.zt, a)
};
z.Hk = function(a, b) {
  b.Aa("change", a.xt, a);
  b.Aa("remove", a.zt, a)
};
z.Ik = function(a) {
  z.Ek.call(this);
  this.jh = a.get("request");
  this.cb = (0,z.H)(new z.vb, z.Ig);
  this.bl = 0
};
z.Jk = function(a) {
  if(!a.Xg) {
    var b = (0,z.Bb)((0,z.H)((0,z.G)(a.jh.send(a.pl, a.mb, {}, {V:z.m, background:z.m}), a.wD, a), a.Uv, a), a.mw, a);
    a.cb = a.Bf(b);
    a.Xg = z.m
  }
  return(0,z.Kk)(a, a.cb)
};
z.Lk = function(a, b) {
  if(!a.nl) {
    return(0,z.Kk)(a, a.cb)
  }
  a.bl = window.Math.max(a.bl, b + a.count());
  a.Xg && !a.cb.Oc ? (0,z.Bb)(a.cb, a.ns, a) : a.ns();
  return(0,z.Kk)(a, a.cb)
};
z.Kk = function(a, b) {
  return(0,z.G)(b.Ie(), function() {
    return this
  }, a)
};
z.Mk = function(a, b) {
  z.Ik.call(this, a);
  this.mb = b
};
z.Nk = function(a, b) {
  return{count:b, ignore:(0,z.qf)(a.ma, function(a) {
    return a.get("id")
  })}
};
z.Ok = function(a, b, c) {
  z.Hd.call(this);
  this.Ba = a.get("dom-monitor");
  this.Eh = z.s;
  this.Ib = b;
  this.tl = !!(0,z.Q)("variants.can_infinite_scroll") || z.s;
  this.yl = c
};
z.Pk = function(a) {
  z.$g.call(this);
  this.t = a;
  this.Z = a.get("app");
  this.U = a.get("datastore")
};
z.Qk = function(a, b) {
  a.Q && (0,z.g)((0,window.Error)("The post list should not be set twice."));
  b && (a.Q = b, a.Q.ee++, a.Q.h("add", a.Hl, a), a.Q.h("remove", a.Bt, a));
  return a
};
z.Rk = function(a, b) {
  a.ig && (0,z.g)((0,window.Error)("The container element should not be set twice."));
  a.ig = b;
  (0,z.ag)(a.ig).g("open-post", a.ep, a);
  return a
};
z.Sk = function(a, b) {
  a.rp = b;
  return a
};
z.Tk = function(a, b, c) {
  z.Ck.call(this, a, b);
  this.wb = c.wb || ""
};
z.Uk = function(a) {
  this.t = a;
  this.mp = this.Nh = this.nu = this.Ks = this.Do = this.wh = z.n;
  this.xa = [];
  a.get("app").h(z.vj, this.Zy, this);
  (0,z.Wf)("zoom", this.JB, this)
};
z.Vk = function(a, b) {
  a.wh && (b ? a.wh.Wa() : a.wh.close(), (0,z.Ff)(a.xa), a.wh = z.n)
};
z.Wk = function(a, b) {
  this.Dd = this.qj = z.n;
  this.dg = (0,z.Ij)(b.get("app")).gb();
  this.ob = a;
  this.vs = (0,window.Number)(a.getAttribute("data-width") || 0);
  this.dy = (0,window.Number)(a.getAttribute("data-height") || 0);
  this.No = this.Fa = this.us = z.n;
  z.Hd.call(this)
};
z.Xk = function(a) {
  var b = {imageId:a.getAttribute("data-action-value")};
  if(a.getAttribute("data-width")) {
    b.width = a.getAttribute("data-width");
    b.height = a.getAttribute("data-height");
    a = b.width;
    var c = b.height;
    if(!(2560 > a && 4096 > c)) {
      var d = window.Math.min(2560 / a, 4096 / c);
      b.height = window.Math.round(c * d);
      b.width = window.Math.round(a * d)
    }
  }
  b.strategy = b.width && b.width == b.height ? "crop-fixed" : "resample";
  return(0,z.sd)(z.ki, b)
};
z.Yk = function(a) {
  var b = window.document.createElement("img");
  b.src = (0,z.Xk)(a.ob);
  (0,z.N)(b, "zoom-img");
  a.Fa = new z.vb;
  a.No = (0,z.T)(b, z.Zk, a.Fa.Ga, a.Fa);
  (0,z.Ti)(z.$k, {imageId:a.ob.getAttribute("data-action-value"), source:window.location.pathname});
  a.us = b;
  a.vs ? (0,z.al)(a) : (0,z.G)(a.Fa, function() {
    this.dy = (0,window.Number)(b.height);
    this.vs = (0,window.Number)(b.width);
    (0,z.al)(this)
  }, a)
};
z.al = function(a) {
  a.Dd = window.document.createElement("div");
  (0,z.N)(a.Dd, "zoom-img-wrap");
  a.ob.parentNode.insertBefore(a.Dd, a.ob);
  a.Dd.appendChild(a.ob);
  (0,z.N)(a.ob, "zoom-img");
  a.qj = window.document.createElement("div");
  (0,z.N)(a.qj, "zoom-overlay");
  window.document.body.appendChild(a.qj);
  (0,z.Df)(a.ob.offsetHeight);
  var b = a.ob.getAttribute("data-width"), c = a.ob.getAttribute("data-height");
  (0,z.Hc)(a.dg, a.ob);
  var d = b / a.ob.width, e = window.innerHeight - z.bl, f = window.innerWidth - z.bl;
  a.Oy = b < f && c < e ? d : b / c < f / e ? e / c * d : f / b * d;
  (0,z.cl)(a)
};
z.cl = function(a) {
  (0,z.Df)(a.ob.offsetHeight);
  var b = (0,z.Pf)(a.ob), c = ((0,z.Hc)(a.dg, a.ob) ? a.dg.scrollTop : 0) + window.innerHeight / 2, d = window.innerWidth / 2, e = b.x + a.ob.width / 2;
  a.EB = c - (b.y + a.ob.height / 2);
  a.DB = d - e;
  a.xf = (0,z.T)(a.Dd, z.dl, function() {
    (0,z.G)(this.Fa, function() {
      this.ob.src = this.us.src
    }, this);
    (0,z.Ff)(this.xf)
  }, a);
  (0,z.Sd)(a.ob, "transform", "scale(" + a.Oy + ")");
  (0,z.Sd)(a.Dd, "transform", "translate(" + a.DB + "px, " + a.EB + "px) translateZ(0)");
  (0,z.N)(window.document.body, "zoom-overlay-open")
};
z.el = function() {
  this.enabled = z.s;
  this.Ea = this.l = z.n;
  this.Zp = "";
  this.Ok = this.Vd = this.Lr = this.oo = this.po = z.n;
  this.Wp = "tooltip";
  this.ci = "fade";
  this.Bu = "tooltip-arrow";
  this.Au = 20;
  this.Ly = z.n;
  this.enable()
};
z.fl = function(a, b, c) {
  a = window.Math.min(window.Math.abs(c), b - a.Au);
  return 0 < c ? -a : a
};
z.gl = function(a) {
  return"bottom" == a ? "top" : "top" == a ? "bottom" : "left" == a ? "right" : "left"
};
z.hl = function(a, b, c, d) {
  a.l.style.visibility = "hidden";
  a.l.className = a.Wp + " " + a.ci;
  var e = c.top, f = c.left, h = f + d.width / 2, k = e + d.height / 2, p, q, z$, U, F;
  if("top" == b || "bottom" == b) {
    p = a.l.offsetWidth;
    q = a.l.offsetHeight;
    F = "bottom" == b ? window.innerHeight - e - d.height / 2 - q / 2 : e + d.height / 2 - q / 2;
    U = d.height / 2 + q / 2;
    e = U > F ? -1 * U : U;
    "top" == b && (e *= -1);
    if("top" == b && 0 < e || "bottom" == b && 0 > e) {
      b = (0,z.gl)(b)
    }
    F = -1 * (f + d.width / 2);
    d = window.innerWidth - f - d.width / 2;
    f = p / 2 > d ? d - p / 2 : -(p / 2) < F ? p / 2 + F : 0;
    U = (0,z.fl)(a, p / 2, f)
  }else {
    p = a.l.offsetWidth;
    q = a.l.offsetHeight;
    F = "right" == b ? window.innerWidth - f - d.width / 2 - p / 2 : f + d.width / 2 - p / 2;
    z$ = d.width / 2 + p / 2;
    f = z$ > F ? -1 * z$ : z$;
    "left" == b && (f *= -1);
    if("left" == b && 0 < f || "right" == b && 0 > f) {
      b = (0,z.gl)(b)
    }
    F = -1 * (e + d.height / 2);
    d = window.innerHeight - e - d.height / 2;
    e = q / 2 > d ? d - q / 2 : -(q / 2) < F ? q / 2 + F : 0;
    z$ = (0,z.fl)(a, q / 2, e)
  }
  k = window.Math.ceil(k + e - q / 2);
  h = window.Math.ceil(h + f - p / 2);
  d = (0,z.$d)(a.Ea).y - c.top;
  c = a.l;
  k += d;
  d = (0,z.$d)(c);
  h instanceof z.hc && (k = h.y, h = h.x);
  h = c.offsetLeft + (h - d.x);
  e = c.offsetTop + (k - d.y);
  d = z.R && (z.ig || z.il) && (0,z.Ub)("1.9");
  h instanceof z.hc ? (k = h.x, h = h.y) : (k = h, h = e);
  c.style.left = (0,z.ee)(k, d);
  c.style.top = (0,z.ee)(h, d);
  c = a.l.getElementsByClassName(a.Bu)[0];
  c.style.left = U ? U + window.Math.ceil(p / 2) + "px" : "";
  c.style.top = z$ ? z$ + window.Math.ceil(q / 2) + "px" : "";
  (0,z.N)(a.l, a.Wp + "-" + b);
  a.l.style.visibility = ""
};
z.jl = function(a, b) {
  (0,z.kl)(a);
  a.Lr = (0,z.T)(a.Ea, b, function(a) {
    a.relatedTarget && (0,z.Hc)(a.currentTarget, a.relatedTarget) ? (0,window.clearTimeout)(this.Ok) : this.Ok = (0,window.setTimeout)(this.remove.bind(this), 0)
  }, a)
};
z.kl = function(a) {
  (0,window.clearTimeout)(a.Ok);
  (0,window.clearTimeout)(a.Ly);
  a.Ok = z.n;
  (0,z.Ff)(a.Lr)
};
z.ll = function(a) {
  z.el.call(this);
  this.ia = this.fl = this.el = z.n;
  this.Wp = "popover";
  this.ci = "fade";
  this.Bu = "popover-arrow";
  this.Au = 30;
  this.Ba = a.get("dom-monitor")
};
z.ml = function(a, b, c, d) {
  if(b && c) {
    var e = b.getAttribute("data-popover-position") || "top", f = b.getAttribute("data-popover-type") || "html-content";
    if("sign-in" != f || b.getAttribute("data-popover-signin-action")) {
      a.l || (a.l = window.document.createElement("div"));
      a.Ea = b;
      var h = (0,z.Rf)(b).firstChild;
      h != a.ia && (a.ia && a.ia.removeChild(a.l), a.ia = h, a.ia.appendChild(a.l));
      "html-content" == f ? a.l.innerHTML = a.Zb({wm:c, Mv:d || ""}) : "sign-in" == f && (f = b.getAttribute("data-popover-signin-action"), h = b.getAttribute("data-redirect"), d = a.l, c = '\x3cdiv class\x3d"popover-inner"\x3e\x3ch2\x3e' + (0,z.X)(c) + '\x3c/h2\x3e\x3cdiv class\x3d"subtitle"\x3e' + (0,z.Kh)("d", f)(z.n, z.n, z.l) + '\x3c/div\x3e\x3ca class\x3d"btn btn-primary" title\x3d"Sign in with Twitter" data-action\x3d"sign-in-with-twitter" data-action-value\x3d"' + (0,z.Y)(h) + '" tabindex\x3d"-1"\x3e\x3cspan class\x3d"icons icons-twitter-small"\x3e\x3c/span\x3eSign in with Twitter\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d"popover-arrow"\x3e\x3c/div\x3e', 
      d.innerHTML = c);
      b = b.getBoundingClientRect();
      (0,z.hl)(a, e, b, {width:b.width, height:b.height});
      (0,z.Ff)(a.Vd);
      a.el || (a.el = (0,z.T)(window.document, "click", a.fy, a, z.m));
      a.fl || (a.fl = (0,z.T)(window.document, "touchend", a.Gy, a, z.m));
      a.Ba.h("resize-end", a.Cs, a)
    }
  }
};
z.nl = function(a, b) {
  this.Na = a;
  this.Z = b.get("app");
  this.Lb = new z.$g;
  this.h = this.Lb.h.bind(this.Lb);
  (0,z.ag)(a).g("butter-bar-action", this.OA, this).g("butter-bar-dismiss", this.ta, this).g("undo", this.mA, this)
};
z.ol = function(a) {
  z.Ek.call(this);
  this.Ib = a;
  this.Ib.h("add", this.wt, this);
  this.Ib.h("remove", this.At, this);
  this.Ib.h("change", this.yt, this);
  (0,z.pl)(this)
};
z.ql = function(a, b, c) {
  a.to = b;
  a.os = c || z.n;
  (0,z.pl)(a);
  return a
};
z.pl = function(a) {
  a.ma = (a.to ? a.Ib.filter(a.to, a.os) : a.Ib.ma).slice(a.ho, a.ho + a.yl)
};
z.Ul = function(a) {
  var b = a.ma;
  (0,z.pl)(a);
  for(var c = 0;c < b.length;c++) {
    (0,z.Vl)(b[c], a.ma) || a.F("remove", b[c], a)
  }
  for(var c = [], d = 0;d < a.ma.length;d++) {
    (0,z.Vl)(a.ma[d], b) || c.push(a.ma[d])
  }
  c.length && a.F("add", c, a)
};
z.Vl = function(a, b) {
  return!!(0,z.Ua)(b, function(b) {
    return b === a
  })
};
z.Wl = function(a, b, c) {
  z.$g.call(this);
  a || (0,z.g)((0,window.Error)("Missing element for TemplateView"));
  this.l = a;
  this.X = b;
  this.lu = c
};
z.Xl = function(a, b, c) {
  a.Ij = b;
  a.io = c;
  a.Ph && a.Wm();
  return a
};
z.Yl = function(a, b) {
  b instanceof z.bh && (b = a.lf.call(z.n, b));
  if(a.Ij) {
    a.Ij[a.io] = b;
    var c = (0,z.sd)(a.lu, a.Ij);
    delete a.Ij[a.io];
    return c
  }
  return(0,z.sd)(a.lu, b)
};
z.Zl = function(a) {
  var b = '\x3cdiv class\x3d"sidepanel-glass"\x3e\x3cdiv class\x3d"sidepanel-panel" tabIndex\x3d"-1"\x3e';
  if(a.items) {
    b += '\x3cdiv class\x3d"sidepanel-info"\x3e' + (a.XD ? '\x3cbutton class\x3d"btn btn-primary" data-action\x3d"pick" data-action-value\x3d""\x3eSkip\x3c/button\x3e' : "") + (0,z.X)(a.MC) + '\x3c/div\x3e\x3cdiv class\x3d"sidepanel-items"\x3e\x3cdiv class\x3d"sidepanel-heading"\x3e' + (0,z.X)(a.hD) + "\x3c/div\x3e";
    a = a.items;
    for(var c = a.length, d = 0;d < c;d++) {
      var e = a[d], b = b + ('\x3cdiv class\x3d"sidepanel-item' + (e.disabled ? " sidepanel-item-disabled" : "") + '"' + (!e.disabled ? 'data-action\x3d"select"' : "") + "\x3e" + (!e.disabled ? '\x3cbutton class\x3d"btn btn-primary" data-action\x3d"pick" data-action-value\x3d"' + (0,z.Y)(e.id) + '"\x3eAdd\x3c/button\x3e\x3cbutton class\x3d"btn" data-action\x3d"cancel"\x3eCancel\x3c/button\x3e' : "") + '\x3cspan class\x3d"sidepanel-item-text"\x3e' + (e.name ? (0,z.X)(e.name) : (0,z.X)(e.id)) + "\x3c/span\x3e\x3c/div\x3e")
    }
    b += "\x3c/div\x3e"
  }else {
    b += '\x3cdiv class\x3d"sidepanel-info"\x3eNothing to show.\x3c/div\x3e'
  }
  return b + "\x3c/div\x3e\x3c/div\x3e"
};
z.$l = function(a) {
  z.Hd.call(this);
  this.X = a
};
z.am = function(a) {
  this.t = a;
  this.fa = a.get("request");
  this.U = a.get("datastore");
  this.Z = a.get("app");
  this.Z.h("startNav", this.cp, this);
  this.Na = a.get("butter-bar");
  this.zg = a.get("popover");
  this.J = z.n;
  this.op = {};
  this.Hg = z.n;
  (0,z.Wf)("sign-in-with-twitter", this.oB, this).g("sign-in-prompt", this.fx, this).g("disabled", this.dx, this).g("stat-link", this.rB, this).g("dismiss-interstitial", this.Jx, this).g("add-to-reading-list", this.mu, this).g("remove-from-reading-list", this.mu, this)
};
z.bm = function(a, b, c) {
  for(var d = {}, e = a.U.qc[b].get("virtuals.postedIn"), f = 0;f < e.length;f++) {
    d[e[f].collectionId] = 1
  }
  (0,z.G)((0,z.cm)(a, function(a) {
    return!d[a.get("id")] && !(0,z.Wa)(c, a.get("slug"))
  }, z.s), function(a) {
    a && (0,z.dm)(this, b, a.get("slug"))
  }, a)
};
z.cm = function(a, b, c) {
  function d() {
    for(var a = k, c = {}, d = 0, e = 0;e < a.length;) {
      var f = a[e++], h = (0,z.ra)(f) ? "o" + (0,z.sa)(f) : (typeof f).charAt(0) + f;
      window.Object.prototype.hasOwnProperty.call(c, h) || (c[h] = z.m, a[d++] = f)
    }
    a.length = d;
    return(0,z.ql)(new z.ol(new z.Ek(k)), b)
  }
  function e(a) {
    return{id:a.get("slug"), name:a.get("name")}
  }
  b = (0,z.Cf)(b, function(a) {
    return a.get("virtuals.canPost")
  });
  var f = (0,z.em)(a.U), h = a.U.Qi["recently-viewed"];
  a.Ax = z.m;
  var k = [];
  return(0,z.G)((0,z.G)((0,z.G)((0,z.Cb)((0,z.Jk)(f), (0,z.Jk)(h)), function() {
    k = f.ma.concat().concat(h.ma.concat());
    if(3 > d().Ne()) {
      var a = this.U.Qi.recommended;
      return(0,z.G)((0,z.Jk)(a), function() {
        (0,z.fb)(k, a.ma.concat())
      })
    }
  }, a), function() {
    var a = new z.$l(d());
    a.Js = "Select a collection for this post.";
    a.at = "Collections";
    a.$i = z.m;
    a = a.qn(e);
    a.fu = c;
    return(0,z.fm)(this, a)
  }, a), function(a) {
    return a ? this.U.Xd[a] || z.n : z.n
  }, a)
};
z.dm = function(a, b, c) {
  (0,z.H)((0,z.G)(a.fa.put("/" + c + "/" + b, {}, {V:z.m}), function() {
    (0,z.Ti)(z.gm, {collectionSlug:c, postIds:[b]});
    this.Na.ca("Post added to " + (0,z.X)(c), "success")
  }, a), (0,z.Xj)(a.J, "Sorry, cross-posting failed."))
};
z.fm = function(a, b) {
  a.Hg && a.Hg.close();
  b.Zb();
  a.Hg = b;
  return(0,z.Bb)(b.open(), function() {
    this.Ax = z.s;
    this.Hg.close();
    this.Hg = z.n
  }, a)
};
z.hm = function(a, b, c) {
  (a = a.U.qc[b]) && a.set("virtuals.isOnReadingList", c);
  a = window.document.body.querySelectorAll('.reading-list-status[data-post-id\x3d"' + b + '"]');
  if(a.length) {
    var d = a[0].getAttribute("data-reading-time");
    b = (0,z.sd)(z.wi, {postId:b, isOnReadingList:c, readingTime:d, bD:z.m});
    for(c = 0;c < a.length;c++) {
      a[c] && (a[c].outerHTML = b)
    }
  }
};
z.im = function(a) {
  this.t = a;
  this.Va = a.get("request");
  this.qc = {};
  this.Xd = {};
  this.ua = {};
  this.Qi = {}
};
z.jm = function(a, b) {
  if(!(0,z.Bk)(b)) {
    var c = (0,window.Error)("An unpopulated object was sent in to upsertPostMeta");
    (0,z.Eg)(c, "post", b);
    (0,z.Ig)(c)
  }
  var c = b.id, d = a.qc[c];
  d ? d.mh(b) : (d = new z.bh(b), a.qc[c] = d);
  return d
};
z.em = function(a) {
  return a.Qi["my-collections"]
};
z.km = function(a, b, c) {
  a.Qi[b] && (0,z.g)((0,window.Error)("Collection list already exists with id\x3d" + b));
  c = new z.lm(a.t, c);
  c.Se = z.mm;
  return a.Qi[b] = c
};
z.nm = function(a, b, c, d) {
  a.ua[b] && (0,z.g)((0,window.Error)("Post list already exists with id\x3d" + b));
  c = new z.om(a.t, c);
  c.pl = d.toUpperCase();
  c.sn("id", b);
  c.Se = z.mm;
  c.ee++;
  return a.ua[b] = c
};
z.ck = function(a, b, c) {
  c = c || "recommended";
  var d = b + ":" + c + ":" + (0,z.pm)();
  a = (0,z.nm)(a, d, "/" + b + "/load-more?sortBy\x3d" + c, "POST");
  a.sn("preferredCollection", b);
  return a
};
z.bk = function(a, b) {
  var c = a.ua[b];
  c.ee++;
  return c
};
z.qm = function(a, b) {
  if(!(0,z.Bk)(b)) {
    var c = (0,window.Error)("An unpopulated object was sent in to upsertCollectionMeta");
    (0,z.Eg)(c, "collection", b);
    (0,z.Ig)(c)
  }
  var c = b.slug, d = a.Xd[c];
  d ? d.mh(b) : (d = new z.bh(b), a.Xd[c] = d);
  return d
};
z.pm = function() {
  var a = window.Math.round(1E3 * window.Math.random());
  return window.Date.now() - z.rm + "." + a
};
z.mm = function(a) {
  return a.value ? (0,z.Ak)(a.value, a.references) : a
};
z.om = function(a, b) {
  z.Mk.call(this, a, b);
  this.U = a.get("datastore");
  this.ee = 0
};
z.lm = function(a, b) {
  z.Mk.call(this, a, b);
  this.U = a.get("datastore")
};
z.sm = function(a) {
  this.fa = a.get("request");
  this.Z = a.get("app");
  this.mb = "/_/activity-status";
  this.Nk = new z.bh({newActivityCount:0});
  this.Z.h(z.vj, this.bp, this)
};
z.tm = function(a) {
  (0,z.Q)("isAuthenticated") && (0,z.Q)("variants.can_view_activity") && (0,z.G)(a.fa.get(a.mb, {V:z.m, background:z.m}), function(a) {
    a.value.hasOwnProperty("newActivityCount") && this.Nk.set("newActivityCount", a.value.newActivityCount)
  }, a)
};
z.um = function(a, b, c) {
  b = "";
  var d = '\x3cp class\x3d"cover-description"\x3eThe most-read posts each month.\x3c/p\x3e\x3cdiv class\x3d"cover-actions"\x3e' + (a.prevSlug ? '\x3ca href\x3d"/top-100/' + (0,z.Y)(a.prevSlug) + '"\x3e\x3cdiv class\x3d"icons icons-arrow-left"\x3e\x3c/div\x3e\x3c/a\x3e' : "") + (a.nextSlug ? '\x3ca href\x3d"/top-100/' + (0,z.Y)(a.nextSlug) + '"\x3e\x3cdiv class\x3d"icons icons-arrow-right"\x3e\x3c/div\x3e\x3c/a\x3e' : "") + '\x3cspan class\x3d"month-year-name"\x3e' + (0,z.X)(a.month) + " " + (0,z.X)(a.year) + 
  "\x3c/span\x3e\x3c/div\x3e", d = (0,z.Gh)(a, {className:"bestof", title:"The Medium Top 100", bC:d}), d = '\x3caside class\x3d"cover cover-' + (0,z.Y)(d.className) + '" data-load-img\x3d".cover-img"\x3e\x3cdiv class\x3d"cover-img" style\x3d"background-image: url(\'' + (0,z.Y)((0,z.Yh)(d.coverImgUrl)) + '\')"\x3e\x3c/div\x3e\x3cdiv class\x3d"cover-body"\x3e\x3cdiv class\x3d"cover-body-inner"\x3e\x3ch1 class\x3d"cover-title"\x3e' + (0,z.X)(d.title) + "\x3c/h1\x3e" + (d.subtitle ? '\x3ch2 class\x3d"cover-title"\x3e' + 
  (0,z.X)(d.subtitle) + "\x3c/h2\x3e" : "") + '\x3cp class\x3d"cover-description"\x3e' + (0,z.$h)(d.bC) + "\x3c/p\x3e" + (d.RB ? (0,z.$h)(d.RB) : "") + "\x3c/div\x3e\x3c/div\x3e\x3c/aside\x3e";
  return b += d + '\x3cdiv class\x3d"wrapper ordered-posts bestof-page" tabindex\x3d"-1"\x3e\x3cdiv class\x3d"wrapper-inner"\x3e' + (0,z.ok)((0,z.Gh)(a, {posts:a.posts, sections:[], en:z.m, xD:z.m, xw:z.m}), 0, c) + "\x3c/div\x3e\x3c/div\x3e"
};
z.vm = function(a, b) {
  z.Ld.call(this, a);
  this.fa = a.get("request");
  this.mb = b.path;
  this.Cl = this.mb.split("/")[1];
  this.Ih = this.Cl.split("-")[0];
  this.im = this.Cl.split("-")[1];
  this.U = a.get("datastore");
  this.Rb = "bestof:" + this.im + ":" + this.Ih
};
z.wm = function() {
  this.be = {};
  this.xa = {};
  this.Mh = {}
};
z.xm = function(a) {
  return 0 === a.indexOf("//") ? window.location.protocol + a : a
};
z.ym = function(a, b) {
  var c = new window.Image, d = [];
  d.push((0,z.T)(c, "load", a.pj, a));
  d.push((0,z.T)(c, "abort", a.vg, a));
  d.push((0,z.T)(c, "error", a.vg, a));
  a.xa[b] = d;
  c.src = b
};
z.zm = function(a, b) {
  a.xa[b] && ((0,z.Ff)(a.xa[b]), delete a.xa[b])
};
z.Am = function(a) {
  this.t = a;
  this.fa = a.get("request");
  this.Ee = {};
  this.sg = {};
  this.Bl = {}
};
z.Bm = function(a, b) {
  b = b.value;
  var c = b.mediaResourceId;
  c in a.Ee ? a.Ee[c].mh(b) : (a.Ee[c] = new z.bh(b), a.sg[b.href] = c);
  return a.Ee[c]
};
z.Cm = function(a, b, c) {
  z.Wl.call(this, a, b, c);
  this.ql = "_obv.data._list_" + z.Dm++;
  this.Ts = ""
};
z.Em = function(a, b) {
  a.Ts = b;
  return a
};
z.Fm = function(a, b, c) {
  var d = window.document.createElement("div");
  d.className = a.Ts;
  d.id = a.ql + (0,z.sa)(b);
  d.innerHTML = (0,z.Yl)(a, b);
  b = a.l;
  b.insertBefore(d, b.childNodes["undefined" != typeof c ? c : a.l.children.length] || z.n);
  return d
};
z.Gm = function(a) {
  return'\x3ch5 class\x3d"follow-ups-title"\x3eFurther Reading\x3c/h5\x3e\x3cdiv class\x3d"follow-ups-list"\x3e\x3c/div\x3e\x3cdiv class\x3d"follow-up-new"\x3e\x3cbutton class\x3d"btn btn-chromeless follow-up-start follow-up-link-prompt"' + (a.VB ? 'data-action\x3d"start-new-follow-up"' : 'data-action\x3d"sign-in-prompt" data-redirect\x3d"' + (0,z.mi)(a) + '#follow-up-editor" data-popover-type\x3d"sign-in" data-popover\x3d"Sign in to suggest further\x26nbsp;reading" data-popover-position\x3d"bottom" data-popover-signin-action\x3d"followUp"') + 
  '\x3e\x3cspan class\x3d"icons icons-add-further-reading"\x3e\x3c/span\x3e\x3cspan class\x3d"follow-ups-prompt"\x3eSuggest a link\x3c/span\x3e\x3cspan class\x3d"follow-ups-empty-prompt"\x3eSuggest a link for further reading\x3c/span\x3e\x3c/button\x3e\x3cdiv class\x3d"follow-up follow-up-new-editor"\x3e\x3c/div\x3e\x3c/div\x3e'
};
z.Hm = function(a, b, c) {
  return(a.canAdminister ? '\x3cul class\x3d"follow-up-visibility follow-up-visibility-dropdown" data-follow-up-id\x3d"' + (0,z.Y)(a.followUp.followUpId) + '"\x3e' + (a.followUp.visibility == a.visibility.Fn ? '\x3cli class\x3d"follow-up-visibility-item"\x3e\x3cspan class\x3d"icons icons-group"\x3e\x3c/span\x3ePublic\x3cspan class\x3d"icons follow-up-visibility-down-icon"\x3e\x3c/span\x3e\x3c/li\x3e\x3cli class\x3d"follow-up-visibility-item" data-action\x3d"set-follow-up-visibility" data-action-value\x3d"' + 
  (0,z.Y)(a.visibility.Tw) + '"\x3e\x3cspan class\x3d"icons icons-invisible"\x3e\x3c/span\x3ePrivate\x3c/li\x3e' : '\x3cli class\x3d"follow-up-visibility-item"\x3e\x3cspan class\x3d"icons icons-invisible"\x3e\x3c/span\x3ePrivate\x3cspan class\x3d"icons follow-up-visibility-down-icon"\x3e\x3c/span\x3e\x3c/li\x3e\x3cli class\x3d"follow-up-visibility-item" data-action\x3d"set-follow-up-visibility" data-action-value\x3d"' + (0,z.Y)(a.visibility.Fn) + '"\x3e\x3cspan class\x3d"icons icons-group"\x3e\x3c/span\x3ePublic\x3c/li\x3e') + 
  (a.followUp.creatorId != a.dn ? '\x3cli class\x3d"follow-up-visibility-item" data-action\x3d"set-follow-up-visibility" data-action-value\x3d"' + (0,z.Y)(a.visibility.Pw) + '"\x3e\x3cspan class\x3d"icons icons-remove"\x3e\x3c/span\x3eDismiss\x3c/li\x3e' : "") + "\x3c/ul\x3e" : a.followUp.visibility != a.visibility.Fn ? '\x3cul class\x3d"follow-up-visibility" data-follow-up-id\x3d"' + (0,z.Y)(a.followUp.followUpId) + '"\x3e\x3cli class\x3d"follow-up-visibility-item" data-tooltip\x3d"This link is only visible to you and the author, unless the author chooses to make it public."\x3e\x3cspan class\x3d"icons icons-invisible"\x3e\x3c/span\x3ePrivate\x3c/li\x3e\x3c/ul\x3e' : 
  "") + (0,z.Kh)("f", a.followUp.mediaResource.mediaResourceType)(a, z.n, c)
};
z.Im = function() {
  z.bd.call(this)
};
z.Jm = function() {
  z.bd.call(this)
};
z.Km = function(a, b, c) {
  z.$g.call(this);
  this.t = a;
  this.fa = a.get("request");
  this.tg = a.get("media-resource");
  this.w = b;
  this.Ag = c;
  this.Xi = z.s;
  this.Qb = new z.Ek;
  a = new z.ol(this.Qb);
  (0,z.ql)(a, this.Qy, this);
  this.Wx = a;
  this.$h = {}
};
z.Lm = function(a, b) {
  return(0,z.Fk)(a.Qb, "followUpId", b)
};
z.Mm = function(a, b) {
  var c = new z.Im;
  c.fc(b.title);
  (0,z.gd)(c, "description", b.description);
  c.rn(b.mediaResourceId);
  var d = z.Nm.Ld(c);
  d.creator = (0,z.Q)("currentUser");
  d.creatorId = d.creator.userId;
  d.visibility = a.Ag == d.creator.userId ? 2 : 1;
  d.mediaResource = a.tg.Ee[d.mediaResourceId].La();
  var e = new z.bh(d);
  a.Qb.add(e);
  return(0,z.H)((0,z.G)(a.fa.post("/p/" + a.w + "/follow-ups/new", c, {V:z.m, Nm:z.m}), function(a) {
    (0,z.Om)(this, a.value, a.references, e)
  }, a), z.Og)
};
z.Pm = function(a, b) {
  var c = (0,z.Lm)(a, b), d = a.Qb.indexOf(c);
  a.Qb.remove(c);
  return(0,z.H)((0,z.G)(a.fa.cc("/p/" + a.w + "/follow-ups/" + b), function() {
    (0,z.fh)(c)
  }), function(a) {
    (0,z.Og)(a);
    this.Qb.Mg(c, d)
  }, a)
};
z.Qm = function(a, b, c) {
  a.$h[b] && a.$h[b].cancel();
  var d = (0,z.Lm)(a, b), e = d.get("visibility");
  d.set("visibility", c);
  return a.$h[b] = (0,z.H)((0,z.Bb)(a.fa.put("/p/" + a.w + "/follow-ups/" + b + "/visibility", {visibility:c}, {V:z.m}), function() {
    delete this.$h[b]
  }, a), function(a) {
    a instanceof z.Lb || ((0,z.Og)(a), d.set("visibility", e))
  })
};
z.Om = function(a, b, c, d) {
  b = (0,z.Ak)(b, c).value;
  c = (0,z.Bm)(a.tg, b.mediaResource);
  b.mediaResource = c.La();
  (d = d || (0,z.Fk)(a.Qb, "followUpId", b.followUpId)) ? d.mh(b) : a.Qb.add(b)
};
z.Rm = function(a, b, c) {
  z.Hd.call(this);
  this.t = a;
  this.Z = a.get("app");
  this.J = a.get("dialog");
  this.fi = a.get("butter-bar");
  this.Ja = b;
  this.w = (0,z.dh)(b, "id");
  this.Ag = (0,z.dh)(b, "creatorId");
  this.Yr = !!(0,z.Q)("isAuthenticated");
  this.ix = c;
  this.ia = this.Wi();
  this.X = new z.Km(a, this.w, this.Ag);
  this.pa = new z.ii;
  (0,z.ag)(this.ia).g("start-new-follow-up", this.Et, this).g("delete-follow-up", this.uz, this).g("set-follow-up-visibility", this.$z, this);
  (0,z.T)(this.ia, "click", this.lz, this)
};
z.Sm = function(a) {
  if(0 !== window.document.location.hash.indexOf("#fr-")) {
    return""
  }
  var b = window.document.location.hash.substr(4);
  (0,z.Kj)(a.Z, "");
  return b
};
z.Tm = function(a, b) {
  var c = a.ia.querySelector('[data-follow-up-id\x3d"' + b + '"]');
  c && c.scrollIntoView(z.m)
};
z.Um = function(a, b, c) {
  c = c || {};
  c.postId = a.w;
  (0,z.Ti)(b, c)
};
z.Vm = function(a, b, c) {
  var d = (0,z.Lm)(a.X, b).get("visibility");
  (0,z.H)((0,z.G)((0,z.ji)(a.pa, (0,z.Qm)(a.X, b, c)), a.Zx.bind(a, b, d)), a.$x, a)
};
z.Wm = function(a) {
  z.Hd.call(this);
  this.t = a
};
z.Xm = function() {
  (0,z.Q)("currentUser") && (0,z.fj)(["identify", (0,z.Q)("currentUser.userId")]);
  var a = (0,z.Q)("variants.is_super_user") ? "superuser" : (0,z.Q)("variants.can_create_post") ? "creator" : (0,z.Q)("isAuthenticated") ? "loggedin" : "anonymous";
  (0,z.oj)(2, a, 1);
  (0,z.fj)(["set", {userType:a}]);
  a = {};
  a.NH = !!(0,z.Q)("variants.can_use_new_homepage");
  a.RH = !!(0,z.Q)("variants.recommend_as_heart");
  for(var b in a) {
    (0,z.fj)(["set", (0,z.tb)("testBucket-" + b, "string" == typeof a[b] ? a[b] : "number" == typeof a[b] ? (0,window.String)(a[b]) : a[b] ? "true" : "false")])
  }
};
z.Ym = function(a, b, c) {
  c = (b = a.username == (c.currentUser && c.currentUser.username)) ? "I just published " : "by @" + a.username + " ";
  var d = "";
  if(b && a.collaborators && a.collaborators.length) {
    for(var d = d + " Thanks to ", e = a.collaborators, f = e.length, h = 0;h < f;h++) {
      d += "@" + e[h].user.username + " "
    }
  }
  return a = "" + ((b ? c : "") + "“" + (0,z.bi)(a.title, a.Dn - c.length - a.Gn - 3) + "” " + (!b ? c : "") + a.url + d)
};
z.Zm = function(a) {
  this.t = a
};
z.$m = function(a) {
  this.t = a
};
z.an = function() {
  this.Fw = {}
};
z.bn = function() {
  this.Vy = {};
  this.Lt = new z.an
};
z.cn = function(a) {
  this.path = a;
  this.screen = this.Up = this.nD = z.n
};
z.dn = function(a, b) {
  a.screen = b;
  return a
};
z.en = function() {
  z.$g.call(this);
  this.Mx = [];
  this.Hc = z.fn;
  var a = window.document, b = [(0,z.T)(a, "mousedown", this.nf, this), (0,z.T)(a, "mouseup", this.nf, this), (0,z.T)(a, "mouseover", this.nf, this), (0,z.T)(a, "click", this.nf, this), (0,z.T)(a, "dblclick", this.nf, this), (0,z.T)(a, "keydown", this.nf, this), (0,z.T)(a, "keyup", this.nf, this), (0,z.T)(a.defaultView, "focus", this.nf, this), (0,z.T)(a.defaultView, "blur", this.vt, this)];
  this.Mx.push({WG:a, zJ:b})
};
z.gn = function(a, b, c) {
  return c.isAuthenticated ? "\x3cp\x3eYou are logged out.\x3c/p\x3e" : "\x3cp\x3eYou need to be logged in to continue.\x3c/p\x3e"
};
z.hn = function(a, b) {
  this.t = a;
  this.Oi = b;
  a.get("app").h("startNav", this.cp, this);
  a.get("app").h(z.vj, this.Dz, this);
  a.get("request").h("send", this.Zz, this);
  a.get("request").h("successresponse", this.Sz, this);
  this.J = a.get("dialog");
  this.ks = [];
  (0,z.jn)(this)
};
z.jn = function(a) {
  var b = window.Date.now();
  window.OB_startTime && window.setTimeout(function() {
    var a = b - window.OB_startTime;
    (0,z.kj)("pageload");
    (0,z.lj)("client.loadtime", a);
    3E4 < a && (0,z.kj)("slowload")
  }.bind(a), 0);
  window.performance && window.performance.timing && window.addEventListener("load", function() {
    window.setTimeout(function() {
      var a = window.performance.timing, d = a.navigationStart;
      (0,z.lj)("client.perf.dns", a.domainLookupEnd - a.domainLookupStart);
      (0,z.lj)("client.perf.firstByte", a.responseStart - d);
      (0,z.lj)("client.perf.lastByte", a.responseEnd - d);
      (0,z.lj)("client.perf.appstart", b - d);
      (0,z.lj)("client.perf.domComplete", a.domComplete - d);
      (0,z.lj)("client.perf.loadEnd", a.loadEventEnd - d)
    }, 500)
  }, z.m)
};
z.kn = function(a) {
  this.t = a;
  this.pp = z.ln;
  this.vf = [];
  this.Ys = z.n;
  a.get("app").h("startNav", this.qB, this);
  a.get("app").h(z.vj, this.Sx, this)
};
z.mn = function(a, b) {
  this.hm = a;
  this.Oi = b;
  this.Lb = new z.$g;
  this.Hc = z.nn;
  this.Ll = [];
  this.h = this.Lb.h.bind(this.Lb)
};
z.on = function(a) {
  "])}while(1);\x3c/x\x3e" == a.substr(0, 16) && (a = a.substring(16));
  return a
};
z.pn = function(a) {
  for(var b = z.nn, c = 0;c < a.Ll.length;c++) {
    b = window.Math.max(b, a.Ll[c].state)
  }
  a.Hc != b && (a.Hc = b, a.Lb.F("statechange", b))
};
z.qn = function(a) {
  var b = [], c;
  for(c in a) {
    b.push((0,window.encodeURIComponent)(c) + "\x3d" + (0,window.encodeURIComponent)(a[c]))
  }
  return b.join("\x26")
};
z.rn = function(a) {
  z.sn && (0,z.g)((0,window.Error)("Tried to make two module managers. Whooops!"));
  z.sn = this;
  this.t = a;
  this.gt = {};
  this.ht = {};
  this.vl = {};
  this.pa = {};
  this.no = {}
};
z.tn = function(a, b) {
  var c = a.gt[b], d = a.ht[b];
  if(!c || !d) {
    return(0,z.Ib)((0,window.Error)("Module " + b + " cannot be found"))
  }
  if(a.vl[b]) {
    return(0,z.Hb)(z.m)
  }
  if(a.pa[b]) {
    return a.pa[b].Ie()
  }
  for(var e = (0,z.Hb)(z.m), f = 0;f < c.length;f++) {
    a.vl[c[f]] || (0,z.Cb)(e, (0,z.tn)(a, c[f]))
  }
  c = new z.vb;
  a.pa[b] = c;
  (0,z.H)((0,z.G)(e, function() {
    if((0,z.ma)(d)) {
      for(var a = (0,z.Hb)(z.m), c = 0;c < d.length;c++) {
        (0,z.G)(a, this.ct.bind(this, d[c]))
      }
      this.no[b] = a
    }else {
      this.ct(d)
    }
  }, a), c.If, c);
  return c.Ie()
};
z.un = function(a, b) {
  var c = a.pa[b];
  c || (0,z.g)((0,window.Error)('Called finishLoading on "' + b + '", which looks like it was not in the process of loading.'));
  (0,z.G)(a.no[b] || (0,z.Hb)(z.m), function() {
    delete this.pa[b];
    delete this.no[b];
    this.vl[b] = z.m;
    c.Ga(z.m)
  }, a)
};
z.vn = function() {
  this.t = {};
  this.Th = {}
};
z.fk = function(a, b) {
  if(a.t[b]) {
    return(0,z.Hb)(a.get(b))
  }
  a.Th[b] || (0,z.g)((0,window.Error)('No service registered with id "' + b + '"'));
  return(0,z.G)((0,z.tn)(z.sn, a.Th[b]), function() {
    var a = this.get(b);
    "function" == typeof a.Rc && a.Rc();
    return a
  }, a)
};
z.wn = function(a, b, c) {
  (a.t[b] || a.Th[b]) && (0,z.g)((0,window.Error)('Service already registered with id "' + b + '"'));
  a.Th[b] = c
};
z.xn = function(a) {
  this.Z = a.get("app");
  this.fa = a.get("request");
  this.qg = z.s;
  this.Z.h("startNav", this.aA, this);
  this.Z.h(z.vj, this.ug, this);
  this.fa.h("statechange", this.refresh, this)
};
z.yn = function(a) {
  a.get("app").h(z.vj, this.ug, this)
};
z.zn = function(a, b) {
  var c = window.document.createElement("img");
  (0,z.Ef)(c, "load", function() {
    (0,z.N)(b, "img-loaded")
  });
  c.src = a
};
z.An = function(a, b) {
  this.type = a;
  this.currentTarget = this.target = b
};
z.Bn = function(a, b) {
  a && this.Rd(a, b)
};
z.Cn = function() {
};
z.Dn = function(a, b, c, d, e) {
  if((0,z.ma)(b)) {
    for(var f = 0;f < b.length;f++) {
      (0,z.Dn)(a, b[f], c, d, e)
    }
    return z.n
  }
  a: {
    b || (0,z.g)((0,window.Error)("Invalid event type"));
    d = !!d;
    var h = z.En;
    b in h || (h[b] = {qa:0, Cc:0});
    h = h[b];
    d in h || (h[d] = {qa:0, Cc:0}, h.qa++);
    var h = h[d], f = (0,z.sa)(a), k;
    h.Cc++;
    if(h[f]) {
      k = h[f];
      for(var p = 0;p < k.length;p++) {
        if(h = k[p], h.Sf == c && h.ak == e) {
          if(h.ih) {
            break
          }
          k[p].rm = z.s;
          a = k[p];
          break a
        }
      }
    }else {
      k = h[f] = [], h.qa++
    }
    p = (0,z.Fn)();
    h = new z.Cn;
    h.Rd(c, p, a, b, d, e);
    h.rm = z.s;
    p.src = a;
    p.Sf = h;
    k.push(h);
    z.Gn[f] || (z.Gn[f] = []);
    z.Gn[f].push(h);
    a.addEventListener ? (a == z.ha || !a.customEvent_) && a.addEventListener(b, p, d) : a.attachEvent(b in z.Hn ? z.Hn[b] : z.Hn[b] = "on" + b, p);
    a = h
  }
  b = a.key;
  z.In[b] = a;
  return b
};
z.Fn = function() {
  var a = z.Jn, b = z.Kn ? function(c) {
    return a.call(b.src, b.Sf, c)
  } : function(c) {
    c = a.call(b.src, b.Sf, c);
    if(!c) {
      return c
    }
  };
  return b
};
z.Ln = function(a, b, c, d, e) {
  if((0,z.ma)(b)) {
    for(var f = 0;f < b.length;f++) {
      (0,z.Ln)(a, b[f], c, d, e)
    }
  }else {
    d = !!d;
    a: {
      f = z.En;
      if(b in f && (f = f[b], d in f && (f = f[d], a = (0,z.sa)(a), f[a]))) {
        a = f[a];
        break a
      }
      a = z.n
    }
    if(a) {
      for(f = 0;f < a.length;f++) {
        if(a[f].Sf == c && a[f].capture == d && a[f].ak == e) {
          (0,z.Mn)(a[f].key);
          break
        }
      }
    }
  }
};
z.Mn = function(a) {
  var b = z.In[a];
  if(!b || b.ih) {
    return z.s
  }
  var c = b.src, d = b.type, e = b.gw, f = b.capture;
  c.removeEventListener ? (c == z.ha || !c.customEvent_) && c.removeEventListener(d, e, f) : c.detachEvent && c.detachEvent(d in z.Hn ? z.Hn[d] : z.Hn[d] = "on" + d, e);
  c = (0,z.sa)(c);
  z.Gn[c] && (e = z.Gn[c], (0,z.Ya)(e, b), 0 == e.length && delete z.Gn[c]);
  b.ih = z.m;
  if(b = z.En[d][f][c]) {
    b.Rv = z.m, (0,z.Nn)(d, f, c, b)
  }
  delete z.In[a];
  return z.m
};
z.Nn = function(a, b, c, d) {
  if(!d.Rm && d.Rv) {
    for(var e = 0, f = 0;e < d.length;e++) {
      d[e].ih ? d[e].gw.src = z.n : (e != f && (d[f] = d[e]), f++)
    }
    d.length = f;
    d.Rv = z.s;
    0 == f && (delete z.En[a][b][c], z.En[a][b].qa--, 0 == z.En[a][b].qa && (delete z.En[a][b], z.En[a].qa--), 0 == z.En[a].qa && delete z.En[a])
  }
};
z.On = function(a) {
  var b = 0;
  if(a != z.n) {
    if(a = (0,z.sa)(a), z.Gn[a]) {
      a = z.Gn[a];
      for(var c = a.length - 1;0 <= c;c--) {
        (0,z.Mn)(a[c].key), b++
      }
    }
  }else {
    (0,z.kb)(z.In, function(a, c) {
      (0,z.Mn)(c);
      b++
    })
  }
};
z.Pn = function(a, b, c, d, e) {
  var f = 1;
  b = (0,z.sa)(b);
  if(a[b]) {
    var h = --a.Cc, k = a[b];
    k.Rm ? k.Rm++ : k.Rm = 1;
    try {
      for(var p = k.length, q = 0;q < p;q++) {
        var z$ = k[q];
        z$ && !z$.ih && (f &= (0,z.Qn)(z$, e) !== z.s)
      }
    }finally {
      a.Cc = window.Math.max(h, a.Cc), k.Rm--, (0,z.Nn)(c, d, b, k)
    }
  }
  return(0,window.Boolean)(f)
};
z.Qn = function(a, b) {
  a.rm && (0,z.Mn)(a.key);
  return a.handleEvent(b)
};
z.Jn = function(a, b) {
  if(a.ih) {
    return z.m
  }
  var c = a.type, d = z.En;
  if(!(c in d)) {
    return z.m
  }
  var d = d[c], e, f;
  if(!z.Kn) {
    e = b || (0,z.ga)("window.event");
    var h = z.m in d, k = z.s in d;
    if(h) {
      if(0 > e.keyCode || e.returnValue != z.l) {
        return z.m
      }
      a: {
        var p = z.s;
        if(0 == e.keyCode) {
          try {
            e.keyCode = -1;
            break a
          }catch(q) {
            p = z.m
          }
        }
        if(p || e.returnValue == z.l) {
          e.returnValue = z.m
        }
      }
    }
    p = new z.Bn;
    p.Rd(e, this);
    e = z.m;
    try {
      if(h) {
        for(var z$ = [], U = p.currentTarget;U;U = U.parentNode) {
          z$.push(U)
        }
        f = d[z.m];
        f.Cc = f.qa;
        for(var F = z$.length - 1;!p.fh && 0 <= F && f.Cc;F--) {
          p.currentTarget = z$[F], e &= (0,z.Pn)(f, z$[F], c, z.m, p)
        }
        if(k) {
          f = d[z.s];
          f.Cc = f.qa;
          for(F = 0;!p.fh && F < z$.length && f.Cc;F++) {
            p.currentTarget = z$[F], e &= (0,z.Pn)(f, z$[F], c, z.s, p)
          }
        }
      }else {
        e = (0,z.Qn)(a, p)
      }
    }finally {
      z$ && (z$.length = 0)
    }
    return e
  }
  c = new z.Bn(b, this);
  return e = (0,z.Qn)(a, c)
};
z.Rn = function(a, b) {
  z.Ik.call(this, a);
  this.bt = b
};
z.Sn = function(a, b) {
  this.t = b;
  this.sB = b.get("activity").Nk;
  this.fa = b.get("request");
  this.D = a;
  this.Ib = this.xl = z.n;
  this.Na = b.get("butter-bar");
  this.J = b.get("dialog");
  this.Aj = z.n;
  (0,z.Tn)(this);
  this.df()
};
z.Tn = function(a) {
  (0,z.H)((0,z.G)((0,z.G)(a.fa.get("/me/activity", {V:z.m, background:z.m}), function(a) {
    var c = a.value;
    a = a.links.loadMore;
    0 < c.length && a && (this.Ib = new z.Rn(this.t, a), this.Ib.Lc(c), this.Ib.h("add", this.RA, this));
    this.Aj = new z.Ok(this.t, this.Ib, 3);
    this.Aj.qh(this.D)
  }, a), a.fe, a), z.Og)
};
z.Un = function(a, b, c) {
  b = !a.users.length && !a.collections.length && !a.posts.length ? '\x3cspan class\x3d"site-nav-search-no-results"\x3e\x3cspan class\x3d"site-nav-search-no-results-icon"\x3e:(\x3c/span\x3e\x3cspan class\x3d"site-nav-search-result-info"\x3e\x3cspan class\x3d"site-nav-search-result-title"\x3eNo matches\x3c/span\x3e\x3cspan class\x3d"site-nav-search-result-snippet"\x3eTry \x3ca href\x3d"/collections" title\x3d"Go to featured collections"\x3efeatured collections\x3c/a\x3e for good reads.\x3c/span\x3e\x3c/span\x3e\x3c/span\x3e' : 
  "";
  var d;
  if(a.users.length) {
    d = "";
    for(var e = a.users, f = e.length, h = 0;h < f;h++) {
      var k = e[h];
      d += '\x3cbutton class\x3d"btn-link site-nav-search-result" data-action\x3d"navigate-to-search-result" data-action-value\x3d"/@' + (0,z.Y)(k.username) + ",user," + (0,z.Y)(h) + '"\x3e\x3cspan class\x3d"icons-avatar-user"\x3e' + (0,z.yi)({user:k, Cm:z.m, Wb:"icons-avatar-user-img"}, c) + '\x3c/span\x3e\x3cspan class\x3d"site-nav-search-result-info"\x3e\x3cspan class\x3d"site-nav-search-result-title"\x3e' + (0,z.X)(k.name) + "\x3c/span\x3e" + (k.virtuals.bioHTML ? '\x3cspan class\x3d"site-nav-search-result-snippet"\x3e' + 
      (0,z.$h)(k.virtuals.bioHTML) + "\x3c/span\x3e" : "") + "\x3c/span\x3e\x3c/button\x3e"
    }
  }else {
    d = ""
  }
  b += d;
  if(a.collections.length) {
    d = "";
    e = a.collections;
    f = e.length;
    for(h = 0;h < f;h++) {
      k = e[h];
      d += '\x3cbutton class\x3d"btn-link site-nav-search-result" data-action\x3d"navigate-to-search-result" data-action-value\x3d"/' + (0,z.Y)(k.slug) + ",collection," + (0,z.Y)(h) + '"\x3e';
      var p = (0,z.ki)({imageId:k.image.imageId, strategy:"crop-fixed", width:"20", height:"20", ym:"t"}, 0, c);
      d += '\x3cspan class\x3d"collection-icon" style\x3d"background-image: url(\'' + (0,z.Y)((0,z.Yh)(p)) + '\')"\x3e\x3c/span\x3e\x3cspan class\x3d"site-nav-search-result-info"\x3e\x3cspan class\x3d"site-nav-search-result-title"\x3e' + (0,z.X)(k.name) + '\x3c/span\x3e\x3cspan class\x3d"site-nav-search-result-snippet"\x3e' + (0,z.X)(k.metadata.postCount) + " posts" + (k.description ? " \x26middot; " + (0,z.X)(k.description) : "") + "\x3c/span\x3e\x3c/span\x3e\x3c/button\x3e"
    }
    c = d
  }else {
    c = ""
  }
  c = b + c;
  if(a.posts.length) {
    b = "";
    a = a.posts;
    d = a.length;
    for(e = 0;e < d;e++) {
      f = a[e], b += '\x3cbutton class\x3d"btn-link site-nav-search-result" data-action\x3d"navigate-to-search-result" data-action-value\x3d"' + (0,z.mi)({post:f}) + ",post," + (0,z.Y)(e) + '"\x3e\x3cspan class\x3d"icons icons-draft"\x3e\x3c/span\x3e\x3cspan class\x3d"site-nav-search-result-info"\x3e\x3cspan class\x3d"site-nav-search-result-title"\x3e' + (0,z.X)(f.title) + '\x3c/span\x3e\x3cspan class\x3d"site-nav-search-result-snippet"\x3e' + (0,z.X)(f.creator.name) + " \x26middot; " + (0,z.vi)(f.virtuals) + 
      "\x3c/span\x3e\x3c/span\x3e\x3c/button\x3e"
    }
    a = b
  }else {
    a = ""
  }
  return c + a
};
z.Vn = function(a, b) {
  this.Va = b.get("request");
  this.Z = b.get("app");
  this.Wl = a;
  this.$t = a.getElementsByClassName("site-nav-search")[0];
  this.yp = a.getElementsByClassName("site-nav-search-wrapper")[0];
  this.Fg = a.getElementsByClassName("site-nav-search-input-mobile")[0];
  this.Sh = a.getElementsByClassName("site-nav-search-input")[0];
  this.Bj = a.getElementsByClassName("site-nav-search-results")[0];
  this.au = a.getElementsByClassName("site-nav-search-open-trigger")[0];
  this.ir = z.s;
  this.df()
};
z.Wn = function(a) {
  (0,z.N)(a.Wl, "site-nav-search-fade-in-bg")
};
z.Xn = function(a, b, c) {
  b = "";
  if(0 < a.activities.length) {
    b += '\x3cul class\x3d"notifications-list"\x3e\x3cli class\x3d"notifications-list-heading"\x3eNotifications\x3c/li\x3e';
    for(var d = a.activities, e = d.length, f = 0;f < e;f++) {
      b += (0,z.Yn)({da:d[f], lastViewedActivityAt:a.lastViewedActivityAt}, 0, c)
    }
    b += '\x3cli class\x3d"navigable-list-item"\x3e\x3cbutton title\x3d"See Older Notifications" class\x3d"no-link btn-chromeless notifications-more" data-action\x3d"notifications-more"\x3eSee Older Notifications\x26hellip;\x3c/button\x3e\x3c/li\x3e\x3c/ul\x3e'
  }
  return b
};
z.Yn = function(a, b, c) {
  b = "";
  var d = a.da.metadata.actors && 1 == a.da.metadata.actors.length ? a.da.metadata.actors[0] : a.da.metadata.actor, e = a.da.metadata.post, f = a.da.metadata.collection, h = a.da.metadata.note, k = a.da.metadata.followUp;
  if(d) {
    b += '\x3cli class\x3d"notifications-list-item ' + (a.da.createdAt > a.lastViewedActivityAt ? " notifications-list-item-new" : "") + ' navigable-list-item"\x3e\x3cdiv class\x3d"avatar-icon notification-user-avatar-icon"\x3e' + (0,z.yi)({user:d, Dw:d ? d.name : "", Wb:"icons-avatar-user-img", tabIndex:-1}, c) + '\x3c/div\x3e\x3ca class\x3d"notifications-list-item-btn" tabindex\x3d"-1" href\x3d"' + (0,z.Zn)({type:a.da.metadata.activityType, post:e, collection:f, actor:d, note:h, followUp:k}, c) + 
    '" data-source\x3d"activity"\x3e';
    if(d) {
      b += (0,z.X)(d.name) + " "
    }else {
      switch(d = a.da.metadata.count, d) {
        case 1:
          b += (0,z.X)(a.da.metadata.actors[0].name);
          break;
        case 2:
          b += (0,z.X)(a.da.metadata.actors[0].name) + " and " + (0,z.X)(a.da.metadata.actors[1].name) + " ";
          break;
        case 3:
          b += (0,z.X)(a.da.metadata.actors[0].name) + ", " + (0,z.X)(a.da.metadata.actors[1].name) + ", and " + (0,z.X)(a.da.metadata.actors[2].name) + " ";
          break;
        default:
          b += (0,z.X)(a.da.metadata.actors[0].name) + ", " + (0,z.X)(a.da.metadata.actors[1].name) + ", " + (0,z.X)(a.da.metadata.actors[2].name) + ", and " + (0,z.X)(d - 3) + " other" + (4 < d ? "s" : "") + " "
      }
    }
    b += (0,z.Kh)("g", a.da.metadata.activityType)({post:e, followUp:k, collection:f}, z.n, c) + "\x3c/a\x3e\x3c/li\x3e"
  }else {
    b += '\x3cli class\x3d"notifications-list-item ' + (a.da.metadata.actors && 1 < a.da.metadata.actors.length ? "extra-notification-avatars" : "") + ' navigable-list-item"\x3e' + (a.da.metadata.actors && 1 < a.da.metadata.actors.length ? '\x3cspan class\x3d"icons icons-circle-check notifications-icons-recommendation"\x3e\x3c/span\x3e' : '\x3cspan class\x3d"avatar-icon notification-user-avatar-icon"\x3e' + (0,z.yi)({user:d, Dw:d ? d.name : "", Wb:"icons-avatar-user-img", tabIndex:-1}, c) + "\x3c/span\x3e") + 
    '\x3ca class\x3d"notifications-list-item-btn" tabindex\x3d"-1" href\x3d"' + (0,z.Zn)({type:a.da.metadata.activityType, post:e, collection:f, actor:d, note:h, followUp:k}, c) + '"\x3e';
    if(d) {
      b += (0,z.X)(d.name) + " "
    }else {
      switch(d = a.da.metadata.count, d) {
        case 1:
          b += (0,z.X)(a.da.metadata.actors[0].name) + " ";
          break;
        case 2:
          b += (0,z.X)(a.da.metadata.actors[0].name) + " and " + (0,z.X)(a.da.metadata.actors[1].name) + " ";
          break;
        case 3:
          b += (0,z.X)(a.da.metadata.actors[0].name) + ", " + (0,z.X)(a.da.metadata.actors[1].name) + ", and " + (0,z.X)(a.da.metadata.actors[2].name) + " ";
          break;
        default:
          b += (0,z.X)(a.da.metadata.actors[0].name) + ", " + (0,z.X)(a.da.metadata.actors[1].name) + ", " + (0,z.X)(a.da.metadata.actors[2].name) + ", and " + (0,z.X)(d - 3) + " other" + (4 < d ? "s" : "") + " "
      }
    }
    b += (0,z.Kh)("g", a.da.metadata.activityType)({post:e, followUp:k, collection:f}, z.n, c) + "\x3c/a\x3e";
    if(a.da.metadata.actors && 1 < a.da.metadata.actors.length) {
      b += '\x3cdiv class\x3d"notification-user-avatar-icon-wrapper"\x3e';
      f = a.da.metadata.actors;
      k = f.length;
      for(d = 0;d < k;d++) {
        h = f[d], b += 3 > d ? '\x3cdiv class\x3d"avatar-icon notification-user-avatar-icon"\x3e' + (0,z.yi)({user:h, Dw:h ? h.name : "", Wb:"icons-avatar-user-img", tabIndex:-1}, c) + "\x3c/div\x3e" : ""
      }
      b += (3 < a.da.metadata.actors.length ? '\x3cdiv class\x3d"avatar-icon notification-user-avatar-icon icons-extra"\x3e\x3cbutton class\x3d"notification-item-more" data-action\x3d"view-actors" data-action-value\x3d"' + (0,z.Y)(a.da.links.actors) + '" dialog-title\x3d"Recommended ' + (0,z.Y)(e.title) + '"\x3e+' + (0,z.X)(a.da.metadata.actors.length - 3) + "\x3c/button\x3e\x3c/div\x3e" : "") + "\x3c/div\x3e"
    }
    b += "\x3c/li\x3e"
  }
  return b
};
z.$n = function(a, b, c) {
  var d = '\x3cul class\x3d"notification-actors-list"\x3e';
  b = a.actors;
  for(var e = b.length, f = 0;f < e;f++) {
    var h;
    h = (0,z.Gh)(a, {user:b[f], Wb:"avatar-icon notification-actors-list-icon", Ia:"notification-actors-list-link", Nv:"notification-actors-list-name"});
    var k = c;
    h = (0,z.zi)((0,z.Gh)(h, {width:64, height:64, LC:z.m}), k);
    d += '\x3cli class\x3d"notification-actors-list-item"\x3e' + h + "\x3c/li\x3e"
  }
  return d + "\x3c/ul\x3e"
};
z.Zn = function(a, b) {
  var c = "";
  switch(a.type) {
    case "follow_up_published":
    ;
    case "follow_up_created":
    ;
    case "post_added_as_follow_up":
      c += (0,z.li)(a, b) + "#fr-" + (0,z.Y)(a.followUp.value.followUpId);
      break;
    case "post_recommended":
    ;
    case "post_collaborated_published":
      c += (0,z.li)(a, b);
      break;
    case "post_cross_posted":
    ;
    case "collection_cross_posted":
    ;
    case "collection_posted":
      c += (0,z.li)(a, b);
      break;
    case "post_noted":
    ;
    case "note_replied":
    ;
    case "post_note_replied":
    ;
    case "note_published":
    ;
    case "mention_in_note":
    ;
    case "mention_in_note_reply":
      c += (0,z.li)(a, b) + "#" + (0,z.Y)(a.note.anchor) + "-" + (0,z.Y)(a.note.noteId)
  }
  return c
};
z.ao = function(a, b) {
  this.t = b;
  this.Z = b.get("app");
  this.Nk = b.get("activity").Nk;
  this.Va = b.get("request");
  this.Na = b.get("butter-bar");
  this.Ba = b.get("dom-monitor");
  this.tf = a;
  this.ul = z.s;
  this.gu = window.document.body.getElementsByClassName("site-nav-overlay")[0];
  this.xF = a.getElementsByClassName("site-nav-list")[0];
  this.Fh = z.s;
  this.Wd = 0;
  (0,z.Q)("isAuthenticated") && (0,z.Q)("variants.can_view_activity") && (this.wF = new z.Sn(a.getElementsByClassName("site-nav-scrollable-container")[0], b));
  (0,z.Q)("variants.enable_search") && (this.bB = new z.Vn(a.getElementsByClassName("site-nav-scrollable-container")[0], b));
  this.df()
};
z.bo = function(a) {
  var b = window.document.getElementsByClassName("site-nav-list-item-active")[0];
  b && (0,z.O)(b, "site-nav-list-item-active");
  a && ((0,z.N)(a, "site-nav-list-item-active"), a.querySelector("*:not(.avatar-icon) \x3e a, input, button").focus())
};
z.co = function(a) {
  a.ul && (a.Ba.Aa("scroll", a.he, a), a.ul = z.s)
};
z.eo = function(a) {
  z.$g.call(this);
  this.lj = this.Ed = this.uu = this.Gc = z.n;
  this.Ba = a.get("dom-monitor");
  this.Ba.h("scroll", this.wg, this);
  this.Z = a.get("app");
  this.Z.h(z.vj, this.ug, this);
  (0,z.fo)(this)
};
z.go = function(a) {
  if(a.Gc) {
    var b = a.Gc.scrollTop, c = a.Gc.getBoundingClientRect().height, d = a.Gc.scrollHeight, e = window.Date.now(), f = window.Math.abs(a.Ws - e);
    500 < f && 1E4 < f && (a.F(z.ho, {viewStartedAt:a.uu, scrollTop:b, scrollBottom:b + c, scrollableHeight:d, loggedAt:e}), a.Sy = b, a.Ws = e)
  }
};
z.fo = function(a, b) {
  a.lj = !a.lj || b ? 2E3 : 2 * a.lj;
  18E5 >= a.lj && (a.Ed = (0,window.setTimeout)(a.hA.bind(a), a.lj))
};
z.io = function() {
  z.Hd.call(this);
  this.aH = {};
  this.AF = this
};
z.jo = function(a) {
  z.Hd.call(this);
  this.Lf = a;
  this.Xa = []
};
z.ko = function(a, b, c, d, e, f) {
  (0,z.ma)(c) || (z.lo[0] = c, c = z.lo);
  for(var h = 0;h < c.length;h++) {
    var k = (0,z.Dn)(b, c[h], d || a, e || z.s, f || a.Lf || a);
    a.Xa.push(k)
  }
  return a
};
z.mo = function(a) {
  (0,z.xc)(a.Xa, z.Mn);
  a.Xa.length = 0
};
z.fa = [];
z.ha = this;
z.ta = "closure_uid_" + (1E9 * window.Math.random() >>> 0);
z.ua = 0;
z.no = window.Date.now || function() {
  return+new window.Date
};
(0,z.C)(z.Aa, window.Error);
z.Aa.prototype.name = "CustomError";
z.Ha = /&/g;
z.Ia = /</g;
z.Ja = />/g;
z.La = /\"/g;
z.Fa = /[&<>\"]/;
z.oo = 2147483648 * window.Math.random() | 0;
z.bb = window.Array.prototype;
z.Xa = z.bb.indexOf ? function(a, b, c) {
  return z.bb.indexOf.call(a, b, c)
} : function(a, b, c) {
  c = c == z.n ? 0 : 0 > c ? window.Math.max(0, a.length + c) : c;
  if((0,z.oa)(a)) {
    return!(0,z.oa)(b) || 1 != b.length ? -1 : a.indexOf(b, c)
  }
  for(;c < a.length;c++) {
    if(c in a && a[c] === b) {
      return c
    }
  }
  return-1
};
z.xc = z.bb.forEach ? function(a, b, c) {
  z.bb.forEach.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = (0,z.oa)(a) ? a.split("") : a, f = 0;f < d;f++) {
    f in e && b.call(c, e[f], f, a)
  }
};
z.bc = z.bb.filter ? function(a, b, c) {
  return z.bb.filter.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = [], f = 0, h = (0,z.oa)(a) ? a.split("") : a, k = 0;k < d;k++) {
    if(k in h) {
      var p = h[k];
      b.call(c, p, k, a) && (e[f++] = p)
    }
  }
  return e
};
z.qf = z.bb.map ? function(a, b, c) {
  return z.bb.map.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = (0,window.Array)(d), f = (0,z.oa)(a) ? a.split("") : a, h = 0;h < d;h++) {
    h in f && (e[h] = b.call(c, f[h], h, a))
  }
  return e
};
z.Gb = z.bb.some ? function(a, b, c) {
  return z.bb.some.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = (0,z.oa)(a) ? a.split("") : a, f = 0;f < d;f++) {
    if(f in e && b.call(c, e[f], f, a)) {
      return z.m
    }
  }
  return z.s
};
z.po = z.bb.every ? function(a, b, c) {
  return z.bb.every.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = (0,z.oa)(a) ? a.split("") : a, f = 0;f < d;f++) {
    if(f in e && !b.call(c, e[f], f, a)) {
      return z.s
    }
  }
  return z.m
};
z.sb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
window.Function.prototype.bind || (window.Function.prototype.bind = function(a) {
  var b = window.Array.prototype.slice.call(arguments);
  b.unshift(this);
  return z.ya.apply(z.n, b)
});
window.Array.prototype.indexOf || (window.Array.prototype.indexOf = function(a) {
  var b = window.Array.prototype.slice.call(arguments);
  b.unshift(this);
  return z.Xa.apply(z.n, b)
});
window.Array.prototype.map || (window.Array.prototype.map = function(a) {
  var b = window.Array.prototype.slice.call(arguments);
  b.unshift(this);
  return z.qf.apply(z.n, b)
});
window.Date.now || (window.Date.now = function() {
  return(new window.Date).valueOf()
});
window.Array.isArray || (window.Array.isArray = z.ma);
window.Object.keys || (window.Object.keys = z.nb);
(function() {
  for(var a = 0, b = ["ms", "moz", "webkit", "o"], c = 0;c < b.length && !window.requestAnimationFrame;++c) {
    window.requestAnimationFrame = window[b[c] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[b[c] + "CancelAnimationFrame"] || window[b[c] + "CancelRequestAnimationFrame"]
  }
  window.requestAnimationFrame || (window.requestAnimationFrame = function(b) {
    var c = (new window.Date).getTime(), f = window.Math.max(0, 16 - (c - a)), h = window.setTimeout(function() {
      b(window.NaN)
    }, f);
    a = c + f;
    return h
  });
  window.cancelAnimationFrame || (window.cancelAnimationFrame = function(a) {
    (0,window.clearTimeout)(a)
  })
})();
window.URL = window.URL || window.webkitURL || window;
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
z.w = z.vb.prototype;
z.w.Oc = z.s;
z.w.Zj = z.s;
z.w.Qp = z.s;
z.w.PB = z.s;
z.w.mr = z.s;
z.w.qm = 0;
z.w.cancel = function(a) {
  if(this.Oc) {
    this.uk instanceof z.vb && this.uk.cancel()
  }else {
    if(this.kb) {
      var b = this.kb;
      delete this.kb;
      a ? b.cancel(a) : (b.qm--, 0 >= b.qm && b.cancel())
    }
    this.Tv ? this.Tv.call(this.Ou, this) : this.mr = z.m;
    this.Oc || this.If(new z.Lb(this))
  }
};
z.w.Ku = function(a, b) {
  this.Qp = z.s;
  (0,z.wb)(this, a, b)
};
z.w.Ga = function(a) {
  (0,z.yb)(this);
  (0,z.wb)(this, z.m, a)
};
z.w.If = function(a) {
  (0,z.yb)(this);
  (0,z.wb)(this, z.s, a)
};
z.w.Bf = function(a) {
  (0,z.Ab)(this, a.Ga, a.If, a);
  return this
};
z.w.Ie = function(a) {
  var b = new z.vb;
  this.Bf(b);
  a && (b.kb = this, this.qm++);
  return b
};
(0,z.C)(z.zb, z.Aa);
z.zb.prototype.message = "Deferred has already fired";
z.zb.prototype.name = "AlreadyCalledError";
(0,z.C)(z.Lb, z.Aa);
z.Lb.prototype.message = "Deferred was cancelled";
z.Lb.prototype.name = "CancelledError";
z.Ob = /\s*;\s*/;
z.w = z.Mb.prototype;
z.w.isEnabled = (0,z.x)(24);
z.w.set = function(a, b, c, d, e, f) {
  /[;=\s]/.test(a) && (0,z.g)((0,window.Error)('Invalid cookie name "' + a + '"'));
  /[;\r\n]/.test(b) && (0,z.g)((0,window.Error)('Invalid cookie value "' + b + '"'));
  (0,z.la)(c) || (c = -1);
  e = e ? ";domain\x3d" + e : "";
  d = d ? ";path\x3d" + d : "";
  f = f ? ";secure" : "";
  c = 0 > c ? "" : 0 == c ? ";expires\x3d" + (new window.Date(1970, 1, 1)).toUTCString() : ";expires\x3d" + (new window.Date((0,z.no)() + 1E3 * c)).toUTCString();
  this.eb.cookie = a + "\x3d" + b + e + d + c + f
};
z.w.get = function(a, b) {
  for(var c = a + "\x3d", d = (this.eb.cookie || "").split(z.Ob), e = 0, f;f = d[e];e++) {
    if(0 == f.lastIndexOf(c, 0)) {
      return f.substr(c.length)
    }
    if(f == a) {
      return""
    }
  }
  return b
};
z.w.remove = function(a, b, c) {
  var d = this.Og(a);
  this.set(a, "", 0, b, c);
  return d
};
z.w.Kf = function() {
  return(0,z.Nb)(this).keys
};
z.w.pe = function() {
  return(0,z.Nb)(this).Bk
};
z.w.Mm = function() {
  return!this.eb.cookie
};
z.w.Ne = function() {
  return!this.eb.cookie ? 0 : (this.eb.cookie || "").split(z.Ob).length
};
z.w.Og = function(a) {
  return(0,z.la)(this.get(a))
};
z.w.clear = function() {
  for(var a = (0,z.Nb)(this).keys, b = a.length - 1;0 <= b;b--) {
    this.remove(a[b])
  }
};
z.qo = new z.Mb(window.document);
z.qo.WE = 3950;
(0,z.C)(z.Qb, z.I);
(0,z.C)(z.J, z.I);
z.ro = new z.I("homepage.viewed");
z.so = new z.I("collection.loaded");
z.to = new z.I("collection.subscribed");
z.uo = new z.I("collection.unsubscribed");
z.vo = new z.I("post.started");
z.wo = new z.I("post.recommendClicked");
z.xo = new z.I("post.crosspostClicked");
z.gm = new z.I("post.crosspostSuccess");
z.yo = new z.I("post.crosspostRemoved");
z.zo = new z.I("post.shareDraftClicked");
z.Ao = new z.I("post.postEditorLocked");
z.Bo = new z.I("post.clientUpvote");
z.Co = new z.I("post.clientUnvote");
z.Do = new z.I("post.clientRead");
z.Eo = new z.I("post.share");
z.Fo = new z.I("post.addedToReadingList");
z.Go = new z.I("post.removedFromReadingList");
z.Ho = new z.I("post.readNext");
z.Io = new z.I("post.clientCreated");
z.Jo = new z.I("post.saved");
z.Ko = new z.I("post.clientDismissed");
z.Lo = new z.I("post.published");
z.Mo = new z.I("post.republished");
z.No = new z.I("profile.viewed");
z.Oo = new z.I("profile.enterEdit");
z.Po = new z.I("profile.cancelEdit");
z.Qo = new z.I("profile.saved");
new z.I("notes.ui.showToolbar");
z.Ro = new z.I("notes.ui.showNotes");
z.So = new z.I("notes.ui.noteCreated");
z.To = new z.I("notes.ui.noteEdited");
z.Uo = new z.I("notes.ui.noteDeleted");
z.Vo = new z.I("notes.ui.noteStateChanged");
z.Wo = new z.I("notes.ui.replyCreated");
z.Xo = new z.I("notes.ui.replyEdited");
z.Yo = new z.I("notes.ui.replyDeleted");
z.Zo = new z.I("notes.ui.replyHidden");
z.$o = new z.I("followUp.ui.started");
z.ap = new z.I("followUp.ui.created");
z.bp = new z.I("followUp.ui.deleted");
z.cp = new z.I("followUp.ui.visibilityChanged");
z.dp = new z.I("followUp.ui.clicked");
new z.I("activity.viewed");
z.$k = new z.I("ui.imageZoom");
z.ep = new z.I("ui.imageInsert");
z.fp = new z.I("post.scrolled");
z.gp = new z.I("search.opened");
z.hp = new z.I("search.queried");
z.ip = new z.I("search.returnedResults");
z.jp = new z.I("search.resultClicked");
z.kp = new z.J("collection.viewed", ["collectionId", "createdAt", "isAuthenticated"], "collectionId");
z.lp = new z.J("post.viewed", ["postId", "userId", "createdAt", "isAuthenticated", "referrer"]);
new z.J("posts.presented", ["postIds", "userId", "createdAt", "isAuthenticated"]);
new z.J("post.read", ["postId", "userId", "createdAt", "isAuthenticated"], "postId");
new z.J("post.read.unique", ["postId", "userId", "createdAt", "isAuthenticated"], "postId");
new z.J("post.read.reread", ["postId", "userId", "createdAt", "isAuthenticated"], "postId");
new z.J("post.read.total", ["postId", "userId", "createdAt", "isAuthenticated"], "postId");
new z.J("post.detectLanguage", ["postId"], "postId");
new z.I("post.dismissed");
new z.I("email.queued");
new z.I("email.send");
new z.I("email.send.success");
new z.I("email.send.failure");
new z.J("email.send.regular", ["userId", "email", "emailType"]);
new z.J("email.send.required", ["userId", "email", "emailType"]);
new z.J("email.sendVerify", ["userId"]);
new z.I("embedly.success");
new z.I("embedly.failure");
new z.J("post.approved", ["postId"], "postId");
new z.J("post.created", ["postId"], "postId");
new z.J("post.updated", ["postId"], "postId");
new z.J("post.upvoted", ["postId", "userId", "createdAt"], "postId");
new z.J("post.unvoted", ["postId", "userId", "createdAt"], "postId");
new z.J("post.accepted", ["postId"], "postId");
new z.J("collaborator.added", ["userId", "postId", "createdAt"], "postId");
new z.J("collaborator.addToWhitelist", ["collaboratorId", "createdAt"]);
new z.I("user.writeAccessGranted");
new z.J("user.created", ["userId", "createdAt"], "userId");
new z.J("collection.subscribed", ["collectionId", "createdAt"], "collectionId");
new z.J("collection.unsubscribed", ["collectionId", "createdAt"], "collectionId");
new z.J("notes.db.noteCreated", ["postId", "userId", "createdAt"], "postId");
new z.J("post.checkAndSchedule", ["timestampMs", "collectionId"]);
new z.I("notes.db.noteRemoved");
new z.I("notes.db.noteUpdated");
new z.I("notes.db.noteUpdateWhitelist");
new z.I("notes.db.noteHidden");
new z.I("notes.db.noteApproved");
new z.I("notes.db.noteUnapproved");
new z.I("notes.db.replyCreated");
new z.I("notes.db.replyUpdated");
new z.I("notes.db.replyRemoved");
new z.I("notes.db.replyHidden");
new z.J("followUps.db.followUpCreated", ["postId", "userId", "createdAt"], "postId");
new z.I("followUps.db.followUpDismissed");
new z.I("followUps.db.followUpApproved");
new z.I("followUps.db.followUpUnapproved");
new z.I("followUps.db.followUpRemoved");
new z.I("followUps.db.followUpUpdated");
new z.I("highlight.created");
new z.Qb("feed.cacheMiss");
new z.Qb("feed.cacheHit");
new z.Qb("zcache.hit");
new z.Qb("zcache.miss");
new z.Qb("zcache.put");
new z.Qb("sharedCache.hitratio");
new z.Qb("sharedCache.get.time");
new z.Qb("sharedCache.mget.time");
new z.Qb("sharedCache.set.time");
new z.Qb("sharedCache.mset.time");
new z.Qb("inMemoryCache.keys");
new z.Qb("localCache.hitratio");
new z.Qb("localCache.get.time");
new z.Qb("localCache.mget.time");
new z.Qb("localCache.set.time");
new z.Qb("localCache.mset.time");
new z.Qb("bloomd.connected");
new z.Qb("bloomd.disconnected");
new z.Qb("bloomd.unavailable");
new z.Qb("bloomd.check");
new z.Qb("bloomd.multiCheck");
new z.Qb("bloomd.set");
new z.Qb("bloomd.bulkSet");
new z.Qb("bloomd.create");
new z.J("user.readPostFilterBackfill", ["userId"]);
new z.J("post.magnitudeForTimespan", ["postId", "startIndex", "timespan", "overrideTimestamp"]);
new z.J("post.magnitudeForTimespanPostMetrics", ["postId", "startIndex", "overrideTimestamp"]);
new z.J("homepage.generateFromTimespanMagnitude", ["timespan", "count"]);
new z.J("collection.recommendedPostAggregation", ["collectionId"]);
new z.J("collection.fixPostCount", ["collectionId"]);
new z.J("collection.badCollectionFound", ["collectionId"]);
new z.J("user.generateCollectionSubPostSuggestions", ["userId"]);
new z.J("post.fixIndexes", ["postId"], "postId");
new z.J("post.fixPostPublishedTimes", ["postId"], "postId");
new z.J("post.fixPostFirstPublishedTime", ["postId"], "postId");
new z.J("post.fillPostPublishedAt", ["postId"]);
new z.J("post.changePostType", ["postId", "postType"], "postId");
new z.J("post.changePostTypeFrom", ["postId", "postType", "existingPostType"], "postId");
new z.J("post.deleteUnpublishedVersion", ["postId", "postVersionId", "timestampMs"], "postId");
new z.J("post.createIndex", ["postId"], "postId");
new z.J("post.deleteOldUnpublishedVersions", ["postId"], "postId");
new z.J("collection.addAcceptedAtToAll", ["collectionId"], "collectionId");
new z.J("user.fixUsernameEntry", ["userId"]);
new z.J("post.addAcceptedAt", ["postId", "collectionId", "acceptedAt"], "collectionId");
new z.J("activity.postRecommended", ["recommenderId", "postId", "collectionId", "occurredAt"]);
new z.J("activity.postCrossPosted", ["crossPosterId", "postId", "collectionId", "occurredAt"]);
new z.J("activity.postPublished", ["postId", "occurredAt"]);
new z.J("activity.postCollaboratedPublished", ["postId", "occurredAt", "collaboratorId"]);
new z.J("activity.followUpCreated", ["postId", "followUpId"]);
new z.J("activity.followUpPublished", ["postId", "followUpId"]);
new z.J("activity.postAddedAsFollowUp", ["postId", "followUpId"]);
new z.J("activity.note", ["postId", "noteId"]);
new z.J("activity.reply", ["postId", "noteId", "replyId"]);
new z.J("activity.notePublished", ["postId", "noteId"]);
new z.J("activity.mentionInNote", ["noteId", "postId", "mentionedUserId"]);
new z.J("activity.mentionInNoteUpdate", ["noteId", "postId", "mentionedUserId"]);
new z.J("activity.mentionInNoteReply", ["postId", "noteId", "replyId", "mentionedUserId"]);
new z.J("activity.mentionInNoteReplyUpdate", ["postId", "noteId", "replyId", "mentionedUserId"]);
new z.J("collection.changePostType", ["collectionId", "postType"], "collectionId");
new z.J("collection.changePostTypeFrom", ["collectionId", "postType", "existingPostType"], "collectionId");
new z.J("collection.fixUserCollectionLinks", ["collectionId"], "collectionId");
new z.J("user.fixUserCollectionLinks", ["userId"], "userId");
new z.J("posts.forEachInMedium", ["emitEvent", "queueName", "data", "?lastKey"]);
new z.J("collections.forEachInMedium", ["emitEvent", "queueName", "data", "?lastKey"]);
new z.J("posts.forEachInCollection", ["emitEvent", "queueName", "collectionId", "data"]);
new z.J("users.forEachInMedium", ["emitEvent", "queueName", "data", "?lastKey"]);
new z.J("posts.forEachByUser", ["userId", "emitEvent", "queueName", "data"]);
new z.J("votes.forEachByUser", ["userId", "emitEvent", "queueName", "data"]);
new z.J("votes.indexForEachVote", ["userId", "postId"]);
new z.J("countHealing.userReadCounts", ["userId"]);
new z.J("countHealing.userStats", ["userId"]);
new z.J("countHealing.userTotals", ["userId"]);
new z.J("user.fillUserCreatedAt", ["userId"]);
new z.J("countHealing.postTotals", ["postId"]);
new z.J("collection.migrateUserRelation", ["collectionId"]);
new z.J("collection.fillCollectionActiveAt", ["collectionId"]);
new z.J("post.migratePostStats", ["postId"]);
new z.J("bestOf.postsForMonth", ["month", "year", "postIds"]);
new z.J("collections.postCrossPosted", ["postId", "collectionId"]);
new z.J("collections.backPopulateCrossPostsList", ["collectionId"]);
new z.J("facebook.postChanged", ["postId", "occurredAt"]);
new z.J("search.postIndexRequest", ["postId"]);
new z.J("search.userIndexRequest", ["userId"]);
new z.J("search.collectionIndexRequest", ["collectionId"]);
new z.J("streamItems.followUpPublished", ["postId", "followUpId"]);
z.pp = z.op = z.np = z.mp = z.s;
if(z.tp = (0,z.Rb)()) {
  z.up = (0,z.Sb)();
  z.mp = 0 == z.tp.indexOf("Opera");
  z.np = !z.mp && -1 != z.tp.indexOf("MSIE");
  (z.op = !z.mp && -1 != z.tp.indexOf("WebKit")) && z.tp.indexOf("Mobile");
  z.pp = !z.mp && !z.op && "Gecko" == z.up.product
}
z.Rd = z.mp;
z.L = z.np;
z.R = z.pp;
z.uc = z.op;
z.wp = (0,z.Sb)();
z.vp = z.wp && z.wp.platform || "";
z.ig = -1 != z.vp.indexOf("Mac");
z.qp = -1 != z.vp.indexOf("Win");
z.vp.indexOf("Linux");
z.il = !!(0,z.Sb)() && -1 != ((0,z.Sb)().appVersion || "").indexOf("X11");
z.xp = (0,z.Rb)();
z.xp && z.xp.indexOf("Android");
z.rp = !!z.xp && 0 <= z.xp.indexOf("iPhone");
z.sp = !!z.xp && 0 <= z.xp.indexOf("iPad");
a: {
  z.yp = "";
  if(z.Rd && z.ha.opera) {
    z.Ap = z.ha.opera.version;
    z.yp = "function" == typeof z.Ap ? (0,z.Ap)() : z.Ap
  }else {
    if(z.R ? z.zp = /rv\:([^\);]+)(\)|;)/ : z.L ? z.zp = /MSIE\s+([^\);]+)(\)|;)/ : z.uc && (z.zp = /WebKit\/(\S+)/), z.zp) {
      z.Bp = z.zp.exec((0,z.Rb)());
      z.yp = z.Bp ? z.Bp[1] : ""
    }
  }
  if(z.L) {
    z.Cp = (0,z.Tb)();
    if(z.Cp > (0,window.parseFloat)(z.yp)) {
      z.Wb = (0,window.String)(z.Cp);
      break a
    }
  }
  z.Wb = z.yp
}
z.Vb = {};
z.Dp = z.ha.document;
z.Yb = !z.Dp || !z.L ? z.l : (0,z.Tb)() || ("CSS1Compat" == z.Dp.compatMode ? (0,window.parseInt)(z.Wb, 10) : 5);
z.Ep = !z.L || (0,z.Xb)(9);
z.Fp = !z.R && !z.L || z.L && (0,z.Xb)(9) || z.R && (0,z.Ub)("1.9.1");
z.Oc = z.L && !(0,z.Ub)("9");
z.w = z.hc.prototype;
z.w.ga = (0,z.x)(43);
z.w.ceil = function() {
  this.x = window.Math.ceil(this.x);
  this.y = window.Math.ceil(this.y);
  return this
};
z.w.floor = function() {
  this.x = window.Math.floor(this.x);
  this.y = window.Math.floor(this.y);
  return this
};
z.w.round = function() {
  this.x = window.Math.round(this.x);
  this.y = window.Math.round(this.y);
  return this
};
z.w.translate = function(a, b) {
  a instanceof z.hc ? (this.x += a.x, this.y += a.y) : (this.x += a, (0,z.pa)(b) && (this.y += b));
  return this
};
z.w.scale = (0,z.x)(9);
z.w = z.ic.prototype;
z.w.ga = (0,z.x)(42);
z.w.Ca = function() {
  return this.width * this.height
};
z.w.Mm = function() {
  return!this.Ca()
};
z.w.ceil = function() {
  this.width = window.Math.ceil(this.width);
  this.height = window.Math.ceil(this.height);
  return this
};
z.w.floor = function() {
  this.width = window.Math.floor(this.width);
  this.height = window.Math.floor(this.height);
  return this
};
z.w.round = function() {
  this.width = window.Math.round(this.width);
  this.height = window.Math.round(this.height);
  return this
};
z.w.scale = (0,z.x)(8);
z.Rc = 3;
z.qc = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", frameborder:"frameBorder", height:"height", maxlength:"maxLength", role:"role", rowspan:"rowSpan", type:"type", usemap:"useMap", valign:"vAlign", width:"width"};
z.Qc = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1};
z.Sc = {IMG:" ", BR:"\n"};
z.w = z.kc.prototype;
z.w.Pc = (0,z.ea)("eb");
z.w.H = function(a) {
  return(0,z.oa)(a) ? this.eb.getElementById(a) : a
};
z.w.Br = z.kc.prototype.H;
z.w.ab = function(a, b, c) {
  var d = this.eb, e = arguments, f = e[0], h = e[1];
  if(!z.Ep && h && (h.name || h.type)) {
    f = ["\x3c", f];
    h.name && f.push(' name\x3d"', (0,z.Da)(h.name), '"');
    if(h.type) {
      f.push(' type\x3d"', (0,z.Da)(h.type), '"');
      var k = {};
      (0,z.rb)(k, h);
      delete k.type;
      h = k
    }
    f.push("\x3e");
    f = f.join("")
  }
  f = d.createElement(f);
  h && ((0,z.oa)(h) ? f.className = h : (0,z.ma)(h) ? z.N.apply(z.n, [f].concat(h)) : (0,z.pc)(f, h));
  2 < e.length && (0,z.wc)(d, f, e, 2);
  return f
};
z.w.createElement = function(a) {
  return this.eb.createElement(a)
};
z.w.createTextNode = function(a) {
  return this.eb.createTextNode((0,window.String)(a))
};
z.w.Bb = function() {
  return this.eb.parentWindow || this.eb.defaultView
};
z.w.appendChild = function(a, b) {
  a.appendChild(b)
};
z.w.append = z.Dc;
z.w.removeNode = z.P;
z.w.mC = z.Fc;
z.w.hv = function(a) {
  return z.Fp && a.children != z.l ? a.children : (0,z.bc)(a.childNodes, function(a) {
    return 1 == a.nodeType
  })
};
z.w.contains = z.Hc;
z.w = z.Yc.prototype;
z.w.Jl = z.n;
z.w.ip = z.n;
z.w.toString = (0,z.ea)("hp");
z.w.Up = function(a) {
  (0,z.Zc)(this);
  var b = this.Jl.concat(), c;
  for(c in this.ip) {
    var d = this.ip[c];
    b[d.index] = d.ja(a[c])
  }
  return b.join("/")
};
z.w.parse = function(a) {
  (0,z.Zc)(this);
  a = a.split("/").map(window.decodeURIComponent);
  for(var b = {}, c = 0;c < a.length;c++) {
    ":" == this.Jl[c].charAt(0) && (b[this.Jl[c].substr(1)] = a[c])
  }
  return b
};
z.$c = /^:([^\[]*)(?:\[pad=([0-9]+)\])?$/;
z.ad.prototype.ja = function(a) {
  a = (0,window.String)(a);
  if(this.padding != z.n) {
    var b = window.Math.max(0, this.padding - a.length);
    a = (0,window.Array)(b + 1).join("0") + a
  }else {
    "number" === typeof a && (0,z.g)((0,window.Error)("All numeric range keys must be padded: " + a))
  }
  return(0,window.encodeURIComponent)(a)
};
z.dd = {id:z.m, column:z.m, hashKey:z.m, rangeKey:z.m};
z.w = z.bd.prototype;
z.w.s = function(a) {
  (0,z.cd)(this, a);
  return a in this.X ? this.X[a].Gi() : z.n
};
z.w.mh = function(a) {
  for(var b in a) {
    b in this.oe().fields ? (0,z.gd)(this, b, a[b]) : (z.ha.console && "column" !== b && window.console.warn("Trying to set field not in schema:", b, this.oe().name), this.X[b] = a[b])
  }
  return this
};
z.w.kv = function() {
  return this.X[this.oe().zc]
};
z.w.qC = function() {
  return this.X.column || this.oe().Bc.Up(this.X)
};
z.w.Gi = function() {
  var a = {}, b = this.oe().fields, c;
  for(c in b) {
    var d = b[c];
    "object" == typeof d && d.C().prototype instanceof z.bd ? a[c] = this.s(c) : a[c] = (0,z.ed)(this, c)
  }
  this.X.id && (a.id = this.X.id);
  return a
};
z.w.Ab = (0,z.x)(89);
z.kd.prototype.Ld = function() {
  (0,z.g)((0,window.Error)())
};
z.kd.prototype.Zc = (0,z.x)(86);
z.kd.prototype.ga = (0,z.x)(41);
(0,z.C)(z.ld, z.kd);
z.Nm = new z.ld;
z.ld.prototype.Ld = function(a) {
  var b = {}, c = a.oe().fields, d;
  for(d in c) {
    var e = a, f = d;
    (0,z.cd)(e, f);
    if(f in e.X) {
      var e = b, f = d, h;
      h = c[d];
      var k = (0,z.ed)(a, d);
      if(h.N()) {
        window.Array.isArray(k) || (0,z.g)((0,window.Error)("malformed message " + k));
        for(var p = [], q = 0;q < k.length;q++) {
          p[q] = (0,z.md)(this, h, k[q])
        }
        h = p
      }else {
        h = (0,z.md)(this, h, k)
      }
      e[f] = h
    }
  }
  return b
};
z.ld.prototype.Zc = (0,z.x)(85);
z.Gp = {cF:1, rE:2, dF:3, hF:4, kE:5, FE:6, $isProtoEnum:z.m};
(0,z.C)(z.nd, z.bd);
(0,z.id)(z.nd, z.s, {name:"InternalReferrer", Yc:"MISSING_TABLE_IN_PROTO_DEFINITION", zc:"", Bc:new z.Yc("undefined"), yd:{1:"type", 3:"postId", 4:"collectionId", 5:"profileId"}, fields:{type:{C:function() {
  return z.Gp
}, N:(0,z.v)(z.s), R:(0,z.v)(z.s), S:(0,z.v)(1), defaultValue:(0,z.t)()}, postId:{C:function() {
  return window.String
}, N:(0,z.v)(z.s), R:(0,z.v)(z.s), S:(0,z.v)(3), defaultValue:(0,z.t)()}, collectionId:{C:function() {
  return window.String
}, N:(0,z.v)(z.s), R:(0,z.v)(z.s), S:(0,z.v)(4), defaultValue:(0,z.t)()}, profileId:{C:function() {
  return window.String
}, N:(0,z.v)(z.s), R:(0,z.v)(z.s), S:(0,z.v)(5), defaultValue:(0,z.t)()}}});
z.nd.prototype.C = function() {
  return(0,z.ed)(this, "type")
};
z.nd.prototype.Yf = (0,z.x)(95);
(0,z.C)(z.od, z.bd);
(0,z.id)(z.od, z.s, {name:"SearchReferrer", Yc:"MISSING_TABLE_IN_PROTO_DEFINITION", zc:"", Bc:new z.Yc("undefined"), yd:{1:"domain", 2:"keywords"}, fields:{domain:{C:function() {
  return window.String
}, N:(0,z.v)(z.s), R:(0,z.v)(z.s), S:(0,z.v)(1), defaultValue:(0,z.t)()}, keywords:{C:function() {
  return window.String
}, N:(0,z.v)(z.m), R:(0,z.v)(z.s), S:(0,z.v)(2), defaultValue:(0,z.t)()}}});
z.od.prototype.Yj = (0,z.x)(52);
z.od.prototype.nn = (0,z.x)(44);
(0,z.C)(z.pd, z.bd);
(0,z.id)(z.pd, z.s, {name:"SiteReferrer", Yc:"MISSING_TABLE_IN_PROTO_DEFINITION", zc:"", Bc:new z.Yc("undefined"), yd:{1:"href", 2:"title"}, fields:{href:{C:function() {
  return window.String
}, N:(0,z.v)(z.s), R:(0,z.v)(z.s), S:(0,z.v)(1), defaultValue:(0,z.t)()}, title:{C:function() {
  return window.String
}, N:(0,z.v)(z.s), R:(0,z.v)(z.s), S:(0,z.v)(2), defaultValue:(0,z.t)()}}});
z.pd.prototype.Jf = (0,z.x)(84);
z.pd.prototype.on = (0,z.x)(82);
z.pd.prototype.Qc = function() {
  return(0,z.ed)(this, "title")
};
z.pd.prototype.fc = function(a) {
  return(0,z.gd)(this, "title", a)
};
z.qd = (0,z.qb)({baseUrl:"baseUrl", bestOfFirstSlug:"bestOfFirstSlug", bestOfLatestSlug:"bestOfLatestSlug", buildLabel:"buildLabel", contributeSoonUrl:"contributeSoonUrl", currentUser:"currentUser", defaultPreviewImage:"defaultPreviewImage", deviceWidth:"deviceWidth", embedded:"embedded", facebookKey:"facebookKey", howToPostUrl:"howToPostUrl", isAuthenticated:"isAuthenticated", language:"language", miroUrl:"miroUrl", moduleUrls:"moduleUrls", postColumnWidth:"postColumnWidth", productName:"productName", 
useragent:"useragent", variants:"variants", welcomeUrl:"welcomeUrl"});
window.Object.keys(z.qd);
z.Hp = (0,window.RegExp)("(^|[^a-z0-9_!#$%^\x26*@＠/])(?:[@＠])([a-z0-9_]{1,15})", "gi");
z.Ip = "sz";
z.vd = {toString:function() {
  var a;
  (a = window.document.body.clientWidth) ? (a = 200 * window.Math.round(a / 200), a = window.Math.max(window.Math.min(a, 2E3), 600)) : a = 1200;
  return a
}};
z.rd = {};
z.w = z.zd.prototype;
z.w.pi = (0,z.v)(z.m);
z.w.si = function(a, b) {
  var c = this.$g(b);
  c && delete this.Jg[(0,z.sa)(b)];
  return c
};
z.w.Pf = function(a, b, c) {
  (a = !this.$g(c)) || delete this.Jg[(0,z.sa)(c)];
  return a
};
z.w.Ii = function(a) {
  a = (0,z.sa)(a);
  this.Jg[a] || (this.Jg[a] = this.now())
};
z.w.$g = function(a) {
  a = (0,z.sa)(a);
  return!(a in this.Jg) || this.now() - this.Jg[a] >= this.Ro
};
z.w.now = function() {
  return(new window.Date).getTime()
};
(0,z.C)(z.Ad, z.zd);
z.Ad.prototype.Pf = function(a, b, c) {
  return!b.Hq ? (delete this.Jg[(0,z.sa)(c)], z.s) : z.Ad.q.Pf.call(this, a, b, c)
};
z.w = z.Bd.prototype;
z.w.pi = function(a, b) {
  return this.Ni ? this.Zi.pi(a, b) : z.m
};
z.w.si = function(a, b) {
  return this.Ni ? this.Zi.si(a, b) : z.s
};
z.w.Pf = function(a, b, c) {
  return this.Ni ? this.Zi.Pf(a, b, c) : z.m
};
z.w.Ii = function(a) {
  this.Zi.Ii(a);
  this.Ni = z.m
};
z.w.$g = function(a) {
  return this.Ni ? this.Zi.$g(a) : z.s
};
z.Fd.prototype.pi = (0,z.v)(z.s);
z.Fd.prototype.si = (0,z.v)(z.s);
z.Fd.prototype.Pf = (0,z.v)(z.s);
z.Fd.prototype.Ii = z.ja;
z.Jp = new z.Fd;
z.Gd.prototype.pi = (0,z.v)(z.m);
z.Gd.prototype.si = (0,z.v)(z.s);
z.Gd.prototype.Pf = (0,z.v)(z.m);
z.Gd.prototype.Ii = z.ja;
z.Eq = new z.Gd;
z.Id = 0;
z.Jd = {};
z.Hd.prototype.Gf = z.s;
z.Hd.prototype.Wa = function() {
  if(!this.Gf && (this.Gf = z.m, this.o(), 0 != z.Id)) {
    var a = (0,z.sa)(this);
    delete z.Jd[a]
  }
};
z.Hd.prototype.o = function() {
  if(this.mk) {
    for(;this.mk.length;) {
      this.mk.shift()()
    }
  }
};
(0,z.C)(z.Ld, z.Hd);
z.w = z.Ld.prototype;
z.w.l = z.n;
z.w.Hd = new z.Ad(3E5);
z.w.Cp = z.n;
z.w.L = function(a) {
  return this.l ? this.l.querySelector(a) : z.n
};
z.w.Ai = function(a) {
  return this.l ? (0,z.eb)(this.l.querySelectorAll(a)) : []
};
z.w.find = function(a) {
  return this.L(a)
};
z.w.fc = function(a) {
  this.Cp = a;
  (0,z.Ij)(this.t.get("app")) === this && (window.document.title = this.Cp)
};
z.w.Qc = (0,z.ea)("Cp");
z.w.Gm = (0,z.v)(z.n);
z.w.pm = (0,z.t)();
z.w.ta = (0,z.t)();
z.w.ke = (0,z.v)(z.n);
z.w.bc = (0,z.t)();
z.w.gb = function() {
  return"function" == typeof window.scrollTo ? window : window.document.body
};
(0,z.C)(z.Nd, z.Ld);
z.w = z.Nd.prototype;
z.w.ab = (0,z.t)();
z.w.Ha = (0,z.t)();
z.w.Re = (0,z.t)();
z.w.Gm = function() {
  if(!this.l) {
    var a = (0,z.Q)("embedded");
    if("undefined" != typeof a) {
      var b = ["embedded"], c;
      c = b.shift();
      c = z.qd[c] || c;
      for(var d = z.rd;d[c] != z.n;) {
        if(0 === b.length) {
          d[c] = z.n;
          break
        }
        d = d[c];
        c = b.shift()
      }
    }
    a && this.Re(a);
    (a = window.document.getElementById("prerendered")) ? (a.id = z.n, this.l = a, this.Ha()) : (this.l = window.document.createElement("div"), this.ab());
    (0,z.N)(this.l, "screen-content");
    this.l.tabIndex = -1
  }
  return this.l
};
z.w.gb = function() {
  return(0,z.wd)() ? window.document.body : this.l
};
(0,z.C)(z.Od, z.Nd);
z.Od.prototype.Fa = z.n;
z.Od.prototype.ke = (0,z.ea)("Fa");
z.Od.prototype.ab = function() {
  var a = "/" + this.mb + (-1 == this.mb.indexOf("?") ? "?" : "\x26") + "format\x3dfragment";
  this.Fa = (0,z.G)((0,z.Md)(this, "request").get(a, {headers:{"X-Response-Type":"html-body"}}), this.fe, this)
};
z.Od.prototype.fe = function(a) {
  this.l.innerHTML = a;
  this.Ha()
};
(0,z.C)(z.Pd, z.Od);
z.w = z.Pd.prototype;
z.w.gb = z.xd;
z.w.Hd = new z.zd(36E5);
z.w.o = function() {
  (0,z.dg)(this.l);
  z.Pd.q.o.call(this)
};
z.w.Ha = function() {
  (0,z.ag)(this.l).g("dismiss", this.Ix, this).g("toggle-prl-debug", this.wB, this)
};
z.w.bc = function() {
  (0,z.Ti)(z.ro, {});
  (0,z.oj)(z.pj, "home")
};
z.w.Ix = function(a) {
  var b = (0,window.String)(a.value);
  (0,z.H)((0,z.Bb)((0,z.Md)(this, "request").put("/p/" + b + "/skip"), function() {
    (0,z.Ti)(z.Ko, {postId:b});
    (0,z.N)((0,z.Tc)(a.target, z.n, "post-item"), "hidden-post")
  }, this), z.Og)
};
z.w.wB = function() {
  (0,z.fc)(this.l, "prl-debug-enable")
};
z.de = /matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/;
z.je = "StopIteration" in z.ha ? z.ha.StopIteration : (0,window.Error)("StopIteration");
z.he.prototype.next = function() {
  (0,z.g)(z.je)
};
z.he.prototype.cg = function() {
  return this
};
(0,z.C)(z.ke, z.he);
z.w = z.ke.prototype;
z.w.z = z.n;
z.w.vb = 0;
z.w.qr = z.s;
z.w.Mc = (0,z.x)(28);
z.w.ga = (0,z.x)(40);
z.w.xk = (0,z.x)(49);
z.w.next = function() {
  var a;
  if(this.qr) {
    (!this.z || this.um && 0 == this.depth) && (0,z.g)(z.je);
    a = this.z;
    var b = this.xb ? -1 : 1;
    if(this.vb == b) {
      var c = this.xb ? a.lastChild : a.firstChild;
      c ? (0,z.le)(this, c) : (0,z.le)(this, a, -1 * b)
    }else {
      (c = this.xb ? a.previousSibling : a.nextSibling) ? (0,z.le)(this, c) : (0,z.le)(this, a.parentNode, -1 * b)
    }
    this.depth += this.vb * (this.xb ? -1 : 1)
  }else {
    this.qr = z.m
  }
  (a = this.z) || (0,z.g)(z.je);
  return a
};
z.w.Ab = (0,z.x)(88);
z.w.splice = function(a) {
  var b = this.z, c = this.xb ? 1 : -1;
  this.vb == c && (this.vb = -1 * c, this.depth += this.vb * (this.xb ? -1 : 1));
  this.xb = !this.xb;
  z.ke.prototype.next.call(this);
  this.xb = !this.xb;
  for(var c = (0,z.na)(arguments[0]) ? arguments[0] : arguments, d = c.length - 1;0 <= d;d--) {
    (0,z.Ec)(c[d], b)
  }
  (0,z.P)(b)
};
z.w = z.pe.prototype;
z.w.qa = 0;
z.w.Ck = 0;
z.w.Ne = (0,z.ea)("qa");
z.w.pe = function() {
  (0,z.qe)(this);
  for(var a = [], b = 0;b < this.Xa.length;b++) {
    a.push(this.Uc[this.Xa[b]])
  }
  return a
};
z.w.Kf = function() {
  (0,z.qe)(this);
  return this.Xa.concat()
};
z.w.Og = function(a) {
  return(0,z.re)(this.Uc, a)
};
z.w.Ab = (0,z.x)(87);
z.w.Mm = function() {
  return 0 == this.qa
};
z.w.clear = function() {
  this.Uc = {};
  this.Ck = this.qa = this.Xa.length = 0
};
z.w.remove = function(a) {
  return(0,z.re)(this.Uc, a) ? (delete this.Uc[a], this.qa--, this.Ck++, this.Xa.length > 2 * this.qa && (0,z.qe)(this), z.m) : z.s
};
z.w.get = function(a, b) {
  return(0,z.re)(this.Uc, a) ? this.Uc[a] : b
};
z.w.set = function(a, b) {
  (0,z.re)(this.Uc, a) || (this.qa++, this.Xa.push(a), this.Ck++);
  this.Uc[a] = b
};
z.w.Lc = function(a) {
  var b;
  a instanceof z.pe ? (b = a.Kf(), a = a.pe()) : (b = (0,z.nb)(a), a = (0,z.mb)(a));
  for(var c = 0;c < b.length;c++) {
    this.set(b[c], a[c])
  }
};
z.w.ga = (0,z.x)(39);
z.w.Ew = (0,z.x)(55);
z.w.Gi = function() {
  (0,z.qe)(this);
  for(var a = {}, b = 0;b < this.Xa.length;b++) {
    var c = this.Xa[b];
    a[c] = this.Uc[c]
  }
  return a
};
z.w.cg = function(a) {
  (0,z.qe)(this);
  var b = 0, c = this.Xa, d = this.Uc, e = this.Ck, f = this, h = new z.he;
  h.next = function() {
    for(;;) {
      e != f.Ck && (0,z.g)((0,window.Error)("The map has changed since the iterator was created"));
      b >= c.length && (0,z.g)(z.je);
      var h = c[b++];
      return a ? h : d[h]
    }
  };
  return h
};
z.we = {};
z.xe.prototype.WD = 0;
z.xe.prototype.av = z.n;
z.xe.prototype.$u = z.n;
z.Fq = 0;
z.xe.prototype.reset = function(a, b, c, d, e) {
  this.WD = "number" == typeof e ? e : z.Fq++;
  this.oK = d || (0,z.no)();
  this.jk = a;
  this.sD = b;
  this.mI = c;
  delete this.av;
  delete this.$u
};
z.xe.prototype.vw = (0,z.ca)("jk");
z.ye.prototype.kb = z.n;
z.ye.prototype.jk = z.n;
z.ye.prototype.Df = z.n;
z.ye.prototype.uv = z.n;
z.ze.prototype.toString = (0,z.ea)("name");
z.Gq = new z.ze("SHOUT", 1200);
z.jf = new z.ze("SEVERE", 1E3);
z.Hq = new z.ze("WARNING", 900);
z.Iq = new z.ze("INFO", 800);
z.Ee = new z.ze("CONFIG", 700);
z.w = z.ye.prototype;
z.w.getName = (0,z.x)(92);
z.w.getParent = (0,z.ea)("kb");
z.w.hv = function() {
  this.Df || (this.Df = {});
  return this.Df
};
z.w.vw = (0,z.ca)("jk");
z.w.log = function(a, b, c) {
  if(a.value >= (0,z.Ae)(this).value) {
    a = this.pC(a, b, c);
    b = "log:" + a.sD;
    z.ha.console && (z.ha.console.timeStamp ? z.ha.console.timeStamp(b) : z.ha.console.markTimeline && z.ha.console.markTimeline(b));
    z.ha.msWriteProfilerMark && z.ha.msWriteProfilerMark(b);
    for(b = this;b;) {
      c = b;
      var d = a;
      if(c.uv) {
        for(var e = 0, f = z.l;f = c.uv[e];e++) {
          f(d)
        }
      }
      b = b.getParent()
    }
  }
};
z.w.pC = function(a, b, c) {
  var d = new z.xe(a, (0,window.String)(b), this.Ov);
  if(c) {
    d.av = c;
    var e;
    var f = arguments.callee.caller;
    try {
      var h;
      var k = (0,z.ga)("window.location.href");
      if((0,z.oa)(c)) {
        h = {message:c, name:"Unknown error", lineNumber:"Not available", fileName:k, stack:"Not available"}
      }else {
        var p, q, z$ = z.s;
        try {
          p = c.lineNumber || c.Qm || "Not available"
        }catch(U) {
          p = "Not available", z$ = z.m
        }
        try {
          q = c.fileName || c.filename || c.sourceURL || z.ha.$googDebugFname || k
        }catch(F) {
          q = "Not available", z$ = z.m
        }
        h = z$ || !c.lineNumber || !c.fileName || !c.stack ? {message:c.message, name:c.name, lineNumber:p, fileName:q, stack:c.stack || "Not available"} : c
      }
      e = "Message: " + (0,z.Da)(h.message) + '\nUrl: \x3ca href\x3d"view-source:' + h.fileName + '" target\x3d"_new"\x3e' + h.fileName + "\x3c/a\x3e\nLine: " + h.lineNumber + "\n\nBrowser stack:\n" + (0,z.Da)(h.stack + "-\x3e ") + "[end]\n\nJS stack traversal:\n" + (0,z.Da)((0,z.te)(f) + "-\x3e ")
    }catch(ab) {
      e = "Exception trying to expose exception! You win, we lose. " + ab
    }
    d.$u = e
  }
  return d
};
z.w.info = (0,z.x)(22);
z.De = {};
z.Ce = z.n;
(0,z.C)(z.Fe, z.Hd);
z.Jq = (0,z.Be)("goog.dom.SavedRange");
z.Fe.prototype.restore = (0,z.x)(7);
z.w = z.Ge.prototype;
z.w.se = (0,z.v)(z.s);
z.w.Pc = function() {
  return(0,z.lc)(z.L ? this.wc() : this.ba())
};
z.w.Bb = function() {
  return(0,z.vc)(this.Pc())
};
z.w.containsNode = function(a, b) {
  return this.Je((0,z.yf)(a), b)
};
z.w.hn = (0,z.x)(17);
(0,z.C)(z.Ne, z.ke);
(0,z.C)(z.Oe, z.Ge);
z.Oe.prototype.Je = function(a, b) {
  var c = (0,z.Ie)(this), d = (0,z.Ie)(a);
  return(b ? z.Gb : z.po)(d, function(a) {
    return(0,z.Gb)(c, function(c) {
      return c.Je(a, b)
    })
  })
};
z.Oe.prototype.insertNode = (0,z.x)(64);
z.Oe.prototype.af = (0,z.x)(21);
(0,z.C)(z.Pe, z.Ne);
z.w = z.Pe.prototype;
z.w.la = z.n;
z.w.ha = z.n;
z.w.oa = 0;
z.w.na = 0;
z.w.ba = (0,z.ea)("la");
z.w.ra = (0,z.ea)("ha");
z.w.gk = function() {
  return this.qr && this.z == this.ha && (!this.na || 1 != this.vb)
};
z.w.next = function() {
  this.gk() && (0,z.g)(z.je);
  return z.Pe.q.next.call(this)
};
z.w.xk = (0,z.x)(48);
z.w.Mc = (0,z.x)(27);
z.w.ga = (0,z.x)(38);
z.Qe.prototype.Je = function(a, b) {
  var c = b && !a.isCollapsed(), d = a.O;
  try {
    return c ? 0 <= this.qd(d, 0, 1) && 0 >= this.qd(d, 1, 0) : 0 <= this.qd(d, 0, 0) && 0 >= this.qd(d, 1, 1)
  }catch(e) {
    return z.L || (0,z.g)(e), z.s
  }
};
z.Qe.prototype.containsNode = function(a, b) {
  return this.Je((0,z.$e)(a), b)
};
z.Qe.prototype.cg = function() {
  return new z.Pe(this.ba(), this.Ka(), this.ra(), this.rb())
};
(0,z.C)(z.Re, z.Qe);
z.w = z.Re.prototype;
z.w.ga = (0,z.x)(37);
z.w.wc = function() {
  return this.O.commonAncestorContainer
};
z.w.ba = function() {
  return this.O.startContainer
};
z.w.Ka = function() {
  return this.O.startOffset
};
z.w.ra = function() {
  return this.O.endContainer
};
z.w.rb = function() {
  return this.O.endOffset
};
z.w.qd = function(a, b, c) {
  return this.O.compareBoundaryPoints(1 == c ? 1 == b ? z.ha.Range.START_TO_START : z.ha.Range.START_TO_END : 1 == b ? z.ha.Range.END_TO_START : z.ha.Range.END_TO_END, a)
};
z.w.isCollapsed = function() {
  return this.O.collapsed
};
z.w.Nb = (0,z.x)(74);
z.w.select = function(a) {
  var b = (0,z.vc)((0,z.lc)(this.ba()));
  this.vk(b.getSelection(), a)
};
z.w.vk = function(a) {
  a.removeAllRanges();
  a.addRange(this.O)
};
z.w.Wc = (0,z.x)(15);
z.w.insertNode = (0,z.x)(63);
z.w.af = (0,z.x)(20);
z.w.collapse = function(a) {
  this.O.collapse(a)
};
(0,z.C)(z.Ve, z.Re);
z.Ve.prototype.vk = function(a, b) {
  !b || this.isCollapsed() ? z.Ve.q.vk.call(this, a, b) : (a.collapse(this.ra(), this.rb()), a.extend(this.ba(), this.Ka()))
};
(0,z.C)(z.We, z.Qe);
z.hf = (0,z.Be)("goog.dom.browserrange.IeRange");
z.w = z.We.prototype;
z.w.ve = z.n;
z.w.la = z.n;
z.w.ha = z.n;
z.w.oa = -1;
z.w.na = -1;
z.w.ga = (0,z.x)(36);
z.w.pd = function() {
  this.ve = this.la = this.ha = z.n;
  this.oa = this.na = -1
};
z.w.wc = function() {
  if(!this.ve) {
    var a = this.O.text, b = this.O.duplicate(), c = a.replace(/ +$/, "");
    (c = a.length - c.length) && b.moveEnd("character", -c);
    c = b.parentElement();
    b = b.htmlText.replace(/(\r\n|\r|\n)+/g, " ").length;
    if(this.isCollapsed() && 0 < b) {
      return this.ve = c
    }
    for(;b > c.outerHTML.replace(/(\r\n|\r|\n)+/g, " ").length;) {
      c = c.parentNode
    }
    for(;1 == c.childNodes.length && c.innerText == (c.firstChild.nodeType == z.Rc ? c.firstChild.nodeValue : c.firstChild.innerText) && (0,z.Te)(c.firstChild);) {
      c = c.firstChild
    }
    0 == a.length && (c = (0,z.Ye)(this, c));
    this.ve = c
  }
  return this.ve
};
z.w.ba = function() {
  this.la || (this.la = (0,z.Ze)(this, 1), this.isCollapsed() && (this.ha = this.la));
  return this.la
};
z.w.Ka = function() {
  0 > this.oa && (this.oa = (0,z.af)(this, 1), this.isCollapsed() && (this.na = this.oa));
  return this.oa
};
z.w.ra = function() {
  if(this.isCollapsed()) {
    return this.ba()
  }
  this.ha || (this.ha = (0,z.Ze)(this, 0));
  return this.ha
};
z.w.rb = function() {
  if(this.isCollapsed()) {
    return this.Ka()
  }
  0 > this.na && (this.na = (0,z.af)(this, 0), this.isCollapsed() && (this.oa = this.na));
  return this.na
};
z.w.qd = function(a, b, c) {
  return this.O.compareEndPoints((1 == b ? "Start" : "End") + "To" + (1 == c ? "Start" : "End"), a)
};
z.w.re = (0,z.x)(78);
z.w.isCollapsed = function() {
  return 0 == this.O.compareEndPoints("StartToEnd", this.O)
};
z.w.Nb = (0,z.x)(73);
z.w.select = function() {
  this.O.select()
};
z.w.Wc = (0,z.x)(14);
z.w.insertNode = (0,z.x)(62);
z.w.af = (0,z.x)(19);
z.w.collapse = function(a) {
  this.O.collapse(a);
  a ? (this.ha = this.la, this.na = this.oa) : (this.la = this.ha, this.oa = this.na)
};
(0,z.C)(z.bf, z.Re);
z.bf.prototype.vk = function(a) {
  a.collapse(this.ba(), this.Ka());
  (this.ra() != this.ba() || this.rb() != this.Ka()) && a.extend(this.ra(), this.rb());
  0 == a.rangeCount && a.addRange(this.O)
};
(0,z.C)(z.cf, z.Re);
z.cf.prototype.qd = function(a, b, c) {
  return(0,z.Ub)("528") ? z.cf.q.qd.call(this, a, b, c) : this.O.compareBoundaryPoints(1 == c ? 1 == b ? z.ha.Range.START_TO_START : z.ha.Range.END_TO_START : 1 == b ? z.ha.Range.START_TO_END : z.ha.Range.END_TO_END, a)
};
z.cf.prototype.vk = function(a, b) {
  a.removeAllRanges();
  b ? a.setBaseAndExtent(this.ra(), this.rb(), this.ba(), this.Ka()) : a.setBaseAndExtent(this.ba(), this.Ka(), this.ra(), this.rb())
};
(0,z.C)(z.ef, z.Ge);
z.w = z.ef.prototype;
z.w.Ng = z.n;
z.w.la = z.n;
z.w.oa = z.n;
z.w.ha = z.n;
z.w.na = z.n;
z.w.Td = z.s;
z.w.ga = (0,z.x)(35);
z.w.C = (0,z.v)("text");
z.w.sd = function() {
  return(0,z.gf)(this).O
};
z.w.pd = function() {
  this.la = this.oa = this.ha = this.na = z.n
};
z.w.li = (0,z.v)(1);
z.w.Od = function() {
  return this
};
z.w.wc = function() {
  return(0,z.gf)(this).wc()
};
z.w.ba = function() {
  return this.la || (this.la = (0,z.gf)(this).ba())
};
z.w.Ka = function() {
  return this.oa != z.n ? this.oa : this.oa = (0,z.gf)(this).Ka()
};
z.w.ra = function() {
  return this.ha || (this.ha = (0,z.gf)(this).ra())
};
z.w.rb = function() {
  return this.na != z.n ? this.na : this.na = (0,z.gf)(this).rb()
};
z.w.se = (0,z.ea)("Td");
z.w.Je = function(a, b) {
  var c = a.C();
  return"text" == c ? (0,z.gf)(this).Je((0,z.gf)(a), b) : "control" == c ? (c = (0,z.lf)(a), (b ? z.Gb : z.po)(c, function(a) {
    return this.containsNode(a, b)
  }, this)) : z.s
};
z.w.re = (0,z.x)(77);
z.w.isCollapsed = function() {
  return(0,z.gf)(this).isCollapsed()
};
z.w.Nb = (0,z.x)(72);
z.w.cg = function() {
  return new z.Pe(this.ba(), this.Ka(), this.ra(), this.rb())
};
z.w.select = function() {
  (0,z.gf)(this).select(this.Td)
};
z.w.Wc = (0,z.x)(13);
z.w.insertNode = (0,z.x)(61);
z.w.af = (0,z.x)(18);
z.w.gr = function() {
  return new z.kf(this)
};
z.w.collapse = function(a) {
  a = this.se() ? !a : a;
  this.Ng && this.Ng.collapse(a);
  a ? (this.ha = this.la, this.na = this.oa) : (this.la = this.ha, this.oa = this.na);
  this.Td = z.s
};
(0,z.C)(z.kf, z.Fe);
z.kf.prototype.Xf = (0,z.x)(3);
z.kf.prototype.o = function() {
  z.kf.q.o.call(this);
  this.ev = this.zu = z.n
};
(0,z.C)(z.mf, z.Oe);
z.w = z.mf.prototype;
z.w.iD = (0,z.Be)("goog.dom.MultiRange");
z.w.pd = function() {
  this.Bi = [];
  this.vm = this.Fi = z.n
};
z.w.ga = (0,z.x)(32);
z.w.C = (0,z.v)("mutli");
z.w.sd = function() {
  1 < this.Gd.length && this.iD.log(z.Hq, "getBrowserRangeObject called on MultiRange with more than 1 range", z.l);
  return this.Gd[0]
};
z.w.li = function() {
  return this.Gd.length
};
z.w.Od = function(a) {
  this.Bi[a] || (this.Bi[a] = (0,z.ff)((0,z.df)(this.Gd[a]), z.l));
  return this.Bi[a]
};
z.w.wc = function() {
  if(!this.vm) {
    for(var a = [], b = 0, c = this.li();b < c;b++) {
      a.push(this.Od(b).wc())
    }
    this.vm = z.Lc.apply(z.n, a)
  }
  return this.vm
};
z.w.ba = function() {
  return(0,z.nf)(this)[0].ba()
};
z.w.Ka = function() {
  return(0,z.nf)(this)[0].Ka()
};
z.w.ra = function() {
  return(0,z.Ta)((0,z.nf)(this)).ra()
};
z.w.rb = function() {
  return(0,z.Ta)((0,z.nf)(this)).rb()
};
z.w.re = (0,z.x)(75);
z.w.isCollapsed = function() {
  return 0 == this.Gd.length || 1 == this.Gd.length && this.Od(0).isCollapsed()
};
z.w.Nb = (0,z.x)(70);
z.w.cg = function() {
  return new z.rf(this)
};
z.w.select = function() {
  var a = (0,z.He)(this.Bb());
  a.removeAllRanges();
  for(var b = 0, c = this.li();b < c;b++) {
    a.addRange(this.Od(b).sd())
  }
};
z.w.Wc = (0,z.x)(11);
z.w.gr = function() {
  return new z.pf(this)
};
z.w.collapse = function(a) {
  if(!this.isCollapsed()) {
    var b = a ? this.Od(0) : this.Od(this.li() - 1);
    this.pd();
    b.collapse(a);
    this.Bi = [b];
    this.Fi = [b];
    this.Gd = [b.sd()]
  }
};
(0,z.C)(z.pf, z.Fe);
z.pf.prototype.Xf = (0,z.x)(1);
z.pf.prototype.o = function() {
  z.pf.q.o.call(this);
  (0,z.xc)(this.hr, function(a) {
    a.Wa()
  });
  delete this.hr
};
(0,z.C)(z.rf, z.Ne);
z.w = z.rf.prototype;
z.w.Qf = z.n;
z.w.zm = 0;
z.w.ba = function() {
  return this.Qf[0].ba()
};
z.w.ra = function() {
  return(0,z.Ta)(this.Qf).ra()
};
z.w.gk = function() {
  return this.Qf[this.zm].gk()
};
z.w.next = function() {
  try {
    var a = this.Qf[this.zm], b = a.next();
    (0,z.le)(this, a.z, a.vb, a.depth);
    return b
  }catch(c) {
    return(c !== z.je || this.Qf.length - 1 == this.zm) && (0,z.g)(c), this.zm++, this.next()
  }
};
z.w.Mc = (0,z.x)(25);
z.w.ga = (0,z.x)(31);
z.Qq = z.Pq = z.Oq = z.Nq = z.Mq = z.Lq = z.Kq = z.s;
z.Rq = (0,z.Rb)();
z.Rq && (-1 != z.Rq.indexOf("Firefox") ? z.Kq = z.m : -1 != z.Rq.indexOf("Camino") ? z.Lq = z.m : -1 != z.Rq.indexOf("iPhone") || -1 != z.Rq.indexOf("iPod") ? z.Mq = z.m : -1 != z.Rq.indexOf("iPad") ? z.Nq = z.m : -1 != z.Rq.indexOf("Android") ? z.Oq = z.m : -1 != z.Rq.indexOf("Chrome") ? z.Pq = z.m : -1 != z.Rq.indexOf("Safari") && (z.Qq = z.m));
z.Sq = z.Kq;
z.Tq = z.Lq;
z.Uq = z.Mq;
z.Vq = z.Nq;
z.Wq = z.Oq;
z.Xq = z.Pq;
z.Rj = z.Qq;
z.Yq = function() {
  if(z.Sq) {
    return(0,z.zf)(/Firefox\/([0-9.]+)/)
  }
  if(z.L || z.Rd) {
    return z.Wb
  }
  if(z.Xq) {
    return(0,z.zf)(/Chrome\/([0-9.]+)/)
  }
  if(z.Rj) {
    return(0,z.zf)(/Version\/([0-9.]+)/)
  }
  if(z.Uq || z.Vq) {
    var a = /Version\/(\S+).*Mobile\/(\S+)/.exec((0,z.Rb)());
    if(a) {
      return a[1] + "." + a[2]
    }
  }else {
    if(z.Wq) {
      return(a = (0,z.zf)(/Android\s+([0-9.]+)/)) ? a : (0,z.zf)(/Version\/([0-9.]+)/)
    }
    if(z.Tq) {
      return(0,z.zf)(/Camino\/([0-9.]+)/)
    }
  }
  return""
}();
z.Zq = z.L && !(0,z.Xb)(9);
z.$q = z.R || z.uc || z.Rd || z.L && (0,z.Xb)(9);
z.ar = z.L || z.uc || z.Rd || z.s;
z.br = z.uc || z.s;
z.cr = z.L || z.uc || z.Rd;
z.uc && (0,z.Ub)("534.16");
z.dr = z.R && z.m;
z.er = z.R || z.uc || z.Rd;
z.fr = z.R || z.Rd;
z.L && (0,z.Ub)("7.0");
z.gr = z.R && (0,z.Ub)("1.8") || z.uc || z.Rd;
z.hr = z.uc || z.L && (0,z.Ub)("9");
z.L || z.Rd || z.R && (0,z.Ub)("1.9");
z.ir = z.R || z.uc && !(0,z.Ub)("527");
z.jr = z.L || z.Rd;
z.kr = z.L || z.uc && (0,z.Ub)("525");
z.uc && (0,z.Ub)("531");
z.lr = z.uc && !(0,z.Ub)("528");
z.R && (0,z.Ub)("1.9") || z.L || z.Rd || z.uc && (0,z.Ub)("531");
z.mr = z.L || z.R || z.Rd;
z.nr = z.R || z.uc && !(0,z.Ub)("526");
z.or = z.L || z.Rd;
z.pr = !z.L && !z.Rd;
z.qr = !z.uc;
z.Xq && 0 <= (0,z.Pa)(z.Yq, "4") || z.Rj && (0,z.Ub)("533") || z.R && (0,z.Ub)("2.0") || z.L && (0,z.Ub)("10");
z.Rd && (0,z.Ub)("11.10");
z.Xq && (0,z.Pa)(z.Yq, "12");
(0,z.ub)("ADDRESS", "ARTICLE", "ASIDE", "BLOCKQUOTE", "BODY", "CAPTION", "CENTER", "COL", "COLGROUP", "DETAILS", "DIR", "DIV", "DL", "DD", "DT", "FIELDSET", "FIGCAPTION", "FIGURE", "FOOTER", "FORM", "H1", "H2", "H3", "H4", "H5", "H6", "HEADER", "HGROUP", "HR", "ISINDEX", "OL", "LI", "MAP", "MENU", "NAV", "OPTGROUP", "OPTION", "P", "PRE", "SECTION", "SUMMARY", "TABLE", "TBODY", "TD", "TFOOT", "TH", "THEAD", "TR", "UL");
(0,z.ub)("IMG", "IFRAME", "EMBED");
z.rr = z.L ? "focusin" : "DOMFocusIn";
z.sr = z.L ? "focusout" : "DOMFocusOut";
z.Zk = "load";
z.dl = z.uc ? "webkitTransitionEnd" : z.Rd ? "oTransitionEnd" : "transitionend";
(0,z.ub)("text", "file", "url");
z.tr = (0,z.Af)(z.s);
z.ur = (0,z.Af)(z.m);
z.Df[" "] = z.ja;
z.Mf = {BLOCKQUOTE:z.m, PRE:z.m, P:z.m, H2:z.m, H3:z.m, HR:z.m, DIV:z.m, FIGURE:z.m, UL:z.m, OL:z.m};
z.If = !!window.addEventListener;
z.Jf = z.If ? "addEventListener" : "attachEvent";
z.Kf = z.If ? "removeEventListener" : "detachEvent";
z.Uf.prototype.g = function(a, b, c) {
  this.sc[a] || (this.sc[a] = []);
  this.sc[a].push({Xj:b, Nj:c});
  return this
};
z.Uf.prototype.clear = function(a, b, c) {
  if("undefined" == typeof a) {
    return this.sc = {}, z.m
  }
  if((0,z.Vf)(this, a)) {
    if(b) {
      for(var d = 0;d < this.sc[a].length;d++) {
        var e = this.sc[a][d];
        if(e.Xj == b && e.Nj == c) {
          return z.bb.splice.call(this.sc[a], d, 1), 0 === this.sc[a].length && delete this.sc[a], z.m
        }
      }
    }else {
      return delete this.sc[a], z.m
    }
  }
  return z.s
};
z.Uf.prototype.pq = function(a) {
  var b, c = [];
  (0,z.Vf)(this, a.Zf || "") && (0,z.fb)(c, this.sc[a.Zf]);
  (0,z.Vf)(this, "*") && (0,z.fb)(c, this.sc["*"]);
  for(var d = 0;d < c.length;d++) {
    b = b || !!c[d].Xj.call(c[d].Nj, a)
  }
  return b
};
z.Yf = z.n;
z.$f = z.s;
z.cg = {};
z.bg = 0;
(0,z.C)(z.ng, z.Hd);
z.w = z.ng.prototype;
z.w.Fv = 1;
z.w.qk = 0;
z.w.h = function(a, b, c) {
  var d = this.Ud[a];
  d || (d = this.Ud[a] = []);
  var e = this.Fv;
  this.Xc[e] = a;
  this.Xc[e + 1] = b;
  this.Xc[e + 2] = c;
  this.Fv = e + 3;
  d.push(e);
  return e
};
z.w.Aa = function(a, b, c) {
  if(a = this.Ud[a]) {
    var d = this.Xc;
    if(a = (0,z.Ua)(a, function(a) {
      return d[a + 1] == b && d[a + 2] == c
    })) {
      return this.xn(a)
    }
  }
  return z.s
};
z.w.xn = function(a) {
  if(0 != this.qk) {
    return this.pk || (this.pk = []), this.pk.push(a), z.s
  }
  var b = this.Xc[a];
  if(b) {
    var c = this.Ud[b];
    c && (0,z.Ya)(c, a);
    delete this.Xc[a];
    delete this.Xc[a + 1];
    delete this.Xc[a + 2]
  }
  return!!b
};
z.w.F = function(a, b) {
  var c = this.Ud[a];
  if(c) {
    this.qk++;
    for(var d = (0,z.hb)(arguments, 1), e = 0, f = c.length;e < f;e++) {
      var h = c[e];
      this.Xc[h + 1].apply(this.Xc[h + 2], d)
    }
    this.qk--;
    if(this.pk && 0 == this.qk) {
      for(;c = this.pk.pop();) {
        this.xn(c)
      }
      this.Gf && (0,z.og)(this)
    }
    return 0 != e
  }
  return z.s
};
z.w.clear = function(a) {
  if(a) {
    var b = this.Ud[a];
    b && ((0,z.xc)(b, this.xn, this), delete this.Ud[a])
  }else {
    this.Xc.length = 0, this.Ud = {}
  }
};
z.w.Ne = function(a) {
  if(a) {
    var b = this.Ud[a];
    return b ? b.length : 0
  }
  a = 0;
  for(b in this.Ud) {
    a += this.Ne(b)
  }
  return a
};
z.w.o = function() {
  z.ng.q.o.call(this);
  if(0 != this.qk) {
    for(var a = 1;a < this.Xc.length;a += 3) {
      this.xn(a)
    }
  }else {
    (0,z.og)(this)
  }
};
z.pg.prototype.St = function() {
  if(!(this.Vl || 0 === this.yg.length)) {
    this.Vl = z.m;
    window.clearTimeout(this.gd);
    this.gd = z.n;
    var a = this.yg.concat();
    this.yg.length = 0;
    (0,z.Bb)(this.fa.post(this.mb, a, {V:z.m, xi:3, background:z.m}), function() {
      this.Vl = z.s;
      this.Yk = this.yg.length ? window.Math.min(36E5, 2 * this.Yk) : this.iu
    }, this)
  }
};
z.pg.prototype.zo = function() {
  this.yg.length && this.iu == this.Yk && this.St()
};
z.rg.prototype.Du = z.n;
z.rg.prototype.mv = function() {
  var a;
  if(!(a = this.Du)) {
    a = {}, (0,z.ug)(this) && (a[0] = z.m, a[1] = z.m), a = this.Du = a
  }
  return a
};
(0,z.C)(z.sg, z.rg);
z.vg = new z.sg;
z.zg = (0,window.RegExp)("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?\x3d[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
(0,z.C)(z.yg, z.Aa);
z.yg.prototype.name = "XhrError";
(0,z.C)(z.Ag, z.yg);
z.Ag.prototype.name = "XhrHttpError";
(0,z.C)(z.Bg, z.yg);
z.Bg.prototype.name = "XhrTimeoutError";
z.Zg = [];
z.Dg = {};
z.Yg = [];
(0,z.C)(z.$g, z.ng);
z.w = z.$g.prototype;
z.w.F = function(a, b) {
  return this.Ir ? z.ng.prototype.F.apply(this, arguments) : z.s
};
z.w.h = function(a, b, c) {
  var d = (0,z.ah)(this, b);
  d || (d = function() {
    try {
      b.apply(this, arguments)
    }catch(a) {
      (0,z.Og)(a)
    }
  }, this.wj.push([b, d]));
  return z.$g.q.h.call(this, a, d, c)
};
z.w.Aa = function(a, b, c) {
  return(b = (0,z.ah)(this, b)) ? z.$g.q.Aa.call(this, a, b, c) : z.s
};
z.w.ca = function() {
  this.setActive(z.m)
};
z.w.ta = function() {
  this.setActive(z.s)
};
z.w.setActive = (0,z.ca)("Ir");
z.w.o = function() {
  this.wj.length = 0;
  this.setActive(z.s);
  z.$g.q.o.call(this)
};
(0,z.C)(z.bh, z.$g);
z.w = z.bh.prototype;
z.w.Jo = z.s;
z.w.mh = function(a) {
  for(var b in a) {
    this.set(b, a[b])
  }
  return this
};
z.w.set = function(a, b) {
  for(var c = a.split("."), d = c[0], e = this.Ic;1 < c.length;) {
    e = this.Ic[c.shift()], (!e || "object" != typeof e) && (0,z.g)((0,window.Error)("Unable to call set() on non-object for key\x3d" + a))
  }
  c = c[0];
  e[c] != b && (e[c] = b, this.lo[d] = 1, this.Jo = z.m, this.F(d, this.Ic[d], this), this.F("change", d, this));
  return this
};
z.w.add = function(a, b, c) {
  this.Ic[a] ? (0,z.ma)(this.Ic[a]) || (0,z.g)((0,window.Error)("add() called on non array, key\x3d" + a)) : this.Ic[a] = [];
  "undefined" == typeof c ? this.Ic[a].push(b) : this.Ic[a][c] = b;
  this.lo[a] = 1;
  this.Jo = z.m;
  this.F(a, b, this);
  this.F("change", a, this);
  return this
};
z.w.removeItem = (0,z.x)(23);
z.w.get = function(a) {
  a = a.split(".");
  for(var b, c = this.Ic;(b = a.shift()) && (c = c[b]);) {
  }
  return c
};
z.w.La = (0,z.ea)("Ic");
z.hh = {};
(0,z.C)(z.ih, z.vb);
(0,z.jh)("start");
(0,z.jh)("iteration");
z.vr = (0,z.jh)("end");
z.w = z.ih.prototype;
z.w.Kx = function() {
  (0,z.Ff)(this.Pn);
  this.Pn = z.n;
  (0,z.Sd)(this.Zd, "animation", "")
};
z.w.start = function() {
  if("unsupported" == (0,z.gh)()) {
    return this.Ga(), this
  }
  (0,z.Vd)(this.Zd, "animation");
  var a = (0,z.qf)(this.Pl, function(a) {
    var c = [a.name, a.duration + "ms"];
    a.timing && c.push(a.timing);
    a.dc && c.push(a.dc + "ms");
    a.fill && c.push(a.fill);
    a.direction && c.push(a.direction);
    a.aD && c.push(a.aD);
    return c.join(" ")
  });
  this.Pn = (0,z.T)(this.Zd, z.vr, this.ez, this);
  (0,z.Sd)(this.Zd, "animation", a.join(","));
  (0,z.lh)(this);
  return this
};
z.w.pause = function(a) {
  return(0,z.kh)(this, z.m, a)
};
z.w.jn = (0,z.x)(46);
z.w.ez = function(a) {
  var b = this.Uk[a.animationName] = z.m;
  this.Pl.forEach(function(c) {
    b = b && !!this.Uk[c.name];
    c.name == a.animationName && (c.paused = z.m)
  }, this);
  b && this.Ga()
};
z.wr = {Rw:1, YE:10, IE:11, Gk:2, Hk:3, KE:4, HE:5, Ek:6, En:7, Sw:8, pF:9, $isProtoEnum:z.m};
z.xr = {ME:1, NE:2, aF:3, bF:4, $isProtoEnum:z.m};
z.yr = {Uw:1, Qw:2, A:3, EE:4, $isProtoEnum:z.m};
(0,z.C)(z.mh, z.bd);
(0,z.id)(z.mh, z.s, {name:"PostBodyModel", Yc:"MISSING_TABLE_IN_PROTO_DEFINITION", zc:"", Bc:new z.Yc("undefined"), yd:{1:"paragraphs"}, fields:{paragraphs:{C:function() {
  return z.nh
}, N:(0,z.v)(z.m), R:(0,z.v)(z.s), S:(0,z.v)(1), defaultValue:(0,z.t)()}}});
(0,z.C)(z.nh, z.bd);
(0,z.id)(z.nh, z.s, {name:"ParagraphPb", Yc:"MISSING_TABLE_IN_PROTO_DEFINITION", zc:"", Bc:new z.Yc("undefined"), yd:{1:"name", 2:"type", 3:"text", 4:"markups", 5:"dataId", 6:"layout", 7:"metadata", 8:"iframe"}, fields:{name:{C:function() {
  return window.String
}, N:(0,z.v)(z.s), R:(0,z.v)(z.s), S:(0,z.v)(1), defaultValue:(0,z.t)()}, type:{C:function() {
  return z.wr
}, N:(0,z.v)(z.s), R:(0,z.v)(z.s), S:(0,z.v)(2), defaultValue:(0,z.t)()}, text:{C:function() {
  return window.String
}, N:(0,z.v)(z.s), R:(0,z.v)(z.s), S:(0,z.v)(3), defaultValue:(0,z.t)()}, markups:{C:function() {
  return z.qh
}, N:(0,z.v)(z.m), R:(0,z.v)(z.s), S:(0,z.v)(4), defaultValue:(0,z.t)()}, dataId:{C:function() {
  return window.String
}, N:(0,z.v)(z.s), R:(0,z.v)(z.s), S:(0,z.v)(5), defaultValue:(0,z.t)()}, layout:{C:function() {
  return z.xr
}, N:(0,z.v)(z.s), R:(0,z.v)(z.s), S:(0,z.v)(6), defaultValue:(0,z.t)()}, metadata:{C:function() {
  return z.oh
}, N:(0,z.v)(z.s), R:(0,z.v)(z.s), S:(0,z.v)(7), defaultValue:(0,z.t)()}, iframe:{C:function() {
  return z.ph
}, N:(0,z.v)(z.s), R:(0,z.v)(z.s), S:(0,z.v)(8), defaultValue:(0,z.t)()}}});
z.w = z.nh.prototype;
z.w.getName = (0,z.x)(91);
z.w.wk = (0,z.x)(80);
z.w.C = function() {
  return(0,z.ed)(this, "type")
};
z.w.Yf = (0,z.x)(94);
z.w.Nb = (0,z.x)(69);
z.w.getMetadata = (0,z.x)(47);
(0,z.C)(z.oh, z.bd);
(0,z.id)(z.oh, z.s, {name:"ImgMetadata", Yc:"MISSING_TABLE_IN_PROTO_DEFINITION", zc:"", Bc:new z.Yc("undefined"), yd:{1:"id", 2:"originalWidth", 3:"originalHeight"}, fields:{id:{C:function() {
  return window.String
}, N:(0,z.v)(z.s), R:(0,z.v)(z.s), S:(0,z.v)(1), defaultValue:(0,z.t)()}, originalWidth:{C:function() {
  return window.Number
}, N:(0,z.v)(z.s), R:(0,z.v)(z.s), S:(0,z.v)(2), defaultValue:(0,z.t)()}, originalHeight:{C:function() {
  return window.Number
}, N:(0,z.v)(z.s), R:(0,z.v)(z.s), S:(0,z.v)(3), defaultValue:(0,z.t)()}}});
z.w = z.oh.prototype;
z.w.xc = function() {
  return(0,z.ed)(this, "id")
};
z.w.Ye = (0,z.x)(0);
z.w.tq = (0,z.x)(10);
z.w.ph = (0,z.x)(54);
z.w.sq = (0,z.x)(45);
z.w.oh = (0,z.x)(56);
(0,z.C)(z.ph, z.bd);
(0,z.id)(z.ph, z.s, {name:"IframeMetadata", Yc:"MISSING_TABLE_IN_PROTO_DEFINITION", zc:"", Bc:new z.Yc("undefined"), yd:{1:"mediaResourceId", 2:"iframeWidth", 3:"iframeHeight"}, fields:{mediaResourceId:{C:function() {
  return window.String
}, N:(0,z.v)(z.s), R:(0,z.v)(z.s), S:(0,z.v)(1), defaultValue:(0,z.t)()}, iframeWidth:{C:function() {
  return window.Number
}, N:(0,z.v)(z.s), R:(0,z.v)(z.s), S:(0,z.v)(2), defaultValue:(0,z.t)()}, iframeHeight:{C:function() {
  return window.Number
}, N:(0,z.v)(z.s), R:(0,z.v)(z.s), S:(0,z.v)(3), defaultValue:(0,z.t)()}}});
z.ph.prototype.Wg = (0,z.x)(68);
z.ph.prototype.rn = function(a) {
  return(0,z.gd)(this, "mediaResourceId", a)
};
(0,z.C)(z.qh, z.bd);
(0,z.id)(z.qh, z.s, {name:"MarkupModel", Yc:"MISSING_TABLE_IN_PROTO_DEFINITION", zc:"", Bc:new z.Yc("undefined"), yd:{1:"type", 2:"start", 3:"end", 4:"href", 5:"title", 6:"rel", 7:"name"}, fields:{type:{C:function() {
  return z.yr
}, N:(0,z.v)(z.s), R:(0,z.v)(z.s), S:(0,z.v)(1), defaultValue:(0,z.t)()}, start:{C:function() {
  return window.Number
}, N:(0,z.v)(z.s), R:(0,z.v)(z.s), S:(0,z.v)(2), defaultValue:(0,z.t)()}, end:{C:function() {
  return window.Number
}, N:(0,z.v)(z.s), R:(0,z.v)(z.s), S:(0,z.v)(3), defaultValue:(0,z.t)()}, href:{C:function() {
  return window.String
}, N:(0,z.v)(z.s), R:(0,z.v)(z.s), S:(0,z.v)(4), defaultValue:(0,z.t)()}, title:{C:function() {
  return window.String
}, N:(0,z.v)(z.s), R:(0,z.v)(z.s), S:(0,z.v)(5), defaultValue:(0,z.t)()}, rel:{C:function() {
  return window.String
}, N:(0,z.v)(z.s), R:(0,z.v)(z.s), S:(0,z.v)(6), defaultValue:(0,z.t)()}, name:{C:function() {
  return window.String
}, N:(0,z.v)(z.s), R:(0,z.v)(z.s), S:(0,z.v)(7), defaultValue:(0,z.t)()}}});
z.w = z.qh.prototype;
z.w.C = function() {
  return(0,z.ed)(this, "type")
};
z.w.Yf = (0,z.x)(93);
z.w.setStart = function(a) {
  return(0,z.gd)(this, "start", a)
};
z.w.setEnd = function(a) {
  return(0,z.gd)(this, "end", a)
};
z.w.Jf = (0,z.x)(83);
z.w.on = (0,z.x)(81);
z.w.Qc = function() {
  return(0,z.ed)(this, "title")
};
z.w.fc = function(a) {
  return(0,z.gd)(this, "title", a)
};
z.w.getName = (0,z.x)(90);
z.w.wk = (0,z.x)(79);
z.zr = (0,window.RegExp)("([\\S\\s]*?)(\\b(?:mailto:)?([\\w.+-]+@[A-Za-z0-9.-]+\\.(?:com|org|net|edu|gov|aero|biz|cat|coop|info|int|jobs|mobi|museum|name|pro|travel|arpa|asia|xxx|[a-z][a-z])\\b)|\\b(?:(https?|ftp)://+|www\\.)\\w[:;,\\.?\\[\\]\\)!\\w/~%\x26\x3d+#-@!]*|$)", "g");
z.w = z.rh.prototype;
z.w.tb = z.n;
z.w.qa = z.n;
z.w.Ne = function() {
  (0,z.sh)(this);
  return this.qa
};
z.w.add = function(a, b) {
  (0,z.sh)(this);
  this.Nc = z.n;
  a = (0,z.th)(this, a);
  var c = this.tb.get(a);
  c || this.tb.set(a, c = []);
  c.push(b);
  this.qa++;
  return this
};
z.w.remove = function(a) {
  (0,z.sh)(this);
  a = (0,z.th)(this, a);
  return this.tb.Og(a) ? (this.Nc = z.n, this.qa -= this.tb.get(a).length, this.tb.remove(a)) : z.s
};
z.w.clear = function() {
  this.tb = this.Nc = z.n;
  this.qa = 0
};
z.w.Mm = function() {
  (0,z.sh)(this);
  return 0 == this.qa
};
z.w.Og = function(a) {
  (0,z.sh)(this);
  a = (0,z.th)(this, a);
  return this.tb.Og(a)
};
z.w.Kf = function() {
  (0,z.sh)(this);
  for(var a = this.tb.pe(), b = this.tb.Kf(), c = [], d = 0;d < b.length;d++) {
    for(var e = a[d], f = 0;f < e.length;f++) {
      c.push(b[d])
    }
  }
  return c
};
z.w.pe = function(a) {
  (0,z.sh)(this);
  var b = [];
  if(a) {
    this.Og(a) && (b = (0,z.cb)(b, this.tb.get((0,z.th)(this, a))))
  }else {
    a = this.tb.pe();
    for(var c = 0;c < a.length;c++) {
      b = (0,z.cb)(b, a[c])
    }
  }
  return b
};
z.w.set = function(a, b) {
  (0,z.sh)(this);
  this.Nc = z.n;
  a = (0,z.th)(this, a);
  this.Og(a) && (this.qa -= this.tb.get(a).length);
  this.tb.set(a, [b]);
  this.qa++;
  return this
};
z.w.get = function(a, b) {
  var c = a ? this.pe(a) : [];
  return 0 < c.length ? (0,window.String)(c[0]) : b
};
z.w.toString = function() {
  if(this.Nc) {
    return this.Nc
  }
  if(!this.tb) {
    return""
  }
  for(var a = [], b = this.tb.Kf(), c = 0;c < b.length;c++) {
    for(var d = b[c], e = (0,window.encodeURIComponent)((0,window.String)(d)), d = this.pe(d), f = 0;f < d.length;f++) {
      var h = e;
      "" !== d[f] && (h += "\x3d" + (0,window.encodeURIComponent)((0,window.String)(d[f])));
      a.push(h)
    }
  }
  return this.Nc = a.join("\x26")
};
z.w.ga = (0,z.x)(30);
z.w.pn = (0,z.x)(4);
z.w.extend = function(a) {
  for(var b = 0;b < arguments.length;b++) {
    (0,z.oe)(arguments[b], function(a, b) {
      this.add(b, a)
    }, this)
  }
};
z.Ar = new z.vh;
(0,z.wh)(z.Ar, z.n);
z.Br = (0,z.Ah)();
z.Cr = (0,z.Ah)();
(0,z.zh)(z.Cr, "BR");
z.Dr = (0,z.Ah)();
(0,z.zh)(z.Dr, "A", ["href", "title", "rel"]);
(0,z.zh)(z.Dr, "BR");
(0,z.zh)(z.Dr, "STRONG", ["id"], ["B"]);
(0,z.zh)(z.Dr, "EM", [], ["I"]);
z.Er = (0,z.Ah)();
z.Er.Dc = (0,z.pb)(z.Dr.Dc);
(0,z.zh)(z.Er, "IMG", ["data-id", "src", "width", "height"]).mc = z.Ar;
z.Fr = (0,z.Ah)();
(0,z.zh)(z.Fr, "IMG", ["data-id", "src", "width", "height"]).mc = z.Ar;
(0,z.zh)(z.Fr, "FIGCAPTION", {"class":["content-caption", "image-caption"], "data-image-id":z.m}).mc = z.Dr;
z.Gr = (0,z.Ah)();
(0,z.zh)(z.Gr, "LI", ["name"]).mc = z.Dr;
z.Ir = (0,z.Ah)();
(0,z.zh)(z.Ir, "P", {name:z.m, "class":["image-inset-left", "image-outset-left", "image-outset-center"]}, ["DIV"]).mc = z.Er;
(0,z.zh)(z.Ir, "FIGURE", {name:z.m, "class":["image-inset-left", "image-outset-left", "image-outset-center"]}).mc = z.Fr;
(0,z.zh)(z.Ir, "UL").mc = z.Gr;
(0,z.zh)(z.Ir, "OL").mc = z.Gr;
(0,z.zh)(z.Ir, "HR", ["name"]).mc = z.Ar;
(0,z.zh)(z.Ir, "H2", ["name"]).mc = z.Dr;
(0,z.zh)(z.Ir, "H3", ["name"]).mc = z.Dr;
(0,z.zh)(z.Ir, "BLOCKQUOTE", {name:z.m, "class":["pullquote"]}).mc = z.Dr;
(0,z.zh)(z.Ir, "PRE", ["name"]).mc = z.Dr;
z.Hr = z.Ir;
z.Ch = {"\x26":"\x26amp;", "\x3e":"\x26gt;", "\x3c":"\x26lt;", '"':"\x26quot;", "'":"\x26#39;"};
z.Jr = (0,z.ub)(["cupstep.com", "hatch.dm", "medium.com"]);
z.Eh = {};
z.Fh = {name:"flexArticle", englishName:"Article", HJ:"article-flex.png", className:"template-flex-article", gK:"views.post.flexArticle.index", defaultTitle:"Type your title", gC:"title", fields:{image:{type:"image", defaultValue:z.n, englishName:"image", Kq:z.m, PD:["caption"], strategy:{cover:{type:"crop-preserve", height:0.42}, contain:{type:"resample", width:700}}}, caption:{type:"oneliner", defaultValue:"Photo description / credit (optional)", englishName:"image caption", Kq:z.m, gD:z.m}, body:{type:"html", 
defaultValue:"Type your post", englishName:"article text", eC:z.m}, subtitle:{type:"oneliner", defaultValue:"Type your subtitle (optional)", englishName:"subtitle", Kq:z.m}}};
z.Eh[z.Fh.name] = z.Fh;
z.Kr = {"":1, n:window.Math.pow(1024, -3), u:window.Math.pow(1024, -2), m:1 / 1024, k:1024, K:1024, M:window.Math.pow(1024, 2), G:window.Math.pow(1024, 3), T:window.Math.pow(1024, 4), P:window.Math.pow(1024, 5)};
z.L && (0,z.Ub)(8);
z.Mh = {};
z.Uh = {};
z.ai = {};
z.Ih = {};
z.Jh = {};
z.Xh = /['()]/g;
z.ci = {"\x00":"\x26#0;", '"':"\x26quot;", "\x26":"\x26amp;", "'":"\x26#39;", "\x3c":"\x26lt;", "\x3e":"\x26gt;", "\t":"\x26#9;", "\n":"\x26#10;", "\x0B":"\x26#11;", "\f":"\x26#12;", "\r":"\x26#13;", " ":"\x26#32;", "-":"\x26#45;", "/":"\x26#47;", "\x3d":"\x26#61;", "`":"\x26#96;", "":"\x26#133;", " ":"\x26#160;", "\u2028":"\x26#8232;", "\u2029":"\x26#8233;"};
z.di = {"\x00":"%00", "":"%01", "":"%02", "":"%03", "":"%04", "":"%05", "":"%06", "":"%07", "\b":"%08", "\t":"%09", "\n":"%0A", "\x0B":"%0B", "\f":"%0C", "\r":"%0D", "":"%0E", "":"%0F", "":"%10", "":"%11", "":"%12", "":"%13", "":"%14", "":"%15", "":"%16", "":"%17", "":"%18", "":"%19", "":"%1A", "":"%1B", "":"%1C", "":"%1D", "":"%1E", "":"%1F", " ":"%20", '"':"%22", "'":"%27", "(":"%28", ")":"%29", "\x3c":"%3C", "\x3e":"%3E", "\\":"%5C", "{":"%7B", "}":"%7D", "":"%7F", "":"%C2%85", 
" ":"%C2%A0", "\u2028":"%E2%80%A8", "\u2029":"%E2%80%A9", "！":"%EF%BC%81", "＃":"%EF%BC%83", "＄":"%EF%BC%84", "＆":"%EF%BC%86", "＇":"%EF%BC%87", "（":"%EF%BC%88", "）":"%EF%BC%89", "＊":"%EF%BC%8A", "＋":"%EF%BC%8B", "，":"%EF%BC%8C", "／":"%EF%BC%8F", "：":"%EF%BC%9A", "；":"%EF%BC%9B", "＝":"%EF%BC%9D", "？":"%EF%BC%9F", "＠":"%EF%BC%A0", "［":"%EF%BC%BB", "］":"%EF%BC%BD"};
z.Nh = /[\x00\x22\x26\x27\x3c\x3e]/g;
z.Rh = /[\x00\x22\x27\x3c\x3e]/g;
z.Vh = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g;
z.Zh = /^(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i;
z.Ph = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g;
z.Qh = /</g;
(0,z.C)(z.gi, z.Hd);
z.w = z.gi.prototype;
z.w.fe = function() {
  this.D.innerHTML = (0,z.sd)(z.fi, {Pg:this.Nl.get("experimentalCss")});
  (0,z.ag)(this.D).g("popover-css-editor", this.TA, this);
  (0,z.Wf)("install-css", this.Ls, this);
  (0,z.Wf)("save-css", this.ZA, this)
};
z.w.TA = function(a) {
  (0,z.ml)(this.zg, a.target, (0,z.sd)(z.ei, {Pg:this.Nl.get("experimentalCss")}), "post-css-editor-popover")
};
z.w.Ls = function() {
  this.pg && ((0,z.ge)(this.pg), this.pg = z.n);
  var a = window.document.querySelector(".post-css-editor-textarea").value;
  a && (this.pg = (0,z.fe)(a))
};
z.w.ZA = function() {
  this.Ls();
  var a = window.document.querySelector(".post-css-editor-textarea").value || "";
  (0,z.G)(this.UA.post("/p/" + (0,z.dh)(this.Nl, "id") + "/updateCss", {postCss:a}, {V:z.m}), function() {
    this.Nl.set("experimentalCss", a);
    this.zg.remove()
  }, this)
};
z.w.o = function() {
  (0,z.dg)(this.D);
  (0,z.Zf)("install-css");
  (0,z.Zf)("save-css");
  this.pg && ((0,z.ge)(this.pg), this.pg = z.n);
  z.gi.q.o.call(this)
};
(0,z.C)(z.hi, z.Hd);
z.hi.prototype.o = function() {
  z.hi.q.o.call(this)
};
z.hi.prototype.Gi = function(a) {
  var b = {kk:this.Lh, wb:this.Rb};
  a && (0,z.rb)(b, a);
  return b
};
(0,z.C)(z.ii, z.Hd);
z.ii.prototype.o = function() {
  for(var a in this.pa) {
    this.pa[a].cancel()
  }
  z.ii.q.o.call(this)
};
(0,z.C)(z.pi, z.Hd);
z.w = z.pi.prototype;
z.w.Q = z.n;
z.w.Nt = z.n;
z.w.o = function() {
  var a = this.Tm.Rb;
  if(a) {
    var b = this.U;
    b.ua[a] && b.ua[a].ee--
  }
  this.Q = z.n;
  (0,z.Kd)(this.pa);
  z.pi.q.o.call(this)
};
z.w.Rc = function() {
  var a = this.Tm.Rb;
  a && this.U.ua[a] && (this.Q = (0,z.bk)(this.U, a), (0,z.Q)("variants.enable_post_to_post_navigation") && ((0,z.qi)(this) ? this.fe() : (0,z.G)((0,z.ji)(this.pa, (0,z.Lk)(this.Q, 5)), this.fe, this)))
};
z.w.fe = function() {
  (0,z.qi)(this) && this.Zb()
};
z.w.ew = function() {
  if(!this.Nt) {
    var a = (0,z.ri)(this);
    a && (this.Nt = (0,z.ji)(this.pa, (0,z.Vj)(this.Z, a, this.Tm.Gi())))
  }
};
z.w.Pv = function() {
  var a = (0,z.ri)(this);
  a && this.Z.navigate(a, this.Tm.Gi({wn:this.Qv.bind(this)}))
};
(0,z.Hh)("a", "collectionSubscriptionsByUserId", function(a) {
  return"colsub (" + (0,z.X)(a.reason.jG) + ")\n  w:" + (0,z.X)(a.reason.weight) + " t:" + (0,z.X)(a.reason.responseTime) + "ms"
});
(0,z.Hh)("a", "followUpsByUserId", function(a) {
  return"followup (" + (0,z.X)(a.reason.fJ) + ")\n  w:" + (0,z.X)(a.reason.weight) + " t:" + (0,z.X)(a.reason.responseTime) + "ms"
});
(0,z.Hh)("a", "mostPopular", function(a) {
  return"popular\n  w:" + (0,z.X)(a.reason.weight) + " t:" + (0,z.X)(a.reason.responseTime) + "ms"
});
(0,z.Hh)("a", "readLater", function(a) {
  return"readlater\n  w:" + (0,z.X)(a.reason.weight) + " t:" + (0,z.X)(a.reason.responseTime) + "ms"
});
(0,z.Hh)("a", "latest", function(a) {
  return"latest\n  w:" + (0,z.X)(a.reason.weight) + " t:" + (0,z.X)(a.reason.responseTime) + "ms"
});
(0,z.Hh)("c", "confirm", function(a) {
  a = a || {};
  return'\x3cbutton class\x3d"btn btn-primary btn-overlay-confirm" data-action\x3d"overlay-confirm"\x3e' + (a.Ju ? (0,z.X)(a.Ju) : "Confirm") + '\x3c/button\x3e\x3cbutton class\x3d"btn" data-action\x3d"overlay-cancel"\x3eCancel\x3c/button\x3e'
});
(0,z.Hh)("c", "alert", (0,z.v)('\x3cbutton class\x3d"btn btn-primary" data-action\x3d"overlay-close"\x3eClose\x3c/button\x3e'));
(0,z.Hh)("c", "refresh", (0,z.v)('\x3cbutton class\x3d"btn btn-primary" data-action\x3d"overlay-refresh"\x3eRefresh\x3c/button\x3e'));
(0,z.Hh)("c", "signin", function(a) {
  return'\x3ca href\x3d"/m/account/authenticate-twitter?redirect\x3d' + (0,z.Th)(a.LD) + '" class\x3d"btn btn-primary"\x3e\x3cspan class\x3d"icons icons-twitter"\x3e\x3c/span\x3eSign in with Twitter\x3c/a\x3e\x3cbutton class\x3d"btn" data-action\x3d"overlay-close"\x3eClose\x3c/button\x3e'
});
(0,z.Hh)("d", "recommend", (0,z.v)("Give this writer the props they deserve."));
(0,z.Hh)("d", "followUp", (0,z.v)("Continue the conversation with related\x26nbsp;links."));
(0,z.Hh)("d", "noteAdd", (0,z.v)("Speak up, spark a conversation."));
(0,z.Hh)("d", "noteReply", (0,z.v)("The strong, silent type is overrated—keep the conversation going."));
(0,z.Hh)("d", "readingList", (0,z.v)("Don’t let great posts slip into the Internet ether."));
(0,z.C)(z.Qi, z.pi);
z.Qi.prototype.Be = z.n;
z.Qi.prototype.o = function() {
  this.Be && ((0,z.dg)(this.Be), (0,z.P)(this.Be));
  this.Be = z.n;
  z.Qi.q.o.call(this)
};
z.Qi.prototype.Zb = function() {
  this.Be = (0,z.td)(z.Pi, {post:(0,z.qi)(this).La()});
  (0,z.ag)(this.Be).g("next-post", this.Pv, this);
  (0,z.T)(this.Be, "mouseover", this.ew, this);
  this.qf.appendChild(this.Be)
};
z.Qi.prototype.Qv = function(a, b) {
  var c = new z.ih(a, {name:"fade-back-out", duration:400});
  (0,z.G)(c, function() {
    a.style.visibility = "hidden";
    a.style.display = "none";
    (0,z.Df)(a.offsetHeight);
    (0,z.O)(b, "post-preview-enabled", "transition-from-post-footer")
  });
  var d = this.Be.getBoundingClientRect();
  b.style.display = "block";
  b.style.visibility = "visible";
  (0,z.Sd)(b, "transform", "translateY(" + d.top + "px)");
  (0,z.N)(b, "post-preview-enabled", "pre-transition-from-post-footer");
  (0,z.Df)(b.offsetHeight);
  (0,z.cc)(b, ["pre-transition-from-post-footer"], ["transition-from-post-footer"]);
  (0,z.Sd)(b, "transform", "translateY(0)");
  c.start();
  return c
};
(0,z.C)(z.Ri, z.pi);
z.Ri.prototype.uf = z.n;
z.Ri.prototype.o = function() {
  this.uf && ((0,z.dg)(this.uf), (0,z.P)(this.uf));
  this.uf = z.n;
  z.Ri.q.o.call(this)
};
z.Ri.prototype.Zb = function() {
  this.uf = (0,z.td)(z.Oi, {post:(0,z.qi)(this).La()});
  (0,z.ag)(this.uf).g("next-post", this.Pv, this);
  (0,z.T)(this.uf, "mouseover", this.ew, this);
  this.qf.appendChild(this.uf)
};
z.Ri.prototype.Qv = function(a, b) {
  var c = new z.ih(a, {name:"slide-up-out", duration:200}), d = new z.ih(b, {name:"slide-up-in", duration:200});
  (0,z.G)(c, function() {
    a.style.visibility = "hidden";
    a.style.display = "none";
    (0,z.Df)(a.offsetHeight)
  });
  b.style.display = "block";
  b.style.visibility = "visible";
  (0,z.Df)(b.offsetHeight);
  d.start();
  c.start();
  return d
};
z.ha.window && (z.ha.window._resizeIframe = z.Si);
z.pj = 1;
z.mj = z.n;
z.ij = {};
(0,z.C)(z.uj, z.ng);
z.uj.prototype.o = function() {
  (0,z.Ff)(this.WA);
  (0,z.Ff)(this.wp);
  (0,window.clearTimeout)(this.gd);
  z.uj.q.o.call(this)
};
z.uj.prototype.ug = function() {
  this.wp && (0,z.Ff)(this.wp);
  this.Gc = this.Z.hb.gb();
  this.wp = (0,z.T)(this.Gc == window.document.body ? window : this.Gc, "scroll", this.wg, this)
};
z.uj.prototype.wg = function() {
  this.F("scroll", this.Gc);
  var a = window.Date.now();
  200 <= a - this.Us && (this.F("scroll-throttled", this.Gc), this.Us = a)
};
z.uj.prototype.Tz = function(a) {
  this.F("resize", a);
  if(z.sp || z.rp) {
    var b = window.innerWidth, c = window.innerHeight;
    if(b === this.wu && 2 > window.Math.abs(c - this.vu)) {
      return
    }
    this.wu = b;
    this.vu = c
  }
  this.gd ? (0,window.clearTimeout)(this.gd) : ((0,z.N)(window.document.body, "resizing"), this.F("resize-start", a));
  this.gd = (0,window.setTimeout)(function() {
    this.F("resize-end", a);
    (0,z.O)(window.document.body, "resizing");
    this.gd = z.n
  }.bind(this), 200)
};
z.wj.prototype.create = function(a, b, c) {
  return(0,z.G)((0,z.fk)(a, this.eB), function(d) {
    return new d(a, b, c)
  }, this)
};
z.xj.prototype.create = function(a, b, c) {
  return new this.$A(a, b, c)
};
z.Bj = window.Date.now();
z.yj.prototype.show = function(a, b) {
  var c = window.document.getElementById(a), d = (b || this.ou)(this.Jr, c);
  this.Jr = c;
  return d
};
z.yj.prototype.remove = function(a) {
  (0,z.P)(window.document.getElementById(a))
};
z.Lr = "ontouchstart" in window.document.documentElement;
z.Mr = window.navigator.msPointerEnabled;
z.Sj = "pushState" in window.history && "replaceState" in window.history;
z.Nr = "FileReader" in window;
(0,z.C)(z.Cj, z.$g);
z.vj = "endNav";
z.Dj = 6E4;
z.Or = z.s;
z.w = z.Cj.prototype;
z.w.eo = "";
z.w.em = z.s;
z.w.Rd = function(a) {
  this.Sk || (this.Sk = (0,z.T)(window.document, "click", this.jy, this));
  (0,z.T)(window, "popstate", this.yy, this);
  this.em && (0,z.T)(window, "scroll", (0,z.qj)(200, this.Pt, this), this);
  window.onbeforeunload = this.zo.bind(this);
  return this.replace(a)
};
z.w.navigate = function(a, b) {
  if(!(0,z.oa)(a)) {
    return(0,z.Og)("Bad path " + a), (0,z.Jb)()
  }
  if(z.Sj) {
    return(0,z.Mj)(this, (0,z.Uj)(a), b, z.s)
  }
  window.location = "/" + a;
  return(0,z.Jb)()
};
z.w.reload = function(a) {
  if(this.ad != z.n) {
    var b = (0,z.Uj)(this.ad);
    (0,z.Mj)(this, b, a, z.m, z.m)
  }else {
    (0,z.g)((0,window.Error)("Invalid use of reload. No active path."))
  }
};
z.w.replace = function(a, b) {
  return(0,z.Mj)(this, (0,z.Uj)(a), b, z.m)
};
z.w.update = function(a, b) {
  var c = (0,z.Uj)(a), d = b || this.vh;
  d.hash = c.hash;
  delete this.nb[this.ad];
  this.nb[c.path] = this.hb;
  (0,z.Lj)(this, this.hb.Qc(), c.path, d, z.m);
  this.ad = c.path;
  this.vh = d
};
z.w.su = function(a, b) {
  return(0,z.Kb)(this.cm.show(a.rr, b), function() {
    this.hb && this.hb.ta();
    return a
  }, this)
};
z.w.IB = function(a, b) {
  var c = b.gb(), d = (0,z.Hb)(b);
  if(a.Hq) {
    if(this.em) {
      var e = this.Yt[a.Bq] || {scrollX:0, scrollY:0};
      c.focus();
      (0,z.Cb)(d, (0,z.Qj)(c, e.scrollX, e.scrollY))
    }else {
      c.focus()
    }
  }else {
    c.focus(), (0,z.Cb)(d, (0,z.Qj)(c, 0, 0))
  }
  return d
};
z.w.Xx = function(a, b, c) {
  try {
    c.bc.call(c)
  }catch(d) {
    (0,z.Og)(d)
  }
  c.Hd.Ii(c);
  this.ad != z.n && !this.hb.Hd.pi(this.ad, this.hb) && (0,z.Tj)(this, this.ad, this.hb);
  this.hb = this.nb[a] = c;
  this.ad = a;
  this.vh = b;
  return c
};
z.w.Pt = function() {
  this.em && this.eo && (this.Yt[this.eo] = {scrollX:window.scrollX, scrollY:window.scrollY})
};
z.w.vy = function(a, b, c) {
  (0,z.Tj)(this, a, b);
  return c
};
z.w.yy = function(a) {
  if(a.state && a.state.isNavigate) {
    var b = a.state.path, c = {};
    if(a.state.data) {
      try {
        c = window.JSON.parse(a.state.data)
      }catch(d) {
      }
    }
    c.Hq = z.m;
    this.replace(b, c);
    a.preventDefault()
  }
};
z.w.zo = function(a) {
  if(!z.Or) {
    z.Or = z.m;
    (0,window.setTimeout)(function() {
      z.Or = z.s
    }, 500);
    var b = this.hb && this.hb.pm();
    if("string" == typeof b) {
      return z.L && (a.returnValue = b), b
    }
    if(b) {
      return z.L && (a.returnValue = "Are you sure you want to leave?  Unsaved changes may be lost."), "Are you sure you want to leave?  Unsaved changes may be lost."
    }
    z.L && (a.returnValue = z.l)
  }
};
z.w.jy = function(a) {
  if(!a.metaKey && (!a.shiftKey && !a.altKey && !a.ctrlKey) && !(z.L && 1 != a.button || !z.L && a.button)) {
    for(var b = a.target;"A" != b.tagName;) {
      if(b = b.parentNode, !b) {
        return
      }
    }
    if(b.hostname == window.location.hostname) {
      var c = b.pathname;
      if((0,z.Ba)(c, this.Rn) && !c.match(/\.\w+$/)) {
        for(var d = 0;d < this.Nn.length;d++) {
          if(c.match(this.Nn[d])) {
            return
          }
        }
        var c = c.substr(this.Rn.length), c = c + (b.search + b.hash), e = z.s, d = {};
        if(b = b.getAttribute("data-source")) {
          d.source = b
        }
        (0,z.H)(this.navigate(c, d), function(a) {
          e = !(a instanceof z.Lb)
        });
        e || a.preventDefault()
      }
    }
  }
};
z.w.xj = function(a, b) {
  this.F.apply(this, arguments)
};
z.w.XA = function() {
  for(var a in this.nb) {
    var b = this.nb[a];
    b != this.hb && b.Hd.si(a, b) && (0,z.Tj)(this, a, b)
  }
};
(0,z.C)(z.Pj, window.Error);
z.Wj.prototype.xz = function() {
  this.Li = z.n
};
z.Wj.prototype.open = function(a) {
  if(this.Li) {
    return z.n
  }
  this.Li = (new z.Zj(this.t, a, z.m)).open();
  this.Li.h(z.Pr, this.xz, this);
  return this.Li
};
z.Wj.prototype.error = function(a) {
  return this.open({title:"Uh oh!", jc:a, type:z.Yj})
};
z.Wj.prototype.confirm = function(a, b, c) {
  return this.open({title:b || "Confirm", jc:a, type:z.Qr, Ju:c})
};
(0,z.C)(z.Zj, z.$g);
z.Rr = "confirm";
z.Sr = "cancel";
z.Pr = "dispose";
z.Yj = "alert";
z.Qr = "confirm";
z.w = z.Zj.prototype;
z.w.wl = z.s;
z.w.open = function() {
  this.ms = (0,z.T)(window, "keydown", this.Tx, this);
  window.document.body.appendChild(this.D);
  (0,z.N)(window.document.body, "overlay-dialog-open");
  this.J.focus();
  this.wl = z.m;
  this.F("open", this);
  return this
};
z.w.close = function() {
  if(this.wl) {
    return this.ms && (0,z.Ff)(this.ms), this.D.parentNode && (0,z.P)(this.D), this.wl = z.s, (0,z.O)(window.document.body, "overlay-dialog-open"), this.F("close", this), this.$i && this.o(), this
  }
};
z.w.L = function(a) {
  return this.D ? this.D.querySelector(a) : z.n
};
z.w.wx = function() {
  this.F(z.Rr, this);
  this.close()
};
z.w.ef = function() {
  this.F(z.Sr, this);
  this.close()
};
z.w.PA = function() {
  this.t.get("app").reload()
};
z.w.Tx = function(a) {
  27 === a.keyCode && this.close()
};
z.w.o = function() {
  (0,z.dg)(this.D);
  this.wl && (this.$i = z.s, this.close());
  this.t.get("app").Aa(z.vj, this.close, this);
  this.F(z.Pr, this);
  z.Zj.q.o.call(this)
};
(0,z.C)(z.ak, z.Nd);
z.w = z.ak.prototype;
z.w.js = z.n;
z.w.jp = z.n;
z.w.eg = z.n;
z.w.hs = z.n;
z.w.Ui = z.n;
z.w.Vk = 0;
z.w.Ja = z.n;
z.w.Kg = z.n;
z.w.Ri = z.n;
z.w.Ua = z.n;
z.w.Mo = z.n;
z.w.hc = z.n;
z.w.Ap = z.n;
z.w.Xo = z.n;
z.w.ke = function() {
  this.pa = new z.ii;
  return this.Mo
};
z.w.Re = function(a) {
  if(!a.value || !a.references) {
    var b = (0,window.Error)("trying to process bad embedded data in post/ShowScreen");
    (0,z.Eg)(b, "badData", window.JSON.stringify(a));
    (0,z.g)(b)
  }
  b = (0,z.Ak)(a.value, a.references);
  b = this.Ja = (0,z.jm)(this.U, b);
  this.Q && -1 == this.Q.indexOf(b) && this.Q.add(b);
  if(a.contextCollection) {
    var c = (0,z.Ak)(a.contextCollection, a.references);
    this.Ri = (0,z.qm)(this.U, c)
  }
  this.Ua = (0,z.Dh)((0,z.dh)(this.Ja, "postType"));
  this.nx = a.collaborators;
  (0,z.Q)("useragent.supportsEdit") && (!this.Ad() && b.get("creator.userId") == (0,z.Q)("currentUser.userId")) && (this.Z.navigate((this.ea || "p") + "/" + this.w + "/edit", this.yA), (0,z.g)(new z.Lb(this.Mo)))
};
z.w.ab = function() {
  var a = "/" + (this.ea || "p") + "/" + this.w;
  this.Mo = (0,z.G)((0,z.G)((0,z.G)((0,z.Md)(this, "request").get(a, {V:z.m}), this.Re, this), this.Dg, this), this.Ha, this)
};
z.w.Ha = function() {
  var a = [this.Ja.get("title")];
  this.Ri && a.push(this.Ri.get("name"));
  a.push((0,z.Q)("productName"));
  this.fc(a.join(" — "));
  this.eg = this.L(".post-article");
  if(this.hs = this.L(".background-size-cover")) {
    this.Ui = this.L(".post-header-image-cover")
  }
  (0,z.ag)(this.l).g("sign-in", this.nB, this).g("remove-crosspost", this.Ay, this).g("upvote", this.xu, this).g("unvote", this.xu, this).g("crosspost-to-collection", this.zx, this).g("post-edit", this.Ox, this).g("show-collaborator", this.ru, this).g("hide-collaborator", this.ru, this).g("share-on-twitter", this.hB, this).g("share-on-facebook", this.gB, this);
  (0,z.Q)("variants.experimental_css_editing") && (0,z.Q)("variants.is_super_user") && (this.js = new z.gi(this.t, this.Ja, this.eg.querySelector(".post-author-card")));
  (0,z.xc)(this.eg.querySelectorAll("iframe"), z.Si)
};
z.w.bc = function() {
  (0,z.oj)(z.pj, "post");
  !(0,z.dk)(this) && (this.Ja && this.Ad()) && ((0,z.H)(this.fa.put("/p/" + this.w + "/state/viewed", z.n, {background:z.m, tc:z.m}), z.Og), (0,z.Ti)(z.lp, {postId:this.w}));
  (0,z.N)(window.document.body, this.Ua.className);
  (0,z.ek)(this);
  (0,z.Q)("variants.enable_skip_post") && this.Ad() && (this.Ap = new z.Ri(this.t, this.l, this.w, this.Kh), this.Ap.Rc());
  (0,z.gk)(this) && (this.Xo = new z.Qi(this.t, this.L(".post-footer"), this.w, this.Kh), this.Xo.Rc());
  var a = this.qp(), b = (0,z.ik)(this), c = (0,z.hk)(this);
  (0,z.Bb)((0,z.Bb)((0,z.Bb)(a, function() {
    return b
  }), function() {
    return c
  }), function() {
    (0,z.N)(this.l, "post-supplemental-loaded")
  }, this);
  this.Yi = (0,z.qj)(1E3, this.rz);
  this.Ba.h("scroll", this.Yi, this);
  this.Ba.h("resize-end", this.Qo, this);
  z.Lr || this.Ba.h("scroll", this.wg, this);
  this.Yi.call(this);
  this.Qo();
  if((0,z.Q)("variants.use_experimental_css")) {
    if(a = (0,z.dh)(this.Ja, "experimentalCss")) {
      this.jp = (0,z.fe)(a)
    }
    (0,z.mk)()
  }
  this.aB.h(z.ho, this.IA, this)
};
z.w.ta = function() {
  this.jp && (0,z.ge)(this.jp);
  (0,z.mk)();
  (0,z.Ff)(this.xa);
  this.Yi.cancel();
  (0,z.O)(window.document.body, this.Ua.className);
  (0,z.Kd)(this.pa);
  (0,z.Kd)(this.cd);
  (0,z.Kd)(this.hc);
  (0,z.Kd)(this.Ap);
  (0,z.Kd)(this.Xo);
  this.Ba.Aa("resize-end", this.Qo, this);
  this.Ba.Aa("scroll", this.Yi, this);
  this.Ba.Aa("scroll", this.wg, this);
  (0,z.Kd)(this.js)
};
z.w.Ad = function() {
  return!!this.Ja.get("latestPublishedVersion")
};
z.w.hB = function(a) {
  this.Gj.un((0,z.dh)(this.Ja, "title"), (0,z.dh)(this.Ja, "creator.username"), this.w, a.target.getAttribute("data-action-type") || "post", this.nx)
};
z.w.IA = function(a) {
  a = (0,z.pb)(a);
  a.postId = this.w;
  (0,z.gj)(z.fp, a)
};
z.w.gB = function(a) {
  this.Ux.un((0,z.dh)(this.Ja, "title"), (0,z.dh)(this.Ja, "creator.name"), (0,z.dh)(this.Ja, "virtuals.snippet"), (0,z.dh)(this.Ja, "content.image.imageId"), this.w, a.target.getAttribute("data-action-type") || "post")
};
z.w.Qo = function() {
  var a = this.eg.getElementsByClassName("body")[0], b = this.l.getElementsByClassName("post-author-card")[0], c = (0,z.Qf)(b) + b.offsetHeight;
  (0,z.N)(this.eg, "grid-breaking");
  (0,z.Sf)(a, function(a) {
    var b = (0,z.Qf)(a) < c;
    (0,z.ec)(a, "grid-breaking-override", b)
  }, this)
};
z.w.o = function() {
  (0,z.dg)(this.l);
  var a = this.U, b = this.Kh.Rb;
  a.ua[b] && a.ua[b].ee--;
  this.Q = z.n;
  z.ak.q.o.call(this)
};
z.w.Dg = function(a) {
  this.l.innerHTML = (0,z.sd)(z.Di, {post:this.Ja.La(), contextCollection:this.Ri ? this.Ri.La() : z.l, mode:a.mode, collaborators:a.collaborators, postStatus:a.postStatus, isCrossPoster:a.isCrossPoster})
};
z.w.qp = function() {
  return(0,z.Q)("variants.enable_followups") ? (0,z.H)((0,z.G)((0,z.ji)(this.pa, (0,z.tj)(500)), function() {
    this.hc = (0,z.Md)(this, "follow-ups").gi(this.Ja, (0,z.dk)(this));
    return(0,z.G)((0,z.G)(this.hc.Rc(this.L(".post-follow-ups")), this.hc.lD, this.hc), function() {
      var a = (0,z.Sm)(this.hc);
      a && (0,z.Tm)(this.hc, a)
    }, this)
  }, this), z.Og) : (0,z.Hb)(z.m)
};
z.w.nB = function(a) {
  (0,z.dc)(a.target, "recommend-button") ? ((0,z.Ti)(z.wo, {collectionSlug:this.ea, postIds:[this.w]}), a = "/m/signin?addToken\x3dtrue\x26redirect\x3d" + (0,window.encodeURIComponent)("/_/vote/" + (this.ea || "p") + "/" + this.w)) : a = "/m/signin?redirect\x3d" + (0,window.encodeURIComponent)("/" + this.kg());
  window.location = a
};
z.w.zx = function() {
  var a = (0,z.qf)(this.Ai(".collection-link"), function(a) {
    return a.getAttribute("data-collection-slug")
  });
  (0,z.Ti)(z.xo, {collectionSlug:this.ea, postIds:[this.w]});
  (0,z.bm)(this.Yn, this.w, a)
};
z.w.wg = function() {
  if(this.hs && (this.Vk = this.Vk || this.L(".background-size-cover").offsetHeight)) {
    this.Ui.style.visibility = this.gb().scrollTop > this.Vk ? "hidden" : ""
  }
};
z.w.rz = function() {
  if(this.Ja && this.Ad()) {
    var a = this.eg.getElementsByClassName("body")[0], a = (0,z.ae)(a, this.l).y + a.offsetHeight;
    this.l.scrollTop + this.l.offsetHeight >= a - 100 && ((0,z.H)(this.fa.put("/p/" + this.w + "/state/read", z.n, {background:z.m, tc:z.m}), z.Og), (0,z.Ti)(z.Do, {collectionSlug:this.ea, postIds:[this.w]}), this.Ba.Aa("scroll", this.Yi, this))
  }
};
z.w.Ay = function() {
  (0,window.confirm)("Are you sure you want to remove this post from this collection?") && (this.w ? ((0,z.Ti)(z.yo, {collectionSlug:this.ea, postIds:[this.w]}), (0,z.H)((0,z.G)(this.fa.cc("/" + this.ea + "/" + this.w), function() {
    this.Ja.get("homeCollection.slug") == this.ea && (this.Ja.set("homeCollection", z.n), this.Ja.set("homeCollectionId", ""));
    this.Q.remove(this.Ja);
    (0,z.jk)(this)
  }, this), z.Ig)) : (0,z.jk)(this))
};
z.w.kg = function() {
  return(this.ea || "p") + "/" + this.w
};
z.w.qq = function() {
  return this.ea || ""
};
z.w.xu = function(a) {
  if(!this.Ko) {
    this.Ko = z.m;
    var b = "unvote" == a.Zf, c = a.target, d = "/" + (this.ea || "p") + "/" + a.value + "/vote";
    this.Ja.set("vote", !b);
    (0,z.kk)(this);
    b ? ((0,z.Ti)(z.Co, {collectionSlug:this.ea, postIds:[this.w]}), (0,z.O)(this.L(".post-article"), "has-vote"), (0,z.O)(c, "active"), c.setAttribute("data-action", "upvote"), d = this.fa.cc(d, {tc:z.m})) : ((0,z.Ti)(z.Bo, {collectionSlug:this.ea, postIds:[this.w]}), (0,z.O)(this.L(".post-article"), "has-vote"), (0,z.N)(c, "active"), c.setAttribute("data-action", "unvote"), d = this.fa.put(d, z.n, {tc:z.m}));
    (0,z.Bb)(d, function() {
      this.Ko = z.s
    }, this);
    (0,z.H)(d, function() {
      (0,z.fc)(c, "active");
      (0,z.fc)(this.L(".post-article"), "has-vote");
      c.setAttribute("data-action", a.Zf);
      this.Ja.set("vote", b);
      (0,z.kk)(this)
    }, this);
    (0,z.H)(d, (0,z.Xj)(this.J, "We were unable to save your recommendation.  Please try again later."))
  }
};
z.w.eu = function(a) {
  var b = this.L(".recommend-button-meta");
  !this.Kg && a && (a.value.users = (0,z.lk)(this, a.value.users), this.Kg = new z.bh(a.value));
  b.innerHTML = (0,z.sd)(z.Hi, this.Kg.La())
};
z.w.lB = function(a) {
  a = (0,z.Ak)(a.value, a.references);
  var b = this.L(".post-footer");
  a.length && !this.ol && ((0,z.Q)("variants.enable_read_next") ? (b.appendChild((0,z.td)(z.Ji, {recommendations:a})), a = b.querySelector(".read-next"), (0,z.T)(a, "click", this.nz, this), (0,z.N)(this.l, "read-next-enabled")) : (b.appendChild((0,z.td)(z.Ii, {recommendations:a})), (0,z.N)(this.l, "recommended-posts-enabled")), this.ol = z.m)
};
z.w.nz = function(a) {
  var b = a.target;
  if("stat-link" == b.getAttribute("data-action")) {
    a = b.getAttribute("data-id");
    b = b.getAttribute("data-action-value").split(".").slice(-3);
    b = {fromPostId:this.w, destinationType:b[0], position:b[1], algorithm:b[2]};
    switch(b.destinationType) {
      case "post":
        b.toPostId = a;
        break;
      case "profile":
        b.toUserId = a;
        break;
      case "collection":
        b.toCollectionId = a
    }
    (0,z.Ti)(z.Ho, b)
  }
};
z.w.Ox = function(a) {
  this.Z.navigate(a.target.pathname.substr(1), this.Kh.Gi({scrollTop:this.gb().scrollTop}))
};
z.w.ru = function(a) {
  function b(b) {
    (0,z.ec)(c, "post-collaborator-visible", !b);
    a.target.setAttribute("data-action", b ? "show-collaborator" : "hide-collaborator");
    a.target.innerHTML = b ? "(show)" : "(hide)"
  }
  var c = (0,z.Tc)(a.target, "LI"), d = "hide-collaborator" == a.Zf, e = {state:d ? "hidden" : "visible"};
  b(d);
  (0,z.Bb)(this.fa.post("/p/" + this.w + "/collaborators/" + a.value, e, {V:z.m}), function(a) {
    a instanceof window.Error || a === z.s ? (this.Na.ca("Failed to " + (d ? "hide" : "show") + " collaborator", "error"), b(!d)) : this.Na.ca("Collaborator " + (d ? "Hidden" : "Shown"), "success")
  }, this)
};
z.w = z.nk.prototype;
z.w.pi = function(a, b) {
  var c = (0,z.sa)(b);
  this.nb[c] || (this.nb[c] = {time:this.now(), wb:b.wb});
  return z.m
};
z.w.si = function(a, b) {
  var c = this.$g(b);
  c && delete this.nb[(0,z.sa)(b)];
  return c
};
z.w.Pf = function(a, b, c) {
  a = (0,z.sa)(c);
  return this.nb[a] ? ((b = !this.$g(c) && (!!b.Hq || b.wb == this.nb[a].wb)) || delete this.nb[a], b) : z.s
};
z.w.Ii = z.ja;
z.w.now = function() {
  return(new window.Date).getTime()
};
z.w.$g = function(a) {
  a = (0,z.sa)(a);
  return!(a in this.nb) || this.now() - this.nb[a].time >= this.Ro
};
(0,z.Hh)("e", "", function(a, b, c) {
  b = "";
  a.collection ? (0,z.X)(a.collection.slug) : a.post.homeCollection && a.post.homeCollection.slug && (0,z.X)(a.post.homeCollection.slug);
  var d = (0,z.mi)(a);
  return b += '\x3carticle data-post-id\x3d"' + (0,z.Y)(a.post.id) + '" class\x3d"post-item' + (a.en ? " post-item-small" : "") + (a.dw ? " post-item-grid" : "") + (a.qe ? " hide-author" : "") + (a.Pd ? " hide-collection" : "") + (a.post.isRead ? " post-read-" + (0,z.Y)(a.post.isRead) : "") + " post-status-" + (!a.post.isPublished ? "draft" : a.post.status ? (0,z.Y)(a.post.status) : "") + (c.variants.show_subtitles ? " show-subtitles-variant" : "") + '" \x3e\x3ca href\x3d"/@' + (0,z.Y)(a.post.creator.username) + 
  '" title\x3d"Go to the profile of ' + (0,z.Y)(a.post.creator.name) + '"\x3e' + (0,z.Ai)((0,z.Gh)(a, {user:a.post.creator, Wb:"post-item-avatar"}), c) + '\x3c/a\x3e\x3ch3 class\x3d"post-item-title"\x3e\x3ca href\x3d"' + (0,z.Y)((0,z.Yh)(d)) + '" title\x3d"' + (0,z.Y)(a.post.title) + " by " + (0,z.Y)(a.post.creator.name) + '" data-action\x3d"open-post" data-action-value\x3d"' + (0,z.Y)(d) + '"' + (a.source ? ' data-source\x3d"' + (0,z.Y)(a.source) + '" ' : "") + "\x3e" + (a.post.title ? (0,z.X)(a.post.title) : 
  "Untitled") + "\x3c/a\x3e\x3c/h3\x3e" + (!c.variants.show_subtitles ? (0,z.xi)(a, c) : "") + (a.xw && c.variants.show_subtitles || !a.en && !a.dw ? '\x3ca class\x3d"post-item-snippet" href\x3d"' + (0,z.Y)((0,z.Yh)(d)) + '" data-action\x3d"open-post" data-action-value\x3d"' + (0,z.Y)(d) + '"' + (a.source ? ' data-source\x3d"' + (0,z.Y)(a.source) + '" ' : "") + "\x3e" + (!c.variants.show_subtitles ? "\x3cp\x3e" + (0,z.X)(a.post.virtuals.snippet) + "\x3c/p\x3e" : "\x3cp\x3e" + (0,z.X)(a.post.virtuals.draftSnippet) + 
  "\x3c/p\x3e") + "\x3c/a\x3e" : "") + (c.variants.show_subtitles ? (0,z.xi)(a, c) : "") + "\x3c/article\x3e"
});
(0,z.Hh)("e", "drafts", function(a, b, c) {
  b = "";
  var d = (0,z.li)(a, c);
  return b += '\x3carticle data-post-id\x3d"' + (0,z.Y)(a.post.id) + '" class\x3d"post-item post-status-draft"\x3e' + (!a.GC ? '\x3ca href\x3d"/@' + (0,z.Y)(a.post.creator.username) + '" title\x3d"Go to the profile of ' + (0,z.Y)(a.post.creator.name) + '"\x3e' + (0,z.Ai)((0,z.Gh)(a, {user:a.post.creator, Wb:"post-item-avatar"}), c) + "\x3c/a\x3e" : "") + '\x3ch3 class\x3d"post-item-title"\x3e\x3ca href\x3d"' + (0,z.Y)((0,z.Yh)(d)) + '" title\x3d"' + (0,z.Y)(a.post.title) + " by " + (0,z.Y)(a.post.creator.name) + 
  '" data-action\x3d"open-post" data-action-value\x3d"' + (0,z.Y)(d) + '"\x3e' + (a.post.title ? (0,z.X)(a.post.title) : "Untitled") + '\x3c/a\x3e\x3c/h3\x3e\x3ca class\x3d"post-item-snippet" href\x3d"' + (0,z.Y)((0,z.Yh)(d)) + '" title\x3d"' + (0,z.Y)(a.post.title) + '" data-action\x3d"open-post" data-action-value\x3d"' + (0,z.Y)(d) + '"\x3e\x3cp\x3e' + (0,z.X)(a.post.virtuals.draftSnippet) + "\x3c/p\x3e\x3c/a\x3e\x3c/article\x3e"
});
(0,z.C)(z.Ck, z.Nd);
z.w = z.Ck.prototype;
z.w.Hd = new z.nk(3E5);
z.w.cb = z.n;
z.w.uc = z.n;
z.w.vj = z.n;
z.w.va = z.n;
z.w.gb = z.xd;
z.w.ke = (0,z.ea)("cb");
z.w.Ha = function() {
  this.fc(this.uc.get("name") + " — " + (0,z.Q)("productName"));
  (0,z.ag)(this.l).g("new-post", this.Vo, this).g("toggle-subscribe-collection", this.zB, this);
  this.vj && (this.va = new z.Pk(this.t), (0,z.Sk)((0,z.Rk)((0,z.Qk)(this.va, this.vj), this.l).qh(this.gb()), {collection:this.uc.La(), Pd:z.m}), this.va.h(z.Tr, this.Hl, this))
};
z.w.bc = function() {
  (0,z.Ti)(z.kp, {collectionId:this.uc.get("id"), collectionSlug:this.Ub});
  (0,z.oj)(z.pj, "collection");
  this.va && this.va.ca()
};
z.w.o = function() {
  (0,z.dg)(this.l);
  this.va && ((0,z.Kd)(this.va), this.va = z.n);
  z.Ck.q.o.call(this)
};
z.w.ta = function() {
  this.va && this.va.ta();
  z.Ck.q.ta.call(this)
};
z.w.qq = (0,z.ea)("Ub");
z.w.Vo = function(a) {
  (0,z.Ti)(z.vo, {source:"collection"});
  this.ei.navigate(this.Ub + "/new-post", {pJ:a.value});
  return z.s
};
z.w.zB = function(a) {
  var b = this.uc.get("virtuals.isSubscribed"), c = "/me/subscriptions/collection/" + this.Ub, d, e, f;
  b ? (e = "delete", f = z.uo, d = "An error occurred. Please try unsubscribing to the collection again.") : (e = "put", f = z.to, d = "An error occurred. Please try subscribing to the collection again.");
  this.uc.set("virtuals.isSubscribed", !b);
  (0,z.fc)(a.target, "is-following");
  (0,z.H)((0,z.G)((0,z.Md)(this, "request").send(e, c, {}, {V:z.m}), function() {
    (0,z.Ti)(f, {collectionId:this.uc.get("id")})
  }, this), function() {
    this.uc.set("virtuals.isSubscribed", b);
    this.Na.ca(d, "error");
    (0,z.fc)(a.target, "is-following")
  }, this)
};
z.w.gp = function(a) {
  a = a.split("/");
  return a[1] ? a[1] : "overview"
};
z.w.Hl = function(a) {
  a = (0,z.qf)(a, function(a) {
    return a.get("id")
  });
  (0,z.Ti)(z.so, {collectionSlug:this.Ub, postIds:a})
};
(0,z.C)(z.Dk, z.Ck);
z.w = z.Dk.prototype;
z.w.jd = z.n;
z.w.Sl = z.n;
z.w.ua = {};
z.w.ab = function() {
  this.cb = (0,z.G)((0,z.G)(this.jh.get("/" + this.path + "?posts\x3dtrue", {V:z.m}), this.pc, this), this.Ha, this)
};
z.w.Ha = function() {
  this.$n();
  z.Dk.q.Ha.call(this);
  (0,z.ag)(this.l).g("open-post", this.ep, this)
};
z.w.Re = function(a) {
  this.pc({value:a.collection, latestPosts:a.latestPosts, oldestPosts:a.oldestPosts, recommendedPosts:a.recommendedPosts, references:{User:{}}})
};
z.w.bc = function() {
  z.Dk.q.bc.call(this);
  for(var a in this.ua) {
  }
  a = {collectionSlug:this.Ub, postIds:[].map(function(a) {
    return a.get("id")
  })};
  (0,z.Ti)(z.so, a);
  !this.vj && (!this.Fs && (0,z.Q)("variants.can_see_related_collections")) && (this.Sl = (0,z.Bb)((0,z.H)((0,z.G)(this.jh.get("/" + this.qq() + "/related", {V:z.m, background:z.m}), this.mB, this), z.Og), function() {
    this.Sl = z.n
  }, this))
};
z.w.o = function() {
  (0,z.Kd)(this.jd);
  this.jd = z.n;
  for(var a in this.ua) {
    this.ua[a].ee--
  }
  z.Dk.q.o.call(this)
};
z.w.ta = function() {
  this.Sl && this.Sl.cancel();
  z.Dk.q.ta.call(this)
};
z.w.pc = function(a) {
  var b = (0,z.Ak)(a.value, a.references);
  this.uc = (0,z.qm)(this.Le, b);
  b = (0,z.Ak)(a.latestPosts, a.references);
  this.ua.Mq = (0,z.ck)(this.Le, this.Ub, this.filterBy);
  this.ua.Mq.Lc(b);
  b = (0,z.Ak)(a.recommendedPosts, a.references);
  this.ua.dr = (0,z.ck)(this.Le, this.Ub, this.filterBy);
  this.ua.dr.Lc(b);
  a = (0,z.Ak)(a.oldestPosts, a.references);
  this.ua.Vm = (0,z.ck)(this.Le, this.Ub, this.filterBy);
  this.ua.Vm.Lc(a);
  "oldest" == this.uc.get("collectionSort") && (this.vj = this.ua.Vm)
};
z.w.$n = function() {
  var a = {feedUrl:"/feed/" + this.Ub, latestPosts:this.ua.Mq.La(), recommendedPosts:this.ua.dr.La(), oldestPosts:this.ua.Vm.La(), user:(0,z.Q)("currentUser"), filterBy:this.filterBy};
  this.jd = (0,z.Xl)(new z.Wl(this.l, this.uc, z.uk), a, "collection").Zb()
};
z.w.ep = function(a) {
  if(!a.ck) {
    var b = a.value;
    0 === a.value.indexOf("/") && (b = b.substr(1));
    var c;
    c = "oldest" == this.uc.get("collectionSort") ? this.ua.Vm : (0,z.Tc)(a.target, z.n, "collection-by-latest") ? this.ua.Mq : this.ua.dr;
    c = {wb:(0,window.String)(c.ki("id"))};
    if(a = a.target.getAttribute("data-source")) {
      c.source = a
    }
    this.ei.navigate(b, c)
  }
  return z.s
};
z.w.mB = function(a) {
  var b = (0,z.Ak)(a.value, a.references);
  a = this.L(".wrapper");
  b.length && !this.Fs && (b = b.map(function(a) {
    return a.collection
  }), b = b.filter(function(a) {
    return!!a
  }), a.appendChild((0,z.td)(z.vk, {collections:b})), (0,z.N)(this.l, "related-collections-enabled"), this.ol = z.m)
};
(0,z.C)(z.Ek, z.$g);
z.w = z.Ek.prototype;
z.w.add = function(a) {
  this.Mg(a, this.ma.length)
};
z.w.Mg = function(a, b) {
  a && (a = a instanceof z.bh ? a : this.Pj(a), (0,z.Gk)(this, a), (0,z.gb)(this.ma, b, 0, a), this.F("add", [a], this))
};
z.w.Lc = function(a) {
  for(var b = [], c = 0;c < a.length;c++) {
    var d = a[c] instanceof z.bh ? a[c] : this.Pj(a[c]);
    (0,z.Gk)(this, d);
    this.ma.push(d);
    b.push(d)
  }
  this.F("add", b, this)
};
z.w.remove = function(a) {
  var b = (0,z.Ya)(this.ma, a);
  b && ((0,z.Hk)(this, a), this.F("remove", a, this));
  return b
};
z.w.sk = (0,z.x)(51);
z.w.update = function(a) {
  if(0 === this.count()) {
    this.Lc(a)
  }else {
    for(var b = {}, c = {}, d = 0;d < this.ma.length;d++) {
      var e = this.ma[d].get("id");
      b[e] = this.ma[d];
      c[e] = d
    }
    d = [];
    for(e = this.ma.length = 0;e < a.length;e++) {
      var f = a[e].get("id"), h = b[f];
      h ? (c[f] != e && (this.F("remove", h, this), d.push(h)), this.ma.push(h), h !== a[e] && h.mh(a[e].La())) : (d.push(a[e]), this.ma.push(a[e]), (0,z.Gk)(this, a[e]));
      delete b[f]
    }
    for(var k in b) {
      (0,z.Hk)(this, b[k]), this.F("remove", b[k], this)
    }
    this.F("add", d, this)
  }
  return this
};
z.w.Ne = function() {
  return this.ma.length
};
z.w.count = function() {
  return this.Ne()
};
z.w.Eb = function(a, b) {
  (0,z.xc)(this.ma, a, b)
};
z.w.filter = function(a, b) {
  return(0,z.bc)(this.ma, a, b)
};
z.w.find = function(a, b) {
  return(0,z.Ua)(this.ma, a, b)
};
z.w.indexOf = function(a) {
  for(var b = 0;b < this.ma.length;b++) {
    if(this.ma[b] === a) {
      return b
    }
  }
  return-1
};
z.w.La = function(a, b) {
  var c = a ? this.filter(a, b) : this.ma;
  return(0,z.qf)(c, function(a) {
    return a.La()
  })
};
z.w.sn = function(a, b) {
  this.Lv[a] = (0,window.String)(b);
  return this
};
z.w.ki = function(a) {
  return this.Lv[a] || z.n
};
z.w.Pj = function(a) {
  return new z.bh(a)
};
z.w.xt = function(a, b) {
  this.F("change", [{Pq:b, dG:[a]}])
};
z.w.zt = function(a) {
  this.remove(a)
};
(0,z.C)(z.Ik, z.Ek);
z.w = z.Ik.prototype;
z.w.Xg = z.s;
z.w.nl = z.m;
z.w.ns = function() {
  var a = this.count();
  if(a >= this.bl || !this.nl) {
    return(0,z.Hb)(this)
  }
  a = this.sw(this.bl - a);
  this.Xg || a.Bf(this.cb);
  this.Xg = z.m;
  this.cb = a;
  (0,z.H)((0,z.G)((0,z.Bb)(a, this.mw, this), this.MA, this), this.Uv, this);
  return(0,z.Kk)(this, this.cb)
};
z.w.MA = function(a) {
  var b = this.Se(a);
  (this.nl = this.uw(a, b)) && b && this.Lc(b)
};
z.w.Bf = function(a) {
  !this.Xg && !this.cb.Oc ? a.Bf(this.cb) : this.Xg && !this.cb.Oc && (0,z.Cb)(a, this.cb);
  return a
};
z.w.Uv = function(a) {
  a instanceof z.yg || (0,z.Og)(a)
};
z.w.mw = function() {
  this.cb = (0,z.Hb)(this)
};
(0,z.C)(z.Mk, z.Ik);
z.Mk.prototype.pl = "GET";
z.Mk.prototype.uw = function(a, b) {
  return 0 !== b.length
};
z.Mk.prototype.Se = (0,z.aa)();
z.Mk.prototype.sw = function(a) {
  a = (0,z.Nk)(this, a);
  var b = this.mb;
  if("GET" == this.pl) {
    var b = b + (-1 == b.indexOf("?") ? "?" : "\x26"), c = (0,z.ne)(a);
    "undefined" == typeof c && (0,z.g)((0,window.Error)("Keys are undefined"));
    for(var d = new z.rh(z.n, 0, z.l), e = (0,z.me)(a), f = 0;f < c.length;f++) {
      var h = c[f], k = e[f];
      (0,z.ma)(k) ? (0,z.uh)(d, h, k) : d.add(h, k)
    }
    b += d
  }
  return this.jh.send(this.pl, b, a, {V:z.m})
};
z.Ik.prototype.wD = function(a) {
  a = this.Se(a);
  a = (0,z.qf)(a, this.Pj, this);
  this.update(a);
  return this
};
(0,z.C)(z.Ok, z.Hd);
z.w = z.Ok.prototype;
z.w.qh = (0,z.ca)("Rh");
z.w.Rd = function() {
  this.tl ? this.Ba.h("scroll-throttled", this.he, this) : (0,z.Wf)("load-more-items", this.Ut, this);
  this.tl && this.he()
};
z.w.disable = (0,z.x)(59);
z.w.enable = function() {
  this.Eh = z.s
};
z.w.o = function() {
  this.Ba.Aa("scroll-throttled", this.he, this);
  (0,z.Zf)("load-more-items");
  z.Ok.q.o.call(this)
};
z.w.he = function() {
  if(!this.Eh) {
    var a = this.Rh.scrollTop, b = this.Rh.scrollHeight, c = window.Math.min(this.Rh.offsetHeight, (0,z.rc)(window).height);
    a + 3 * c > b && this.Ut()
  }
};
z.w.Ut = function() {
  this.Eh || (this.Eh = z.m, (0,z.H)((0,z.Bb)((0,z.Lk)(this.Ib, this.yl), function() {
    this.Eh = z.s
  }, this), z.Og))
};
(0,z.C)(z.Pk, z.$g);
z.Pk.prototype.Q = z.n;
z.Pk.prototype.ig = z.n;
z.Pk.prototype.Rh = z.n;
z.Pk.prototype.rp = z.n;
z.Tr = "add";
z.w = z.Pk.prototype;
z.w.qh = function(a) {
  this.Rh = a;
  return this
};
z.w.ca = function() {
  this.mg = new z.Ok(this.t, this.Q, 10);
  this.mg.qh(this.Rh);
  (0,window.setTimeout)(function() {
    this.mg && this.mg.Rd()
  }.bind(this), 250)
};
z.w.ta = function() {
  (0,z.Kd)(this.mg);
  this.mg = z.n
};
z.w.o = function() {
  this.Q && (this.Q.Aa("add", this.Hl, this), this.Q.Aa("remove", this.Bt, this), this.Q.ee--, this.Q = z.n);
  (0,z.ag)(this.ig).clear("open-post")
};
z.w.Hl = function(a) {
  var b = {posts:(0,z.ch)(a)}, c;
  for(c in this.rp) {
    b[c] = this.rp[c]
  }
  b = (0,z.zc)((0,z.sd)(z.qk, b));
  this.ig.querySelector(".bucket").appendChild(b);
  (0,z.P)(this.ig.querySelector(".empty-bucket"));
  this.mg && (b = this.mg, b.tl && b.he());
  this.F(z.Tr, a, this)
};
z.w.Bt = function(a) {
  var b = this.ig.querySelector('.post-item[data-post-id\x3d"' + a.get("id") + '"]');
  (0,z.P)(b);
  this.F("remove", a, this)
};
z.w.ep = function(a) {
  if(!a.ck) {
    var b = a.value;
    0 === a.value.indexOf("/") && (b = b.substr(1));
    var c = {wb:(0,window.String)(this.Q.ki("id"))};
    if(a = a.target.getAttribute("data-source")) {
      c.source = a
    }
    this.Z.navigate(b, c)
  }
  return z.s
};
(0,z.C)(z.Tk, z.Ck);
z.w = z.Tk.prototype;
z.w.jd = z.n;
z.w.Q = z.n;
z.w.ab = function() {
  var a = this.Le.Xd[this.Ub] || z.n, b = this.wb && !!this.Le.ua[this.wb];
  a && b ? (this.uc = a, this.Q = (0,z.bk)(this.Le, this.wb), this.Ha()) : this.cb = (0,z.G)((0,z.G)(this.jh.get("/" + this.path + "?posts\x3dtrue", {V:z.m}), this.pc, this), this.Ha, this)
};
z.w.Ha = function() {
  this.$n();
  z.Tk.q.Ha.call(this)
};
z.w.Re = function(a) {
  this.pc({value:a.collection, posts:a.posts, references:{User:{}}})
};
z.w.bc = function() {
  var a = {collectionSlug:this.Ub, postIds:this.Q.ma.concat().map(function(a) {
    return a.get("id")
  })};
  (0,z.Ti)(z.so, a);
  z.Tk.q.bc.call(this)
};
z.w.o = function() {
  (0,z.Kd)(this.jd);
  this.jd = z.n;
  this.Q && this.Q.ee--;
  z.Tk.q.o.call(this)
};
z.w.ta = function() {
  z.Tk.q.ta.call(this)
};
z.w.pc = function(a) {
  var b = (0,z.Ak)(a.value, a.references);
  this.uc = (0,z.qm)(this.Le, b);
  a = (0,z.Ak)(a.posts, a.references);
  this.Q = (0,z.ck)(this.Le, this.Ub, this.filterBy);
  this.Q.Lc(a);
  this.vj = this.Q
};
z.w.$n = function() {
  var a = {feedUrl:"/feed/" + this.Ub, user:(0,z.Q)("currentUser"), posts:this.Q.La(), Pd:z.m, filterBy:this.filterBy};
  this.jd = (0,z.Xl)(new z.Wl(this.l, this.uc, z.uk), a, "collection").Zb()
};
z.w = z.Uk.prototype;
z.w.JB = function(a) {
  if((a = a.event.target) && !("IMG" != a.tagName || a.width >= window.innerWidth - z.bl)) {
    (0,z.Vk)(this, z.m), this.wh = new z.Wk(a, this.t), (0,z.Yk)(this.wh), this.dg = (0,z.Ij)(this.t.get("app")).gb(), this.xa.push((0,z.T)(this.dg, "scroll", (0,z.rj)(100, this.he, this), this)), this.xa.push((0,z.T)(window.document, "click", this.lx, this, z.m)), this.xa.push((0,z.T)(window.document, "keyup", this.Ry, this)), this.xa.push((0,z.T)(window.document, "touchstart", this.BB, this))
  }
};
z.w.Zy = function(a, b) {
  function c(a) {
    var b = window.document.createElement("img");
    b.src = (0,z.Xk)(a);
    this.mp = (0,z.T)(b, z.Zk, function() {
      if(a.width === a.height && !a.getAttribute("data-width")) {
        var c = window.Math.min(b.width, b.height);
        a.setAttribute("data-width", c);
        a.setAttribute("data-height", c);
        return b.src = (0,z.Xk)(a)
      }
      a.src = b.src;
      a.getAttribute("data-width") || (a.setAttribute("data-width", b.width), a.setAttribute("data-height", b.height));
      d.call(this)
    }, this)
  }
  function d() {
    if(this.Nh.length) {
      var a = this.Nh.shift();
      c.call(this, a)
    }
  }
  b && ((0,z.Vk)(this, z.m), this.mp && (0,z.Ff)(this.mp), this.Nh = window.Array.prototype.slice.call((0,z.Ij)(this.t.get("app")).Ai('[data-action\x3d"zoom"]')), d.call(this))
};
z.w.he = function() {
  this.Do === z.n && (this.Do = this.dg.scrollTop);
  40 <= window.Math.abs(this.Do - this.dg.scrollTop) && (0,z.Vk)(this)
};
z.w.Ry = function(a) {
  27 == a.keyCode && (0,z.Vk)(this)
};
z.w.lx = function(a) {
  a.stopPropagation();
  a.preventDefault();
  (0,z.Vk)(this)
};
z.w.BB = function(a) {
  this.Ks = a.touches[0].pageY;
  this.nu = (0,z.T)(a.target, "touchmove", this.AB, this)
};
z.w.AB = function(a) {
  10 < window.Math.abs(a.touches[0].pageY - this.Ks) && ((0,z.Vk)(this), (0,z.Ff)(this.nu))
};
(0,z.C)(z.Wk, z.Hd);
z.bl = 80;
z.Wk.prototype.close = function() {
  (0,z.O)(window.document.body, "zoom-overlay-open");
  (0,z.N)(window.document.body, "zoom-overlay-transitioning");
  (0,z.Sd)(this.ob, "transform", "");
  (0,z.Sd)(this.Dd, "transform", "");
  z.L && !(0,z.Ub)(10) ? this.Wa() : this.xf = (0,z.T)(this.ob, z.dl, this.Wa, this)
};
z.Wk.prototype.Wa = function() {
  this.Fa.Oc || this.Fa.cancel();
  this.No && (0,z.Ff)(this.No);
  this.xf && (0,z.Ff)(this.xf);
  this.Dd && this.Dd.parentNode && ((0,z.O)(this.ob, "zoom-img"), this.Dd.parentNode.replaceChild(this.ob, this.Dd), this.qj.parentNode.removeChild(this.qj), (0,z.O)(window.document.body, "zoom-overlay-transitioning"))
};
z.w = z.el.prototype;
z.w.enable = function() {
  !this.enabled && !z.Lr && (this.po = (0,z.T)(window.document, "mouseover", this.uy, this), this.oo = (0,z.T)(window.document, z.rr, this.my, this), this.l = window.document.createElement("div"), window.document.body.appendChild(this.l), this.enabled = z.m)
};
z.w.disable = (0,z.x)(58);
z.w.L = function(a) {
  return this.l.querySelector(a)
};
z.w.Ai = function(a) {
  return this.l ? (0,z.eb)(this.l.querySelectorAll(a)) : []
};
z.w.my = function(a) {
  this.add(a.target, a, z.sr)
};
z.w.uy = function(a) {
  this.add(a.target, a, "mouseout")
};
z.w.Zb = function(a) {
  return'\x3cdiv class\x3d"tooltip-inner"\x3e' + (0,z.$h)(a.wm) + '\x3c/div\x3e\x3cdiv class\x3d"tooltip-arrow"\x3e\x3c/div\x3e'
};
z.w.add = function(a, b, c) {
  if(a && a.getAttribute && a.getAttribute("data-tooltip")) {
    b && b.preventDefault();
    b = a.getAttribute("data-tooltip-position") || "top";
    var d = a.getAttribute("data-tooltip");
    d != this.Zp && (this.l.innerHTML = this.Zb({wm:d}), this.Zp = d);
    var d = a.getBoundingClientRect(), e = {width:d.width, height:d.height};
    this.Ea = a;
    (0,z.hl)(this, b, d, e);
    (0,z.Ff)(this.Vd);
    (0,z.jl)(this, c)
  }
};
z.w.remove = function() {
  var a = this.l;
  (0,z.dc)(a, this.ci) && ((0,z.kl)(this), (0,z.O)(a, this.ci), (0,z.Ff)(this.Vd), this.Vd = (0,z.T)(a, z.dl, function() {
    a.style.visibility = "hidden";
    (0,z.Ff)(this.Vd)
  }, this))
};
(0,z.C)(z.ll, z.el);
z.w = z.ll.prototype;
z.w.enable = function() {
  this.enabled || (this.enabled = z.m)
};
z.w.disable = (0,z.x)(57);
z.w.fy = function(a) {
  (0,z.Hc)(this.l, a.target) || this.remove()
};
z.w.Gy = function(a) {
  (0,z.Hc)(this.l, a.target) || this.remove()
};
z.w.Cs = function() {
  var a = this.Ea;
  this.remove();
  this.add(a)
};
z.w.add = function(a) {
  (0,z.ml)(this, a, a.getAttribute("data-popover"))
};
z.w.remove = function() {
  var a = this.l;
  (0,z.dc)(a, this.ci) && ((0,z.O)(a, this.ci), (0,z.Ff)(this.Vd), this.Vd = (0,z.T)(a, z.dl, function() {
    a.style.visibility = "hidden";
    (0,z.Ff)(this.Vd)
  }, this), (0,z.Ff)(this.el), (0,z.Ff)(this.fl), this.fl = this.el = this.Ea = z.n, this.Ba.Aa("resize-end", this.Cs, this))
};
z.w.Zb = function(a) {
  return(0,z.Ci)(a)
};
z.w = z.nl.prototype;
z.w.Ed = z.n;
z.w.ca = function(a, b) {
  var c = "string" == typeof b ? {type:b} : b || {}, d = this.Z.hb.L(".cover"), e = "butter-bar active ";
  c.type && (e += c.type + " ");
  d || (e += "butter-bar-center ");
  this.Na.className = e;
  var d = this.Na, e = c.Hi, f = c.VC, e = '\x3cp class\x3d"butter-bar-message"\x3e' + (0,z.$h)(a) + (e ? '\x3cspan class\x3d"butter-bar-actions"\x3e・\x3cbutton class\x3d"btn btn-chromeless butter-bar-action" data-action\x3d"undo"\x3eUndo\x3c/button\x3e\x3c/span\x3e' : "") + (f ? '\x3cbutton data-action\x3d"butter-bar-dismiss" class\x3d"butter-bar-dismiss btn-chromeless icons icons-remove"\x3e\x3c/button\x3e' : "") + "\x3c/p\x3e";
  d.innerHTML = e;
  this.Ed && (0,window.clearTimeout)(this.Ed);
  c.VC ? this.Z.h(z.vj, this.ta, this) : this.Ed = (0,window.setTimeout)(this.ta.bind(this), c.nK || 5E3);
  this.Lb.F("activate", this);
  return this.CA = new z.vb
};
z.w.ta = function() {
  (0,z.O)(this.Na, "active");
  this.Z.Aa(z.vj, this.ta, this);
  this.Lb.F("deactivate", this);
  this.Ed = z.n
};
z.w.mA = function() {
  this.CA.Ga(z.n)
};
z.w.OA = function() {
  this.Lb.F("action", this)
};
(0,z.C)(z.ol, z.Ek);
z.w = z.ol.prototype;
z.w.to = z.n;
z.w.os = z.n;
z.w.ho = 0;
z.w.yl = window.Infinity;
z.w.xd = (0,z.x)(6);
z.w.add = function() {
  (0,z.g)((0,window.Error)("Not implemented"))
};
z.w.Mg = function() {
  (0,z.g)((0,window.Error)("Not implemented"))
};
z.w.Lc = function() {
  (0,z.g)((0,window.Error)("Not implemented"))
};
z.w.remove = function() {
  (0,z.g)((0,window.Error)("Not implemented"))
};
z.w.sk = (0,z.x)(50);
z.w.update = function() {
  (0,z.g)((0,window.Error)("Not implemented"))
};
z.w.o = function() {
  this.Ib.Aa("add", this.wt, this);
  this.Ib.Aa("remove", this.At, this);
  this.Ib.Aa("change", this.yt, this);
  this.ma = this.Ib = z.n;
  z.ol.q.o.call(this)
};
z.w.sn = function(a, b) {
  this.Ib.sn(a, b);
  return this
};
z.w.ki = function(a) {
  return this.Ib.ki(a)
};
z.w.wt = function() {
  (0,z.Ul)(this)
};
z.w.At = function() {
  (0,z.Ul)(this)
};
z.w.yt = function(a) {
  var b = this.ma;
  (0,z.Ul)(this);
  for(var c = [], d = 0;d < a.length;d++) {
    var e = a[d].Pq;
    (0,z.Vl)(e, this.ma) && (0,z.Vl)(e, b) && c.push(a[d])
  }
  c.length && this.F("change", c)
};
(0,z.C)(z.Wl, z.$g);
z.w = z.Wl.prototype;
z.w.Ph = z.s;
z.w.yl = window.Infinity;
z.w.lf = function(a) {
  return a.La()
};
z.w.Ij = z.n;
z.w.io = z.n;
z.w.Vs = z.n;
z.w.ls = z.n;
z.w.o = function() {
  this.X.Aa("change", this.yi, this);
  this.X instanceof z.Ek && (this.X.Aa("add", this.Tq, this), this.X.Aa("remove", this.Uq, this));
  this.ls && !this.Ph && this.ls.cancel();
  this.Ph = z.s;
  this.l.innerHTML = "";
  delete this.l;
  z.Wl.q.o.call(this)
};
z.w.getData = (0,z.x)(66);
z.w.Zb = function() {
  this.Ph = z.m;
  this.X.h("change", this.yi, this);
  this.X instanceof z.Ek && (this.X.h("add", this.Tq, this), this.X.h("remove", this.Uq, this));
  this.Wm(z.m);
  return this
};
z.w.qn = function(a, b) {
  this.lf = a.bind(b);
  this.Wm();
  return this
};
z.w.Wm = function() {
  this.yi(z.n)
};
z.w.Tq = function() {
  this.yi(z.n)
};
z.w.Uq = function() {
  this.yi(z.n)
};
z.w.yi = function() {
  if(this.Ph) {
    var a;
    a = this.X instanceof z.Ek ? (0,z.qf)(this.X.ma.concat(), this.lf) : this.lf.call(z.n, this.X);
    a = (0,z.Yl)(this, a);
    a != this.Vs && (this.Vs = this.l.innerHTML = a)
  }
};
(0,z.C)(z.$l, z.Hd);
z.w = z.$l.prototype;
z.w.$i = z.s;
z.w.rf = z.n;
z.w.D = z.n;
z.w.jd = z.n;
z.w.Js = "";
z.w.at = "";
z.w.fu = z.s;
z.w.Gg = z.n;
z.w.lf = z.n;
z.w.qn = function(a) {
  this.lf = a;
  return this
};
z.w.Zb = function(a) {
  this.D = window.document.createElement("div");
  this.D.className = "sidepanel";
  var b = {MC:this.Js, hD:this.at, XD:this.fu};
  this.jd = (0,z.Xl)(new z.Wl(this.D, this.X, z.Zl), b, "items");
  this.lf && this.jd.qn(this.lf);
  this.jd.Zb();
  (a || window.document.body).appendChild(this.D);
  (0,z.ag)(this.D).g("select", this.cB, this).g("cancel", this.Zr, this).g("pick", this.DA, this);
  var c = this.D.querySelector(".sidepanel-glass");
  (0,z.T)(c, "click", function(a) {
    a.target == c && this.close()
  }, this)
};
z.w.open = function() {
  var a = this.D;
  window.setTimeout(function() {
    (0,z.N)(a, "sidepanel-open");
    a.querySelector(".sidepanel-panel").focus()
  }, 10);
  return this.rf = new z.vb
};
z.w.close = function() {
  (0,z.O)(this.D, "sidepanel-open");
  this.rf && !this.rf.Oc && this.rf.cancel();
  this.rf = z.n;
  this.$i && window.setTimeout(this.Wa.bind(this), 1E3)
};
z.w.o = function() {
  this.rf && this.close();
  (0,z.Kd)(this.jd);
  (0,z.Kd)(this.X);
  (0,z.dg)(this.D);
  (0,z.P)(this.D);
  z.$l.q.o.call(this)
};
z.w.cB = function(a) {
  this.Gg && (0,z.O)(this.Gg, "sidepanel-selected");
  this.Gg = a.target;
  (0,z.N)(this.Gg, "sidepanel-selected")
};
z.w.Zr = function() {
  this.Gg && ((0,z.O)(this.Gg, "sidepanel-selected"), this.Gg = z.n)
};
z.w.DA = function(a) {
  this.rf.Ga(a.value);
  this.Zr()
};
z.w = z.am.prototype;
z.w.Rc = function() {
  this.J = this.t.get("dialog")
};
z.w.cp = function() {
  this.Hg && this.Hg.close()
};
z.w.dx = function() {
  this.J.error("This featured is currently disabled.")
};
z.w.oB = function(a) {
  if((0,z.Q)("variants.auth_in_popup")) {
    var b = window.location.origin || "http://" + window.location.host, c = "/me/sigin/refresh";
    a.value && (c += "?action\x3d" + (0,window.encodeURIComponent)(a.value));
    window.open(b + "/m/account/authenticate-twitter?redirect\x3d" + (0,window.encodeURIComponent)(c), "Twitter Login", "width\x3d500,height\x3d500").focus()
  }else {
    b = window.location.pathname + window.location.search + window.location.hash, window.location = "/m/account/authenticate-twitter?redirect\x3d" + (0,window.encodeURIComponent)(a.value || b)
  }
};
z.w.fx = function(a) {
  var b;
  b = window.location.pathname + window.location.search + window.location.hash;
  var c = a.target.getAttribute("data-redirect") || b, d = this.zg;
  a.target.getAttribute("data-requires-token") != z.n ? (b = this.fa.get("/m/token", {tc:z.m, background:z.m}), (0,z.G)(b, function(b) {
    a.target.setAttribute("data-redirect", (0,window.encodeURIComponent)(c + "?token\x3d" + b.value));
    a.target.removeAttribute("data-requires-token");
    d.add(a.target)
  }), (0,z.H)(b, function() {
    window.location = "/m/signin?addToken\x3dtrue\x26redirect\x3d" + (0,window.encodeURIComponent)(c)
  })) : d.add(a.target)
};
z.w.rB = function(a) {
  a.value && (0,z.kj)(a.value);
  if(!a.ck) {
    var b = a.target;
    if(b.href) {
      if(b.hostname == window.location.hostname) {
        var c = b.pathname;
        "/" === b.pathname.charAt(0) && (c = c.substr(1));
        b = {};
        if(a = a.target.getAttribute("data-source")) {
          b.source = a
        }
        this.Z.navigate(c, b)
      }else {
        window.location = b.href
      }
    }
  }
};
z.w.Jx = function(a) {
  (0,z.P)((0,z.Tc)(a.target, z.n, "overlay-interstitial"))
};
z.w.mu = function(a) {
  var b = a.value;
  if(!this.op[b]) {
    var c = "add-to-reading-list" == a.Zf;
    a = "/p/" + a.value + "/reading-list";
    (0,z.hm)(this, b, c);
    a = c ? this.fa.put(a, z.n, {tc:z.m}) : this.fa.cc(a, {tc:z.m});
    this.op[b] = a;
    (0,z.Bb)(a, function() {
      delete this.op[b]
    }, this);
    (0,z.G)(a, function() {
      var a = c ? z.Fo : z.Go, e = this.U.qc[b], f = {postId:b};
      e && (f.readingTime = e.get("virtuals.readingTime"));
      (0,z.Ti)(a, f)
    }, this);
    (0,z.H)(a, function() {
      this.Na.ca("Sorry, we’re having trouble updating your reading list. Please try again.", "error");
      (0,z.hm)(this, b, !c)
    }, this)
  }
};
z.rm = window.Date.now();
z.im.prototype.Rc = function() {
  var a = (0,z.nm)(this, "myposts", "/me/posts", "GET"), b = (0,z.km)(this, "my-collections", "/me/collections"), c = (0,z.km)(this, "recommended", "/collections/recommended"), d = (0,z.km)(this, "recently-viewed", "/me/collections/viewed");
  (0,z.Q)("isAuthenticated") && ((0,z.Q)("variants.can_cross_post") || (0,z.Q)("variants.can_create_post")) && window.setTimeout(function() {
    (0,z.Jk)(a);
    (0,z.Jk)(b);
    (0,z.Jk)(c);
    (0,z.Jk)(d)
  }.bind(this), 5E3)
};
(0,z.C)(z.om, z.Mk);
z.om.prototype.Pj = function(a) {
  return(0,z.jm)(this.U, a)
};
(0,z.C)(z.lm, z.Mk);
z.lm.prototype.Pj = function(a) {
  return(0,z.qm)(this.U, a)
};
z.sm.prototype.bp = function() {
  (0,z.tm)(this)
};
z.Ur = "january february march april may june july august september october november december".split(" ");
(0,z.C)(z.vm, z.Nd);
z.w = z.vm.prototype;
z.w.Hd = z.Eq;
z.w.Fa = z.n;
z.w.va = z.n;
z.w.Q = z.n;
z.w.is = "";
z.w.gb = z.xd;
z.w.ke = (0,z.ea)("Fa");
z.w.ab = function() {
  this.Fa = (0,z.G)((0,z.G)(this.Po(), this.Dg, this), this.Ha, this)
};
z.w.Ha = function() {
  var a = this.Ih.charAt(0).toUpperCase() + this.Ih.slice(1), a = (0,z.Q)("productName") + " Top 100 - " + a + " " + this.im + " - " + (0,z.Q)("productName");
  this.fc(a);
  this.va = (0,z.Sk)((0,z.Rk)((0,z.Qk)(new z.Pk(this.t), this.Q), this.l).qh(this.gb()), {en:z.m, xD:z.m, xw:z.m})
};
z.w.Re = function(a) {
  this.pc({value:a.posts, coverImgUrl:a.coverImgUrl, references:{User:{}, Collection:{}}})
};
z.w.bc = function() {
  this.va && this.va.ca()
};
z.w.ta = function() {
  this.va && this.va.ta()
};
z.w.Po = function() {
  return this.U.ua[this.Rb] ? (this.Q = (0,z.bk)(this.U, this.Rb), (0,z.Hb)(z.m)) : (0,z.G)(this.fa.get("/" + this.mb, {V:z.m}), this.pc, this)
};
z.w.pc = function(a) {
  var b = (0,z.Ak)(a.value, a.references), c = "/top-100/" + this.Ih + "-" + this.im + "/load-more";
  this.U.ua[this.Rb] ? this.Q = (0,z.bk)(this.U, this.Rb) : (this.Q = (0,z.nm)(this.U, this.Rb, c, "POST"), this.Q.Lc(b), this.is = a.coverImgUrl)
};
z.w.Dg = function() {
  var a = this.Q.La(), b = this.Ih.charAt(0).toUpperCase() + this.Ih.slice(1), c = (0,z.Q)("bestOfFirstSlug").toString(), d = (0,z.Q)("bestOfLatestSlug").toString(), e = this.l, f = this.is, h = this.im, k;
  k = this.Cl;
  k == d ? k = z.n : (d = k.split("-")[0], d = (z.Ur.indexOf(d) + 1) % z.Ur.length, k = (0,window.parseInt)(k.split("-")[1], 10), k = z.Ur[d] + "-" + (d ? k : k + 1).toString());
  d = this.Cl;
  d == c ? c = z.n : (c = d.split("-")[0], c = z.Ur.indexOf(c) - 1, d = (0,window.parseInt)(d.split("-")[1], 10), 0 > c && (c = z.Ur.length - c, d--), c = z.Ur[c] + "-" + d.toString());
  e.innerHTML = (0,z.sd)(z.um, {posts:a, coverImgUrl:f, month:b, year:h, nextSlug:k, prevSlug:c})
};
z.w = z.wm.prototype;
z.w.load = function(a) {
  a = (0,z.xm)(a);
  if(this.Sd(a)) {
    return(0,z.Hb)(this.be[a])
  }
  this.be[a] || (this.be[a] = new z.vb, this.Mh[a] = 0, (0,z.ym)(this, a));
  return this.be[a].Ie()
};
z.w.Sd = function(a) {
  a = (0,z.xm)(a);
  a = this.be[a];
  return!!a && !!a.url
};
z.w.hk = function(a) {
  a = (0,z.xm)(a);
  a = this.be[a];
  return!!a && !a.url
};
z.w.pj = function(a) {
  var b = a.target || a.currentTarget;
  a = b.src;
  (0,z.zm)(this, a);
  if(this.hk(a)) {
    var c = this.be[a], b = {url:a, width:b.width, height:b.height};
    this.be[a] = b;
    delete this.Mh[a];
    c.Ga(b)
  }else {
    (0,z.Og)("finished loading an image, but we could not find the deferred. DOh!")
  }
};
z.w.vg = function(a) {
  a = (a.target || a.currentTarget).src;
  (0,z.zm)(this, a);
  if(2 > this.Mh[a]) {
    (0,z.Og)("Failed loading image " + a + ", retrying."), this.Mh[a] += 1, (0,z.ym)(this, a)
  }else {
    if(this.hk(a)) {
      var b = this.be[a];
      delete this.be[a];
      delete this.Mh[a];
      b.If(a)
    }else {
      (0,z.Og)("error encountered while loading an image, but we could not find the deferred. DOh!")
    }
  }
};
(0,z.C)(z.Cm, z.Wl);
z.Dm = window.Date.now();
z.w = z.Cm.prototype;
z.w.getData = (0,z.x)(65);
z.w.Wm = function(a) {
  if(this.Ph && a) {
    a = this.X.ma.concat();
    for(var b = 0;b < a.length;b++) {
      var c = (0,z.Fm)(this, a[b]);
      this.F("after-draw", a[b], c)
    }
  }
};
z.w.Tq = function(a, b) {
  for(var c = 0;c < a.length;c++) {
    var d = b.indexOf(a[c]), d = (0,z.Fm)(this, a[c], d);
    this.F("after-draw", a[c], d)
  }
};
z.w.Uq = function(a) {
  var b = window.document.getElementById(this.ql + (0,z.sa)(a));
  this.F("before-clear", a, b);
  this.F("destroy", a, b);
  (0,z.P)(b)
};
z.w.yi = function(a) {
  for(var b = 0;b < a.length;b++) {
    var c = a[b].Pq, d = window.document.getElementById(this.ql + (0,z.sa)(c));
    this.F("before-clear", c, d);
    d.innerHTML = (0,z.Yl)(this, c);
    this.F("after-draw", c, d)
  }
};
z.Vr = {Tw:1, Fn:2, Pw:3, $isProtoEnum:z.m};
(0,z.Hh)("f", "", function(a, b, c) {
  b = a.followUp.creatorId == c.currentUser.userId && !a.qi;
  return a = "" + ('\x3cdiv class\x3d"follow-up-content"\x3e' + (a.qi ? '\x3cdiv class\x3d"follow-up-link"\x3e' : '\x3ca class\x3d"follow-up-link" href\x3d"' + (0,z.Y)((0,z.Yh)(a.followUp.mediaResource.href)) + '"\x3e') + '\x3ch3 class\x3d"follow-up-title"\x3e' + (a.followUp && a.followUp.title ? (0,z.X)(a.followUp.title) : (0,z.X)(a.followUp.mediaResource.title)) + '\x3c/h3\x3e\x26thinsp;\x26mdash;\x26thinsp;\x3cp class\x3d"follow-up-description"\x3e' + (a.followUp && a.followUp.description ? (0,z.X)(a.followUp.description) : 
  (0,z.X)((0,z.bi)(a.followUp.mediaResource.description, 140))) + "\x3c/p\x3e" + (a.qi ? "\x3c/div\x3e" : "\x3c/a\x3e") + '\x3cdiv class\x3d"follow-up-footer"\x3e\x3cspan class\x3d"follow-up-footer-item"\x3e' + (a.followUp.creatorId != a.dn ? "via " + (0,z.si)({user:a.followUp.creator, Ia:"follow-up-footer-link"}) + " " : "") + 'on \x3ca href\x3d"' + (0,z.Y)((0,z.Yh)(a.followUp.mediaResource.href)) + '" class\x3d"follow-up-footer-link"\x3e' + (0,z.X)(a.followUp.mediaResource.virtuals.domain) + (!b ? 
  " \x26rarr;" : "") + "\x3c/a\x3e\x3c/span\x3e" + (b ? '\x3cbutton class\x3d"btn btn-chromeless follow-up-footer-item follow-up-footer-link follow-up-delete" data-action\x3d"delete-follow-up" data-action-value\x3d"' + (0,z.Y)(a.followUp.followUpId) + '"\x3eDelete\x3c/button\x3e' : "") + "\x3c/div\x3e\x3c/div\x3e")
});
(0,z.Hh)("f", "MediaResourceMediumPost", function(a, b, c) {
  b = a.followUp.mediaResource.mediumPost.post;
  return a = "" + ('\x3cdiv class\x3d"follow-up-content follow-up-type-medium-post"\x3e' + (a.qi ? '\x3cdiv class\x3d"follow-up-link"\x3e' : '\x3ca class\x3d"follow-up-link" href\x3d"' + (0,z.Y)((0,z.Yh)(a.followUp.mediaResource.href)) + '"\x3e') + '\x3ch3 class\x3d"follow-up-title"\x3e' + (a.followUp && a.followUp.title ? (0,z.X)(a.followUp.title) : (0,z.X)(b.title)) + '\x3c/h3\x3e\x26thinsp;\x26mdash;\x26thinsp;\x3cp class\x3d"follow-up-description"\x3e' + (a.followUp && a.followUp.description ? 
  (0,z.X)(a.followUp.description) : (0,z.X)(b.virtuals.draftSnippet)) + "\x3c/p\x3e" + (a.qi ? "\x3c/div\x3e" : "\x3c/a\x3e") + '\x3cdiv class\x3d"follow-up-footer"\x3e' + (a.followUp.creatorId != a.dn ? '\x3cspan class\x3d"follow-up-footer-item follow-up-author"\x3evia ' + (0,z.si)({user:a.followUp.creator, Ia:"follow-up-footer-link"}) + "\x3c/span\x3e" : "") + (a.followUp.creatorId == c.currentUser.userId && !a.qi ? '\x3cbutton class\x3d"btn btn-chromeless follow-up-footer-item follow-up-footer-link" data-action\x3d"delete-follow-up" data-action-value\x3d"' + 
  (0,z.Y)(a.followUp.followUpId) + '"\x3eDelete\x3c/button\x3e' : "") + "\x3c/div\x3e\x3c/div\x3e")
});
(0,z.C)(z.Im, z.bd);
(0,z.id)(z.Im, z.m, {name:"FollowUp", Yc:"followUp", zc:"postId", Bc:new z.Yc("/item/:followUpId"), yd:{1:"postId", 2:"followUpId", 3:"addedAt", 4:"updatedAt", 5:"creatorId", 6:"visibility", 7:"visibilityUpdatedAt", 8:"mediaResourceId", 9:"creatorNote", 10:"title", 11:"description", 12:"removedAt"}, fields:{postId:{C:function() {
  return window.String
}, N:(0,z.v)(z.s), R:(0,z.v)(z.s), S:(0,z.v)(1), defaultValue:(0,z.t)()}, followUpId:{C:function() {
  return window.String
}, N:(0,z.v)(z.s), R:(0,z.v)(z.s), S:(0,z.v)(2), defaultValue:(0,z.t)()}, addedAt:{C:function() {
  return window.Number
}, N:(0,z.v)(z.s), R:(0,z.v)(z.s), S:(0,z.v)(3), defaultValue:(0,z.t)()}, updatedAt:{C:function() {
  return window.Number
}, N:(0,z.v)(z.s), R:(0,z.v)(z.s), S:(0,z.v)(4), defaultValue:(0,z.t)()}, creatorId:{C:function() {
  return window.String
}, N:(0,z.v)(z.s), R:(0,z.v)(z.s), S:(0,z.v)(5), defaultValue:(0,z.t)()}, visibility:{C:function() {
  return z.Vr
}, N:(0,z.v)(z.s), R:(0,z.v)(z.s), S:(0,z.v)(6), defaultValue:(0,z.t)()}, visibilityUpdatedAt:{C:function() {
  return window.Number
}, N:(0,z.v)(z.s), R:(0,z.v)(z.s), S:(0,z.v)(7), defaultValue:(0,z.t)()}, mediaResourceId:{C:function() {
  return window.String
}, N:(0,z.v)(z.s), R:(0,z.v)(z.s), S:(0,z.v)(8), defaultValue:(0,z.t)()}, creatorNote:{C:function() {
  return window.String
}, N:(0,z.v)(z.s), R:(0,z.v)(z.s), S:(0,z.v)(9), defaultValue:(0,z.t)()}, title:{C:function() {
  return window.String
}, N:(0,z.v)(z.s), R:(0,z.v)(z.s), S:(0,z.v)(10), defaultValue:(0,z.t)()}, description:{C:function() {
  return window.String
}, N:(0,z.v)(z.s), R:(0,z.v)(z.s), S:(0,z.v)(11), defaultValue:(0,z.t)()}, removedAt:{C:function() {
  return window.String
}, N:(0,z.v)(z.s), R:(0,z.v)(z.s), S:(0,z.v)(12), defaultValue:(0,z.t)()}}});
z.Im.prototype.Wg = (0,z.x)(67);
z.Im.prototype.rn = function(a) {
  return(0,z.gd)(this, "mediaResourceId", a)
};
z.Im.prototype.Qc = function() {
  return(0,z.ed)(this, "title")
};
z.Im.prototype.fc = function(a) {
  return(0,z.gd)(this, "title", a)
};
(0,z.C)(z.Jm, z.bd);
(0,z.id)(z.Jm, z.m, {name:"FollowUpOrder", Yc:"followUpOrder", zc:"postId", Bc:new z.Yc("/order"), yd:{1:"postId", 2:"followUps", 3:"version"}, fields:{postId:{C:function() {
  return window.String
}, N:(0,z.v)(z.s), R:(0,z.v)(z.s), S:(0,z.v)(1), defaultValue:(0,z.t)()}, followUps:{C:function() {
  return window.String
}, N:(0,z.v)(z.m), R:(0,z.v)(z.s), S:(0,z.v)(2), defaultValue:(0,z.t)()}, version:{C:function() {
  return window.Number
}, N:(0,z.v)(z.s), R:(0,z.v)(z.s), S:(0,z.v)(3), defaultValue:(0,z.t)()}}});
z.Jm.prototype.jv = function() {
  return(0,z.ed)(this, "followUps")
};
(0,z.C)(z.Km, z.$g);
z.w = z.Km.prototype;
z.w.o = function() {
  for(var a in this.$h) {
    this.$h[a].cancel()
  }
  z.Km.q.o.call(this)
};
z.w.load = function() {
  return(0,z.H)((0,z.G)((0,z.G)(this.fa.get("/p/" + this.w + "/follow-ups", {V:z.m, background:z.m}), this.NA, this), function() {
    this.Xi = z.m
  }, this), z.Og)
};
z.w.Sd = (0,z.ea)("Xi");
z.w.jv = (0,z.ea)("Wx");
z.w.Qy = function(a) {
  return 3 !== a.get("visibility")
};
z.w.NA = function(a) {
  for(var b = a.value, c = 0;c < b.length;c++) {
    (0,z.Om)(this, b[c], a.references)
  }
};
(0,z.C)(z.Rm, z.Hd);
z.w = z.Rm.prototype;
z.w.qf = z.n;
z.w.aj = z.n;
z.w.Qb = z.n;
z.w.wo = z.n;
z.w.gj = z.s;
z.w.o = function() {
  this.Yr && this.gj && this.mo();
  this.Qb && (this.Qb.Aa("add", this.Pi, this), this.Qb.Aa("remove", this.Pi, this));
  (0,z.Kd)(this.pa);
  (0,z.dg)(this.ia);
  (0,z.P)(this.ia);
  this.ia = z.n;
  z.Rm.q.o.call(this)
};
z.w.Rc = function(a) {
  this.qf = a;
  return(0,z.G)((0,z.ji)(this.pa, this.X.load()), this.Py, this)
};
z.w.Wi = function() {
  var a = window.document.createElement("div");
  a.className = "follow-ups-container";
  return a
};
z.w.lD = function() {
  "#follow-up-editor" == window.document.location.hash && (this.Et(), (0,z.Kj)(this.Z, ""), this.jb(".follow-up-new").scrollIntoView(z.m))
};
z.w.Py = function() {
  this.ia.innerHTML = (0,z.sd)(z.Gm, {VB:this.Yr, post:this.Ja.La()});
  this.Qb = this.X.jv();
  this.Qb.h("add", this.Pi, this);
  this.Qb.h("remove", this.Pi, this);
  this.Pi();
  var a = this.jb(".follow-ups-list");
  this.wo = (0,z.Xl)((0,z.Em)(new z.Cm(a, this.Qb, z.Hm), "follow-up"), {canAdminister:this.ix, dn:this.Ag, visibility:z.Vr}, "followUp");
  this.wo.h("after-draw", this.cz, this);
  this.wo.Zb();
  this.qf.appendChild(this.ia);
  this.gj = z.m
};
z.w.cz = function(a, b) {
  b.setAttribute("data-follow-up-id", (0,z.dh)(a, "followUpId"))
};
z.w.Pi = function() {
  (0,z.ec)(this.ia, "follow-ups-empty", !this.Qb.count())
};
z.w.jb = function(a) {
  return this.ia.querySelector(a)
};
z.w.lz = function(a) {
  if((a = (0,z.Tc)(a.target, z.n, "follow-up-link")) && a.href) {
    a = (0,z.Tc)(a, z.n, "follow-up").getAttribute("data-follow-up-id");
    var b = (0,z.Lm)(this.X, a);
    (0,z.Um)(this, z.dp, {followUpId:a, visibility:b.get("visibility"), mediaResourceType:b.get("mediaResource").mediaResourceType})
  }
};
z.w.Et = function() {
  (0,z.G)((0,z.ji)(this.pa, (0,z.fk)(this.t, "FollowUpEditor")), function(a) {
    (0,z.N)(this.jb(".follow-up-new"), "follow-up-editor-active");
    var b = this.jb(".follow-up-new-editor");
    this.aj = (new a(this.t, this.Ag, b)).Zb();
    this.aj.h("save", this.yx, this);
    this.aj.h("cancel", this.mo, this);
    (0,z.Um)(this, z.$o)
  }, this)
};
z.w.uz = function(a) {
  this.J.confirm("Are you sure you want to delete this link?").h(z.Rr, this.Hx.bind(this, a.value))
};
z.w.Hx = function(a) {
  (0,z.H)((0,z.G)((0,z.ji)(this.pa, (0,z.Pm)(this.X, a)), function() {
    (0,z.Um)(this, z.bp, {followUpId:a})
  }, this), (0,z.Xj)(this.J, "An error occurred, and we were unable to delete your link.", z.m))
};
z.w.$z = function(a) {
  var b = a.target.parentNode.getAttribute("data-follow-up-id");
  a = (0,window.parseInt)(a.value, 10);
  var c = z.n, d;
  for(d in z.Vr) {
    if(a == z.Vr[d]) {
      c = z.Vr[d];
      break
    }
  }
  (0,z.Vm)(this, b, c)
};
z.w.Zx = function(a, b) {
  var c = (0,z.Lm)(this.X, a).get("visibility"), d = z.n;
  2 == c ? d = "The link is now public" : 1 == c ? d = "The link is now private" : 3 == c && (d = "The link is dismissed");
  (0,z.G)(this.fi.ca(d, {type:"success", Hi:z.m}), function() {
    (0,z.Vm)(this, a, b)
  }, this);
  (0,z.Um)(this, z.cp, {followUpId:a, visibility:c})
};
z.w.$x = function(a) {
  a instanceof z.Lb || this.fi.ca("An error occurred, and we could not change the link’s visibility.", "error")
};
z.w.yx = function(a, b, c) {
  this.mo();
  (0,z.H)((0,z.G)((0,z.ji)(this.pa, (0,z.Mm)(this.X, {title:a, description:b, mediaResourceId:c})), function(a) {
    (0,z.Um)(this, z.ap, {followUpId:a.value.value.followUpId})
  }, this), (0,z.Xj)(this.J, "An error occurred, and we were unable to create your link.", z.m))
};
z.w.mo = function() {
  (0,z.Kd)(this.aj);
  this.aj = z.n;
  (0,z.O)(this.jb(".follow-up-new"), "follow-up-editor-active")
};
(0,z.C)(z.Wm, z.Hd);
z.Wm.prototype.gi = function(a, b) {
  return new z.Rm(this.t, a, b)
};
z.Zm.prototype.un = function(a, b, c, d, e) {
  this.Il((0,z.sd)(z.Ym, {title:a, username:b, url:window.location.href, collaborators:e, Dn:140, Gn:25}));
  (0,z.Ti)(z.Eo, {postId:c, type:d, dest:"twitter"})
};
z.Zm.prototype.Il = function(a) {
  var b = window.screen.height, c = window.Math.round(window.screen.width / 2 - 275), b = 420 < b ? window.Math.round(b / 2 - 210) : 0;
  (a = window.open("https://twitter.com/intent/tweet?text\x3d" + (0,window.encodeURIComponent)(a), "intent", ["scrollbars\x3dyes,resizable\x3dyes,toolbar\x3dno,location\x3dyes,width\x3d550,height\x3d420", "left\x3d" + c, "top\x3d" + b].join())) && a.focus()
};
z.Wr = "https://" + window.document.location.hostname + "/m/facebook/close";
z.$m.prototype.un = function(a, b, c, d, e, f) {
  (0,z.Q)("variants.can_share_to_facebook") && (a = (0,z.Bh)(a), c = (0,z.Bh)(c), a = (0,z.sd)(z.oi, {url:window.location.href, title:a, caption:"by " + b, description:c, imageId:d, KD:z.Wr}), this.Il(a), (0,z.Ti)(z.Eo, {postId:e, type:f, dest:"facebook"}))
};
z.$m.prototype.Il = function(a) {
  var b = window.screen.height, c = window.Math.round(window.screen.width / 2 - 275), b = 320 < b ? window.Math.round(b / 2 - 160) : 0;
  (a = window.open(a, "intent", ["scrollbars\x3dyes,resizable\x3dyes,toolbar\x3dno,location\x3dyes,width\x3d550,height\x3d320", "left\x3d" + c, "top\x3d" + b].join())) && a.focus()
};
z.an.prototype.add = function(a, b) {
  for(var c = a.replace(/(^\/|\/$)/g, "").split("/"), d = [], e = this.Fw, f = [], h = 0;h < c.length;h++) {
    var k, p;
    k = p = c[h];
    "*" == p && h != c.length - 1 && (0,z.g)((0,window.Error)("Invalid path [" + a + "], * must only be at the end."));
    if(":" == p[0]) {
      k = ":", d.push(p.substr(1)), f.push(z.n)
    }else {
      if("@" == p[0]) {
        k = p.indexOf(":");
        var q = p.substr(1, k - 1);
        p = p.substr(k + 1);
        k = "@";
        e["@"] || (e["@"] = {parent:e});
        e["@"][q] || (e["@"][q] = {JD:(0,window.RegExp)("(" + p + ")"), parent:e["@"]});
        d.push(q);
        e = e["@"][q];
        f.push(z.n);
        continue
      }else {
        f.push(k)
      }
    }
    e[k] || (e[k] = {parent:e});
    e = e[k]
  }
  e.object && (0,z.g)((0,window.Error)("Can not register [" + a + "], path is ambiguous. [" + e.fullPath + "] previously registered."));
  e.matches = d;
  e.fullPath = a;
  e.object = b;
  return function(a) {
    for(var b = [], c = 0, d = 0;d < f.length;d++) {
      f[d] == z.n ? b.push(arguments[c++]) : "*" == f[d] ? b.push(window.Array.prototype.slice.call(arguments, c).join("/")) : b.push(f[d])
    }
    return"/" + b.join("/")
  }
};
z.bn.prototype.add = function(a) {
  var b = a.path;
  a.Up = this.Lt.add(b, a);
  this.Vy[b] = a.nD;
  return this
};
z.Xr = new z.cn("/");
z.Yr = new z.cn("/latest");
z.Zr = new z.cn("/collections");
z.$r = new z.cn("/collections/all");
z.as = new z.cn("/top-100");
z.bs = new z.cn("/top-100/:monthYearSlug");
z.cs = new z.cn("/p/new-post");
z.ds = new z.cn("/p/:postId");
z.es = new z.cn("/p/:postId/edit");
z.fs = new z.cn("/m/error/:errorCode");
z.gs = new z.cn("/m/tos");
z.hs = new z.cn("/@twitterName:@.*");
z.is = new z.cn("/@twitterName:@.*/latest");
z.js = new z.cn("/@twitterName:@.*/recommended");
z.ks = new z.cn("/@twitterName:@.*/has-recommended");
z.ls = new z.cn("/@twitterName:@.*/collections");
z.ms = new z.cn("/me/drafts");
z.ns = new z.cn("/me/drafts/shared");
z.os = new z.cn("/me/export");
z.ps = new z.cn("/me/reading-list");
z.qs = new z.cn("/me/settings");
z.rs = new z.cn("/me/stats");
z.ss = new z.cn("/@twitterName:@.*/stats");
z.ts = new z.cn("/new-collection");
z.us = new z.cn("/:collectionSlug");
z.vs = new z.cn("/:collectionSlug/settings");
z.ws = new z.cn("/:collectionSlug/new-post");
z.xs = new z.cn("/:collectionSlug/recommended");
z.ys = new z.cn("/:collectionSlug/latest");
z.zs = new z.cn("/:collectionSlug/removed");
z.As = new z.cn("/:collectionSlug/:postId");
z.Bs = new z.cn("/:collectionSlug/:postId/edit");
z.Cs = new z.cn("/search/:q");
z.Ds = new z.cn("/_/tailor");
z.Es = new z.cn("/_/tailor/@twitterName:@.*");
(0,z.C)(z.en, z.$g);
z.fn = "active";
z.en.prototype.Ed = z.n;
z.en.prototype.nf = function() {
  this.Uh(z.fn);
  window.clearTimeout(this.Ed);
  this.Ed = window.setTimeout(this.vt.bind(this), 6E4)
};
z.en.prototype.vt = function() {
  this.Uh("idle")
};
z.en.prototype.Uh = function(a) {
  this.Hc != a && (this.Hc = a, this.F("statechange", this.Hc))
};
z.w = z.hn.prototype;
z.w.Tt = 0;
z.w.Wt = 0;
z.w.Ig = window.performance && window.performance.timing && window.performance.timing.navigationStart ? window.performance.timing.navigationStart : window.OB_startTime || window.Date.now();
z.w.cp = function() {
  this.Wt = this.Tt = 0;
  this.ks.length = 0;
  this.Ig = window.Date.now()
};
z.w.Dz = function(a, b, c) {
  var d = window.Date.now() - this.Ig;
  c instanceof z.Lb || c instanceof z.Pj || ((0,z.kj)("nav." + (b ? "success" : "failure")), (0,z.lj)("client.nav.duration", d), b || (c ? ((0,z.Ig)(c), 401 == c.status ? this.J.open({title:"Uh oh!", jc:(0,z.sd)(z.gn), type:"signin", LD:"/" + a}) : 404 == c.status ? this.J.error("Ooops, that page does not exist anymore.  Sorry.") : this.J.error("Something went wrong. Try refreshing the page and trying again.")) : (this.J.error("Something went wrong. Try refreshing the page and trying again."), (0,z.Ig)((0,window.Error)("Unknown navigation error")))))
};
z.w.Zz = function(a) {
  a ? this.Wt++ : this.Tt++
};
z.w.Sz = function(a, b, c) {
  this.ks.push(c)
};
z.ln = window.document.referrer;
z.kn.prototype.$k = z.n;
z.kn.prototype.qg = z.s;
z.kn.prototype.qB = function(a, b) {
  this.qg = z.m;
  var c = "";
  b && b.source && (c = b.source);
  this.vf.push((0,z.tb)(a, c))
};
z.kn.prototype.Sx = function(a, b) {
  this.qg = z.s;
  var c = (0,z.Va)(this.vf, function(b) {
    return a in b
  }), c = this.vf.splice(c, 1)[0];
  if(b) {
    var d = this.vf.indexOf(this.Ys);
    -1 !== d && this.vf.splice(d, 1);
    this.Ys = c;
    this.vf.push(c);
    this.$k && (this.pp = this.$k);
    this.$k = "/" + a
  }
};
z.nn = 0;
z.Fs = {};
z.w = z.mn.prototype;
z.w.get = function(a, b) {
  return this.send("get", a, z.n, b)
};
z.w.cc = function(a, b) {
  return this.send("delete", a, z.n, b)
};
z.w.put = function(a, b, c) {
  return this.send("put", a, b, c)
};
z.w.post = function(a, b, c) {
  return this.send("post", a, b, c)
};
z.w.send = function(a, b, c, d) {
  function e() {
    p && (p.state = 2, (0,z.pn)(this));
    this.Lb.F("send", !!p);
    return(0,z.G)((0,z.H)((0,z.wg)(a, b, (0,window.String)(k), f), function(a) {
      if(h < f.xi && a instanceof z.Ag && a.status && 500 <= a.status) {
        return h++, z.Fs
      }
    }, this), function(a) {
      if(a === z.Fs) {
        a = 1 == h ? 200 * window.Math.round(window.Math.random()) : 2 == h ? 200 * window.Math.round(3 * window.Math.random()) : window.Math.round(200 * window.Math.random() * (window.Math.pow(2, h) - 1));
        p && (p.state = 1, p.time = a, (0,z.pn)(this));
        var b = (0,z.Hb)(z.n), c = new z.vb;
        window.setTimeout(c.Ga.bind(c), a);
        return(0,z.G)((0,z.Cb)(b, c), e, this)
      }
    }, this)
  }
  a = a.toUpperCase();
  var f = this.mv(d), h = 0, k = c;
  k && "object" == typeof k && (f.Nm && (k = z.Nm.Ld(k)), k = f.Jq ? window.JSON.stringify(k) : (0,z.qn)(k));
  c = e.call(this);
  if(!f.background) {
    var p = {cb:c, state:2, time:0};
    this.Ll.push(p);
    (0,z.pn)(this);
    (0,z.Bb)(c, function() {
      (0,z.Ya)(this.Ll, p);
      (0,z.pn)(this)
    }, this)
  }
  (0,z.Bb)(c, function(a) {
    if(a instanceof window.Error) {
      a instanceof z.Ag && a.status && this.Lb.F("httperror", a.status, f)
    }else {
      if(a) {
        var b = a.getResponseHeader("X-Obvious-DbInfo") || "";
        this.Lb.F("successresponse", a.responseText, f, b)
      }else {
        this.Lb.F("httperror", 511, f), (0,z.g)((0,window.Error)("Unexpected error : 511"))
      }
    }
  }, this);
  f.jw || ((0,z.G)(c, function(a) {
    return a.responseText
  }), f.tc && (0,z.G)(c, this.BA, this));
  return c
};
z.w.mv = function(a) {
  a = a || {};
  var b = a.headers || {};
  b["X-XSRF-Token"] = "1";
  if(a.Jq || a.V) {
    b["Content-Type"] = "application/json"
  }
  if(a.tc || a.V) {
    b.Accept = "application/json"
  }
  return{headers:b, ur:a.ur || 3E4, Oq:a.Oq, Nm:a.Nm, Jq:a.Jq || a.V, tc:a.tc || a.V, jw:!!a.jw, xi:"undefined" == typeof a.xi ? 10 : a.xi, background:!!a.background}
};
z.w.BA = function(a) {
  a = (0,z.on)(a);
  a = window.JSON.parse(a);
  if("success" in a && ("payload" in a || "error" in a)) {
    if(a.v && (a.b && this.hm && this.Oi) && (this.hm != a.v || this.Oi != a.b)) {
      this.Lb.F("versionchange", a.v, a.b, this.hm, this.Oi), this.hm = a.v, this.Oi = a.b
    }
    if(a.success) {
      return a.payload
    }
    (0,z.g)(a.error)
  }
  return a
};
z.rn.prototype.ct = function(a) {
  var b = new z.vb, c = window.document.createElement("script");
  c.setAttribute("charset", "UTF-8");
  c.onload = function() {
    b.Ga(z.m)
  };
  c.src = a;
  window.document.body.appendChild(c);
  return b
};
z.vn.prototype.Rc = function() {
  for(var a in this.t) {
    "function" == typeof this.t[a].Rc && this.t[a].Rc()
  }
};
z.vn.prototype.get = function(a) {
  this.t[a] || (0,z.g)((0,window.Error)('Can not synchronously load "' + a + '"'));
  return this.t[a]
};
z.vn.prototype.add = function(a, b) {
  this.t[a] && (0,z.g)((0,window.Error)('Service already registered with id "' + a + '"'));
  this.Th[a] && delete this.Th[a];
  this.t[a] = b;
  return this
};
z.xn.prototype.refresh = function() {
  (0,z.ec)(window.document.body, "app-loading", this.qg || 2 == this.fa.Hc)
};
z.xn.prototype.aA = function() {
  this.qg = z.m;
  this.refresh()
};
z.xn.prototype.ug = function() {
  this.qg = z.s;
  this.refresh()
};
z.yn.prototype.ug = function(a, b, c) {
  if(b) {
    a = c.Ai("[data-load-img]");
    for(b = 0;b < a.length;b++) {
      if(c = a[b].getAttribute("data-load-img")) {
        if(c = a[b].querySelector(c)) {
          (c = "IMG" != c.tagName ? c.style.backgroundImage && c.style.backgroundImage.match(/url\(['"]?([^\)'"]*)/)[1] : c.src) && (0,z.zn)(c, a[b])
        }
      }
    }
  }
};
z.Kn = !z.L || (0,z.Xb)(9);
z.Gs = z.L && !(0,z.Ub)("9");
!z.uc || (0,z.Ub)("528");
z.R && (0,z.Ub)("1.9b") || z.L && (0,z.Ub)("8") || z.Rd && (0,z.Ub)("9.5") || z.uc && (0,z.Ub)("528");
z.R && !(0,z.Ub)("8") || z.L && (0,z.Ub)("9");
z.w = z.An.prototype;
z.w.o = (0,z.t)();
z.w.Wa = (0,z.t)();
z.w.fh = z.s;
z.w.defaultPrevented = z.s;
z.w.kn = z.m;
z.w.stopPropagation = function() {
  this.fh = z.m
};
z.w.preventDefault = function() {
  this.defaultPrevented = z.m;
  this.kn = z.s
};
(0,z.C)(z.Bn, z.An);
z.w = z.Bn.prototype;
z.w.target = z.n;
z.w.relatedTarget = z.n;
z.w.offsetX = 0;
z.w.offsetY = 0;
z.w.clientX = 0;
z.w.clientY = 0;
z.w.screenX = 0;
z.w.screenY = 0;
z.w.button = 0;
z.w.keyCode = 0;
z.w.charCode = 0;
z.w.ctrlKey = z.s;
z.w.altKey = z.s;
z.w.shiftKey = z.s;
z.w.metaKey = z.s;
z.w.DD = z.s;
z.w.Kd = z.n;
z.w.Rd = function(a, b) {
  var c = this.type = a.type;
  z.An.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(z.R) {
      var e;
      a: {
        try {
          (0,z.Df)(d.nodeName);
          e = z.m;
          break a
        }catch(f) {
        }
        e = z.s
      }
      e || (d = z.n)
    }
  }else {
    "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement)
  }
  this.relatedTarget = d;
  this.offsetX = z.uc || a.offsetX !== z.l ? a.offsetX : a.layerX;
  this.offsetY = z.uc || a.offsetY !== z.l ? a.offsetY : a.layerY;
  this.clientX = a.clientX !== z.l ? a.clientX : a.pageX;
  this.clientY = a.clientY !== z.l ? a.clientY : a.pageY;
  this.screenX = a.screenX || 0;
  this.screenY = a.screenY || 0;
  this.button = a.button;
  this.keyCode = a.keyCode || 0;
  this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
  this.ctrlKey = a.ctrlKey;
  this.altKey = a.altKey;
  this.shiftKey = a.shiftKey;
  this.metaKey = a.metaKey;
  this.DD = z.ig ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.Kd = a;
  a.defaultPrevented && this.preventDefault();
  delete this.fh
};
z.w.stopPropagation = function() {
  z.Bn.q.stopPropagation.call(this);
  this.Kd.stopPropagation ? this.Kd.stopPropagation() : this.Kd.cancelBubble = z.m
};
z.w.preventDefault = function() {
  z.Bn.q.preventDefault.call(this);
  var a = this.Kd;
  if(a.preventDefault) {
    a.preventDefault()
  }else {
    if(a.returnValue = z.s, z.Gs) {
      try {
        if(a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1
        }
      }catch(b) {
      }
    }
  }
};
z.w.gv = (0,z.ea)("Kd");
z.w.o = (0,z.t)();
z.Hs = 0;
z.w = z.Cn.prototype;
z.w.key = 0;
z.w.ih = z.s;
z.w.rm = z.s;
z.w.Rd = function(a, b, c, d, e, f) {
  (0,z.qa)(a) ? this.Ev = z.m : a && a.handleEvent && (0,z.qa)(a.handleEvent) ? this.Ev = z.s : (0,z.g)((0,window.Error)("Invalid listener argument"));
  this.Sf = a;
  this.gw = b;
  this.src = c;
  this.type = d;
  this.capture = !!e;
  this.ak = f;
  this.rm = z.s;
  this.key = ++z.Hs;
  this.ih = z.s
};
z.w.handleEvent = function(a) {
  return this.Ev ? this.Sf.call(this.ak || this.src, a) : this.Sf.handleEvent.call(this.Sf, a)
};
z.In = {};
z.En = {};
z.Gn = {};
z.Hn = {};
window.Math.random();
(0,z.C)(z.Rn, z.Ik);
z.Rn.prototype.uw = function(a) {
  return!!a.links.loadMore
};
z.Rn.prototype.sw = function() {
  return this.jh.get(this.bt, {V:z.m})
};
z.Rn.prototype.Se = function(a) {
  a.links.loadMore && (this.bt = a.links.loadMore);
  return a.value
};
z.w = z.Sn.prototype;
z.w.df = function() {
  this.sB.h("change", this.dA, this);
  (0,z.ag)(this.D).g("view-actors", this.tu, this);
  (0,z.Wf)("notifications-more", this.Qx, this).g("view-actors", this.tu, this)
};
z.w.fe = function(a) {
  a = (0,z.td)(z.Xn, {activities:a.value, activityUser:a.activityUser, lastViewedActivityAt:a.lastViewedActivityAt});
  this.D.appendChild(a);
  this.xl = this.D.getElementsByClassName("notifications-list")[0]
};
z.w.Qx = function() {
  this.Aj.Rd();
  var a = window.document.getElementsByClassName("notifications-more")[0];
  a.parentNode.removeChild(a)
};
z.w.RA = function(a) {
  for(var b = "", c = 0;c < a.length;c++) {
    b += (0,z.sd)(z.Yn, {da:a[c].La()})
  }
  a = (0,z.Ac)(b);
  this.xl.appendChild(a);
  this.Aj && (a = this.Aj, a.tl && a.he())
};
z.w.tu = function(a) {
  (0,z.H)((0,z.G)(this.fa.get((0,window.String)(a.value), {V:z.m}), function(b) {
    this.J.open({title:a.target.getAttribute("dialog-title"), jc:(0,z.sd)(z.$n, {actors:b.value}), type:"scroller"})
  }, this), z.Og)
};
z.w.dA = function(a, b) {
  if((0,z.Q)("variants.can_view_activity")) {
    var c = (0,z.eh)(b, "newActivityCount");
    this.xl && ((0,z.P)(this.xl), (0,z.Tn)(this));
    (0,z.ec)(window.document.body, "site-nav-new-activity", 0 < c)
  }
};
z.w = z.Vn.prototype;
z.w.xf = z.n;
z.w.Ul = z.n;
z.w.df = function() {
  var a = z.Lr ? "touchend" : "click";
  (0,z.T)(this.Sh, "keyup", this.Es, this);
  (0,z.T)(this.Bj, a, this.Dy, this);
  (0,z.T)(this.Fg, "focus", this.xA, this);
  (0,z.T)(this.Fg, "keyup", this.Es, this);
  (0,z.ag)(this.Wl).g("open-search", this.wA, this).g("close-search", this.Hu, this).g("clear-search", this.cs, this).g("query-search", this.Ds, this).g("navigate-to-search-result", this.$y, this)
};
z.w.wA = function() {
  this.ir = z.m;
  (0,z.O)(this.au, "navigable-list-item");
  (0,z.N)(window.document.body, "site-nav-search-open");
  (0,z.N)(this.yp, "site-nav-search-wrapper-fade-in");
  this.xf = (0,z.T)(this.yp, z.dl, function() {
    this.Sh.focus();
    (0,z.Ff)(this.xf);
    this.xf = z.n
  }, this);
  (0,z.Ti)(z.gp, {})
};
z.w.xA = function() {
  (0,z.Wn)(this);
  var a = window.innerWidth, b = a - 150, a = a - 90;
  (0,z.N)(window.document.body, "site-nav-search-open");
  (0,z.Sd)(this.Fg, "width", b + "px");
  (0,z.Sd)(this.$t, "width", a + "px")
};
z.w.cs = function() {
  this.Fg.value = ""
};
z.w.Es = function(a) {
  13 == a.keyCode && this.Ds()
};
z.w.Dy = function() {
  this.Bj.children.length || this.Hu()
};
z.w.$y = function(a) {
  a = a.value.split(",");
  var b = {type:a[1], index:a[2]};
  this.Z.navigate(a[0].substr(1));
  (0,z.Ti)(z.jp, b)
};
z.w.Ds = function() {
  this.Ul && this.Ul.cancel();
  var a = this.Sh.value || this.Fg.value;
  a ? ((0,z.Ti)(z.hp, {query:a}), this.Ul = (0,z.Bb)((0,z.H)((0,z.G)(this.Va.get("/search/all/" + (0,window.encodeURIComponent)(a), {tc:z.m}), this.GA, this), z.Og), function() {
    this.Ul = z.n
  }, this)) : this.Bj.innerHTML = ""
};
z.w.GA = function(a) {
  (0,z.Wn)(this);
  var b = (0,z.sd)(z.Un, {users:a.value.users.slice(0, 3), collections:a.value.collections.slice(0, 3), posts:(0,z.Ak)(a.value.posts, a.references)});
  this.Bj.innerHTML = b;
  (0,z.Ti)(z.ip, {query:this.Sh.value, numResults:a.value.posts.length + a.value.users.length + a.value.collections.length})
};
z.w.Hu = function() {
  this.ir = z.s;
  this.Bj.innerHTML = "";
  this.Sh.value = "";
  this.Sh.blur();
  500 >= window.innerWidth ? (this.cs(), this.Fg.blur(), (0,z.Sd)(this.$t, "width", 0), (0,z.Sd)(this.Fg, "width", "20px"), (0,z.O)(window.document.body, "site-nav-search-open"), (0,z.O)(this.Wl, "site-nav-search-fade-in-bg")) : ((0,z.N)(this.au, "navigable-list-item"), (0,z.O)(this.Wl, "site-nav-search-fade-in-bg"), (0,z.O)(this.yp, "site-nav-search-wrapper-fade-in"), (0,window.setTimeout)(function() {
    (0,z.O)(window.document.body, "site-nav-search-open")
  }.bind(this), 100))
};
(0,z.Hh)("g", "post_recommended", function(a) {
  return"recommended " + (a.post.title ? (0,z.X)(a.post.title) : "Untitled")
});
(0,z.Hh)("g", "post_cross_posted", function(a) {
  return"added " + (a.post.title ? (0,z.X)(a.post.title) : "Untitled") + " to " + (0,z.X)(a.collection.name)
});
(0,z.Hh)("g", "collection_cross_posted", function(a) {
  return"added " + (a.post.title ? (0,z.X)(a.post.title) : "Untitled") + " to " + (0,z.X)(a.collection.name)
});
(0,z.Hh)("g", "collection_posted", function(a) {
  return"published " + (a.post.title ? (0,z.X)(a.post.title) : "Untitled") + " in " + (0,z.X)(a.collection.name)
});
(0,z.Hh)("g", "post_collaborated_published", function(a) {
  return"published " + (a.post.title ? (0,z.X)(a.post.title) : "Untitled") + ", which you collaborated on."
});
(0,z.Hh)("g", "follow_up_created", function(a) {
  return"suggested further reading for " + (a.post.title ? (0,z.X)(a.post.title) : "Untitled")
});
(0,z.Hh)("g", "follow_up_published", function(a) {
  return"published your suggested further reading for " + (a.post.title ? (0,z.X)(a.post.title) : "Untitled")
});
(0,z.Hh)("g", "post_added_as_follow_up", function(a) {
  return"added " + (a.followUp.value.title ? (0,z.X)(a.followUp.value.title) : "Untitled") + " as further reading for " + (a.post.title ? (0,z.X)(a.post.title) : "Untitled")
});
(0,z.Hh)("g", "post_noted", function(a) {
  return"left a new note on " + (a.post.title ? (0,z.X)(a.post.title) : "Untitled")
});
(0,z.Hh)("g", "note_replied", function(a) {
  return"replied to your note on " + (a.post.title ? (0,z.X)(a.post.title) : "Untitled")
});
(0,z.Hh)("g", "post_note_replied", function(a) {
  return"replied to a note on " + (a.post.title ? (0,z.X)(a.post.title) : "Untitled")
});
(0,z.Hh)("g", "note_published", function(a) {
  return"published your note on " + (a.post.title ? (0,z.X)(a.post.title) : "Untitled")
});
(0,z.Hh)("g", "mention_in_note", function(a) {
  return"mentioned you in a note on " + (a.post.title ? (0,z.X)(a.post.title) : "Untitled")
});
(0,z.Hh)("g", "mention_in_note_update", function(a) {
  return"updated a note mentioning you on " + (a.post.title ? (0,z.X)(a.post.title) : "Untitled")
});
(0,z.Hh)("g", "mention_in_note_reply", function(a) {
  return"mentioned you in a note on " + (a.post.title ? (0,z.X)(a.post.title) : "Untitled")
});
(0,z.Hh)("g", "mention_in_note_reply_update", function(a) {
  return"updated a reply mentioning you on " + (a.post.title ? (0,z.X)(a.post.title) : "Untitled")
});
z.w = z.ao.prototype;
z.w.Uo = z.s;
z.w.df = function() {
  var a = z.Lr ? "touchend" : "click", a = z.Mr ? "MSPointerDown" : a;
  (0,z.T)(this.tf, "keydown", this.oy, this);
  (0,z.T)(this.tf, a, this.gy, this);
  (0,z.T)(this.tf, "mouseover", this.Tl, this);
  (0,z.T)(this.gu, a, this.Tk, this);
  this.Ba.h("resize-end", this.et, this);
  this.Z.h(z.vj, this.bp, this);
  this.Va.h("httperror", this.Rz, this);
  (0,z.Wf)("open-new-post", this.Vo, this).g("open-nav", this.vA, this)
};
z.w.gy = function(a) {
  this.Fh = !!(0,z.Tc)(a.target, z.n, "site-nav-list-item-btn")
};
z.w.Vo = function(a) {
  (0,z.Ti)(z.vo, {source:(0,z.Tc)(a.target, z.n, "site-nav") ? "site-nav" : (0,z.Tc)(a.target, z.n, "cover-home") ? "home-cover" : z.n});
  this.Z.navigate("p/new-post")
};
z.w.oy = function(a) {
  var b = this.tf.getElementsByClassName("navigable-list-item");
  if(40 == a.keyCode) {
    this.Wd = window.Math.min(++this.Wd, b.length - 1), (0,z.bo)(b[this.Wd])
  }else {
    if(38 == a.keyCode) {
      this.Wd = window.Math.max(--this.Wd, 0), (0,z.bo)(b[this.Wd])
    }else {
      if(this.Wd && 13 == a.keyCode) {
        var c = b[this.Wd].querySelector("[data-action]");
        c ? (a = c.getAttribute("data-action"), this.Fh = z.m, c = window.Math.max(--this.Wd, 0), "open-search" != a && (0,z.bo)(b[c]), z.$f && (0,z.mg)({Zf:a, value:z.l, target:window.document.body, event:{}, ck:z.s})) : (b = a.target.querySelector("[href]")) && this.Z.navigate(b.pathname.substr(1))
      }else {
        9 == a.keyCode ? (this.Tl(), this.Fh = z.s, this.bB.ir || this.Tk()) : 27 == a.keyCode && (this.Tl(), this.Fh = z.s, this.Tk())
      }
    }
  }
};
z.w.Tl = function() {
  this.tf.blur();
  this.Wd = 0
};
z.w.vA = function(a) {
  a.preventDefault && (a.preventDefault(), a.stopPropagation());
  this.Tl();
  this.Uo = z.m;
  (0,z.N)(window.document.body, "site-nav-transition");
  (0,z.O)(window.document.body, "site-nav-new-activity");
  (0,z.Q)("isAuthenticated") && (0,z.Q)("variants.can_view_activity") && this.Va.post("/me/activity/last-viewed", z.n, {background:z.m});
  (0,z.N)(window.document.body, "site-nav-drawer-open");
  this.tf.focus()
};
z.w.Tk = function(a) {
  if(!this.Fh && this.Uo) {
    if(window.document.createElement("div").style.WebkitTransition !== z.l) {
      var b = (0,z.Gf)(window.document.body, "webkitTransitionEnd", function() {
        (0,z.Ff)(b);
        (0,z.O)(window.document.body, "site-nav-transition");
        for(var a = window.document.getElementsByClassName("notifications-list-item-new"), c = 0, d;d = a[c];c++) {
          d.className = "notifications-list-item"
        }
      }, this)
    }else {
      (0,z.O)(window.document.body, "site-nav-transition");
      for(var c = window.document.getElementsByClassName("notifications-list-item-new"), d = 0, e;e = c[d];d++) {
        e.className = "notifications-list-item"
      }
    }
    (0,z.O)(window.document.body, "site-nav-drawer-open");
    this.Uo = z.s;
    a && a.preventDefault()
  }
};
z.w.bp = function(a, b) {
  this.Fh = z.s;
  this.Tk();
  window.document.body.removeChild(this.tf);
  window.document.body.insertBefore(this.tf, this.gu);
  b && this.Z.hb && ((0,z.co)(this), this.et())
};
z.w.et = function() {
  if(1E3 >= window.innerWidth) {
    if(!this.ul) {
      var a = this.Z.hb;
      a && a.l ? (this.ul = z.m, this.Ba.h("scroll", this.he, this)) : (0,z.Og)("sitenav: activeScreen not ready for scroll listener")
    }
  }else {
    (0,z.O)(window.document.body, "site-nav-hidden"), (0,z.co)(this)
  }
};
z.w.he = function(a) {
  5 > a.scrollTop ? (0,z.O)(window.document.body, "site-nav-hidden") : (0,z.N)(window.document.body, "site-nav-hidden")
};
z.w.Rz = function(a, b) {
  b.background && 401 == a && this.Na.ca("You've been logged out. Please log in.", "error")
};
(0,z.C)(z.eo, z.$g);
z.ho = "track";
z.w = z.eo.prototype;
z.w.Sy = z.n;
z.w.Ws = z.n;
z.w.o = function() {
  (0,window.clearTimeout)(this.Ed);
  this.Ba.Aa("scroll", this.wg, this);
  z.eo.q.o.call(this)
};
z.w.ug = function() {
  this.Gc = this.Z.hb.gb();
  this.Gc == window && (this.Gc = window.document.body);
  this.uu = window.Date.now()
};
z.w.wg = function() {
  (0,window.clearTimeout)(this.Ed);
  (0,z.go)(this);
  (0,z.fo)(this, z.m)
};
z.w.hA = function() {
  (0,z.go)(this);
  (0,z.fo)(this)
};
(function() {
  function a() {
    var a = [(0,z.dn)(z.Xr, z.Pd), (0,z.dn)(z.Yr, z.Pd), (0,z.dn)(z.Zr, z.Pd), (0,z.dn)(z.$r, z.Pd), (0,z.dn)(z.as, z.vm), (0,z.dn)(z.bs, z.vm), (0,z.dn)(z.cs, "PostEditScreen"), (0,z.dn)(z.ds, z.ak), (0,z.dn)(z.es, "PostEditScreen"), (0,z.dn)(z.fs, z.Od), (0,z.dn)(z.gs, z.Od), (0,z.dn)(z.hs, "ProfileScreen"), (0,z.dn)(z.is, "ProfileScreen"), (0,z.dn)(z.js, "ProfileScreen"), (0,z.dn)(z.ks, "ProfileScreen"), (0,z.dn)(z.ls, "ProfileScreen"), (0,z.dn)(z.ms, "DraftsScreen"), (0,z.dn)(z.ns, "DraftsScreen"), 
    (0,z.dn)(z.os, "ExportScreen"), (0,z.dn)(z.ps, z.Od), (0,z.dn)(z.qs, "SettingsScreen"), (0,z.dn)(z.rs, "StatsScreen"), (0,z.dn)(z.ss, "StatsScreen"), (0,z.dn)(z.ts, "CollectionCreateScreen"), (0,z.dn)(z.us, z.Dk), (0,z.dn)(z.vs, "CollectionSettingsScreen"), (0,z.dn)(z.ws, "PostEditScreen"), (0,z.dn)(z.xs, z.Tk), (0,z.dn)(z.ys, z.Tk), (0,z.dn)(z.zs, z.Tk), (0,z.dn)(z.As, z.ak), (0,z.dn)(z.Bs, "PostEditScreen"), (0,z.dn)(z.Cs, z.Od), (0,z.dn)(z.Ds, "TailorScreen"), (0,z.dn)(z.Es, "TailorScreen")], 
    b = new z.bn;
    a.forEach(function(a) {
      b.add(a)
    });
    return b
  }
  function b() {
    z.qo.set(z.Ip, (0,window.String)(window.document.body.clientWidth), 604800, "/")
  }
  (0,z.ud)();
  var c = (0,window.String)((0,z.Q)("buildLabel"));
  (function() {
    z.L ? (0,z.Hg)() : ((0,z.Kg)(), (0,z.Lg)(), (0,z.Mg)(), (0,z.Ng)());
    z.Yg.push(z.Lb);
    z.Yg.push(z.Ag);
    z.Yg.push("domIsDirty");
    (0,z.Cg)("user", (0,z.Q)("currentUser.userId"));
    z.Dg.build = c;
    z.Dg.userAgent = window.navigator.userAgent;
    (0,z.Cg)("location", {toString:function() {
      return window.document.location.href
    }})
  })();
  (0,z.Xm)();
  var d = window.__obv = new z.vn;
  d.add("activity-monitor", new z.en);
  d.add("request", function() {
    var a = new z.mn(2, c);
    a.h("versionchange", function(a, b, c, e) {
      a > c && window.location.reload(z.m);
      b != e && (a = d.get("app"), (0,z.Ff)(a.Sk), a.Sk = z.n)
    });
    return a
  }());
  d.add("datastore", new z.im(d));
  d.add("image", new z.wm);
  d.add("app", new z.Cj("/", d, (0,window.String)((0,z.Q)("productName"))));
  d.add("dom-monitor", new z.uj(d));
  d.add("butter-bar", new z.nl(window.document.querySelector(".butter-bar"), d));
  d.add("twitter", new z.Zm(d));
  d.add("facebook", new z.$m(d));
  d.add("tooltip", new z.el);
  d.add("popover", new z.ll(d));
  d.add("dialog", new z.Wj(d));
  d.add("coreactions", new z.am(d));
  d.add("zoom", new z.Uk(d));
  d.add("activity", new z.sm(d));
  d.add("sitenav", new z.ao(window.document.getElementsByClassName("site-nav")[0], d));
  d.add("referrer-tracker", new z.kn(d));
  d.add("scroll-tracker", new z.eo(d));
  d.add("media-resource", new z.Am(d));
  d.add("follow-ups", new z.Wm(d));
  (0,z.wn)(d, "notes", "notes");
  (0,z.wn)(d, "notes-mobile", "notes-mobile");
  (0,z.wn)(d, "SettingsScreen", "settings");
  (0,z.wn)(d, "ProfileScreen", "profile");
  (0,z.wn)(d, "CollectionCreateScreen", "creators");
  (0,z.wn)(d, "CollectionSettingsScreen", "creators");
  (0,z.wn)(d, "FollowUpEditor", "followup-editor");
  (0,z.wn)(d, "DraftsScreen", "posters");
  (0,z.wn)(d, "PostEditScreen", "posters");
  (0,z.wn)(d, "ExportScreen", "export");
  (0,z.wn)(d, "StatsScreen", "stats");
  (0,z.wn)(d, "TailorScreen", "tailor");
  (function() {
    var a = new z.rn(d), b = window.PLOVR_MODULE_URIS, c = window.PLOVR_MODULE_INFO;
    a.gt = c;
    for(var k in c) {
      0 === c[k].length && (a.vl[k] = z.m)
    }
    0 === b.base.indexOf("fingerprint:") && (b = (0,z.Q)("moduleUrls"));
    a.ht = b
  })();
  for((0,z.Fg)(new z.pg(d, "/_/oh-noes", 5E3, 15));z.Zg.length;) {
    (0,z.qg)(z.Gg, z.Zg.shift())
  }
  (0,z.nj)(new z.pg(d, "/_/stat", 5E3, window.Infinity));
  (function() {
    (0,z.hj)("userId", (0,z.Q)("currentUser.userId"));
    (0,z.hj)("referrer", function() {
      var a = d.get("referrer-tracker"), b = a.pp;
      a.qg && (b = a.$k || a.pp);
      0 !== a.vf.length && (a = a.vf.slice(-1)[0], a = a[window.Object.keys(a)[0]], b = 0 === a.length ? b : b + (-1 == b.indexOf("?") ? "?" : "\x26") + "source\x3d" + a);
      return b
    })
  })();
  d.Rc();
  (function() {
    var b = (0,z.Ej)((0,z.Hj)((0,z.Gj)((0,z.Fj)((0,z.Fj)((0,z.Fj)((0,z.Fj)((0,z.Fj)(d.get("app"), /^utm_/), /^km_/), "kme"), "kmi"), "interstitial"))), a());
    b.h(z.vj, function(a, b) {
      b && (c || (0,z.ej)(["_trackPageview", "/" + a]), (0,z.fj)(["record", "pageview", {path:"/" + a}]))
    });
    new z.xn(d);
    new z.yn(d);
    var c = z.m;
    (0,z.H)((0,z.Bb)(b.Rd(window.location.pathname.substr(1) + window.location.hash), function() {
      c = z.s
    }), (0,z.t)())
  })();
  new z.hn(d, c);
  (0,z.Wf)("navigate", function(a) {
    d.get("app").navigate(a.value)
  });
  b();
  d.get("dom-monitor").h("resize-end", b);
  z.qo.set("tz", (0,window.String)((new window.Date).getTimezoneOffset()), 604800, "/")
})();
(0,z.C)(z.io, z.Hd);
z.io.prototype.customEvent_ = z.m;
z.w = z.io.prototype;
z.w.$m = z.n;
z.w.tn = (0,z.x)(53);
z.w.addEventListener = function(a, b, c, d) {
  (0,z.Dn)(this, a, b, c, d)
};
z.w.removeEventListener = function(a, b, c, d) {
  (0,z.Ln)(this, a, b, c, d)
};
z.w.dispatchEvent = function(a) {
  var b = a.type || a, c = z.En;
  if(b in c) {
    if((0,z.oa)(a)) {
      a = new z.An(a, this)
    }else {
      if(a instanceof z.An) {
        a.target = a.target || this
      }else {
        var d = a;
        a = new z.An(b, this);
        (0,z.rb)(a, d)
      }
    }
    var d = 1, e, c = c[b], b = z.m in c, f;
    if(b) {
      e = [];
      for(f = this;f;f = f.$m) {
        e.push(f)
      }
      f = c[z.m];
      f.Cc = f.qa;
      for(var h = e.length - 1;!a.fh && 0 <= h && f.Cc;h--) {
        a.currentTarget = e[h], d &= (0,z.Pn)(f, e[h], a.type, z.m, a) && a.kn != z.s
      }
    }
    if(z.s in c) {
      if(f = c[z.s], f.Cc = f.qa, b) {
        for(h = 0;!a.fh && h < e.length && f.Cc;h++) {
          a.currentTarget = e[h], d &= (0,z.Pn)(f, e[h], a.type, z.s, a) && a.kn != z.s
        }
      }else {
        for(e = this;!a.fh && e && f.Cc;e = e.$m) {
          a.currentTarget = e, d &= (0,z.Pn)(f, e, a.type, z.s, a) && a.kn != z.s
        }
      }
    }
    a = (0,window.Boolean)(d)
  }else {
    a = z.m
  }
  return a
};
z.w.o = function() {
  z.io.q.o.call(this);
  (0,z.On)(this);
  this.$m = z.n
};
(0,z.C)(z.jo, z.Hd);
z.lo = [];
z.jo.prototype.o = function() {
  z.jo.q.o.call(this);
  (0,z.mo)(this)
};
z.jo.prototype.handleEvent = function() {
  (0,z.g)((0,window.Error)("EventHandler.handleEvent not implemented"))
};
})(_mdm);