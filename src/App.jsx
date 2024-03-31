import { RouterProvider, createBrowserRouter, useNavigate } from "react-router-dom";
import { Login, Register } from "./features";
import { Home, NotFound } from "./components";
import { useSelector } from "react-redux";
import { useEffect } from "react";
const PrivetRoute = ({ children }) => {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    !user.username && navigate("/login");
  }, []);
  return user.username && children;
};

function App() {
  const routes = createBrowserRouter([
    {
      index: true,

      element: (
        <PrivetRoute>
          <Home />
        </PrivetRoute>
      ),
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
