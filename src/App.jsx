import { useState } from 'react'
import { 
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';
import AdminWrapper from './assets/layout/AdminWrap';
import Navbar from './assets/layout/Navbar';
import ProductWrapper from './assets/layout/ProductWrap';
import AcademyWrap from './assets/pages/academy/Academy';
import BouquetCollection from './assets/pages/admin/Bouquet';
import Dashboard from './assets/pages/admin/Dashbpard';
import GownCollection from './assets/pages/admin/Gowns';
import Login from './assets/pages/admin/Login';
import MagazineCollection from './assets/pages/admin/Magazines';
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
      <Route path='Admin' element={<AdminWrapper/>}>
        <Route index element={<Login/>}/>
        <Route path='Dashboard' element={<Dashboard/>} />
        <Route element={<ProductWrapper/>}>
          <Route path='Gowns' element={<GownCollection/>} />
          <Route path='Bouquet' element={<BouquetCollection/>} />
          <Route path='Magazine' element={<MagazineCollection/>} />
        </Route>
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
