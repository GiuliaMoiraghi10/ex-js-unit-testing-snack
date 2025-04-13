const { getInitials, createSlug, average, createSlug2, isPalindrome, createSlug3, findPostById } = require('./tests.js')

// RAGGRUPPO I TEST IN BASE ALLO SNACK
describe('Manipolazione di stringhe', () => {

    /* Snack 1
    Creare un test che verifichi la seguente descrizione:
    "La funzione getInitials restituisce le iniziali di un nome completo." */

    test("La funzione getInitials restituisce le iniziali di un nome completo.", () => {
        expect(getInitials('Giulia Moiraghi')).toBe('GM')
    })

    /* Snack 5
    Creare un test che verifichi la seguente descrizione:
    "La funzione isPalindrome verifica se una stringa è un palindromo." */
    test("La funzione isPalindrome verifica se una stringa è un palindromo.", () => {
        expect(isPalindrome('anna')).toBe(true)
    })
})

describe('Manipolazione e operazioni su array', () => {

    /* Snack 3
    Creare un test che verifichi la seguente descrizione:
    "La funzione average calcola la media aritmetica di un array di numeri." */
    test("La funzione average calcola la media aritmetica di un array di numeri.", () => {
        expect(average([2, 4, 6, 8])).toBe(5)
    })

    /* Snack 7
    Crea un array di oggetti posts, in cui ogni oggetto ha le proprietà id, title e slug.
    Creare un test che verifichi le seguenti descrizioni:
    "La funzione findPostById restituisce il post corretto dato l’array di post e l’id"
    Creare uno o più test aggiuntivi che controllino che la struttura dati passati sia conforme (ogni post ha le proprietà id, title e slug, viene passato un id numerico). */

    const posts = [
        { id: 1, title: 'Post 1', slug: 'post-1' },
        { id: 2, title: 'Post 2', slug: 'post-2' },
        { id: 3, title: 'Post 3', slug: 'post-3' }
    ];

    test("La funzione findPostById restituisce il post corretto dato l’array di post e l’id", () => {
        // Caso in cui l'ID esiste
        expect(findPostById(posts, 1)).toEqual({ id: 1, title: 'Post 1', slug: 'post-1' });

        // Caso in cui l'ID non esiste
        expect(findPostById(posts, 4)).toBe(null);

        // Caso in cui l'ID non è un numero
        expect(() => findPostById(posts, 'ciao')).toThrow('id non valido');

        // Caso in cui la struttura dei post è errata
        const invalidPosts = [{ id: 1, title: 'Post 1' }]; // manca la proprietà 'slug'
        expect(() => findPostById(invalidPosts, 1)).toThrow('id non valido, struttura non valida');
    });
})

describe('Generazione di slug', () => {

    /* Snack 2
    Creare un test che verifichi la seguente descrizione:
    "La funzione createSlug restituisce una stringa in lowercase." */

    test("La funzione createSlug restituisce una stringa in lowercase.", () => {
        expect(createSlug('Giulia Moiraghi')).toBe('giulia moiraghi')
    })

    /* Snack 4
    Creare un test che verifichi la seguente descrizione:
    "La funzione createSlug sostituisce gli spazi con -." */
    test("La funzione createSlug sostituisce gli spazi con -.", () => {
        expect(createSlug2('Vulpix è bellissima')).toBe('vulpix-è-bellissima')
    })

    /* Snack 6
    Creare un test che verifichi la seguente descrizione:
    "La funzione createSlug lancia un errore se il titolo è vuoto o non valido." */
    test("La funzione createSlug lancia un errore se il titolo è vuoto o non valido.", () => {
        expect(() => createSlug3('')).toThrow('titolo vuoto o non valido'); // verifica che venga lanciato un errore
        expect(() => createSlug3(10)).toThrow('titolo vuoto o non valido'); // verifica che venga lanciato un errore per input non stringa
        expect(() => createSlug3(null)).toThrow('titolo vuoto o non valido'); // verifica che venga lanciato un errore per input null
    });
})


