app.controller('postController', function ($scope) {
    $scope.postObj = function () {
        $http({
            url: 'http://localhost:8080/api/despesa',
            method: "POST",

            data: [{}]
        })
            .then(function (response) {
                // success
                console.log('OBJETOS ENVIADOS')
            },
                function (response) { // optional
                    // failed
                    console.log('ERROR')
                });
    }
})