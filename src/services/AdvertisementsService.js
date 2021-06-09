import axios from "axios";

export default class AdvertisementsService {
  getAdvertisements() {
    return axios.get(
      "http://localhost:8080/api/job-advertisements/getAllActive"
    );
  }
}
