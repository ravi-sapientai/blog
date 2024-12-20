import { routes, Route } from '../../config/routes';

describe('Routes', () => {
  test('routes array should have the correct length', () => {
    expect(routes).toHaveLength(4);
  });

  test('each route should have the correct structure', () => {
    routes.forEach((route) => {
      expect(route).toHaveProperty('id');
      expect(route).toHaveProperty('name');
      expect(route).toHaveProperty('title');
      expect(route).toHaveProperty('path');
    });
  });

  test('routes should have the correct values', () => {
    const expectedRoutes: Route[] = [
      {
        id: 'posts',
        name: 'Posts',
        title: 'View Posts',
        path: '/posts',
      },
      {
        id: 'tags',
        name: 'Tags',
        title: 'View Tags',
        path: '/tags',
      },
      {
        id: 'books',
        name: 'Books',
        title: 'View Books',
        path: '/books',
      },
      {
        id: 'about',
        name: 'About',
        title: 'About Me',
        path: '/about',
      },
    ];

    expect(routes).toEqual(expectedRoutes);
  });

  test('route ids should be unique', () => {
    const ids = routes.map((route) => route.id);
    const uniqueIds = new Set(ids);
    expect(ids).toHaveLength(uniqueIds.size);
  });

  test('route paths should start with a forward slash', () => {
    routes.forEach((route) => {
      expect(route.path).toMatch(/^\//);
    });
  });

  test('Route type should enforce correct property types', () => {
    const testRoute: Route = {
      id: 'test',
      name: 'Test',
      title: 'Test Route',
      path: '/test',
    };

    // TypeScript will catch type errors at compile-time, but we can also check at runtime
    expect(typeof testRoute.id).toBe('string');
    expect(typeof testRoute.name).toBe('string');
    expect(typeof testRoute.title).toBe('string');
    expect(typeof testRoute.path).toBe('string');
  });

  test('routes array should be readonly', () => {
    // This test will fail at compile-time if routes is not readonly
    // @ts-expect-error
    routes.push({
      id: 'new',
      name: 'New',
      title: 'New Route',
      path: '/new',
    });
  });
});