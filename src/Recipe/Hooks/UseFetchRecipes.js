import axios from "axios";
import { useState } from "react";
// import { useReducer } from "react";

const options = {
  method: "GET",
  url: "https://tasty.p.rapidapi.com/recipes/get-more-info",
  params: {
    id: "8138",
  },
  headers: {
    "X-RapidAPI-Key": "a2416ca8d1msh327598382bb8cc2p14c41fjsnab3934abdfe5",
    "X-RapidAPI-Host": "tasty.p.rapidapi.com",
  },
};

// USE REDUCER INITIAL STATE
const initialState = {
  recipe: null,
  loadingGif: false,
  errorPage: null,
};

const Action = {
  FETCHING_DATA: "FECTCHING_DATA",
  FETCH_SUCCESSFUL: "FECTCH_SUCCESSFUL",
  FETCH_ERROR: "FECTCH_ERROR",
};
const reducer = (_, action) => {
  switch (action.type) {
    case Action.FETCHING_DATA:
      return {
        recipe: null,
        errorPage: null,
        loadingGif: true,
      };
    case Action.FETCH_SUCCESSFUL:
      return {
        errorPage: null,
        loadingGif: false,
        data: action.payload,
      };
    case Action.FETCH_ERROR:
      return {
        errorPage: action.payload,
        recipe: null,
        loadingGif: false,
      };
    default:
      return initialState;
  }
};

const UseFetchRecipes = () => {
  const [recipe, setRecipe] = useState(null); //null or{}
  const [loadingGif, setLoadingGif] = useState(false); //false or true
  const [errorPage, setErrorPage] = useState(null); //null or string

  // USE REDUCER HOOK
  // const [{recipe,loadingGif,errorPage}, dispatch] = useReducer(reducer, initialState);
  // console.log(state, "from the useReducer");

  // FECTHING THE REQUEST TO STORE THE REQUEST IN USESTATE
  // eslint-disable-next-line no-unused-vars
  const FetchRecipes = async (id) => {
    setLoadingGif(true);
    setRecipe(null);
    setErrorPage(null);

    // dispatch({ type: Action.FETCHING_DATA });

    try {
      const reqOptions = { ...options };
      // if the parameters id === id fo card clicked then get the data
      reqOptions.params.id = id;

      const response = await axios.request(reqOptions);

      setRecipe(response.data);
      // console.log(response);
      // if we are able to get the data the set loading to false
      setLoadingGif(false);
      // dispatch({ type: Action.FETCH_SUCCESSFUL, payload: response.data });
      // if we are unable to get the data due to network then set error message
    } catch (err) {
      setErrorPage(err.message);
      setLoadingGif(false);
      // dispatch({ type: Action.FETCH_ERROR, payload: err.message });
    }
  };
  // this function returns the request,data,loadingstate and error state
  return [FetchRecipes, recipe, loadingGif, errorPage];
};

export default UseFetchRecipes;
