import { render } from '@testing-library/react';
import Code from './Code';

describe('Code', () => {
  const languages = [
    'html',
    'xml',
    'yml',
    'yaml',
    'css',
    'json',
    'md',
    'markdown',
    'js',
    'javascript',
    'ts',
    'typescript',
    'coffee',
    'coffeescript',
    'jsx',
    'tsx',
    'objc',
    'objectivec',
    'vue',
    'go',
    'java',
    'rust',
  ];

  test('should render inline code correctly (snapshot)', () => {
    const { container } = render(<Code>Inline Code</Code>);

    expect(container).toMatchSnapshot();
  });

  test('should render block code correctly (snapshot)', () => {
    const { container } = render(
      <Code className="language-type">Block Code</Code>
    );

    expect(container).toMatchSnapshot();
  });

  test.each(languages)(
    'should render different language correctly (snapshot)',
    language => {
      const { container } = render(
        <Code className={`language-${language}`}>const foo = bar();</Code>
      );

      expect(container).toMatchSnapshot();
    }
  );
});