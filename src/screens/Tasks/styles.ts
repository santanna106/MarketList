import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex:1;
    width:100%;
    background-color:${({theme}) => theme.colors.primary};
`;


export const Header = styled.View`
    flex:1;
    height:60px;
    width:100%;
    margin-top:25px;
    padding-left:10px;
    flex-direction:column;
`;

export const WrapperBackButton = styled.View`
    width:100%;
    padding-left:15px;
    align-items:flex-start;
    
`;

export const WrapperTitle = styled.View`
    height:60px;
    width:100%;

    margin-top:30px;

    align-items:center;
    justify-content:center;
`;

export const Title = styled.Text`
    font-family:${({theme}) => theme.fonts.regular_bold};
    font-size:${RFValue(30)}px;
`;

export const Content = styled.View`
    flex:7;
    width:100%;
    background-color:${({theme}) => theme.colors.background};
`;

export const DescTask = styled.Text`
    font-family:${({theme}) => theme.fonts.regular_bold};
    font-size:${RFValue(15)}px;
`;




