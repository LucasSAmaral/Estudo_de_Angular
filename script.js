angular.module('Teste', [])
.controller('testeController', function($scope){

    $scope.opcoes = ['item 1', 'item 2', 'item 3', 'item 4'];


    // $scope.indice = 0;

    $scope.setIndice = function(valor){
        $scope.indice = valor
    }

    $scope.select = function(item) {
        $scope.selected = item;
    }

    $scope.isAtivo = function(item) {
        return $scope.selected === item;
    }

});