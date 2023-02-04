import axios from 'axios';

export const getAlertsList = async () => {
    return axios.get(` http://localhost:3000/alerts `).then((resp) => {
        return resp?.data
    }).catch((error) => {
        return error
    }
    )
}
export const addAlerts = async (data) => {
    return axios.post(`http://localhost:3000/alerts`, data).then((resp) => {
        return resp?.data
    }).catch((error) => {
        return error
    }
    )
}


export const deleteAlerts = async (id) => {
    return axios.delete(`http://localhost:3000/alerts/${id}`).then((resp) => {
        return resp?.data
    }).catch((error) => {
        return error
    }
    )
}

export const editAlerts = async (id, data) => {
    return axios.put(`http://localhost:3000/alerts/${id}`, data).then((resp) => {
        return resp?.data
    }).catch((error) => {
        return error
    }
    )
}