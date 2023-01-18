import Styled from 'styled-components';

const StyledBadge = Styled.span`
  font-size: 50%;
  display: inline-flex;
  background-color: var(--red);
  color: white;
  padding: 0 10px 0px 8px;
  border-radius: 5px;
  line-height: 1.2;
  transform: rotate(-6deg);
  vertical-align: super;
  margin-right: 5px;
  animation: fadein 1s;

  @keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

`;

interface Props {
  text: string;
}

const Badge = ({ text }: Props) => {
  return(
    <StyledBadge>{text}</StyledBadge>
  );
}

export default Badge;
