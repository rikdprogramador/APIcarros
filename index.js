// serve pra subir o servidor no ar

const customExpress = require("./config/customExpress")

const conexao = require("./infraestrutura/conexao")

const Tabelas = require("./infraestrutura/tabelas")

conexao.connect(erro => {
    if(erro){
        console.log("erro do index.js", erro)
    } else{
        console.log("Conectado com sucesso")
        
        Tabelas.init(conexao)
        const app = customExpress()

        app.listen(3000, () => console.log("Servidor está rodando na porta 3000"))
    }
})



// CTRL+C para derrubar servidor