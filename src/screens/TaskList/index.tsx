import React,{ useState } from 'react';
import CheckBox from '@react-native-community/checkbox';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';


import {
  Container,
  Header,
  WrapperBackButton,
  WrapperTitle,
  Title,
  Content
} from './styles';

import { BackButton } from '../../components/BackButton';

export function TaskList(){
  const [isEnabled, setIsEnabled] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  
  const navigation = useNavigation();
  const theme = useTheme();


  function handleBackButton() {
    navigation.goBack();
  }

  return (
    <Container>
      <Header>
        <WrapperBackButton>
         <BackButton onPress={handleBackButton}  color={theme.colors.text_dark}/>
         <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={(newValue) => setToggleCheckBox(newValue)}
        />
        </WrapperBackButton>
        <WrapperTitle>
          <Title>Lista de Atividades</Title>
        </WrapperTitle>
      </Header>
      <Content>
      
      </Content>
    </Container>
  );
}