import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {DisconnectPageComponent} from './disconnect-page/disconnect-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'disconnect', component: DisconnectPageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
