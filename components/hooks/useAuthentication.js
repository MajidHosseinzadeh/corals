import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const useAuthentication = () => {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const checkAuthentication = async () => {
            try {
                const encryptedToken = localStorage.getItem('accessToken');
                if (!encryptedToken) {
                    throw new Error('false');
                }
                else {
                    setIsAuthenticated(true);
                    return true;
                }

            } catch (err) {
                console.log(err);
                return false;
            }
        };

        checkAuthentication();
    }, [router]);

    return isAuthenticated;
};

export default useAuthentication;
