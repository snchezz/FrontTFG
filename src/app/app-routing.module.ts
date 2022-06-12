import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { ListaTutorialesComponent } from './lista-tutoriales/lista-tutoriales.component';
import { AgregarTutorialComponent } from './agregar-tutorial/agregar-tutorial.component';
import { TutorialDetallesComponent } from './tutorial-detalles/tutorial-detalles.component';
import { HomeComponent } from './home/home.component';
import { InforabidaComponent } from './inforabida/inforabida.component';
import { InfocarlomariaComponent } from './infocarlomaria/infocarlomaria.component';
import { ContactoComponent } from './contacto/contacto.component';
import { BlogComponent } from './blog/blog.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'entradas', component: ListaTutorialesComponent },
  { path: 'entradas/:id', component: TutorialDetallesComponent },
  { path: 'agregar', component: AgregarTutorialComponent },
  
  { path: 'informacion_rabida', component: InforabidaComponent },
  { path: 'informacion_carlomaria', component: InfocarlomariaComponent },
  { path: 'contacto', component: ContactoComponent },



  { path: '', redirectTo: 'home', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


