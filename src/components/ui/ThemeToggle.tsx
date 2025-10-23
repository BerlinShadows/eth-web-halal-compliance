'use client';

import { useThemeContext } from '@/components/context/ThemeContext';

export default function ThemeToggle() {
    const { theme, toggleTheme } = useThemeContext();

    const commonStyles = {
        width: '44px',
        height: '24px',
        position: 'relative' as const,
        background: theme === 'dark'
            ? 'linear-gradient(90deg, #4a00e0, #8e2de2)'
            : 'linear-gradient(90deg, #0f2027, #203a43, #2c5364)',
        borderRadius: '12px',
        cursor: 'pointer',
        border: 'none',
        outline: 'none',
        transition: 'background 0.4s ease',
        WebkitTapHighlightColor: 'transparent',
    };

    const thumbStyles = {
        position: 'absolute' as const,
        top: '2px',
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        backgroundColor: '#fff',
        boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
        transition: 'transform 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55)',
        transform: theme === 'dark' ? 'translateX(20px)' : 'translateX(2px)',
    };

    return (
        <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            style={commonStyles}
        >
            <div style={thumbStyles} />
        </button>
    );
}