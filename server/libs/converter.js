const numberToLettersMap = require('../../both/numberToLettersMap')

const numberToLetter = (numberChar) => {
  let numberString
  try {
    numberString = numberChar.toString()
  } catch (e) {
    console.log(e)
  }
  if (numberString in numberToLettersMap) {
    return numberToLettersMap[numberString]
  }
  console.log(`Could not map number ${numberChar} to a leter`)
  return []
}

const numberToLetterCombination = (number) => {
  let numbersString
  try {
    numbersString = number.toString()
  } catch (e) {
    console.log(e)
    return []
  }
  const arrayOfNumbers = numbersString.split('')
  let arrayOfLetters = arrayOfNumbers
    .map((number) => {
      const letters = numberToLetter(number)
      if (letters !== []) {
        return letters
      }
    })
    .reduce((previous, current) => {
      let mergedPreviousAndCurrent = []
      previous.forEach(previousLetter => {
        current.forEach(currentLetter => {
          mergedPreviousAndCurrent.push(previousLetter + currentLetter)
        })
      })
      return mergedPreviousAndCurrent
    })
  return arrayOfLetters
}

module.exports = { numberToLettersMap, numberToLetter, numberToLetterCombination }
