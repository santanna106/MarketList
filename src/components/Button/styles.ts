import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

interface ContainerProps {
    background:string;
}

export const Container = styled(RectButton)<ContainerProps>`
    width:70%;
    height:70px;
    border-radius:30px;
    align-items:center;
    justify-content:center;
    margin-bottom:8px;
    background-color:${({theme,background}) => background}
 
`;

export const Title = styled.Text`
    font-family:${({theme}) => theme.fonts.regular};
    font-size:${RFValue(20)}px;

    color:${({theme}) => theme.colors.background};
`;