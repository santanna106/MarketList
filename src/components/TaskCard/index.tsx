import React, { ReactNode, useState } from 'react';

import {
  Container
} from './styles';

import { useHeader } from '../../hooks/header';

interface Props {
  children:ReactNode;
}

export function TaskCard({ children } : Props){

  const [ pressed,setPressed ] = useState(false);
  const [ click,setClick ] = useState(false);

  const { toogleVisible } = useHeader();

  function toogleLogPress(){
    setPressed(!pressed);
    toogleVisible();
  }

  function toogleOnPress(){
    alert('Clicou')
    setClick(!click);
    
  }

  return (
    <Container 
      pressed={pressed}
      onPress={() => toogleOnPress()}
      onLongPress={() => toogleLogPress()}
    >
      {children}
    </Container>
  );
}