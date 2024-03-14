import { useParams } from "react-router-dom";
import UseFetchRecipes from "../Hooks/UseFetchRecipes";
import { useEffect } from "react";
import RecipeHeader from "Components/RecipeHeader";
import RecipeInfo from "Components/RecipeInfo";
import Loading2 from "Components/Loading2";
import ErrorPage from "Components/ErrorPage";
const Recipes = () => {
  // extract id from useparams
  const { id } = useParams();
  // extract dataRequest,data,loadingState,ErrorState from UseFectchRecipes
  const [FetchRecipes, recipe, loading, errorPage] = UseFetchRecipes();

  // eslint-disable-next-line react-hooks/exhaustive-deps

  // on pageLoad i get the FetchRecipes request and id using useEffect
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    FetchRecipes(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // const recipes = recipe.find((r) => r.id === id);

  // console.log(recipe, loadingGif, errorPage);
  // if (loading) return <Loading/>;
  // if(errorPage) return <h1>THERE SEEMS TO BE AN ERROR</h1>
  return (
    <div className="bg-white">
      {loading && <Loading2/>}
      {errorPage && <ErrorPage/>}
      {recipe && (
        <>
          <RecipeHeader nutritionalFact={recipe.nutrition} name={recipe.name} />
          <RecipeInfo
            instructions={recipe.instructions}
            image={recipe.thumbnail_url}
          />
        </>
      )}
    </div>
  );
};

export default Recipes;
