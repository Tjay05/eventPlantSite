import { useState } from 'react'
import { 
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';
import Navbar from './assets/layout/Navbar';
import AcademyWrap from './assets/pages/academy/Academy';
import CartWrapper from './assets/pages/cart/Cart';
import Contact from './assets/pages/contact/Contact';
import HomePage from './assets/pages/home/Homepage';
import PlanWrap from './assets/pages/planning/Planning';
import ShopWrap from './assets/pages/shop/Shop';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<Navbar/>}>
        <Route index element={<HomePage/>}/>
        <Route path='Shop' element={<ShopWrap/>} />
        <Route path='Contact' element={<Contact/>} />
        <Route path='Planning' element={<PlanWrap/>} />
        <Route path='Academy' element={<AcademyWrap/>} />
        <Route path='Cart' element={<CartWrapper/>} />
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
