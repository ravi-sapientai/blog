import { Metadata, Viewport } from 'next';
import { getMetadata, getViewport } from '../../config/seo';
import { siteConfig } from '../site';

// Mock the siteConfig
jest.mock('../site', () => ({
  siteConfig: {
    title: 'Test Site',
    description: 'Test Description',
    author: 'Test Author',
    siteUrl: 'https://test.com',
    socials: {
      twitter: 'testTwitter',
    },
    themeColor: '#000000',
  },
}));

describe('getMetadata function', () => {
  it('should return default metadata when no parameters are provided', () => {
    const result: Metadata = getMetadata();
    expect(result).toEqual({
      title: 'Test Site',
      description: 'Test Description',
      applicationName: 'Test Site',
      creator: 'Test Author',
      icons: {
        icon: '/favicon.ico',
        apple: {
          url: '/images/logo-full.png',
          sizes: '200x200',
          type: 'image/png',
        },
      },
      manifest: '/manifest.json',
      openGraph: {
        url: 'https://test.com',
        title: 'Test Site',
        description: 'Test Description',
        siteName: 'Test Site',
      },
      robots: {
        'nosnippet': true,
        'notranslate': true,
        'noimageindex': true,
        'noarchive': true,
        'max-snippet': -1,
        'max-image-preview': 'none',
        'max-video-preview': -1,
      },
      twitter: {
        card: 'summary_large_image',
        site: '@testTwitter',
        siteId: '@testTwitter',
      },
    });
  });

  it('should override default values with provided parameters', () => {
    const customMetadata: Metadata = getMetadata({
      title: 'Custom Title',
      description: 'Custom Description',
      author: 'Custom Author',
      siteUrl: 'https://custom.com',
      twitter: 'customTwitter',
    });

    expect(customMetadata.title).toBe('Custom Title');
    expect(customMetadata.description).toBe('Custom Description');
    expect(customMetadata.creator).toBe('Custom Author');
    expect(customMetadata.openGraph?.url).toBe('https://custom.com');
    expect(customMetadata.twitter?.site).toBe('@customTwitter');
  });

  it('should handle partial overrides correctly', () => {
    const partialMetadata: Metadata = getMetadata({
      title: 'Partial Title',
    });

    expect(partialMetadata.title).toBe('Partial Title');
    expect(partialMetadata.description).toBe('Test Description');
    expect(partialMetadata.creator).toBe('Test Author');
  });
});

describe('getViewport function', () => {
  it('should return default viewport when no parameters are provided', () => {
    const result: Viewport = getViewport();
    expect(result).toEqual({
      themeColor: '#000000',
      width: 'device-width',
      initialScale: 1.0,
    });
  });

  it('should override default values with provided parameters', () => {
    const customViewport: Viewport = getViewport({
      themeColor: '#FFFFFF',
      width: '1024px',
      initialScale: 0.5,
    });

    expect(customViewport.themeColor).toBe('#FFFFFF');
    expect(customViewport.width).toBe('1024px');
    expect(customViewport.initialScale).toBe(0.5);
  });

  it('should handle partial overrides correctly', () => {
    const partialViewport: Viewport = getViewport({
      themeColor: '#FF0000',
    });

    expect(partialViewport.themeColor).toBe('#FF0000');
    expect(partialViewport.width).toBe('device-width');
    expect(partialViewport.initialScale).toBe(1.0);
  });
});