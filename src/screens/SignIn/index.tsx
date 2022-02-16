import React, { useEffect,useState } from 'react';
import { useTheme } from 'styled-components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

import { useTask } from '../../hooks/task';

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

import { Card } from '../../components/Card';
import { STORE } from '../../const/store';
import { AddButtom } from '../../components/AddButtom';

interface TaskData {
  name:string;
  date:string;
  urgent:boolean;
  finished:boolean;
}


export function SignIn(){
  const theme = useTheme();
  const { tasks } = useTask();

  const countAllTasks = tasks.length;
  const taskUrgents = tasks.map(
    (e) => {
      if(e.urgent){
        return e;
      }
    })

  const countUrgentTasks = taskUrgents.length;

  const taskFinished = tasks.map(
    (e) => {
      if(e.done){
        return e;
      }
    })

  const countTasksFinished = taskFinished.length;

  const navigation = useNavigation<any>();

  function handleAddTask(){
    navigation.navigate('TaskRegister');
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
            <Card
              title="Todas" 
              background={theme.colors.secundary}
              iconName="fact-check"
              onPress={() => alert('Todas')}
              count={countAllTasks}
            />
            <Card
              title="Urgentes"
              background={theme.colors.attention}
              iconName="warning"
              onPress={() => alert('Todas')}
              count={countUrgentTasks}
             />
            <Card
              title="Realizadas"
              background={theme.colors.sucess}
              iconName="check-box"
              onPress={() => alert('Todas')}
              count={countTasksFinished}
            />
          </PurchasesCards>
        </PurchasesTypeBox>
        
      </Contents>
      <AddButtom 
        background={theme.colors.text_dark}
        iconName="add-circle" 
        onPress={handleAddTask}
      />
    </Container>
  );
}