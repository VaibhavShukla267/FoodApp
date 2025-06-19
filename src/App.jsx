import "./App.css";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { About } from "./Components/HeaderComponents/About";
import { ContactUS } from "./Components/HeaderComponents/ContactUs";
import { ErrorElement } from "./Components/ErrorElement";
import { ResturantDetail } from "./Components/BodyComponents/RestaurantDetail";

export const App = () => {
  return (
    <>
      <Header />
      {/* <Body /> */}
      <Outlet />
      <Footer />
    </>
  );
};

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContactUS />,
      },
      {
        path: "/restaurants/:resId",
        element: <ResturantDetail />,
      },
    ],
    errorElement: <ErrorElement />,
  },
]);
