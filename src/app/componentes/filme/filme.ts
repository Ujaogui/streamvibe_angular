import { Component } from '@angular/core';

@Component({
  selector: 'app-filme',
  imports: [],
  templateUrl: './filme.html',
  styleUrl: './filme.css'
})
export class Filme {

  alternarFavorito() {
    this.filme1.favorito = !this.filme1.favorito
  }

  filme1 = {
    nome: "Titanic",
    imagem: "/titanic.jpg",
    sinopse: "Filme emocionante de um navio que afunda.",
    favorito: false
  }

  // filme2 = {
  //   nome: "Velocipastor",
  //   imagem: "/velocipastor.jpg",
  //   sinopse: "Filme emocionante de um pastor que vira velociraptor."
  // }

  // filme3 = {
  //   nome: "Internet o filme",
  //   imagem: "/Internet_O_Filme.jpg",
  //   sinopse: "Filme emocionante e ruim de uns youtubers."
  // }
}
