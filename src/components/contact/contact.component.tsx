import Styled from 'styled-components';

const StyledContact = Styled.h1`
  text-align: right;
`;

const StyledLogo = Styled.img`
  margin: 0 5px;
  &:hover {
    border-bottom: 4px solid var(--red);
    padding-bottom: 4px;
  }
`;

const Contact = () => {
  return(
    <StyledContact>
      
      <a href="https://www.linkedin.com/in/mikael-andersson-988b11111/"><StyledLogo src="https://cdnjs.cloudflare.com/ajax/libs/topcoat-icons/0.2.0/svg/linkedin.svg" width="30px" height="30px" alt="Linked In" /></a>
      <a href="mailto:majkel.andersson@gmail.com"><StyledLogo src="https://cdnjs.cloudflare.com/ajax/libs/topcoat-icons/0.2.0/svg/email.svg" width="30px" height="30px" alt="E-mail" /></a>
    </StyledContact>
  );
}

export default Contact;
