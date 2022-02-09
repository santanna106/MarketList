
import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';

interface ContainerProps {
    background:string;
}

export const Container = styled(RectButton)<ContainerProps>`
    width:80px;
    height: 80px;
    border-radius:25px;
    align-items:center;
    justify-content:center;
    margin-bottom:8px;
 
`;

export const Icon = styled(Ionicons).attrs({
    size:85
})`
    font-weight:bold;
    color:${({theme}) => theme.colors.text_dark};
`;