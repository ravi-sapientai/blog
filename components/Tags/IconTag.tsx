import type { ReactNode } from 'react';
import Tag from './Tag';

interface Props {
  tag: string;
  icon: ReactNode;
}

const IconTag = ({ tag, icon }: Props): JSX.Element => (
  <Tag className="inline-flex justify-center items-center mt-1 tag-black text-base font-extrabold">
    {icon}
    <span>{tag}</span>
  </Tag>
);

export default IconTag;