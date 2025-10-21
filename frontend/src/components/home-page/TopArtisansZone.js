import { memo, useEffect, useState } from 'react';
import ArtisanCard from './ArtisanCard';
import apiService from '../../services/api';

const TopArtisansZone = memo(()=>  {

const [topArtisans, settopArtisans] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
    const fetchtopArtisans = async () => {
        try {
            const result = await apiService.getTopArtisans();
            settopArtisans(result);
            setLoading(false);
        } catch (err) {
            console.log("Erreur lors du chargement des artisans:", err);
        }
    };
    fetchtopArtisans();
},[]);


    return (
        <section className='featured-artisans'>
            <h2 className='p-5'>Les Artisans du Mois !</h2>
            <div className='row'>
                {loading ? (<p>Chargement des artisans...</p>) : 
                (topArtisans.map((artisan) => 
                        (<div key={artisan.id} className='card-container col-md-4'>
                            <ArtisanCard artisan={artisan}/>
                        </div>)
                ))} 
            </div>
        </section> 
    );
});

export default TopArtisansZone;
