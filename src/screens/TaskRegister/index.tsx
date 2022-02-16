import React,{ useState } from 'react';
import {
   KeyboardAvoidingView,
   TouchableWithoutFeedback,
   Keyboard, 
   Alert
 } from 'react-native';

import { Button } from '../../components/Button';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import uuid from 'react-native-uuid';

import { useForm } from 'react-hook-form';
import { useTask } from '../../hooks/task';

import {
  Container,
  WrapperBackButton,
  Form,
  WrapperTitle,
  Title,
  WrapperInput,
  WrapperSwitch,
  LibleSwitch

} from './styles';
import { InputForm } from '../../components/Forms/InputForm';
import { Switch } from 'react-native';
import { BackButton } from '../../components/BackButton';

interface FormData {
  name:string;
  urgent: boolean;
}

const schema = Yup.object().shape({
  name: Yup
      .string()
      .required('Nome é obrigatório')
})

export function TaskRegister(){
  const [urgent, setUrgent] = useState(false);
  const toggleSwitch = () => setUrgent(previousState => !previousState);
 
  const navigation = useNavigation<any>();
  const theme = useTheme();

  const { insert } = useTask();


  const { 
    control,
    handleSubmit,
    formState:{errors},
    reset
  } = useForm({
    resolver:yupResolver(schema)
  }); 

  function handleBackButton() {
    navigation.goBack();
  }

  async function handleSubmitButton(form:FormData) {
    try{
      const newTask  = {
        id:String(uuid.v4()),
        name:form.name,
        done:false,
        urgent:urgent,
        date_start:'',
        date_finish: ''
      }
      await insert(newTask);
      navigation.navigate('TaskList');

    } catch(error){
      Alert.alert('Ops! Erro ao tentar gravar o registro.');
    }
  }

  return (
    <KeyboardAvoidingView behavior='position' enabled style={{flex:1,backgroundColor:theme.colors.primary}}>
       <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{}}>  
      
        <Container>
                <Form>
                  <WrapperTitle>
                    <WrapperBackButton>
                      <BackButton 
                          color={theme.colors.text_dark}
                          onPress={handleBackButton} 
                      />
                    </WrapperBackButton>
                    
                    <Title>Nova Atividade</Title>
                  </WrapperTitle>
                  <WrapperInput>
                    <InputForm
                      name="name"
                      control={control}
                      placeholder="Nome"
                      autoCapitalize="sentences"
                      autoCorrect={false}  
                    
                      error={errors.name && errors.name.message}
                    />
                  
                  </WrapperInput>
                  <WrapperSwitch>
                    <LibleSwitch>Urgente</LibleSwitch>
                    <Switch
                        trackColor={{ false: theme.colors.title, true: theme.colors.attention }}
                        thumbColor={urgent ? theme.colors.attention : theme.colors.background}
                        
                        onValueChange={toggleSwitch}
                        value={urgent}
                        style={{ transform: [{ scaleX: 2.0  }, { scaleY: 2.0  }],marginBottom:20,paddingLeft:8 }}
                      />
                  </WrapperSwitch>
                
                  <Button background={theme.colors.text_dark}
                          title="Salvar"   
                          onPress={handleSubmit(handleSubmitButton)}
                  />
                </Form>
                
          </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    
  );
}