import React, { memo } from 'react'
import ArtisanCardBody from '../home-page/ArtisanCardBody';
import AboutSection from './AboutSection';

const artisan = {
    id: 11,
    nom: "Ernest Carignan",
    specialite_id: 11,
    note: "5.0",
    ville: "Le Puy-en-Velay",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec.",
    email: "e-carigan@hotmail.com",
    site_web: "http:&#x2F;&#x2F;erhzeh.fr",
    top: false,
    Specialite: {
        id: 11,
        nom: "Ferronier",
        categorie_id: 3,
    }
}

const ArtisanSection = memo (({artisan}) => {
    return (
        <div className="container"> 
            <div className='artisan-card p-3 mb-5'>
                <img src="/Artisan.jpg" className='card-image' alt={artisan?.nom}/>
                <div className='card-body'>
                    <ArtisanCardBody artisan={artisan} />
                    <div className='artisan-siteweb'> {artisan?.site_web} </div>
                    <AboutSection artisan ={artisan}/>
                </div>
               
            </div>
        </div>

    )
});

export default ArtisanSection;
