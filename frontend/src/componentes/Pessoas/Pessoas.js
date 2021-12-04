import React from "react"
import './Pessoas.css';
//import { funcao1 } from "../../scripts/script";
//import { useHistory } from "react-router";

import urlapi from "../../services/api.js"
import Tabela from "../Tabelas/TabelaPessoas";

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Pessoas() {
  const [pessoas, setPessoas] = useState([])

  //  console.log("Executando fetch..")
  
  useEffect(() => {
    urlapi.get('pessoas')
      .then(response => setPessoas(response.data));
  }, []
  )

  return (
    <>
        <div id="idPessoas" className="pessoas">
          <div id="corpo_rel">
            <legend > Registros de Pessoas Cadastrados</legend>
            <Link to="/pessoas/0"  class="btn btn-dark btn-lg btn-bloc" value={'I'}>Incluir Nova Pessoa</Link>

            <div>

              <Tabela
                items={pessoas}
                chave={'/pessoas/'}
              />

            </div>
          </div>
        </div>
    </>
  );
}

export default Pessoas;

