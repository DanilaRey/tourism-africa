import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from "../Footer/Footer"
import pageRoutes from '../../routes';
import { Navigate, Routes, Route } from 'react-router-dom';
import "./Layout.css";

const Layout = () => {
  return (
    <div className='app__layout'>
        <Navbar routes={pageRoutes}/>
        <div className='app__layout-main'>
          <Routes>
            {pageRoutes.map((route, key) =>
              <Route
                element={route.element}
                path={route.path}
                name={route.name}
                key={key}
              />
            )}
            <Route
              path='*'
              element={<Navigate to="/home" replace/>}
            />
          </Routes>
          <Footer/>  
        </div>   
        
    </div>
  )
}

export default Layout