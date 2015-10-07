var App = App || {};

App.Common = (function () {
    'use strict';

    var Loading = (function () {
        var _loading = document.getElementById('loading');

        /** Show loading */
        function showLoading() {
            _loading.classList.add('active');
        }

        /** Hide loading */
        function hideLoading() {
            _loading.classList.remove('active');
        }

        return {
            showLoading: showLoading,
            hideLoading: hideLoading
        }
    })();

    var Ajax = (function () {
        /**
         * @param {string} url - RSS flux url
         * @param {boolean} cache - Enable or disable cache
         */
        function getParsedRSS(url, cache) {
            return $.ajax({
                url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent(url),
                dataType: 'json',
                cache: cache || false
            });
        }

        /**
         * @param {string} url - JSON url
         * @param {boolean} cache - Enable or disable cache
         */
        function getJSON(url, cache) {
            return $.ajax({
                type: 'GET',
                dataType: 'JSON',
                url: url,
                cache: cache || false
            });
        }

        return {
            getParsedRSS: getParsedRSS,
            getJSON: getJSON
        }
    })();

    /** Module init */
    var init = function () {
    };

    return {
        init: init,
        Ajax: Ajax,
        Loading: Loading
    }
})();









