// src/app/services/text-to-speech.service.ts

// Import necessary Angular modules and classes
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // Register the service at the root level
})
export class TextToSpeechService {
  // API key for the text-to-speech service
  private apiKey = 'e072633a70msh37f04e658f134a6p1d7b41jsnd27c28794b70'; // My API key

  // URL for the text-to-speech service
  private url = 'https://voicerss-text-to-speech.p.rapidapi.com/';

  // Inject HttpClient for making HTTP requests
  constructor(private http: HttpClient) {}

  // Method to convert text to speech
  speak(text: string): Observable<Blob> {
    // Set the headers for the HTTP request
    const headers = new HttpHeaders({
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': this.apiKey,
      'X-RapidAPI-Host': 'voicerss-text-to-speech.p.rapidapi.com',
    });

    // Set the body of the HTTP request
    const body = new URLSearchParams({
      src: text, // Text to convert
      hl: 'en-us', // Language
      r: '1.5', // Rate of speech
      c: 'mp3', // Audio codec
      f: '8khz_8bit_mono', // Audio format
    });

    // Make the POST request and return the response as a Blob
    return this.http.post(this.url, body.toString(), {
      headers,
      responseType: 'blob',
    });
  }
}
