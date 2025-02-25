
import express from 'express'
import economySevice from '../services/economy.sevice'

const router = express.Router()

router.get('/', (req, res) => {
  res.send(economySevice.getEconomy())
})

router.post('/', (req, res) => {
  const { income, month, bills } = req.body
  const newEconomy = economySevice.addEconomy(income, month, bills)
  res.send(newEconomy)
})

export default router
