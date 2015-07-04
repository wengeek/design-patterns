class Utils {
  static addEventListener(el, ev, handler) {
    if (el.addEventListener) {
      el.addEventListener(ev, handler, false);
    } else if (el.attachEvent) {
      el.attachEvent('on' + ev, handler);
    } else {
      el['on' + ev] = handler;
    }
  }

  static removeEventListener(el, ev, handler) {
    if (el.addEventListener) {
      el.removeEventListener(ev, handler, false);
    } else if (el.attachEvent) {
      el.detachEvent('on' + ev, handler);
    } else {
      el['on' + ev] = null;
    }
  }
}
