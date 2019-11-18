angular.module('aplicacao').controller('somaController', function($scope) {
    $scope.gastos = []
    $scope.resultado = []
    $scope.floatados = []
    $scope.somandoResultados = []

    $scope.enviaGasto = function() {
        $scope.gastos.push($scope.x)
        console.log($scope.gastos)
    }

    $scope.somar = function() {
        $scope.gastos.forEach(element => {
            $scope.floatados = parseFloat(element)

            $scope.resultado.push($scope.floatados)

            $scope.somandoResultados = $scope.resultado.reduce((a, b) => a + b);
    
            console.log($scope.somandoResultados)

            $('#meuModal').modal('show')
        });
    }



})