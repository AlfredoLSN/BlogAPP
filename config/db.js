if(process.env.NODE_ENV == "production"){
    // Nesse caso usei o MongoDB Atlas
    module.exports = {mongoURI:"mongodb+srv://<user>:<password>@blogapp-prod.wymeypi.mongodb.net/?retryWrites=true&w=majority"}
}else{
    //MongoDB na maquina local
    module.exports = {mongoURI:"mongodb://localhost/<nome do banco de dados>"}
}