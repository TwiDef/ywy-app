import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Layout from "./Layout";

import { theme } from "./../theme";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/example",
          element: <div>Example page</div>,
        },
      ]
    }
  ])

  return (<RouterProvider router={router} />);
}

export default App;
