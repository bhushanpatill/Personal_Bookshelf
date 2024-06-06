import React, { useEffect } from 'react'
import { useGlobal } from '../Context/Global'
import GiffItem from './GiffItem';

function Home({setRendered}) {
    const {homeresults,getHome} = useGlobal();

  return (
    <div className = "homepage" >
      <div><h1>Homepage</h1></div>
      <div className="grid">
        {
            homeresults.map((card,index) => {
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

export default Home;
