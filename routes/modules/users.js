const express = require('express')
const router = express.Router()
const users = [
  {
    firstName: 'Tony',
    email: 'tony@stark.com',
    password: 'iamironman'
  },
  {
    firstName: 'Steve',
    email: 'captain@hotmail.com',
    password: 'icandothisallday'
  },
  {
    firstName: 'Peter',
    email: 'peter@parker.com',
    password: 'enajyram'
  },
  {
    firstName: 'Natasha',
    email: 'natasha@gamil.com',
    password: '*parol#@$!'
  },
  {
    firstName: 'Nick',
    email: 'nick@shield.com',
    password: 'password'
  }
]

router.post('/login', (req, res) => {
  const mail = req.body.email
  const password = req.body.password
  const match = users.find(user => user.email === mail && user.password === password)
  if (match) {
    res.render('login', { match })
  } else {
    res.render('index', { mail, match: !match })
  }
})

module.exports = router