import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';


import {
  Container,
  Title,
  LabelQtd,
  ContainerRightWrapper,
  ContainerLeftWrapper,
  Icon
} from './styles';

interface Props extends RectButtonProps {
    title:string;
    background:string;
    iconName:string;
    count:number;
}

export function Card({
    title,
    background,
    iconName,
    count,
    ...rest
} :Props ){

  return (
    <Container background={background} {...rest}>
      <ContainerLeftWrapper>
        <Title>{title}</Title>
        <LabelQtd>{count}</LabelQtd>
      </ContainerLeftWrapper>
      <ContainerRightWrapper>
        <Icon name={iconName}/>
      </ContainerRightWrapper>
        
    </Container>
  );
}