import axios from "axios"

const instance=axios.create({
    baseURL: "https://api.themoviedb.org/3"
});

export default instance;

//instance.get("/kolkata") will make a get request to "https://api.themoviedb.org/3/kolkata"