// SNACK 1
function getInitials(fullName) {
    const nome = fullName.split(' ') // Divido il nome completo in un array con 2 elementi
    const primoNome = nome[0] // prendo il primo nome
    const secondoNome = nome[1] // prendo il secondo nome
    const iniziali = primoNome.charAt(0) + secondoNome.charAt(0) // prendo la prima lettera di entrambi i nomi
    return iniziali.toUpperCase() // restituisco le iniziali in maiuscolo
}

// SNACK 2
function createSlug(stringa) {
    const stringaMinuscolo = stringa.toLowerCase() // converto la stringa in minuscolo
    return stringaMinuscolo
}

// SNACK 3
function average(arrayNumeri) {
    const somma = arrayNumeri.reduce((acc, num) => acc + num, 0) // sommo tutti i numeri dell'array, partendo da 0
    const media = somma / arrayNumeri.length // divido la somma per il numero di elementi dell'array
    return media
}

//SNACK 4
function createSlug2(stringa) {
    const stringaMinuscolo = stringa.toLowerCase() // converto stringa in minuscolo
    const stringaSenzaSpazi = stringaMinuscolo.replaceAll(' ', '-') // sostituisco spazi con -
    return stringaSenzaSpazi
}

//SNACK 5
function isPalindrome(stringa) {
    const stringaInvertita = stringa.split('').reverse().join('') // divido la stringa in un array di caratteri, inverto l'array e lo unisco in una stringa
    return stringa === stringaInvertita // confronto la stringa originale con quella invertita
}

//SNACK 6
function createSlug3(stringa) {
    if (!stringa || typeof stringa !== 'string') { // controllo se la stringa è vuota o non è una stringa
        throw new Error('titolo vuoto o non valido') // lancio errore
    }
    return stringa.toLowerCase().replaceAll(' ', '-') // converto in minuscolo e sostituisco
}

module.exports = {
    getInitials,
    createSlug,
    average,
    createSlug2,
    isPalindrome,
    createSlug3
}

