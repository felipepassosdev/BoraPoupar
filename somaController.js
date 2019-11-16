angular.module('aplicacao').controller('somaController', function($scope) {
    $scope.guardar = []

    $scope.listar = function($scope) {
        $scope.guardar.push($scope.valor)
    }

    $scope.usuarios = []

    $scope.submeterLogin = function() {
        $scope.usuarios.push($scope.x)
    }
})