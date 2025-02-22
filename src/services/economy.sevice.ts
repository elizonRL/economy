import { Economy } from '../utils/types'

const economy: Economy = {
  income: 1000,
  month: 'January',
  bills: [
    {
      billName: 'Rent',
      billAmount: 500
    },
    {
      billName: 'Utilities',
      billAmount: 150
    },
    {
      billName: 'Phone',
      billAmount: 50
    }
  ]
}

const getEconomy = (): Economy => {
  return economy
}

export default {
  getEconomy
}
