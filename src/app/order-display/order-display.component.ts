// src/app/order-display/order-display.component.ts

// Import necessary modules and components
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

// Define the structure of an order item
interface OrderItem {
  product: string;
  quantity: number;
}

// Define the OrderDisplayComponent
@Component({
  selector: 'app-order-display', // Selector for the component
  standalone: true, // Indicates that this component is standalone
  imports: [CommonModule], // Modules to be imported
  templateUrl: './order-display.component.html', // Path to the external HTML template
  styleUrls: ['./order-display.component.css'], // Path to the external CSS file
})
export class OrderDisplayComponent {
  // Define an input property to receive order items from the parent component
  // This allows the parent component to pass data to this child component
  @Input() orderItems: OrderItem[] = [];

  // You can add additional methods here if needed, for example:
  //
  getTotalItems(): number {
    return this.orderItems.reduce((total, item) => total + item.quantity, 0);
  }

  getTotalProducts(): number {
    return this.orderItems.length;
  }
}
