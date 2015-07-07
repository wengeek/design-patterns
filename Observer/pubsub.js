/**
 * 发布订阅模式
 */
var pubsub = {};

(function(pubsub) {
  var topics = {},
    subUid = -1;

  //发布事件
  pubsub.publish = function(topic, args) {
    if (!topics[topic]) {
      return false;
    }

    var subscribers = topics[topic],
      len = subscribers ? subscribers.length : 0;

    while (len--) {
      subscribers[len].func(topic, args);
    }

    return this;
  };

  //订阅事件
  pubsub.subscribe = function(topic, func) {
    if (!topics[topic]) {
      topics[topic] = [];
    }

    var token = (++subUid).toString();
    topics[topic].push({
      token: token,
      func: func
    });
    return token;
  };

  //取消订阅
  pubsub.unsubscribe = function(token) {
    for (var topic in topics) {
      if (topics[topic]) {
        for (var i = 0, j = topics[topic].length; i < j; i++) {
          if (topics[topic][i].token === token) {
            topics[topic].splice(i, 1);
            return token;
          }
        }
      }
    }
    return this;
  };
}(pubsub));
