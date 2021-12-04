import React from 'react';
//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

import Pessoas from '../Pessoas/Pessoas';
import PessoasEditar from '../Pessoas/PessoasEditar';
import Telefones from '../Telefones/Telefones';
import TelefonesEditar from '../Telefones/TelefonesEditar';

import './AreaDados.css';
 
export default function AreaDados() {
  return (
    <div id="idArea" className="areaDados">
      <Switch>
        <Route exact path="/pessoas" component={Pessoas}></Route>
        <Route exact path="/pessoas/:idPessoa" component={PessoasEditar}></Route>
        <Route exact path="/telefones" component={Telefones}></Route>
        <Route exact path="/telefones/:idTelefones" component={TelefonesEditar}></Route>
{

}


      </Switch>

    </div>
  );
}

