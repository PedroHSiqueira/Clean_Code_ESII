import { Batalha } from "./Batalha";
import { Oponente, Jogador } from "./Personagem";
import { Error, Funcionalidades, Estetica } from "./Utilitario";
const inputTeclado = require("prompt-sync")();

export const personagem: Jogador = new Jogador();
export const oponente: Oponente = new Oponente();
export const batalha: Batalha = new Batalha();

let opcao: number;

//----------------------------------------------
// Inicio do Jogo e escolha do nome

console.log(Estetica.regrasJogo());
opcao = inputTeclado("Aperte enter para começar o jogo ...");

console.log(Estetica.escolhaNomeJogador());
personagem.nome = inputTeclado(" ☛ Digite ele aqui:  ");

console.log(personagem.descricao());
inputTeclado("Aperte Enter para continuar ... ");

//----------------------------------------------
// Escolha do Pokemon Inicial

console.log(Funcionalidades.SelecaoPokemonInicial());

//----------------------------------------------
//Batalha

console.log(batalha.IniciarBatalha());

while (personagem.pokemon.vida > 0 && oponente.pokemon.vida > 0) {
  console.log(Estetica.ataques());
  opcao = +inputTeclado("Movimento Escolhido ☛ ");
  batalha.atacar(Number(opcao));
}

//Tela de Vitoria e Derrota
Funcionalidades.VerificaVida();

//------------------------------------------------
inputTeclado("Aperte Enter para continuar ... ");

while (personagem.pokemon.vida > 0) {
  console.log(Estetica.menuOpcoes());
  opcao = +inputTeclado("Opção Selecionada: ");

  while (opcao < 1 || opcao > 4 || isNaN(opcao)) {
    console.log(Error.VerificaSelecao());
    opcao = +inputTeclado("☛ Escolha uma opção: ");
  }

  switch (opcao) {
    case 1:
      oponente.pokemon.vida = 35;
      console.log(batalha.IniciarBatalha());

      while (personagem.pokemon.vida > 0 && oponente.pokemon.vida > 0) {
        console.log(Estetica.ataques());
        opcao = +inputTeclado("Movimento Escolhido ☛ ");
        batalha.atacar(opcao);
      }

      Funcionalidades.VerificaVida();

      inputTeclado("Pressione enter para continuar ... ");
      break;

    case 2:
      console.clear();
      console.log(Funcionalidades.SelecaoPokemonInicial());
      break;

    case 3:
      console.clear();
      console.log(Estetica.informacoesJogador());
      inputTeclado("Pressione enter para continuar ... ");
      break;

    case 4:
      personagem.pokemon.vida = 0;
      console.clear();
      console.log(Estetica.finalizacaoJogo());
      break;
  }
}
