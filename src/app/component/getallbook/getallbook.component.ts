import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookserviceService} from 'src/app/Services/bookservice.service';
import { DataServiceService} from 'src/app/Services/data-service.service';


@Component({
  selector: 'app-getallbook',
  templateUrl: './getallbook.component.html',
  styleUrls: ['./getallbook.component.scss']
})
export class GetallbookComponent implements OnInit {
  booksArray: any = [];
  Book:any;
  Bookid:any;
  token:any;
  searchword: any;
  page:number = 1;
  totalLength:any;

  constructor(private router: Router, private activatedRoute:ActivatedRoute,private httpGetAllBook: BookserviceService, private dataservice: DataServiceService) { }

  ngOnInit(): void {
   
    this.dataservice.receivedData.subscribe((response:any) => {
      console.log(response)
          this.searchword = response;
          console.log(this.searchword);
    }) ;
    
    this.getAllBook();
  }
 


  getAllBook() {
    this.httpGetAllBook.getallbooks().subscribe((response: any) => {
      console.log(response);
      this.booksArray = response.result;
      console.log(this.booksArray);
   
    });
  }
  
  addTobag(Book:any){
    this.httpGetAllBook.addTobag(Book._id).subscribe((response: any) => {
      console.log(response);
     

    })
  }
  addToWishlist(Book:any){
    this.httpGetAllBook.addToWishlist(Book._id).subscribe((response: any) => {
      console.log(response);
    })

  }
  quickview(Book:any){  
    localStorage.setItem('BookId', Book._id); 
    this.router.navigateByUrl('/dashbord/quickview/' + Book._id)
  }
  
  lowtohigh(){
    this.booksArray= this.booksArray.sort((low:any,high:any)=> low.discountPrice-high.discountPrice);
    }
  hightolow(){
    this.booksArray= this.booksArray.sort((low:any,high:any)=> high.discountPrice-low.discountPrice);
  }
  newestarrivals(){
    this.booksArray.reverse();
  }

}
