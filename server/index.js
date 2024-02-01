const express = require('express')
const app = express()
require('./DL/db').connect()

const cors = require('cors')
app.use(cors())
app.use(express.json())

const guestRouter = require('./guest/guest.router')
app.use('/guest', guestRouter)


// const guestRouter = require('./guest/guest.router')
// app.use('/:hkkhk', itemsRouter)

app.listen(4545, () => console.log("### Server is up ###"))