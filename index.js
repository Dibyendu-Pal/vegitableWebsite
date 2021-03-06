const connectToMongo = require("./config/database");
const express = require('express')
var cors = require('cors')

connectToMongo();

const app = express()
const { API_PORT } = process.env;
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

// Available Routes
app.use('/api/user', require('./routes/userRoutes'))
app.use('/api/item', require('./routes/itemRoutes'))
app.use('/api/admin', require('./routes/adminRoutes'))


if (process.env.NODE_ENV == "production") {

  app.use(express.static("frontend/build"));

}

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
