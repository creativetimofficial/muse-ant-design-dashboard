import axios from "axios";
const API_URL = ` http://localhost:3000/dashboardChartData`;

export const getColumnChartData = async () => {
  return axios
    .get(`${API_URL}`)
    .then((resp) => {
      return resp?.data;
    })
    .catch((error) => {
      return error;
    });
};
