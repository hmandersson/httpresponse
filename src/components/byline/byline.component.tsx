import Styled from 'styled-components';

const StyledByline = Styled.div`
  color: white;
  width: 100%;
  text-align: center;
  line-height: 1.5;
`;

const StyledHr = Styled.hr`
  opacity: .3;
  margin-bottom: 10px;
`;

const Byline = () => {
  return(
    <StyledByline>
      <p><strong>Written by:</strong><br />
      Mikael Andersson<br />
      2023</p>
      <StyledHr />
      <p><strong>Tools used: </strong><br />
      Create React App<br />
      Styled Components</p>
    </StyledByline>
  );
}

export default Byline;