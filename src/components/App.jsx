import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { filmCollectionType } from "../constants";

import Layout from "./Layout";
import Home from "./pages/Home/Home";

import MovieCollectionList from "./pages/MovieCollectionList";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        ...filmCollectionType.map((type) => ({
          path: `/${type.url}`,
          element: <MovieCollectionList />
        }))

      ]
    }
  ])

  return (<RouterProvider router={router} />);
}

export default App;
