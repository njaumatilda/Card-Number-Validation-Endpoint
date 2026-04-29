import 'dotenv/config'
import express from 'express'

import cardValidationRoutes from './routes/cardValidation.js'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use('/api', cardValidationRoutes)

app.listen(PORT, () => {
  console.log(`[server]: App listening on port: ${PORT}`)
})
