const { getInitials, createSlug, average, createSlug2 } = require('./tests.js')

/* Snack 1
Creare un test che verifichi la seguente descrizione:
"La funzione getInitials restituisce le iniziali di un nome completo." */

test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
    expect(getInitials('Giulia Moiraghi')).toBe('GM')
})

/* Snack 2
Creare un test che verifichi la seguente descrizione:
"La funzione createSlug restituisce una stringa in lowercase." */

test("La funzione createSlug restituisce una stringa in lowercase.", () => {
    expect(createSlug('Giulia Moiraghi')).toBe('giulia moiraghi')
})

/* Snack 3
Creare un test che verifichi la seguente descrizione:
"La funzione average calcola la media aritmetica di un array di numeri." */
test("La funzione average calcola la media aritmetica di un array di numeri.", () => {
    expect(average([2, 4, 6, 8])).toBe(5)
})

/* Snack 4
Creare un test che verifichi la seguente descrizione:
"La funzione createSlug sostituisce gli spazi con -." */
test("La funzione createSlug sostituisce gli spazi con -.", () => {
    expect(createSlug2('Vulpix è bellissima')).toBe('vulpix-è-bellissima')
})