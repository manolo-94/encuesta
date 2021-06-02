import { NgModule } from '@angular/core';
import { IonicStorageModule } from '@ionic/storage';

import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TablinksPageModule } from './pages/tablinks/tablinks.module';

import { SQLite } from '@ionic-native/sqlite/ngx'

import { Network } from '@ionic-native/network/ngx';
import { ComponentsModule } from './components/components.module';
import { ResultadosPageModule } from './pages/resultados/resultados.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    IonicStorageModule.forRoot(),
    HttpClientModule,
    
    TablinksPageModule,
    ComponentsModule,
    
  ],
  providers: [
    SQLite, 
    Network,
    { provide: RouteReuseStrategy, 
      useClass: IonicRouteStrategy 
    }],
  bootstrap: [AppComponent],
})
export class AppModule {}
