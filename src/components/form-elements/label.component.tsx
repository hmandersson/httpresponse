import Styled from 'styled-components';

const StyledLabel = Styled.label`
display: block;
font-weight: bold;
margin-bottom: 5px;
color: white;
`;

interface Props {
  text: string;
}

const Label = ({ text }: Props) => {
  return(
    <StyledLabel>{text}</StyledLabel>
  );
}

export default Label;