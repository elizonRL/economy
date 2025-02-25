import { Request, Response } from 'express'
/* import { Economy } from '../utils/types' */
import economySevice from '../services/economy.sevice'

export const getMethodAllEconomy = (req: Request, res: Response): void => {
  const economy = economySevice.getEconomy()
  res.send(economy)
}
