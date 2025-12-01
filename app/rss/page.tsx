'use client';

import { useState, useEffect } from 'react';

// Define the types for our RSS feed items
type RSSItem = {
  id: string;
  date: string;
  title: string;
  content: string;
  link: string;
};

export default function RSSPage() {
  const [rssItems, setRssItems] = useState<RSSItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchRssFeed() {
      try {
        setIsLoading(true);
        setFetchError(null);

        const response = await fetch('/feed');
        const xmlText = await response.text();

        const parser = new DOMParser();
        const xml = parser.parseFromString(xmlText, 'application/xml');

        const items = Array.from(xml.querySelectorAll('item')).map((item) => ({
          id: item.querySelector('guid')?.textContent || item.querySelector('link')?.textContent || '',
          date: item.querySelector('pubDate')?.textContent || '',
          title: item.querySelector('title')?.textContent || '',
          content: item.querySelector('description')?.textContent || '',
          link: item.querySelector('link')?.textContent || '',
        }));

        setRssItems(items);
      } catch (error) {
        console.error('Error fetching RSS feed:', error);
        setFetchError('Failed to fetch updates. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    }

    fetchRssFeed();
  }, []);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl mb-8 text-center">UPDATES</h1>
      <div className="max-w-3xl mx-auto space-y-8">
        {isLoading ? (
          <p className="text-center text-light-gray">Loading updates...</p>
        ) : fetchError ? (
          <p className="text-center text-red-400">{fetchError}</p>
        ) : rssItems.length === 0 ? (
          <p className="text-center text-light-gray">No updates available at the moment.</p>
        ) : (
          rssItems.map((item) => (
            <div key={item.id} className="border-2 border-accent p-6 bg-dark-gray bg-opacity-50">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl text-accent">{item.title}</h3>
                <span className="text-sm text-light-gray">{formatDate(item.date)}</span>
              </div>
              <div className="text-light-gray" dangerouslySetInnerHTML={{ __html: item.content }} />
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline mt-4 block">
                Read more
              </a>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
