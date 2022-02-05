import styled from 'styled-components/native';
import { RFPercentage } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex:1;
    background-color: ${({theme}) => theme.colors.primary};
    justify-content:center;
    align-items:center;
`;

export const Header = styled.View`
    flex:1;
    background-color: ${({theme}) => theme.colors.primary};
    justify-content:center;
    align-items:center;
`;

export const Contents = styled.View`
    flex:2;
    height:400;
    background-color: ${({theme}) => theme.colors.background};
    justify-content:center;
    align-items:center;
`;

export const Title = styled.Text`
    color:#000;
`;

export const HighLightCards = styled.ScrollView.attrs({
    horizontal:true,
    showsHorizontalScrollIndicator:false,
    contentContainerStyle:{paddingHorizontal:24}
})`
    width:100%;
    position:absolute;
    margin-top:${RFPercentage(20)}px;
`;
