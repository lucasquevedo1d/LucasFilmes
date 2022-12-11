import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { goToMovies, goToSearch } from '../../router/Coordinator';
import { CardContent, TextField } from '@mui/material';
import LocalMoviesSharpIcon from '@mui/icons-material/LocalMoviesSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import { Body, CardMovies, ContainerMovie, Position, Star, Title } from './Styled';
import { URLMOVIES } from '../../constants/Urls';
import StarPurple500SharpIcon from '@mui/icons-material/StarPurple500Sharp';
import axios from 'axios';
import MovieCard from '../../components/MovieCard';
import UseRequestData from '../../axios/UseRequestData'



const Home = () => {
  const navigate = useNavigate()



  return (
    <Body>
      <ContainerMovie>
          <MovieCard/>
      </ContainerMovie>
    </Body>
  );
}

export default Home;