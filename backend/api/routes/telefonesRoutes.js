const controller = require('../controllers/telefonesControllers.js');

server.get('/telefones', controller.telefonesGetAll)

server.get('/telefones/:codigo', controller.telefonesGetAll)

server.put('/telefones/:codigo', controller.telefonesEditar)

server.post('/telefones', controller.telefoneNovo)
