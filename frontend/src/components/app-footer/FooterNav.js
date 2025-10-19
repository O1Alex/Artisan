import React, { memo } from 'react';
import { Link } from "react-router";

const FooterNav = memo(() =>  {
    return ( 
        <div className=" row contact legal gy-2 gy-md-3 gx-md-4 pt-3">
            <div className=" col-12 col-md-6 col-lg-3">
                <Link className="nav-link" to="#">Mentions légales</Link>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
                <Link className="nav-link" to="#">Données personnelles</Link>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
                <Link className="nav-link" to="#">Accessibilité</Link>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
                <Link className="nav-link" to="#">Cookies</Link>
            </div>
        </div>
    )
});

export default FooterNav
