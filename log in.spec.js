describe('Тестовое задание', () => {
    it('Авторизация', () => {
      // 1. Заходим на страницу;
      cy.visit('https://fabrique:fabrique@finance.dev.fabrique.studio/accounts/login/')
  
      // 2. Логинимся
      cy.get('[placeholder="Электронная почта"]').type("admin@admin.ad")
      cy.get('[placeholder="Пароль"]').type("admin")
      cy.get('.button__content').click()
    })
})
