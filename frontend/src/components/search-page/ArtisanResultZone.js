import { memo, useEffect, useState } from 'react';
import apiService from '../../services/api';
import ArtisanCard from '../home-page/ArtisanCard';

const ArtisanResultZone = memo(({ nom })=>  {
    const [artisans, setArtisans]= useState([]);
    const [loading, setLoading]= useState(true);
    useEffect(() => {
        const fetchArtisansByName = async () => {
            try {
                setLoading(true);
                const artisansResult = await apiService.getArtisansByName(nom);
                setArtisans(artisansResult);
                setLoading(false);
            } catch (error) {
                console.log("Ereur lors du chargement des artisans", error);
                setLoading(false);
            }
        };
        fetchArtisansByName();
    }, [nom]);

    if (loading) {
        return <h1>Chargement des artisans...</h1>
    }

    if (artisans.length === 0){
        return (
            <p className='fw-bold'>Aucun artisan trouvé pour le nom "{nom}".</p>
        );
    }

    return (
        <div>
            <section className='artisan-header'>
                <h1>Ce que l'on vos propose selon votre recherche !</h1>
            </section>
            <section className='featured-artisans'>
                <div className='row justify-content-center pt-5'>  
                    {(artisans.map((artisan) => 
                        (<div key={artisan.id} className='card-container col-md-3'>
                            <ArtisanCard artisan={artisan}/>
                        </div>)
                    ))} 
                </div>
            </section>
        </div> 
    );
});

export default ArtisanResultZone;
