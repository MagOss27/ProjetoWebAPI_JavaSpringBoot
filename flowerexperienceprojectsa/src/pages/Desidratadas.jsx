import React, { useEffect, useState } from 'react';
import './Desidratadas.css';
import { Link } from 'react-router-dom';
import des_um from '../assets/des-um.png';
import des_dois from '../assets/des-dois.png';
import des_tres from '../assets/des-tres.png';
import des_qua from '../assets/des-qua.png';
import des_cin from '../assets/des-cin.png';

const Desidratadas = () => {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {

        const produtosPadrao = [
            { nome: 'SEMPRE VIVA INGLESES', imagem: des_um },
            { nome: 'SEMPRE VIVA MOÇAMBIQUE', imagem: des_dois },
            { nome: 'SEMPRE VIVA SANTINHO', imagem: des_tres },
            { nome: 'SEMPRE VIVA BRAVA', imagem: des_qua },
            { nome: 'SEMPRE VIVA SANTA CRUZ', imagem: des_cin },
        ];


        const produtosCadastrados = JSON.parse(localStorage.getItem('produtos')) || {};


        if (!produtosCadastrados["Desidratadas"]) {
            produtosCadastrados["Desidratadas"] = produtosPadrao;
            localStorage.setItem('produtos', JSON.stringify(produtosCadastrados));
        }


        const produtosDesidratadas = produtosCadastrados["Desidratadas"] || [];


        setProdutos(produtosDesidratadas);
    }, []);

    return (
        <div className='desidratadas'>
            <div className='container'>
                <div className='title'>
                    <h1 className='text-css'>DESIDRATADAS</h1>
                    <p className='text-p-css'>
                        As plantas desidratadas oferecem beleza e praticidade para qualquer ambiente.
                    </p>
                </div>

                <div className='div-cards'>
                    <div className="cards">
                        {produtos.map((produto, index) => (
                            <div className='card' key={index}>
                                <div className='card-image'>
                                    <img src={produto.imagem} alt={produto.nome} className='foto-plantas' />
                                </div>
                                <div className='card-title'>
                                    <h1 className='nome-planta'>{produto.nome}</h1>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='div-button'>
                    <Link to='/teladesidratadas'>
                        <button className='button-css'>VER MAIS</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Desidratadas;