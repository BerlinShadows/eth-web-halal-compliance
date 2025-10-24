'use client';

import { useEffect, useRef } from 'react';
import * as LightweightCharts from 'lightweight-charts';

type PriceChartProps = {
    data: { time: string; value: number }[];
};

export function PriceChart({ data }: PriceChartProps) {
    const chartContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!chartContainerRef.current) return;

        const chart = LightweightCharts.createChart(chartContainerRef.current, {
            width: chartContainerRef.current.clientWidth,
            height: 300,
            layout: {
                textColor: '#d1d5db',
            },
            grid: {
                vertLines: {
                    color: 'rgba(111, 66, 193, 0.2)',
                },
                horzLines: {
                    color: 'rgba(111, 66, 193, 0.2)',
                },
            },
            crosshair: {
                vertLine: {
                    color: '#8a5cf6',
                    width: 1,
                },
                horzLine: {
                    color: '#8a5cf6',
                    width: 1,
                },
            },
            timeScale: {
                borderColor: 'rgba(111, 66, 193, 0.5)',
            },
        });



        const handleResize = () => {
            if (chartContainerRef.current) {
                chart.resize(chartContainerRef.current.clientWidth, 300);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            chart.remove();
        };
    }, [data]);

    return <div ref={chartContainerRef} />;
}