import styled from 'styled-components/native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import { CurrentRenderContext } from '@react-navigation/native';

export const Container = styled.View`
    flex:1;
    background-color:${({theme}) => theme.colors.primary};
    justify-content:center;
    align-items:center;
`;

export const Header = styled.View`
    flex:1;
    height:200px;
    background-color: ${({theme}) => theme.colors.primary};
    flex-direction:column;
    justify-content:center;
    align-items:center;
    border-radius:90px;
`;

export const HeaderTitle = styled.View`
    flex:1;
    background-color:${({theme}) => theme.colors.primary};
    align-items:center;
    justify-content:center;
    position:absolute;
    top:5px;

    
`;

export const HeaderCurve = styled.View`
    flex:2;
    height:40px;
    width: 100%;

    background-color: ${({theme}) => theme.colors.background};

    border-top-left-radius: 300px;
    border-top-right-radius: 300px;

    position:absolute;
    top:55px;

    
`;

export const Contents = styled.View`
    flex:3;
    width: 100%;
    background-color: ${({theme}) => theme.colors.background};
    justify-content:center;
    align-items:center;
    overflow: hidden;
    position:absolute;
    top:95px;
    
`;


export const Title = styled.Text`
    font-family:${({theme}) => theme.fonts.regular_bold};
    font-size:${RFValue(30)}px;
    color:${({theme}) => theme.colors.text_dark};
`;

export const PurchasesTypeBox = styled.View`
    flex:2;
    width: 100%;
    background-color: ${({theme}) => theme.colors.background};
    justify-content:space-between;
    align-items:center;
    
    padding:30px 0px;
    
`;


export const Button = styled.TouchableOpacity`
    height:60px;
    width:60%;
    margin-top:15px;
    align-items:center;
    justify-content:center;
    
    background-color:#000;
    
    
`;

export const ButtonText = styled.Text`
    color:#FFF;
`;


export const PurchasesCards = styled.ScrollView.attrs({
    horizontal:false,
    showsHorizontalScrollIndicator:false,
    contentContainerStyle:{
        alignItems: 'center',
       
        
       
    }
})`
    width:100%;
  
    
`;
