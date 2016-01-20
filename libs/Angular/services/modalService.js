'use strict';

function ModalService($modal) {

	 var modalService = {};

		modalService.openModal = function(templateUrl, data, size) {
        var useSize = size || 'lg';
				return $modal.open({
            templateUrl: templateUrl,
            controller: 'ModalController',
            size: useSize,
            resolve: {
								data : function() {
									return data;
								}
            }
        });
	  };

    modalService.closeModal = function() {
    	$modal.$close();
    };

    return modalService;
}
