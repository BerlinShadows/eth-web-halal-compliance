'use client';

import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import styles from '../styles/BrandsMarquee.module.css';

const BRANDS = [
    { id: '_metamask', name: 'MetaMask', icon: 'logos:metamask-icon' },
    { id: '_ethereum', name: 'Ethereum', icon: 'logos:ethereum' },
    { id: '_polygon', name: 'Polygon', icon: 'token:seth', },
    { id: '_uni', name: 'Uni', icon: 'cryptocurrency-color:uni' },
    { id: '_aave', name: 'Aave', icon: 'token:aave' },
    { id: '_xpr', name: 'XPR', icon: 'cryptocurrency-color:xpr' },
    { id: '_1inch', name: '1inch', icon: 'cryptocurrency-color:1inch' },
    { id: '_atom', name: 'atom', icon: 'cryptocurrency-color:atom' },
    { id: '_arbitrum', name: 'Arbitrum', icon: 'token:arbitrum-one' },
    { id: '_wax', name: 'wax', icon: 'token:arbitrum-onecryptocurrency-color:wax' },
    { id: '_usdt', name: 'usdt', icon: 'cryptocurrency-color:usdt' },
    { id: '_ren', name: 'ren', icon: 'cryptocurrency-color:ren' },
    { id: '_arbitrum', name: 'Arbitrum', icon: 'token:arbitrum-one' },
    { id: '_arbitrum', name: 'Arbitrum', icon: 'token:arbitrum-one' },
    { id: '_arbitrum', name: 'Arbitrum', icon: 'token:arbitrum-one' },
    { id: '_arbitrum', name: 'Arbitrum', icon: 'token:arbitrum-one' },
];

export function BrandsMarquee() {
    const [duplicatedBrands, setDuplicatedBrands] = useState<typeof BRANDS>([]);

    useEffect(() => {
        setDuplicatedBrands([...BRANDS, ...BRANDS]);
    }, []);

    return (
        <div className={styles.marqueeContainer}>
            <div className={styles.marqueeTrack}>
                {duplicatedBrands.map((brand, index) => (
                    <div
                        key={`${brand.id}-${index}`}
                        className={styles.brandItem}
                    >
                        <div className={styles.brandIcon} title={brand.name}>
                            <Icon
                                icon={brand.icon}
                                width={60}
                                height={60}
                                className={styles.icon}
                                color="currentColor"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}