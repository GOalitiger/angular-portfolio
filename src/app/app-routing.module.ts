import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomTableComponent } from './components/custom-table/custom-table.component';

const routes: Routes = [
  // { path: '', component: LoginComponent },
  { path: 'custom-table', component: CustomTableComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
