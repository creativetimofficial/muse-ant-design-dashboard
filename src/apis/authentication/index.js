import { apiClient } from '../utilities/apiClient';

export const login = async (userData) => {
    try {
        const response = await apiClient.post('/api/Account/Login', userData);  
        if (response?.status === 200) {
            return {error:false, data: response?.data}; 
        } else {
            return {error:true, data:`Unexpected status code ${response?.status}` }; 
        }
    } catch (error) {
        return {error:true, data: `Error logging in: ${error}`}; 
    }
};

// export const checkPermission = async (permissionName, setPermission) => {
//     try {
//         const response = await apiClient.get(`/api/Account/Verify?permissionName=${permissionName}`);
//         console.log(response);
//         if (response?.status === 200) {
//             setPermission({error:false, data: response?.data})
//             return {error:false, data: response?.data};
//         } else {
//             setPermission({error:true, status: response?.status, data:`Unexpected status code ${response?.status}`})
//             return {error:true, status: response?.status, data:`Unexpected status code ${response?.status}`};
//         }
//     } catch (error) {
//         setPermission({error:true, status: error.response?.status, data: `Error checking permission: ${error}`})
//         return {error:true, status: error.response?.status, data: `Error checking permission: ${error}`};
//     }
// };
export const checkPermission = async (permissionName, history) => {
    try {
        const response = await apiClient.get(`/api/Account/Verify?permissionName=${permissionName}`);
        console.log(response);
        if (response?.status === 200) {
            if(!response?.data?.canView)
                return history.push("/un-authorized");
            return {error:false, data: response?.data};
        } else {
            return {error:true, status: response?.status, data:`Unexpected status code ${response?.status}`};
        }
    } catch (error) {
        return {error:true, status: error.response?.status, data: `Error checking permission: ${error}`};
    }
};
