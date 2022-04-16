import MockData from '@MockData';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import React from 'react';
import { create } from 'react-test-renderer';
import MetaHeader from './MetaHeader';

describe('MetaHeader', () => {
  const mockUrl = MockData.siteMetadata.siteUrl;
  const mockTitle = MockData.siteMetadata.title;

  test('should render correctly (snapshot)', () => {
    const tree = create(
      <MetaHeader siteUrl={mockUrl} title={mockTitle} />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('should render accessibility guidelines (AXE)', async () => {
    const { container } = render(
      <MetaHeader siteUrl={mockUrl} title={mockTitle} />
    );

    const a11y = await axe(container);

    expect(a11y).toHaveNoViolations();
  });
});
