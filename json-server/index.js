const fs = require('fs')
const jsonServer = require('json-server')
const jwt = require('jsonwebtoken')
const path = require('path')
const cors = require('cors')

const server = jsonServer.create()

const router = jsonServer.router(path.resolve(__dirname, 'db.json'))

server.use(cors())
server.use(jsonServer.defaults({}))
server.use(jsonServer.bodyParser)

server.use(async (req, res, next) => {
    console.log(req.body, 'body')
    // eslint-disable-next-line promise/param-names
    await new Promise((res) => {
        setTimeout(res, 800)
    })
    next()
})

server.post('/login', (req, res) => {
    console.log('here2')
    const { username, password } = req.body
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'))
    const { users } = db

    const userFromDB = users.find(user => user.username === username && user.password === password)

    if (userFromDB) {
        return res.json(userFromDB)
    }

    return res.status(403).json({ message: 'AUTH ERROR' })
})

server.use(async (req, res, next) => {
    console.log('here1')
    if (!req.headers.authorization) {
        return res.status(403).json({ message: 'AUTH ERROR' })
    }
    next()
})

server.use(router)

server.listen(8000, () => {
    console.log('server is running on 8000 port')
})
