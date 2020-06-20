import { Task } from './../model/Task';
import { TestData } from './../data/TestData';
import { Category } from './../model/Category';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  constructor() { }

  getCategories(): Category[]{
    return TestData.categories
  }

  getTasks(): Task[]{
    return TestData.tasks
  }
}
