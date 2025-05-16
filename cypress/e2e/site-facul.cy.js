describe('Pagina inicial', () => {
  it('Deve carregar a página incial', () => {
    cy.visit('http://127.0.0.1:5500/index.html')
    cy.contains('Faculdade Devops')
  })

   it('Deve navegar para a página de cursos', () => {
     cy.visit('http://127.0.0.1:5500/index.html')
     cy.get('nav a').contains('Cursos').click()
   })
})