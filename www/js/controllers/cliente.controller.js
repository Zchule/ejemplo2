CTRLS.controller('ClienteCtrl', function($scope, ClienteService ) {
$scope.clientes = [];

  ClienteService.getAllClientes()
  .then(function(response){
    $scope.clientes = response;
  });
});