import React, { StrictMode } from 'react'
import App from './App.jsx'
import './index.css'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProductList from './ProductCompo/ProductList.jsx'
import AddProduct from './ProductCompo/AddProduct.jsx'
import CategoryList from './ProductCompo/CategoryList.jsx'

const router = createBrowserRouter([
  {path:"/", element:<App/>, children:[
    {path:"/Product_list",element: <ProductList/> },
    {path:"/Add_Product",element: <AddProduct/>},
    {path:"/Category_List",element: <CategoryList/>},
  ]}
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>
  </React.StrictMode>,
)
