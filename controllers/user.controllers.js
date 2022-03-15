const { request , response } = require('express');


const userGet = ( req = request, res = response ) => {

    const query = req.query;
    
    res.json({
        msg: 'peticion get - desde Controlador',
        query
    })
}

const userPost = ( req = request, res = response ) => {

    const { nombre , apellido, edad } = req.body;
    
    res.json({
        msg: 'peticion Post - desde Controlador',
        body: {
            nombre,
            apellido,
            edad
        }
    })
}

const userPut = ( req = request, res = response ) => {

    const params = req.params
    
    res.json({
        msg: 'peticion Put - desde Controlador',
        param
    })
}

const userDelete = (req , res = response ) => {
    res.json({
        msg: 'peticion Delete - desde Controlador'
    })
}
module.exports = {
    userGet,
    userPost,
    userPut,
    userDelete
}