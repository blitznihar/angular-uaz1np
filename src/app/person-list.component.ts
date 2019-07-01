import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { TableDataSource, ValidatorService } from 'angular4-material-table';

import { PersonValidatorService } from './person-validator.service';
import { Person } from './person';

@Component({
  selector: 'app-person-list',
  providers: [
    {provide: ValidatorService, useClass: PersonValidatorService }
  ],
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent implements OnInit {

  constructor(private personValidator: ValidatorService) { }

  displayedColumns = ['policyno', 'name', 'age', 'actionsColumn'];

  @Input() personList = [ 
    { policyno: '123123', name: 'Mark', age: 15 },
    { policyno: '123123', name: 'Brad', age: 50 },
    ] ;
  @Output() personListChange = new EventEmitter<Person[]>();

  dataSource: TableDataSource<Person>;


  ngOnInit() {
    this.dataSource = new TableDataSource<any>(this.personList, Person, this.personValidator);

    this.dataSource.datasourceSubject.subscribe(personList => this.personListChange.emit(personList));
  }
}