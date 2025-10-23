import Link from 'next/link';
import Card from '@/components/ui/Card';

export default function DocCard({
    id,
    title,
    summary
}: {
    id: string;
    title: string;
    summary: string;
}) {
    return (
        <Link href={`/documentation/${id}`} style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
            <Card interactive>
                <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.75rem' }}>{title}</h2>
                <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>{summary}</p>
            </Card>
        </Link>
    );
}