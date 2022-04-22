import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryDetailComponent } from './categories/category-detail/category-detail.component';
import { CategoryListComponent } from './categories/category-list/category-list.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RecipeAddComponent } from './recipes/recipe-add/recipe-add.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {path: 'home', component: HomeComponent},
      {path: 'categories', component: CategoryListComponent},
      {path: 'categories/:categoryId', component: CategoryDetailComponent},
      {path: 'categories/:categoryId/:recipeId', component: RecipeDetailComponent},
      {path: 'recipes', component: RecipeListComponent},
      {path: 'recipe/add/:categoryId', component: RecipeAddComponent},
    ]
  },  
  {path: '**', component: LoginComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
