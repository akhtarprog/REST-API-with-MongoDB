const mongoose = require('mongoose')
let config = require('./config')

let dbURL = config.db.url;

mongoose
.connect(dbURL)
.then(()=>{
    console.log('mongodb is connected');
})
.catch((error)=>{
    console.log(error)
    process.exit(1)
    
})