// import React from "react";

// function GiffItem({cover_i,title,first_sentence,key1
// }) {
//   return (
//     <div className="outer-card">
//       <div className="card" style = {{"width":"18rem","border":"0.2rem solid black"}}>
//         <img src={`https://covers.openlibrary.org/b/id/${cover_i}-L.jpg`} style = {{"width":"17.6rem", "height":"15rem"}} className="card-img-top" alt="..." />
//         <div className="card-body">
//           <h5 className="card-title">{title}</h5>
//           <p className="card-text" style={{"height":"10rem"}}>
//             {/* {first_sentence && first_sentence.length > 50 ? first_sentence.slice(0,50) : first_sentence } */}
//             {/* {console.log(key1)} */}

//             {first_sentence && first_sentence.length > 50 ? first_sentence.slice(0, 50) : first_sentence }
//           </p>
//           <a href={`https://openlibrary.org/${key1}/`} className="btn btn-primary" style={{"width":"100%","text-align":"center"}}>
//             Read full article here
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default GiffItem;
// style="width: 18rem;"

import React from "react";
import { useGlobal } from "../Context/Global";

function GiffItem({ cover_i, title, first_sentence, key1, rendered }) {
  const { removeFromLocalStorage, saveToFavourites, loading } = useGlobal();
  // Ensure first_sentence is a string
  const sentence = first_sentence ? String(first_sentence) : "";

  return (
    <div className="outer-card">
      <div
        className="card"
        style={{ width: "18rem", border: "0.2rem solid black" }}
      >
        <img
          src={`https://covers.openlibrary.org/b/id/${cover_i}-L.jpg`}
          style={{ width: "17.6rem", height: "15rem" }}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text" style={{ height: "10rem" }}>
            {sentence.length > 200 ? sentence.slice(0, 200) + "..." : sentence}
            {/* {sentence + "..."} */}
          </p>
          <a
            href={`https://openlibrary.org/${key1}/`}
            className="btn btn-primary"
            style={{ width: "100%", "text-align": "center" }}
          >
            Read More...
          </a>

          <div
            className="love"
            onClick={() => {
              if (rendered === "Liked") {
                removeFromLocalStorage({
                  cover_i,
                  title,
                  first_sentence,
                  key1,
                  rendered,
                });
              } else {
                saveToFavourites({
                  cover_i,
                  title,
                  first_sentence,
                  key1,
                  rendered,
                });
              }
            }}
          >
            <i
              className={
                rendered === "Liked" ? "fa-solid fa-x" : "fa-solid fa-heart"
              }
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GiffItem;
