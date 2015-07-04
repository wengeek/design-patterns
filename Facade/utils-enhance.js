var utils = {
  addEventListener: null,
  removeEventListener: null
}

//初始化
if (window.addEventListener) {
  utils.addEventListener = function(el, ev, handler) {
    el.addEventListener(ev, handler, false);
  };
  utils.removeEventListener = function(el, ev, handler) {
    el.removeEventListener(ev, handler, false);
  }
} else if (document.attachEvent) {
  utils.addEventListener = function(el, ev, handler) {
    el.attachEvent('on' + ev, handler);
  };
  utils.removeEventListener = function(el, ev, handler) {
    el.detachEvent('on' + ev, handler);
  };
} else {
  utils.addEventListener = function(el, ev, handler) {
    el['on' + ev] = handler;
  };
  utils.removeEventListener = function(el, ev, handler) {
    el['on' + ev] = null;
  }
}