
import config from "./config.json";
import  axios  from 'axios';

export const getBeerPairSteak = () => {
    return axios.get(`${config.punkapi}beers?food=steak`);
}
