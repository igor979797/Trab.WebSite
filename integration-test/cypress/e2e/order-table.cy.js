describe('Filtrando Cursos', () => {
    beforeEach(() => {
        cy.visit('https://trab-devops-2404238.azurewebsites.net/graduacao.html');
    });

    it('Deve filtrar curso por nome', () => {
        cy.get('input[type=search]').type('Ciências da Computação');
        cy.get('table tbody tr').should('have.length', 1);
    });

    it('Deve filtrar cursos por período', () => {
        cy.get('input[type=search]').type('10 semestres');
        cy.get('table tbody tr').should('have.length', 3);
    });
});