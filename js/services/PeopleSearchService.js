'use strict';

define(['js/app'], function (app) {

    var injectParams = ['$http', 'ConstantsService'];

    var PeopleSearchService = function ($http, ConstantsService) {
        this.searchByMail = function(email, callback) {
            $http.get(ConstantsService.api_urls.search_by_mail, {
                params: {
                    apiKey: ConstantsService.api_key, 
                    email: email
                }
            }).success(function(response) {
                if(response.status == 200) {
                    var ret = {
                        type: "search_by_mail",
                    };
                } else {
                    var ret = {
                        error: true,
                        msg: response.message,
                    };
                }
                ret.data = response;
                callback(ret);
            }).error(function(response) {
                var ret = {
                    error: true,
                    msg: response.message
                };
                if ("string" == typeof response) {
                    ret.msg = response;
                }
                callback(ret);
            });
        }
    };

    PeopleSearchService.$inject = injectParams;

    app.service('PeopleSearchService', PeopleSearchService);

});