// rolesAPI.js
import { apiClient } from '../utilities/apiClient';

export const getAllRoles = async () => {
    try {
        const response = await apiClient.get('/api/Roles');
        return response?.status === 200 ? { error: false, data: response?.data } : { error: true, data: `Unexpected status code ${response?.status}` };
    } catch (error) {
        return { error: true, data: `Error fetching roles: ${error}` };
    }
};

export const createRole = async (roleData) => {
    try {
        const response = await apiClient.post('/api/Roles', roleData);
        return response?.status === 201 ? { error: false, data: response?.data } : { error: true, data: `Unexpected status code ${response?.status}` };
    } catch (error) {
        if (error.response) {
            return { error: true, data: `Error: ${error.response?.data}` };
        } else {
            return { error: true, data: `Error creating role: ${error}` };
        }
    }
};

export const getRoleDetails = async (applicationRoleId) => {
    try {
        const response = await apiClient.get(`/api/Roles/${applicationRoleId}`);
        return response?.status === 200 ? { error: false, data: response?.data } : { error: true, data: `Unexpected status code ${response?.status}` };
    } catch (error) {
        return { error: true, data: `Error fetching role details: ${error}` };
    }
};
export const updateRole = async (applicationRoleId, roleData) => {
    try {
        const response = await apiClient.put(`/api/Roles/${applicationRoleId}`, roleData);
        return response?.status === 202 ? { error: false, data: response?.data } : { error: true, data: `Unexpected status code ${response?.status}` };
    } catch (error) {
        if (error.response) {
            return { error: true, data: `Error: ${error.response?.data}` };
        } else {
            return { error: true, data: `Error updating role: ${error}` };
        }
    }
};
