import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WeatherdataService } from './service/weatherdata.service';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'weather-app';

  constructor(private weatherService: WeatherdataService) {}
  public userInput: string = '';
  public data: any;

  async getWeather() {
    try {
      this.weatherService = await this.weatherService.getWeather(
        this.userInput
      );

      console.log(this.weatherService);
      this.data = this.weatherService;
      console.log(this.userInput);
    } catch (error) {
      // Handle error
    }
    this.userInput = '';
  }
}
