import Label from '../form-elements/label.component';
import Styled from 'styled-components';

const StyledContainer = Styled.div`
  min-width: 100%;
  margin-bottom: 30px;
  flex: 1;
`;

interface childrenProps {
  children?: JSX.Element | JSX.Element[];
}
  
const InputArea = ({ children }: childrenProps) => {
    return(
      <StyledContainer>
        <Label text="Paste HTTP response here" />
          {children}
      </StyledContainer>
    );
}

export default InputArea;
