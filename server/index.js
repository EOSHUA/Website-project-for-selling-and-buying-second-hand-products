const express = require('express')
const app = express()
require('./DL/db').connect()

const cors = require('cors')
app.use(cors())
app.use(express.json())

const guestRouter = require('./guest/guest.router')
app.use('/guest', guestRouter)


const itemsRouter = require('./items/items.router')
app.use('/items', itemsRouter)


const memberRouter = require('./member/member.router')
app.use('/member', memberRouter)



app.listen(4545, () => console.log("### Server is up ###"))