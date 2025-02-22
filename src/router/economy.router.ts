
import express from 'express'
import economySevice from '../services/economy.sevice'

const router = express.Router()

router.get('/', (req, res) => {
  res.send(economySevice.getEconomy())
})

export default router
