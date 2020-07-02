import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'md-autocomplete',
  templateUrl: './md-autocomplete.component.html',
  styleUrls: ['./md-autocomplete.component.css'],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => MdAutocompleteComponent), multi: true}
  ]
})
export class MdAutocompleteComponent implements OnInit, ControlValueAccessor {

  @Input('disable') disable: boolean = false;
  @Input('placeholder') placeholder: string = '';
  options: Array<string> = ['Banana', 'PineApple', 'Apple', 'Grape', 'BlueBerry', 'Kiwi'];
  filteredList: Array<string> = [];
  @Input('searchType') searchType: string = 'fuzzy';

  // myAutoControl: string = '';

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      myAutoControl: new FormControl('', [])
    });

    this.initializeOptions();


    this.form.controls['myAutoControl'].valueChanges.subscribe((value: string) => {

      if (value.length === 0) {
        this.initializeOptions();
        return;
      }

      this.filteredList = this.filter(value);
    });
  }

  private filter(value: string): Array<string> {
    switch (this.searchType) {
      case 'fuzzy': {
        return this.fuzzySearch(value);
        break;
      }
      case 'startsWith': {
        return this.startsWithSearch(value);
        break;
      }
      default: {
        return this.fuzzySearch(value);
        break;
      }
    }
  }

  fuzzySearch(value: string): Array<string> {
    return this.options.filter((option: string) => {
      if (option.toLowerCase().includes(value.toLowerCase())) {
        return option;
      }
    });
  }

  startsWithSearch(value: string): Array<string> {
    return this.options.filter((option: string) => {
      if (option.toLowerCase().startsWith(value.toLowerCase())) {
        return option;
      }
    });
  }

  selectedOption(event): void {
    this.onChange(event.option.value);
  }

  initializeOptions(): void {
    this.filteredList = this.options;
  }

  onChange = (_: any) => {};

  writeValue(val: any): void {
    this.form.controls['myAutoControl'].setValue(val);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {}

}
