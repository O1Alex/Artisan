import React, { memo } from "react";
import { Link } from "react-router";

const HeaderLeft = memo(() => {
    return (
        <div>
        <Link to="/" className="navbar-brand">
            <img src="Logo.png" alt="trouve_ton_artisan" width={200} Link/>
        </Link>

         <button className="navbar-toggler"
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation">

            <span className="navbar-toggler-icon"></span>
        </button>
        </div>
    );
})

export default HeaderLeft;
