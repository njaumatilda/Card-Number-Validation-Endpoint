import type { Request, Response, NextFunction } from 'express'
import { isValidLuhn } from '../utils/luhnValidator.js'

const cardValidator = (req: Request, res: Response, next: NextFunction) => {
  const { cardNumber } = req.body

  if (!cardNumber) {
    return res.status(400).json({ error: 'Card number is required' })
  }

  if (!isValidLuhn(cardNumber)) {
    return res.status(400).json({ error: 'Invalid card number' })
  } else {
    next()
  }
}

export default cardValidator
