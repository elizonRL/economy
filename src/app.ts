// Code for the main application
import express from 'express'
import economyRouter from './router/economy.router'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})
app.use('/api/economy', economyRouter)

export default app
