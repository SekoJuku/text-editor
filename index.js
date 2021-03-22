const express = require('express')
const config = require('config')
const cors = require('cors')
const {check,validationResult} = require('express-validator')
const mongoose = require('mongoose')

const app = express()
const PORT = config.get('port') || 5000

app.use(cors())

app.use(express.json({extended: true}))

app.use('/api/auth', require('./routes/auth.routes'))

async function start() {
    try {
        await mongoose.connect(config.get('mongoURI'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        app.listen(PORT, ()=> console.log('App has been started'))
    } catch (e) {
        console.log('Server Error',e.message)
        process.exit(1)
    }
}
start()
