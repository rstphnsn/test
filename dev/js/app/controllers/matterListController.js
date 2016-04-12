angular.module('App.controllers')

.controller('matterListController', ['matterFactory', function (matterFactory) {
    'use strict';

    var vm = this;
    vm.sort = 'status';
    vm.sortReverse = false;

    matterFactory.getMatterList().then(function (response) {
        vm.matters = response;
    });

    vm.feesPeriod = function (matters) {
        var feesPeriod = 0;
        angular.forEach(matters, function (matter) {
            feesPeriod = feesPeriod + matter.fees_period;
        });
        return feesPeriod;
    };

    vm.feesTotal = function (matters) {
        var feesTotal = 0;
        angular.forEach(matters, function (matter) {
            feesTotal = feesTotal + matter.fees_total;
        });
        return feesTotal;
    };

}]);
