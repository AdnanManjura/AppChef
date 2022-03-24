import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryDetailComponent } from './categories/category-detail/category-detail.component';
import { CategoryListComponent } from './categories/category-list/category-list.component';
import { RecipesComponent } from './categories/recipes/recipes.component';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthGuard } from './_guards/auth.guard';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {path: 'members', component: MemberListComponent, canActivate: [AuthGuard]},
      {path: 'members/:username', component: MemberDetailComponent},
      {path: 'categories', component: CategoryListComponent, canActivate: [AuthGuard]},
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
