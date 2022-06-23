import React from 'react';
import { Outlet } from 'react-router-dom';

const TeachersAndFeatured = () => {  
  return (
    <div className="main-content">
        <Outlet />
    </div>
  );
}

export default TeachersAndFeatured;