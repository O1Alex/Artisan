const {app,PORT} = require("./server")
console.log("test", PORT);
app.listen(PORT, ()=>{
    console.log("Serveur démarré avec succès sur le"+ PORT)
});