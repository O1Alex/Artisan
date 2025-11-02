import React, { memo } from 'react'
import ContactForm from '../components/artisan-page/ContactForm';
import ArtisanSection from '../components/artisan-page/ArtisanSection';

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

const ArtisanDetailPage = memo (() => {
    return (
        <div className="container"> 
            <div className="artisan-detail">
                <ArtisanSection />
            </div>
            <div className="contact-form">
                <ContactForm />
            </div>
        </div>

    )
});

export default ArtisanDetailPage;
