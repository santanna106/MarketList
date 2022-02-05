import styled from 'styled-components/native';

export const Container = styled.View`
    flex:1;
    background-color:${({theme}) => theme.colors.primary};
    justify-content:center;
    align-items:center;
`;

export const Header = styled.View`
    flex:4;
    background-color: ${({theme}) => theme.colors.primary};
    flex-direction:column;
    justify-content:center;
    align-items:center;
    border-radius:90px;
`;

export const HeaderTitle = styled.View`
    flex:1;
    background-color: ${({theme}) => theme.colors.primary};
    align-items:center;
`;

export const HeaderCurve = styled.View`
    flex:3;
    height:100px;
    width: 390px;

    background-color: ${({theme}) => theme.colors.background};

    border-top-left-radius: 200px;
    border-top-right-radius: 200px;

    
`;

export const Contents = styled.View`
    flex:3;
    width: 100%;
    background-color: ${({theme}) => theme.colors.background};
    justify-content:center;
    align-items:center;
`;


export const Title = styled.Text`
    color:#000;
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
