// src/app/product-order/product-order.component.ts

// Import necessary modules and components
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrderDisplayComponent } from '../order-display/order-display.component';
import { TextToSpeechService } from '../services/text-to-speech.service';

// Define the structure of an order item
interface OrderItem {
  product: string;
  quantity: number;
}

// Define the ProductOrderComponent
@Component({
  selector: 'app-product-order', // Selector for the component
  standalone: true, // Indicates that this component is standalone
  imports: [CommonModule, FormsModule, OrderDisplayComponent], // Modules to be imported
  templateUrl: './product-order.component.html', // Path to the template file
  styleUrls: ['./product-order.component.css'], // Path to the CSS file
})
export class ProductOrderComponent {
  // Define the available products and quantities
  products = ['Pencil', 'Eraser', 'Pens'];
  quantities = [0, 1, 2, 3, 4, 5];

  // Initialize an array to store order items with a default item
  orderItems: OrderItem[] = [{ product: '', quantity: 0 }];

  // Flag to control the visibility of the order list
  showOrderList = false;

  // Inject the TextToSpeechService
  constructor(private textToSpeechService: TextToSpeechService) {}

  // Method to add a new item to the orderItems array
  addItem() {
    if (this.orderItems.length < 8) {
      this.orderItems.push({ product: '', quantity: 0 });
    }
  }

  // Method to filter and display the order items
  showOrder() {
    // Filter out items that don't have a product or quantity greater than 0
    this.orderItems = this.orderItems.filter(
      (item) => item.product && item.quantity > 0
    );
    this.showOrderList = true; // Set the flag to true to show the order list
  }

  // Method to convert the order to speech and play it
  readOrder() {
    // Create a string representation of the order
    const orderText = this.orderItems
      .map((item) => `${item.quantity} ${item.product}`)
      .join(', ');

    // Use the textToSpeechService to convert text to speech
    this.textToSpeechService.speak(orderText).subscribe(
      (response: Blob) => {
        // Create an audio object from the response and play it
        const audio = new Audio(URL.createObjectURL(response));
        audio.play();
      },
      (error) => console.error('Error with text-to-speech:', error) // Log any errors
    );
  }
}
