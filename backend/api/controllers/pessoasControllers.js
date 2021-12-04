const models = require('../models/pessoasModels.js');

module.exports = {
    //    autoresMenu,
    pessoasGetAll,
    pessoasGetById,
    pessoasAtivoInativo,
    pessoasNovo,
    pessoasEditar,
}

function pessoasMenu(req, res) {
    res.json('Rota Pessoas Encontrada!!!');
    console.log('Rota Pessoas Encontrada!!!');
}

function pessoasGetAll(req, res) {
    console.log('Listar Pessoas {M O D E L}');
    models.getAllPessoas(function (err, resposta) {
        // console.log('Retorno de Pessoas {M O D E L}', resposta)
        if (err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })
}

function pessoasGetById(req, res) {
    const id = req.params.codigo
    console.log('Parametro Esperado Get: ' + id);
    models.getByIdPessoas(id, function (err, resposta) {
        // console.log('Retorno de Pessoas Id {M O D E L}', resposta)
        if (err) {
            throw err;
        } else {
            res.json(resposta);
        }
    })
}
 

function pessoasAtivoInativo(req, res) {
    const id = req.params.codigo
    res.json('Ativar/Inativar Pessoas { M O D E L }')
    // console.log('Ativar/Inativar Pessoas { M O D E L }')
    // console.log('Parametro Esperado A-I: ' + id);

    models.getByIdPessoas(id, function (err, resposta) {
        console.log('Retorno de Pessoas Id {M O D E L}', resposta)
        let p_ativo = resposta[0].aut_ativoinativo
        if (err) {
            throw err;
        } else {
            if (p_ativo == 'A') {
                p_ativo = 'I'
            } else {
                p_ativo = 'A'
            }
        }
        console.log('A/I: ' + p_ativo);
        models.ativarInativar(id, p_ativo, function (err, result) {
            if (err) {
                throw err
            }
            console.log("Registro Atualizado!!!")
            //            res.redirect('/autores/consultar/' + id);
        })
    })
}


function pessoasNovo(req, res) {
    var dados = req.body;
    // console.log("Gravando Novo Registro de Pessoas...");
    // console.log(req.body);
    dados.pes_codigo = null;
    // console.log("Inserindo novo registro de Pessoas...");
    models.novoPessoa(dados, function (err, result) {
        if (err) {
            throw err;
        }
        // res.redirect('/pessoas');
    })
}


function pessoasEditar(req, res) {
    var dados = req.body;

    // console.log(dados);
    // console.log("Alterando Registro de Pessoas...",dados);

    models.editarPessoas(dados, function (err, result) {
        if (err) {
            throw err;
        }
        // res.redirect('/pessoas');
    });
}


