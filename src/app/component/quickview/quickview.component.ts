import { Component, OnInit } from '@angular/core';
import { BookserviceService } from 'src/app/Services/bookservice.service';
@Component({
  selector: 'app-quickview',
  templateUrl: './quickview.component.html',
  styleUrls: ['./quickview.component.scss']
})
export class QuickviewComponent implements OnInit {
  BookId: any;
  Book: any;
  value: any
  feedback: any
  feedbackarray: any;
  rating: any;
  token: any;
  comment: any;
  
  
  constructor(private bookService: BookserviceService) { }

  ngOnInit(): void {
    this.BookId = localStorage.getItem("BookId");
    console.log(this.BookId);
    this.detailAllBook();
    
  }
 detailAllBook() {
    this.bookService.getallbooks().subscribe((response: any) => {
      response.result.forEach((e: any) => {
        if (e._id == this.BookId) {
          this.Book = e;
        }
      });
    })
  }
  addfeedback() {
    let data = {
      comment: this.feedback,
      rating: this.value
    }
    this.bookService.addfeedbackService(this.BookId, data).subscribe((response: any) => {
      console.log("User Feedback", response);
    })
  }
  getfeedback() {
    let reqdata = {
      _id: this.BookId
    }
    this.bookService.getfeedBackService(reqdata).subscribe((response: any) => {
      console.log('User Feedback', response);
      this.feedbackarray = response.result;
    });
  }
}
