import React,{ useEffect, useState,useCallback } from 'react';
import { useTheme } from 'styled-components';
import { useNavigation,useFocusEffect } from '@react-navigation/native';


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
import { ActivityIndicator } from 'react-native';


interface Task {
  id:string;
  name:string;
  done:boolean;
  urgent:boolean;
  date_start:string;
  date_finish:string;
}

export function Tasks(){
 
  const [tasksLoad,setTasks] = useState<Task[]>([]);
  const [loading,setLoading] = useState(true);
  const navigation = useNavigation();
  const theme = useTheme();
  const { all,taskStoreIsLoading } = useTask();


 

  function handleBackButton() {
    navigation.goBack();
  }


  async function loadData(){
    setLoading(true);
    const data = await all();
    
    setTasks(data);
    setLoading(false);
  }


  useEffect(() => {
    loadData();
},[])
  useFocusEffect(useCallback(() => {
    loadData();
    
 },[]));

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
      {
        loading  ?
          <ActivityIndicator  size={30} color={'#ff0000'} />
        :
        <Content>
         
          <TaskList tasks={tasksLoad} />
       
        </Content>
      }
      
    </Container>
  );
}