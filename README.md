# Shribala_capestone_Angular_project

Basic Calculator App using Angular
Project Integration: Must Implement the concepts like AppComponent, HTML, CSS with
Bootstrap, Template Driven Form, Two Way Data Binding, Component Properties and
Control Statement to develop the app.
Components Required: AppComponent.
Project Layout: Create a Create a TDF which should contain 1 main heading, 1 input field
and a table with several number and operand buttons in AppComponent with some custom
CSS and bootstrap classes applied.


Html code:

<!-- Main container with Bootstrap class 'container'  -->
<div class="container mt-5">

  
   <!-- Outer calculator box with custom 'calculator-grid' class for grid, and 'bg-primary' for CSS with bootstraping-->
  <div class="calculator-grid shadow bg-primary">
    
    
     <!-- Header area of calculator grid -->
    <div class="calculator-header">
      <h2> Angular Calculator </h2>  
    </div>
    <!-- 2. Usage of 'FORM' where user will enter the input value(Inside the box), Used 'ngModel' within the 'Form'
     Also implementation of Two-Way Data Binding using 'ngModel' -->
     <!-- Input field that shows the current calculation/result-->
    <form>
      <input type="text" 
           class="form-control text-end fs-4 bg-white calculator-display" 
           [(ngModel)]="display" 
           name="display"
           readonly>
           

    </form>  
    
    <!-- 3. Button Grid -->
    <!-- Usage of *ngFor for looping--> 
     <!--Array contains: numbers (0-9), operators (+,-,*,/), decimal point (.), and clear (AC) -->

    <ng-container *ngFor="let btn of ['7','8','9','/','4','5','6','*','1','2','3','-','AC','0','.','+']">
      <!-- Each calculator button with dynamic styling and behavior -->
      <!-- Usage of  [ngClass] for condition based add/removal of css classes-->
      
      <button class="btn btn-lg"
              [ngClass]="{
                'btn-danger': btn === 'AC', 
                'btn-info': ['/','*','-','+'].includes(btn),
                'btn-outline-secondary': !['AC','/','*','-','+'].includes(btn)
              }"
              (click)="btn === 'AC' ? clear() : press(btn)">   <!--  Click event handler: -->
        {{btn}} <!-- Display the button's value (number, operator, or 'AC') -->
      </button>
    </ng-container>
    
    <!-- 4. Equals Button -->
     <!-- Equals button spans full width of calculator grid -->
    <button class="btn btn-success btn-lg equal-btn" (click)="calculate()">=</button>


/* ========== CALCULATOR GRID CONTAINER ========== */

.calculator-grid {
  display: grid;  
  grid-template-columns: repeat(4, 1fr); /* 4 columns for buttons */
  width: 360px;
  margin: 0 auto;
  padding: 20px;
  gap: 12px;
  border: 5px solid #333;
  border-radius: 10px;
  background: #f0f0f0; /* Light gray background for the whole box */
  box-sizing: border-box;/* Include padding and border in the element's total width/height  */
}

/* ========== FORM WRAPPER FOR DISPLAY INPUT ========== */

.calculator-grid form {
  grid-column: span 4; /* Make form span all 4 columns like the input did */
  margin: 0; /* Remove any default browser margins */
  padding: 0; /* Remove any default browser padding */
}

/* The blue header section at the top showing "Angular Calculator" */
.calculator-header {
    grid-column: span 4;
    background-color: #0d6dfd9d; /* Bootstrap Primary Blue */
    color: black;
    padding: 5px; 
    border-radius: 5px;
    text-align: center;
    margin-bottom: 10px;
    font-size: 16px; 
}
/* ========== CALCULATOR DISPLAY ========== */
/* Make Display Input span all 4 columns */
.calculator-display {
  width: 100%; 
  height: 40px;
  margin-bottom: 10px;
  text-align: right;
  border: 1px solid #ccc;
  font-size: 32px; 
  padding: 5px 10px;
  box-sizing: border-box; /* Include padding and border in width calculation */
}
/* Make Equal Button span all 4 columns */
.equal-btn {
  grid-column: span 4;
  margin-top: 5px;
}
/* ========== CALCULATOR BUTTONS ========== */
.calculator-grid button {
    height: 60px; 
    font-size: 20px; 
    font-weight: 600; 
    border-radius: 5px;
    border: 1px solid #ccc;
    cursor: pointer;
}
