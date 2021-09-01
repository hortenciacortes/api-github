// 1) Implemente um método que crie um novo array baseado nos valores passados.
// Entradas do método (3,a), Resultado do método: ['a', 'a', 'a']
function createNewArray(repeat, value) {
    let newArray = []
    for (let i = 0; i < repeat; i++) {
        newArray.push(value)
    }
    console.log(newArray)
    return newArray
}

createNewArray(3, 'a')

// 2) Implemente um método que inverta um array, não utilize métodos nativos do array.
// Entrada do método ([1,2,3,4]), Resultado do método: [4,3,2,1]
function reverse(array) {
    let count = array.length - 1
    const arrayReverse = []
    for (count; count >= 0; count--) {
        arrayReverse.push(array[count])
    }
    console.log(arrayReverse)
    return arrayReverse
}

reverse([1, 2, 3, 4])

// 3) Implemente um método que limpe os itens desnecessários de um array (false, undefined, strings vazias, zero, null).
// Entrada do método ([1,2,'', undefined]), Resultado do método: [1,2]
function cleanArray(array) {
    const filterArray = array.filter(Boolean)
    console.log(filterArray)
    return filterArray
}

cleanArray([1, 2, '', undefined])

// 4) Implemente um método que a partir de um array de arrays, converta em um objeto com chave e valor.
// Entrada do método ([["c",2],["d",4]]), Resultado do métdodo: {c:2, d:4}
function arrayToObject(array) {
    arrayToString = array.join('-').replace(/,/g, ':').split('-')
    console.log(arrayToString)
    return arrayToString
}

arrayToObject([["c", 2], ["d", 4]])

// 5) Implemente um método que retorne um array, sem os itens passados por parâmetro depois do array de entrada. 
// Entrada do método ([5,4,3,2,5], 5,3), Resultado do método: [4,2]
function newArray(array, para1, para2) {
    const filterArray = array.filter(element => {
        if (element != para1 && element != para2) {
            return element
        }
    })
    console.log(filterArray)
    return filterArray
}

newArray([5, 4, 3, 2, 5], 5, 3)

// 6) Implemente um método que retorne um array, sem valores duplicados.
// Entrada do método ([1,2,3,3,2,4,5,4,7,3]), Resultado do método: [1,2,3,4,5,7]
function noRepeat(array) {
    const newArray = []
    array.filter((element) => {
        if (newArray.length === 0 || newArray.indexOf(element) === -1) {
            newArray.push(element)
        }
    })
    console.log(newArray)
    return newArray
}

noRepeat([1, 2, 3, 3, 2, 4, 5, 4, 7, 3])

// 7) Implemente um método que compare a igualdade de dois arrays e retorne um valor booleano.
// Entrada do método ([1,2,3,4],[1,2,3,4]), Resultado do método: true
function isSameArray(array1, array2) {
    const isSame = array1.every(x => array2.includes(x))
    console.log(isSame)
    return isSame
}

isSameArray([1, 2, 3, 4], [1, 2, 3, 4])

// 8) Implemente um método que remova os aninhamentos de um array de arrays para um array unico.
// Entrada do método ([1, 2, [3], [4, 5]]), Resultado do método: [1, 2, 3, 4, 5]
function singleArray(array) {
    // array.flat() /* Um novo array com os elementos sub-array concatenados nele. */
    const newArray = array.join(',').split(',').map(number => Number(number))
    console.log(newArray)
    return newArray
}

singleArray([1, 2, [3], [4, 5]])

// 9) Implemente um método divida um array por uma quantidade passada por parâmetro.
// Entrada do método ([1, 2, 3, 4, 5], 2), Resultado do método: [[1, 2], [3, 4], [5]]
function divideArray(array, divider) {
    const novoArray = []
    for (var i = 0; i < array.length; i += divider) {
        novoArray.push(array.slice(i, i + divider));
    }
    console.log(novoArray)
    return novoArray
}

divideArray([1, 2, 3, 4, 5], 2)

// 10) Implemente um método que encontre os valores comuns entre dois arrays.
// Entrada do método ([6, 8], [8, 9]), Resultado do método: [8]
function searchCoommon(array1, array2) {
    const isSame = array1.filter(element => array2.includes(element))
    console.log(isSame)
    return isSame
}

searchCoommon([6, 8], [8, 9])