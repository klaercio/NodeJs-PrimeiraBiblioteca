import chalk from 'chalk';
import fs from 'fs';

/* console.log(chalk.green('Vamos Começar!'));

const paragragfo = 'Texto retornado por uma função';

console.log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));

function texto(string) {    
    return string;
}

console.log(texto(paragragfo)); */

function tratarErro(erro) {
    throw new Error(chalk.red(erro.code, 'não há arquivo no caminho'));
}

function pegaArquivo(caminhoDoArquivo) {
    fs.readFile(caminhoDoArquivo, 'utf-8', (err, data) => {
        if (err) 
            return tratarErro(err);
        console.log(chalk.green(data));    
    })
}

pegaArquivo('./arquivos/texto1.md');