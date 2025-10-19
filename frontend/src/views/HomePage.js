import { memo } from 'react';
import StepsIntroduction from '../components/home-page/StepsIntroduction';

const HomePage = memo (() => {

    const steps =[
        {   stepHeader:"1- Choisir la catégorie d'artisant dans le menu",
            stepDescription:"Il suffira ici de choisir une des 4 catégories afin d'accéder aux artisans qui répondront a vos attentes."
        },{
            stepHeader:"2- Choisir un artisan",
            stepDescription:"Une liste complète d'artisans sera mise à votre disposition. Il ne vous restera plus qu'à sélectionner celui qui répondra  le mieux à vos besoins afin d'accéder à sa page et à plus de détails le concernant."
        },{
            stepHeader:"3- Le contacter via le formulaire de contact",
            stepDescription:"Une fois sur la page de votre artisan, un formulaire de contact sera mis à votre disposition afin de pouvoir échanger avec lui et lui exposer vos besoins/attentes."
        },{
            stepHeader:"4- Une réponse sera apportée sous 48H",
            stepDescription:"Dernière étape, la plus simple et aussi la plus compliquée, l'attente ! Heureusement nous vous assurons une réponse sous environ 48H afin de pouvoir vous organiser et planifier vos  semaines."
        }
    ]

    return ( 
        <div className='container'> 
            <StepsIntroduction items={steps}/>
        </div> 
    );
});

export default HomePage;
