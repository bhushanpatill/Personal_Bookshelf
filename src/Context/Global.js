import React, { createContext,useContext,useReducer,useEffect} from 'react'
import { getReducer } from '../Reducers/GlobalReducer';

const LOADING = "LOADING";
const GET_SEARCH = "GET_SEARCH";
const GET_HOME = "GET_HOME";
const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
const GET_FAVOURITES = "GET_FAVOURITES";

const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {
    const initialState = {
        loading:true,
        searchResults:[],
        favourites:[],
        homeresults:[]
    }
    const[state,dispatch] = useReducer(getReducer, initialState);
    //Search Results
    const getSearch = async(query) => {
        dispatch({type:LOADING})
        const res = await fetch(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`);
        const val = await res.json();
        // console.log(val);
        console.log(val.docs);
        dispatch({type:GET_SEARCH,payload:val.docs});
    }

    const getHome = async(query) => {
        dispatch({type:LOADING})
        const res = await fetch(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`);
        const val = await res.json();
        // console.log(val);
        console.log(val.docs);
        dispatch({type:GET_HOME,payload:val.docs});
    }

    const saveToFavourites = (element) => {
        const storedItems = JSON.parse(window.localStorage.getItem("myfavourites")) || []

        const existingItem = storedItems.find(item => item.key1 === element.key1)
        if(!existingItem){
            const items = [...storedItems,element];
            window.localStorage.setItem("myfavourites", JSON.stringify(items));
            dispatch({type:ADD_TO_FAVOURITES, payload:element});
            alert("Added to Liked")
        }
        else{
            alert("Already Exists")
        }
        
    }

    const removeFromLocalStorage = (element) => {
        const storedItems = JSON.parse(window.localStorage.getItem("myfavourites")) || []
        const items = storedItems.filter((item)=> item.cover_i !== element.cover_i)
        window.localStorage.setItem('myfavourites', JSON.stringify(items))
        console.log("rms called")
        getFromLocalStorage();
    }

    const getFromLocalStorage = () =>{
        const storedItems = JSON.parse(window.localStorage.getItem("myfavourites")) || []
        console.log("gfl called")
        dispatch({type:GET_FAVOURITES, payload: storedItems});
    }

    useEffect(()=>{
        getHome("world");
        getFromLocalStorage();
    },[])

    return(
    <GlobalContext.Provider value = {{
        ...state,
        getSearch,
        getHome,
        saveToFavourites,
        removeFromLocalStorage

    }}>
        {children}
    </GlobalContext.Provider>
    )
}

export const useGlobal = () => {
 return useContext(GlobalContext);
}

