import { useNavigate } from "react-router-dom";
const AboutPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <>
      <div className="bg-[#166534] text-white w-full font-[sans-serif] min-h-screen">
        <div className="grid  md:grid-cols-2 gap-4 items-center md:max-h-[475px] overflow-hidden md:py-10">
          <div className="px-6 ">
            <h1 className="text-2xl font-bold sm:text-4xl">
              A Recipe App That Allows You To:
            </h1>
            <p className="mt-4 text-2xl text-white">1. Get a List Of Dishes</p>
            <p className="mt-4 text-2xl text-white">
              2. Search For A Particular Dish
            </p>
            <p className="mt-4 text-2xl text-white">
              {" "}
              3. Get Instructions on How to Make A Dish
            </p>

            <button
              type="button"
              className="px-6 py-3 mt-10 text-sm font-semibold tracking-wider text-white bg-green-800 border rounded outline-none hover:bg-gray-700"
              onClick={handleClick}
            >
              Get started
            </button>
          </div>
          <div className="px-5">
            <img
              src="https://www.foodandwine.com/thmb/x4Yc-a62IKvDjCEHv_4EWxoLvks=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/chocolatecake-527e27ec43fc4c7b92015190383bf0fb.jpg"
              className="object-cover w-full h-full shrink-0 rounded-xl"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
