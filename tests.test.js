const { getInitials } = require('./tests.js')

/* Snack 1
Creare un test che verifichi la seguente descrizione:
"La funzione getInitials restituisce le iniziali di un nome completo." */

test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
    expect(getInitials('Giulia Moiraghi')).toBe('GM')
})