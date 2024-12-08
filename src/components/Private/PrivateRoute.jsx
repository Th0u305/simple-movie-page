import React, { useContext } from 'react';
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../Context/ContextProvider';
import "flyonui/flyonui";

const PrivateRoute = ({children}) => {

    const {pathname} = useLocation()

    const {user, loading} = useContext(AuthContext)

    if (loading) {
        return <span class="loading loading-spinner loading-lg"></span>;
    }
    if (user && user?.email) {
        return children;
    }

    return (
        <Navigate state={pathname} to='/login'></Navigate>
    );
};

export default PrivateRoute;