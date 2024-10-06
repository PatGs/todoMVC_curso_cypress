const elem = require('../elements/tela-inicial.elements').ELEMENTS
const concluirItem = require('../elements/tela-inicial.elements').ITENS
const filtroItem = require('../elements/tela-inicial.elements').FILTROS

class telaInicial{

    inputText(dado){
        cy.get(elem.inputToDo).type(dado).type('{enter}')
    }

    concluirItem(){
        cy.get(concluirItem.buttonConcluirItem)
        .last() //Método .first ele clica no primeiro item da lista. O método .last seleciona o último da lista para dar um clique
        .click()  
    }


    filtrarItem(menu){
        cy.get(filtroItem.filtroToDo)
        .contains(menu)
        .and('be.visible')
        .click()
    }

    deletarItem(){
        cy.get(concluirItem.listaItens)
        .first()
        .find('button')
        .invoke('show') //Ação que vai fazer com que o botão de deletar que possui o efeito de Mouseouver seja vísivel. Aula 52
        .click()

    }

    /**
 * Utilizado para validar o primeiro contexto do teste Regressivo
 * Encontra o texto do placeholder ""What needs to be done?"
 */
    validarInput(texto){
        cy.get(elem.inputToDo)
        .should('have.attr', 'placeholder')
        .and('include', texto)
    }
    
    validarContador(numero){
        cy.get(filtroItem.contador)
        .contains(numero)
    }

    validarSize(numero){
        cy.get(concluirItem.validarListaItens)
        .should('have.length', numero)
    }

}

export default new telaInicial();