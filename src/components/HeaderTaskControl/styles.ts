import styled from 'styled-components/native';

export const Container = styled.View`
   
    flex-direction:row;

    width:100%;
   
    height:60px;

    justify-content:space-between;
    align-items:center;

`;

export const WrapperCrudButton = styled.View`
    flex-direction:row;
    align-items:center;
    justify-content:flex-end;
     
    width:60%;
    

    height:60px;
`;


export const SearchField = styled.TextInput`
    width:97%;
   
    background-color:${({theme}) => theme.colors.background};
    height:60px;
    border-radius:80px;
`;