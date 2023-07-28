import React, { useEffect, useState } from "react";
import "./typeahead.css";
import { debounce } from "./../util";

const endpoint =
  "https://gist.githubusercontent.com/reitwiec/708b4ec1b036aea2a8bac2b983223121/raw/433520cd58f1446c08631c59cef0a0f4bdcf15ca/states.json";

async function getDtata() {
  const response = await fetch(endpoint);
  const data = await response.json();
  return data; //array
}

export const Typeahead = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [list, setList] = useState(null);

  useEffect(() => {
    (async function () {
      try {
        setIsLoading(true);
        const data = await getDtata();
        setData(data);
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setIsLoading(false);
        console.log(err);
      }
    })();
  }, []);

  const handleChange = debounce((event,) => {
    //filter data by value;
    const value = event.target.value;
    if (!value) {
      setList([]);
    } else {
      const regex = new RegExp(value, "gi");
      const filteredState = data.filter((state) => {
        return state?.state?.state_name?.match(regex);
      });

      setList(filteredState);
    }
  });

  if (isLoading) {
    return <>Loading....</>;
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name={"state"}
          className={"input"}
          placeholder={"Search a state.."}
        />
      </form>

      <ul className="list">
        {list &&
          list.length > 0 &&
          list.map((state, index) => {
            return <li key={index}>{state.state.state_name}</li>;
          })}
      </ul>
    </div>
  );
};
