import pegaArquivo from '../index.js';

const arrayResult = [
    {
        FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
    }
]

describe('pegaArquvo::', ()=> {
    it('deve ser uma função', ()=>{
        expect(typeof pegaArquivo).toBe('function');
    })
    it('deve retornar array com resultados', async ()=> {
        const resultado = await pegaArquivo('./teste/arquivos/texto1.md');
        console.log(resultado);
        expect(resultado).toEqual(arrayResult);
    })
    it('deve retornar mensagem "não há links"', async () => {
        const resultado = await pegaArquivo('./teste/arquivos/texto1_semlinks.md');
        expect(resultado).toBe('Arquivo não contem links');
    })
})
