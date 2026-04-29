const isValidLuhn = (cardNumber: string): boolean => {
  const newCardNumber = cardNumber.replace(/\D/g, '')

  let sum = 0

  for (let i = newCardNumber.length - 1; i >= 0; i--) {
    let digit = Number(newCardNumber[i])

    if ((newCardNumber.length - i) % 2 === 0) {
      digit = digit * 2
    } else {
      digit = digit
    }

    if (digit > 9) {
      digit = digit - 9
    }

    sum = sum + digit
  }

  return sum % 10 === 0
}

export { isValidLuhn }