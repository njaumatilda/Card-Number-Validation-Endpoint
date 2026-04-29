import 'dotenv/config'
import express from 'express'

import cardValidationRoutes from './routes/cardValidation.js'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use('/api', cardValidationRoutes)

app.get('/', (req, res) => {
  res
    .status(200)
    .json({ message: 'Welcome to the Card Number Validation API!' })
})

app.listen(PORT, () => {
  console.log(`[server]: App listening on port: ${PORT}`)
})
