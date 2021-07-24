const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.get('/', (req, res, next) =>{
    res.redirect('/public')
})
app.use('/public' , express.static(path.resolve(__dirname, '../docs')))

app.listen(port, ()=>{
    console.log(`Server started! Access to http://localhost:${port}`)
})