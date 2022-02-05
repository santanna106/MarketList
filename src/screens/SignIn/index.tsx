import React from 'react';

import {
  Container,
  Title,
  Button,
  ButtonText,
  Header,
  HeaderCurve,
  HeaderTitle,
  Contents
} from './styles';

import {useAuth} from '../../hooks/auth';


export function SignIn(){
  
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
        <Title>SignIn</Title>
        <Button onPress={handleSignIn}>
          <ButtonText>Login</ButtonText>
        </Button>
      </Contents>
     
    </Container>
  );
}