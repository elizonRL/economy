
import express from 'express'
import economySevice from '../services/economy.sevice'

const router = express.Router()

router.get('/', (req, res) => {
  res.send(economySevice.getEconomy())
})

router.post('/', (req, res) => {
  res.send('POST request to the homepage')
})

export default router
