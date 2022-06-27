import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginSignupComponent } from './component/login-signup/login-signup.component';

import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { DashbordComponent } from './component/dashbord/dashbord.component';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import { GetallbookComponent } from './component/getallbook/getallbook.component';
import {MatSelectModule} from '@angular/material/select';
import { QuickviewComponent } from './component/quickview/quickview.component';
import { MycartComponent } from './component/mycart/mycart.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatRadioModule} from '@angular/material/radio';
import { GetwishlistComponent } from './component/getwishlist/getwishlist.component';
import { PlaceorderComponent } from './component/placeorder/placeorder.component';
import {AuthguradServiceService} from './Services/authgurad-service.service';
import {NgxPaginationModule} from 'ngx-pagination';
import { MatBadgeModule } from "@angular/material/badge";
import { PipePipe } from './pipes/pipe.pipe';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { AddandUpdateComponent } from './component/addand-update/addand-update.component';
import { AdminComponent } from './component/admin/admin.component';
import { AddComponent } from './component/add/add.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginSignupComponent,
    DashbordComponent,
    GetallbookComponent,
    QuickviewComponent,
    MycartComponent,
    GetwishlistComponent,
    PlaceorderComponent,
    PipePipe,
    AddandUpdateComponent,
   AdminComponent,
   AddComponent,
 
  
   
    
  
   
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatCardModule ,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule ,
    MatToolbarModule,
    MatSnackBarModule,
    HttpClientModule,
    MatIconModule,
    MatMenuModule,
    MatSelectModule,
    MatDividerModule,
    MatExpansionModule,
    MatRadioModule,
    NgxPaginationModule,
    MatBadgeModule,
    MatDialogModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [
    AuthguradServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
