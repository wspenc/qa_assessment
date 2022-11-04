const {shuffleArray} = require('./utils')
//Come back to study more on testing
describe('shuffleArray should', () => {
    test(' return an array', () =>{
        expect(typeof shuffleArray(shuffleArray.arrCopy)).toBe('number')
    })
    test(' shuffle the items', () => {
        expect(typeof shuffleArray(shuffleArray.j)).toBe('number')
    })
  })