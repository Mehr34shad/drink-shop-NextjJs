// import axios from "axios";

// const AllBeerList = axios.create({
//   baseURL: "https://api.punkapi.com/v2/beers",
//   headers: {
//     "Content-Type": "application/json",
//     type: "All Berrs"
//   }
// });

// export default AllBeerList;



import config from "./config.json";
import  axios  from 'axios';

export const getAllBeerList = () => {
    return axios.get(`${config.punkapi}beers`);
}