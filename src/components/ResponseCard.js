import React from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-solarized_dark";

import styled from "styled-components";

const ResponseWrapper = styled.div`
    background-color: var(--bg-dark-color);
    border-radius: 8px;

    .responseContainer {
        padding-left: 20px;
        width: 100%;
        padding-top: 18px;
        padding-bottom: 20px;
    }

    #api-response {
        border-radius: 10px;
        background-color: var(--bg-dark-color);
    }
`;

const ResponseCard = (data) => {
    const width = 650;
    const height = 380;

    return (
        <ResponseWrapper>
            <div className="responseContainer">
                <AceEditor
                    mode="json"
                    theme="solarized_dark"
                    name="api-response"
                    fontSize={14}
                    wrapEnabled={true}
                    wrap={true}
                    value={ JSON.stringify(data, null, 2) }
                    // height={`${width}`}
                    height={height}
                    readOnly={true}
                    // width={`${height}`}
                    width={width}
                    fixedWidthGutter={500}
                    setOptions={{
                        // enableBasicAutocompletion: true,
                        // enableLiveAutocompletion: true,
                        showLineNumbers: true,
                        tabSize: 2,
                        vScrollBarAlwaysVisible: true,
                        hScrollBarAlwaysVisible: true,
                        showInvisibles: true,
                        copyWithEmptySelection: true
                    }}
                />
            </div>
        </ResponseWrapper>
    );
}
 
export default ResponseCard;
