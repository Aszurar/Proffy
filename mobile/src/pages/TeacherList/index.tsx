import React, { useState } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import { ScrollView, TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import api from '../../service/api';
import AsyncStorege from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';

function TeacherList() {
    const [ isFilterVisible, setIsFiltersVisible ] = useState(false);

    const[teachers, setTeachers] = useState([]);
    const[favorites, setFavorites] = useState<number[]>([]);
    const [subject, setSubject] = useState('');
    const [week_day, setWeek_Day] = useState('');
    const [time, setTime] = useState('');
    
    function loadFavorites() {
        AsyncStorege.getItem('favorites').then(response =>{
            if (response){
                const favoritedTeachers = JSON.parse(response);
                const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) => {
                    return teacher.id;
                });
                setFavorites(favoritedTeachersIds);
            }
        });
    }
    useFocusEffect(
        React.useCallback(() => {
          loadFavorites();
        }, [])
      )

    function handleToggleFiltersVisible(){
        setIsFiltersVisible(!isFilterVisible);
    }

    async function handleFilterSubmit() {
        loadFavorites();
        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time,
            }
        });
        
        setIsFiltersVisible(false);
        setTeachers(response.data);   
    }

    return (
        <View style={styles.container}>
            <PageHeader 
                title="Sorveteiros disponíveis" 
                headerRight={(
                 <BorderlessButton onPress={handleToggleFiltersVisible}>
                     < Feather name="filter" size={20} color="#FFF"/>
                 </BorderlessButton>
                )}>

               { isFilterVisible && (
                <View style={styles.searchForm}>
                    <Text style={styles.label}>Sabor</Text>
                    <TextInput
                        style={styles.input}
                        value={subject}
                        onChangeText={text => setSubject(text)}
                        placeholder="Qual o Sabor?"
                        placeholderTextColor="#c1bccc"
                    />

                    < View style={styles.inputGroup}>
                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>Dia da semana</Text>
                            <TextInput
                                style={styles.input}
                                value={week_day}
                                onChangeText={text => setWeek_Day(text)}
                                placeholder="Qual o dia?"
                                placeholderTextColor="#c1bccc"
                            />
                        </View>

                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>Horário</Text>
                            <TextInput
                                style={styles.input}
                                value={time}
                                onChangeText={text => setTime(text)}
                                placeholder="Qual o horário?"
                                placeholderTextColor="#c1bccc"
                            />
                        </View>
                    </View>
                   
                    < RectButton onPress={handleFilterSubmit} style={styles.submitButton}>
                        <Text style={styles.submitButtonText}>Filtrar</Text>
                    </RectButton>

                </View>
               )}
            </PageHeader>

            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >
                {teachers.map((teacher: Teacher) => {
                return( 
                     <TeacherItem 
                     key={teacher.id} 
                    teacher={teacher}
                    favorited={favorites.includes(teacher.id)}
                    />);
                })}
            </ScrollView>
        </View>
    );
}

export default TeacherList;