import React from 'react';
import { useTheme } from 'styled-components'
import { Card } from '../components/Card';

import {
  Container,
  HighLightCards,
  Title,
  Header,
  Contents
} from './styles';

export function Home(){
  const theme = useTheme();
  return (
    <Container>
      <Header></Header>
      <Contents>
        <Card title="Compras" background={theme.colors.title} />
      </Contents>
        
    </Container>
  );
}