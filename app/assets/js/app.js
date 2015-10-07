var App = App || {};

App = (function() {
    'use strict';

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
