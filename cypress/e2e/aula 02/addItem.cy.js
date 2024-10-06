
import telaInicial from '../../support/pageObjects/tela-inicial.pageObjects'

describe('Adicionar itens na minha lista de toDo', () => {
    /**
     * DADO - BEFORE - Antes do primeiro teste
     * BEFORE EACH - Antes de cada teste
     */
    beforeEach(() => {
        cy.visit('/')
    })
    // Código para adicionar um item na Lista
    it('Adicionar um item na lista', () => {
        telaInicial.inputText("dado1")
        telaInicial.inputText("dado2")
        telaInicial.inputText("dado3")
        telaInicial.inputText("dado4")
        telaInicial.inputText("dado5")
      })

      //Código otimizado para adicionar mais de um item na Lista dentro de um array
    it('Adicionar mais de um item a lista', () => {
        //Itens dentro de um array
        var todoItens = ["Maça", "Banana", "Cenoura", "Uva", "Melancia"]
        
        //Laço de repetição for Each
        todoItens.forEach(function(item, indice,array ){
            telaInicial.inputText(item)
        })
    });
    
      
});

