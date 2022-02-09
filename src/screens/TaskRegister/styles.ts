import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex:1;
    background-color:${({theme}) => theme.colors.primary};
`;

export const Title = styled.Text`
    font-family:${({theme}) => theme.fonts.regular};
    font-size:${RFValue(30)}px;
`;

export const Form = styled.View`
    flex:1;
    background-color:${({theme}) => theme.colors.primary};
`;

export const WrapperInput = styled.View`
    flex:1;
    background-color:${({theme}) => theme.colors.primary};
`;