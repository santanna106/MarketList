import React, { ReactNode, useState } from 'react';

import {
  Container
} from './styles';

import { useHeader } from '../../hooks/header';

interface Props {
  id:string;
  children:ReactNode;
}

export function TaskCard({ 
  id,
  children
 } : Props){

  const [ pressed,setPressed ] = useState(false);
  const [ click,setClick ] = useState(false);

  const { toogleVisible } = useHeader();

  function toogleLogPress(){
    setPressed(!pressed);
    alert(id);
    toogleVisible();
  }

  function toogleOnPress(){
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