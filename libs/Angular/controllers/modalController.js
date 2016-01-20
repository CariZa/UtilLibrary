'use strict';

function ModalController($scope, $sce, $modalInstance, data) {

    $scope.data = data || '';

    $scope.closeModal = function () {
        $modalInstance.close();
    };

		$scope.close = function () {
        $modalInstance.close();
    };

}
