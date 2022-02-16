# API - Lista de carros

Esta API conduz o processo de vendas de carros, onde é possível listar novos modelos de carro, atualizá-los e deletá-los. 

## Arquitetura

Foi utilizado o framework **Express** e a biblioteca **Consign** para facilitar o gerenciamento das rotas

### Outras ferramentas

- **nodemon** -> biblioteca auxiliar para reinicialização automática do servidor
- **moment** -> para formatação de datas
- **body parser** -> converte o body da requisição para vários formatos

## Comunicação

Utilizou-se o **Node.js** e o **Postman** para ligar o front-end com o back-end e inserir as informações posteriormente no banco de dados **MySQL**.

## Executar o Projeto

- Deve-se instalar as dependências:

		npm install

 - Para rodar o projeto, utilize o comando:

		npm start