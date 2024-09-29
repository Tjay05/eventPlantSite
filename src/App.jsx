import { 
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';
import AdminWrapper from './assets/layout/AdminWrap';
import EnrollWrapper from './assets/layout/EnrollmentWrap';
import Navbar from './assets/layout/Navbar';
import OrdersWrapper from './assets/layout/OrdersWrap';
import ProductWrapper from './assets/layout/ProductWrap';
import AcademyWrap from './assets/pages/academy/Academy';
import AcceptedEnroll from './assets/pages/admin/Accept';
import BouquetCollection from './assets/pages/admin/Bouquet';
import Dashboard from './assets/pages/admin/Dashbpard';
import DeliveredOrders from './assets/pages/admin/DelOrders';
import GownCollection from './assets/pages/admin/Gowns';
import Login from './assets/pages/admin/Login';
import MagazineCollection from './assets/pages/admin/Magazines';
import PendingEnrolls from './assets/pages/admin/Pend';
import PendingOrders from './assets/pages/admin/PendOrdes';
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
        <Route element={<EnrollWrapper/> }>
          <Route path='Pending' element={<PendingEnrolls/>} />
          <Route path='Accepted' element={<AcceptedEnroll/>} />
        </Route>
        <Route element={<OrdersWrapper/>}>
          <Route path='Pending-orders' element={<PendingOrders/>} />
          <Route path='Delivered' element={<DeliveredOrders/>} />
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
