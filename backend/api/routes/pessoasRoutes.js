const controller = require('../controllers/pessoasControllers.js');

server.get('/pessoas', controller.pessoasGetAll)

server.get('/pessoas/:codigo', controller.pessoasGetById)

server.put('/pessoas/:codigo', controller.pessoasEditar)

server.post('/pessoas', controller.pessoasNovo)

