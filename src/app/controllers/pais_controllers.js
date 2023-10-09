const Pais_dao = require('../BD/pais_dao');

var db = require('../../config/database');

class PaisControllers
{
    validaAcessoUsuario() 
    {
        return function(req, res){
            console.log("nome país do formulario controller = " + req.body.paises);            
            const paisDAO = new Pais_dao(db);
            paisDAO.selectNaTabelaPais(req.body.paises)
                .then (dados => {
                    if(dados > 0) {
                        console.log('Usuario existe!! Está validado');
                        res.redirect('/');
                    }                   
                })
                .catch(erro => {
                    console.log('USUÁRIO NÃO EXISTE NO BD!!');
                    res.redirect('/');
                })
        }
    }
    retornaSelect()
    {
        return function(req, res){
            selectNaTabelaPais(req.body.paises);
        }
    }
}
module.exports = PaisControllers;