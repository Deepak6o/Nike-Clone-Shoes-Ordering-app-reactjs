import "./App.css";
import "./index.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,Outlet } from "react-router-dom";
import ProductPage from "./components/ProductPage";

const App = () => {
  return (
    <>
      <Header />
      <Outlet/>
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/product",
        element:<ProductPage/>
      }
    ]
  }
])

export default appRouter;
