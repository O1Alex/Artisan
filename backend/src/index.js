const {app,PORT} = require("./server")

app.listen(app.PORT, ()=>{
    console.log("Serveur démarré avec succès sur le"+ PORT)
});