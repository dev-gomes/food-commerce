import { Request, Response } from 'express'

const express = require('express')
const app = express()

app.get('/', function (req: Request, res: Response) {
  res.send('hello world')
})

app.listen(3333, () => {
  console.log('server running on port 3333')
})
