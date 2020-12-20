import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/esm/Button';
import InputGroup from 'react-bootstrap/esm/InputGroup';
import FormControl from 'react-bootstrap/esm/FormControl';
import { OverlayChildren } from 'react-bootstrap/esm/Overlay';
import OverlayTrigger, { OverlayInjectedProps } from 'react-bootstrap/esm/OverlayTrigger';
import Tooltip, { TooltipProps } from 'react-bootstrap/esm/Tooltip';
import getRepos from '@store/actions/get-repos';

import StyledForm from './style';

const pageLimit = 8;

const SearchForm: FC = () => {
  const dispatch = useDispatch();

  const [showTooltip, setShowTooltip] = useState(false);

  const submitHandler = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const input = event.target.elements[0] as HTMLInputElement;

    const value = input.value.trim();

    if (value) {
      dispatch(getRepos(value, 1, pageLimit));
    } else {
      setShowTooltip(true);
    }
  };

  const renderTooltip = (props: OverlayInjectedProps) => (
    <Tooltip {...props as TooltipProps}>
      You must enter organization&apos;s name
    </Tooltip>
  );

  return (
    <OverlayTrigger
      placement="bottom"
      delay={{ show: 250, hide: 400 }}
      show={showTooltip}
      overlay={renderTooltip as OverlayChildren}
    >
      <StyledForm
        onChange={() => setShowTooltip(false)}
        onBlur={() => setShowTooltip(false)}
        onSubmit={submitHandler}
      >
        <InputGroup>
          <FormControl
            placeholder="organization's name here"
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
