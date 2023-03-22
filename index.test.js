
const app = require('./index.js')

describe('diamondGenerator',()=>{
    it('should return A given A as input', ()=>{
        const result = app.diamondGenerator('A')
        expect(result).toBe('A')
    })

    it('should return ABBA with correct formatting given B as input',()=>{
        const result = app.diamondGenerator('B')
        expect(result).toBe(' A \nB B\n A ')
    })

    it('should return correct letter sequence for large letters if given D as input',()=>{
        const result = app.diamondGenerator('D')
        expect(result.replace(/\s+/g, '')).toBe('ABBCCDDCCBBA')
    })

    it('should be correct size if given Z as input',()=>{
        const result = app.diamondGenerator('Z')
        const lines = result.split('\n')
        expect(lines.length).toBe(51)
        expect(lines.map(line => line.length)).toEqual(Array(51).fill(51))
    })

    it('should throw if given invalid input',()=>{
        expect(() => {app.diamondGenerator(5)}).toThrow("Input must be a character")
        expect(() => {app.diamondGenerator("ABC")}).toThrow("Letter wasn't found in alphabet")
        expect(() => {app.diamondGenerator("@")}).toThrow("Letter wasn't found in alphabet")
    })

    it('should return the correct result if given G', () => {
        // One actual non-trivial value, just in case
        const result = app.diamondGenerator('G')
        expect(result).toBe('      A      \n     B B     \n    C   C    \n   D     D   \n  E       E  \n F         F \nG           G\n F         F \n  E       E  \n   D     D   \n    C   C    \n     B B     \n      A      ')
    })


})