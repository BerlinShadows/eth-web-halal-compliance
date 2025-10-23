export type DocSection = {
    id: string;
    title: string;
    summary: string;
    content?: string;
};

export const fetchDocumentationList = async (): Promise<DocSection[]> => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return DOCS.map(doc => ({ id: doc.id, title: doc.title, summary: doc.summary }));
};

export const fetchDocumentationById = async (id: string): Promise<DocSection | null> => {
    await new Promise((resolve) => setTimeout(resolve, 200));
    return DOCS.find(doc => doc.id === id) || null;
};

const DOCS: DocSection[] = [
    {
        id: 'overview',
        title: 'Overview',
        summary: 'Core principles of HalalPlay: sadaqah-based participation, no gambling.',
        content: `HalalPlay is a non-gambling Web3 platform where participation is driven by voluntary crypto donations (sadaqah). All mechanics are designed to comply with Islamic finance principles: no riba (interest), no gharar (excessive uncertainty), and no maysir (gambling). Users earn non-monetary rewards such as XP, badges, and community recognition. The platform is open to all, with a focus on ethical engagement and transparency.`
    },
    {
        id: 'wallet',
        title: 'Wallet Integration',
        summary: 'How wallet connection and identity work.',
        content: `Users connect via Ethereum-compatible wallets (MetaMask, Rainbow, etc.). Identity is verified using Sign-In with Ethereum (SIWE). No private keys are stored on our servers. All signatures are generated client-side. Upon login, a session is established using a JWT-like token (in MVP: localStorage flag). In production, we will use SIWE with nonce rotation and expiration. Wallet address is used as the primary identifier for leaderboards and donation history.`
    },
    {
        id: 'security',
        title: 'Security Practices',
        summary: 'On-chain transparency and frontend security measures.',
        content: `Smart contracts are kept minimal and will undergo third-party audit before mainnet launch. Frontend enforces Content Security Policy (CSP) headers. All donation transactions are recorded on-chain and publicly verifiable via Etherscan. User session data is never stored on our servers. We do not collect personal data beyond the wallet address. Rate limiting is applied to all public API endpoints. Future versions will support hardware wallet integration and transaction simulation.`
    },
    {
        id: 'cultural-principles',
        title: 'Cultural & Ethical Alignment',
        summary: 'Respect for Islamic values and global diversity.',
        content: `HalalPlay respects diverse interpretations within the Ummah. Game mechanics avoid imagery or mechanics that could conflict with Islamic values (e.g., no dice with dots resembling gambling, no human/animal avatars in certain contexts). All content is reviewed by an advisory panel that includes Islamic scholars and community representatives from multiple regions (Middle East, Southeast Asia, Africa, and diaspora communities). The platform supports multiple languages and localizes charity partners by region.`
    },
    {
        id: 'peaceful-direction',
        title: 'Peaceful & Inclusive Direction',
        summary: 'Promoting unity, charity, and positive engagement.',
        content: `HalalPlay is built on the principles of sadaqah (voluntary charity), community, and skill-based play. It is open to users of all backgrounds, with a focus on positive social impact. The platform does not include competitive betting, leaderboards are opt-in, and all rewards are non-monetary. We partner with verified charities to ensure donations create real-world impact. Community governance will be introduced via token-based voting in later stages.`
    },
    {
        id: 'api-integrations',
        title: 'API for Side Projects',
        summary: 'Public endpoints for developers and integrators.',
        content: `HalalPlay will provide a public RESTful API for side projects, community dashboards, and analytics tools. Available endpoints (planned):\n\n- \`GET /api/v1/leaderboard\` – top players by XP\n- \`GET /api/v1/donations/{address}\` – donation history\n- \`GET /api/v1/badges/{address}\` – earned achievements\n- \`POST /api/v1/webhooks\` – register for donation events\n\nAll requests require an API key (free registration). Rate limit: 100 requests/minute. Webhooks deliver payloads via HTTPS with signature verification. Documentation will be available in OpenAPI 3.0 format. SDKs for JavaScript and Python are planned.`
    }
];