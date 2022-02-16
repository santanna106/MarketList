import React,{ useState } from 'react';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';


import {
  Container,
  Header,
  WrapperBackButton,
  WrapperTitle,
  Title,
  DescTask,
  Content
} from './styles';

import { BackButton } from '../../components/BackButton';
import { TaskList } from '../../components/TaskList';

import { useTask } from '../../hooks/task';


export function Tasks(){
  const [isEnabled, setIsEnabled] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  
  const navigation = useNavigation();
  const theme = useTheme();
  const { tasks } = useTask();

  function handleBackButton() {
    navigation.goBack();
  }

  return (
    <Container>
      <Header>
        <WrapperBackButton>
         <BackButton onPress={handleBackButton}  color={theme.colors.text_dark}/>
        </WrapperBackButton>
        <WrapperTitle>
          <Title>Lista de Atividades </Title>
        </WrapperTitle>
       
      </Header>
      
      <Content>
        <TaskList tasks={tasks} />
       
      </Content>
    </Container>
  );
}