import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./requests";
import "./Banner.css";

const base_url = "https://image.tmdb.org/t/p/original/";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        response.data.results[
          Math.round(Math.random() * response.data.results.length)
        ]
      );
      return response;
    }
    fetchData();
  }, []);

  function truncateString(str, num) {
    if (str?.length > num) {
      return str?.slice(0, num) + "...";
    } else {
      return str;
    }
  }

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(${base_url}${movie?.poster_path})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <div className="banner__contents">
        <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
          <h1 className="banner__description">
            {truncateString(movie?.overview, 150)}
          </h1>
        </div>
      </div>
      <div className="banner__bottom"></div>
    </header>
  );
}

export default Banner;
