import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryDetailComponent } from './categories/category-detail/category-detail.component';
import { CategoryListComponent } from './categories/category-list/category-list.component';
import { RecipesComponent } from './categories/recipes/recipes.component';
import { RecipeListComponent } from './categories/recipes/recipe-list/recipe-list.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_guards/auth.guard';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { IngredientsComponent } from './categories/ingredients/ingredients.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {path: 'home', component: HomeComponent},
      {path: 'members', component: MemberListComponent, canActivate: [AuthGuard]},
      {path: 'members/:memberId', component: MemberDetailComponent},
      {path: 'categories', component: CategoryListComponent},
      {path: 'categories/:categoryId', component: CategoryDetailComponent},
      {path: 'categories/:categoryId/:recipeId', component: IngredientsComponent},
      {path: 'recipes', component: RecipeListComponent},
    ]
  },  
  {path: '**', component: LoginComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
