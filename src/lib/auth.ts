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

const DEFAULT_BALANCE = 100;

export const getBalance = (): number => {
    const saved = localStorage.getItem('mockBalance');
    return saved ? parseInt(saved, 10) : DEFAULT_BALANCE;
};

export const updateBalance = (newBalance: number): void => {
    localStorage.setItem('mockBalance', newBalance.toString());
};

export const getProfile = (): { username: string; balance: number } => {
    const savedUsername = localStorage.getItem('mockUsername');
    const balance = getBalance();
    return { username: savedUsername || 'admin', balance };
};