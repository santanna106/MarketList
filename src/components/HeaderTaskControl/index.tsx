import React from 'react';
import { IconButton } from '../IconButton';
import { useTheme } from 'styled-components';

import {
  Container,
  WrapperCrudButton,
  SearchField
} from './styles';

interface Props{
  isSearch:boolean;
}

export function HeaderTaskControl({
  isSearch
}:Props){
  const theme = useTheme();
  return (
    <Container>
      {
        isSearch ?
          <SearchField />
        :
        <>
          <IconButton 
            color={theme.colors.text_dark}
            nameIcon={'arrow-back'} 
            
          />
          <WrapperCrudButton>
            <IconButton 
              color={theme.colors.text_dark}
              nameIcon={'ios-create-outline'} 
              onPress={() => alert('Update')}
              
            />
              <IconButton 
              color={theme.colors.text_dark}
              nameIcon={'ios-trash-outline'} 
              onPress={() => alert('Remove')}
              
            />
          </WrapperCrudButton>
        </>

      }
        
    </Container>
  );
}