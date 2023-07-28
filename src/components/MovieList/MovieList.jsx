import { useState } from "react";
import "./movielist.css";

const APIUrl = "https://jsonmock.hackerrank.com/api/moviesdata";

async function getData(input) {
  const response = await fetch(`${APIUrl}?Year=${input}`);
  const data = await response.json();
  return data.data;
}
/**This Question asked in wells fargo React interview on hacker rank */

export function MovieList() {
  const [data, setData] = useState([]);
  const [isLoding, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const [input, setInput] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    if(value){
      setInput(+`${event.target.value}`);
    }else{
      setInput("");
    }
  };

  const handleSearch = async () => {
    if (input) {
      try {
        setIsLoading(true);
        const data = await getData(input);
        setData(data);
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="layout-column align-items-center mt-50">
      <section className="layout-row align-items-center justify-content-center">
        <input
          type="number"
          className="large"
          placeholder="Enter Year eg 2015"
          data-testid="app-input"
          value={input}
          onChange={handleChange}
          min={2015}
        />

        {/* search button */}
        <button
          className="btn"
          data-testid="submit-button"
          onClick={handleSearch}
        >
          Search
        </button>
      </section>

      {/* movie list */}
      {isLoding ? (
        <>Loading...</>
      ) : data && data.length > 0 ? (
        <ul className="mt-50 styled" data-testid="movieList">
          {data.map((movie) => {
            return (
              <li key={movie.imdbID} className="slide-up-fade-in py-10">
                {movie.Title}
              </li>
            );
          })}
        </ul>
      ) : (
        <div className="mt-50 slide-up-fade-in no-result" data-testid="no-result">
          { "No Results found"}
        </div>
      )}
    </div>
  );
}
