export default function CharityPartnersContent() {
    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', lineHeight: 1.7, fontSize: '1.05rem' }}>
            <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1.5rem' }}>Charity Partners</h1>

            <p style={{ marginBottom: '2rem' }}>
                HalalPlay collaborates with trusted charitable organizations to ensure that all voluntary crypto donations (sadaqah) are directed toward verified, impactful causes.
                Our partners adhere to transparency, accountability, and alignment with ethical and humanitarian values.
            </p>

            <section className="card" style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '1.2rem', fontWeight: '700' }}>Islamic Relief Worldwide</h2>
                <p>
                    A leading global Muslim humanitarian organization operating in over 40 countries. Focus areas include emergency relief, education, and sustainable development.
                    Verified on-chain donation integration is in progress.
                </p>
                <p>
                    <a href="https://www.islamic-relief.org" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--foreground)', textDecoration: 'underline' }}>
                        islamic-relief.org
                    </a>
                </p>
            </section>

            <section className="card" style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '1.2rem', fontWeight: '700' }}>Muslim Hands</h2>
                <p>
                    UK-based charity providing aid in 70+ countries. Specializes in orphan sponsorship, water projects, and Ramadan/Eid campaigns.
                    Actively exploring blockchain-based donation tracking.
                </p>
                <p>
                    <a href="https://muslimhands.org.uk" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--foreground)', textDecoration: 'underline' }}>
                        muslimhands.org.uk
                    </a>
                </p>
            </section>

            <section className="card" style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '1.2rem', fontWeight: '700' }}>Gitcoin Grants</h2>
                <p>
                    A Web3-native platform for quadratic funding that supports public goods, including humanitarian and open-source projects.
                    HalalPlay will route a portion of community donations to vetted Gitcoin rounds focused on education and poverty alleviation.
                </p>
                <p>
                    <a href="https://gitcoin.co" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--foreground)', textDecoration: 'underline' }}>
                        gitcoin.co
                    </a>
                </p>
            </section>

            <section className="card" style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '1.2rem', fontWeight: '700' }}>GiveDirectly</h2>
                <p>
                    An international nonprofit delivering unconditional cash transfers to people in extreme poverty. Known for rigorous impact evaluation and transparency.
                    Compatible with crypto-to-fiat donation pipelines.
                </p>
                <p>
                    <a href="https://www.givedirectly.org" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--foreground)', textDecoration: 'underline' }}>
                        givedirectly.org
                    </a>
                </p>
            </section>

            <section className="card">
                <h2 style={{ fontSize: '1.8rem', marginBottom: '1.2rem', fontWeight: '700' }}>Local Community Initiatives</h2>
                <p>
                    In addition to global partners, HalalPlay supports local masjids, student associations, and grassroots projects through community-voted donation pools.
                    These initiatives are verified by our moderation council and published on-chain for full transparency.
                </p>
            </section>
        </div>
    );
}