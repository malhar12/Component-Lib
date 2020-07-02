import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Note: Application Custom Wrapper Component Imports
import { MdAutocompleteComponent } from './md-autocomplete/md-autocomplete.component';
import { MdDatepickerComponent } from './md-datepicker/md-datepicker.component';

// Note: Angular Material Imports
import { MatAutocompleteModule,
         MatDatepickerModule,
         MatNativeDateModule,
         MatInputModule,
         MatFormFieldModule } from '@angular/material';

@NgModule({
  declarations: [
    MdAutocompleteComponent,
    MdDatepickerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // Note: Angular Material Imports
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule
  ],
  exports: [
    MdAutocompleteComponent,
    MdDatepickerComponent
  ]
})
export class ComponentsModule { }
