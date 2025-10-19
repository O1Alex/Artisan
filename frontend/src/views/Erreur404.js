import React, { memo } from 'react'

const Erreur404 = memo(() => {
    return (
        <div className='erreur '>
           <img src="Erreur 404.jpg" alt="Erreur 404" width={400}/> 
           <p>Oops ! Cette page est introuvable.</p>
        </div>
        
    )
});

export default Erreur404;
