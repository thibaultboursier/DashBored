var App = App || {};

App.Events = (function () {
    'use strict';

    /** Init navigation */
    var _initNavigation = function () {
        var navigation = document.getElementById('navigation'),
            sidebar_wrapper = document.getElementById('sidebar-wrapper');

        $(navigation).on('click', '#menu-close, #menu-toggle', function (e) {
            e.preventDefault();
            $(sidebar_wrapper).toggleClass("active");
        });
    };

    /** Init boxes */
    var _initBoxes = function () {
        var boxes = document.querySelectorAll('[data-box="true"]'),
            len = boxes.length,
            i = 0;

        for (i; i < len; i++) {
            boxes[i].onclick = function (e) {
                e.preventDefault();
                App.Sources.init(this);
            };
        }
    };

    /** Module init */
    var init = function () {
        _initNavigation();
        _initBoxes();
    };

    return {
        init: init
    }
})();









