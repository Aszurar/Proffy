import React, { ReactNode } from 'react';
import { View, Image, Text } from 'react-native';

// setinha de voltar, como esse botão não tem fundo, o ideal é esse abaixo
import { BorderlessButton } from 'react-native-gesture-handler';

import backIcon from '../../assets/images/icons/back.png';
import logoImg from '../../assets/images/logo.png'

import styles from './styles';
import { useNavigation } from '@react-navigation/native';

interface PageHeaderProps {
    title: string;
    headerRight?: ReactNode;
    // passando uma propriedade que permite passar um componente
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, children, headerRight }) => {
    const { navigate } = useNavigation();

    function handleGoBack() {
        navigate('Landing');
    }

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <BorderlessButton onPress={handleGoBack}>
                    <Image source={backIcon} resizeMode="contain" />
                </BorderlessButton>

                <Image source={logoImg} resizeMode="contain" />
            </View>

            <View style={styles.header}>
                <Text style={styles.title}>{title}</Text>
                {headerRight}
            </View>

            {children}
        </View>
    );
}

export default PageHeader;