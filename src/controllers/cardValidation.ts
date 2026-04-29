import type { Request, Response } from 'express'

const validateCardNumber = (req: Request, res: Response) => {
    res.status(200).json({ message: 'Card number is valid' })
}

export { validateCardNumber }