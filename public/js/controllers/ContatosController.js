angular.module('ifsp').controller('ContatosController',
	function($scope) {
		$scope.total = 0;
		$scope.incrementa = function() {
			$scope.total++;
		};

		$scope.contatos  = [
			{_id: 1, nome: 'Renan Barbosa', email: 'renan.barbosa@ifsp.edu.br'},
			{_id: 2, nome: 'Erika Fernandes', email: 'erika.fernandes@ifsp.edu.br'},
			{_id: 3, nome: 'Magali Maria', email: 'mm.maria@ifsp.edu.br'} 
        ];

        $scope.filtro = '';
});
