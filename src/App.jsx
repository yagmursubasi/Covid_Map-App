import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Detail from "./pages/detail";
import Layout from "./components/layout";

//Route`ları tanımlamak için createBrowserRouter fonksiyonunu kullanıyoruz
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/detail/:code", element: <Detail /> },
    ],
  },
]);
//RouterProvider ile router'ı uygulamaya ekliyoruz
const App = () => {
  return <RouterProvider router={router} />;
};

// const App = () => {
//   return <BrowserRouter>
//   <Routes>

//   </Routes>
//   </BrowserRouter>;
// };

export default App;
