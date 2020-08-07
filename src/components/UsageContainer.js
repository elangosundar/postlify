import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 27%;
	z-index: 99;
  padding: 0.7rem 0.7rem;
  float: left;
  background-color: var(--bg-dark-color);
  color: var(--fg-light-color);
  margin-left: 8px;
  border-radius: 8px;

    .page-columns-right {
      flex: 1;
      flex-flow: column;
      padding: 10px;
      width: 100%;
    }

    @media screen and (max-width: 1093px) {
        width: 25%;
    }
    @media screen and (max-width: 1090px) {
        width: 25%;
    }
    @media screen and (max-width: 870px) {
        width: 85%;
    }
    @media screen and (max-width: 670px) {
        width: 85%;
    }
    @media screen and (max-width: 600px) {
        width: 85%;
    }
    @media screen and (max-width: 530px) {
        width: 85%;
    }
`;

const UsageContainer = () => {
  return (
    <Wrapper>
      <div className="page-columns-right">
        <label> Welcome to History Container page </label>
      </div>
    </Wrapper>
  );
}
 
export default UsageContainer;
