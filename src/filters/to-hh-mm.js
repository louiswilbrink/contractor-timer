angular.module('contractTimer')
    .filter('inHours', function () {

        return function (timeInMinutes) {
            return (timeInMinutes / 60).toFixed(2) + ' hours';
        }
    });
