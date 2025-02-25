
import { Request, Response } from 'express'

const unKnownEndpoint = (req: Request, res: Response): void => {
  res.status(404).send({ error: 'unknown endpoint' })
}

export default {
  unKnownEndpoint
}
