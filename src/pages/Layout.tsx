import React from "react";
import { Outlet } from "react-router-dom";


type Props = {}

const Layout = ({}:Props) => {
    return(
    <div>
        <h1>Header</h1>
        <Outlet />
    </div>
    )
}

export default Layout