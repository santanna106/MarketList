import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const TaskButton = styled(RectButton)`
    
    padding: 15px 15px;
    margin-bottom: 4px;
    border-radius: 4px;
    flex-direction: row;
    align-items: center;

`;

export const CheckView = styled.View`
    height: 16px;
    width: 16px;
    border-radius: 4px;
    border-width: 1px;
    border-color: #B2B2B2;
    margin-right: 15px;
    align-items: center;
    justify-content: center;
`;

