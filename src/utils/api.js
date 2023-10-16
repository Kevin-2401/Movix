import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNmM2MjMzNjViN2IwMTY4MDEwZDc4ZGQ3MTExMDNmMCIsInN1YiI6IjY0ZTJmZWNlN2VmMzgxMDEwNGM2YjdmNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dSN_tz8BSf86dr-XeJbq7aQyq3mTH4Atr_a6zz7rv4k"

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};