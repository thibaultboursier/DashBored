var App = App || {};

App = (function() {
    'use strict';

    /** Module init */
    var init = function() {
        App.All.init();
    };

    return {
        init: init
    }
})();

window.onload = function() {
    App.init();
};
