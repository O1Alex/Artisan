import { memo, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import apiService from '../services/api';
import ArtisanCard from '../components/home-page/ArtisanCard';

const CategoriePage = memo (() => {
    const { id } = useParams();
    const [categorie, setCategorie]= useState(null);
    const [artisans, setArtisans]= useState([]);
    const [loading, setLoading]= useState(true);
    useEffect(() => {
        const fetchArtisansByCategorie = async () => {
            try {
                setLoading(true);
                const categorieResult = await apiService.getCategorieById(id);
                setCategorie(categorieResult);
                const artisansResult = await apiService.getArtisansByCategorieId(id);
                setArtisans(artisansResult);
                setLoading(false);
            } catch (err) {
               console.error("Erreur lors du chargement des artisans:", err);
               setLoading(false);
            }
        };
        if (id) {
            fetchArtisansByCategorie();
        }
    }, [id]);

    return ( 
        <div className='container'> 
            <section className='categorie-header'>
                <h1>{`Nos artisans dans le domaine "${categorie?.nom}"`}</h1>
                <p className='text-intro font-weight-light font-italic pt-4'>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eaquat." 
                </p>
            </section>
            <section className='featured-artisans'>
                <div className='row'>
                    {loading ? (<p>Chargement des artisans...</p>) : 
                    (artisans.map((artisan) => 
                        (<div key={artisan.id} className='card-container col-md-4'>
                            <ArtisanCard artisan={artisan}/>
                        </div>)
                    ))} 
                </div>
            </section> 
        </div> 
    );
});

export default CategoriePage;
