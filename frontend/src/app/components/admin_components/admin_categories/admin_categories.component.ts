import {Component} from '@angular/core';
import {Category} from "../../../models/category";
import {ItemService} from "../../../services/item.service";


@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin_categories.component.html',
  styleUrls: ['./admin_categories.component.scss']
})

export class AdminCategoriesComponent {

  public categories: Category [];

  constructor(private itemService: ItemService) {
  }

  ngOnInit(): void {
    this.getCategories();
  }

  headElements = ['id', 'name', 'description', 'comment', 'edit', 'delete'];

  getCategories(){
    this.itemService.getAllCategories()
      .subscribe(data => this.categories = data );
  }
}
