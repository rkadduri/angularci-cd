import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgforComponent } from './ngfor/ngfor.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { PostformComponent } from './postform/postform.component';

const routes: Routes = [

  { path: 'ng-for', component: NgforComponent},
  // { path: '**', component: PageNotfoundComponent },
  { path: 'post-form', component:PostformComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
