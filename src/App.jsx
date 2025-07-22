import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Applayout } from "./components/layout/Applayout";
import "./App.css"
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Country } from "./pages/country";
import { Contact } from "./pages/contact";
import { ErrorPage } from "./pages/ErrorPage";
import { CountryDetails } from "./components/layout/CountryDetails";

const App = () =>{

  const router = createBrowserRouter([

    {
      path:"/",
      element:<Applayout/>,
      errorElement:<ErrorPage />,
      children:[
        {
          path:"/",
          element:<Home />
        },
        {
          path:"/about",
          element:<About />
        },
        {
          path:"/country",
          element:<Country />
        },
        {
          path:"/country/:id",
          element:<CountryDetails />
        },
        {
          path:"/contact",
          element:<Contact />
        },
      ]
    }
   
  ])
  return <RouterProvider router={router} />

}

export default App;