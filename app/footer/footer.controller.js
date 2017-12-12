(function () {
    'use strict';

    angular
        .module('pcoApp')
        .controller('FooterController', [
        	function()
            {
                this.msg = 'Copyright (c) Storms Websolutions';
            }
        ]);

})();