
import axios from "axios";
import config from "./config.json";

export const getBeerPairSteak = () => {
    return axios.get(`${config.punkapi}beers?food=steak`);
}
