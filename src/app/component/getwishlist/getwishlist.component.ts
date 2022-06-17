import { Component, OnInit } from '@angular/core';
import { BookserviceService } from 'src/app/Services/bookservice.service';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/Services/data-service.service';

@Component({
  selector: 'app-getwishlist',
  templateUrl: './getwishlist.component.html',
  styleUrls: ['./getwishlist.component.scss']
})
export class GetwishlistComponent implements OnInit {

  constructor(private httpGetWishlist: BookserviceService,private router: Router,private dataService: DataServiceService) { }
  wishListarray: any = [];//this declear veriable and array is pass

  ngOnInit(): void {
    this.getWishlist();

  }
getWishlist() {
    this.httpGetWishlist.getWishlist().subscribe((response: any) => {
      console.log(response.result)
      this.wishListarray = response['result'];
      console.log("getBooksArray", this.wishListarray);

    })
  }

  deleteWishlist(data: any) {
    this.httpGetWishlist.deleteWishlist(data).subscribe((response: any) => {
      console.log('delete wishlist', response)
     
    })
  }
}
