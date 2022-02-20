import { FlatList,FlatListProps,Pressable,PressableProps } from 'react-native';

import styled from 'styled-components/native';

interface ContainerProps extends PressableProps {
    pressed:boolean;
}



export const Container = styled(Pressable)<ContainerProps>`

height: 75px;
flex-direction:column;
justify-content:space-between;


align-items:center;
margin-bottom:19px;


`;
