import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookserviceService } from 'src/app/Services/bookservice.service';
import { DataServiceService} from 'src/app/Services/data-service.service';
@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.scss']
})
export class MycartComponent implements OnInit {
  useraddressform!: FormGroup;
  submitted = false;
  
  booksArray: any= [];
  token: any;
  Book: any;
  Bookid:any;
  quantity: any;
  step = 0;
  showAddress = true;
  showButton = true;
  showCart = true;
  showContinueButton = true;
  cartcount: any;
  booksArraycount: any

  constructor(private httpMyCart: BookserviceService, private formBuilder: FormBuilder, private router: Router,private dataservice: DataServiceService) { }

  ngOnInit(): void {
   this.myCartbook();

     this.useraddressform = this.formBuilder.group({
      fullName: ['', Validators.required],
      mobileNumber: ['', [Validators.required]],
     fullAddress: ['', [Validators.required]],
     city: ['', [Validators.required]],
      state: ['', [Validators.required]],

    });

  }
  onSubmit() {
    
    this.submitted = true;
    if (this.useraddressform.valid) {

      let reqdata = {
        addressType: "Home",
        fullAddress: this.useraddressform .value.fullAddress,
        city: this.useraddressform.value.city,
        state: this.useraddressform.value.state
      }
      this.httpMyCart.MyOrder(reqdata).subscribe((response: any) => {
        console.log('Update successfully', response);
      });
    }
  }
  myCartbook() {
    this.httpMyCart.getCart().subscribe((response: any) => {
      console.log(response);
      this.booksArray = response.result;
      console.log(this.booksArray);
      this.booksArraycount = response.result.length
      console.log("CARTLIST=====>", this.booksArray);
      this.dataservice.sendData(this.booksArraycount)
    });
  }

  

  myRemoveCart(Book: any) {
    this.httpMyCart.removecart(Book._id).subscribe((response: any) => {
      console.log('Remove successfully', response);
    })
  }
  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  ordersummary() {
    let orders: Array<any> = []
    for (this.Book of this.booksArray) {

      let order = {
        "product_id": this.Book.product_id._id,
        "product_name": this.Book.product_id.bookName,
        "product_quantity": this.Book.product_id.quantity,
        "product_price": this.Book.product_id.price,
      }

      orders.push(order)
    }
    let reqdata = {
      orders: orders
    }
    console.log(reqdata)

    this.httpMyCart.myorder(reqdata).subscribe((response:any) => {
      console.log('successfully ordered', response);
      this.router.navigate(['/dashbord/placeorder'])
    })
  }


}
