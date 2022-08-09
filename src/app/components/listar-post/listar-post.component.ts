import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post';

@Component({
  selector: 'app-listar-post',
  templateUrl: './listar-post.component.html',
  styleUrls: ['./listar-post.component.css']
})
export class ListarPostComponent implements OnInit {
  listPost: Post[] = [ 
    {
      id: 'd24242-dadad',
      nombre: 'Bootstrap',
      descripcion: "Es un framework css con un poderoso sistema de regillas"
    },
    {
      id: 'dadada-dadad',
      nombre: 'Angular',
      descripcion: "Es un framework para crear SPA creado por Google"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  eliminarPost(id: string) {
    console.log(id);
    // this.listPost = this.listPost.filter(post => post.id !== id);
  }

}
