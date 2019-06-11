var util = {
    vibrate: function (time) {
        window.navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
        if (window.navigator.vibrate) {
            window.navigator.vibrate(time);
        }
    }
};
