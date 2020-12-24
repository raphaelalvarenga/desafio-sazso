import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsiderationsComponent } from './considerations/considerations.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { AuthGuard } from './guard/auth.guard';
import { ListConsultComponent } from './list-consult/list-consult.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    { path: '', component: ConsultaComponent, canActivate: [AuthGuard] },
    { path: 'list-consult', component: ListConsultComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'considerations', component: ConsiderationsComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
