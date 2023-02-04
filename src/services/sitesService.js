import axios from 'axios';

export const getSitesList = async () => {
    return axios.get(` http://localhost:3000/sites`).then((resp) => {
        return resp?.data
    }).catch((error) => {
        return error
    }
    )
}
export const addSites = async (data) => {
    return axios.post(`http://localhost:3000/sites`, data).then((resp) => {
        return resp?.data
    }).catch((error) => {
        return error
    }
    )
}


export const deleteSites = async (id) => {
    return axios.delete(`http://localhost:3000/sites/${id}`).then((resp) => {
        return resp?.data
    }).catch((error) => {
        return error
    }
    )
}

export const editSites = async (id, data) => {
    return axios.put(`http://localhost:3000/sites/${id}`, data).then((resp) => {
        return resp?.data
    }).catch((error) => {
        return error
    }
    )
}