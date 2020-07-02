import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'md-datepicker',
  templateUrl: './md-datepicker.component.html',
  styleUrls: ['./md-datepicker.component.css'],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => MdDatepickerComponent), multi: true}
  ]
})
export class MdDatepickerComponent implements OnInit, ControlValueAccessor {

  @Input('disable') disable: boolean = false;
  @Input('placeholder') placeholder: string = '';
  myDateControl: Date;

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      myDateControl: new FormControl()
    });
  }

  dateChange(event): void {
    this.onChange(event.value);
  }

  onChange = (_: any) => {};

  writeValue(val: any): void {
    this.form.controls['myDateControl'].setValue(val);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {}

}
