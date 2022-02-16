import React, { ReactNode, useState } from 'react';

import {
  Container
} from './styles';

interface Props {
  children:ReactNode;
}

export function TaskCard({ children } : Props){

  const [ pressed,setPressed ] = useState(false);

  function toogleLogPress(){
    setPressed(!pressed);
  }

  return (
    <Container pressed={pressed} onLongPress={() => toogleLogPress()}>
      {children}
    </Container>
  );
}