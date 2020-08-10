import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; 
// ícones
import TeacherList from '../pages/TeacherList';
import Favorites from '../pages/Favorites';

const { Navigator, Screen } = createBottomTabNavigator();

function StudyTabs() {
    return (
        <Navigator
            // estilizar as abas de navegação das páginas einternas
            tabBarOptions={{
                style: {
                    // remover as sombras do android e ios
                    elevation: 0,
                    shadowOpcacity: 0,
                    height: 64,
                },
                tabStyle: {
                    flexDirection: 'row',
                    alignItems: "center",
                    justifyContent: 'center'
                },
                iconStyle: {
                    flex: 0,
                    width: 20,
                    height: 20,
                },
                labelStyle: {
                    fontFamily: 'Archivo_700Bold',
                    fontSize: 13,
                    marginLeft: 16,
                },
                // Inativar a cor de fundo da aba quando ela não tiver ativa
                inactiveBackgroundColor: '#fafafc',
                // cor de fundo quando a aba estiver ativa
                activeBackgroundColor:'#ebebf5',
                // cor do texto quaando a aba não está selecionada
                inactiveTintColor: '#c1bccc',
                // cor do texto quaando a aba está selecionada
                activeTintColor:'#32264d'                    
            
            }}
        >
            <Screen 
                name="TeacherList" 
                component={TeacherList} 
                // alterando a aba de navegação!
                options={{
                    tabBarLabel: 'Proffys',
                    tabBarIcon: ({color, size, focused}) =>{
                        return(
                            <Ionicons name="ios-easel" size={size} color={focused ? '#8257e5' : color}/>
                        );
                    }
                }}
            />


            <Screen 
                name="Favorites" 
                component={Favorites} 
                // alterando a aba de navegação!
                options={{
                    tabBarLabel: 'Favoritos',
                    tabBarIcon: ({color, size, focused}) =>{
                        return(
                            <Ionicons name="ios-heart" size={size} color={focused ? '#8257e5' : color}/>
                        );
                    }
                }}

                />
        </Navigator>
    );
}

export default StudyTabs;