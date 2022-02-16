// conexão com a base de dados; validação de regra de negócios.

const moment = require("moment")  // formata as datas
const conexao = require("../infraestrutura/conexao")

class Atendimento{
    adiciona(atendimento, res){
        const dataCriacao = moment().format("YYYY-MM-DD HH:MM:SS")

        const clienteEhValido = atendimento.cliente.length >= 5

        const validacoes = [                    //validações de entrada
            {
                nome: "cliente",
                valido: clienteEhValido,
                mensagem: "Cliente deve ter pelo menos cinco caracteres"
            }
        ]

        const erros = validacoes.filter(campo => !campo.valido)
        const existemErros = erros.length
        if(existemErros){
            res.status(400).json(erros)
        } else {
        
        const atendimentoDatado = {...atendimento, dataCriacao}
        const sql = "INSERT INTO Listas SET ?"

        conexao.query(sql, atendimentoDatado, atendimento, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro)
            } else {
                res.status(201).json(resultados)

            }
            
            
        })

    }
}
    lista(res){
        const sql = "SELECT * FROM Listas"

        conexao.query(sql, (erro, resultados) =>{
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }
            
        })
    }

    buscaPorId(id, res){
        const sql = `SELECT * FROM Listas WHERE id = ${id}`

        conexao.query(sql, (erro, resultados) =>{
            const atendimento = resultados[0]
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(atendimento)
            }
            
        })
    }

    altera(id, valores, res) {
  
        const sql = "UPDATE Listas SET ? WHERE id = ?"

        conexao.query(sql, [valores, id], (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({...valores, id})
            }
        })
    }

    deleta(id, res) {
        const sql = "DELETE FROM Listas WHERE id = ?"

        conexao.query(sql, id, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({id})
            }
        })
    }
   
}
module.exports = new Atendimento