import ArtisanDetailPage from "../views/ArtisanDetailPage";
import ArtisanSearchPage from "../views/ArtisanSearchPage";
import CategoriePage from "../views/CategoriePage";
import ErrorPage from "../views/ErrorPage";
import HomePage from "../views/HomePage";
import Maintenance from "../views/WaitingPage";
// import Maintenance from "../views/Maintenance";

const routes = [
    {path: "/", element: <HomePage />},
    {path: "/artisans", element: <ArtisanSearchPage />},
    {path: "/artisan/:id", element: <ArtisanDetailPage />},
    {path: "/categorie/:id", element: <CategoriePage />},
    {path: "/maintenance", element: <Maintenance />},
    {path: "*", element: <ErrorPage />},

]

export default routes;