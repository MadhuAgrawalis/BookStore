import { Injectable } from '@angular/core';
import {HttpServiceService} from '../Services/http-service.service';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BookserviceService {
  token: any;
  NoteId: any
  constructor(private httpService: HttpServiceService) { 
    this.token = localStorage.getItem('token')
  }

getallbooks() {
  this.token = localStorage.getItem('token')
  console.log("inside getbook service");
  let headers = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': this.token
    })
  }
  return this.httpService.getService('get/book', true, headers)
}



addTobag(_id:any) {
  console.log(_id)
  let header = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    'x-access-token': this.token
    })
  }
  return this.httpService.postService('add_cart_item/'+_id,{}, true, header)
}


addToWishlist(_id:any) {
  console.log(_id)
  this.token = localStorage.getItem('token');
  let header = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': this.token
    })
  }
  return this.httpService.postService('add_wish_list/'+_id,{}, true, header)
}

addfeedbackService(_id: any, reqPayload: any) {
  let header = {
    headers: new HttpHeaders({
     
      'content-Type': 'application/json',
      'x-access-token': this.token
    })
  }
  return this.httpService.postService('add/feedback/' +_id, reqPayload, true, header);
}

getfeedBackService(data: any) {
  this.token = localStorage.getItem('token')
  let header = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': this.token
    })
  }

  return this.httpService.getService('get/feedback/'+ data.product_id,true,header);

}
MyOrder(reqdata: any) {
    
  let header = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': this.token
    })
  }
  return this.httpService.putService('edit_user/',reqdata, true, header)
}
getCart() {
  this.token = localStorage.getItem('token');
  console.log('token',this.token);

  let header = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': this.token
    })
  }
  console.log(header);
  return this.httpService.getService('get_cart_items/', true, header);
}



removecart(_id: any) {
  let header = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': this.token    
    })
  }
  return this.httpService.deleteService('remove_cart_item/' + _id,{},true, header)
}

myorder(reqdata: any) {
  this.token = localStorage.getItem('token');
  let options = {
    headers: new HttpHeaders({
      'x-access-token': this.token,
      'Content-Type': 'application/json'
    })
  }
  return this.httpService.postService('add/order',reqdata,true, options);
}
getWishlist(){
  let header = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': this.token,
    })
  } 
  return this.httpService.getService('get_wishlist_items',true,header);
}

deleteWishlist(data:any){
 this.token = localStorage.getItem('token');
  let header = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': this.token,
    })
  }
  return this.httpService.deleteService('remove_wishlist_item/'+data.product_id._id,data,true,header)
}

}
