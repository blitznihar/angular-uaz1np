import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TableDataSource, ValidatorService } from 'angular4-material-table';
import {MatSnackBar} from '@angular/material/snack-bar';
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

  displayedColumns = ['policyno', 'name', 'age', 'payment', 'actionsColumn'];

  @Input() personList = [ 
    { policyno: '123124', name: 'Mark', age: 15, payment: 2500.54},
    { policyno: '123123', name: 'Brad', age: 50, payment: 3200.62 },
        { policyno: '123123', name: 'Brad', age: 50, payment: 3200.88 },
            { policyno: '123126', name: 'Brad', age: 50, payment: 3200.16 },
                { policyno: '123128', name: 'Brad', age: 50, payment: 3200.25 },
    ] ;
  @Output() personListChange = new EventEmitter<Person[]>();

  dataSource: TableDataSource<Person>;


  ngOnInit() {
    this.dataSource = new TableDataSource<any>(this.personList, Person, this.personValidator);

    this.dataSource.datasourceSubject.subscribe(personList => this.personListChange.emit(personList));
  }
  getTotalCost() {
    return this.personList.map(t => t.payment).reduce((acc, value) => acc + value, 0);
  }

    openDialog() {
  }

}