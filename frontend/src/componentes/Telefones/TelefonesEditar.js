import React from "react"
import './TelefonesEditar.css';
import urlapi from "../../services/api.js"

import { useEffect, useState } from 'react';

import { useParams, Link, useHistory } from "react-router-dom";

export default function TelefonesEditar() {
    let idBoolean = false;        // edição

    const history = useHistory();

    //    const [pessoa, setPessoa] = useState([]);

    const [codigo, setCodigo] = useState(0);

    const [tipo, setTipo] = useState('');
    const [marca, setMarca] = useState('');
    const [numero, setNumero] = useState('');
    const [operadora, setOperadora] = useState('');

    const [pessoa,setPessoa] = useState('');
    const [selectPessoa,setSelectPessoa] = useState([]);
    //    const [nomePag, setNomePag] = useState(false);

    const { idTelefones } = useParams();
    console.log(useParams())
    function IfCrud() {
        //        let nomeCampo = '';
        // console.log('Id telefone: ' + idTelefones + ' - ' + idBoolean)
        if (idTelefones === 0) {
            //            nomeCampo = 'Inclusão de Pessoa';
            idBoolean = true;
        } else {
            //            nomeCampo = 'Alteração de Pessoa';
        }
        //        setNomePag(nomeCampo);
    }

    useEffect(() => {
        async function getTelefones() {
            const { data } = await urlapi.get('/pessoas');
            setSelectPessoa(data)
            console.log('Telefone: ' + idTelefones + ' - ' + idBoolean)
            // eslint-disable-next-line eqeqeq
            if (idTelefones == 0) {
                // eslint-disable-next-line no-undef
                setChecked(true);
                console.log('Inclusão de novo registro!')
            } else {
                //                try {
                const { data } = await urlapi.get('/telefones/' + idTelefones);
                console.log(data)

                setCodigo(data[0].ord_codigo);

                setTipo(data[0].ord_tipo);
                setMarca(data[0].ord_marca);
                setNumero(data[0].ord_numero);
                setOperadora(data[0].ord_operadora);
                setPessoa(data[0].pes_codigo);

               

                console.log(data[0])
                //                } catch (error) {
                //                    alert("Ocorreu um erro...");
                //                }
            }
        }
        IfCrud();
        getTelefones();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    //    function toggle() {
    //        setChecked(!checked)
    //    }

    async function handleTelefones(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        console.log("Dados Form: " + data);

        try {
            // eslint-disable-next-line eqeqeq
            if (tipo.length === 0 || tipo.trim() == "" || tipo.length > 30) {
                alert('Insira um nome válido com até 30 caracteres')
            } else {
                console.log("Codigo Telefone: ",idTelefones)
                // eslint-disable-next-line eqeqeq
                if (idTelefones == 0) {
                    console.log("Inclusão de Registro!")
                    await urlapi.post('telefones', data)
                    .then(response=>history.push('/telefones'))
                       
                } else {
                    // console.log("Alteração de Registro! ",idTelefones)
                    await urlapi.put('/telefones/' + idTelefones, data)
                    .then(response=> history.push('/telefones'))
                }
                //                history.push('/autores');
            }
        } catch (error) {
            alert('Erro no cadastro, tente novamente.')
            console.log(error)
        }
    }
    function opcoesSelect() {

        const arrayRegistros = selectPessoa;
        console.log(arrayRegistros);
    
        return arrayRegistros.map((item, i) => {
         
          return (
           <option value={item.pes_codigo}>{item.pes_nome}</option>
          )
        })
      }

    return (
        <div>
            <section className="sectionTable" >

                <form className="form--pessoa" onSubmit={handleTelefones} >
                    <div  className="">
                        <div className="col-md-1 offset-md-1 ">
                            <label> Código </label>
                            <input type="text" className="form-control"
                                name="ord_codigo"
                                value={codigo}
                                onChange={e => setCodigo(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Número do telefone </label>
                            <input type="text" className="form-control"
                                name="ord_numero"
                                value={numero}
                                onChange={e => setNumero(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Marca </label>
                            <input type="text" className="form-control" name="ord_marca"
                                id="ord_marca"
                                value={marca}
                                onChange={e => setMarca(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Tipo </label>
                            <input type="text" className="form-control" name="ord_tipo"
                                id="ord_tipo"
                                value={tipo}
                                onChange={e => setTipo(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Operadora </label>
                            <input type="text" className="form-control" name="ord_operadora"
                                id="ord_operadora"
                                value={operadora}
                                onChange={e => setOperadora(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Pessoa </label>
                            <select name="pes_codigo"
                                id="pes_codigo"
                                value={pessoa}
                                onChange={e => setPessoa(e.target.value)}
                            >
                            {opcoesSelect()}
                            </select>
                            
                        </div>
                    </div>

                    <div className="row--marks--buttons">
                        <button type="submit" class="btn btn-success">Salvar</button>
                        <Link to="/telefones" class="btn btn-info">Voltar</Link>
                    </div>
                </form>

            </section>

        </div>

    )
}
