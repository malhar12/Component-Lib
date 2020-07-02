# ComponentLib

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.3.

# Angular Application is deployed live and can be found at

https://component-lib.netlify.app/

# Details of the Application

The 2 components being developed in this application are:
1. AutoComplete Component
    - There are 2 variants of the autocomplete component. The first variant is the fuzzy (match of character at any location in the options) and the second variant is the startsWith (match only for first character).
2. DatePicker Component
    - Datepicker component is a simple component through which the user can either type into the search field a valid date or pick a date from the datpicker panel which opens on click of the calendar icon.

For Both the components, I have made use of Angular Material Library as the underlying component functionalities.

Topics covered in this assignment:
1. Angular Forms
2. Modular Architecture of an Angular Application.
3. Custom Form Elements i.e. creating custom ngModels.

# Architecture of the Application

There is one Base Module which is the App Module.
I have created a feature Module or a Shared Module, in this case "Components Module" which holds our wrapper components and exports them. We in turn import this "Comopnents Module" in our Base (App Module).

# Steps for running the application locally

1. Clone the Git Repo.
2. Run command 'npm install'.
3. Run command 'ng serve'.

# Future scope of the Components developed in this application

1. Currently, the autocomplete is working with a static list of options and the filtering is also happening in memory. But, this can be further expanded, by fetching the filtered list via REST services.
2. Showing Proper appropriate validation messages. Especially, in case of date. Currently, if we enter an invalid date or invalid characters in the date input field, the logic indicates the field as invalid but picks up (January 1, 1970) in case the user sets an invalid date.
