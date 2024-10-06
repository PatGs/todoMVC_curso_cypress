/**
 * Suite de teste regressivo
 * Criar uma estrutura de regressivo e adicionar as validações que precisamos
 * 
 */

import telaInicial from '../../support/pageObjects/tela-inicial.pageObjects'

describe('Regressivo ToDo App', () => {
/**
 * Defino que dentro da minha suíte de teste Regressivo vai ter 5 contextos
 * diferentes para os testes.
 */
    context('Validar a tela inicial', () => {
        beforeEach(() => {
            cy.visit('/')
        });

        it('Validar a área label de input de dados', () => {
            telaInicial.validarInput("What needs to be done?")           
        });        
    });

    context('Validar a adição de Itens', () => {
        beforeEach(() => {
            cy.visit('/')
        });

        it('Adicionar mais de um item a lista', () => {
            var todoItens = ["Maça", "Banana", "Cenoura", "Uva", "Melancia"]
            todoItens.forEach(function(item, indice,array ){
                telaInicial.inputText(item)
            })
            telaInicial.validarContador(5)
        });        
    });

    context('Validar a conclusão de Itens', () => {
        beforeEach(() => {
            cy.visit('/')
            var todoItens = ["Maça", "Banana", "Cenoura", "Uva", "Melancia"]
            todoItens.forEach(function(item, indice,array ){
                telaInicial.inputText(item)
            })
        })

        it('Concluir um item da lista de toDO', () => {
            telaInicial.concluirItem()
            telaInicial.validarContador(4)

        });
        
    });

    context('Validar a o filtro da aplicação', () => {
        beforeEach(() => {
            cy.visit('/')
            var todoItens = ["Maça", "Banana", "Cenoura", "Uva", "Melancia"]
            todoItens.forEach(function(item, indice,array ){
                telaInicial.inputText(item)
            })
    
            telaInicial.concluirItem()
        })

        it('Validar a lista de itens ativos', () => {
            telaInicial.filtrarItem("Active")
            telaInicial.validarSize(4)
        });

        it('Validar a lista de itens concluídos', () => {
            telaInicial.filtrarItem("Completed")
            telaInicial.validarSize(1)
        });
        
    });

    context('Validar a remoção de Itens', () => {
        beforeEach(() => {
            cy.visit('/')
            var todoItens = ["Maça", "Banana", "Cenoura", "Uva", "Melancia"]
            todoItens.forEach(function(item, indice,array ){
                telaInicial.inputText(item)
            })    
        })

        it('Deleção de um item da lista', () => {
            telaInicial.deletarItem()
            telaInicial.validarSize(4)         
        });
    });   
})
