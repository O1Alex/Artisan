import Erreur404 from "../views/Erreur404";
import HomePage from "../views/HomePage";

const routes = [
    {path: "/", element: <HomePage />},
    {path: "/artisans", element: <div>artisans</div>},
    {path: "/artisan/:id", element: <div>artisan</div>},
    {path: "/categorie/:id", element: <div> categorie </div>},
    {path: "*", element: <Erreur404 />},

]

export default routes;