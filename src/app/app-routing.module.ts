import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultaComponent } from './consulta/consulta.component';
import { ListConsultComponent } from './list-consult/list-consult.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    { path: '', component: ConsultaComponent },
    { path: 'list-consult', component: ListConsultComponent },
    { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
