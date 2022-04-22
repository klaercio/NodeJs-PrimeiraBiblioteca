import fetch from "node-fetch";

function manejaErros(err) {
    throw new Error(err.message);
}

async function checaStatus(arrayUrls) {
    try {
        const arrayStatus = await Promise
        .all(arrayUrls
            .map(async url => {
                const res = await fetch(url);
                return res.status; 
        }))
        return arrayStatus;
    }catch(erro) {
        manejaErros(erro);
    }
}

function geraArrayDeUrls(arrayLinks) {
    //Object.values(objeto)
    return arrayLinks
    .map(objeto => Object.
        values(objeto).join());
}

export default async function validaUrls(arrayLinks) {
    const links = geraArrayDeUrls(arrayLinks);
    const statusLinks = await checaStatus(links);
    const resultados = arrayLinks
    .map((objeto, indice) => ({ 
        ...objeto,
        status: statusLinks[indice]
    }));

    return resultados;
}