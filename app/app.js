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
