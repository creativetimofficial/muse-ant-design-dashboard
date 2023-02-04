import axios from 'axios';
const API_URL = `https://my-json-server.typicode.com/balajigite16/bwjson`;

export const getBuildingList = async () => {
    return axios.get(`${API_URL}/buildings`).then((resp) => {
        return resp?.data
    }).catch((error) => {
        return error
    }
    )
}

export const addBuilding = async (data) => {
    return axios.post(`${API_URL}/buildings`, data).then((resp) => {
        return resp?.data
    }).catch((error) => {
        return error
    }
    )
}


export const deleteBuilding = async (id) => {
    return axios.delete(`${API_URL}/buildings/${id}`).then((resp) => {
        return resp?.data
    }).catch((error) => {
        return error
    }
    )
}

export const editBuilding = async (id, data) => {
    return axios.put(`${API_URL}/buildings/${id}`, data).then((resp) => {
        return resp?.data
    }).catch((error) => {
        return error
    }
    )
}
