import { Outlet } from "react-router-dom";

import NavBar from "./Recipe/Components/NavBar";
// import Footer from "./CodeAlong/Recipe/Components/Footer";

function App() {
  return (
    <div className="bg-white">
      <NavBar />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
