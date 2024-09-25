

function limpaPalavras(palavra){
    return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
}

export function separandoParagrafos(texto){
    const paragrafos = texto.toLowerCase().split("\n");
    const contagem = paragrafos.flatMap(paragrafo =>{
        if(!paragrafo)return [];
        return contagemDePalavras(paragrafo)
    })
    
    return contagem;
}

function contagemDePalavras(texto){
    const arrayDePalavras = texto.split(" ");
    const resultado = {};
    arrayDePalavras.forEach(palavra => {
        if(palavra.length >= 3){  
        const palavraLimpa = limpaPalavras(palavra)
        resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) +1}
    });
    return resultado;
    
}

