(function(z){
z.FE = function(a) {
  return a = "" + ("“" + (0,z.X)((0,z.bi)(a.quote, a.Dn - (4 + a.username.length + a.Gn))) + "” —@" + (0,z.X)(a.username) + " " + (0,z.X)(a.url))
};
z.GE = function(a, b, c, d) {
  z.ZA.call(this, a, b, c, d);
  this.Gj = a.get("twitter");
  this.Ba = a.get("dom-monitor");
  this.Ba.h("resize-end", this.Ct, this);
  this.HA = !!b.get("isPublished");
  (0,z.ag)(this.dh).g("select-highlight", this.Xz, this);
  (0,z.ag)(this.zb).g("hide-reply", this.Hz, this).g("start-note", this.bA, this);
  a = window.document.createElement("div");
  a.className = "highlight-menu";
  a.innerHTML = '\x3cdiv class\x3d\'highlight-menu-inner\'\x3e\x3cul class\x3d"highlight-menu-buttons"\x3e\x3cli class\x3d"highlight-menu-button highlight-menu-notes"\x3e\x3cbutton class\x3d"btn-highlight-menu" data-action\x3d"highlight"\x3e\x3cspan class\x3d"icons icons-notes"\x3e\x3c/span\x3e\x3c/button\x3e\x3c/li\x3e' + (this.HA ? '\x3cli class\x3d"highlight-menu-button highlight-menu-twitter"\x3e\x3cbutton class\x3d"btn-highlight-menu" data-action\x3d"twitter"\x3e\x3cspan class\x3d"icons icons-twitter"\x3e\x3c/span\x3e\x3c/button\x3e\x3c/li\x3e' : 
  "") + "\x3c/ul\x3e\x3c/div\x3e\x3cdiv class\x3d'highlight-menu-arrow-clip'\x3e\x3cspan class\x3d'highlight-menu-arrow'\x3e\x3c/span\x3e\x3c/div\x3e";
  (0,z.Ec)(a, this.Ea);
  this.Hs = a;
  this.ib = new z.uB(a);
  this.ib.h("update", this.nA, this);
  this.Xb.push((0,z.T)(window.document.body, "keyup", this.pt, this));
  this.Xb.push((0,z.T)(window.document.body, "mouseup", this.pt, this));
  (0,z.Wf)("highlight", this.st, this).g("twitter", this.tt, this);
  this.Xb.push((0,z.T)(this.Ea, "click", this.Yz, this));
  this.Xb.push((0,z.T)(window.document.body, "click", this.kz, this, z.m));
  this.ei.h("historyUpdate", this.ut, this)
};
z.HE = function(a, b) {
  (0,z.mB)(a, b.lc);
  (0,z.IE)(a);
  (0,z.sB)(a, b);
  a.Ya && a.Ya.focus()
};
z.JE = function(a, b) {
  (0,z.G)((0,z.nB)(a, b), function() {
    (0,z.gB)(this) || (0,z.sB)(this, b);
    (0,z.KE)(this);
    this.wd.scrollTop = (0,z.Qf)(this.Cb[b]) - 100
  }, a)
};
z.LE = function(a, b, c) {
  if(a.W) {
    b = (0,z.hB)(a, b);
    c = c ? (0,z.ae)(a.Za, c).y : 0;
    var d = b + c, e = d + a.Za.offsetHeight;
    (0,z.Sf)(a.om, function(a) {
      var b = (0,z.hB)(this, a), c = b + a.offsetHeight;
      (0,z.ec)(a, "grid-breaking-slide", b < e && c > d)
    }, a);
    a.Za.style.top = b + c + "px"
  }
};
z.ME = function(a, b, c) {
  var d = a.Vb(a.W);
  if(!a.isAuthenticated) {
    var e = a.W;
    a.Kc && (e += "--highlight-" + a.Kc.startIndex + "-" + a.Kc.endIndex);
    a.Za.querySelector(".notes-add-sign-in").setAttribute("data-action-value", window.location.pathname + "#" + e)
  }
  d && (e = d.querySelector(".notes-highlight"), c = !c && e ? e : d, (0,z.LE)(a, c, b), 1E3 >= window.innerWidth ? b.scrollIntoView(z.m) : (0,z.vv)(c))
};
z.IE = function(a) {
  var b = a.Za.querySelector(".notes-new-note, .notes-add-sign-in");
  b && (0,z.ME)(a, b)
};
z.NE = function(a, b, c) {
  b = a.Za.querySelector('[data-note-id\x3d"' + b + '"]');
  (0,z.ME)(a, b, c)
};
z.KE = function(a) {
  if(a.W) {
    var b = (0,z.QA)(a.data, a.W), c = b.count();
    (b = c ? (0,z.dh)(b.ma[0] || z.n, "id") : z.n) ? (1 == c && (0,z.pB)(a, b), (0,z.NE)(a, b, z.m)) : (0,z.IE)(a)
  }
};
z.OE = function(a, b) {
  return b == a.W ? (0,z.G)((0,z.nB)(a, z.n), z.tr) : (0,z.G)((0,z.nB)(a, b), (0,z.Af)(!!b))
};
z.PE = function(a, b, c) {
  var d = (0,z.Tc)(b.target, z.n, "notes-note");
  if(d && (!b.relatedTarget || !(0,z.Hc)(d, b.relatedTarget))) {
    if(b = (0,z.PA)(a.data, d.getAttribute("data-note-id"), a.W)) {
      d = z.n, c ? d = (0,z.dh)(b, "highlightId") : a.md && (d = (0,z.dh)((0,z.PA)(a.data, a.md, a.W), "highlightId")), (0,z.mB)(a, d ? a.data.Dh[d] || z.n : z.n, a.Fq)
    }
  }
};
z.QE = function(a) {
  z.Hd.call(this);
  this.t = a
};
(0,z.C)(z.GE, z.ZA);
z.w = z.GE.prototype;
z.w.Tf = 3;
z.w.gj = z.s;
z.w.Ch = z.n;
z.w.Hs = z.n;
z.w.ib = z.n;
z.w.al = 0;
z.w.Sq = function() {
  var a = window.Date.now();
  this.Rj = z.n;
  this.gj = z.m;
  this.wr();
  this.isAuthenticated && ((0,z.ec)(this.Za, "notes-is-creator", this.data.Ge.userId === this.currentUser.userId), (0,z.Iv)(this.L(".notes-post-creator"), this.data.Ge.name));
  this.ut();
  this.Xb.push((0,z.T)(this.zb, "mouseover", this.qz, this));
  this.Xb.push((0,z.T)(this.zb, "mouseout", this.pz, this));
  z.Lr || (this.Xb.push((0,z.T)(this.Ea, "mouseover", this.gA, this)), this.Xb.push((0,z.T)(this.Ea, "mouseout", this.fA, this)));
  this.Xb.push((0,z.T)(this.Za, "click", this.mz, this));
  this.Xb.push((0,z.T)(this.Ea, "transitionend", this.kA, this));
  (0,z.lj)("notes.renderMarkers", window.Date.now() - a)
};
z.w.ut = function() {
  var a = (0,z.rB)(this);
  if(a.anchor) {
    if((0,z.JE)(this, a.anchor), a.lc) {
      (0,z.pB)(this, a.lc.id, z.m), (0,z.NE)(this, a.lc.id), "reply" == a.Iu && (0,z.kB)(this)
    }else {
      if("highlight" == a.Iu) {
        var b = this.Vb(a.anchor), c = a.lc.startIndex, d = a.lc.endIndex, e = (0,z.nx)(b, c, b, d);
        e && (a = new z.TA(e, b, new z.CA({anchor:a.anchor, startIndex:c, endIndex:d, content:e.Nb()})), (0,z.HE)(this, a))
      }
    }
  }
};
z.w.Vq = function(a) {
  var b = (0,z.QA)(this.data, this.W);
  a.newHighlight && (this.data.Dh[a.highlightId] = new z.CA(new z.CA(a.newHighlight)), delete a.newHighlight);
  b.add(a);
  this.Ya.clear();
  (0,z.pB)(this, a.id);
  (0,z.N)(this.Za, "notes-hide-editor");
  (0,z.dB)(this, z.So, (0,z.Fk)(b, "id", a.id))
};
z.w.dv = function() {
  if(this.Ya) {
    (0,z.IE)(this), this.Ya.focus()
  }else {
    var a;
    a: {
      a = this.pb;
      for(var b in a) {
        a = a[b];
        break a
      }
      a = z.l
    }
    if(b = a && a.mj) {
      (0,z.pB)(this, b), (0,z.NE)(this, b), a.focus()
    }
  }
};
z.w.sh = function() {
  var a = this.wd.scrollTop, b = this.Ea.parentNode;
  b.style.height = "";
  var c = (0,z.Qf)(this.zb), d = (0,z.Qf)(b);
  this.W && (c = this.Cb[this.W].offsetTop + this.Za.offsetHeight + c, d + b.offsetHeight < c && (b.style.height = c - d + "px", this.wd.scrollTop = a))
};
z.w.Xq = function(a) {
  (0,z.G)((0,z.OE)(this, a.value), function(a) {
    a && ((0,z.gB)(this) || ((a = this.getSelection()) && a.lc.anchor == this.W ? ((0,z.mB)(this, a.lc), (0,z.sB)(this, a)) : (0,z.sB)(this, this.W), this.Ya && this.Ya.focus()), (0,z.KE)(this))
  }, this)
};
z.w.Wq = function(a) {
  (0,z.qB)(this, (0,z.dh)(a, "anchor"));
  (0,z.dh)(a, "id") == this.md && (0,z.mB)(this, z.n)
};
z.w.lr = function(a) {
  (0,z.O)((0,z.Tc)(a.target, z.n, "notes-replies"), "notes-replies-hidden");
  this.sh()
};
z.w.Yz = function(a) {
  if(!this.Os && "A" != a.target.tagName && (z.Lr || this.W)) {
    var b = this.getSelection();
    if(!(b && b.yu == this.W)) {
      if(this.W && 1E3 >= window.innerWidth) {
        return(0,z.nB)(this, z.n)
      }
      a = (a = (0,z.av)(a.target, z.Yu, this.Ea)) && a.getAttribute("name") || z.n;
      (0,z.G)((0,z.OE)(this, a), function(a) {
        a && ((0,z.gB)(this) || (0,z.sB)(this, this.W), (0,z.KE)(this))
      }, this)
    }
  }
};
z.w.Ct = function() {
  this.wr()
};
z.w.kz = function(a) {
  if(this.W) {
    var b = a.target, b = (0,z.av)(b, function(a) {
      return a == this.Za || a == this.dh || a == this.Hs || a.getAttribute("data-action") && "zoom" != a.getAttribute("data-action")
    }.bind(this));
    window.document.body === b && (1400 >= window.innerWidth && (a.stopPropagation(), a.preventDefault()), (0,z.nB)(this, z.n))
  }
};
z.w.Xz = function(a) {
  var b = (a = this.data.Dh[a.value] || z.n) && a.anchor;
  b && (b = this.Vb(b), (a = (0,z.nx)(b, a.startIndex, b, a.endIndex)) && a.select())
};
z.w.gA = function(a) {
  if((0,z.Q)("variants.enable_highlight_only_notes")) {
    var b = (0,z.QA)(this.data, this.W);
    if(!b || !b.count()) {
      return
    }
  }
  if((a = (a = (0,z.av)(a.target, z.Yu, this.Ea)) ? a.getAttribute("name") : z.n) && this.Cb[a]) {
    this.Ch && (0,z.O)(this.Ch, "notes-marker-highlighted"), a = this.Cb[a], (0,z.N)(a, "notes-marker-highlighted"), this.Ch = a, (0,window.clearTimeout)(this.al)
  }
};
z.w.fA = function() {
  (0,window.clearTimeout)(this.al);
  this.al = (0,window.setTimeout)(function() {
    this.Ch && ((0,z.O)(this.Ch, "notes-marker-highlighted"), this.Ch = z.n)
  }.bind(this), 1E3)
};
z.w.qz = function(a) {
  (0,z.PE)(this, a, z.m)
};
z.w.pz = function(a) {
  (0,z.PE)(this, a, z.s)
};
z.w.pt = function() {
  (0,z.vB)(this.ib)
};
z.w.nA = function() {
  if(!this.Ea || this.Fq) {
    (0,z.wB)(this.ib)
  }else {
    var a = (0,z.wt)();
    if(!a || a.isCollapsed()) {
      (0,z.wB)(this.ib)
    }else {
      var b = (0,z.St)(a);
      (0,z.av)(b, z.Yu, this.Ea) ? (0,z.xB)(this.ib, a.sd().getBoundingClientRect()) : (0,z.wB)(this.ib)
    }
  }
};
z.w.st = function() {
  (0,z.wB)(this.ib);
  var a = this.getSelection();
  a && (0,z.HE)(this, a)
};
z.w.tt = function() {
  (0,z.wB)(this.ib);
  var a = (0,z.wt)();
  if(a && !a.isCollapsed()) {
    var a = a.Nb(), b = this.postId;
    this.Gj.Il((0,z.FE)({quote:a, username:this.data.Ge.username, url:window.location.href, Dn:140, Gn:25}));
    (0,z.Ti)(z.Eo, {postId:b, type:"highlight", dest:"twitter"})
  }
};
z.w.Hz = function(a) {
  a = a.value.split(",");
  var b = a[0], c = a[1];
  (0,z.H)((0,z.G)(this.data.Va.put("/p/" + this.data.w + "/notes/" + b + "/" + c + "/state", {state:"HIDDEN"}, {V:z.m}), function() {
    for(var a = (0,z.PA)(this.data, b, this.W), e = a.get("replies"), f = 0;f < e.length;f++) {
      if(e[f].replyId == c) {
        a.removeItem("replies", f);
        break
      }
    }
    (0,z.dB)(this, z.Zo, (0,z.PA)(this.data, b, this.W), {replyId:c});
    this.fi.ca("The reply has been dismissed", "success")
  }, this), (0,z.Xj)(this.Sj, "Sorry, we couldn't hide the reply. Please try again later and make sure you are logged in."))
};
z.w.mz = function(a) {
  a = a.target;
  var b = (0,z.Tc)(a, z.n, "notes-note");
  if(b) {
    var c = b.getAttribute("data-note-id");
    c == this.md ? (0,z.av)(a, function(a) {
      return!!a.getAttribute("data-action") || (0,z.dc)(a, "editable")
    }, b, z.m) == b && (0,z.pB)(this, z.n) : ((0,z.pB)(this, c), (0,z.NE)(this, c))
  }
};
z.w.bA = function() {
  var a = this.getSelection();
  (0,z.pB)(this, z.n);
  a && (0,z.mB)(this, a.lc);
  (0,z.sB)(this, a || this.W);
  this.Ya && (a && (0,z.IE)(this), this.Ya.focus())
};
z.w.kA = function(a) {
  (a = a.target.getAttribute("name")) && (0,z.rv)(this.Ea, a) && (0,z.iB)(this, a, a == this.W)
};
z.w.wr = function() {
  if(this.gj) {
    if(this.Gf) {
      (0,z.Ig)((0,window.Error)("UpdateUI called after dispose"))
    }else {
      var a = {};
      (0,z.uv)(this.Ea, function(b) {
        var d = b.getAttribute("name");
        if(d && !a[d]) {
          var e = (0,z.QA)(this.data, d), f = this.Cb[d];
          f ? f.style.top = (0,z.hB)(this, b) + "px" : f = this.Cb[d] = (0,z.jB)(this, b, d, e);
          f && (0,z.iB)(this, d, d == this.W);
          a[d] = z.m
        }
      }, this);
      this.md ? (0,z.NE)(this, this.md) : (0,z.KE)(this);
      for(var b in this.Cb) {
        a[b] || (b == this.W && (0,z.nB)(this, z.n), (0,z.P)(this.Cb[b]), delete this.Cb[b])
      }
    }
  }
};
z.w.kD = function() {
  if(this.W) {
    var a = (0,z.wt)();
    if(a) {
      var a = (0,z.St)(a), b = this.Vb(this.W);
      (!b || !(0,z.Hc)(b, a)) && (0,z.nB)(this, z.n)
    }
  }
};
(0,z.C)(z.QE, z.Hd);
z.QE.prototype.gi = function(a, b, c) {
  return new z.GE(this.t, a, b, c)
};
z.RE = z.sn;
z.SE = z.RE.t;
z.SE.add("notes", new z.QE(z.SE));
(0,z.un)(z.RE, "notes");
})(_mdm);
//@ sourceURL=fingerprint:notes