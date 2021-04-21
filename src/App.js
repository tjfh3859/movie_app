import React from 'react'
import PropTypes from "prop-types";

function Movie({ year }) {
  return <h3>{year} 영화</h3>
}

Movie.propTypes = {
  year: PropTypes.string.isRequired
};

const movieYear = [
  {
    id: 1,
    year: "2021"
  },
  {
    id: 2,
    year: "2020"
  },
  {
    id: 3,
    year: "2019"
  },
  {
    id:4,
    year: "2018"
  }
]

function renderMovie(whenYear){
  console.log(whenYear);
  return <Movie year={whenYear.year} />
}

function App() {
  return (
    <div>
      {movieYear.map(renderMovie)}
    </div>
  );
}

export default App;
