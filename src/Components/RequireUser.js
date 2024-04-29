import React  from 'react'
import { getItem, KEY_ACCESS_TOKEN } from '../utils/localStoragemanager'


function RequireUser() {
    const user = getItem(KEY_ACCESS_TOKEN);
    return (
        user ? <Outlet />  : <Navigate to="Login"/> 
    )

}

export default RequireUser;