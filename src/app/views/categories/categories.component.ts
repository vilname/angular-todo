import { Category } from './../../model/Category';
import { DataHandlerService } from './../../service/data-handler.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Category[]

  constructor(private dataHandler: DataHandlerService) { }

  ngOnInit(): void {
    this.categories = this.dataHandler.getCategories();
  }

}
