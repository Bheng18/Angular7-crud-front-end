import { NgModule } from '@angular/core';
import {
  MatButtonModule, 
  MatToolbarModule, 
  MatMenuModule, 
  MatListModule, 
  MatCardModule, 
  MatTableModule, 
  MatGridListModule, 
  MatIconModule, 
  MatFormFieldModule, 
  MatInputModule, 
  MatRadioModule, 
  MatSelectModule, 
  MatDatepickerModule, 
  MatCheckboxModule, 
  MatNativeDateModule, 
  MatPaginatorModule, 
  MatSortModule, 
  MatDialogModule,
  MatButtonToggleModule,
  MatSnackBarModule
} from '@angular/material';
// import { CommonModule } from '@angular/common';
const Material_Modules = [
  MatButtonModule,
  MatToolbarModule,
  MatMenuModule,
  MatListModule,
  MatCardModule,
  MatTableModule,
  MatGridListModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatDialogModule,
  MatButtonToggleModule,
  MatSnackBarModule
]

@NgModule({
  // declarations: [],
  imports: [
    Material_Modules
    // CommonModule
  ],
  exports: [Material_Modules]
})
export class MaterialModule { }
