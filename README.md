# HalalPlay — Ethical Web3 Gaming for the Ummah

> A halal-compliant, non-gambling Web3 gaming platform powered by voluntary crypto donations (sadaqah), built for the global Muslim community and beyond.

![HalalPlay Preview](https://github.com/BerlinShadows)

##  Vision

HalalPlay reimagines digital entertainment through the lens of Islamic finance principles:
- **No riba** (interest)
- **No gharar** (excessive uncertainty)
- **No maysir** (gambling)

Instead of betting real money, players participate via **voluntary crypto donations** (sadaqah) and earn non-monetary rewards: XP, badges, and community recognition. All mechanics are **provably fair**, **on-chain transparent**, and **ethically aligned**.

##  Core Features (MVP)

-  **Halal-Compliant Design**: No financial risk, no real-money betting  
-  **Wallet Integration**: Sign-In with Ethereum (SIWE) — identity without private keys  
-  **Transparent Donations**: On-chain sadaqah tracking with verified charity partners  
-  **Provably Fair Games**: FlipCoin and more — outcomes verifiable via commit-reveal  
-  **Charity Ecosystem**: Donations routed to trusted partners (Islamic Relief, Gitcoin, GiveDirectly)  
-  **Full Documentation**: Security, cultural principles, API specs, and integration guides  
-  **Responsive Web3 UI**: Animated gradients, dark/light mode, smooth transitions

## Tech Stack

- **Frontend**: Next.js 14 (App Router), TypeScript, Tailwind CSS  
- **Styling**: CSS Modules + Custom Animations (no heavy libraries)  
- **Auth**: Mock → SIWE (Sign-In with Ethereum)  
- **Blockchain**: Ethereum L2 (Base / zkSync) — low gas, high speed  
- **Smart Contracts**: Solidity (minimal, auditable logic for donations & fairness)  
- **Storage**: On-chain events + IPFS (for metadata)

## Try It

1. Clone the repo  
2. `npm install`  
3. `npm run dev`  
4. Open `http://localhost:3000`

**Demo credentials**:  
- Username: `admin`  
- Password: `admin`

> In production, authentication will be wallet-based (SIWE), and donations will be on-chain.

## Charity Partners

We collaborate with globally trusted organizations:
- **Islamic Relief Worldwide** — humanitarian aid  
- **Muslim Hands** — community development  
- **Gitcoin Grants** — Web3 public goods  
- **GiveDirectly** — direct cash transfers

All donation flows are **publicly verifiable** on-chain.

## Documentation

Explore our docs to learn about:
- Wallet integration  
- Security practices  
- Cultural & ethical alignment  
- API for side-project integrations

→ [View Documentation](http://localhost:3000/documentation)

## Roadmap

- [x] MVP: Auth, Profile, Games, Docs  
- [ ] Wallet login (SIWE)  
- [ ] Donation smart contract  
- [ ] FlipCoin on-chain logic  
- [ ] Telegram bot integration  
- [ ] Community governance (token-based)

## Why HalalPlay?

1.8 billion Muslims deserve ethical, engaging digital experiences that respect their values.  
HalalPlay bridges **Web3 innovation** and **Islamic finance principles** — creating a new category of **sadaqah-powered entertainment**.

Built for **ETHGlobal**, by the community, for the Ummah.

---

**License**: MIT  
**Contact**: [mi_landau@outlook.com](mailto:mi_landau@outlook.com)