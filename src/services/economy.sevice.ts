import { Economy, Bill } from '../utils/types'

const economy: Economy[] = [{
  id: 1,
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
}]

const getEconomy = (): Economy[] => {
  return economy
}

const addEconomy = (income: number, month: string, bills: Bill[]): Economy => {
  const newEconomy: Economy = {
    id: economy.length + 1,
    income,
    month,
    bills
  }
  return newEconomy
}
/* const addBill = (billName: string, billAmount: number, id: number): Bill => {
  const newBill: Bill = { billName, billAmount }
  economy.bills.push(newBill)
  return newBill
} */

export default {
  getEconomy,
  addEconomy
}
