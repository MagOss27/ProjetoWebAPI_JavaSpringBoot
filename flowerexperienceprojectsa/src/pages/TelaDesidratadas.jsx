// import React from 'react'
// import './TelaArranjos.css'
// import { Link } from 'react-router-dom';
// import arr_um from '../assets/arr-um.png'
// import arr_dois from '../assets/arr-dois.png'
// import arr_tres from '../assets/arr-tres.png'
// import arr_qua from '../assets/arr-qua.png'
// import arr_cin from '../assets/arr-cin.png'
// import blight from '../assets/background-light.png'
// import bdark from '../assets/background-dark.png'

// const TelaArranjos = () => {
//     return (
//         <div className='tela-arranjos'>
//             <div className='ta-principal'>
//                 <div className='ta-esquerda'>
//                     <div className='ta-previas'>
//                         <img src={arr_um} className='img-previas' />
//                         <img src={arr_dois} className='img-previas' />
//                         <img src={arr_tres} className='img-previas' />
//                         <img src={arr_qua} className='img-previas' />
//                         <img src={arr_cin} className='img-previas' />
//                     </div>
//                     <img src={arr_um} className='img-um-previas' />
//                 </div>

//                 <div className='ta-direita'>
//                     <div className='ta-titulo'>
//                         <p className='ta-titulo-p'>ARRANJOS</p>
//                     </div>

//                     <div className='ta-estrelas'>
//                         <p className='ta-estrelas-p'>⭐⭐⭐⭐⭐</p>
//                     </div>

//                     <div className='ta-infos'>
//                         <div className='ta-infos-box'>
//                             <p className='ta-infos-p'>Experimente transformar o seu lar com estilosas e impactantes plantas, contendo vasos resistentes e elegantes de polietileno, pedras, seixos e cascas.<br></br> <br></br>(Duração de plano: 30 Dias).<br></br><br></br>

//                                 Tamanho das Plantas: 1m de altura por 70 cm de largura.<br></br>
//                                 Vasos: Polietileno nas cores, mamore, cimento e areia.<br></br>
//                                 Tempo de Permanência:  7 dias
//                             </p>
//                         </div>
//                     </div>

//                     <div className='ta-entrega'>
//                         <p className='ta-entrega-p-titulo'>
//                         ENTREGAS PARA O MESMO DIA
//                         </p>
//                         <p className='ta-entrega-p-text'>
//                         Para que a entrega seja feita no mesmo dia, o pedido deve ser realizado até às 15h00
//                         </p>
//                     </div>

//                     <div className='ta-button-addpedido'>
//                         <input type='number' className='inpt-number'></input>
//                         <button className='btn-addpedido'>ADICIONAR AO PEDIDO</button>
//                     </div>

//                 </div>
//             </div>

//             <div className='btn-saiba-mais'>
//                 <button className='btn-saiba-mais-css'>COMO FUNCIONA</button>
//             </div>
//         </div>
//     );
// }

// export default TelaArranjos;

import React, { useState } from 'react';
import './TelaDesidratadas.css';
import des_um from '../assets/des-um.png';
import des_dois from '../assets/des-dois.png';
import des_tres from '../assets/des-tres.png';
import des_qua from '../assets/des-qua.png';
import des_cin from '../assets/des-cin.png';

const TelaDesidratadas = ({theme, setTheme}) => {
    // Estado para controlar a visibilidade do card
    const [showCard, setShowCard] = useState(false);

    // Função que alterna a visibilidade do card
    const handleToggleCard = () => {
        setShowCard(!showCard);
    };

    return (
        <div className='tela-desidratadas'>
            <div className='ta-principal-desidratadas'>
                <div className='ta-esquerda-desidratadas'>
                    <div className='ta-previas-desidratadas'>
                        <img src={des_um} className='img-previas-desidratadas' alt="Arranjo 1" />
                        <img src={des_dois} className='img-previas-desidratadas' alt="Arranjo 2" />
                        <img src={des_tres} className='img-previas-desidratadas' alt="Arranjo 3" />
                        <img src={des_qua} className='img-previas-desidratadas' alt="Arranjo 4" />
                        <img src={des_cin} className='img-previas-desidratadas' alt="Arranjo 5" />
                    </div>
                    <img src={des_um} className='img-um-previas-desidratadas' alt="Arranjo grande" />
                </div>

                <div className='ta-direita-desidratadas'>
                    <div className='ta-titulo-desidratadas'>
                        <p className='ta-titulo-p-desidratadas'>DESIDRATADAS</p>
                    </div>

                    <div className='ta-estrelas-desidratadas'>
                        <p className='ta-estrelas-p-desidratadas'>⭐⭐⭐⭐⭐</p>
                    </div>

                    <div className='ta-infos-desidratadas'>
                        <div className='ta-infos-box-desidratadas'>
                            <p className='ta-infos-p-desidratadas'>
                                Experimente transformar o seu lar com estilosas e impactantes Desidratadas.<br/><br/>
                                Tamanho: 80cm de altura por 70 cm de largura.<br/>
                                Vasos: Papelão colorido, Vasos de polietileno ou vidro.<br/>
                                Renovação: À cada 7 ou 15 dias.
                            </p>
                        </div>
                    </div>

                    <div className='ta-entrega-desidratadas'>
                        <p className='ta-entrega-p-titulo-desidratadas'>ENTREGAS PARA O MESMO DIA</p>
                        <p className='ta-entrega-p-text-desidratadas'>
                            Para que a entrega seja feita no mesmo dia, o pedido deve ser realizado até às 15h00
                        </p>
                    </div>

                    <div className='ta-button-addpedido-desidratadas'>
                        <input type='number' className='inpt-number-desidratadas' placeholder="1" />
                        <button className='btn-addpedido-desidratadas'>ADICIONAR AO PEDIDO</button>
                    </div>

                </div>
            </div>

            <div className='btn-saiba-mais-desidratadas'>
                <button className='btn-saiba-mais-css-desidratadas' onClick={handleToggleCard}>COMO FUNCIONA</button>
            </div>

            {/* O card que aparece e desaparece ao clicar no botão */}
            {showCard && (
                <div className='como-funciona-card-desidratadas'>
                
                    <button className='btn-fechar-desidratadas' onClick={handleToggleCard}>FECHAR</button>
                </div>
            )}
        </div>
    );
}

export default TelaDesidratadas;

