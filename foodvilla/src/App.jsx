import About from './components/About';
import { Body } from './components/Body';
import Header from './components/Header';
import Weather from './components/Weather'
import Error from './components/Error';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';
import Profile from './components/Profile';

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Body />
    </>
  );
};

// Define your router
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          }
        ]
      },
      {
        path: "/contact",
        element: <Contact />,
      },

    ],
  },
  {
    path: "restaurant/:id",
    element: <RestaurantMenu />
  },
  {
    path: "/weather",
    element: <Weather />
  },

]);

// Export RouterProvider for rendering in main.jsx
export default function MainRouter() {
  return <RouterProvider router={appRouter} />;
}

//Concept of Outlet is important