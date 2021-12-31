var utilizadores = require("./Models/utilizadores")
module.exports = function autenticacao(req, res, next) {
    var dados_login = req.headers.authorization; //variável para receber o login, que metemos no header no Insomnia
    console.log("Dados codificados: " + dados_login)
    console.log("");
    if (!dados_login) {
        res.status(401).send("Login não foi efectuado! Faça login para ter acesso!");
    } else {
        var dados = dados_login.split(' ');
        console.log("Separação de dados: "+dados);
        console.log("");

        var buffer_dados = new Buffer.from(dados[1], 'base64').toString().split(':');
        console.log("Dados descodificados e concatenados: "+buffer_dados)
        console.log("");

        var username = buffer_dados[0];
        var password = buffer_dados[1];
        console.log("user: "+username);
        console.log("pass: "+password);
        console.log("");

        utilizadores.findOne({ user: username, password: password }).then(result => {
            if (result != null) {
                next()
            } else {
                res.setHeader('WWW-Authenticate', 'Basic')
                res.status(401).send("Utilizador ou password incorrectos!")
            }
        })
}
};