const path  = require('path');

//Nome do arquivo atual
console.log(path.basename(__filename));

//Diretório atual
console.log(path.dirname(__filename));

//Extensão do arquivo atual
console.log(path.extname(__filename));

//Criar objeto path
console.log(path.parse(__filename));

//Juntar caminhos
console.log(path.join(__dirname, 'index', 'index.html'));