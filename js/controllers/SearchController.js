'use strict';

define(['js/app'], function (app) {

    var injectParams = ["$scope", "PeopleSearchService", "ConstantsService", "AlertsService"];

    var SearchController = function ($scope, PeopleSearchService, ConstantsService, AlertsService) {
        $scope.alerts = AlertsService;
        $scope.social_networks = ConstantsService.social_networks;
        $scope.page = {
            loading: 0
        };
        $scope.results = [];
        $scope.searchByMail = function(email) {
            $scope.page.loading++;
            PeopleSearchService.searchByMail(email, handleSearchByMailResponse);
        }
        var handleSearchByMailResponse = function(response) {
            $scope.page.loading--;
            if(response.error) {
                AlertsService.addAlert("danger", response.msg);
                $scope.results = [];
            } else {
                $scope.results = [response.data];
            }
        }
    }
        
    SearchController.$inject = injectParams;

    app.register.controller('SearchController', SearchController);

});