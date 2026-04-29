import type { CardNumber } from '../interface/cardNumber.js'

const isValidLuhn = (cardNumber: CardNumber): boolean => {
  const newCardNumber = cardNumber.numberOnCard.replace(' ', '')

  let sum = 0

  for (let i = newCardNumber.length - 1; i >= 0; i--) {
    let digit = Number(newCardNumber[i])

    if ((newCardNumber.length - i) % 2 === 0) {
      digit = digit * 2
    } else {
      digit
    }

    if (digit > 9) {
      digit = digit - 9
    }

    sum = sum + digit
  }

  return sum % 10 === 0
}

export { isValidLuhn }