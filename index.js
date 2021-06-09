const express = require("express")
var app = express()
const cors = require('cors')

app.use(express.json())

app.use(cors())

app.get("/", (req, res) => {
    res.send("Parabéns você chegou até aqui.")
})


require("./controllers/login")(app)


require("./controllers/usuarios")(app)
require("./controllers/product")(app)

app.listen(process.env.PORT || 80, () => {
    console.log("servidor online")
})