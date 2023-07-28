import Typeahead from "./components/Typeahead";
import "./App.css";
import MovieList from "./components/MovieList";
import Accordion from "./components/Accordion";
import TicTacToe from "./components/TicTacToe";
import StarRating from "./components/StarRating";

function App() {
  return (
    <div className={"app"}>
      {/* <Accordion
        title={"Lorem, ipsum dolor."}
        body={
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum."
        }
      /> */}
      {/* <Typeahead/> */}
      {/* <MovieList/> */}
      {/* <TicTacToe/> */}
      <StarRating />
    </div>
  );
}

export default App;
