import styled from "styled-components";

export const Letters = styled.div`
color: white;
font-family: 'Bebas Neue', cursive;
`

export const Stars = styled.div`
display: flex;
flex-direction: row;
margin-top: -5px;
/* margin-right: auto; */
`

export const Numbers = styled.p`
margin-left: 25px;
margin-top: 1px;
`
export const TitleMovie = styled.a`
/* padding: 50px; */
`
export const BoxMovie = styled.a`
/* display: flex; */
flex-direction: column;
`

export const Movie = styled.img`
    width: 180px;
    border-radius: 2rem;
    margin-top: 2rem;
    padding: 20px;
    transition: all 0.3s;


:hover{
    transform: scale(1.1);
}

`