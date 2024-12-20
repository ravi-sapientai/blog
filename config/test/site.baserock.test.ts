import { siteConfig, SiteConfig, Book } from '../../config/site';
import { SocialType } from '../social';
import { colors } from '../colors';

describe('siteConfig', () => {
  it('should have the correct structure and types', () => {
    expect(siteConfig).toBeDefined();
    expect(siteConfig).toMatchObject<SiteConfig>({
      title: expect.any(String),
      author: expect.any(String),
      email: expect.any(String),
      description: expect.any(String),
      themeColor: expect.any(String),
      siteUrl: expect.any(String),
      disqusUrl: expect.any(String),
      landingTitles: expect.arrayContaining([expect.any(String)]),
      socials: expect.any(Object),
      books: expect.arrayContaining([expect.any(Object)]),
      githubData: expect.any(Object),
    });
  });

  it('should have the correct title', () => {
    expect(siteConfig.title).toBe('Sabertaz Blog');
  });

  it('should have the correct author', () => {
    expect(siteConfig.author).toBe('Sabertaz');
  });

  it('should have a valid email', () => {
    expect(siteConfig.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  });

  it('should have the correct theme color', () => {
    expect(siteConfig.themeColor).toBe(colors.blue);
  });

  it('should have a valid site URL', () => {
    expect(siteConfig.siteUrl).toMatch(/^https?:\/\//);
  });

  it('should have a valid Disqus URL', () => {
    expect(siteConfig.disqusUrl).toMatch(/^https?:\/\//);
  });

  it('should have the correct number of landing titles', () => {
    expect(siteConfig.landingTitles).toHaveLength(3);
  });

  it('should have valid social media links', () => {
    const socialTypes: SocialType[] = ['github', 'twitter', 'facebook', 'linkedin', 'weibo'];
    socialTypes.forEach((type) => {
      expect(siteConfig.socials[type]).toBeDefined();
      expect(typeof siteConfig.socials[type]).toBe('string');
    });
  });

  it('should have at least one book', () => {
    expect(siteConfig.books.length).toBeGreaterThan(0);
  });

  it('should have valid book properties', () => {
    siteConfig.books.forEach((book: Book) => {
      expect(book).toMatchObject<Book>({
        title: expect.any(String),
        author: expect.any(String),
        url: expect.any(String),
        description: expect.any(String),
      });
      expect(book.url).toMatch(/^https?:\/\//);
    });
  });

  describe('githubData', () => {
    it('should have a valid profile', () => {
      const { profile } = siteConfig.githubData;
      expect(profile).toMatchObject({
        username: expect.any(String),
        avatar: expect.any(String),
        bio: expect.any(String),
        location: expect.any(String),
        url: expect.any(String),
        followers: expect.any(Number),
        followersUrl: expect.any(String),
        following: expect.any(Number),
        followingUrl: expect.any(String),
        createDate: expect.any(String),
      });
      expect(profile.avatar).toMatch(/^https?:\/\//);
      expect(profile.url).toMatch(/^https?:\/\//);
      expect(profile.followersUrl).toMatch(/^https?:\/\//);
      expect(profile.followingUrl).toMatch(/^https?:\/\//);
    });

    it('should have valid repos', () => {
      const { repos } = siteConfig.githubData;
      expect(repos.length).toBeGreaterThan(0);
      repos.forEach((repo) => {
        expect(repo).toMatchObject({
          name: expect.any(String),
          stars: expect.any(Number),
          language: expect.any(String),
          repoUrl: expect.any(String),
        });
        expect(repo.repoUrl).toMatch(/^https?:\/\//);
      });
    });
  });
});