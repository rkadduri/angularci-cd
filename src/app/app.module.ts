import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { PostformComponent } from './postform/postform.component';

@NgModule({
  declarations: [
    AppComponent,
    NgforComponent,
    PageNotfoundComponent,
    PostformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
