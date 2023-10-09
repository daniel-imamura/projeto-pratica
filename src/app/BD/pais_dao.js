class Pais_dao
{
    constructor(db)
    {
        this._db = db;
    }

    selectNaTabelaPais(paises) //Traz os dados do banco de dados sobre todos os usuários cadastrados
    {
        return new Promise((resolve, reject) => {
            var sqlSelectUsuarios = "SELECT * FROM Pais WHERE nomePais='" + paises + "'";
            console.log("SELECT MONTADO = " + sqlSelectUsuarios);
            this._db.query(sqlSelectUsuarios, function(erro, resultado) {
                if(resultado.length > 0) {
                    var dados = resultado.length;
                    resolve(dados);
                }
                else {
                    return reject('USUÁRIO NÃO EXISTE NO BD');
                }
            });
        })
    }        
}

module.exports = Pais_dao;