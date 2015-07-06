/**
 * 通过getInstance来延迟加载
 */
var Singleton = (function () {
    var _instance;
    function init() {
        /*单例代码*/
        return {
            user: 'Wen',
            hi: function() {
                console.log('My name is ' + this.user);
            }
        };
    }

    return {
        getInstance: function () {
            if (!_instance) {
                _instance = init();
            }
            return _instance;
        }
    };
})();
