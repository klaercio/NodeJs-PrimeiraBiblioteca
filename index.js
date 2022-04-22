import chalk from 'chalk';
import fs, { link } from 'fs';
import { text } from 'stream/consumers';

/* console.log(chalk.green('Vamos Começar!'));

const paragragfo = 'Texto retornado por uma função';

console.log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));

function texto(string) {    
    return string;
}

console.log(texto(paragragfo)); */

function extraiLinks(texto) {
    const regex = /\[([^\]]*)\]\(([^\)]*)\)/gm;
    const arrayResultados = [];

    let temp;

    while ((temp = regex.exec(texto)) !== null) {
        arrayResultados.push({[temp[1]]: temp[2]});
    }

    return arrayResultados;
}
 
 function tratarErro(erro) {
    throw new Error(chalk.red(erro.code, 'não há arquivo no caminho'));
}

async function pegaArquivo(caminhoDoArquivo) {
    try {
        const texto = await fs.promises.readFile(caminhoDoArquivo, 'utf-8');
        console.log(extraiLinks(texto)); 
    } catch(erro) {
        tratarErro(erro);
    }
}  

/* async function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    try {
      const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
      console.log(chalk.green(texto))
    } catch(erro) {
      trataErro(erro);
    } finally {
      console.log(chalk.yellow('operação concluída'));
    }
} */

/* function pegaArquivo(caminhoDoArquivo) {
    fs.promises
    .readFile(caminhoDoArquivo, 'utf-8')
    .then((texto)=> {
        console.log(chalk.green(texto));})
    .catch((erro) => {
        tratarErro(erro);})
} */

/* function pegaArquivo(caminhoDoArquivo) {
    fs.readFile(caminhoDoArquivo, 'utf-8', (err, data) => {
        if (err) 
            return tratarErro(err);
        console.log(chalk.green(data));    
    })
} */

pegaArquivo('./arquivos/texto1.md');
