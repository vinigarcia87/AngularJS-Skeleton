(function () {
    'use strict';

	angular
	.module('pcoApp')
	.controller('HomeController', [
        	function()
            {
                this.msg = 'Home sweet home!';
            }
        ]);

})();