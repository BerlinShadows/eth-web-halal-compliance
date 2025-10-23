'use client';

import Link from 'next/link';
import { EmailIcon, GitHubIcon, TwitterIcon } from './icons';

export default function Footer() {
    return (
        <footer style={{ padding: '2.5rem 2rem', borderTop: '1px solid var(--border)', marginTop: 'auto' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>

                <div>
                    <h3 style={{ fontWeight: '700', marginBottom: '1rem', fontSize: '1.25rem' }}>HalalPlay</h3>
                    <p style={{ color: 'var(--muted)', fontSize: '0.95rem' }}>
                        Ethical Web3 gaming for the global Ummah. Built with transparency, fairness, and faith.
                    </p>
                </div>

                <div>
                    <h4 style={{ fontWeight: '700', marginBottom: '1rem' }}>Resources</h4>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                        <li><Link href="/whitepaper">Whitepaper</Link></li>
                        <li><Link href="/charity-partners">Charity Partners</Link></li>
                        <li><Link href="/documentation">Documentation</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 style={{ fontWeight: '700', marginBottom: '1rem' }}>Contact & Feedback</h4>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                        <li>
                            <a
                                href="mailto:mi_landau@outlook.com"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    color: 'var(--accent)',
                                    padding: '0.25rem 0',
                                    borderRadius: '4px',
                                    transition: 'background 0.2s',
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(79, 70, 229, 0.08)')}
                                onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                            >
                                <EmailIcon /> Email
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://twitter.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    color: 'var(--accent)',
                                    padding: '0.25rem 0',
                                    borderRadius: '4px',
                                    transition: 'background 0.2s',
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(79, 70, 229, 0.08)')}
                                onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                            >
                                <TwitterIcon /> Twitter / X
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/BerlinShadows"
                                target="_blank" rel="noopener noreferrer"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    color: 'var(--accent)',
                                    padding: '0.25rem 0',
                                    borderRadius: '4px',
                                    transition: 'background 0.2s',
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(79, 70, 229, 0.08)')}
                                onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                            >
                                <GitHubIcon /> GitHub
                            </a>
                        </li>
                    </ul>
                    <p style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--muted)' }}>
                        Open to collaboration, feedback, and community input.
                    </p>
                </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '2.5rem', fontSize: '0.875rem', color: 'var(--muted)' }}>
                © {new Date().getFullYear()} HalalPlay — Built for ETHGlobal
            </div>
        </footer>
    );
}