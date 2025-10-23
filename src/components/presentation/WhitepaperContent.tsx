export default function WhitepaperContent() {
    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', lineHeight: 1.7, fontSize: '1.05rem' }}>
            <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1.5rem' }}>HalalPlay Whitepaper (MVP)</h1>

            <section className="card" style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', fontWeight: '700' }}>Vision</h2>
                <p>
                    HalalPlay is a Web3-native gaming platform designed for Muslim communities worldwide, offering ethical entertainment that aligns with Islamic principles.
                    Instead of gambling, players participate through voluntary crypto donations (sadaqah), earning non-monetary rewards like XP, badges, and community recognition.
                </p>
            </section>

            <section className="card" style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', fontWeight: '700' }}>Core Principles</h2>
                <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
                    <li><strong>No Riba (Interest):</strong> No financial gain from lending or staking.</li>
                    <li><strong>No Gharar (Excessive Uncertainty):</strong> All game outcomes are provably fair via on-chain commit-reveal schemes.</li>
                    <li><strong>No Maysir (Gambling):</strong> No real-money betting. All “stakes” are charitable donations.</li>
                    <li><strong>Transparency:</strong> Donation flows and game logic are verifiable on-chain.</li>
                </ul>
            </section>

            <section className="card" style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', fontWeight: '700' }}>Technical Overview</h2>
                <p>
                    Built on Ethereum L2 (e.g., Base or zkSync) for low fees. Games use:
                </p>
                <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
                    <li>Smart contracts for donation tracking and fairness</li>
                    <li>SIWE (Sign-In with Ethereum) for identity</li>
                    <li>IPFS for immutable game metadata</li>
                    <li>On-chain leaderboards and achievement NFTs (future)</li>
                </ul>
            </section>

            <section className="card">
                <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', fontWeight: '700' }}>Roadmap</h2>
                <ul style={{ paddingLeft: '1.5rem' }}>
                    <li>MVP: Mock auth, theme switcher, profile</li>
                    <li>Wallet login + donation contract</li>
                    <li>FlipCoin & Dice games (provably fair)</li>
                    <li>Charity pool integration (on-chain sadaqah)</li>
                </ul>
            </section>
        </div>
    );
}