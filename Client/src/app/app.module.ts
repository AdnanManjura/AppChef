import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { CategoryListComponent } from './categories/category-list/category-list.component';
import { CategoryDetailComponent } from './categories/category-detail/category-detail.component';
import { RecipesComponent } from './categories/recipes/recipes.component';
import { ToastrModule } from 'ngx-toastr';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberCardComponent } from './members/member-card/member-card.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { CategoryCardComponent } from './categories/category-card/category-card.component';
import { JwtInterceptor } from './_interceptors/jwt.interceptor';
import { IngredientsComponent } from './categories/ingredients/ingredients.component';
import { RecipeCardComponent } from './categories/recipes/recipe-card/recipe-card.component';
import { RecipeListComponent } from './categories/recipes/recipe-list/recipe-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    CategoryListComponent,
    CategoryDetailComponent,
    RecipesComponent,
    MemberListComponent,
    MemberCardComponent,
    MemberDetailComponent,
    CategoryCardComponent,
    IngredientsComponent,
    RecipeCardComponent,
    RecipeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    })
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
