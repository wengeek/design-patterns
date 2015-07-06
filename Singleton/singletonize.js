/**
 * 将一个类进行单例化
 */
function singletonize(fn) {
  //缓存实例
  var instance;

  //检查输入
  if (Object.prototype.toString.call(fn) !== '[object Function]') {
    throw new TypeError('fn should be a function');
  }

  //单例
  function Singleton() {
    if (instance === undefined) { 
      var self = this instanceof Singleton ? this : Object.create(Singleton.prototype);
      instance = self;
      fn.apply(instance, arguments);//第一次初始化时调用原函数fn构造函数
    }
  
    return instance;
  }

  //继承
  Singleton.prototype = fn.prototype;

  return Singleton;
}
