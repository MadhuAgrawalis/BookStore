import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookserviceService} from 'src/app/Services/bookservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  Addnewbookform!: FormGroup
  UpdateForm!: FormGroup
  submitted = false;

  constructor(private router: Router,  private formBuilder: FormBuilder,private bookservice: BookserviceService) { }

  ngOnInit(): void {
    this.Addnewbookform = this.formBuilder.group({
      bookName: ['', [Validators.required]],
      author: ['', [Validators.required]],
      description: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      price: ['', [Validators.required]],
      discountPrice: ['', [Validators.required]],
     
    });
  }
  addnewbook() {
    this.submitted = true;

    if (this.Addnewbookform.valid) {
      let reqData = {
        bookName: this.Addnewbookform.value.bookName,
        author: this.Addnewbookform.value.author,
        description: this.Addnewbookform.value.description,
        quantity: this.Addnewbookform.value.quantity,
        price: this.Addnewbookform.value.price,
        discountPrice: this.Addnewbookform.value.discountPrice
      }
      this.bookservice.addnewbookService(reqData).subscribe((response:any) => {
        console.log(response);
         
      

      })

    }
  }
}
