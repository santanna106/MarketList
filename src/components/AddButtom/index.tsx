import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import {
  Container,
  Icon
} from './styles';

interface Props extends RectButtonProps {
    background:string;
    iconName:string;
}

export function AddButtom({
    background,
    iconName,
    ...rest
} :Props ){
  return (
    <Container background={background} {...rest}>
        <Icon name={iconName}/>
    </Container>
  );
}