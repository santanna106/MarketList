import React,{ useState } from 'react';
import { 
    Image
 } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';

import {
    IconRectButton,
    IconView
} from './styles';

import trashIcon from '../../../assets/trash.png';
import editIcon from '../../../assets/edit.png';
import cancelIcon from '../../../assets/X.png';

interface Props extends RectButtonProps {
   iconType?:'trash'|'edit'|'cancel';
}

export function IconButtom({
    iconType='trash',
    ...rest
}:Props){

  return ( 
    <IconRectButton {...rest} >
        <IconView>
            {
              iconType === 'trash' ? 
                <Image source={trashIcon} />    
              :
              iconType === 'edit' ? 
                <Image source={editIcon} />  
              :
                <Image source={cancelIcon} />  
            }
        </IconView>
    </IconRectButton>
  );
}