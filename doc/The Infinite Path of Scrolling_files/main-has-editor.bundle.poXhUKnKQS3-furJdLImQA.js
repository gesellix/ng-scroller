(function(z){
z.Vs = function(a, b, c) {
  if(!b || !c || "object" != typeof b || "object" != typeof c) {
    return z.s
  }
  for(var d in b) {
    if(b[d] !== z.n && "object" == typeof b[d]) {
      if(!(0,z.Vs)(a, b[d], c[d])) {
        return z.s
      }
    }else {
      if(b[d] != c[d]) {
        return z.s
      }
    }
  }
  return z.m
};
z.Ws = function(a, b) {
  return a === b
};
z.Xs = function(a, b, c, d) {
  b = b.C();
  if(b == window.String || b == window.Number || b == window.Boolean || b == window.Object || b.$isProtoEnum) {
    return c
  }
  if(b.prototype instanceof z.bd) {
    return a.Zc(b, c, d)
  }
  (0,z.g)((0,window.Error)('Unknown schema type "' + b + '"'))
};
z.Ys = function(a, b, c, d) {
  b = b.C();
  if(b == window.String || b == window.Boolean || b == window.Number || b.$isProtoEnum) {
    return c === d
  }
  if(b.prototype instanceof z.bd) {
    return c === d || c && d && c.Ab(d)
  }
  if(b == window.Object) {
    return(0,z.Vs)(a, c, d)
  }
  (0,z.g)((0,window.Error)("no equality metric"))
};
z.Zs = function(a, b) {
  a.qu = b;
  return a
};
z.$s = function(a, b, c) {
  return(new z.qh).Yf(a).setStart(b).setEnd(c)
};
z.at = function(a) {
  return(0,z.ed)(a, "end")
};
z.bt = function(a) {
  return(0,z.ed)(a, "start")
};
z.ct = function(a) {
  a.yk || (a.yk = (0,z.lf)(a).concat(), a.yk.sort(function(a, c) {
    return a.sourceIndex - c.sourceIndex
  }));
  return a.yk
};
z.dt = function(a, b, c) {
  return(0,z.$s)(4, a, b).wk(c)
};
z.et = function(a, b, c, d, e) {
  a = (0,z.$s)(3, a, b).on(c).fc(d);
  return(0,z.gd)(a, "rel", e)
};
z.ft = function(a, b) {
  var c = z.gt[a.C()] - z.gt[b.C()];
  if(0 !== c) {
    return c
  }
  c = (0,z.bt)(a) - (0,z.bt)(b);
  if(0 !== c) {
    return c
  }
  c = (0,z.at)(a) - (0,z.at)(b);
  return 0 !== c ? c : (0,z.jb)(window.JSON.stringify(z.Nm.Ld(a)), window.JSON.stringify(z.Nm.Ld(b)))
};
z.ht = function(a, b, c) {
  return b >= (0,z.bt)(a) && (c ? b <= (0,z.at)(a) : b < (0,z.at)(a))
};
z.it = function(a) {
  a.Ta = (0,z.bc)(a.Ta, function(a) {
    return(0,z.at)(a) > (0,z.bt)(a)
  })
};
z.jt = function(a) {
  a && (this.Gb = (0,z.ct)(a), this.la = this.Gb.shift(), this.ha = (0,z.Ta)(this.Gb) || this.la);
  z.ke.call(this, this.la, z.s, z.m)
};
z.kt = function(a) {
  this.Gb = (0,z.lf)(a)
};
z.lt = function(a, b, c) {
  b = window.Math.min(b, a.text.length);
  c = window.Math.min(c, a.text.length);
  var d = c - b;
  a.text = a.text.substring(0, b) + a.text.substring(c);
  c = a.Ta;
  for(var e = 0;e < c.length;e++) {
    var f = c[e];
    (0,z.bt)(f) >= b && f.setStart(window.Math.max((0,z.bt)(f) - d, b));
    (0,z.at)(f) >= b && f.setEnd(window.Math.max((0,z.at)(f) - d, b))
  }
  (0,z.it)(a)
};
z.mt = function(a, b) {
  for(var c = a.Ta, d = 0;d < c.length;d++) {
    var e = c[d], f;
    if(e.C() != b.C()) {
      f = z.n
    }else {
      if(e.Ab(b)) {
        f = e
      }else {
        if(3 == e.C()) {
          f = e;
          var h = b, k = f.Jf() == h.Jf() && f.Qc() == h.Qc() && (0,z.ed)(f, "rel") == (0,z.ed)(h, "rel");
          f = (0,z.ht)(f, (0,z.bt)(h), k) || (0,z.ht)(f, k ? (0,z.at)(h) : (0,z.at)(h) - 1, k) || (0,z.ht)(h, (0,z.bt)(f), k) ? k ? (0,z.et)(window.Math.min((0,z.bt)(f), (0,z.bt)(h)), window.Math.max((0,z.at)(f), (0,z.at)(h)), f.Jf(), f.Qc(), (0,z.ed)(f, "rel")) : h : z.n
        }else {
          f = 4 == e.C() ? e.getName() == b.getName() ? (0,z.dt)(window.Math.min((0,z.bt)(e), (0,z.bt)(b)), window.Math.max((0,z.at)(e), (0,z.at)(b)), e.getName()) : z.n : (0,z.ht)(e, (0,z.bt)(b), z.m) || (0,z.ht)(e, (0,z.at)(b), z.m) || (0,z.ht)(b, (0,z.bt)(e), z.m) ? (0,z.$s)(e.C(), window.Math.min((0,z.bt)(e), (0,z.bt)(b)), window.Math.max((0,z.at)(e), (0,z.at)(b))) : z.n
        }
      }
    }
    if(f) {
      if(f == e || f.Ab(e)) {
        return z.s
      }
      z.bb.splice.call(c, d, 1);
      b = f;
      d = -1
    }
  }
  var c = a.Ta, d = b, p, e = z.ft || z.jb;
  f = 0;
  for(h = c.length;f < h;) {
    var k = f + h >> 1, q;
    q = e(d, c[k]);
    0 < q ? f = k + 1 : (h = k, p = !q)
  }
  p = p ? f : ~f;
  0 > p && (0,z.gb)(c, -(p + 1), 0, d);
  return z.m
};
z.nt = function() {
};
z.ot = function(a, b, c) {
  this.name = a || "";
  this.type = b;
  this.text = c;
  this.Ta = []
};
z.pt = function(a) {
  var b = new z.nt;
  b.O = a;
  return b
};
z.qt = function(a, b, c, d) {
  z.ot.call(this, a, 11, b);
  this.Da = d;
  this.metadata = c
};
z.rt = function(a, b, c, d, e) {
  z.ot.call(this, a, 4, b);
  this.Ke = c;
  this.Da = d;
  this.metadata = e
};
z.st = function(a) {
  var b, c = z.s;
  if(a.createRange) {
    try {
      b = a.createRange()
    }catch(d) {
      return z.n
    }
  }else {
    if(a.rangeCount) {
      if(1 < a.rangeCount) {
        b = new z.mf;
        for(var c = 0, e = a.rangeCount;c < e;c++) {
          b.Gd.push(a.getRangeAt(c))
        }
        return b
      }
      b = a.getRangeAt(0);
      c = (0,z.of)(a.anchorNode, a.anchorOffset, a.focusNode, a.focusOffset)
    }else {
      return z.n
    }
  }
  return b && b.addElement ? (0,z.pt)(b) : (0,z.ff)((0,z.df)(b), c)
};
z.tt = function(a, b) {
  return b in a.sg && a.sg[b] in a.Ee
};
z.ut = function(a) {
  var b = z.n, b = 4 == a.C() ? new z.rt(a.getName(), a.Nb(), (0,z.ed)(a, "dataId"), (0,z.ed)(a, "layout"), a.getMetadata()) : 11 == a.C() ? new z.qt(a.getName(), a.Nb(), (0,z.ed)(a, "iframe"), (0,z.ed)(a, "layout")) : new z.ot(a.getName(), a.C(), a.Nb());
  if(a = (0,z.ed)(a, "markups")) {
    for(var c = 0;c < a.length;c++) {
      (0,z.mt)(b, a[c])
    }
  }
  return b
};
z.vt = function(a, b, c) {
  var d = (0,z.sa)(c);
  if(!b[d]) {
    b[d] = z.m;
    for(var e in c.Dc) {
      var d = c.Dc[e], f = a.Dc[e];
      f || (f = a.Dc[e] = new z.xh(a), f.Rf = z.s, f.Tc = z.s);
      f.Rf = f.Rf || d.Rf;
      f.Tc = f.Tc || d.Tc;
      for(var h in d.attributes) {
        var k = d.attributes[h];
        if(k === z.m || f.attributes[h] === z.m) {
          f.attributes[h] = z.m
        }else {
          if((0,z.ma)(k)) {
            var p = f.attributes[h];
            (0,z.ma)(p) || (p = f.attributes[h] = []);
            (0,z.fb)(p, k)
          }
        }
      }
      (0,z.vt)(a, b, d.mc)
    }
  }
};
z.wt = function(a) {
  return(a = (0,z.He)(a || window)) && (0,z.st)(a)
};
z.xt = function(a) {
  var b = new z.mf;
  b.Bi = a;
  b.Gd = (0,z.qf)(a, function(a) {
    return a.sd()
  });
  return b
};
z.yt = function(a) {
  for(var b = (0,z.lc)(arguments[0]).body.createControlRange(), c = 0, d = arguments.length;c < d;c++) {
    b.addElement(arguments[c])
  }
  return(0,z.pt)(b)
};
z.zt = function(a) {
  if(z.L && !(0,z.Xb)(9)) {
    var b = z.s;
    try {
      b = a.parentNode
    }catch(c) {
    }
    return!!b
  }
  return(0,z.Hc)(a.ownerDocument.body, a)
};
z.At = function(a, b, c, d) {
  var e = new z.ef;
  e.Td = (0,z.of)(a, b, c, d);
  if((0,z.Gc)(a) && !(0,z.Cc)(a)) {
    var f = a.parentNode;
    b = (0,z.Xa)(f.childNodes, a);
    a = f
  }
  (0,z.Gc)(c) && !(0,z.Cc)(c) && (f = c.parentNode, d = (0,z.Xa)(f.childNodes, c), c = f);
  e.Td ? (e.la = c, e.oa = d, e.ha = a, e.na = b) : (e.la = a, e.oa = b, e.ha = c, e.na = d);
  return e
};
z.Bt = function(a, b, c) {
  var d;
  d = d || (0,z.jc)(a.parentElement());
  var e;
  1 != b.nodeType && (e = z.m, b = d.ab("DIV", z.n, b));
  a.collapse(c);
  c = d || (0,z.jc)(a.parentElement());
  var f, h = f = b.id;
  f || (f = b.id = "goog_" + z.oo++);
  a.pasteHTML(b.outerHTML);
  (b = c.H(f)) && (h || b.removeAttribute("id"));
  e && (a = b.firstChild, d.mC(b), b = a);
  return b
};
z.Ct = function(a, b) {
  return a.le.H(b ? a.zw : a.Yu)
};
z.Dt = function(a, b) {
  var c = window.document.getElementById(a.ql + (0,z.sa)(b));
  a.F("before-clear", b, c);
  c.innerHTML = (0,z.Yl)(a, b);
  a.F("after-draw", b, c)
};
z.Et = function(a, b) {
  if((0,z.tt)(a, b)) {
    return(0,z.Hb)(a.Ee[a.sg[b]])
  }
  a.Bl[b] || (a.Bl[b] = (0,z.G)((0,z.Bb)(a.fa.get("/_/media-resources/" + (0,window.encodeURIComponent)(b), {V:z.m}), function() {
    delete this.Bl[b]
  }, a), function(a) {
    a = (0,z.Ak)(a.value, a.references);
    a = (0,z.Bm)(this, a);
    this.sg[b] = (0,z.dh)(a, "mediaResourceId");
    return a
  }, a));
  return a.Bl[b].Ie()
};
z.Ft = function(a, b) {
  for(var c = a.Ta, d = [], e = 0;e < b.length;e++) {
    var f = b[e], h = [];
    d.push(h);
    for(var k = 0;k < c.length;k++) {
      var p = c[k];
      (0,z.ht)(p, f, z.s) && h.push(p)
    }
  }
  return d
};
z.Gt = function(a) {
  var b = {0:z.m};
  b[a.text.length] = z.m;
  a = a.Ta;
  for(var c = 0;c < a.length;c++) {
    var d = a[c];
    b[(0,z.bt)(d)] = z.m;
    b[(0,z.at)(d)] = z.m
  }
  b = (0,z.nb)(b);
  b = (0,z.qf)(b, window.Number);
  (0,z.ib)(b);
  return b
};
z.Ht = function(a, b, c) {
  c = window.Math.min(c, a.text.length);
  a.text = a.text.substring(0, c) + b + a.text.substring(c);
  a = a.Ta;
  for(var d = 0;d < a.length;d++) {
    var e = a[d];
    (3 != e.C() ? (0,z.at)(e) >= c : (0,z.at)(e) > c) && e.setEnd((0,z.at)(e) + b.length);
    0 !== (0,z.bt)(e) && (0,z.bt)(e) >= c && e.setStart((0,z.bt)(e) + b.length)
  }
};
z.It = function(a, b) {
  for(var c = a.Ta, d = 0;d < c.length;d++) {
    var e = c[d];
    if(e.C() == b.C() && ((0,z.ht)(b, (0,z.bt)(e), z.s) && e.setStart((0,z.at)(b)), (0,z.ht)(b, (0,z.at)(e), z.m) && e.setEnd((0,z.bt)(b)), (0,z.ht)(e, (0,z.bt)(b), z.s) && (0,z.ht)(e, (0,z.at)(b), z.m))) {
      c = z.Nm.Zc(z.qh, z.Nm.Ld(e));
      c.setStart((0,z.at)(b));
      e.setEnd((0,z.bt)(b));
      (0,z.mt)(a, c);
      break
    }
  }
  (0,z.it)(a)
};
z.Jt = function(a, b) {
  for(var c = 0;c < a.Ta.length;c++) {
    var d = a.Ta[c];
    3 == d.C() && b(d)
  }
};
z.Kt = function(a) {
  a.Ta = (0,z.bc)(a.Ta, function(a) {
    return 4 != a.C()
  })
};
z.Lt = function(a) {
  return 5 == a || 4 == a || 11 == a
};
z.Mt = function(a) {
  var b;
  do {
    b = window.Math.round(65535 * window.Math.random()).toString(16), b = (0,window.Array)(4 - b.length + 1).join("0") + b
  }while(a[b]);
  a[b] = z.m;
  return b
};
z.Nt = function(a, b, c) {
  a = a.attributes[b];
  return a === z.m ? c : (0,z.ma)(a) ? "class" == b ? (c.match(/\S+/g) || []).filter((0,z.za)(z.Wa, a)).join(" ") : (0,z.Wa)(a, c) ? c : z.n : z.n
};
z.Ot = function() {
  var a = z.Hr, b = new z.vh;
  (0,z.yh)(b);
  (0,z.vt)(b, {}, a);
  return b
};
z.Pt = function(a, b) {
  return(0,z.gd)(a, "iframeHeight", b)
};
z.Qt = function(a, b) {
  return(0,z.gd)(a, "iframeWidth", b)
};
z.Rt = function(a, b, c, d) {
  return(0,z.At)(a, b, c, d)
};
z.St = function(a) {
  a = a.wc();
  return 1 == a.nodeType ? a : a.parentNode
};
z.Tt = function(a) {
  z.Hd.call(this);
  this.zw = "goog_" + z.oo++;
  this.Yu = "goog_" + z.oo++;
  this.We = a.se();
  this.le = (0,z.jc)(a.Pc());
  a.af(this.le.ab("SPAN", {id:this.zw}), this.le.ab("SPAN", {id:this.Yu}))
};
z.Ut = function(a, b, c, d) {
  this.top = a;
  this.right = b;
  this.bottom = c;
  this.left = d
};
z.Vt = function(a) {
  a = a.charCodeAt(0);
  return"%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
};
z.Wt = function(a, b) {
  this.z = a;
  this.offset = b
};
z.Xt = function(a) {
  var b = a.z.parentNode;
  return new z.Wt(b, (0,z.Xa)(b.childNodes, a.z))
};
z.Yt = function(a) {
  return a.length || a.childNodes.length
};
z.Zt = function(a, b) {
  return(0,z.oa)(a) ? (0,window.encodeURI)(a).replace(b, z.Vt) : z.n
};
z.$t = function(a, b, c, d) {
  for(;1 == a.nodeType;) {
    var e = a.childNodes[b];
    if(!e && !a.lastChild) {
      break
    }else {
      if(e) {
        var f = e.previousSibling;
        if(c && f) {
          if(d && 1 == f.nodeType && !(0,z.Cc)(f)) {
            break
          }
          a = f;
          b = (0,z.Yt)(a)
        }else {
          if(d && 1 == e.nodeType && !(0,z.Cc)(e)) {
            break
          }
          a = e;
          b = 0
        }
      }else {
        if(d && 1 == a.lastChild.nodeType && !(0,z.Cc)(a.lastChild)) {
          break
        }
        a = a.lastChild;
        b = (0,z.Yt)(a)
      }
    }
  }
  return new z.Wt(a, b)
};
z.au = function(a, b) {
  var c;
  if(a instanceof z.au) {
    this.ud = (0,z.la)(b) ? b : a.ud, (0,z.bu)(this, a.lh), c = a.yn, (0,z.cu)(this), this.yn = c, this.nn(a.Yj()), (0,z.du)(this, a.cn), c = a.ok, (0,z.cu)(this), this.ok = c, (0,z.eu)(this, a.Vf.ga()), c = a.Em, (0,z.cu)(this), this.Em = c
  }else {
    if(a && (c = (0,window.String)(a).match(z.zg))) {
      this.ud = !!b;
      (0,z.bu)(this, c[1] || "", z.m);
      var d = c[2] || "";
      (0,z.cu)(this);
      this.yn = d ? (0,window.decodeURIComponent)(d) : "";
      this.nn(c[3] || "", z.m);
      (0,z.du)(this, c[4]);
      d = c[5] || "";
      (0,z.cu)(this);
      this.ok = d ? (0,window.decodeURIComponent)(d) : "";
      (0,z.eu)(this, c[6] || "", z.m);
      c = c[7] || "";
      (0,z.cu)(this);
      this.Em = c ? (0,window.decodeURIComponent)(c) : ""
    }else {
      this.ud = !!b, this.Vf = new z.rh(z.n, 0, this.ud)
    }
  }
};
z.bu = function(a, b, c) {
  (0,z.cu)(a);
  a.lh = c ? b ? (0,window.decodeURIComponent)(b) : "" : b;
  a.lh && (a.lh = a.lh.replace(/:$/, ""))
};
z.du = function(a, b) {
  (0,z.cu)(a);
  b ? (b = (0,window.Number)(b), ((0,window.isNaN)(b) || 0 > b) && (0,z.g)((0,window.Error)("Bad port number " + b)), a.cn = b) : a.cn = z.n
};
z.eu = function(a, b, c) {
  (0,z.cu)(a);
  b instanceof z.rh ? (a.Vf = b, a.Vf.pn(a.ud)) : (c || (b = (0,z.Zt)(b, z.fu)), a.Vf = new z.rh(b, 0, a.ud))
};
z.cu = function(a) {
  a.ZC && (0,z.g)((0,window.Error)("Tried to modify a read-only Uri"))
};
z.gu = function(a) {
  var b;
  if(a.z.nodeType == z.Rc) {
    for(b = a.z.previousSibling;b && b.nodeType == z.Rc;b = b.previousSibling) {
      a.offset += (0,z.Yt)(b)
    }
  }else {
    b = a.z.previousSibling
  }
  var c = a.z.parentNode;
  a.z = b ? b.nextSibling : c.firstChild;
  return a
};
z.hu = function(a, b) {
  return b ? (0,z.$t)(a.ba(), a.Ka()) : (0,z.$t)(a.ra(), a.rb())
};
z.iu = function(a) {
  for(var b = z.n, c = a.firstChild;c;) {
    var d = c.nextSibling;
    c.nodeType == z.Rc ? "" == c.nodeValue ? a.removeChild(c) : b ? (b.nodeValue += c.nodeValue, a.removeChild(c)) : b = c : ((0,z.iu)(c), b = z.n);
    c = d
  }
};
z.ju = function(a) {
  var b = a && a.nodeName.toLowerCase();
  return!(!a || "block" != (1 != a.nodeType ? z.n : z.L ? a.currentStyle ? a.currentStyle.display : z.n : (0,z.Wd)(a, "display")) && !("td" == b || "table" == b || "li" == b))
};
z.ku = function(a, b, c) {
  this.Sv = a;
  this.QD = !!c;
  a && !b && this.next()
};
z.lu = function(a) {
  if(2 == a) {
    return"image-inset-left"
  }
  if(1 == a) {
    return""
  }
  if(4 == a) {
    return"image-outset-left"
  }
  if(3 == a) {
    return"image-outset-center"
  }
  (0,z.g)((0,window.Error)("unknown layout " + a))
};
z.mu = function(a) {
  return 2 == a ? window.Math.round(350) : 4 == a ? window.Math.round(525) : 3 == a ? 900 : 700
};
z.nu = function(a) {
  "string" == typeof a && (a = new z.au(a));
  a = a.Yj();
  return!a || z.Jr[a] || "localhost" == a
};
z.ou = function(a) {
  var b = a.se(), c = (0,z.gu)((0,z.hu)(a, !b)), d = (0,z.Xt)(c), e = c.z.previousSibling;
  c.z.nodeType == z.Rc && (c.z = z.n);
  var f = (0,z.gu)((0,z.hu)(a, b)), h = (0,z.Xt)(f), k = f.z.previousSibling;
  f.z.nodeType == z.Rc && (f.z = z.n);
  return function() {
    !c.z && e && (c.z = e.nextSibling, c.z || (c = new z.Wt(e, (0,z.Yt)(e))));
    !f.z && k && (f.z = k.nextSibling, f.z || (f = new z.Wt(k, (0,z.Yt)(k))));
    return(0,z.At)(c.z || d.z.firstChild || d.z, c.offset, f.z || h.z.firstChild || h.z, f.offset)
  }
};
z.pu = function(a) {
  return 1 == a.nodeType || a.nodeType == z.Rc && !!/[^\t\n\r ]/.test(a.nodeValue)
};
z.qu = function(a, b, c) {
  (0,z.la)(c) || (c = b && a.childNodes.length ? a.childNodes.length - 1 : 0);
  z.ku.call(this, a.childNodes[c], z.m, b)
};
z.ru = function(a, b) {
  var c = (0,z.ie)(a), d = new z.he;
  d.next = function() {
    for(;;) {
      var a = c.next();
      if(b.call(z.l, a, z.l, c)) {
        return a
      }
    }
  };
  return d
};
z.su = function(a) {
  return a.replace(/&([^;]+);/g, function(a, c) {
    switch(c) {
      case "amp":
        return"\x26";
      case "lt":
        return"\x3c";
      case "gt":
        return"\x3e";
      case "quot":
        return'"';
      default:
        if("#" == c.charAt(0)) {
          var d = (0,window.Number)("0" + c.substr(1));
          if(!(0,window.isNaN)(d)) {
            return window.String.fromCharCode(d)
          }
        }
        return a
    }
  })
};
z.tu = function(a) {
  var b = {"\x26amp;":"\x26", "\x26lt;":"\x3c", "\x26gt;":"\x3e", "\x26quot;":'"'}, c = window.document.createElement("div");
  return a.replace(z.uu, function(a, e) {
    var f = b[a];
    if(f) {
      return f
    }
    if("#" == e.charAt(0)) {
      var h = (0,window.Number)("0" + e.substr(1));
      (0,window.isNaN)(h) || (f = window.String.fromCharCode(h))
    }
    f || (c.innerHTML = a + " ", f = c.firstChild.nodeValue.slice(0, -1));
    return b[a] = f
  })
};
z.vu = function(a) {
  a = a.match(/\S+/g) || [];
  for(var b in z.xr) {
    var c = z.xr[b], d = (0,z.lu)(c);
    if(d && (0,z.Wa)(a, d)) {
      return c
    }
  }
  return 1
};
z.wu = function(a, b, c) {
  var d = "";
  a && (d += ' data-width\x3d"' + (0,z.Da)((0,window.String)(a)) + '"');
  b && (d += ' data-height\x3d"' + (0,z.Da)((0,window.String)(b)) + '"');
  c.width && (d += ' width\x3d"' + (0,z.Da)((0,window.String)(c.width)) + '"');
  c.height && (d += ' height\x3d"' + (0,z.Da)((0,window.String)(c.height)) + '"');
  return d
};
z.xu = function(a, b, c) {
  c = (0,z.mu)(c);
  a = new z.ic(a, b);
  return a.width > c ? new z.ic(c, window.Math.round(c * a.height / a.width)) : a
};
z.yu = function(a, b) {
  var c;
  try {
    c = new z.au(a)
  }catch(d) {
    return window.console.warn("Malformed URI: ", a, d.stack), ""
  }
  if("javascript" == c.lh) {
    return window.console.warn("Attempted to pass JavaScript URI"), ""
  }
  var e = (0,z.nu)(c), f = e && "/r/" == c.ok;
  return!b && f ? (0,window.String)(c.Vf.get("url")) : b && !e && !f ? "/r/?url\x3d" + (0,window.encodeURIComponent)(a) : a
};
z.zu = function(a, b) {
  function c(a) {
    return a.nodeType == z.Rc ? b ? /^[\s\xa0]*$/.test(a.nodeValue) : 0 === a.nodeValue.length : "HR" == a.tagName || "IMG" == a.tagName || "IFRAME" == a.tagName ? z.s : (0,z.po)(a.childNodes, c)
  }
  return c(a)
};
z.Au = function(a, b) {
  if(b) {
    var c = (0,z.ou)(b), d;
    d = (0,z.St)(b);
    d = (0,z.Uc)(d, z.ju, z.m)
  }
  d ? (d = (0,z.Lc)(d, a), z.L ? (0,z.iu)(d) : d.normalize()) : a && (z.L ? (0,z.iu)(a) : a.normalize());
  return c ? c() : z.n
};
z.Bu = function(a, b) {
  var c;
  if(!a || 1 != a.nodeType) {
    c = z.n
  }else {
    var d = (0,z.ru)(new z.qu(a, b), z.pu);
    try {
      c = d.next()
    }catch(e) {
      c = z.n
    }
  }
  return c
};
z.Cu = function(a) {
  return-1 != a.indexOf("\x26") ? "document" in z.ha ? (0,z.tu)(a) : (0,z.su)(a) : a
};
z.Du = function(a) {
  a = a.replace(/&nbsp;/g, " ");
  return a = a.replace(/ +/g, " ")
};
z.Eu = function(a) {
  a = a.replace(/<div>\s*(<br>)*\s*<\/div>/ig, "\x3cp\x3e");
  a = a.replace(/\s*(<br>)+\s*<\/p>/ig, "\x3c/p\x3e");
  a = a.replace(/<p>\s*<\/p>/ig, "");
  return a = a.replace(/<(\/?)p>\s*<\1p>/ig, "\x3c$1p\x3e")
};
z.Fu = function(a) {
  return(0,z.zu)(a, z.s)
};
z.Gu = function(a, b, c, d) {
  z.ke.call(this, a, b, c, z.n, d)
};
z.Hu = function(a) {
  try {
    return(0,z.ie)(a).next()
  }catch(b) {
    return b != z.je && (0,z.g)(b), z.n
  }
};
z.Iu = function(a, b) {
  var c = a.currentStyle ? a.currentStyle[b] : z.n, d;
  if(c) {
    if(/^\d+px?$/.test(c)) {
      d = (0,window.parseInt)(c, 10)
    }else {
      d = a.style.left;
      var e = a.runtimeStyle.left;
      a.runtimeStyle.left = a.currentStyle.left;
      a.style.left = c;
      c = a.style.pixelLeft;
      a.style.left = d;
      a.runtimeStyle.left = e;
      d = c
    }
  }else {
    d = 0
  }
  return d
};
z.Ju = function(a, b) {
  return b + " " + (1 == b ? a : "s" == a.charAt(a.length - 1) ? a + "es" : a + "s") + " ago"
};
z.Ku = function(a) {
  a = a.C();
  if(1 == a) {
    return"\x3c/strong\x3e"
  }
  if(2 == a) {
    return"\x3c/em\x3e"
  }
  if(3 == a) {
    return"\x3c/a\x3e"
  }
  if(4 == a) {
    return"\x3c/span\x3e"
  }
  (0,z.g)((0,window.Error)("unknown type " + a))
};
z.Lu = function(a) {
  var b = a.C();
  if(1 == b) {
    return"\x3cstrong\x3e"
  }
  if(2 == b) {
    return"\x3cem\x3e"
  }
  if(4 == b) {
    return'\x3cspan class\x3d"notes-highlight" ' + (a.getName() ? ' name\x3d"' + (0,z.Da)(a.getName()) + '"' : "") + "\x3e"
  }
  if(3 == b) {
    return b = a.Jf(), "\x3ca " + ((0,z.nu)(b) ? "" : 'target\x3d"_blank" ') + 'href\x3d"' + (0,z.Da)(b) + '"' + (a.Qc() ? ' title\x3d"' + (0,z.Da)(a.Qc()) + '"' : "") + ((0,z.ed)(a, "rel") ? ' rel\x3d"' + (0,z.Da)((0,z.ed)(a, "rel")) + '"' : "") + "\x3e"
  }
  (0,z.g)((0,window.Error)("unknown type " + b))
};
z.Mu = function(a) {
  var b = a.metadata, c = "";
  if(b && b.Wg()) {
    var c = (0,z.ed)(b, "iframeWidth") || 500, d = (0,z.ed)(b, "iframeHeight");
    a = (0,z.xu)(c, d, a.Da);
    c = (0,z.wu)(c, d, a);
    a = ' src\x3d"' + (0,z.Da)("/media/" + b.Wg() + "?maxWidth\x3d" + a.width) + '"';
    b = b.Wg() ? ' data-media-id\x3d"' + (0,z.Da)(b.Wg()) + '"' : "";
    c = "\x3ciframe" + c + a + b + ' frameborder\x3d"0" onload\x3d"window._resizeIframe \x26amp;\x26amp; _resizeIframe(this)"\x3e\x3c/iframe\x3e'
  }
  return c + '\x3cfigcaption class\x3d"image-caption"\x3e'
};
z.Nu = function(a, b) {
  var c = '\x3cfigcaption class\x3d"image-caption" data-image-id\x3d"' + (0,z.Da)(a.Ke) + '"\x3e', d = b.miroUrl, e = a.Ke, f = a.metadata, h = a.Da, k = (0,z.oa)(h) ? (0,z.vu)(h) : h, h = f && f.originalWidth || 0, p = f && f.originalHeight || 0, q = (0,z.xu)(h, p, k), p = (0,z.wu)(h, p, q), k = (0,z.mu)(k), d = f && f.id && d + "/max/" + k + "/" + f.id;
  return"\x3cimg" + p + (h != q.width ? ' data-action\x3d"zoom" data-action-value\x3d"' + f.id + '"' : "") + ' data-id\x3d"' + (0,z.Da)(e) + '"' + (d ? ' src\x3d"' + (0,z.Da)(d) + '"' : "") + "\x3e" + c
};
z.Qu = function(a) {
  var b = z.Ru;
  if(!b) {
    b = z.Ru = (0,z.Ot)();
    b.Dc.IMG.attributes = {"data-id":z.m};
    for(var c in b.Dc) {
      b.Dc[c].Rf || z.Su.push((0,window.RegExp)("\x3c" + c + "[^\x3e]*\x3e[\\s\\S]*?\x3c\\/" + c + "\x3e", "gi"))
    }
  }
  a = a.replace(/\x3c!--[\s\S]*?--\x3e/g, "");
  z.Su.forEach(function(b) {
    a = a.replace(b, "")
  });
  a = a.replace(z.Tu, function(a, c, f) {
    a = b.Dc[f.toUpperCase()] || b.fq;
    if(a.Tc) {
      (0,z.oa)(a.Tc) && (f = a.Tc)
    }else {
      return""
    }
    if(z.Uu.test(c)) {
      c = "\x3c/" + f.toLowerCase() + "\x3e"
    }else {
      f = "\x3c" + f.toLowerCase();
      for(var h in a.attributes) {
        var k = c.match((0,window.RegExp)(h + "\\s*\x3d\\s*(['\"])(.+?)\\1"));
        if(k = k && k[2] && (0,z.Nt)(a, h, k[2])) {
          "href" == h && (k = (0,z.Da)((0,z.yu)((0,z.Cu)(k), z.m))), f += " " + h + '\x3d"' + k + '"'
        }
      }
      c = f + "\x3e"
    }
    return c
  });
  a = a.replace(/<img>/g, "");
  a = (0,z.Eu)(a);
  return a = (0,z.Du)(a)
};
z.Vu = function(a, b) {
  var c = b || {};
  "rel" in c || (c.rel = "nofollow");
  "target" in c || (c.target = "_blank");
  var d = [], e;
  for(e in c) {
    c.hasOwnProperty(e) && c[e] && d.push((0,z.Da)(e), '\x3d"', (0,z.Da)(c[e]), '" ')
  }
  var f = d.join("");
  return a.replace(z.zr, function(a, b, c, d, e) {
    a = [(0,z.Da)(b)];
    if(!c) {
      return a[0]
    }
    a.push("\x3ca ", f, 'href\x3d"');
    d ? (a.push("mailto:"), c = d, d = "") : (e || a.push("http://"), (d = c.match(z.Wu)) ? (c = d[1], d = d[2]) : d = "");
    c = (0,z.Da)(c);
    d = (0,z.Da)(d);
    a.push(c, '"\x3e', c, "\x3c/a\x3e", d);
    return a.join("")
  })
};
z.Xu = function(a, b) {
  a.z.firstChild && (a = (0,z.$t)(a.z, a.offset));
  for(var c = new z.Gu(b), d, e = 0;d = (0,z.Hu)(c);) {
    if(a.z == d) {
      return e + a.offset
    }
    d.nodeType == z.Rc ? e += d.nodeValue.length : "BR" == d.tagName && (e += 1)
  }
  return-1
};
z.Yu = function(a) {
  return!!z.Zu[a.tagName]
};
z.$u = function(a) {
  for(;a.firstChild;) {
    a.parentNode && a.parentNode.insertBefore(a.firstChild, a)
  }
  (0,z.P)(a)
};
z.av = function(a, b, c, d) {
  for(var e = c || window.document.body;a && a != e && !b(a);) {
    a = a.parentNode
  }
  return c && !d && e == a || a && e != a && !(0,z.Hc)(e, a) ? z.n : a
};
z.bv = function(a) {
  z.Tt.call(this, a)
};
z.cv = function(a) {
  for(var b;b = (0,z.Bu)(a, z.s);) {
    a = b
  }
  return a
};
z.dv = function(a) {
  for(var b;b = (0,z.Bu)(a, z.m);) {
    a = b
  }
  return a
};
z.ev = function(a, b) {
  if(z.L) {
    var c = (0,z.Iu)(a, b + "Left"), d = (0,z.Iu)(a, b + "Right"), e = (0,z.Iu)(a, b + "Top"), f = (0,z.Iu)(a, b + "Bottom");
    return new z.Ut(e, d, f, c)
  }
  c = (0,z.Wd)(a, b + "Left");
  d = (0,z.Wd)(a, b + "Right");
  e = (0,z.Wd)(a, b + "Top");
  f = (0,z.Wd)(a, b + "Bottom");
  return new z.Ut((0,window.parseFloat)(e), (0,window.parseFloat)(d), (0,window.parseFloat)(f), (0,window.parseFloat)(c))
};
z.fv = function(a, b, c, d) {
  if(a != z.n) {
    for(a = a.firstChild;a;) {
      if(b(a) && (c.push(a), d) || (0,z.fv)(a, b, c, d)) {
        return z.m
      }
      a = a.nextSibling
    }
  }
  return z.s
};
z.gv = function(a, b) {
  for(;a && 1 != a.nodeType;) {
    a = b ? a.nextSibling : a.previousSibling
  }
  return a
};
z.hv = function(a) {
  for(var b;b = a.firstChild;) {
    a.removeChild(b)
  }
};
z.iv = function(a) {
  if((0,window.isNaN)(a)) {
    return"some time ago"
  }
  var b = window.Date.now(), c = window.Math.floor((b - a) / 6E4);
  if(0 === c) {
    return"just now"
  }
  if(60 > c) {
    return(0,z.Ju)("minute", c)
  }
  c = window.Math.floor(c / 60);
  if(24 > c) {
    return(0,z.Ju)("hour", c)
  }
  b = new window.Date(b);
  b.setHours(0);
  b.setMinutes(0);
  b.setSeconds(0);
  b.setMilliseconds(0);
  a = window.Math.ceil((b.getTime() - a) / 864E5);
  if(14 > a) {
    return(0,z.Ju)("day", a)
  }
  b = window.Math.floor(a / 7);
  if(4 >= b) {
    return(0,z.Ju)("week", b)
  }
  b = window.Math.floor(a / 30);
  if(23 >= b) {
    return(0,z.Ju)("month", b)
  }
  a = window.Math.round(a / 365);
  return(0,z.Ju)("year", a)
};
z.jv = function(a) {
  a = a.type;
  if(5 == a) {
    return""
  }
  if(4 == a || 11 == a) {
    return"\x3c/figure\x3e"
  }
  if(6 == a || 7 == a) {
    return"\x3c/blockquote\x3e"
  }
  if(9 == a) {
    return"\x3c/li\x3e\x3c/ul\x3e"
  }
  if(10 == a) {
    return"\x3c/li\x3e\x3c/ol\x3e"
  }
  if(2 == a) {
    return"\x3c/h2\x3e"
  }
  if(3 == a) {
    return"\x3c/h3\x3e"
  }
  if(1 == a) {
    return"\x3c/p\x3e"
  }
  if(8 == a) {
    return"\x3c/pre\x3e"
  }
  (0,z.g)((0,window.Error)("unknown type " + a))
};
z.kv = function(a) {
  var b = a.type, c = a.name ? ' name\x3d"' + (0,z.Da)(a.name) + '"' : "";
  if(5 == b) {
    return"\x3chr" + c + "\x3e"
  }
  if(4 == b || 11 == b) {
    return b = a.Da && (0,z.lu)(a.Da), "\x3cfigure" + c + (b ? ' class\x3d"' + b + '"' : "") + "\x3e"
  }
  if(7 == b) {
    return'\x3cblockquote class\x3d"pullquote"' + c + "\x3e"
  }
  var d = a = "";
  9 == b ? (a = "li", d = "\x3cul\x3e") : 10 == b ? (a = "li", d = "\x3col\x3e") : 6 == b ? a = "blockquote" : 10 == b ? a = "li" : 2 == b ? a = "h2" : 3 == b ? a = "h3" : 1 == b ? a = "p" : 8 == b ? a = "pre" : (0,z.g)((0,window.Error)("unknown type " + b));
  return d + "\x3c" + a + c + "\x3e"
};
z.lv = function(a) {
  var b = z.rd, c = (0,z.Gt)(a), d = (0,z.Ft)(a, c), e = 4 == a.type, f = 11 == a.type, h = "";
  e ? h = (0,z.Nu)(a, b) : f && (h = (0,z.Mu)(a));
  for(var b = a.text, k = [], p = 0;p < c.length;p++) {
    for(var q = 0 === p, z$ = p == c.length - 2, U = c[p], F = d[p], ab = 0;ab < F.length;ab++) {
      var Ma = F[ab];
      if(k[ab] != Ma) {
        for(;k.length > ab;) {
          h += (0,z.Ku)(k.pop())
        }
        h += (0,z.Lu)(Ma);
        k.push(Ma)
      }
    }
    for(;k.length > ab;) {
      h += (0,z.Ku)(k.pop())
    }
    var be = b.substring(U, c[p + 1] || b.length).split("\n"), h = h + (0,z.qf)(be, function(b, c) {
      var d = (0,z.Da)(b);
      if(8 != a.type) {
        if(" " == d.charAt(0) && (q || 0 !== c)) {
          d = " " + d.substring(1)
        }
        if(" " == d.charAt(d.length - 1) && (z$ || c != be.length - 1)) {
          d = d.substring(0, d.length - 1) + " "
        }
      }
      return d = d.replace(/ — /g, " — ")
    }).join("\x3cbr\x3e"), U = z$ && 1 < be.length && "" === (0,z.Ta)(be), F = !b;
    if(5 != a.type && (U || F)) {
      h += "\x3cbr\x3e"
    }
  }
  if(e || f) {
    h += "\x3c/figcaption\x3e"
  }
  return h
};
z.mv = function(a, b, c) {
  b = '\x3cdiv class\x3d"popover-inner"\x3e\x3cul\x3e';
  a = a.items;
  for(var d = a.length, e = 0;e < d;e++) {
    var f = a[e];
    b += '\x3cli class\x3d"typeahead-item" data-username\x3d"@' + (0,z.Y)(f.username) + '" data-action\x3d"typeahead-populate"\x3e' + (0,z.yi)({user:f, Wb:"avatar-micro", Cm:z.m}, c) + '\x3cstrong class\x3d"typeahead-name"\x3e' + (0,z.X)(f.name) + '\x3c/strong\x3e \x3cem class\x3d"typeahead-username"\x3e@' + (0,z.X)(f.username) + "\x3c/em\x3e\x3c/li\x3e"
  }
  return b + '\x3c/ul\x3e\x3c/div\x3e\x3cdiv class\x3d"popover-arrow"\x3e\x3c/div\x3e'
};
z.nv = function(a, b) {
  if(!(0,z.Ba)(b, a)) {
    return""
  }
  var c = /\/([^\/]*)$/.exec(b);
  return c && c[1] || ""
};
z.ov = function(a) {
  return a.replace(z.Hp, '$1\x3ca href\x3d"/@$2" title\x3d"Medium profile for @$2"\x3e@$2\x3c/a\x3e')
};
z.pv = function(a, b) {
  a || (a = "");
  a = a.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
  !b || b.gD !== z.s ? (a = (0,z.Vu)(a), a = a.replace(/((?:^|[^a-zA-Z0-9_!#$%&*@＠]|RT:?))([@＠])([a-zA-Z0-9_]{1,20})(\/[a-zA-Z][a-zA-Z0-9_-]{0,24})?/g, '$1\x3ca href\x3d"http://twitter.com/$3$4" target\x3d"_blank" title\x3d"Twitter profile for @$3$4"\x3e@$3$4\x3c/a\x3e')) : a = (0,z.Bh)(a);
  if(!b || b.mG !== z.s) {
    a = a.replace(/\n/g, "\x3cbr\x3e")
  }
  if(!b || b.YB !== z.s) {
    a = "\x3cp\x3e" + a.replace(/<br><br>/g, "\x3c/p\x3e\x3cp\x3e").replace(/\n\n/g, "\x3c/p\x3e\x3cp\x3e") + "\x3c/p\x3e"
  }
  return a
};
z.qv = function(a, b) {
  if(0 > a) {
    return z.n
  }
  for(var c = new z.Gu(b), d;d = (0,z.Hu)(c);) {
    var e = 0;
    d.nodeType == z.Rc ? e = d.nodeValue.length : "BR" == d.tagName && (e = 1);
    a -= e;
    if(0 > a) {
      return new z.Wt(d, e + a)
    }
  }
  return 0 === a ? (0,z.$t)(b, b.childNodes.length) : z.n
};
z.rv = function(a, b) {
  return a.querySelector('[name\x3d"' + b + '"]')
};
z.sv = function(a) {
  (0,z.Fu)(a) && 0 === a.getElementsByTagName("BR").length && a.appendChild(window.document.createElement("br"))
};
z.tv = function(a) {
  var b = [];
  (0,z.Sf)(a, b.push, b);
  return b
};
z.uv = function(a, b, c) {
  (0,z.Tf)(a, z.Yu, (0,z.Bf)(b, (0,z.Af)(z.m)), c)
};
z.vv = function(a) {
  a = a.nodeType == z.Rc || "BR" == a.tagName ? a.parentNode : a;
  if(a.scrollIntoViewIfNeeded) {
    a.scrollIntoViewIfNeeded(z.s)
  }else {
    var b = (0,z.Rf)(a), c = (0,z.$d)(a), d = (0,z.$d)(b);
    if(c.y < d.y) {
      a.scrollIntoView(z.m)
    }else {
      for(var d = new z.Ut(0, window.Infinity, window.Infinity, 0), e = (0,z.jc)(b), f = e.Pc().body, h = e.Pc().documentElement, k = !z.uc && (0,z.sc)(e.eb) ? e.eb.documentElement : e.eb.body;b = (0,z.Zd)(b);) {
        if((!z.L || 0 != b.clientWidth) && (!z.uc || 0 != b.clientHeight || b != f) && b != f && b != h && "visible" != (0,z.Xd)(b, "overflow")) {
          var p = (0,z.$d)(b), q;
          q = b;
          if(z.R && !(0,z.Ub)("1.9")) {
            var z$ = (0,window.parseFloat)((0,z.Wd)(q, "borderLeftWidth"));
            if("rtl" == (0,z.Xd)(q, "direction")) {
              var U = q.offsetWidth - q.clientWidth - z$ - (0,window.parseFloat)((0,z.Wd)(q, "borderRightWidth")), z$ = z$ + U
            }
            q = new z.hc(z$, (0,window.parseFloat)((0,z.Wd)(q, "borderTopWidth")))
          }else {
            q = new z.hc(q.clientLeft, q.clientTop)
          }
          p.x += q.x;
          p.y += q.y;
          d.top = window.Math.max(d.top, p.y);
          d.right = window.Math.min(d.right, p.x + b.clientWidth);
          d.bottom = window.Math.min(d.bottom, p.y + b.clientHeight);
          d.left = window.Math.max(d.left, p.x)
        }
      }
      f = k.scrollLeft;
      k = k.scrollTop;
      d.left = window.Math.max(d.left, f);
      d.top = window.Math.max(d.top, k);
      e = e.Bb();
      e = (0,z.rc)(e || window);
      d.right = window.Math.min(d.right, f + e.width);
      d.bottom = window.Math.min(d.bottom, k + e.height);
      (d = 0 <= d.top && 0 <= d.left && d.bottom > d.top && d.right > d.left ? d : z.n) && c.y + a.offsetHeight > d.bottom && a.scrollIntoView(z.s)
    }
  }
};
z.wv = function(a) {
  var b = a.nodeType;
  b == z.Rc ? (0,z.wv)(a.parentNode) : 1 == b && a.focus()
};
z.xv = function(a, b) {
  for(var c = z.n, d = a.firstChild;d;d = c) {
    c = d.nextSibling, (0,z.xv)(d, b)
  }
  b(a) && (0,z.$u)(a)
};
z.yv = function(a, b) {
  return(0,z.av)(a, z.Nf, b)
};
z.zv = function(a) {
  return a.innerText || a.textContent
};
z.Av = function(a) {
  return function(b) {
    b.stopPropagation();
    b.preventDefault();
    return a ? a.call(this, b) : z.s
  }
};
z.Bv = function(a) {
  var b;
  b = b || 0;
  return function() {
    return a.apply(this, window.Array.prototype.slice.call(arguments, 0, b))
  }
};
z.Cv = function(a, b) {
  var c = a.parentNode, d = (0,z.Xa)(c.childNodes, a) + (b ? 0 : 1), c = (0,z.$t)(c, d, b, z.m);
  (0,z.At)(c.z, c.offset, c.z, c.offset).select()
};
z.Dv = function(a, b) {
  var c = a.ba(), d = a.ra();
  if(c && d) {
    var e = function(a) {
      return a == b
    }, c = (0,z.Uc)(c, e, z.m), d = (0,z.Uc)(d, e, z.m);
    if(c && d) {
      return a.ga()
    }
    if(c) {
      return d = (0,z.dv)(b), (0,z.Rt)(a.ba(), a.Ka(), d, (0,z.Yt)(d))
    }
    if(d) {
      return(0,z.Rt)((0,z.cv)(b), 0, a.ra(), a.rb())
    }
  }
  return z.n
};
z.Ev = function(a, b) {
  z.L && (0,z.hv)(a);
  a.innerHTML = b
};
z.Fv = function(a, b) {
  for(var c = z.n, d;a != b && (d = a.parentNode);) {
    for(var e = a, f = d.cloneNode(z.s);e.nextSibling;) {
      f.appendChild(e.nextSibling)
    }
    c && f.insertBefore(c, f.firstChild);
    c = f;
    a = d
  }
  return c
};
z.Gv = function(a) {
  if(a = (0,z.He)(a || window)) {
    if(a.empty) {
      try {
        a.empty()
      }catch(b) {
      }
    }else {
      try {
        a.removeAllRanges()
      }catch(c) {
      }
    }
  }
};
z.Hv = function(a) {
  if(a.altKey && !a.ctrlKey || a.metaKey || 112 <= a.keyCode && 123 >= a.keyCode) {
    return z.s
  }
  switch(a.keyCode) {
    case 18:
    ;
    case 20:
    ;
    case 93:
    ;
    case 17:
    ;
    case 40:
    ;
    case 35:
    ;
    case 27:
    ;
    case 36:
    ;
    case 45:
    ;
    case 37:
    ;
    case 224:
    ;
    case 91:
    ;
    case 144:
    ;
    case 12:
    ;
    case 34:
    ;
    case 33:
    ;
    case 19:
    ;
    case 255:
    ;
    case 44:
    ;
    case 39:
    ;
    case 145:
    ;
    case 16:
    ;
    case 38:
    ;
    case 224:
    ;
    case 92:
      return z.s;
    case 0:
      return!z.R;
    default:
      return 166 > a.keyCode || 183 < a.keyCode
  }
};
z.Iv = function(a, b) {
  if("textContent" in a) {
    a.textContent = b
  }else {
    if(a.firstChild && a.firstChild.nodeType == z.Rc) {
      for(;a.lastChild != a.firstChild;) {
        a.removeChild(a.lastChild)
      }
      a.firstChild.data = b
    }else {
      (0,z.hv)(a), a.appendChild((0,z.lc)(a).createTextNode((0,window.String)(b)))
    }
  }
};
z.Jv = function(a, b) {
  var c = b.parentNode;
  c && c.replaceChild(a, b)
};
z.Kv = function(a, b, c) {
  z.Hd.call(this);
  this.Nq = a;
  this.TC = b || 0;
  this.Lf = c;
  this.UB = (0,z.ya)(this.hi, this)
};
z.Lv = function(a) {
  0 != a.Qd && a.pq()
};
z.$ = function() {
  z.io.call(this);
  this.jq = this.Kp()
};
z.Mv = function(a, b, c) {
  this.bv = a;
  this.or = b;
  this.cv = this.Pp = z.s;
  this.nq = c || {}
};
z.Nv = function(a, b) {
  this.CK = a;
  this.Lu = b
};
z.Ov = function(a, b) {
  z.io.call(this);
  this.Oe = this.id = a;
  this.Fb = z.n;
  this.we = {};
  this.Zg = {};
  for(var c in z.Pv) {
    this.Zg[c] = []
  }
  this.Yp = "";
  this.$e = {};
  this.$e[z.Qv] = 1;
  this.$e[z.Rv] = 1;
  this.Gq = this.ri = z.s;
  this.Am = new z.Kv(this.Uu, z.Sv, this);
  this.eq = {};
  for(var d in z.Tv) {
    this.eq[z.Tv[d]] = 0
  }
  z.R && (this.nd = new z.Kv(this.Hm, z.Uv, this));
  this.ne = new z.jo(this);
  this.hE = [];
  this.bh = z.Vv;
  this.zi = (0,z.jc)(b || window.document);
  this.ub = this.zi.H(this.id);
  this.nm = this.zi.Bb()
};
z.Wv = function(a) {
  var b = !(a.ctrlKey || a.metaKey) && a.keyCode in z.Xv;
  return(a.ctrlKey || a.metaKey) && a.keyCode in z.Yv || b
};
z.Zv = function(a, b) {
  a.bh = 2;
  a.field = b;
  a.Fb = (0,z.jc)(b);
  a.ri = z.s;
  a.Gq = z.s;
  b.setAttribute("g_editable", "true");
  b.setAttribute("role", "textbox")
};
z.$v = function(a) {
  a.bh = z.Vv;
  for(var b in a.we) {
    var c = a.we[b];
    c.Kp() || c.disable(a)
  }
  a.field = z.n;
  a.Fb = z.n
};
z.aw = function(a) {
  a.ne && (0,z.mo)(a.ne);
  if((z.Uq || z.Vq) && a.Fc() && a.ww()) {
    try {
      var b = a.Fb.Bb();
      b.removeEventListener("keydown", a.Kj, z.s);
      b.removeEventListener("touchend", a.Kj, z.s)
    }catch(c) {
    }
    delete a.Kj
  }
  if(z.Rd && a.Fc()) {
    try {
      b = a.Fb.Bb(), b.removeEventListener("focus", a.Sp, z.s), b.removeEventListener("blur", a.Rp, z.s)
    }catch(d) {
    }
    delete a.Sp;
    delete a.Rp
  }
  a.nd && a.nd.stop();
  a.Am.stop()
};
z.bw = function(a, b) {
  if(9 == b.keyCode && !a.dispatchEvent({type:"beforetab", shiftKey:b.shiftKey, altKey:b.altKey, ctrlKey:b.ctrlKey}) || z.R && b.metaKey && (37 == b.keyCode || 39 == b.keyCode)) {
    return b.preventDefault(), z.s
  }
  var c;
  if(!(c = b.charCode)) {
    c = (0,z.Wv)(b) ? z.m : !(!z.R || b.ctrlKey || b.metaKey || z.R && !b.charCode)
  }
  a.vq = c;
  a.vq && a.Ff();
  return z.m
};
z.cw = function(a, b, c) {
  var d = {};
  a = a.gn(8, b || "", d);
  (0,z.Sd)(c, d);
  (0,z.Ev)(c, a)
};
z.dw = function(a, b) {
  if(!b.altKey) {
    var c = z.ig ? b.metaKey : b.ctrlKey;
    if(c || z.ew[b.keyCode]) {
      var d = b.charCode || b.keyCode;
      17 != d && a.fk(5, b, window.String.fromCharCode(d).toLowerCase(), c) && b.preventDefault()
    }
  }
};
z.fw = function(a) {
  return(a = a.Fb && a.Fb.Bb()) && (0,z.wt)(a)
};
z.gw = function(a, b, c) {
  if(!(0,z.hw)(a, "selectionchange")) {
    var d = (0,z.fw)(a), d = d && (0,z.St)(d);
    a.Om = !!d && (0,z.Hc)(a.H(), d);
    a.dispatchEvent("cvc");
    a.dispatchEvent({type:"selectionchange", YI:b && b.type});
    a.fk(4, b, c)
  }
};
z.iw = function(a, b) {
  b && (a.nd && (0,z.Lv)(a.nd), a.$e[z.Qv] = 1);
  (0,z.jw)(a);
  a.$e[z.Rv] = 1
};
z.kw = function(a, b, c) {
  !b && a.nd && (0,z.Lv)(a.nd);
  a.$e[z.Qv] = 0;
  a.$e[z.Rv] = 0;
  b && a.Hm();
  c && a.Uu()
};
z.hw = function(a, b) {
  return!!a.$e[b] || a.eq[b] && 500 >= (0,z.no)() - a.eq[b]
};
z.lw = function(a, b, c, d) {
  (0,z.iw)(a, z.m);
  try {
    b.call(d)
  }finally {
    a.Sd() && (c ? (a.$e[z.Qv] = 0, a.Hm(), a.$e[z.Rv] = 0) : a.Me())
  }
};
z.jw = function(a) {
  a.nd && (0,z.Lv)(a.nd);
  (0,z.Lv)(a.Am)
};
z.mw = function(a) {
  (0,z.Tc)(a.target, "A") && a.preventDefault()
};
z.nw = function(a) {
  if(a.queryCommandValue("usinglorem")) {
    return" "
  }
  if(!a.Sd()) {
    var b = a.ub;
    b || a.vd.log(z.Gq, "Couldn't get the field element to read the contents", z.l);
    return b.innerHTML
  }
  var c = a.H(), b = c.cloneNode(z.s), c = c.innerHTML;
  z.L && c.match(/^\s*<script/i) && (c = " " + c);
  b.innerHTML = c;
  a.UC(11, b);
  return a.gn(10, b.innerHTML)
};
z.ow = function(a, b, c, d) {
  if(a.hk()) {
    a.vd.log(z.jf, "Can't set html while loading Trogedit", z.l)
  }else {
    d && a.execCommand("clearlorem");
    c && (0,z.iw)(a, z.s);
    var e = a.H();
    if(e) {
      if(a.Fc() && z.uc) {
        for(var f = e.ownerDocument.getElementsByTagName("HEAD"), h = f.length - 1;1 <= h;--h) {
          f[h].parentNode.removeChild(f[h])
        }
      }
    }else {
      e = a.ub
    }
    e && (0,z.cw)(a, b, e);
    d && a.execCommand("updatelorem");
    a.Sd() && (c ? (z.R && (0,z.Lv)(a.nd), (0,z.kw)(a)) : a.Me())
  }
};
z.pw = function(a) {
  z.L && (0,z.Gv)(a.Fb.Bb());
  z.qw != a.id && a.execCommand("updatelorem");
  if((z.Uq || z.Vq) && a.Fc() && a.ww()) {
    var b = a.Fb.Bb();
    a.Kj = (0,z.ya)(b.focus, b);
    b.addEventListener("keydown", a.Kj, z.s);
    b.addEventListener("touchend", a.Kj, z.s)
  }
  z.Rd && a.Fc() ? (a.Sp = (0,z.ya)(a.hq, a), a.Rp = (0,z.ya)(a.Tu, a), b = a.Fb.Bb(), b.addEventListener("focus", a.Sp, z.s), b.addEventListener("blur", a.Rp, z.s)) : (z.jr ? (a.addListener("focus", a.Vu), a.addListener(z.rr, a.Su)) : a.addListener("focus", a.hq), a.addListener("blur", a.Tu, z.R));
  z.R ? z.br || !a.Fc() ? (0,z.ko)(a.ne, a.H(), "DOMSubtreeModified", a.yq) : (b = a.Fb.Pc(), (0,z.ko)(a.ne, b, z.rw, a.yq, z.m), (0,z.ko)(a.ne, b, "DOMAttrModified", (0,z.ya)(a.yC, a, a.yq), z.m)) : (a.addListener(["beforecut", "beforepaste", "drop", "dragend"], a.Ff), a.addListener(["cut", "paste"], (0,z.Bv)(a.Me)), a.addListener("drop", a.qv));
  a.addListener(z.uc ? "dragend" : "dragdrop", a.qv);
  a.addListener("keydown", a.wq);
  a.addListener("keypress", a.AC);
  a.addListener("keyup", a.CC);
  a.jr = new z.Kv(a.EC, 250, a);
  z.hr && a.addListener("click", z.mw);
  a.addListener("mousedown", a.DC);
  a.xr ? ((0,z.ko)(a.ne, a.Fb.Pc(), "mouseup", a.sv), a.addListener("dragstart", a.zC)) : a.addListener("mouseup", a.sv);
  a.Bv();
  (0,z.kw)(a);
  a.vd.info("Dispatching load " + a.id);
  a.dispatchEvent("load");
  for(var c in a.we) {
    a.we[c].enable(a)
  }
};
z.sw = function(a) {
  if(!(0,z.la)(a.Iq) && (a.Iq = z.s, z.L && a.Fc())) {
    for(var b = a.zi.Bb();b != b.parent;) {
      try {
        b = b.parent
      }catch(c) {
        break
      }
    }
    b = b.location;
    a.Iq = "https:" == b.protocol && -1 == b.search.indexOf("nocheckhttps")
  }
  return a.Iq
};
z.tw = function(a) {
  a.oq && ((0,z.Mn)(a.oq), a.oq = z.n)
};
z.uw = function(a) {
  a = "padding:0;" + a.ub.style.cssText;
  (0,z.Ca)(a, ";") || (a += ";");
  a += "background-color:white;";
  z.L && (a += "overflow:visible;");
  return{frameBorder:0, style:a}
};
z.vw = function(a, b) {
  z.Ov.call(this, a, b)
};
z.ww = function(a, b) {
  z.Hd.call(this);
  this.Um = [];
  for(this.Sm = [];a && "BODY" != a.nodeName && a != b;) {
    for(var c = 0, d = a.previousSibling;d;) {
      d = d.previousSibling, ++c
    }
    this.Um.unshift(c);
    this.Sm.unshift(a.nodeName);
    a = a.parentNode
  }
};
z.xw = function(a, b) {
  for(var c, d = b, e = 0;c = a.Sm[e];++e) {
    if(d = d.childNodes[a.Um[e]], !d || d.nodeName != c) {
      return z.n
    }
  }
  return d
};
z.yw = function(a) {
  z.io.call(this);
  this.MB = a
};
z.zw = function() {
  z.io.call(this);
  this.jD = 100;
  this.Ec = [];
  this.gh = [];
  this.an = []
};
z.Aw = function(a, b, c) {
  if(b.length) {
    var d = b.pop();
    c.push(d);
    a.an.push({type:b == a.Ec ? "before_undo" : "before_redo", fv:b == a.Ec ? d.Hi : d.er, state:d});
    1 == a.an.length && a.hi();
    (0 == b.length || 1 == c.length) && a.dispatchEvent("state_change")
  }
};
z.Bw = function(a) {
  z.$.call(this);
  a = a || new z.zw;
  this.Kv && (0,z.Mn)(this.Kv);
  this.$c = a;
  this.Kv = (0,z.Dn)(this.$c, "state_change", this.dC, z.s, this);
  this.Sg = {};
  this.Qj = {};
  this.yv = z.n;
  this.QB = (0,z.ya)(this.ND, this)
};
z.Cw = function(a, b) {
  var c = b.Oe, d, e;
  b.queryCommandValue("usinglorem") ? (d = "", e = z.n) : (d = b.H().innerHTML, e = new z.Dw(b), e = !e.Pm ? z.n : e);
  var f = a.Qj[c];
  if(f) {
    if(f.ag == d) {
      return
    }
    if("" == d || "" == f.ag) {
      var h = b.gn(8, "", {});
      if(d == h && "" == f.ag || f.ag == h && "" == d) {
        return
      }
    }
    f.fr = d;
    f.MD = e;
    h = a.$c;
    if(0 == h.Ec.length || !f.Ab(h.Ec[h.Ec.length - 1])) {
      h.Ec.push(f);
      h.Ec.length > h.jD && h.Ec.shift();
      var k = h.gh.length;
      h.gh.length = 0;
      h.dispatchEvent({type:"state_added", state:f});
      (1 == h.Ec.length || k) && h.dispatchEvent("state_change")
    }
  }
  a.Qj[c] = new z.Ew(c, d, e, a.QB)
};
z.Ew = function(a, b, c, d) {
  z.yw.call(this, z.m);
  this.Vj = a;
  this.ow = d;
  this.ag = b;
  this.Iw = c
};
z.Dw = function(a) {
  this.Tg = a;
  var b = a.Fb.Bb();
  a = (a = (0,z.fw)(a)) && a.re() && a.Bb() == b ? a : z.n;
  if(z.$q) {
    if(b = a, this.Pm = z.s, b) {
      var c = (0,z.Je)(b), d = (0,z.Le)(b);
      if(c && d) {
        a = (0,z.Ke)(b);
        var c = new z.ww(c, this.Tg.H()), e = (0,z.Me)(b), d = new z.ww(d, this.Tg.H());
        b.se() ? (this.oa = d, this.pr = e, this.na = c, this.kq = a) : (this.oa = c, this.pr = a, this.na = d, this.kq = e);
        this.Pm = z.m
      }
    }
  }else {
    z.Zq && (b = a, this.Pm = z.s, b && (a = b.Od(0).sd(), (0,z.Hc)(this.Tg.H(), a.parentElement()) && (b = this.Tg.Fb.Pc().body.createTextRange(), b.moveToElementText(this.Tg.H()), d = a.duplicate(), d.collapse(z.m), d.setEndPoint("StartToStart", b), this.oa = (0,z.Fw)(d), a = a.duplicate(), a.setEndPoint("StartToStart", b), this.na = (0,z.Fw)(a), this.Pm = z.m)))
  }
};
z.Fw = function(a) {
  var b = a.duplicate(), c = a.text, d = c.length;
  b.collapse(z.m);
  b.moveEnd("character", d);
  for(var e, f = 10;(e = b.compareEndPoints("EndToEnd", a)) && !(d -= e, b.moveEnd("character", -e), --f, 0 == f);) {
  }
  a = 0;
  for(b = c.indexOf("\n\r");-1 != b;) {
    ++a, b = c.indexOf("\n\r", b + 1)
  }
  return d + a
};
z.Gw = function(a) {
  var b = a.tagName;
  if("BLOCKQUOTE" == b) {
    return(0,z.dc)(a, "pullquote") ? 7 : 6
  }
  if("LI" == b) {
    var c = a.parentNode && a.parentNode.tagName;
    if("UL" == c) {
      return 9
    }
    if("OL" == c) {
      return 10
    }
  }
  if("H2" == b) {
    return 2
  }
  if("H3" == b) {
    return 3
  }
  if("PRE" == b) {
    return 8
  }
  if("HR" == b) {
    return 5
  }
  if("P" == b || "DIV" == b || "FIGURE" == b) {
    return 0 !== a.getElementsByTagName("IMG").length ? 4 : 0 !== a.getElementsByTagName("iframe").length ? 11 : 1
  }
  (0,z.g)((0,window.Error)("invalid node " + b))
};
z.Hw = function(a) {
  var b = a.tagName;
  return"STRONG" == b || "B" == b ? 1 : "EM" == b || "I" == b ? 2 : "A" == b ? 3 : "SPAN" == b && a.getAttribute("name") && (0,z.dc)(a, "notes-highlight") ? 4 : z.n
};
z.Iw = function(a) {
  this.up = a;
  (0,z.bc)(this.up.getElementsByTagName("*"), z.Lf)
};
z.Jw = function(a, b) {
  var c = (0,z.wt)(window), c = (c = c && (0,z.Dv)(c, a)) && new z.bv(c);
  (0,z.Kw)(a);
  if(b) {
    (0,z.Lw)(a)
  }else {
    var d = z.m;
    a.lastChild && (d = (0,z.Nf)(a.lastChild) && (0,z.Lt)((0,z.Gw)(a.lastChild)));
    d && a.appendChild(window.document.createElement("P"))
  }
  (0,z.Sf)(a, z.sv);
  for(d = a.lastChild;d;d = d.previousSibling) {
    var e = d.nextSibling, f = d.tagName;
    if(e && f == e.tagName && ("UL" == f || "OL" == f)) {
      (0,z.Dc)(d, e.childNodes), (0,z.P)(e)
    }
  }
  c && c.restore()
};
z.Lw = function(a) {
  a = (0,z.eb)(a.childNodes);
  (0,z.xc)(a, function(a) {
    (0,z.zu)(a, z.m) && (0,z.P)(a)
  })
};
z.Kw = function(a) {
  var b = z.s, c = 1E4;
  do {
    for(var b = z.s, d = a.firstChild;d;d = d.nextSibling) {
      if((0,z.Mw)(d)) {
        b = z.m;
        c--;
        break
      }
    }
    0 > c && (0,z.g)((0,window.Error)("infinite loop"))
  }while(b);
  for(var b = [], e = z.s, c = (0,z.eb)(a.childNodes), d = 0;d < c.length;d++) {
    var f = c[d];
    if((0,z.Lf)(f)) {
      b.push(new z.Iw(f)), e = z.s
    }else {
      if(e && !(0,z.Nw)(f) || b.length && "SPAN" == f.tagName && !f.childNodes.length && f.id && (0,z.Ba)(f.id, "goog_")) {
        var h = (0,z.Ta)(b);
        h.up.appendChild(f);
        (0,z.bc)(h.up.getElementsByTagName("*"), z.Lf)
      }else {
        e = window.document.createElement("p"), e.appendChild(f), b.push(new z.Iw(e)), c[d + 1] ? a.insertBefore(e, c[d + 1]) : a.appendChild(e), e = !(0,z.Nw)(f)
      }
    }
  }
};
z.Nw = function(a) {
  return(0,z.Gc)(a) && ("IMG" == a.tagName || 0 !== a.getElementsByTagName("IMG").length)
};
z.Mw = function(a) {
  var b;
  b = [];
  if(b = (0,z.fv)(a, z.Lf, b, z.m) ? b[0] : z.l) {
    return(0,z.Fu)(b) ? (0,z.P)(b) : (0,z.Ow)(a, b), z.m
  }
  if((0,z.Gc)(a) && "UL" != a.tagName && "OL" != a.tagName) {
    b = a.getElementsByTagName("BR");
    for(var c = 0;c < b.length;c++) {
      var d = b[c], e = d.nextSibling;
      if(e && "BR" == e.tagName) {
        return(0,z.P)(e), (0,z.Ow)(a, d), (0,z.P)(d), z.m
      }
    }
  }
  return(b = 1 == a.nodeType && a.querySelectorAll("img")) && b.length && !(1 === b.length && (0,z.Pw)(a)) ? (b = b[0], c = window.document.createElement("FIGURE"), (0,z.Jv)(c, b), c.appendChild(b), (0,z.Ow)(a, c), z.m) : z.s
};
z.Pw = function(a) {
  for(a = a.firstChild;a;a = a.nextSibling) {
    if("FIGCAPTION" != a.tagName && (a.nodeType == z.Rc && 0 !== a.nodeValue.length || 1 == a.nodeType && !(0,z.Pw)(a))) {
      return z.s
    }
  }
  return z.m
};
z.Ow = function(a, b) {
  var c = (0,z.Fv)(b, a);
  (0,z.Ec)(c, a);
  for(var c = z.n, d = b;d != a && !c;d = d.parentNode) {
    c = d.previousSibling
  }
  c = c ? (0,z.Fv)(c, a) : a;
  d = c == a && (0,z.Lf)(a) && !b.nextSibling && b.parentNode == a;
  (0,z.$u)(b);
  if(!d || "P" == a.tagName && "P" != b.tagName) {
    (0,z.Ec)(b, a), b.appendChild(c)
  }
};
z.Qw = function(a) {
  var b = (0,z.Gw)(a), c = a.getAttribute("name");
  if(4 == b) {
    var b = a.getElementsByTagName("IMG")[0], d = (0,z.vu)(a.className);
    a = a.querySelector("figcaption");
    var e = (0,z.nv)((0,window.String)((0,z.Q)("miroUrl")), b.src || "") || (0,z.nv)((0,window.String)((0,z.Q)("miroUrl")), b.getAttribute("data-delayed-src") || ""), e = (new z.oh).Ye(e).ph((0,window.Number)(b.getAttribute("data-width") || 0)).oh((0,window.Number)(b.getAttribute("data-height") || 0)), c = new z.rt(c, "", b.getAttribute("data-id"), d, e);
    return a ? (0,z.Rw)(c, a) : c
  }
  if(11 == b) {
    return d = a.getElementsByTagName("iframe")[0], b = (0,z.vu)(a.className), a = a.querySelector("figcaption"), d = (0,z.Pt)((0,z.Qt)((new z.ph).rn(d.getAttribute("data-media-id") || ""), (0,window.Number)(d.getAttribute("data-width") || d.width) || 0), (0,window.Number)(d.getAttribute("data-height") || d.height) || 0), c = new z.qt(c, "", d, b), a ? (0,z.Rw)(c, a) : c
  }
  c = new z.ot(c, b, "");
  return 5 == b ? c : (0,z.Rw)(c, a)
};
z.Rw = function(a, b) {
  for(var c = new z.ke(b), d = z.n, e = [], f = [], h = 0, k = b.getAttribute("data-default-value");d = (0,z.Hu)(c);) {
    if(d != b) {
      if(d.nodeType == z.Rc) {
        d = d.nodeValue, d = 8 == a.type ? d.replace(/\xA0/g, " ") : d.replace(/[\s\xA0]/g, " "), e.push(d), h += d.length
      }else {
        if(1 == d.nodeType) {
          var p;
          -1 == c.vb ? (p = (0,z.Hw)(d), p != z.n && (p = f.pop(), p.end = h, (0,z.mt)(a, p)), "BR" == d.tagName && (e.push("\n"), h++)) : 1 == c.vb && (p = (0,z.Hw)(d), 3 == p ? (p = (0,z.yu)(d.href, z.s), f.push((0,z.et)(h, h, p, d.title, d.rel))) : 4 == p ? f.push((0,z.dt)(h, h, d.getAttribute("name"))) : p && f.push((0,z.$s)(p, h, h)))
        }
      }
    }
  }
  a.text = e.join("");
  (0,z.Ca)(a.text, "\n") && (a.text = a.text.substring(0, a.text.length - 1));
  k && a.text.toLowerCase() == k.toLowerCase() && (a.text = "");
  return a
};
z.Sw = function(a, b) {
  this.D = a;
  this.Jb = (0,z.tv)(this.D);
  this.On = {};
  for(var c = 0;c < this.Jb.length;c++) {
    var d = this.Jb[c].getAttribute("name");
    d && (this.On[d] = z.m)
  }
  this.xg = [];
  this.xg.length = this.Jb.length;
  b ? (c = (0,z.Tw)(this, (0,z.hu)(b, z.m)), d = (0,z.Tw)(this, (0,z.hu)(b, z.s)), c = new z.Uw(c, d, b.se())) : c = new z.Uw(new z.Vw(0, 0), new z.Vw(0, 0), z.s);
  this.Bd = c
};
z.Ww = function(a) {
  var b = a.H();
  (0,z.Jw)(b, z.s);
  (0,z.Xw)(a, z.m);
  return new z.Sw(b, (0,z.fw)(a))
};
z.Yw = function(a, b, c, d, e) {
  a.Bd = new z.Uw(new z.Vw(b, c), new z.Vw(d, e), z.s);
  (0,z.Zw)(a)
};
z.$w = function(a, b) {
  var c = a.Bd.start, d = a.Bd.end;
  if(!a.Bd.isCollapsed()) {
    var e = (0,z.ax)(a, c.$), f = (0,z.ax)(a, d.$);
    (0,z.bx)(a, function(a, b, c) {
      b < c && (0,z.lt)(a, b, c)
    }, a, z.s);
    if(e != f) {
      b && e.append(f);
      var h = d.$ - c.$ - 1;
      b && h++;
      for(var k = 0;k < h;k++) {
        (0,z.cx)(a, c.$ + 1)
      }
    }
    (0,z.dx)(a, c.$);
    e != f && !b && (0,z.dx)(a, c.$ + 1);
    d.$ = c.$;
    d.offset = c.offset
  }
};
z.bx = function(a, b, c, d) {
  var e = a.Bd.ga(), f = e.end, h = e.start;
  0 === f.offset && f.$ > h.$ && (f.$--, f.offset = (0,z.ax)(a, f.$).text.length);
  for(var f = e.start.$, h = e.end.$, k = f;k <= h;k++) {
    var p = (0,z.ax)(a, k);
    b.call(c, p, k == f ? e.start.offset : 0, k == h ? e.end.offset : p.text.length);
    d && (0,z.dx)(a, k)
  }
};
z.ax = function(a, b) {
  var c = a.xg[b];
  if(!c) {
    var d = a.Jb[b];
    d && (c = a.xg[b] = (0,z.Qw)(d))
  }
  return c
};
z.ex = function(a, b) {
  var c = (0,z.yv)(b, a.D);
  return c ? (0,z.Xa)(a.Jb, c) : -1
};
z.Tw = function(a, b) {
  var c = (0,z.ex)(a, b.z);
  return-1 == c ? new z.Vw(0, 0) : new z.Vw(c, (0,z.Xu)(b, a.Jb[c]))
};
z.fx = function(a, b) {
  var c = a.Jb[b.$];
  return c && (0,z.qv)(b.offset, c)
};
z.dx = function(a, b, c) {
  var d = a.Jb[b];
  c && (a.xg[b] = c);
  var e = (0,z.ax)(a, b);
  e.name || (e.name = (0,z.Mt)(a.On));
  c = (0,z.zc)((0,z.kv)(e) + (0,z.lv)(e) + (0,z.jv)(e));
  (0,z.Nf)(c) || (c = c.firstChild);
  (0,z.gx)(e, c);
  if(4 == e.type) {
    var f = (0,z.Qw)(d);
    if(!(4 != f.type || f.Ke != e.Ke)) {
      var f = d.getElementsByTagName("img")[0].src, h = c.getElementsByTagName("img")[0], k = h.src;
      f && k != f && (k && h.setAttribute("data-delayed-src", k), h.src = f)
    }
  }
  c.tagName != d.tagName && ("LI" == c.tagName || "LI" == d.tagName) ? "LI" == c.tagName ? (e = window.document.createElement(10 == e.type ? "OL" : "UL"), e.appendChild(c), (0,z.Jv)(e, d)) : (e = d.parentNode, f = (0,z.hx)(e, d), (0,z.Ec)(c, e), (0,z.P)(d), e.childNodes.length || (0,z.P)(e), f.childNodes.length || (0,z.P)(f)) : (0,z.Jv)(c, d);
  a.Jb[b] = c
};
z.Zw = function(a) {
  var b;
  b = a.Bd;
  var c = (0,z.fx)(a, b.start), d = (0,z.fx)(a, b.end);
  !c || !d ? b = z.n : (a = b.xb ? d : c, b = b.xb ? c : d, b = (0,z.At)(a.z, a.offset, b.z, b.offset));
  b && (b.select(), (0,z.wv)(b.ra()), (0,z.vv)(b.ra()))
};
z.cx = function(a, b) {
  (0,z.P)(a.Jb[b]);
  a.Jb.splice(b, 1);
  a.xg.splice(b, 1);
  var c = a.Bd.start;
  c.$ >= b && (c.$ = window.Math.max(c.$ - 1, 0));
  c = a.Bd.end;
  c.$ >= b && (c.$ = window.Math.max(c.$ - 1, 0))
};
z.ix = function(a, b, c) {
  var d = 0 === b ? z.n : a.Jb[b - 1];
  d && "LI" == d.tagName && ((d.nextElementSibling != z.l ? d.nextElementSibling : (0,z.gv)(d.nextSibling, z.m)) != z.n && (0,z.hx)(d.parentNode, d), d = d.parentNode);
  c.name || (c.name = (0,z.Mt)(a.On));
  var e = (0,z.zc)((0,z.kv)(c) + (0,z.lv)(c) + (0,z.jv)(c));
  (0,z.gx)(c, e);
  d ? (0,z.Ec)(e, d) : (d = a.D, d.insertBefore(e, d.childNodes[0] || z.n));
  a.Jb.splice(b, 0, (0,z.Of)(e) ? e.firstChild : e);
  a.xg.splice(b, 0, c);
  c = a.Bd.start;
  c.$ >= b && c.$++;
  a = a.Bd.end;
  a.$ >= b && a.$++
};
z.hx = function(a, b) {
  var c = window.document.createElement(a.tagName);
  for((0,z.Ec)(c, a);a.lastChild != b;) {
    c.insertBefore(a.lastChild, c.childNodes[0] || z.n)
  }
  return c
};
z.gx = function(a, b) {
  (0,z.Lt)(a.type) && (b.contentEditable = z.s);
  var c = b.querySelector("figcaption");
  if(c) {
    var d = 4 == a.type ? "Type caption for image (optional)" : 11 == a.type ? "Type caption for embed (optional)" : "";
    d && (c.contentEditable = z.m, c.setAttribute("data-default-value", d), a.text || ((0,z.N)(c, "default-value"), c.innerHTML = d))
  }
};
z.Uw = function(a, b, c) {
  this.start = a;
  this.end = b;
  this.xb = c
};
z.Vw = function(a, b) {
  this.$ = a;
  this.offset = b
};
z.jx = function() {
};
z.kx = function(a, b) {
  b.Ff();
  (0,z.lw)(b, a.Yy.bind(a, b));
  (0,z.gw)(b)
};
z.lx = function(a, b) {
  this.Fd = a;
  this.Yh = b
};
z.mx = function(a) {
  this.Fd = a;
  this.Yh = z.l
};
z.nx = function(a, b, c, d) {
  a = (0,z.qv)(b, a);
  c = (0,z.qv)(d, c);
  return a && c && (0,z.At)(a.z, a.offset, c.z, c.offset)
};
z.Xw = function(a, b) {
  var c = z.n, d = z.n;
  a instanceof z.Ov ? (c = a, d = c.H()) : d = a;
  var e = {}, f = [];
  (0,z.Sf)(d, function(a) {
    var b = a.getAttribute("name");
    b && !(b in e) ? e[b] = z.m : f.push(a)
  });
  var h = f.length;
  h && (d = function() {
    for(var a = 0;a < h;a++) {
      f[a].setAttribute("name", (0,z.Mt)(e))
    }
  }, !c || b ? d() : (0,z.lw)(c, d))
};
z.ox = function() {
  z.$.call(this);
  this.rg = {};
  this.Zs = z.n;
  this.Rl = z.s
};
z.px = function(a) {
  for(var b in a.rg) {
    delete a.rg[b]
  }
};
z.qx = function(a) {
  if((0,z.ob)(a.rg, z.m)) {
    if(a.Rl) {
      var b = a.Zs, c = (0,z.fw)(a.s());
      if(c && c.isCollapsed() && (c = (0,z.rx)(a, c), b && c && (b.z == c.z || b.z.getAttribute("name") && b.z.getAttribute("name") == c.z.getAttribute("name")) && c.offset > b.offset)) {
        if(b = (0,z.nx)(c.z, b.offset, c.z, c.offset)) {
          b.select();
          for(var d in a.rg) {
            a.rg[d] && a.execCommand(d)
          }
          if(d = (0,z.wt)()) {
            d.collapse(z.s), d.select()
          }
        }
      }
    }
    (0,z.px)(a)
  }
};
z.rx = function(a, b) {
  var c = a.s().H(), d = (0,z.hu)(b, z.s);
  return(c = (0,z.yv)(d.z, c)) ? new z.Wt(c, (0,z.Xu)(d, c)) : z.n
};
z.sx = function() {
  z.$.call(this)
};
z.tx = function(a) {
  z.io.call(this);
  this.Xu = a;
  this.Lq = new z.jo(this);
  this.Lf = new z.jo(this);
  z.ux && (0,z.ko)((0,z.ko)((0,z.ko)(this.Lf, a, "compositionstart", this.wC), a, "compositionend", this.vC), a, "compositionupdate", this.tv);
  (0,z.ko)((0,z.ko)((0,z.ko)(this.Lf, a, "textInput", this.FC), a, "text", this.tv), a, "keydown", this.wq)
};
z.vx = function(a, b) {
  z.An.call(this, a);
  this.reason = b
};
z.wx = function(a, b) {
  a.Yg || (z.uc && !z.ux && (0,z.ko)(a.Lq, a.Xu, "keyup", a.BC), a.Yg = z.m, a.dispatchEvent(new z.vx("startIme", b)))
};
z.xx = function(a, b) {
  a.Yg = z.s;
  (0,z.mo)(a.Lq);
  a.dispatchEvent(new z.vx("endIme", b))
};
z.yx = function(a) {
  switch(a.keyCode) {
    case 16:
    ;
    case 17:
      return z.s;
    default:
      return z.m
  }
};
z.zx = function() {
  z.$.call(this);
  this.Co = z.n
};
z.Ax = function() {
  z.$.call(this);
  this.zp = {};
  this.ml = {}
};
z.Bx = function() {
  z.$.call(this);
  this.ps = new z.Kv(this.Yx, 0, this);
  var a = (0,z.za)(z.Kd, this.ps);
  this.mk || (this.mk = []);
  this.mk.push((0,z.ya)(a, z.l));
  this.it = this.kt = z.n
};
z.Cx = function(a) {
  var b = a.target;
  return z.uc && "LI" == b.tagName && a.clientX < b.getBoundingClientRect().left
};
z.Dx = function(a) {
  z.$g.call(this);
  var b = a.id;
  b || (b = a.id = "editor_" + (0,z.sa)(a));
  this.Is = b;
  this.tj = [];
  this.bu = new z.Ax;
  this.aa(new z.sx);
  this.aa(new z.zx);
  this.aa(new z.Bx);
  this.sj = z.s
};
z.Ex = function() {
  z.$.call(this)
};
z.Fx = function(a) {
  z.$.call(this);
  this.jo = a;
  var b = window.document.createElement("div");
  b.innerHTML = a;
  this.Fx = b.textContent
};
z.Gx = function() {
  z.$.call(this)
};
z.Hx = function(a, b) {
  return(0,z.av)(b, function(a) {
    return a.getAttribute && a.getAttribute("data-default-value")
  }, a.s().H(), z.m)
};
z.Ix = function(a) {
  var b = (0,z.vz)(a);
  b && (0,z.Cv)(a.firstChild, z.m);
  return b
};
z.vz = function(a) {
  var b = a.getAttribute("data-default-value");
  return!!b && (0,z.zv)(a).trim().toLowerCase() == b.toLowerCase()
};
z.wz = function(a) {
  this.Ny = a
};
z.xz = function() {
};
z.yz = function(a) {
  var b = new z.xz;
  (0,z.qa)(a) ? b.Av = a : b.Av = function(b, d) {
    for(var e = 0, f = 0;f < a.length;f++) {
      e += a[f](b, d), d += e
    }
    return e
  };
  return b
};
z.zz = function(a, b) {
  if(".." == a.text.substring(window.Math.max(0, b - 2), b)) {
    return(0,z.Ht)(a, "…", b), (0,z.lt)(a, b - 2, b), -1
  }
  (0,z.Ht)(a, ".", b);
  return 1
};
z.Az = function(a, b) {
  var c = a.text.charAt(b - 1);
  if("-" == c) {
    c = a.text.charAt(b - 2);
    if("\x3c" == c) {
      return(0,z.Ht)(a, "←", b), (0,z.lt)(a, b - 2, b), -1
    }
    (0,z.Ht)(a, "—", b);
    (0,z.lt)(a, b - 1, b);
    return 0
  }
  (0,z.Ht)(a, "-", b);
  return 1
};
z.Bz = function(a, b) {
  if("—" == a.text.charAt(b - 1)) {
    return(0,z.Ht)(a, "→", b), (0,z.lt)(a, b - 1, b), 0
  }
  (0,z.Ht)(a, "\x3e", b);
  return 1
};
z.Cz = function(a, b) {
  var c = a.text, d = c.lastIndexOf(" ", b), c = c.substring(d + 1, b), e;
  if(e = c) {
    if(e = c.match("(?:(https?|ftp)://+|www\\.)\\w[:;,\\.?\\[\\]\\)!\\w/~%\x26\x3d+#-@!]*"), e = (e != z.n ? e[0] : "") == c) {
      a: {
        e = d + 1;
        for(var f = a.Ta, h = 0;h < f.length;h++) {
          var k = f[h];
          if(3 == k.C() && (0,z.bt)(k) < b && (0,z.at)(k) > e) {
            e = z.m;
            break a
          }
        }
        e = z.s
      }
      e = !e
    }
  }
  e && (0,z.mt)(a, (0,z.et)(d + 1, b, c, "", ""));
  return 0
};
z.Dz = function(a, b) {
  for(var c = a.text, d = b;" " == c[d];) {
    d--
  }
  var d = c.lastIndexOf(" ", d) + 1, e = c.indexOf(" ", d);
  -1 == e && (e = c.length);
  return{start:d, end:e, text:c.substring(d, e)}
};
z.Ez = function(a, b) {
  var c = (0,z.Dz)(a, b);
  (0,z.Jt)(a, function(b) {
    (0,z.bt)(b) <= c.start && ((0,z.at)(b) >= c.end && "contact" == (0,z.ed)(b, "rel")) && (0,z.It)(a, (0,z.$s)(3, c.start, c.end))
  });
  c.text && z.Fz.test(c.text) && (0,z.mt)(a, (0,z.et)(c.start, c.end, "/" + c.text, "", "contact"));
  return 0
};
z.Gz = function(a) {
  return function(b, c) {
    var d = (0,z.Dz)(b, c);
    return d.text && z.Fz.test(d.text) ? ((0,z.lt)(b, d.start, d.end), (0,z.Ht)(b, a, d.start), d.start + a.length - c) : 0
  }
};
z.Hz = function(a, b) {
  var c = a.text, d = c.charAt(b - 1);
  if((" " == d || " " == d) && 8 != a.type) {
    return 0
  }
  if("-" == d && (c = c.charAt(b - 2), " " == c || " " == c)) {
    (0,z.Ht)(a, "—", b), (0,z.lt)(a, b - 1, b)
  }
  (0,z.Ht)(a, " ", b);
  return 1
};
z.Iz = function(a, b) {
  return(0,z.Jz)(z.s, a, b)
};
z.Kz = function(a, b) {
  return(0,z.Jz)(z.m, a, b)
};
z.Jz = function(a, b, c) {
  var d = b.text.charAt(c - 1);
  (0,z.Ht)(b, z.Lz[d] ? a ? "“" : "‘" : !(0,window.isNaN)(d) ? a ? '"' : "'" : a ? "”" : "’", c);
  return 1
};
z.Mz = function() {
};
z.Nz = function(a) {
  z.$.call(this);
  this.Kn = a;
  this.Ep = z.s;
  this.Kb = window.document.createElement("div");
  this.Kb.setAttribute("contenteditable", "true");
  this.Kb.style.position = "absolute";
  this.Kb.style.top = "0px";
  this.Kb.style.left = "-9999px";
  this.Kb.style.width = "100px";
  this.Kb.style.height = "100px";
  this.Kb.tabIndex = -1;
  this.Kb.style.overflow = "hidden";
  window.document.body.appendChild(this.Kb)
};
z.Oz = function(a, b) {
  a.Kn && (b = (0,z.Qu)(b));
  return b
};
z.Pz = function(a, b) {
  a.s();
  (0,z.kx)(new z.wz(b), a.s());
  (0,z.kx)(new z.Mz, a.s());
  var c = (0,z.wt)();
  c && (c.collapse(z.s), c.select())
};
z.Qz = function(a, b) {
  var c = b.clipboardData;
  if(!c || !c.types || !(0,z.na)(c.types)) {
    return z.n
  }
  if(a.Kn && !a.Ep) {
    if(-1 !== (0,z.Xa)(c.types, "text/html")) {
      return c.getData("text/html")
    }
    if(1 < c.types.length) {
      return z.n
    }
  }
  return-1 !== (0,z.Xa)(c.types, "text/plain") ? (0,z.pv)(b.clipboardData.getData("text/plain")) : z.n
};
z.Rz = function(a, b) {
  for(var c = z.n, d = a.firstChild;d;d = c) {
    if(c = d.nextSibling, d.nodeType != z.Rc) {
      if(1 != d.nodeType) {
        (0,z.P)(d)
      }else {
        var e = b.Dc[d.tagName] || b.fq;
        e || (0,z.g)((0,window.Error)("Missing default tag policy"));
        if(e.Rf) {
          if(e.Tc) {
            for(var f = (0,z.oa)(e.Tc) ? e.Tc : "", f = f && f != d.tagName ? window.document.createElement(f) : z.n, h = d.attributes.length - 1;0 <= h;h--) {
              var k = d.attributes[h].nodeName, p = d.getAttribute(k);
              (p = (0,z.Nt)(e, k, p)) ? (f || d).setAttribute(k, p) : f || d.removeAttribute(k)
            }
            f && ((0,z.Dc)(f, d.childNodes), (0,z.Ec)(f, d), (0,z.P)(d), d = f);
            (0,z.Rz)(d, e.mc)
          }else {
            for(;d.lastChild;) {
              (0,z.Ec)(d.lastChild, d)
            }
            c = d.nextSibling;
            (0,z.P)(d)
          }
        }else {
          (0,z.P)(d)
        }
      }
    }
  }
};
z.Sz = function(a) {
  z.$.call(this);
  this.EA = a
};
z.Tz = function() {
  z.$.call(this)
};
z.Uz = function(a, b) {
  this.uA = a;
  this.mx = b
};
z.Vz = function(a) {
  var b = (0,z.wt)();
  return!b.isCollapsed() && !!(0,z.yv)(b.wc(), a.H())
};
z.Wz = function(a) {
  z.$.call(this);
  this.gx = a
};
z.Xz = function(a, b) {
  var c = 34 == b, d = 39 == b, e = 45 == b, f = 46 == b, h = 62 == b, k = 40 == b, p = a.s();
  if(!c && !d && !e && !h && !f && !k) {
    return z.s
  }
  var q = (0,z.Ww)(p), z$ = q.getSelection().start.$;
  if(8 == (0,z.ax)(q, z$).type) {
    if((0,z.Vz)(p)) {
      if(c) {
        return(0,z.kx)(new z.Uz('"', '"'), p), z.m
      }
      if(k) {
        return(0,z.kx)(new z.Uz("(", ")"), p), z.m
      }
    }
    return z.s
  }
  return c ? ((0,z.Vz)(p) ? (0,z.kx)(new z.Uz("“", "”"), p) : (0,z.kx)((0,z.yz)(z.Kz), p), z.m) : d ? ((0,z.kx)((0,z.yz)(z.Iz), p), z.m) : e ? ((0,z.kx)((0,z.yz)(z.Az), p), z.m) : h ? ((0,z.kx)((0,z.yz)(z.Bz), p), z.m) : f ? ((0,z.kx)((0,z.yz)(z.zz), p), z.m) : k && (0,z.Vz)(p) ? ((0,z.kx)(new z.Uz("(", ")"), p), z.m) : z.s
};
z.Yz = function(a, b) {
  z.Dx.call(this, a);
  this.aa(new z.Fx(b));
  this.aa(new z.Gx);
  this.aa(new z.Nz(z.s));
  this.aa(new z.Sz(z.Br));
  this.aa(new z.Tz);
  this.aa(new z.Wz(z.s));
  this.sj = z.m
};
z.Zz = function(a, b) {
  z.$.call(this);
  this.bd = a;
  this.Mr = b
};
z.$z = function() {
  z.bd.call(this)
};
z.aA = function() {
  z.bd.call(this)
};
z.bA = function() {
  z.bd.call(this)
};
z.cA = function(a) {
  return(0,z.ed)(a, "backgroundSize")
};
z.dA = function() {
  return"This operation was canceled by the user."
};
z.eA = function() {
  return"The image you are trying to upload is too big. Please resize it so that it is under 5MB."
};
z.fA = function() {
  return"The file you tried to upload is a type we don’t understand.  Supported formats are JPEG, PNG, and GIF."
};
z.gA = function() {
  z.ng.call(this)
};
z.hA = function(a) {
  z.ng.call(this);
  this.t = a;
  this.J = a.get("dialog")
};
z.iA = function(a, b, c) {
  for(var d = [], e = 0;e < c;e++) {
    d.push(a[b + e])
  }
  return d
};
z.jA = function(a, b) {
  return(0,z.iA)(a, b, 2).map(function(a) {
    return a.toString(16)
  }).join("")
};
z.kA = function(a, b, c) {
  return(a[b + (c ? 1 : 0)] << 8) + a[b + (c ? 0 : 1)]
};
z.lA = function(a, b, c) {
  a = (((a[b + (c ? 3 : 0)] << 8) + a[b + (c ? 2 : 1)] << 8) + a[b + (c ? 1 : 2)] << 8) + a[b + (c ? 0 : 3)];
  0 > a && (a += 4294967296);
  return a
};
z.mA = function(a, b) {
  var c = new z.vb, d = new window.FileReader;
  d.onload = function(b) {
    var d = (0,z.nA)(new window.Uint8Array(b.target.result)), h = window.URL.createObjectURL(a);
    if(1 == d) {
      c.Ga(h)
    }else {
      var k = new window.Image;
      k.onload = function() {
        var a, b;
        1E3 < k.width ? (a = 1E3, b = 1E3 * k.height / k.width) : (a = k.width, b = k.height);
        var e = window.document.createElement("canvas"), U = e.getContext("2d");
        6 == d || 8 == d ? (e.width = b, e.height = a) : (e.width = a, e.height = b);
        var F = window.Math.max(a, b);
        U.translate(F / 2, F / 2);
        switch(d) {
          case 3:
            U.rotate(window.Math.PI);
            break;
          case 6:
            U.rotate(window.Math.PI / 2);
            break;
          case 8:
            U.rotate(1.5 * window.Math.PI)
        }
        var ab = -a / 2, Ma = -b / 2;
        F == a ? Ma -= (b - F) / 2 : ab -= (a - F) / 2;
        U.drawImage(k, ab, Ma, a, b);
        a = e.toDataURL();
        c.Ga(a);
        window.URL.revokeObjectURL(h)
      };
      k.src = h
    }
  };
  d.readAsArrayBuffer(a);
  b || (0,z.G)(c, function(a) {
    (0,window.setTimeout)(function() {
      window.URL.revokeObjectURL(a)
    }, 5E3);
    return a
  });
  return c
};
z.nA = function(a) {
  var b;
  b: {
    b = [];
    for(var c = 0;6 > c;c++) {
      b.push("Exif\x00\x00".charCodeAt(c))
    }
    for(var d = c = 0;c < a.length && 2E4 > c;) {
      if(d == b.length) {
        b = c - d;
        break b
      }
      a[c] == b[d] ? d++ : d = 0;
      c++
    }
    b = -1
  }
  if(0 > b) {
    a = {}
  }else {
    b += 6;
    c = "4949" == (0,z.jA)(a, b);
    b = b + 2 + 2;
    b += (0,z.lA)(a, b, c) - 4;
    d = (0,z.kA)(a, b, c);
    b += 2;
    for(var e = {}, f = 0;f < d;f++) {
      var h = (0,z.kA)(a, b, c);
      e[h] = {eK:h, type:(0,z.kA)(a, b + 2, c), count:(0,z.lA)(a, b + 4, c), data:(0,z.iA)(a, b + 8, 4)};
      b += 12
    }
    e.fC = c;
    a = e
  }
  return a[274] ? (0,z.kA)(a[274].data, 0, a.fC) : 1
};
z.oA = function(a, b) {
  z.ng.call(this);
  this.t = a;
  this.fj = a.get("image");
  this.J = a.get("dialog");
  this.D = b;
  this.fo = this.D.getAttribute("data-url") || "";
  var c = (new z.bA).Ye(this.D.getAttribute("data-id") || "").ph((0,window.Number)(this.D.getAttribute("data-width") || "0")).oh((0,window.Number)(this.D.getAttribute("data-height") || "0")), d = this.D.getAttribute("data-image-style") || z.pA || "";
  this.Hb = (0,z.gd)(c, "backgroundSize", d);
  this.rl = z.Nm.ga(this.Hb);
  this.Cj = "resample";
  c = z.Nr ? new z.gA : new z.hA(this.t);
  c.h("start", this.tA, this);
  c.h("progress", this.sA, this);
  c.h("success", this.pA, this);
  c.h("error", this.qA, this);
  c.h("abort", this.oA, this);
  c.h("preview", this.rA, this);
  this.fm = c;
  this.xa = [];
  this.Ot = this.D.querySelector(".progress-bar");
  this.Bg = this.D.querySelector(".upload-feedback-preview");
  (0,z.qA)(this)
};
z.rA = function(a, b) {
  a.Ot && (a.Ot.style.width = b + "%")
};
z.sA = function(a, b, c, d) {
  a.xa.push((0,z.T)(b, c, d, a))
};
z.tA = function(a, b) {
  b = b || "";
  a.Hb.Ye(b);
  b ? (a.Nh(), a.D.setAttribute("data-id", b)) : a.D.removeAttribute("data-id");
  (0,z.qA)(a);
  var c = (0,z.uA)(a);
  (0,z.vA)(a, c);
  a.F("change", a, {id:b, url:c})
};
z.wA = function(a) {
  (0,z.tA)(a, a.rl.xc());
  (0,z.vA)(a, (0,z.uA)(a));
  (0,z.xA)(a, (0,z.cA)(a.rl));
  a.Hb.ph(a.rl.tq()).oh(a.rl.sq())
};
z.qA = function(a) {
  a.Hb.xc() ? a.Uh("has-image") : a.Uh("no-image");
  (0,z.rA)(a, 0)
};
z.xA = function(a, b) {
  if(a.Hb.xc()) {
    var c = (0,z.cA)(a.Hb);
    (0,z.gd)(a.Hb, "backgroundSize", b);
    var d = (0,z.uA)(a);
    (0,z.Bb)(a.fj.load(d), function() {
      (0,z.cA)(this.Hb) == b && ((0,z.O)(this.D, "background-size-" + c), (0,z.N)(this.D, "background-size-" + b), (0,z.vA)(this, d))
    }, a)
  }
};
z.vA = function(a, b) {
  if(b != a.fo) {
    var c = (0,z.yA)(a);
    if(a.fo = b) {
      "IMG" == c.tagName ? (c.src = b, c.style.display = "") : c.style.backgroundImage = "url(" + b + ")";
      var d = new window.Image;
      d.onload = function() {
        if(this.fo == b) {
          var a = d.width / d.height;
          this.Hb.ph(d.width).oh(d.height);
          this.Pr && (0,z.xA)(this, 1.25 <= a ? "cover" : z.pA)
        }
      }.bind(a);
      d.src = b
    }else {
      "IMG" == c.tagName ? c.style.display = "none" : c.style.backgroundImage = "", a.Hb.ph(0).oh(0)
    }
  }
};
z.yA = function(a) {
  if((0,z.dc)(a.D, "picker-target") || (0,z.dc)(a.D, "cover-picker-target")) {
    return a.D
  }
  var b = "cover" == (0,z.cA)(a.Hb) ? ".cover-picker-target" : ".picker-target";
  return a.D.querySelector(b) || a.D.getElementsByTagName("img")[0] || a.D
};
z.uA = function(a, b, c) {
  b = {imageId:b || a.Hb.xc()};
  c = c || (0,z.cA)(a.Hb);
  if("object" == typeof a.Cj) {
    a = a.Cj["*"] || a.Cj[c];
    b.strategy = a.type;
    for(var d in a) {
      b[d] = a[d]
    }
  }else {
    b.strategy = a.Cj
  }
  return(0,z.sd)(z.ki, b)
};
z.zA = function(a) {
  z.Hd.call(this);
  var b = (0,z.wt)();
  this.hu = b && new z.AA((0,z.hu)(b, z.m), a);
  this.Rx = b && new z.AA((0,z.hu)(b, z.s), a)
};
z.AA = function(a, b) {
  this.It = a;
  this.Vx = b;
  var c = (0,z.yv)(a.z, b);
  this.Or = (this.Ln = c) && c.getAttribute("name");
  this.nt = c ? (0,z.Xu)(a, c) : -1
};
z.BA = function(a) {
  var b = window.document.body;
  return(0,z.Hc)(b, a.It.z) ? a.It : a.Ln && (0,z.Hc)(b, a.Ln) ? (0,z.qv)(a.nt, a.Ln) : a.Or && (b = (0,z.rv)(a.Vx, a.Or)) ? (0,z.qv)(a.nt, b) : z.n
};
z.CA = function(a) {
  this.id = a.id;
  this.anchor = a.anchor;
  this.startIndex = (0,window.Number)(a.startIndex);
  this.endIndex = (0,window.Number)(a.endIndex);
  this.content = a.content
};
z.DA = function(a) {
  z.$.call(this);
  this.ju = this.ie = this.To = this.uo = z.s;
  this.jb = "";
  this.xp = this.Ql = z.n;
  this.xa = [];
  this.ft = [];
  this.fa = a.get("request");
  this.Z = a.get("app");
  this.lb = z.n
};
z.EA = function(a) {
  var b = a.lb.querySelector(".active");
  b && (b = b.getAttribute("data-username"), (0,z.kx)((0,z.yz)([(0,z.Gz)(b), z.Ez]), a.s()));
  (0,z.FA)(a)
};
z.GA = function(a, b) {
  if(a.ie) {
    switch(b.keyCode) {
      case 13:
      ;
      case 9:
      ;
      case 27:
        b.preventDefault();
        break;
      case 38:
        b.preventDefault();
        var c = a.lb.querySelector(".active");
        c && (0,z.O)(c, "active");
        (c = c && c.previousSibling) || (c = a.lb.querySelector(".typeahead-item:last-child"));
        (0,z.N)(c, "active");
        break;
      case 40:
        b.preventDefault(), (c = a.lb.querySelector(".active")) && (0,z.O)(c, "active"), (c = c && c.nextSibling) || (c = a.lb.querySelector(".typeahead-item")), (0,z.N)(c, "active")
    }
    b.stopPropagation()
  }
};
z.FA = function(a) {
  a.ie && (0,z.P)(a.lb);
  a.ie = z.s
};
z.HA = function(a, b, c, d, e) {
  z.Dx.call(this, b);
  this.t = a;
  this.aa(new z.Fx(c));
  this.aa(new z.Gx);
  this.aa(new z.Nz(z.s));
  this.aa(new z.Sz(z.Cr));
  1E3 <= window.innerWidth && (this.Hj = new z.DA(a), this.aa(this.Hj));
  this.aa(new z.Wz(z.s));
  this.aa(new z.Zz(d, z.m));
  this.sj = z.m;
  this.bd = d;
  this.Va = a.get("request");
  this.J = a.get("dialog");
  this.mj = e;
  this.ca()
};
z.IA = function(a) {
  a.nh(a.ng);
  a.F("cancel")
};
z.JA = function(a, b, c, d) {
  z.HA.call(this, a, b, "Leave a note", 400, d || z.n);
  this.w = c
};
z.KA = function(a, b, c) {
  a.Mn = b;
  a.Nr = c
};
z.LA = function(a, b, c, d) {
  a.Bo = b;
  a.Ao = c;
  a.Gs = d
};
z.MA = function(a, b, c, d, e) {
  z.HA.call(this, a, b, "Leave a reply", 200, d);
  this.w = c;
  this.sp = e || z.n
};
z.NA = function(a, b, c) {
  z.$g.call(this);
  this.lt = {};
  this.Dh = {};
  this.Jt = {};
  this.Ge = z.n;
  this.t = a;
  this.Va = a.get("request");
  this.w = b;
  this.Os = c;
  this.Xi = z.s
};
z.OA = function(a, b) {
  var c = b && b.getAttribute("name");
  if(!c || !b) {
    return z.n
  }
  var d = a.Jt[c];
  return d && !a.Os ? d : a.Jt[c] = (0,z.Qw)(b)
};
z.PA = function(a, b, c) {
  a = (0,z.QA)(a, c);
  return(0,z.Fk)(a, "id", b)
};
z.QA = function(a, b) {
  var c = a.lt[b];
  c || (c = a.lt[b] = new z.Ek, a.F("new_note_list", c, a));
  return c
};
z.RA = function(a, b) {
  if(!b) {
    return z.s
  }
  var c = b.text;
  if(a.content == c.substring(a.startIndex, a.endIndex)) {
    return z.m
  }
  var d = (0,window.RegExp)((0,z.Oa)(a.content), "gi"), e = d.exec(c), c = e && d.exec(c);
  return e && !c ? (c = a.endIndex - a.startIndex, a.startIndex = e.index, a.endIndex = e.index + c, a.content = e[0], z.m) : z.s
};
z.SA = function(a, b, c) {
  var d = (0,z.dh)(b, "id"), e = (0,z.QA)(a, (0,z.dh)(b, "anchor")), f = e ? e.indexOf(b) : -1;
  b.get("state");
  b.set("state", c);
  "HIDDEN" == c && (0,z.fh)(b);
  var h = e ? e.indexOf(b) : -1;
  return{cb:a.Va.put("/p/" + a.w + "/notes/" + d + "/state", {state:c}, {V:z.m}), pw:function() {
    -1 == h && (-1 == f ? e.add(b) : e.Mg(b, f))
  }}
};
z.TA = function(a, b, c) {
  this.range = a;
  this.anchor = b;
  this.yu = b.getAttribute("name");
  this.lc = c
};
z.UA = function(a) {
  return'\x3cspan class\x3d"notes-marker-icon icons icons-notes"\x3e\x3c/span\x3e' + ("remove" == a.count ? '\x3cspan class\x3d"icons icons-remove"\x3e\x3c/span\x3e' : 0 == a.count ? '\x3cspan class\x3d"notes-marker-nocount"\x3e+\x3c/span\x3e' : '\x3cspan class\x3d"notes-marker-count"\x3e' + (0,z.X)(a.count) + "\x3c/span\x3e")
};
z.VA = function(a, b, c) {
  return'\x3cbutton class\x3d"btn btn-chromeless notes-dismiss" data-action\x3d"dismiss-note"\x3e' + (0,z.UA)({count:"remove"}) + '\x3c/button\x3e\x3cdiv class\x3d"notes-list-fade"\x3e\x3c/div\x3e\x3cdiv class\x3d"notes-list"\x3e\x3cdiv class\x3d"notes-items"\x3e\x3c/div\x3e' + (c.isAuthenticated ? '\x3cdiv class\x3d"notes-new-note"\x3e\x3cbutton class\x3d"btn btn-chromeless notes-add" data-action\x3d"start-note"\x3e\x3cspan class\x3d"notes-add-icon icons icons-add-circled"\x3e\x3c/span\x3e\x3cspan class\x3d"notes-add-text"\x3eLeave a note for \x3cspan class\x3d"notes-post-creator"\x3e\x3c/span\x3e\x3c/span\x3e\x3cspan class\x3d"notes-add-creator-text"\x3eLeave a note\x3c/span\x3e\x3c/button\x3e\x3cdiv class\x3d"notes-edit notes-edit-mode"\x3e' + 
  (0,z.yi)({Cm:z.m, Wb:"notes-avatar notes-author-icon", user:c.currentUser}, c) + '\x3cdiv class\x3d"notes-author"\x3e' + (0,z.X)(c.currentUser.name) + '\x3c/div\x3e\x3cdiv class\x3d"notes-note-editor notes-editor"\x3e\x3c/div\x3e\x3cdiv class\x3d"notes-foot no-user-select"\x3e\x3cbutton class\x3d"btn btn-chromeless btn-primary notes-no-separator notes-edit-action" data-action\x3d"save-note"\x3eSave\x3c/button\x3e\x3cbutton class\x3d"btn btn-chromeless notes-edit-action" data-action\x3d"cancel-note"\x3eCancel\x3c/button\x3e\x3c/div\x3e\x3cdiv class\x3d"notes-disclaimer"\x3eThis note is only visible to you and the author, unless the author chooses to make it public.\x3cdiv\x3e\x3c/div\x3e\x3c/div\x3e' : 
  (0,z.WA)({Hw:"note"})) + "\x3c/div\x3e"
};
z.XA = function(a, b, c) {
  var d = a.note.author ? a.note.author.userId : z.n;
  b = '\x3cdiv class\x3d"notes-note-inner"\x3e\x3cdiv class\x3d"notes-note-main"\x3e' + ('\x3cspan class\x3d"notes-state-border"\x3e\x3c/span\x3e\x3cdiv class\x3d"notes-controls"\x3e' + (a.canAdminister ? '\x3cul class\x3d"notes-state notes-state-dropdown" data-action\x3d"toggle-note-dropdown"\x3e' + ("NEW" == a.note.state ? '\x3cli\x3e\x3cspan class\x3d"icons icons-invisible"\x3e\x3c/span\x3ePrivate\x3cspan class\x3d"icons notes-state-down-icon"\x3e\x3c/span\x3e\x3c/li\x3e\x3cli data-action\x3d"approve-note" data-action-value\x3d"' + 
  (0,z.Y)(a.note.noteId) + '"\x3e\x3cspan class\x3d"icons icons-group"\x3e\x3c/span\x3ePublic\x3c/li\x3e' : "PUBLIC" == a.note.state ? '\x3cli\x3e\x3cspan class\x3d"icons icons-group"\x3e\x3c/span\x3ePublic\x3cspan class\x3d"icons notes-state-down-icon"\x3e\x3c/span\x3e\x3c/li\x3e\x3cli data-action\x3d"unapprove-note" data-action-value\x3d"' + (0,z.Y)(a.note.noteId) + '"\x3e\x3cspan class\x3d"icons icons-invisible"\x3e\x3c/span\x3ePrivate\x3c/li\x3e' : "") + (a.$q.userId != d ? '\x3cli data-action\x3d"hide-note" data-action-value\x3d"' + 
  (0,z.Y)(a.note.noteId) + '"\x3e\x3cspan class\x3d"icons icons-remove"\x3e\x3c/span\x3eDismiss\x3c/li\x3e' : "") + "\x3c/ul\x3e" : "PUBLIC" != a.note.state ? '\x3cul class\x3d"notes-state"\x3e\x3cli data-tooltip\x3d"This note is only visible to you and the author, unless the author chooses to make it public."\x3e\x3cspan class\x3d"icons icons-invisible"\x3e\x3c/span\x3ePrivate\x3c/li\x3e\x3c/ul\x3e' : "") + ("PUBLIC" == a.note.state ? '\x3ca href\x3d"#' + (0,z.Y)(a.note.anchor) + "-" + (0,z.Y)(a.note.noteId) + 
  '" class\x3d"notes-link icons icons-link" data-tooltip\x3d"Click to update the address bar with this note’s shareable URL"\x3e\x3c/a\x3e' : "") + "\x3c/div\x3e" + (0,z.yi)({Ia:"notes-avatar", Wb:"notes-author-icon", user:a.note.author}, c) + '\x3cdiv class\x3d"notes-author"\x3e' + (d ? '\x3ca href\x3d"/@' + (0,z.Y)(a.note.author.username) + '" title\x3d"Go to the profile of ' + (0,z.Y)(a.note.author.name) + '"\x3e' + (0,z.X)(a.note.author.name) + "\x3c/a\x3e" : "\x3ci\x3eA Deleted User\x3c/i\x3e") + 
  '\x3c/div\x3e\x3cdiv class\x3d"notes-content"\x3e' + (0,z.$h)((0,window.String)(a.note.Ug).replace(/(\r\n|\r|\n)/g, "\x3cbr\x3e")) + "\x3c/div\x3e" + (c.isAuthenticated ? '\x3cdiv class\x3d"notes-foot no-user-select"\x3e' + (d == c.currentUser.userId ? '\x3cbutton class\x3d"btn btn-chromeless notes-text-action" data-action\x3d"edit-note" data-action-value\x3d"' + (0,z.Y)(a.note.noteId) + '"\x3eEdit\x3c/button\x3e\x3cbutton class\x3d"btn btn-chromeless btn-primary notes-no-separator notes-edit-action" data-action\x3d"save-note" data-action-value\x3d"' + 
  (0,z.Y)(a.note.noteId) + '"\x3eSave\x3c/button\x3e\x3cbutton class\x3d"btn btn-chromeless notes-edit-action" data-action\x3d"cancel-note" data-action-value\x3d"' + (0,z.Y)(a.note.noteId) + '"\x3eCancel\x3c/button\x3e\x3cbutton class\x3d"btn btn-chromeless notes-edit-action" data-action\x3d"delete-note" data-action-value\x3d"' + (0,z.Y)(a.note.noteId) + '"\x3eDelete\x3c/button\x3e' : "") + "\x3c/div\x3e" : "") + "\x3c/div\x3e");
  var e = a.note.replies.length, f = window.Math.max(a.note.replies.length - a.Tf, 0);
  if(e) {
    b += '\x3cdiv class\x3d"notes-replies ' + (0 < f ? "notes-replies-hidden" : "") + '"\x3e\x3cdiv class\x3d"notes-replies-inner"\x3e';
    if(0 < f) {
      b += '\x3cbutton data-action\x3d"show-hidden-note-replies" class\x3d"btn btn-chromeless notes-replies-hidden-btn"\x3eView ' + (0,z.X)(f) + " " + (a.Tf ? "more" : "") + " " + (1 < f ? "replies" : "reply") + '\x3c/button\x3e\x3cdiv class\x3d"notes-replies-hidden-container"\x3e';
      for(var h = a.note.replies, k = h.length, p = 0;p < k;p++) {
        var q = h[p];
        b += p < f ? (0,z.YA)((0,z.Gh)(a, {nc:q}), c) : ""
      }
      b += "\x3c/div\x3e"
    }
    h = a.note.replies;
    k = h.length;
    for(p = 0;p < k;p++) {
      q = h[p], b += p >= f ? (0,z.YA)((0,z.Gh)(a, {nc:q}), c) : ""
    }
    b += "\x3c/div\x3e\x3c/div\x3e"
  }
  return b += '\x3cdiv class\x3d"notes-replies-footer"\x3e' + (c.isAuthenticated ? '\x3cdiv class\x3d"notes-reply notes-reply-edit notes-edit-mode"\x3e' + (0,z.yi)({Ia:"notes-avatar", Wb:"notes-author-icon", user:c.currentUser}, c) + '\x3cdiv class\x3d"notes-author"\x3e\x3ca href\x3d"/@' + (0,z.Y)(c.currentUser.username) + '" title\x3d"Go to the profile of ' + (0,z.Y)(c.currentUser.name) + '"\x3e' + (0,z.X)(c.currentUser.name) + '\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d"notes-reply-editor notes-editor"\x3eLeave a reply\x3c/div\x3e\x3cdiv class\x3d"notes-foot no-user-select"\x3e\x3cbutton class\x3d"btn btn-chromeless btn-primary notes-no-separator notes-edit-action" data-action\x3d"save-reply" data-action-value\x3d"' + 
  (0,z.Y)(a.note.noteId) + '"\x3eSave\x3c/button\x3e\x3cbutton class\x3d"btn btn-chromeless notes-edit-action" data-action\x3d"cancel-reply" data-action-value\x3d"' + (0,z.Y)(a.note.noteId) + '"\x3eCancel\x3c/button\x3e\x3c/div\x3e\x3c/div\x3e\x3cbutton class\x3d"btn btn-chromeless btn-primary notes-link-reply" data-action\x3d"start-reply" data-action-value\x3d"' + (0,z.Y)(a.note.noteId) + '"\x3e' + (e || !a.note.author ? "Reply to conversation" : d == c.currentUser.userId ? "Leave a reply" : "Reply to " + 
  (0,z.X)(a.note.author.name)) + "\x3c/button\x3e" : (0,z.WA)({Hw:"reply"})) + "\x3c/div\x3e\x3c/div\x3e"
};
z.YA = function(a, b) {
  return'\x3cdiv class\x3d"notes-reply"\x3e' + (a.canAdminister && a.nc.author.userId != b.currentUser.userId ? '\x3cdiv class\x3d"notes-hide-reply" data-action\x3d"hide-reply" data-action-value\x3d"' + (0,z.Y)(a.note.noteId) + "," + (0,z.Y)(a.nc.replyId) + '" data-tooltip\x3d"Dismiss this reply"\x3e\x3cspan class\x3d"icons icons-remove"\x3e\x3c/span\x3e\x3c/div\x3e' : "") + (0,z.yi)({Ia:"notes-avatar", Wb:"notes-author-icon", user:a.nc.author}, b) + '\x3cdiv class\x3d"notes-author"\x3e' + (a.nc.author ? 
  '\x3ca href\x3d"/@' + (0,z.Y)(a.nc.author.username) + '" title\x3d"Go to the profile of ' + (0,z.Y)(a.nc.author.name) + '"\x3e' + (0,z.X)(a.nc.author.name) + "\x3c/a\x3e" : "\x3ci\x3eA Deleted User\x3c/i\x3e") + '\x3c/div\x3e\x3cdiv class\x3d"notes-content"\x3e' + (0,z.$h)((0,window.String)(a.nc.Ug).replace(/(\r\n|\r|\n)/g, "\x3cbr\x3e")) + "\x3c/div\x3e" + (b.isAuthenticated ? a.nc.author && a.nc.author.userId == b.currentUser.userId ? '\x3cdiv class\x3d"notes-foot no-user-select"\x3e\x3cbutton class\x3d"btn btn-chromeless notes-text-action" data-action\x3d"edit-reply" data-action-value\x3d"' + 
  (0,z.Y)(a.note.noteId) + "," + (0,z.Y)(a.nc.replyId) + '"\x3eEdit\x3c/button\x3e\x3cbutton class\x3d"btn btn-chromeless btn-primary notes-no-separator notes-edit-action" data-action\x3d"save-reply" data-action-value\x3d"' + (0,z.Y)(a.nc.replyId) + '"\x3eSave\x3c/button\x3e\x3cbutton class\x3d"btn btn-chromeless notes-edit-action" data-action\x3d"cancel-reply" data-action-value\x3d"' + (0,z.Y)(a.nc.replyId) + '"\x3eCancel\x3c/button\x3e\x3cbutton class\x3d"btn btn-chromeless notes-edit-action" data-action\x3d"delete-reply" data-action-value\x3d"' + 
  (0,z.Y)(a.nc.replyId) + '"\x3eDelete\x3c/button\x3e\x3c/div\x3e' : "" : "") + "\x3c/div\x3e"
};
z.WA = function(a) {
  return'\x3ca class\x3d"btn btn-chromeless notes-add notes-add-sign-in" title\x3d"Sign in with Twitter to leave a note" data-action\x3d"sign-in-with-twitter" href\x3d"/m/account/authenticate-twitter"\x3e\x3cspan class\x3d"icons icons-twitter notes-add-icon"\x3e\x3c/span\x3eSign in with Twitter to leave a ' + (0,z.X)(a.Hw) + "\x3c/a\x3e"
};
z.ZA = function(a, b, c, d) {
  z.Hd.call(this);
  this.t = a;
  this.ei = a.get("app");
  this.Cb = {};
  this.pb = {};
  this.Xb = [];
  this.fi = a.get("butter-bar");
  this.Sj = a.get("dialog");
  this.Ea = c.querySelector(".notes-source");
  this.zb = this.Wi(this.Ea);
  this.om = c.querySelector(".body");
  this.Za = this.zb.querySelector(".notes-list");
  this.wd = (0,z.Rf)(this.Ea);
  c = window.document.createElement("div");
  c.className = "notes-markers";
  (0,z.Ec)(c, this.zb);
  this.dh = c;
  this.isAuthenticated = !!(0,z.Q)("isAuthenticated");
  this.currentUser = (0,z.Q)("currentUser");
  this.postId = (0,z.dh)(b, "id");
  this.canAdminister = d;
  this.Fq = "true" == this.Ea.contentEditable;
  this.data = new z.NA(a, this.postId, this.Fq);
  this.data.h("new_note_list", this.Mz, this);
  this.Rj = (0,z.G)(this.data.load(), this.Sq, this);
  (0,z.ag)(this.dh).g("select-anchor", this.Xq, this);
  (0,z.ag)(this.zb).g("show-hidden-note-replies", this.Wv, this).g("start-reply", this.cA, this).g("save-reply", this.Wz, this).g("edit-reply", this.Cz, this).g("cancel-reply", this.jz, this).g("delete-reply", this.wz, this).g("approve-note", this.fz, this).g("unapprove-note", this.lA, this).g("edit-note", this.Bz, this).g("save-note", this.Vz, this).g("cancel-note", this.iz, this).g("delete-note", this.vz, this).g("hide-note", this.Gz, this)
};
z.$A = function(a) {
  if(a.Ya && a.Ya.Aq()) {
    return z.m
  }
  for(var b in a.pb) {
    if(a.pb[b].Aq()) {
      return z.m
    }
  }
  return z.s
};
z.aB = function(a) {
  var b = new z.vb;
  if(a = a.Sj.open({title:"Uh oh!", jc:"You have unsaved notes. Are you sure you want to abandon them?", type:z.Qr})) {
    a.h(z.Rr, b.Ga.bind(b, z.m)), a.h(z.Sr, b.Ga.bind(b, z.s))
  }
  return b
};
z.bB = function(a) {
  (0,z.Kd)(a.Ya);
  a.Ya = z.n;
  for(var b in a.pb) {
    (0,z.Kd)(a.pb[b]), delete a.pb[b]
  }
};
z.cB = function(a, b, c) {
  var d = b.get("state"), e = "PUBLIC" == c ? "Note was made public" : "HIDDEN" == c ? "Note was dismissed" : "NEW" == c ? "Note was made private" : "", f = (0,z.SA)(a.data, b, c);
  (0,z.H)((0,z.G)(f.cb, function() {
    (0,z.G)(this.fi.ca(e, {type:"success", Hi:z.m}), function() {
      f.pw();
      (0,z.cB)(this, b, d)
    }, this);
    (0,z.dB)(this, z.Vo, b, {noteState:c, previousNoteState:d})
  }, a), function() {
    this.fi.ca("Could not change note state", "error");
    f.pw();
    (0,z.cB)(this, b, d)
  }, a);
  return f.cb
};
z.eB = function(a, b) {
  var c = b.value;
  return c ? a.pb[c] : a.Ya
};
z.fB = function(a, b) {
  var c = (0,z.OA)(a.data, a.Vb(b));
  return c ? c.text : ""
};
z.gB = function(a) {
  return!a.W ? z.s : !!(0,z.QA)(a.data, a.W).count()
};
z.hB = function(a, b) {
  return(0,z.ae)(b, a.zb).y + (0,z.ev)(b, "padding").top
};
z.iB = function(a, b, c) {
  var d = a.Vb(b);
  if(d && ((0,z.ec)(d, "notes-source-active", c), a = a.Cb[b])) {
    (0,z.ec)(a, "notes-active", c), c = (0,z.Wd)(d, "float"), a.style.left = "left" == c ? "0" : -1 * (0,z.ev)(d, "margin").right + "px"
  }
};
z.jB = function(a, b, c, d) {
  d = d ? d.count() : 0;
  var e = window.document.createElement("div");
  e.className = "notes-marker no-user-select";
  e.setAttribute("data-action", "select-anchor");
  e.setAttribute("data-action-value", c);
  e.innerHTML = (0,z.sd)(z.UA, {count:d});
  e.style.top = (0,z.hB)(a, b) + "px";
  a.dh.appendChild(e);
  0 < d && ((0,z.N)(b, "notes-source-hasnotes"), (0,window.setTimeout)(function() {
    (0,z.N)(e, "notes-hasnotes")
  }, 0));
  return e
};
z.kB = function(a, b) {
  var c = b || a.md, d = (0,z.PA)(a.data, c, a.W), e = a.Za.querySelector('[data-note-id\x3d"' + c + '"]');
  (0,z.N)(e, "notes-show-reply-editor");
  var f = a.pb["reply_" + c];
  f || (e = e.querySelector(".notes-reply-editor"), f = new z.MA(a.t, e, a.postId, c), f.h("change", a.sh, a), f.h(z.lB.Ji, function() {
    f.clear()
  }, a), f.h(z.lB.Ki, function(a) {
    f.clear();
    d.add("replies", a);
    (0,z.dB)(this, z.Wo, d, {replyId:a.id})
  }, a), a.pb["reply_" + c] = f);
  f.focus()
};
z.dB = function(a, b, c, d) {
  d = d || {};
  d.postId = a.postId;
  d.noteId = (0,z.dh)(c, "id");
  d.noteType = c.get("highlightId") ? "highlight" : "paragraph";
  (0,z.Ti)(b, d)
};
z.mB = function(a, b, c) {
  var d = c && new z.zA(a.Ea);
  (0,z.G)((0,z.nB)(a, b && b.anchor || a.W), function() {
    if(b != this.Kc) {
      var a = this.Kc;
      a && (0,z.oB)(this, a, z.s);
      b && (0,z.oB)(this, b, z.m);
      this.Kc = b
    }
    (a = d && d.restore()) && a.select()
  }, a)
};
z.oB = function(a, b, c) {
  var d = b.anchor, e = (0,z.rv)(a.Ea, d);
  if(e = (0,z.OA)(a.data, e)) {
    (0,z.Kt)(e);
    if(c) {
      if(!(0,z.RA)(b, e)) {
        return
      }
      (0,z.mt)(e, (0,z.dt)(b.startIndex, b.endIndex, b.id))
    }
    a.Vb(d).innerHTML = (0,z.lv)(e)
  }
};
z.pB = function(a, b, c) {
  if(b != a.md) {
    c || (0,z.Kj)(a.ei, "");
    (c = a.Za.querySelector(".notes-active-note")) && (0,z.O)(c, "notes-active-note");
    c = a.md = z.n;
    if(b && a.W) {
      var d = (0,z.PA)(a.data, b, a.W);
      if(d && (c = a.Za.querySelector('[data-note-id\x3d"' + b + '"]'))) {
        (0,z.N)(c, "notes-active-note"), a.md = b, b = (0,z.dh)(d, "highlightId"), (0,z.mB)(a, (b ? a.data.Dh[b] || z.n : z.n) || z.n)
      }
    }
    (0,z.ec)(a.Za, "notes-note-selected", !!c)
  }
};
z.nB = function(a, b) {
  var c = b != a.W;
  if(c && (0,z.$A)(a)) {
    return(0,z.G)((0,z.aB)(a), function(a) {
      if(a) {
        return(0,z.bB)(this), (0,z.nB)(this, b)
      }
      this.dv();
      return(0,z.Jb)()
    }, a)
  }
  a.Kc && ((0,z.oB)(a, a.Kc, z.s), a.Kc = z.n);
  if(!c) {
    return(0,z.Hb)()
  }
  (0,z.pB)(a, z.n);
  a.W && (0,z.iB)(a, a.W, z.s);
  (0,z.bB)(a);
  (0,z.Kd)(a.ue);
  a.ue = z.n;
  (0,z.N)(a.Za, "notes-hide-editor");
  a.W = b && a.Cb[b] ? b : "";
  if(a.W) {
    var c = a.L(".notes-items"), d = (0,z.QA)(a.data, b);
    d.Eb(function(a) {
      a.set("age", (0,z.iv)((0,window.Number)(a.get("createdAt"))))
    });
    a.ue = (0,z.Xl)((0,z.Em)(new z.Cm(c, d, z.XA), "notes-note").qn(a.cy), {canAdminister:a.canAdminister, $q:a.data.Ge, Tf:a.Tf}, "note");
    a.ue.h("before-clear", a.gz, a);
    a.ue.h("after-draw", a.dz, a);
    a.ue.Zb();
    (0,z.iB)(a, a.W, z.m);
    (0,z.N)(window.document.body, "notes-list-visible");
    (0,z.kj)(z.Ro)
  }else {
    (0,z.Kj)(a.ei, ""), (0,z.O)(window.document.body, "notes-list-visible"), (0,z.Sf)(a.om, function(a) {
      (0,z.O)(a, "grid-breaking-slide")
    })
  }
  a.sh();
  return(0,z.Hb)()
};
z.qB = function(a, b) {
  if(a.data.Sd()) {
    var c = b || a.W, d = a.Cb[c], c = (0,z.QA)(a.data, c).Ne();
    d.innerHTML = (0,z.sd)(z.UA, {count:c});
    (0,z.ec)(d, "notes-hasnotes", 0 < c)
  }
};
z.rB = function(a) {
  var b = (window.document.location.hash ? window.document.location.hash.substr(1) : "").split("-"), c = b[0], d = b[1] || z.n;
  return{Iu:b[2] || z.n, anchor:a.Cb[c] && c, lc:d && {startIndex:(0,window.Number)(b[3]), endIndex:(0,window.Number)(b[4]), id:d}}
};
z.sB = function(a, b) {
  if(a.isAuthenticated) {
    (0,z.Kd)(a.Ya);
    var c = a.L(".notes-note-editor"), d = z.n, e = z.n;
    "string" == typeof b ? d = b : b instanceof z.TA ? (e = b.lc, d = e.anchor) : (0,z.g)((0,window.Error)("Missing assoc for note editor"));
    c.innerHTML = "";
    a.Ya = new z.JA(a.t, c, a.postId);
    (0,z.KA)(a.Ya, d, (0,z.fB)(a, d));
    e && (0,z.LA)(a.Ya, e.startIndex, e.endIndex, e.content);
    a.Ya.h("change", a.sh, a);
    a.Ya.h(z.tB.Ki, a.Vq, a);
    a.Ya.h(z.tB.Ji, function() {
      (0,z.QA)(this.data, d).count() ? (0,z.N)(this.Za, "notes-hide-editor") : (0,z.nB)(this, z.n);
      (0,z.pB)(this, z.n)
    }, a);
    (0,z.O)(a.Za, "notes-hide-editor")
  }
};
z.uB = function(a) {
  z.ng.call(this);
  this.D = a
};
z.vB = function(a) {
  window.clearTimeout(a.gd);
  a.gd = window.setTimeout(a.FB.bind(a), 20)
};
z.wB = function(a) {
  a.Ho && ((0,z.O)(a.D, "highlight-menu-active", "highlight-menu-linkmode"), a.Ho = z.s, a.F("hide"))
};
z.xB = function(a, b) {
  var c = a.D.offsetWidth, d = a.D.offsetHeight, e = a.D.offsetLeft, f = a.D.offsetTop, h = window.document.documentElement.scrollTop || window.document.body.scrollTop || 0, k = window.Math.round(b.left + b.width / 2 - c / 2), d = window.Math.round(b.top + h - d + -2);
  if(30 < window.Math.abs(e - k) || f != d) {
    k + c > window.document.body.clientWidth ? (k -= c / 2, (0,z.cc)(a.D, "far-left", "far-right")) : 0 >= k ? (k += c / 2, (0,z.cc)(a.D, "far-right", "far-left")) : (0,z.O)(a.D, "far-left", "far-right"), c = a.D.parentNode.getBoundingClientRect(), a.D.style.left = k - c.left + "px", a.D.style.top = d - c.top + "px"
  }
  (0,z.Df)(a.D.offsetHeight);
  (0,z.N)(a.D, "highlight-menu-active");
  a.Ho = z.m;
  a.F("show")
};
z.nd.prototype.Yf = (0,z.B)(95, function(a) {
  return(0,z.gd)(this, "type", a)
});
z.nh.prototype.Yf = (0,z.B)(94, function(a) {
  return(0,z.gd)(this, "type", a)
});
z.qh.prototype.Yf = (0,z.B)(93, function(a) {
  return(0,z.gd)(this, "type", a)
});
z.ye.prototype.getName = (0,z.B)(92, (0,z.ea)("Ov"));
z.nh.prototype.getName = (0,z.B)(91, function() {
  return(0,z.ed)(this, "name")
});
z.qh.prototype.getName = (0,z.B)(90, function() {
  return(0,z.ed)(this, "name")
});
z.bd.prototype.Ab = (0,z.B)(89, function(a) {
  if(this.constructor != a.constructor) {
    return z.s
  }
  var b = this.oe().fields, c;
  for(c in b) {
    var d = b[c], e = this.X[c], f = a.X[c], h = z.s, h = d.N() ? e && f ? e.length == f.length && e.every(function(a, b) {
      return(0,z.Ys)(this, d, a, f[b])
    }, this) : e === f : (0,z.Ys)(this, d, e, f);
    if(!h) {
      return z.s
    }
  }
  return z.m
});
z.ke.prototype.Ab = (0,z.B)(88, function(a) {
  return a.z == this.z && (!this.z || a.vb == this.vb)
});
z.pe.prototype.Ab = (0,z.B)(87, function(a, b) {
  if(this === a) {
    return z.m
  }
  if(this.qa != a.Ne()) {
    return z.s
  }
  var c = b || z.Ws;
  (0,z.qe)(this);
  for(var d, e = 0;d = this.Xa[e];e++) {
    if(!c(this.get(d), a.get(d))) {
      return z.s
    }
  }
  return z.m
});
z.kd.prototype.Zc = (0,z.B)(86, function() {
  (0,z.g)((0,window.Error)())
});
z.ld.prototype.Zc = (0,z.B)(85, function(a, b, c) {
  b instanceof z.bd && (0,z.g)((0,window.Error)("Already a PB message"));
  a = new a;
  (0,z.Zs)(a, !!c);
  var d = a.oe().fields, e;
  for(e in b) {
    if(d.hasOwnProperty(e)) {
      var f = a, h = e, k;
      k = d[e];
      var p = b[e], q = !!c;
      if(k.N()) {
        window.Array.isArray(p) || (0,z.g)((0,window.Error)("Expected array, found " + p));
        for(var z$ = [], U = 0;U < p.length;U++) {
          z$[U] = (0,z.Xs)(this, k, p[U], q)
        }
        k = z$
      }else {
        k = (0,z.Xs)(this, k, p, q)
      }
      (0,z.gd)(f, h, k)
    }else {
      f = 'Trying to set field "' + e + '" not in schema "' + a.oe().name + '"', c && (0,z.g)((0,window.Error)(f)), z.ha.console && z.ha.console.warn && window.console.warn(f)
    }
  }
  return a
});
z.pd.prototype.Jf = (0,z.B)(84, function() {
  return(0,z.ed)(this, "href")
});
z.qh.prototype.Jf = (0,z.B)(83, function() {
  return(0,z.ed)(this, "href")
});
z.pd.prototype.on = (0,z.B)(82, function(a) {
  return(0,z.gd)(this, "href", a)
});
z.qh.prototype.on = (0,z.B)(81, function(a) {
  return(0,z.gd)(this, "href", a)
});
z.nh.prototype.wk = (0,z.B)(80, function(a) {
  return(0,z.gd)(this, "name", a)
});
z.qh.prototype.wk = (0,z.B)(79, function(a) {
  return(0,z.gd)(this, "name", a)
});
z.gt = {4:1, 3:2, 1:3, 2:4};
(0,z.C)(z.jt, z.Ne);
z.w = z.jt.prototype;
z.w.la = z.n;
z.w.ha = z.n;
z.w.Gb = z.n;
z.w.ba = (0,z.ea)("la");
z.w.ra = (0,z.ea)("ha");
z.w.gk = function() {
  return!this.depth && !this.Gb.length
};
z.w.next = function() {
  this.gk() && (0,z.g)(z.je);
  if(!this.depth) {
    var a = this.Gb.shift();
    (0,z.le)(this, a, 1, 1);
    return a
  }
  return z.jt.q.next.call(this)
};
z.w.Mc = (0,z.x)(26);
z.w.ga = (0,z.x)(33);
(0,z.C)(z.kt, z.Fe);
z.kt.prototype.Xf = (0,z.x)(2);
z.kt.prototype.o = function() {
  z.kt.q.o.call(this);
  delete this.Gb
};
(0,z.C)(z.nt, z.Oe);
z.w = z.nt.prototype;
z.w.O = z.n;
z.w.Gb = z.n;
z.w.yk = z.n;
z.w.pd = function() {
  this.yk = this.Gb = z.n
};
z.w.ga = (0,z.x)(34);
z.w.C = (0,z.v)("control");
z.w.sd = function() {
  return this.O || window.document.body.createControlRange()
};
z.w.li = function() {
  return this.O ? this.O.length : 0
};
z.w.Od = function(a) {
  a = this.O.item(a);
  return(0,z.ff)((0,z.$e)(a), z.l)
};
z.w.wc = function() {
  return z.Lc.apply(z.n, (0,z.lf)(this))
};
z.w.ba = function() {
  return(0,z.ct)(this)[0]
};
z.w.Ka = (0,z.v)(0);
z.w.ra = function() {
  var a = (0,z.ct)(this), b = (0,z.Ta)(a);
  return(0,z.Ua)(a, function(a) {
    return(0,z.Hc)(a, b)
  })
};
z.w.rb = function() {
  return this.ra().childNodes.length
};
z.w.re = (0,z.x)(76);
z.w.isCollapsed = function() {
  return!this.O || !this.O.length
};
z.w.Nb = (0,z.x)(71);
z.w.cg = function() {
  return new z.jt(this)
};
z.w.select = function() {
  this.O && this.O.select()
};
z.w.Wc = (0,z.x)(12);
z.w.hn = (0,z.x)(16);
z.w.gr = function() {
  return new z.kt(this)
};
z.w.collapse = function() {
  this.O = z.n;
  this.pd()
};
z.w = z.ot.prototype;
z.w.ga = (0,z.x)(29);
z.w.Zc = function() {
  var a;
  a = (0,z.Zs)(new z.nh, z.m).Yf(this.type);
  a = (0,z.gd)(a, "text", this.text);
  a = (0,z.gd)(a, "markups", this.Ta);
  4 == this.type && (this.Ke && (0,z.gd)(a, "dataId", this.Ke), this.Da && (0,z.gd)(a, "layout", this.Da), this.metadata && (0,z.gd)(a, "metadata", this.metadata));
  11 == this.type && (this.Da && (0,z.gd)(a, "layout", this.Da), this.metadata && (0,z.gd)(a, "iframe", this.metadata));
  this.name && a.wk(this.name);
  return a
};
z.w.append = function(a) {
  var b = this.text.length;
  this.text += a.text;
  for(var c = 0;c < a.Ta.length;c++) {
    var d = z.Nm.Zc(z.qh, z.Nm.Ld(a.Ta[c]));
    d.setStart((0,z.bt)(d) + b);
    d.setEnd((0,z.at)(d) + b);
    (0,z.mt)(this, d)
  }
};
z.w.split = function(a) {
  for(var b = new z.ot(z.n, this.type, this.text.substring(a)), c = 0;c < this.Ta.length;c++) {
    var d = this.Ta[c];
    if((0,z.at)(d) > a) {
      var e = z.Nm.Zc(z.qh, z.Nm.Ld(d));
      e.setStart(window.Math.max(0, (0,z.bt)(d) - a));
      e.setEnd((0,z.at)(d) - a);
      (0,z.mt)(b, e)
    }
  }
  (0,z.lt)(this, a, this.text.length);
  return b
};
z.w.Ab = function(a) {
  if(this.name != a.name || this.type != a.type || this.text != a.text || this.Ta.length != a.Ta.length) {
    return z.s
  }
  for(var b = 0;b < this.Ta.length;b++) {
    if(!this.Ta[b].Ab(a.Ta[b])) {
      return z.s
    }
  }
  return z.m
};
(0,z.C)(z.qt, z.ot);
z.qt.prototype.Ab = function(a) {
  return z.qt.q.Ab.call(this, a) && (this.metadata && a.metadata ? this.metadata.Ab(a.metadata) : this.metadata == a.metadata)
};
(0,z.C)(z.rt, z.ot);
z.rt.prototype.Ab = function(a) {
  return z.rt.q.Ab.call(this, a) && this.Ke == a.Ke && this.Da == a.Da
};
z.We.prototype.re = (0,z.B)(78, function() {
  var a = this.Bm.body.createTextRange();
  a.moveToElementText(this.Bm.body);
  return this.Je(new z.We(a, this.Bm), z.m)
});
z.ef.prototype.re = (0,z.B)(77, function() {
  return(!this.la || (0,z.zt)(this.la)) && (!this.ha || (0,z.zt)(this.ha)) && (!(z.L && !(0,z.Xb)(9)) || (0,z.gf)(this).re())
});
z.nt.prototype.re = (0,z.B)(76, function() {
  var a = z.s;
  try {
    a = (0,z.po)((0,z.lf)(this), function(a) {
      return z.L ? !!a.parentNode : (0,z.Hc)(a.ownerDocument.body, a)
    })
  }catch(b) {
  }
  return a
});
z.mf.prototype.re = (0,z.B)(75, function() {
  return(0,z.po)((0,z.Ie)(this), function(a) {
    return a.re()
  })
});
z.Re.prototype.Nb = (0,z.B)(74, function() {
  return this.O.toString()
});
z.We.prototype.Nb = (0,z.B)(73, function() {
  return this.O.text
});
z.ef.prototype.Nb = (0,z.B)(72, function() {
  return(0,z.gf)(this).Nb()
});
z.nt.prototype.Nb = (0,z.B)(71, (0,z.v)(""));
z.mf.prototype.Nb = (0,z.B)(70, function() {
  return(0,z.qf)((0,z.Ie)(this), function(a) {
    return a.Nb()
  }).join("")
});
z.nh.prototype.Nb = (0,z.B)(69, function() {
  return(0,z.ed)(this, "text")
});
z.ph.prototype.Wg = (0,z.B)(68, function() {
  return(0,z.ed)(this, "mediaResourceId")
});
z.Im.prototype.Wg = (0,z.B)(67, function() {
  return(0,z.ed)(this, "mediaResourceId")
});
z.Wl.prototype.getData = (0,z.B)(66, (0,z.ea)("X"));
z.Cm.prototype.getData = (0,z.B)(65, function() {
  return z.Cm.q.getData.call(this)
});
z.Oe.prototype.insertNode = (0,z.B)(64, function(a, b) {
  if(b) {
    var c = this.ba();
    c.parentNode && c.parentNode.insertBefore(a, c)
  }else {
    (0,z.Ec)(a, this.ra())
  }
  return a
});
z.Re.prototype.insertNode = (0,z.B)(63, function(a, b) {
  var c = this.O.cloneRange();
  c.collapse(b);
  c.insertNode(a);
  c.detach();
  return a
});
z.We.prototype.insertNode = (0,z.B)(62, function(a, b) {
  var c = (0,z.Bt)(this.O.duplicate(), a, b);
  this.pd();
  return c
});
z.ef.prototype.insertNode = (0,z.B)(61, function(a, b) {
  var c = (0,z.gf)(this).insertNode(a, b);
  this.pd();
  return c
});
z.Ok.prototype.disable = (0,z.B)(59, function() {
  this.Eh = z.m
});
z.el.prototype.disable = (0,z.B)(58, function() {
  this.enabled && (this.po && (0,z.Ff)(this.po), this.oo && (0,z.Ff)(this.oo), this.Vd && (0,z.Ff)(this.Vd), this.remove(), window.document.body.removeChild(this.l), this.Zp = "", this.enabled = z.s)
});
z.ll.prototype.disable = (0,z.B)(57, function() {
  this.enabled && (this.remove(), this.ia.removeChild(this.l), this.ia = this.l = z.n, (0,z.Ff)(this.Vd))
});
z.oh.prototype.oh = (0,z.B)(56, function(a) {
  return(0,z.gd)(this, "originalHeight", a)
});
z.oh.prototype.ph = (0,z.B)(54, function(a) {
  return(0,z.gd)(this, "originalWidth", a)
});
z.od.prototype.Yj = (0,z.B)(52, function() {
  return(0,z.ed)(this, "domain")
});
z.nh.prototype.getMetadata = (0,z.B)(47, function() {
  return(0,z.ed)(this, "metadata")
});
z.oh.prototype.sq = (0,z.B)(45, function() {
  return(0,z.ed)(this, "originalHeight")
});
z.od.prototype.nn = (0,z.B)(44, function(a) {
  return(0,z.gd)(this, "domain", a)
});
z.hc.prototype.ga = (0,z.B)(43, function() {
  return new z.hc(this.x, this.y)
});
z.ic.prototype.ga = (0,z.B)(42, function() {
  return new z.ic(this.width, this.height)
});
z.kd.prototype.ga = (0,z.B)(41, function(a) {
  return this.Zc(a.constructor, this.Ld(a))
});
z.ke.prototype.ga = (0,z.B)(40, function() {
  return new z.ke(this.z, this.xb, !this.um, this.vb, this.depth)
});
z.pe.prototype.ga = (0,z.B)(39, function() {
  return new z.pe(this)
});
z.Pe.prototype.ga = (0,z.B)(38, function() {
  var a = new z.Pe(this.la, this.oa, this.ha, this.na, this.Td);
  a.Mc(this);
  return a
});
z.Re.prototype.ga = (0,z.B)(37, function() {
  return new this.constructor(this.O.cloneRange())
});
z.We.prototype.ga = (0,z.B)(36, function() {
  var a = new z.We(this.O.duplicate(), this.Bm);
  a.ve = this.ve;
  a.la = this.la;
  a.ha = this.ha;
  return a
});
z.ef.prototype.ga = (0,z.B)(35, function() {
  var a = new z.ef;
  a.Ng = this.Ng;
  a.la = this.la;
  a.oa = this.oa;
  a.ha = this.ha;
  a.na = this.na;
  a.Td = this.Td;
  return a
});
z.nt.prototype.ga = (0,z.B)(34, function() {
  return z.yt.apply(this, (0,z.lf)(this))
});
z.jt.prototype.ga = (0,z.B)(33, function() {
  var a = new z.jt(z.n);
  a.Mc(this);
  return a
});
z.mf.prototype.ga = (0,z.B)(32, function() {
  var a = new z.mf;
  a.Gd = (0,z.eb)(this.Gd);
  return a
});
z.rf.prototype.ga = (0,z.B)(31, function() {
  var a = new z.rf(z.n);
  a.Mc(this);
  return a
});
z.rh.prototype.ga = (0,z.B)(30, function() {
  var a = new z.rh;
  a.Nc = this.Nc;
  this.tb && (a.tb = this.tb.ga(), a.qa = this.qa);
  return a
});
z.ot.prototype.ga = (0,z.B)(29, function() {
  return(0,z.ut)(this.Zc())
});
z.ke.prototype.Mc = (0,z.B)(28, function(a) {
  this.z = a.z;
  this.vb = a.vb;
  this.depth = a.depth;
  this.xb = a.xb;
  this.um = a.um
});
z.Pe.prototype.Mc = (0,z.B)(27, function(a) {
  this.la = a.la;
  this.ha = a.ha;
  this.oa = a.oa;
  this.na = a.na;
  this.Td = a.Td;
  z.Pe.q.Mc.call(this, a)
});
z.jt.prototype.Mc = (0,z.B)(26, function(a) {
  this.Gb = a.Gb;
  this.la = a.la;
  this.ha = a.ha;
  z.jt.q.Mc.call(this, a)
});
z.rf.prototype.Mc = (0,z.B)(25, function(a) {
  this.Qf = (0,z.eb)(a.Qf);
  z.rf.q.Mc.call(this, a)
});
z.Mb.prototype.isEnabled = (0,z.B)(24, function() {
  return window.navigator.cookieEnabled
});
z.bh.prototype.removeItem = (0,z.B)(23, function(a, b) {
  (0,z.ma)(this.Ic[a]) || (0,z.g)((0,window.Error)("removeItem() called on non array, key\x3d" + a));
  this.Ic[a].splice(b, 1);
  this.lo[a] = 1;
  this.Jo = z.m;
  this.F(a, this.Ic[a], this);
  this.F("change", a, this);
  return this
});
z.ye.prototype.info = (0,z.B)(22, function(a, b) {
  this.log(z.Iq, a, b)
});
z.Oe.prototype.af = (0,z.B)(21, function(a, b) {
  this.insertNode(a, z.m);
  this.insertNode(b, z.s)
});
z.Re.prototype.af = (0,z.B)(20, function(a, b) {
  var c = (0,z.vc)((0,z.lc)(this.ba()));
  if(c = (0,z.wt)(c)) {
    var d = c.ba(), e = c.ra(), f = c.Ka(), h = c.rb()
  }
  var k = this.O.cloneRange(), p = this.O.cloneRange();
  k.collapse(z.s);
  p.collapse(z.m);
  k.insertNode(b);
  p.insertNode(a);
  k.detach();
  p.detach();
  if(c) {
    if(d.nodeType == z.Rc) {
      for(;f > d.length;) {
        f -= d.length;
        do {
          d = d.nextSibling
        }while(d == a || d == b)
      }
    }
    if(e.nodeType == z.Rc) {
      for(;h > e.length;) {
        h -= e.length;
        do {
          e = e.nextSibling
        }while(e == a || e == b)
      }
    }
    (0,z.At)(d, f, e, h).select()
  }
});
z.We.prototype.af = (0,z.B)(19, function(a, b) {
  var c = this.O.duplicate(), d = this.O.duplicate();
  (0,z.Bt)(c, a, z.m);
  (0,z.Bt)(d, b, z.s);
  this.pd()
});
z.ef.prototype.af = (0,z.B)(18, function(a, b) {
  (0,z.gf)(this).af(a, b);
  this.pd()
});
z.oh.prototype.tq = (0,z.B)(10, function() {
  return(0,z.ed)(this, "originalWidth")
});
z.Fe.prototype.restore = (0,z.B)(7, function(a) {
  this.Gf && z.Jq.log(z.jf, "Disposed SavedRange objects cannot be restored.", z.l);
  var b = this.Xf();
  a || this.Wa();
  return b
});
z.rh.prototype.pn = (0,z.B)(4, function(a) {
  a && !this.ud && ((0,z.sh)(this), this.Nc = z.n, (0,z.oe)(this.tb, function(a, c) {
    var d = c.toLowerCase();
    c != d && (this.remove(c), (0,z.uh)(this, d, a))
  }, this));
  this.ud = a
});
z.kf.prototype.Xf = (0,z.B)(3, function() {
  return(0,z.At)(this.zu, this.LB, this.ev, this.nC)
});
z.kt.prototype.Xf = (0,z.B)(2, function() {
  for(var a = (this.Gb.length ? (0,z.lc)(this.Gb[0]) : window.document).body.createControlRange(), b = 0, c = this.Gb.length;b < c;b++) {
    a.addElement(this.Gb[b])
  }
  return(0,z.pt)(a)
});
z.pf.prototype.Xf = (0,z.B)(1, function() {
  var a = (0,z.qf)(this.hr, function(a) {
    return a.restore()
  });
  return(0,z.xt)(a)
});
z.oh.prototype.Ye = (0,z.B)(0, function(a) {
  return(0,z.gd)(this, "id", a)
});
(0,z.C)(z.Tt, z.Fe);
z.Tt.prototype.tk = function(a) {
  (0,z.P)((0,z.Ct)(this, z.m));
  (0,z.P)((0,z.Ct)(this, z.s));
  return a
};
z.Tt.prototype.Xf = function() {
  var a = z.n, b = (0,z.Ct)(this, !this.We), c = (0,z.Ct)(this, this.We);
  if(b && c) {
    var a = b.parentNode, b = (0,z.Xa)(a.childNodes, b), d = c.parentNode, c = (0,z.Xa)(d.childNodes, c);
    d == a && (this.We ? b -= 1 : c -= 1);
    a = (0,z.At)(a, b, d, c);
    a = this.tk(a);
    a.select()
  }else {
    this.tk()
  }
  return a
};
z.Tt.prototype.o = function() {
  this.tk();
  this.le = z.n
};
z.w = z.Ut.prototype;
z.w.ga = function() {
  return new z.Ut(this.top, this.right, this.bottom, this.left)
};
z.w.contains = function(a) {
  return!this || !a ? z.s : a instanceof z.Ut ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom
};
z.w.expand = function(a, b, c, d) {
  (0,z.ra)(a) ? (this.top -= a.top, this.right += a.right, this.bottom += a.bottom, this.left -= a.left) : (this.top -= a, this.right += b, this.bottom += c, this.left -= d);
  return this
};
z.w.ceil = function() {
  this.top = window.Math.ceil(this.top);
  this.right = window.Math.ceil(this.right);
  this.bottom = window.Math.ceil(this.bottom);
  this.left = window.Math.ceil(this.left);
  return this
};
z.w.floor = function() {
  this.top = window.Math.floor(this.top);
  this.right = window.Math.floor(this.right);
  this.bottom = window.Math.floor(this.bottom);
  this.left = window.Math.floor(this.left);
  return this
};
z.w.round = function() {
  this.top = window.Math.round(this.top);
  this.right = window.Math.round(this.right);
  this.bottom = window.Math.round(this.bottom);
  this.left = window.Math.round(this.left);
  return this
};
z.w.translate = function(a, b) {
  a instanceof z.hc ? (this.left += a.x, this.right += a.x, this.top += a.y, this.bottom += a.y) : (this.left += a, this.right += a, (0,z.pa)(b) && (this.top += b, this.bottom += b));
  return this
};
z.w.scale = function(a, b) {
  var c = (0,z.pa)(b) ? b : a;
  this.left *= a;
  this.right *= a;
  this.top *= c;
  this.bottom *= c;
  return this
};
z.yB = /#/g;
z.fu = /[\#\?@]/g;
z.zB = /[\#\?]/g;
z.AB = /[\#\?:]/g;
z.BB = /[#\/\?@]/g;
z.w = z.au.prototype;
z.w.lh = "";
z.w.yn = "";
z.w.iq = "";
z.w.cn = z.n;
z.w.ok = "";
z.w.Em = "";
z.w.ZC = z.s;
z.w.ud = z.s;
z.w.toString = function() {
  var a = [], b = this.lh;
  b && a.push((0,z.Zt)(b, z.BB), ":");
  if(b = this.Yj()) {
    a.push("//");
    var c = this.yn;
    c && a.push((0,z.Zt)(c, z.BB), "@");
    a.push((0,window.encodeURIComponent)((0,window.String)(b)));
    b = this.cn;
    b != z.n && a.push(":", (0,window.String)(b))
  }
  if(b = this.ok) {
    this.iq && "/" != b.charAt(0) && a.push("/"), a.push((0,z.Zt)(b, "/" == b.charAt(0) ? z.zB : z.AB))
  }
  (b = this.Vf.toString()) && a.push("?", b);
  (b = this.Em) && a.push("#", (0,z.Zt)(b, z.yB));
  return a.join("")
};
z.w.ga = function() {
  return new z.au(this)
};
z.w.Yj = (0,z.ea)("iq");
z.w.nn = function(a, b) {
  (0,z.cu)(this);
  this.iq = b ? a ? (0,window.decodeURIComponent)(a) : "" : a;
  return this
};
z.w.pn = function(a) {
  this.ud = a;
  this.Vf && this.Vf.pn(a);
  return this
};
(0,z.C)(z.ku, z.he);
z.ku.prototype.next = function() {
  var a = this.Sv;
  a || (0,z.g)(z.je);
  this.Sv = this.QD ? a.previousSibling : a.nextSibling;
  return a
};
z.uu = /&([^;\s<&]+);?/g;
(0,z.C)(z.qu, z.ku);
z.Su = [];
z.Ru = z.n;
z.Uu = /^<\//;
z.Tu = /(<\/?(\w*)([^>]*)>)/gi;
z.Wu = /^(.*)([:;,\.?\[\]\)!])$/;
z.Zu = {BLOCKQUOTE:z.m, PRE:z.m, P:z.m, H2:z.m, H3:z.m, DIV:z.m, FIGURE:z.m, LI:z.m};
(0,z.C)(z.Gu, z.ke);
z.Gu.prototype.next = function() {
  do {
    z.Gu.q.next.call(this)
  }while(-1 == this.vb);
  return this.z
};
(0,z.C)(z.bv, z.Tt);
z.bv.prototype.tk = function(a) {
  var b = (0,z.Ct)(this, z.m), c = (0,z.Ct)(this, z.s), b = b && c ? (0,z.Lc)(b, c) : b || c;
  z.bv.q.tk.call(this);
  if(a) {
    return(0,z.Au)(b, a)
  }
  b && (a = (0,z.wt)((0,z.vc)((0,z.lc)(b))), (a = (0,z.Au)(b, a)) && a.select())
};
z.Fz = /^[@＠][a-z0-9_]{1,15}$/i;
(0,z.un)(z.sn, "has-editor");
(0,z.C)(z.Kv, z.Hd);
z.w = z.Kv.prototype;
z.w.Qd = 0;
z.w.o = function() {
  z.Kv.q.o.call(this);
  this.stop();
  delete this.Nq;
  delete this.Lf
};
z.w.start = function(a) {
  this.stop();
  var b = this.UB;
  a = (0,z.la)(a) ? a : this.TC;
  (0,z.qa)(b) || (b && "function" == typeof b.handleEvent ? b = (0,z.ya)(b.handleEvent, b) : (0,z.g)((0,window.Error)("Invalid listener argument")));
  this.Qd = 2147483647 < a ? -1 : z.ha.setTimeout(b, a || 0)
};
z.w.stop = function() {
  0 != this.Qd && z.ha.clearTimeout(this.Qd);
  this.Qd = 0
};
z.w.pq = function() {
  this.stop();
  this.hi()
};
z.w.hi = function() {
  this.Qd = 0;
  this.Nq && this.Nq.call(this.Lf)
};
(0,z.C)(z.$, z.io);
z.w = z.$.prototype;
z.w.Wj = z.n;
z.w.NB = z.m;
z.w.vd = (0,z.Be)("goog.editor.Plugin");
z.w.s = (0,z.ea)("Wj");
z.w.Jw = function() {
  this.s() && (this.disable(this.s()), this.Wj = z.n)
};
z.w.enable = function(a) {
  this.s() == a ? this.jq = z.m : this.vd.log(z.jf, "Trying to enable an unregistered field with this plugin.", z.l)
};
z.w.disable = function(a) {
  this.s() == a ? this.jq = z.s : this.vd.log(z.jf, "Trying to disable an unregistered field with this plugin.", z.l)
};
z.w.isEnabled = function(a) {
  return this.s() == a ? this.jq : z.s
};
z.w.Kp = z.tr;
z.w.$C = z.tr;
z.w.o = function() {
  this.s() && this.Jw(this.s());
  z.$.q.o.call(this)
};
z.Pv = (0,z.qb)({kc:1, rv:2, xq:3, Jm:4, Im:5, execCommand:6, queryCommandValue:7, fw:8, Gu:10, Mj:11});
z.CB = (0,z.ub)(8, 10, 11);
z.$.prototype.execCommand = function(a, b) {
  var c = this.$C(a);
  c || (z.R && (0,z.iw)(this.s(), z.m), this.s().Ff());
  try {
    var d = this.hC.apply(this, arguments)
  }finally {
    c || (this.s().Me(), (0,z.gw)(this.s()))
  }
  return d
};
z.$.prototype.ah = (0,z.v)(z.s);
(0,z.C)(z.Ov, z.io);
z.Ov.prototype.field = z.n;
z.Ov.prototype.ub = z.n;
z.Ov.prototype.vd = (0,z.Be)("goog.editor.Field");
z.Qv = "change";
z.Rv = "delayedchange";
z.Tv = {sE:"cvc", VE:"load", sF:"unload", mE:"beforechange", qE:z.Qv, wE:z.Rv, nE:"beforefocus", yE:"focus", Ow:"blur", oE:"beforetab", JE:"ifrsz", iF:"selectionchange"};
z.Vv = 0;
z.qw = z.n;
z.w = z.Ov.prototype;
z.w.KC = z.s;
z.w.xr = z.s;
z.w.An = z.s;
z.w.H = (0,z.ea)("field");
z.w.addListener = function(a, b, c, d) {
  var e = this.H();
  z.dr && (e && this.Fc()) && (e = e.ownerDocument);
  (0,z.ko)(this.ne, e, a, b, c, d)
};
z.w.aa = function(a) {
  var b = a.Sa();
  this.we[b] && this.vd.log(z.jf, "Cannot register the same class of plugin twice.", z.l);
  this.we[b] = a;
  for(var c in z.Pv) {
    a[z.Pv[c]] && this.Zg[c].push(a)
  }
  a.Wj = this;
  this.Sd() && a.enable(this)
};
z.Uv = 15;
z.Sv = 250;
z.Ov.prototype.Fc = z.ur;
z.Ov.prototype.ww = z.tr;
z.Xv = {46:z.m, 8:z.m};
z.L || (z.Xv[9] = z.m);
z.Yv = {86:z.m, 88:z.m};
z.qp && !z.R && (z.Xv[229] = z.m);
z.Ov.prototype.o = function() {
  (this.hk() || this.Sd()) && this.vd.log(z.Hq, "Disposing a field that is in use.", z.l);
  this.ub && this.execCommand("clearlorem");
  (0,z.$v)(this);
  (0,z.aw)(this);
  (0,z.tw)(this);
  this.zi = z.n;
  this.ne && (this.ne.Wa(), this.ne = z.n);
  for(var a;a = this.hE.pop();) {
    a.Wa()
  }
  z.qw == this.id && (z.qw = z.n);
  for(var b in this.we) {
    a = this.we[b], a.NB && a.Wa()
  }
  delete this.we;
  z.Ov.q.o.call(this)
};
z.rw = ["DOMNodeInserted", "DOMNodeRemoved", "DOMNodeRemovedFromDocument", "DOMNodeInsertedIntoDocument", "DOMCharacterDataModified"];
z.DB = {8:1, 9:1, 13:1, 33:1, 34:1, 35:1, 36:1, 37:1, 38:1, 39:1, 40:1, 46:1};
z.EB = {65:z.m, 86:z.m, 88:z.m};
z.ew = {8:1, 9:1, 13:1, 27:1, 33:1, 34:1, 37:1, 38:1, 39:1, 40:1};
z.w = z.Ov.prototype;
z.w.fk = function(a, b) {
  for(var c = this.Zg[a], d = (0,z.hb)(arguments, 1), e = 0;e < c.length;++e) {
    var f = c[e];
    if((f.isEnabled(this) || z.CB[a]) && f[z.Pv[a]].apply(f, d)) {
      return z.m
    }
  }
  return z.s
};
z.w.UC = function(a, b) {
  for(var c = this.Zg[a], d = (0,z.hb)(arguments, 1), e = 0;e < c.length;++e) {
    var f = c[e];
    (f.isEnabled(this) || z.CB[a]) && f[z.Pv[a]].apply(f, d)
  }
};
z.w.gn = function(a, b, c) {
  for(var d = this.Zg[a], e = (0,z.hb)(arguments, 1), f = 0;f < d.length;++f) {
    var h = d[f];
    if(h.isEnabled(this) || z.CB[a]) {
      e[0] = h[z.Pv[a]].apply(h, e)
    }
  }
  return e[0]
};
z.w.wq = function(a) {
  (z.R || (0,z.bw)(this, a)) && !this.fk(1, a) && z.kr && (0,z.dw)(this, a)
};
z.w.AC = function(a) {
  if(z.R) {
    if(!(0,z.bw)(this, a)) {
      return
    }
  }else {
    this.vq = z.m, this.Ff()
  }
  !this.fk(2, a) && !z.kr && (0,z.dw)(this, a)
};
z.w.CC = function(a) {
  !z.R && (this.vq || (0,z.Wv)(a)) && this.Hm();
  this.fk(3, a);
  (0,z.hw)(this, "selectionchange") || (z.DB[a.keyCode] || (a.ctrlKey || a.metaKey) && z.EB[a.keyCode]) && this.jr.start()
};
z.w.execCommand = function(a, b) {
  for(var c = arguments, d, e = this.Zg[6], f = 0;f < e.length;++f) {
    var h = e[f];
    if(h.isEnabled(this) && h.ah(a)) {
      d = h.execCommand.apply(h, c);
      break
    }
  }
  return d
};
z.w.queryCommandValue = function(a) {
  var b = this.Sd() && this.Om;
  if((0,z.oa)(a)) {
    return this.fn(a, b)
  }
  for(var c = {}, d = 0;d < a.length;d++) {
    c[a[d]] = this.fn(a[d], b)
  }
  return c
};
z.w.fn = function(a, b) {
  for(var c = this.Zg[7], d = 0;d < c.length;++d) {
    var e = c[d];
    if(e.isEnabled(this) && e.ah(a) && (b || e.Kp())) {
      return e.queryCommandValue(a)
    }
  }
  return b ? z.n : z.s
};
z.w.yC = function(a, b) {
  if(!(0,z.hw)(this, z.Qv)) {
    var c = b.Kd;
    try {
      if(c.originalTarget.prefix || "scrollbar" == c.originalTarget.nodeName) {
        return
      }
    }catch(d) {
      return
    }
    c.prevValue != c.newValue && a.call(this, c)
  }
};
z.w.yq = function(a) {
  (0,z.hw)(this, z.Qv) || (a = a.gv ? a.Kd : a, a.target.firebugIgnore || (this.Gq = this.ri = z.m, this.nd.start()))
};
z.w.qv = function() {
  z.L && this.execCommand("clearlorem", z.m);
  z.R && this.hq();
  this.Me()
};
z.w.EC = function() {
  var a = this.rw;
  this.rw = z.n;
  (0,z.gw)(this, z.l, a)
};
z.w.Ff = function() {
  (0,z.hw)(this, "beforechange") || this.dispatchEvent("beforechange")
};
z.w.Me = function(a) {
  (0,z.kw)(this, z.m, a)
};
z.w.Hm = function() {
  (0,z.hw)(this, z.Qv) || (this.nd && this.nd.stop(), this.Gq = this.ri = z.m, (0,z.hw)(this, z.Rv) || this.Am.start())
};
z.w.Uu = function() {
  (0,z.hw)(this, z.Rv) || (this.Am.stop(), this.ri = z.s, this.dispatchEvent(z.Rv))
};
z.w.hq = function() {
  this.Su();
  this.Vu()
};
z.w.Su = function() {
  (0,z.hw)(this, "beforefocus") || (this.execCommand("clearlorem", z.m), this.dispatchEvent("beforefocus"))
};
z.w.Vu = function() {
  if(!(0,z.hw)(this, "focus")) {
    z.qw = this.id;
    this.Om = z.m;
    this.dispatchEvent("focus");
    if(z.R) {
      var a = this.H(), b = (0,z.fw)(this);
      if(b) {
        var c = (0,z.Le)(b);
        if(0 == (0,z.Me)(b) && (!c || c == a || "BODY" == c.tagName)) {
          a = (0,z.cv)(a), (0,z.At)(a, 0, a, 0).select()
        }
      }
    }
    !z.cr && this.Fc() && this.Fb.Bb().parent.getSelection().removeAllRanges()
  }
};
z.w.Tu = function() {
  (0,z.hw)(this, "blur") || (z.qw == this.id && (z.qw = z.n), this.Om = z.s, this.dispatchEvent("blur"))
};
z.w.DC = function(a) {
  z.qw = this.id;
  if(z.L) {
    var b = a.target;
    b && ("A" == b.tagName && a.ctrlKey) && this.zi.Bb().open(b.href)
  }
  this.An = z.m
};
z.w.zC = function() {
  this.An = z.s
};
z.w.sv = function(a) {
  if(!this.xr || this.An) {
    this.An = z.s, (0,z.gw)(this, a), z.L && (this.rw = a.target, this.jr.start())
  }
};
z.w.Gw = function() {
  var a = this.Fb.Pc();
  a.designMode = "on";
  z.gr && a.execCommand("styleWithCSS", z.s, z.s)
};
z.w.Bv = function() {
  this.Yp && (0,z.sw)(this) && (0,z.fe)(this.Yp, this.H())
};
z.w.Sd = function() {
  return 2 == this.bh
};
z.w.hk = function() {
  return 1 == this.bh
};
z.w.focus = function() {
  if(!z.ar && this.Fc()) {
    this.Fb.Bb().focus()
  }else {
    if(z.Rd) {
      var a = this.nm.pageXOffset, b = this.nm.pageYOffset
    }
    this.H().focus();
    z.Rd && this.nm.scrollTo(a, b)
  }
};
z.w.Jv = function(a) {
  var b = this.ub;
  if(b) {
    var b = b.innerHTML, c = {}, b = this.gn(8, b, c), d = this.zi.ab("IFRAME", (0,z.uw)(this));
    if((0,z.sw)(this)) {
      var e = (0,z.ya)(this.xv, this, d, b, c);
      this.oq = (0,z.Dn)(d, z.Zk, e, z.m);
      a && (d.src = a)
    }
    a = this.ub;
    d.className = a.className;
    d.id = a.id;
    (0,z.Jv)(d, a);
    (0,z.sw)(this) || this.xv(d, b, c)
  }
};
z.w.nw = function() {
  var a = this.ub;
  if(a) {
    var b;
    b = this.Fc() && (b = this.Fb) ? (b = b.Bb()) && b.frameElement : z.n;
    b && (0,z.Jv)(a, b)
  }
};
z.w.xv = function(a, b, c) {
  (0,z.tw)(this);
  a.allowTransparency = "true";
  var d = (0,z.jc)(this.ub);
  c = new z.Mv(this.id, (0,z.sc)(d.eb), c);
  if((0,z.sw)(this)) {
    var e = (0,z.Mc)(a).body;
    z.ar && (e.contentEditable = z.m);
    e.className = "editable";
    e.setAttribute("g_editable", z.m);
    e.hideFocus = z.m;
    e.id = c.bv;
    (0,z.Sd)(e, c.nq);
    e.innerHTML = b
  }else {
    var d = new z.Nv(this.H(), this.Yp), f = [];
    c.Pp && c.or && f.push("\x3c!DOCTYPE HTML\x3e");
    f.push('\x3chtml style\x3d"background:none transparent;min-width:0;');
    c.Pp && f.push("height:", c.cv ? "100%" : "auto");
    f.push('"\x3e');
    f.push("\x3chead\x3e\x3cstyle\x3e");
    d && d.Lu && f.push(d.Lu);
    z.R && c.or && f.push(" img {-moz-force-broken-image-icon: 1;}");
    f.push("\x3c/style\x3e\x3c/head\x3e");
    f.push('\x3cbody g_editable\x3d"true" hidefocus\x3d"true" ');
    z.ar && f.push("contentEditable ");
    f.push('class\x3d"editable ');
    f.push('" id\x3d"', c.bv, '" style\x3d"min-width:0;');
    z.R && c.Pp && (f.push(";width:100%;border:0;margin:0;background:none transparent;", ";height:", c.or ? "100%" : "auto"), c.cv ? f.push(";overflow:auto") : f.push(";overflow-y:hidden;overflow-x:auto"));
    z.Rd && f.push(";outline:hidden");
    for(e in c.nq) {
      f.push(";" + e + ":" + c.nq[e])
    }
    f.push('"\x3e', b, "\x3c/body\x3e\x3c/html\x3e");
    b = f.join("");
    e = (0,z.Mc)(a);
    e.open();
    e.write(b);
    e.close()
  }
  (0,z.Zv)(this, (0,z.Mc)(a).body);
  !z.ar && this.Fc() && this.Gw();
  (0,z.pw)(this)
};
(0,z.C)(z.vw, z.Ov);
z.w = z.vw.prototype;
z.w.vd = (0,z.Be)("goog.editor.ContentEditableField");
z.w.Fc = (0,z.v)(z.s);
z.w.Gw = z.ja;
z.w.Bv = (0,z.t)();
z.w.Jv = function() {
  var a = this.ub;
  a && ((0,z.Zv)(this, a), a.contentEditable = z.m, (0,z.cw)(this, a.innerHTML, a), (0,z.pw)(this))
};
z.w.nw = z.ja;
(0,z.C)(z.ww, z.Hd);
z.ww.prototype.toString = function() {
  for(var a = [], b, c = 0;b = this.Sm[c];c++) {
    a.push(this.Um[c] + "," + b)
  }
  return a.join("\n")
};
z.ww.prototype.o = function() {
  delete this.Um;
  delete this.Sm
};
(0,z.C)(z.yw, z.io);
(0,z.C)(z.zw, z.io);
z.w = z.zw.prototype;
z.w.Km = z.n;
z.w.Hi = function() {
  (0,z.Aw)(this, this.Ec, this.gh)
};
z.w.er = function() {
  (0,z.Aw)(this, this.gh, this.Ec)
};
z.w.hi = function() {
  if(!(this.Km || 0 == this.an.length)) {
    var a = this.an.shift();
    this.dispatchEvent({type:a.type, state:a.state}) && (a.state.MB ? (this.Km = (0,z.Dn)(a.state, "action_completed", this.kC, z.s, this), a.fv.call(a.state)) : (a.fv.call(a.state), this.hi()))
  }
};
z.w.kC = function() {
  (0,z.Mn)(this.Km);
  this.Km = z.n;
  this.hi()
};
(0,z.C)(z.Bw, z.$);
z.Bw.prototype.vd = (0,z.Be)("goog.editor.plugins.UndoRedo");
z.Bw.prototype.ek = z.n;
z.FB = (0,z.qb)({rF:"+undo", gF:"+redo"});
z.w = z.Bw.prototype;
z.w.ah = function(a) {
  return a in z.FB
};
z.w.Jw = function(a) {
  this.disable(a);
  this.Wj = z.n
};
z.w.enable = function(a) {
  if(!this.isEnabled(a)) {
    (0,z.jw)(a);
    var b = new z.jo(this);
    z.R || (0,z.ko)(b, a, "beforechange", this.tC);
    (0,z.ko)(b, a, z.Rv, this.xC);
    (0,z.ko)(b, a, "blur", this.uC);
    this.Sg[a.Oe] = b;
    (0,z.Cw)(this, a)
  }
};
z.w.disable = function(a) {
  (0,z.jw)(a);
  var b = this.Sg[a.Oe];
  b && (b.Wa(), delete this.Sg[a.Oe]);
  this.Qj[a.Oe] && delete this.Qj[a.Oe]
};
z.w.isEnabled = function(a) {
  return!!this.Sg[a.Oe]
};
z.w.o = function() {
  z.Bw.q.o.call(this);
  for(var a in this.Sg) {
    this.Sg[a].Wa(), delete this.Sg[a]
  }
  this.Wj = z.n;
  this.$c && (this.$c.Wa(), delete this.$c)
};
z.w.Sa = (0,z.v)("UndoRedo");
z.w.execCommand = function(a) {
  "+undo" == a ? this.$c.Hi() : "+redo" == a && this.$c.er()
};
z.w.queryCommandValue = function(a) {
  var b = z.n;
  "+undo" == a ? b = 0 < this.$c.Ec.length : "+redo" == a && (b = 0 < this.$c.gh.length);
  return b
};
z.w.dC = function() {
  this.s().dispatchEvent({type:"cvc", kG:["+redo", "+undo"]})
};
z.w.ND = function(a, b, c) {
  var d = this.s();
  if(d) {
    (0,z.iw)(d, z.m);
    try {
      d.Ff();
      d.execCommand("clearlorem", z.m);
      (0,z.Ev)(d.H(), b);
      c && c.select();
      var e = this.s();
      d.focus();
      e && e.Oe != a.Vj && e.execCommand("updatelorem");
      var f = this.Qj[a.Vj];
      f.ag = b;
      f.Iw = c
    }catch(h) {
      this.vd.log(z.jf, "Error while restoring undo state", h)
    }finally {
      this.ek = a, d.Me(), (0,z.gw)(d)
    }
  }
};
z.w.Im = function(a, b, c) {
  if(c) {
    var d;
    "z" == b ? d = a.shiftKey ? "+redo" : "+undo" : "y" == b && (d = "+redo");
    if(d) {
      return(a = "+undo" == d ? this.$c.Ec[this.$c.Ec.length - 1] : this.$c.gh[this.$c.gh.length - 1]) && a.Vj ? this.s().execCommand(d) : this.execCommand(d), z.m
    }
  }
  return z.s
};
z.w.tC = function(a) {
  if(!this.ek) {
    a = a.target;
    var b = a.Oe;
    this.yv != b && (this.yv = b, (0,z.Cw)(this, a))
  }
};
z.w.xC = function(a) {
  this.ek ? (a = this.ek, this.ek = z.n, a.dispatchEvent("action_completed")) : (0,z.Cw)(this, a.target)
};
z.w.uC = function(a) {
  (a = a.target) && (0,z.jw)(a)
};
(0,z.C)(z.Ew, z.yw);
z.Ew.prototype.Hi = function() {
  this.ow(this, this.ag, this.Iw)
};
z.Ew.prototype.er = function() {
  this.ow(this, this.fr, this.MD)
};
z.Ew.prototype.Ab = function(a) {
  return this.Vj == a.Vj && this.ag == a.ag && this.fr == a.fr
};
z.Dw.prototype.toString = function() {
  return z.$q ? "W3C:" + this.oa.toString() + "\n" + this.pr + ":" + this.na.toString() + "\n" + this.kq : "IE:" + this.oa + "," + this.na
};
z.Dw.prototype.select = function() {
  var a = this.td(this.Tg.H());
  a && (z.Zq && this.Tg.H().focus(), (a && a.addElement ? (0,z.pt)(a) : (0,z.ff)((0,z.df)(a), z.l)).select())
};
z.Dw.prototype.td = function(a) {
  if(z.$q) {
    var b = (0,z.xw)(this.oa, a);
    a = (0,z.xw)(this.na, a);
    return!b || !a ? z.n : (0,z.At)(b, this.pr, a, this.kq).sd()
  }
  b = a.ownerDocument.body.createTextRange();
  b.moveToElementText(a);
  b.collapse(z.m);
  b.moveEnd("character", this.na);
  b.moveStart("character", this.oa);
  return b
};
z.Sw.prototype.H = (0,z.ea)("D");
z.Sw.prototype.getSelection = (0,z.ea)("Bd");
z.Sw.prototype.xd = (0,z.x)(5);
z.Uw.prototype.isCollapsed = function() {
  return this.start.$ == this.end.$ && this.start.offset == this.end.offset
};
z.Uw.prototype.ga = function() {
  return new z.Uw(this.start.ga(), this.end.ga(), this.xb)
};
z.Vw.prototype.ga = function() {
  return new z.Vw(this.$, this.offset)
};
z.jx.prototype.Yy = function(a) {
  var b = (0,z.Ww)(a);
  a = a.H();
  this.Vc(b);
  (0,z.Jw)(a, z.s)
};
z.jx.prototype.Qq = z.ja;
z.jx.prototype.Vc = function(a) {
  (0,z.bx)(a, function(a, c, d) {
    this.Qq(a, c, d)
  }, this, z.m);
  (0,z.Zw)(a)
};
(0,z.C)(z.lx, z.jx);
z.lx.prototype.Qq = function(a) {
  (0,z.Lt)(a.type) || (this.Yh && a.type != this.Fd && (a.type = this.Fd), !this.Yh && a.type == this.Fd && (a.type = 1))
};
(0,z.C)(z.mx, z.jx);
z.mx.prototype.Qq = function(a, b, c) {
  if(!(0,z.Lt)(a.type)) {
    if(this.Yh === z.l) {
      var d = (0,z.$s)(this.Fd, b, c);
      this.Yh = (0,z.mt)(a, d)
    }
    b = (0,z.$s)(this.Fd, b, c);
    this.Yh ? (0,z.mt)(a, b) : (0,z.It)(a, b)
  }
};
(0,z.C)(z.ox, z.$);
z.ox.prototype.Sa = (0,z.Af)("FormattingPlugin");
z.GB = {Rw:"P_1", Gk:"P_2", Hk:"P_3", Ek:"P_6", En:"P_7", Sw:"P_8", Uw:"M_1", Qw:"M_2"};
z.HB = (0,z.qb)(z.GB);
z.w = z.ox.prototype;
z.w.ah = function(a) {
  return a in z.HB
};
z.w.kc = function(a) {
  (0,z.Hv)(a) ? (this.Rl = z.m, (0,window.setTimeout)(function() {
    (0,z.qx)(this);
    this.Rl = z.s
  }.bind(this), 0)) : (40 == a.keyCode || 38 == a.keyCode || 37 == a.keyCode || 39 == a.keyCode) && (0,z.px)(this);
  return z.s
};
z.w.Jm = function() {
  (0,z.qx)(this);
  return z.s
};
z.w.execCommand = function(a) {
  var b = this.s();
  if(0 === a.indexOf("P_")) {
    (0,z.kx)(new z.lx((0,window.Number)(a.substring(2)), !b.queryCommandValue(a)), b)
  }else {
    if(0 === a.indexOf("M_")) {
      var c = (0,window.Number)(a.substring(2)), d = (0,z.fw)(b);
      d && d.isCollapsed() ? (this.rg[a] = !this.rg[a], a = (0,z.rx)(this, d), a || ((0,z.Jw)(b.H(), z.s), a = (0,z.rx)(this, d)), a && (this.Zs = a, this.Rl = z.s)) : (0,z.kx)(new z.mx(c), b)
    }
  }
};
z.w.queryCommandValue = function(a) {
  if(0 === a.indexOf("P_")) {
    a = (0,window.Number)(a.substring(2));
    var b = this.s().H(), c = (0,z.fw)(this.s()), d;
    if(d = c) {
      d = c.ba(), d = (0,z.av)(d, z.Lf, b)
    }
    var e;
    if(e = c) {
      e = c.ra(), e = (0,z.av)(e, z.Lf, b)
    }
    b = e;
    if(!d || !b) {
      return z.s
    }
    for(e = d;e && e != b.nextSibling;e = e.nextSibling) {
      if(!(e == b && e != d && 0 === (0,z.Xu)((0,z.hu)(c, z.s), b)) && (!(0,z.Nf)(e) || (0,z.Gw)(e) != a)) {
        return z.s
      }
    }
    return z.m
  }
  (0,z.g)((0,window.Error)("No handler for command " + a))
};
(0,z.C)(z.sx, z.$);
z.sx.prototype.Sa = (0,z.Af)("FormattingShortcutsPlugin");
z.IB = {u:"DO NOTHING", k:"+link", b:"M_1", i:"M_2", 0:"P_1", 1:"P_2", 2:"P_3", 5:"P_6", 6:"P_8", 7:"P_7"};
z.sx.prototype.kc = function(a) {
  return 73 == a.keyCode && a.ctrlKey && z.ig ? (a.preventDefault(), z.m) : z.s
};
z.sx.prototype.Im = function(a, b, c) {
  return!c ? z.s : "k" == b && !a.shiftKey ? ((a = this.s().execCommand("+link")) && a.lC(this.s()), z.m) : (b = z.IB[b]) ? (this.s().execCommand(b), z.R && a.stopPropagation(), z.m) : z.s
};
(0,z.C)(z.tx, z.io);
(0,z.C)(z.vx, z.An);
z.ux = z.R || z.uc && (0,z.Ub)(532);
z.w = z.tx.prototype;
z.w.Yg = z.s;
z.w.Hv = 0;
z.w.wC = function(a) {
  (0,z.wx)(this, a)
};
z.w.vC = function(a) {
  (0,z.xx)(this, a)
};
z.w.tv = function(a) {
  this.Yg && this.dispatchEvent(new z.vx("updateIme", a))
};
z.w.wq = function(a) {
  if(!z.ux) {
    var b = this.Yg;
    !b && 229 == a.keyCode ? (0,z.wx)(this, a) : b && 229 != a.keyCode ? (0,z.yx)(a) && (0,z.xx)(this, a) : b && this.dispatchEvent(new z.vx("updateIme", a))
  }
  (0,z.yx)(a) && (this.Hv = a.keyCode)
};
z.w.FC = function(a) {
  !z.ux && (z.uc && 229 == this.Hv && this.Yg) && (0,z.xx)(this, a)
};
z.w.BC = function(a) {
  if(this.Yg) {
    switch(a.keyCode) {
      case 13:
      ;
      case 9:
      ;
      case 27:
        (0,z.xx)(this, a)
    }
  }
};
z.w.o = function() {
  this.Lf.Wa();
  this.Lq.Wa();
  this.Xu = z.n;
  z.tx.q.o.call(this)
};
(0,z.C)(z.zx, z.$);
z.zx.prototype.Sa = (0,z.Af)("ImePlugin");
z.zx.prototype.enable = function(a) {
  z.zx.q.enable.call(this, a);
  this.Co = new z.tx(a.H());
  a = (0,z.Bv)(a.Me.bind(a));
  this.Co.addEventListener("endIme", a)
};
z.zx.prototype.disable = function(a) {
  (0,z.Kd)(this.Co);
  z.zx.q.disable.call(this, a)
};
(0,z.C)(z.Ax, z.$);
z.Ax.prototype.Sa = (0,z.Af)("KeyboardShortcutPlugin");
z.Ax.prototype.Im = function(a, b, c) {
  return c && b in this.zp ? (this.zp[b].Xj.call(this.zp[b].Nj), z.m) : z.s
};
z.Ax.prototype.di = function(a, b, c) {
  this.ml[a] = {Xj:b, Nj:c}
};
z.Ax.prototype.kc = function(a) {
  return a.keyCode in this.ml ? !!this.ml[a.keyCode].Xj.call(this.ml[a.keyCode].Nj, a) : z.s
};
(0,z.C)(z.Bx, z.$);
z.w = z.Bx.prototype;
z.w.Sa = (0,z.Af)("SelectionNormalizingPlugin");
z.w.Yx = function() {
  (0,z.Zw)((0,z.Ww)(this.s()))
};
z.w.enable = function(a) {
  z.Bx.q.enable.call(this, a);
  this.kt = (0,z.T)(a.H(), "mouseup", this.ty, this);
  this.it = (0,z.T)(a.H(), "mousedown", this.ll, this)
};
z.w.disable = function(a) {
  z.Bx.q.disable.call(this, a);
  (0,z.Ff)(this.kt);
  (0,z.Ff)(this.it)
};
z.w.ty = function(a) {
  if((0,z.Cx)(a)) {
    var b = (0,z.qv)(0, a.target), c = (0,z.wt)(window);
    c && ((0,z.Rt)((0,z.Je)(c), (0,z.Ke)(c), b.z, b.offset).select(), a.preventDefault())
  }
};
z.w.ll = function(a) {
  if((0,z.Cx)(a)) {
    var b = (0,z.qv)(0, a.target);
    (0,z.sj)(function() {
      (0,z.At)(b.z, b.offset, b.z, b.offset).select()
    })
  }
};
z.w.kc = function(a) {
  switch(a.keyCode) {
    case 38:
    ;
    case 40:
    ;
    case 37:
    ;
    case 39:
      this.ps.start();
      break;
    case 65:
      if(z.ig ? a.metaKey : a.ctrlKey) {
        var b = this.s(), c = (0,z.fw)(b);
        if(b = (c && (0,z.yv)(c.wc(), b.H())).querySelector("figcaption")) {
          return(0,z.yf)(b).select(), a.preventDefault(), z.m
        }
      }
  }
  return z.s
};
(0,z.C)(z.Dx, z.$g);
z.w = z.Dx.prototype;
z.w.field = z.n;
z.w.zh = z.n;
z.w.Ah = z.n;
z.w.Ss = z.m;
z.w.sl = z.m;
z.w.isEnabled = (0,z.ea)("sl");
z.w.tw = function(a) {
  a != this.sl && this.field && (this.field.ub.contentEditable = a);
  this.sl = a
};
z.w.di = function(a, b, c) {
  this.bu.di(a, b, c)
};
z.w.aa = function(a, b) {
  this.field ? (b && (0,z.g)((0,window.Error)("Can only prepend plugins before editor is activated")), this.field.aa(a)) : b ? this.tj.unshift(a) : this.tj.push(a)
};
z.w.select = function() {
  (0,z.yf)(this.field.H()).select()
};
z.w.ya = function() {
  if(!this.zh || this.field.ri) {
    var a = (0,z.nw)(this.field);
    this.sj ? (a = a.replace(/<br>/g, "\n"), -1 != a.indexOf("\x3c") && (0,z.g)((0,window.Error)("Sanitization plugin failure")), this.zh = (0,z.Cu)(a)) : this.zh = a
  }
  return this.zh
};
z.w.o = function() {
  if(this.field) {
    if(this.field.bh != z.Vv) {
      var a = this.field;
      a.bh == z.Vv && (0,z.g)((0,window.Error)("makeUneditable: Field is already uneditable"));
      (0,z.jw)(a);
      (0,z.Lv)(a.jr);
      a.execCommand("clearlorem");
      (0,z.tw)(a);
      var b = a.ub;
      z.qw == b.id && (z.qw = z.n);
      (0,z.aw)(a);
      if((0,z.oa)(z.n)) {
        (0,z.Ev)(b, z.n);
        var c = a.ub;
        c.removeAttribute("contentEditable");
        c.removeAttribute("g_editable");
        c.removeAttribute("role");
        a.id ? c.id = a.id : c.removeAttribute("id");
        c.className = a.TD || "";
        var d = a.cssText;
        d ? (0,z.pc)(c, {style:d}) : c.removeAttribute("style");
        (0,z.oa)(a.Yv) && ((0,z.Sd)(c, "lineHeight", a.Yv), a.Yv = z.n)
      }
      a.nw();
      (0,z.$v)(a);
      z.uc && b.blur();
      a.execCommand("updatelorem");
      a.dispatchEvent("unload");
      this.field.ub.contentEditable = z.s
    }
    this.field.Wa();
    this.field = z.n
  }
  z.Dx.q.o.call(this)
};
z.w.Of = (0,z.v)(z.s);
z.w.focus = function(a) {
  if(a) {
    try {
      (0,z.Cv)(this.field.H().lastChild, z.s)
    }catch(b) {
      this.field.focus()
    }
  }else {
    this.field.focus()
  }
};
z.w.kr = function(a) {
  this.field && this.field.H() && (this.field.H().style.visibility = a ? "" : "hidden");
  this.Ss = a
};
z.w.ca = function() {
  z.Dx.q.ca.call(this);
  if(!this.field) {
    window.document.getElementById(this.Is) || (0,z.g)((0,window.Error)("Element must be in DOM before editor is activated"));
    this.field = new z.vw(this.Is);
    this.field.xr = z.m;
    this.field.aa(new z.Bw);
    this.field.aa(this.bu);
    for(var a = 0;a < this.tj.length;a++) {
      this.field.aa(this.tj[a])
    }
    this.field.addEventListener(z.Rv, this.Yo, z.s, this);
    if(this.sl) {
      a = this.field;
      a.bh = 1;
      var b = a.ub;
      a.nodeName = b.nodeName;
      a.TD = b.className;
      a.cssText = b.style.cssText;
      b.className += " editable";
      a.Jv(z.l)
    }
    this.tj.length = 0
  }
  this.kr(this.Ss)
};
z.w.nh = function(a) {
  this.sj && (a = (0,z.Da)(a).replace(/\n/g, "\x3cbr\x3e"));
  (0,z.ow)(this.field, a, z.s, z.m);
  this.Ah = this.zh = z.n
};
z.w.Yo = function() {
  this.Ah = this.zh = z.n;
  this.F("change")
};
(0,z.C)(z.Ex, z.$);
z.w = z.Ex.prototype;
z.w.Sa = (0,z.Af)("FocusHandlingPlugin");
z.w.enable = function(a) {
  z.Ex.q.enable.call(this, a);
  a.addEventListener("focus", this.$j, z.s, this);
  a.addEventListener("blur", this.oi, z.s, this)
};
z.w.disable = function(a) {
  z.Ex.q.disable.call(this, a);
  a.removeEventListener("focus", this.$j, z.s, this);
  a.removeEventListener("blur", this.oi, z.s, this)
};
z.w.$j = (0,z.t)();
z.w.oi = (0,z.t)();
(0,z.C)(z.Fx, z.Ex);
z.w = z.Fx.prototype;
z.w.Sa = (0,z.Af)("DefaultFieldTextPlugin");
z.w.enable = function(a) {
  z.Fx.q.enable.call(this, a);
  a.H().setAttribute("data-default-value", this.Fx);
  if((0,z.Fu)(this.s().H()) || (0,z.vz)(this.s().H())) {
    (0,z.ow)(a, this.jo), (0,z.N)(a.ub, "default-value")
  }
};
z.w.disable = function(a) {
  a.ub.removeAttribute("data-default-value");
  z.Fx.q.disable.call(this, a)
};
z.w.ah = function(a) {
  return"updatelorem" == a
};
z.w.execCommand = function() {
  if((0,z.Fu)(this.s().H()) || (0,z.vz)(this.s().H())) {
    var a = this.s();
    (0,z.ow)(a, this.jo);
    (0,z.N)(a.H(), "default-value")
  }
};
z.w.$j = function() {
  (0,z.Ix)(this.s().H())
};
z.w.oi = function() {
  var a = this.s();
  (0,z.Fu)(this.s().H()) && ((0,z.ow)(a, this.jo), (0,z.N)(a.H(), "default-value"))
};
(0,z.C)(z.Gx, z.$);
z.w = z.Gx.prototype;
z.w.Sa = (0,z.Af)("DefaultTextPlugin");
z.w.enable = function(a) {
  z.Gx.q.enable.call(this, a);
  (0,z.Dn)(a.H(), "mousedown", this.ll, z.s, this);
  (0,z.Dn)(a, "beforechange", this.xs, z.s, this)
};
z.w.disable = function(a) {
  (0,z.Ln)(a, "beforechange", this.xs, z.s, this);
  (0,z.Ln)(a.ub, "mousedown", this.ll, z.s, this);
  z.Gx.q.disable.call(this, a)
};
z.w.Mj = function(a) {
  (0,z.vz)(a) && (0,z.hv)(a);
  a = a.querySelectorAll("[data-default-value]");
  for(var b = a.length, c = 0;c < b;c++) {
    var d = a[c];
    (0,z.vz)(d) && (0,z.hv)(d)
  }
};
z.w.kc = function(a) {
  if(9 == a.keyCode) {
    return z.s
  }
  var b = (0,z.fw)(this.s());
  if((b = b && (0,z.Hx)(this, b.ba())) && (0,z.Ix)(b)) {
    if((0,z.Hv)(a) || 0 === a.keyCode && 0 === a.charCode || 86 == a.keyCode) {
      (0,z.yf)(b).select(), (0,z.O)(b, "default-value")
    }else {
      return a.preventDefault(), z.m
    }
  }
  return z.s
};
z.w.ll = function(a) {
  var b = (0,z.Hx)(this, a.target);
  b && (0,z.Ix)(b) && (b.focus(), a.preventDefault())
};
z.w.xs = function() {
  var a = (0,z.fw)(this.s());
  if((a = a ? (0,z.Hx)(this, a.ba()) : z.n) && (0,z.vz)(a)) {
    (0,z.hv)(a), (0,z.sv)(a), (0,z.Cv)(a.firstChild, z.m), (0,z.O)(a, "default-value")
  }
};
(0,z.C)(z.wz, z.jx);
z.wz.prototype.WC = function(a) {
  return!a.id ? z.s : (0,z.Ba)(a.id, "internal-source-marker_") || (0,z.Ba)(a.id, "docs-internal-guid")
};
z.wz.prototype.Vc = function(a) {
  var b = window.document.createElement("div");
  b.innerHTML = this.Ny;
  (0,z.xv)(b, this.WC.bind(this));
  (0,z.Jw)(b, z.m);
  var c = (0,z.tv)(b);
  if(c.length) {
    b = (0,z.ax)(a, a.getSelection().end.$).name;
    (0,z.$w)(a, z.m);
    var d = a.getSelection().start, e = (0,z.ax)(a, d.$), f = e.split(d.offset);
    e.append((0,z.Qw)(c[0]));
    (0,z.dx)(a, d.$);
    for(var h = 1;h < c.length;h++) {
      (0,z.ix)(a, d.$ + h, (0,z.Qw)(c[h]))
    }
    c = d.$ + c.length - 1;
    h = (0,z.ax)(a, c);
    h.append(f);
    e != h && b != e.name && (h.name = b);
    (0,z.dx)(a, c);
    (0,z.Yw)(a, d.$, d.offset, c, h.text.length - f.text.length)
  }
};
(0,z.C)(z.xz, z.jx);
z.xz.prototype.Vc = function(a) {
  (0,z.$w)(a, z.m);
  var b = a.getSelection(), c = this.Av((0,z.ax)(a, b.start.$), b.start.offset);
  b.start.offset += c;
  b.end.offset += c;
  (0,z.dx)(a, b.start.$);
  (0,z.Zw)(a)
};
z.Lz = (0,z.ub)("", "(", "[", "{", " ", " ", "\n");
(0,z.C)(z.Mz, z.jx);
z.Mz.prototype.Vc = function(a) {
  var b = a.getSelection(), c = b.start.$;
  if(8 != (0,z.ax)(a, c).type) {
    var d = b.start.offset, e = b.end.$, b = (0,z.ax)(a, e).text.length - b.end.offset;
    (0,z.bx)(a, this.rD, this, z.m);
    (0,z.Yw)(a, c, d, e, (0,z.ax)(a, e).text.length - b)
  }
};
z.Mz.prototype.rD = function(a, b, c) {
  for(var d = b;d < c;d++) {
    var e = a.text.charAt(d), f = 0;
    " " == e || " " == e ? ((0,z.lt)(a, d, d + 1), (0,z.Cz)(a, d), f = (0,z.Hz)(a, d) - 1) : "-" == e && 1 <= d - b ? ((0,z.lt)(a, d, d + 1), f = (0,z.Az)(a, d) - 1) : "\x3e" == e && 1 <= d - b ? ((0,z.lt)(a, d, d + 1), f = (0,z.Bz)(a, d) - 1) : "." == e && 2 <= d - b ? ((0,z.lt)(a, d, d + 1), f = (0,z.zz)(a, d) - 1) : "'" == e ? ((0,z.lt)(a, d, d + 1), f = (0,z.Iz)(a, d) - 1) : '"' == e && ((0,z.lt)(a, d, d + 1), f = (0,z.Kz)(a, d) - 1);
    d += f;
    c += f
  }
  (0,z.Cz)(a, c)
};
(0,z.C)(z.Nz, z.$);
z.w = z.Nz.prototype;
z.w.Kt = z.n;
z.w.Sa = (0,z.Af)("PastePlugin");
z.w.enable = function(a) {
  z.Nz.q.enable.call(this, a);
  this.Kt = (0,z.T)(a.H(), "paste", this.wy, this)
};
z.w.disable = function(a) {
  z.Nz.q.disable.call(this, a);
  (0,z.Ff)(this.Kt)
};
z.w.o = function() {
  window.document.body.removeChild(this.Kb);
  this.Kb = z.n;
  z.Nz.q.o.call(this)
};
z.w.kc = function(a) {
  if(86 == a.keyCode && a.shiftKey && (a.metaKey || a.ctrlKey)) {
    this.Ep = z.m;
    var b = this;
    (0,window.setTimeout)(function() {
      b.Ep = z.s
    }, 0)
  }
  return z.s
};
z.w.wy = function(a) {
  var b = (0,z.Qz)(this, a);
  if(b !== z.n) {
    b = (0,z.Oz)(this, b), a.preventDefault(), (0,z.Pz)(this, b)
  }else {
    var c = this.s().H(), d = (a = (0,z.fw)(this.s())) && (a.ba() && a.ra() ? new z.Tt(a) : z.n), e = c.innerHTML;
    "" === c.textContent.trim() && (c.innerHTML = "|");
    this.Kb.style.top = (window.document.documentElement.scrollTop || window.document.body.scrollTop || 0) + 50 + "px";
    this.Kb.style.display = "block";
    this.Kb.innerHTML = "";
    this.Kb.focus();
    (0,window.setTimeout)(function() {
      var a = this.Kn ? this.Kb.innerHTML : (0,z.Da)(this.Kb.textContent);
      this.Kb.style.display = "none";
      a = (0,z.Oz)(this, a);
      c.innerHTML = e;
      d && d.restore();
      c.focus();
      (0,z.Pz)(this, a)
    }.bind(this), 0)
  }
};
(0,z.C)(z.Sz, z.$);
z.Sz.prototype.Sa = (0,z.Af)("SanitizationPlugin");
z.Sz.prototype.fw = function(a) {
  var b = window.document.createElement("div");
  b.innerHTML = a;
  (0,z.Jw)(b, z.s);
  (0,z.Xw)(b, z.s);
  a = new z.Sw(b, z.n);
  for(var c = 0;c < a.Jb.length;c++) {
    (0,z.dx)(a, c)
  }
  return b.innerHTML
};
z.Sz.prototype.Mj = function(a) {
  (0,z.Rz)(a, this.EA)
};
z.Sz.prototype.Gu = function(a) {
  return(0,z.Qu)(a)
};
(0,z.C)(z.Tz, z.$);
z.Tz.prototype.Sa = (0,z.Af)("SingleLinePlugin");
z.Tz.prototype.kc = function(a) {
  return 13 == a.keyCode ? (a.preventDefault(), z.m) : z.s
};
(0,z.C)(z.Uz, z.jx);
z.Uz.prototype.Vc = function(a) {
  var b = a.getSelection(), c = b.start.offset, d = b.end.offset, e = (0,z.ax)(a, b.start.$);
  (0,z.Ht)(e, this.mx, d);
  (0,z.Ht)(e, this.uA, c);
  b.start.offset++;
  b.end.offset++;
  (0,z.dx)(a, b.start.$);
  (0,z.Zw)(a)
};
(0,z.C)(z.Wz, z.$);
z.Wz.prototype.Sa = (0,z.Af)("SmartTextPlugin");
z.Wz.prototype.kc = function(a) {
  return 32 == a.keyCode ? ((0,z.kx)((0,z.yz)(this.gx ? [z.Cz, z.Hz] : z.Hz), this.s()), a.preventDefault(), z.m) : z.s
};
z.Wz.prototype.rv = function(a) {
  return(0,z.Xz)(this, a.Kd.charCode) ? (a.preventDefault(), z.m) : z.s
};
(0,z.C)(z.Yz, z.Dx);
(0,z.C)(z.Zz, z.$);
z.w = z.Zz.prototype;
z.w.Sa = (0,z.Af)("MaxLengthPlugin");
z.w.enable = function(a) {
  z.Zz.q.enable.call(this, a);
  a.addEventListener(z.Rv, this.ic, z.s, this);
  a = a.ub;
  a.setAttribute("data-length", (0,z.zv)(a).length);
  a.setAttribute("data-max-length", this.bd)
};
z.w.disable = function(a) {
  a.removeEventListener(z.Rv, this.ic, z.s, this);
  (0,z.O)(a.ub, "max-length", "close-to-max-length");
  z.Zz.q.disable.call(this, a)
};
z.w.kc = function(a) {
  return!this.Mr && (0,z.Hv)(a) && 8 != a.keyCode && this.s().H().textContent.length >= this.bd && window.getSelection().isCollapsed ? (a.preventDefault(), z.m) : z.s
};
z.w.xq = function() {
  var a = this.s().H();
  a.setAttribute("data-length", (0,z.zv)(a).length);
  return z.s
};
z.w.ic = function() {
  var a = this.s(), b = a.H(), c = (0,z.zv)(b), d = c.length;
  b.setAttribute("data-length", d);
  (0,z.ec)(b, "max-length", d > this.bd);
  (0,z.ec)(b, "close-to-max-length", d > 0.66 * this.bd);
  !this.Mr && d > this.bd && (a.Ff(), (0,z.lw)(a, function() {
    b.innerHTML = "";
    b.innerHTML = (0,z.Da)(c.substr(0, this.bd))
  }, z.s, this))
};
(0,z.C)(z.$z, z.bd);
(0,z.id)(z.$z, z.s, {name:"PostPayload", Yc:"MISSING_TABLE_IN_PROTO_DEFINITION", zc:"", Bc:new z.Yc("undefined"), yd:{1:"id", 2:"title", 3:"content", 4:"postTypeName", 5:"collectionSlug", 6:"newMedia", 7:"mediaIds"}, fields:{id:{C:function() {
  return window.String
}, N:(0,z.v)(z.s), R:(0,z.v)(z.s), S:(0,z.v)(1), defaultValue:(0,z.t)()}, title:{C:function() {
  return window.String
}, N:(0,z.v)(z.s), R:(0,z.v)(z.s), S:(0,z.v)(2), defaultValue:(0,z.t)()}, content:{C:function() {
  return z.aA
}, N:(0,z.v)(z.s), R:(0,z.v)(z.s), S:(0,z.v)(3), defaultValue:(0,z.t)()}, postTypeName:{C:function() {
  return window.String
}, N:(0,z.v)(z.s), R:(0,z.v)(z.s), S:(0,z.v)(4), defaultValue:(0,z.t)()}, collectionSlug:{C:function() {
  return window.String
}, N:(0,z.v)(z.s), R:(0,z.v)(z.s), S:(0,z.v)(5), defaultValue:(0,z.t)()}, newMedia:{C:function() {
  return window.Object
}, N:(0,z.v)(z.s), R:(0,z.v)(z.s), S:(0,z.v)(6), defaultValue:(0,z.t)()}, mediaIds:{C:function() {
  return window.String
}, N:(0,z.v)(z.m), R:(0,z.v)(z.s), S:(0,z.v)(7), defaultValue:(0,z.t)()}}});
z.w = z.$z.prototype;
z.w.xc = function() {
  return(0,z.ed)(this, "id")
};
z.w.Ye = function(a) {
  return(0,z.gd)(this, "id", a)
};
z.w.Qc = function() {
  return(0,z.ed)(this, "title")
};
z.w.fc = function(a) {
  return(0,z.gd)(this, "title", a)
};
z.w.ya = function() {
  return(0,z.ed)(this, "content")
};
z.w.nh = function(a) {
  return(0,z.gd)(this, "content", a)
};
z.w.rq = (0,z.x)(60);
(0,z.C)(z.aA, z.bd);
(0,z.id)(z.aA, z.s, {name:"PostContent", Yc:"MISSING_TABLE_IN_PROTO_DEFINITION", zc:"", Bc:new z.Yc("undefined"), yd:{1:"body", 2:"subtitle", 3:"caption", 4:"image", 5:"bodyModel"}, fields:{body:{C:function() {
  return window.String
}, N:(0,z.v)(z.s), R:(0,z.v)(z.s), S:(0,z.v)(1), defaultValue:(0,z.t)()}, subtitle:{C:function() {
  return window.String
}, N:(0,z.v)(z.s), R:(0,z.v)(z.s), S:(0,z.v)(2), defaultValue:(0,z.t)()}, caption:{C:function() {
  return window.String
}, N:(0,z.v)(z.s), R:(0,z.v)(z.s), S:(0,z.v)(3), defaultValue:(0,z.t)()}, image:{C:function() {
  return z.bA
}, N:(0,z.v)(z.s), R:(0,z.v)(z.s), S:(0,z.v)(4), defaultValue:(0,z.t)()}, bodyModel:{C:function() {
  return z.mh
}, N:(0,z.v)(z.s), R:(0,z.v)(z.s), S:(0,z.v)(5), defaultValue:(0,z.t)()}}});
(0,z.C)(z.bA, z.bd);
(0,z.id)(z.bA, z.s, {name:"PostImageRef", Yc:"MISSING_TABLE_IN_PROTO_DEFINITION", zc:"", Bc:new z.Yc("undefined"), yd:{1:"id", 2:"backgroundSize", 3:"originalWidth", 4:"originalHeight"}, fields:{id:{C:function() {
  return window.String
}, N:(0,z.v)(z.s), R:(0,z.v)(z.s), S:(0,z.v)(1), defaultValue:(0,z.t)()}, backgroundSize:{C:function() {
  return window.String
}, N:(0,z.v)(z.s), R:(0,z.v)(z.s), S:(0,z.v)(2), defaultValue:(0,z.v)("contain")}, originalWidth:{C:function() {
  return window.Number
}, N:(0,z.v)(z.s), R:(0,z.v)(z.s), S:(0,z.v)(3), defaultValue:(0,z.t)()}, originalHeight:{C:function() {
  return window.Number
}, N:(0,z.v)(z.s), R:(0,z.v)(z.s), S:(0,z.v)(4), defaultValue:(0,z.t)()}}});
z.w = z.bA.prototype;
z.w.xc = function() {
  return(0,z.ed)(this, "id")
};
z.w.Ye = function(a) {
  return(0,z.gd)(this, "id", a)
};
z.w.tq = function() {
  return(0,z.ed)(this, "originalWidth")
};
z.w.ph = function(a) {
  return(0,z.gd)(this, "originalWidth", a)
};
z.w.sq = function() {
  return(0,z.ed)(this, "originalHeight")
};
z.w.oh = function(a) {
  return(0,z.gd)(this, "originalHeight", a)
};
(0,z.C)(z.gA, z.ng);
z.w = z.gA.prototype;
z.w.bb = z.n;
z.w.Sb = z.n;
z.w.Zq = function() {
  this.bb && window.document.body.removeChild(this.bb);
  this.bb = window.document.createElement("input");
  this.bb.type = "file";
  this.bb.name = "uploadedFile";
  this.bb.value = "";
  this.bb.style.position = "absolute";
  this.bb.style.left = "-9999px";
  this.bb.style.top = "-9999px";
  window.document.body.appendChild(this.bb);
  (0,z.T)(this.bb, "change", this.Iz, this);
  this.bb.click()
};
z.w.start = function(a) {
  this.abort();
  if(5242880 < a.size) {
    a = (0,window.Error)("File is too big"), a.Eq = 413, this.F("error", this, a)
  }else {
    var b = new window.FormData;
    b.append("uploadedFile", a);
    this.Sb = (0,z.tg)();
    (0,z.T)(this.Sb.upload, "progress", this.Pz, this);
    (0,z.T)(this.Sb, "load", this.pj, this);
    (0,z.T)(this.Sb, "error", this.vg, this);
    (0,z.T)(this.Sb, "timeout", this.vg, this);
    (0,z.T)(this.Sb, "abort", this.bz, this);
    this.Sb.open("POST", "/_/upload");
    this.Sb.setRequestHeader("X-XSRF-Token", "1");
    this.Sb.send(b);
    this.F("start", this);
    this.F("preview", this, a)
  }
};
z.w.abort = function() {
  this.Sb && (this.Sb.abort(), this.Sb = z.n)
};
z.w.o = function() {
  this.abort();
  this.hg();
  z.gA.q.o.call(this)
};
z.w.Iz = function() {
  this.bb && this.bb.files[0] && this.start(this.bb.files[0])
};
z.w.Pz = function(a) {
  this.F("progress", this, a.loaded, a.lengthComputable ? a.total : 0)
};
z.w.pj = function() {
  if(4 == this.Sb.readyState) {
    if(200 == this.Sb.status) {
      var a = (0,z.on)(this.Sb.responseText);
      try {
        var b = window.JSON.parse(a);
        this.F("success", this, b.payload.value.fileId)
      }catch(c) {
        this.F("error", this, c)
      }
    }else {
      a = (0,window.Error)("Upload error"), a.Eq = this.Sb.status, this.F("error", this, a)
    }
    this.hg()
  }
};
z.w.vg = function(a) {
  this.F("error", this, a || (0,window.Error)("Unknown upload error"));
  this.hg()
};
z.w.bz = function() {
  this.F("abort", this, (0,z.dA)());
  this.hg()
};
z.w.hg = function() {
  this.Sb = z.n;
  this.bb && (window.document.body.removeChild(this.bb), this.bb = z.n)
};
(0,z.C)(z.hA, z.ng);
z.w = z.hA.prototype;
z.w.il = "";
z.w.ae = z.n;
z.w.De = z.n;
z.w.Eo = z.s;
z.w.Zq = function() {
  this.abort();
  this.Eo = z.m;
  this.il = "ie9_upload_frame_" + window.Math.floor(1E3 * window.Math.random());
  if(this.De = this.J.open({title:"Please choose an image", jc:'\x3cdiv class\x3d"ie9-dialog"\x3e\x3cform action\x3d"/_/iframe-upload" method\x3d"post" accept-charset\x3d"utf-8" enctype\x3d"multipart/form-data" target\x3d"' + (0,z.Y)(this.il) + '"\x3e\x3cp\x3e\x3cinput type\x3d"file" name\x3d"uploadedFile"\x3e\x3c/p\x3e\x3c/form\x3e\x3cdiv class\x3d"spinner-overlay"\x3e\x3c/div\x3e\x3c/div\x3e'})) {
    this.De.h("close", this.oz, this);
    var a = this.De.L('input[type\x3d"file"]');
    (0,z.T)(a, "change", this.Yo, this)
  }
  this.F("start", this)
};
z.w.abort = function() {
  this.Eo && (this.F("abort", this, (0,z.dA)()), this.hg())
};
z.w.start = function(a) {
  a && (0,z.g)((0,window.Error)("Direct file uploads not supported"))
};
z.w.o = function() {
  this.abort();
  z.hA.q.o.call(this)
};
z.w.Yo = function(a) {
  this.ae = window.document.createElement("iframe");
  this.ae.setAttribute("style", "position:absolute;top:-9999px;left:-9999px;");
  this.ae.setAttribute("id", this.il);
  this.ae.setAttribute("name", this.il);
  window.document.body.appendChild(this.ae);
  (0,z.T)(this.ae, "load", this.pj, this);
  this.De && (this.De.L("form").submit(), (0,z.N)(this.De.L(".overlay-dialog"), "uploading-image"));
  a.preventDefault()
};
z.w.oz = function() {
  this.abort()
};
z.w.pj = function() {
  var a = (0,z.zv)(this.ae.contentWindow.document.body);
  a && (this.F("success", this, a), this.hg())
};
z.w.hg = function() {
  this.Eo = z.s;
  this.ae && (0,z.P)(this.ae);
  this.De.close();
  this.ae = this.De = z.n
};
(0,z.C)(z.oA, z.ng);
z.pA = "contain";
z.JB = {uE:"cover", tE:z.pA};
z.w = z.oA.prototype;
z.w.Hc = "pending-image";
z.w.Pr = z.s;
z.w.kr = function(a) {
  this.D.style.display = a ? "" : "none"
};
z.w.ya = function() {
  return z.Nm.ga(this.Hb)
};
z.w.focus = (0,z.t)();
z.w.Of = function() {
  return"pending-image" === this.Hc || "uploading-image" === this.Hc
};
z.w.ca = function() {
  (0,z.sA)(this, this.D, "dragstart", (0,z.Av)(this.Az));
  (0,z.sA)(this, this.D, "dragenter", (0,z.Av)(this.yz));
  (0,z.sA)(this, this.D, "dragleave", (0,z.Av)(this.zz));
  (0,z.sA)(this, this.D, "dragexit", (0,z.Av)(z.ja));
  (0,z.sA)(this, this.D, "dragover", (0,z.Av)(z.ja));
  (0,z.sA)(this, this.D, "drop", (0,z.Av)(this.rt));
  (0,z.ag)(this.D).g("pick-image", this.CD, this).g("remove-image", this.QA, this).g("toggle-background-size", this.vB, this).g("cancel-upload", this.ef, this);
  this.Hb.xc() && this.Nh()
};
z.w.ta = function() {
  (0,z.dg)(this.D);
  (0,z.Ff)(this.xa);
  this.xa.length = 0;
  this.abort()
};
z.w.o = function() {
  this.ta();
  z.oA.q.o.call(this)
};
z.w.xc = function() {
  return this.Hb.xc()
};
z.w.reset = function() {
  this.abort();
  (0,z.wA)(this);
  (0,z.qA)(this);
  this.Bg && (this.Bg.style.backgroundImage = "")
};
z.w.abort = function() {
  this.fm && this.fm.abort();
  (0,z.qA)(this)
};
z.w.CD = function() {
  this.fm.Zq()
};
z.w.ef = function() {
  this.abort()
};
z.w.QA = function() {
  this.abort();
  (0,z.xA)(this, z.pA);
  (0,z.tA)(this, "");
  (0,z.vA)(this, z.n)
};
z.w.Az = function(a) {
  a.CF = "copy"
};
z.w.yz = function(a) {
  (0,z.N)(a.currentTarget, "image-picker-dragover")
};
z.w.zz = function(a) {
  var b = a.currentTarget.getBoundingClientRect();
  (a.x < b.left || a.clientX > b.right || a.y > b.bottom || a.clientY < b.top) && (0,z.O)(a.currentTarget, "image-picker-dragover")
};
z.w.rt = function(a) {
  (0,z.O)(a.currentTarget, "image-picker-dragover");
  a.dataTransfer && (a.dataTransfer.files && a.dataTransfer.files[0]) && this.fm.start(a.dataTransfer.files[0])
};
z.w.rA = function(a, b) {
  this.Bg && (0,z.G)((0,z.mA)(b), function(a) {
    this.Bg.style.backgroundImage = 'url("' + a + '")';
    this.Bg.style.display = "block"
  }, this)
};
z.w.tA = function() {
  this.Uh("uploading-image");
  (0,z.rA)(this, 0);
  this.Bg && (this.Bg.style.backgroundImage = "");
  this.F("start", this)
};
z.w.sA = function(a, b, c) {
  c && (0,z.rA)(this, window.Math.floor(90 * (b / c)));
  this.F("progress", this, b, c)
};
z.w.pA = function(a, b) {
  var c = (0,z.uA)(this, b), d = 10, e = window.setInterval(function() {
    (0,z.rA)(this, window.Math.floor(100 - d));
    d *= 0.95
  }.bind(this), 50);
  (0,z.H)((0,z.G)((0,z.Bb)(this.fj.load(c), function() {
    window.clearInterval(e)
  }), function() {
    (0,z.rA)(this, 100);
    (0,z.tA)(this, b);
    this.F("complete", this, b)
  }, this), function(a) {
    (0,z.Og)(a);
    this.F("error", this, (0,window.Error)("Couldn't load file " + b))
  }, this)
};
z.w.qA = function(a, b) {
  var c;
  switch(b.Eq) {
    case 413:
      c = (0,z.eA)();
      break;
    case 415:
      c = (0,z.fA)();
      break;
    default:
      c = "Sorry, an error occured while uploading an image."
  }
  this.J.error(c);
  (0,z.wA)(this);
  this.F("error", this, b)
};
z.w.oA = function(a, b) {
  (0,z.wA)(this);
  this.F("abort", this, b)
};
z.w.Uh = function(a) {
  this.Hc != a && ((0,z.O)(this.D, this.Hc), (0,z.N)(this.D, a), this.Hc = a)
};
z.w.vB = function() {
  (0,z.xA)(this, "cover" == (0,z.cA)(this.Hb) ? z.pA : "cover")
};
z.w.Nh = function() {
  for(var a in z.JB) {
    var b = (0,z.uA)(this, this.Hb.xc(), z.JB[a]);
    this.fj.load(b)
  }
};
(0,z.C)(z.zA, z.Fe);
z.zA.prototype.Xf = function() {
  if(!this.hu) {
    return z.n
  }
  var a = (0,z.BA)(this.hu);
  if(!a) {
    return z.n
  }
  var b = (0,z.BA)(this.Rx);
  return!b ? z.n : (0,z.At)(a.z, a.offset, b.z, b.offset)
};
(0,z.C)(z.DA, z.Ex);
z.w = z.DA.prototype;
z.w.Sa = (0,z.Af)("TypeaheadPlugin");
z.w.enable = function(a) {
  z.DA.q.enable.call(this, a);
  this.xp = this.Z.hb.gb();
  this.xa = [(0,z.T)(a.H(), "click", this.jl, this)];
  this.lb = window.document.createElement("div");
  this.lb.className = "typeahead popover popover-bottom";
  this.ft = [(0,z.T)(this.lb, "click", this.py, this), (0,z.T)(this.lb, "mouseover", this.ry, this), (0,z.T)(this.lb, "mouseout", this.qy, this)]
};
z.w.disable = function(a) {
  (0,z.P)(this.lb);
  (0,z.Ff)(this.xa);
  (0,z.Ff)(this.ft);
  this.lb = z.n;
  this.jb = "";
  this.Ql = z.n;
  z.DA.q.disable.call(this, a)
};
z.w.kc = function(a) {
  this.ju = !!~[40, 38, 9, 13, 27].indexOf(a.keyCode);
  (0,z.GA)(this, a);
  return z.s
};
z.w.rv = function(a) {
  if(this.ju) {
    return z.s
  }
  (0,z.GA)(this, a);
  return z.s
};
z.w.xq = function(a) {
  switch(a.keyCode) {
    case 40:
    ;
    case 38:
    ;
    case 16:
    ;
    case 17:
    ;
    case 18:
      break;
    case 9:
    ;
    case 13:
      if(!this.ie) {
        break
      }
      (0,z.EA)(this);
      break;
    case 27:
      if(!this.ie) {
        break
      }
      (0,z.FA)(this);
      break;
    default:
      a = this.s(), (0,z.fw)(a).isCollapsed() && (0,z.kx)((0,z.yz)(z.Ez), a), a = (0,z.St)((0,z.fw)(a)), "contact" != a.getAttribute("rel") ? (0,z.FA)(this) : this.Ql != a && (this.Ql = a, this.jb = (0,z.Nc)(a).substring(1), !this.jb || 2 > this.jb.length ? (0,z.FA)(this) : (0,z.G)(this.fa.get("/search/users/" + (0,window.encodeURIComponent)(this.jb), {V:z.m}), this.KA, this))
  }
  return z.s
};
z.w.$j = function() {
  this.uo = z.m
};
z.w.oi = function() {
  this.uo = z.s;
  !this.To && this.ie && (0,z.FA)(this)
};
z.w.jl = function(a) {
  "A" == a.target.tagName && (a.preventDefault(), a.stopPropagation())
};
z.w.py = function(a) {
  a.stopPropagation();
  a.preventDefault();
  (0,z.EA)(this);
  return z.s
};
z.w.ry = function(a) {
  this.To = z.m;
  var b = this.lb.querySelector(".active");
  b && (0,z.O)(b, "active");
  a.target != this.lb && (a = (0,z.Tc)(a.target, z.n, "typeahead-item")) && (0,z.N)(a, "active")
};
z.w.qy = function(a) {
  (0,z.Hc)(this.lb, a.relatedTarget) || (this.To = z.s, !this.uo && this.ie && (0,z.FA)(this))
};
z.w.KA = function(a) {
  a = a.value;
  if(!a.length) {
    return(0,z.FA)(this)
  }
  this.fe(a.slice(0, 8))
};
z.w.fe = function(a) {
  this.lb.innerHTML = (0,z.sd)(z.mv, {items:a});
  this.lb.parentNode || this.xp.appendChild(this.lb);
  a = this.Ql.getBoundingClientRect();
  this.lb.style.top = a.top + this.xp.scrollTop + a.height - 5 + "px";
  this.lb.style.left = a.left - this.lb.offsetWidth / 2 + 6 + "px";
  this.ie = z.m
};
(0,z.C)(z.HA, z.Dx);
z.lB = {Ji:"cancel", Cr:"delete", Ki:"save", Ow:"blur"};
z.w = z.HA.prototype;
z.w.vp = z.s;
z.w.ng = "";
z.w.zj = 0;
z.w.Aq = function() {
  return this.ng.trim() != this.ya().trim()
};
z.w.clear = function() {
  this.nh("")
};
z.w.save = function() {
  this.ya().length < this.bd && this.ge()
};
z.w.gq = function() {
  this.Fu() && (0,window.confirm)(this.iv()) ? ((0,z.H)(this.Va.cc(this.uq()), (0,z.Xj)(this.J, "Sorry, your attempt to delete failed. Please try again.")), this.F("delete")) : (0,z.IA)(this)
};
z.w.o = function() {
  (0,window.clearTimeout)(this.zj);
  z.HA.q.o.call(this)
};
z.w.ca = function() {
  function a(a) {
    a.stopPropagation()
  }
  z.HA.q.ca.call(this);
  this.ng = this.ya();
  this.nh(this.ng);
  this.di(13, this.$o, this);
  this.di(27, this.ap, this);
  this.field.addEventListener("blur", this.Zo, z.s, this);
  var b = this.field.H();
  (0,z.T)(b, "keydown", a);
  (0,z.T)(b, "keyup", a);
  (0,z.T)(b, "keypress", a)
};
z.w.Se = (0,z.aa)();
z.w.ge = function() {
  if(this.isEnabled()) {
    var a = this.ya().trim();
    a ? (this.tw(z.s), (0,z.Bb)((0,z.H)((0,z.G)(this.Va.send(this.nv(), this.uq(), this.ov(a), {V:z.m}), this.Oz, this), (0,z.Xj)(this.J, "Saving failed. You may be having connectivity issues or notes might be disabled on this post. Please try again.")), this.tw.bind(this, z.m))) : (0,z.sj)(this.gq, this)
  }
};
z.w.Oz = function(a) {
  a = (0,z.Ak)(a.value, a.references);
  this.F(z.tB.Ki, this.Se(a))
};
z.w.$o = function(a) {
  if(this.Hj && this.Hj.ie) {
    return z.s
  }
  a.shiftKey || (a.preventDefault(), this.save());
  return z.m
};
z.w.ap = function(a) {
  if(this.Hj && this.Hj.ie) {
    return z.s
  }
  a.preventDefault();
  (0,z.IA)(this);
  return z.s
};
z.w.Zo = function() {
  this.vp && (this.ya().length >= this.bd ? (0,window.confirm)(this.pv()) ? (0,z.IA)(this) : this.focus() : this.zj = (0,window.setTimeout)(this.ge.bind(this), 100))
};
(0,z.C)(z.JA, z.HA);
z.tB = z.lB;
z.w = z.JA.prototype;
z.w.Mn = z.n;
z.w.Nr = z.n;
z.w.Bo = z.n;
z.w.Ao = z.n;
z.w.Gs = z.n;
z.w.iv = (0,z.v)("Are you sure you want to delete this note?");
z.w.pv = (0,z.v)("Your note is too long, do you want to abandon your changes?");
z.w.Fu = function() {
  return!!this.mj
};
z.w.Se = function(a) {
  return{id:a.noteId, author:(0,z.Q)("currentUser"), postId:a.postId, anchor:a.anchor, noteId:a.noteId, content:a.content, state:a.state, createdAt:a.createdAt, replies:[], Lp:"just now", newHighlight:a.newHighlight || z.n, highlightId:a.highlightId || z.n}
};
z.w.nv = function() {
  return this.mj ? "put" : "post"
};
z.w.uq = function() {
  return"/p/" + this.w + "/notes/" + (this.mj || "new")
};
z.w.ov = function(a) {
  a = {content:a};
  this.Mn && (a.anchor = this.Mn, a.anchorContent = this.Nr);
  this.Bo != z.n && this.Ao != z.n && (a.highlightStart = this.Bo, a.highlightEnd = this.Ao, a.highlightContent = this.Gs);
  return a
};
(0,z.C)(z.MA, z.HA);
z.w = z.MA.prototype;
z.w.iv = (0,z.v)("Are you sure you want to delete this reply?");
z.w.pv = (0,z.v)("Your reply is too long, do you want to abandon your changes?");
z.w.Fu = function() {
  return!!this.sp
};
z.w.Se = function(a) {
  return{id:a.replyId, author:(0,z.Q)("currentUser"), postId:a.postId, noteId:a.noteId, replyId:a.replyId, content:a.content, createdAt:a.createdAt, Lp:"just now"}
};
z.w.nv = function() {
  return this.sp ? "put" : "post"
};
z.w.uq = function() {
  return"/p/" + this.w + "/notes/" + this.mj + "/" + (this.sp || "new-reply")
};
z.w.ov = function(a) {
  return{content:a}
};
(0,z.C)(z.NA, z.$g);
z.NA.prototype.load = function() {
  return(0,z.H)((0,z.G)(this.Va.get("/p/" + this.w + "/notes", {V:z.m, background:z.m}), this.LA, this), z.Og)
};
z.NA.prototype.Sd = (0,z.ea)("Xi");
z.NA.prototype.LA = function(a) {
  var b = a.references.User;
  this.Ge = b[a.post.creatorId];
  var c = a.value;
  if(c) {
    for(var d = 0;d < c.length;d++) {
      var e = c[d];
      if("HIDDEN" != e.state) {
        var f = e.replies, h = b;
        if(f) {
          for(var k = 0;k < f.length;k++) {
            var p = f[k];
            p.author = h[p.author];
            p.Lp = (0,z.iv)((0,window.Number)(p.createdAt))
          }
        }
        f = e;
        h = b;
        (0,z.QA)(this, e.anchor).add({id:f.noteId, author:h[f.author], postId:this.w, highlightId:f.highlightId, anchor:f.anchor, noteId:f.noteId, content:f.content, state:f.state, createdAt:f.createdAt, replies:f.replies || [], Lp:(0,z.iv)((0,window.Number)(f.createdAt))})
      }
    }
  }
  if(a = a.highlights) {
    for(b = 0;b < a.length;b++) {
      this.Dh[a[b].id] = new z.CA(new z.CA(a[b]))
    }
  }
  this.Xi = z.m
};
(0,z.C)(z.ZA, z.Hd);
z.w = z.ZA.prototype;
z.w.Ya = z.n;
z.w.md = z.n;
z.w.Kc = z.n;
z.w.ue = z.n;
z.w.W = "";
z.w.Tf = 0;
z.w.o = function() {
  (0,z.bB)(this);
  (0,z.nB)(this, z.n);
  this.Fe && (0,z.Ff)(this.Fe);
  (0,z.Ff)(this.Xb);
  this.Xb.length = 0;
  (0,window.clearTimeout)(this.al);
  (0,z.Zf)("highlight", this.st, this);
  (0,z.Zf)("twitter", this.tt, this);
  (0,z.dg)(this.dh);
  (0,z.dg)(this.zb);
  (0,z.P)(this.dh);
  (0,z.P)(this.zb);
  this.data.Wa();
  this.Rj && this.Rj.cancel();
  this.Fe = this.Rj = this.data = this.dh = this.zb = this.Ea = this.Cb = z.n;
  this.Ba && this.Ba.Aa("resize-end", this.Ct, this);
  this.ib && this.ib.Wa();
  (0,z.N)(window.document.documentElement, "mobile-notes-variant");
  z.ZA.q.o.call(this)
};
z.w.Sq = (0,z.t)();
z.w.Wq = (0,z.t)();
z.w.Vq = (0,z.t)();
z.w.Xq = (0,z.t)();
z.w.Vv = (0,z.t)();
z.w.sh = (0,z.t)();
z.w.dv = (0,z.t)();
z.w.cy = function(a) {
  a = a.La();
  a.Ug = (0,z.Vu)(a.content, {rel:"", target:""});
  a.Ug = (0,z.ov)(a.Ug);
  for(var b = 0;b < a.replies.length;++b) {
    a.replies[b].Ug = (0,z.Vu)(a.replies[b].content, {rel:"", target:""}), a.replies[b].Ug = (0,z.ov)(a.replies[b].Ug)
  }
  return a
};
z.w.cA = function(a) {
  (0,z.kB)(this, a.value)
};
z.w.Wz = function(a) {
  (a = this.pb["reply_" + a.value]) && a.save()
};
z.w.jz = function(a) {
  var b = this.pb["reply_" + a.value];
  b && (0,z.IA)(b);
  (a = (0,z.Tc)(a.target, z.n, "notes-note")) && (0,z.O)(a, "notes-show-reply-editor")
};
z.w.Cz = function(a) {
  function b() {
    (0,z.O)(h, "notes-edit-mode");
    (0,z.O)(f, "notes-reply-edit-mode");
    (0,z.Kd)(k);
    delete this.pb["reply_" + e]
  }
  var c = a.value.split(","), d = c[0], e = c[1], f = (0,z.Tc)(a.target, z.n, "notes-note"), h = (0,z.Tc)(a.target, z.n, "notes-reply");
  (0,z.N)(h, "notes-edit-mode");
  (0,z.O)(f, "notes-show-reply-editor");
  (0,z.N)(f, "notes-reply-edit-mode");
  a = h.querySelector(".notes-content");
  var k = new z.MA(this.t, a, this.postId, d, e);
  k.h(z.lB.Ki, function(a) {
    for(var c = (0,z.PA)(this.data, d, this.W), f = c.get("replies"), h = 0;h < f.length;h++) {
      if(f[h].replyId == e) {
        c.add("replies", a, h);
        break
      }
    }
    (0,z.dB)(this, z.Xo, c, {replyId:e});
    b.call(this)
  }, this);
  k.h(z.lB.Cr, function() {
    for(var a = (0,z.PA)(this.data, d, this.W), c = a.get("replies"), f = 0;f < c.length;f++) {
      if(c[f].replyId == e) {
        a.removeItem("replies", f);
        break
      }
    }
    (0,z.dB)(this, z.Yo, a, {replyId:e});
    b.call(this)
  }, this);
  k.h(z.lB.Ji, function() {
    var a = (0,z.PA)(this.data, d, this.W);
    (0,z.Dt)(this.ue, a);
    b.call(this)
  }, this);
  k.h("change", this.sh, this);
  k.focus(z.m);
  this.pb["reply_" + e] = k
};
z.w.wz = function(a) {
  (a = this.pb["reply_" + a.value]) && a.gq()
};
z.w.gz = function(a) {
  a = a.get("id");
  this.pb[a] && ((0,z.Kd)(this.pb[a]), delete this.pb[a]);
  this.pb["reply_" + a] && ((0,z.Kd)(this.pb["reply_" + a]), delete this.pb["reply_" + a])
};
z.w.dz = function(a, b) {
  (0,z.O)(b, "notes-show-reply-editor");
  b.setAttribute("data-note-id", (0,z.dh)(a, "id"))
};
z.w.fz = function(a) {
  (0,z.H)((0,z.cB)(this, (0,z.PA)(this.data, a.value, this.W), "PUBLIC"), (0,z.Xj)(this.Sj, "Sorry, we couldn't approve the note. Please try again later and make sure you are logged in."))
};
z.w.lA = function(a) {
  (0,z.H)((0,z.cB)(this, (0,z.PA)(this.data, a.value, this.W), "NEW"), (0,z.Xj)(this.Sj, "Sorry, we couldn't unapprove the note. Please try again later and make sure you are logged in."))
};
z.w.Bz = function(a) {
  function b() {
    (0,z.O)(d, "notes-edit-mode");
    (0,z.Kd)(f);
    delete this.pb[c]
  }
  var c = a.value, d = (0,z.Tc)(a.target, z.n, "notes-note");
  (0,z.N)(d, "notes-edit-mode");
  (0,z.O)(d, "notes-show-reply-editor");
  var e = d.querySelector(".notes-content"), f = new z.JA(this.t, e, this.postId, a.value);
  f.h(z.tB.Ki, function(a) {
    var d = (0,z.PA)(this.data, c, this.W);
    a.replies = d.get("replies");
    d.mh(a);
    (0,z.dB)(this, z.To, d);
    b.call(this)
  }, this);
  f.h(z.tB.Cr, function() {
    var a = (0,z.PA)(this.data, c, this.W);
    (0,z.dB)(this, z.Uo, a);
    (0,z.fh)(a);
    b.call(this)
  }, this);
  f.h(z.tB.Ji, function() {
    var a = (0,z.PA)(this.data, c, this.W);
    (0,z.Dt)(this.ue, a);
    b.call(this)
  }, this);
  f.h("change", this.sh, this);
  f.focus(z.m);
  this.pb[c] = f
};
z.w.Vz = function(a) {
  (a = (0,z.eB)(this, a)) && a.save()
};
z.w.iz = function(a) {
  (a = (0,z.eB)(this, a)) && (0,z.IA)(a)
};
z.w.vz = function(a) {
  (a = (0,z.eB)(this, a)) && a.gq()
};
z.w.Nz = function(a) {
  for(var b = 0;b < a.length;b++) {
    (0,z.qB)(this, (0,z.dh)(a[b], "anchor"))
  }
};
z.w.Gz = function(a) {
  a = a.value;
  this.md == a && (this.md = z.n);
  (0,z.H)((0,z.cB)(this, (0,z.PA)(this.data, a, this.W), "HIDDEN"), (0,z.Xj)(this.Sj, "Sorry, we couldn't hide the note. Please try again later and make sure you are logged in."))
};
z.w.Mz = function(a) {
  a.h("add", this.Nz, this);
  a.h("change", this.Vv, this);
  a.h("remove", this.Wq, this)
};
z.w.Wi = function(a) {
  var b = window.document.createElement("div");
  b.className = "notes-container";
  b.innerHTML = (0,z.sd)(z.VA);
  (0,z.Ec)(b, a);
  return b
};
z.w.Vb = function(a) {
  return(0,z.rv)(this.Ea, a)
};
z.w.L = function(a) {
  return this.zb.querySelector(a)
};
z.w.Wv = function(a) {
  this.lr(a)
};
z.w.lr = function(a) {
  (a = (0,z.Tc)(a.target, z.n, "notes-replies")) && (0,z.O)(a, "notes-replies-hidden")
};
z.w.getSelection = function() {
  var a = (0,z.wt)();
  if(!a || a.isCollapsed()) {
    return z.n
  }
  var b = (0,z.St)(a);
  if(!(0,z.Hc)(this.Ea, b)) {
    return z.n
  }
  var c = (b = (0,z.av)(b, z.Yu, this.Ea)) && (0,z.OA)(this.data, b);
  if(!b) {
    return z.n
  }
  var d = (0,z.Xu)((0,z.hu)(a, z.m), b), e = (0,z.Xu)((0,z.hu)(a, z.s), b);
  return-1 == d || -1 == e ? z.n : new z.TA(a, b, new z.CA({anchor:b.getAttribute("name"), startIndex:d, endIndex:e, content:c.text.substring(d, e)}))
};
(0,z.C)(z.uB, z.ng);
z.uB.prototype.Ho = z.s;
z.uB.prototype.o = function() {
  window.clearTimeout(this.gd);
  (0,z.P)(this.D);
  z.uB.q.o.call(this)
};
z.uB.prototype.FB = function() {
  this.F("update")
};
})(_mdm);
//@ sourceURL=fingerprint:has-editor