import Label from '../form-elements/label.component';
import Styled from 'styled-components';

const StyledContainer = Styled.div`
  width: 100%;
  flex-basis: 100%;
  margin-bottom: 50px;
`;

const StyledResponse = Styled.div`
  border: 1px solid var(--gray);
  border-radius: var(--border-radius);
  min-height: 100px;
  align-items: stretch;
  padding: 20px;
  box-sizing: border-box;
  background-color: white;
  box-shadow:
  0.7px 0.7px 1.7px rgba(0, 0, 0, 0.022),
  1.7px 1.7px 4px rgba(0, 0, 0, 0.032),
  3.3px 3.3px 7.5px rgba(0, 0, 0, 0.04),
  5.8px 5.8px 13.4px rgba(0, 0, 0, 0.048),
  10.9px 10.9px 25.1px rgba(0, 0, 0, 0.058),
  26px 26px 60px rgba(0, 0, 0, 0.08);
`;

interface childrenProps {
  children?: JSX.Element | JSX.Element[];
}

const DisplayArea = ({ children }: childrenProps) => {
  return(
    <StyledContainer>
      <Label text="Parsed response" />
      <StyledResponse>
        {children}
      </StyledResponse>
    </StyledContainer>
  );
}

export default DisplayArea;
