var fs = require('fs');
    module.exports = {
  ler: function(){
    return new Promise(function (resolve, reject) {
        fs.readFile('ficheiro_menu.txt', 'utf8', function(err, contents) { 
            console.log(contents);
            if (contents!=""){
            resolve(JSON.parse(contents));
           }
        });
        });
   
    
    },
   gravar: function (dados){
    fs.writeFile("ficheiro_menu.txt", dados, (err) => { 
        if (err != null) console.log(err);
        });
    }
    }