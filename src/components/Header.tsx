'use client';

import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import { logout } from '@/lib/auth';
import ThemeToggle from './ui/ThemeToggle';

export default function Header() {
    const { user, loading } = useAuth();

    if (loading) return null;

    return (
        <header style={{ padding: '1rem 2rem', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
                <Link href="/" style={{ fontWeight: '800', fontSize: '1.5rem', color: 'var(--foreground)' }}>
                    HalalPlay
                </Link>
            </div>

            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                <nav style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
                    <Link href="/games">Games</Link>
                    <Link href="/documentation">Docs</Link>
                    <ThemeToggle />
                </nav>

                {user ? (
                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                        <Link
                            href="/profile"
                            style={{
                                padding: '0.5rem 1rem',
                                background: 'transparent',
                                color: 'var(--accent)',
                                borderRadius: '10px',
                                fontWeight: '600',
                                textDecoration: 'none',
                                border: '1px solid var(--accent)',
                                transition: 'background 0.2s, color 0.2s',
                            }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLElement).style.background = 'rgba(126, 34, 206, 0.08)';
                                (e.currentTarget as HTMLElement).style.color = 'var(--accent-hover)';
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLElement).style.background = 'transparent';
                                (e.currentTarget as HTMLElement).style.color = 'var(--accent)';
                            }}
                        >
                            Profile
                        </Link>
                        <button
                            onClick={() => {
                                logout();
                                window.location.href = '/';
                            }}
                            style={{
                                padding: '0.5rem 1rem',
                                background: 'transparent',
                                color: 'var(--muted)',
                                borderRadius: '10px',
                                fontWeight: '600',
                                border: '1px solid var(--border)',
                                cursor: 'pointer',
                                transition: 'background 0.2s, color 0.2s',
                            }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLElement).style.background = 'rgba(100, 116, 139, 0.08)';
                                (e.currentTarget as HTMLElement).style.color = '#475569';
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLElement).style.background = 'transparent';
                                (e.currentTarget as HTMLElement).style.color = 'var(--muted)';
                            }}
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <Link
                        href="/"
                        style={{
                            padding: '0.5rem 1rem',
                            border: '1px solid var(--accent)',
                            color: 'var(--accent)',
                            borderRadius: '10px',
                            fontWeight: '600',
                            textDecoration: 'none',
                            transition: 'background 0.2s, color 0.2s',
                        }}
                        onMouseEnter={(e) => {
                            (e.currentTarget as HTMLElement).style.background = 'rgba(126, 34, 206, 0.08)';
                            (e.currentTarget as HTMLElement).style.color = 'var(--accent-hover)';
                        }}
                        onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.background = 'transparent';
                            (e.currentTarget as HTMLElement).style.color = 'var(--accent)';
                        }}
                    >
                        Login
                    </Link>
                )}
            </div>
        </header >
    );
}