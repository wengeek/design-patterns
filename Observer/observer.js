/**
 * 观察者模式
 */

 //存放observer
function ObserverList() {
  this.observerList = [];
}

ObserverList.prototype.Add = function(obj) {
  return this.observerList.push(obj);
};

ObserverList.prototype.Empty = function() {
  this.observerList = [];
};

ObserverList.prototype.Count = function() {
  return this.observerList.length;
};

ObserverList.prototype.Get = function(index) {
  if (index > -1 && index < this.observerList.length) {
    return this.observerList[index];
  }
};

ObserverList.prototype.IndexOf = function(obj, startIndex) {
  var i = startIndex, pointer = -1;

  while (i < this.observerList.length) {
    if (this.observerList[i] === obj) {
      pointer = i;
      break;
    }
    i++;
  }

  return pointer;
};

ObserverList.prototype.RemoveIndexAt = function(index) {
  if (index > -1 && index < this.observerList.length) {
    this.observerList.splice(index, 1);
  }
};

//观察者
function Observer() {
  this.id = Math.floor(Math.random() * 100);
}

Observer.prototype.Update = function(value) {
  console.log(value + this.id);
};

//目标
function Subject() {
  this.observers = new ObserverList();
}

Subject.prototype.AddObserver = function(observer) {
  this.observers.Add(observer);
};

Subject.prototype.RemoveObserver = function(observer) {
  this.observers.RemoveIndexAt(this.observers.IndexOf(observer, 0));
};

Subject.prototype.Notify = function(content) {
  var observerCount = this.observers.Count();
  for (var i = 0; i < observerCount; i++) {
    this.observers.Get(i).Update(content);
  }
};

