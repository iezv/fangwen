import {Component} from '@angular/core';
import {ItemService} from "../../../services/item.service";
import {Item} from "../../../models/item";


@Component({
  selector: 'app-admin-items',
  templateUrl: './admin_items.component.html',
  styleUrls: ['./admin_items.component.scss']
})

export class AdminItemsComponent {

  public items: Item [];

  constructor(private itemService: ItemService) {
  }

  ngOnInit(): void {
    this.getItems();
  }

  headElements = ['id', 'category', 'name' , 'description', 'price', 'discount', 'in_stock',
    'amount', 'image_id', 'comment', 'edit', 'delete'];

  getItems(){
    this.itemService.getAllItems()
      .subscribe(data => this.items = data);
  }

}
