import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomeScreen from "@/components/HomeScreen";  
import Login from '@/screens/userScreens/login';
import Layout from '@/screensLayout/userlayout/Layout';
import Register from '@/screens/userScreens/register';
import AdminLayout from './screensLayout/adminlayout/adminlayout';
import AdminDashboard from './screens/adminScreens/Dashboard';
import AdminProducts from './screens/adminScreens/Adminproducts';
import Listing from './screens/pagesScreens/Listing';
import Shopinglayout from './screensLayout/pageslayout/Shopinglayout';
import Shopingproducts from './screens/pagesScreens/Shopingproducts';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeScreen />} />

        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
        </Route>

        {/* Nested routes under /auth */}
        <Route path="/auth" element={<Layout />}>
          <Route path="login" element={<Login />} /> 
          {/* Notice: no "/" before login */}
          <Route path="register" element={<Register />} />
        </Route>

         <Route path="/shop" element={<Shopinglayout />}>
          <Route path="listing" element={<Listing />} /> 

           <Route path="Home" element={<Shopingproducts />} /> 
       
        </Route>
      </Routes>
    </div>
  )
}

export default App
