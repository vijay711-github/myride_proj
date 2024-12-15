const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
dotenv.config()
const port = process.env.PORT;
console.log(port)
const app = express()
app.use(cors())
app.get('/e', (req, res) => {
res.json({
    "msg": "hi"
})
})


app.listen(port,() => {
    console.log('listening on ',port)
})