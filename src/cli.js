import fs from "fs";
import trataErros from "./erros/trataErros.js";
import {separandoParagrafos} from "./index.js";
import { exibePalavras } from "./helpers.js";
import { Command } from "commander";
import path from "path";

const program = new Command();

program
    .version("0.0.1")
    .option("-t, --texto <string>","Caminho do texto a ser processado")
    .option("-d, --destino <string>","Caminho da pasta onde salvar o arquivo de resultados")
    .action((options) => {
        const { texto, destino} = options
        if (!texto || !destino){
            console.error("Erro , favor inserir caminho de origem e destino");
            program.help();
            return;
            }
            const caminhoTexto = path.resolve(texto)
            const caminhoDestino = path.resolve(destino)
            try {
                processaArquivo(caminhoTexto,caminhoDestino)
                console.log("Texto Processado com sucesso");
                
            } catch (erro) {
                console.log("ocorreu um erro no processamento", erro);
                }
       })

program.parse()

// const arquivo = process.argv;
// const link = arquivo[2];
// const local = arquivo[3];

function processaArquivo (texto,destino){
fs.readFile(texto,"utf-8",(erro,texto)=>{
   try{
    if (erro) throw erro;
       const resultado = separandoParagrafos(texto);
       salvaArquivo(resultado,destino);
    }catch(erro){
        console.log(trataErros(erro));
        }
     }
  )
}

async function salvaArquivo(listaPalavras, local) {
    const caminhoLocal = `${local}/resultado.txt`;
    const listaString = exibePalavras(listaPalavras)
    try{
        await fs.promises.writeFile(caminhoLocal,listaString);
        console.log("Arquivo criado");
    
    }catch(erro){
        throw erro;
    }
}