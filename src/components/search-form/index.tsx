import React, { FC } from 'react';
import Button from 'react-bootstrap/esm/Button';
import InputGroup from 'react-bootstrap/esm/InputGroup';
import FormControl from 'react-bootstrap/esm/FormControl';

import StyledForm from './style';

const SearchForm: FC = () => {
  return (
    <StyledForm>
      <InputGroup>
        <FormControl
          placeholder="Type organization's name here"
          aria-label="Type organization's name here"
          />
        <InputGroup.Append>
          <Button
            variant="secondary"
            type="submit"
          >
            Search
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </StyledForm>
  );
};

export default SearchForm;