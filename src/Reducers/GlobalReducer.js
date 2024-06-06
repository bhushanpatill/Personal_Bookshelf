import React from "react";
// import { GET_SEARCH, LOADING } from "../Utils/GlobalActions";

const LOADING = "LOADING";
const GET_SEARCH = "GET_SEARCH";
const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
const GET_FAVOURITES = "GET_FAVOURITES";
const GET_HOME = "GET_HOME";


export const getReducer = (state,action) => {
    switch(action.type){
        case LOADING:
            return {...state, loading:true};
        case GET_SEARCH:
            return {...state, searchResults:action.payload,loading:false};
        case GET_HOME:
            return {...state, homeresults:action.payload,loading:false};
        case ADD_TO_FAVOURITES:
            return {
                ...state,
                favourites:[...state.favourites, action.payload]
            }
    case GET_FAVOURITES:
        return {
            ...state,
            favourites:action.payload
        }
        default:
            return {...state, searchResults:action.payload,loading:false};
    }
    return state;
}
