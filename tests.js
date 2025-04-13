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

module.exports = {
    getInitials,
    createSlug,
    average
}

