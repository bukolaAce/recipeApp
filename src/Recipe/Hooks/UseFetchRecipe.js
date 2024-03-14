import axios from "axios";
import { useState } from "react";
// THE API KEY
const options = {
  method: "GET",
  url: "https://tasty.p.rapidapi.com/recipes/list",
  params: {
    from: "0",
    size: "12",
    tags: "under_30_minutes",
  },
  headers: {
    "X-RapidAPI-Key": "a2416ca8d1msh327598382bb8cc2p14c41fjsnab3934abdfe5",
    "X-RapidAPI-Host": "tasty.p.rapidapi.com",
  },
};

const UseFetchRecipe = () => {
  const [recipes, setRecipes] = useState(null);
  const [loadingGif, setLoadingGif] = useState(false);
  const [errorPage, setErrorPage] = useState(null);

  // FECTHING THE REQUEST TO STORE THE REQUEST IN USESTATE
  // eslint-disable-next-line no-unused-vars
  const FetchData = async (searchTerm) => {
    setLoadingGif(true);
    setRecipes(null);
    setErrorPage(null);
    try {
      const reqOptions = { ...options };
      if (searchTerm) {
        reqOptions.params.q = searchTerm;
      }
      const response = await axios.request(reqOptions);

      setRecipes(response.data.results);
      setLoadingGif(false);
    } catch (err) {
      setErrorPage(err.message);
      setLoadingGif(false);
    }
  };
  return [FetchData, recipes, loadingGif, errorPage];
};

export default UseFetchRecipe;
