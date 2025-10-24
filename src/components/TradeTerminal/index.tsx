'use client';

import { useState } from 'react';
import styles from './TradeTerminal.module.css';
import Image from 'next/image';
import { PriceChart } from './PriceChart';

type TradeTerminalProps = {
    balance: number;
};

const generateMockData = () => {
    const now = new Date();
    const data = [];
    for (let i = 0; i < 100; i++) {
        const time = new Date(now.getTime() - (100 - i) * 60 * 60 * 1000).toISOString().split('T')[0];
        const value = 0.04 + Math.sin(i / 10) * 0.005 + Math.random() * 0.001;
        data.push({ time, value });
    }
    return data;
};

const mockData = generateMockData();
export function TradeTerminal({ balance }: TradeTerminalProps) {
    const [amount, setAmount] = useState('');
    const [selectedToken, setSelectedToken] = useState('HALAL');
    const [selectedNetwork, setSelectedNetwork] = useState('polygon');
    const [tradeType, setTradeType] = useState<'buy' | 'sell'>('buy');

    const handleTrade = () => {
        alert(`Mock ${tradeType}: ${amount} ${selectedToken}`);
    };

    const handleBridge = () => {
        alert(`Mock bridge to ${selectedNetwork}: ${amount} ${selectedToken}`);
    };

    return (
        <div className={styles.terminal}>
            <div className={styles.header}>
                <h2>Trade & Bridge</h2>
                <div className={styles.balanceBadge}>
                    Balance: <span>{balance.toFixed(2)} HALAL</span>
                </div>
            </div>

            <div className={styles.chartContainer}>
                <div className={styles.chartHeader}>
                    <div className={styles.price}>$0.042</div>
                    <div className={styles.trend}>↗ +2.4%</div>
                </div>
                <div className={styles.chartBody}>
                    <PriceChart data={mockData} />
                </div>
            </div>

            <div className={styles.tradeSection}>
                <div className={styles.sectionTitle}>Trade</div>

                <div className={styles.inputGroup}>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="0.0"
                        className={styles.amountInput}
                    />
                    <select
                        value={selectedToken}
                        onChange={(e) => setSelectedToken(e.target.value)}
                        className={styles.tokenSelect}
                    >
                        <option value="HALAL">HALAL</option>
                        <option value="USDT">USDT</option>
                        <option value="ETH">ETH</option>
                    </select>
                </div>

                <div className={styles.tradeButtons}>
                    <button
                        onClick={() => setTradeType('buy')}
                        className={`${styles.tradeBtn} ${tradeType === 'buy' ? styles.active : ''}`}
                    >
                        Buy
                    </button>
                    <button
                        onClick={() => setTradeType('sell')}
                        className={`${styles.tradeBtn} ${tradeType === 'sell' ? styles.active : ''}`}
                    >
                        Sell
                    </button>
                </div>

                <button onClick={handleTrade} className={styles.actionBtn}>
                    {tradeType === 'buy' ? 'Buy' : 'Sell'} {selectedToken}
                </button>
            </div>

            <div className={styles.bridgeSection}>
                <div className={styles.sectionTitle}>Bridge to Network</div>

                <div className={styles.inputGroup}>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="0.0"
                        className={styles.amountInput}
                    />
                    <select
                        value={selectedToken}
                        onChange={(e) => setSelectedToken(e.target.value)}
                        className={styles.tokenSelect}
                    >
                        <option value="HALAL">HALAL</option>
                        <option value="USDT">USDT</option>
                    </select>
                </div>

                <div className={styles.networkSelector}>
                    <div
                        className={`${styles.networkOption} ${selectedNetwork === 'polygon' ? styles.selected : ''}`}
                        onClick={() => setSelectedNetwork('polygon')}
                    >
                        <Image src="/polygon.svg" alt="Polygon" width={20}
                            height={20} className={styles.networkIcon} />
                        Polygon
                    </div>
                    <div
                        className={`${styles.networkOption} ${selectedNetwork === 'arbitrum' ? styles.selected : ''}`}
                        onClick={() => setSelectedNetwork('arbitrum')}
                    >
                        <Image src="/arbitrum.svg" alt="Arbitrum" width={20}
                            height={20} className={styles.networkIcon} />
                        Arbitrum
                    </div>
                    <div
                        className={`${styles.networkOption} ${selectedNetwork === 'base' ? styles.selected : ''}`}
                        onClick={() => setSelectedNetwork('base')}
                    >
                        <Image src="/base.svg" alt="Base" width={20}
                            height={20} className={styles.networkIcon} />
                        Base
                    </div>
                </div>

                <button onClick={handleBridge} className={styles.bridgeBtn}>
                    Bridge to {selectedNetwork}
                </button>
            </div>
        </div>
    );
}