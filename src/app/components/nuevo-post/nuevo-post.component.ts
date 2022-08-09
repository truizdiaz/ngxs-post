import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import { v4 as uuidv4 } from 'uuid';
import { ToastrService } from 'ngx-toastr';
import { Store } from '@ngxs/store';
import { AgregarPost } from '../store/posts.actions';

@Component({
  selector: 'app-nuevo-post',
  templateUrl: './nuevo-post.component.html',
  styleUrls: ['./nuevo-post.component.css']
})
export class NuevoPostComponent implements OnInit {
  nombre: string = '';
  descripcion: string = '';

  constructor(private toastr: ToastrService, private store: Store) { }

  ngOnInit(): void {
  }

  agregarPost() {

    // Validamos campos
    if (this.nombre == '' || this.descripcion == '') {
      this.toastr.error('El campo texto y descriopcion son obligatorios', 'Error');
      return;
    }

    // Creamos objeto
    const post: Post = {
      id: uuidv4(),
      nombre: this.nombre,
      descripcion: this.descripcion
    }

    // dispach de ngxs
    this.store.dispatch(new AgregarPost(post))

    // Mostramos mensaje de exito
    this.toastr.success(`El post ${this.nombre.toUpperCase()} fue agregado con exito!`, 'Post registrado!');

    this.resetForm();
  }

  resetForm() {
    this.nombre = '';
    this.descripcion = '';
  }

}
