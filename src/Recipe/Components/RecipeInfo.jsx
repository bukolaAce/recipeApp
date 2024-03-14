/* eslint-disable react/prop-types */

const RecipeInfo = ({ instructions, image }) => {
  return (
    <div className="md:flex md:flex-row flex-col-reverse   flex items-center justify-center md:w-1/2 mx-auto  md:gap-0 md:space-y-0 md:space-x-[-40px]">
      <div className="w-full p-4 mx-20 my-5 bg-gray-300 rounded md:mx-auto md:w-1/2">
        <div>
          <h3 className="font-bold text-black">INSTRUCTIONS</h3>
        </div>
        {instructions.map((instruction) => (
          <>
            <div
              key={instruction.position}
              className="flex items-center gap-3 border-b border-b-black "
            >
              <p className="text-lg font-bold text-black">{instruction.position}</p>
              <p className="py-3 text-sm font-bold text-black">
                {instruction.display_text}
              </p>
            </div>
          </>
        ))}
      </div>
      <div className="w-48 mx-auto mb-[-30px] z-10 md:w-80 md:m-0">
        <img src={image} alt="" className="w-full rounded" />
      </div>
    </div>
  );
};

export default RecipeInfo;
