import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListarPostComponent } from './components/listar-post/listar-post.component';
import { NuevoPostComponent } from './components/nuevo-post/nuevo-post.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarPostComponent,
    NuevoPostComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
