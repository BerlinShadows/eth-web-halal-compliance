'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Card from '@/components/ui/Card';
import { getProfile, updateProfile } from '@/lib/auth';

export default function ProfilePage() {
    const [loading, setLoading] = useState(true);
    const [editMode, setEditMode] = useState(false);
    const [username, setUsername] = useState('');
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        const auth = localStorage.getItem('mockAuth');
        if (auth !== 'true') {
            window.location.href = '/';
        } else {
            const profile = getProfile();
            setUsername(profile.username);
            setLoading(false);
        }
    }, []);

    const handleSave = async () => {
        setSaving(true);
        await updateProfile({ username });
        setEditMode(false);
        setSaving(false);
    };

    if (loading) {
        return (
            <div style={{ maxWidth: '600px', margin: '0 auto', padding: '2rem' }}>
                <Card>
                    <div style={{ textAlign: 'center', padding: '2rem' }}>Loading profile...</div>
                </Card>
            </div>
        );
    }

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '1.5rem' }}>Player Profile</h1>

            <Card style={{ marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                        {editMode ? (
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                style={{
                                    fontSize: '1.5rem',
                                    fontWeight: '700',
                                    background: 'transparent',
                                    border: 'none',
                                    borderBottom: '1px solid var(--border)',
                                    padding: '4px 0',
                                    width: '200px',
                                    outline: 'none',
                                }}
                                autoFocus
                            />
                        ) : (
                            <>
                                <h2 style={{ fontSize: '1.5rem', margin: 0, fontWeight: '700' }}>{username}</h2>
                                <p style={{ color: 'var(--muted)', marginTop: '0.25rem', fontSize: '0.95rem' }}>Active participant</p>
                            </>
                        )}
                    </div>
                    <div
                        style={{
                            width: '56px',
                            height: '56px',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, var(--accent), #7e22ce)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: '1.25rem',
                            boxShadow: '0 4px 12px rgba(79, 70, 229, 0.3)',
                        }}
                    >
                        {username.charAt(0).toUpperCase()}
                    </div>
                </div>

                <div style={{ marginTop: '1.25rem', display: 'flex', gap: '0.75rem' }}>
                    {editMode ? (
                        <>
                            <button
                                onClick={handleSave}
                                disabled={saving}
                                style={{
                                    padding: '0.5rem 1rem',
                                    background: saving ? 'var(--border)' : 'var(--accent)',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '10px',
                                    fontWeight: '600',
                                    cursor: saving ? 'not-allowed' : 'pointer',
                                }}
                            >
                                {saving ? 'Saving...' : 'Save'}
                            </button>
                            <button
                                onClick={() => {
                                    const profile = getProfile();
                                    setUsername(profile.username);
                                    setEditMode(false);
                                }}
                                style={{
                                    padding: '0.5rem 1rem',
                                    background: 'transparent',
                                    color: 'var(--foreground)',
                                    border: '1px solid var(--border)',
                                    borderRadius: '10px',
                                    cursor: 'pointer',
                                }}
                            >
                                Cancel
                            </button>
                        </>
                    ) : (
                        <button
                            onClick={() => setEditMode(true)}
                            style={{
                                padding: '0.5rem 1rem',
                                background: 'transparent',
                                color: 'var(--accent)',
                                border: '1px solid var(--accent)',
                                borderRadius: '10px',
                                fontWeight: '600',
                                cursor: 'pointer',
                            }}
                        >
                            Edit Profile
                        </button>
                    )}
                </div>
            </Card>

            <div style={{ display: 'grid', gap: '1.5rem', marginBottom: '2rem' }}>
                <Card interactive>
                    <h3 style={{ fontWeight: '600', marginBottom: '0.5rem', fontSize: '1.125rem' }}>Virtual Balance</h3>
                    <p style={{ fontSize: '1.375rem', fontWeight: '800', margin: '0.5rem 0' }}>
                        100 <span style={{ fontWeight: '500', fontSize: '1.125rem', color: 'var(--muted)' }}>HalalCoins</span>
                    </p>
                    <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>Earned via participation. Non-withdrawable.</p>
                </Card>

                <Card interactive>
                    <h3 style={{ fontWeight: '600', marginBottom: '0.5rem', fontSize: '1.125rem' }}>Total Donations</h3>
                    <p style={{ fontSize: '1.375rem', fontWeight: '800', margin: '0.5rem 0' }}>0.001 ETH</p>
                    <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>Sent to verified sadaqah pools (on-chain).</p>
                </Card>
            </div>

            <div style={{ textAlign: 'center' }}>
                <Link
                    href="/"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        color: 'var(--accent)',
                        fontWeight: '600',
                        padding: '0.5rem 1rem',
                        borderRadius: '12px',
                        transition: 'background 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(79, 70, 229, 0.05)')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                >
                    ← Back to Home
                </Link>
            </div>
        </div>
    );
}