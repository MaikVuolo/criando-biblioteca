function filtraPalavra(paragrafo){
    return Object.keys(paragrafo).filter(chave => paragrafo[chave] > 1);
}

function exibePalavras (listaPalavras){
    let textoExibido = ""
    listaPalavras.forEach((paragrafo,indice) => {
        const palavras = filtraPalavra(paragrafo).join(", ");
        if(palavras !== ""){
        textoExibido += `O parágrafo ${indice +1} tem as seguintes palavras repetidas: ${palavras}\n`;}
    });
  return textoExibido;
}

export { exibePalavras }