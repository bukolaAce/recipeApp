/* eslint-disable react/prop-types */
import { CardList } from "./CardList";

export const Card = ({ recipes }) => {
  return (
    <div className="grid grid-cols-1 mx-6 mt-0 bg-white sm:grid-cols-4">
      {recipes.map((recipe) => {
        return <CardList key={recipe.id} recipe={recipe} />;
      })}
    </div>
  );
};
