const express = require("express");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
    res.send("Conexão estabelecida 1.2!")
})

//criando chamada para o servidor:
app.listen(port, () => {
    console.log(console.log(`app running on url http://localhost:${port}`))
})