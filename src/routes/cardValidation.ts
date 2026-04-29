import { Router } from 'express'
import { validateCardNumber } from '../controllers/cardValidation.js'
import cardValidator from '../middlewares/cardValidation.js'

const router: Router = Router()

router.post('/validate-card', cardValidator, validateCardNumber)

export default router
