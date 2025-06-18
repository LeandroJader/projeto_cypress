describe('Pesquisa no DuckDuckGo e abre o terceiro link', () => {
  it('Deve pesquisar "uniplac" e clicar no terceiro link visível', () => {
    cy.visit('https://duckduckgo.com');

    // Faz a pesquisa
    cy.get('input[name="q"]', { timeout: 10000 }).type('uniplac{enter}');

    // Clica no terceiro link dos resultados
    cy.get('a.result__a', { timeout: 10000 })
    .eq(2).click();
  });
});
