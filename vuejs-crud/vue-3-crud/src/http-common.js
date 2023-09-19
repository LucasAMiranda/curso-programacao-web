import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8080/api", // Altere esta URL para a URL da sua API
  headers: {
    "Content-Type": "application/json"
  }
});
