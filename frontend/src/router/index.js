import ErrorPage from "../views/ErrorPage";
import HomePage from "../views/HomePage";
// import Maintenance from "../views/Maintenance";

const routes = [
    {path: "/", element: <HomePage />},
    {path: "/artisans", element: <div>artisans</div>},
    {path: "/artisan/:id", element: <div>artisan</div>},
    {path: "/categorie/:id", element: <div> categorie </div>},
    // {path: "", element: <Maintenance />},
    {path: "*", element: <ErrorPage />},

]

export default routes;