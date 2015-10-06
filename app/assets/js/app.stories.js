App.Stories = (function () {
    'use strict';

    var _story;

    var _getData = function () {

    };

    /** Return HTML */
    var getHTML = function () {
        var template = $("#tpl-stories").html(),
            html;
        /**
         * @param {Array} data - Data array for generating html with Handlebars
         */
        return function (data) {
            template = template.replace(/ }}/g, '}}').replace(/{{ /g, '{{');
            html = Handlebars.compile(template);

            return html(data);
        }
    };

    /** Insert HTML into target **/
    var insertHTML = function (html, target, callback) {
        $(target).append(html);

        if (typeof callback === 'function') {
            callback();
        }
    };

    /** Module init */
    var init = function (story) {
        if (typeof story === 'undefined') {
            return false;
        }

        _story = story;

    };

    return {
        init: init,
        getHTML: getHTML,
        insertHTML: insertHTML
    }
})();


/*var cleanBox = function () {
 $('#hackerNewsBox').empty();
 $('#stackOverflowBox').empty();
 $('#dzoneJavaBox').empty();
 $('#dzoneWebDevBox').empty();
 $('#redditProgrammingBox').empty();
 };


 $('#hackerNews').click(function () {
 $(_loading).addClass('active');

 cleanBox();

 var urlTop = $(this).attr('urlTop'),
 urlDetail = $(this).attr('urlDetail'),
 nbStories = parseInt($(this).attr('nbStories'), 10),
 topstories;

 var getTopStories = (function () {
 _getURL(urlTop).done(function (data) {
 topstories = data;

 for (var i = 0; i < nbStories; i++) {
 getStoriesDetails(i);
 }
 });
 })();

 var getStoriesDetails = function (i) {
 var url = urlDetail.concat(topstories[i]).concat(".json"),
 stories = {};

 _getURL(url).done(function (data) {

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
 });*/








