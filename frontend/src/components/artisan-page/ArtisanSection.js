import React, { memo } from 'react'
import ArtisanCardBody from '../home-page/ArtisanCardBody';
import AboutSection from './AboutSection';


const ArtisanSection = memo (({artisan}) => {
    return (
        <div className="container"> 
            <div className='artisan-card p-4 mb-5 d-flex align-items'>
                <div className='card-body '>
                    <ArtisanCardBody artisan={artisan} />
                    <div className='artisan-siteweb pb-4'> {artisan?.site_web} </div>
                    <AboutSection artisan ={artisan}/>
                </div> 
                 <img src="/Artisan.jpg" className='card-image' alt={artisan?.nom}/>
            </div>     
        </div>

    )
});

export default ArtisanSection;
