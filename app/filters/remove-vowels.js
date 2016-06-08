(function (angular) {

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
