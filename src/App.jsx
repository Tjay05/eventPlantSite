import { useState } from 'react'
import { 
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';
import Navbar from './assets/layout/Navbar';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<Navbar/>}/>
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
