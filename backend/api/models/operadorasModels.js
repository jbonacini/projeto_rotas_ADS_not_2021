const conexao = require('../../config/conexao.js');

module.exports = {
    getAllOperadoras,
    getByIdOperadoras,
    ativarInativar        
}

function getAllOperadoras (callback) {
    conexao.query('select * from operadoras', callback)
}

function getByIdOperadoras (id, callback) {
    conexao.query('select * from operadoras WHERE edt_codigo = ' + id, callback)
}

function ativarInativar (id, ativo, callback) {
    console.log('operadoras Ativando/Inativando Registro ' + id + " - Status: " + ativo)

    const m_sql = "update operadoras set opr_ativoinativo = '" + ativo + "' where opr_codigo = '" + id + "'";

    conexao.query( m_sql, callback );

    console.log('Retornando { M O D E L } operadoras Ativando/Inativando Registro ' + id + " - Status: " + ativo)
    
}

