import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import {
  Container,
  Title
} from './styles';

interface Props extends RectButtonProps {
    background:string;
    title:string;
    heightConfig?:string;
}

export function Button({
    background,
    title,
    heightConfig = '70',
    ...rest
    
} :Props){
  return (
    <Container background={background} height={heightConfig} {...rest}>
        <Title>{title}</Title>
    </Container>
  );
}