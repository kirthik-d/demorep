import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { Customer } from './customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  readonly ppApiUrl="http://localhost:47198/api/BorrowerInformations";
  ppList: Customer[];
  ppData: Customer = new Customer();
  pid:any;
  constructor(public objcHttp:HttpClient) { 

   }
   getCustomerList()
   {
    this.objcHttp.get(this.ppApiUrl).toPromise().then(res=>this.ppList= res as Customer[]);
   }
   deleteCustomer(id)
   {
    return this.objcHttp.delete(this.ppApiUrl+"/"+id);
   }
   putCustomer()
   {
    return this.objcHttp.put(this.ppApiUrl+"/"+this.ppData.BorrowerId, this.ppData);
   }
   postCustomer()
   {
    return this.objcHttp.post(this.ppApiUrl, this.ppData);
   }
   
   
}
