const conexao = require('../../config/conexao.js');

module.exports = {
    getAllPessoas,
    getByIdPessoas,
    ativarInativar,
    editarPessoas,
    novoPessoa            
}

function getAllPessoas (callback) {
    conexao.query('select * from pessoas', callback)
}

function getByIdPessoas (id, callback) {
    conexao.query('select * from pessoas WHERE pes_codigo = ' + id, callback)
}

function ativarInativar (id, ativo, callback) {
    console.log('Pessoas Ativando/Inativando Registro ' + id + " - Status: " + ativo)

    const m_sql = "update pessoas set pes_ativoinativo = '" + ativo + "' where pes_codigo = '" + id + "'";

    conexao.query( m_sql, callback );

    console.log('Retornando { M O D E L } Pessoas Ativando/Inativando Registro ' + id + " - Status: " + ativo)

    
}

function novoPessoa(dados, callback) {
    var msql = 'INSERT INTO pessoas SET ? ';

	conexao.query(msql, dados, callback);
}

function editarPessoas(dados, callback) {
    // console.log('Estou alterando o pessoas { M O D E L } .......' + dados);

    var msql = "UPDATE pessoas SET pes_nome = '" + dados.pes_nome +    
    "' , pes_nome         = '" + dados.pes_nome +   
    "' , pes_apelido      = '" + dados.pes_apelido + 
    "' , pes_sexo         = '" + dados.pes_sexo +  
    "' , pes_dtnascimento = '" + dados.pes_dtnascimento + 
    "'  WHERE pes_codigo  = '" + dados.pes_codigo + "'";

    console.log(msql);
    
    conexao.query(msql, callback);
}

