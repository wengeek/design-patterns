/**
 * 将构造函数和实例封装在闭包中
 */
var Singleton;

(function() {
  var instance;

  Singleton = function() {
    if (instance !== undefined) {
      return instance;
    }

    instance = this;
  };
}());
