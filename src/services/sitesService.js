import axios from 'axios';
const API_URL = `https://my-json-server.typicode.com/balajigite16/bwjson`;

export const getSitesList = async () => {
    return axios.get(`${API_URL}/sites`).then((resp) => {
        return resp?.data
    }).catch((error) => {
        return error
    }
    )
}
export const addSites = async (data) => {
    return axios.post(`${API_URL}/sites`, data).then((resp) => {
        return resp?.data
    }).catch((error) => {
        return error
    }
    )
}


export const deleteSites = async (id) => {
    return axios.delete(`${API_URL}/sites/${id}`).then((resp) => {
        return resp?.data
    }).catch((error) => {
        return error
    }
    )
}

export const editSites = async (id, data) => {
    return axios.put(`${API_URL}/sites/${id}`, data).then((resp) => {
        return resp?.data
    }).catch((error) => {
        return error
    }
    )
}