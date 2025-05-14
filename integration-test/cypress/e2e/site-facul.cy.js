describe('Página Inicial', () => {
    it('Deve carregar corretamente a página', () => {
      cy.visit('https://trab-devops-2404238.azurewebsites.net/index.html')
      cy.contains('Faculdade Tech')
    });
  
    it('Deve navegar até a página de Cursos', () => {
      cy.visit('https://trab-devops-2404238.azurewebsites.net/index.html')
      cy.get('nav a').contains('Cursos').click();
      cy.url().should('include', 'cursos.html');
    });
  })