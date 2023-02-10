import axios from "axios";
const API_URL = `https://my-json-server.typicode.com/balajigite16/bwjson`;

export const getColumnChartData = async () => {
  return axios
    .get(`${API_URL}/dashboardData`)
    .then((resp) => {
      return resp?.data;
    })
    .catch((error) => {
      return error;
    });
};


export const getConsumptionChartData = async () => {
  return axios
    .get(`${API_URL}/dashboardData`)
    .then((resp) => {
      return resp?.data;
    })
    .catch((error) => {
      return error;
    });
};


export const getPortfolioChartData = async () => {
  return axios
    .get(`${API_URL}/dashboardData`)
    .then((resp) => {
      return resp?.data;
    })
    .catch((error) => {
      return error;
    });
};