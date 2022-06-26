import Home from "./pages/Home";
import Register from "./pages/Register";
import Reset from "./pages/Reset";
import Login from "./pages/Login";

const routes = [
  {
    path: "/dashboard",
    element: <Home />,
    exact: true,
  },
  {
    path: "/register",
    element: <Register />,
    exact: true,
  },
  {
    path: "/reset",
    element: <Reset />,
    exact: true,
  },
  {
    path: "/login",
    element: <Login />,
    exact: true,
  },
  {
    path: "/*",
    element: <Home />,
    exact: true,
  },
];

export { routes };
