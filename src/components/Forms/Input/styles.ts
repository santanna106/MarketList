import styled,{ css } from 'styled-components/native';
import {TextInput} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

interface ContainerProps {
    actived:boolean;
}

export const Container = styled(TextInput)<ContainerProps>`
    width:100%;
    padding: 16px 18px;
    font-size:${RFValue(14)}px;

    background-color:${({theme}) => theme.colors.shape};
    border-radius:${RFValue(10)}px;
    margin-bottom:8px;
    font-family: ${({theme}) => theme.fonts.regular};
    color:${({theme}) => theme.colors.text_dark};

    ${({ actived, theme }) => actived && css`
        border-width: 3px;
        border-color: ${theme.colors.attention};
    `};
`;