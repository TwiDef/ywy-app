import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { filmCollectionType, NAVBAR_LIST } from "../constants";

import Layout from "./Layout";
import Home from "./pages/Home/Home";
import MovieCollectionList from "./pages/MovieCollectionList";
import MovieMainList from "./pages/MovieMainList";
import MyYwy from "./pages/MyYwy";

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
        {
          path: "/my-ywy",
          element: <MyYwy />
        },
        ...filmCollectionType.map((type) => ({
          path: `/${type.url}`,
          element: <MovieCollectionList />
        })),
        ...NAVBAR_LIST.slice(1, 4).map((type) => ({
          path: `/${type.url}`,
          element: <MovieMainList />
        }))
      ]
    }
  ])

  return (<RouterProvider router={router} />);
}

export default App;
