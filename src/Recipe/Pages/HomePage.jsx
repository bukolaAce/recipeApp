import { useEffect } from "react";
import { Card } from "./Components/Card";
import HeroSection from "./Components/HeroSection";
import { Loading } from "./Components/Loading";
import UseFetchRecipe from "./Hooks/UseFetchRecipe";
import ErrorPage from "./Components/ErrorPage";

export const Home = () => {
  const [FetchData, data, loading, errorPage] = UseFetchRecipe();
  const handleSearch = (searchTerm) => {
    if (searchTerm) { 
      FetchData(searchTerm);
    }
  };
  useEffect(() => {
    FetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="bg-white">
      <HeroSection handleSearch={handleSearch} />
      {loading && <Loading />}
      {data && <Card recipes={data} />}
      {errorPage && <ErrorPage/>}
    </div>
  );
};
