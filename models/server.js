const express = require('express');
const cors = require('cors');




class Server {


    constructor(){

        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //Middelware
        this.middelware();

        //Rutas de la aplicación
        this.routes();
    }

    middelware() {
        
        this.app.use( cors() );

        //Lectura y parseo del body
        this.app.use( express.json() ); //transforma la información recibida del body a json

        //Directorio publico
        this.app.use( express.static('public'));

    }

    routes() {
        
        this.app.use( this.usuariosPath , require('../routes/user.route'));        

    }

    listen() {
        this.app.listen( this.port , () => {
            console.log(`Puerto corriendo en ${this.port }`);
        } )
    }
}

module.exports =  Server;