import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const getMovies = async (req, res) => {
  const url_api = `http://www.omdbapi.com/?s=${req.params.title}&plot=full&apikey=${process.env.API_KEY}`;

  axios
    .get(url_api)
    .then((response) => {
      res.send(response.data.Search);
    })
    .catch((error) => {
      console.log(error);
    });
};

const getById = async (req, res) => {
  const url_api = `http://www.omdbapi.com/?i=${req.params.id}&plot=full&apikey=${process.env.API_KEY}`;
  axios
    .get(url_api)
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export default { getMovies, getById };
