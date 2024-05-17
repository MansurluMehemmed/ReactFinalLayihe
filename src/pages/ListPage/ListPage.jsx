import React, { useEffect, useState } from "react";
import "./ListPage.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";

const ListPage = () => {
  const [state, setState] = useState([]);

  const { id } = useParams();
  //   console.log(id);

  

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `https://acb-api.algoritmika.org/api/movies/list/${id}`
      );
  
      setState(response.data.movies);
    };
    getData();
  }, [id]);
  //   console.log(state);
  return (
    <div className="list-page">
      {state?.map((item) => {
        // console.log(item.id, id, "idler");
        return (
          <button className="animated-button">
            <a href={`https://www.imdb.com/title/${item.id}`}>
              <svg
                viewBox="0 0 24 24"
                className="arr-2"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
              <span className="text">
                {item.title} ({item.year})
              </span>
              <span className="circle"></span>
              <svg
                viewBox="0 0 24 24"
                className="arr-1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </a>
          </button>
        );
      })}
    </div>
  );
};

export default ListPage;
