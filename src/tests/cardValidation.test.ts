import request from 'supertest'
import express from 'express'
import cardValidationRoutes from '../routes/cardValidation.js' // adjust path if needed

// Create a test app with your routes
const app = express()
app.use(express.json())
app.use('/api', cardValidationRoutes)

describe('Card Validation API', () => {
  it('should return 200 for valid card number', async () => {
    const response = await request(app)
      .post('/api/validate-card')
      .send({ cardNumber: '79927398713' }) // example valid number

    expect(response.status).toBe(200)
    expect(response.body.message).toBe('Card number is valid')
  })

  it('should return 400 for invalid card number', async () => {
    const response = await request(app)
      .post('/api/validate-card')
      .send({ cardNumber: '1234567890123456' }) // example invalid number

    expect(response.status).toBe(400)
    expect(response.body.error).toBe('Invalid card number')
  })

  it('should return 400 for missing card number', async () => {
    const response = await request(app).post('/api/validate-card').send({})

    expect(response.status).toBe(400)
    expect(response.body.error).toBe('Card number is required')
  })
})
