import Styled from 'styled-components';

const Textarea = Styled.textarea`
  border-color: var(--gray);
  border-radius: var(--border-radius);
  padding: 10px;
  box-sizing: border-box;
  resize: vertical;
  width: 100%;
  box-shadow:
  0.7px 0.7px 1.7px rgba(0, 0, 0, 0.022),
  1.7px 1.7px 4px rgba(0, 0, 0, 0.032),
  3.3px 3.3px 7.5px rgba(0, 0, 0, 0.04),
  5.8px 5.8px 13.4px rgba(0, 0, 0, 0.048),
  10.9px 10.9px 25.1px rgba(0, 0, 0, 0.058),
  26px 26px 60px rgba(0, 0, 0, 0.08)
;
`;

type Props = {
  rawResponse: string;
	onChangeHandler: (
		event: React.ClipboardEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLTextAreaElement>
	) => void;
};

const TextArea = ({ rawResponse, onChangeHandler }: Props) => {
	return(
		<Textarea name="rawHTTPResponse" rows={20} cols={50} value={rawResponse} onPaste={onChangeHandler} onChange={onChangeHandler} />
	)
}

export default TextArea;
