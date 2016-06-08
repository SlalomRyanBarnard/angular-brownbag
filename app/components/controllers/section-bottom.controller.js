(function(angular) {

    angular.module('bb-brownbag').controller('sectionBottom.controller', ['$scope', SectionBottomController]);

    function SectionBottomController($scope) {

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
