angular.module('ifsp').controller('CursosController',
	function($scope) {
		$scope.total = 0;
		$scope.incrementa = function() {
			$scope.total++;
		};

		$scope.cursos  = [
            {_id: 1, nome: 'DSWA - Desenvolvimento de Sistemas Web', email: 'dswa.curso@ifsp.edu.br'},
            {_id: 2, nome: 'GPSA - Gestão de Projetos', email: 'gpsa.curso@ifsp.edu.br'},
            {_id: 3, nome: 'PROJETO INTEGRADOR', email: 'projetointegrador.curso@ifsp.edu.br'} 
        ];

        $scope.filtro = '';
});
