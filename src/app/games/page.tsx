'use client';

import GradientBackground from '@/components/GradientBackground';
import Link from 'next/link';

export default function GamesPage() {
    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', padding: '2rem' }}>
            <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem' }}>Games</h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--muted)', marginBottom: '2rem' }}>
                Provably fair, halal-compliant games powered by sadaqah — no real-money betting.
            </p>
            <GradientBackground />
            <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
                <Link
                    href="/games/flipcoin"
                    style={{
                        display: 'block',
                        textDecoration: 'none',
                        background: 'var(--card-bg)',
                        border: '1px solid var(--border)',
                        borderRadius: '16px',
                        padding: '1.5rem',
                        transition: 'transform 0.3s, box-shadow 0.3s',
                        textAlign: 'center',
                    }}
                    onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)';
                        (e.currentTarget as HTMLElement).style.boxShadow = '0 10px 25px rgba(126, 34, 206, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                        (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)';
                    }}
                >
                    <div style={{
                        fontSize: '3rem',
                        marginBottom: '0.75rem',
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <svg
                            width="48"
                            height="48"
                            viewBox="0 0 100 100"
                        >
                            <circle cx="50" cy="50" r="45" fill="var(--card-bg)" stroke="var(--border)" strokeWidth="4" />
                            <path
                                d="M50 25 L58 45 L80 45 L62 58 L68 80 L50 68 L32 80 L38 58 L20 45 L42 45 Z"
                                fill="none"
                                stroke="var(--muted)"
                                strokeWidth="2"
                            />
                        </svg>
                    </div>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: '700', marginBottom: '0.5rem' }}>FlipCoin</h3>
                    <p style={{ fontSize: '0.95rem', color: 'var(--muted)' }}>
                        Guess heads or tails. No stakes — just fun and XP.
                    </p>
                </Link>

                <div
                    style={{
                        background: 'var(--card-bg)',
                        border: '1px solid var(--border)',
                        borderRadius: '16px',
                        padding: '1.5rem',
                        opacity: 0.6,
                        cursor: 'not-allowed',
                    }}
                >
                    <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🎲</div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem' }}>Dice Roll</h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>
                        Coming soon.
                    </p>
                </div>
            </div>
        </div>
    );
}