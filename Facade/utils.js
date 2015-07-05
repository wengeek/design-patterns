/**
 * utils工具类，采用外观模式实现
 */
var utils = {
  addEventListener: function (el, ev, handler) {
    if (el.addEventListener) {
      el.addEventListener(ev, handler, false);
    } else if (el.attachEvent) {
      el.attachEvent('on' + ev, handler);
    } else {
      el['on' + ev] = handler;
    }
  },
  removeEventListener: function (el, ev, handler) {
    if (el.addEventListener) {
      el.removeEventListener(ev, handler, false);
    } else if (el.attachEvent) {
      el.detachEvent('on' + ev, handler);
    } else {
      el['on' + ev] = null;
    }
  }
};
