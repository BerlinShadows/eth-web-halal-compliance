'use client';

import { useEffect, useMemo, useState } from 'react';
import { fetchDocumentationList, DocSection } from '@/lib/docs';
import AnimatedList from '@/components/AnimatedList';
import DocCard from '../ui/DocCard';

export default function DocumentationContent() {
  const [sections, setSections] = useState<DocSection[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchDocumentationList().then((data) => {
      setSections(data);
      setLoading(false);
    });
  }, []);

  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) return sections;
    const q = searchQuery.toLowerCase();
    return sections.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.summary.toLowerCase().includes(q)
    );
  }, [sections, searchQuery]);

  if (loading) {
    return <div style={{ textAlign: 'center', padding: '2rem' }}>Loading documentation...</div>;
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '2rem' }}>Documentation</h1>

      <div className="card" style={{ marginBottom: '2rem', padding: '1.25rem' }}>
        <input
          type="text"
          placeholder="Search documentation..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            width: '100%',
            padding: '0.75rem 1rem',
            borderRadius: '10px',
            border: '1px solid var(--border)',
            background: 'var(--background)',
            color: 'var(--foreground)',
            fontSize: '1rem',
          }}
        />
      </div>

      {filteredSections.length === 0 ? (
        <div className="card" style={{ textAlign: 'center', padding: '2rem' }}>
          No results found for “{searchQuery}”.
        </div>
      ) : (
        <AnimatedList>
          {filteredSections.map((section) => (
            <DocCard
              key={section.id}
              id={section.id}
              title={section.title}
              summary={section.summary}
            />
          ))}
        </AnimatedList>
      )}
    </div>
  );
}