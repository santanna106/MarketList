import React from 'react';
import { TextInputProps } from 'react-native';
import {Container} from './styles';

interface Props extends TextInputProps {
    actived?:boolean;
};

export function Input({
    actived = false,
    ...rest} : Props){
    return (
        <Container actived {...rest} />
    )
}