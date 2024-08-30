import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class WeatherdataService {
  constructor() {}

  async getWeather(city: string) {
    const options = {
      method: 'GET',
      url: `https://open-weather13.p.rapidapi.com/city/${city}/EN`,
      headers: {
        'X-RapidAPI-Key': 'b4d80eb25amshab33b4aedb678e0p15409ajsn726e68c4ff28',
        'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
