//Importar o express para dentro da variável constante 'express'
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

//Uma variável para armazenar a aplicação
const app = express();


app.use(cors({
    //origin: 'http://exemplo.com'
}));
app.use(express.json());
app.use(routes);

//   /users = Rota / Recurso (users é um recurso)

/* Métodos HTTP:
    GET: Buscar/Listar uma informação no back-end
    POST: Criar uma informação no back-end
    PUT: Alterar uma informação no back-end
    DELETE: Deletar uma informação no back-end
*/

/*  Tipos de parâmetros:
      Query Params: Parâmetros nomeados enviados na rota após o "?" (Servem geralmente para fitros ou paginação)
      Route Params: Parâmetros utilizados para identificar recursos
      Body Params: Corpo da requisição, utilizado para criar ou alterar recursos
*/

/*
    SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
    NoSQL: MongoDB, CouchDB, etc
*/
/*
    Driver: SELECT * FROM users
    Query Builder: table('users').select('*').where()
*/

//Essa aplicação deverá ouvir quando a porta 3333 for chamada para abrir.
app.listen(3333);

//Para rodar a aplicação, no terminal: node index.js
