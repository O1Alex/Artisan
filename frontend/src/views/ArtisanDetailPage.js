import { memo, useEffect, useState } from 'react'
import ContactForm from '../components/artisan-page/ContactForm';
import ArtisanSection from '../components/artisan-page/ArtisanSection';
import { Link, useParams } from 'react-router';
import apiService from '../services/api';


const ArtisanDetailPage = memo (() => {
    const {id} = useParams();
    const [artisan, setArtisan] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchArtisanById = async () => {
            try {
                //fetch artisan by id
                const result = await apiService.getArtisanById(id);
                setArtisan(result);
                setLoading(false);
            } catch (err) {
                console.error("Erreur lors du chargement de l'artisan:", err);
                setLoading(false);
            }
        };
        if (id) {
            fetchArtisanById();
        };
    }, [id]);

        if (loading) {
        return <h1>Chargement des artisans...</h1>
        };
        if (!artisan) {
            return (
                <div className='container'>
                    <p>Cet artisan n'existe pas...</p>
                    <Link to= "/" className="btn">
                        Retour à la page d'accueil
                    </Link>
                </div>
            )
        };

    return (
        <div className="container"> 
            <div className="artisan-detail pt-4 pb-4">
                <ArtisanSection artisan={artisan}/>
            </div>
            <div className="contact-form pb-5 mb-4">
                <ContactForm artisan={artisan}/>
            </div>
        </div>
    
    );
});

export default ArtisanDetailPage;
