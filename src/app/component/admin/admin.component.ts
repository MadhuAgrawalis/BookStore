import { Component, OnInit } from '@angular/core';
import { AddandUpdateComponent } from '../addand-update/addand-update.component';
import { BookserviceService} from 'src/app/Services/bookservice.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {AddComponent} from '../add/add.component';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  adminBookList: any;
  totallength: any;
  BookCount: any;
 
 

  constructor(private bookservice: BookserviceService,private router: Router,  private formBuilder: FormBuilder, public dialog: MatDialog) { }

  ngOnInit(): void {
    

    this.getallbooksadmin();

 
  }
  getallbooksadmin() {
    this.bookservice.getallbooks().subscribe((response: any) => {
      console.log(response);
      this.adminBookList = response.result;
      this.adminBookList.reverse()
      this.totallength = response.result.length
      this.BookCount = response.result.length;
      console.log("BookList======>", this.adminBookList);
      console.log(this.BookCount);

    })
    }
    
    openDialog(book: any) {
      const dialogRef = this.dialog.open(AddandUpdateComponent, {
        width: "600px",
        height: "400px",
        data: book,
  
      });
  
  
      dialogRef.afterClosed().subscribe((result:any) => {
       this.getallbooksadmin();
       console.log('Dialog result');
  
      });
    }
    openDialogs() {
      const dialogRef = this.dialog.open(AddComponent, {
        width: "600px",
        height: "400px",
        // data: book,
  
      });
  
  
      dialogRef.afterClosed().subscribe((result:any) => {
       this.getallbooksadmin();
       console.log('Dialog result');
  
      });
    }
  
    
  }


  
  
  