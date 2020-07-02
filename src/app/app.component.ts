import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'component-lib';
  isChecked: boolean = false;
  disable: boolean = false;
  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      fruit1: new FormControl('', Validators.required),
      fruit2: new FormControl('', Validators.required),
      activePicker: new FormControl(new Date(), Validators.required),
      isChecked: new FormControl(false)
    });
  }

  toggleDatePicker(event): void {
    this.disable = event.checked;
  }

  formatSelectedDate(date: any): string {
    return new Date(date).toDateString();
  }

  formatSelectedFruits(fruit: string): string {
    return fruit.length > 0 ? fruit: 'Please select a fruit';
  }
}
