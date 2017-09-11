class AboutController {
  constructor() {
    this.titulo = 'About';

    this.listaDeCategorias = mockCategorias;
    this.categoria = "";
    this.addCategoria = function adicionarCategoria(categoria){
    // add na lista estatica    
      mockCategorias.push(angular.copy(categoria));
      this.categoria = "";
    }
  }
}

export default AboutController;
