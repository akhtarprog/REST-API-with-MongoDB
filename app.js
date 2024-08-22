const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const userRouter = require('./router/user.router')
require('./config/db')


app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json()) 



app.use('/api/users', userRouter)


// api/users : GET
// api/users/:id : GET
// api/users/ : POST
// api/users/:id : PATCH
// api/users/:id : DELETE



app.get('/', (req,res)=>{
        res.status(200)
        res.sendFile(__dirname + "/index.html")
})

// route not found error
app.use((req,res,next)=>{
    res.status(404)
    res.send('This rout is not found 404')
})

//handling server error
app.use((error,req,res,next)=>{
    res.status(500)
    res.send('This server is error 500')
})


module.exports = app;