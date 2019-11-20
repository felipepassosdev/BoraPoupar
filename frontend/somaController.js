angular.module('aplicacao').controller('somaController', function ($scope, $window, $http) {
    $scope.gastos = []
    $scope.resultado = []
    $scope.floatados = []
    $scope.somandoResultados = []
    $scope.esvaziar = []
    $scope.disabled = false;
    $scope.clicado = true;
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

    $scope.getMoney = function () {
        $http.get("http://localhost:3001/api/money").then(function (data) {
            console.log(data.data[0].income)
            $scope.gastei = data.data[0].spent
            $scope.poupei = data.data[0].spared
            $scope.renda = data.data[0].income
        });
    }

    $window.onload = function(e) {
        $scope.getMoney()
      }
      
})