var contatos = [
	{_id: 1, nome: 'Renan Barbosa', email: 'renan.barbosa@ifsp.edu.br'},
	{_id: 2, nome: 'Erika Fernandes', email: 'erika.fernandes@ifsp.edu.br'},
	{_id: 3, nome: 'Magali Maria', email: 'mm.maria@ifsp.edu.br'} 
]


module.exports = function(){
	var controller = {};
	controller.listaContatos = function(req, res){
		res.json(contatos);
	};
	controller.obtemContato = function(req, res) {
		console.log('Selecionou o contato : ' + req.params.id);
		var idContato = req.params.id;
		var contato = contatos.filter(function(contato){
			return contato._id == idContato;
		})[0];
		contato ? res.json(contato) : res.status(404).send('Contato não encontrado !!!');
	};
	return controller;
};