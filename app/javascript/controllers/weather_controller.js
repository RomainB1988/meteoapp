import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["output", "input"];

  connect() {
    console.log("Weather controller connected");
  }

  async fetchWeather() {
    const apiKey = "7155f21f19295a86eb9f37b0fb42949e";
    const city = this.inputTarget.value || "Paris";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      this.displayWeather(data);
    } catch (error) {
      console.error("Erreur de récupération des données météo :", error);
      this.outputTarget.textContent = "Erreur lors du chargement des données.";
    }
  }

  displayWeather(data) {
    this.outputTarget.textContent = `Il fait ${data.main.temp}°C à ${data.name} avec un temps ${data.weather[0].description}.`;
  }
}
