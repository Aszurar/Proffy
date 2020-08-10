import React from 'react';

import Routes from './routes';

import './assets/styles/global.css';



//Componentes no Reacts são funções que retornam um html
//No React tudo se basea em componentes, todo que for criado na parte visual são componentes!
//Componentes são feitos muitas vezes para reaproveitar códigos
//Regra para Componentes:
//Sempre cria-los em função com nomes com iniciais com letras maiúsculas, a sintaxe é a mesma do html </>
// O React sempre é para ser importado!

//Usar a sintaxe de html em arquivos javascript é dito como:
//JSX - Javascript + XML
function App() {
  return (
    <Routes />
  );
}

export default App;
