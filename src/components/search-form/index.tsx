import React, { ElementType, FC, PropsWithChildren, useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import InputGroup from 'react-bootstrap/esm/InputGroup';
import FormControl from 'react-bootstrap/esm/FormControl';
import OverlayTrigger from 'react-bootstrap/esm/OverlayTrigger';
import Tooltip from 'react-bootstrap/esm/Tooltip';

import StyledForm from './style';
import getRepos from '@store/actions/get-repos';
import { useDispatch } from 'react-redux';

const SearchForm: FC = () => {
  const dispatch = useDispatch();

  const [showTooltip, setShowTooltip] = useState(false);

  const submitHandler = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const input = event.target.elements[0] as HTMLInputElement;

    if (input.value.trim()) {
      dispatch(getRepos(input.value.trim()));
    } else {
      setShowTooltip(true);
    }
  };

  const renderTooltip = (props: PropsWithChildren<any>) => (
    <Tooltip {...props}>
      You must enter organization's name
    </Tooltip>
  );

  return (
    <OverlayTrigger
      placement="bottom"
      delay={{ show: 250, hide: 400 }}
      show={showTooltip}
      overlay={renderTooltip}
    >
      <StyledForm
        onChange={() => setShowTooltip(false)}
        onBlur={() => setShowTooltip(false)}
        onSubmit={submitHandler}
      >
        <InputGroup>
          <FormControl
            placeholder="Type organization's name here"
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
    </OverlayTrigger>
  );
};

export default SearchForm;