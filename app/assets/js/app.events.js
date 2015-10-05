App.Events = (function () {
    'use strict';

    /** Init navigation */
    var _initNavigation = function () {
        var navigation = $(document.getElementById('navigation')),
            sidebar_wrapper = $(document.getElementById('sidebar-wrapper'));

        navigation.on('click', '#menu-close', function (e) {
            e.preventDefault();
            sidebar_wrapper.toggleClass("active");
        });

        navigation.on('click', '#menu-toggle', function (e) {
            e.preventDefault();
            sidebar_wrapper.toggleClass("active");
        });
    };

    /** Module init */
    var init = function () {
        _initNavigation();
    };

    return {
        init: init
    }
})();









