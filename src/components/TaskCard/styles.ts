import { FlatList,FlatListProps,Pressable,PressableProps } from 'react-native';

import styled from 'styled-components/native';

interface ContainerProps extends PressableProps {
    pressed:boolean;
}



export const Container = styled(Pressable)<ContainerProps>`
flex:1;
height: 100px;
flex-direction:column;
justify-content:space-between;
border-color:${({theme}) => theme.colors.attention};
border-width:1px;
align-items:center;
margin-bottom:5px;
border-radius:15px;

background-color:${({theme,pressed}) => pressed ? theme.colors.background : theme.colors.attention };
`;
