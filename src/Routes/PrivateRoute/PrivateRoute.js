import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();



    if (!user) {
        return <Navigate to="/login"></Navigate>
    }
    return <Navigate to='/login' state={{ from: location }} replace />;
};

export default PrivateRoute;