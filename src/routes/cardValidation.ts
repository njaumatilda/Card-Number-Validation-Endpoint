import { Router } from 'express'
import { validateCardNumber } from '../controllers/cardValidation.js'

const router: Router = Router()

router.post('/validate-card', validateCardNumber)

export default router
