export default function GamesPage() {
    return (
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center', padding: '2rem' }}>
            <h1 style={{ fontSize: '2.25rem', fontWeight: '800', marginBottom: '1rem' }}>Games</h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--muted)', marginBottom: '2rem' }}>
                Provably fair, halal-compliant games coming soon.
            </p>
            <div style={{ background: 'var(--card-bg)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--border)' }}>
                <p>FlipCoin • Dice • Prediction Pools</p>
                <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: 'var(--muted)' }}>
                    All games use sadaqah-based participation — no real-money betting.
                </p>
            </div>
        </div>
    );
}