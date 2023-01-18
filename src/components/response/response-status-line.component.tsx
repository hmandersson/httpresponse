import Styled from 'styled-components';

const Line = Styled.div`
	padding: 8px 0;
  border-bottom: 1px solid var(--gray);
  font-weight: 700;
`;

const Circle = Styled.span`
	&:after {
    content: "⬤";
    margin-right: 5px;
  }
`;

interface Props {
	statusLine: {
		statusCode: string;
		statusPhrase: string;
		color: string;
	}
}

const StatusLine = ({ statusLine: {statusCode, statusPhrase, color } }: Props) => {

  console.log(statusCode)

  if (!statusCode || !statusPhrase){
    return null;
  }

  return(
    <Line>
      <Circle style={{'color': `${color}`}}/> 
      {statusCode} {statusPhrase}
    </Line>
  );
}

export default StatusLine;
