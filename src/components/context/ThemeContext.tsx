'use client';

import { createContext, useContext, ReactNode } from 'react';
import { useTheme } from '@/hooks/useTheme';

type ThemeContextType = {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const themeData = useTheme();
    return <ThemeContext.Provider value={themeData}>{children}</ThemeContext.Provider>;
};

export const useThemeContext = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useThemeContext must be used within a ThemeProvider');
    }
    return context;
};