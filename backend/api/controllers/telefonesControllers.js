const models = require('../models/telefonesModels.js');

module.exports = {
    telefonesMenu,
    telefonesGetAll,
    telefonesGetById,
    telefonesAtivoInativo,
    telefonesEditar,
    telefoneNovo,    
}

function telefonesMenu(req, res) {
    res.json('Rota telefones Encontrada!!!');
    console.log('Rota telefones Encontrada!!!');
}

function telefonesGetAll(req, res) {
    console.log('Listar telefones {M O D E L}');
    models.getAlltelefones(function(err, resposta) {
        console.log('Retorno de telefones {M O D E L}', resposta)
        if(err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })  
}


function telefonesGetById(req, res) {
    const id = req.params.codigo
    console.log('Parametro Esperado: ' + id);
    models.getByIdtelefones(id, function(err, resposta) {
        console.log('Retorno de telefones Id {M O D E L}', resposta)
        if(err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })
}


function telefonesAtivoInativo(req, res) {
    const id = req.params.codigo
    res.json('Ativar/Inativar telefones { M O D E L }')    
    console.log('Ativar/Inativar telefones { M O D E L }')
    console.log('Parametro Esperado: ' + id);

    models.getByIdtelefones(id, function(err, resposta) {
        console.log('Retorno de telefones Id {M O D E L}', resposta)
        let p_ativo = resposta[0].liv_ativoinativo
        if(err) {
            throw err;
        } else {
            if( p_ativo == 'A') {
                p_ativo = 'I'
            } else {
                p_ativo = 'A'
            }
        }
        console.log('A/I: ' + p_ativo);
        models.ativarInativar(id, p_ativo, function(err, result){
            if(err) {
                throw err
            }
            console.log("Registro Atualizado!!!")
//            res.redirect('/autores/consultar/' + id);
        })
    })
}

function telefonesEditar(req, res) {
    var dados = req.body;

    console.log(dados);
    console.log("Alterando Registro de Autores...",dados);

    models.editarTelefone(dados, function (err, result) {
        if (err) {
            throw err;
        }
        // res.redirect('/autores');
    });
}

function telefoneNovo(req, res) {
    var dados = req.body;
    console.log("Gravando Novo Registro de Autores...");
    console.log(req.body);
    dados.ord_codigo = null;
    console.log("Inserindo novo registro de Autores...");
    models.novoTelefone(dados, function (err, result) {
        if (err) {
            throw err;
        }
        res.redirect('/');
    })
}

