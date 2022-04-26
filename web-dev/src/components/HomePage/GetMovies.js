import * as moviesService from '../../services/movies-service.js';


const GetMovies = (numMovies = 6) => {
    return moviesService.getRandomMovies(numMovies);
}

export default GetMovies;