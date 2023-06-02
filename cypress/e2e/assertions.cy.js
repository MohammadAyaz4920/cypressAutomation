describe('My First Test', () => {
    it('My First Test', () => {
      cy.visit("https://www.amazon.in/s?i=watches&bbn=2563505031&rh=n%3A2563505031&dc&qid=1685349147&rnid=3837712031&ref=sr_nr_p_89_1&ds=v1%3A69NxpSkxiEDScA9nXZbO7UZe038SDzcjHAKH6VzJRvY")
      cy.contains('Premium Brands').find('input[type="checkbox"]').check({force: true}).should('be.checked')
    })
  })
  