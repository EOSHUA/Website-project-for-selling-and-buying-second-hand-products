const express = require('express');
const cors = require('cors');
const app = express();
const { memmber } = require('./routes/memmber');
const { user } = require('./routes/user');
const { run } = require('./modole')
const port = process.env.PORT || 5000


app.use(cors());
app.use(express.json());
app.use(run)
app.use('/api/users', user)
app.use('/api/memmbers/:id', memmber)

app.listen(port, console.log(port));
