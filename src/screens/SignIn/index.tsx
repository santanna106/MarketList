import React, { useEffect,useState } from 'react';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';

import { useTask } from '../../hooks/task';

import {
  Container,
  Title,
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
  const [countAllTasks,setCountAllTasks] = useState(0);
  const [countUrgentTasks,setCountUrgentTasks] = useState(0);
  const [countTasksFinished,setCountTasksFinished] = useState(0);

  const theme = useTheme();
  const { tasks } = useTask();
  
 
 


 
  const navigation = useNavigation<any>();

  function handleAddTask(){
    navigation.navigate('TaskRegister');
  }

  useEffect(() => { 
    if(tasks.length > 0 ) {
      const taskUrgents = tasks
          .filter((e) => e.urgent === true);

      const taskFinished = tasks
          .filter((e) => e.done === true);
      
      setCountAllTasks(tasks.length);
      setCountUrgentTasks(taskUrgents.length);
      setCountTasksFinished(taskFinished.length);
    }
  },[])

  return (
    <Container>
      <Header>
        <HeaderTitle>
          <Title>Activity List</Title>
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