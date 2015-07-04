var utils = (function() {
  var addEventListener = null,
    removeEventListener = null;

  if (window.addEventListener) {
    addEventListener = function(el, ev, handler) {
      el.addEventListener(ev, handler, false);
    };
    removeEventListener = function(el, ev, handler) {
      el.removeEventListener(ev, handler, false);
    };
  } else if (document.attachEvent) {
    addEventListener = function(el, ev, handler) {
      el.attachEvent('on' + ev, handler);
    };
    removeEventListener = function(el, ev, handler) {
      el.detachEvent('on' + ev, handler);
    };
  } else {
    addEventListener = function(el, ev, handler) {
      el['on' + ev] = handler;
    };
    removeEventListener = function(el, ev, handler) {
      el['on' + ev] = null;
    };
  }

  return {
    addEventListener: addEventListener,
    removeEventListener: removeEventListener
  };
}());
