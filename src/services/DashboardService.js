import axios from 'axios';
const API_URL = `https://my-json-server.typicode.com/balajigite16/bwjson`;
export const getConsumptionData = async () => {
    return axios.get(`${API_URL}/dashboardData `).then((resp) => {
        return resp?.data
    }).catch((error) => {
        return error
    }
    )
}

export const getEnergyCostData = async () => {
    return axios.get(`${API_URL}/dashboardData `).then((resp) => {
        return resp?.data
    }).catch((error) => {
        return error
    }
    )
}

export const getCo2eData = async () => {
    return axios.get(`${API_URL}/dashboardData`).then((resp) => {
        return resp?.data
    }).catch((error) => {
        return error
    }
    )
}

export const getWeatherInfoData = async () => {
    return axios.get(`${API_URL}/dashboardData`).then((resp) => {
        return resp?.data
    }).catch((error) => {
        return error
    }
    )
}

