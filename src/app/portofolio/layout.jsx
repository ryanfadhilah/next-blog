import React from 'react'
import styles from "./page.module.css";

const Layout = ({ children }) => {
    return (
        <div>
            <h1 className=" text-5xl font-medium">Our Works</h1>
            {children}
        </div>
    )
}

export default Layout