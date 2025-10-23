'use client';

import { useState } from 'react';
import { login } from '@/lib/auth';
import { useAuth } from '@/hooks/useAuth';
import Link from 'next/link';

export default function HomePage() {
  const { isAuthenticated } = useAuth();
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('admin');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    const result = await login(username, password);
    setLoading(false);
    if (result) {
      window.location.href = '/profile';
    } else {
      setError('Invalid credentials.');
    }
  };

  if (isAuthenticated) {
    return (
      <div
        style={{
          minHeight: '70vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '2rem',
          background: `linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)`,
          animation: 'gradientShift 8s ease infinite',
          backgroundSize: '200% 200%',
        }}
      >
        <style jsx>{`
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}</style>

        <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem', color: '#1e293b' }}>
          Welcome back!
        </h2>
        <p style={{ fontSize: '1.2rem', color: '#475569', marginBottom: '2.5rem' }}>
          Explore halal-compliant games and your impact.
        </p>

        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link
            href="/profile"
            style={{
              padding: '0.85rem 1.75rem',
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
            Go to Profile
          </Link>

          <Link
            href="/games"
            style={{
              padding: '0.85rem 1.75rem',
              background: 'white',
              color: 'var(--accent)',
              borderRadius: '14px',
              fontWeight: '700',
              textDecoration: 'none',
              border: '1px solid var(--accent)',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-3px)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
          >
            Play Games
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '650px', margin: '0 auto', padding: '0 1rem' }}>
      <h1 style={{ fontSize: '2.8rem', fontWeight: '800', marginBottom: '1.2rem', lineHeight: 1.2 }}>
        Halal-Compliant Web3 Gaming
      </h1>
      <p style={{ fontSize: '1.1rem', opacity: 0.9, marginBottom: '2.5rem' }}>
        A provably fair platform where participation is powered by sadaqah (voluntary crypto donations), not gambling — fully aligned with Islamic finance principles.
      </p>

      <div className="card">
        <h2 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>Demo Login (MVP)</h2>
        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: '1rem' }}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: '10px',
                border: '1px solid var(--border)',
                background: 'var(--background)',
                color: 'var(--foreground)',
              }}
            />
          </div>
          <div style={{ marginBottom: '1.25rem' }}>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: '10px',
                border: '1px solid var(--border)',
                background: 'var(--background)',
                color: 'var(--foreground)',
              }}
            />
          </div>
          {error && <p style={{ color: 'red', marginBottom: '1rem' }}>{error}</p>}
          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: '0.75rem',
              background: 'var(--accent)',
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              fontWeight: 'bold',
              cursor: loading ? 'not-allowed' : 'pointer',
            }}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>

    </div>
  );
}