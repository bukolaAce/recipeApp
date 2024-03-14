import { useState } from "react";

// eslint-disable-next-line react/prop-types
const HeroSection = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleClick = () => {
    handleSearch(searchTerm);
    setSearchTerm("");
  };

  return (
    <>
      <div className="bg-green-800 font-[sans-serif] text-white p-6">
        <div className="grid items-center max-w-5xl mx-auto md:gap-0 md:grid-cols-2 max-md:max-w-md">
          <div className="max-md:text-center">
            <h3 className="text-2xl font-extrabold md:text-[3.7rem] md:leading-10">
              TASTE YUMMY
            </h3>
            <p className="mt-6 text-sm text-center">
              Unlock a world of flavors, step-by-step guidance, and delightful
              inspirations. From novice cooks to seasoned chefs, embark on a
              gastronomic adventure, exploring diverse cuisines and creating
              mouthwatering dishes that satisfy every palate. Cooking made
              joyful, effortless, and flavorful!"
            </p>
            <div className="mt-8 text-black bg-white flex px-1 py-1 rounded-full border border-green-800 overflow-hidden max-w-md mx-auto font-[sans-serif]">
              <input
                type="email"
                placeholder="Search Something..."
                className="w-full pl-4 text-lg bg-white outline-none"
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
              />
              <button
                type="button"
                className="bg-green-800 hover:bg-green-700 transition-all text-white text-sm rounded-full px-5 py-2.5"
                onClick={handleClick}
              >
                Search
              </button>
            </div>
          </div>
          <div className="md:h-[400px] rounded md:block hidden w-[90%] h-[90%]">
            <img
              src="https://amandascookin.com/wp-content/uploads/2021/07/Chocolate-Peanut-Butter-Balls-RC-500x500.jpg"
              className="object-contain w-full h-[80%] rounded"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
