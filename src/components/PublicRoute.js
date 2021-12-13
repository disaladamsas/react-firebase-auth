import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../store/authContext';

function PublicRoute() {
    const { currentUser } = useAuth();
    return currentUser ? <Navigate to='/' /> : <Outlet />;
}

export default PublicRoute;
