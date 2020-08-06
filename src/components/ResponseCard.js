import React from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-solarized_dark";

const ResponseCard = (data) => {
    const width = 650;
    const height = 350;
    return (
        <div>
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
    );
}
 
export default ResponseCard;
