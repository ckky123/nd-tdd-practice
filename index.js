
const diamondGenerator= (letter)=>{
    if (typeof(letter) !== 'string'){
        throw new Error("Input must be a character");
    }
    const alphabet =  [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ']
    const letterIndex = alphabet.indexOf(letter.toUpperCase()) 
    if (letterIndex === -1) {
        throw new TypeError("Letter wasn't found in alphabet");
    }
    let dimension = (2 * letterIndex) + 1 // Grid is square, width = height
    let rows = []
    for (i=0; i<=letterIndex; i++){
        let nextRow = Array(dimension).fill(" ")
        nextRow[letterIndex + i] = nextRow[letterIndex - i] = alphabet[i] // Same when i = 0
        rows[i] = rows[dimension - 1 - i] = nextRow.join('') //Same for  letterIndex'th row
    }

    return rows.join('\n')
}

console.log(diamondGenerator('c'))

module.exports= {diamondGenerator}