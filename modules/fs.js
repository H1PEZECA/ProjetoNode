const { error } = require("console");
const fs = require("fs");
const path = require("path");

//Criar pasta
// fs.mkdir(path.join(__dirname, '/teste'), (error) => {
//     if (error){
//         return console.log('Erro: ', error);
//     }
//     console.log('Pasta criada com sucesso!');
// })

// Criar arquivo
fs.writeFile(
  path.join(__dirname, "/teste", "teste.txt"),
  "Olá, Zeca!",
  (error) => {
    if (error) {
      return console.log("Erro: ", error);
    }
    console.log("Arquivo criado com sucesso!");
    // Adicionar conteúdo ao arquivo
    fs.appendFile(
      path.join(__dirname, "/teste", "teste.txt"),
      "Olá, Zeca!",
      (error) => {
        if (error) {
          return console.log("Erro: ", error);
        }
        console.log("Arquivo alterado com sucesso!");
        // Ler arquivo
        fs.readFile(
          path.join(__dirname, "/teste", "teste.txt"),
          "utf-8",
          (error, data) => {
            if (error) {
              return console.log("Erro: ", error);
            }
            console.log(data);
          }
        );
      }
    );
  }
);

