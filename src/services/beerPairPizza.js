import config from "./config.json";
import  axios  from 'axios';

export const getBeerPairPizza = () => {
    return axios.get(`${config.punkapi}beers?food=pizza`);
}
