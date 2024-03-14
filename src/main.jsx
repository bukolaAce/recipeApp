import ReactDOM from "react-dom/client";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import App from "./App.jsx";
import AboutPage from "./Recipe/Pages/AboutPage.jsx";
import "./index.css";
import { Home } from "./Recipe/Pages/HomePage.jsx";
import Recipes from "./Recipe/Pages/Recipes.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/recipe/:id" element={<Recipes />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
