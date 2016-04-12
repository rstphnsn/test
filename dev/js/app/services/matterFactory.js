angular.module('App.services')

.factory('matterFactory', function matterFactory($q) {
    'use strict';

    var getMatterList = function () {
        var matterArray = [
            {
                "status": "active",
                "name": "Skyscraper",
                "id": 1,
                "law_firm": {
                    "id": 1,
                    "name": "H+H LLP"
                },
                "estimate": 150000,
                "fees_period": 80200,
                "fees_total": 142200
            },
            {
                "status": "active",
                "name": "Dragon",
                "id": 2,
                "law_firm": {
                    "id": 1,
                    "name": "H+H LLP"
                },
                "estimate": 25000,
                "fees_period": 15400,
                "fees_total": 35700
            },
            {
                "status": "closed",
                "name": "Murray",
                "id": 3,
                "law_firm": {
                    "id": 2,
                    "name": "Wood LLP"
                },
                "estimate": 100000,
                "fees_period": 17200,
                "fees_total": 17200
            },
            {
                "status": "active",
                "name": "Whistler",
                "id": 4,
                "law_firm": {
                    "id": 1,
                    "name": "H+H LLP"
                },
                "estimate": 75000,
                "fees_period": 24200,
                "fees_total": 102800
            },
            {
                "status": "active",
                "name": "Craven",
                "id": 5,
                "law_firm": {
                    "id": 2,
                    "name": "Wood LLP"
                },
                "estimate": 50000,
                "fees_period": 0,
                "fees_total": 15300
            }
        ],
        deferred = $q.defer();
        deferred.resolve(matterArray);
        return deferred.promise;
    };

    return {
        getMatterList: getMatterList
    };

});
