// rolesAPI.js
import { apiClient } from '../utilities/apiClient';

export const getPermissionNames = async () => {
    try {
        const response = await apiClient.get('/api/Permissions');
        return response?.status === 200 ? { error: false, data: response?.data } : { error: true, data: `Unexpected status code ${response?.status}` };
    } catch (error) {
        return { error: true, data: `Error fetching roles: ${error}` };
    }
};
