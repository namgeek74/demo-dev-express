import { MenuComponent } from './pages/menu/menu.component';
import { DemoTableComponent } from './pages/demo-table/demo-table.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'table',
    component: DemoTableComponent,
  },
  {
    path: 'menu',
    component: MenuComponent,
  },
  { path: '', redirectTo: '/menu', pathMatch: 'full' },
  { path: '**', component: MenuComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
