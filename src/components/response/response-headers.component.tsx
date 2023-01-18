import Styled from 'styled-components';

const Container = Styled.div`
`;

const HeaderLine = Styled.div`
  border-bottom: 1px solid var(--gray);
  padding: 8px 0;
`;

interface Props {
  responseHeaders: {
    id: number;
    name: string;
    value: string;
  }[]
}

const ResponseHeaders = ({ responseHeaders }: Props) => {
  return(
      <Container>
        {responseHeaders.map((header: {id: number; name: string; value: string}) => 
          <HeaderLine key={header.id}>
            <strong>{header.name}</strong>: <span> {header.value}</span>
          </HeaderLine>
        )}
      </Container>
  )
}

export default ResponseHeaders;
