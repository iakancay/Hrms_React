import axios from "axios";

export default class PositionService {
  getPositions() {
    return axios.get("http://localhost:8080/api/positions/getall");
  }

  registerCandidate() {
    return axios.post("http://localhost:8080//api/candidates/add");
  }
}
