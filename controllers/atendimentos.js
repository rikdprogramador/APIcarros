// controlar quais são as rotas e o que temos que fazer quando acessar cada uma das rotas (controla os models a cada requisição)
// const atendimentos = require("../models/atendimentos")
const Atendimento = require("../models/atendimentos")

module.exports = app => {

    app.get("/modelos", (req, res) => {
        Atendimento.lista(res)
    })
    
    app.get("/modelos/:id", (req, res) => {
        const id = parseInt(req.params.id)

        Atendimento.buscaPorId(id, res)

        res.send("OK")
    })

    app.post("/modelos", (req, res) => {
        const atendimento = req.body
        Atendimento.adiciona(atendimento, res)

        res.send("Carro gravado com sucesso")
    })

    app.patch('/modelos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body

        Atendimento.altera(id, valores, res)
    })

    app.delete('/modelos/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Atendimento.deleta(id, res)
    })

}

