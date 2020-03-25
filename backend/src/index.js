const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

/**
 * 
 * GET: Buscar/listar uma informacao do back-end
 * POST: Criar uma informacao no Back-end
 * PUT: Alterar uma informacao no Back-end
 * DELETE: Deletar uma informacao no back-end
 * 
 */



/**
 * Tipos de parametros:
 * 
 * Query params: Parametros nomeados enviados na rota apos o "?"(filtros e paginacoes)
 * Route Params: Parametros utilizados para identificar recursos
 * Request Body: Corpo da requisicao, utilizado para criar ou alterar recursos
 * 
 */





app.listen(3333);