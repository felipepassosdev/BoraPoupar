angular.module('aplicacao').controller('somaController', function ($scope, $window) {
    $scope.gastos = []
    $scope.resultado = []
    $scope.floatados = []
    $scope.somandoResultados = []
    $scope.esvaziar = []
    $scope.disabled = false;
    $scope.mostrarResultado = false;

    $scope.enviaGasto = function () {
        if ($scope.valor) {
            $scope.gastos.push($scope.valor)
            console.log($scope.gastos)
        }
        else {
            $scope.msg = 'Não pode estar vazio'
            console.log("vazio")
        }
    }

    $scope.somar = function (e) {
        $scope.gastos.forEach(element => {
            $scope.floatados = parseFloat(element)

            $scope.resultado.push($scope.floatados)

            $scope.somandoResultados = $scope.resultado.reduce((a, b) => a + b);

            $scope.disabled = true
            $scope.mostrarResultado = true
            console.log($scope.somandoResultados)

        });
    }

    $scope.limpar = function () {
        $scope.valor = ''
    }

    $scope.excluir = function () {
        $window.location.reload()
    }

})