(function(global) {
    'use strict';

    function f(a) {
        this.a = k;
        this.b = void 0;
        this.d = [];
        var b = this;
        try {
            a(function(a) {
                l(b, a)
            }, function(a) {
                m(b, a)
            })
        } catch (d) {
            m(b, d)
        }
    }
    var k = 2;

    function n(a) {
        return new f(function(b, d) {
            d(a)
        })
    }

    function p(a) {
        return new f(function(b) {
            b(a)
        })
    }

    function l(a, b) {
        if (a.a === k) {
            if (b === a) throw new TypeError("Promise resolved with itself.");
            try {
                var d = b && b.then,
                    c = !1;
                if (null !== b && "object" === typeof b && "function" === typeof d) {
                    d.call(b, function(b) {
                        c || l(a, b);
                        c = !0
                    }, function(b) {
                        c || m(a, b);
                        c = !0
                    });
                    return
                }
            } catch (e) {
                c || m(a, e);
                return
            }
            a.a = 0;
            a.b = b;
            q(a)
        }
    }

    function m(a, b) {
        if (a.a === k) {
            if (b === a) throw new TypeError("Promise rejected with itself.");
            a.a = 1;
            a.b = b;
            q(a)
        }
    }

    function q(a) {
        setTimeout(function() {
            if (a.a !== k)
                for (; a.d.length;) {
                    var b = a.d.shift(),
                        d = b[0],
                        c = b[1],
                        e = b[2],
                        b = b[3];
                    try {
                        0 === a.a ? "function" === typeof d ? e(d.call(void 0, a.b)) : e(a.b) : 1 === a.a && ("function" === typeof c ? e(c.call(void 0, a.b)) : b(a.b))
                    } catch (g) {
                        b(g)
                    }
                }
        }, 0)
    }
    f.prototype.e = function(a) {
        return this.c(void 0, a)
    };
    f.prototype.c = function(a, b) {
        var d = this;
        return new f(function(c, e) {
            d.d.push([a, b, c, e]);
            q(d)
        })
    };

    function r(a) {
        return new f(function(b, d) {
            function c(c) {
                return function(d) {
                    g[c] = d;
                    e += 1;
                    e === a.length && b(g)
                }
            }
            var e = 0,
                g = [];
            0 === a.length && b(g);
            for (var h = 0; h < a.length; h += 1) a[h].c(c(h), d)
        })
    }

    function s(a) {
        return new f(function(b, d) {
            for (var c = 0; c < a.length; c += 1) a[c].c(b, d)
        })
    };

    var Promistein = f;
    Promistein.resolve = p, 
    Promistein.reject = n, 
    Promistein.race = s, 
    Promistein.all = r, 
    Promistein.prototype.then = Promistein.prototype.c,
    Promistein.prototype["catch"] = Promistein.prototype.e

    if (typeof define === 'function' && define.amd) {
      define(Promistein);
    } else if (typeof exports === 'object') {
      module.exports = Promistein;
    } else {
      global.Promistein = Promistein;
    }
})(this);

