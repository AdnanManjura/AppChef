import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryDetailComponent } from './categories/category-detail/category-detail.component';
import { CategoryListComponent } from './categories/category-list/category-list.component';
import { RecipesComponent } from './categories/recipes/recipes.component';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { CategoriesComponent } from './categories/categories.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {path: 'categories', component: CategoriesComponent, canActivate: [AuthGuard]},
      {path: 'categories/:id', component: CategoryDetailComponent},
      {path: 'categories/recipies', component: RecipesComponent},
      {path: 'lists', component: ListsComponent},
      {path: 'messages', component: MessagesComponent},
    ]
  },  
  {path: '**', component: HomeComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
