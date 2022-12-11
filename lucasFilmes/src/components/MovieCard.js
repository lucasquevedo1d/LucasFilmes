import { CardMedia } from "@mui/material"
import { useNavigate } from "react-router-dom"
import UseRequestData from "../axios/UseRequestData"
import { URLMOVIES } from "../constants/Urls"
import { CardMovies, Star, Title } from "../pages/Home/Styled"
import { goToMovies } from "../router/Coordinator"
import { BoxMovie, Letters, Movie, Numbers, Stars, TitleMovie } from "./styled"
import StarPurple500SharpIcon from '@mui/icons-material/StarPurple500Sharp';
const MovieCard = () =>{
    const popularMovies = UseRequestData(URLMOVIES, [] )
    console.log(popularMovies)
    const navigate = useNavigate()
    const movieImages= "https://image.tmdb.org/t/p/w500"

    const movieCard = popularMovies.map((card) =>{
        return (
            <>
            <BoxMovie>
        <Movie  src={movieImages + card.poster_path} onClick={() => goToMovies(navigate)}>
            </Movie>
            {/* <p>{card.title}</p> */}
            {/* <TitleMovie>{card.title}</TitleMovie> */}
                </BoxMovie>
                </>
        )
    })

    return(
        <div>
        {movieCard}
        </div>
    )
}

export default MovieCard