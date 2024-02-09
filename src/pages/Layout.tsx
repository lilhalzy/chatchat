import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

type Props = {}

const Layout = ({}:Props) => {
    return(
    <div>
        <Header />
        <Outlet />
    </div>
    )
}

export default Layout