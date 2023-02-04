import axios from 'axios';

export const getMeterList = async () => {
    return axios.get(`http://localhost:3000/meter`).then((resp) => {
        return resp?.data
    }).catch((error) => {
        return error
    }
    )
}

export const addMeter = async (data) => {
    return axios.post(`http://localhost:3000/meter`, data).then((resp) => {
        return resp?.data
    }).catch((error) => {
        return error
    }
    )
}


export const deleteMeter = async (id) => {
    return axios.delete(`http://localhost:3000/meter/${id}`).then((resp) => {
        return resp?.data
    }).catch((error) => {
        return error
    }
    )
}

export const editMeter = async (id, data) => {
    return axios.put(`http://localhost:3000/meter/${id}`, data).then((resp) => {
        return resp?.data
    }).catch((error) => {
        return error
    }
    )
}