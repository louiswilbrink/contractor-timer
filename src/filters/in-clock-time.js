angular.module('contractTimer')
    .filter('inClockTime', function () {

        return function (timeInMinutes) {

            var hours = Math.floor(timeInMinutes / 60);
            var remainingMinutes = timeInMinutes % 60;
            
            if (remainingMinutes < 10) {
                remainingMinutes = '0' + remainingMinutes;
            }

            return hours + ':' + remainingMinutes;
        }
    });
