const express = require('express')
const path = require('path')
const app = express()
const bodyParser = require('body-parser')
const history = require('connect-history-api-fallback')

const port = process.env.PORT || 3000

app.use(history())

// parse requests of content-type: application/json
app.use(bodyParser.json())

app.use(history())

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

app.use(history())


app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*') // update to match the domain you will make the request from
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    )
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT')
    next()
})

app.use(history())

app.use(express.static(path.join(__dirname, '../frontend/dist')))

app.use(
    history({
        index: '/index.html',
    })
)

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist/index.html'))
})

app.use(history())

app.listen(port, () => console.log(`server started on port ${port}`))