
import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import {MaterialIcons} from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';

interface ContainerProps {
    background:string;
}

export const Container = styled(RectButton)<ContainerProps>`
    width:90%;
    height: 150px;
    border:1px solid;
    background: ${({background}) => background };
   
    border-radius:20px;
    margin-top:20px;
    flex-direction:row;
`;

export const ContainerRightWrapper = styled.View`
    width:50%;
    border-left-width:1px;
    align-items:center;
    justify-content:center;
    
`;

export const ContainerLeftWrapper = styled.View`
    flex-direction:column;

    width:50%;
    align-items:center;
    justify-content:center;
`;

export const Title = styled.Text`
    color:${({theme}) => theme.colors.title};
    font-family:${({theme}) => theme.fonts.medium};
    font-size:${RFValue(25)}px;
`;

export const LabelQtd = styled.Text`
    color:${({theme}) => theme.colors.title};
    font-family:${({theme}) => theme.fonts.medium};
    font-size:${RFValue(20)}px;
`;

export const Icon = styled(MaterialIcons)`
    font-size:${RFValue(100)}px;
    margin-right:12px;
`;