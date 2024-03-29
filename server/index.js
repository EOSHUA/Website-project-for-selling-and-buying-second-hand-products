const express = require('express')
const app = express()
require('./DL/db').connect()

const cors = require('cors')
app.use(cors())
app.use(express.json({ limit: "250mb" }))
// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     next();
//   });

const guestRouter = require('./guest/guest.router')
app.use('/guest', guestRouter)


const itemsRouter = require('./items/items.router')
app.use('/items', itemsRouter)

const uploadRouter = require('./upload/upload.router')
app.use('/upload', uploadRouter)


const memberRouter = require('./member/member.router')
app.use('/member', memberRouter)



app.listen(4545, () => console.log("### Server is up ###"))