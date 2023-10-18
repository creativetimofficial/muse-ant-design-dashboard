import { useContext, useEffect, useState} from 'react';
import { UserContext } from '../context/UserContext';
import { checkPermission } from '../apis/authentication';

const usePermission = (page) => {
    
    const [permissions, setPermissions] = useState(null);
    const [loading, setLoading] = useState(!!page);
    // console.log('Checking permission for:', page);
    // console.log('Current permissions:', permissions);

    useEffect(() => {
        if (!page || permissions[page]) return;
        
        
        checkPermission(page).then((res) => {
            setPermissions(prev => ({ ...prev, [page]: res }));
            setLoading(false);
        });
    }, [page, permissions, setPermissions]);

    return permissions[page];
};

export default usePermission;
