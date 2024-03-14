/* eslint-disable react/prop-types */
const RecipeNutritionalFacts = ({ fact }) => 
{

  const {Icon} =fact
  return (
    <>
      <div className="items-center justify-center hidden gap-1 text-black md:flex">
        <Icon/>
      
        <h1 className="text-sm font-bold text-black">{fact.amount}</h1>
        <h1 className="text-black">{fact.category}</h1>
      </div>
    </>
  );
};

export default RecipeNutritionalFacts;
