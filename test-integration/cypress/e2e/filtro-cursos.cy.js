describe('Navegando na tabela de Cursos', () => {
    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/graduacao.html')
    })

    it('Deve filtrar curso por nome', () => {
        cy.get("input[type=search]").type('Ciências da Computação')
        cy.get('table tbody tr').should('have.length', 1)
    })

    it('Deve validar quantidade por semestre', () => {
        cy.get("input[type=search]").type('10 semestres')
        cy.get('table tbody tr').should('have.length', 3)
        
  })
})