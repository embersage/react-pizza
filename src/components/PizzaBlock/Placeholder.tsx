import React, { FC } from 'react';
import ContentLoader from 'react-content-loader';

const Placeholder: FC = () => {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={500}
      viewBox="0 0 280 500"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <circle cx="142" cy="127" r="110" />
      <rect x="0" y="260" rx="15" ry="15" width="280" height="35" />
      <rect x="0" y="320" rx="15" ry="15" width="280" height="70" />
      <rect x="2" y="425" rx="15" ry="15" width="96" height="35" />
      <rect x="130" y="420" rx="25" ry="25" width="147" height="45" />
    </ContentLoader>
  );
};

export default Placeholder;
