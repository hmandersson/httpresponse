import Badge from '../badge/badge.component';
import Styled from 'styled-components';

const StyledHeading = Styled.h1`
  font-family: 'Tomorrow', sans-serif;
  font-size: 2rem;
  line-height: .95;
  text-align: right;
  letter-spacing: -2px;
  margin: 0;
  width: 170px;
`;

interface Props {
  text: string;
}

const Heading = ({ text }: Props) => {
  return(
    <div>
      
      <StyledHeading>
        <Badge text="RAW" />
        {text}
        </StyledHeading>
    </div>
  );
}

export default Heading;
