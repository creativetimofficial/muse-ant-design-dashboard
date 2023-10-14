import { apiClient } from '../utilities/apiClient';

export const getAllMakes = async () => {
    try {
        const response = await apiClient.get('/api/Makes');
        if (response?.status === 200) {
            return {error:false, data: response?.data}; 
        } else {
            return {error:true, data:`Unexpected status code ${response?.status}` }; 
        }
    } catch (error) {
        return {error:true, data: `Error logging in: ${error}`}; 
    }
};
export const createMake = async (userData) => {
    try {
        const response = await apiClient.post('/api/Makes',userData);
        if (response?.status === 201) {
            return {error:false, data: response?.data}; 
        } else {
            return {error:true, data:`Unexpected status code ${response?.status}` }; 
        }
    }catch(error) {
        if (error.response) {
        return {error:true, data: `Error: ${error.response?.data}`}; 
        } else {
          return {error:true, data: `Error logging in: ${error}`}; 
        }
      }
};
export const updateMake = async (applicationUserId, userData) => {
    try {
        const response = await apiClient.put(`/api/Makes/${applicationUserId}`,userData);  
        if (response?.status === 202) {
            return {error:false, data: response?.data}; 
        } else {
            return {error:true, data:`Unexpected status code ${response?.status}` }; 
        }
    } 
    catch(error) {
        if (error.response) {
        return {error:true, data: `Error: ${error.response?.data}`}; 
        } else {
          return {error:true, data: `Error logging in: ${error}`}; 
        }
      }
};
export const getMakeDetails = async (applicationUserId) => {
    try {
        const response = await apiClient.get(`/api/Makes/${applicationUserId}`);  
        if (response?.status === 200) {
            return {error:false, data: response?.data}; 
        } else {
            return {error:true, data:`Unexpected status code ${response?.status}` }; 
        }
    } catch (error) {
        return {error:true, data: `Error logging in: ${error}`}; 
    }
};