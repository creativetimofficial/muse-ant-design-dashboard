import axios from 'axios';
const API_URL = ` http://localhost:3000/dashboardData`;

export const getConsumptionData = async () => {
    return axios.get(`${API_URL} `).then((resp) => {
        return resp?.data
    }).catch((error) => {
        return error
    }
    )
}


export const getWeatherInfoData = async () => {
    return axios.get(`${API_URL}`).then((resp) => {
        return resp?.data
    }).catch((error) => {
        return error
    }
    )
}

