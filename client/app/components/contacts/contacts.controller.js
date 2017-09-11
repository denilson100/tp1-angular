class ContactsController {
  constructor() {
    this.titulo = 'About';

    this.categorias = mockCategorias;
        this.tarefas = mockTarefas
        this.adicionarTarefa = function(tarefa){
            mockTarefas.push(angular.copy(tarefa));
            tarefa.nome = "";
            tarefa.categoria = "";
            console.log(listaDeTarefas);
        }
  }
}
export default ContactsController;
