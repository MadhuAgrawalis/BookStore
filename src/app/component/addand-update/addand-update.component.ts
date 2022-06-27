import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookserviceService} from 'src/app/Services/bookservice.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-addand-update',
  templateUrl: './addand-update.component.html',
  styleUrls: ['./addand-update.component.scss']
})
export class AddandUpdateComponent implements OnInit {
  UpdateForm!: FormGroup
  submitted = false
  book: any;
  bookName: any
  author: any
  description: any
  quantity: any
  price: any
  discountPrice: any
  bookid: any;

 
  constructor(private router: Router,  private formBuilder: FormBuilder,private bookservice: BookserviceService, public dialogRef: MatDialogRef<AddandUpdateComponent>, @Inject(MAT_DIALOG_DATA) public data: any,){this.bookName = data.bookName
    this.author = data.author
    this.description = data.description
    this.quantity = data.quantity
    this.price = data.price
    this.discountPrice = data.discountPrice
    this.bookid = data._id
    console.log(data);
  }
  ngOnInit(): void {
    this.book = this.data.element;
    this.UpdateForm = this.formBuilder.group({
      bookName: ['', [Validators.required]],
      author: ['', [Validators.required,]],
      description: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      price: ['', [Validators.required]],
      discountPrice: ['', [Validators.required]],
      // service: ['advance']
    })
 
  }
  updateBook() {
    this.submitted = true
    let reqData = {
      bookName: this.UpdateForm.value.bookName,
      author: this.UpdateForm.value.author,
      description: this.UpdateForm.value.description,
      quantity: this.UpdateForm.value.quantity,
      price: this.UpdateForm.value.price,
      discountPrice: this.UpdateForm.value.discountPrice,
    }

    this.bookservice.updatebookService(reqData, this.bookid).subscribe((result: any) => {
      console.log(result);
      this.dialogRef.close(result)



    })

  } 
}
