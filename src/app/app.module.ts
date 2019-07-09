import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {WebcamModule} from 'ngx-webcam';
import {
  MatIconModule,
  MatButtonModule,
  MatInputModule,
  MatTableModule,
  MatDividerModule,
  MatListModule,
  MatSnackBarModule,
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
    ReactiveFormsModule,
    MatDividerModule,
    MatListModule,
    MatSnackBarModule,
    WebcamModule,
    PersonListComponent
  ],
  declarations: [AppComponent, PersonListComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
