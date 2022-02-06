import React from 'react';
import { useTheme } from 'styled-components';

import {
  Container,
  Title,
  Button,
  ButtonText,
  Header,
  HeaderCurve,
  HeaderTitle,
  Contents,
  PurchasesTypeBox,
  PurchasesCards
} from './styles';

import {useAuth} from '../../hooks/auth';
import { Card } from '../components/Card';
import { ScrollView } from 'react-native';


export function SignIn(){
  const theme = useTheme();
  const { signInWithGoogle } = useAuth();

  function handleSignIn(){
    signInWithGoogle();
  }

  return (
    <Container>
      <Header>
        <HeaderTitle>
          <Title>My Market List</Title>
        </HeaderTitle>
        <HeaderCurve/>
      </Header>
      <Contents>
        <PurchasesTypeBox>
          <PurchasesCards>
            <Card title="Todas" background={theme.colors.secundary} iconName="fact-check" />
            <Card title="Urgentes" background={theme.colors.attention} iconName="warning" />
            <Card title="Realizadas" background={theme.colors.sucess} iconName="check-box" />
          </PurchasesCards>
        </PurchasesTypeBox>
      </Contents>
     
    </Container>
  );
}