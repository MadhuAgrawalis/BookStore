import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginSignupComponent } from './component/login-signup/login-signup.component';
import { DashbordComponent } from './component/dashbord/dashbord.component';
import { GetallbookComponent } from './component/getallbook/getallbook.component';
import{QuickviewComponent} from './component/quickview/quickview.component';
import { MycartComponent } from './component/mycart/mycart.component';
import { GetwishlistComponent } from './component/getwishlist/getwishlist.component';
import { PlaceorderComponent } from './component/placeorder/placeorder.component';
import {AdminComponent} from'./component/admin/admin.component';
const routes: Routes = [
  
  { path: '', redirectTo: 'login-signup', pathMatch: 'full' },
  { path: 'login-signup', component: LoginSignupComponent },
  //{ path: 'dashbord', redirectTo: '/dashbord/getallbook', pathMatch: 'full', },
  {path: 'dashbord', component: DashbordComponent,
    children: [
      { path: 'dashbord', redirectTo: '/dashbord/getallbook', pathMatch: 'full', },
      //{ path: '', redirectTo: 'getallbook', pathMatch: 'full', },
      { path: 'getallbook', component: GetallbookComponent},
      { path: 'quickview/:BookId', component: QuickviewComponent },
      { path: 'mycart', component: MycartComponent},
      {path: 'getwishlist',component: GetwishlistComponent},
      { path: 'placeorder', component: PlaceorderComponent },
      {path:'admin', component:AdminComponent}
 
    ]
  
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
