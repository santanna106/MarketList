import React,{ useState } from 'react';
import {
   KeyboardAvoidingView,
   TouchableWithoutFeedback,
   Keyboard, 
   
 } from 'react-native';

import { Button } from '../../components/Button';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { useForm } from 'react-hook-form';
;

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

const schema = Yup.object().shape({
  name: Yup
      .string()
      .required('Nome é obrigatório')
})

export function TaskRegister(){
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
 
  const navigation = useNavigation();
  const theme = useTheme();

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
                        thumbColor={isEnabled ? theme.colors.attention : theme.colors.background}
                        
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                        style={{ transform: [{ scaleX: 2.0  }, { scaleY: 2.0  }],marginBottom:20,paddingLeft:8 }}
                      />
                  </WrapperSwitch>
                  
                  <Button background={theme.colors.text_dark}
                          title="Salvar"      
                  />
                </Form>
                
          </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    
  );
}