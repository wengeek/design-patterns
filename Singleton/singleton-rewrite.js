/**
 * 重写构造函数
 */
function Singleton() {
  //缓存实例
  var instance;

  //重写构造函数
  Singleton = function() {
    return instance;
  };

  //保留原型
  Singleton.prototype = this;

  //实例
  instance = new Singleton();

  //构造函数指针
  instance.constructor = Singleton;

  return instance;
}
