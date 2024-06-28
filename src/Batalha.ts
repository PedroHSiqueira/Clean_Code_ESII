import { Bulbasaur, Charmander, Squirtle } from "./Pokemon";
import { oponente, personagem } from "./Principal";
import { Estetica } from "./Utilitario";
const teclado = require("prompt-sync")();

export let rodada: number = 1;
let option: number;

export class Batalha {
  public Iniciar(): void {
    console.clear();
    console.log(Estetica.confirmacao());
    console.log(oponente.descricao());
    teclado("Aperte Enter para continuar ... ");
  }

  public atacar(ataqueEscolhido: number) {
    switch (ataqueEscolhido) {
      case 1:
        if (personagem.pokemon.nome == "Charmander") {
          (personagem.pokemon as Charmander).fortalecimento();
        } else if (oponente.pokemon.nome == "Squirtle") {
          (oponente.pokemon as Squirtle).fortalecimento();
        } else {
          (oponente.pokemon as Bulbasaur).fortalecimento();
        }
        break;
      case 2:
        if (personagem.pokemon.nome == "Charmander") {
          (personagem.pokemon as Charmander).ataqueum();
        } else if (oponente.pokemon.nome == "Squirtle") {
          (oponente.pokemon as Squirtle).ataqueum();
        } else {
          (oponente.pokemon as Bulbasaur).ataqueum();
        }
        break;
      case 3:
        if (personagem.pokemon.nome == "Charmander") {
          (personagem.pokemon as Charmander).ataqueDois();
        } else if (oponente.pokemon.nome == "Squirtle") {
          (oponente.pokemon as Squirtle).ataqueDois();
        } else {
          (oponente.pokemon as Bulbasaur).ataqueDois();
        }
        break;
    }

    if (oponente.pokemon.vida > 0) {
      option = +teclado("Passar o turno para o oponente, clique enter ... ");
      console.clear();
      console.log(Estetica.dano());
      option = +teclado("Voltar para o seu turno, clique enter ... ");
      console.clear();
    }

    rodada += 1;
  }
}
