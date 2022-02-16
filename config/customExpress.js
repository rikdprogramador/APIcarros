// configurar qualquer coisa dentro do Express

const express = require ("express") // framework
const consign = require ("consign") // serve para pegar as rotas que estão sendo criadas (atendimentos por exemplo) e jogar dentro do app
const bodyParser = require ("body-parser") // realizar conversões para que se consiga ler no terminal

module.exports = () => {

    const app = express()

    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())

    consign()
        .include("controllers")
        .into(app)
    return app

}
