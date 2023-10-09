const PaisControlador = require('../controllers/pais_controllers');
const paisCont = new PaisControlador();
const homeMarko = require('../views/home.marko');

module.exports = (aplicacao) => {

    // Evitar problema com o CORS
    aplicacao.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Origin', "http://localhost");
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        next();
    });

    /***************** ROTAS *****************/
           
    aplicacao.get('/', function(req, res){          
        res.marko(require('../views/home.marko'));
    });
    aplicacao.post('/paises', function(req, res){
        console.log("APERTOU!!!");
        paisCont.validaAcessoUsuario();
        console.log(paisCont.retornaSelect());
    });    
    /*
    aplicacao.post('/pais', function(req, res){        
        var a = document.getElementById('teste');
        a.innerHTML = "Hello world!";     
        paisCont.retornaSelect();
    });*/
}
