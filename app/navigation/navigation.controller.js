(function () {
    'use strict';

    angular
        .module('pcoApp')
        .controller('NavigationController', [
        	function()
            {
                this.msg = 'This is a good navigation!';
            }
        ]);

})();