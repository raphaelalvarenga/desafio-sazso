import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { ConsultaComponent } from './consulta/consulta.component';
import { DialogComponent } from './global-components/dialog/dialog.component';
import { ListConsultComponent } from './list-consult/list-consult.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guard/auth.guard';
import { LoginService } from './services/login.service';
import { ConsiderationsComponent } from './considerations/considerations.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsultaComponent,
    DialogComponent,
    ListConsultComponent,
    LoginComponent,
    ConsiderationsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    FlexLayoutModule,
    MatDividerModule,
    MatTableModule,
    MatListModule,
    HttpClientModule,
    MatDialogModule,
    MatIconModule,
    MatProgressSpinnerModule,
    AppRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatRadioModule,
    MatSnackBarModule
  ],
  providers: [AuthGuard, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
