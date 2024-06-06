import React from 'react'
import { useGlobal } from '../Context/Global'
import GiffItem from './GiffItem';

function Search() {
    const {searchResults, getSearch} = useGlobal();

  return (
    <div className = "homepage" >
      <div><h1>Search Results</h1></div>
      <div className = "grid">
        {
            searchResults.map((card,index) => {
                return <div>
                <GiffItem key = {index} cover_i = {card.cover_i} title = {card.title} first_sentence
                = {card.first_sentence} key1 = {card.key}/>
                </div>
            })
          }
          
          </div>
    </div>
  )
}

export default Search;
