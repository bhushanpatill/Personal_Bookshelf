import React, {useEffect} from "react";
import Header from "./Components/Header";
import Buttons from "./Components/Buttons";
import { useState } from "react";
import { useGlobal } from "./Context/Global";
import Home from "./Components/Home";
import Favourites from "./Components/Favourites";
import Search from "./Components/SearchResult";

function App() {
  const { getHome } = useGlobal();
  const [rendered, setRendered] = useState('Home');

  useEffect(() => {
    console.log('Rendered state updated:', rendered);
  }, [rendered]);

  const content = () => {
    switch (rendered) {
      case 'Home':
        return <Home/>;
      case 'Liked':
        // return <Favourites rendered={rendered} />;
        return <Favourites rendered = {rendered}/>
      case 'Search_Results':
        // return <SearchResults />; // Ensure this is correct
        return <Search/>
      default:
        return <Home />;
    }
  };

  return (
    <>
      <Header setRendered={setRendered} />
      <div className="fetch-btns">
        <Buttons
          name={'Liked'}
          icon={<i className="fa-solid fa-heart"></i>}
          onClick={() => {
            console.log('Switching to Liked');
            setRendered('Liked');
          }}
        />
        <Buttons
          name={'Home'}
          icon={<i className="fa-solid fa-house"></i>}
          onClick={() => {
            console.log('Switching to Home');
            setRendered('Home');
          }}
        />
        <Buttons
          name={'Search'}
          icon={<i className="fa-solid fa-arrow-trend-up"></i>}
          onClick={() => {
            console.log('Switching to Search Results');
            setRendered('Search_Results');
          }}
        />
      </div>
      <main>
        {console.log('Rendering:', rendered)}
        {content()}
      </main>
    </>
  );
}

export default App;
