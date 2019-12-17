angular.module('aplicacao').controller('loginController', function ($scope, $valid) {
    $scope.email = 'felipepassosc@gmail.com'
    $scope.senha = 'fabinho1997'

    $scope.logar = function(){
        if ( $valid ) {
            $scope.mensagem = 'Login feito com sucesso'
            console.log('logou')
        }
        else {
            $scope.mensagem = 'ERRO'
        }
    }
})