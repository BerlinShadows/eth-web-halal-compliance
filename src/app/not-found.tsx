'use client';

import GradientBackground from '@/components/GradientBackground';
import Link from 'next/link';


export default function NotFound() {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                padding: '2rem',
                position: 'relative',
                zIndex: 1,
            }}
        >
            <GradientBackground />
            <div
                style={{
                    fontSize: '6rem',
                    fontWeight: '800',
                    background: 'linear-gradient(135deg, var(--accent), #8b5cf6)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    marginBottom: '1rem',
                    animation: 'pulse 2s infinite',
                }}
            >
                404
            </div>

            <h1 style={{ fontSize: '2.25rem', fontWeight: '800', marginBottom: '1rem' }}>
                Page Not Found
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--muted)', marginBottom: '2rem', maxWidth: '500px' }}>
                The page you’re looking for doesn’t exist or has been moved.
            </p>

            <Link
                href="/"
                style={{
                    padding: '0.85rem 2rem',
                    background: 'var(--accent)',
                    color: 'white',
                    borderRadius: '14px',
                    fontWeight: '700',
                    textDecoration: 'none',
                    boxShadow: '0 4px 12px rgba(126, 34, 206, 0.25)',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 16px rgba(126, 34, 206, 0.35)';
                }}
                onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 12px rgba(126, 34, 206, 0.25)';
                }}
            >
                Go to Home
            </Link>

            <style jsx>{`
          @keyframes pulse {
            0% { opacity: 1; }
            50% { opacity: 0.6; }
            100% { opacity: 1; }
          }
        `}</style>
        </div>
    );
}