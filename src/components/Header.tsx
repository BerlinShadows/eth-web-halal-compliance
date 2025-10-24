'use client';

import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import { logout } from '@/lib/auth';
import ThemeToggle from './ui/ThemeToggle';
import { useEffect, useState } from 'react';

export default function Header() {
    const { user, loading } = useAuth();
    const [isHidden, setIsHidden] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlHeader = () => {
        if (typeof window !== 'undefined') {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 60) {
                setIsHidden(true);
            } else {
                setIsHidden(false);
            }

            setLastScrollY(currentScrollY);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', controlHeader);
        return () => window.removeEventListener('scroll', controlHeader);
    }, [lastScrollY]);
    if (loading) return null;

    return (
        <header className={`header ${isHidden ? 'header--hidden' : ''}`}
            style={{
                padding: '1rem 2rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                top: 0,
                zIndex: 100,
                boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
                minWidth: '100vw',
                position: 'sticky',
            }}>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    maxWidth: '1200px',
                    margin: '0 auto',
                    flexWrap: 'wrap',
                    gap: '0.8rem',
                }}
            >
                <div
                    style={{
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                    }}
                >
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
                        <div style={{
                            display: 'flex',
                            gap: '1.4rem',
                            alignItems: 'center',
                            listStyle: 'none',
                            margin: 0,
                            padding: 0,
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                            minWidth: 0,
                        }}>
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
                                    position: 'relative',
                                    paddingBottom: '2px',
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
                                    window.location.href = '/'
                                }}
                                className="nav-button"
                                style={{
                                    padding: '0.5rem 1rem',
                                    background: 'transparent',
                                    color: 'var(--accent)',
                                    borderRadius: '10px',
                                    fontWeight: '600',
                                    textDecoration: 'none',
                                    border: '1px solid var(--accent)',
                                    transition: 'background 0.2s, color 0.2s',
                                    position: 'relative',
                                    paddingBottom: '2px',
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
            </div>
        </header >
    );
}