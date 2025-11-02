import { memo } from 'react'
import { Link } from 'react-router';
import ArtisanCardBody from './ArtisanCardBody';

const ArtisanCard = memo (({artisan}) => {
    return (
        <Link to={`/artisan/${artisan.id}`} className='artisan-card p-3 mb-5'>
            <div className="card-body">
                <ArtisanCardBody artisan={artisan}/>
            </div>
        </Link>
    )
});

export default ArtisanCard;
