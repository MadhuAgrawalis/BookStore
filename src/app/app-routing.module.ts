import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginSignupComponent } from './component/login-signup/login-signup.component';
import { DashbordComponent } from './component/dashbord/dashbord.component';
import { GetallbookComponent } from './component/getallbook/getallbook.component';
import{QuickviewComponent} from './component/quickview/quickview.component';
import { MycartComponent } from './component/mycart/mycart.component';
import { GetwishlistComponent } from './component/getwishlist/getwishlist.component';
import { PlaceorderComponent } from './component/placeorder/placeorder.component';

const routes: Routes = [
  
  { path: 'login-signup', component: LoginSignupComponent },
  {path: 'dashbord', component: DashbordComponent,
    children: [
      { path: '', redirectTo: 'getallbook', pathMatch: 'full', },
      { path: 'getallbook', component: GetallbookComponent},
      { path: 'quickview/:BookId', component: QuickviewComponent },
      { path: 'mycart', component: MycartComponent},
      {path: 'getwishlist',component: GetwishlistComponent},
      { path: 'placeorder', component: PlaceorderComponent },
    ]
  
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
