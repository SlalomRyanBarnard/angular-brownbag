(function(angular) {

    angular.module('bb-brownbag').controller('sectionMiddle.controller', ['$scope', SectionMiddleController]);

    function SectionMiddleController($scope) {

        // Sets up a namespace to put data
        $scope.vm = {};
        var vm = $scope.vm;

        // Sets up a namespace to put functions
        $scope.func = {};
        var func = $scope.func;


        // Functions

        // Data
        vm.userInput = '';

        // Start
        activate();

        function activate() {
        }
    }
}(angular));
