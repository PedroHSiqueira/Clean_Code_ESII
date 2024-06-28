import { rodada } from "./Batalha";
import { Bulbasaur, Charmander, Squirtle, ataqueFortalecido } from "./Pokemon";
import { oponente, personagem } from "./Principal";

const teclado = require("prompt-sync")();

let option: number;
let danoOponente: number = 0;

export class Funcionalidades {
  public static random(minimo: number, maximo: number): number {
    return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
  }

  public static SelecaoPokemon() {
    console.clear();
    console.log(Estetica.apresentacao());
    console.log(Estetica.selecao());

    option = +teclado("Opção Selecionada: ");

    while (option < 1 || option > 3 || isNaN(option)) {
      console.log(Error.VerificaSelecao());
      option = +teclado("☛ Escolha seu Inicial: ");
    }

    switch (option) {
      case 1:
        personagem.pokemon = new Charmander();
        oponente.pokemon = new Bulbasaur();
        oponente.nome = "Gary";
        break;

      case 2:
        personagem.pokemon = new Squirtle();
        oponente.pokemon = new Charmander();
        oponente.nome = "Jesse";
        break;

      case 3:
        personagem.pokemon = new Bulbasaur();
        oponente.pokemon = new Squirtle();
        oponente.nome = "James";
        break;
    }
  }

  public static VerificaVida(): void {
    if (oponente.pokemon.vida <= 0) {
      console.log(Estetica.vitoria());
      personagem.pokemon.nivel += 1;
    } else if (personagem.pokemon.vida <= 0) {
      console.log(Estetica.derrota());
      console.log(Estetica.finalizacao());
    }
  }
}

export class Error {
  public static VerificaSelecao(): string {
    return `
»»———————————————————————————————————　★　———————————————————————————————————««\n
☛ Erro ...Nome Inválido, Por favor escolha um nome com mais de 3 caracteres!\n
»»———————————————————————————————————————————————————————————————————————————««\n`;
  }
}

export class Estetica {
  public static regras(): string {
    return ` 
                           Bem vindos ao Pokemon Terminal!
      
»»——————————————————————————————————　Instruções　——————————————————————————————————««
      
  1. Seu nome deve Possuir no minimo 3 caracteres

  2. Terão 3 opções de pokemons para a escolha, podendo escolher apenas um

  3. O jogo se Baseia em Turnos, sempre que seu turno acabar o do oponente ira começar

  4. Após um vitoria em batalha, seu pokémon ira evoluir 1 nivel
      
»»————————————————————————————————————————————————————————————————————————————————««\n`;
  }

  public static nome(): string {
    console.clear();
    return ` 
                   Hora de Definir qual vai ser o seu nome!
                           
»»——————————————————————————————————————　★　——————————————————————————————————————««
                           
                              Escolha seu Nome      
                                _____________       
                           
»»————————————————————————————————————————————————————————————————————————————————««\n`;
  }

  public static apresentacao(): string {
    return `\n✷ 　 　　 　 ·         　 ⋆ · 　 *         ✷ 　 　　 　 ·
　 　　 *　　 * ⋆ 　 .         Bem vindo ao Centro Pokémon      　 　　 *　　 * ⋆ 　 . 
· 　　 ⋆ 　　　 ˚ ˚ 　　 ✦                     　 ⋆ · 　 *         · 　　 ⋆ 　　　 ˚ ˚ 　　 ✦
　 ⋆ · 　 *      * ⋆ 　 .       * ⋆ 　 .             * ⋆ 　 .              　 ⋆ · 　 *
　 *         ✷ 　 　         Prazer em conhece-lo ${personagem.nome}!,　 · ✵              　　　　 ⋆ ✧　 　 · 　 ✧　✵
　　　　 ⋆ ✧　 　 · 　 Agora você tera 3 Opções de Pokémons Iniciais　 　 　　 *　　 * ⋆ 　 . ✧　 　 · 　 ✧　✵
　　 *　　 * ⋆ 　 . 　Deves escolher com qual irá iniciar a sua jornada!　 · ✵              　　　　 ⋆ ✧　 　 · 　 ✧　✵
　　　　 ⋆ ✧　 　 · 　　 · ✵              　　　　 ⋆ ✧　 　 · 　 ✧　✧　 　 · 　 ✧　✵           　 ⋆ · 　 *`;
  }

  public static selecao(): string {
    return `                           
          ====
          !!!!
        ============================
      %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
   %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
      ||      _____          _____    ||            __| |____________________________________________| |__
      ||      | | |          | | |    ||           (__   _____________Escolha um numero!_____________   __)
      ||      |-|-|          |-|-|    ||              | |                                            | |
      ||      #####          #####    ||              | |             1 - Charmander                 | |
      ||                              ||              | |                                            | |
      ||      _____   ____   _____    ||              | |             2 - Squirtle                   | |
      ||      | | |   @@@@   | | |    ||              | |                                            | |
      ||      |-|-|   @@@@   |-|-|    ||              | |             3 - Bulbassaur                 | |
      ||      #####   @@*@   #####    ||            __| |____________________________________________| |__
      ||              @@@@            ||           (__   ____________________________________________   __)
    ******************____****************            | |                                            | |
   *****************************************          | |                                            | |\n\n`;
  }

  public static confirmacao(): string {
    console.clear();
    return `
       ______________________________
       |                            |.
       |         Parabéns!          |.
       |____________________________|.
       |                            |.
       |      o seu Inicial Foi     |.
       |         Selecionado        |.
       |                            |.
       |                            |.
       |   Uma Batalha de Tutorial  |.
       |       será iniciada!       |.
       |                            |.
       |           Pronto?          |.
       |   _________________________|___
       |  /                            /.
       |_/____________________________/.\n`;
  }

  public static batalha(): string {
    console.clear();
    return `                           
    .-=-=-=-=-=-=-=-=-=-=-=-=-=-= Batalha -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-.

                                ${personagem.nome} Vs ${oponente.nome}  

                          (${personagem.pokemon.nome}) Vs (${oponente.pokemon.nome})  

    -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-'`;
  }

  public static ataques(): string {
    console.log(Estetica.batalha());
    return `
    .-=-=-=-=-=-=-=-=-=-=-=-=-=-= Rodada ${rodada} -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-.
    |                                                                       |
    |          Pokémon do Oponente:                                         |
                    ${oponente.pokemon.nome}                       Vida: ${oponente.pokemon.vida} / 35                                            
    |                                                                       |
    |-----------------------------------------------------------------------|
    !                                                                       !
    :                                                                       :
    :                                                                       :
    .                                                                       .
    .                                                                       .
    :-----------------------------------------------------------------------:
    !                                                                       !
    :       Escolha seu Movimento:                                          :
    |                                                                       |
            1. ${personagem.pokemon.ataques[0]}       2. ${personagem.pokemon.ataques[1]}               Vida Atual:               
    |                                                                       |
    |       3. ${personagem.pokemon.ataques[2]}                              ${personagem.pokemon.vida} / 35                  |
    |                                                                       |
    -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-'\n`;
  }

  public static fortalecimento(): string {
    console.clear();
    console.log(Estetica.batalha());
    return `
    .-=-=-=-=-=-=-=-=-=-=-=-=-=-= Rodada ${rodada} -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-.
    |                                                                       |
    |          Pokémon do Oponente:                                         |
                    ${oponente.pokemon.nome}                       Vida: ${oponente.pokemon.vida} / 35    
    |                                                                       |
    !-----------------------------------------------------------------------!
    :                                                                       :
    |                      Seu ataque foi Fortalicido!                      |
    :                                                                       :
                          Seu Bônus de ataque atual é: ${ataqueFortalecido}!                    
    :                                                                       :
    :-----------------------------------------------------------------------:
    !                                                                       !
    :       Escolha seu Movimento:                                          :
    |                                                                       |
            1. ${personagem.pokemon.ataques[0]}       2. ${personagem.pokemon.ataques[1]}               Vida Atual:               
    |                                                                       |
    |       3. ${personagem.pokemon.ataques[2]}                              ${personagem.pokemon.vida} / 35                  |
    |                                                                       |
    -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-'\n`;
  }

  public static ataqueUm(): string {
    console.clear();
    console.log(Estetica.batalha());
    return `
    .-=-=-=-=-=-=-=-=-=-=-=-=-=-= Rodada ${rodada} -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-.
    |                                                                       |
    |          Pokémon do Oponente:                                         |
                    ${oponente.pokemon.nome}                       Vida: ${oponente.pokemon.vida} / 35    
    |                                                                       |
    !-----------------------------------------------------------------------!
    :                                                                       :
                            ${personagem.pokemon.nome} atacou o ${oponente.pokemon.nome}                          
    :                                                                       :
                                    com o ${personagem.pokemon.ataques[1]}!                                
    :                                                                       :
    :-----------------------------------------------------------------------:
    !                                                                       !
    :       Escolha seu Movimento:                                          :
    |                                                                       |
            1. ${personagem.pokemon.ataques[0]}       2. ${personagem.pokemon.ataques[1]}               Vida Atual:               
    |                                                                       |
    |       3. ${personagem.pokemon.ataques[2]}                              ${personagem.pokemon.vida} / 35                  |
    |                                                                       |
    -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-'\n`;
  }

  public static ataqueDois(): string {
    console.clear();
    console.log(Estetica.batalha());
    return `
    .-=-=-=-=-=-=-=-=-=-=-=-=-=-= Rodada ${rodada} -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-.
    |                                                                       |
    |          Pokémon do Oponente:                                         |
                    ${oponente.pokemon.nome}                       Vida: ${oponente.pokemon.vida} / 35    
    |                                                                       |
    !-----------------------------------------------------------------------!
    :                                                                       :
                        ${personagem.pokemon.nome} atacou o ${oponente.pokemon.nome}                          
    :                                                                       :
                                com o Tackle!                                
    :                                                                       :
    :-----------------------------------------------------------------------:
    !                                                                       !
    :       Escolha seu Movimento:                                          :
    |                                                                       |
            1. ${personagem.pokemon.ataques[0]}       2. ${personagem.pokemon.ataques[1]}               Vida Atual:                 
    |                                                                       |
    |       3. ${personagem.pokemon.ataques[2]}                              ${personagem.pokemon.vida} / 35                  |
    |                                                                       |
    -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-'\n`;
  }

  public static dano(): string {
    console.clear();
    console.log(Estetica.batalha());

    let ataqueOponente = oponente.pokemon.ataques[Funcionalidades.random(0, 2)];

    if (ataqueOponente == oponente.pokemon.ataques[0]) {
      danoOponente += Funcionalidades.random(3, 9);
    }

    if (ataqueOponente == oponente.pokemon.ataques[1]) {
      personagem.pokemon.vida -= Funcionalidades.random(2, 8);
    }

    if (ataqueOponente == oponente.pokemon.ataques[2]) {
      personagem.pokemon.vida -= Funcionalidades.random(2, 7);
    }

    return `
    .-=-=-=-=-=-=-=-=-=-=-=-=-=-= Rodada ${rodada} -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-.
    |                                                                       |
    |          Pokémon do Oponente:                                         |
                    ${oponente.pokemon.nome}                       Vida: ${oponente.pokemon.vida} / 35    
    |                                                                       |
    !-----------------------------------------------------------------------!
    :                                                                       :
    :                                                                       :
                             ${oponente.pokemon.nome} Usou o ${ataqueOponente}                          
                                                                
    :                                                                       :
    :-----------------------------------------------------------------------:
    !                                                                       !
    :       Escolha seu Movimento:                                          :
    |                                                                       |
            1. ${personagem.pokemon.ataques[0]}       2. ${personagem.pokemon.ataques[1]}               Vida Atual:              
    |                                                                       |
    |       3. ${personagem.pokemon.ataques[2]}                              ${personagem.pokemon.vida} / 35                  |
    |                                                                       |
    -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-'\n`;
  }

  public static vitoria(): string {
    console.clear();
    return `
    »»———————————————————————————————————　★　———————————————————————————————————««

    ☛  Parabéns ${personagem.nome}, você venceu a batalha!
    
    ☛  Seu pokémon Evoluiu para o nivel ${personagem.pokemon.nivel + 1}

    »»———————————————————————————————————————————————————————————————————————————««\n`;
  }

  public static derrota(): string {
    console.clear();
    return `
    »»———————————————————————————————————　★　———————————————————————————————————««
    ☛  Infelizmente ${personagem.nome}, você perdeu a batalha!
    »»———————————————————————————————————————————————————————————————————————————««\n`;
  }

  public static menuOpcoes(): string {
    console.clear();
    return `

    Olá novamente!, Escolha uma das 4 opções para dar sequência ao jogo

     ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ 
     ╬═╬═        
     ╬═╬═   1 - Iniciar outra batalha   
     ╬═╬═        
     ╬═╬═   2 - Trocar de Pokemon
     ╬═╬═   
     ╬═╬═   3 - Informações Do Seu Pokémon
     ╬═╬═                 
     ╬═╬═   4 - Finalizar Jogo              
     ╬═╬═                 
     ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ ╬═╬═ \n`;
  }

  public static informacoes(): string {
    return `
    Estatisticas Do Seu Pokémon:

    »»———————————————————————————————————　★　———————————————————————————————————««
    ☛    Pokémon : ${personagem.pokemon.nome}

    ☛    Vida atual : ${personagem.pokemon.vida}

    ☛    Tipo do Pokémon : ${personagem.pokemon.tipo}

    ☛    nivel atual : ${personagem.pokemon.nivel}
    »»———————————————————————————————————————————————————————————————————————————««\n`;
  }

  public static finalizacao(): string {
    return `\n
    ___  _______  _______  _______    _______  ___   __    _  _______  ___      ___   _______  _______  ______   _______ 
    |   ||       ||       ||       |  |       ||   | |  |  | ||   _   ||   |    |   | |       ||   _   ||      | |       |
    |   ||   _   ||    ___||   _   |  |    ___||   | |   |_| ||  |_|  ||   |    |   | |____   ||  |_|  ||  _    ||   _   |
    |   ||  | |  ||   | __ |  | |  |  |   |___ |   | |       ||       ||   |    |   |  ____|  ||       || | |   ||  | |  |
 ___|   ||  |_|  ||   ||  ||  |_|  |  |    ___||   | |  _    ||       ||   |___ |   | | ______||       || |_|   ||  |_|  |
|       ||       ||   |_| ||       |  |   |    |   | | | |   ||   _   ||       ||   | | |_____ |   _   ||       ||       |
|_______||_______||_______||_______|  |___|    |___| |_|  |__||__| |__||_______||___| |_______||__| |__||______| |_______|\n`;
  }
}
