
import express from 'express'
import economySevice from '../services/economy.sevice'
import { getMethodAllEconomy } from '../Controller/economy.comtroller'

const router = express.Router()

router.get('/', getMethodAllEconomy)

router.post('/', (req, res) => {
  const { income, month, bills } = req.body
  const newEconomy = economySevice.addEconomy(income, month, bills)
  res.send(newEconomy)
})

export default router
