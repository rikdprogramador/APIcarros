class Tabelas {
    init(conexao){
        this.conexao = conexao
            console.log("Tabelas foram chamadas")

        this.criarAtendimentos()
    }

    criarAtendimentos(){
        const sql = "CREATE TABLE IF NOT EXISTS Listas (id int NOT NULL AUTO_INCREMENT, cliente varchar(50) NOT NULL, modelo varchar(20), cordomodelo varchar (20) NOT NULL, dataCriacao datetime NOT NULL, status varchar(20) NOT NULL, observacoes text, PRIMARY KEY(id))"

        this.conexao.query(sql, erro => {
            if(erro){
                console.log(erro)
            } else {
                console.log("Tabela Listas criada com sucesso")
            }
        })
    }
}

module.exports = new Tabelas
