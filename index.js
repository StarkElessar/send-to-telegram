require('dotenv').config()
const express = require("express");
const cors = require('cors')
const router = require('./routes/index')

const PORT = process.env.PORT || 5100
const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', router)

const startServer = async () => {
  try {
    app.listen(PORT, () => console.log(`Server is run on PORT: ${PORT}`))
  } catch (error) {
    console.error(error)
  }
} 

startServer()