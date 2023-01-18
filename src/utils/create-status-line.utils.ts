import statusColor from "./status-color.utils";

const createStatusLine = (statusLine: string[]) => {
  const code = statusLine[1] || '';
  const phrase = statusLine[2] || '';
  const color = statusColor(code)
  return {
    statusCode: code, 
    statusPhrase: phrase, 
    color: color
  }
}

export default createStatusLine;