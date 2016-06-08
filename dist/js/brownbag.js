/**
 * Creating an angular module named "bb-brownbag"
 * Injected modules:
 * ui.bootstrap - Lots of fancy directives to enhance the site. Details at https://angular-ui.github.io/bootstrap/#/getting_started
 */
angular.module('bb-brownbag', ['ui.bootstrap'])

    /**
     * Configuration method run against the module when it is being initialized.
     * This allows the user to disable extra debug information injected into the DOM as comments.
     */
    .config(['$compileProvider', function ($compileProvider) {
        // TODO: Disable debug info - should be done when ready to release to production
        // $compileProvider.debugInfoEnabled(false);
    }]);
;(function(angular) {

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
;(function(angular) {

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
;(function(angular) {

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
;(function (angular) {

    'use strict';

    /**
     * Creates the "sectionBottom" component
     */
    angular.module('bb-brownbag').component('sectionBottom', {
        templateUrl: 'app/components/templates/section-bottom.template.html',
        controller: 'sectionBottom.controller',
    });

} (angular));
;(function (angular) {

    'use strict';

    /**
     * Creates the "sectionMiddle" component
     */
    angular.module('bb-brownbag').component('sectionMiddle', {
        templateUrl: 'app/components/templates/section-middle.template.html',
        controller: 'sectionMiddle.controller',
    });

} (angular));
;(function (angular) {

    'use strict';

    /**
     * Creates the "sectionTop" component
     */
    angular.module('bb-brownbag').component('sectionTop', {
        templateUrl: 'app/components/templates/section-top.template.html',
        controller: 'sectionTop.controller',
    });

} (angular));
;(function (angular) {

    'use strict';

    /**
     * Creates the "remove vowels" filter
     */
    angular.module('bb-brownbag').filter('removeVowels', [RemoveVowelsFilter]);

    function RemoveVowelsFilter() {
        return function(input) {
            return input.replace(/[aeiouAEIOU]/g, '');
        }
    }

} (angular));
;angular.module('bb-brownbag').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/components/templates/section-bottom.template.html',
    "<div class=\"container\">\n" +
    "    <div class=\"row\">\n" +
    "        <div clas=\"col-xs-12\">\n" +
    "            BOTTOM\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('app/components/templates/section-middle.template.html',
    "<div class=\"container\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-xs-3\">\n" +
    "            Enter a text string:\n" +
    "        </div>\n" +
    "        <div class=\"col-xs-8\">\n" +
    "            <input type=\"text\" class=\"form-control\" ng-model=\"vm.userInput\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-xs-3\">\n" +
    "            Removed vowels:\n" +
    "        </div>\n" +
    "        <div class=\"col-xs-8\">\n" +
    "            <div class=\"result\" ng-bind=\"vm.userInput | removeVowels\"></div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('app/components/templates/section-top.template.html',
    "<div class=\"container\">\n" +
    "    <div class=\"row\">\n" +
    "        <div clas=\"col-xs-12\">\n" +
    "            TOP\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );

}]);
