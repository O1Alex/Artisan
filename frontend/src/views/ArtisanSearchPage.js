import { memo } from 'react';
import { useLocation } from 'react-router';
import ArtisanResultZone from '../components/search-page/ArtisanResultZone';

const ArtisanSearchPage = memo (() => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const nom = searchParams.get("search");

    return ( 
        <ArtisanResultZone nom={nom}/>
    );
});

export default ArtisanSearchPage;
