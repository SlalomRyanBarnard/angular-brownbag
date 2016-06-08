angular.module('bb-brownbag').run(['$templateCache', function($templateCache) {
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
