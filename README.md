# Card Validation API

A RESTful API that is used to validated card numbers using the Luhn Algorithm.

## Core Feature

- Provides a POST endpoint that accepts a card number and returns whether it is valid or not.

## Requirements
- Node.js (v18 or higher recommended)
- pnpm

## Tech Stack

- **Framework**: Express
- **Language**: TypeScript
- **Testing**: Jest (unit)

## Local setup instructions

1. Clone the repository

```bash
git clone https://github.com/njaumatilda/Card-Number-Validation-Endpoint.git
```

2. Navigate to the project directory

```bash
cd card-number-validation
```

3. Install dependencies

```bash
pnpm i
```

4. Configure environment variables

To run this project, you will need to create a `.env` file in the project directory and make sure it is included in the `.gitignore` file. Configure the following environment variables:

```env
PORT = your-port
```

> Replace `your-port` with your specified port eg. 4000

5. Start the server

```bash
pnpm run start:dev
```

## API Documentation

### Validate Card Number
Check if a card number is valid based on industry-standard algorithm.

- URL: /api/validate-card
- Method: POST
- Auth Required: No

### Request body 

```json
{
  "cardNumber": "49927398716"
}
```

### Success Response (200 OK)

```json
{
  "message": "Card number is valid",
}
```
### Error Response (400 Bad Request)

```json
{
  "error": "Invalid card number"
}
```
## Deployment
The API has been deployed to a publicly accessible endpoint on Render:
[Live URL](https://card-number-validation-endpoint.onrender.com/)

## Author

[Matilda Njau](https://github.com/njaumatilda)
