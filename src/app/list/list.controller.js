'use strict';

angular.module('contractTimer')
    .controller('ListCtrl', ['$scope', function ($scope) {

        $scope.todos = [{
            name: 'louis'
        },
        {
            name: 'phill'
        },
        {
            name: 'ralph'
        },
        {
            name: 'gabe'
        },
        {
            name: 'tim'
        }];
    }]);
