import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import {
  Container,
  Title,
  ContainerRightWrapper,
  ContainerLeftWrapper,
  Icon
} from './styles';

interface Props extends RectButtonProps {
    title:string;
    background:string;
    iconName:string;
}

export function Card({
    title,
    background,
    iconName,
    ...rest
} :Props ){
  return (
    <Container background={background} {...rest}>
      <ContainerLeftWrapper>
        <Title>{title}</Title>
      </ContainerLeftWrapper>
      <ContainerRightWrapper>
        <Icon name={iconName}/>
      </ContainerRightWrapper>
        
    </Container>
  );
}