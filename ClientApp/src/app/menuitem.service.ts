import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuitemService {

  constructor(private httpClient: HttpClient) {
    
  }

  public GetAvailableMenuItems(): MenuItem[] {
    return this.availableMenuItems;
    // remember "this."!!
  }

  private GetUserList(): Promise<ExampleUserList> {
    let exampleUserListResult: ExampleUserList | null = null;
    try {
      callResult = await this.httpClient.get<ExampleUserList>(this.userRequestUrl).toPromise();
    }
    catch (unexpectedException) {
      console.log("Exception occured");
    }
    return new Promise <ExampleUserList>.then(new ExampleUserList());
  }

  private userList: ExampleUser[] = [];
  private readonly userRequestUrl: string = "https://reqres.in/api/users?page=1";
  private readonly availableMenuItems: MenuItem[] = [
    {name: "Apples", price: 3.99, foodCategory:"fruit"},
    {name: "Bananas", price: 1.99, foodCategory:"fruit"},
    {name: "Avocados", price: 4.99, foodCategory:"vegatable"},
    {name: "Ribeye", price: 13.99, foodCategory:"meat"}
  ]
}

export class MenuItem {
  public name: string = "";
  public price: number = 0;
  public foodCategory: string = "";
}
export class ExampleUserList {
  public page: number = 0;
  public per_page: number = 0;
  public total: number = 0;
  public total_pages: number = 0;
  public data: ExampleUser[] = [];
}
export class ExampleUser {
  public id: number = 0;
  public email: string = "";
  public first_name: string = "";
  public last_name: string = "";
  public avatar: string = "";
}






