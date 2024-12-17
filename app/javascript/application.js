import "./stylesheets/application.scss";
import "bootstrap";
import { Application } from "@hotwired/stimulus";


// Initialiser Stimulus
const application = Application.start();

// Importer manuellement vos contrôleurs ici
import HelloController from "./controllers/hello_controller";
import WeatherController from "./controllers/weather_controller";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";

// Enregistrer manuellement chaque contrôleur
application.register("hello", HelloController);
application.register("weather", WeatherController);

// Exporter l'application Stimulus si nécessaire
export default application;
