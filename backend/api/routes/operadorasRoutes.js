const controller = require('../controllers/operadorasControllers.js');

server.get('/operadoras', controller.operadorasMenu)

server.get('/operadoras/listar', controller.operadorasGetAll)

server.get('/operadoras/consultar/:codigo', controller.operadorasGetById)

server.get('/operadoras/ativoInativo/:codigo', controller.operadorasAtivoInativo)


