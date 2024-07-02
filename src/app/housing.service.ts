import { Injectable } from "@angular/core";
import { Housinglocation } from "./housinglocation";

@Injectable({
  providedIn: "root"
})

export class HousingService {
  readonly baseUrl = "https://angular.dev/assets/tutorials/common";
  url = "http://localhost:3000/locations";

  constructor() { }

  async getAllHousingLocations(): Promise<Housinglocation[]> {
    const data = await fetch(this.url);
    const res = await data.json();
    return res || [];
  }

  async getHousingLocationById(id: number): Promise<Housinglocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    const res = await data.json();
    return res || {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Housing application received from ${firstName} ${lastName} via ${email}`);
  }

}
