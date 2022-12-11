import Toolbar from '@mui/material/Toolbar';
import styled from 'styled-components';
import AppBar from "@mui/material/AppBar"
import { Button } from '@mui/material';

    export const StyledToolbar = styled(Toolbar)`
    display: flex;
    flex-direction: row;
    font-family: 'Bebas Neue', cursive;
    /* background-color:black; */
    background-color:red;
    color: beige;
    `
    export const StyledAppBar = styled(AppBar)`
    width: 100%;
    `
   export const PlaceButton = styled.div`
   margin-left: 800px;
   `
   
   export const FontHeader = styled.p`
    font-family: 'Bebas Neue', cursive;
   `
    export const ButtonHeader = styled(Button)`
    padding: 20px;
    :hover{
        color: black;
        transition: 1s;
        transform: scale(1.1);

    }
    `