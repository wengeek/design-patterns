/**
 * 缓存类，采用工厂模式
 */
function CacheMaker() {}

CacheMaker.prototype.init = function() {
  console.log('CacheMaker init');
}

CacheMaker.factory = function(type) {
  var constr = type || 'Local';

  //判断构造函数是否存在
  if (typeof CacheMaker[constr] !== 'function') {
    return void 0;
  }

  //使原型继承父类，但仅继承一次
  if (typeof CacheMaker[constr].prototype.init !== 'function') {
    CacheMaker[constr].prototype = new CacheMaker();
  }

  //创建实例
  return new CacheMaker[constr]();
}
//Local构造方法
CacheMaker.Local = function() {
  this.set = function(key, value) {
    console.log('local: ' + key + ' => ' + value);
  };
}
//Session构造方法
CacheMaker.Session = function() {
  this.set = function(key, value) {
    console.log('session: ' + key + ' => ' + value);
  }
}
