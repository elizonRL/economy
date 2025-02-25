// Code for the main application
import express from 'express'
import economyRouter from './router/economy.router'
import middleware from './utils/middleware'

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World')
})
app.use('/api/economy', economyRouter)

app.use(middleware.unKnownEndpoint)
export default app
