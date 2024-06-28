import { oponente } from "./Principal";
import { Estetica, Funcionalidades } from "./Utilitario";

interface ataque {
  fortalecimento(): void;
  ataqueum(): void;
  ataqueDois(): void;
}

export let ataqueFortalecido: number = 0;

export default class Pokemon {
  private _nome: string;
  private _tipo: string;
  private _vida: number;
  private _nivel: number;
  private _ataques: string[];

  constructor(
    nome: string,
    tipo: string,
    vida: number,
    nivel: number,
    ataques: string[]
  ) {
    this._nome = nome;
    this._tipo = tipo;
    this._vida = vida;
    this._nivel = nivel;
    this._ataques = ataques;
  }

  //Getter
  public get nome(): string {
    return this._nome;
  }

  public get tipo(): string {
    return this._tipo;
  }

  public get vida(): number {
    return this._vida;
  }

  public get ataques(): string[] {
    return this._ataques;
  }

  public get nivel(): number {
    return this._nivel;
  }

  //Setter
  public set vida(vida: number) {
    this._vida = vida;
  }

  public set nivel(nivel: number) {
    this._nivel = nivel;
  }
}

export class Bulbasaur extends Pokemon implements ataque {
  constructor() {
    super("Bulbasaur", "Planta", 35, 1, ["Growl", "Vine Whip", "Tackle"]);
  }

  fortalecimento(): void {
    if (ataqueFortalecido <= 20) {
      ataqueFortalecido += Funcionalidades.random(2, 5);
      console.log(Estetica.fortalecimento());
    } else {
      console.log("Seu ataque já está no máximo!");
    }
  }

  ataqueum(): void {
    console.clear();
    console.log(Estetica.ataqueUm());
    oponente.pokemon.vida -= Funcionalidades.random(4, 10) + ataqueFortalecido;
    ataqueFortalecido = 0;
  }

  ataqueDois(): void {
    console.clear();
    console.log(Estetica.ataqueDois());
    oponente.pokemon.vida -= Funcionalidades.random(3, 6) + ataqueFortalecido;
    ataqueFortalecido = 0;
  }
}

export class Charmander extends Pokemon implements ataque {
  constructor() {
    super("Charmander", "Fogo", 35, 1, ["Growl", "Ember", "Tackle"]);
  }

  fortalecimento(): void {
    if (ataqueFortalecido <= 20) {
      ataqueFortalecido += Funcionalidades.random(2, 5);
      console.log(Estetica.fortalecimento());
    } else {
      console.log("Seu ataque já está no máximo!");
    }
  }

  ataqueum(): void {
    console.clear();
    console.log(Estetica.ataqueUm());
    oponente.pokemon.vida -= Funcionalidades.random(3, 9) + ataqueFortalecido;
    ataqueFortalecido = 0;
  }

  ataqueDois(): void {
    console.clear();
    console.log(Estetica.ataqueDois());
    oponente.pokemon.vida -= Funcionalidades.random(3, 6) + ataqueFortalecido;
    ataqueFortalecido = 0;
  }
}

export class Squirtle extends Pokemon implements ataque {
  constructor() {
    super("Squirtle", "Água", 35, 1, ["Growl", "Bubble", "Tackle"]);
  }

  fortalecimento(): void {
    if (ataqueFortalecido <= 20) {
      ataqueFortalecido += Funcionalidades.random(2, 5);
      console.log(Estetica.fortalecimento());
    } else {
      console.log("Seu ataque já está no máximo!");
    }
  }

  ataqueum(): void {
    console.clear();
    console.log(Estetica.ataqueUm());
    oponente.pokemon.vida -= Funcionalidades.random(4, 10) + ataqueFortalecido;
    ataqueFortalecido = 0;
  }

  ataqueDois(): void {
    console.clear();
    console.log(Estetica.ataqueDois());
    oponente.pokemon.vida -= Funcionalidades.random(3, 6) + ataqueFortalecido;
    ataqueFortalecido = 0;
  }
}
