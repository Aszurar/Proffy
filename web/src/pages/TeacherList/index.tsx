import React, { useState, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader'; 
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import api from '../../services/api';

import './styles.css';



// Todo conteúdo usado dentro do pageheader será mostrado no props.children do index.tsx do PageHeader
function TeacherList() {
    const[teachers, setTeachers] = useState([]);
    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    async function searchTeachers(e:FormEvent){
        e.preventDefault();
        
        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time,
            }
        });

        setTeachers(response.data);        
    }

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Esses são os Proffys disponíveis">
                <form id="search-teachers" onSubmit={searchTeachers}>
                
                <Select 
                     name="subject" 
                     label="Matéria"
                     value={subject}
                     onChange={(e) => { setSubject(e.target.value) }}
                     options={[
                         {value: 'Sorvete de Menta', label: 'Sorvete de Menta'},
                         {value: 'Sorvete de Abacaxi', label: 'Sorvete de Abacaxi'},
                         {value: 'Sorvete de Morango', label: 'Sorvete de Morango'},
                         {value: 'Sorvete de Napolitano', label: 'Sorvete de Napolitano'},
                         {value: 'Sorvete de Chocolote', label: 'Sorvete de Chocolote'},
                         {value: 'Sorvete de Nutella', label: 'Sorvete de Nutella'},
                         {value: 'Sorvete de Pavê', label: 'Sorvete de Pavê'},
                         {value: 'Sorvete de Passas ao Rum', label: 'Sorvete de Passas ao Rum'},
                         {value: 'Sorvete de Flocos', label: 'Sorvete de Flocos'},
                         {value: 'Sorvete de Brigadeiro', label: 'Sorvete de Brigadeiro'}
                    ]}
                />

                <Select 
                     name="week_day" 
                     label="Dia da semana"
                     value={week_day}
                     onChange={(e) => { setWeekDay(e.target.value) }}
                     options={[
                         {value: '0', label: 'Domingo'},
                         {value: '1', label: 'Segunda-feira'},
                         {value: '2', label: 'Terça-feira'},
                         {value: '3', label: 'Quarta-feira'},
                         {value: '4', label: 'Quinta-feira'},
                         {value: '5', label: 'Sexta-feira'},
                         {value: '6', label: 'Sábado'},
                    ]}
                />
                     
                    <Input 
                        type="time" 
                        name="time" 
                        label="Hora"
                        value={time}
                        onChange={(e) => { setTime(e.target.value) }}
                    />

                    <button type="submit">
                        Buscar
                    </button>
                </form>
            </PageHeader>

        <main>
            {teachers.map((teacher: Teacher) => {
                 return   <TeacherItem key={teacher.id} teacher={teacher} />  
            })}

        </main>
        </div>

    );
}

export default TeacherList