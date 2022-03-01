import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './services/auth-guard.service';
import {MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSidenavModule } from '@angular/material/sidenav'
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog'
import {MatIconModule} from '@angular/material/icon'
import {MatTableModule} from '@angular/material/table';
import { CreateFoodComponent } from './create-food/create-food.component';
import { DialogComponent } from './dialog/dialog.component';
import { DishesService } from './services/dishes.service';
import { SubscribersComponent } from './subscribers/subscribers.component';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';
import { MealsComponent } from './meals/meals.component';
import { SubscriberService } from './services/subscriber.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    DashboardComponent,
    NotFoundComponent,
    CreateFoodComponent,
    DialogComponent,
    SubscribersComponent,
    ClientDashboardComponent,
    MealsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatTableModule,
    // MatFormFieldModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent, data: { open : false } },
      { path: 'admin/dashboard', component: DashboardComponent, canActivate: [AuthGuard], data: { open : true } },
      { path: 'dashboard', component: ClientDashboardComponent, canActivate: [AuthGuard], data: { open : true } },
      { path: 'subscriber', component: SubscribersComponent, canActivate: [AuthGuard], data: { open : true } },
      { path: 'meals', component: MealsComponent, canActivate: [AuthGuard], data: { open : true } },
      {path: 'create-food', component: CreateFoodComponent, canActivate: [AuthGuard]},
      {path: '**', component: NotFoundComponent},
    ]),
  ],
  providers: [AuthService, AuthGuard, DishesService, SubscriberService],
  bootstrap: [AppComponent],
})
export class AppModule {}
