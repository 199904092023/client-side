import React  from 'react'
import { getItem, KEY_ACCESS_TOKEN } from '../utils/localStoragemanager'
import { Navigate, Outlet } from 'react-router-dom';

const RequireUser=()=> {
    let user = getItem(KEY_ACCESS_TOKEN);
    return (
        user ? <Outlet/> : <Navigate to='/login'/>
    )

}

export default RequireUser;