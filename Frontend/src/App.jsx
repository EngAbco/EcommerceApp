import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomeScreen from "@/components/HomeScreen";  
import Login from '@/screens/userScreens/login';
import Layout from '@/screensLayout/userlayout/Layout';
import Register from '@/screens/userScreens/register';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeScreen />} />

        {/* Nested routes under /auth */}
        <Route path="/auth" element={<Layout />}>
          <Route path="login" element={<Login />} /> 
          {/* Notice: no "/" before login */}
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
