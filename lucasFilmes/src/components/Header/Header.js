import React from 'react';
import { useNavigate } from "react-router-dom"
import { ButtonHeader, FontHeader, PlaceButton, StyledAppBar, StyledToolbar } from './styled';


export const Header = () => {
    const navigate = useNavigate()
   
  return (
   <div>
    {
      <StyledAppBar>
      <StyledToolbar>
      <h1>Lucas filmes</h1>
      <PlaceButton>
        <ButtonHeader color="inherit" ><FontHeader>Melhor avaliados</FontHeader></ButtonHeader>
          <ButtonHeader color="inherit"><FontHeader>Lançamentos</FontHeader></ButtonHeader>
          <ButtonHeader color="inherit" ><FontHeader>Filmes</FontHeader></ButtonHeader>
          <ButtonHeader color="inherit" ><FontHeader>Séries</FontHeader></ButtonHeader>
          </PlaceButton>
        </StyledToolbar>
      </StyledAppBar>
    }
      </div>
   
  );
}