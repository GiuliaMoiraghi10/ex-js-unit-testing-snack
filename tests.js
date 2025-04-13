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

module.exports = {
    getInitials,
    createSlug
}

