import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { BorderlessButtonProps } from 'react-native-gesture-handler';

import {useTheme} from 'styled-components';

import {
  Container
} from './styles';

interface Props extends BorderlessButtonProps {
    color?:string;
    nameIcon:'arrow-back' | 'ios-trash-outline'|'ios-create-outline';
}

export function IconButton({
    color,
    nameIcon,
    ...rest
}:Props){
  const theme = useTheme();
  return (
    
      <Container {...rest}>
          <Ionicons
              name={nameIcon}
              size={35}
              color={color ? color : theme.colors.text}
          />

      </Container>
  );
}