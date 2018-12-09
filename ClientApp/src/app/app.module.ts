import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioGestionComponent } from './usuario-gestion/usuario-gestion.component';
import { usuarioServiceService} from './usuario-service/usuario-service.service';
import { MateriaComponent } from './materia/materia.component';
import { materiaServiceService } from './materia-service/materia-service.service';
import { MateriaGestionComponent } from './materia-gestion/materia-gestion.component';
import { LoginComponent } from './login/login.component';
import { ReservaComponent } from './reserva/reserva.component';
import { HorarioComponent } from './horario/horario.component';
import { loginServiceService } from './login-service/login-service.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    UsuarioComponent,

    UsuarioGestionComponent,

    MateriaComponent,

    MateriaGestionComponent,

    LoginComponent,

    ReservaComponent,

    HorarioComponent

   
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'usuario', component: UsuarioComponent },
      { path: 'usuario-gestion', component: UsuarioGestionComponent },
      { path: 'materia', component: MateriaComponent },
      { path: 'materia-gestion', component: MateriaGestionComponent },
      { path: 'horario', component: HorarioComponent },
      {path: 'login', component: LoginComponent},
      {path:'reserva', component: ReservaComponent}
    ])
  ],
  providers: [usuarioServiceService,materiaServiceService, loginServiceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
