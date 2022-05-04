import { classNames } from '@components/utils';
import { Typography } from 'antd';
import type { TitleProps } from 'antd/lib/typography/Title';

// Keep `H3` `margin-top`.
const Heading = ({
  children,
  className,
  ...props
}: TitleProps): JSX.Element => (
  <Typography.Title
    {...props}
    className={classNames(
      'mb-6',
      `after:ml-1 hover:after:content-['#'] hover:after:text-primary`,
      'dark:text-light',
      className
    )}
  >
    {children}
  </Typography.Title>
);

export default Heading;
