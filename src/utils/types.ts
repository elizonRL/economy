export interface Economy {
  income: number
  month: string
  bills: bill[]

}
interface bill {
  billName: string
  billAmount: number
}
