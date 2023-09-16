import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { SmallCardComponent } from './components/small-card/small-card.component';
import { MenuNavComponent } from './components/menu-nav/menu-nav.component';
import { MenuTitleComponent } from './components/menu-title/menu-title.component';
import { ConteudoComponent } from './pages/conteudo/conteudo.component';
import { IndexComponent } from './pages/index/index.component';
import { RepositoryComponent } from './pages/repository/repository.component';

@NgModule({
  declarations: [
    AppComponent,
    BigCardComponent,
    SmallCardComponent,
    MenuNavComponent,
    MenuTitleComponent,
    ConteudoComponent,
    IndexComponent,
    RepositoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
