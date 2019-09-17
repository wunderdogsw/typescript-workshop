import express from 'express'
import { UsersResponse } from '~/shared/responses'

const port = process.env.NODE_ENV === 'development' ? 3001 : 3000

const app = express()
const api = express.Router()

api.get('/users', (_req, res) => {
  const body: UsersResponse = {
    users: ['Jane', 'John'],
  }
  res.send(body)
})

app.use('/api', api)

app.listen(port, () => {
  console.log(`${process.env.NODE_ENV} server listening on port ${port}`)
})
