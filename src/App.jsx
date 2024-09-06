import { useState } from 'react'
import { 
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';
import Navbar from './assets/layout/Navbar';
import Contact from './assets/pages/contact/Contact';
import HomePage from './assets/pages/home/Homepage';
import ShopWrap from './assets/pages/shop/Shop';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<Navbar/>}>
        <Route index element={<HomePage/>}/>
        <Route path='Shop' element={<ShopWrap/>} />
        <Route path='Contact' element={<Contact/>} />
      </Route>
    </Route>
  )
)

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
