'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { TradeTerminal } from '@/components/TradeTerminal';

export default function TradePage() {
    const { profile, loading } = useAuth();

    if (loading) {
        return <div className="page-container">Loading...</div>;
    }

    if (!profile) {
        return <div className="page-container">Please log in to access trading.</div>;
    }

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto' }} className="page-container">
            <h1 className="page-title">Trade & Bridge</h1>
            <p className="page-subtitle">
                Exchange your tokens or bridge to other networks
            </p>
            <TradeTerminal balance={profile.balance} />
        </div>
    );
}