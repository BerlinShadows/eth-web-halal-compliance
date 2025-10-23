'use client';

import { useState } from 'react';
import { login } from '@/lib/auth';
import { useAuth } from '@/hooks/useAuth';
import Link from 'next/link';
import GradientBackground from '@/components/GradientBackground';

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
      window.location.href = '/';
    } else {
      setError('Invalid credentials.');
    }
  };

  if (isAuthenticated) {
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '2rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <GradientBackground />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2
            style={{
              fontSize: '2.8rem',
              fontWeight: '800',
              marginBottom: '1.2rem',
              background: 'linear-gradient(135deg, var(--accent), #8b5cf6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'fadeInUp 0.6s ease-out',
            }}
          >
            Welcome back!
          </h2>
          <p
            style={{
              fontSize: '1.25rem',
              color: 'var(--muted)',
              marginBottom: '2.5rem',
              animation: 'fadeInUp 0.6s ease-out 0.2s both',
            }}
          >
            Explore halal-compliant games and your impact.
          </p>

          <div
            style={{
              display: 'flex',
              gap: '1.5rem',
              flexWrap: 'wrap',
              justifyContent: 'center',
              animation: 'fadeInUp 0.6s ease-out 0.4s both',
            }}
          >
            <Link
              href="/profile"
              style={{
                padding: '0.9rem 2rem',
                background: 'var(--accent)',
                color: 'white',
                borderRadius: '16px',
                fontWeight: '700',
                textDecoration: 'none',
                boxShadow: '0 6px 20px rgba(126, 34, 206, 0.3)',
                transition: 'all 0.3s cubic-bezier(0.2, 0, 0, 1)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px) scale(1.02)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(126, 34, 206, 0.4)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0) scale(1)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 20px rgba(126, 34, 206, 0.3)';
              }}
            >
              Go to Profile
            </Link>

            <Link
              href="/games"
              style={{
                padding: '0.9rem 2rem',
                background: 'white',
                color: 'var(--accent)',
                borderRadius: '16px',
                fontWeight: '700',
                textDecoration: 'none',
                border: '1px solid var(--accent)',
                transition: 'all 0.3s cubic-bezier(0.2, 0, 0, 1)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px) scale(1.02)';
                (e.currentTarget as HTMLElement).style.background = 'rgba(126, 34, 206, 0.04)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0) scale(1)';
                (e.currentTarget as HTMLElement).style.background = 'white';
              }}
            >
              Play Games
            </Link>
          </div>
        </div>

        <style jsx>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <GradientBackground />

      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          overflow: 'hidden',
        }}
      >
      </div>
      <div
        style={{
          maxWidth: '650px',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
          animation: 'fadeIn 0.8s ease-out',
        }}
      >
        <h1
          style={{
            fontSize: '3.2rem',
            fontWeight: '800',
            marginBottom: '1.2rem',
            lineHeight: 1.2,
            background: 'linear-gradient(135deg, var(--accent), #7e22ce)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          HalalPlay
        </h1>
        <p
          style={{
            fontSize: '1.25rem',
            color: 'var(--muted)',
            marginBottom: '2.5rem',
            lineHeight: 1.6,
          }}
        >
          Ethical Web3 gaming powered by sadaqah — not gambling.
        </p>

        <div className="card" style={{ padding: '2rem', borderRadius: '18px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '1.5rem' }}>Login</h2>
          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: '1.2rem' }}>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.85rem',
                  borderRadius: '12px',
                  border: '1px solid var(--border)',
                  background: 'var(--background)',
                  color: 'var(--foreground)',
                  fontSize: '1rem',
                }}
              />
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.85rem',
                  borderRadius: '12px',
                  border: '1px solid var(--border)',
                  background: 'var(--background)',
                  color: 'var(--foreground)',
                  fontSize: '1rem',
                }}
              />
            </div>

            {error && <p style={{ color: 'red', marginBottom: '1rem' }}>{error}</p>}
            <button
              type="submit"
              disabled={loading}
              style={{
                width: '100%',
                padding: '0.85rem',
                background: 'var(--accent)',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                fontWeight: '700',
                fontSize: '1.05rem',
                cursor: loading ? 'not-allowed' : 'pointer',
                transition: 'background 0.2s',
              }}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}