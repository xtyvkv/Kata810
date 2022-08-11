import { Component, OnInit } from '@angular/core';
import { MenuitemService, MenuItem, ExampleUserList, ExampleUser } from '../menuitem.service'

@Component({
  selector: 'app-menu-display',
  templateUrl: './menu-display.component.html',
  styleUrls: ['./menu-display.component.css']
})
export class MenuDisplayComponent implements OnInit {

  //This is an alternate syntax that both brings in a dependancy and creates
  // a private member to store it
  constructor(private myMenuItemService: MenuitemService) {
    this.myMenuItems = myMenuItemService.GetAvailableMenuItems();
  }
  public myMenuItems: MenuItem[] = [];
  // Guess it has to be public tee hee

  ngOnInit(): void {
  }

}
