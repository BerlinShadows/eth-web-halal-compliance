// src/app/games/flipcoin/page.tsx

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getBalance, updateBalance } from '@/lib/auth';

export default function FlipCoinPage() {
    const [result, setResult] = useState<'heads' | 'tails' | null>(null);
    const [flipping, setFlipping] = useState(false);
    const [rotation, setRotation] = useState(0);
    const [balance, setBalance] = useState(100);
    const [guess, setGuess] = useState<'heads' | 'tails' | null>(null);
    const [outcome, setOutcome] = useState<'win' | 'lose' | null>(null);

    useEffect(() => {
        const savedBalance = getBalance();
        setBalance(savedBalance);
    }, []);

    useEffect(() => {
        if (flipping) return;
        const interval = setInterval(() => {
            setRotation((r) => (r + 0.5) % 360);
        }, 50);
        return () => clearInterval(interval);
    }, [flipping]);

    const handleGuess = (side: 'heads' | 'tails') => {
        if (flipping) return;
        setGuess(side);
        setFlipping(true);
        setResult(null);
        setOutcome(null);

        setTimeout(() => {
            const actualResult = Math.random() > 0.5 ? 'heads' : 'tails';
            setResult(actualResult);

            const isWin = side === actualResult;
            setOutcome(isWin ? 'win' : 'lose');

            const current = getBalance();
            const newBalance = isWin ? current + 10 : Math.max(0, current - 5);
            updateBalance(newBalance);
            setBalance(newBalance);

            setFlipping(false);
        }, 1500);
    };

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center', padding: '2rem' }}>
            <Link href="/games" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent)', marginBottom: '1.5rem' }}>
                ← Back to Games
            </Link>

            <h1 style={{ fontSize: '2.25rem', fontWeight: '800', marginBottom: '0.5rem' }}>FlipCoin</h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--muted)', marginBottom: '1rem' }}>
                Guess correctly to earn <strong>10 HalalCoins</strong>. Wrong guess? Lose <strong>5</strong>.
            </p>
            <p style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1.5rem', color: 'var(--accent)' }}>
                Balance: {balance} HalalCoins
            </p>

            {!flipping && !result && (
                <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                    <button
                        onClick={() => handleGuess('heads')}
                        style={{
                            padding: '0.6rem 1.2rem',
                            background: 'var(--card-bg)',
                            border: '1px solid var(--border)',
                            borderRadius: '12px',
                            fontWeight: '600',
                            cursor: 'pointer',
                            transition: 'background 0.2s',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(126, 34, 206, 0.08)')}
                        onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--card-bg)')}
                    >
                        Heads (H)
                    </button>
                    <button
                        onClick={() => handleGuess('tails')}
                        style={{
                            padding: '0.6rem 1.2rem',
                            background: 'var(--card-bg)',
                            border: '1px solid var(--border)',
                            borderRadius: '12px',
                            fontWeight: '600',
                            cursor: 'pointer',
                            transition: 'background 0.2s',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(126, 34, 206, 0.08)')}
                        onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--card-bg)')}
                    >
                        Tails (T)
                    </button>
                </div>
            )}

            <div
                style={{
                    position: 'relative',
                    width: '180px',
                    height: '180px',
                    margin: '0 auto 2rem',
                    perspective: '1000px',
                }}
            >
                <div
                    style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        position: 'relative',
                        transformStyle: 'preserve-3d',
                        transform: flipping
                            ? 'rotateY(1800deg)'
                            : `rotateY(${rotation}deg)`,
                        transition: flipping
                            ? 'transform 1.5s cubic-bezier(0.68, -0.55, 0.27, 1.55)'
                            : 'none',
                        boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                        border: '2px solid rgba(255,255,255,0.3)',
                    }}
                >
                    <div
                        style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '2.2rem',
                            fontWeight: 'bold',
                            color: '#1e293b',
                            backfaceVisibility: 'hidden',
                            border: '2px solid rgba(0,0,0,0.1)',
                        }}
                    >
                        H
                    </div>
                    <div
                        style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #94a3b8, #64748b)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '2.2rem',
                            fontWeight: 'bold',
                            color: '#f1f5f9',
                            backfaceVisibility: 'hidden',
                            transform: 'rotateY(180deg)',
                            border: '2px solid rgba(0,0,0,0.1)',
                        }}
                    >
                        T
                    </div>
                </div>
            </div>

            {result && outcome && (
                <div
                    style={{
                        marginTop: '1.5rem',
                        padding: '1.25rem',
                        background: outcome === 'win' ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                        borderRadius: '14px',
                        border: outcome === 'win' ? '1px solid #22c55e' : '1px solid #ef4444',
                        animation: 'fadeIn 0.5s ease-out',
                    }}
                >
                    <p style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.25rem', color: outcome === 'win' ? '#22c55e' : '#ef4444' }}>
                        {outcome === 'win' ? 'Correct!' : 'Incorrect!'}
                    </p>
                    <p style={{ fontSize: '1.05rem' }}>
                        You {outcome === 'win' ? 'earned' : 'lost'}{' '}
                        <strong>{outcome === 'win' ? '+10' : '-5'}</strong> HalalCoins.
                    </p>
                    <p style={{ fontSize: '1rem', marginTop: '0.5rem', fontWeight: '600' }}>
                        New Balance: <strong>{balance}</strong> HalalCoins
                    </p>
                </div>
            )}

            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                <Link href="/profile" style={{ color: 'var(--accent)', fontWeight: '600' }}>
                    View Profile
                </Link>
            </div>

            <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
        </div>
    );
}