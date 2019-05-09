import { Component, OnInit } from '@angular/core';
import { Section } from './sectionSchema';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent implements OnInit {

folders: Section[] = [
  {
    name: 'Photos',
    updated: new Date('1/1/16'),
  },
  {
    name: 'Recipes',
    updated: new Date('1/17/16'),
  },
  {
    name: 'Work',
    updated: new Date('1/28/16'),
  }
];

  constructor() { }

  ngOnInit() {
  }

}
