// import React from 'react'
// import { useGlobal } from '../Context/Global'
// import GiffItem from './GiffItem';

// function Favourites({rendered}) {
//     const {favourites,getHome} = useGlobal();

//   return (
//     <div className = "homepage" >
//       <h1>Favourites</h1>
//         {
//             favourites.map((card,index) => {
//                 return <div>
//                 <GiffItem key = {index} cover_i = {card.cover_i} title = {card.title} first_sentence
//                 = {card.first_sentence} rendered = {rendered} key1 = {card.key}/>
//                 </div>
//             })
//           }
          
       
//     </div>
//   )
// }

// export default Favourites;

import React from 'react';
import { useGlobal } from '../Context/Global';
import GiffItem from './GiffItem';

function Favourites({ rendered }) {
  const { favourites, getHome } = useGlobal();

  return (
    <div className="homepage">
        <div><h1>Favourites</h1></div>
        <div className= "grid">
      {
        favourites.map((card) => (
          <div key={card.key}>
            <GiffItem
              cover_i={card.cover_i}
              title={card.title}
              first_sentence={card.first_sentence}
              rendered={rendered}
              key1={card.key}
            />
          </div>
        ))
      }
      </div>
    </div>
  );
}

export default Favourites;
