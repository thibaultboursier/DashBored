var App = App || {};

App = (function() {
    'use strict';

    var x = 4;

    /** Module init */
    var init = function() {
        App.Events.init();
    };

    return {
        init: init
    }
})();

window.onload = function() {
    App.init();
};
