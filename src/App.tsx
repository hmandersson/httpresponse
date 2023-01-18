import React from 'react';
import { useState } from 'react';
import './App.css';

// Utility functions
import filterHeaders    from './utils/filter-headers.utils';
import convertToObject  from './utils/convert-to-object.utils';
import createStatusLine from './utils/create-status-line.utils';

// Components
import InputArea        from './components/input-area/input-area.component';
import TextArea         from './components/form-elements/textarea.component';
import DisplayArea      from './components/display-area/display-area.components';
import StatusLine       from './components/response/response-status-line.component';
import ResponseHeader   from './components/response/response-headers.component';
import Heading          from './components/heading/heading.component';
import Contact          from './components/contact/contact.component';
import Byline           from './components/byline/byline.component';

function App() {

  const [keywords] = useState<Array<string>>([      
    'status code:', 
    'content-length:', 
    'content-type:', 
    'date:'
  ]);

  const [rawHTTPResponse, setRawHTTPResponse] = useState<string>('');
  const [statusLine, setStatusLine] = useState<{statusCode: string; statusPhrase: string; color: string;}>({statusCode: '', statusPhrase: '', color: ''});
  const [responseHeaders, setResponseHeaders] = useState<{id: number; name: string; value: string;}[]>([]);

  const handleChange = (
    event: 
    React.ClipboardEvent<HTMLTextAreaElement> | 
    React.ChangeEvent<HTMLTextAreaElement>
  ) => {

    const value = event.currentTarget.value;
    /** HTTP response lines ends with CRLF, split by linebreak */
    const array = value.split(/\r\n|\n|\r/);

    /** Status line always contains three spaces, 
    * split and extract the status code and status phrase */
    const status = array[0].split(' ');
    setStatusLine(createStatusLine(status));

    /** Filter out HTTP headers by {keywords} */
    const filteredHeaders = filterHeaders(array, keywords);

    /** Convert string to object for more structure */
    const headersObject = convertToObject(filteredHeaders);

    setRawHTTPResponse(value);
    setResponseHeaders(headersObject);
  }

  return (
    <main className='main'>
      
      <header>
        <Heading text='HTTP RESPONSE PARSER' />
        <Contact />
      </header>

      <section className='row'>
        <InputArea>
          <TextArea 
            rawResponse={rawHTTPResponse}
            onChangeHandler={handleChange}
          />
        </InputArea>
        <DisplayArea>
          <StatusLine statusLine={statusLine} />
          <ResponseHeader responseHeaders={responseHeaders} />
        </DisplayArea>
        <Byline />

      </section>
    </main>
  );
}

export default App;
