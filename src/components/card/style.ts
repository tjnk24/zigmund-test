import styled from 'styled-components';
import Card from 'react-bootstrap/esm/Card';

export const StyledCard = styled(Card)`
  margin-bottom: 30px;
  padding: 20px;
  box-shadow: 0px 3px 15px 0px rgba(0,0,0,0.15);

  &:first-child {
    margin-top: 30px;
  }
`;

export const CardTextWrap = styled.div`
  display: flex;
  flex-wrap: wrap;

  p {
    margin: 0px;
    margin-right: 50px;
  }
`;
