import { useState, useEffect } from 'react';
import {
    getCurrentUser,
    logout as logoutApi,
    getProfile,
} from '@/lib/auth';

export const useAuth = () => {
    const [user, setUser] = useState<ReturnType<typeof getCurrentUser>>(null);
    const [profile, setProfile] = useState<ReturnType<typeof getProfile> | null>(null);
    const [loading, setLoading] = useState(true);

    const loadAuthData = () => {
        const currentUser = getCurrentUser();
        const currentProfile = currentUser ? getProfile() : null;
        setUser(currentUser);
        setProfile(currentProfile);
        setLoading(false);
    };

    useEffect(() => {
        loadAuthData();

        const handleStorageChange = (e: StorageEvent) => {
            if (e.key === 'mockAuth' || e.key === 'mockUsername' || e.key === 'mockBalance') {
                loadAuthData();
            }
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    const logout = async () => {
        logoutApi();
        setUser(null);
        setProfile(null);
    };

    return {
        user,
        profile,
        loading,
        isAuthenticated: !!user,
        logout,
    };
};