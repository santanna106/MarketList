import React from 'react';
import { Button } from '../../components/Button';
import { useTheme } from 'styled-components';

import {
  Container,
  Form,
  WrapperInput

} from './styles';

export function TaskRegister(){

  const theme = useTheme();

  return (
    <Container>
        <Form>
          <WrapperInput>

          </WrapperInput>
          <Button background={theme.colors.text_dark}
                  title="Salvar"      
          />
        </Form>
        
    </Container>
  );
}