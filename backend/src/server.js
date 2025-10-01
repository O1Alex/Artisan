const express = require ('express');
require ('dotenv').config;
const { sequelize } = require("./config/database");
const router = require ("./routes/index");

const app = express();

const PORT = process.env.SERVER_PORT || 3000;

app.use(express.json());
app.use(express.urlencoded ({extended : true}));


//test si connexion a bdd réussie
sequelize
  .authenticate()
  .then(()=> {
    console.log('Connexion réussi.')
  })
  .catch (err)=> {
  console.error('Impossible de se connecter a la base de donnée', err);
}

//synchroniser bdd avec serveur
sequelize.sync({ alter:true})
  .then(()=> {
    console.log ("")
  })
  .catch(()=>{
    console.log("")
  })

//ecouter le serveur
app.use("api", router);

//afficher erreur présente 
app.use((err, req, res, next)=>{
    console.error('Erreur:' , err)
    res.status(500).json
      success: false,
      message: "Erreur server !",
})

app.listen

module.exports= app;
module.exports= PORT;