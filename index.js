const express = require('express')
const app = express()
app.use(express.json())

const pgRoutes = require('./routes/postgres')
const mgRoutes = require('./routes/mongo')

app.use('/pg', pgRoutes)
app.use('/mg', mgRoutes)

app.listen(3000, () => console.log('Server running on port 3000'))