import React from "react"
import './Telefones.css';
//import { funcao1 } from "../../scripts/script";
//import { useHistory } from "react-router";

import urlapi from "../../services/api.js"
import Tabela from "../Tabelas/TabelaTelefones";

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Telefones() {
  const [telefones, setTelefoness] = useState([])

  //  console.log("Executando fetch..")
  
  useEffect(() => {
    urlapi.get('telefones')
      .then(response => setTelefoness(response.data));
  }, []
  )

  return (
    <>
        <div id="idTelefoness" className="telefones">
          <div id="corpo_rel">
            <legend> Registros de Pessoas Cadastrados </legend>
            <Link to="/telefones/0" class="btn btn-dark btn-lg btn-bloc" value={'I'}>Incluir Novo Telefone</Link>

            <div>

              <Tabela
                items={telefones}
                chave={'/telefones/'}
              />

            </div>
          </div>
        </div>
    </>
  );
}

export default Telefones;

