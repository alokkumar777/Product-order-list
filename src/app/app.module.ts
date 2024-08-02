// app.module.ts

// Import necessary Angular modules and components
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductOrderComponent } from './product-order/product-order.component';
import { OrderDisplayComponent } from './order-display/order-display.component';

// Define the root module
@NgModule({
  declarations: [
    AppComponent, // Root component
    ProductOrderComponent, // Product order component
    OrderDisplayComponent // Order display component
  ],
  imports: [
    BrowserModule, // For browser support
    FormsModule, // For template-driven forms
    HttpClientModule // For HTTP client support
  ],
  providers: [
    provideHttpClient(withFetch()) // Provide HTTP client with fetch support
  ],
  bootstrap: [AppComponent] // Bootstrap the root component
})
export class AppModule { }
