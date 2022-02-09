import React, { useEffect,useState } from 'react';
import { useTheme } from 'styled-components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

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
  const [loading,setLoading] = useState(true);
  const [listTask,setListTask] = useState<TaskData[]>([]);
  const navigation = useNavigation<any>();
  
  async function loadData(){       
    setLoading(true);    
    const response = await AsyncStorage.getItem(STORE.task);
    const responseFormatted = response ? JSON.parse(response) : [];


    setListTask(responseFormatted);
    setLoading(false);
  }

  function handleAddTask(){
    navigation.navigate('TaskRegister');
  }


  useEffect(() => {
    loadData();
  },[])
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
            <Card title="Todas" background={theme.colors.secundary} iconName="fact-check"  onPress={() => alert('Todas')}/>
            <Card title="Urgentes" background={theme.colors.attention} iconName="warning" onPress={() => alert('Todas')}/>
            <Card title="Realizadas" background={theme.colors.sucess} iconName="check-box" onPress={() => alert('Todas')}/>
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