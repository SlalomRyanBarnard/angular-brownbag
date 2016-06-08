(function(angular) {

    angular.module('bb-brownbag').controller('sectionTop.controller', ['$scope', SectionTopController]);

    function SectionTopController($scope) {

        // Sets up a namespace to put data
        $scope.vm = {};
        var vm = $scope.vm;

        // Sets up a namespace to put functions
        $scope.func = {};
        var func = $scope.func;


        // Functions

        // Data

        // Start
        activate();

        function activate() {
        }
    }
}(angular));
