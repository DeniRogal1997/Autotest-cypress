describe('Тестовое задание', () => {
  it(' smoke. Добавление платежа с типом "Доход" ', () => {
    // 1. Заходим на страницу;
    cy.visit('https://fabrique:fabrique@finance.dev.fabrique.studio/accounts/login/')

    // 2. Логинимся
    cy.get('[placeholder="Электронная почта"]').type("admin@admin.ad")
    cy.get('[placeholder="Пароль"]').type("admin")
    cy.get('.button__content').click()

    // 3. Нажимаем на кнопку добавить платеж
    cy.contains('Добавить платёж').click()

    // 4. Находим обязательное поле "Описание" и вставляем "Test"
    cy.get('div:nth-child(2) > div > div:nth-child(2) > div > div > div > div > div > label > textarea').type('Test')
    
    // 5. Находим обязательное поле "Сумма факт" и вставляем "1000"
    cy.get('div > div:nth-child(5) > div > div:nth-child(2) > div > div > div > div > div > label > input').type('1000')

    // 6. Находим кнопку добавить в нижней части раздела и нажимаем на нее.
    cy.get('button:nth-child(2) > .button__content').scrollIntoView().click()
  })
})
