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


export function Tasks(){
  const [isEnabled, setIsEnabled] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  
  const navigation = useNavigation();
  const theme = useTheme();

  const tasks = [
    {id:'01',name:'tarefa-01',done:true,urgent:false},
    {id:'02',name:'tarefa-02',done:false,urgent:true},
    {id:'03',name:'tarefa-03',done:true,urgent:false},
    {id:'04',name:'tarefa-04',done:false,urgent:true},
    {id:'05',name:'tarefa-05',done:true,urgent:false},
    {id:'06',name:'tarefa-06',done:true,urgent:false},
    {id:'07',name:'tarefa-07',done:true,urgent:false},
    {id:'08',name:'tarefa-08',done:true,urgent:false},
    {id:'09',name:'tarefa-09',done:true,urgent:false},
    {id:'10',name:'tarefa-10',done:true,urgent:false},


  ];


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