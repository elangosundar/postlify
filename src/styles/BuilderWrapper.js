import styled from "styled-components";

const BuilderWrapper = styled.div`
	display: block;
	justify-content: space-between;
	align-items: center;
	width: 64%;
	z-index: 99;
    padding: 0.7rem 0.7rem;
    float: left;
    background-color: var(--bg-dark-color);

ul {
    margin: 4px 0;
    padding: 0;
    list-style-type: none;
}

ul li {
    display: inline-flex;
    flex-flow: column nowrap;
    flex: 1;
    justify-content: center;
    float: left;
}

.page-columns {
    width: 100%;
}

.request {
    width: 100%;
    display: inline-block;
}

.response {
    text-align: left;
    margin: 5px;
    background-color: var(--bg-dark-color);
    color: var(--fg-color);
    font-family: Roboto Mono,monospace;
    border-radius: 8px;
}

.inner-response {
    padding: 15px;
    border-radius: 8px;
}

.output {
    margin-top: 12px;
}

.resStatus {
    border: none;
    width: calc(100% - 20px);
}

.method, code, input, kbd, pre, select, textarea {
    display: inline-flex;
    margin: 4px;
    padding: 8px;
    border-radius: 8px;
    background-color: var(--bg-dark-color);
    color: var(--fg-color);
    font-size: 16px;
    font-family: Roboto Mono,monospace;
    font-weight: 400;
    line-height: 1;
    user-select: text;
    width: calc(100% - 8px);
    resize: vertical;
    text-overflow: ellipsis;
    border-color: var(--fg-light-color);
}

button {
    align-items: center;
    justify-content: center;
    margin-top: 24px;
    padding: 6px 16px;
    border-radius: 8px;
    background-color: #473080;
    color: var(--act-color);
    font-size: 16px;
    font-family: Poppins,Roboto,Noto,sans-serif;
    font-weight: 700;
    transition: all .2s ease-in-out;
    fill: var(--act-color);
    cursor: pointer;
    border-color: var(--fg-light-color);
}

label {
    padding: 4px;
    color: var(--fg-light-color);
}

.method {
    width: 15%;
}

.apiUrl {
    width: 65%;
}

.send {
    width: 10%;
}

.urlInput {
    width: calc(100% - 20px);
}

.clear {
    clear: both;
}

@media screen and (max-width: 1093px) {
    width: 60%;
}
@media screen and (max-width: 1090px) {
    width: 60%;
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

export default BuilderWrapper;
