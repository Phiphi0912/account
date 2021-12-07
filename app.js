const express = require('express')
const { engine } = require('express-handlebars')
const routes = require('./routes/index')

const app = express()
const port = 3000

app.engine('hbs', engine({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(express.urlencoded({ extended: true }))
app.use(routes)


app.listen(port, () => {
  console.log(`running on the http://localhost:${port}`)
})