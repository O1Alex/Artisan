import { memo } from 'react'

const ArtisanCard = memo (({artisan}) => {
    return (
        <div className="card ">
            <div className="card-body">
                <h5 className="card-title">{artisan.nom}</h5>
                    <div>{artisan.Specialite.nom}</div>
                    <div>{artisan.ville}</div>
                    <div>{artisan.note}</div>
            </div>
        </div>
    )
});

export default ArtisanCard;
