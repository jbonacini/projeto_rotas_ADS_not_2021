import React from 'react';
//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './MenuHorizontal.css';

export default function MenuHorizontal() {
/*
  var elemento = document.getElementById('idArea')
//  elemento.innerHTML = <Autores />
  elemento = <Autores />
*/
  return (

      <div>
        <div className="menuHorizontal">
          <nav className="navMenu">
            <ul>
              <li className="btn btn-info btn-lg"> <Link to="/"> Início </Link> </li>
              <li className="btn btn-dark btn-lg"> <Link to="/pessoas"> Pessoas   </Link> </li>
              <li className="btn btn-dark btn-lg"> <Link to="/telefones"> Telefones </Link> </li>
            </ul>
          </nav>
          
{/* 
          <Switch>
          <Route path="/autores" render = {() => 
          
            const = componente="<Autores/>" } >  
           
          </Route>
      
        </Switch>

*/}

        </div>

      </div>

  );
}


