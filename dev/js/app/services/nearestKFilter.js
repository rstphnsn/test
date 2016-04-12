angular.module('App')

.filter('nearestK', function () {
    'use strict';
    return function (input) {
        if (typeof input === 'undefined') {
            return;
        } else {
            input = input + '';
            if (input < 1000) {
                return input;
            }
            if (input < 10000) {
                return input.charAt(0) + ',' + input.substring(1);
            }
            return (input / 1000).toFixed(input % 1000 !== 0) + 'k';
        }
    };
});
