import React, { useState } from 'react'
import Filter from './components/filter/Filter'
import List from './components/list/List'
import Detail from './components/detail/Detail'
import './App.css';

export default function App() {
  //state
  const movieobjects = [{id : 1, name: 'the god father', year: 1998, lang:"en"}, {id:2, name: "tiger", year: 1668, lang: "nl"}];
  const [selectedMovie, SetSelectedMovie] = useState(movieobjects[0])
  const [movies] = useState(movieobjects)
  const [filterdMovies, SetFilterdMovies] = useState(movies)
    //state
    

    //methods
    function showDetail(object){
      SetSelectedMovie(object)
    }

  //method
  function filter_list(filter){
    var filterMovies = movies.filter(el => 
      el.name.includes(filter.searchInput) &&
      el.lang.startsWith(filter.arrayInput)
      );
    SetFilterdMovies(filterMovies);
  }
  

  // return
  return (
    <>
      <Filter func_filter={filter_list} objectArray={movies.map(movie => movie.lang)}/>
      <h1>List</h1>
      <List filterdMovies={filterdMovies} showDetail={showDetail}/>
      <Detail object={selectedMovie}/>
    </>
  )
}
