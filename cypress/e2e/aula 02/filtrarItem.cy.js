
import telaInicial from '../../support/pageObjects/tela-inicial.pageObjects'

describe('Validar os filtros da aplicação após a adição de Itens', () => {
    /**
     * DADO - BEFORE - Antes do primeiro teste
     * BEFORE EACH - Antes de cada teste
     */
    beforeEach(() => {
        cy.visit('/')
        //Itens dentro de um array
        var todoItens = ["Maça", "Banana", "Cenoura", "Uva", "Melancia"]
        //Laço de repetição for Each
        todoItens.forEach(function(item, indice,array ){
            telaInicial.inputText(item)
        })

        telaInicial.concluirItem()
    })

    /**
     * Clicar no filtro
     * o item ser exibido
     * e o contador deve bater a informação
     */
    
    it('Filtrar itens ativos', () => {
        telaInicial.filtrarItem("Active")
      
    });

    it.skip('Filtrar itens concluidos', () => {
        telaInicial.filtrarItem("Completed")
        
    });
    
      
});