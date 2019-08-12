import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {VladComponent} from './vlad/vlad.component';
import {AlexComponent} from './alex/alex.component';

function r() {
  return [
    {
      path: '/vlad',
      component: VladComponent
    },
    {
      path: '/alex',
      component: AlexComponent
    },
    {
      path: '', pathMatch: 'full', redirectTo: '/vlad'
    },
    {
      path: '**',
      component: PageNotFound
    }
  ];
}

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
