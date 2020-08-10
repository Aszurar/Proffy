import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
//A tag a do html é trocada por Link To para preservar o conceito de não
// de não carregar uma nova página e sim construir o visual em tempo real em uma single page



import logoImg from '../../assets/images/logo.svg';
// para uso de imagem de outras pastas é necessário importar!
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import api from '../../services/api';

import './styles.css';

function Landing(){
    const [ totalConnections, setTotalConnections ] = useState(0);

    useEffect(() => {
        api.get('connections').then(response => {
            const { total } = response.data;

            setTotalConnections(total);
        })
    }, []);

    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt= "Logo da plataforma Proffy"/>
                    <h2>Sua plataforma de estudos online</h2>
                </div>

                <img 
                    src={landingImg} 
                    alt="Plataforma de estudos"
                    className="hero-image"
                    />

                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="Ícone de Estudar"/>
                        Estudar
                    </Link>

                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClassesIcon} alt="Ícone de Estudar"/>
                        Dar aulas
                    </Link>

                </div>

                <span className="total-connections">
                    Total de {totalConnections} conexões já realizadas <img src={purpleHeartIcon} alt="Ícone de coração roxo"/>
                </span>

            </div>
        </div>
    )
}

export default Landing; //exportando a landing