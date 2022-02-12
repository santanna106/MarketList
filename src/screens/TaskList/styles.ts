import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    height:800px;
    width:100%;
    background-color:${({theme}) => theme.colors.primary};
`;

export const Form = styled.View`
   
    background-color:${({theme}) => theme.colors.primary};
    align-items:center;
    margin-top:30px;
`;

export const WrapperTitle = styled.View`
    width:100%;
    background-color:${({theme}) => theme.colors.primary};
    align-items:center;
    margin-bottom:20px;
`;

export const WrapperBackButton = styled.View`
    width:100%;
    padding-left:15px;
    align-items:flex-start;
    margin-top:20px;
    margin-bottom:20px;
    height:80px;
    
`;

export const Title = styled.Text`
    font-family:${({theme}) => theme.fonts.regular_bold};
    font-size:${RFValue(30)}px;
`;



export const WrapperInput = styled.View`
    width:80%;
    background-color:${({theme}) => theme.colors.primary};
    margin-bottom:10px;
    
`;

export const WrapperSwitch = styled.View`
    flex-direction:column;
    width:80%;
    height:60px;
    margin-bottom:60px;
    padding-left:5px;
    align-items:flex-start;
    
`;

export const LibleSwitch = styled.Text`
    font-family:${({theme}) => theme.fonts.regular_bold};
    font-size:${RFValue(25)}px;
`;
