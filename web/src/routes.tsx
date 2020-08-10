import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'; 
// Browser Router - tipo de roteamento
// Route - cada uma das rotas dentro da aplicação

import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';


// Propriedades em react seriam o mesmo dos atributos em html como
// <Route class="Sorvete"/>
// Essa classe Sorvete seria uma propriedade/atribut

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/study" component={TeacherList} />
            <Route path="/give-classes" component={TeacherForm} />
        </BrowserRouter>    
    );
}
// O exact serve para comparar se a rota [e exatamente igual a passada na URL]
export default Routes;