import { RFValue } from 'react-native-responsive-fontsize';
import { FlatList,FlatListProps,Pressable,PressableProps } from 'react-native';
import styled from 'styled-components/native';

import { Task } from '.';

interface TaskWrapperProps extends PressableProps {
    pressed:boolean;
}

export const TaskFlatList = styled(FlatList as new(props: FlatListProps<Task>)  => FlatList<Task> ).attrs({
    contentContainerStyle : {
       padding: 10
    },
    showsVerticalScrollIndicator: false
 })`
   
 `;

export const TitleWrapper = styled.View`
flex:1;
width:100%;
flex-direction:column;
align-items:flex-start;
justify-content:flex-start;

`;

export const TaskName = styled.Text`
    font-size:${RFValue(30)}px;
    font-family:${({theme}) => theme.fonts.regular};
    padding-left:10px;
`;

export const TaskSubtitle = styled.Text`
    font-size:${RFValue(20)}px;
    font-family:${({theme}) => theme.fonts.regular};
    padding-left:10px;
`;



