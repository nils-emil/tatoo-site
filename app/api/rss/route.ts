import { NextResponse } from 'next/server';

// Define the types for our RSS feed items
type RSSItem = {
  id: string;
  date: string;
  title: string;
  content: string;
  link: string;
  location?: string; // Optional location field to match the existing UI
};

// Simple function to extract content between XML tags
function extractContent(xml: string, tag: string): string[] {
  const regex = new RegExp(`<${tag}[^>]*>(.*?)<\/${tag}>`, 'gs');
  const matches = [...xml.matchAll(regex)];
  return matches.map(match => match[1]);
}

// Simple function to extract a single value
function extractValue(xml: string, tag: string): string {
  const match = xml.match(new RegExp(`<${tag}[^>]*>(.*?)<\/${tag}>`, 's'));
  return match ? match[1] : '';
}

export async function GET() {
  try {
    // Fetch the RSS feed from Substack
    const response = await fetch('https://nilsemil.substack.com/feed', {
      next: { revalidate: 3600 }, // Revalidate every hour
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch RSS feed: ${response.status}`);
    }

    const xmlText = await response.text();

    // Extract items from the feed using regex
    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    const itemMatches = [...xmlText.matchAll(itemRegex)];

    const items: RSSItem[] = itemMatches.map((match, index) => {
      const itemXml = match[1];
      const title = extractValue(itemXml, 'title');
      const link = extractValue(itemXml, 'link');
      const pubDate = extractValue(itemXml, 'pubDate');
      const description = extractValue(itemXml, 'description');

      // Try to extract location from title or content (if available)
      let location = '';
      if (title.includes('Basel')) {
        location = 'Basel';
      } else if (title.includes('Tallinn')) {
        location = 'Tallinn';
      } else if (description.includes('Basel')) {
        location = 'Basel';
      } else if (description.includes('Tallinn')) {
        location = 'Tallinn';
      }

      // Convert pubDate to ISO format
      const date = new Date(pubDate).toISOString();

      return {
        id: `${index + 1}`,
        date,
        title,
        content: description,
        link,
        location
      };
    });

    return NextResponse.json({ items });
  } catch (error) {
    console.error('Error fetching RSS feed:', error);
    return NextResponse.json(
      { error: 'Failed to fetch RSS feed' },
      { status: 500 }
    );
  }
}
