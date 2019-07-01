import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  MatIconModule,
  MatButtonModule,
  MatInputModule,
  MatTableModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { PersonListComponent } from './person-list.component';

@NgModule({
  imports: [ 
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ AppComponent, PersonListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
