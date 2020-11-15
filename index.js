const express = require('express' )
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello world!')

})

app.get('/hi', (req, res) => {
    res.send('get out')

})

app.get('/buffalo', (req, res) => {
    res.send('moo')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})