App.All = (function() {
    'use strict';

    var _loading = document.getElementById('loading');

    var _getURL = function (url) {
        return $.ajax({
            type: "GET",
            dataType: "JSON",
            url: url,
            cache: true
        });
    };

    var _showTopStories = (function () {
        var list_stories = $("#template-stories").html(),
            template;

        return function (data, box, callback) {
            list_stories = list_stories.replace(/ }}/g, "}}").replace(/{{ /g, "{{");
            template = Handlebars.compile(list_stories);

            $(box).append(
                $(template(data)).fadeIn(200 * data.id, function () {
                    if (typeof callback !== 'undefined') {
                        callback();
                    }
                })
            );
        }
    }());

    /** Module init */
    var init = function(Obj) {

        var cleanBox = function () {
            $('#hackerNewsBox').empty();
            $('#stackOverflowBox').empty();
            $('#dzoneJavaBox').empty();
            $('#dzoneWebDevBox').empty();
            $('#redditProgrammingBox').empty();
        };

// Closes the sidebar menu
        $("#menu-close").click(function (e) {
            e.preventDefault();
            $("#sidebar-wrapper").toggleClass("active");
        });

// Opens the sidebar menu
        $("#menu-toggle").click(function (e) {
            e.preventDefault();
            $("#sidebar-wrapper").toggleClass("active");
        });

        $('#hackerNews').click(function () {
            $(_loading).addClass('active');

            cleanBox();

            var urlTop = $(this).attr('urlTop'),
                urlDetail = $(this).attr('urlDetail'),
                nbStories = parseInt($(this).attr('nbStories'), 10),
                topstories;

            var getTopStories = (function () {
                _getURL(urlTop).success(function (data) {
                    topstories = data;

                    for (var i = 0; i < nbStories; i++) {
                        getStoriesDetails(i);
                    }
                });
            })();

            var getStoriesDetails = function (i) {
                var url = urlDetail.concat(topstories[i]).concat(".json"),
                    stories = {};

                _getURL(url).success(function (data) {

                    if (i === nbStories - 1) {
                        var callback = function () {
                            $(_loading).removeClass('active');
                        };
                    }

                    stories.stories = [{
                        id: i,
                        title: data.title,
                        author: data.by,
                        url: data.url
                    }];
                    _showTopStories(stories, "#hackerNewsBox", callback);
                });
            }
        });

        $('#stackOverflow').click(function () {
            $(_loading).addClass('active');

            cleanBox();

            var nbquestions = parseInt($(this).attr('nbquestions'), 10),
                urlTop = $(this).attr('urlTop'),
                url = urlTop.concat("&pagesize=").concat(nbquestions),
                topstories;

            var getTopStories = (function () {
                _getURL(url).success(function (data) {
                    topstories = data;

                    for (var i = 0; i < topstories.items.length; i++) {
                        if (i === topstories.items.length - 1) {
                            var callback = function () {
                                $(_loading).removeClass('active');
                            };
                        }

                        _showTopStories(topstories.items[i].link, topstories.items[i].title, topstories.items[i].owner.display_name, "#stackOverflowBox", i, callback);
                    }
                });
            })();
        });

        function parseRSS(url) {
            return $.ajax({
                url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent(url),
                dataType: 'json',
            });
        }

        $('#dzoneJava').click(function(){
            $(_loading).addClass('active');

            cleanBox();

            var url=$(this).attr('url');

            var getTopStories = (function () {
                parseRSS(url).success(function (data) {
                    topstories = data.responseData.feed.entries;

                    for (var i = 0; i < topstories.length; i++) {
                        if (i === topstories.length - 1) {
                            var callback = function () {
                                $(_loading).removeClass('active');
                            };
                        }

                        _showTopStories(topstories[i].link, topstories[i].title, topstories[i].author, "#dzoneJavaBox", i, callback);
                    }
                });
            })();
        });

        $('#dzoneWebDev').click(function(){
            $(_loading).addClass('active');

            cleanBox();

            var url = $(this).attr('url');

            var getTopStories = (function () {
                parseRSS(url).success(function (data) {
                    topstories = data.responseData.feed.entries;

                    for (var i = 0; i < topstories.length; i++) {
                        if (i === topstories.length - 1) {
                            var callback = function () {
                                $(_loading).removeClass('active');
                            };
                        }

                        _showTopStories(topstories[i].link, topstories[i].title, topstories[i].author, "#dzoneWebDevBox", i, callback);
                    }
                });
            })();
        });

        $('#redditProgramming').click(function(){
            $(_loading).addClass('active');

            cleanBox();

            var url = $(this).attr('url');

            var getTopStories = (function () {
                parseRSS(url).success(function (data) {
                    topstories = data.responseData.feed.entries;

                    for (var i = 0; i < topstories.length; i++) {
                        if (i === topstories.length - 1) {
                            var callback = function () {
                                $(_loading).removeClass('active');
                            };
                        }

                        _showTopStories(topstories[i].link, topstories[i].title, topstories[i].author, "#redditProgrammingBox", i, callback);
                    }
                });
            })();
        });
    };

    return {
        init: init
    }
})();









