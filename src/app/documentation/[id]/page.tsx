import { notFound } from 'next/navigation';
import { fetchDocumentationById } from '@/lib/docs';
import Card from '@/components/ui/Card';
import Link from 'next/link';

export async function generateStaticParams() {
    const docs = [
        { id: 'overview' },
        { id: 'wallet' },
        { id: 'security' },
        { id: 'cultural-principles' },
        { id: 'peaceful-direction' },
        { id: 'api-integrations' },
    ];
    return docs;
}

export default async function DocPage({ params }: { params: { id: string } }) {
    const { id } = await params;
    const doc = await fetchDocumentationById(id);

    if (!doc) {
        notFound();
    }

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 1rem' }}>
            <div style={{ marginBottom: '1.5rem' }}>
                <Link href="/documentation" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent)' }}>
                    ← Back to Documentation
                </Link>
            </div>

            <Card>
                <h1 style={{ fontSize: '2.25rem', fontWeight: '800', marginBottom: '1.5rem' }}>{doc.title}</h1>
                <div
                    style={{
                        fontSize: '1.05rem',
                        lineHeight: 1.8,
                        whiteSpace: 'pre-wrap'
                    }}
                >
                    {doc.content}
                </div>
            </Card>
        </div>
    );
}