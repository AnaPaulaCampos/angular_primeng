import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivrosComponent } from './book-data/book-data.component';

const routes: Routes = [{ path: 'livros', component: LivrosComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
