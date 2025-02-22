export interface Economy {
  id: number
  income: number
  month: string
  bills: Bill[]
}
export interface Bill {
  billName: string
  billAmount: number
}
