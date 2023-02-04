import axios from 'axios';
const API_URL = `https://my-json-server.typicode.com/balajigite16/bwjson`;

export const getAlertsList = async () => {
    return axios.get(`${API_URL}/alerts `).then((resp) => {
        return resp?.data
    }).catch((error) => {
        return error
    }
    )
}
export const addAlerts = async (data) => {
    return axios.post(`${API_URL}/alerts`, data).then((resp) => {
        return resp?.data
    }).catch((error) => {
        return error
    }
    )
}


export const deleteAlerts = async (id) => {
    return axios.delete(`${API_URL}/alerts/${id}`).then((resp) => {
        return resp?.data
    }).catch((error) => {
        return error
    }
    )
}

export const editAlerts = async (id, data) => {
    return axios.put(`${API_URL}/alerts/${id}`, data).then((resp) => {
        return resp?.data
    }).catch((error) => {
        return error
    }
    )
}