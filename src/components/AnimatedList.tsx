'use client';

import React from 'react';
import { useEffect, useState } from 'react';

export default function AnimatedList({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            {React.Children.map(children, (child, index) => (
                <div
                    key={index}
                    style={{
                        opacity: mounted ? 1 : 0,
                        transform: mounted ? 'translateY(0)' : 'translateY(10px)',
                        transition: `opacity 0.4s ease, transform 0.4s ease`,
                        transitionDelay: `${index * 0.1}s`,
                    }}
                >
                    {child}
                </div>
            ))}
        </div>
    );
}