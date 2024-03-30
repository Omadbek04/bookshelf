import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Login, Register } from "./features";
import { Home, NotFound } from "./components";

function App() {
  const routes = createBrowserRouter([
    {
      index: true,
      element: <Home />,
      errorElement: <NotFound />,
    },
    {
      path: "register",
      element: <Register />,
    },
    {
      path: "login",
      element: <Login />,
    },
  ]);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
