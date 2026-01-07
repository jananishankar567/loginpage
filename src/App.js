//import logo from './logo.svg';
import './App.css';
import { AuthProvider } from './components/AuthContext';
import {Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dasboard from './components/Dasboard';
import Protector from './components/Protector';

function App() {
  return (

   <AuthProvider>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dasboard" element={
        <Protector>
        <Dasboard />
        </Protector>
        } />
    </Routes>
   </AuthProvider>
  );
}

export default App;
