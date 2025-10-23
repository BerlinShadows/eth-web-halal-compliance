import { useEffect, useState } from 'react';

const THEME_KEY = 'eth-theme';

export const useTheme = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = () => {
            if (!localStorage.getItem(THEME_KEY)) {
                const newTheme = mediaQuery.matches ? 'dark' : 'light';
                setTheme(newTheme);
                document.documentElement.setAttribute('data-theme', newTheme);
            }
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem(THEME_KEY, newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    return { theme, toggleTheme };
};