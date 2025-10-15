import React, { memo, useState, useRef, useEffect } from "react";
import { Link } from "react-router";

const categories = [
    {
        "id" : 1,
        "nom" : "Batîment"
    }, {
        "id" : 2,
        "nom" : "Service"
    },
]
const HeaderCenter = memo(() => {
    const [show, setShow] = useState(false);
    return (
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">  
                <li className="nav-item dropdown">
                    <button  
                        className="nav-link dropdown-toggle"
                        onClick={()=> setShow(!show)} 
                    >
                            Artisan
                    </button>
                    <ul 
                    className="dropdown-menu" 
                    style={{display: show ? "block" : "none"}}>  
                        {categories.map((item) => 
                            (<Link className="" to ={`/categorie/${item.id}`}> {item.nom} </Link>
                    ))}
                    </ul>
                  
                        {/* <ul className="dropdown-menu" style={{display: show ? "block" : "none"}}>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Action
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Another action
                                </a>
                            </li>
                            <li></li>
                            <li>
                                <a className="dropdown-item" href="#">
                                    Something else here
                                </a>
                            </li>
                        </ul> */}
                </li>
            </ul>
      </div>
    );
});

export default HeaderCenter;
