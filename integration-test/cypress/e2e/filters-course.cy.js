describe('Ordenação da Tabela de Cursos', () => {
    beforeEach(() => {
        cy.visit('https://trab-devops-2404238.azurewebsites.net/ead.html');
    });

    it('Deve ordenar cursos em ordem alfabética', () => {
        cy.get('th').contains('Curso').click();
        cy.get('th').contains('Curso').click();
        cy.get('table tbody tr:first-child td:first-child')
          .should('contain', 'Administração de Empresas');
    });
});