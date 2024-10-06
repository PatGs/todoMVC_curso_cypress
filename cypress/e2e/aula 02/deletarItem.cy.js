
import telaInicial from '../../support/pageObjects/tela-inicial.pageObjects'

describe('Deletar itens da Lista', () => {
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
    })

    
    it('Deleção de um item da lista', () => {
        telaInicial.deletarItem()
      
    });

      
});