const MOCK_USER = { id: '1', username: 'admin' };

export const login = async (username: string, password: string): Promise<{ user: typeof MOCK_USER } | null> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (username === 'admin' && password === 'admin') {
                localStorage.setItem('mockAuth', 'true');
                resolve({ user: MOCK_USER });
            } else {
                resolve(null);
            }
        }, 300);
    });
};

export const logout = () => {
    localStorage.removeItem('mockAuth');
};

export const getCurrentUser = (): typeof MOCK_USER | null => {
    const auth = localStorage.getItem('mockAuth');
    return auth === 'true' ? MOCK_USER : null;
};

export const updateProfile = async (data: { username: string }): Promise<boolean> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            localStorage.setItem('mockUsername', data.username);
            resolve(true);
        }, 400);
    });
};

export const getProfile = (): { username: string } => {
    const saved = localStorage.getItem('mockUsername');
    return { username: saved || 'admin' };
};