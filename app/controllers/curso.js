var contatos = [
    {_id: 1, nome: 'DSWA - Desenvolvimento de Sistemas Web', email: 'dswa.curso@ifsp.edu.br'},
    {_id: 2, nome: 'GPSA - Gestão de Projetos', email: 'gpsa.curso@ifsp.edu.br'},
    {_id: 3, nome: 'PROJETO INTEGRADOR', email: 'projetointegrador.curso@ifsp.edu.br'} 
   ]
   
   module.exports = function(){
       var controller = {};
       controller.listaCursos = function(req, res){
           res.json(cursos);
       };
       controller.obtemCurso = function(req, res) {
           console.log('Selecionou o curso: ' + req.params.id);
           var idCurso = req.params.id;
           var curso = cursos.filter(function(curso){
               return curso._id == idCurso;
           })[0];
           curso ? res.json(curso) : res.status(404).send('Curso não encontrado !!!');
       };
       return controller;
   };