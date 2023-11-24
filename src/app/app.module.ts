import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreComponent } from './pages/store/store.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';


import { ComponentModule } from './components/component.module';
import { environment } from 'src/environments/environment.development';
import { ProductosService } from './services/ProductosService';
import { GooglePayButtonModule } from '@google-pay/button-angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentModule,
    FormsModule,
    AngularFireDatabaseModule,
    GooglePayButtonModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [
    ProductosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
