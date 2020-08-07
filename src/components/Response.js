import React from "react";
import styled from "styled-components";

import ResponseCard from './ResponseCard';

const ResponseWrapper = styled.div`
  background-color: var(--bg-dark-color);
  border-radius: 8px;

  .headers {
      background-color: var(--bg-dark-color);
      border-radius: 8px;
      margin: 5px;
      padding: 15px;
  }
`;

const Response = (res) => {
  const { data, status } = res.data; 
  const headers = res.data.headers ? JSON.stringify(res.data.headers, null, 2) : '';

  return (
    <ResponseWrapper>
      <label> Response for API Request </label>
      { status ?
        (
        <div className="output">
          <div>
            <label> Status </label>
            <input 
                type="text"
                name="status"
                readOnly="readOnly"
                className="resStatus"
                value={ status }
              />
          </div>

          { headers ? (
              <div>
              <label> Headers </label>
              <div className="headers"> { headers } </div>
            </div>
          ) : ''}

          <label> JSON Response </label>
          <ResponseCard data={ data } />
        </div>
        ) : null }
    </ResponseWrapper>
  );
}
 
export default Response;
