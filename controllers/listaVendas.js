// controlar quais são as rotas e o que temos que fazer quando acessar cada uma das rotas (controla os models a cada requisição)

const Venda = require("../models/listaVendas")

module.exports = app => {

    app.get("/modelos", (req, res) => {
        Venda.lista(res)
    })
    
    app.get("/modelos/:id", (req, res) => {
        const id = parseInt(req.params.id)

        Venda.buscaPorId(id, res)

        res.send("OK")
    })

    app.post("/modelos", (req, res) => {
        const venda = req.body
        Venda.adiciona(venda, res)

        res.send("Carro gravado com sucesso")
    })

    app.patch('/modelos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body

        Venda.altera(id, valores, res)
    })

    app.delete('/modelos/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Venda.deleta(id, res)
    })

}

