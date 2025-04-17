describe('Calculator Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should display initial zero', () => {
    cy.get('.display').should('have.text', '0');
  });

  it('should input single numbers correctly', () => {
    cy.get('button').contains('5').click();
    cy.get('.display').should('have.text', '5');
  });

  it('should input multiple numbers correctly', () => {
    cy.get('button').contains('1').click();
    cy.get('button').contains('2').click();
    cy.get('button').contains('3').click();
    cy.get('.display').should('have.text', '123');
  });

  it('should perform addition correctly', () => {
    cy.get('button').contains('2').click();
    cy.get('button').contains('+').click();
    cy.get('button').contains('3').click();
    cy.get('button').contains('=').click();
    cy.get('.display').should('have.text', '5');
  });

  it('should perform subtraction correctly', () => {
    cy.get('button').contains('8').click();
    cy.get('button').contains('-').click();
    cy.get('button').contains('3').click();
    cy.get('button').contains('=').click();
    cy.get('.display').should('have.text', '5');
  });

  it('should perform multiplication correctly', () => {
    cy.get('button').contains('4').click();
    cy.get('button').contains('×').click();
    cy.get('button').contains('3').click();
    cy.get('button').contains('=').click();
    cy.get('.display').should('have.text', '12');
  });

  it('should perform division correctly', () => {
    cy.get('button').contains('8').click();
    cy.get('button').contains('/').click();
    cy.get('button').contains('2').click();
    cy.get('button').contains('=').click();
    cy.get('.display').should('have.text', '4');
  });

  it('should handle decimal calculations', () => {
    cy.get('button').contains('1').click();
    cy.get('button').contains('.').click();
    cy.get('button').contains('5').click();
    cy.get('button').contains('+').click();
    cy.get('button').contains('2').click();
    cy.get('button').contains('.').click();
    cy.get('button').contains('5').click();
    cy.get('button').contains('=').click();
    cy.get('.display').should('have.text', '4');
  });

  it('should clear the display', () => {
    cy.get('button').contains('5').click();
    cy.get('button').contains('C').click();
    cy.get('.display').should('have.text', '0');
  });

  it('should handle complex calculations', () => {
    cy.get('button').contains('2').click();
    cy.get('button').contains('+').click();
    cy.get('button').contains('3').click();
    cy.get('button').contains('×').click();
    cy.get('button').contains('4').click();
    cy.get('button').contains('=').click();
    cy.get('.display').should('have.text', '14');
  });

  it('should display Invalid Input for invalid operations', () => {
    cy.get('button').contains('5').click();
    cy.get('button').contains('/').click();
    cy.get('button').contains('0').click();
    cy.get('button').contains('=').click();
    cy.get('.display').should('have.text', 'Infinity');
  });
});
