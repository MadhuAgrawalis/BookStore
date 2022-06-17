import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/Services/data-service.service';
import { BookserviceService} from 'src/app/Services/bookservice.service';
@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent implements OnInit {
  badgecount: any;

  constructor(private route:Router,private dataService:DataServiceService,private httpGetWishlist: BookserviceService ) { }

  ngOnInit(): void {
    this.getbadgecount();
  }
  getwishlist() {
    this.route.navigateByUrl("/dashbord/getwishlist")
  }
  Logout() {
    
    this.route.navigateByUrl('/login-signup')
  }
  clearFilter(search: any) {  
    console.log(search);  
    this.dataService.sendData(search) //in this sendData is use for service in create method for sendData is use 
  }
  mycart(){//myCart is funtion or method
    this.httpGetWishlist.getCart().subscribe((response:any)=>{//httpGetWishlist from constructor create veriable name , getCart from service
      console.log(response.result);
    })
    this.route.navigateByUrl('/dashbord/mycart')
  }
  getbadgecount(){
    this.httpGetWishlist.getCart().subscribe((response:any)=>{
      console.log(response.result);
      this.badgecount = response.result.length // badgecount is veriable in this respone is give lenght count allbooks in mycart
    })
  }
}
