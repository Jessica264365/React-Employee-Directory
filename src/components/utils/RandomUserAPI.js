import axios from "axios";

const URL = "https://randomuser.me/api/?results=100";
function retrieveUsers() {
  return axios.get(URL);
}
export default retrieveUsers;
