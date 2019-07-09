import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {WebcamModule} from 'ngx-webcam';
import { AppRoutingModule } from './app.routing.module';
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

@NgModule({
  imports: [
    AppRoutingModule, 
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
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
