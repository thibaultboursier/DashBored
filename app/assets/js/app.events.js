App.Events = (function () {
    'use strict';

    /** Init navigation */
    var _initNavigation = function () {
        var _navigation = $(document.getElementById('navigation'));

        _navigation.on('click', '#menu-close', function (e) {
            e.preventDefault();
            $("#sidebar-wrapper").toggleClass("active");
        });

        _navigation.on('click', '#menu-toggle', function (e) {
            e.preventDefault();
            $("#sidebar-wrapper").toggleClass("active");
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









