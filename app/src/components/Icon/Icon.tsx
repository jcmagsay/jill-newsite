import React, { FC, ReactNode } from 'react';
import { Icons, TIconType } from './Icons';

type TIconProps = {
  children: ReactNode | ReactNode[],
  className: string,
  type: TIconType,
  fill: string,
  stroke: string,
};

const Icon: FC<TIconProps> = (props) => {
  const {
    children,
    className,
    type,
    fill,
    stroke,
  } = props;

  const IconVariant = Icons[type];

  return (
    <i className={className}>
      <IconVariant
        fill={fill}
        stroke={stroke}
      >
        {children}
      </IconVariant>
    </i>
  );
};

export default Icon;
