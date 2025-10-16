const routes = [
    {path: "/", element: <div>home</div>},
    {path: "/artisans", element: <div>artisans</div>},
    {path: "/artisan/:id", element: <div>artisan</div>},
    {path: "/categorie/:id", element: <div> categorie </div>},
    {path: "*", element: <div>not found</div>},

]

export default routes;