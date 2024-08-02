// src/app/app.component.ts

// Import necessary Angular components
import { Component } from '@angular/core';
import { ProductOrderComponent } from './product-order/product-order.component';

// Define the root component
@Component({
  selector: 'app-root', // Selector for the root component
  standalone: true, // Indicates that this component is standalone
  imports: [ProductOrderComponent], // Import the ProductOrderComponent
  template: `
    <!-- Template for the root component -->
    <app-product-order></app-product-order>
  `,
})
export class AppComponent {}
