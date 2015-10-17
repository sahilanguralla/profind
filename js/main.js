require.config({
    baseUrl: '',
    urlArgs: 'v=1.0'
});

require(
    [
        'js/app',
        'js/routeResolver',
        'js/routes',
        'js/services/PeopleSearchService',
        'js/services/ConstantsService',
        'js/services/AlertsService',
    ],
    function () {
        angular.bootstrap(document, ['pullapkApp']);
    });
