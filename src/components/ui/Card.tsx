import { ReactNode } from 'react';

export default function Card({
    children,
    className = '',
    style,
    interactive = false,
}: {
    children: ReactNode;
    className?: string;
    style?: React.CSSProperties;
    interactive?: boolean;
}) {
    const baseStyles: React.CSSProperties = {
        padding: '1.75rem',
        borderRadius: '16px',
        transition: 'all 0.3s cubic-bezier(0.2, 0, 0, 1)',
        ...style,
    };

    if (interactive) {
        return (
            <div
                className={`card ${className}`}
                style={{
                    ...baseStyles,
                    background: 'var(--card-bg)',
                    border: '1px solid var(--border)',
                    cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 10px 20px -5px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 6px -1px rgba(0,0,0,0.03)';
                }}
            >
                {children}
            </div>
        );
    }

    return (
        <div
            className={`card ${className}`}
            style={{
                ...baseStyles,
                background: 'var(--card-bg)',
                border: '1px solid var(--border)',
            }}
        >
            {children}
        </div>
    );
}