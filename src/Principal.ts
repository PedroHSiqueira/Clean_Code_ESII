import { Batalha } from "./Batalha";
import { Oponente, Jogador } from "./Personagem";
import { Error, Funcionalidades, Estetica } from "./Utilitario";
const teclado = require("prompt-sync")();

export const personagem: Jogador = new Jogador();
export const oponente: Oponente = new Oponente();
export const batalha: Batalha = new Batalha();

let option: number;

//----------------------------------------------
// Inicio do Jogo e escolha do nome

console.log(Estetica.regras());
option = teclado("Aperte enter para começar o jogo ...");

console.log(Estetica.nome());
personagem.nome = teclado(" ☛ Digite ele aqui:  ");

console.log(personagem.descricao());
teclado("Aperte Enter para continuar ... ");

//----------------------------------------------
// Escolha do Pokemon Inicial

console.log(Funcionalidades.SelecaoPokemon());

//----------------------------------------------
//Batalha

console.log(batalha.Iniciar());

while (personagem.pokemon.vida > 0 && oponente.pokemon.vida > 0) {
  console.log(Estetica.ataques());
  option = +teclado("Movimento Escolhido ☛ ");
  batalha.atacar(Number(option));
}

//Tela de Vitoria e Derrota
Funcionalidades.VerificaVida();

//------------------------------------------------
teclado("Aperte Enter para continuar ... ");

while (personagem.pokemon.vida > 0) {
  console.log(Estetica.menuOpcoes());
  option = +teclado("Opção Selecionada: ");

  while (option < 1 || option > 4 || isNaN(option)) {
    console.log(Error.VerificaSelecao());
    option = +teclado("☛ Escolha uma opção: ");
  }

  switch (option) {
    case 1:
      oponente.pokemon.vida = 35;
      console.log(batalha.Iniciar());

      while (personagem.pokemon.vida > 0 && oponente.pokemon.vida > 0) {
        console.log(Estetica.ataques());
        option = +teclado("Movimento Escolhido ☛ ");
        batalha.atacar(option);
      }

      Funcionalidades.VerificaVida();

      teclado("Pressione enter para continuar ... ");
      break;

    case 2:
      console.clear();
      console.log(Funcionalidades.SelecaoPokemon());
      break;

    case 3:
      console.clear();
      console.log(Estetica.informacoes());
      teclado("Pressione enter para continuar ... ");
      break;

    case 4:
      personagem.pokemon.vida = 0;
      console.clear();
      console.log(Estetica.finalizacao());
      break;
  }
}
