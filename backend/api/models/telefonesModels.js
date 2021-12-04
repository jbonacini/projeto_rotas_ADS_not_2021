const conexao = require('../../config/conexao.js');

module.exports = {
    getAlltelefones,
    getByIdTelefones,
    editarTelefone,
    novoTelefone,        
}

function getAlltelefones (callback) {
//    conexao.query('select * from livros', callback)
    conexao.query('SELECT * FROM telefones INNER JOIN pessoas ON pessoas.pes_codigo = telefones.pes_codigo', callback)    
}

function getByIdTelefones (id, callback) {
    conexao.query('select * from telefones WHERE ord_codigo = ' + id, callback)
}

function editarTelefone(dados, callback) {
    console.log('Estou alterando o autores { M O D E L } .......' + dados);

  
    var msql = "UPDATE telefones SET  ord_tipo  = '" + dados.ord_tipo + 
    "' , ord_marca         = '" + dados.ord_marca + 
    "' , ord_numero     = '" + dados.ord_numero + 
    "' , ord_operadora        = '" + dados.ord_operadora + 
    "' , pes_codigo        = '" + dados.pes_codigo + 
    "'  WHERE ord_codigo  = '" + dados.ord_codigo + "'";

    console.log(msql);
    
    conexao.query(msql, callback);
}

function novoTelefone(dados, callback) {
    var msql = 'INSERT INTO telefones SET ? ';

	conexao.query(msql, dados, callback);
}



















function ativarInativar (id, ativo, callback) {
    console.log('Livros Ativando/Inativando Registro ' + id + " - Status: " + ativo)

    const m_sql = "update livros set liv_ativoinativo = '" + ativo + "' where liv_codigo = '" + id + "'";

    conexao.query( m_sql, callback );

    console.log('Retornando { M O D E L } Livros Ativando/Inativando Registro ' + id + " - Status: " + ativo)
    
}

