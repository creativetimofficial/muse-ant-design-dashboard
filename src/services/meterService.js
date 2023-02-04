import axios from 'axios';
const API_URL = `https://my-json-server.typicode.com/balajigite16/bwjson`;

export const getMeterList = async () => {
    return axios.get(`${API_URL}/meter`).then((resp) => {
        return resp?.data
    }).catch((error) => {
        return error
    }
    )
}

export const addMeter = async (data) => {
    return axios.post(`${API_URL}/meter`, data).then((resp) => {
        return resp?.data
    }).catch((error) => {
        return error
    }
    )
}


export const deleteMeter = async (id) => {
    return axios.delete(`${API_URL}/meter/${id}`).then((resp) => {
        return resp?.data
    }).catch((error) => {
        return error
    }
    )
}

export const editMeter = async (id, data) => {
    return axios.put(`${API_URL}/meter/${id}`, data).then((resp) => {
        return resp?.data
    }).catch((error) => {
        return error
    }
    )
}