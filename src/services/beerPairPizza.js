
import axios from "axios";
import config from "./config.json";

export const getBeerPairPizza = () => {
    return axios.get(`${config.punkapi}beers?food=pizza`);
}
