import { useState, useEffect } from 'react';
import { getCurrentUser } from '@/lib/auth';

export const useAuth = () => {
    const [user, setUser] = useState<ReturnType<typeof getCurrentUser> | undefined>(undefined);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const user = getCurrentUser();
        setUser(user);
        setLoading(false);
    }, []);

    return { user, loading, isAuthenticated: !!user };
};