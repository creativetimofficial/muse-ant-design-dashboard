import axios from 'axios';

export const getBuildingList = async () => {
    return axios.get(`http://localhost:3000/buildings`).then((resp) =>{
        return resp?.data
    }).catch((error)=>{
        return error
    }
    )
}

export const addBuilding = async (data) => {
    return axios.post(`http://localhost:3000/buildings`,data).then((resp) =>{
        return resp?.data
    }).catch((error)=>{
        return error
    }
    )
}


export const deleteBuilding = async (id) => {
    return axios.delete(`http://localhost:3000/buildings/${id}`).then((resp) =>{
        return resp?.data
    }).catch((error)=>{
        return error
    }
    )
}

export const editBuilding = async (id, data) => {
    return axios.put(`http://localhost:3000/buildings/${id}`, data).then((resp) =>{
        return resp?.data
    }).catch((error)=>{
        return error
    }
    )
}
