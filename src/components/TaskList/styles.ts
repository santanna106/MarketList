import { RFValue } from 'react-native-responsive-fontsize';
import { FlatList,FlatListProps } from 'react-native';
import styled from 'styled-components/native';

import { Task } from '.';

export const TaskFlatList = styled(FlatList as new(props: FlatListProps<Task>)  => FlatList<Task> ).attrs({
    contentContainerStyle : {
       padding: 10
    },
    showsVerticalScrollIndicator: false
 })`
   
 `;

 export const TaskWrapper = styled.View`
    flex:1;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
 `;

export const TitleWrapper = styled.View`
flex:1;
align-items:flex-start;
justify-content:flex-start;

`;

export const TaskName = styled.Text`
    font-size:${RFValue(20)}px;
    font-family:${({theme}) => theme.fonts.regular};
`;

export const WrapperButton = styled.View`
    width:10%;

    flex-direction:row;
   
    align-items:flex-end;
    justify-content:flex-end;
    
`;



