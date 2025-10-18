import React, { memo } from "react";
import { useNavigate } from "react-router";

const HeaderRight = memo(() => {

const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        console.log(e);
        const query = e.target.elements[0].value;
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
        <button className="btn btn-outline-primary" type="submit">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
            </svg>
        </button>
        </form>
        
    </div>
    )
})

export default HeaderRight;
