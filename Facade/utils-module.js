/**
 * utils工具类，采用模块模式和外观模式实现
 */
var utils = (function() {
  var addEventListener = null,
    removeEventListener = null,
    preventDefault = null,
    stopPropagation = null;

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

  //通过首次运行重写preventDefault，防止后续重复检测
  //阻止浏览器的默认行为
  preventDefault = function(e) {
    if (typeof e.preventDefault === 'function') {
      e.preventDefault();
      preventDefault = function(e) {
        e.preventDefault();
      };
      return;
    }

    if (typeof e.returnValue === 'boolean') {
      e.returnValue = false;
      preventDefault = function(e) {
        e.returnValue = false;
      };
      return;
    }
  };

  //阻止事件冒泡
  stopPropagation = function(e) {
    if (typeof e.stopPropagation === 'function') {
      e.stopPropagation();
      stopPropagation = function(e) {
        e.stopPropagation();
      };
      return;
    }

    if (typeof e.cancelBubble === 'boolean') {
      e.cancelBubble = true;
      stopPropagation = function(e) {
        e.cancelBubble = true;
      };
      return;
    }
  };

  //阻止默认行为和阻止事件冒泡
  function stop(e) {
    preventDefault(e);
    stopPropagation(e);
  }

  return {
    addEventListener: addEventListener,
    removeEventListener: removeEventListener,
    stop: stop
  };
}());
