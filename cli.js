import chalk from 'chalk';
import validaUrls from './http-validacao.js';
import pegaArquivo from './index.js';

const caminho = process.argv;

async function processaTexto(caminhoDeArquivo) {
    const resultado =  await pegaArquivo(caminhoDeArquivo[2]);

    if (caminho[3]==='validar')
        console.log(chalk.yellow('links validados'), await validaUrls(resultado));
    else
        console.log(chalk.yellow('Lista De Links'), resultado);
}

processaTexto(caminho);