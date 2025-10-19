import React, { memo, useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import apiService from "../../../../services/api";


const HeaderCenter = memo(() => {
    const location = useLocation();
    const [categories, setCategories] = useState([]);
       
    useEffect (()=> {
        const fetchCategories = async () => {
            try {
                const res = await apiService.getCategories();
                setCategories(res);
            } catch (error) {
                console.log("Erreur lors du 'fetch' Categories:", error);
            }
        }
        fetchCategories();
    }, []);

    return (
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-nav mx-auto">  
                    {categories.map((categorie) => (
                        <li className="nave-item" key={categorie.id}>
                            <Link className={`nav-link  ${location.pathname === `/categorie/${categorie.id}` ? 'active' : ''}`}
                            to ={`/categorie/${categorie.id}`}> 
                                {categorie.nom} 
                            </Link>
                        </li>
                    ))}
            </div>
      </div>
    );
});

export default HeaderCenter;
