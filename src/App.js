import {
  createBrowserRouter,
  // createRoutesFromElements,
  RouterProvider,
  // Route
} from "react-router-dom";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import ProductPage from "./pages/Products";
import RootLayout from "./pages/Root";
import ProductDetailPage from './pages/ProductDetail';

// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<HomePage />} />
//     <Route path='/products' element={<ProductPage />} />
//   </Route>
// );

// const router = createBrowserRouter(routeDefinitions);

const router = createBrowserRouter([
  // {
  //   path: "/root",                 // абсолютний шлях
  //   element: <RootLayout />,
  //   errorElement: <ErrorPage/>,
  //   children: [                                                            
  //     { path: "/", element: <HomePage /> },                                //абсолютний шлях пишеться після домену+ слеш
  //     { path: "/products", element: <ProductPage /> },                     //абсолютний шлях пишеться після домену+ слеш
  //     { path: "/products/:productId", element: <ProductDetailPage /> },    //абсолютний шлях пишеться після домену+ слеш
  //   ],
  // },
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage/>,
    children: [
      // { path: "", element: <HomePage /> },                            //відносний шлях додається до кореневого
      { index: true, element: <HomePage /> },                           // index: true визначає дефолтний роутер який буде завантажений, якщо кореневий роутер активний
      { path: "products", element: <ProductPage /> },                   //відносний шлях
      { path: "products/:productId", element: <ProductDetailPage /> },  //відносний шлях
    ],
  },
  // {
  //   path: '/admin',
  //   children: [
  //     ...
  //   ]
  // }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
