import React from "react";
import "../styles/Layout.css";
import FooterBar from "../components/footer/FooterBar";

const Layout = ({ children }) => {
    return(
        <div className="container">
            <div className="main-content">
                {children}
            </div>
            <FooterBar/>
        </div>
    );
};

export default Layout;