"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/*jslint browser: true*/

/*global $, document */
// ref by https://code4shares.wordpress.com/2017/08/29/chia-se-sourcecode-chuyen-so-thanh-chu/
var OortsNumber = function () {
  'use strict';

  var t = ["không", "một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín"],
      r = function r(_r, n) {
    var o = "",
        a = Math.floor(_r / 10),
        e = _r % 10;
    return a > 1 ? (o = " " + t[a] + " mươi", 1 == e && (o += " mốt")) : 1 == a ? (o = " mười", 1 == e && (o += " một")) : n && e > 0 && (o = " lẻ"), 5 == e && a >= 1 ? o += " lăm" : 4 == e && a >= 1 ? o += " tư" : (e > 1 || 1 == e && 0 == a) && (o += " " + t[e]), o;
  },
      n = function n(_n, o) {
    var a = "",
        e = Math.floor(_n / 100),
        _n = _n % 100;

    return o || e > 0 ? (a = " " + t[e] + " trăm", a += r(_n, !0)) : a = r(_n, !1), a;
  },
      o = function o(t, r) {
    var o = "",
        a = Math.floor(t / 1e6),
        t = t % 1e6;
    a > 0 && (o = n(a, r) + " triệu", r = !0);
    var e = Math.floor(t / 1e3),
        t = t % 1e3;
    return e > 0 && (o += n(e, r) + " nghìn", r = !0), t > 0 && (o += n(t, r)), o;
  };

  return {
    toVNWord: function toVNWord(r) {
      if (0 == r) return t[0];

      if (r < 0) {
        return 'Âm ' + this.toVNWord(Math.abs(r));
      }

      var n = "",
          a = "";

      do {
        var ty = r % 1e9,
            r = Math.floor(r / 1e9),
            n = r > 0 ? o(ty, !0) + a + n : o(ty, !1) + a + n,
            a = " tỷ";
      } while (r > 0);

      return n.trim();
    }
  };
}();

var _default = OortsNumber;
exports.default = _default;