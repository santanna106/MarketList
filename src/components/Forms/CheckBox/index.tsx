import React,{ useState } from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import {
    TaskButton,
    CheckView
} from './styles';


interface Props extends RectButtonProps {
    checked:boolean;
}

export function CheckBox({
    checked = false,
    ...rest
}:Props){

  return (
    <TaskButton {...rest} >
        <CheckView>
            {
                checked &&  
                    <Feather
                        name="check"
                        size={12}
                        color="#00FF00"
                    />
            }
           
        </CheckView>
    </TaskButton>
  );
}