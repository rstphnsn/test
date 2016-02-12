angular.module('App.controllers')

.controller('HomeController', ['VersionFactory', function (VersionFactory) {
    'use strict';

    var vm = this;
    vm.title = 'Base Project - Angular';

    VersionFactory.getVersion().then(function (response) {
        vm.version = response.version;
    });

}]);
