import axios from "axios";


//the base URL to make requests to movie database

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})


/* any call using this instance will append to the base URL --> like so:
        if we do instance.get('/home');  --> this will bascially append /home to the base URL --> so final URL will be https://api.themoviedb.org/3/home */

        
export default instance;