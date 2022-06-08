import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/Services/data-service.service';
@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent implements OnInit {

  constructor(private route:Router,private dataService:DataServiceService ) { }

  ngOnInit(): void {
  }
  getwishlist() {
    this.route.navigateByUrl("/dashbord/getwishlist")
  }
  Logout() {
    
    this.route.navigateByUrl('/login-signup')
  }
  clearFilter(search: any) {  
    console.log(search);  
    this.dataService.sendData(search) 
  }
 
}
