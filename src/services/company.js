'use strict'

angular.module('contractTimer')
    .service('Company', ['$rootScope', 
        '$timeout', 
        function Company ($rootScope,
        $timeout) {

        $timeout(function () {
            console.log('yo');
            $rootScope.$broadcast('hello');
        }, 1500);

        return {
            name: 'louis'
        }
    }]);
