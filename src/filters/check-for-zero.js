angular.module('contractTimer')
    .filter('checkForZero', function () {

        return function (time) {

            return time;
        }
    });
