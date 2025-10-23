'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function GlobalLoader() {
    const pathname = usePathname();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);
    }, [pathname]);

    if (!loading) return null;

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                background: 'var(--background)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 10000,
                color: 'var(--foreground)',
            }}
        >
            <div
                style={{
                    width: '48px',
                    height: '48px',
                    border: '3px solid transparent',
                    borderTop: '3px solid var(--accent)',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite',
                }}
            />
            <p style={{ marginTop: '1rem', fontSize: '1rem', opacity: 0.8 }}>Loading...</p>

            <style jsx>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
        </div>
    );
}