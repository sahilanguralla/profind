'use strict';

define(['js/app'], function (app) {

    var injectParams = [];

    var AlertsService = function() {
        this.msgs = [];
        this.addAlert = function(type, msg) {
            this.msgs.push({
                type: type,
                msg: msg
            });
        };
        this.closeAlert = function(t) {
            this.msgs.splice(t, 1);
        };
    }

    AlertsService.$inject = injectParams;

    app.service('AlertsService', AlertsService);

});