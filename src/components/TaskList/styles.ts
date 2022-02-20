import { RFValue } from 'react-native-responsive-fontsize';
import { FlatList,FlatListProps,Pressable,PressableProps } from 'react-native';
import styled from 'styled-components/native';

import { Task } from '.';

interface TaskWrapperProps extends PressableProps {
    pressed:boolean;
}

export const TaskFlatList = styled(FlatList as new(props: FlatListProps<Task>)  => FlatList<Task> ).attrs({
    contentContainerStyle : {
       paddingTop: 15
    },
    showsVerticalScrollIndicator: false
 })`
   
 `;

export const TitleWrapper = styled.View`

width:100%;
flex-direction:column;
align-items:flex-start;
`;

export const TaskName = styled.Text`
    font-size:${RFValue(25)}px;
    
    height: 30px;
    font-family:${({theme}) => theme.fonts.regular};
    padding-left:10px;
`;

export const TaskSubtitle = styled.Text`
    font-size:${RFValue(20)}px;
    font-family:${({theme}) => theme.fonts.regular};
    padding-left:10px;
`;



