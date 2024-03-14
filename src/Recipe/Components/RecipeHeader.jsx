/* eslint-disable react/prop-types */
import RecipeNutritionalFacts from "./RecipeNutritionalFacts";
import { AiOutlineFire } from "react-icons/ai";
import { CiWheat } from "react-icons/ci";
import { BiCheese,BiCake } from "react-icons/bi";
import { IoFishOutline } from "react-icons/io5";


// eslint-disable-next-line react/prop-types
const RecipeHeader = ({ nutritionalFact,name }) => {
  const nutritionalFactArray = [
    {
      id: 1,
      // eslint-disable-next-line react/prop-types
      amount: nutritionalFact.calories,
      category: "calories",
      Icon: AiOutlineFire,
    },
    {
      id: 2,
      // eslint-disable-next-line react/prop-types
      amount: nutritionalFact.fat,
      category: "fats",
      Icon: BiCheese
    },
    {
      id: 3,
      // eslint-disable-next-line react/prop-types
      amount: nutritionalFact.carbohydrates,
      category: "carb",
      Icon: CiWheat 
    },

    {
      id: 4,
      // eslint-disable-next-line react/prop-types
      amount: nutritionalFact.protein,
      category: "proteins",
      Icon: IoFishOutline
    },
    {
      id: 5,
      // eslint-disable-next-line react/prop-types
      amount: nutritionalFact.sugar,
      category: "sugar",
      Icon: BiCake
    },
  ];

  return (
    <div className="flex-col items-center justify-center py-4 bg-white">
      <h1 className="text-2xl font-bold text-center text-black">
       {name}
      </h1>
      <div className="flex justify-center gap-2 my-2">
        {nutritionalFactArray.map((fact) => (
          <>
            <RecipeNutritionalFacts fact={fact} key={fact.id} />
          </>
        ))}
      </div>
    </div>
  );
};

export default RecipeHeader;
