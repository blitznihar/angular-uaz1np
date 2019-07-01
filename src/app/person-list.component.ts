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
showSelected: boolean;
  constructor(private personValidator: ValidatorService) { 
    this.showSelected = false;
    }
    ShowButton() {
        this.showSelected = true;
    }
    HideButton() {
        this.showSelected = false;
    }
  displayedColumns = ['policyno', 'name', 'age', 'payment', 'actionsColumn'];

  @Input() personList = [ 
    { policyno: '123124', name: 'Mark Smith', age: 28, payment: 2500.54},
    { policyno: '123123', name: 'Brad Johnson', age: 43, payment: 3200.62 },
        { policyno: '123123', name: 'Oliver Williams', age: 46, payment: 3200.88 },
            { policyno: '123126', name: 'Harry Jones', age: 42, payment: 3200.16 },
                { policyno: '123128', name: 'Jack Davis', age: 51, payment: 3200.25 },
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


}