import React from "react"
import './PessoasEditar.css';
import urlapi from "../../services/api.js"

import { useEffect, useState } from 'react';

import { useParams, Link, useHistory } from "react-router-dom";

export default function PessoasEditar() {
    let idBoolean = false;        // edição

    const history = useHistory();

    //    const [pessoa, setPessoa] = useState([]);

    const [codigo, setCodigo] = useState(0);

    const [nome, setNome] = useState('');
    const [ativoInativo, setAtivo] = useState('');
    const [apelido, setApelido] = useState('');
    const [sexo, setSexo] = useState('');
    const [nascimento, setNascimento] = useState('');

    const [checked, setChecked] = useState(false);
    //    const [nomePag, setNomePag] = useState(false);

    const { idPessoa } = useParams();

    function IfCrud() {
        //        let nomeCampo = '';
        console.log('Id Pessoa: ' + idPessoa + ' - ' + idBoolean)
        if (idPessoa === 0) {
            //            nomeCampo = 'Inclusão de Pessoa';
            idBoolean = true;
        } else {
            //            nomeCampo = 'Alteração de Pessoa';
        }
        //        setNomePag(nomeCampo);
    }

    useEffect(() => {
        async function getPessoas() {
            console.log('Pessoa: ' + idPessoa + ' - ' + idBoolean)
            if (idPessoa == 0) {
                setChecked(true);
                console.log('Inclusão de novo registro!')
            } else {
                //                try {
                const { data } = await urlapi.get('/pessoas/' + idPessoa);
                console.log(data)

                setCodigo(data[0].pes_codigo);

                setNome(data[0].pes_nome);
                setAtivo(data[0].pes_ativoinativo);
                setApelido(data[0].pes_apelido);
                setSexo(data[0].pes_sexo);
                setNascimento(data[0].pes_dtnascimento);

                console.log(data[0].pes_nome)
                //                } catch (error) {
                //                    alert("Ocorreu um erro...");
                //                }
            }
        }
        IfCrud();
        getPessoas();
    }, []);


    //    function toggle() {
    //        setChecked(!checked)
    //    }

    async function handlePessoas(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        console.log("Dados Form: " + data.pes_nome);

        try {
            if (nome.length === 0) {
                alert('Insira um nome válido')
            } else {
                console.log(data);
            
                if (idPessoa == 0) {
                    console.log("Inclusão de Registro!")
                    await urlapi.post('pessoas', data);
                } else {
                    console.log("Alteração de Registro! ",idPessoa)
                    await urlapi.put('/pessoas/' + idPessoa, data);
                }
                            //    history.push('/Pessoas');
            }
        } catch (error) {
            alert('Erro no cadastro, tente novamente.')
        }
    }

    return (
        <div>
            <section className="sectionTable" >

                <form className="form--pessoa" onSubmit={handlePessoas} >
                    <div className="form-row">
                        <div className="col-md-1 offset-md-1">
                            <label> Código </label>
                            <input type="text" className="form-control"
                                name="pes_codigo"
                                value={codigo}
                                onChange={e => setAtivo(e.target.value)}
                            />
                        </div>
                    </div>
{/* 
                    <div className="form-row">
                        <div className="col-md-1 offset-md-1">
                            <label> Ativo/Inátivo </label>
                            <input type="text" id="pes_ativoinativo" className="form-control"
                                name="pes_ativoinativo"
                                value={ativoInativo}
                                onChange={e => setAtivo(e.target.value)}
                            />
                        </div>
                    </div> */}

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Nome da Pessoa </label>
                            <input type="text" className="form-control"
                                name="pes_nome"
                                value={nome}
                                onChange={e => setNome(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Apelido </label>
                            <input type="text" className="form-control" name="pes_apelido"
                                id="pes_apelido"
                                value={apelido}
                                onChange={e => setApelido(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Sexo </label>
                            <input type="text" className="form-control" name="pes_sexo"
                                id="pes_sexo"
                                value={sexo}
                                onChange={e => setSexo(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col-md-4 offset-md-1">
                            <label> Data de Nascimento </label>
                            <input type="date" className="form-control" name="pes_dtnascimento"
                                id="pes_dtnascimento"
                                value={nascimento}
                                onChange={e => setNascimento(e.target.value)}
                            />
                        </div>
                    </div>

                    
                    <div>
                        <button type="submit" class="btn btn-success"> Salvar </button>
                        <Link to="/pessoas" class="btn btn-info" >Voltar</Link>
                    </div>

                </form>

            </section>

        </div>

    )
}