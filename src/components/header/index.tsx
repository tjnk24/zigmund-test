import React, { FC } from 'react';
import SearchForm from '@components/search-form';

import HeaderWrapper from './style';

const Header: FC = () => (
  <HeaderWrapper>
    <h3>
      Github organizations repos search
    </h3>
    <SearchForm />
  </HeaderWrapper>
);

export default Header;
