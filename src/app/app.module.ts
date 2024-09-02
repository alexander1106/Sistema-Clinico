import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { FormsModule } from '@angular/forms';
@NgModule({

  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    LoginModule

  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
