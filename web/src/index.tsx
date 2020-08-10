import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; //importação do App

// A estrutura abaixo injeta o elemento app.tsx no html do public e com isso vc pode mudar a tag html pelo javascript
// O <App /> pode ser trocado por uma tag <h1>Faala Deev</h1> 
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') //Elemento html do public que recebe a estrutura acima 
);


