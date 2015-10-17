'use strict';

define(['js/app'], function (app) {

    var ConstantsService = {
        "api_urls": {
            "search_by_mail": "https://api.fullcontact.com/v2/person.json"
        },
        "api_key": "470724596ad94dc3",
        "social_networks": {
            "angellist": {
                name: "Angel.co",
                icon_class: "fa fa-angellist"
            },
            "facebook": {
                name: "Facebook",
                icon_class: "fa fa-facebook-official"
            },
            "flickr": {
                name: "Flickr",
                icon_class: "fa fa-flickr-official"
            },
            "foursquare": {
                name: "Foursquare",
                icon_class: "fa fa-flickr-official"
            },
            "googlePlus": {
                name: "Google Plus",
                icon_class: "fa fa-google-plus"
            },
            "gravatar": {
                name: "Gravatar",
                icon_class: "fa fa-gravatar"
            },
            "klout": {
                name: "Klout",
                icon_class: "klout-icon"
            },
            "linkedin": {
                name: "LinkedIn",
                icon_class: "fa fa-linkedin-square"
            },
            "pinterest": {
                name: "Pinterest",
                icon_class: "fa fa-pinterest-p"
            },
            "quora": {
                name: "Quora",
                icon_class: "quora-icon"
            },
            "reddit": {
                name: "Reddit",
                icon_class: "fa fa-reddit-square"
            },
            "twitter": {
                name: "Twitter",
                icon_class: "fa fa-twitter-square"
            },
            "yahoo": {
                name: "Yahoo",
                icon_class: "fa fa-yahoo"
            },
            "youtube": {
                name: "Youtube",
                icon_class: "fa fa-youtube-square"
            }
        }
    }

    app.constant('ConstantsService', ConstantsService);

});