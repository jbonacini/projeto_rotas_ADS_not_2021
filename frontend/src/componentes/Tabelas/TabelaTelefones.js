import React from 'react';
import { Link } from 'react-router-dom';

import './Tabelas.css';

export default function Tabela(props) {

  function getLinhas() {

    const arrayRegistros = props.items;
    console.log("Ai Sim Meu Irmãooo",props);

      
      return arrayRegistros.map((item, i) => {
     
      return (
        <tr className={i % 2 === 0 ? "par" : "impar"} key={item.ord_codigo}>
          <td> {item.ord_codigo} </td>
          <td> {item.ord_tipo} </td>
          <td> {item.ord_marca} </td>
          <td> {item.ord_numero} </td>
          <td> {item.ord_operadora} </td>

          <td id="editar"> <a className="btn btn-primary btn-block" href={props.chave + item.ord_codigo} > Editar </a></td>
          {/* <td id="ativar"> <a className="btn btn-danger btn-block" href={props.chave + item.ord_codigo} > Inativar </a></td> */}
          <td> <Link to={props.chave + item.ord_codigo}> <i className="bi bi-clipboard-data"> </i> </Link> </td>

          <td> <i className="bi bi-trash"></i> </td>
        </tr>
      )
    })
  }

  return (
    <div className="tabela">
      <table id="tabela" className="table table-hover">
        <thead id="cabecalho_rel">
          <tr style={{ textAlign: 'Center' }} class="thead-dark">
            <th scope="col"> Código </th>
            <th scope="col"> Tipo </th>
            <th scope="col"> Marca </th>
            <th scope="col"> Número </th>
            <th scope="col"> Operadora </th>
            <th scope="col"><a href={props.chave + '0'} className="btn btn-success btn-block">Novo Telefone</a></th>
          </tr>
        </thead>
        <tbody>
          {getLinhas()}
        </tbody>
      </table>
    </div>
  )

}