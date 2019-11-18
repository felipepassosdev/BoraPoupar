angular.module('aplicacao').controller('somaController', function($scope) {
    $scope.gastos = []
    $scope.resultado = []
    $scope.floatados = []
    $scope.somandoResultados = []

    $scope.enviaGasto = function() {
        if ($scope.valor) {
            $scope.gastos.push($scope.valor)
            console.log($scope.gastos)
        }
        else {
            $scope.msg = 'Não pode estar vazio'
            console.log("vazio")
        }
    }

    $scope.somar = function() {
        $scope.gastos.forEach(element => {
            $scope.floatados = parseFloat(element)

            $scope.resultado.push($scope.floatados)

            $scope.somandoResultados = $scope.resultado.reduce((a, b) => a + b);
    
            console.log($scope.somandoResultados)
        });
    }

    $scope.limpar = function() {
        $scope.valor = ''
    }



})