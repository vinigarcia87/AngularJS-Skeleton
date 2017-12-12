(function () {
    'use strict';

    angular
        .module('pcoApp')
        .controller('FooterController', [
        	function()
            {
                this.msg = 'Holy shit! Footer!';
            }
        ]);

})();