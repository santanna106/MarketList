import React from 'react';
import { IconButton } from '../IconButton';
import { useTheme } from 'styled-components';

import {
  Container,
  WrapperCrudButton
} from './styles';

export function HeaderTaskControl(){
  const theme = useTheme();
  return (
    <Container>
        <IconButton 
           color={theme.colors.text_dark}
           nameIcon={'arrow-back'} 
           
        />
        <WrapperCrudButton>
          <IconButton 
            color={theme.colors.text_dark}
            nameIcon={'ios-create-outline'} 
            
          />
            <IconButton 
            color={theme.colors.text_dark}
            nameIcon={'ios-trash-outline'} 
            
          />
        </WrapperCrudButton>
    </Container>
  );
}