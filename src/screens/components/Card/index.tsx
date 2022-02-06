import React from 'react';

import {
  Container,
  Title,
  ContainerRightWrapper,
  ContainerLeftWrapper,
  Icon
} from './styles';

interface Props {
    title:string;
    background:string;
    iconName:string;
}

export function Card({
    title,
    background,
    iconName
} :Props ){
  return (
    <Container background={background}>
      <ContainerLeftWrapper>
        <Title>{title}</Title>
      </ContainerLeftWrapper>
      <ContainerRightWrapper>
        <Icon name={iconName}/>
      </ContainerRightWrapper>
        
    </Container>
  );
}