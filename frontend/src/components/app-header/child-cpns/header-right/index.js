import React, { memo } from "react";
import { useNavigate } from "react-router";

const HeaderRight = memo(() => {

const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        const query = e.target.element[0].value;
        navigate(`/artisan?search=${query}`);
    }

    return (
    <div classNameName="search-form">
        <form className="d-flex" role="search" onSubmit={handleSearch}>
        <input 
            className="form-control me-2" 
            type="search" 
            placeholder="Rechercher un Artisan" 
            aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
        </form>
    </div>
    )
})

export default HeaderRight;
