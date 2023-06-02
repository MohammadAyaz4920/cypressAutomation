

import '@4tw/cypress-drag-drop'


describe('Drag and drop',()=>{

it('Drop it',()=>{


 cy.visit("https://the-internet.herokuapp.com/drag_and_drop")

 cy.get('#column-a').drag('#column-b')


 })

 it('Drop it2',()=>{


cy.visit("https://the-internet.herokuapp.com/drag_and_drop")

 cy.get('#column-a').dragTo('#column-b')


})

})