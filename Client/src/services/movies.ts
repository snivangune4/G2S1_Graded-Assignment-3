import axios from 'axios';
import IMovie from '../models/Imovie';

const getMoviesList = (section: string) => {
    return axios.get<IMovie[]>( `${process.env.REACT_APP_API_BASE_URL}/${section}` )
            .then(response=> response.data)
};

const getMovieById = ( section:string, id: number ) => {
    return axios.get<IMovie>( `${process.env.REACT_APP_API_BASE_URL}/${section}/${id}` )
            .then(response=> response.data)
};

const addFavouriteMovie = (favMovie: Omit<IMovie, "id">) => {
    return axios
      .post<IMovie[]>(
        `${process.env.REACT_APP_API_BASE_URL}/favourite`,
        favMovie,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => response.data);
  };
  
  const removeFavouriteMovie = (id: string) => {
    return axios
      .delete<IMovie>(`${process.env.REACT_APP_API_BASE_URL}/favourite/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => response.data);
  };

export {
    getMoviesList,
    getMovieById,
    removeFavouriteMovie,
    addFavouriteMovie
};