import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import {
  Container,
  Title
} from './styles';

interface Props extends RectButtonProps {
    background:string;
    title:string;
}

export function Button({
    background,
    title,
    ...rest
} :Props){
  return (
    <Container background={background} {...rest}>
        <Title>{title}</Title>
    </Container>
  );
}