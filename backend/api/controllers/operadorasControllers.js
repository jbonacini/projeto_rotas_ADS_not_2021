const models = require('../models/operadorasModels.js');

module.exports = {
    operadorasMenu,
    operadorasGetAll,
    operadorasGetById,
    operadorasAtivoInativo        
}

function operadorasMenu(req, res) {
    res.json('Rota Operadoras Encontrada!!!');
    console.log('Rota Operadoras Encontrada!!!');
}

function operadorasGetAll(req, res) {
    console.log('Listar Operadoras {M O D E L}');
    models.getAllOperadoras(function(err, resposta) {
        console.log('Retorno de Operadoras {M O D E L}', resposta)
        if(err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })
}

function operadorasGetById(req, res) {
    const id = req.params.codigo
    console.log('Parametro Esperado: ' + id);
    models.getByIdOperadoras(id, function(err, resposta) {
        console.log('Retorno de Operadoras Id {M O D E L}', resposta)
        if(err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })
}

function operadorasAtivoInativo(req, res) {
    const id = req.params.codigo
    res.json('Ativar/Inativar Operadoras { M O D E L }')    
    console.log('Ativar/Inativar Operadoras { M O D E L }')
    console.log('Parametro Esperado: ' + id);

    models.getByIdoperadoras(id, function(err, resposta) {
        console.log('Retorno de Operadoras Id {M O D E L}', resposta)
        let p_ativo = resposta[0].edt_ativoinativo
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

