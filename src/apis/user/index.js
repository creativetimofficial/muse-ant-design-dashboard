import { apiClient } from '../utilities/apiClient';

export const getAllUsers = async () => {
    try {
        const response = await apiClient.get('/api/Users');
        if (response?.status === 200) {
            return {error:false, data: response?.data}; 
        } else {
            return {error:true, data:`Unexpected status code ${response?.status}` }; 
        }
    } catch (error) {
        return {error:true, data: `Error logging in: ${error}`}; 
    }
};
export const createUser = async (userData) => {
    try {
        const response = await apiClient.post('/api/Users',userData);
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
export const updateUser = async (applicationUserId, userData) => {
    console.log("applicationUserId", applicationUserId)
    try {
        const response = await apiClient.put(`/api/Users/${applicationUserId}`,userData);  
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
export const getUserDetails = async (applicationUserId) => {
    try {
        const response = await apiClient.get(`/api/Users/${applicationUserId}`);  
        if (response?.status === 200) {
            return {error:false, data: response?.data}; 
        } else {
            return {error:true, data:`Unexpected status code ${response?.status}` }; 
        }
    } catch (error) {
        return {error:true, data: `Error logging in: ${error}`}; 
    }
};