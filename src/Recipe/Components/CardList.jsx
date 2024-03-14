/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
export const CardList = ({ recipe }) => {
  const { name, id, thumbnail_url} = recipe;
  const nav = useNavigate();

  const navRecipes = () => {
    nav(`/recipe/${id}`);
  };

  return (
    <>
      <div
        onClick={navRecipes}
        key={id}
        className="bg-white shadow-[0_2px_18px_-6px_rgba(0,0,0,0.2)]  max-w-sm rounded-lg mx-auto font-[sans-serif] overflow-hidden  mt-8 w-full sm:w-72  "
      >
        <img src={thumbnail_url} className="w-full" />
        <div className="px-4 my-6">
          <h3 className="text-lg font-semibold">{name}</h3>

          <button
            type="button"
            className="px-6 py-2 mt-4 text-sm font-semibold tracking-wider text-white bg-blue-600 border-none rounded outline-none hover:bg-blue-700 active:bg-blue-600"
          >
            {/* {topics[0].name} */}
            How To Make
          </button>
        </div>
      </div>
    </>
  );
};
