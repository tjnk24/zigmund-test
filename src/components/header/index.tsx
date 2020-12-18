import React from 'react';
import SearchForm from '@components/search-form';

import HeaderWrapper from './style';

const Header = () => {
  return (
    <HeaderWrapper>
      <h3>
        Github organizations search
      </h3>
      <SearchForm />
    </HeaderWrapper>
  );
};

export default Header;